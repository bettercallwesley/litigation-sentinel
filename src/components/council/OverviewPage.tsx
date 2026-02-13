"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, FadeIn } from "@/components/design-system";
import { MILESTONES } from "@/data/milestones";

interface OverviewPageProps {
  clientName: string;
  week: number;
  onNav: (page: string) => void;
}

export default function OverviewPage({ clientName, week, onNav }: OverviewPageProps) {
  const activeMilestone = MILESTONES.find((m) => m.status === "active") || MILESTONES[0];
  const completedCount = MILESTONES.filter((m) => m.status === "completed").length;
  const dataProgress = 35;
  const teamEngagement = 72;

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
            Welcome to Council
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            {clientName ? `${clientName} · ` : ""}Week {week} of 12
          </p>
        </div>
      </FadeIn>

      {/* This Week's Priority */}
      <FadeIn delay={80}>
        <Card
          style={{
            marginBottom: 20,
            border: `1px solid ${COLORS.accent}30`,
            background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.surface})`,
          }}
        >
          <div style={{ padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>🎯</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                This Week&apos;s Priority
              </span>
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: COLORS.textPrimary,
                margin: "0 0 8px",
              }}
            >
              {activeMilestone.name}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: COLORS.textSecondary,
                lineHeight: 1.6,
                margin: "0 0 16px",
              }}
            >
              {activeMilestone.description}
            </p>
            <div
              className="council-milestone-tracks"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            >
              <div
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
                    color: COLORS.accent,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                  }}
                >
                  👥 Your Team This Week
                </div>
                <p style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5, margin: 0 }}>
                  {activeMilestone.teamTask}
                </p>
              </div>
              <div
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
                    color: COLORS.gold,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                  }}
                >
                  👔 Executive This Week
                </div>
                <p style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5, margin: 0 }}>
                  {activeMilestone.execTask}
                </p>
              </div>
            </div>
            {week <= 3 && (
              <button
                onClick={() => onNav("data")}
                style={{
                  marginTop: 14,
                  padding: "10px 20px",
                  background: COLORS.accent,
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Start: Map Your Data Sources →
              </button>
            )}
          </div>
        </Card>
      </FadeIn>

      {/* Status Cards */}
      <FadeIn delay={150}>
        <div
          className="council-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {[
            {
              label: "Data Loaded",
              value: `${dataProgress}%`,
              sub: "Precedent + Docket",
              color: dataProgress > 50 ? COLORS.emerald : COLORS.amber,
              action: "dashboards",
            },
            {
              label: "Milestones",
              value: `${completedCount}/${MILESTONES.length}`,
              sub: "Completed",
              color: COLORS.gold,
              action: "activation",
            },
            {
              label: "Team Activity",
              value: `${teamEngagement}%`,
              sub: "Engagement rate",
              color: COLORS.emerald,
              action: null,
            },
            {
              label: "Next Check-In",
              value: "Fri",
              sub: "Feb 14, 2:00 PM",
              color: COLORS.accent,
              action: null,
            },
          ].map((stat, i) => (
            <Card
              key={i}
              onClick={stat.action ? () => onNav(stat.action) : undefined}
              style={{ padding: 16, cursor: stat.action ? "pointer" : "default" }}
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
                {stat.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>{stat.sub}</div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Your CaseGlide Team */}
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
                <div style={{ fontSize: 14, fontWeight: 500, color: COLORS.textPrimary }}>
                  Liana Rodriguez
                </div>
                <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                  Your Council Advisor · liana@caseglide.com
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
          className="council-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
          }}
        >
          {[
            { label: "Data Readiness", desc: "Map your data sources", action: "data", icon: "◫", color: COLORS.accent },
            { label: "Activation Timeline", desc: "12-week milestone plan", action: "activation", icon: "▶", color: COLORS.gold },
            { label: "Education", desc: "Feature guides & briefs", action: "education", icon: "◆", color: COLORS.emerald },
            { label: "Dashboard Preview", desc: "Watch your data build", action: "dashboards", icon: "▦", color: COLORS.amber },
          ].map((item, i) => (
            <Card key={i} onClick={() => onNav(item.action)} style={{ padding: 16, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 14, opacity: 0.6 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>
                  {item.label}
                </span>
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>{item.desc}</div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
