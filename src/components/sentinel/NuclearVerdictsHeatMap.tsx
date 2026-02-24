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
  ATTRIBUTION,
} from "@/data/nuclear-verdicts";
import { US_STATE_PATHS, SMALL_STATE_LABELS } from "@/data/us-map-paths";
import NuclearVerdictStateDetail from "./NuclearVerdictStateDetail";

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
        padding: "16px 14px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 12,
        textAlign: "center",
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontFamily: FONTS.serif,
          fontWeight: 700,
          color: color || SENTINEL.sentinel,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {subtext && (
        <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginTop: 4 }}>
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
        Case Type Breakdown (2024)
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
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 10,
        padding: "10px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        pointerEvents: "none",
        zIndex: 20,
        minWidth: 180,
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: SENTINEL.sentinel,
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
            padding: "1px 6px",
            borderRadius: 100,
            fontFamily: FONTS.sans,
          }}
        >
          {riskLabel}
        </span>
      </div>
      {state.verdictCount2024 > 0 ? (
        <>
          <div style={{ fontSize: 11, color: SENTINEL.inkLight, fontFamily: FONTS.sans }}>
            <strong>{state.verdictCount2024}</strong> nuclear verdicts · <strong>${state.totalDamages2024 >= 1000 ? `${(state.totalDamages2024 / 1000).toFixed(1)}B` : `${state.totalDamages2024}M`}</strong> total
          </div>
          {state.judicialHellhole && (
            <div style={{ fontSize: 10, color: SENTINEL.rose, fontFamily: FONTS.sans, marginTop: 2 }}>
              &#9888; Judicial Hellhole®
            </div>
          )}
        </>
      ) : (
        <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
          No nuclear verdicts recorded in 2024
        </div>
      )}
      <div style={{ fontSize: 10, color: SENTINEL.accent, fontFamily: FONTS.sans, marginTop: 4 }}>
        Click for details
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
        gap: 4,
        padding: "10px 0",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginRight: 4 }}>
        Risk:
      </span>
      {tiers.map((tier) => (
        <div key={tier} style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              background: getRiskColor(tier),
              border: tier === 1 ? `1px solid ${SENTINEL.border}` : "none",
            }}
          />
          <span style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginRight: 6 }}>
            {getRiskLabel(tier)}
          </span>
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", gap: 3, marginLeft: 8 }}>
        <span style={{ fontSize: 12, color: SENTINEL.rose }}>&#9888;</span>
        <span style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
          Judicial Hellhole®
        </span>
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
      {/* ─── Hero Header ─── */}
      <FadeIn delay={100}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: SENTINEL.sentinelAccent,
              fontFamily: FONTS.sans,
              marginBottom: 10,
            }}
          >
            Interactive Intelligence
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontFamily: FONTS.serif,
              fontWeight: 700,
              color: SENTINEL.sentinel,
              margin: "0 0 10px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Nuclear Verdicts<sup style={{ fontSize: "0.5em", verticalAlign: "super" }}>&reg;</sup> Heat Map
          </h1>
          <p
            style={{
              fontSize: 15,
              color: SENTINEL.inkLight,
              lineHeight: 1.65,
              maxWidth: 540,
              margin: "0 auto",
              fontFamily: FONTS.sans,
            }}
          >
            Explore the geography of nuclear verdicts across the United States.
            Click any state to see verdict frequency, total damages, judicial risk factors,
            and year-over-year trends.
          </p>
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
            label="Nuclear Verdicts® (2024)"
            value={KEY_STATS.totalVerdicts2024.toString()}
            subtext={`+${KEY_STATS.yoyVerdictGrowth}% YoY`}
            color={SENTINEL.rose}
          />
          <StatCard
            label="Total Damages"
            value={`$${KEY_STATS.totalDamages2024}B`}
            subtext={`+${KEY_STATS.yoyDamagesGrowth}% YoY`}
            color={SENTINEL.sentinel}
          />
          <StatCard
            label="Median Verdict"
            value={`$${KEY_STATS.medianVerdict2024}M`}
            subtext="Up from $44M in 2023"
          />
          <StatCard
            label="$100M+ Verdicts"
            value={KEY_STATS.thermonuclearCount2024.toString()}
            subtext={`Including ${KEY_STATS.billionPlusCount2024} over $1B`}
            color={SENTINEL.rose}
          />
        </div>
      </FadeIn>

      {/* ─── Interactive Map ─── */}
      <FadeIn delay={300}>
        <div
          style={{
            position: "relative",
            background: SENTINEL.surface,
            border: `1px solid ${SENTINEL.border}`,
            borderRadius: 14,
            padding: "20px 16px 8px",
            marginBottom: 12,
            overflow: "hidden",
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
              textAlign: "center",
            }}
          >
            Click a state to explore
          </div>

          {/* SVG Map container with aspect ratio */}
          <div style={{ position: "relative", width: "100%", maxWidth: 800, margin: "0 auto" }}>
            <svg
              viewBox="100 90 810 480"
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
                const fill = getRiskColor(tier);
                const isHovered = hoveredState === sp.id;
                const blurred = isBlurred(sp.id);

                return (
                  <path
                    key={sp.id}
                    d={sp.d}
                    fill={blurred ? "#D5D3CE" : fill}
                    stroke={isHovered ? SENTINEL.sentinel : "#FFFFFF"}
                    strokeWidth={isHovered ? 2 : 1}
                    style={{
                      cursor: "pointer",
                      transition: "fill 0.2s, stroke-width 0.2s",
                      opacity: blurred ? 0.4 : isHovered ? 1 : 0.88,
                      filter: blurred ? "blur(1px)" : "none",
                    }}
                    onMouseEnter={(e) => !blurred && handleMouseEnter(sp.id, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => !blurred && handleClick(sp.id)}
                  />
                );
              })}

              {/* State labels (only for larger states) */}
              {US_STATE_PATHS.filter(
                (sp) => !SMALL_STATE_LABELS.some((s) => s.id === sp.id),
              ).map((sp) => {
                const blurred = isBlurred(sp.id);
                if (blurred) return null;
                return (
                  <text
                    key={`label-${sp.id}`}
                    x={sp.labelX}
                    y={sp.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={getRiskTextColor(stateDataMap.get(sp.id)?.riskTier || 1)}
                    fontSize={9}
                    fontWeight={600}
                    fontFamily={FONTS.sans}
                    style={{ pointerEvents: "none" }}
                  >
                    {sp.id}
                  </text>
                );
              })}

              {/* Small state external labels with leader lines */}
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
                      stroke={SENTINEL.inkFaint}
                      strokeWidth={0.5}
                    />
                    <text
                      x={sl.labelX}
                      y={sl.labelY}
                      textAnchor="start"
                      dominantBaseline="middle"
                      fill={SENTINEL.inkMuted}
                      fontSize={8}
                      fontFamily={FONTS.sans}
                    >
                      {sl.name}
                    </text>
                  </g>
                );
              })}

              {/* Judicial Hellhole indicators */}
              {JUDICIAL_HELLHOLES.map((h) => {
                const sp = US_STATE_PATHS.find((s) => s.id === h.state);
                if (!sp || isBlurred(h.state)) return null;
                return (
                  <g key={`hellhole-${h.state}`}>
                    <circle
                      cx={sp.labelX}
                      cy={sp.labelY - 14}
                      r={5}
                      fill={SENTINEL.rose}
                      opacity={0.9}
                    />
                    <text
                      x={sp.labelX}
                      y={sp.labelY - 11}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={6}
                      fontWeight={700}
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
            <HellholesList />
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
                Top 10 States by Nuclear Verdict® Count (2024)
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
