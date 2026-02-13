"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn, ProgressRing } from "@/components/design-system";
import { DATA_CATEGORIES, TRANSFER_METHODS } from "@/data/data-categories";

interface Selections {
  [catId: string]: { source?: string; method?: string };
}

export default function DataReadinessPage() {
  const [activeCategory, setActiveCategory] = useState("incident");
  const [selections, setSelections] = useState<Selections>({});
  const cat = DATA_CATEGORIES.find((c) => c.id === activeCategory)!;

  const setSource = (catId: string, source: string) => {
    setSelections((prev) => ({ ...prev, [catId]: { ...prev[catId], source } }));
  };
  const setMethod = (catId: string, method: string) => {
    setSelections((prev) => ({ ...prev, [catId]: { ...prev[catId], method } }));
  };

  const completedCategories = Object.keys(selections).filter(
    (k) => selections[k]?.source && selections[k]?.method
  ).length;

  return (
    <div>
      <FadeIn>
        <div style={{ marginBottom: 8 }}>
          <h1
            style={{
              fontSize: "clamp(24px, 3.5vw, 30px)",
              fontWeight: 300,
              color: COLORS.textPrimary,
              margin: "0 0 8px",
              fontFamily: FONTS.serif,
            }}
          >
            Data Readiness Assessment
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 24px" }}>
            For each category, identify where this data currently lives and the best method for
            getting it into CaseGlide. This drives your Precedent and Docket dashboards.
          </p>
        </div>
      </FadeIn>

      {/* Progress */}
      <FadeIn delay={100}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
            padding: "14px 20px",
            background: COLORS.surface,
            borderRadius: 12,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <ProgressRing
            value={completedCategories}
            max={4}
            size={48}
            color={completedCategories === 4 ? COLORS.emerald : COLORS.accent}
          />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: COLORS.textPrimary }}>
              {completedCategories} of 4 data categories mapped
            </div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>
              Complete all four to generate your data activation plan
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Category Tabs */}
      <FadeIn delay={150}>
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 24,
            overflowX: "auto",
            paddingBottom: 4,
            WebkitOverflowScrolling: "touch",
          }}
        >
          {DATA_CATEGORIES.map((c) => {
            const isActive = c.id === activeCategory;
            const isDone = selections[c.id]?.source && selections[c.id]?.method;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  border: `1px solid ${isActive ? COLORS.accent : isDone ? `${COLORS.emerald}40` : COLORS.border}`,
                  background: isActive ? COLORS.accentSoft : "transparent",
                  color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: FONTS.sans,
                }}
              >
                <span>{c.icon}</span> {c.name}
                {isDone && (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: COLORS.emerald,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Category Detail */}
      <FadeIn key={activeCategory}>
        <Card>
          <div style={{ padding: "24px 24px 16px", borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: COLORS.textPrimary,
                  margin: 0,
                  fontFamily: FONTS.serif,
                }}
              >
                {cat.name}
              </h2>
            </div>
            <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0, lineHeight: 1.6 }}>
              {cat.description}
            </p>
          </div>

          <div style={{ padding: 24 }}>
            {/* Key Fields */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                Key Fields for Your Dashboards
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.fields.map((f, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 12px",
                      background: COLORS.midnight,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 8,
                      fontSize: 12,
                      color: COLORS.textSecondary,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Where does it live? */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                Where does this data currently live?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {cat.sources.map((s, i) => {
                  const isSelected = selections[cat.id]?.source === s;
                  return (
                    <button
                      key={i}
                      onClick={() => setSource(cat.id, s)}
                      style={{
                        padding: "12px 16px",
                        background: isSelected ? COLORS.accentSoft : COLORS.midnight,
                        border: `1px solid ${isSelected ? COLORS.accent : COLORS.border}`,
                        borderRadius: 10,
                        color: isSelected ? COLORS.textPrimary : COLORS.textSecondary,
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        transition: "all 0.2s",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          border: `2px solid ${isSelected ? COLORS.accent : COLORS.borderLight}`,
                          background: isSelected ? COLORS.accent : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#fff",
                            }}
                          />
                        )}
                      </div>
                      {s}
                    </button>
                  );
                })}
                <button
                  onClick={() => setSource(cat.id, "Other")}
                  style={{
                    padding: "12px 16px",
                    background:
                      selections[cat.id]?.source === "Other" ? COLORS.accentSoft : COLORS.midnight,
                    border: `1px solid ${selections[cat.id]?.source === "Other" ? COLORS.accent : COLORS.border}`,
                    borderRadius: 10,
                    color: COLORS.textSecondary,
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: FONTS.sans,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `2px solid ${selections[cat.id]?.source === "Other" ? COLORS.accent : COLORS.borderLight}`,
                      background:
                        selections[cat.id]?.source === "Other" ? COLORS.accent : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selections[cat.id]?.source === "Other" && (
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#fff",
                        }}
                      />
                    )}
                  </div>
                  Other / Not sure
                </button>
              </div>
            </div>

            {/* Transfer Method */}
            {selections[cat.id]?.source && (
              <FadeIn>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.gold,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 10,
                      fontWeight: 600,
                    }}
                  >
                    Best transfer method
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: 10,
                    }}
                  >
                    {TRANSFER_METHODS.map((m) => {
                      const isSelected = selections[cat.id]?.method === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setMethod(cat.id, m.id)}
                          style={{
                            padding: 16,
                            background: isSelected ? COLORS.accentSoft : COLORS.midnight,
                            border: `1px solid ${isSelected ? COLORS.accent : COLORS.border}`,
                            borderRadius: 12,
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s",
                            fontFamily: FONTS.sans,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              marginBottom: 6,
                            }}
                          >
                            <span style={{ fontSize: 18 }}>{m.icon}</span>
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: isSelected ? COLORS.textPrimary : COLORS.textSecondary,
                              }}
                            >
                              {m.name}
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: 12,
                              color: COLORS.textMuted,
                              lineHeight: 1.5,
                              margin: "0 0 8px",
                            }}
                          >
                            {m.description}
                          </p>
                          <div style={{ display: "flex", gap: 12, fontSize: 11, color: COLORS.textMuted }}>
                            <span>
                              Effort:{" "}
                              <span
                                style={{
                                  color: m.effort === "Low" ? COLORS.emerald : COLORS.amber,
                                }}
                              >
                                {m.effort}
                              </span>
                            </span>
                            <span>
                              Speed:{" "}
                              <span
                                style={{
                                  color: m.speed === "Fast" ? COLORS.emerald : COLORS.amber,
                                }}
                              >
                                {m.speed}
                              </span>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </Card>
      </FadeIn>

      {/* Activation Plan Summary */}
      {completedCategories === 4 && (
        <FadeIn delay={200}>
          <Card style={{ marginTop: 24, border: `1px solid ${COLORS.emerald}30` }}>
            <div style={{ padding: "20px 24px", background: `${COLORS.emerald}08` }}>
              <Badge color={COLORS.emerald}>Data Activation Plan Ready</Badge>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: COLORS.textPrimary,
                  margin: "10px 0 8px",
                  fontFamily: FONTS.serif,
                }}
              >
                Your Path to Live Dashboards
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                All four data categories are mapped. Your CaseGlide team will use this plan to begin
                data activation. You&apos;ll see data start appearing in your Precedent and Docket
                dashboards within the next 2-3 weeks.
              </p>
            </div>
          </Card>
        </FadeIn>
      )}
    </div>
  );
}
