"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Masthead */}
        <div style={{ textAlign: "center", padding: "48px 0 20px", borderBottom: `3px double ${SENTINEL.sentinel}` }}>
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
            A CaseGlide Publication · Vol. 1 · Issue 12
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
          <div style={{ fontSize: 11, color: SENTINEL.inkFaint, fontFamily: FONTS.sans, marginTop: 8 }}>
            February 12, 2026
          </div>
        </div>

        {/* Placeholder for Phase 2 newsletter content */}
        <FadeIn delay={200}>
          <div style={{ padding: "80px 0", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📰</div>
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 24,
                fontWeight: 500,
                color: SENTINEL.ink,
                margin: "0 0 8px",
              }}
            >
              Litigation Sentinel
            </h2>
            <p style={{ fontSize: 14, color: SENTINEL.inkLight, lineHeight: 1.6 }}>
              Premium editorial newsletter — coming in Phase 2.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
              <a href="/briefing" style={{ padding: "10px 20px", background: SENTINEL.sentinel, color: "#fff", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                Executive Briefing →
              </a>
              <a href="/council" style={{ padding: "10px 20px", background: "transparent", color: SENTINEL.sentinel, border: `1px solid ${SENTINEL.border}`, borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                Council Program →
              </a>
              <a href="/trial" style={{ padding: "10px 20px", background: "transparent", color: SENTINEL.sentinel, border: `1px solid ${SENTINEL.border}`, borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                Trial →
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <div style={{ marginTop: 48, padding: "20px 0", borderTop: `2px solid ${SENTINEL.sentinel}`, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontFamily: FONTS.serif, fontWeight: 600, color: SENTINEL.sentinel, marginBottom: 4 }}>
            Litigation Sentinel
          </div>
          <div style={{ fontSize: 10, color: SENTINEL.inkFaint, fontFamily: FONTS.sans }}>
            Published by CaseGlide · www.LitigationSentinel.com
          </div>
          <div style={{ fontSize: 10, color: SENTINEL.inkFaint, fontFamily: FONTS.sans, marginTop: 2 }}>
            © 2026 CaseGlide, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
