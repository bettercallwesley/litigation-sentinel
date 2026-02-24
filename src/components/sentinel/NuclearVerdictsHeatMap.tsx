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

// ─── Dark-background heat colors (for the map panel only) ────────────────────

function getDarkMapFill(tier: number): string {
  switch (tier) {
    case 1:
      return "#334155"; // dark slate
    case 2:
      return "#92704C"; // warm bronze
    case 3:
      return "#D97706"; // amber
    case 4:
      return "#DC2626"; // red
    case 5:
      return "#B91C1C"; // deep crimson
    default:
      return "#334155";
  }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  subtext,
  color,
}: {
  label: string;
  value: string;
  subtext?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        padding: "20px 16px 18px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
        textAlign: "center",
        minWidth: 0,
        borderTop: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent gradient top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
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
          fontSize: "clamp(22px, 3vw, 32px)",
          fontFamily: FONTS.serif,
          fontWeight: 700,
          color: color || SENTINEL.sentinel,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {subtext && (
        <div
          style={{
            fontSize: 11,
            color: SENTINEL.inkMuted,
            fontFamily: FONTS.sans,
            marginTop: 6,
          }}
        >
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

  const damagesPoints = NATIONAL_TRENDS.map((t, i) => {
    const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
    const y = chartH - (t.totalDamages / maxDamages) * chartH;
    return `${x},${y}`;
  }).join(" ");

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
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        6-Year Trend (2020–2025)
      </div>
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Marathon Strategies &middot; Preliminary 2025 Data
      </div>
      <svg
        viewBox={`-8 -4 ${chartW + 16} ${chartH + 24}`}
        style={{ width: "100%", height: "auto", maxHeight: 140 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="damagesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={SENTINEL.rose} stopOpacity={0.15} />
            <stop offset="100%" stopColor={SENTINEL.rose} stopOpacity={0.01} />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={0}
            y1={chartH - pct * chartH}
            x2={chartW}
            y2={chartH - pct * chartH}
            stroke={SENTINEL.border}
            strokeWidth={0.4}
          />
        ))}

        {/* Area fill for damages */}
        <polygon
          points={`0,${chartH} ${damagesPoints} ${chartW},${chartH}`}
          fill="url(#damagesFill)"
        />

        {/* Damages line */}
        <polyline
          points={damagesPoints}
          fill="none"
          stroke={SENTINEL.rose}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Verdicts line */}
        <polyline
          points={verdictsPoints}
          fill="none"
          stroke={SENTINEL.accent}
          strokeWidth={1.8}
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
          return (
            <g key={`d-${t.year}`}>
              <circle cx={x} cy={y} r={3.5} fill={SENTINEL.surface} stroke={SENTINEL.rose} strokeWidth={1.5} />
              <circle cx={x} cy={y} r={1.5} fill={SENTINEL.rose} />
            </g>
          );
        })}

        {/* Data points for verdicts */}
        {NATIONAL_TRENDS.map((t, i) => {
          const x = (i / (NATIONAL_TRENDS.length - 1)) * chartW;
          const y = chartH - (t.totalVerdicts / maxVerdicts) * chartH;
          return (
            <g key={`v-${t.year}`}>
              <circle cx={x} cy={y} r={3} fill={SENTINEL.surface} stroke={SENTINEL.accent} strokeWidth={1.2} />
              <circle cx={x} cy={y} r={1.2} fill={SENTINEL.accent} />
            </g>
          );
        })}
      </svg>
      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 18,
              height: 3,
              background: SENTINEL.rose,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
            }}
          >
            Total Damages ($B)
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 18,
              height: 0,
              borderTop: `2px dashed ${SENTINEL.accent}`,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
            }}
          >
            Verdict Count
          </span>
        </div>
      </div>
    </div>
  );
}

