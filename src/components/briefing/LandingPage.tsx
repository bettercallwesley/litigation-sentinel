"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideWordmark, FadeIn, Button } from "@/components/design-system";
import { NATIONAL_TRENDS } from "@/data/nuclear-verdicts";
import { useCountUp, useInViewOnce, useReducedMotion } from "@/lib/interactive";

interface LandingPageProps {
  onStart: () => void;
  onSchedule: () => void;
}

// Verdict-forward hero (2026-06-23 rebuild). Clones SectionVerdict's count-up
// opener so value lands before the page asks anything: the $831M Mendez verdict
// counts up, then the curve it sits on, then the promise. The old "Readiness
// Assessment" splash is gone.

const VERDICT = 831000000;

function VerdictNumber() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.2);
  const value = useCountUp(VERDICT, inView, 1800, reduced);
  const done = value >= VERDICT - 1;
  const formatted = "$" + Math.round(value).toLocaleString("en-US");
  return (
    <div
      ref={ref}
      aria-label="$831,000,000"
      style={{
        fontFamily: FONTS.mono,
        fontWeight: 500,
        fontSize: "clamp(30px, 7vw, 76px)",
        lineHeight: 1.05,
        color: COLORS.textPrimary,
        borderBottom: done ? `1px solid ${COLORS.gold}` : "1px solid transparent",
        paddingBottom: 10,
        margin: "20px auto 0",
        display: "inline-block",
        transition: "border-color 0.4s ease",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {formatted}
    </div>
  );
}

function CurveMicroChart() {
  const first = NATIONAL_TRENDS[0];
  const last = NATIONAL_TRENDS[NATIONAL_TRENDS.length - 1];
  const max = Math.max(...NATIONAL_TRENDS.map((t) => t.totalVerdicts));
  const W = 100;
  const H = 30;
  const points = NATIONAL_TRENDS.map((t, i) => {
    const x = (i / (NATIONAL_TRENDS.length - 1)) * W;
    const y = H - (t.totalVerdicts / max) * H;
    return `${x},${y}`;
  }).join(" ");
  const lastY = H - (last.totalVerdicts / max) * H;

  return (
    <div
      style={{
        marginTop: 36,
        padding: "18px 20px",
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
        maxWidth: 460,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <svg
        viewBox={`-2 -4 ${W + 12} ${H + 10}`}
        style={{ width: "100%", height: "auto", maxHeight: 84 }}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Nuclear verdicts climbed from ${first.totalVerdicts} in ${first.year} to ${last.totalVerdicts} in ${last.year}`}
      >
        <polyline
          points={points}
          fill="none"
          stroke={COLORS.rose}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={W} cy={lastY} r={2.6} fill="none" stroke={COLORS.gold} strokeWidth={1.1} />
        <circle cx={W} cy={lastY} r={1.2} fill={COLORS.gold} />
      </svg>
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 15,
          fontWeight: 600,
          color: COLORS.textPrimary,
          lineHeight: 1.35,
          marginTop: 10,
        }}
      >
        {`Nuclear verdicts climbed from ${first.totalVerdicts} in ${first.year} to ${last.totalVerdicts} in ${last.year}.`}
      </div>
    </div>
  );
}

export default function LandingPage({ onStart, onSchedule }: LandingPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "72px 24px 56px",
        position: "relative",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "18%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "16%",
          right: "14%",
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: 720, width: "100%" }}>
        <FadeIn>
          <div
            style={{
              marginBottom: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CaseGlideWordmark size={40} />
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: COLORS.gold,
              marginBottom: 6,
            }}
          >
            {"BEXAR COUNTY, TEXAS. JUNE 2025."}
          </div>
        </FadeIn>

        <VerdictNumber />

        <FadeIn delay={300}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(26px, 4.2vw, 46px)",
              lineHeight: 1.18,
              color: COLORS.textPrimary,
              maxWidth: 660,
              margin: "32px auto 0",
            }}
          >
            {"Mendez v. Koozies Icehouse. A bar over-served one customer. The jury answered with $831 million."}
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 18,
              lineHeight: 1.55,
              color: COLORS.textSecondary,
              maxWidth: 560,
              margin: "22px auto 0",
            }}
          >
            {"Most people think nuclear verdicts come from bad facts. They do not. They come from bad timing."}
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <CurveMicroChart />
        </FadeIn>

        <FadeIn delay={850}>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              lineHeight: 1.65,
              color: COLORS.textSecondary,
              maxWidth: 600,
              margin: "32px auto 0",
            }}
          >
            {"This briefing scores one thing: whether your desk can see the file that becomes the verdict while it is still an email. Five questions. Two minutes. Your position on this curve at the end."}
          </p>
        </FadeIn>

        <FadeIn delay={1000}>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" onClick={onStart}>
              Begin Assessment →
            </Button>
            <Button variant="ghost" onClick={onSchedule}>
              Schedule Briefing
            </Button>
          </div>

          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 13,
              lineHeight: 1.6,
              color: COLORS.textMuted,
              maxWidth: 580,
              margin: "28px auto 0",
            }}
          >
            {"A private, five-question assessment of how your legal department gathers, views, and acts on litigation data, scored against the national nuclear-verdict curve. Encrypted in transit over HTTPS, processed only by CaseGlide and our email and CRM providers, never sold."}
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 28,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["Five questions", "Encrypted in transit", "Never sold"].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: COLORS.textMuted,
                  fontSize: 13,
                  fontFamily: FONTS.sans,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: COLORS.accent,
                    opacity: 0.5,
                  }}
                />
                {t}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
