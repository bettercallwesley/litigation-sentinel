"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";

interface StrategyCase {
  id: string;
  name: string;
  stage: string;
  liability: {
    rating: "Strong Defense" | "Moderate" | "Weak Defense" | "Uncertain";
    score: number;
    factors: { factor: string; assessment: string; impact: "positive" | "negative" | "neutral" }[];
  };
  damages: {
    low: string;
    mid: string;
    high: string;
    narrative: string;
  };
  venue: {
    court: string;
    judge: string;
    juryPool: string;
    favorability: number;
    notes: string;
  };
  strategy: {
    recommendation: string;
    rationale: string;
    expectedOutcome: string;
    timeline: string;
    confidence: number;
  };
}

const STRATEGY_CASES: StrategyCase[] = [
  {
    id: "patel",
    name: "Patel v. Meridian Corp",
    stage: "Pre-Trial",
    liability: {
      rating: "Moderate",
      score: 55,
      factors: [
        { factor: "Duty of Care", assessment: "Employer-employee relationship established. Duty clearly exists.", impact: "negative" },
        { factor: "Breach", assessment: "Plaintiff alleges hostile work environment. 3 of 5 incidents documented.", impact: "negative" },
        { factor: "Causation", assessment: "Direct link between alleged conduct and damages is disputed. Gap in timeline.", impact: "positive" },
        { factor: "Comparative Fault", assessment: "Plaintiff failed to use internal reporting mechanisms for 8 months.", impact: "positive" },
        { factor: "Witness Credibility", assessment: "Two corroborating witnesses for plaintiff, one is former employee with grievance.", impact: "neutral" },
      ],
    },
    damages: {
      low: "$1.8M",
      mid: "$3.2M",
      high: "$4.1M",
      narrative: "Economic damages anchored at $420K (lost wages + benefits). Non-economic damages drive the range. Emotional distress claims supported by therapist records. Punitive damages unlikely given lack of malice, but possible under recklessness theory.",
    },
    venue: {
      court: "U.S. District Court, Northern District of California",
      judge: "Hon. Patricia Patterson",
      juryPool: "San Francisco Bay Area — historically plaintiff-friendly in employment cases",
      favorability: 35,
      notes: "Judge Patterson has a 73% plaintiff verdict rate in employment discrimination cases. Pre-trial conference scheduled for March 10. Judge has expressed preference for mediation.",
    },
    strategy: {
      recommendation: "Pursue accelerated settlement at $3.0M-$3.2M before expert depositions",
      rationale: "The combination of an unfavorable venue (73% plaintiff rate), moderate liability exposure, and the upcoming biomechanical expert report creates a closing window for cost-effective resolution. Settling before the March expert report deadline avoids $180K+ in additional defense costs and removes the risk of a damages-inflating expert opinion.",
      expectedOutcome: "Settlement at $3.0M-$3.2M within 30 days, saving $650K-$1.1M vs. full trial",
      timeline: "Initiate settlement talks by Feb 18. Target resolution by March 10 pre-trial conference.",
      confidence: 76,
    },
  },
  {
    id: "morrison",
    name: "Morrison v. Pacific Holdings",
    stage: "Mediation",
    liability: {
      rating: "Weak Defense",
      score: 28,
      factors: [
        { factor: "Pattern Evidence", assessment: "7 named plaintiffs with similar claims spanning 3 years.", impact: "negative" },
        { factor: "Documentary Evidence", assessment: "Internal emails reference awareness of complained-about conditions.", impact: "negative" },
        { factor: "Corporate Responsibility", assessment: "No documented remedial action despite HR complaints.", impact: "negative" },
        { factor: "Statute of Limitations", assessment: "Continuing violation doctrine likely applies, extending all claims.", impact: "negative" },
        { factor: "Procedural Defense", assessment: "Arbitration clause may apply to 3 of 7 plaintiffs.", impact: "positive" },
      ],
    },
    damages: {
      low: "$5.2M",
      mid: "$8.7M",
      high: "$28.4M",
      narrative: "If class is certified, exposure multiplies 3x+. Individual claims average $740K each. Class could encompass 180+ current and former employees. Punitive damages multiplier of 2-3x is realistic given pattern evidence.",
    },
    venue: {
      court: "Superior Court of California, Los Angeles County",
      judge: "Hon. David Reyes",
      juryPool: "Los Angeles — very plaintiff-friendly in employment class actions",
      favorability: 20,
      notes: "Judge Reyes has certified 8 of last 11 employment class actions. Class certification hearing March 5. Denial of certification is unlikely but would transform case dynamics.",
    },
    strategy: {
      recommendation: "Settle pre-certification at $6.5M-$7.5M with comprehensive release",
      rationale: "Class certification is highly probable (82% rate for Whitfield Crane + 73% rate for Judge Reyes). Post-certification, plaintiff leverage increases dramatically and settlement range shifts to $12M-$18M. Pre-certification settlement at $6.5M-$7.5M with a broad class release is the most cost-effective outcome. The arbitration clause defense for 3 plaintiffs provides negotiating leverage to push below $7M.",
      expectedOutcome: "Pre-certification settlement at $6.8M with class release, saving $5.2M-$21.6M vs. post-certification scenarios",
      timeline: "Engage mediator Judge (Ret.) Harris by Feb 18. Complete mediation before March 5 certification hearing.",
      confidence: 68,
    },
  },
  {
    id: "thompson",
    name: "Thompson v. Apex Logistics",
    stage: "Early Discovery",
    liability: {
      rating: "Strong Defense",
      score: 78,
      factors: [
        { factor: "Surveillance Evidence", assessment: "Video shows plaintiff engaged in physical activity inconsistent with claimed injuries.", impact: "positive" },
        { factor: "Timeline Inconsistencies", assessment: "Case Clerk AI identified 3 contradictions between complaint and medical records.", impact: "positive" },
        { factor: "Premises Condition", assessment: "Inspection reports show compliance with safety standards.", impact: "positive" },
        { factor: "Prior Claims History", assessment: "Plaintiff has 2 prior slip-and-fall claims in 5 years.", impact: "positive" },
        { factor: "Witness Gap", assessment: "No independent witnesses to the incident.", impact: "neutral" },
      ],
    },
    damages: {
      low: "$0",
      mid: "$180K",
      high: "$580K",
      narrative: "Medical specials total $42K. Lost wages claim of $28K. Plaintiff seeks $510K including pain and suffering. Surveillance evidence significantly undermines non-economic damages. Prior claims history may further reduce jury sympathy.",
    },
    venue: {
      court: "Cook County Circuit Court, Illinois",
      judge: "Hon. Michael Torres",
      juryPool: "Cook County — moderate, tends to follow evidence closely",
      favorability: 62,
      notes: "Judge Torres is efficient and evidence-focused. Grants MSJ at higher rate than county average. Potential for early MSJ on surveillance evidence.",
    },
    strategy: {
      recommendation: "Defend aggressively — file MSJ after plaintiff deposition, offer nuisance settlement of $75K-$100K",
      rationale: "Surveillance evidence combined with timeline inconsistencies and prior claims create a strong defense posture. Plaintiff counsel Coleman Davis has a 40% dismissal rate, suggesting they take marginal cases. An aggressive defense stance with a low-ball nuisance offer leverages our evidence advantages while managing total defense costs.",
      expectedOutcome: "MSJ grant (45% probability) or nuisance settlement at $75K-$100K (40% probability). Trial defense verdict if needed (15% probability).",
      timeline: "Complete plaintiff deposition by March 15. File MSJ by April 1. Nuisance settlement offer concurrent with MSJ filing.",
      confidence: 82,
    },
  },
];

