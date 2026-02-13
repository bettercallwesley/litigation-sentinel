"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";

type Scenario = "conservative" | "moderate" | "aggressive";

interface ScenarioData {
  label: string;
  color: string;
  costSavings: string;
  costPct: string;
  timeSavings: string;
  timePct: string;
  outcomeImprovement: string;
  outcomePct: string;
  totalROI: string;
  paybackPeriod: string;
}

const SCENARIOS: Record<Scenario, ScenarioData> = {
  conservative: {
    label: "Conservative",
    color: COLORS.textSecondary,
    costSavings: "$1.2M",
    costPct: "7%",
    timeSavings: "340 hrs",
    timePct: "12%",
    outcomeImprovement: "5%",
    outcomePct: "5%",
    totalROI: "2.4x",
    paybackPeriod: "8 months",
  },
  moderate: {
    label: "Moderate",
    color: COLORS.accent,
    costSavings: "$3.8M",
    costPct: "22%",
    timeSavings: "860 hrs",
    timePct: "31%",
    outcomeImprovement: "14%",
    outcomePct: "14%",
    totalROI: "5.1x",
    paybackPeriod: "4 months",
  },
  aggressive: {
    label: "Aggressive",
    color: COLORS.emerald,
    costSavings: "$6.4M",
    costPct: "37%",
    timeSavings: "1,420 hrs",
    timePct: "51%",
    outcomeImprovement: "23%",
    outcomePct: "23%",
    totalROI: "8.7x",
    paybackPeriod: "6 weeks",
  },
};

const BEFORE_AFTER = [
  {
    metric: "Average time to first case update",
    before: "14 days",
    after: "2 days",
    improvement: "86% faster",
    color: COLORS.accent,
  },
  {
    metric: "Case strategy documented",
    before: "35% of cases",
    after: "100% of cases",
    improvement: "Full coverage",
    color: COLORS.emerald,
  },
  {
    metric: "Executive visibility into portfolio",
    before: "Quarterly reports",
    after: "Real-time dashboard",
    improvement: "Continuous",
    color: COLORS.gold,
  },
  {
    metric: "Average settlement vs. demand",
    before: "82% of demand",
    after: "64% of demand",
    improvement: "22% reduction",
    color: COLORS.emerald,
  },
  {
    metric: "Cases with AI-driven strategy",
    before: "0%",
    after: "100%",
    improvement: "From zero",
    color: COLORS.accent,
  },
  {
    metric: "Time to identify high-risk cases",
    before: "45+ days",
    after: "Instant",
    improvement: "Eliminated",
    color: COLORS.rose,
  },
  {
    metric: "Attorney update compliance",
    before: "41%",
    after: "94%",
    improvement: "2.3x increase",
    color: COLORS.gold,
  },
  {
    metric: "Defense cost per case",
    before: "$184K avg",
    after: "$142K avg",
    improvement: "23% reduction",
    color: COLORS.emerald,
  },
];

const ROI_BREAKDOWN = [
  {
    category: "Settlement Optimization",
    amount: "$2.1M",
    description: "Better data leads to better negotiation outcomes. Chambers AI verdict analysis reduced settlement amounts by an average of 18% across 4 resolved/settling cases.",
    icon: "\uD83E\uDD1D",
    color: COLORS.emerald,
  },
  {
    category: "Defense Cost Reduction",
    amount: "$840K",
    description: "Case Clerk AI document review saved 420+ attorney hours. Chronicle timelines eliminated redundant discovery. Earlier strategy alignment reduced churn.",
    icon: "\u23F1\uFE0F",
    color: COLORS.accent,
  },
  {
    category: "Risk Avoidance",
    amount: "$1.8M",
    description: "Early identification of Morrison class certification risk enabled pre-certification settlement, avoiding potential $21.6M exposure increase.",
    icon: "\uD83D\uDEE1\uFE0F",
    color: COLORS.gold,
  },
  {
    category: "Operational Efficiency",
    amount: "$320K",
    description: "Automated case updates, centralized timelines, and AI-powered briefs reduced management overhead by 31% across the 10-case portfolio.",
    icon: "\u2699\uFE0F",
    color: COLORS.amber,
  },
];

