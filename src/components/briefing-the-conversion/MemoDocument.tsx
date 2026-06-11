"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { COLORS, FONTS, SENTINEL } from "@/components/design-system/tokens";
import { MEMO_PARAGRAPHS, MEMO_TITLE, MEMO_SUBTITLE } from "./memoData";

// The 20-page ICA memo rendered as a Word-style document inside a dark
// scroll container. Shared by S3 (reading pane) and S4 (extraction source)
// for deliberate visual continuity.

export interface MemoDocumentHandle {
  scrollToPara: (num: number) => void;
}

interface Props {
  highlighted?: Set<number>;
  pulsePara?: number | null;
  dimmed?: boolean;
  maxHeight?: number;
  showPagesRemaining?: boolean;
}

const MemoDocument = forwardRef<MemoDocumentHandle, Props>(function MemoDocument(
  { highlighted, pulsePara, dimmed = false, maxHeight = 420, showPagesRemaining = false },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paraRefs = useRef<Record<number, HTMLParagraphElement | null>>({});
  const [pagesRemaining, setPagesRemaining] = React.useState(19);

  useImperativeHandle(ref, () => ({
    scrollToPara: (num: number) => {
      const el = paraRefs.current[num];
      const container = containerRef.current;
      if (el && container) {
        container.scrollTo({
          top: el.offsetTop - container.offsetTop - 40,
          behavior: "smooth",
        });
      }
    },
  }));

  const onScroll = () => {
    const c = containerRef.current;
    if (!c) return;
    const frac = c.scrollTop / Math.max(c.scrollHeight - c.clientHeight, 1);
    setPagesRemaining(Math.max(0, 19 - Math.round(frac * 19)));
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        onScroll={onScroll}
        style={{
          background: SENTINEL.bgWarm,
          borderRadius: 8,
          border: `1px solid ${COLORS.border}`,
          maxHeight,
          overflowY: "auto",
          padding: "34px 34px 60px",
          opacity: dimmed ? 0.55 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: SENTINEL.ink,
            textAlign: "center",
          }}
        >
          {MEMO_TITLE}
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 11,
            color: SENTINEL.inkMuted,
            textAlign: "center",
            margin: "8px 0 24px",
          }}
        >
          {MEMO_SUBTITLE}
        </div>
        {MEMO_PARAGRAPHS.map((p) => {
          const isHi = highlighted?.has(p.num);
          const isPulse = pulsePara === p.num;
          return (
            <p
              key={p.num}
              ref={(el) => {
                paraRefs.current[p.num] = el;
              }}
              style={{
                fontFamily: FONTS.serif,
                fontSize: 13.5,
                lineHeight: 1.75,
                color: SENTINEL.ink,
                textAlign: "justify",
                margin: "0 0 14px",
                padding: "2px 6px",
                borderRadius: 3,
                background: isPulse
                  ? "rgba(193, 154, 62, 0.5)"
                  : isHi
                  ? "rgba(193, 154, 62, 0.25)"
                  : "transparent",
                transition: "background 0.4s ease",
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: SENTINEL.inkMuted, marginRight: 8 }}>
                {"¶ " + p.num}
              </span>
              {p.text}
            </p>
          );
        })}
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 10,
            color: SENTINEL.inkMuted,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          {"Page 1 of 20"}
        </div>
      </div>
      {showPagesRemaining && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 14,
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: COLORS.textMuted,
            background: "rgba(10, 14, 26, 0.75)",
            borderRadius: 4,
            padding: "3px 8px",
            pointerEvents: "none",
          }}
        >
          {pagesRemaining + " pages remaining"}
        </div>
      )}
    </div>
  );
});

export default MemoDocument;
