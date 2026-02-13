"use client";

import React from "react";
import { COLORS } from "./tokens";

interface CaseGlideLogoProps {
  size?: number;
}

export default function CaseGlideLogo({ size = 32 }: CaseGlideLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor={COLORS.accent} />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="cg-fold" x1="28" y1="0" x2="40" y2="12">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor={COLORS.accent} />
        </linearGradient>
        <linearGradient id="cg-accent" x1="10" y1="28" x2="34" y2="28">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor="#E5C066" />
        </linearGradient>
      </defs>
      {/* Main case file body */}
      <path d="M8 6C8 3.79 9.79 2 12 2H30L40 12V42C40 44.21 38.21 46 36 46H12C9.79 46 8 44.21 8 42V6Z" fill="url(#cg-grad)" />
      {/* Folded corner */}
      <path d="M30 2L40 12H34C31.79 12 30 10.21 30 8V2Z" fill="url(#cg-fold)" opacity="0.7" />
      {/* Content lines — representing structured data */}
      <rect x="14" y="18" width="16" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="14" y="23" width="12" height="2" rx="1" fill="white" opacity="0.35" />
      {/* Gold accent bar — the "glide" / intelligence layer */}
      <rect x="14" y="29" width="20" height="3" rx="1.5" fill="url(#cg-accent)" opacity="0.9" />
      {/* Lower data line */}
      <rect x="14" y="35" width="14" height="2" rx="1" fill="white" opacity="0.25" />
    </svg>
  );
}
