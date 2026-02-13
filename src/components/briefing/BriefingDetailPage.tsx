"use client";

import React, { useState } from "react";
import { COLORS, FONTS, MATURITY_LEVELS } from "@/components/design-system/tokens";
import { CaseGlideLogo, Badge, FadeIn } from "@/components/design-system";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";
import { FEATURE_DETAILS } from "@/data/feature-details";

/* ─── Demo sub-components ─────────────────────────────────────────────────── */
function DocketDemo() {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          color: COLORS.textMuted,
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONTS.sans,
        }}
      >
        Simulated Docket Dashboard — Portfolio Exception View
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 10,
          marginBottom: 16,
        }}
      >
        {[
          { label: "Over Budget", value: "12", color: COLORS.rose },
          { label: "Over $50K Reserve", value: "8", color: COLORS.amber },
          { label: "Aging 365+ Days", value: "23", color: COLORS.amber },
          { label: "Settlement Ready", value: "6", color: COLORS.emerald },
          { label: "Trial in 90 Days", value: "3", color: COLORS.rose },
          { label: "Post-Mediation Stalled", value: "9", color: COLORS.amber },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "16px 14px",
              background: COLORS.surface,
              borderRadius: 10,
              border: `1px solid ${COLORS.border}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: stat.color,
                fontFamily: FONTS.sans,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 11,
                color: COLORS.textMuted,
                marginTop: 4,
                lineHeight: 1.3,
                fontFamily: FONTS.sans,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {/* Sample case row */}
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 10,
          border: `1px solid ${COLORS.border}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "10px 16px",
            background: `${COLORS.rose}10`,
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.rose, fontFamily: FONTS.sans }}>
            ⚠ NEEDS ATTENTION
          </span>
          <span style={{ fontSize: 11, color: COLORS.textMuted, fontFamily: FONTS.sans }}>
            3 of 12 over-budget cases
          </span>
        </div>
        {[
          { name: "Martinez v. Acme Corp", stage: "Discovery", days: "412 days", budget: "$67K / $50K", flag: "Over budget, aging" },
          { name: "Thompson Class Action", stage: "Mediation", days: "289 days", budget: "$142K / $100K", flag: "Post-mediation stall" },
          { name: "Lee v. National Ins.", stage: "Depositions", days: "198 days", budget: "$38K / $25K", flag: "Key depo next week" },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              padding: "12px 16px",
              borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 140px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary, fontFamily: FONTS.sans }}>
                {c.name}
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, fontFamily: FONTS.sans }}>
                {c.stage} · {c.days}
              </div>
            </div>
            <div style={{ fontSize: 12, color: COLORS.amber, fontWeight: 500, fontFamily: FONTS.sans }}>
              {c.budget}
            </div>
            <Badge color={COLORS.rose} glow={COLORS.roseGlow}>
              {c.flag}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrecedentDemo() {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          color: COLORS.textMuted,
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONTS.sans,
        }}
      >
        Simulated Precedent Dashboard — Attorney Performance & Outcome Value
      </div>
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 10,
          border: `1px solid ${COLORS.border}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: 8,
            fontSize: 11,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontFamily: FONTS.sans,
          }}
        >
          <span>Firm</span>
          <span>Cases</span>
          <span>Avg Spend</span>
          <span>Outcome</span>
          <span>Value</span>
        </div>
        {[
          { firm: "Baker & Associates", cases: "34", spend: "$42K", score: "8.2", rating: "High", rColor: COLORS.emerald },
          { firm: "Morrison Drake LLP", cases: "28", spend: "$61K", score: "6.1", rating: "Medium", rColor: COLORS.amber },
          { firm: "Sterling Whitmore", cases: "19", spend: "$78K", score: "5.4", rating: "Low", rColor: COLORS.rose },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              padding: "12px 16px",
              borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
              gap: 8,
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary, fontFamily: FONTS.sans }}>
              {f.firm}
            </span>
            <span style={{ fontSize: 13, color: COLORS.textSecondary, fontFamily: FONTS.sans }}>{f.cases}</span>
            <span style={{ fontSize: 13, color: COLORS.textSecondary, fontFamily: FONTS.sans }}>{f.spend}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: f.rColor, fontFamily: FONTS.sans }}>
              {f.score}/10
            </span>
            <Badge color={f.rColor}>{f.rating}</Badge>
          </div>
        ))}
      </div>
      <p
        style={{
          fontSize: 12,
          color: COLORS.textMuted,
          marginTop: 12,
          lineHeight: 1.6,
          fontStyle: "italic",
          fontFamily: FONTS.sans,
        }}
      >
        Outcome Score calibrates results against liability assessment, damages, venue
        difficulty, and strategy — not just spend. Sterling Whitmore costs 86% more than
        Baker with 34% worse outcomes on comparable cases.
      </p>
    </div>
  );
}

function ChambersDemo() {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          color: COLORS.textMuted,
          marginBottom: 12,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONTS.sans,
        }}
      >
        Simulated AI Query — Chambers
      </div>
      <div
        style={{
          background: COLORS.surface,
          padding: 16,
          borderRadius: 10,
          marginBottom: 12,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <span style={{ fontSize: 13, color: COLORS.textMuted, fontFamily: FONTS.sans }}>
          You ask:
        </span>
        <p
          style={{
            fontSize: 15,
            color: COLORS.textPrimary,
            margin: "8px 0 0",
            fontStyle: "italic",
            fontFamily: FONTS.sans,
          }}
        >
          &quot;Which cases over $50K have had no negotiation activity in the last 60 days,
          and what&apos;s the total exposure?&quot;
        </p>
      </div>
      <div
        style={{
          background: COLORS.surface,
          padding: 16,
          borderRadius: 10,
          border: `1px solid ${COLORS.accent}20`,
        }}
      >
        <span style={{ fontSize: 13, color: COLORS.accent, fontFamily: FONTS.sans }}>
          Chambers responds:
        </span>
        <p
          style={{
            fontSize: 14,
            color: COLORS.textSecondary,
            margin: "8px 0 0",
            lineHeight: 1.7,
            fontFamily: FONTS.sans,
          }}
        >
          There are 7 cases with reserves exceeding $50K and no negotiation activity in the
          past 60 days, representing $1.2M in combined exposure. Four of these are
          post-mediation with no counter-offers. Two are with Morrison Drake LLP in venues
          with historically plaintiff-favorable outcomes. The oldest has been inactive for 127
          days. Would you like to see the individual case details or the firm breakdown?
        </p>
      </div>
    </div>
  );
}

function CaseUpdatesDemo() {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          color: COLORS.textMuted,
          marginBottom: 12,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONTS.sans,
        }}
      >
        Simulated Milestone Request — Mediation
      </div>
      <div
        style={{
          background: COLORS.surface,
          padding: 20,
          borderRadius: 10,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: COLORS.textPrimary,
            marginBottom: 16,
            fontFamily: FONTS.sans,
          }}
        >
          📋 Mediation Update Request
        </div>
        {[
          "Mediator selected and date confirmed?",
          "Settlement authority range",
          "Key documents prepared for exchange",
          "Demand/offer status",
          "Recommended strategy and rationale",
        ].map((field, i) => (
          <div
            key={i}
            style={{
              padding: "10px 14px",
              background: COLORS.midnight,
              borderRadius: 8,
              border: `1px solid ${COLORS.border}`,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                border: `1.5px solid ${COLORS.borderLight}`,
              }}
            />
            <span
              style={{
                fontSize: 13,
                color: COLORS.textSecondary,
                fontFamily: FONTS.sans,
              }}
            >
              {field}
            </span>
          </div>
        ))}
        <div
          style={{
            marginTop: 12,
            padding: "12px 16px",
            border: `2px dashed ${COLORS.borderLight}`,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontFamily: FONTS.sans }}>
            📎 Or drag a document — CaseGlide extracts the information automatically
          </span>
        </div>
      </div>
    </div>
  );
}

function GenericDemo({ featureName, icon }: { featureName: string; icon: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>
      <p
        style={{
          fontSize: 14,
          color: COLORS.textSecondary,
          maxWidth: 400,
          margin: "0 auto",
          lineHeight: 1.7,
          fontFamily: FONTS.sans,
        }}
      >
        In your live briefing, we&apos;ll walk through a real demonstration of{" "}
        {featureName} using sample data that mirrors your litigation portfolio structure.
      </p>
    </div>
  );
}

/* ─── Main BriefingDetailPage ─────────────────────────────────────────────── */
interface BriefingDetailPageProps {
  answers: Record<string, number>;
  onContinue: () => void;
}

export default function BriefingDetailPage({ answers, onContinue }: BriefingDetailPageProps) {
  const [activeFeature, setActiveFeature] = useState("Docket Dashboard");
  const [showDemo, setShowDemo] = useState(false);
  const features = Object.keys(FEATURE_DETAILS);
  const detail = FEATURE_DETAILS[activeFeature];

  // Map answers to features for personalization
  const pillarScores: Record<string, number[]> = { docket: [], precedent: [], ai: [] };
  ASSESSMENT_QUESTIONS.forEach((q) => {
    if (pillarScores[q.pillar]) pillarScores[q.pillar].push(answers[q.id] || 1);
  });
  const avgPillar = (p: string) => {
    const arr = pillarScores[p];
    return arr && arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 1;
  };
  const featurePillarMap: Record<string, number> = {};
  Object.keys(FEATURE_DETAILS).forEach((f) => {
    const p = FEATURE_DETAILS[f].pillar;
    featurePillarMap[f] = Math.round(avgPillar(p === "foundation" ? "ai" : p));
  });

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
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500, fontFamily: FONTS.sans }}>
            Personalized Briefing
          </span>
        </div>
        <Badge color={COLORS.gold}>Live Session</Badge>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 0 80px" }}>
        <FadeIn>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 300,
              color: COLORS.textPrimary,
              marginBottom: 8,
              fontFamily: FONTS.serif,
            }}
          >
            Litigation Intelligence: What <span style={{ color: COLORS.accent }}>You</span>{" "}
            Could See
          </h1>
          <p
            style={{
              fontSize: 15,
              color: COLORS.textSecondary,
              marginBottom: 32,
              fontFamily: FONTS.sans,
            }}
          >
            75% of litigation intelligence is the ability to see what&apos;s happening in
            your open cases and measure the value of your closed cases. The rest is the AI
            that makes it instant and the data engine that makes it complete.
          </p>
        </FadeIn>

        {/* Feature Tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 32,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {features.map((f) => {
            const score = featurePillarMap[f] || 3;
            const isActive = f === activeFeature;
            const gap = 5 - score;
            const det = FEATURE_DETAILS[f];
            return (
              <button
                key={f}
                onClick={() => {
                  setActiveFeature(f);
                  setShowDemo(false);
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: `1px solid ${isActive ? COLORS.accent : COLORS.border}`,
                  background: isActive ? COLORS.accentSoft : "transparent",
                  color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  position: "relative",
                  fontFamily: FONTS.sans,
                }}
              >
                <span>{det.icon}</span> {f}
                {gap >= 3 && (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: COLORS.rose,
                      boxShadow: `0 0 8px ${COLORS.rose}60`,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Detail Panel */}
        <FadeIn key={activeFeature}>
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {/* Feature header */}
            <div
              style={{
                padding: "32px 32px 24px",
                borderBottom: `1px solid ${COLORS.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 28 }}>{detail.icon}</span>
                    {detail.weight !== "foundation" ? (
                      <Badge color={COLORS.gold}>
                        {detail.weight} of Litigation Intelligence
                      </Badge>
                    ) : (
                      <Badge color={COLORS.accent}>Foundation Layer</Badge>
                    )}
                  </div>
                  <h2
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: COLORS.textPrimary,
                      margin: "0 0 4px",
                      fontFamily: FONTS.serif,
                    }}
                  >
                    {activeFeature}
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      color: COLORS.accent,
                      margin: 0,
                      fontStyle: "italic",
                      fontFamily: FONTS.sans,
                    }}
                  >
                    {detail.tagline}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 4,
                      fontFamily: FONTS.sans,
                    }}
                  >
                    Your current level
                  </div>
                  <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                    {[1, 2, 3, 4, 5].map((n) => {
                      const score = featurePillarMap[activeFeature] || 1;
                      return (
                        <div
                          key={n}
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 6,
                            background:
                              n <= score ? MATURITY_LEVELS[n].color + "30" : COLORS.border,
                            border: `1px solid ${n <= score ? MATURITY_LEVELS[n].color : "transparent"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 11,
                            fontWeight: 600,
                            color:
                              n <= score
                                ? MATURITY_LEVELS[n].color
                                : COLORS.textMuted,
                          }}
                        >
                          {n}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature body */}
            <div style={{ padding: 32 }}>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: COLORS.textSecondary,
                  margin: "0 0 24px",
                  fontFamily: FONTS.sans,
                }}
              >
                {detail.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 10,
                }}
              >
                {detail.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px 16px",
                      background: COLORS.midnight,
                      borderRadius: 10,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: COLORS.accent,
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: COLORS.textSecondary,
                        lineHeight: 1.5,
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Toggle */}
              <div style={{ marginTop: 28 }}>
                <button
                  onClick={() => setShowDemo(!showDemo)}
                  style={{
                    padding: "12px 24px",
                    background: showDemo ? COLORS.accentSoft : "transparent",
                    border: `1px solid ${COLORS.accent}40`,
                    borderRadius: 10,
                    color: COLORS.accent,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: FONTS.sans,
                  }}
                >
                  {showDemo ? "Hide Preview" : "✦ See It In Action"}
                </button>

                {showDemo && (
                  <FadeIn delay={100}>
                    <div
                      style={{
                        marginTop: 16,
                        padding: 24,
                        background: COLORS.midnight,
                        border: `1px solid ${COLORS.accent}20`,
                        borderRadius: 14,
                      }}
                    >
                      {activeFeature === "Docket Dashboard" ? (
                        <DocketDemo />
                      ) : activeFeature === "Precedent Dashboard" ? (
                        <PrecedentDemo />
                      ) : activeFeature === "Chambers" ? (
                        <ChambersDemo />
                      ) : activeFeature === "Case Updates" ? (
                        <CaseUpdatesDemo />
                      ) : (
                        <GenericDemo featureName={activeFeature} icon={detail.icon} />
                      )}
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Continue CTA */}
        <FadeIn delay={300}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
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
              Explore Next Steps →
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
