import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { put } from "@vercel/blob";
import {
  computeAssessmentResult,
  captureAssessmentResult,
  assessmentPrereqsPresent,
  type AssessmentResult,
} from "@/lib/assessmentCapture";
import { signResultsToken } from "@/lib/resultsToken";

const SITE_ORIGIN = "https://www.litigationsentinel.com";

/**
 * Truncated SHA-256 of the email, used as a non-reversible correlation key in
 * logs. Lets us trace one visitor's events across log lines without ever
 * writing their email, name, title, or company to disk (Codex security pass,
 * 2026-06-23). No new dependency: node:crypto is built in.
 */
function emailRef(email: string): string {
  return createHash("sha256").update(email.toLowerCase().trim()).digest("hex").slice(0, 12);
}

const QUESTION_LABELS: Record<string, string> = {
  open_visibility: "Open Case Visibility",
  open_intervention: "Intervention & Settlement Readiness",
  closed_outcomes: "Outcome Measurement",
  attorney_value: "Attorney Performance & Selection",
  ai_insight: "On-Demand Intelligence",
  data_capture: "Data Foundation",
};

// Overwrite semantics (binding ruling, reconciled plan CONTRARIAN-8):
// source fields (utm_*, referrer_first, capture_page, referring_site) are
// write-once first-touch; engagement-state fields (maturity_level, program,
// company, title, gate_type) are last-touch and may overwrite.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const SOURCE_CUSTOM_FIELDS = ["capture_page", "referrer_first"] as const;

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

interface BeehiivCustomField {
  name: string;
  value: string;
}

/**
 * Three-layer law-firm suppression, cloned from /api/demo-request (reconciled
 * spec E1: suppression travels with every notify wire). Rule: ALL law firms,
 * defense AND plaintiff AND BigLaw. Suppressed schedule requests get the same
 * courteous success, never notify.
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
  if (company && tokensMatch(company)) {
    return { suppressed: false, review: true };
  }
  return { suppressed: false, review: false };
}

/** Best-effort Resend notify to Wes for schedule-a-briefing requests
 * (gate_type=schedule-modal). Cloned from /api/demo-request. Never fails the
 * submission; failures are loud-logged. Sender is the Resend sandbox. */
async function notifyWes(payload: {
  name?: string;
  email: string;
  company?: string;
  title?: string;
  maturityLevel: number | null;
  topGaps?: string;
}): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error(
      "[BRIEFING_NOTIFY_SKIPPED] RESEND_API_KEY not configured; schedule request rests in the log only"
    );
    return;
  }
  try {
    const who = [payload.name, payload.title, payload.company].filter(Boolean).join(", ");
    const lines = [
      `Briefing schedule request from ${who || "an unnamed visitor"} (${payload.email}).`,
      payload.maturityLevel !== null
        ? `Assessment maturity level: ${payload.maturityLevel}/5.`
        : "",
      payload.topGaps ? `Top gaps: ${payload.topGaps}.` : "",
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
        subject: `Sentinel briefing request: ${payload.name || payload.email}${payload.company ? `, ${payload.company}` : ""}`,
        text: lines.join("\n\n"),
      }),
    });
    if (!res.ok) {
      // Do not log the Resend error body: it can echo the to/subject (name +
      // email). Status only.
      console.error(`[BRIEFING_NOTIFY_ERROR] status=${res.status}`);
    } else {
      console.log(`[BRIEFING_NOTIFY_OK] ref=${emailRef(payload.email)}`);
    }
  } catch (err) {
    console.error("[BRIEFING_NOTIFY_ERROR]", err instanceof Error ? err.message : "error");
  }
}

/**
 * Business-alert notify to Wes for a COMPLETED executive assessment. Unlike the
 * schedule-modal notifyWes above (best-effort, fail-soft), this is durable: if
 * Resend is absent or fails, it writes a pending-alert blob
 * (assessment-alerts/{captured_at}.json) so a COS retry can pick it up. The
 * assessment record is already stored by the time this runs, so a notify
 * failure never 500s: the completion is safe and COS also discovers it via the
 * blob list. The email carries the business facts only (no CLI, no deploy
 * state, no file paths, no HTTP codes). Returns true when Resend accepted.
 */
