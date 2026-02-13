"use client";

import React from "react";
import { WIN95, w95raised } from "../design-system/tokens";

interface Win95WindowProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
}

export default function Win95Window({ title, children, style = {}, onClose }: Win95WindowProps) {
  return (
    <div style={{ background: WIN95.silver, ...w95raised, padding: 3, ...style }}>
      {/* Title bar */}
      <div
        style={{
          background: `linear-gradient(90deg, ${WIN95.titleActive}, #1084D0)`,
          padding: "3px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: WIN95.navyText,
            fontFamily: WIN95.font,
            letterSpacing: 0,
          }}
        >
          {title}
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          {(["_", "□", "×"] as const).map((btn, i) => (
            <button
              key={i}
              onClick={i === 2 ? onClose : undefined}
              style={{
                ...w95raised,
                width: 16,
                height: 14,
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                fontFamily: WIN95.font,
                background: WIN95.silver,
                cursor: "pointer",
                lineHeight: 1,
                borderRadius: 0,
                color: WIN95.text,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
