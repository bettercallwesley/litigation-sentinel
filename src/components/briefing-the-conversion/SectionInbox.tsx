"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import MemoDocument from "./MemoDocument";

// S3. THE INBOX (phase: EMAIL) - the chaos baseline, a faithful dark
// email-client mock. Email #1 opens the 20-page ICA in the reading pane.

interface MockEmail {
  id: number;
  subject: string;
  preview: string;
  time: string;
  opensMemo?: boolean;
}

const EMAILS: MockEmail[] = [
  { id: 1, subject: "FW: FW: Liebeck - ICA attached (ICA_v3_FINAL_revised.docx, 20 pages)", preview: "Apologies, please disregard the prior version...", time: "8:42 AM", opensMemo: true },
  { id: 2, subject: "RE: RE: RE: settlement authority?", preview: "Circling back on this...", time: "Yesterday" },
  { id: 3, subject: "Liebeck - depo summary", preview: "Summary attached, 20 pages. Apologies for the delay, this took about 10 days...", time: "Yesterday" },
  { id: 4, subject: "Reserve question", preview: "Do we have a current number on this one?", time: "Mon" },
  { id: 5, subject: "Quick call?", preview: "Worth 15 minutes before the supervisor meeting.", time: "Mon" },
  { id: 6, subject: "Invoice - March", preview: "Attached.", time: "Fri" },
  { id: 7, subject: "RE: status", preview: "Will revert with a full memo.", time: "Thu" },
];

export default function SectionInbox() {
  const [selected, setSelected] = useState<number | null>(null);
  const memoOpen = selected === 1;

  return (
    <section id="phase-email" style={{ background: COLORS.midnight, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: COLORS.textPrimary,
              margin: 0,
            }}
          >
            {"The case everyone knows. Run the way every case still runs."}
          </h2>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 17,
              lineHeight: 1.6,
              color: COLORS.textSecondary,
              maxWidth: 820,
              margin: "16px 0 36px",
            }}
          >
            {"February 27, 1992. Stella Liebeck, 79, suffers third-degree burns and spends eight days in the hospital. What follows is the file, reconstructed the way claims teams actually received it: by email."}
          </p>
        </FadeIn>

        {/* Annotation chip */}
        <FadeIn delay={150}>
          <div
            style={{
              display: "inline-block",
              fontFamily: FONTS.sans,
              fontSize: 13,
              color: COLORS.textPrimary,
              border: `1px solid ${COLORS.gold}`,
              background: COLORS.goldGlow,
              borderRadius: 8,
              padding: "8px 14px",
              marginBottom: 18,
            }}
          >
            <span style={{ color: COLORS.rose, fontWeight: 700, marginRight: 8 }}>{"!"}</span>
            {"Demand: $20,000. Counter: $800. Both numbers are in here somewhere."}
          </div>
        </FadeIn>

        {/* Email client mock */}
        <FadeIn delay={250}>
          <div
            style={{
              background: COLORS.deep,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderBottom: `1px solid ${COLORS.border}`,
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: COLORS.textMuted,
                letterSpacing: "0.1em",
              }}
            >
              <span style={{ width: 9, height: 9, borderRadius: 5, background: COLORS.rose, display: "inline-block" }} />
              <span style={{ width: 9, height: 9, borderRadius: 5, background: COLORS.amber, display: "inline-block" }} />
              <span style={{ width: 9, height: 9, borderRadius: 5, background: COLORS.emerald, display: "inline-block" }} />
              <span style={{ marginLeft: 10 }}>{"INBOX - LIEBECK FILE (7 UNREAD)"}</span>
            </div>
            <div className="cvp-inbox-split" style={{ display: "flex", minHeight: 480 }}>
              {/* List pane */}
              <div
                className="cvp-inbox-list"
                style={{
                  width: "42%",
                  borderRight: `1px solid ${COLORS.border}`,
                  overflowY: "auto",
                  maxHeight: 520,
                }}
              >
                {EMAILS.map((e) => {
                  const isSel = selected === e.id;
                  return (
                    <button
                      key={e.id}
                      onClick={() => setSelected(e.id)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        background: isSel ? COLORS.surfaceHover : "transparent",
                        border: "none",
                        borderBottom: `1px solid ${COLORS.border}`,
                        borderLeft: isSel ? `2px solid ${COLORS.accent}` : "2px solid transparent",
                        padding: "13px 16px",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                        <span
                          style={{
                            fontFamily: FONTS.sans,
                            fontSize: 13,
                            fontWeight: 600,
                            color: COLORS.textPrimary,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {e.subject}
                        </span>
                        <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: COLORS.textMuted, flexShrink: 0 }}>
                          {e.time}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: FONTS.sans,
                          fontSize: 12,
                          color: COLORS.textSecondary,
                          marginTop: 4,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {e.preview}
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Reading pane */}
              <div className="cvp-inbox-reading" style={{ flex: 1, padding: 18 }}>
                {memoOpen ? (
                  <MemoDocument maxHeight={470} showPagesRemaining />
                ) : selected !== null ? (
                  <div
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: COLORS.textSecondary,
                      padding: "30px 10px",
                    }}
                  >
                    <div style={{ fontWeight: 600, color: COLORS.textPrimary, marginBottom: 10 }}>
                      {EMAILS.find((e) => e.id === selected)?.subject}
                    </div>
                    {EMAILS.find((e) => e.id === selected)?.preview}
                    <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: COLORS.textMuted, marginTop: 26 }}>
                      {"No structured data in this thread. The answer, if it exists, is in an attachment."}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      minHeight: 300,
                      fontFamily: FONTS.mono,
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      color: COLORS.textMuted,
                    }}
                  >
                    {"SELECT AN EMAIL. START WITH THE TOP ONE."}
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <blockquote
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              fontSize: "clamp(19px, 2.4vw, 24px)",
              lineHeight: 1.55,
              color: COLORS.textPrimary,
              borderLeft: `2px solid ${COLORS.gold}`,
              paddingLeft: 22,
              maxWidth: 820,
              margin: "48px 0 0",
            }}
          >
            {"Without structured updates, the adjuster waits on a 20-page depo summary 10 days later, packed with so much information that the one number that matters is buried on page 14."}
          </blockquote>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              lineHeight: 1.65,
              color: COLORS.textSecondary,
              maxWidth: 820,
              margin: "26px 0 0",
            }}
          >
            {"Most organizations cannot answer basic questions about a case like this because the truth lives in email threads and the memory of outside counsel. CaseGlide makes it visible."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
