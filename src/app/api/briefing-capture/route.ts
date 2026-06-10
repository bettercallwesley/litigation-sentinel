import { NextRequest, NextResponse } from "next/server";

const SITE_ORIGIN = "https://litigationsentinel.com";

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

    // Structured log for monitoring (replaces Resend notification)
    let maturityLevel: number | null = null;
    const logData: Record<string, unknown> = { email };
    if (name) logData.name = name;
    if (title) logData.title = title;
    if (company) logData.company = company;
    if (source) logData.source = source;
    if (program) logData.program = program;
    if (answers) {
      const scores = Object.values(answers) as number[];
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      maturityLevel = Math.min(5, Math.max(1, Math.round(avg)));
      logData.maturityLevel = maturityLevel;
      logData.topGaps = Object.entries(answers)
        .map(([id, score]) => ({ label: QUESTION_LABELS[id] || id, score }))
        .sort((a, b) => (a.score as number) - (b.score as number))
        .slice(0, 3)
        .map((g) => `${g.label} (${g.score}/5)`)
        .join(", ");
    }
    console.log(`[BRIEFING_REQUEST] ${JSON.stringify(logData)} | ${new Date().toISOString()}`);

    // Subscribe to Beehiiv newsletter (source of truth)
    const beehiivKey = process.env.BEEHIIV_API_KEY;
    const beehiivPub = process.env.BEEHIIV_PUBLICATION_ID;

    if (beehiivKey && beehiivPub) {
      const capturePage = "/briefing";
      const gateType =
        typeof gate_type === "string" && gate_type
          ? gate_type
          : typeof source === "string" && source
            ? source
            : "briefing";

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
        const errBody = await beehiivRes.json().catch(() => ({}));
        console.error(`[BRIEFING_BEEHIIV_ERROR] status=${beehiivRes.status} email=${email}`, errBody);
      } else {
        console.log(`[BRIEFING_BEEHIIV_OK] email=${email}`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Briefing capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
