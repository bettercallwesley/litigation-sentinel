"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn, ProgressRing } from "@/components/design-system";

export default function DashboardPreviewPage() {
  const [tab, setTab] = useState("docket");
  const [showVision, setShowVision] = useState(false);

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
          Dashboard Preview
        </h1>
        <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 20px" }}>
          Toggle between your current data progress and the full vision of what your dashboards will
          look like at completion.
        </p>
      </FadeIn>

      {/* View Toggle */}
      <FadeIn delay={80}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 3,
              padding: 3,
              background: COLORS.surface,
              borderRadius: 10,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <button
              onClick={() => setShowVision(false)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                background: !showVision ? COLORS.accent : "transparent",
                color: !showVision ? "#fff" : COLORS.textMuted,
                fontFamily: FONTS.sans,
              }}
            >
              Your Progress
            </button>
            <button
              onClick={() => setShowVision(true)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                background: showVision ? COLORS.gold : "transparent",
                color: showVision ? "#fff" : COLORS.textMuted,
                fontFamily: FONTS.sans,
              }}
            >
              Full Vision ✦
            </button>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[
              { id: "docket", label: "Docket", color: COLORS.accent },
              { id: "precedent", label: "Precedent", color: COLORS.gold },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setTab(d.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: `1px solid ${tab === d.id ? d.color : COLORS.border}`,
                  background: tab === d.id ? `${d.color}10` : "transparent",
                  color: tab === d.id ? COLORS.textPrimary : COLORS.textMuted,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* DOCKET DASHBOARD */}
      {tab === "docket" && (
        <FadeIn key={`docket-${showVision}`}>
          {!showVision ? <DocketProgress /> : <DocketVision />}
        </FadeIn>
      )}

      {/* PRECEDENT DASHBOARD */}
      {tab === "precedent" && (
        <FadeIn key={`precedent-${showVision}`}>
          {!showVision ? <PrecedentProgress /> : <PrecedentVision />}
        </FadeIn>
      )}
    </div>
  );
}

/* ─── Sub-components ─── */

function DocketProgress() {
  return (
    <>
      <Card style={{ marginBottom: 14, border: `1px solid ${COLORS.amber}30` }}>
        <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <ProgressRing value={42} max={100} size={40} color={COLORS.amber} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>
              42% of open cases loaded
            </div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>
              87 of 208 active matters — insights are partial
            </div>
          </div>
        </div>
      </Card>
      <div
        className="council-grid-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: 8,
          marginBottom: 14,
        }}
      >
        {[
          { label: "Over Budget", value: "5", color: COLORS.rose, ok: true },
          { label: "Over $50K", value: "3", color: COLORS.amber, ok: true },
          { label: "Aging 365+", value: "11", color: COLORS.amber, ok: true },
          { label: "Settlement Ready", value: "—", color: COLORS.textMuted, ok: false },
          { label: "Trial in 90 Days", value: "2", color: COLORS.rose, ok: true },
          { label: "Post-Med Stalled", value: "—", color: COLORS.textMuted, ok: false },
        ].map((s, i) => (
          <Card key={i} style={{ padding: 14, textAlign: "center", opacity: s.ok ? 1 : 0.45 }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 10, color: COLORS.textMuted, marginTop: 3, lineHeight: 1.3 }}>
              {s.label}
            </div>
            {!s.ok && (
              <div
                style={{
                  fontSize: 9,
                  color: COLORS.textMuted,
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                Needs data
              </div>
            )}
          </Card>
        ))}
      </div>
      <Card>
        <div
          style={{
            padding: "10px 16px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ fontSize: 11, fontWeight: 600, color: COLORS.rose, textTransform: "uppercase" }}
          >
            ⚠ Needs Attention
          </span>
          <span style={{ fontSize: 10, color: COLORS.textMuted }}>Based on loaded data</span>
        </div>
        {[
          {
            name: "Garcia v. National Property",
            stage: "Discovery",
            days: "387 days",
            budget: "$52K / $40K",
            flag: "Over budget + aging",
          },
          {
            name: "Williams Class Action",
            stage: "Pre-Trial",
            days: "445 days",
            budget: "$128K / $100K",
            flag: "Trial in 62 days",
          },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              padding: "10px 16px",
              borderBottom: i < 1 ? `1px solid ${COLORS.border}` : "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 140px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>
                {c.name}
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                {c.stage} · {c.days}
              </div>
            </div>
            <span style={{ fontSize: 12, color: COLORS.amber, fontWeight: 500 }}>{c.budget}</span>
            <Badge color={COLORS.rose}>{c.flag}</Badge>
          </div>
        ))}
      </Card>
    </>
  );
}

