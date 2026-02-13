"use client";

import React from "react";
import { WIN95, w95sunken } from "../design-system/tokens";

interface Win95PanelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Win95Panel({ children, style = {} }: Win95PanelProps) {
  return (
    <div style={{ ...w95sunken, background: WIN95.fieldBg, padding: 8, ...style }}>
      {children}
    </div>
  );
}
