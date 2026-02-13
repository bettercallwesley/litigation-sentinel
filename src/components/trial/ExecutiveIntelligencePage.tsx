"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";

const PORTFOLIO_METRICS = [
  {
    label: "Total Exposure",
    value: "$47.2M",
    sub: "Across 10 active cases",
    color: COLORS.rose,
    trend: "+$2.1M from initial assessment",
  },
  {
    label: "Defense Projection",
    value: "$8.4M",
    sub: "Estimated defense spend",
    color: COLORS.accent,
    trend: "12% below industry benchmark",
  },
  {
    label: "Settlement Range",
    value: "$14.6M",
    sub: "Aggregate recommended",
    color: COLORS.gold,
    trend: "vs $22.1M plaintiff demands",
  },
  {
    label: "Portfolio Risk Score",
    value: "6.4",
    sub: "Out of 10",
    color: COLORS.amber,
    trend: "Moderate — 3 cases above threshold",
  },
];

const OUTCOME_PREDICTIONS = [
  {
    caseShort: "Garcia v. NorthStar",
    prediction: "Likely Settlement",
    confidence: 84,
    projectedRange: "$1.8M - $2.6M",
    color: COLORS.emerald,
  },
  {
    caseShort: "Patel v. Meridian Corp",
    prediction: "Trial Recommended",
    confidence: 72,
    projectedRange: "$0 - $4.1M",
    color: COLORS.amber,
  },
  {
    caseShort: "Thompson v. Apex Logistics",
    prediction: "Early Resolution",
    confidence: 91,
    projectedRange: "$320K - $580K",
    color: COLORS.emerald,
  },
  {
    caseShort: "Morrison v. Pacific Holdings",
    prediction: "High Risk — Settle",
    confidence: 67,
    projectedRange: "$5.2M - $8.7M",
    color: COLORS.rose,
  },
  {
    caseShort: "Chen v. Atlas Manufacturing",
    prediction: "Favorable Defense",
    confidence: 78,
    projectedRange: "$0 - $1.2M",
    color: COLORS.accent,
  },
];

const COST_COMPARISON = [
  {
    label: "Settle All 10",
    cost: "$14.6M",
    defense: "$3.2M",
    total: "$17.8M",
    icon: "\uD83E\uDD1D",
  },
  {
    label: "CaseGlide Recommended",
    cost: "$11.3M",
    defense: "$5.8M",
    total: "$17.1M",
    icon: "\uD83C\uDFAF",
    highlight: true,
  },
  {
    label: "Try All 10",
    cost: "$6.4M",
    defense: "$12.1M",
    total: "$18.5M",
    icon: "\u2696\uFE0F",
  },
];

export default function ExecutiveIntelligencePage() {
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
            Executive Intelligence
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            Portfolio-level impact analysis across your 10-case proving ground.
          </p>
        </div>
      </FadeIn>

      {/* Portfolio Metrics */}
      <FadeIn delay={80}>
        <div
          className="trial-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {PORTFOLIO_METRICS.map((m, i) => (
            <Card key={i} style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: 10,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 6,
                }}
              >
                {m.label}
              </div>
              <div
                style={{ fontSize: 26, fontWeight: 600, color: m.color, marginBottom: 4 }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginBottom: 6 }}>
                {m.sub}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  paddingTop: 8,
                  borderTop: `1px solid ${COLORS.border}`,
                }}
              >
                {m.trend}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Settlement vs Trial Cost Comparison */}
      <FadeIn delay={150}>
        <Card style={{ marginBottom: 24 }}>
          <div style={{ padding: "20px 22px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 16 }}>{"\u2696\uFE0F"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.gold,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Resolution Strategy Comparison
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {COST_COMPARISON.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                    gap: 12,
                    padding: "14px 16px",
                    background: row.highlight
                      ? `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.surface})`
                      : COLORS.midnight,
                    border: `1px solid ${row.highlight ? `${COLORS.accent}40` : COLORS.border}`,
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14 }}>{row.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: row.highlight ? 600 : 400,
                          color: COLORS.textPrimary,
                        }}
                      >
                        {row.label}
                      </div>
                      {row.highlight && (
                        <Badge color={COLORS.accent}>Optimal</Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginBottom: 2,
                      }}
                    >
                      Settlement
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: COLORS.textPrimary }}>
                      {row.cost}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginBottom: 2,
                      }}
                    >
                      Defense
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: COLORS.textPrimary }}>
                      {row.defense}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginBottom: 2,
                      }}
                    >
                      Total
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: row.highlight ? COLORS.emerald : COLORS.textPrimary,
                      }}
                    >
                      {row.total}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Case Outcome Predictions */}
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
              <span style={{ fontSize: 16 }}>{"\uD83D\uDD2E"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Case Outcome Predictions
              </span>
              <span style={{ fontSize: 11, color: COLORS.textMuted, marginLeft: "auto" }}>
                Powered by Chambers AI
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {OUTCOME_PREDICTIONS.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 0.6fr 1fr",
                    gap: 12,
                    padding: "12px 14px",
                    background: COLORS.midnight,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: COLORS.textPrimary,
                    }}
                  >
                    {p.caseShort}
                  </div>
                  <div>
                    <Badge color={p.color}>{p.prediction}</Badge>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: p.confidence >= 80 ? COLORS.emerald : COLORS.amber,
                      }}
                    >
                      {p.confidence}%
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Confidence
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, color: COLORS.textSecondary }}>
                      {p.projectedRange}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Projected Range
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Executive Summary */}
      <FadeIn delay={290}>
        <Card
          style={{
            border: `1px solid ${COLORS.gold}30`,
            background: `linear-gradient(135deg, ${COLORS.goldGlow}, ${COLORS.surface})`,
          }}
        >
          <div style={{ padding: "20px 22px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 16 }}>{"\uD83D\uDCCB"}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.gold,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Chambers AI Executive Summary
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                margin: "0 0 12px",
              }}
            >
              Your 10-case portfolio carries $47.2M in aggregate exposure. The
              CaseGlide-recommended hybrid strategy (settle 6, defend 4) yields
              the lowest total cost at $17.1M — a $1.4M savings vs. blanket
              settlement and $700K below full-defense posture. Three cases
              (Morrison, Patel, Rivera) account for 68% of total exposure and
              warrant priority executive attention.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Badge color={COLORS.emerald} glow={COLORS.emeraldGlow}>
                3 settle immediately
              </Badge>
              <Badge color={COLORS.accent} glow={COLORS.accentGlow}>
                3 settle after discovery
              </Badge>
              <Badge color={COLORS.amber} glow={COLORS.amberGlow}>
                2 defend aggressively
              </Badge>
              <Badge color={COLORS.rose} glow={COLORS.roseGlow}>
                2 monitor closely
              </Badge>
            </div>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
