"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { useCountUp, useInViewOnce, useReducedMotion } from "./hooks";

// S0. THE VERDICT - full-viewport opener with the $831,000,000 count-up.

export default function SectionVerdict() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.2);
  const value = useCountUp(831000000, inView, 1800, reduced);
  const done = value >= 831000000;

  const formatted = "$" + Math.round(value).toLocaleString("en-US");

  return (
    <section
      ref={ref}
      id="s0-verdict"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "96px 24px 64px",
        background: `linear-gradient(180deg, #000000 0%, ${COLORS.midnight} 70%)`,
      }}
    >
      <FadeIn>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: "0.22em",
            color: COLORS.gold,
            marginBottom: 28,
          }}
        >
          {"BEXAR COUNTY, TEXAS. JUNE 2025."}
        </div>
      </FadeIn>

      <div
        aria-label="$831,000,000"
        style={{
          fontFamily: FONTS.mono,
          fontWeight: 500,
          fontSize: "clamp(34px, 7.5vw, 84px)",
          lineHeight: 1.05,
          color: COLORS.textPrimary,
          borderBottom: done ? `1px solid ${COLORS.gold}` : "1px solid transparent",
          paddingBottom: 10,
          transition: "border-color 0.4s ease",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {formatted}
      </div>

      <FadeIn delay={300}>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontWeight: 600,
            fontSize: "clamp(30px, 4.4vw, 56px)",
            lineHeight: 1.15,
            color: COLORS.textPrimary,
            maxWidth: 880,
            margin: "44px auto 0",
          }}
        >
          {"Mendez v. Koozies Icehouse. A bar over-served one customer. The jury answered with $831 million."}
        </h1>
      </FadeIn>

      <FadeIn delay={500}>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 20,
            lineHeight: 1.55,
            color: COLORS.textSecondary,
            maxWidth: 680,
            margin: "28px auto 0",
          }}
        >
          {"Most people think nuclear verdicts come from bad facts. They don't. They come from bad timing."}
        </p>
      </FadeIn>

      <FadeIn delay={700}>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 16,
            lineHeight: 1.6,
            color: COLORS.textSecondary,
            maxWidth: 620,
            margin: "20px auto 0",
          }}
        >
          {"Every verdict on the map below started as a case someone called defensible. The file that becomes your verdict is open right now. It looks like an email."}
        </p>
      </FadeIn>

      <FadeIn delay={1000}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: "0.18em",
            color: COLORS.textMuted,
            marginTop: 64,
          }}
        >
          {"SCROLL. THE FILE IS BELOW."}
        </div>
      </FadeIn>
    </section>
  );
}
