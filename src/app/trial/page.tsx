"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo } from "@/components/design-system";
import {
  TrialOverviewPage,
  ExecutiveIntelligencePage,
  ProvingGroundPage,
  StrategySessionPage,
  PortfolioImpactPage,
} from "@/components/trial";
import ThemeToggle from "@/components/shared/ThemeToggle";

type Page = "overview" | "executive" | "cases" | "session" | "impact";

const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "\u25CE" },
  { id: "executive", label: "Executive Intelligence", icon: "\uD83D\uDC54" },
  { id: "cases", label: "10-Case Proving Ground", icon: "\u26A1" },
  { id: "session", label: "Strategy Session", icon: "\uD83C\uDFAF" },
  { id: "impact", label: "Portfolio Impact", icon: "\uD83D\uDCC8" },
];

export default function TrialPage() {
  const [page, setPage] = useState<Page>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const daysRemaining = 18;

  const navigateTo = (p: string) => {
    setPage(p as Page);
    setMobileMenuOpen(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.midnight,
        color: COLORS.textPrimary,
        fontFamily: FONTS.sans,
      }}
    >
      <style>{`
        @media (min-width: 700px) {
          .trial-layout { display: flex !important; }
          .trial-sidebar { display: flex !important; }
          .trial-topbar { display: none !important; }
        }
        @media (max-width: 699px) {
          .trial-layout { display: block !important; }
          .trial-sidebar { display: none !important; }
          .trial-topbar { display: flex !important; }
          .trial-grid-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Mobile Top Bar */}
      <div
        className="trial-topbar"
        style={{
          display: "none",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 16px",
          borderBottom: `1px solid ${COLORS.border}`,
          background: COLORS.deep,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={28} />
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: COLORS.textPrimary,
                letterSpacing: "0.04em",
              }}
            >
              TRIAL
            </div>
            <div style={{ fontSize: 9, color: COLORS.textMuted }}>
              30-Day Proving Ground &middot; {daysRemaining} days left
            </div>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            padding: "6px 12px",
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            color: COLORS.textSecondary,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: FONTS.sans,
          }}
        >
          {mobileMenuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "sticky",
            top: 56,
            zIndex: 49,
            background: COLORS.deep,
            borderBottom: `1px solid ${COLORS.border}`,
            padding: "8px 12px",
          }}
        >
          {/* Progress bar */}
          <div style={{ padding: "8px 8px 12px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 11, color: COLORS.textMuted }}>
                {daysRemaining} days remaining
              </span>
              <span style={{ fontSize: 11, color: COLORS.accent }}>
                {Math.round(((30 - daysRemaining) / 30) * 100)}%
              </span>
            </div>
            <div
              style={{
                height: 4,
                background: COLORS.border,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${((30 - daysRemaining) / 30) * 100}%`,
                  height: "100%",
                  background: COLORS.accent,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  padding: "11px 12px",
                  background: isActive ? COLORS.accentSoft : "transparent",
                  border: "none",
                  borderRadius: 8,
                  color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                  fontSize: 14,
                  fontWeight: isActive ? 500 : 400,
                  cursor: "pointer",
                  marginBottom: 2,
                  fontFamily: FONTS.sans,
                }}
              >
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="trial-layout" style={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <div
          className="trial-sidebar"
          style={{
            width: 240,
            minHeight: "100vh",
            background: COLORS.deep,
            borderRight: `1px solid ${COLORS.border}`,
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              padding: "20px 20px 16px",
              borderBottom: `1px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CaseGlideLogo size={32} />
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                  letterSpacing: "0.04em",
                }}
              >
                TRIAL
              </div>
              <div style={{ fontSize: 10, color: COLORS.textMuted }}>
                30-Day Proving Ground
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "14px 20px",
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: COLORS.textPrimary,
              }}
            >
              10-Case Portfolio
            </div>
            <div style={{ fontSize: 11, color: COLORS.textMuted }}>
              {daysRemaining} days remaining
            </div>
            <div
              style={{
                marginTop: 8,
                height: 4,
                background: COLORS.border,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${((30 - daysRemaining) / 30) * 100}%`,
                  height: "100%",
                  background: COLORS.accent,
                  borderRadius: 2,
                  transition: "width 0.5s",
                }}
              />
            </div>
          </div>

          <div style={{ padding: "12px 8px", flex: 1 }}>
            {NAV_ITEMS.map((item) => {
              const isActive = page === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    width: "100%",
                    padding: "10px 12px",
                    background: isActive ? COLORS.accentSoft : "transparent",
                    border: "none",
                    borderRadius: 8,
                    color: isActive
                      ? COLORS.textPrimary
                      : COLORS.textSecondary,
                    fontSize: 13,
                    fontWeight: isActive ? 500 : 400,
                    cursor: "pointer",
                    marginBottom: 2,
                    transition: "all 0.2s",
                    fontFamily: FONTS.sans,
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "24px clamp(16px, 4vw, 48px)",
            maxWidth: 960,
            overflow: "auto",
          }}
        >
          {page === "overview" && <TrialOverviewPage onNav={navigateTo} />}
          {page === "executive" && <ExecutiveIntelligencePage />}
          {page === "cases" && <ProvingGroundPage />}
          {page === "session" && <StrategySessionPage />}
          {page === "impact" && <PortfolioImpactPage />}
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