function DocketVision() {
  return (
    <>
      <Card style={{ marginBottom: 14, border: `1px solid ${COLORS.gold}20` }}>
        <div
          style={{
            padding: "12px 18px",
            background: `${COLORS.gold}08`,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14 }}>✦</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.gold }}>
            Full Vision — What your Docket Dashboard will look like
          </span>
        </div>
      </Card>

      {/* Key Performance Metrics */}
      <div
        className="council-grid-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 14,
        }}
      >
        {[
          { label: "Cases Open", value: "1,250", change: "+8%", color: COLORS.textPrimary },
          { label: "Median Duration", value: "145 Days", change: "-12%", color: COLORS.emerald },
          { label: "Median Spend", value: "$32,500", change: "+15%", color: COLORS.amber },
        ].map((m, i) => (
          <Card key={i} style={{ padding: 16 }}>
            <div
              style={{
                fontSize: 10,
                color: COLORS.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              {m.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: m.color }}>{m.value}</div>
            <div
              style={{
                fontSize: 11,
                color: m.change.startsWith("-") ? COLORS.emerald : COLORS.amber,
                marginTop: 2,
              }}
            >
              ▲ {m.change}
            </div>
          </Card>
        ))}
      </div>

      {/* Cases to Watch + Cases by Track */}
      <div
        className="council-milestone-tracks"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 10, marginBottom: 14 }}
      >
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 12,
            }}
          >
            Cases to Watch
          </div>
          {[
            { label: "Plaintiff Depo Scheduled", count: 12 },
            { label: "Mediation", count: 8 },
            { label: "Dispositive Motion", count: 5 },
            { label: "Trial", count: 3 },
            { label: "Over 365 Days", count: 25 },
          ].map((w, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: i < 4 ? `1px solid ${COLORS.border}` : "none",
              }}
            >
              <span style={{ fontSize: 12, color: COLORS.textSecondary }}>{w.label}</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: w.count > 10 ? COLORS.amber : COLORS.textPrimary,
                }}
              >
                {w.count}
              </span>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 12,
            }}
          >
            Cases by Track
          </div>
          {[
            { label: "Early Settlement Track", pct: 22, color: COLORS.emerald },
            { label: "Discovery to Strategize", pct: 35, color: COLORS.accent },
            { label: "Potential Dispositive", pct: 18, color: COLORS.amber },
            { label: "Potential Settlement", pct: 45, color: COLORS.emerald },
            { label: "Trial Track", pct: 12, color: COLORS.rose },
          ].map((t, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  color: COLORS.textSecondary,
                  marginBottom: 3,
                }}
              >
                <span>{t.label}</span>
                <span>{t.pct}%</span>
              </div>
              <div
                style={{
                  height: 6,
                  background: COLORS.border,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${t.pct}%`,
                    height: "100%",
                    background: t.color,
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Negotiation + Expense */}
      <div
        className="council-milestone-tracks"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
      >
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 10,
            }}
          >
            Time Since Last Negotiation
          </div>
          {[
            { label: "< 30 Days", pct: 40, color: COLORS.emerald },
            { label: "31-60 Days", pct: 30, color: COLORS.accent },
            { label: "> 90 Days", pct: 20, color: COLORS.rose },
          ].map((n, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textSecondary,
                  width: 70,
                  flexShrink: 0,
                }}
              >
                {n.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 6,
                  background: COLORS.border,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${n.pct}%`,
                    height: "100%",
                    background: n.color,
                    borderRadius: 3,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: n.color,
                  width: 32,
                  textAlign: "right",
                }}
              >
                {n.pct}%
              </span>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 10,
            }}
          >
            Legal Expense Alert
          </div>
          {[
            { label: "Over Budget", value: 65, color: COLORS.rose },
            { label: "Over $50K", value: "42%", color: COLORS.amber },
            { label: "Over $25K", value: "78%", color: COLORS.amber },
          ].map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 0",
                borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
              }}
            >
              <span style={{ fontSize: 12, color: COLORS.textSecondary }}>{e.label}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: e.color }}>{e.value}</span>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

