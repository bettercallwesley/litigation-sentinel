"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";

interface SubscribeBlockProps {
  delay?: number;
}

export default function SubscribeBlock({ delay = 700 }: SubscribeBlockProps) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          margin: "40px 0 32px",
          padding: "32px 24px",
          background: SENTINEL.bgWarm,
          borderRadius: 12,
          border: `1px solid ${SENTINEL.border}`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: SENTINEL.sentinelAccent,
            fontFamily: FONTS.sans,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Stay Informed
        </div>
        <h3
          style={{
            fontSize: 20,
            fontFamily: FONTS.serif,
            fontWeight: 600,
            color: SENTINEL.sentinel,
            margin: "0 0 8px",
          }}
        >
          Subscribe to Litigation Sentinel
        </h3>
        <p
          style={{
            fontSize: 13,
            color: SENTINEL.inkLight,
            lineHeight: 1.6,
            margin: "0 0 16px",
            fontFamily: FONTS.sans,
          }}
        >
          Weekly intelligence for litigation leaders. Strategy, technology, and the data that
          matters.
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            maxWidth: 400,
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: "1 1 200px",
              padding: "10px 14px",
              border: `1px solid ${SENTINEL.border}`,
              borderRadius: 8,
              fontSize: 13,
              fontFamily: FONTS.sans,
              background: SENTINEL.surface,
              outline: "none",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              background: SENTINEL.sentinel,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONTS.sans,
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
