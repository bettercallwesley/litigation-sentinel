"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideWordmark, Badge, FadeIn, Button } from "@/components/design-system";

interface LandingPageProps {
  onStart: () => void;
  onSchedule: () => void;
}

export default function LandingPage({ onStart, onSchedule }: LandingPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <FadeIn>
        <div style={{ textAlign: "center", maxWidth: 680 }}>
          <div
            style={{
              marginBottom: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CaseGlideWordmark size={44} />
          </div>

          <Badge color={COLORS.gold} glow={COLORS.goldGlow}>
            Executive Briefing
          </Badge>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: COLORS.textPrimary,
              margin: "24px 0 0",
              fontFamily: FONTS.serif,
            }}
          >
            Litigation Intelligence
            <br />
            <span
              style={{
                fontWeight: 500,
                background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.gold})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Readiness Assessment
            </span>
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: COLORS.textSecondary,
              margin: "24px auto 0",
              maxWidth: 520,
            }}
          >
            A confidential, 6-question assessment of how your legal department gathers, views,
            and acts on litigation data — followed by a personalized briefing on what&apos;s
            possible.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" onClick={onStart}>
              Begin Assessment →
            </Button>
            <Button variant="ghost" onClick={onSchedule}>
              Schedule Briefing
            </Button>
          </div>

          <div
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["6 questions · 4 min", "Personalized insights", "Confidential"].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: COLORS.textMuted,
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: COLORS.accent,
                    opacity: 0.5,
                  }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
