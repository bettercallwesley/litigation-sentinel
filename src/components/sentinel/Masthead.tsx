"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { ISSUE } from "@/data/newsletter-articles";

export default function Masthead() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "48px 0 20px",
        borderBottom: `3px double ${SENTINEL.sentinel}`,
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          fontWeight: 500,
          marginBottom: 8,
        }}
      >
        A CaseGlide Publication · Vol. 1 · Issue {ISSUE.number}
      </div>
      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 56px)",
          fontFamily: FONTS.serif,
          fontWeight: 700,
          color: SENTINEL.sentinel,
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        Litigation Sentinel
      </h1>
      <div
        style={{
          width: 48,
          height: 3,
          background: SENTINEL.sentinelAccent,
          margin: "10px auto 12px",
        }}
      />
      <div
        style={{
          fontSize: 12,
          color: SENTINEL.inkMuted,
          fontFamily: FONTS.sans,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Intelligence for Corporate Litigation Leaders
      </div>
      <div
        style={{
          fontSize: 11,
          color: SENTINEL.inkFaint,
          fontFamily: FONTS.sans,
          marginTop: 8,
        }}
      >
        {ISSUE.date}
      </div>
    </div>
  );
}
