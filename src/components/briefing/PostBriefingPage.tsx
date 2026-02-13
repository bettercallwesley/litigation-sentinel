"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo, Badge, FadeIn } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

interface PostBriefingPageProps {
  answers: Record<string, number>;
}

const programs = [
  {
    id: "council",
    name: "Council",
    tagline: "Strategic advisory engagement — 90 days",
    duration: "90 days",
    color: COLORS.accent,
    glow: COLORS.accentGlow,
    description:
      "A structured advisory engagement where CaseGlide experts work alongside your team to evaluate fit, design an implementation roadmap, and quantify the ROI of litigation intelligence for your organization.",
    includes: [
      "Dedicated CaseGlide advisor",
      "Portfolio analysis & gap assessment",
      "Custom ROI model",
      "Implementation roadmap",
      "Executive readout presentation",
    ],
  },
  {
    id: "trial",
    name: "Trial",
    tagline: "Hands-on pilot with your data — 30 days",
    duration: "30 days",
    color: COLORS.emerald,
    glow: COLORS.emeraldGlow,
    description:
      "A full hands-on pilot using a subset of your actual litigation portfolio. Your team uses CaseGlide daily, with dedicated onboarding, training, and success management throughout.",
    includes: [
      "Full platform access",
      "Data migration for pilot portfolio",
      "Team onboarding & training",
      "Weekly success check-ins",
      "Executive impact report",
    ],
  },
];

export default function PostBriefingPage({ answers }: PostBriefingPageProps) {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / ASSESSMENT_QUESTIONS.length;
  const recommended = avgScore <= 2.5 ? "council" : "trial";

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
            Your Next Steps
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 0 80px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color: COLORS.textPrimary,
                margin: "0 0 12px",
                fontFamily: FONTS.serif,
              }}
            >
              Two Paths to{" "}
              <span style={{ color: COLORS.gold }}>Litigation Intelligence</span>
            </h1>
            <p
              style={{
                fontSize: 15,
                color: COLORS.textSecondary,
                maxWidth: 520,
                margin: "0 auto",
                fontFamily: FONTS.sans,
              }}
            >
              Based on your assessment, we recommend starting with the{" "}
              <strong
                style={{
                  color: programs.find((p) => p.id === recommended)!.color,
                }}
              >
                {programs.find((p) => p.id === recommended)!.name}
              </strong>
              .
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          {programs.map((prog, i) => {
            const isRecommended = prog.id === recommended;
            const isSelected = selectedProgram === prog.id;
            return (
              <FadeIn key={prog.id} delay={200 + i * 150}>
                <div
                  onClick={() =>
                    setSelectedProgram(isSelected ? null : prog.id)
                  }
                  style={{
                    padding: 0,
                    background: COLORS.surface,
                    border: `1px solid ${isSelected ? prog.color : isRecommended ? `${prog.color}40` : COLORS.border}`,
                    borderRadius: 16,
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    position: "relative",
                    boxShadow: isSelected
                      ? `0 0 40px ${prog.color}15`
                      : "none",
                  }}
                >
                  {isRecommended && (
                    <div
                      style={{
                        background: `linear-gradient(90deg, ${prog.color}, ${prog.color}80)`,
                        padding: "6px 0",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontFamily: FONTS.sans,
                        }}
                      >
                        Recommended for You
                      </span>
                    </div>
                  )}
                  <div style={{ padding: 28 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <Badge color={prog.color} glow={prog.glow}>
                        {prog.duration}
                      </Badge>
                    </div>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 500,
                        color: COLORS.textPrimary,
                        margin: "0 0 4px",
                        fontFamily: FONTS.serif,
                      }}
                    >
                      {prog.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: prog.color,
                        margin: "0 0 16px",
                        fontStyle: "italic",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {prog.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: COLORS.textSecondary,
                        lineHeight: 1.7,
                        margin: "0 0 20px",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {prog.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {prog.includes.map((item, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: prog.color,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 13,
                              color: COLORS.textSecondary,
                              fontFamily: FONTS.sans,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      style={{
                        marginTop: 24,
                        width: "100%",
                        padding: "14px",
                        background: isSelected ? prog.color : "transparent",
                        border: `1px solid ${prog.color}`,
                        borderRadius: 10,
                        color: isSelected ? "#fff" : prog.color,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {isSelected
                        ? "✓ Selected — We'll Be In Touch"
                        : `Select ${prog.name}`}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Summary / share */}
        <FadeIn delay={600}>
          <div
            style={{
              marginTop: 40,
              padding: 24,
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: COLORS.textSecondary,
                margin: "0 0 16px",
                fontFamily: FONTS.sans,
              }}
            >
              Your complete assessment results and briefing materials are saved at this
              unique URL. Share with your team to align on next steps.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 20px",
                background: COLORS.midnight,
                borderRadius: 8,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: COLORS.textMuted,
                  fontFamily: FONTS.mono,
                }}
              >
                briefing.caseglide.com/your-unique-id
              </span>
              <button
                style={{
                  padding: "4px 12px",
                  background: COLORS.accent,
                  border: "none",
                  borderRadius: 6,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
