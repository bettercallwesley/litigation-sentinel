import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

/**
 * Durable event sink (Workstream P, item P2 / I5).
 *
 * The client `trackEvent` dual-writes: rail 1 is Vercel Web Analytics, rail 2 is
 * this endpoint. Until now rail 2 only console.logged, so COS could read events
 * only by scraping Vercel function logs (which it cannot). This appends every
 * event to Vercel Blob under the `events/` prefix using the SAME
 * BLOB_READ_WRITE_TOKEN the capture ledger uses (one store, two prefixes:
 * `capture-ledger/` for hand-raisers, `events/` for funnel telemetry).
 *
 * Fail-safe contract (matches captureLedger): a missing token logs a loud TODO
 * and the request still returns 200 — instrumentation must NEVER 500 the page
 * or change any user-facing behavior. A Blob write error is loud-logged and
 * swallowed for the same reason.
 *
 * Each event is its own immutable blob keyed by ISO timestamp + event name with
 * a random suffix, so COS reads the whole stream by listing the `events/` prefix.
 */
export const runtime = "nodejs";

const EVENTS_PREFIX = "events/";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const event = body.event;
  if (!event || typeof event !== "string") {
    return NextResponse.json({ error: "Event name required" }, { status: 400 });
  }

  // The client sends { event, data: {...props, ...sinkExtra} }. Flatten the data
  // bag so utm params, path, and email (when present) sit at the top level of
  // the durable row for COS.
  const data =
    body.data && typeof body.data === "object"
      ? (body.data as Record<string, unknown>)
      : {};

  const ts = new Date().toISOString();
  const pick = (k: string): string | undefined =>
    typeof data[k] === "string" ? (data[k] as string) : undefined;

  const row: Record<string, unknown> = {
    event,
    ts,
    // Path the event fired on. The client passes it as `page`; keep both names
    // so a reader can key on either.
    path: pick("page") ?? pick("path"),
    utm_source: pick("utm_source") ?? pick("src"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    utm_content: pick("utm_content"),
    utm_term: pick("utm_term"),
    // Email is only present on the sink rail (overflow), never on the analytics
    // rail — retained here so COS can join a funnel event to a hand-raiser.
    email: pick("email"),
    // Keep the full original data bag so nothing computed is silently dropped.
    data,
  };

  // Always keep the log line: it is the loud record when the token is absent and
  // a cheap trace when it is present.
  console.log(`[track-event] ${event}`, JSON.stringify({ event, data }));

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error(
      `[EVENT_SINK_TODO] BLOB_READ_WRITE_TOKEN absent; event=${event} not durably recorded. Provision a Vercel Blob store to enable.`
    );
    return NextResponse.json({ success: true });
  }

  try {
    const safeEvent = event.replace(/[^a-z0-9_-]/gi, "_").slice(0, 40);
    const key = `${EVENTS_PREFIX}${ts}__${safeEvent}.json`;
    await put(key, JSON.stringify(row), {
      access: "public",
      addRandomSuffix: true,
      contentType: "application/json",
      token,
    });
    console.log(`[EVENT_SINK_OK] event=${event}`);
  } catch (err) {
    // Fail-soft: an event-sink error must never touch the response path.
    console.error(
      "[EVENT_SINK_ERROR]",
      err instanceof Error ? err.message : "error"
    );
  }

  return NextResponse.json({ success: true });
}
