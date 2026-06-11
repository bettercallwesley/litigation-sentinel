"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { useCountUp, useInViewOnce, useReducedMotion } from "./hooks";

// S1. THE ENVIRONMENT - four-tile stat strip with count-ups.
// All four figures from src/data/nuclear-verdicts.ts KEY_STATS.

interface Stat {
  target: number;
  format: (v: number) => string;
  label: string;
}

const STATS: Stat[] = [
  { target: 149, format: (v) => Math.round(v).toString(), label: "nuclear verdicts in 2025" },
  { target: 25.1, format: (v) => "$" + v.toFixed(1) + "B", label: "in damages" },
  { target: 46, format: (v) => "$" + Math.round(v) + "M", label: "median verdict" },
  { target: 239, format: (v) => "+" + Math.round(v) + "%", label: "frequency growth since 2020" },
];

function StatTile({ stat, active, reduced }: { stat: Stat; active: boolean; reduced: boolean }) {
  const value = useCountUp(stat.target, active, 1400, reduced);
  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderTop: `2px solid ${COLORS.gold}`,
        borderRadius: 12,
        padding: "26px 22px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "clamp(28px, 3.4vw, 40px)",
          fontWeight: 500,
          color: COLORS.textPrimary,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {stat.format(value)}
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 13,
          color: COLORS.textSecondary,
          marginTop: 8,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function SectionEnvironment() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section
      ref={ref}
      id="s1-environment"
      style={{ background: COLORS.midnight, padding: "88px 24px" }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <FadeIn>
          <div
            className="cvp-stat-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {STATS.map((s) => (
              <StatTile key={s.label} stat={s} active={inView} reduced={reduced} />
            ))}
          </div>
        </FadeIn>
        <p
          style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(20px, 2.6vw, 26px)",
            lineHeight: 1.45,
            color: COLORS.textPrimary,
            textAlign: "center",
            maxWidth: 720,
            margin: "44px auto 0",
          }}
        >
          {"One hundred forty-nine verdicts. Here is where they landed."}
        </p>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 13,
            lineHeight: 1.6,
            color: COLORS.textMuted,
            textAlign: "center",
            maxWidth: 720,
            margin: "32px auto 0",
          }}
        >
          {"Compiled by Litigation Sentinel from the Tyson & Mendes Nuclear Verdict Tracker and the Marathon Strategies Nuclear Verdict Report. Updated February 2026."}
        </p>
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: COLORS.textMuted,
            textAlign: "center",
            margin: "14px auto 0",
          }}
        >
          {"Nuclear Verdict is a registered trademark of Tyson & Mendes LLP."}
        </p>
      </div>
    </section>
  );
}
