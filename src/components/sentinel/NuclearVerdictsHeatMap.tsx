"use client";

import React, { useState, useCallback } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import {
  STATE_VERDICT_DATA,
  StateVerdictData,
  getRiskColor,
  getRiskLabel,
  getRiskTextColor,
  KEY_STATS,
  NATIONAL_TRENDS,
  CASE_TYPE_BREAKDOWN,
  JUDICIAL_HELLHOLES,
  JUDICIAL_HELLHOLE_WATCH_LIST,
  NOTABLE_VERDICTS,
  INDUSTRY_BREAKDOWN,
  SOCIAL_INFLATION_STATS,
  DATA_SOURCES,
  ATTRIBUTION,
} from "@/data/nuclear-verdicts";
import { US_STATE_PATHS, SMALL_STATE_LABELS } from "@/data/us-map-paths";
import NuclearVerdictStateDetail from "./NuclearVerdictStateDetail";

// ─── Dark Map Colors ────────────────────────────────────────────────────────
const DARK_MAP = {
  bg: "#0F172A",
  bgGradient: "linear-gradient(180deg, #0F172A 0%, #131D35 100%)",
  textMuted: "#64748B",
} as const;

function getDarkRiskColor(tier: number): string {
  switch (tier) {
    case 1: return "#334155";
    case 2: return "#92704C";
    case 3: return "#D97706";
    case 4: return "#DC2626";
    case 5: return "#B91C1C";
    default: return "#334155";
  }
}

function getDarkRiskTextColor(tier: number): string {
  switch (tier) {
    case 1: return "#94A3B8";
    case 2: return "#FDE68A";
    case 3: return "#FEF3C7";
    case 4: return "#FEE2E2";
    case 5: return "#FFFFFF";
    default: return "#94A3B8";
  }
}

function getDarkRiskStroke(tier: number): string {
  switch (tier) {
    case 1: return "rgba(148,163,184,0.25)";
    case 2: return "rgba(146,112,76,0.4)";
    case 3: return "rgba(217,119,6,0.5)";
    case 4: return "rgba(220,38,38,0.5)";
    case 5: return "rgba(185,28,28,0.6)";
    default: return "rgba(148,163,184,0.25)";
  }
}

