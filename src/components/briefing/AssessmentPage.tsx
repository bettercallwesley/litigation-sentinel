"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo, Badge, FadeIn, ProgressBar } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

interface AssessmentPageProps {
  onComplete: (answers: Record<string, number>) => void;
}

export default function AssessmentPage({ onComplete }: AssessmentPageProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const q = ASSESSMENT_QUESTIONS[current];
  const progress = Object.keys(answers).length;

  const selectAnswer = (score: number) => {
    const newAnswers = { ...answers, [q.id]: score };
    setAnswers(newAnswers);
    if (current < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(current + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers), 500);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0 24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 0",
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 800,
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
            Litigation Intelligence Assessment
          </span>
        </div>
        <span style={{ fontSize: 13, color: COLORS.textSecondary, fontFamily: FONTS.sans }}>
          {progress + 1} of {ASSESSMENT_QUESTIONS.length}
        </span>
      </div>

      {/* Progress */}
      <div style={{ maxWidth: 800, margin: "0 auto", width: "100%", paddingTop: 16 }}>
        <ProgressBar value={progress} max={ASSESSMENT_QUESTIONS.length} />
      </div>

      {/* Question */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
          padding: "40px 0",
        }}
      >
        <FadeIn key={current} delay={0}>
          <div>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              <Badge color={COLORS.rose}>{q.painPoint}</Badge>
              <Badge color={COLORS.accent}>CaseGlide: {q.feature}</Badge>
            </div>

            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.4,
                color: COLORS.textPrimary,
                margin: "0 0 32px",
                fontFamily: FONTS.serif,
              }}
            >
              {q.question}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {q.options.map((opt, i) => {
                const isSelected = answers[q.id] === opt.score;
                const isHovered = hoveredOption === `${q.id}-${i}`;
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(opt.score)}
                    onMouseEnter={() => setHoveredOption(`${q.id}-${i}`)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "16px 20px",
                      background: isSelected
                        ? COLORS.accentSoft
                        : isHovered
                          ? COLORS.surfaceHover
                          : COLORS.surface,
                      border: `1px solid ${isSelected ? COLORS.accent : isHovered ? COLORS.borderLight : COLORS.border}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                      width: "100%",
                      fontFamily: FONTS.sans,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        minWidth: 28,
                        borderRadius: "50%",
                        background: isSelected ? COLORS.accent : "transparent",
                        border: `2px solid ${isSelected ? COLORS.accent : COLORS.borderLight}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 600,
                        color: isSelected ? "#fff" : COLORS.textMuted,
                        marginTop: 1,
                        transition: "all 0.2s",
                      }}
                    >
                      {opt.score}
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: isSelected ? COLORS.textPrimary : COLORS.textSecondary,
                        transition: "color 0.2s",
                      }}
                    >
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Previous button */}
            {current > 0 && (
              <button
                onClick={() => setCurrent(current - 1)}
                style={{
                  marginTop: 20,
                  padding: "8px 0",
                  background: "none",
                  border: "none",
                  color: COLORS.textMuted,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                ← Previous question
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
