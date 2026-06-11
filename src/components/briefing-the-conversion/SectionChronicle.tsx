"use client";

import React, { useEffect, useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { CLERK_FIELDS } from "./memoData";

// S5. THE RECORD: CHRONICLE AI (phase: TIMELINE)
// The case chronology, assembled by AI from the structured updates.
// Step-through timeline: click nodes, arrow keys, or NEXT/BACK.

export const GOTO_NODE_EVENT = "cvp-goto-node";

interface TimelineNode {
  label: string;
  card: React.ReactNode;
  oldWorld: string;
  turning?: boolean;
}

function CardText({ children }: { children: string }) {
  return (
    <p
      style={{
        fontFamily: FONTS.sans,
        fontSize: 15,
        lineHeight: 1.65,
        color: COLORS.textPrimary,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

const NODES: TimelineNode[] = [
  {
    label: "FILED",
    card: <CardText>{"Incident facts: February 27, 1992. Third-degree burns. Eight-day hospitalization."}</CardText>,
    oldWorld: "An acknowledgment letter.",
  },
  {
    label: "INITIAL CASE ANALYSIS",
    card: (
      <div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            letterSpacing: "0.14em",
            color: COLORS.gold,
            marginBottom: 10,
          }}
        >
          {"CASE CLERK AI EXTRACTION"}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
          {CLERK_FIELDS.map((f) => (
            <div key={f.label} style={{ background: COLORS.deep, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "7px 10px" }}>
              <div style={{ fontFamily: FONTS.sans, fontSize: 10, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: COLORS.textSecondary }}>
                {f.label}
              </div>
              <div style={{ fontFamily: FONTS.sans, fontSize: 12.5, color: COLORS.textPrimary, marginTop: 2 }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    oldWorld: "A 20-page Word attachment.",
  },
  {
    label: "PLAINTIFF DEPOSITION",
    card: <CardText>{"Plaintiff presents as sympathetic and credible. Informal signal: case could resolve near $225,000. Plaintiff requests the store manager's deposition as soon as possible."}</CardText>,
    oldWorld: "A 20-page depo summary, 10 days later.",
  },
  {
    label: "INSURED MEETING",
    card: <CardText>{"Deposition prep surfaces approximately 700 prior burn complaints over the preceding decade. The manager presents as dismissive. His deposition is one week out."}</CardText>,
    oldWorld: "Nothing. This never reached leadership.",
    turning: true,
  },
  {
    label: "AUTHORITY",
    card: <CardText>{"$225,000 in authority requested. Approved within hours."}</CardText>,
    oldWorld: "A committee meeting on next month's calendar.",
  },
  {
    label: "RESOLUTION",
    card: <CardText>{"Settled at $225,000."}</CardText>,
    oldWorld: "A trial date.",
  },
];

export default function SectionChronicle() {
  const [active, setActive] = useState(0);
  // The 700-complaints pull line stays once the reader has reached node 4,
  // even if they step back through earlier milestones.
  const [reachedTurn, setReachedTurn] = useState(false);
  useEffect(() => {
    if (active >= 3) setReachedTurn(true);
  }, [active]);

  // Chambers AI citation chips dispatch this event to jump back to a node.
  useEffect(() => {
    const handler = (e: Event) => {
      const idx = (e as CustomEvent).detail?.node;
      if (typeof idx === "number") {
        setActive(idx);
        document.getElementById("phase-timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener(GOTO_NODE_EVENT, handler);
    return () => window.removeEventListener(GOTO_NODE_EVENT, handler);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = Math.min(active + 1, NODES.length - 1);
    else if (e.key === "ArrowLeft") next = Math.max(active - 1, 0);
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      document.getElementById("chronicle-node-" + (next + 1))?.focus();
    }
  };

  const node = NODES[active];

  return (
    <section
      id="phase-timeline"
      style={{ background: COLORS.midnight, padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.22em", color: COLORS.gold, marginBottom: 14 }}>
            {"CHRONICLE AI"}
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: COLORS.textPrimary,
              margin: 0,
            }}
          >
            {"One case. Every milestone. In order, for once."}
          </h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.textSecondary, margin: "14px 0 40px" }}>
            {"The case chronology, assembled by AI from the updates. Click a milestone, or use the arrow keys."}
          </p>
        </FadeIn>

        {/* Timeline nodes */}
        <FadeIn delay={150}>
          <div
            className="cvp-timeline"
            role="tablist"
            aria-label="Case milestones"
            onKeyDown={onKeyDown}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "stretch",
              outline: "none",
              flexWrap: "wrap",
            }}
          >
            {NODES.map((n, i) => {
              const isActive = i === active;
              return (
                <button
                  key={n.label}
                  id={"chronicle-node-" + (i + 1)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="chronicle-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  style={{
                    flex: 1,
                    minWidth: 130,
                    textAlign: "left",
                    fontFamily: FONTS.mono,
                    fontSize: 10.5,
                    letterSpacing: "0.1em",
                    color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                    background: isActive ? COLORS.surfaceHover : COLORS.surface,
                    border: `1px solid ${isActive ? COLORS.accent : COLORS.border}`,
                    borderLeft: n.turning ? `3px solid ${COLORS.rose}` : undefined,
                    borderRadius: 8,
                    padding: "12px 12px",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span style={{ display: "block", color: COLORS.textMuted, marginBottom: 4 }}>{"0" + (i + 1)}</span>
                  {n.label}
                  {n.turning && (
                    <span
                      style={{
                        display: "block",
                        marginTop: 6,
                        fontFamily: FONTS.sans,
                        fontSize: 10,
                        letterSpacing: 0,
                        color: COLORS.rose,
                        textTransform: "none" as const,
                      }}
                    >
                      {"Open this one."}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active card */}
        <div
          id="chronicle-panel"
          role="tabpanel"
          aria-labelledby={"chronicle-node-" + (active + 1)}
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderLeft: node.turning ? `3px solid ${COLORS.rose}` : `1px solid ${COLORS.border}`,
            borderRadius: 12,
            padding: 26,
            marginTop: 18,
            minHeight: 140,
          }}
        >
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.16em", color: COLORS.accent, marginBottom: 14 }}>
            {"UPDATE " + (active + 1) + " OF 6: " + node.label}
          </div>
          {node.card}
          <div
            style={{
              marginTop: 18,
              paddingTop: 14,
              borderTop: `1px dashed ${COLORS.border}`,
              fontFamily: FONTS.sans,
              fontSize: 13,
              color: COLORS.textMuted,
            }}
          >
            <span style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.14em", marginRight: 8 }}>
              {"THE OLD WORLD:"}
            </span>
            {node.oldWorld}
          </div>
        </div>

        {/* NEXT / BACK */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button
            onClick={() => setActive((a) => Math.max(a - 1, 0))}
            disabled={active === 0}
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              letterSpacing: "0.14em",
              color: active === 0 ? COLORS.textMuted : COLORS.textPrimary,
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: "10px 18px",
              cursor: active === 0 ? "default" : "pointer",
            }}
          >
            {"< BACK"}
          </button>
          <button
            onClick={() => setActive((a) => Math.min(a + 1, NODES.length - 1))}
            disabled={active === NODES.length - 1}
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              letterSpacing: "0.14em",
              color: active === NODES.length - 1 ? COLORS.textMuted : COLORS.midnight,
              background: active === NODES.length - 1 ? COLORS.surface : COLORS.accent,
              border: "none",
              borderRadius: 8,
              padding: "10px 18px",
              cursor: active === NODES.length - 1 ? "default" : "pointer",
            }}
          >
            {"NEXT >"}
          </button>
        </div>

        {/* Pull line, revealed at the turning point, persistent once seen */}
        {reachedTurn && (
          <FadeIn>
            <p
              style={{
                fontFamily: FONTS.serif,
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.45,
                color: COLORS.textPrimary,
                textAlign: "center",
                maxWidth: 780,
                margin: "52px auto 0",
              }}
            >
              {"Whoever learns about the 700 complaints first wins the case. Historically, plaintiff's counsel found out first."}
            </p>
          </FadeIn>
        )}

        {/* Timer strip: the bad-timing thesis drawn as a picture */}
        <div style={{ marginTop: 56 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.12em", marginBottom: 8 }}>
            <span style={{ color: COLORS.emerald }}>{"INTELLIGENCE ARRIVED: SAME DAY"}</span>
            <span style={{ color: COLORS.rose }}>{"OLD WORLD: +10 DAYS"}</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {NODES.map((n, i) => {
              const gap = i >= 1 && i <= 3 ? (i - 0) * 28 : i > 3 ? 84 : 4;
              return (
                <div key={n.label} style={{ flex: 1 }}>
                  <div style={{ height: 4, borderRadius: 2, background: COLORS.emerald, opacity: 0.85 }} />
                  <div
                    style={{
                      height: 4,
                      borderRadius: 2,
                      background: COLORS.rose,
                      marginTop: 4,
                      // The gap draws itself as the reader steps through the milestones.
                      width: i > active ? "0%" : Math.min(100, 16 + gap) + "%",
                      opacity: 0.85,
                      transition: "width 0.6s ease",
                    }}
                  />
                  <div style={{ fontFamily: FONTS.mono, fontSize: 9, color: COLORS.textMuted, marginTop: 6, letterSpacing: "0.08em" }}>
                    {n.label}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted, marginTop: 10 }}>
            {"The red bar is the information gap. It widens at exactly the milestones where the case is won or lost."}
          </div>
        </div>
      </div>
    </section>
  );
}
