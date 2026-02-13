"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo, FadeIn, Card } from "@/components/design-system";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function TrialPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.midnight,
        fontFamily: FONTS.sans,
      }}
    >
      <div className="app-layout" style={{ display: "flex" }}>
        {/* Sidebar */}
        <div
          className="app-sidebar"
          style={{
            width: 240,
            minHeight: "100vh",
            background: COLORS.deep,
            borderRight: `1px solid ${COLORS.border}`,
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <CaseGlideLogo size={28} />
            <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.textPrimary, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Trial
            </span>
          </div>

          {[
            { id: "overview", label: "Overview", icon: "◎" },
            { id: "executive", label: "Executive Intelligence", icon: "👔" },
            { id: "cases", label: "10-Case Proving Ground", icon: "⚡" },
            { id: "session", label: "Strategy Session", icon: "🎯" },
            { id: "impact", label: "Portfolio Impact", icon: "📈" },
          ].map((item, i) => (
            <button
              key={item.id}
              style={{
                padding: "10px 12px",
                background: i === 0 ? COLORS.accentSoft : "transparent",
                border: `1px solid ${i === 0 ? `${COLORS.accent}30` : "transparent"}`,
                borderRadius: 8,
                color: i === 0 ? COLORS.textPrimary : COLORS.textSecondary,
                fontSize: 13,
                fontWeight: i === 0 ? 500 : 400,
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "32px 28px", maxWidth: 900 }}>
          {/* Mobile top bar */}
          <div className="app-topbar" style={{ display: "none", padding: "12px 0", marginBottom: 16, borderBottom: `1px solid ${COLORS.border}`, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CaseGlideLogo size={24} />
              <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.textPrimary }}>Trial</span>
            </div>
            <button style={{ padding: "6px 12px", background: "transparent", border: `1px solid ${COLORS.border}`, borderRadius: 6, color: COLORS.textSecondary, fontSize: 16, cursor: "pointer" }}>
              ☰
            </button>
          </div>

          <FadeIn>
            <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 300, color: COLORS.textPrimary, margin: "0 0 8px", fontFamily: FONTS.serif }}>
              Trial: 30-Day Proving Ground
            </h1>
            <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 24px" }}>
              Your 10 most challenging cases. Real data. Real strategy recommendations. Coming in Phase 5.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <Card style={{ marginBottom: 20, border: `1px solid ${COLORS.accent}30`, background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.surface})` }}>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>🎯</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.06em" }}>The Mission</span>
                </div>
                <p style={{ fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.7, margin: 0 }}>
                  Take 10 difficult cases through full CaseGlide activation — Case Updates from attorneys, Case Clerk AI document extraction, Chronicle timelines, and Chambers AI analysis. Produce data-driven strategy recommendations for each case.
                </p>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 20 }}>
              {[
                { label: "Cases Activated", value: "4/10", color: COLORS.accent },
                { label: "Updates Received", value: "7", color: COLORS.emerald },
                { label: "Strategies Ready", value: "4", color: COLORS.gold },
                { label: "Days Remaining", value: "18", color: COLORS.amber },
              ].map((s, i) => (
                <Card key={i} style={{ padding: 16 }}>
                  <div style={{ fontSize: 10, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>{s.value}</div>
                </Card>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={220}>
            <Card style={{ marginBottom: 20 }}>
              <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "#fff" }}>
                  LR
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: COLORS.textPrimary }}>Liana Rodriguez</div>
                  <div style={{ fontSize: 12, color: COLORS.textMuted }}>Trial Advisor · liana@caseglide.com</div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
