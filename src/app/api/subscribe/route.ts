import { NextRequest, NextResponse } from "next/server";

const SITE_ORIGIN = "https://litigationsentinel.com";

// Overwrite semantics (binding ruling, reconciled plan CONTRARIAN-8):
// source fields (utm_*, referrer_first, capture_page, referring_site) are
// write-once first-touch; engagement-state fields (gate_type) are last-touch.
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
    const { email, source, slug } = body;
    const attribution: Attribution =
      body.attribution && typeof body.attribution === "object" ? body.attribution : {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Structured log for monitoring (replaces Resend notification)
    console.log(`[NEW_SUBSCRIBER] ${email} | ${new Date().toISOString()}`);

    // Subscribe to Beehiiv newsletter (source of truth)
    const apiKey = process.env.BEEHIIV_API_KEY;
    const pubId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !pubId) {
      console.warn("Beehiiv not configured, BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID missing");
      return NextResponse.json({ success: true, message: "Subscribed (pending Beehiiv setup)" });
    }

    const capturePage =
      typeof slug === "string" && slug.startsWith("/") ? slug : attribution.landing_page || "/";
    const gateType = typeof source === "string" && source ? source : "subscribe";

    const skipSourceFields = await existingSourceFieldsPresent(apiKey, pubId, email);

    // Custom field names must match the D3-provisioned display strings exactly.
    const customFields: BeehiivCustomField[] = [];
    // gate_type is an engagement-state field: last-touch, always written.
    customFields.push({ name: "gate_type", value: gateType });
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
      // otherwise the page on our site where the capture happened.
      payload.referring_site = attribution.referrer_first || `${SITE_ORIGIN}${capturePage}`;
      for (const key of UTM_KEYS) {
        const value = attribution[key];
        if (typeof value === "string" && value) payload[key] = value;
      }
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Beehiiv API error:", res.status, errorData);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
