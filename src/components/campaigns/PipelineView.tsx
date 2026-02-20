"use client";

import React from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { PIPELINE_STAGES } from "@/data/campaigns";
import { PROSPECTS, Prospect } from "@/data/prospects";

function ProspectCard({ prospect }: { prospect: Prospect }) {
  return (
    <div style={{
      padding: "10px 12px",
      background: COLORS.midnight,
      border: `1px solid ${COLORS.border}`,
      borderRadius: RADIUS.input,
      marginBottom: 6,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>{prospect.name}</div>
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          color: COLORS.accent,
          fontFamily: FONTS.mono,
        }}>
          {prospect.score}
        </span>
      </div>
      <div style={{ fontSize: 11, color: COLORS.textMuted }}>
        {prospect.title} at {prospect.company}
      </div>
      <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 4 }}>
        {prospect.nextAction}
      </div>
      {prospect.meetingOwner && (
        <div style={{ marginTop: 6 }}>
          <Badge
            color={prospect.meetingOwner === "Wes" ? COLORS.accent : COLORS.gold}
            glow={prospect.meetingOwner === "Wes" ? COLORS.accentGlow : COLORS.goldGlow}
          >
            {prospect.meetingOwner}
          </Badge>
        </div>
      )}
    </div>
  );
}

export default function PipelineView() {
  const stageProspects: Record<string, Prospect[]> = {};
  PIPELINE_STAGES.forEach(stage => {
    stageProspects[stage.id] = PROSPECTS.filter(p => p.stage === stage.id);
  });

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.accent} glow={COLORS.accentGlow}>Pipedrive</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Sales Pipeline
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Newsletter &rarr; Briefing &rarr; Council &rarr; Trial &rarr; Contract.
            Wes + Liana own all meetings.
          </p>
        </div>
      </FadeIn>

      {/* Pipeline stages — horizontal Kanban */}
      <FadeIn delay={100}>
        <div style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          paddingBottom: 16,
        }}>
          {PIPELINE_STAGES.map((stage) => {
            const prospects = stageProspects[stage.id] || [];
            return (
              <div key={stage.id} style={{
                minWidth: 240,
                maxWidth: 280,
                flex: "1 0 240px",
              }}>
                {/* Stage header */}
                <div style={{
                  padding: "12px 14px",
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: `${RADIUS.card}px ${RADIUS.card}px 0 0`,
                  borderBottom: `3px solid ${stage.color}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textPrimary }}>{stage.label}</div>
                    <div style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: `${stage.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      color: stage.color,
                    }}>
                      {prospects.length}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 4 }}>{stage.description}</div>
                </div>

                {/* Prospects */}
                <div style={{
                  padding: 8,
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderTop: "none",
                  borderRadius: `0 0 ${RADIUS.card}px ${RADIUS.card}px`,
                  minHeight: 100,
                }}>
                  {prospects.length === 0 ? (
                    <div style={{
                      padding: "20px 12px",
                      textAlign: "center",
                      fontSize: 12,
                      color: COLORS.textMuted,
                    }}>
                      No prospects
                    </div>
                  ) : (
                    prospects.map(p => <ProspectCard key={p.id} prospect={p} />)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      {/* Pipeline summary */}
      <FadeIn delay={200}>
        <Card style={{ padding: "16px 20px", marginTop: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
            Pipeline Summary
          </div>
          <div className="campaigns-summary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {PIPELINE_STAGES.map(stage => {
              const count = stageProspects[stage.id]?.length || 0;
              return (
                <div key={stage.id} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 600, color: stage.color }}>{count}</div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted }}>{stage.label}</div>
                </div>
              );
            })}
          </div>
          <div style={{
            marginTop: 16,
            padding: "12px 16px",
            background: COLORS.midnight,
            borderRadius: RADIUS.input,
            border: `1px solid ${COLORS.border}`,
          }}>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>
              <span style={{ fontWeight: 600, color: COLORS.emerald }}>Conversion path:</span>{" "}
              {PROSPECTS.length} total prospects across all stages.{" "}
              {PROSPECTS.filter(p => p.meetingOwner).length} have assigned meeting owners.{" "}
              {PROSPECTS.filter(p => p.stage === "trial" || p.stage === "contract").length} in late-stage pipeline.
            </div>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
