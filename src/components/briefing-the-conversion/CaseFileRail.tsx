"use client";

import React, { useEffect, useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";

// The Case File Rail: a fixed left rail (desktop) / top progress bar (mobile)
// tracking scroll position through the five phases of the conversion story.

const PHASES = [
  { id: "phase-email", label: "EMAIL" },
  { id: "phase-update", label: "UPDATE" },
  { id: "phase-timeline", label: "TIMELINE" },
  { id: "phase-answer", label: "ANSWER" },
  { id: "phase-decision", label: "DECISION" },
];

export default function CaseFileRail() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.5;
      let current = -1;
      PHASES.forEach((p, i) => {
        const el = document.getElementById(p.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const item = (p: { id: string; label: string }, i: number) => {
    const isActive = i === active;
    const isPast = i < active;
    return (
      <React.Fragment key={p.id}>
        {i > 0 && (
          <span
            aria-hidden
            style={{
              color: isPast || isActive ? COLORS.textSecondary : COLORS.textMuted,
              fontSize: 9,
            }}
          >
            {">"}
          </span>
        )}
        <button
          onClick={() => go(p.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: "0.14em",
            color: isActive ? COLORS.accent : isPast ? COLORS.textSecondary : COLORS.textMuted,
            textShadow: isActive ? `0 0 12px ${COLORS.accentGlow}` : "none",
            transition: "color 0.3s ease",
          }}
        >
          {p.label}
        </button>
      </React.Fragment>
    );
  };

  return (
    <>
      {/* Desktop: fixed left rail, rotated stack */}
      <nav
        className="cvp-rail-desktop"
        aria-label="Case file phases"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 44,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          borderRight: `1px solid ${COLORS.border}`,
          background: "rgba(10, 14, 26, 0.88)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
            writingMode: "vertical-rl" as const,
          }}
        >
          {PHASES.map(item)}
        </div>
      </nav>

      {/* Mobile: fixed top progress bar */}
      <nav
        className="cvp-rail-mobile"
        aria-label="Case file phases"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          zIndex: 50,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderBottom: `1px solid ${COLORS.border}`,
          background: "rgba(10, 14, 26, 0.92)",
          backdropFilter: "blur(8px)",
        }}
      >
        {PHASES.map(item)}
      </nav>
    </>
  );
}
