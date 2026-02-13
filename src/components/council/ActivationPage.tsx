"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { MILESTONES } from "@/data/milestones";

export default function ActivationPage() {
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
          90-Day Activation Timeline
        </h1>
        <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 28px" }}>
          Each phase builds toward live Precedent and Docket dashboards with your real data.
        </p>
      </FadeIn>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 23,
            top: 0,
            bottom: 0,
            width: 2,
            background: COLORS.border,
            zIndex: 0,
          }}
        />

        {MILESTONES.map((m, i) => {
          const isActive = m.status === "active";
          const isDone = m.status === "completed";
          const dotColor = isDone ? COLORS.emerald : isActive ? COLORS.accent : COLORS.textMuted;
          return (
            <FadeIn key={m.id} delay={i * 80}>
              <div style={{ display: "flex", gap: 20, marginBottom: 20, position: "relative" }}>
                {/* Dot */}
                <div
                  style={{
                    width: 48,
                    minWidth: 48,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: isActive ? 20 : 14,
                      height: isActive ? 20 : 14,
                      borderRadius: "50%",
                      background: isDone ? COLORS.emerald : isActive ? COLORS.accent : COLORS.surface,
                      border: `2px solid ${dotColor}`,
                      boxShadow: isActive ? `0 0 16px ${COLORS.accent}40` : "none",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isDone && <span style={{ fontSize: 10, color: "#fff" }}>✓</span>}
                  </div>
                </div>

                {/* Content */}
                <Card
                  style={{
                    flex: 1,
                    border: isActive
                      ? `1px solid ${COLORS.accent}40`
                      : `1px solid ${COLORS.border}`,
                    boxShadow: isActive ? `0 0 30px ${COLORS.accent}08` : "none",
                  }}
                >
                  <div style={{ padding: "18px 22px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <h3
                          style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: COLORS.textPrimary,
                            margin: 0,
                          }}
                        >
                          {m.name}
                        </h3>
                        {isActive && <Badge color={COLORS.accent}>In Progress</Badge>}
                        {isDone && <Badge color={COLORS.emerald}>Complete</Badge>}
                      </div>
                      <span style={{ fontSize: 12, color: COLORS.textMuted, fontWeight: 500 }}>
                        {m.week}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: COLORS.textSecondary,
                        lineHeight: 1.6,
                        margin: "0 0 14px",
                      }}
                    >
                      {m.description}
                    </p>
                    <div
                      className="council-milestone-tracks"
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          background: COLORS.midnight,
                          borderRadius: 8,
                          border: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: COLORS.accent,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            marginBottom: 4,
                          }}
                        >
                          Team
                        </div>
                        <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                          {m.teamTask}
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "10px 14px",
                          background: COLORS.midnight,
                          borderRadius: 8,
                          border: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: COLORS.gold,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            marginBottom: 4,
                          }}
                        >
                          Executive
                        </div>
                        <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                          {m.execTask}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
