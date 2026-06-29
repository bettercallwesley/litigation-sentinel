import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { appendCapture } from "@/lib/captureLedger";

/**
 * /api/briefing-complete — persist the Executive Briefing COMPLETION (Type 4) so the
 * COS cascade-mvp notifications reader can report and email it.
 *
 * Why this exists: the /briefing assessment fires a `briefing_complete` trackEvent
 * (analytics only) but never persisted the completion anywhere, so COS could never
 * report "X completed the Executive Briefing assessment". This writes a durable,
 * idempotent capture row (tool="briefing-completed") to the SAME Vercel Blob ledger
 * the assessment pipeline will extend — one mechanism, not two.
 *
 * It does NOT email Wes: the COS cascade run owns the notification email for this type
 * (single emailer, no double-send). This route only persists. Best-effort + fail-soft:
 * it always returns ok so a fire-and-forget client POST can never surface an error.
 * Idempotent: a repeat POST (the unseal fires this fire-and-forget; React strict-mode
 * and client retries double-fire) overwrites one deterministic blob, so COS sees ONE
 * completion and emails once.
 */
export const runtime = "nodejs";

function emailRef(email: string): string {
  return createHash("sha256").update(email.toLowerCase().trim()).digest("hex").slice(0, 12);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.toLowerCase().trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const company = typeof body.company === "string" ? body.company : undefined;
  const attribution = (body.attribution || {}) as Record<string, string>;

  // Persist idempotently. Never throw to the client: the unseal already succeeded; a
  // completion-ledger hiccup must not turn a successful unseal into a visible error.
  try {
    await appendCapture(
      {
        email,
        tool: "briefing-completed",
        gate_type: "briefing-completed",
        ts: new Date().toISOString(),
        company,
        utm_source: attribution.utm_source,
        utm_campaign: attribution.utm_campaign,
        referrer_first: attribution.referrer_first,
      },
      { idempotent: true }
    );
    console.log(`[BRIEFING_COMPLETE_OK] ref=${emailRef(email)}`);
  } catch (err) {
    console.error(
      "[BRIEFING_COMPLETE_ERROR]",
      err instanceof Error ? err.message : "error"
    );
  }

  return NextResponse.json({ ok: true });
}
