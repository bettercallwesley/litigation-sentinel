"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { CAMPAIGNS } from "@/data/campaigns";
import { PROSPECTS } from "@/data/prospects";

interface WeekMetric {
  label: string;
  current: number;
  previous: number;
  format?: "number" | "percent" | "currency";
}

const WEEKLY_METRICS: WeekMetric[] = [
  { label: "New Enrollments", current: 142, previous: 118 },
  { label: "Emails Sent", current: 485, previous: 520 },
  { label: "Replies Received", current: 28, previous: 22 },
  { label: "Meetings Booked", current: 6, previous: 4 },
  { label: "Assessments Started", current: 12, previous: 9 },
  { label: "Newsletter Signups", current: 34, previous: 28 },
  { label: "LinkedIn Post Impressions", current: 4200, previous: 3100 },
  { label: "Pipeline Value", current: 2400000, previous: 1800000, format: "currency" },
];

function formatValue(val: number, format?: string): string {
  if (format === "currency") return `$${(val / 1000000).toFixed(1)}M`;
  if (format === "percent") return `${val}%`;
  return val.toLocaleString();
}

function ChangeIndicator({ current, previous }: { current: number; previous: number }) {
  const change = previous > 0 ? ((current - previous) / previous) * 100 : 0;
  const isUp = change > 0;
  const isFlat = Math.abs(change) < 1;

  return (
    <span style={{
      fontSize: 11,
      fontWeight: 600,
      color: isFlat ? COLORS.textMuted : isUp ? COLORS.emerald : COLORS.rose,
      fontFamily: FONTS.mono,
    }}>
      {isFlat ? "—" : `${isUp ? "+" : ""}${change.toFixed(0)}%`}
    </span>
  );
}

export default function WeeklyReport() {
  const weekOf = "Feb 14 – Feb 20, 2026";
  const totalMeetings = CAMPAIGNS.reduce((sum, c) => sum + c.metrics.meetings, 0);

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.accent} glow={COLORS.accentGlow}>Auto-Generated</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Weekly Report
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Week of {weekOf}
          </p>
        </div>
      </FadeIn>

      {/* Key metrics grid */}
      <FadeIn delay={50}>
        <div className="campaigns-summary-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}>
          {WEEKLY_METRICS.slice(0, 4).map((metric, i) => (
            <Card key={i} style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ fontSize: 11, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {metric.label}
                </div>
                <ChangeIndicator current={metric.current} previous={metric.previous} />
              </div>
              <div style={{ fontSize: 24, fontWeight: 600, color: COLORS.textPrimary }}>
                {formatValue(metric.current, metric.format)}
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>
                prev: {formatValue(metric.previous, metric.format)}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Full metrics table */}
      <FadeIn delay={100}>
        <Card style={{ marginBottom: 24, overflow: "hidden" }}>
          <div style={{
            padding: "14px 20px",
            borderBottom: `1px solid ${COLORS.border}`,
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textPrimary }}>All Metrics</div>
          </div>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            fontFamily: FONTS.sans,
          }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                <th style={{ padding: "10px 20px", textAlign: "left", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Metric</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>This Week</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Last Week</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Change</th>
              </tr>
            </thead>
            <tbody>
              {WEEKLY_METRICS.map((metric, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                  <td style={{ padding: "10px 20px", color: COLORS.textPrimary }}>{metric.label}</td>
                  <td style={{ padding: "10px 20px", textAlign: "right", fontWeight: 600, color: COLORS.textPrimary, fontFamily: FONTS.mono }}>
                    {formatValue(metric.current, metric.format)}
                  </td>
                  <td style={{ padding: "10px 20px", textAlign: "right", color: COLORS.textMuted, fontFamily: FONTS.mono }}>
                    {formatValue(metric.previous, metric.format)}
                  </td>
                  <td style={{ padding: "10px 20px", textAlign: "right" }}>
                    <ChangeIndicator current={metric.current} previous={metric.previous} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </FadeIn>

      {/* Campaign breakdown */}
      <FadeIn delay={150}>
        <Card style={{ marginBottom: 24, overflow: "hidden" }}>
          <div style={{
            padding: "14px 20px",
            borderBottom: `1px solid ${COLORS.border}`,
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textPrimary }}>Campaign Performance</div>
          </div>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            fontFamily: FONTS.sans,
          }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                <th style={{ padding: "10px 20px", textAlign: "left", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Campaign</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Enrolled</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Contacted</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Replies</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Meetings</th>
                <th style={{ padding: "10px 20px", textAlign: "right", fontSize: 11, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Rate</th>
              </tr>
            </thead>
            <tbody>
              {CAMPAIGNS.map((campaign) => {
                const rate = campaign.metrics.contacted > 0
                  ? ((campaign.metrics.replied / campaign.metrics.contacted) * 100).toFixed(1)
                  : "0";
                return (
                  <tr key={campaign.id} style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                    <td style={{ padding: "10px 20px" }}>
                      <span style={{ fontFamily: FONTS.mono, fontWeight: 600, color: COLORS.accent, marginRight: 8 }}>{campaign.id}</span>
                      <span style={{ color: COLORS.textPrimary }}>{campaign.name}</span>
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "right", fontFamily: FONTS.mono, color: COLORS.textSecondary }}>
                      {campaign.metrics.enrolled.toLocaleString()}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "right", fontFamily: FONTS.mono, color: COLORS.textSecondary }}>
                      {campaign.metrics.contacted.toLocaleString()}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "right", fontFamily: FONTS.mono, color: COLORS.textSecondary }}>
                      {campaign.metrics.replied}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "right", fontFamily: FONTS.mono, fontWeight: 600, color: COLORS.emerald }}>
                      {campaign.metrics.meetings}
                    </td>
                    <td style={{ padding: "10px 20px", textAlign: "right", fontFamily: FONTS.mono, color: COLORS.gold }}>
                      {rate}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </FadeIn>

      {/* Pipeline summary */}
      <FadeIn delay={200}>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textPrimary, marginBottom: 12 }}>
            Pipeline Highlights
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { text: `${PROSPECTS.filter(p => p.stage === "contract").length} contracts closed this month`, color: COLORS.emerald },
              { text: `${PROSPECTS.filter(p => p.stage === "trial").length} active trials in progress`, color: COLORS.accent },
              { text: `${PROSPECTS.filter(p => p.stage === "council").length} council programs running`, color: COLORS.gold },
              { text: `${PROSPECTS.filter(p => p.stage === "briefing").length} prospects in briefing stage — follow-up needed`, color: COLORS.amber },
              { text: `${PROSPECTS.filter(p => p.stage === "subscriber").length} newsletter subscribers being nurtured`, color: COLORS.textSecondary },
              { text: `${totalMeetings} total meetings booked across all campaigns`, color: COLORS.emerald },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                }} />
                <div style={{ fontSize: 13, color: COLORS.textSecondary }}>{item.text}</div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