const pulseKeyframes = `
@keyframes hellholePulse {
  0%, 100% { r: 6; opacity: 0.9; }
  50% { r: 8; opacity: 1; }
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  subtext,
  color,
  accentBorder,
}: {
  label: string;
  value: string;
  subtext?: string;
  color?: string;
  accentBorder?: string;
}) {
  return (
    <div
      style={{
        padding: "20px 16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
        textAlign: "center",
        minWidth: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: accentBorder || color || SENTINEL.sentinelAccent,
          borderRadius: "14px 14px 0 0",
        }}
      />
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontFamily: FONTS.serif,
          fontWeight: 700,
          color: color || SENTINEL.sentinel,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {subtext && (
        <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginTop: 6 }}>
          {subtext}
        </div>
      )}
    </div>
  );
}

function TrendChart() {
  const maxDamages = Math.max(...NATIONAL_TRENDS.map((t) => t.totalDamages));
  const maxVerdicts = Math.max(...NATIONAL_TRENDS.map((t) => t.totalVerdicts));
  const chartW = 100;
  const chartH = 60;

  // Build polyline points for damages
  const damagesPoints = NATIONAL_TRENDS.map((t, i) => {
    const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
    const y = chartH - (t.totalDamages / maxDamages) * chartH;
    return `${x},${y}`;
  }).join(" ");

  // Build polyline for verdict counts
  const verdictsPoints = NATIONAL_TRENDS.map((t, i) => {
    const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
    const y = chartH - (t.totalVerdicts / maxVerdicts) * chartH;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div
      style={{
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        5-Year Trend (2020–2024)
      </div>
      <svg
        viewBox={`-8 -4 ${chartW + 16} ${chartH + 24}`}
        style={{ width: "100%", height: "auto", maxHeight: 120 }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={0}
            y1={chartH - pct * chartH}
            x2={chartW}
            y2={chartH - pct * chartH}
            stroke={SENTINEL.border}
            strokeWidth={0.5}
          />
        ))}

        {/* Area fill for damages */}
        <polygon
          points={`0,${chartH} ${damagesPoints} ${chartW},${chartH}`}
          fill="rgba(184,84,80,0.08)"
        />

        {/* Damages line */}
        <polyline
          points={damagesPoints}
          fill="none"
          stroke={SENTINEL.rose}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Verdicts line */}
        <polyline
          points={verdictsPoints}
          fill="none"
          stroke={SENTINEL.accent}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3,2"
        />

        {/* Year labels */}
        {NATIONAL_TRENDS.map((t, i) => {
          const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
          return (
            <text
              key={t.year}
              x={x}
              y={chartH + 12}
              textAnchor="middle"
              fill={SENTINEL.inkMuted}
              fontSize={6}
              fontFamily={FONTS.sans}
            >
              {t.year}
            </text>
          );
        })}

        {/* Data points for damages */}
        {NATIONAL_TRENDS.map((t, i) => {
          const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
          const y = chartH - (t.totalDamages / maxDamages) * chartH;
          return <circle key={`d-${t.year}`} cx={x} cy={y} r={2} fill={SENTINEL.rose} />;
        })}
      </svg>
      <div style={{ display: "flex", gap: 16, marginTop: 8, justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 16, height: 2, background: SENTINEL.rose, borderRadius: 1 }} />
          <span style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>Total Damages ($B)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 16,
              height: 2,
              background: SENTINEL.accent,
              borderRadius: 1,
              borderTop: "1px dashed",
            }}
          />
          <span style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>Verdict Count</span>
        </div>
      </div>
    </div>
  );
}

function CaseTypeChart() {
  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 12,
        }}
      >
        Case Type Breakdown
      </div>
      {CASE_TYPE_BREAKDOWN.map((ct) => (
        <div key={ct.type} style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: SENTINEL.ink, fontFamily: FONTS.sans, fontWeight: 500 }}>
              {ct.type}
            </span>
            <span style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              {ct.percentage}% · ${ct.medianAward}M median
            </span>
          </div>
          <div
            style={{
              height: 6,
              background: SENTINEL.bgWarm,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${ct.percentage}%`,
                height: "100%",
                background: ct.color,
                borderRadius: 3,
                transition: "width 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function HellholesList() {
  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 4,
        }}
      >
        Judicial Hellholes® 2025–2026
      </div>
      <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 12 }}>
        Source: American Tort Reform Association
      </div>
      {JUDICIAL_HELLHOLES.map((h) => (
        <div
          key={h.rank}
          style={{
            display: "flex",
            gap: 10,
            padding: "8px 0",
            borderBottom: `1px solid ${SENTINEL.border}`,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              background: SENTINEL.rose,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: FONTS.sans,
              flexShrink: 0,
            }}
          >
            {h.rank}
          </span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: SENTINEL.ink, fontFamily: FONTS.sans }}>
              {h.jurisdiction}
            </div>
            <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, lineHeight: 1.4 }}>
              {h.detail}
            </div>
          </div>
        </div>
      ))}

      {/* Watch List */}
      <div
        style={{
          marginTop: 14,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.amber,
          fontFamily: FONTS.sans,
          marginBottom: 8,
        }}
      >
        Watch List
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {JUDICIAL_HELLHOLE_WATCH_LIST.map((w) => (
          <span
            key={w.state}
            style={{
              fontSize: 11,
              fontFamily: FONTS.sans,
              fontWeight: 500,
              color: SENTINEL.amber,
              background: SENTINEL.goldSoft,
              padding: "3px 10px",
              borderRadius: 100,
              border: "1px solid rgba(193,154,62,0.15)",
            }}
          >
            {w.jurisdiction}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────

function MapTooltip({
  state,
  x,
  y,
}: {
  state: StateVerdictData;
  x: number;
  y: number;
}) {
  const riskLabel = getRiskLabel(state.riskTier);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -115%)",
        background: "rgba(15,23,42,0.95)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "12px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        pointerEvents: "none",
        zIndex: 20,
        minWidth: 200,
        whiteSpace: "nowrap",
        animation: "fadeSlideUp 0.15s ease-out",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#F1F5F9", fontFamily: FONTS.serif }}>
          {state.name}
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: getDarkRiskTextColor(state.riskTier),
            background: getDarkRiskColor(state.riskTier),
            padding: "2px 8px",
            borderRadius: 100,
            fontFamily: FONTS.sans,
          }}
        >
          {riskLabel}
        </span>
      </div>
      {state.verdictCount2024 > 0 ? (
        <>
          <div style={{ fontSize: 12, color: "#CBD5E1", fontFamily: FONTS.sans }}>
            <strong style={{ color: "#F1F5F9" }}>{state.verdictCount2024}</strong> nuclear verdicts · <strong style={{ color: "#F1F5F9" }}>${state.totalDamages2024 >= 1000 ? `${(state.totalDamages2024 / 1000).toFixed(1)}B` : `${state.totalDamages2024}M`}</strong> total
          </div>
          {state.judicialHellhole && (
            <div style={{ fontSize: 10, color: "#EF4444", fontFamily: FONTS.sans, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
              Judicial Hellhole® #{state.judicialHellholeRank}
            </div>
          )}
        </>
      ) : (
        <div style={{ fontSize: 12, color: "#64748B", fontFamily: FONTS.sans }}>
          No nuclear verdicts recorded
        </div>
      )}
      <div style={{ fontSize: 10, color: "#60A5FA", fontFamily: FONTS.sans, marginTop: 6, fontWeight: 500 }}>
        Click to explore →
      </div>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function MapLegend() {
  const tiers = [1, 2, 3, 4, 5] as const;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        padding: "14px 0 6px",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 10, color: DARK_MAP.textMuted, fontFamily: FONTS.sans, marginRight: 6, fontWeight: 600 }}>
        Verdict Risk
      </span>
      <div style={{ display: "flex", borderRadius: 4, overflow: "hidden", marginRight: 4 }}>
        {tiers.map((tier) => (
          <div key={tier} style={{ width: 28, height: 10, background: getDarkRiskColor(tier) }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 0, width: 140 }}>
        <span style={{ fontSize: 9, color: DARK_MAP.textMuted, fontFamily: FONTS.sans, flex: 1 }}>Low</span>
        <span style={{ fontSize: 9, color: DARK_MAP.textMuted, fontFamily: FONTS.sans, textAlign: "right" }}>Critical</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 12 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444", boxShadow: "0 0 6px rgba(239,68,68,0.5)" }} />
        <span style={{ fontSize: 10, color: DARK_MAP.textMuted, fontFamily: FONTS.sans }}>Judicial Hellhole®</span>
      </div>
    </div>
  );
}

// ─── Notable Verdicts ────────────────────────────────────────────────────────

function NotableVerdictsTable() {
  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 4,
        }}
      >
        Notable Nuclear Verdicts® — Verified Landmark Cases
      </div>
      <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 12 }}>
        Sources: Marathon Strategies 2025 Report, Morgan &amp; Morgan 2025, Tyson &amp; Mendes
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: FONTS.sans,
            fontSize: 11,
          }}
        >
          <thead>
            <tr>
              {["Amount", "Case", "State", "Year", "Type", "Source"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "6px 8px",
                    borderBottom: `2px solid ${SENTINEL.border}`,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: SENTINEL.inkMuted,
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {NOTABLE_VERDICTS.map((v, i) => (
              <tr
                key={`${v.caseName}-${i}`}
                style={{
                  borderBottom: `1px solid ${SENTINEL.border}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLTableRowElement).style.background = SENTINEL.bgWarm;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLTableRowElement).style.background = "transparent";
                }}
              >
                <td
                  style={{
                    padding: "8px 8px",
                    fontWeight: 700,
                    color: v.amount >= 1000 ? SENTINEL.rose : SENTINEL.ink,
                    fontFamily: FONTS.serif,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                  }}
                >
                  {v.amountLabel}
                </td>
                <td style={{ padding: "8px 8px", maxWidth: 220 }}>
                  <div style={{ fontWeight: 600, color: SENTINEL.ink, fontSize: 11, lineHeight: 1.3 }}>
                    {v.caseName}
                  </div>
                  <div style={{ fontSize: 10, color: SENTINEL.inkMuted, lineHeight: 1.4, marginTop: 2 }}>
                    {v.detail}
                  </div>
                </td>
                <td style={{ padding: "8px 8px", whiteSpace: "nowrap", color: SENTINEL.ink }}>
                  {v.state}
                  <div style={{ fontSize: 9, color: SENTINEL.inkMuted }}>{v.jurisdiction}</div>
                </td>
                <td style={{ padding: "8px 8px", color: SENTINEL.inkLight }}>{v.year}</td>
                <td style={{ padding: "8px 8px" }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: SENTINEL.accent,
                      background: SENTINEL.accentSoft,
                      padding: "2px 6px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.caseType}
                  </span>
                </td>
                <td style={{ padding: "8px 8px", fontSize: 10, color: SENTINEL.inkMuted, whiteSpace: "nowrap" }}>
                  {v.source}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Industry Breakdown ─────────────────────────────────────────────────────

function IndustryChart() {
  const maxDmg = Math.max(...INDUSTRY_BREAKDOWN.map((b) => b.totalDamages));
  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 4,
        }}
      >
        Industry Breakdown
      </div>
      <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 12 }}>
        Marathon Strategies 2025 Report · Total damages by sector
      </div>
      {INDUSTRY_BREAKDOWN.map((b) => (
        <div key={b.industry} style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: SENTINEL.ink, fontFamily: FONTS.sans, fontWeight: 500 }}>
              {b.industry}
            </span>
            <span style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              ${b.totalDamages}B
            </span>
          </div>
          <div
            style={{
              height: 6,
              background: SENTINEL.bgWarm,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(b.totalDamages / maxDmg) * 100}%`,
                height: "100%",
                background: b.color,
                borderRadius: 3,
                transition: "width 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Key Findings (Social Inflation Stats) ──────────────────────────────────

function KeyFindings() {
  const stats = SOCIAL_INFLATION_STATS;
  const findings = [
    {
      label: "Excess Liability Losses (10-Year)",
      value: `$${stats.excessLiabilityLosses.low}B – $${stats.excessLiabilityLosses.high}B`,
      source: "CAS / Triple-I",
      color: SENTINEL.rose,
    },
    {
      label: "Social Inflation Rate (2023)",
      value: `${stats.socialInflationRate2023}% — 20-year high`,
      source: "Swiss Re",
      color: SENTINEL.amber,
    },
    {
      label: "Anchoring Effect ($100M ask)",
      value: `$3M avg → $20M avg award`,
      source: "Swiss Re",
      color: SENTINEL.sentinel,
    },
    {
      label: "Trucking Avg Verdict Growth",
      value: `$2.3M → $22.3M (+867%)`,
      source: "ATRI",
      color: "#F39C12",
    },
    {
      label: "Cases Going to Verdict",
      value: `Only ${stats.casesGoingToVerdict}% (98.2% settle)`,
      source: "Sedgwick",
      color: SENTINEL.emerald,
    },
    {
      label: "Federal Court Nuclear %",
      value: `${stats.federalCourtNuclearPct}% of nuclear verdicts (up from ~10%)`,
      source: "Sedgwick",
      color: SENTINEL.accent,
    },
    {
      label: "Med Mal Top 50 Avg Verdict",
      value: `$27M (2019) → $56M (2024)`,
      source: "Doctors Company",
      color: "#3498DB",
    },
    {
      label: "Litigation Funding AUM",
      value: `$${stats.tplfAUM2024}B across ${stats.tplfActiveFunders} funders`,
      source: "Westfleet",
      color: "#9B59B6",
    },
  ];

  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 4,
        }}
      >
        Key Findings — Social Inflation & Defense Intelligence
      </div>
      <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 12 }}>
        Multi-source actuarial and industry data
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
        {findings.map((f) => (
          <div
            key={f.label}
            style={{
              padding: "12px",
              background: SENTINEL.bgWarm,
              borderRadius: 8,
              borderLeft: `3px solid ${f.color}`,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: SENTINEL.inkLight,
                fontFamily: FONTS.sans,
                marginBottom: 4,
              }}
            >
              {f.label}
            </div>
            <div
              style={{
                fontSize: 14,
                fontFamily: FONTS.serif,
                fontWeight: 600,
                color: SENTINEL.ink,
                lineHeight: 1.3,
                marginBottom: 4,
              }}
            >
              {f.value}
            </div>
            <div style={{ fontSize: 9, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              Source: {f.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Data Sources ───────────────────────────────────────────────────────────

function SourcesList() {
  return (
    <div
      style={{
        padding: "16px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.sentinelAccent,
          fontFamily: FONTS.sans,
          marginBottom: 12,
        }}
      >
        Data Sources & Methodology
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 8,
        }}
      >
        {DATA_SOURCES.map((s) => (
          <div
            key={s.name}
            style={{
              padding: "10px 12px",
              background: SENTINEL.bgWarm,
              borderRadius: 8,
              border: `1px solid ${SENTINEL.border}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SENTINEL.ink,
                  fontFamily: FONTS.sans,
                  flex: 1,
                  lineHeight: 1.3,
                }}
              >
                {s.name}
              </span>
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: s.accessLevel === "free" ? SENTINEL.emerald : SENTINEL.amber,
                  background: s.accessLevel === "free" ? "rgba(45,122,95,0.08)" : "rgba(196,140,44,0.08)",
                  padding: "2px 6px",
                  borderRadius: 100,
                  fontFamily: FONTS.sans,
                  flexShrink: 0,
                }}
              >
                {s.accessLevel}
              </span>
            </div>
            <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, lineHeight: 1.4 }}>
              {s.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

interface NuclearVerdictsHeatMapProps {
  isPreview?: boolean;
}

export default function NuclearVerdictsHeatMap({ isPreview = false }: NuclearVerdictsHeatMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<StateVerdictData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // States shown in preview mode (top 5 + a few low-risk for contrast)
  const previewStates = new Set(["TX", "CA", "PA", "NY", "NV", "FL", "OH", "WI", "OR"]);

  const handleMouseEnter = useCallback(
    (stateId: string, event: React.MouseEvent<SVGPathElement>) => {
      setHoveredState(stateId);
      const rect = (event.target as SVGPathElement).ownerSVGElement?.getBoundingClientRect();
      const targetRect = (event.target as SVGPathElement).getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: targetRect.left + targetRect.width / 2 - rect.left,
          y: targetRect.top - rect.top,
        });
      }
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredState(null);
  }, []);

  const handleClick = useCallback(
    (stateId: string) => {
      const stateData = STATE_VERDICT_DATA.find((s) => s.id === stateId);
      if (stateData) {
        setSelectedState(stateData);
        setHoveredState(null);
      }
    },
    [],
  );

  const hoveredStateData = hoveredState
    ? STATE_VERDICT_DATA.find((s) => s.id === hoveredState) || null
    : null;

  const stateDataMap = new Map(STATE_VERDICT_DATA.map((s) => [s.id, s]));

  // Determine if a state is blurred in preview mode
  const isBlurred = (stateId: string) => isPreview && !previewStates.has(stateId);

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: pulseKeyframes }} />

      {/* ─── Hero Header ─── */}
      <FadeIn delay={100}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              background: "rgba(193,154,62,0.08)",
              border: "1px solid rgba(193,154,62,0.15)",
              borderRadius: 100,
              marginBottom: 14,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: SENTINEL.sentinelAccent }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: SENTINEL.sentinelAccent,
                fontFamily: FONTS.sans,
              }}
            >
              2025 Report — Interactive Intelligence
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontFamily: FONTS.serif,
              fontWeight: 700,
              color: SENTINEL.sentinel,
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Nuclear Verdicts<sup style={{ fontSize: "0.45em", verticalAlign: "super" }}>&reg;</sup> Heat Map
          </h1>
          <p
            style={{
              fontSize: 15,
              color: SENTINEL.inkLight,
              lineHeight: 1.65,
              maxWidth: 580,
              margin: "0 auto 8px",
              fontFamily: FONTS.sans,
            }}
          >
            State-by-state intelligence on nuclear verdicts ($10M+), judicial risk factors,
            and social inflation trends. Based on the Marathon Strategies 2025 Nuclear Verdict Report,
            Morgan &amp; Morgan 2025 results, and 15+ actuarial sources.
          </p>
          <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, fontStyle: "italic" }}>
            Click any state to explore. Data: 135 verdicts across 34 states, $31.3B total damages.
          </div>
        </div>
      </FadeIn>

      {/* ─── Key Stats Banner ─── */}
      <FadeIn delay={200}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <StatCard
            label="Nuclear Verdicts®"
            value={KEY_STATS.totalVerdicts2024.toString()}
            subtext={`+${KEY_STATS.yoyVerdictGrowth}% year-over-year`}
            color={SENTINEL.rose}
            accentBorder="linear-gradient(90deg, #C0392B, #E74C3C)"
          />
          <StatCard
            label="Total Damages"
            value={`$${KEY_STATS.totalDamages2024}B`}
            subtext={`+${KEY_STATS.yoyDamagesGrowth}% YoY · ${KEY_STATS.statesWithNuclearVerdicts} states`}
            color={SENTINEL.sentinel}
            accentBorder="linear-gradient(90deg, #1B2B4A, #2C4A7C)"
          />
          <StatCard
            label="Median Verdict"
            value={`$${KEY_STATS.medianVerdict2024}M`}
            subtext="Up from $44M in 2023"
            accentBorder="linear-gradient(90deg, #C19A3E, #D4A853)"
          />
          <StatCard
            label="$100M+ Verdicts"
            value={KEY_STATS.thermonuclearCount2024.toString()}
            subtext={`Including ${KEY_STATS.billionPlusCount2024} over $1B`}
            color={SENTINEL.rose}
            accentBorder="linear-gradient(90deg, #922B28, #C0392B)"
          />
        </div>
      </FadeIn>

      {/* ─── Interactive Map (Dark Panel) ─── */}
      <FadeIn delay={300}>
        <div
          style={{
            position: "relative",
            background: DARK_MAP.bgGradient,
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: "24px 16px 12px",
            marginBottom: 14,
            overflow: "hidden",
          }}
        >
          {/* Ambient glow effects */}
          <div style={{ position: "absolute", top: -80, left: "20%", width: 300, height: 300, background: "radial-gradient(circle, rgba(185,28,28,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, right: "10%", width: 250, height: 250, background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: DARK_MAP.textMuted,
              fontFamily: FONTS.sans,
              marginBottom: 14,
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            Interactive Map · Marathon Strategies 2025 Nuclear Verdict Report
          </div>

          <div style={{ position: "relative", width: "100%", maxWidth: 860, margin: "0 auto", zIndex: 1 }}>
            <svg
              viewBox="-65 0 1050 620"
              style={{ width: "100%", height: "auto" }}
              preserveAspectRatio="xMidYMid meet"
            >
              {US_STATE_PATHS.map((sp) => {
                const sd = stateDataMap.get(sp.id);
                const tier = sd?.riskTier || 1;
                const fill = getDarkRiskColor(tier);
                const isHovered = hoveredState === sp.id;
                const blurred = isBlurred(sp.id);
                const isHellhole = sd?.judicialHellhole;

                return (
                  <path
                    key={sp.id}
                    d={sp.d}
                    fill={blurred ? "#1E293B" : fill}
                    stroke={isHovered ? "#F1F5F9" : getDarkRiskStroke(tier)}
                    strokeWidth={isHovered ? 2 : 0.5}
                    style={{
                      cursor: "pointer",
                      transition: "fill 0.2s, stroke-width 0.2s, stroke 0.2s, filter 0.2s",
                      opacity: blurred ? 0.3 : isHovered ? 1 : 0.92,
                      filter: blurred
                        ? "blur(1.5px)"
                        : isHovered
                          ? `drop-shadow(0 0 8px ${fill}80)`
                          : tier >= 4 && isHellhole
                            ? `drop-shadow(0 0 4px ${fill}40)`
                            : "none",
                    }}
                    onMouseEnter={(e) => !blurred && handleMouseEnter(sp.id, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => !blurred && handleClick(sp.id)}
                  />
                );
              })}

              {/* State labels (larger states) */}
              {US_STATE_PATHS.filter(
                (sp) => !SMALL_STATE_LABELS.some((s) => s.id === sp.id),
              ).map((sp) => {
                const blurred = isBlurred(sp.id);
                if (blurred) return null;
                const sd = stateDataMap.get(sp.id);
                const tier = sd?.riskTier || 1;
                return (
                  <text
                    key={`label-${sp.id}`}
                    x={sp.labelX}
                    y={sp.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={getDarkRiskTextColor(tier)}
                    fontSize={10}
                    fontWeight={600}
                    fontFamily={FONTS.sans}
                    style={{ pointerEvents: "none", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                  >
                    {sp.id}
                  </text>
                );
              })}

              {/* Small state labels with leader lines */}
              {SMALL_STATE_LABELS.map((sl) => {
                const blurred = isBlurred(sl.id);
                if (blurred) return null;
                return (
                  <g key={`small-${sl.id}`}>
                    <line x1={sl.lineEndX} y1={sl.lineEndY} x2={sl.labelX - 8} y2={sl.labelY} stroke="rgba(148,163,184,0.3)" strokeWidth={0.5} />
                    <text x={sl.labelX} y={sl.labelY} textAnchor="start" dominantBaseline="middle" fill={DARK_MAP.textMuted} fontSize={9} fontFamily={FONTS.sans}>
                      {sl.name}
                    </text>
                  </g>
                );
              })}

              {/* Pulsing Judicial Hellhole indicators */}
              {JUDICIAL_HELLHOLES.map((h) => {
                const sp = US_STATE_PATHS.find((s) => s.id === h.state);
                if (!sp || isBlurred(h.state)) return null;
                return (
                  <g key={`hellhole-${h.state}`}>
                    <circle cx={sp.labelX} cy={sp.labelY - 16} r={8} fill="none" stroke="#EF4444" strokeWidth={1} opacity={0.4} style={{ animation: "glowPulse 2s ease-in-out infinite" }} />
                    <circle cx={sp.labelX} cy={sp.labelY - 16} r={6} fill="#EF4444" opacity={0.9} style={{ animation: "hellholePulse 2s ease-in-out infinite" }} />
                    <text x={sp.labelX} y={sp.labelY - 13} textAnchor="middle" fill="#fff" fontSize={7} fontWeight={700} fontFamily={FONTS.sans} style={{ pointerEvents: "none" }}>
                      {h.rank}
                    </text>
                  </g>
                );
              })}
            </svg>

            {hoveredStateData && (
              <MapTooltip state={hoveredStateData} x={tooltipPos.x} y={tooltipPos.y} />
            )}
          </div>

          <MapLegend />
        </div>
      </FadeIn>

      {/* ─── Selected State Detail ─── */}
      {selectedState && (
        <FadeIn delay={0}>
          <div style={{ marginBottom: 24 }}>
            <NuclearVerdictStateDetail
              state={selectedState}
              onClose={() => setSelectedState(null)}
              isPreview={isPreview && !previewStates.has(selectedState.id)}
            />
          </div>
        </FadeIn>
      )}

      {/* ─── Subscriber Gate for detailed analytics ─── */}
      {isPreview && (
        <FadeIn delay={400}>
          <div
            style={{
              margin: "24px 0",
              padding: "32px 24px",
              background: SENTINEL.bgDark,
              borderRadius: 14,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                background: "radial-gradient(circle, rgba(184,84,80,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Subscriber Exclusive
              </div>
              <h3
                style={{
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontFamily: FONTS.serif,
                  fontWeight: 600,
                  color: "#F1F3F7",
                  margin: "0 0 10px",
                  lineHeight: 1.3,
                }}
              >
                Unlock the Full Nuclear Verdicts<sup style={{ fontSize: "0.5em" }}>&reg;</sup> Intelligence Map
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#8B95A8",
                  lineHeight: 1.65,
                  maxWidth: 460,
                  margin: "0 auto 20px",
                  fontFamily: FONTS.sans,
                }}
              >
                Get detailed state-by-state analytics, case type breakdowns,
                judicial risk assessments, trend data, and downloadable reports.
                Updated monthly with the latest verdict intelligence.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
                {[
                  "All 50 states + DC",
                  "Case type breakdown",
                  "Judicial Hellhole® overlay",
                  "Trend charts",
                  "Monthly updates",
                ].map((feat) => (
                  <span
                    key={feat}
                    style={{
                      fontSize: 10,
                      fontFamily: FONTS.sans,
                      color: "#8B95A8",
                      background: "rgba(255,255,255,0.06)",
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {feat}
                  </span>
                ))}
              </div>
              <a
                href="#subscribe"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "12px 28px",
                  background: "linear-gradient(135deg, #B85450, #922B28)",
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: FONTS.sans,
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Subscribe for Full Access
              </a>
            </div>
          </div>
        </FadeIn>
      )}

      {/* ─── Detailed Analytics (subscribers only in preview mode) ─── */}
      {!isPreview && (
        <>
          <FadeIn delay={400}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <TrendChart />
              <CaseTypeChart />
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <HellholesList />
              <IndustryChart />
            </div>
          </FadeIn>

          {/* ─── Key Findings ─── */}
          <FadeIn delay={550}>
            <div style={{ marginBottom: 24 }}>
              <KeyFindings />
            </div>
          </FadeIn>

          {/* ─── Top States Table ─── */}
          <FadeIn delay={600}>
            <div
              style={{
                marginTop: 24,
                padding: "16px",
                background: SENTINEL.surface,
                border: `1px solid ${SENTINEL.border}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  marginBottom: 12,
                }}
              >
                Top 10 States by Nuclear Verdict® Count
              </div>
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontFamily: FONTS.sans,
                    fontSize: 12,
                  }}
                >
                  <thead>
                    <tr>
                      {["State", "Verdicts", "Total Damages", "Median", "YoY", "Risk"].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "6px 10px",
                            borderBottom: `2px solid ${SENTINEL.border}`,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: SENTINEL.inkMuted,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...STATE_VERDICT_DATA]
                      .sort((a, b) => b.verdictCount2024 - a.verdictCount2024)
                      .slice(0, 10)
                      .map((s) => (
                        <tr
                          key={s.id}
                          onClick={() => setSelectedState(s)}
                          style={{
                            cursor: "pointer",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLTableRowElement).style.background = SENTINEL.bgWarm;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLTableRowElement).style.background = "transparent";
                          }}
                        >
                          <td style={{ padding: "8px 10px", borderBottom: `1px solid ${SENTINEL.border}`, fontWeight: 600, color: SENTINEL.ink }}>
                            {s.name}
                            {s.judicialHellhole && (
                              <span style={{ color: SENTINEL.rose, marginLeft: 4, fontSize: 11 }}>&#9888;</span>
                            )}
                          </td>
                          <td style={{ padding: "8px 10px", borderBottom: `1px solid ${SENTINEL.border}`, color: SENTINEL.ink, fontWeight: 600 }}>
                            {s.verdictCount2024}
                          </td>
                          <td style={{ padding: "8px 10px", borderBottom: `1px solid ${SENTINEL.border}`, color: SENTINEL.ink }}>
                            ${s.totalDamages2024 >= 1000 ? `${(s.totalDamages2024 / 1000).toFixed(1)}B` : `${s.totalDamages2024}M`}
                          </td>
                          <td style={{ padding: "8px 10px", borderBottom: `1px solid ${SENTINEL.border}`, color: SENTINEL.inkLight }}>
                            ${s.medianVerdict}M
                          </td>
                          <td
                            style={{
                              padding: "8px 10px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              color: s.yoyChange > 0 ? SENTINEL.rose : s.yoyChange < 0 ? SENTINEL.emerald : SENTINEL.inkMuted,
                              fontWeight: 600,
                            }}
                          >
                            {s.yoyChange > 0 ? `+${s.yoyChange}%` : s.yoyChange < 0 ? `${s.yoyChange}%` : "—"}
                          </td>
                          <td style={{ padding: "8px 10px", borderBottom: `1px solid ${SENTINEL.border}` }}>
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: getRiskTextColor(s.riskTier),
                                background: getRiskColor(s.riskTier),
                                padding: "2px 8px",
                                borderRadius: 100,
                              }}
                            >
                              {getRiskLabel(s.riskTier)}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* ─── Notable Verdicts Table ─── */}
          <FadeIn delay={700}>
            <div style={{ marginTop: 24 }}>
              <NotableVerdictsTable />
            </div>
          </FadeIn>

          {/* ─── Data Sources ─── */}
          <FadeIn delay={800}>
            <div style={{ marginTop: 24 }}>
              <SourcesList />
            </div>
          </FadeIn>
        </>
      )}

      {/* ─── Attribution Footer ─── */}
      <FadeIn delay={isPreview ? 500 : 700}>
        <div
          style={{
            marginTop: 28,
            padding: "16px",
            background: SENTINEL.bgWarm,
            borderRadius: 10,
            border: `1px solid ${SENTINEL.border}`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
              lineHeight: 1.6,
              marginBottom: 8,
            }}
          >
            {ATTRIBUTION.trademark}
          </div>
          <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, lineHeight: 1.6 }}>
            <strong style={{ color: SENTINEL.inkLight }}>Sources:</strong>{" "}
            {ATTRIBUTION.sources.join(" · ")}
          </div>
          <div
            style={{
              fontSize: 10,
              color: SENTINEL.inkFaint,
              fontFamily: FONTS.sans,
              lineHeight: 1.6,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            {ATTRIBUTION.disclaimer}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
