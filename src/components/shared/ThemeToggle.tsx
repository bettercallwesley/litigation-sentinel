"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { COLORS, WIN95, w95raised } from "../design-system/tokens";

export default function ThemeToggle() {
  const { toggleTheme, isWin95 } = useTheme();

  if (isWin95) {
    return (
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: 36,
          right: 16,
          zIndex: 10000,
          ...w95raised,
          background: WIN95.silver,
          padding: "4px 12px",
          fontSize: 11,
          fontFamily: WIN95.font,
          cursor: "pointer",
          borderRadius: 0,
          color: WIN95.text,
        }}
      >
        💼 Switch to Fortune 500 Mode
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 10000,
        padding: "8px 16px",
        background: "rgba(26, 31, 46, 0.6)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${COLORS.border}`,
        borderRadius: 10,
        color: COLORS.textSecondary,
        fontSize: 12,
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      🖥️ Insurance Company Mode
    </button>
  );
}
