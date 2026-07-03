"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo, Badge, FadeIn } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";
import { averageScore, recommendProgram } from "@/lib/programSelector";

interface PostBriefingPageProps {
  answers: Record<string, number>;
  capturedEmail?: string | null;
  onSchedule?: () => void;
}

// Program selector: the phase AFTER the ResultsPage dossier. The reader has
// already seen where their file stands and where it is exposed; this is the
// "here are the two ways forward" step. Copy is founder-led to match
// ResultsPage's voice ("Wes replies personally"): no consultant-speak, no
// dollar figures, no pricing, no ROI-model promises (all removed in the
// 2026-07-02 content pass, which also retired the pre-6/24 "specialist" tone).
const programs = [
  {
    id: "council",
    name: "Council",
    tagline: "The guided 90-day activation",
    duration: "90 days",
    color: COLORS.accent,
    glow: COLORS.accentGlow,
    description:
      "CaseGlide works alongside your team to turn the data you already keep into portfolio-level intelligence. We map the path, name the gaps this briefing surfaced, and build toward an executive readout your leadership can act on.",
    includes: [
      "A CaseGlide lead who owns the engagement",
      "Portfolio and gap read on your own data",
      "A named activation roadmap",
      "Education for the team who will run it",
      "An executive readout at the end",
    ],
  },
  {
    id: "trial",
    name: "Trial",
    tagline: "The hands-on 30-day proving ground",
    duration: "30 days",
    color: COLORS.emerald,
    glow: COLORS.emeraldGlow,
    description:
      "A hands-on pilot on a slice of your real portfolio. Your team uses CaseGlide day to day, with onboarding, training, and a close working line to us the whole way through.",
    includes: [
      "Full platform access for the pilot",
      "Your pilot portfolio loaded and ready",
      "Team onboarding and training",
      "Weekly working check-ins",
      "An impact read you can take upstairs",
    ],
  },
];

export default function PostBriefingPage({ answers, capturedEmail, onSchedule }: PostBriefingPageProps) {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const avgScore = averageScore(answers, ASSESSMENT_QUESTIONS.length);
  const recommended = recommendProgram(avgScore);

  const handleProgramSelect = async (programId: string) => {
    if (selectedProgram === programId) {
      setSelectedProgram(null);
      return;
    }

    setSelectedProgram(programId);

    // Durable via P2: fires on the analytics rail AND the Blob event sink so COS
    // can see which program a completed briefing leaned toward.
    trackEvent(
      "upgrade_click",
      { program: programId, recommended },
      capturedEmail ? { email: capturedEmail } : undefined
    );

    // If we have a captured email, auto-fire the notification
    if (capturedEmail) {
      setSubmitStatus("loading");
      try {
        await fetch("/api/briefing-capture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: capturedEmail,
            source: "post-briefing",
            program: programId,
            answers,
            attribution: getAttribution(),
          }),
        });
        setSubmitStatus("success");
      } catch {
        setSubmitStatus("error");
      }
    } else {
      // No email captured — open the schedule modal
      onSchedule?.();
    }
  };

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
                  style={{
                    padding: 0,
                    background: COLORS.surface,
                    border: `1px solid ${isSelected ? prog.color : isRecommended ? `${prog.color}40` : COLORS.border}`,
                    borderRadius: 16,
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
                      onClick={() => handleProgramSelect(prog.id)}
                      disabled={submitStatus === "loading"}
                      style={{
                        marginTop: 24,
                        width: "100%",
                        padding: "14px",
                        background: isSelected && submitStatus === "success" ? prog.color : "transparent",
                        border: `1px solid ${prog.color}`,
                        borderRadius: 10,
                        color: isSelected && submitStatus === "success" ? "#fff" : prog.color,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: submitStatus === "loading" ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {isSelected && submitStatus === "success"
                        ? "✓ Selected. Wes will reach out."
                        : isSelected && submitStatus === "loading"
                          ? "Sending..."
                          : `Choose ${prog.name}`}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Talk-to-Wes CTA — founder-led, matches ResultsPage voice. */}
        <FadeIn delay={600}>
          <div
            style={{
              marginTop: 40,
              padding: 28,
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: COLORS.textSecondary,
                margin: "0 0 16px",
                fontFamily: FONTS.sans,
                lineHeight: 1.6,
              }}
            >
              Not sure which way to go? Take 15 minutes with Wes Todd, CaseGlide&apos;s founder.
              He will walk your results and help you pick the path that fits.
            </p>
            <button
              onClick={() => onSchedule?.()}
              style={{
                padding: "14px 32px",
                background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              Book time with Wes
            </button>
            <div style={{ marginTop: 16 }}>
              <a
                href="/demo"
                onClick={() =>
                  trackEvent("demo_click", { surface: "post-briefing" })
                }
                style={{
                  fontSize: 13,
                  color: COLORS.textMuted,
                  fontFamily: FONTS.sans,
                  textDecoration: "underline",
                  textUnderlineOffset: 2,
                }}
              >
                Or send Wes your details and he will reply personally
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