export default function PortfolioImpactPage() {
  const [scenario, setScenario] = useState<Scenario>("moderate");
  const [showAfter, setShowAfter] = useState(true);
  const activeScenario = SCENARIOS[scenario];

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
            Portfolio Impact
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            ROI projections and measurable impact from your 30-day proving
            ground.
          </p>
        </div>
      </FadeIn>

      {/* ROI Breakdown */}
      <FadeIn delay={80}>
        <Card
          style={{
            marginBottom: 20,
            border: `1px solid ${COLORS.emerald}30`,
            background: `linear-gradient(135deg, ${COLORS.emeraldGlow}, ${COLORS.surface})`,
          }}
        >
          <div style={{ padding: "22px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 18 }}>{"\uD83D\uDCC8"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.emerald,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Projected Value Created — 10-Case Trial
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: 42,
                  fontWeight: 300,
                  color: COLORS.emerald,
                  fontFamily: FONTS.serif,
                }}
              >
                $5.06M
              </span>
              <span style={{ fontSize: 14, color: COLORS.textSecondary }}>
                total projected value across 4 categories
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ROI_BREAKDOWN.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 16px",
                    background: COLORS.midnight,
                    borderRadius: 10,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: COLORS.surface,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: COLORS.textPrimary,
                        }}
                      >
                        {item.category}
                      </span>
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: item.color,
                        }}
                      >
                        {item.amount}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 12,
                        color: COLORS.textMuted,
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Before / After Comparison */}
      <FadeIn delay={150}>
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
                <span style={{ fontSize: 16 }}>{"\uD83D\uDD04"}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.textSecondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Before &amp; After CaseGlide
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  background: COLORS.midnight,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setShowAfter(false)}
                  style={{
                    padding: "7px 16px",
                    background: !showAfter ? COLORS.surface : "transparent",
                    border: "none",
                    color: !showAfter ? COLORS.textPrimary : COLORS.textMuted,
                    fontSize: 12,
                    fontWeight: !showAfter ? 500 : 400,
                    cursor: "pointer",
                    fontFamily: FONTS.sans,
                  }}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  style={{
                    padding: "7px 16px",
                    background: showAfter ? COLORS.accentSoft : "transparent",
                    border: "none",
                    color: showAfter ? COLORS.accent : COLORS.textMuted,
                    fontSize: 12,
                    fontWeight: showAfter ? 500 : 400,
                    cursor: "pointer",
                    fontFamily: FONTS.sans,
                  }}
                >
                  After
                </button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {/* Header Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  gap: 10,
                  padding: "8px 14px",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  Metric
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  {showAfter ? "With CaseGlide" : "Without CaseGlide"}
                </div>
                {showAfter && (
                  <div
                    style={{
                      fontSize: 10,
                      color: COLORS.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    Impact
                  </div>
                )}
              </div>

              {BEFORE_AFTER.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: showAfter ? "2fr 1fr 1fr" : "2fr 1fr",
                    gap: 10,
                    padding: "10px 14px",
                    background: COLORS.midnight,
                    borderRadius: 8,
                    border: `1px solid ${COLORS.border}`,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      color: COLORS.textPrimary,
                    }}
                  >
                    {row.metric}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: showAfter ? row.color : COLORS.textMuted,
                    }}
                  >
                    {showAfter ? row.after : row.before}
                  </div>
                  {showAfter && (
                    <div style={{ textAlign: "right" }}>
                      <Badge color={row.color}>{row.improvement}</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Impact Scenarios */}
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
              <span style={{ fontSize: 16 }}>{"\uD83D\uDCA1"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.textSecondary,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Full Portfolio Impact Scenarios
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  marginLeft: "auto",
                }}
              >
                Projecting from 10 cases to full portfolio
              </span>
            </div>

            {/* Scenario Selector */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 20,
              }}
            >
              {(Object.keys(SCENARIOS) as Scenario[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setScenario(s)}
                  style={{
                    padding: "10px 18px",
                    background:
                      scenario === s ? COLORS.accentSoft : COLORS.midnight,
                    border: `1px solid ${scenario === s ? `${COLORS.accent}40` : COLORS.border}`,
                    borderRadius: 8,
                    color:
                      scenario === s
                        ? COLORS.textPrimary
                        : COLORS.textSecondary,
                    fontSize: 13,
                    fontWeight: scenario === s ? 500 : 400,
                    cursor: "pointer",
                    fontFamily: FONTS.sans,
                    flex: 1,
                    transition: "all 0.2s",
                  }}
                >
                  {SCENARIOS[s].label}
                </button>
              ))}
            </div>

            {/* Scenario KPIs */}
            <div
              className="trial-grid-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                {
                  label: "Cost Savings",
                  value: activeScenario.costSavings,
                  sub: `${activeScenario.costPct} reduction`,
                  color: COLORS.emerald,
                },
                {
                  label: "Time Savings",
                  value: activeScenario.timeSavings,
                  sub: `${activeScenario.timePct} reduction`,
                  color: COLORS.accent,
                },
                {
                  label: "Outcome Improvement",
                  value: activeScenario.outcomeImprovement,
                  sub: "Better results",
                  color: COLORS.gold,
                },
                {
                  label: "Total ROI",
                  value: activeScenario.totalROI,
                  sub: `Payback: ${activeScenario.paybackPeriod}`,
                  color: activeScenario.color,
                },
              ].map((kpi, i) => (
                <div
                  key={i}
                  style={{
                    padding: 14,
                    background: COLORS.midnight,
                    borderRadius: 10,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: COLORS.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.label}
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: kpi.color,
                      marginBottom: 2,
                    }}
                  >
                    {kpi.value}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual bar chart */}
            <div
              style={{
                padding: 16,
                background: COLORS.midnight,
                borderRadius: 10,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                Savings by Category ({activeScenario.label})
              </div>
              {[
                { label: "Settlement Optimization", pct: scenario === "conservative" ? 35 : scenario === "moderate" ? 55 : 72, color: COLORS.emerald },
                { label: "Defense Cost Reduction", pct: scenario === "conservative" ? 20 : scenario === "moderate" ? 38 : 54, color: COLORS.accent },
                { label: "Risk Avoidance", pct: scenario === "conservative" ? 28 : scenario === "moderate" ? 48 : 65, color: COLORS.gold },
                { label: "Operational Efficiency", pct: scenario === "conservative" ? 15 : scenario === "moderate" ? 31 : 51, color: COLORS.amber },
              ].map((bar, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ fontSize: 12, color: COLORS.textSecondary }}>
                      {bar.label}
                    </span>
                    <span style={{ fontSize: 12, color: bar.color, fontWeight: 500 }}>
                      {bar.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: COLORS.border,
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${bar.pct}%`,
                        height: "100%",
                        background: bar.color,
                        borderRadius: 3,
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={290}>
        <Card
          style={{
            border: `1px solid ${COLORS.gold}30`,
            background: `linear-gradient(135deg, ${COLORS.goldGlow}, ${COLORS.surface})`,
          }}
        >
          <div style={{ padding: "22px 24px", textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: COLORS.gold,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 8,
              }}
            >
              Ready to Scale
            </div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: COLORS.textPrimary,
                margin: "0 0 8px",
                fontFamily: FONTS.serif,
              }}
            >
              Your proving ground data tells a clear story
            </h3>
            <p
              style={{
                fontSize: 14,
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                margin: "0 0 18px",
                maxWidth: 560,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              10 cases generated $5.06M in projected value. At the moderate
              scenario, scaling to your full portfolio yields 5.1x ROI with a
              4-month payback period. The data supports full CaseGlide
              deployment.
            </p>
            <button
              style={{
                padding: "12px 28px",
                background: COLORS.gold,
                border: "none",
                borderRadius: 8,
                color: COLORS.midnight,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              Schedule Executive Briefing
            </button>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
