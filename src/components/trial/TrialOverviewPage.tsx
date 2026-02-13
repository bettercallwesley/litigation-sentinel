"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, FadeIn } from "@/components/design-system";

interface TrialOverviewPageProps {
  onNav: (page: string) => void;
}

export default function TrialOverviewPage({ onNav }: TrialOverviewPageProps) {
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
            Trial: 30-Day Proving Ground
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            Your 10 most challenging cases. Real data. Real strategy
            recommendations.
          </p>
        </div>
      </FadeIn>

      {/* Mission Card */}
      <FadeIn delay={80}>
        <Card
          style={{
            marginBottom: 20,
            border: `1px solid ${COLORS.accent}30`,
            background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.surface})`,
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
              <span style={{ fontSize: 18 }}>&#x1F3AF;</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                The Mission
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Take 10 difficult cases through full CaseGlide activation — Case
              Updates from attorneys, Case Clerk AI document extraction,
              Chronicle timelines, and Chambers AI analysis. Produce data-driven
              strategy recommendations for each case.
            </p>
          </div>
        </Card>
      </FadeIn>

      {/* KPI Stats */}
      <FadeIn delay={150}>
        <div
          className="trial-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {[
            { label: "Cases Activated", value: "4/10", color: COLORS.accent },
            { label: "Updates Received", value: "7", color: COLORS.emerald },
            { label: "Strategies Ready", value: "4", color: COLORS.gold },
            { label: "Days Remaining", value: "18", color: COLORS.amber },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 16 }}>
              <div
                style={{
                  fontSize: 10,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 6,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>
                {s.value}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Advisor Card */}
      <FadeIn delay={220}>
        <Card style={{ marginBottom: 20 }}>
          <div
            style={{
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.gold})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                LR
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: COLORS.textPrimary,
                  }}
                >
                  Liana Rodriguez
                </div>
                <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                  Trial Advisor &middot; liana@caseglide.com
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={{
                  padding: "8px 16px",
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  color: COLORS.textSecondary,
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Message
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  background: COLORS.accentSoft,
                  border: `1px solid ${COLORS.accent}30`,
                  borderRadius: 8,
                  color: COLORS.accent,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Schedule Call
              </button>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Quick Navigation */}
      <FadeIn delay={280}>
        <div
          style={{
            fontSize: 11,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: 10,
            fontWeight: 600,
          }}
        >
          Jump To
        </div>
        <div
          className="trial-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
          }}
        >
          {[
            {
              label: "Executive Intelligence",
              desc: "Portfolio-level impact metrics",
              action: "executive",
              icon: "\uD83D\uDC54",
              color: COLORS.gold,
            },
            {
              label: "10-Case Proving Ground",
              desc: "Live case tracking & AI insights",
              action: "cases",
              icon: "\u26A1",
              color: COLORS.accent,
            },
            {
              label: "Strategy Session",
              desc: "AI-driven case strategy",
              action: "session",
              icon: "\uD83C\uDFAF",
              color: COLORS.emerald,
            },
            {
              label: "Portfolio Impact",
              desc: "ROI projections & savings",
              action: "impact",
              icon: "\uD83D\uDCC8",
              color: COLORS.amber,
            },
          ].map((item, i) => (
            <Card
              key={i}
              onClick={() => onNav(item.action)}
              style={{ padding: 16, cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: COLORS.textPrimary,
                  }}
                >
                  {item.label}
                </span>
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                {item.desc}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