async function notifyWesAssessment(result: AssessmentResult, token: string): Promise<boolean> {
  const enc = encodeURIComponent(result.email);
  const resultsUrl = `${SITE_ORIGIN}/results/${token}?email=${enc}`;
  const scoreLine = (Object.entries(result.answers) as [string, number][])
    .map(([k, v]) => `  ${QUESTION_LABELS[k] || k}: ${v}/5`)
    .join("\n");
  const pillarLine = Object.entries(result.pillar_scores)
    .map(([k, v]) => `${k} ${v}/5`)
    .join(", ");
  const weakest = result.weakest_dims.map((d) => QUESTION_LABELS[d] || d).join(", ");
  const emailBody = [
    `New Litigation Sentinel assessment completed by ${result.email}.`,
    `Completed: ${result.captured_at}`,
    `Maturity level: ${result.maturity_level}/5`,
    "",
    "Scores:",
    scoreLine,
    "",
    `Pillars: ${pillarLine}`,
    `Weakest areas: ${weakest}`,
    "",
    `Their results page: ${resultsUrl}`,
  ].join("\n");

  const writePendingAlert = async (reason: string) => {
    try {
      const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
      if (!blobToken) return;
      await put(
        `assessment-alerts/${result.captured_at}.json`,
        JSON.stringify({
          reason,
          result,
          resultsUrl,
          created_at: new Date().toISOString(),
        }),
        {
          access: "public",
          addRandomSuffix: false,
          allowOverwrite: true,
          contentType: "application/json",
          token: blobToken,
        }
      );
      console.error(`[ASSESSMENT_NOTIFY_PENDING] durable pending-alert written reason=${reason}`);
    } catch (err) {
      console.error(
        "[ASSESSMENT_NOTIFY_PENDING_ERROR]",
        err instanceof Error ? err.message : "error"
      );
    }
  };

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    await writePendingAlert("resend_key_absent");
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "wesley@caseglide.com",
        subject: `Sentinel assessment completed: ${result.email} (level ${result.maturity_level}/5)`,
        text: emailBody,
      }),
    });
    if (!res.ok) {
      await writePendingAlert(`resend_status_${res.status}`);
      console.error(`[ASSESSMENT_NOTIFY_ERROR] status=${res.status}`);
      return false;
    }
    console.log(`[ASSESSMENT_NOTIFY_OK] ref=${emailRef(result.email)}`);
    return true;
  } catch (err) {
    await writePendingAlert("resend_threw");
    console.error("[ASSESSMENT_NOTIFY_ERROR]", err instanceof Error ? err.message : "error");
    return false;
  }
}

/**
 * Read-before-write: returns true when the subscriber already exists with
 * non-empty source fields, in which case source fields are omitted from the
 * POST (write-once first-touch). Returns false on 404 (new subscriber) or any
 * read failure (default to writing; most captures are first-touch).
 */
