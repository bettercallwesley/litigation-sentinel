"use client";

import React from "react";
import { COLORS } from "./tokens";

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  height?: number;
}

export default function ProgressBar({ value, max, color = COLORS.accent, height = 4 }: ProgressBarProps) {
  return (
    <div
      style={{
        width: "100%",
        height,
        background: COLORS.border,
        borderRadius: height / 2,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${(value / max) * 100}%`,
          height: "100%",
          background: color,
          borderRadius: height / 2,
          transition: "width 0.5s ease",
          boxShadow: `0 0 12px ${color}40`,
        }}
      />
    </div>
  );
}
