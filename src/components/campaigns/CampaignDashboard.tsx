"use client";

import React from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { CAMPAIGNS, Campaign } from "@/data/campaigns";

const CHANNEL_COLORS: Record<string, { color: string; glow: string }> = {
  Email: { color: COLORS.accent, glow: COLORS.accentGlow },
  "LinkedIn InMail": { color: COLORS.gold, glow: COLORS.goldGlow },
  Referral: { color: COLORS.emerald, glow: COLORS.emeraldGlow },
  "Paid Social": { color: COLORS.rose, glow: COLORS.roseGlow },
};

function MetricPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: COLORS.textPrimary }}>{value}</div>
      <div style={{ fontSize: 10, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function CampaignCard({ campaign, delay }: { campaign: Campaign; delay: number }) {
  const channelStyle = CHANNEL_COLORS[campaign.channel] || { color: COLORS.accent, glow: COLORS.accentGlow };
  const replyRate = campaign.metrics.contacted > 0
    ? ((campaign.metrics.replied / campaign.metrics.contacted) * 100).toFixed(1)
    : "0";

  return (
    <FadeIn delay={delay}>
      <Card style={{ padding: 0 }}>
        {/* Campaign header */}
        <div style={{
          padding: "16px 20px",
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: RADIUS.button,
              background: channelStyle.glow,
              border: `1px solid ${channelStyle.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: channelStyle.color,
              fontFamily: FONTS.mono,
            }}>
              {campaign.id}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: COLORS.textPrimary }}>{campaign.name}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>{campaign.channel} via {campaign.tool}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Badge color={channelStyle.color} glow={channelStyle.glow}>{campaign.channel}</Badge>
            <span style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: campaign.status === "active" ? COLORS.emerald : COLORS.textMuted,
            }} />
          </div>
        </div>

        {/* Description */}
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>
            {campaign.description}
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: COLORS.textMuted }}>Destination:</span>
            <Badge
              color={campaign.destination === "briefing" ? COLORS.accent : COLORS.gold}
              glow={campaign.destination === "briefing" ? COLORS.accentGlow : COLORS.goldGlow}
            >
              {campaign.destination === "briefing" ? "Executive Briefing" : "Litigation Sentinel"}
            </Badge>
          </div>
        </div>

        {/* Metrics */}
        <div style={{
          padding: "16px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 8,
        }}>
          <MetricPill label="Enrolled" value={campaign.metrics.enrolled.toLocaleString()} />
          <MetricPill label="Contacted" value={campaign.metrics.contacted.toLocaleString()} />
          <MetricPill label="Replied" value={campaign.metrics.replied} />
          <MetricPill label="Meetings" value={campaign.metrics.meetings} />
          <MetricPill
            label="Rate"
            value={`${replyRate}%`}
          />
        </div>
      </Card>
    </FadeIn>
  );
}

export default function CampaignDashboard() {
  const totalMeetings = CAMPAIGNS.reduce((sum, c) => sum + c.metrics.meetings, 0);
  const totalReplies = CAMPAIGNS.reduce((sum, c) => sum + c.metrics.replied, 0);
  const totalContacted = CAMPAIGNS.reduce((sum, c) => sum + c.metrics.contacted, 0);

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.gold} glow={COLORS.goldGlow}>Campaign Operations</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            CaseGlide Campaigns
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Four campaigns targeting F500 GCs, CLOs, CROs, and VP Claims.
            Wes + Liana own all meetings.
          </p>
        </div>
      </FadeIn>

      {/* Summary metrics */}
      <FadeIn delay={50}>
        <div className="campaigns-summary-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}>
          {[
            { label: "Active Campaigns", value: CAMPAIGNS.filter(c => c.status === "active").length, color: COLORS.accent },
            { label: "Total Contacted", value: totalContacted.toLocaleString(), color: COLORS.textPrimary },
            { label: "Total Replies", value: totalReplies, color: COLORS.gold },
            { label: "Meetings Booked", value: totalMeetings, color: COLORS.emerald },
          ].map((metric, i) => (
            <Card key={i} style={{ padding: "16px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 600, color: metric.color }}>{metric.value}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 4 }}>
                {metric.label}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Campaign cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {CAMPAIGNS.map((campaign, i) => (
          <CampaignCard key={campaign.id} campaign={campaign} delay={100 + i * 60} />
        ))}
      </div>
    </div>
  );
}
