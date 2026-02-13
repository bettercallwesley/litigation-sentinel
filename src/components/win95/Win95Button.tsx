"use client";

import React from "react";
import { w95button } from "../design-system/tokens";

interface Win95ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function Win95Button({ children, onClick, primary = false, style = {}, disabled = false }: Win95ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        ...w95button,
        ...(primary ? { fontWeight: 700 } : {}),
        ...(disabled ? { opacity: 0.5, cursor: "default" } : {}),
        ...style,
      }}
    >
      {children}
    </button>
  );
}
