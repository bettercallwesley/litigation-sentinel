"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";

interface BriefingCTAProps {
  delay?: number;
}

export default function BriefingCTA({ delay = 400 }: BriefingCTAProps) {
  return (
    <FadeIn delay={delay}>
      <a
        href="/briefing"
        style={{
          display: "block",
          margin: "32px 0",
          padding: "28px 24px",
          background: SENTINEL.bgDark,
          borderRadius: 14,
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          textDecoration: "none",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: 200,
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: SENTINEL.sentinelAccent,
              fontFamily: FONTS.sans,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            From the Editors
          </div>
          <h3
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: "#F1F3F7",
              margin: "0 0 8px",
              lineHeight: 1.35,
            }}
          >
            Where Does Your Litigation Department Stand?
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "#8B95A8",
              lineHeight: 1.65,
              margin: "0 0 16px",
              fontFamily: FONTS.sans,
              maxWidth: 480,
            }}
          >
            Take the 4-minute Litigation Intelligence Readiness Assessment. Six questions.
            Personalized results. A confidential look at what&apos;s possible.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              borderRadius: 8,
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: FONTS.sans,
            }}
          >
            Begin Assessment →
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
