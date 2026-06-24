import { NextRequest, NextResponse } from "next/server";
import { appendCapture } from "@/lib/captureLedger";

const SITE_ORIGIN = "https://litigationsentinel.com";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer_first?: string;
  landing_page?: string;
  first_touch_at?: string;
}

/**
 * Three-layer law-firm suppression (reconciled plan C2 + CONTRARIAN-7 /
 * MECHANICS-VERIFIER-6 amendments). Rule: ALL law firms, defense AND
 * plaintiff AND BigLaw (feedback_no_defense_law_firms). Suppressed
 * submissions get the same courteous thank-you, are sink-written flagged
 * suppressed=law-firm, never notify, never queue.
 *
 * Layer 1: token heuristic on the email domain.
 * Layer 2: confirmed-overlay domain list, mirrored from the canonical COS
 *          seed at data/suppression/law-firm-domains.txt (2026-06-10). The
 *          heuristic alone misses the willkie/krcl class; this catches it.
 * Layer 3: unmatched suspects (tokens in the company name but not the
 *          domain) are NOT suppressed; the sink row carries
 *          suppression_review=true so downstream review catches them
 *          instead of a silent pass.
 */
const LAW_FIRM_TOKENS = ["law", "legal", "llp", "attorney", "attorneys", "injury", "firm"];

const LAW_FIRM_DOMAINS = new Set([
  // The 11 live-found Sentinel subscriber law-firm domains (2026-06-10 pull)
  "fmglaw.com",
  "roiglawyers.com",
  "johndaylegal.com",
  "jolissaintlaw.com",
  "florinroebig.com",
  "blackstonetrial.com",
  "krcl.com",
  "smithfreed.com",
  "willkie.com",
  "egenberg.com",
  "richardsonthomas.com",
  // Engaged-send filter lineage
  "lbbslaw.com",
  "hinshawlaw.com",
  "mgmlaw.com",
  // Derived from the defense-firm blocklist
  "tysonmendes.com",
  "lewisbrisbois.com",
  "wilsonelser.com",
  "grsm.com",
  "marshalldennehey.com",
  "mclane.com",
  "wfbm.com",
]);

function domainOf(email: string): string {
  return email.split("@")[1]?.toLowerCase().trim() || "";
}

function tokensMatch(value: string): boolean {
  const lowered = value.toLowerCase();
  // Token must appear as a word-ish segment, not buried inside an unrelated
  // word (so "lawrence.com" does not trip on "law" alone at the start of a
  // longer token... it does contain "law"; substring matching is the specced
  // heuristic and over-matching is the safe direction for suppression review).
  return LAW_FIRM_TOKENS.some((t) => lowered.includes(t));
}

function classifySuppression(
  email: string,
  company: string
): { suppressed: boolean; layer?: string; review: boolean } {
  const domain = domainOf(email);
  if (domain && tokensMatch(domain)) {
    return { suppressed: true, layer: "token-heuristic", review: false };
  }
  if (LAW_FIRM_DOMAINS.has(domain)) {
    return { suppressed: true, layer: "confirmed-overlay", review: false };
  }
  // Layer 3: suspect company name, unmatched domain. Flag for review,
  // never silently pass, never hard-suppress on a name alone.
  if (company && tokensMatch(company)) {
    return { suppressed: false, review: true };
  }
  return { suppressed: false, review: false };
}

/**
 * Durable sink write (Workstream D). Today the sink is the structured
 * function log (the same rail /api/track-event uses, per the D reconciled
 * plan: console rows in Vercel function logs until the A3 Upstash sink is
 * approved, at which point this one function swaps to LPUSH). Fail LOUD:
 * the caller returns 500 when this throws. The silent-success-and-drop
 * pattern is the named anti-pattern.
 */
function writeSink(event: string, payload: Record<string, unknown>): void {
  const row = JSON.stringify({ event, ts: new Date().toISOString(), ...payload });
  console.log(`[track-event] ${event} ${row}`);
}

/** Best-effort Resend notify to Wes. Never fails the submission; the sink
 * write is the durability guarantee. Failures are loud-logged. Sender is
 * the Resend sandbox (feedback_resend_rail_uses_onboarding_sandbox). */