function PrecedentProgress() {
  return (
    <>
      <Card style={{ marginBottom: 14, border: `1px solid ${COLORS.gold}30` }}>
        <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <ProgressRing value={28} max={100} size={40} color={COLORS.gold} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>
              28% of closed cases loaded
            </div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>
              156 of 560 resolved matters — performance scoring building
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${COLORS.border}` }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: COLORS.gold,
              textTransform: "uppercase",
            }}
          >
            Attorney Performance — Early Signal
          </span>
        </div>
        <div
          className="council-grid-table"
          style={{
            padding: "8px 16px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "grid",
            gridTemplateColumns: "1.5fr 0.8fr 0.8fr 0.8fr 1fr",
            gap: 8,
            fontSize: 11,
            color: COLORS.textMuted,
            textTransform: "uppercase",
          }}
        >
          <span>Firm</span>
          <span>Cases</span>
          <span>Spend</span>
          <span>Score</span>
          <span>Value</span>
        </div>
        {[
          {
            firm: "Baker & Assoc.",
            cases: "18",
            spend: "$38K",
            score: "7.9",
            rating: "High",
            rColor: COLORS.emerald,
          },
          {
            firm: "Morrison Drake",
            cases: "12",
            spend: "$54K",
            score: "—",
            rating: "Building",
            rColor: COLORS.textMuted,
          },
          {
            firm: "Sterling Whitmore",
            cases: "8",
            spend: "$71K",
            score: "—",
            rating: "Building",
            rColor: COLORS.textMuted,
          },
        ].map((f, i) => (
          <div
            key={i}
            className="council-grid-table"
            style={{
              padding: "10px 16px",
              borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
              display: "grid",
              gridTemplateColumns: "1.5fr 0.8fr 0.8fr 0.8fr 1fr",
              gap: 8,
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 500, color: COLORS.textPrimary }}>
              {f.firm}
            </span>
            <span style={{ fontSize: 12, color: COLORS.textSecondary }}>{f.cases}</span>
            <span style={{ fontSize: 12, color: COLORS.textSecondary }}>{f.spend}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: f.rColor }}>
              {f.score === "—" ? "—" : `${f.score}/10`}
            </span>
            <Badge color={f.rColor}>{f.rating}</Badge>
          </div>
        ))}
      </Card>
      <div
        style={{
          marginTop: 10,
          padding: "10px 14px",
          background: COLORS.surface,
          borderRadius: 10,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: COLORS.textMuted,
            margin: 0,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          Outcome scoring requires liability, damages, venue, and negotiation data. As more detail
          loads via CSV or Case Clerk AI, scores will calibrate.
        </p>
      </div>
    </>
  );
}

function PrecedentVision() {
  return (
    <>
      <Card style={{ marginBottom: 14, border: `1px solid ${COLORS.gold}20` }}>
        <div
          style={{
            padding: "12px 18px",
            background: `${COLORS.gold}08`,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14 }}>✦</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.gold }}>
            Full Vision — What your Precedent Dashboard will look like
          </span>
        </div>
      </Card>

      {/* Value of Defense + Budget Accuracy */}
      <div
        className="council-milestone-tracks"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}
      >
        <Card
          style={{
            padding: 18,
            background: `linear-gradient(135deg, ${COLORS.surface}, ${COLORS.emeraldGlow})`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: COLORS.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            Value of Defense
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.emerald }}>$5.8M</div>
          <div style={{ fontSize: 11, color: COLORS.emerald }}>✓ Demand Reduction · +18%</div>
        </Card>
        <Card
          style={{
            padding: 18,
            background: `linear-gradient(135deg, ${COLORS.surface}, ${COLORS.accentGlow})`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: COLORS.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            Budget Accuracy
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.accent }}>92%</div>
          <div style={{ fontSize: 11, color: COLORS.accent }}>✓ Initial Budget Accuracy · +12%</div>
        </Card>
      </div>

      {/* Cycle Time Efficiency */}
      <Card style={{ padding: 18, marginBottom: 14 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: COLORS.textPrimary,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 14,
          }}
        >
          Cycle Time Efficiency — Days Improved
        </div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {[
            { stage: "Initial Analysis", days: 45 },
            { stage: "Discovery", days: 78 },
            { stage: "Depositions", days: 15 },
            { stage: "Mediation", days: 22 },
            { stage: "Trial", days: 22 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 0 90px",
                padding: "12px 10px",
                background: COLORS.midnight,
                borderRadius: 10,
                border: `1px solid ${COLORS.border}`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.emerald }}>{s.days}</div>
              <div style={{ fontSize: 9, color: COLORS.textMuted, marginTop: 2 }}>Days</div>
              <div style={{ fontSize: 10, color: COLORS.emerald, marginTop: 4 }}>▼ Improved</div>
              <div style={{ fontSize: 10, color: COLORS.textMuted, marginTop: 2 }}>{s.stage}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Resolution Type + Litigation Stage */}
      <div
        className="council-milestone-tracks"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
      >
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 12,
            }}
          >
            Closed by Resolution Type
          </div>
          {[
            { label: "Dismissed", pct: 18, color: COLORS.emerald },
            { label: "Settled", pct: 55, color: COLORS.accent },
            { label: "Summary Judgment", pct: 12, color: COLORS.gold },
            { label: "Trial Win", pct: 10, color: COLORS.emerald },
            { label: "Trial Loss", pct: 5, color: COLORS.rose },
          ].map((r, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textSecondary,
                  width: 80,
                  flexShrink: 0,
                }}
              >
                {r.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 8,
                  background: COLORS.border,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${r.pct}%`,
                    height: "100%",
                    background: r.color,
                    borderRadius: 4,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  width: 28,
                  textAlign: "right",
                }}
              >
                {r.pct}%
              </span>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: COLORS.textPrimary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 12,
            }}
          >
            Closed by Litigation Stage
          </div>
          {[
            { label: "Initial Analysis", pct: 15, color: COLORS.emerald },
            { label: "Deposition", pct: 20, color: COLORS.accent },
            { label: "Discovery", pct: 30, color: COLORS.gold },
            { label: "Mediation", pct: 25, color: COLORS.amber },
            { label: "Trial", pct: 10, color: COLORS.rose },
          ].map((r, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textSecondary,
                  width: 80,
                  flexShrink: 0,
                }}
              >
                {r.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 8,
                  background: COLORS.border,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${r.pct}%`,
                    height: "100%",
                    background: r.color,
                    borderRadius: 4,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  width: 28,
                  textAlign: "right",
                }}
              >
                {r.pct}%
              </span>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
