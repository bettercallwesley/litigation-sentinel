"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";

interface SentinelFooterProps {
  delay?: number;
}

export default function SentinelFooter({ delay = 750 }: SentinelFooterProps) {
  return (
    <>
      {/* CaseGlide Software Suite */}
      <FadeIn delay={delay}>
        <div style={{ borderTop: `1px solid ${SENTINEL.border}`, padding: "24px 0 0" }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: SENTINEL.inkFaint,
              fontFamily: FONTS.sans,
              fontWeight: 500,
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            CaseGlide Software Suite
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 10,
            }}
          >
            {[
              {
                id: "briefing",
                label: "Executive Briefing",
                desc: "Litigation readiness assessment",
                icon: "📋",
              },
              {
                id: "council",
                label: "Council Program",
                desc: "90-day activation platform",
                icon: "🏛️",
              },
              {
                id: "trial",
                label: "Trial",
                desc: "30-day proving ground",
                icon: "⚡",
              },
            ].map((app) => (
              <a
                key={app.id}
                href={`/${app.id}`}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  background: SENTINEL.surface,
                  border: `1px solid ${SENTINEL.border}`,
                  borderRadius: 10,
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 4 }}>{app.icon}</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: SENTINEL.ink,
                    fontFamily: FONTS.sans,
                  }}
                >
                  {app.label}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: SENTINEL.inkMuted,
                    fontFamily: FONTS.sans,
                  }}
                >
                  {app.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Copyright Footer */}
      <div
        style={{
          marginTop: 48,
          padding: "20px 0",
          borderTop: `2px solid ${SENTINEL.sentinel}`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontFamily: FONTS.serif,
            fontWeight: 600,
            color: SENTINEL.sentinel,
            marginBottom: 4,
          }}
        >
          Litigation Sentinel
        </div>
        <div style={{ fontSize: 10, color: SENTINEL.inkFaint, fontFamily: FONTS.sans }}>
          Published by CaseGlide · www.LitigationSentinel.com
        </div>
        <div
          style={{
            fontSize: 10,
            color: SENTINEL.inkFaint,
            fontFamily: FONTS.sans,
            marginTop: 2,
          }}
        >
          © 2026 CaseGlide, Inc. All rights reserved.
        </div>
      </div>
    </>
  );
}