function CaseTypeChart() {
  return (
    <div
      style={{
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        Case Type Breakdown
      </div>
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Marathon Strategies
      </div>
      {CASE_TYPE_BREAKDOWN.map((ct) => (
        <div key={ct.type} style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: SENTINEL.ink,
                fontFamily: FONTS.sans,
                fontWeight: 600,
              }}
            >
              {ct.type}
            </span>
            <span
              style={{
                fontSize: 11,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
              }}
            >
              {ct.percentage}% &middot; ${ct.medianAward}M median
            </span>
          </div>
          <div
            style={{
              height: 7,
              background: SENTINEL.bgWarm,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${ct.percentage}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${ct.color}, ${ct.color}dd)`,
                borderRadius: 4,
                transition: "width 1s cubic-bezier(0.22, 1, 0.36, 1)",
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
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.rose}, ${SENTINEL.amber})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        Judicial Hellholes&reg; 2025–2026
      </div>
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Source: American Tort Reform Association
      </div>
      {JUDICIAL_HELLHOLES.map((h) => (
        <div
          key={h.rank}
          style={{
            display: "flex",
            gap: 12,
            padding: "10px 0",
            borderBottom: `1px solid ${SENTINEL.border}`,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              background: `linear-gradient(135deg, ${SENTINEL.rose}, #922B28)`,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: FONTS.sans,
              flexShrink: 0,
            }}
          >
            {h.rank}
          </span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: SENTINEL.ink,
                fontFamily: FONTS.sans,
              }}
            >
              {h.jurisdiction}
            </div>
            <div
              style={{
                fontSize: 11,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
                lineHeight: 1.45,
                marginTop: 2,
              }}
            >
              {h.detail}
            </div>
          </div>
        </div>
      ))}

      {/* Watch List */}
      <div
        style={{
          marginTop: 16,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.amber,
          fontFamily: FONTS.sans,
          marginBottom: 10,
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
              padding: "4px 12px",
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

// ─── Map Tooltip (Glassmorphic) ──────────────────────────────────────────────

function MapTooltip({
  state,
  x,
  y,
}: {
  state: StateVerdictData;
  x: number;
  y: number;
}) {
  const riskColor = getRiskColor(state.riskTier);
  const riskLabel = getRiskLabel(state.riskTier);
  const riskTextColor = getRiskTextColor(state.riskTier);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -110%)",
        background: "rgba(15,23,42,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "12px 16px",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
        pointerEvents: "none",
        zIndex: 20,
        minWidth: 200,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#F1F5F9",
            fontFamily: FONTS.sans,
          }}
        >
          {state.name}
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: riskTextColor,
            background: riskColor,
            padding: "2px 8px",
            borderRadius: 100,
            fontFamily: FONTS.sans,
          }}
        >
          {riskLabel}
        </span>
      </div>
      {state.verdictCount2025 > 0 ? (
        <>
          <div
            style={{
              fontSize: 12,
              color: "#CBD5E1",
              fontFamily: FONTS.sans,
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: "#F1F5F9" }}>
              {state.verdictCount2025}
            </strong>{" "}
            nuclear verdicts &middot;{" "}
            <strong style={{ color: "#F1F5F9" }}>
              $
              {state.totalDamages2025 >= 1000
                ? `${(state.totalDamages2025 / 1000).toFixed(1)}B`
                : `${state.totalDamages2025}M`}
            </strong>{" "}
            total
          </div>
          {state.judicialHellhole && (
            <div
              style={{
                fontSize: 10,
                color: "#FCA5A5",
                fontFamily: FONTS.sans,
                marginTop: 3,
              }}
            >
              &#9888; Judicial Hellhole&reg;
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            fontSize: 12,
            color: "#64748B",
            fontFamily: FONTS.sans,
          }}
        >
          No nuclear verdicts recorded
        </div>
      )}
      <div
        style={{
          fontSize: 11,
          color: "#60A5FA",
          fontFamily: FONTS.sans,
          marginTop: 6,
          fontWeight: 500,
        }}
      >
        Click to explore &rarr;
      </div>
    </div>
  );
}

// ─── Map Legend (Gradient bar) ────────────────────────────────────────────────

function MapLegend() {
  const tiers = [
    { tier: 1, label: "Low", color: "#334155" },
    { tier: 2, label: "Moderate", color: "#92704C" },
    { tier: 3, label: "Elevated", color: "#D97706" },
    { tier: 4, label: "High", color: "#DC2626" },
    { tier: 5, label: "Critical", color: "#B91C1C" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "14px 0 6px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          borderRadius: 6,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.tier}
            style={{
              width: 48,
              height: 14,
              background: t.color,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: 240,
          justifyContent: "space-between",
        }}
      >
        {tiers.map((t) => (
          <span
            key={t.tier}
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.5)",
              fontFamily: FONTS.sans,
              textAlign: "center",
              width: 48,
            }}
          >
            {t.label}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 4,
        }}
      >
        <span
          className="hellhole-pulse"
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#DC2626",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.5)",
            fontFamily: FONTS.sans,
          }}
        >
          Judicial Hellhole&reg;
        </span>
      </div>
    </div>
  );
}

