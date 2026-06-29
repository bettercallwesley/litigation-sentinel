"use client";

// E1 flagship rebuild (reconciled spec, EXPERIENCE 1, 2026-06-11; verdict
// dossier + gate-integrity upgrade 2026-06-23).
// Score reveal clones SectionVerdict's opener. The gate is a sealed-case-file
// treatment: a redacted skeleton renders behind a blur with a SEALED stamp, and
// the email field is the unsealing action. The real dimension-by-dimension
// dossier only enters the DOM after the file is unsealed, so the seal is
// enforced by what renders, not by a cosmetic blur.

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { COLORS, FONTS, MATURITY_LEVELS } from "@/components/design-system/tokens";
import { CaseGlideLogo, FadeIn } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";
import { NATIONAL_TRENDS } from "@/data/nuclear-verdicts";
import {
  VERDICT_MATURITY,
  DOSSIER_CONSEQUENCE,
  PILLAR_DOSSIER_LABEL,
  bandFor,
  synthesisLine,
} from "@/data/briefing-copy";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";
import {
  useCountUp,
  useInViewOnce,
  useReducedMotion,
} from "@/lib/interactive";

interface ResultsPageProps {
  answers: Record<string, number>;
  src: string;
  onSchedule: () => void;
  onEmailCaptured?: (email: string) => void;
}

const PILLAR_LABELS: Record<string, string> = {
  docket: "OPEN DOCKET VISIBILITY",
  precedent: "OUTCOME PRECEDENT",
  ai: "ON-DEMAND INTELLIGENCE",
};

const PILLAR_ORDER = ["docket", "precedent", "ai"];

interface DossierEntry {
  pillar: string;
  level: number;
}

// ─── Score reveal: full-viewport band, SectionVerdict clone ──────────────────

function ScoreReveal({
  avgScore,
  maturityLevel,
  weakestPillar,
}: {
  avgScore: number;
  maturityLevel: number;
  weakestPillar: string;
}) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.2);
  const value = useCountUp(avgScore, inView, 1800, reduced);
  const done = value >= avgScore - 0.001;
  const verdict = VERDICT_MATURITY[maturityLevel];

  return (
    <section
      ref={ref}
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
          {`LITIGATION INTELLIGENCE FILE. PRESSURE POINT: ${weakestPillar}.`}
        </div>
      </FadeIn>

      <div
        aria-label={`${avgScore.toFixed(1)} out of 5.0`}
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
        {value.toFixed(1)}
        <span
          style={{
            fontSize: "0.4em",
            color: COLORS.textMuted,
            fontWeight: 400,
          }}
        >
          {" / 5.0"}
        </span>
      </div>

      <FadeIn delay={300}>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontWeight: 600,
            fontSize: "clamp(28px, 4.4vw, 52px)",
            lineHeight: 1.15,
            color: COLORS.textPrimary,
            maxWidth: 880,
            margin: "44px auto 0",
          }}
        >
          {`Level ${maturityLevel}. ${verdict.word}.`}
        </h1>
      </FadeIn>

      <FadeIn delay={500}>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 19,
            lineHeight: 1.55,
            color: COLORS.textSecondary,
            maxWidth: 640,
            margin: "26px auto 0",
          }}
        >
          {`${verdict.line} The breakdown below shows where this file is strong, and where it is exposed.`}
        </p>
      </FadeIn>

      <FadeIn delay={900}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: "0.18em",
            color: COLORS.textMuted,
            marginTop: 64,
          }}
        >
          {"SCROLL. YOUR FILE IS BELOW."}
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Verdict dossier: one entry per pillar, level + consequence + ramp bar ────

