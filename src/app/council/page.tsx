"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo } from "@/components/design-system";
import {
  OverviewPage,
  DataReadinessPage,
  ActivationPage,
  EducationPage,
  DashboardPreviewPage,
} from "@/components/council";
import ThemeToggle from "@/components/shared/ThemeToggle";

type Page = "overview" | "data" | "activation" | "education" | "dashboards";

const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "data", label: "Data Readiness", icon: "◫" },
  { id: "activation", label: "Activation", icon: "▶" },
  { id: "education", label: "Education", icon: "◆" },
  { id: "dashboards", label: "Dashboard Preview", icon: "▦" },
];

export default function CouncilRoute() {
  const [page, setPage] = useState<Page>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const clientName = "Acme Insurance";
  const currentWeek = 3;

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
          .council-layout { display: flex !important; }
          .council-sidebar { display: flex !important; }
          .council-topbar { display: none !important; }
        }
        @media (max-width: 699px) {
          .council-layout { display: block !important; }
          .council-sidebar { display: none !important; }
          .council-topbar { display: flex !important; }
          .council-grid-stats { grid-template-columns: 1fr 1fr !important; }
          .council-milestone-tracks { grid-template-columns: 1fr !important; }
          .council-grid-table { font-size: 10px !important; grid-template-columns: 1.2fr 0.5fr 0.6fr 0.6fr 0.7fr !important; padding: 8px 10px !important; gap: 4px !important; }
        }
      `}</style>

      {/* Mobile Top Bar */}
      <div
        className="council-topbar"
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
              COUNCIL
            </div>
            <div style={{ fontSize: 9, color: COLORS.textMuted }}>
              {clientName} · Week {currentWeek}
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
          {mobileMenuOpen ? "✕" : "☰"}
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
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: COLORS.textMuted }}>
                Week {currentWeek} of 12
              </span>
              <span style={{ fontSize: 11, color: COLORS.accent }}>
                {Math.round((currentWeek / 12) * 100)}%
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
                  width: `${(currentWeek / 12) * 100}%`,
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

      <div className="council-layout" style={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <div
          className="council-sidebar"
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
                COUNCIL
              </div>
              <div style={{ fontSize: 10, color: COLORS.textMuted }}>90-Day Activation</div>
            </div>
          </div>

          <div style={{ padding: "14px 20px", borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>
              {clientName}
            </div>
            <div style={{ fontSize: 11, color: COLORS.textMuted }}>
              Week {currentWeek} of 12
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
                  width: `${(currentWeek / 12) * 100}%`,
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
                    color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                    fontSize: 13,
                    fontWeight: isActive ? 500 : 400,
                    cursor: "pointer",
                    marginBottom: 2,
                    transition: "all 0.2s",
                    fontFamily: FONTS.sans,
                  }}
                >
                  <span style={{ fontSize: 16, opacity: isActive ? 1 : 0.6 }}>{item.icon}</span>
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
          {page === "overview" && (
            <OverviewPage clientName={clientName} week={currentWeek} onNav={navigateTo} />
          )}
          {page === "data" && <DataReadinessPage />}
          {page === "activation" && <ActivationPage />}
          {page === "education" && <EducationPage />}
          {page === "dashboards" && <DashboardPreviewPage />}
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