// ─── Notable Verdicts Table ──────────────────────────────────────────────────

function NotableVerdictsTable() {
  return (
    <div
      style={{
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.rose}, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        Notable Nuclear Verdicts&reg; — Verified Landmark Cases
      </div>
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Sources: Marathon Strategies, Morgan &amp; Morgan, Tyson &amp; Mendes,
        Public Court Records
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
              {["Amount", "Case", "State", "Year", "Type", "Source"].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "8px 10px",
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
                )
              )}
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
                  (
                    e.currentTarget as HTMLTableRowElement
                  ).style.background = SENTINEL.bgWarm;
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLTableRowElement
                  ).style.background = "transparent";
                }}
              >
                <td
                  style={{
                    padding: "10px 10px",
                    fontWeight: 700,
                    color:
                      v.amount >= 1000 ? SENTINEL.rose : SENTINEL.ink,
                    fontFamily: FONTS.serif,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {v.amountLabel}
                    {v.amount >= 1000 && (
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: `linear-gradient(135deg, ${SENTINEL.rose}, #922B28)`,
                          padding: "2px 6px",
                          borderRadius: 4,
                          fontFamily: FONTS.sans,
                          lineHeight: 1,
                        }}
                      >
                        BILLION
                      </span>
                    )}
                    {v.year >= 2025 && (
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: `linear-gradient(135deg, ${SENTINEL.emerald}, #1a5e45)`,
                          padding: "2px 6px",
                          borderRadius: 4,
                          fontFamily: FONTS.sans,
                          lineHeight: 1,
                        }}
                      >
                        NEW
                      </span>
                    )}
                  </span>
                </td>
                <td style={{ padding: "10px 10px", maxWidth: 240 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: SENTINEL.ink,
                      fontSize: 11,
                      lineHeight: 1.3,
                    }}
                  >
                    {v.caseName}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: SENTINEL.inkMuted,
                      lineHeight: 1.45,
                      marginTop: 2,
                    }}
                  >
                    {v.detail}
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px 10px",
                    whiteSpace: "nowrap",
                    color: SENTINEL.ink,
                  }}
                >
                  {v.state}
                  <div
                    style={{
                      fontSize: 9,
                      color: SENTINEL.inkMuted,
                    }}
                  >
                    {v.jurisdiction}
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px 10px",
                    color: SENTINEL.inkLight,
                    fontWeight: v.year >= 2025 ? 700 : 400,
                  }}
                >
                  {v.year}
                </td>
                <td style={{ padding: "10px 10px" }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: SENTINEL.accent,
                      background: SENTINEL.accentSoft,
                      padding: "3px 8px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.caseType}
                  </span>
                </td>
                <td
                  style={{
                    padding: "10px 10px",
                    fontSize: 10,
                    color: SENTINEL.inkMuted,
                    whiteSpace: "nowrap",
                  }}
                >
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

// ─── Industry Breakdown ──────────────────────────────────────────────────────

function IndustryChart() {
  const maxDmg = Math.max(...INDUSTRY_BREAKDOWN.map((b) => b.totalDamages));
  return (
    <div
      style={{
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Marathon Strategies &middot; Total damages by sector
      </div>
      {INDUSTRY_BREAKDOWN.map((b) => (
        <div key={b.industry} style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: SENTINEL.ink,
                fontFamily: FONTS.sans,
                fontWeight: 600,
              }}
            >
              {b.industry}
            </span>
            <span
              style={{
                fontSize: 11,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
              }}
            >
              ${b.totalDamages}B
            </span>
          </div>
          <div
            style={{
              height: 7,
              background: SENTINEL.bgWarm,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(b.totalDamages / maxDmg) * 100}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${b.color}, ${b.color}dd)`,
                borderRadius: 4,
                transition: "width 1s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Key Findings (Social Inflation Stats) ───────────────────────────────────

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
      label: "Juror Attitude Shift",
      value: `"Too many lawsuits": 90% agreed (2016) → 56% agree (2025)`,
      source: "Swiss Re Verdicts on Trial 2025",
      color: "#E74C3C",
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
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        Key Findings — Social Inflation &amp; Defense Intelligence
      </div>
      <div
        style={{
          fontSize: 10,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 14,
        }}
      >
        Multi-source actuarial and industry data
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        {findings.map((f) => (
          <div
            key={f.label}
            style={{
              padding: "14px",
              background: SENTINEL.bgWarm,
              borderRadius: 10,
              borderLeft: `3px solid ${f.color}`,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: SENTINEL.inkLight,
                fontFamily: FONTS.sans,
                marginBottom: 6,
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
                marginBottom: 6,
              }}
            >
              {f.value}
            </div>
            <div
              style={{
                fontSize: 9,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
              }}
            >
              Source: {f.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Data Sources ────────────────────────────────────────────────────────────

function SourcesList() {
  return (
    <div
      style={{
        padding: "20px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
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
          background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
          borderRadius: "14px 14px 0 0",
        }}
      />
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
        Data Sources &amp; Methodology
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 10,
        }}
      >
        {DATA_SOURCES.map((s) => (
          <div
            key={s.name}
            style={{
              padding: "12px 14px",
              background: SENTINEL.bgWarm,
              borderRadius: 10,
              border: `1px solid ${SENTINEL.border}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 6,
              }}
            >
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
                  color:
                    s.accessLevel === "free"
                      ? SENTINEL.emerald
                      : SENTINEL.amber,
                  background:
                    s.accessLevel === "free"
                      ? "rgba(45,122,95,0.08)"
                      : "rgba(196,140,44,0.08)",
                  padding: "2px 8px",
                  borderRadius: 100,
                  fontFamily: FONTS.sans,
                  flexShrink: 0,
                }}
              >
                {s.accessLevel}
              </span>
            </div>
            <div
              style={{
                fontSize: 10,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
                lineHeight: 1.45,
              }}
            >
              {s.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function NuclearVerdictsHeatMap({
  isPreview = false,
}: {
  isPreview?: boolean;
}) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<StateVerdictData | null>(
    null
  );
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // States shown in preview mode
  const previewStates = new Set([
    "TX",
    "CA",
    "PA",
    "NY",
    "NV",
    "FL",
    "OH",
    "WI",
    "OR",
  ]);

  const handleMouseEnter = useCallback(
    (stateId: string, event: React.MouseEvent<SVGPathElement>) => {
      setHoveredState(stateId);
      const rect = (
        event.target as SVGPathElement
      ).ownerSVGElement?.getBoundingClientRect();
      const targetRect = (
        event.target as SVGPathElement
      ).getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: targetRect.left + targetRect.width / 2 - rect.left,
          y: targetRect.top - rect.top,
        });
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredState(null);
  }, []);

  const handleClick = useCallback((stateId: string) => {
    const stateData = STATE_VERDICT_DATA.find((s) => s.id === stateId);
    if (stateData) {
      setSelectedState(stateData);
      setHoveredState(null);
    }
  }, []);

  const hoveredStateData = hoveredState
    ? STATE_VERDICT_DATA.find((s) => s.id === hoveredState) || null
    : null;

  const stateDataMap = new Map(STATE_VERDICT_DATA.map((s) => [s.id, s]));

  const isBlurred = (stateId: string) =>
    isPreview && !previewStates.has(stateId);

  // Judicial hellhole positions for pulsing dots
  const hellholePositions = JUDICIAL_HELLHOLES.map((h) => {
    const sp = US_STATE_PATHS.find((s) => s.id === h.state);
    return sp ? { ...h, labelX: sp.labelX, labelY: sp.labelY } : null;
  }).filter(Boolean) as Array<{
    rank: number;
    jurisdiction: string;
    state: string;
    detail: string;
    labelX: number;
    labelY: number;
  }>;

  return (
    <div>
      {/* ─── Pulsing animation keyframes ─── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes hellholePulse {
              0% {
                box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.6);
                transform: scale(1);
              }
              50% {
                box-shadow: 0 0 0 6px rgba(220, 38, 38, 0);
                transform: scale(1.1);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
                transform: scale(1);
              }
            }
            @keyframes svgPulse {
              0% { r: 5; opacity: 0.9; }
              50% { r: 8; opacity: 0.4; }
              100% { r: 5; opacity: 0.9; }
            }
            @keyframes svgPulseOuter {
              0% { r: 8; opacity: 0.3; }
              50% { r: 14; opacity: 0; }
              100% { r: 8; opacity: 0.3; }
            }
            .hellhole-pulse {
              animation: hellholePulse 2s ease-in-out infinite;
            }
            .map-state-path {
              transition: filter 0.2s ease, opacity 0.2s ease, stroke-width 0.2s ease;
            }
            .map-state-path:hover {
              filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));
            }
          `,
        }}
      />

      {/* ─── Hero Header ─── */}
      <FadeIn delay={100}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          {/* Gold pill badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 16px",
              background: SENTINEL.goldSoft,
              border: `1px solid rgba(193,154,62,0.2)`,
              borderRadius: 100,
              marginBottom: 16,
            }}
          >
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
              2026 Edition — Interactive Intelligence
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              fontFamily: FONTS.serif,
              fontWeight: 700,
              color: SENTINEL.sentinel,
              margin: "0 0 14px",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Nuclear Verdicts
            <sup style={{ fontSize: "0.4em", verticalAlign: "super" }}>
              &reg;
            </sup>{" "}
            Heat Map
          </h1>
          <p
            style={{
              fontSize: 15,
              color: SENTINEL.inkLight,
              lineHeight: 1.7,
              maxWidth: 580,
              margin: "0 auto",
              fontFamily: FONTS.sans,
            }}
          >
            Explore the geography of nuclear verdicts across the United States.
            Click any state to see verdict frequency, total damages, judicial
            risk factors, and year-over-year trends.
          </p>
          <div
            style={{
              marginTop: 14,
              fontSize: 11,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
            }}
          >
            Data: Marathon Strategies &middot; Morgan &amp; Morgan
            &middot; Tyson &amp; Mendes &middot; 15+ actuarial sources
          </div>
        </div>
      </FadeIn>

      {/* ─── Key Stats Banner ─── */}
      <FadeIn delay={200}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <StatCard
            label="Nuclear Verdicts&reg;"
            value={KEY_STATS.totalVerdicts2025.toString()}
            subtext={`Preliminary · ${KEY_STATS.totalVerdicts2024} in 2024`}
            color={SENTINEL.rose}
          />
          <StatCard
            label="Total Damages"
            value={`$${KEY_STATS.totalDamages2025}B`}
            subtext={`Preliminary · $${KEY_STATS.totalDamages2024}B in 2024`}
            color={SENTINEL.sentinel}
          />
          <StatCard
            label="Median Verdict"
            value={`$${KEY_STATS.medianVerdict2025}M`}
            subtext={`vs. $${KEY_STATS.medianVerdict2024}M in 2024`}
          />
          <StatCard
            label="$100M+ Verdicts"
            value={KEY_STATS.thermonuclearCount2025.toString()}
            subtext={`Including ${KEY_STATS.billionPlusCount2025} over $1B`}
            color={SENTINEL.rose}
          />
        </div>
      </FadeIn>

      {/* ─── Dark Map Panel ─── */}
      <FadeIn delay={300}>
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
            borderRadius: 14,
            padding: "28px 20px 12px",
            marginBottom: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Ambient glow effects */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "10%",
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(185,28,28,0.08) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              right: "15%",
              width: 350,
              height: 350,
              background:
                "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              width: 500,
              height: 500,
              transform: "translateX(-50%)",
              background:
                "radial-gradient(circle, rgba(27,77,143,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              fontFamily: FONTS.sans,
              marginBottom: 16,
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            Click a state to explore &middot; {KEY_STATS.statesWithActivity2025} states with nuclear verdicts
          </div>

          {/* SVG Map */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 860,
              margin: "0 auto",
              zIndex: 1,
            }}
          >
            <svg
              viewBox="-65 0 1050 620"
              style={{
                width: "100%",
                height: "auto",
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* State paths */}
              {US_STATE_PATHS.map((sp) => {
                const sd = stateDataMap.get(sp.id);
                const tier = sd?.riskTier || 1;
                const fill = getDarkMapFill(tier);
                const isHovered = hoveredState === sp.id;
                const blurred = isBlurred(sp.id);

                return (
                  <path
                    key={sp.id}
                    d={sp.d}
                    fill={blurred ? "rgba(51,65,85,0.3)" : fill}
                    stroke={
                      isHovered
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.12)"
                    }
                    strokeWidth={isHovered ? 2.5 : 0.8}
                    className="map-state-path"
                    style={{
                      cursor: blurred ? "default" : "pointer",
                      opacity: blurred ? 0.3 : isHovered ? 1 : 0.92,
                      filter: blurred
                        ? "blur(1.5px)"
                        : isHovered
                        ? "drop-shadow(0 0 12px rgba(255,255,255,0.35))"
                        : "none",
                    }}
                    onMouseEnter={(e) =>
                      !blurred && handleMouseEnter(sp.id, e)
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() => !blurred && handleClick(sp.id)}
                  />
                );
              })}

              {/* State labels for larger states */}
              {US_STATE_PATHS.filter(
                (sp) =>
                  !SMALL_STATE_LABELS.some((s) => s.id === sp.id)
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
                    fill={
                      tier >= 3
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.6)"
                    }
                    fontSize={10}
                    fontWeight={700}
                    fontFamily={FONTS.sans}
                    style={{ pointerEvents: "none" }}
                  >
                    {sp.id}
                  </text>
                );
              })}

              {/* Small state external labels */}
              {SMALL_STATE_LABELS.map((sl) => {
                const blurred = isBlurred(sl.id);
                if (blurred) return null;
                return (
                  <g key={`small-${sl.id}`}>
                    <line
                      x1={sl.lineEndX}
                      y1={sl.lineEndY}
                      x2={sl.labelX - 8}
                      y2={sl.labelY}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth={0.5}
                    />
                    <text
                      x={sl.labelX}
                      y={sl.labelY}
                      textAnchor="start"
                      dominantBaseline="middle"
                      fill="rgba(255,255,255,0.45)"
                      fontSize={8}
                      fontFamily={FONTS.sans}
                    >
                      {sl.name}
                    </text>
                  </g>
                );
              })}

              {/* Pulsing Judicial Hellhole indicators */}
              {hellholePositions.map((h) => {
                if (isBlurred(h.state)) return null;
                return (
                  <g key={`hellhole-${h.state}`}>
                    {/* Outer pulsing ring */}
                    <circle
                      cx={h.labelX}
                      cy={h.labelY - 16}
                      r={10}
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth={1}
                      opacity={0.3}
                      style={{
                        animation:
                          "svgPulseOuter 2s ease-in-out infinite",
                      }}
                    />
                    {/* Pulsing red dot */}
                    <circle
                      cx={h.labelX}
                      cy={h.labelY - 16}
                      r={6}
                      fill="#DC2626"
                      opacity={0.85}
                      style={{
                        animation:
                          "svgPulse 2s ease-in-out infinite",
                      }}
                    />
                    {/* Rank number */}
                    <text
                      x={h.labelX}
                      y={h.labelY - 13}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={7}
                      fontWeight={800}
                      fontFamily={FONTS.sans}
                    >
                      {h.rank}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Tooltip */}
            {hoveredStateData && (
              <MapTooltip
                state={hoveredStateData}
                x={tooltipPos.x}
                y={tooltipPos.y}
              />
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
              isPreview={
                isPreview && !previewStates.has(selectedState.id)
              }
            />
          </div>
        </FadeIn>
      )}

      {/* ─── Subscriber Gate for preview mode ─── */}
      {isPreview && (
        <FadeIn delay={400}>
          <div
            style={{
              margin: "24px 0",
              padding: "40px 28px",
              background: "linear-gradient(135deg, #0A0E1A 0%, #1E293B 100%)",
              borderRadius: 14,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 280,
                height: 280,
                background:
                  "radial-gradient(circle, rgba(184,84,80,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 200,
                height: 200,
                background:
                  "radial-gradient(circle, rgba(193,154,62,0.1) 0%, transparent 70%)",
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
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                Subscriber Exclusive
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontFamily: FONTS.serif,
                  fontWeight: 600,
                  color: "#F1F3F7",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                Unlock the Full Nuclear Verdicts
                <sup style={{ fontSize: "0.45em" }}>&reg;</sup>{" "}
                Intelligence Map
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#8B95A8",
                  lineHeight: 1.7,
                  maxWidth: 500,
                  margin: "0 auto 24px",
                  fontFamily: FONTS.sans,
                }}
              >
                Get detailed state-by-state analytics, case type breakdowns,
                judicial risk assessments, trend data, and downloadable
                reports. Updated monthly with the latest verdict intelligence.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {[
                  "All 50 states + DC",
                  "Case type breakdown",
                  "Judicial Hellhole\u00AE overlay",
                  "Trend charts",
                  "Monthly updates",
                ].map((feat) => (
                  <span
                    key={feat}
                    style={{
                      fontSize: 10,
                      fontFamily: FONTS.sans,
                      color: "#94A3B8",
                      background: "rgba(255,255,255,0.06)",
                      padding: "5px 12px",
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
                  gap: 8,
                  padding: "14px 32px",
                  background:
                    "linear-gradient(135deg, #B85450, #922B28)",
                  borderRadius: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: FONTS.sans,
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(184,84,80,0.3)",
                }}
              >
                Subscribe for Full Access
              </a>
            </div>
          </div>
        </FadeIn>
      )}

      {/* ─── Detailed Analytics (full mode only) ─── */}
      {!isPreview && (
        <>
          {/* Trend + Case Type */}
          <FadeIn delay={400}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <TrendChart />
              <CaseTypeChart />
            </div>
          </FadeIn>

          {/* Hellholes + Industry */}
          <FadeIn delay={500}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <HellholesList />
              <IndustryChart />
            </div>
          </FadeIn>

          {/* Key Findings */}
          <FadeIn delay={550}>
            <div style={{ marginBottom: 24 }}>
              <KeyFindings />
            </div>
          </FadeIn>

          {/* ─── Top 10 States Table ─── */}
          <FadeIn delay={600}>
            <div
              style={{
                marginTop: 24,
                padding: "20px",
                background: SENTINEL.surface,
                border: `1px solid ${SENTINEL.border}`,
                borderRadius: 14,
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
                  background: `linear-gradient(90deg, ${SENTINEL.sentinelAccent}, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
                  borderRadius: "14px 14px 0 0",
                }}
              />
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
                Top 10 States by Nuclear Verdict&reg; Count
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: SENTINEL.inkMuted,
                  fontFamily: FONTS.sans,
                  marginBottom: 14,
                }}
              >
                2024–2025 Data &middot; Click any row to
                explore
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
                      {[
                        "State",
                        "Verdicts",
                        "Total Damages",
                        "Median",
                        "YoY",
                        "Risk",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "8px 12px",
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
                      .sort(
                        (a, b) =>
                          (b.verdictCount2025 + b.verdictCount2024) - (a.verdictCount2025 + a.verdictCount2024)
                      )
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
                            (
                              e.currentTarget as HTMLTableRowElement
                            ).style.background = SENTINEL.bgWarm;
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLTableRowElement
                            ).style.background = "transparent";
                          }}
                        >
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              fontWeight: 600,
                              color: SENTINEL.ink,
                            }}
                          >
                            {s.name}
                            {s.judicialHellhole && (
                              <span
                                style={{
                                  color: SENTINEL.rose,
                                  marginLeft: 6,
                                  fontSize: 11,
                                }}
                              >
                                &#9888;
                              </span>
                            )}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              color: SENTINEL.ink,
                              fontWeight: 700,
                              fontFamily: FONTS.serif,
                              fontSize: 14,
                            }}
                          >
                            {s.verdictCount2025 + s.verdictCount2024}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              color: SENTINEL.ink,
                            }}
                          >
                            $
                            {s.totalDamages2025 + s.totalDamages2024 >= 1000
                              ? `${((s.totalDamages2025 + s.totalDamages2024) / 1000).toFixed(1)}B`
                              : `${s.totalDamages2025 + s.totalDamages2024}M`}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              color: SENTINEL.inkLight,
                            }}
                          >
                            ${s.medianVerdict}M
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                              color:
                                s.yoyChange > 0
                                  ? SENTINEL.rose
                                  : s.yoyChange < 0
                                  ? SENTINEL.emerald
                                  : SENTINEL.inkMuted,
                              fontWeight: 600,
                            }}
                          >
                            {s.yoyChange > 0
                              ? `+${s.yoyChange}%`
                              : s.yoyChange < 0
                              ? `${s.yoyChange}%`
                              : "\u2014"}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              borderBottom: `1px solid ${SENTINEL.border}`,
                            }}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: getRiskTextColor(s.riskTier),
                                background: getRiskColor(s.riskTier),
                                padding: "3px 10px",
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
      <FadeIn delay={isPreview ? 500 : 900}>
        <div
          style={{
            marginTop: 32,
            padding: "20px",
            background: SENTINEL.bgWarm,
            borderRadius: 14,
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
          <div
            style={{
              fontSize: 10,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: SENTINEL.inkLight }}>Sources:</strong>{" "}
            {ATTRIBUTION.sources.join(" \u00B7 ")}
          </div>
          <div
            style={{
              fontSize: 10,
              color: SENTINEL.inkFaint,
              fontFamily: FONTS.sans,
              lineHeight: 1.6,
              marginTop: 8,
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
