"use client";

import React from "react";
import { WIN95 } from "../design-system/tokens";

interface Win95BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export default function Win95Badge({ children, color = WIN95.navy }: Win95BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "1px 6px",
        background: color,
        color: WIN95.navyText,
        fontSize: 10,
        fontWeight: 700,
        fontFamily: WIN95.font,
      }}
    >
      {children}
    </span>
  );
}
