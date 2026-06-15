"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { useCanHover, useReducedMotion } from "@/lib/interactive";
import type { VerdictTimeline as VerdictTimelineData, VerdictBeat } from "@/data/verdict-timelines";

/**
 * E2 Living Case Files — a verdict timeline rendered mid-article on the 3 pilot
 * franchise pieces. Light editorial theme (it lives inside the publication).
 *
 * Two parts:
 *   1. A 16:9 self-attributing share frame (SENTINEL masthead rule, case caption,
 *      gold signature stat, mono article URL microline) — composed so a reader
 *      screenshotting it carries the wordmark and the link inside the image.
 *   2. A navy-railed timeline of flip cards. Each beat shows date + headline on
 *      the front and the record (detail) on the back. Flip is hover-driven on
 *      devices that can hover and tap-driven on touch (useCanHover guard, so a
 *      synthetic mouseenter never poisons the touch path). Reduced motion: cards
 *      render flat with the detail always visible (no flip, no narrative hidden).
 */

const SHARE_URL_BASE = "litigationsentinel.com/article/";

function ShareFrame({ data }: { data: VerdictTimelineData }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        background: SENTINEL.sentinel,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(20px, 4vw, 36px)",
        marginBottom: 28,
      }}
    >
      {/* Masthead rule */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontFamily: FONTS.mono,
          fontSize: "clamp(9px, 1.4vw, 11px)",
          letterSpacing: "0.28em",
          color: SENTINEL.gold,
          textTransform: "uppercase",
        }}
      >
        <span>Litigation Sentinel</span>
        <span style={{ flex: 1, height: 1, background: "rgba(193,154,62,0.4)" }} />
        <span style={{ color: "rgba(255,255,255,0.5)" }}>Case File</span>
      </div>

      {/* Caption + signature stat */}
      <div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(22px, 4.4vw, 40px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            marginBottom: "clamp(10px, 1.6vw, 16px)",
            maxWidth: "92%",
          }}
        >
          {data.caption}
        </div>
        <div
          style={{
            display: "inline-block",
            fontFamily: FONTS.mono,
            fontSize: "clamp(13px, 2.2vw, 20px)",
            fontWeight: 700,
            color: SENTINEL.gold,
            letterSpacing: "0.02em",
            paddingTop: "clamp(8px, 1.4vw, 12px)",
            borderTop: `2px solid ${SENTINEL.gold}`,
          }}
        >
          {data.stat}
        </div>
      </div>

      {/* URL microline */}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "clamp(9px, 1.3vw, 11px)",
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {SHARE_URL_BASE}
        {data.slug}
      </div>
    </div>
  );
}

function BeatCard({
  beat,
  index,
  last,
  reduced,
  canHover,
}: {
  beat: VerdictBeat;
  index: number;
  last: boolean;
  reduced: boolean;
  canHover: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  const cardHeight = 168;

  const railCol = (
    <div
      style={{
        position: "relative",
        width: 28,
        flex: "0 0 28px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* vertical rail */}
      {!last && (
        <span
          style={{
            position: "absolute",
            top: 18,
            bottom: -28,
            width: 2,
            background: SENTINEL.sentinel,
            opacity: 0.18,
          }}
        />
      )}
      {/* gold marker */}
      <span
        style={{
          position: "absolute",
          top: 12,
          width: 13,
          height: 13,
          borderRadius: "50%",
          background: SENTINEL.gold,
          border: `3px solid ${SENTINEL.bg}`,
          boxShadow: `0 0 0 1px ${SENTINEL.gold}`,
        }}
      />
    </div>
  );

  // Reduced motion / no-flip: flat card with everything visible.
  if (reduced) {
    return (
      <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
        {railCol}
        <div
          style={{
            flex: 1,
            background: SENTINEL.surface,
            border: `1px solid ${SENTINEL.border}`,
            borderRadius: 14,
            padding: "18px 22px",
          }}
        >
          <div style={beatDateStyle}>{beat.date.toUpperCase()}</div>
          <div style={beatHeadlineStyle}>{beat.headline}</div>
          <div style={beatDetailStyle}>{beat.detail}</div>
        </div>
      </div>
    );
  }

  const hoverHandlers = canHover
    ? { onMouseEnter: () => setFlipped(true), onMouseLeave: () => setFlipped(false) }
    : {};
  const tapHandler = canHover ? {} : { onClick: () => setFlipped((f) => !f) };

  return (
    <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
      {railCol}
      <div
        {...hoverHandlers}
        {...tapHandler}
        style={{
          flex: 1,
          height: cardHeight,
          perspective: 1200,
          cursor: canHover ? "default" : "pointer",
        }}
        aria-label={`${beat.date}: ${beat.headline}`}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.55s cubic-bezier(0.4, 0.0, 0.2, 1)",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT — date + headline */}
          <div style={{ ...faceStyle, justifyContent: "space-between" }}>
            <div>
              <div style={beatDateStyle}>{beat.date.toUpperCase()}</div>
              <div style={beatHeadlineStyle}>{beat.headline}</div>
            </div>
            <div style={flipHintStyle}>
              {canHover ? "HOVER TO OPEN THE RECORD" : "TAP TO OPEN THE RECORD"}
            </div>
          </div>

          {/* BACK — the record (detail) */}
          <div
            style={{
              ...faceStyle,
              transform: "rotateY(180deg)",
              background: SENTINEL.sentinel,
              border: `1px solid ${SENTINEL.sentinel}`,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 9,
                letterSpacing: "0.24em",
                color: SENTINEL.gold,
                marginBottom: 10,
              }}
            >
              THE RECORD · {String(index + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {beat.detail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faceStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  background: SENTINEL.surface,
  border: `1px solid ${SENTINEL.border}`,
  borderLeft: `3px solid ${SENTINEL.gold}`,
  borderRadius: 14,
  padding: "18px 22px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
};

const beatDateStyle: React.CSSProperties = {
  fontFamily: FONTS.mono,
  fontSize: 10,
  letterSpacing: "0.18em",
  color: SENTINEL.sentinelAccent,
  marginBottom: 8,
};

const beatHeadlineStyle: React.CSSProperties = {
  fontFamily: FONTS.serif,
  fontSize: "clamp(16px, 2.4vw, 19px)",
  fontWeight: 600,
  color: SENTINEL.sentinel,
  lineHeight: 1.28,
};

const beatDetailStyle: React.CSSProperties = {
  fontFamily: FONTS.sans,
  fontSize: 14,
  lineHeight: 1.6,
  color: SENTINEL.inkLight,
  marginTop: 10,
};

const flipHintStyle: React.CSSProperties = {
  fontFamily: FONTS.mono,
  fontSize: 8.5,
  letterSpacing: "0.16em",
  color: SENTINEL.inkFaint,
};

export default function VerdictTimeline({ data }: { data: VerdictTimelineData }) {
  const canHover = useCanHover();
  const reduced = useReducedMotion();

  return (
    <section
      style={{ margin: "44px 0" }}
      aria-label={`Verdict timeline: ${data.caption}`}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: "0.22em",
          color: SENTINEL.sentinelAccent,
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        The Case File, in Sequence
      </div>

      <ShareFrame data={data} />

      <div>
        {data.beats.map((beat, i) => (
          <BeatCard
            key={`${beat.date}-${i}`}
            beat={beat}
            index={i}
            last={i === data.beats.length - 1}
            reduced={reduced}
            canHover={canHover}
          />
        ))}
      </div>
    </section>
  );
}