function VerdictDossier({
  entries,
  active,
  reduced,
}: {
  entries: DossierEntry[];
  active: boolean;
  reduced: boolean;
}) {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {entries.map((e, i) => {
        const m = MATURITY_LEVELS[e.level];
        const verdict = VERDICT_MATURITY[e.level];
        const consequence = DOSSIER_CONSEQUENCE[e.pillar][bandFor(e.level)];
        const pct = (e.level / 5) * 100;
        return (
          <div
            key={e.pillar}
            style={{
              padding: "20px 22px",
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderLeft: `3px solid ${m.color}`,
              borderRadius: 14,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                letterSpacing: "0.12em",
                color: m.color,
                marginBottom: 12,
              }}
            >
              {`${PILLAR_DOSSIER_LABEL[e.pillar]}, LEVEL ${e.level}. ${verdict.word.toUpperCase()}.`}
            </div>
            <p
              style={{
                fontFamily: FONTS.serif,
                fontSize: 16,
                lineHeight: 1.6,
                color: COLORS.textPrimary,
                margin: "0 0 16px",
              }}
            >
              {consequence}
            </p>
            <div
              style={{
                height: 6,
                borderRadius: 100,
                background: COLORS.border,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 100,
                  background: `linear-gradient(90deg, ${COLORS.rose}, ${m.color})`,
                  width: active ? `${pct}%` : "0%",
                  transition: reduced
                    ? "none"
                    : "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: reduced ? "0ms" : `${i * 80}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Sealed skeleton: pillar labels only, no levels, no consequence, no ARIA ──
// Renders while gated. Carries no real score data, so the seal holds even if
// the blur is removed.

function DossierSkeleton() {
  return (
    <div style={{ display: "grid", gap: 16 }} aria-hidden>
      {PILLAR_ORDER.map((pillar) => (
        <div
          key={pillar}
          style={{
            padding: "20px 22px",
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderLeft: `3px solid ${COLORS.textMuted}`,
            borderRadius: 14,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              letterSpacing: "0.12em",
              color: COLORS.textMuted,
              marginBottom: 14,
            }}
          >
            {`${PILLAR_LABELS[pillar]}, LEVEL ##. SEALED.`}
          </div>
          {[0, 1].map((line) => (
            <div
              key={line}
              style={{
                height: 10,
                borderRadius: 4,
                background: COLORS.border,
                marginBottom: 10,
                width: line === 0 ? "100%" : "72%",
              }}
            />
          ))}
          <div
            style={{
              height: 6,
              borderRadius: 100,
              background: COLORS.border,
              marginTop: 8,
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Curve panel: gold marker against the 2020 to 2025 national trend ────────

function CurvePanel({
  maturityLevel,
}: {
  maturityLevel: number;
}) {
  const maxDamages = Math.max(...NATIONAL_TRENDS.map((t) => t.totalDamages));
  const chartW = 100;
  const chartH = 60;

  const damagesPoints = NATIONAL_TRENDS.map((t, i) => {
    const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
    const y = chartH - (t.totalDamages / maxDamages) * chartH;
    return `${x},${y}`;
  }).join(" ");

  const lastY =
    chartH -
    (NATIONAL_TRENDS[NATIONAL_TRENDS.length - 1].totalDamages / maxDamages) *
      chartH;

  const first = NATIONAL_TRENDS[0];
  const last = NATIONAL_TRENDS[NATIONAL_TRENDS.length - 1];
  const verdict = VERDICT_MATURITY[maturityLevel];

  return (
    <div
      style={{
        padding: "28px 24px",
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: "0.2em",
          color: COLORS.gold,
          marginBottom: 8,
        }}
      >
        {"THE CURVE YOU ARE SCORED AGAINST"}
      </div>
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: "clamp(18px, 2.6vw, 24px)",
          fontWeight: 600,
          color: COLORS.textPrimary,
          lineHeight: 1.3,
          marginBottom: 6,
        }}
      >
        {`Nuclear verdicts climbed from ${first.totalVerdicts} in ${first.year} to ${last.totalVerdicts} in ${last.year}.`}
      </div>
      <div
        style={{
          fontSize: 12,
          color: COLORS.textMuted,
          fontFamily: FONTS.sans,
          marginBottom: 18,
        }}
      >
        Total damages in billions, by year. Marathon Strategies, preliminary 2025 data.
      </div>

      <svg
        viewBox={`-8 -6 ${chartW + 16} ${chartH + 26}`}
        style={{ width: "100%", height: "auto", maxHeight: 200 }}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`National nuclear verdict damages trend, ${first.year} to ${last.year}, with your maturity level marked at ${last.year}`}
      >
        <defs>
          <linearGradient id="briefingCurveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.rose} stopOpacity={0.18} />
            <stop offset="100%" stopColor={COLORS.rose} stopOpacity={0.01} />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={0}
            y1={chartH - pct * chartH}
            x2={chartW}
            y2={chartH - pct * chartH}
            stroke={COLORS.border}
            strokeWidth={0.4}
          />
        ))}

        <polygon
          points={`0,${chartH} ${damagesPoints} ${chartW},${chartH}`}
          fill="url(#briefingCurveFill)"
        />

        <polyline
          points={damagesPoints}
          fill="none"
          stroke={COLORS.rose}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {NATIONAL_TRENDS.map((t, i) => {
          const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
          return (
            <text
              key={t.year}
              x={x}
              y={chartH + 11}
              textAnchor="middle"
              fill={COLORS.textMuted}
              fontSize={5}
              fontFamily={FONTS.sans}
            >
              {t.year}
            </text>
          );
        })}

        {NATIONAL_TRENDS.map((t, i) => {
          const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
          const y = chartH - (t.totalDamages / maxDamages) * chartH;
          return (
            <g key={`d-${t.year}`}>
              <circle
                cx={x}
                cy={y}
                r={2.6}
                fill={COLORS.surface}
                stroke={COLORS.rose}
                strokeWidth={1.2}
              />
              <circle cx={x} cy={y} r={1} fill={COLORS.rose} />
            </g>
          );
        })}

        {/* Reader marker: gold, at the 2025 endpoint */}
        <line
          x1={chartW}
          y1={lastY}
          x2={chartW}
          y2={chartH}
          stroke={COLORS.gold}
          strokeWidth={0.8}
          strokeDasharray="2,1.5"
        />
        <circle
          cx={chartW}
          cy={lastY}
          r={4}
          fill="none"
          stroke={COLORS.gold}
          strokeWidth={1}
        />
        <circle cx={chartW} cy={lastY} r={1.8} fill={COLORS.gold} />
        <text
          x={chartW - 3}
          y={lastY + 12}
          textAnchor="end"
          fill={COLORS.gold}
          fontSize={5}
          letterSpacing="0.12em"
          fontFamily={FONTS.mono}
        >
          {`YOUR DESK. L${maturityLevel} ${verdict.word.toUpperCase()}`}
        </text>
      </svg>

      <p
        style={{
          fontFamily: FONTS.serif,
          fontSize: 16,
          lineHeight: 1.6,
          color: COLORS.textSecondary,
          margin: "18px 0 0",
          borderLeft: `2px solid ${COLORS.gold}`,
          paddingLeft: 14,
        }}
      >
        {"June 2025, Bexar County, Texas. A bar over-served one customer, and the jury answered with $831 million. Mendez v. Koozies Icehouse, as reported by Seguin Today."}
      </p>
    </div>
  );
}

// ─── The sealed-file gate + results body ─────────────────────────────────────

export default function ResultsPage({
  answers,
  src,
  onSchedule,
  onEmailCaptured,
}: ResultsPageProps) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [isGated, setIsGated] = useState(true);
  const [captureEmail, setCaptureEmail] = useState("");
  const [captureStatus, setCaptureStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [captureError, setCaptureError] = useState("");
  const [fileRef, fileInView] = useInViewOnce<HTMLDivElement>(0.15);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / ASSESSMENT_QUESTIONS.length;
  const maturityLevel = Math.min(5, Math.max(1, Math.round(avgScore)));

  // Pillar aggregates drive both the pressure-point kicker and the dossier.
  const pillarTotals: Record<string, { sum: number; n: number }> = {};
  for (const q of ASSESSMENT_QUESTIONS) {
    const s = answers[q.id] || 1;
    pillarTotals[q.pillar] = pillarTotals[q.pillar] || { sum: 0, n: 0 };
    pillarTotals[q.pillar].sum += s;
    pillarTotals[q.pillar].n += 1;
  }
  const sortedPillars = Object.entries(pillarTotals).sort(
    (a, b) => a[1].sum / a[1].n - b[1].sum / b[1].n
  );
  const weakestPillar = sortedPillars[0][0];
  const strongestPillar = sortedPillars[sortedPillars.length - 1][0];

  const pillarScore: Record<string, number> = {};
  for (const [pillar, { sum, n }] of Object.entries(pillarTotals)) {
    pillarScore[pillar] = Math.min(5, Math.max(1, Math.round(sum / n)));
  }
  const dossierEntries: DossierEntry[] = PILLAR_ORDER.filter(
    (p) => pillarScore[p] !== undefined
  ).map((p) => ({ pillar: p, level: pillarScore[p] }));

  const firstVerdicts = NATIONAL_TRENDS[0].totalVerdicts;
  const lastVerdicts = NATIONAL_TRENDS[NATIONAL_TRENDS.length - 1].totalVerdicts;

  const handleUnseal = async () => {
    if (!captureEmail || !captureEmail.includes("@")) {
      setCaptureError("Enter a valid work email to unseal the file.");
      setCaptureStatus("error");
      return;
    }
    setCaptureStatus("loading");
    setCaptureError("");
    try {
      const res = await fetch("/api/briefing-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: captureEmail,
          source: "assessment-results",
          answers,
          attribution: getAttribution(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setCaptureStatus("success");
      setIsGated(false);
      onEmailCaptured?.(captureEmail);
      // Completion (Type 4): unsealing the file IS completing the Executive Briefing
      // assessment. Persist it so COS can report + email "completed the assessment".
      // Fire-and-forget so it never blocks or breaks the unseal UX; the route is
      // idempotent, so a double-fire (strict mode / retry) records one completion.
      void fetch("/api/briefing-complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: captureEmail, attribution: getAttribution() }),
      }).catch(() => {});
    } catch {
      setCaptureError("That email did not go through. Check the address and try again.");
      setCaptureStatus("error");
    }
  };

  const handleDemoClick = () => {
    trackEvent("demo_click", { surface: "briefing-results", src });
    router.push("/demo");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Minimal header over the reveal band */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 5,
        }}
      >
        <CaseGlideLogo size={28} />
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: COLORS.textMuted,
          }}
        >
          {"EXECUTIVE BRIEFING / RESULTS"}
        </span>
      </div>

      {/* 1. Score reveal: SectionVerdict clone */}
      <ScoreReveal
        avgScore={avgScore}
        maturityLevel={maturityLevel}
        weakestPillar={PILLAR_LABELS[weakestPillar] || weakestPillar.toUpperCase()}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "72px 24px 96px",
        }}
      >
        {/* 2. THE GATE: real dossier renders only after unseal */}
        <div ref={fileRef} style={{ position: "relative", marginBottom: 64 }}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: isGated ? COLORS.textMuted : COLORS.gold,
              marginBottom: 16,
              transition: "color 0.6s ease",
            }}
          >
            {isGated
              ? "VERDICT DOSSIER. SEALED PENDING IDENTIFICATION."
              : "VERDICT DOSSIER. UNSEALED."}
          </div>

          {isGated ? (
            <>
              <div
                style={{
                  filter: "blur(9px)",
                  transition: reduced
                    ? "none"
                    : "filter 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                <DossierSkeleton />
              </div>

              {/* Sealed-file overlay: stamp + the unsealing action */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 26,
                  padding: 24,
                  background:
                    "linear-gradient(180deg, rgba(10,14,26,0.2) 0%, rgba(10,14,26,0.55) 100%)",
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "clamp(18px, 4vw, 26px)",
                    letterSpacing: "0.35em",
                    color: COLORS.gold,
                    border: `2px solid ${COLORS.gold}`,
                    outline: `1px solid ${COLORS.gold}`,
                    outlineOffset: 4,
                    padding: "10px 26px 10px 32px",
                    transform: "rotate(-7deg)",
                    background: "rgba(10,14,26,0.7)",
                    boxShadow: `0 0 40px ${COLORS.goldGlow}`,
                  }}
                >
                  SEALED
                </div>

                <div style={{ width: "100%", maxWidth: 460, textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="work email"
                      value={captureEmail}
                      onChange={(e) => setCaptureEmail(e.target.value)}
                      disabled={captureStatus === "loading"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleUnseal();
                      }}
                      style={{
                        flex: "1 1 200px",
                        minWidth: 0,
                        padding: "13px 4px",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${COLORS.borderLight}`,
                        color: COLORS.textPrimary,
                        fontSize: 15,
                        fontFamily: FONTS.mono,
                        letterSpacing: "0.04em",
                        outline: "none",
                        textAlign: "center",
                      }}
                    />
                    <button
                      onClick={handleUnseal}
                      disabled={captureStatus === "loading"}
                      style={{
                        padding: "13px 28px",
                        background: COLORS.gold,
                        color: COLORS.midnight,
                        border: "none",
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: FONTS.sans,
                        cursor: captureStatus === "loading" ? "wait" : "pointer",
                        opacity: captureStatus === "loading" ? 0.7 : 1,
                      }}
                    >
                      {captureStatus === "loading" ? "Unsealing..." : "Unseal the File"}
                    </button>
                  </div>
                  {captureStatus === "error" && captureError && (
                    <p
                      style={{
                        fontSize: 13,
                        color: COLORS.rose,
                        margin: "12px 0 0",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {captureError}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: 12,
                      color: COLORS.textMuted,
                      margin: "14px 0 0",
                      lineHeight: 1.6,
                      fontFamily: FONTS.sans,
                    }}
                  >
                    Your work email opens the full dimension-by-dimension record.
                    <br />
                    Encrypted in transit, processed only by CaseGlide, never sold.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <FadeIn>
              {/* Emerald unseal strip, cloned from SectionCaseClerk */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                  padding: "12px 14px",
                  border: `1px solid ${COLORS.emerald}`,
                  background: COLORS.emeraldGlow,
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: COLORS.emerald,
                    border: `1px solid ${COLORS.emerald}`,
                    borderRadius: 4,
                    padding: "3px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {"FILE UNSEALED"}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 13,
                    color: COLORS.textPrimary,
                    lineHeight: 1.5,
                  }}
                >
                  {"Three dimensions, scored and read in your own voice. Here is where the file stands."}
                </span>
              </div>

              <VerdictDossier
                entries={dossierEntries}
                active={fileInView}
                reduced={reduced}
              />

              <p
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: COLORS.textSecondary,
                  margin: "22px 0 0",
                  borderLeft: `2px solid ${COLORS.gold}`,
                  paddingLeft: 14,
                }}
              >
                {synthesisLine(strongestPillar, weakestPillar, firstVerdicts, lastVerdicts)}
              </p>
            </FadeIn>
          )}
        </div>

        {/* 3. Curve panel */}
        <FadeIn>
          <div style={{ marginBottom: 72 }}>
            <CurvePanel maturityLevel={maturityLevel} />
          </div>
        </FadeIn>

        {/* 4. Terminal CTA: one button that puts her name in front of Wes */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: COLORS.gold,
              marginBottom: 18,
            }}
          >
            {"NEXT ENTRY IN THE FILE"}
          </div>
          <button
            onClick={handleDemoClick}
            style={{
              padding: "16px 44px",
              background: `linear-gradient(135deg, ${COLORS.gold}, #B8923F)`,
              color: COLORS.midnight,
              border: "none",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: FONTS.sans,
              boxShadow: `0 4px 28px ${COLORS.goldGlow}`,
            }}
          >
            {"Take this briefing live →"}
          </button>
          <p
            style={{
              fontSize: 13,
              color: COLORS.textMuted,
              marginTop: 14,
              fontFamily: FONTS.sans,
            }}
          >
            Wes replies personally.
          </p>
          <button
            onClick={onSchedule}
            style={{
              marginTop: 22,
              padding: "12px 20px",
              background: "transparent",
              color: COLORS.textSecondary,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 10,
              fontSize: 13,
              lineHeight: 1.5,
              maxWidth: 420,
              cursor: "pointer",
              fontFamily: FONTS.sans,
            }}
          >
            Or take 15 minutes with Wes Todd, CaseGlide&apos;s founder. No deck, he will drive your numbers live.
          </button>
        </div>
      </div>
    </div>
  );
}
