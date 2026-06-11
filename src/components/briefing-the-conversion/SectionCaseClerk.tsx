"use client";

import React, { useRef, useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import MemoDocument, { MemoDocumentHandle } from "./MemoDocument";
import { CLERK_FIELDS } from "./memoData";
import { useReducedMotion } from "./hooks";

// S4. THE CONVERSION: CASE CLERK AI (phase: UPDATE)
// The memo-to-structured-record extraction, run live by the reader.

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Phase = "idle" | "running" | "done";

export default function SectionCaseClerk() {
  const reduced = useReducedMotion();
  const memoRef = useRef<MemoDocumentHandle>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set());
  const [pulsePara, setPulsePara] = useState<number | null>(null);
  const [chars, setChars] = useState<number[]>(CLERK_FIELDS.map(() => 0));
  const runningRef = useRef(false);

  const run = async () => {
    if (runningRef.current || phase === "done") return;
    runningRef.current = true;
    setPhase("running");

    if (reduced) {
      setHighlighted(new Set(CLERK_FIELDS.map((f) => f.para)));
      setChars(CLERK_FIELDS.map((f) => f.value.length));
      setPhase("done");
      runningRef.current = false;
      return;
    }

    for (let i = 0; i < CLERK_FIELDS.length; i++) {
      const f = CLERK_FIELDS[i];
      memoRef.current?.scrollToPara(f.para);
      setPulsePara(f.para);
      setHighlighted((prev) => new Set(prev).add(f.para));
      await sleep(220);
      // typed-in effect across the gutter
      for (let c = 1; c <= f.value.length; c++) {
        setChars((prev) => {
          const next = [...prev];
          next[i] = c;
          return next;
        });
        await sleep(14);
      }
      await sleep(120);
    }
    setPulsePara(null);
    setPhase("done");
    runningRef.current = false;
  };

  const hoverChip = (para: number) => {
    memoRef.current?.scrollToPara(para);
    setPulsePara(para);
  };

  return (
    <section id="phase-update" style={{ background: COLORS.midnight, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: COLORS.gold,
              marginBottom: 14,
            }}
          >
            {"CASE CLERK AI"}
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: COLORS.textPrimary,
              margin: "0 0 36px",
            }}
          >
            {"Drop the memo in. Watch it become a record."}
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="cvp-clerk-split" style={{ display: "flex", gap: 22, alignItems: "stretch" }}>
            {/* Left: the same ICA memo from S3 */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: COLORS.textMuted,
                  marginBottom: 10,
                }}
              >
                {"SOURCE: ICA_v3_FINAL_revised.docx (20 PAGES)"}
              </div>
              <MemoDocument
                ref={memoRef}
                maxHeight={520}
                highlighted={highlighted}
                pulsePara={pulsePara}
                dimmed={phase === "running"}
              />
            </div>

            {/* Right: the structured Case Update form */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: COLORS.textMuted,
                  marginBottom: 10,
                }}
              >
                {"CASE UPDATE: INITIAL CASE ANALYSIS"}
              </div>
              <div
                style={{
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  padding: 22,
                  flex: 1,
                  position: "relative",
                }}
              >
                {phase === "idle" && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <button
                      onClick={run}
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 13,
                        letterSpacing: "0.14em",
                        color: COLORS.midnight,
                        background: COLORS.accent,
                        border: "none",
                        borderRadius: 10,
                        padding: "16px 28px",
                        cursor: "pointer",
                        boxShadow: `0 4px 24px ${COLORS.accentGlow}`,
                      }}
                    >
                      {"RUN CASE CLERK AI"}
                    </button>
                  </div>
                )}
                <div style={{ opacity: phase === "idle" ? 0.35 : 1, transition: "opacity 0.4s ease" }}>
                  {CLERK_FIELDS.map((f, i) => (
                    <div key={f.label} style={{ marginBottom: 14 }}>
                      <div
                        style={{
                          fontFamily: FONTS.sans,
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase" as const,
                          color: COLORS.textSecondary,
                          marginBottom: 5,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>{f.label}</span>
                        {chars[i] > 0 && (
                          <button
                            onMouseEnter={() => hoverChip(f.para)}
                            onFocus={() => hoverChip(f.para)}
                            onClick={() => hoverChip(f.para)}
                            style={{
                              fontFamily: FONTS.mono,
                              fontSize: 10,
                              color: COLORS.gold,
                              background: COLORS.goldGlow,
                              border: `1px solid ${COLORS.gold}`,
                              borderRadius: 4,
                              padding: "1px 7px",
                              cursor: "pointer",
                            }}
                            title={"Cited to paragraph " + f.para + " of the source memo"}
                          >
                            {"¶ " + f.para}
                          </button>
                        )}
                      </div>
                      <div
                        style={{
                          fontFamily: FONTS.sans,
                          fontSize: 14,
                          color: COLORS.textPrimary,
                          background: COLORS.deep,
                          border: `1px solid ${chars[i] > 0 ? COLORS.borderLight : COLORS.border}`,
                          borderRadius: 8,
                          padding: "9px 12px",
                          minHeight: 38,
                        }}
                      >
                        {f.value.slice(0, chars[i])}
                        {phase === "running" && chars[i] > 0 && chars[i] < f.value.length && (
                          <span style={{ color: COLORS.accent }}>{"|"}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {phase === "done" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 6,
                      padding: "12px 14px",
                      border: `1px solid ${COLORS.emerald}`,
                      background: COLORS.emeraldGlow,
                      borderRadius: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        color: COLORS.emerald,
                        border: `1px solid ${COLORS.emerald}`,
                        borderRadius: 4,
                        padding: "3px 8px",
                      }}
                    >
                      {"SAVED TO CASE"}
                    </span>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.textPrimary }}>
                      {"Eight fields. Each one traceable to the paragraph it came from."}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div style={{ maxWidth: 860, margin: "44px auto 0", textAlign: "center" }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.65, color: COLORS.textSecondary, margin: 0 }}>
              {"Digital case forms replace email-based reporting. Every milestone, captured and searchable."}
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.65, color: COLORS.textSecondary, margin: "12px 0 0" }}>
              {"Best-practice forms exist for every milestone: initial analysis, deposition, mediation, trial."}
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.65, color: COLORS.textSecondary, margin: "12px 0 0" }}>
              {"Dashboards and AI features simply don't work unless there is a near-perfect process for collecting information from adjusters and defense counsel. That process comes first. Everything on this page is downstream of it."}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