async function notifyWes(payload: {
  name: string;
  email: string;
  company: string;
  message?: string;
  from?: string;
}): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    // WES-PROXY-3: env var absent means no notify wire. The page copy has
    // already cut the timing promise; this log line is the loud record.
    console.error("[DEMO_NOTIFY_SKIPPED] RESEND_API_KEY not configured; demo request rests in the sink only");
    return;
  }
  try {
    const lines = [
      `Demo request from ${payload.name} (${payload.email}), ${payload.company}.`,
      payload.from ? `Came from the article: ${payload.from}.` : "",
      payload.message ? `What prompted this: ${payload.message}` : "",
    ].filter(Boolean);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "wesley@caseglide.com",
        subject: `Sentinel demo request: ${payload.name}, ${payload.company}`,
        text: lines.join("\n\n"),
      }),
    });
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      console.error(`[DEMO_NOTIFY_ERROR] status=${res.status} ${errBody}`);
    } else {
      console.log(`[DEMO_NOTIFY_OK] ${payload.email}`);
    }
  } catch (err) {
    console.error("[DEMO_NOTIFY_ERROR]", err);
  }
}

/** Opt-in only (CONTRARIAN-1): fires ONLY when the visitor checked "Also
 * send me Sentinel weekly." Rides the normal subscribe path, welcome email
 * included, because the person explicitly asked for the newsletter.
 * Failure never fails the submission; loud-logged. */
async function beehiivOptIn(email: string, attribution: Attribution): Promise<void> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !pubId) {
    console.error("[DEMO_BEEHIIV_SKIPPED] Beehiiv env vars not configured; opt-in lost for", email);
    return;
  }
  try {
    const payload: Record<string, unknown> = {
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      referring_site: attribution.referrer_first || `${SITE_ORIGIN}/demo`,
      custom_fields: [{ name: "gate_type", value: "demo-opt-in" }],
    };
    for (const key of UTM_KEYS) {
      const value = attribution[key];
      if (typeof value === "string" && value) payload[key] = value;
    }
    const res = await fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      console.error(`[DEMO_BEEHIIV_ERROR] status=${res.status} email=${email}`, errBody);
    } else {
      console.log(`[DEMO_BEEHIIV_OK] email=${email}`);
    }
  } catch (err) {
    console.error("[DEMO_BEEHIIV_ERROR]", err);
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const from = typeof body.from === "string" ? body.from.trim() : "";
  const newsletterOptIn = body.newsletter_opt_in === true;
  const attribution: Attribution =
    body.attribution && typeof body.attribution === "object"
      ? (body.attribution as Attribution)
      : {};

  if (!name || !company || !email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Name, work email, and company are required" },
      { status: 400 }
    );
  }

  const suppression = classifySuppression(email, company);

  // Durable sink write, fail LOUD (500 on sink failure).
  try {
    writeSink("demo-request", {
      name,
      email,
      company,
      message: message || undefined,
      from: from || undefined,
      newsletter_opt_in: newsletterOptIn,
      ...(suppression.suppressed
        ? { suppressed: "law-firm", suppression_layer: suppression.layer }
        : {}),
      ...(suppression.review ? { suppression_review: true } : {}),
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
      referrer_first: attribution.referrer_first,
      landing_page: attribution.landing_page,
    });
  } catch (err) {
    console.error("[DEMO_SINK_ERROR]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  if (suppression.suppressed) {
    // Courteous generic thank-you. Never notify, never queue, no Beehiiv,
    // no ledger: a suppressed law firm is never a reportable hand-raiser.
    return NextResponse.json({ success: true });
  }

  await notifyWes({ name, email, company, message, from });

  if (newsletterOptIn) {
    await beehiivOptIn(email, attribution);
  }

  // Objective E (reporting only): record the hand-raiser on the durable
  // capture ledger so COS can report demo requests and flag warm inbound.
  // Best-effort, fail-soft, never changes the response. Demo requesters who
  // do NOT opt into the newsletter exist only here (Beehiiv never sees them).
  await appendCapture({
    email,
    tool: "demo-request",
    gate_type: newsletterOptIn ? "demo-opt-in" : "demo-request",
    ts: new Date().toISOString(),
    company: company || undefined,
    utm_source: attribution.utm_source,
    utm_campaign: attribution.utm_campaign,
    referrer_first: attribution.referrer_first,
  });

  return NextResponse.json({ success: true });
}
