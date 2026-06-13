"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

interface BriefingBridgeProps {
  slug: string;
}

/**
 * E1b end-card: the reader just finished a file on someone else; this hands
 * them their own. Links to /briefing?src=<slug> so briefing_start fires with
 * the surface prop (the briefing page owns that event; this component fires
 * nothing, by design, to avoid a double-fire at the article). Light editorial
 * theme: it lives inside the publication. Mounted only on the 3 pilot franchise
 * articles, preserving the per-lever counterfactual.
 */
export default function BriefingBridge({ slug }: BriefingBridgeProps) {
  const searchParams = useSearchParams();

  const params = new URLSearchParams({ src: slug });
  for (const key of UTM_KEYS) {
    const value = searchParams?.get(key);
    if (value) params.set(key, value);
  }
  const href = `/briefing?${params.toString()}`;

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
        THE EXECUTIVE BRIEFING
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
        You just read one file. Now open yours.
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
        Six questions score your legal department against the same national
        nuclear-verdict curve, dimension by dimension. The breakdown stays sealed
        until you unseal it.
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
        Open your file →
      </a>
    </div>
  );
}
