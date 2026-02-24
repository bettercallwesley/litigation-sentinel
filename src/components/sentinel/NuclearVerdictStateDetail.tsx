"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import {
  StateVerdictData,
  getRiskColor,
  getRiskLabel,
  getRiskTextColor,
  JUDICIAL_HELLHOLES,
} from "@/data/nuclear-verdicts";

interface StateDetailProps {
  state: StateVerdictData;
  onClose: () => void;
  isPreview?: boolean;
}

function StatRow({ label, value, muted }: { label: string; value: string | number; muted?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: `1px solid ${SENTINEL.border}`,
      }}
    >
      <span style={{ fontSize: 12, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>{label}</span>
      <span
        style={{
          fontSize: 13,
          color: muted ? SENTINEL.inkMuted : SENTINEL.ink,
          fontFamily: FONTS.sans,
          fontWeight: muted ? 400 : 600,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function NuclearVerdictStateDetail({ state, onClose, isPreview }: StateDetailProps) {
  const hellhole = JUDICIAL_HELLHOLES.find((h) => h.state === state.id);
  const riskColor = getRiskColor(state.riskTier);
  const riskLabel = getRiskLabel(state.riskTier);
  const riskTextColor = getRiskTextColor(state.riskTier);

  const yoyLabel =
    state.yoyChange > 0
      ? `+${state.yoyChange}%`
      : state.yoyChange < 0
        ? `${state.yoyChange}%`
        : "No change";
  const yoyColor =
    state.yoyChange > 0 ? SENTINEL.rose : state.yoyChange < 0 ? SENTINEL.emerald : SENTINEL.inkMuted;

  return (
    <div
      style={{
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 14,
        padding: "24px",
        position: "relative",
        maxWidth: 420,
        width: "100%",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close detail panel"
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          width: 28,
          height: 28,
          border: `1px solid ${SENTINEL.border}`,
          borderRadius: 6,
          background: SENTINEL.bg,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
        }}
      >
        ×
      </button>

      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <h3
            style={{
              fontSize: 20,
              fontFamily: FONTS.serif,
              fontWeight: 600,
              color: SENTINEL.sentinel,
              margin: 0,
            }}
          >
            {state.name}
          </h3>
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: riskTextColor,
              background: riskColor,
              padding: "3px 10px",
              borderRadius: 100,
              fontFamily: FONTS.sans,
            }}
          >
            {riskLabel} Risk
          </span>
        </div>

        {state.judicialHellhole && hellhole && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 10px",
              background: "rgba(184, 84, 80, 0.06)",
              borderRadius: 8,
              border: "1px solid rgba(184, 84, 80, 0.15)",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 14 }}>&#9888;</span>
            <span style={{ fontSize: 11, color: SENTINEL.rose, fontFamily: FONTS.sans, fontWeight: 600 }}>
              Judicial Hellhole® #{hellhole.rank}: {hellhole.jurisdiction}
            </span>
          </div>
        )}

        {state.watchList && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 10px",
              background: "rgba(196, 140, 44, 0.06)",
              borderRadius: 8,
              border: "1px solid rgba(196, 140, 44, 0.15)",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 12 }}>&#9670;</span>
            <span style={{ fontSize: 11, color: SENTINEL.amber, fontFamily: FONTS.sans, fontWeight: 600 }}>
              ATRA Watch List
            </span>
          </div>
        )}
      </div>

      {/* Blur overlay for preview */}
      {isPreview ? (
        <div style={{ position: "relative" }}>
          <div style={{ filter: "blur(6px)", pointerEvents: "none", userSelect: "none" }}>
            <StatRow label="Nuclear Verdicts® (2024)" value={state.verdictCount2024} />
            <StatRow label="Total Damages (2024)" value={`$${state.totalDamages2024}M`} />
            <StatRow label="Median Verdict" value={`$${state.medianVerdict}M`} />
            <StatRow label="YoY Change" value={yoyLabel} />
            <StatRow label="Largest Verdict" value={`$${state.largestVerdict}M`} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(250,250,248,0.7)",
              borderRadius: 8,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 13,
                  fontFamily: FONTS.sans,
                  fontWeight: 600,
                  color: SENTINEL.sentinel,
                  marginBottom: 4,
                }}
              >
                Subscribe for Full Access
              </div>
              <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
                Detailed state data available to subscribers
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* 2024 Stats */}
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: SENTINEL.sentinelAccent,
                fontFamily: FONTS.sans,
                marginBottom: 8,
              }}
            >
              2024 Overview
            </div>
            <StatRow label="Nuclear Verdicts®" value={state.verdictCount2024 || "0"} />
            <StatRow
              label="Total Damages"
              value={state.totalDamages2024 ? `$${state.totalDamages2024.toLocaleString()}M` : "$0"}
            />
            <StatRow
              label="Median Verdict"
              value={state.medianVerdict ? `$${state.medianVerdict}M` : "—"}
              muted={!state.medianVerdict}
            />
            <StatRow label="YoY Change" value={yoyLabel} />
          </div>

          {/* Largest Verdict */}
          {state.largestVerdict > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  marginBottom: 8,
                }}
              >
                Largest Verdict
              </div>
              <div
                style={{
                  padding: "10px 12px",
                  background: SENTINEL.bgWarm,
                  borderRadius: 8,
                  border: `1px solid ${SENTINEL.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontFamily: FONTS.serif,
                    fontWeight: 600,
                    color: SENTINEL.rose,
                    marginBottom: 4,
                  }}
                >
                  ${state.largestVerdict >= 1000
                    ? `${(state.largestVerdict / 1000).toFixed(1)}B`
                    : `${state.largestVerdict}M`}
                </div>
                <div style={{ fontSize: 11, color: SENTINEL.inkLight, fontFamily: FONTS.sans, lineHeight: 1.4 }}>
                  {state.largestVerdictCase}
                </div>
              </div>
            </div>
          )}

          {/* Comparison */}
          {state.verdictCount2023 > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  marginBottom: 8,
                }}
              >
                Year-over-Year
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    background: SENTINEL.bgWarm,
                    borderRadius: 8,
                    border: `1px solid ${SENTINEL.border}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 2 }}>
                    2023
                  </div>
                  <div style={{ fontSize: 16, fontFamily: FONTS.serif, fontWeight: 600, color: SENTINEL.inkLight }}>
                    {state.verdictCount2023}
                  </div>
                  <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>verdicts</div>
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    background: SENTINEL.bgWarm,
                    borderRadius: 8,
                    border: `1px solid ${SENTINEL.border}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 2 }}>
                    2024
                  </div>
                  <div style={{ fontSize: 16, fontFamily: FONTS.serif, fontWeight: 600, color: yoyColor }}>
                    {state.verdictCount2024}
                  </div>
                  <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>verdicts</div>
                </div>
              </div>
            </div>
          )}

          {/* Top Case Types */}
          {state.topCaseTypes.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  marginBottom: 8,
                }}
              >
                Top Case Types
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {state.topCaseTypes.map((type) => (
                  <span
                    key={type}
                    style={{
                      fontSize: 11,
                      fontFamily: FONTS.sans,
                      fontWeight: 500,
                      color: SENTINEL.accent,
                      background: SENTINEL.accentSoft,
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: `1px solid rgba(27,77,143,0.12)`,
                    }}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* County / Jurisdiction Breakdown */}
          {state.counties && state.counties.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinelAccent,
                  fontFamily: FONTS.sans,
                  marginBottom: 8,
                }}
              >
                County / Jurisdiction Breakdown
              </div>
              <div
                style={{
                  border: `1px solid ${SENTINEL.border}`,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {state.counties
                  .sort((a, b) => b.verdictCount2024 - a.verdictCount2024)
                  .map((county, idx) => {
                    const cRiskColor = getRiskColor(county.riskTier);
                    const cRiskLabel = getRiskLabel(county.riskTier);
                    const cRiskTextColor = getRiskTextColor(county.riskTier);
                    const maxCountyDmg = Math.max(...(state.counties || []).map((c) => c.totalDamages2024));
                    const barWidth = maxCountyDmg > 0 ? (county.totalDamages2024 / maxCountyDmg) * 100 : 0;

                    return (
                      <div
                        key={county.county}
                        style={{
                          padding: "10px 12px",
                          borderBottom: idx < (state.counties?.length || 0) - 1 ? `1px solid ${SENTINEL.border}` : "none",
                          background: county.judicialHellhole ? "rgba(184,84,80,0.03)" : "transparent",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: SENTINEL.ink,
                              fontFamily: FONTS.sans,
                              flex: 1,
                              minWidth: 0,
                            }}
                          >
                            {county.county}
                            {county.judicialHellhole && (
                              <span style={{ color: SENTINEL.rose, marginLeft: 4, fontSize: 11 }}>&#9888;</span>
                            )}
                            {county.watchList && (
                              <span style={{ color: SENTINEL.amber, marginLeft: 4, fontSize: 10 }}>&#9670;</span>
                            )}
                          </span>
                          <span
                            style={{
                              fontSize: 8,
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: cRiskTextColor,
                              background: cRiskColor,
                              padding: "2px 6px",
                              borderRadius: 100,
                              fontFamily: FONTS.sans,
                              flexShrink: 0,
                            }}
                          >
                            {cRiskLabel}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: 12, fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, marginBottom: 4 }}>
                          <span><strong style={{ color: SENTINEL.ink }}>{county.verdictCount2024}</strong> verdicts</span>
                          <span><strong style={{ color: SENTINEL.ink }}>${county.totalDamages2024 >= 1000 ? `${(county.totalDamages2024 / 1000).toFixed(1)}B` : `${county.totalDamages2024}M`}</strong> damages</span>
                        </div>
                        {/* Proportional bar */}
                        <div
                          style={{
                            height: 4,
                            background: SENTINEL.bgWarm,
                            borderRadius: 2,
                            overflow: "hidden",
                            marginBottom: county.notableDetail ? 4 : 0,
                          }}
                        >
                          <div
                            style={{
                              width: `${barWidth}%`,
                              height: "100%",
                              background: cRiskColor,
                              borderRadius: 2,
                            }}
                          />
                        </div>
                        {county.notableDetail && (
                          <div style={{ fontSize: 10, color: SENTINEL.inkMuted, fontFamily: FONTS.sans, lineHeight: 1.4, marginTop: 2 }}>
                            {county.notableDetail}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Notable Detail */}
          {state.notableDetail && (
            <div
              style={{
                padding: "10px 12px",
                background: "rgba(27,77,143,0.04)",
                borderRadius: 8,
                border: `1px solid rgba(27,77,143,0.08)`,
                marginBottom: 12,
              }}
            >
              <div style={{ fontSize: 12, color: SENTINEL.inkLight, fontFamily: FONTS.sans, lineHeight: 1.5 }}>
                {state.notableDetail}
              </div>
            </div>
          )}

          {/* Tort Reform Impact */}
          {state.tortReformImpact && (
            <div
              style={{
                padding: "10px 12px",
                background: "rgba(45,122,95,0.04)",
                borderRadius: 8,
                border: `1px solid rgba(45,122,95,0.12)`,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: SENTINEL.emerald,
                  fontFamily: FONTS.sans,
                  marginBottom: 4,
                }}
              >
                Tort Reform Impact
              </div>
              <div style={{ fontSize: 12, color: SENTINEL.inkLight, fontFamily: FONTS.sans, lineHeight: 1.5 }}>
                {state.tortReformImpact}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
