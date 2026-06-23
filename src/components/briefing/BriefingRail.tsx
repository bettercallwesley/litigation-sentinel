"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";

// Prop-driven twin of CaseFileRail. The case page syncs its rail to scroll
// position; the briefing is a four-phase funnel, so the active phase is passed
// in from page.tsx state instead. Visual treatment (glass rail, mono labels,
// accent glow on active) is held identical to the case page so the two
// experiences read as one design language.

const PHASES = [
  { id: "context", label: "CONTEXT" },
  { id: "assessment", label: "ASSESSMENT" },
  { id: "results", label: "RESULTS" },
  { id: "next", label: "NEXT" },
];

function item(
  p: { id: string; label: string },
  i: number,
  active: number
): React.ReactNode {
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
      <span
        aria-current={isActive ? "step" : undefined}
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          letterSpacing: "0.14em",
          color: isActive ? COLORS.accent : isPast ? COLORS.textSecondary : COLORS.textMuted,
          textShadow: isActive ? `0 0 12px ${COLORS.accentGlow}` : "none",
          transition: "color 0.3s ease, text-shadow 0.3s ease",
        }}
      >
        {p.label}
      </span>
    </React.Fragment>
  );
}

export default function BriefingRail({ activeIndex }: { activeIndex: number }) {
  return (
    <>
      {/* Desktop: fixed left glass rail, vertical labels */}
      <nav
        className="brief-rail-desktop"
        aria-label="Briefing phases"
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
          {PHASES.map((p, i) => item(p, i, activeIndex))}
        </div>
      </nav>

      {/* Mobile: fixed top bar */}
      <nav
        className="brief-rail-mobile"
        aria-label="Briefing phases"
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
        {PHASES.map((p, i) => item(p, i, activeIndex))}
      </nav>
    </>
  );
}
