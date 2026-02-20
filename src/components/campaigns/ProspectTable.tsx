"use client";

import React, { useState } from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { PROSPECTS, Prospect } from "@/data/prospects";
import { PipelineStage, PIPELINE_STAGES } from "@/data/campaigns";

const STAGE_COLORS: Record<PipelineStage, string> = {
  subscriber: "#8B95A8",
  briefing: "#3B82F6",
  council: "#D4A853",
  trial: "#34D399",
  contract: "#F472B6",
};

function ScoreBadge({ score }: { score: number }) {
  let color: string = COLORS.textMuted;
  if (score >= 80) color = COLORS.emerald;
  else if (score >= 50) color = COLORS.accent;
  else if (score >= 30) color = COLORS.amber;
  else color = COLORS.textMuted;

  return (
    <span style={{
      display: "inline-block",
      width: 32,
      height: 20,
      borderRadius: 4,
      background: `${color}20`,
      color: color,
      fontSize: 11,
      fontWeight: 600,
      textAlign: "center",
      lineHeight: "20px",
      fontFamily: FONTS.mono,
    }}>
      {score}
    </span>
  );
}

export default function ProspectTable() {
  const [filter, setFilter] = useState<PipelineStage | "all">("all");
  const [sortBy, setSortBy] = useState<"score" | "name" | "lastActivity">("score");

  const filtered = filter === "all" ? PROSPECTS : PROSPECTS.filter(p => p.stage === filter);
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return b.lastActivity.localeCompare(a.lastActivity);
  });

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.emerald} glow={COLORS.emeraldGlow}>Prospect Intelligence</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Prospects
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            {PROSPECTS.length} prospects across all pipeline stages. Engagement scores from 1-100.
          </p>
        </div>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={50}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: COLORS.textMuted, marginRight: 4 }}>Stage:</span>
          {[{ id: "all" as const, label: "All" }, ...PIPELINE_STAGES.map(s => ({ id: s.id, label: s.label }))].map(s => (
            <button
              key={s.id}
              onClick={() => setFilter(s.id as PipelineStage | "all")}
              style={{
                padding: "4px 12px",
                borderRadius: RADIUS.badge,
                border: `1px solid ${filter === s.id ? COLORS.accent : COLORS.border}`,
                background: filter === s.id ? COLORS.accentGlow : "transparent",
                color: filter === s.id ? COLORS.accent : COLORS.textSecondary,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              {s.label}
            </button>
          ))}

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12, color: COLORS.textMuted }}>Sort:</span>
            {(["score", "name", "lastActivity"] as const).map(s => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                style={{
                  padding: "4px 10px",
                  borderRadius: RADIUS.badge,
                  border: `1px solid ${sortBy === s ? COLORS.gold : COLORS.border}`,
                  background: sortBy === s ? COLORS.goldGlow : "transparent",
                  color: sortBy === s ? COLORS.gold : COLORS.textSecondary,
                  fontSize: 11,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                {s === "lastActivity" ? "Recent" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Table */}
      <FadeIn delay={100}>
        <Card style={{ overflow: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            fontFamily: FONTS.sans,
          }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                {["Score", "Name", "Title", "Company", "Stage", "Source", "Last Activity", "Next Action", "Owner"].map(h => (
                  <th key={h} style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((prospect) => (
                <tr key={prospect.id} style={{
                  borderBottom: `1px solid ${COLORS.border}`,
                  transition: "background 0.15s",
                }}>
                  <td style={{ padding: "10px 12px" }}><ScoreBadge score={prospect.score} /></td>
                  <td style={{ padding: "10px 12px", fontWeight: 500, color: COLORS.textPrimary, whiteSpace: "nowrap" }}>{prospect.name}</td>
                  <td style={{ padding: "10px 12px", color: COLORS.textSecondary, whiteSpace: "nowrap" }}>{prospect.title}</td>
                  <td style={{ padding: "10px 12px", color: COLORS.textSecondary, whiteSpace: "nowrap" }}>{prospect.company}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <Badge color={STAGE_COLORS[prospect.stage]}>{prospect.stage}</Badge>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{
                      fontFamily: FONTS.mono,
                      fontSize: 12,
                      fontWeight: 600,
                      color: COLORS.textSecondary,
                    }}>
                      {prospect.source}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px", color: COLORS.textMuted, fontSize: 12, whiteSpace: "nowrap" }}>
                    {new Date(prospect.lastActivity).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </td>
                  <td style={{ padding: "10px 12px", color: COLORS.textSecondary, fontSize: 12, maxWidth: 200 }}>
                    {prospect.nextAction}
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    {prospect.meetingOwner ? (
                      <Badge
                        color={prospect.meetingOwner === "Wes" ? COLORS.accent : COLORS.gold}
                        glow={prospect.meetingOwner === "Wes" ? COLORS.accentGlow : COLORS.goldGlow}
                      >
                        {prospect.meetingOwner}
                      </Badge>
                    ) : (
                      <span style={{ fontSize: 12, color: COLORS.textMuted }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </FadeIn>
    </div>
  );
}
