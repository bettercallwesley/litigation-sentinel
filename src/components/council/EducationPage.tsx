"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { EDUCATION_CONTENT } from "@/data/education-content";

export default function EducationPage() {
  const [track, setTrack] = useState("team");
  const content = EDUCATION_CONTENT[track];

  return (
    <div>
      <FadeIn>
        <h1
          style={{
            fontSize: "clamp(24px, 3.5vw, 30px)",
            fontWeight: 300,
            color: COLORS.textPrimary,
            margin: "0 0 8px",
            fontFamily: FONTS.serif,
          }}
        >
          Education &amp; Enablement
        </h1>
        <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 24px" }}>
          Curated content delivered to each track throughout the 90-day engagement — building feature
          knowledge and executive confidence in parallel.
        </p>
      </FadeIn>

      {/* Track Toggle */}
      <FadeIn delay={100}>
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {[
            {
              id: "team",
              label: "Team Track",
              color: COLORS.accent,
              desc: "Claims managers, legal ops, paralegals",
            },
            {
              id: "exec",
              label: "Executive Track",
              color: COLORS.gold,
              desc: "GC, CLO, VP Claims",
            },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTrack(t.id)}
              style={{
                padding: "14px 20px",
                borderRadius: 12,
                border: `1px solid ${track === t.id ? t.color : COLORS.border}`,
                background: track === t.id ? `${t.color}10` : "transparent",
                cursor: "pointer",
                textAlign: "left",
                flex: 1,
                transition: "all 0.2s",
                fontFamily: FONTS.sans,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: track === t.id ? t.color : COLORS.textSecondary,
                }}
              >
                {t.label}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 2 }}>{t.desc}</div>
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Content List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {content.map((item, i) => {
          const isPast = item.week <= 2;
          return (
            <FadeIn key={i} delay={100 + i * 50}>
              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: COLORS.midnight,
                    border: `1px solid ${COLORS.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: COLORS.textPrimary,
                      marginBottom: 2,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ display: "flex", gap: 10, fontSize: 12, color: COLORS.textMuted }}>
                    <span>{item.type}</span>
                    <span>·</span>
                    <span>Week {item.week}</span>
                  </div>
                </div>
                {isPast ? (
                  <Badge color={COLORS.emerald}>Delivered</Badge>
                ) : item.week <= 3 ? (
                  <Badge color={COLORS.accent}>This Week</Badge>
                ) : (
                  <Badge color={COLORS.textMuted}>Upcoming</Badge>
                )}
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
