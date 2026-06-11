import { track as vercelTrack } from "@vercel/analytics";

/**
 * D5: dual-write event instrumentation.
 *
 * One call writes the event to BOTH rails:
 *   1. Vercel Web Analytics via track()
 *   2. POST of the identical payload to /api/track-event (the durable sink path)
 *
 * HARD constraint: maximum 2 custom-data properties per Vercel event on the
 * current plan (plain Pro). Anything beyond 2 properties goes ONLY in the sink
 * payload via `sinkExtra`, never to track().
 */

export type SentinelEvent =
  | "subscribe_submit"
  | "gate_view"
  | "gate_unlock"
  | "briefing_start"
  | "briefing_complete"
  | "demo_click"
  | "demo_request"
  | "upgrade_click"
  | "exit_view"
  | "exit_submit";

type EventProps = Record<string, string | number | boolean>;

export function trackEvent(
  event: SentinelEvent,
  props?: EventProps,
  sinkExtra?: Record<string, unknown>
): void {
  // Rail 1: Vercel Web Analytics. Max 2 properties; never pass sinkExtra here.
  try {
    vercelTrack(event, props);
  } catch {
    // Analytics unavailable (blocked, SSR edge case). The sink still records.
  }

  // Rail 2: identical payload to the sink endpoint, plus overflow properties.
  if (typeof fetch !== "undefined") {
    fetch("/api/track-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, data: { ...props, ...sinkExtra } }),
    }).catch(() => {});
  }
}
