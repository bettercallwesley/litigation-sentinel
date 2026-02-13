"use client";

import React from "react";
import { COLORS, RADIUS, FONTS } from "./tokens";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "secondary";
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = "primary", style = {}, disabled = false }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: FONTS.sans,
    fontSize: 15,
    fontWeight: 600,
    cursor: disabled ? "default" : "pointer",
    borderRadius: RADIUS.button,
    transition: "all 0.2s ease",
    opacity: disabled ? 0.5 : 1,
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      ...baseStyle,
      padding: "14px 32px",
      background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
      color: "#fff",
      border: "none",
      boxShadow: `0 4px 24px ${COLORS.accent}40`,
    },
    ghost: {
      ...baseStyle,
      padding: "14px 32px",
      background: "transparent",
      color: COLORS.textPrimary,
      border: `1px solid ${COLORS.borderLight}`,
    },
    secondary: {
      ...baseStyle,
      padding: "8px 16px",
      background: COLORS.accentSoft,
      color: COLORS.accent,
      border: `1px solid ${COLORS.accent}30`,
      fontSize: 12,
    },
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{ ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}