async function existingSourceFieldsPresent(
  apiKey: string,
  pubId: string,
  email: string
): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions/by_email/${encodeURIComponent(
        email
      )}?expand[]=custom_fields`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    if (!res.ok) return false;
    const json = await res.json().catch(() => null);
    const sub = json?.data;
    if (!sub) return false;
    if (typeof sub.utm_source === "string" && sub.utm_source.length > 0) return true;
    const customFields: BeehiivCustomField[] = Array.isArray(sub.custom_fields)
      ? sub.custom_fields
      : [];
    return customFields.some(
      (f) =>
        (SOURCE_CUSTOM_FIELDS as readonly string[]).includes(f?.name) &&
        typeof f?.value === "string" &&
        f.value.length > 0
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, title, company, source, program, answers, gate_type } = body;
    const attribution: Attribution =
      body.attribution && typeof body.attribution === "object" ? body.attribution : {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // topGaps is computed for the Resend notify to Wes (a private inbox, not a
    // log). It is never written to the structured log below.
    let maturityLevel: number | null = null;
    let topGaps = "";
    if (answers) {
      const scores = Object.values(answers) as number[];
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      maturityLevel = Math.min(5, Math.max(1, Math.round(avg)));
      topGaps = Object.entries(answers)
        .map(([id, score]) => ({ label: QUESTION_LABELS[id] || id, score }))
        .sort((a, b) => (a.score as number) - (b.score as number))
        .slice(0, 3)
        .map((g) => `${g.label} (${g.score}/5)`)
        .join(", ");
    }

    // PII-redacted structured log (Codex security pass, 2026-06-23): only the
    // non-reversible email ref + non-PII operational fields. No email, name,
    // title, company, or topGaps reach the log.
    const ref = emailRef(email);
    const logData: Record<string, unknown> = { ref };
    if (typeof gate_type === "string" && gate_type) logData.gate_type = gate_type;
    if (typeof source === "string" && source) logData.source = source;
    if (typeof program === "string" && program) logData.program = program;
    if (maturityLevel !== null) logData.maturityLevel = maturityLevel;
    console.log(`[BRIEFING_REQUEST] ${JSON.stringify(logData)} | ${new Date().toISOString()}`);

    // Subscribe to Beehiiv newsletter (source of truth)
    const beehiivKey = process.env.BEEHIIV_API_KEY;
    const beehiivPub = process.env.BEEHIIV_PUBLICATION_ID;

    // Loud-500 parity with /api/subscribe: missing env is a loud 500 in EVERY
    // environment, production included. A silent success here drops the
    // subscriber while the client unseals the gate, which is a fake gate with
    // extra steps.
    if (!beehiivKey || !beehiivPub) {
      console.error(
        "BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID missing. Refusing silent subscriber drop."
      );
      return NextResponse.json(
        { error: "Subscription service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const gateType =
      typeof gate_type === "string" && gate_type
        ? gate_type
        : typeof source === "string" && source
          ? source
          : "briefing";

    // Assessment-results: durable per-completion capture is a HARD prerequisite,
    // enforced BEFORE any Beehiiv write or 200. This is the fix for the original
    // fail-soft bug that silently discarded a prospect's per-dimension results.
    // Both the Blob store and the HMAC secret are prerequisites for a complete,
    // linkable deliverable, so a missing either is a loud 500 here.
    let assessmentResult: AssessmentResult | null = null;
    let resultsToken = "";
    if (gateType === "assessment-results") {
      if (!assessmentPrereqsPresent()) {
        console.error(
          `[ASSESSMENT_CAPTURE_FATAL] durable store or signing secret absent; refusing silent result drop ref=${ref}`
        );
        return NextResponse.json(
          { error: "Results service is not configured. Please try again later." },
          { status: 500 }
        );
      }
      if (!answers || typeof answers !== "object") {
        return NextResponse.json({ error: "Assessment answers required" }, { status: 400 });
      }
      assessmentResult = computeAssessmentResult(
        email,
        answers,
        attribution as Record<string, unknown>
      );
      const stored = await captureAssessmentResult(assessmentResult);
      if (!stored) {
        console.error(`[ASSESSMENT_CAPTURE_FATAL] durable store write failed ref=${ref}`);
        return NextResponse.json(
          { error: "We could not save your results. Please try again." },
          { status: 500 }
        );
      }
      resultsToken = signResultsToken(email);
    }

    {
      const capturePage = "/briefing";

      const skipSourceFields = await existingSourceFieldsPresent(beehiivKey, beehiivPub, email);

      // Custom field names must match the D3-provisioned display strings exactly.
      // Engagement-state fields: last-touch, always written when present.
      const customFields: BeehiivCustomField[] = [];
      customFields.push({ name: "gate_type", value: gateType });
      if (maturityLevel !== null) {
        customFields.push({ name: "maturity_level", value: String(maturityLevel) });
      }
      if (typeof program === "string" && program) {
        customFields.push({ name: "program", value: program });
      }
      if (typeof company === "string" && company) {
        customFields.push({ name: "company", value: company });
      }
      if (typeof title === "string" && title) {
        customFields.push({ name: "title", value: title });
      }
      if (!skipSourceFields) {
        customFields.push({ name: "capture_page", value: capturePage });
        if (attribution.referrer_first) {
          customFields.push({ name: "referrer_first", value: attribution.referrer_first });
        }
      }

      const payload: Record<string, unknown> = {
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        custom_fields: customFields,
      };

      if (!skipSourceFields) {
        // Real referring site: the external referrer when we captured one,
        // otherwise the briefing page on our site.
        payload.referring_site =
          attribution.referrer_first ||
          `${SITE_ORIGIN}${capturePage}${program ? `?program=${program}` : ""}`;
        for (const key of UTM_KEYS) {
          const value = attribution[key];
          if (typeof value === "string" && value) payload[key] = value;
        }
      }

      const beehiivRes = await fetch(
        `https://api.beehiiv.com/v2/publications/${beehiivPub}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${beehiivKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!beehiivRes.ok) {
        // Drain and discard the body: Beehiiv error JSON can echo the email.
        // Log status + non-reversible ref only.
        await beehiivRes.json().catch(() => ({}));
        console.error(`[BRIEFING_BEEHIIV_ERROR] status=${beehiivRes.status} ref=${ref}`);
      } else {
        console.log(`[BRIEFING_BEEHIIV_OK] ref=${ref}`);
      }
    }

    // Schedule-a-briefing terminates on the Resend notify path (reconciled
    // spec E1: ScheduleModal as sole terminal is forbidden). Suppression
    // travels with the notify wire: law firms never reach Wes's inbox.
    if (gateType === "schedule-modal") {
      const suppression = classifySuppression(email, typeof company === "string" ? company : "");
      if (suppression.suppressed) {
        console.log(
          `[BRIEFING_NOTIFY_SUPPRESSED] ref=${ref} layer=${suppression.layer}`
        );
      } else {
        if (suppression.review) {
          console.log(`[BRIEFING_NOTIFY_REVIEW] suppression_review=true ref=${ref}`);
        }
        await notifyWes({
          name: typeof name === "string" ? name : undefined,
          email,
          company: typeof company === "string" ? company : undefined,
          title: typeof title === "string" ? title : undefined,
          maturityLevel,
          topGaps: topGaps || undefined,
        });
      }
    }

    // Assessment-results notify: business alert to Wes with the results link.
    // Durable (writes a pending-alert blob on failure) but never 500s: the
    // record is already stored above, so the completion is safe regardless.
    if (gateType === "assessment-results" && assessmentResult) {
      await notifyWesAssessment(assessmentResult, resultsToken);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    // Log the message only, never the raw error/request body (may carry PII).
    console.error("Briefing capture error:", err instanceof Error ? err.message : "error");
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
