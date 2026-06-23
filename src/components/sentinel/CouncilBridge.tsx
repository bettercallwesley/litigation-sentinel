import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";

interface CouncilBridgeProps {
  slug: string;
}

/**
 * SCF Phase 2 end-card for the Council-process flagship
 * (build-litigation-intelligence-stack). NAMED EXCEPTION to the
 * one-hand-off-to-/briefing rule (genre spec sec. (c) + Codex 4): this article
 * is the Council-process story, so its single in-body hand-off goes to /council,
 * not /briefing. It is rendered INSTEAD OF the generic /briefing fallback for
 * this slug, so the article still owns exactly one hand-off.
 *
 * Cloned from BriefingBridge: same editorial card, hook-free so it renders into
 * the article's static HTML and survives the prerender. ?src=<slug> is the only
 * attribution carried; no analytics fires here by design (the /council surface
 * owns its own start event), mirroring BriefingBridge's no-double-fire contract.
 */
export default function CouncilBridge({ slug }: CouncilBridgeProps) {
  const href = `/council?src=${encodeURIComponent(slug)}`;

  return (
    <div
      style={{
        margin: "40px 0",
        padding: "32px 32px 28px",
        background: SENTINEL.sentinel,
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold seal rule, top */}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: "0.24em",
          color: SENTINEL.gold,
          marginBottom: 12,
        }}
      >
        THE ACTIVATION PROCESS
      </div>
      <h3
        style={{
          fontSize: "clamp(20px, 3.2vw, 26px)",
          fontFamily: FONTS.serif,
          fontWeight: 600,
          color: "#FFFFFF",
          lineHeight: 1.25,
          margin: "0 0 12px",
        }}
      >
        See the layer before you build it.
      </h3>
      <p
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.6,
          margin: "0 0 22px",
          fontFamily: FONTS.sans,
          maxWidth: 520,
        }}
      >
        Walk through the intelligence layer step by step, built on the data your
        systems already keep. No replacement, no rip-out. Just the process, from
        the data you have to the decisions it changes.
      </p>
      <a
        href={href}
        style={{
          display: "inline-block",
          padding: "12px 30px",
          background: SENTINEL.gold,
          color: SENTINEL.sentinel,
          fontSize: 14,
          fontWeight: 700,
          fontFamily: FONTS.sans,
          borderRadius: 7,
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}
      >
        Walk the process →
      </a>
    </div>
  );
}
