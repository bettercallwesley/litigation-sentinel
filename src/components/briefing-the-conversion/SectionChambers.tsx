"use client";

import React, { useRef, useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { GOTO_NODE_EVENT } from "./SectionChronicle";
import { useReducedMotion } from "./hooks";

// S6. THE ANSWER: CHAMBERS AI (phase: ANSWER)
// "Ask the File": preset queries only, pre-written grounded answers,
// citation chips that anchor back to the Chronicle nodes in S5.

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface PresetQuery {
  query: string;
  answer: string;
}

const QUERIES: PresetQuery[] = [
  {
    query: "Summarize this case for a supervisor meeting tomorrow",
    answer:
      "Liebeck v. McDonald's. Third-degree burn injury, February 27, 1992. Plaintiff, 79, hospitalized eight days. Plaintiff presented as credible at deposition. Deposition preparation surfaced approximately 700 prior burn complaints over ten years and a store manager likely to present poorly. His deposition is one week out. Informal settlement signal: $225,000. Recommendation in the file: resolve inside the pre-deposition window.",
  },
  {
    query: "Why could this case result in a nuclear verdict? Any relevant verdict data?",
    answer:
      "Three factors in the record align with nuclear outcomes: a sympathetic injured plaintiff, evidence of prior notice at scale, and a defense witness expected to present as dismissive. In 2025, juries returned 149 verdicts of $10 million or more, with a median of $46 million. The exposure here is not the demand. It is the trial.",
  },
];

const CITATIONS = [
  { label: "ICA Update", node: 1 },
  { label: "Plaintiff Depo Update", node: 2 },
  { label: "Insured Meeting Update", node: 3 },
];

export default function SectionChambers() {
  const reduced = useReducedMotion();
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [activeQuery, setActiveQuery] = useState<number | null>(null);
  const [streaming, setStreaming] = useState(false);
  const skipRef = useRef(false);
  const runIdRef = useRef(0);

  const runQuery = async (idx: number) => {
    const runId = ++runIdRef.current;
    const q = QUERIES[idx];
    skipRef.current = false;
    setActiveQuery(idx);
    setAnswer("");
    setStreaming(true);

    if (reduced) {
      setInput(q.query);
      setAnswer(q.answer);
      setStreaming(false);
      return;
    }

    // type the query character by character
    setInput("");
    for (let c = 1; c <= q.query.length; c++) {
      if (runIdRef.current !== runId) return;
      if (skipRef.current) break;
      setInput(q.query.slice(0, c));
      await sleep(16);
    }
    setInput(q.query);
    if (runIdRef.current !== runId) return;
    await sleep(250);

    // stream the pre-written grounded answer, ~40ms per token
    const tokens = q.answer.split(" ");
    for (let t = 1; t <= tokens.length; t++) {
      if (runIdRef.current !== runId) return;
      if (skipRef.current) break;
      setAnswer(tokens.slice(0, t).join(" "));
      await sleep(40);
    }
    if (runIdRef.current !== runId) return;
    setAnswer(q.answer);
    setStreaming(false);
  };

  const cite = (node: number) => {
    window.dispatchEvent(new CustomEvent(GOTO_NODE_EVENT, { detail: { node } }));
  };

  return (
    <section id="phase-answer" style={{ background: COLORS.midnight, padding: "96px 24px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.22em", color: COLORS.gold, marginBottom: 14 }}>
            {"CHAMBERS AI"}
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
            {"The supervisor has hours, not weeks."}
          </h2>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 17,
              lineHeight: 1.6,
              color: COLORS.textSecondary,
              maxWidth: 720,
              margin: "16px 0 36px",
            }}
          >
            {"Authority for $225,000 has to move tonight. Nobody has time for a roundtable or a 60-page memo. So ask."}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: 24,
            }}
          >
            {/* Preset query chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
              {QUERIES.map((q, i) => (
                <button
                  key={i}
                  onClick={() => runQuery(i)}
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 13,
                    color: activeQuery === i ? COLORS.midnight : COLORS.textPrimary,
                    background: activeQuery === i ? COLORS.accent : COLORS.deep,
                    border: `1px solid ${activeQuery === i ? COLORS.accent : COLORS.borderLight}`,
                    borderRadius: 100,
                    padding: "9px 16px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.25s ease",
                  }}
                >
                  {q.query}
                </button>
              ))}
            </div>

            {/* Query input (preset-only, not free text) */}
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                color: input ? COLORS.textPrimary : COLORS.textMuted,
                background: COLORS.deep,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                minHeight: 46,
              }}
              aria-live="polite"
            >
              {input || "Pick a question above. Chambers answers from the case file."}
              {streaming && <span style={{ color: COLORS.accent }}>{"|"}</span>}
            </div>

            {/* Answer */}
            {(answer || streaming) && (
              <div
                onClick={() => {
                  skipRef.current = true;
                }}
                style={{
                  marginTop: 16,
                  background: COLORS.deep,
                  border: `1px solid ${COLORS.borderLight}`,
                  borderLeft: `2px solid ${COLORS.accent}`,
                  borderRadius: 10,
                  padding: "16px 18px",
                  cursor: streaming ? "pointer" : "default",
                }}
                title={streaming ? "Click to skip" : undefined}
              >
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: COLORS.textPrimary,
                    margin: 0,
                    minHeight: 24,
                  }}
                >
                  {answer}
                  {streaming && answer && <span style={{ color: COLORS.accent }}>{" |"}</span>}
                </p>
                {!streaming && answer && (
                  <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px dashed ${COLORS.border}` }}>
                    <span style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.16em", color: COLORS.textMuted, marginRight: 10 }}>
                      {"GROUNDED IN:"}
                    </span>
                    {CITATIONS.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => cite(c.node)}
                        style={{
                          fontFamily: FONTS.mono,
                          fontSize: 10,
                          color: COLORS.gold,
                          background: COLORS.goldGlow,
                          border: `1px solid ${COLORS.gold}`,
                          borderRadius: 4,
                          padding: "2px 8px",
                          marginRight: 8,
                          marginTop: 6,
                          cursor: "pointer",
                        }}
                        title={"Jump back to this update in the chronology"}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <p style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.6, color: COLORS.textMuted, margin: "16px 0 0" }}>
            {"Chambers reads only your case data. It is not pulling from the internet or other clients' files. Everything is governed, auditable, and private to your organization."}
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(24px, 3.2vw, 34px)",
              lineHeight: 1.45,
              color: COLORS.textPrimary,
              textAlign: "center",
              maxWidth: 800,
              margin: "72px auto 0",
            }}
          >
            {"McDonald's gets the intelligence before plaintiff's counsel does. The case settles at $225,000. The nuclear verdict becomes a smoldering settlement."}
          </p>
          <p
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              color: COLORS.textMuted,
              textAlign: "center",
              margin: "22px auto 0",
            }}
          >
            {"In the actual 1994 Albuquerque trial, the jury returned $2.7 million, later reduced to $640,000."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