const LIABILITY_COLORS: Record<string, string> = {
  "Strong Defense": COLORS.emerald,
  "Moderate": COLORS.amber,
  "Weak Defense": COLORS.rose,
  "Uncertain": COLORS.textMuted,
};

const IMPACT_COLORS: Record<string, string> = {
  positive: COLORS.emerald,
  negative: COLORS.rose,
  neutral: COLORS.textMuted,
};

export default function StrategySessionPage() {
  const [selectedCase, setSelectedCase] = useState<string>("patel");
  const activeCase = STRATEGY_CASES.find((c) => c.id === selectedCase) || STRATEGY_CASES[0];

  return (
    <div>
      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 300,
              color: COLORS.textPrimary,
              margin: "0 0 8px",
              fontFamily: FONTS.serif,
            }}
          >
            Strategy Session
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            AI-driven case strategy analysis powered by Chambers AI.
          </p>
        </div>
      </FadeIn>

      {/* Case Selector */}
      <FadeIn delay={60}>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {STRATEGY_CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(c.id)}
              style={{
                padding: "10px 16px",
                background: selectedCase === c.id ? COLORS.accentSoft : COLORS.surface,
                border: `1px solid ${selectedCase === c.id ? `${COLORS.accent}40` : COLORS.border}`,
                borderRadius: 8,
                color: selectedCase === c.id ? COLORS.textPrimary : COLORS.textSecondary,
                fontSize: 13,
                fontWeight: selectedCase === c.id ? 500 : 400,
                cursor: "pointer",
                fontFamily: FONTS.sans,
                transition: "all 0.2s",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Strategy Recommendation (Hero) */}
      <FadeIn delay={100}>
        <Card
          style={{
            marginBottom: 20,
            border: `1px solid ${COLORS.accent}30`,
            background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.surface})`,
          }}
        >
          <div style={{ padding: "22px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <span style={{ fontSize: 18 }}>{"\uD83C\uDFAF"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Recommended Strategy
              </span>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 11, color: COLORS.textMuted }}>Confidence:</span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color:
                      activeCase.strategy.confidence >= 75
                        ? COLORS.emerald
                        : COLORS.amber,
                  }}
                >
                  {activeCase.strategy.confidence}%
                </span>
              </div>
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: COLORS.textPrimary,
                margin: "0 0 10px",
              }}
            >
              {activeCase.strategy.recommendation}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                margin: "0 0 14px",
              }}
            >
              {activeCase.strategy.rationale}
            </p>
            <div
              className="trial-grid-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div
                style={{
                  padding: 12,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.emerald,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 4,
                  }}
                >
                  Expected Outcome
                </div>
                <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                  {activeCase.strategy.expectedOutcome}
                </div>
              </div>
              <div
                style={{
                  padding: 12,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.gold,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 4,
                  }}
                >
                  Timeline
                </div>
                <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                  {activeCase.strategy.timeline}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Liability Assessment */}
      <FadeIn delay={160}>
        <Card style={{ marginBottom: 20 }}>
          <div style={{ padding: "20px 22px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>{"\u2696\uFE0F"}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.textSecondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Liability Assessment
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Badge color={LIABILITY_COLORS[activeCase.liability.rating]}>
                  {activeCase.liability.rating}
                </Badge>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: LIABILITY_COLORS[activeCase.liability.rating],
                  }}
                >
                  {activeCase.liability.score}%
                </span>
              </div>
            </div>

            {/* Liability Bar */}
            <div
              style={{
                height: 6,
                background: COLORS.border,
                borderRadius: 3,
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: `${activeCase.liability.score}%`,
                  height: "100%",
                  background: LIABILITY_COLORS[activeCase.liability.rating],
                  borderRadius: 3,
                  transition: "width 0.5s",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {activeCase.liability.factors.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "10px 14px",
                    background: COLORS.midnight,
                    borderRadius: 8,
                    border: `1px solid ${COLORS.border}`,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: IMPACT_COLORS[f.impact],
                      marginTop: 5,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: COLORS.textPrimary,
                        marginBottom: 2,
                      }}
                    >
                      {f.factor}
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                      {f.assessment}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Damages Range */}
      <FadeIn delay={220}>
        <Card style={{ marginBottom: 20 }}>
          <div style={{ padding: "20px 22px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 16 }}>{"\uD83D\uDCB0"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.textSecondary,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Damages Range Analysis
              </span>
            </div>

            <div
              className="trial-grid-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  padding: 14,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.emerald,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    fontWeight: 600,
                  }}
                >
                  Low
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: COLORS.emerald }}>
                  {activeCase.damages.low}
                </div>
              </div>
              <div
                style={{
                  padding: 14,
                  background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.midnight})`,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.accent}30`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    fontWeight: 600,
                  }}
                >
                  Most Likely
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: COLORS.accent }}>
                  {activeCase.damages.mid}
                </div>
              </div>
              <div
                style={{
                  padding: 14,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.rose,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    fontWeight: 600,
                  }}
                >
                  High
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: COLORS.rose }}>
                  {activeCase.damages.high}
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.7, margin: 0 }}>
              {activeCase.damages.narrative}
            </p>
          </div>
        </Card>
      </FadeIn>

      {/* Venue Analysis */}
      <FadeIn delay={280}>
        <Card>
          <div style={{ padding: "20px 22px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>{"\uD83C\uDFDB\uFE0F"}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.textSecondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Venue Analysis
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 11, color: COLORS.textMuted }}>Defense Favorability:</span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color:
                      activeCase.venue.favorability >= 60
                        ? COLORS.emerald
                        : activeCase.venue.favorability >= 40
                          ? COLORS.amber
                          : COLORS.rose,
                  }}
                >
                  {activeCase.venue.favorability}%
                </span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 14,
              }}
              className="trial-grid-stats"
            >
              <div
                style={{
                  padding: 12,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 4,
                  }}
                >
                  Court
                </div>
                <div style={{ fontSize: 13, color: COLORS.textPrimary }}>
                  {activeCase.venue.court}
                </div>
              </div>
              <div
                style={{
                  padding: 12,
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 4,
                  }}
                >
                  Presiding Judge
                </div>
                <div style={{ fontSize: 13, color: COLORS.textPrimary }}>
                  {activeCase.venue.judge}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: 12,
                background: COLORS.midnight,
                borderRadius: 8,
                border: `1px solid ${COLORS.border}`,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 4,
                }}
              >
                Jury Pool Profile
              </div>
              <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                {activeCase.venue.juryPool}
              </div>
            </div>

            <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
              {activeCase.venue.notes}
            </p>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
