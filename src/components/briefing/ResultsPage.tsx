"use client";

import React, { useState, useEffect } from "react";
import { COLORS, FONTS, MATURITY_LEVELS } from "@/components/design-system/tokens";
import { CaseGlideLogo, Badge, FadeIn, ProgressBar } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

interface ResultsPageProps {
  answers: Record<string, number>;
  onContinue: () => void;
}

export default function ResultsPage({ answers, onContinue }: ResultsPageProps) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    setTimeout(() => setRevealed(true), 300);
  }, []);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / ASSESSMENT_QUESTIONS.length;
  const maturityLevel = Math.min(5, Math.max(1, Math.round(avgScore)));
  const maturity = MATURITY_LEVELS[maturityLevel];

  const questionResults = ASSESSMENT_QUESTIONS.map((q) => ({
    ...q,
    score: answers[q.id] || 1,
    maturity: MATURITY_LEVELS[answers[q.id] || 1],
  }));

  // Identify top gaps (lowest scores)
  const sorted = [...questionResults].sort((a, b) => a.score - b.score);
  const topGaps = sorted.slice(0, 3);

  return (
    <div style={{ minHeight: "100vh", padding: "0 24px" }}>
      {/* Header */}
      <div
        style={{
          padding: "24px 0",
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span
            style={{
              fontSize: 13,
              color: COLORS.textMuted,
              fontWeight: 500,
              fontFamily: FONTS.sans,
            }}
          >
            Your Assessment Results
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 0 80px" }}>
        {/* Overall Score */}
        <FadeIn delay={100}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Badge color={maturity.color} glow={maturity.glow}>
              {maturity.label}
            </Badge>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 300,
                color: COLORS.textPrimary,
                margin: "20px 0 8px",
                fontFamily: FONTS.serif,
              }}
            >
              Your Litigation Intelligence Maturity
            </h1>
            <p
              style={{
                fontSize: 16,
                color: COLORS.textSecondary,
                maxWidth: 500,
                margin: "0 auto",
                fontFamily: FONTS.sans,
              }}
            >
              {maturity.desc}
            </p>

            {/* Score visualization */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 32,
              }}
            >
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    background:
                      level <= maturityLevel
                        ? `${MATURITY_LEVELS[level].color}20`
                        : COLORS.surface,
                    border: `1px solid ${level <= maturityLevel ? MATURITY_LEVELS[level].color : COLORS.border}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.5s ease",
                    transitionDelay: `${level * 100}ms`,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color:
                        level <= maturityLevel
                          ? MATURITY_LEVELS[level].color
                          : COLORS.textMuted,
                    }}
                  >
                    {level}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      color: COLORS.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {MATURITY_LEVELS[level].label.slice(0, 5)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Dimension Breakdown */}
        <FadeIn delay={400}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.textMuted,
              marginBottom: 20,
              fontFamily: FONTS.sans,
            }}
          >
            Dimension Breakdown
          </h3>
          <div style={{ display: "grid", gap: 12 }}>
            {questionResults.map((q, i) => (
              <div
                key={q.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 20px",
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateX(0)" : "translateX(-12px)",
                  transition: "all 0.5s ease",
                  transitionDelay: `${500 + i * 80}ms`,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ width: 40, textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: q.maturity.color,
                    }}
                  >
                    {q.score}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: COLORS.textPrimary,
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {q.painPoint}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: COLORS.textMuted,
                        fontFamily: FONTS.sans,
                      }}
                    >
                      → {q.feature}
                    </span>
                  </div>
                  <ProgressBar value={q.score} max={5} color={q.maturity.color} />
                </div>
                <Badge color={q.maturity.color} glow={q.maturity.glow}>
                  {q.maturity.label}
                </Badge>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Top Opportunities */}
        <FadeIn delay={900}>
          <div style={{ marginTop: 48 }}>
            <h3
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: COLORS.textMuted,
                marginBottom: 20,
                fontFamily: FONTS.sans,
              }}
            >
              Highest-Impact Opportunities
            </h3>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {topGaps.map((gap, i) => (
                <div
                  key={gap.id}
                  style={{
                    padding: 24,
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 14,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${gap.maturity.color}, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: gap.maturity.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 8,
                      fontFamily: FONTS.sans,
                    }}
                  >
                    Opportunity #{i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: COLORS.textPrimary,
                      marginBottom: 8,
                      fontFamily: FONTS.sans,
                    }}
                  >
                    {gap.painPoint}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: COLORS.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: FONTS.sans,
                    }}
                  >
                    CaseGlide&apos;s{" "}
                    <strong style={{ color: COLORS.accent }}>{gap.feature}</strong> module
                    addresses this gap directly.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={1200}>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button
              onClick={onContinue}
              style={{
                padding: "16px 40px",
                background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: `0 4px 24px ${COLORS.accent}40`,
                fontFamily: FONTS.sans,
              }}
            >
              View Your Personalized Briefing →
            </button>
            <p
              style={{
                fontSize: 13,
                color: COLORS.textMuted,
                marginTop: 12,
                fontFamily: FONTS.sans,
              }}
            >
              See how CaseGlide maps to your specific gaps
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
