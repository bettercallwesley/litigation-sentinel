"use client";

import React from "react";
import { COLORS } from "./tokens";

interface ProgressRingProps {
  value: number;
  max: number;
  size?: number;
  color?: string;
}

export default function ProgressRing({ value, max, size = 56, color = COLORS.accent }: ProgressRingProps) {
  const pct = Math.round((value / max) * 100);
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={COLORS.border}
          strokeWidth={4}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.26,
          fontWeight: 600,
          color,
        }}
      >
        {pct}%
      </div>
    </div>
  );
}
