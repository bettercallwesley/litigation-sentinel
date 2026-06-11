"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { useCanHover, useReducedMotion } from "./hooks";

// S7. THE PORTFOLIO (phase: DECISION)
// S7a Docket Dashboard: the two-firm filter. S7b Precedent Dashboard:
// the panel scorecard with hover-flip cards and a queryable re-sort.

// ── S7a data ─────────────────────────────────────────────────────────────────

interface FirmMetric {
  value: string;
  label: string;
  tone: "rose" | "amber" | "emerald";
}

const FIRM_07: FirmMetric[] = [
  { value: "~50%", label: "of cases over budget", tone: "rose" },
  { value: "2-3 yrs", label: "typical case age", tone: "amber" },
  { value: "4+ months", label: "since last negotiation activity", tone: "rose" },
  { value: "25%+", label: "headed to trial", tone: "rose" },
];

const FIRM_12: FirmMetric[] = [
  { value: "0", label: "cases over budget", tone: "emerald" },
  { value: "Active", label: "negotiation or mediation on most files", tone: "emerald" },
  { value: "5.5%", label: "headed to trial", tone: "emerald" },
];

const TONE = {
  rose: { color: COLORS.rose, glow: COLORS.roseGlow },
  amber: { color: COLORS.amber, glow: COLORS.amberGlow },
  emerald: { color: COLORS.emerald, glow: COLORS.emeraldGlow },
};

// ── S7b data ─────────────────────────────────────────────────────────────────

interface PanelFirm {
  id: string;
  cycle: string;
  vsEval: string;
  trialRate: string;
  back: string;
  allRank: number;
  premisesRank: number;
}

const PANEL_FIRMS: PanelFirm[] = [
  { id: "PANEL FIRM 03", cycle: "14 mo", vsEval: "-4%", trialRate: "6%", back: "SEND: premises, TX/FL", allRank: 1, premisesRank: 1 },
  { id: "PANEL FIRM 12", cycle: "16 mo", vsEval: "-2%", trialRate: "5.5%", back: "SEND: auto, GA/SC", allRank: 2, premisesRank: 4 },
  { id: "PANEL FIRM 21", cycle: "18 mo", vsEval: "+3%", trialRate: "9%", back: "WATCH: cycle time drifting", allRank: 3, premisesRank: 2 },
  { id: "PANEL FIRM 09", cycle: "21 mo", vsEval: "+8%", trialRate: "12%", back: "WATCH: trial rate rising in premises", allRank: 4, premisesRank: 3 },
  { id: "PANEL FIRM 16", cycle: "24 mo", vsEval: "+18%", trialRate: "15%", back: "REVIEW: settles 18% above evaluation", allRank: 5, premisesRank: 6 },
  { id: "PANEL FIRM 07", cycle: "31 mo", vsEval: "+26%", trialRate: "25%+", back: "REVIEW: every flag in the book", allRank: 6, premisesRank: 5 },
];

