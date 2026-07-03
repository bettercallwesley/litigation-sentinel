"use client";

import React, { useEffect } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { trackEvent, type SentinelEvent } from "@/lib/track";

/**
 * B1 (council-redirected) subscribe-success forward chain.
 *
 * Replaces the dead-end "You're in" with two next steps that keep a fresh
 * subscriber moving into the public funnel. It deliberately points ONLY at
 * public-by-design surfaces — the Command Center stays unlisted, so it is never
 * linked here.
 *
 *   1. /briefing?src=subscribe-success — "See where your desk sits on the
 *      national curve"
 *   2. /nuclear-verdicts?src=subscribe-success — the live verdicts dashboard
 *
 * Fires trackEvent on render (the view) and on each click. trackEvent is durable
 * as of P2 (the /api/track-event sink appends to Vercel Blob), so COS can read
 * how many subscribers advanced and where.
 */
export default function SubscribeSuccessCTAs({ surface }: { surface: string }) {
  useEffect(() => {
    // View event: the success state rendered.
    trackEvent("subscribe_success_view", { surface });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cta = (href: string, event: SentinelEvent, title: string, sub: string) => (
    <a
      href={href}
      onClick={() => trackEvent(event, { surface })}
      style={{
        display: "block",
        padding: "14px 16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 10,
        textDecoration: "none",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: SENTINEL.sentinel,
          fontFamily: FONTS.sans,
          marginBottom: 3,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 11,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          lineHeight: 1.5,
        }}
      >
        {sub}
      </div>
    </a>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 10,
        marginTop: 18,
        textAlign: "left",
      }}
    >
      {cta(
        "/briefing?src=subscribe-success",
        "subscribe_success_briefing_click",
        "See where your desk sits on the national curve",
        "Six questions, then your file, scored against the nuclear-verdict trend."
      )}
      {cta(
        "/nuclear-verdicts?src=subscribe-success",
        "subscribe_success_nuclear_click",
        "Explore the nuclear verdicts dashboard",
        "Every state, the biggest verdicts, and where the pressure is climbing."
      )}
    </div>
  );
}
