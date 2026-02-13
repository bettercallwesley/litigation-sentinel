"use client";

import React from "react";
import { WIN95 } from "../design-system/tokens";

interface Win95TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function Win95Tab({ label, active, onClick }: Win95TabProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        fontSize: 11,
        fontFamily: WIN95.font,
        cursor: "pointer",
        borderRadius: 0,
        color: WIN95.text,
        background: active ? WIN95.silver : WIN95.darkSilver,
        borderTop: active ? `2px solid ${WIN95.white}` : `1px solid ${WIN95.darkSilver}`,
        borderLeft: active ? `2px solid ${WIN95.white}` : `1px solid ${WIN95.darkSilver}`,
        borderRight: active ? `2px solid ${WIN95.black}` : `1px solid ${WIN95.black}`,
        borderBottom: active ? `2px solid ${WIN95.silver}` : `1px solid ${WIN95.darkSilver}`,
        fontWeight: active ? 700 : 400,
      }}
    >
      {label}
    </button>
  );
}