function FlipCard({ firm, reduced, canHover }: { firm: PanelFirm; reduced: boolean; canHover: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const isReview = firm.back.startsWith("REVIEW");
  const isWatch = firm.back.startsWith("WATCH");
  const backColor = isReview ? COLORS.rose : isWatch ? COLORS.amber : COLORS.emerald;

  // Hover-capable input flips on hover; touch input flips on tap. Never both:
  // a tap on mobile fires mouseenter then click, which would set-then-untoggle.
  return (
    <motion.div
      layout={!reduced}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={canHover ? () => setFlipped(true) : undefined}
      onMouseLeave={canHover ? () => setFlipped(false) : undefined}
      onClick={canHover ? undefined : () => setFlipped((f) => !f)}
      style={{ perspective: 900, cursor: "pointer", minHeight: 150 }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 150,
          transformStyle: "preserve-3d" as const,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: reduced ? "none" : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden" as const,
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.14em", color: COLORS.textSecondary, marginBottom: 12 }}>
            {firm.id}
          </div>
          {[
            ["AVG CYCLE", firm.cycle],
            ["VS EVALUATION", firm.vsEval],
            ["TRIAL RATE", firm.trialRate],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: 9.5, letterSpacing: "0.1em", color: COLORS.textMuted }}>{k}</span>
              <span style={{ fontFamily: FONTS.mono, fontSize: 12, color: COLORS.textPrimary }}>{v}</span>
            </div>
          ))}
        </div>
        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden" as const,
            transform: "rotateY(180deg)",
            background: COLORS.deep,
            border: `1px solid ${backColor}`,
            borderRadius: 10,
            padding: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: FONTS.mono, fontSize: 12, letterSpacing: "0.06em", color: backColor, textAlign: "center", lineHeight: 1.5 }}>
            {firm.back}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SectionPortfolio() {
  const reduced = useReducedMotion();
  const canHover = useCanHover();
  const [firmTab, setFirmTab] = useState<"07" | "12">("07");
  const [caseFilter, setCaseFilter] = useState<"all" | "premises">("all");

  const metrics = firmTab === "07" ? FIRM_07 : FIRM_12;
  const sortedFirms = [...PANEL_FIRMS].sort((a, b) =>
    caseFilter === "all" ? a.allRank - b.allRank : a.premisesRank - b.premisesRank
  );

  return (
    <section id="phase-decision" style={{ background: COLORS.midnight, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <FadeIn>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(22px, 3vw, 30px)",
              lineHeight: 1.5,
              color: COLORS.textPrimary,
              maxWidth: 860,
              margin: "0 0 72px",
            }}
          >
            {"It is not one case. You are running hundreds. Three questions decide the year: Are we exposed right now? Is it getting better or worse? Where does intervention change the outcome?"}
          </p>
        </FadeIn>

        {/* ── S7a. Docket Dashboard ── */}
        <FadeIn>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.22em", color: COLORS.gold, marginBottom: 14 }}>
            {"DOCKET DASHBOARD"}
          </div>
          <h2 style={{ fontFamily: FONTS.serif, fontWeight: 600, fontSize: "clamp(26px, 3.2vw, 38px)", color: COLORS.textPrimary, margin: "0 0 28px" }}>
            {"1,000 open cases. One filter."}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24 }}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                letterSpacing: "0.16em",
                color: COLORS.textSecondary,
                marginBottom: 18,
              }}
            >
              {"OPEN MATTERS: 1,004"}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {(["07", "12"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFirmTab(t)}
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: firmTab === t ? COLORS.midnight : COLORS.textSecondary,
                    background: firmTab === t ? COLORS.accent : COLORS.deep,
                    border: `1px solid ${firmTab === t ? COLORS.accent : COLORS.border}`,
                    borderRadius: 8,
                    padding: "10px 18px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {"PANEL FIRM " + t}
                </button>
              ))}
            </div>
            <div style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.textMuted, marginBottom: 18 }}>
              {"Two firms. 200 cases each. Same claim types. Same jurisdictions."}
            </div>

            <div
              key={firmTab}
              className="cvp-firm-tiles"
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}
            >
              {metrics.map((m) => {
                const tone = TONE[m.tone];
                return (
                  <div
                    key={m.label}
                    style={{
                      background: COLORS.deep,
                      border: `1px solid ${COLORS.border}`,
                      borderTop: `2px solid ${tone.color}`,
                      borderRadius: 10,
                      padding: "18px 16px",
                      animation: reduced ? "none" : "cvpTileIn 0.5s ease both",
                    }}
                  >
                    <div style={{ fontFamily: FONTS.mono, fontSize: 24, color: tone.color, fontVariantNumeric: "tabular-nums" }}>
                      {m.value}
                    </div>
                    <div style={{ fontFamily: FONTS.sans, fontSize: 12.5, color: COLORS.textSecondary, marginTop: 6 }}>
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {firmTab === "07" && (
              <>
                <blockquote
                  style={{
                    fontFamily: FONTS.serif,
                    fontStyle: "italic",
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: COLORS.textPrimary,
                    border: `1px solid ${COLORS.gold}`,
                    background: COLORS.goldGlow,
                    borderRadius: 10,
                    padding: "16px 20px",
                    margin: "22px 0 0",
                  }}
                >
                  {"This is exactly how nuclear verdicts happen. Cases sitting in the system, unattended, until it's too late."}
                </blockquote>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: COLORS.textPrimary, margin: "18px 0 0" }}>
                  {"Every portfolio has a Firm 07. The question is whether you can see yours before it costs you."}
                </p>
              </>
            )}
          </div>
        </FadeIn>

        {/* ── S7b. Precedent Dashboard ── */}
        <FadeIn>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.22em", color: COLORS.gold, margin: "84px 0 14px" }}>
            {"PRECEDENT DASHBOARD"}
          </div>
          <h2 style={{ fontFamily: FONTS.serif, fontWeight: 600, fontSize: "clamp(26px, 3.2vw, 38px)", color: COLORS.textPrimary, margin: "0 0 24px" }}>
            {"Closed cases are not history. They are instructions."}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
            {(
              [
                ["all", "ALL CASE TYPES"],
                ["premises", "PREMISES ONLY"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setCaseFilter(k)}
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: caseFilter === k ? COLORS.midnight : COLORS.textSecondary,
                  background: caseFilter === k ? COLORS.gold : COLORS.deep,
                  border: `1px solid ${caseFilter === k ? COLORS.gold : COLORS.border}`,
                  borderRadius: 8,
                  padding: "9px 16px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="cvp-panel-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}
          >
            {sortedFirms.map((f) => (
              <FlipCard key={f.id} firm={f} reduced={reduced} canHover={canHover} />
            ))}
          </div>

          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(19px, 2.4vw, 24px)",
              lineHeight: 1.5,
              color: COLORS.textPrimary,
              textAlign: "center",
              maxWidth: 760,
              margin: "48px auto 0",
            }}
          >
            {"Precedent tells you who to send cases to. Docket tells you what to do with the cases you have right now."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
