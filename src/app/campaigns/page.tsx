"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { CaseGlideLogo } from "@/components/design-system";
import {
  CampaignDashboard,
  ApprovalQueue,
  PipelineView,
  ProspectTable,
  WorkflowShortcuts,
  MeetingPrep,
  WeeklyReport,
} from "@/components/campaigns";
import ThemeToggle from "@/components/shared/ThemeToggle";

type Page = "dashboard" | "approvals" | "pipeline" | "prospects" | "shortcuts" | "meeting_prep" | "report";

const NAV_ITEMS: { id: Page; label: string; icon: string; badge?: string }[] = [
  { id: "dashboard", label: "Campaigns", icon: "\u25CE" },
  { id: "approvals", label: "Approval Queue", icon: "\u26A0", badge: "5" },
  { id: "pipeline", label: "Pipeline", icon: "\u25B6" },
  { id: "prospects", label: "Prospects", icon: "\uD83D\uDCCB" },
  { id: "shortcuts", label: "Workflows", icon: "\u26A1" },
  { id: "meeting_prep", label: "Meeting Prep", icon: "\uD83C\uDFAF" },
  { id: "report", label: "Weekly Report", icon: "\uD83D\uDCC8" },
];

export default function CampaignsPage() {
  const [page, setPage] = useState<Page>("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          .campaigns-layout { display: flex !important; }
          .campaigns-sidebar { display: flex !important; }
          .campaigns-topbar { display: none !important; }
        }
        @media (max-width: 699px) {
          .campaigns-layout { display: block !important; }
          .campaigns-sidebar { display: none !important; }
          .campaigns-topbar { display: flex !important; }
          .campaigns-summary-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Mobile Top Bar */}
      <div
        className="campaigns-topbar"
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
              CAMPAIGNS
            </div>
            <div style={{ fontSize: 9, color: COLORS.textMuted }}>
              CaseGlide Sales Operations
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
                {item.badge && (
                  <span style={{
                    marginLeft: "auto",
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: COLORS.roseGlow,
                    color: COLORS.rose,
                    fontSize: 11,
                    fontWeight: 600,
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="campaigns-layout" style={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <div
          className="campaigns-sidebar"
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
          {/* Logo area */}
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
                CAMPAIGNS
              </div>
              <div style={{ fontSize: 10, color: COLORS.textMuted }}>
                Sales Operations
              </div>
            </div>
          </div>

          {/* Tools section */}
          <div
            style={{
              padding: "14px 20px",
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: COLORS.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              Active Tools
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Apollo", "Sales Nav", "LinkedIn", "Pipedrive"].map(tool => (
                <span key={tool} style={{
                  padding: "2px 8px",
                  borderRadius: 100,
                  border: `1px solid ${COLORS.border}`,
                  fontSize: 10,
                  color: COLORS.textMuted,
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
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
                    position: "relative",
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
                  {item.badge && (
                    <span style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      borderRadius: 10,
                      background: COLORS.roseGlow,
                      color: COLORS.rose,
                      fontSize: 11,
                      fontWeight: 600,
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Owners footer */}
          <div
            style={{
              padding: "16px 20px",
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              Meeting Owners
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.accent}, #1D4ED8)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#fff",
                }}>W</div>
                <span style={{ fontSize: 12, color: COLORS.textSecondary }}>Wes</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.gold}, #B8860B)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#fff",
                }}>L</div>
                <span style={{ fontSize: 12, color: COLORS.textSecondary }}>Liana Rodriguez</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "24px clamp(16px, 4vw, 48px)",
            maxWidth: 1100,
            overflow: "auto",
          }}
        >
          {page === "dashboard" && <CampaignDashboard />}
          {page === "approvals" && <ApprovalQueue />}
          {page === "pipeline" && <PipelineView />}
          {page === "prospects" && <ProspectTable />}
          {page === "shortcuts" && <WorkflowShortcuts />}
          {page === "meeting_prep" && <MeetingPrep />}
          {page === "report" && <WeeklyReport />}
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
