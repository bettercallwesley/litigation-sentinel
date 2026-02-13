"use client";

import React from "react";
import { COLORS } from "./tokens";
import CaseGlideLogo from "./CaseGlideLogo";

interface CaseGlideWordmarkProps {
  size?: number;
}

export default function CaseGlideWordmark({ size = 32 }: CaseGlideWordmarkProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
      <CaseGlideLogo size={size} />
      <span
        style={{
          fontSize: size * 0.4,
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: COLORS.textSecondary,
          textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Case<span style={{ color: COLORS.textPrimary }}>Glide</span>
      </span>
    </div>
  );
}
