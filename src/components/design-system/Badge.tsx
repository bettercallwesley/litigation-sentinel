"use client";

import React from "react";
import { COLORS, RADIUS } from "./tokens";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  glow?: string;
}

export default function Badge({ children, color = COLORS.accent, glow }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: RADIUS.badge,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: color,
        background: glow || `${color}15`,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}
