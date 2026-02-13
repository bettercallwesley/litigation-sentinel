"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";

interface CaseData {
  id: number;
  name: string;
  stage: string;
  plaintiffFirm: string;
  attorney: string;
  status: "active" | "monitoring" | "resolved" | "critical";
  exposure: string;
  caseUpdate: {
    date: string;
    author: string;
    summary: string;
  };
  chronicle: {
    events: { date: string; event: string; significance: string }[];
  };
  chambers: {
    riskScore: number;
    recommendation: string;
    keyInsight: string;
  };
}

const CASES: CaseData[] = [
  {
    id: 1,
    name: "Garcia v. NorthStar Logistics",
    stage: "Discovery",
    plaintiffFirm: "Baker & Sterling LLP",
    attorney: "Mark Jennings",
    status: "active",
    exposure: "$2.8M",
    caseUpdate: {
      date: "Feb 10, 2026",
      author: "Mark Jennings",
      summary:
        "Plaintiff deposed three witnesses last week. Key testimony from warehouse supervisor supports our position on safety protocols. Requesting extension for expert discovery deadline.",
    },
    chronicle: {
      events: [
        { date: "Feb 10", event: "Deposition of warehouse supervisor completed", significance: "Favorable — confirmed safety training compliance" },
        { date: "Feb 6", event: "Plaintiff document production received (1,247 docs)", significance: "Case Clerk AI extracted 34 key exhibits" },
        { date: "Jan 28", event: "Motion to compel granted in part", significance: "Must produce internal audit reports by Feb 20" },
      ],
    },
    chambers: {
      riskScore: 5.2,
      recommendation: "Continue discovery, position for mediation in Q3",
      keyInsight: "Plaintiff counsel has settled 7 of last 10 similar cases pre-trial. Pattern suggests willingness to negotiate once discovery is complete.",
    },
  },
  {
    id: 2,
    name: "Patel v. Meridian Corp",
    stage: "Pre-Trial",
    plaintiffFirm: "Hartwell & Associates",
    attorney: "Sandra Okafor",
    status: "critical",
    exposure: "$4.1M",
    caseUpdate: {
      date: "Feb 11, 2026",
      author: "Sandra Okafor",
      summary:
        "Summary judgment motion denied. Trial date set for April 14. Plaintiff has retained biomechanical expert — report due Feb 28. Recommending settlement conference.",
    },
    chronicle: {
      events: [
        { date: "Feb 11", event: "Summary judgment denied", significance: "Critical — case proceeding to trial" },
        { date: "Feb 3", event: "Expert witness list exchanged", significance: "Plaintiff adding biomechanical expert increases exposure" },
        { date: "Jan 20", event: "Mediation failed — $1.2M gap", significance: "Plaintiff demands $3.8M, our offer at $2.6M" },
      ],
    },
    chambers: {
      riskScore: 7.8,
      recommendation: "Increase settlement authority to $3.2M and request second mediation",
      keyInsight: "Judge Patterson has a 73% plaintiff verdict rate in similar employment cases. Venue analysis strongly favors settlement over trial.",
    },
  },
  {
    id: 3,
    name: "Thompson v. Apex Logistics",
    stage: "Early Discovery",
    plaintiffFirm: "Coleman Davis LLP",
    attorney: "Robert Chen",
    status: "active",
    exposure: "$580K",
    caseUpdate: {
      date: "Feb 9, 2026",
      author: "Robert Chen",
      summary:
        "Initial written discovery served. Plaintiff claims slip-and-fall at distribution center. Surveillance footage recovered shows inconsistent plaintiff behavior. Strong defense position.",
    },
    chronicle: {
      events: [
        { date: "Feb 9", event: "Written discovery served on plaintiff", significance: "Standard interrogatories + document requests" },
        { date: "Feb 2", event: "Surveillance footage reviewed by Case Clerk AI", significance: "AI flagged 3 inconsistencies in plaintiff timeline" },
        { date: "Jan 22", event: "Complaint filed and served", significance: "30-day response deadline met" },
      ],
    },
    chambers: {
      riskScore: 3.1,
      recommendation: "Defend aggressively — strong evidence of inconsistent claims",
      keyInsight: "Plaintiff attorney Coleman Davis has a 40% dismissal rate. Surveillance evidence combined with timeline inconsistencies create favorable defense posture.",
    },
  },
  {
    id: 4,
    name: "Morrison v. Pacific Holdings",
    stage: "Mediation",
    plaintiffFirm: "Whitfield Crane PC",
    attorney: "Jennifer Walsh",
    status: "critical",
    exposure: "$8.7M",
    caseUpdate: {
      date: "Feb 12, 2026",
      author: "Jennifer Walsh",
      summary:
        "Class certification hearing scheduled for March 5. If certified, exposure jumps to $28M+. Recommending aggressive pre-certification settlement talks. Mediator Judge (Ret.) Harris available March 1.",
    },
    chronicle: {
      events: [
        { date: "Feb 12", event: "Class certification motion filed by plaintiff", significance: "Critical inflection point — must respond by Feb 26" },
        { date: "Feb 1", event: "Named plaintiffs increased from 3 to 7", significance: "Strengthens class certification argument" },
        { date: "Jan 15", event: "Initial case assessment completed", significance: "Chambers AI flagged high certification risk" },
      ],
    },
    chambers: {
      riskScore: 8.9,
      recommendation: "Settle pre-certification — exposure multiplies 3x if class is certified",
      keyInsight: "Whitfield Crane specializes in employment class actions with 82% certification success rate in this jurisdiction. Pre-certification settlement is the optimal strategy.",
    },
  },
  {
    id: 5,
    name: "Chen v. Atlas Manufacturing",
    stage: "Discovery",
    plaintiffFirm: "Rivera & Park LLP",
    attorney: "David Thornton",
    status: "active",
    exposure: "$1.2M",
    caseUpdate: {
      date: "Feb 8, 2026",
      author: "David Thornton",
      summary:
        "Product liability claim. Expert analysis of manufacturing defect underway. Initial engineering report suggests design within spec. Awaiting plaintiff expert report.",
    },
    chronicle: {
      events: [
        { date: "Feb 8", event: "Defense engineering expert retained", significance: "Dr. Kaminski — strong credentials in product liability" },
        { date: "Jan 30", event: "Product inspection completed", significance: "No manufacturing defect found — design spec compliant" },
        { date: "Jan 18", event: "Plaintiff medical records received", significance: "Injury severity moderate — supports lower damages range" },
      ],
    },
    chambers: {
      riskScore: 4.4,
      recommendation: "Defend through expert phase, reassess after reports exchanged",
      keyInsight: "Rivera & Park typically seeks early settlement in product cases. Strong defense expert report may trigger favorable negotiation window in March.",
    },
  },
  {
    id: 6,
    name: "Rivera v. Summit Health",
    stage: "Pre-Trial",
    plaintiffFirm: "Lawrence & Katz",
    attorney: "Angela Moretti",
    status: "monitoring",
    exposure: "$6.3M",
    caseUpdate: {
      date: "Feb 7, 2026",
      author: "Angela Moretti",
      summary:
        "Medical malpractice — trial date June 2. Expert depositions scheduled for March. Our medical expert Dr. Patel provides strong testimony on standard of care compliance.",
    },
    chronicle: {
      events: [
        { date: "Feb 7", event: "Expert deposition schedule confirmed", significance: "Three defense experts to be deposed in March" },
        { date: "Jan 25", event: "IME completed", significance: "Independent medical exam supports lower permanency rating" },
        { date: "Jan 10", event: "Amended complaint filed", significance: "Loss of consortium claim added — increases exposure by $800K" },
      ],
    },
    chambers: {
      riskScore: 6.7,
      recommendation: "Prepare for trial while pursuing structured settlement",
      keyInsight: "Lawrence & Katz medical malpractice verdicts average $4.2M in this jurisdiction. Structured settlement offer at $3.5M recommended before expert depositions.",
    },
  },
  {
    id: 7,
    name: "Dawson v. TechCore Systems",
    stage: "Early Discovery",
    plaintiffFirm: "Goldstein Marks LLP",
    attorney: "James Whitaker",
    status: "active",
    exposure: "$950K",
    caseUpdate: {
      date: "Feb 6, 2026",
      author: "James Whitaker",
      summary:
        "Trade secret misappropriation claim. Reviewing plaintiff electronic discovery — 45,000 documents. Case Clerk AI prioritized 312 documents for attorney review. No smoking gun found yet.",
    },
    chronicle: {
      events: [
        { date: "Feb 6", event: "Case Clerk AI document review completed Phase 1", significance: "312 of 45,000 docs flagged as highly relevant" },
        { date: "Jan 28", event: "Protective order entered", significance: "Allows exchange of confidential business information" },
        { date: "Jan 15", event: "TRO hearing — preliminary injunction denied", significance: "Favorable — no immediate business disruption" },
      ],
    },
    chambers: {
      riskScore: 4.8,
      recommendation: "Complete document review, build trade secret identification defense",
      keyInsight: "Preliminary injunction denial signals judicial skepticism of plaintiff claims. Strong position to negotiate dismissal or nuisance settlement under $200K.",
    },
  },
  {
    id: 8,
    name: "Vasquez v. GreenField Energy",
    stage: "Pleadings",
    plaintiffFirm: "Martin & Shaw PC",
    attorney: "Katherine Liu",
    status: "active",
    exposure: "$1.6M",
    caseUpdate: {
      date: "Feb 5, 2026",
      author: "Katherine Liu",
      summary:
        "Environmental tort. Answer filed with 8 affirmative defenses. Moving to dismiss 3 of 5 counts for failure to state a claim. Hearing scheduled Feb 24.",
    },
    chronicle: {
      events: [
        { date: "Feb 5", event: "Motion to dismiss filed (3 counts)", significance: "If granted, reduces exposure to $400K" },
        { date: "Jan 29", event: "Answer and affirmative defenses filed", significance: "Statute of limitations defense strongest" },
        { date: "Jan 12", event: "Complaint received and analyzed", significance: "Case Clerk AI identified statute of limitations issue on 2 counts" },
      ],
    },
    chambers: {
      riskScore: 3.8,
      recommendation: "Pursue motion to dismiss, prepare for limited discovery on surviving counts",
      keyInsight: "Martin & Shaw has 30% success rate on environmental tort MTDs in this court. Our statute of limitations argument is the strongest basis for dismissal.",
    },
  },
  {
    id: 9,
    name: "Burke v. Continental Transport",
    stage: "Settlement Negotiation",
    plaintiffFirm: "Hanover Williams LLP",
    attorney: "Michael Russo",
    status: "resolved",
    exposure: "$2.1M",
    caseUpdate: {
      date: "Feb 4, 2026",
      author: "Michael Russo",
      summary:
        "Settlement reached at $1.45M — 31% below initial plaintiff demand. Chambers AI analysis of comparable verdicts was instrumental in negotiation. Drafting release agreement.",
    },
    chronicle: {
      events: [
        { date: "Feb 4", event: "Settlement agreement reached — $1.45M", significance: "31% below plaintiff demand, 12% below our reserve" },
        { date: "Jan 31", event: "Final mediation session with Judge (Ret.) Cooper", significance: "Chambers AI verdict analysis presented to mediator" },
        { date: "Jan 22", event: "Chambers AI comparable verdict analysis delivered", significance: "Identified 23 analogous cases supporting $1.2M-$1.6M range" },
      ],
    },
    chambers: {
      riskScore: 2.1,
      recommendation: "RESOLVED — Finalize release and obtain court approval",
      keyInsight: "Settlement achieved within Chambers AI predicted range. Data-driven negotiation saved estimated $650K vs. going to trial.",
    },
  },
  {
    id: 10,
    name: "Nguyen v. Cascade Properties",
    stage: "Discovery",
    plaintiffFirm: "Bradford & Lee",
    attorney: "Sarah Mitchell",
    status: "monitoring",
    exposure: "$3.4M",
    caseUpdate: {
      date: "Feb 3, 2026",
      author: "Sarah Mitchell",
      summary:
        "Premises liability — plaintiff alleges inadequate security. Expert on security standards retained. Reviewing 2 years of incident reports. Chronicle timeline reveals pattern plaintiff may exploit.",
    },
    chronicle: {
      events: [
        { date: "Feb 3", event: "Security expert Dr. Hammond retained", significance: "Will evaluate industry standard compliance" },
        { date: "Jan 27", event: "Chronicle AI timeline built from incident reports", significance: "Pattern of 6 incidents in 18 months identified" },
        { date: "Jan 14", event: "Plaintiff medical records subpoenaed", significance: "Claim includes PTSD diagnosis — significant damages driver" },
      ],
    },
    chambers: {
      riskScore: 6.1,
      recommendation: "Address incident pattern proactively in discovery, prepare remedial measures defense",
      keyInsight: "Bradford & Lee premises liability cases in this jurisdiction average $2.8M verdicts. The incident pattern is a liability risk that must be addressed with remedial measures evidence.",
    },
  },
];

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  active: { label: "Active", color: COLORS.accent },
  monitoring: { label: "Monitoring", color: COLORS.amber },
  resolved: { label: "Resolved", color: COLORS.emerald },
  critical: { label: "Critical", color: COLORS.rose },
};

export default function ProvingGroundPage() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [detailTab, setDetailTab] = useState<"update" | "chronicle" | "chambers">("update");

  return (
    <div>
      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 300,
              color: COLORS.textPrimary,
              margin: "0 0 8px",
              fontFamily: FONTS.serif,
            }}
          >
            10-Case Proving Ground
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0 }}>
            Live tracking of your 10 most challenging cases through CaseGlide
            activation.
          </p>
        </div>
      </FadeIn>

      {/* Summary Stats */}
      <FadeIn delay={60}>
        <div
          className="trial-grid-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {[
            { label: "Active", value: CASES.filter((c) => c.status === "active").length, color: COLORS.accent },
            { label: "Critical", value: CASES.filter((c) => c.status === "critical").length, color: COLORS.rose },
            { label: "Monitoring", value: CASES.filter((c) => c.status === "monitoring").length, color: COLORS.amber },
            { label: "Resolved", value: CASES.filter((c) => c.status === "resolved").length, color: COLORS.emerald },
            { label: "Total Exposure", value: "$47.2M", color: COLORS.textPrimary },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 14 }}>
              <div
                style={{
                  fontSize: 10,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: 20, fontWeight: 600, color: s.color }}>
                {s.value}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Case List */}
      <FadeIn delay={120}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {CASES.map((c) => {
            const isExpanded = expandedCase === c.id;
            const statusConf = STATUS_CONFIG[c.status];

            return (
              <Card
                key={c.id}
                style={{
                  border: isExpanded
                    ? `1px solid ${COLORS.accent}40`
                    : undefined,
                  transition: "border-color 0.2s",
                }}
              >
                {/* Case Row Header */}
                <div
                  onClick={() => {
                    setExpandedCase(isExpanded ? null : c.id);
                    setDetailTab("update");
                  }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 0.8fr 1.2fr 1fr 0.8fr 0.5fr",
                    gap: 8,
                    padding: "14px 18px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  className="trial-case-row"
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: COLORS.textPrimary,
                        marginBottom: 2,
                      }}
                    >
                      {c.name}
                    </div>
                    <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                      {c.plaintiffFirm}
                    </div>
                  </div>
                  <div>
                    <Badge color={statusConf.color}>{statusConf.label}</Badge>
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.textSecondary }}>
                    {c.stage}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.textSecondary }}>
                    {c.attorney}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color:
                        c.status === "critical"
                          ? COLORS.rose
                          : COLORS.textPrimary,
                    }}
                  >
                    {c.exposure}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: COLORS.textMuted,
                      textAlign: "center",
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {"\u25BC"}
                  </div>
                </div>

                {/* Expanded Detail */}
                {isExpanded && (
                  <div
                    style={{
                      borderTop: `1px solid ${COLORS.border}`,
                      padding: "16px 18px",
                    }}
                  >
                    {/* Detail Tabs */}
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        marginBottom: 16,
                      }}
                    >
                      {(
                        [
                          { id: "update" as const, label: "Case Update", icon: "\uD83D\uDCDD" },
                          { id: "chronicle" as const, label: "Chronicle Timeline", icon: "\uD83D\uDCC5" },
                          { id: "chambers" as const, label: "Chambers AI", icon: "\uD83E\uDDE0" },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailTab(tab.id);
                          }}
                          style={{
                            padding: "7px 14px",
                            background:
                              detailTab === tab.id
                                ? COLORS.accentSoft
                                : "transparent",
                            border: `1px solid ${detailTab === tab.id ? `${COLORS.accent}30` : "transparent"}`,
                            borderRadius: 6,
                            color:
                              detailTab === tab.id
                                ? COLORS.textPrimary
                                : COLORS.textSecondary,
                            fontSize: 12,
                            fontWeight: detailTab === tab.id ? 500 : 400,
                            cursor: "pointer",
                            fontFamily: FONTS.sans,
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span style={{ fontSize: 12 }}>{tab.icon}</span>
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Case Update Tab */}
                    {detailTab === "update" && (
                      <div
                        style={{
                          padding: 16,
                          background: COLORS.midnight,
                          borderRadius: 10,
                          border: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 10,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: COLORS.textPrimary,
                            }}
                          >
                            {c.caseUpdate.author}
                          </span>
                          <span
                            style={{ fontSize: 11, color: COLORS.textMuted }}
                          >
                            {c.caseUpdate.date}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: 13,
                            color: COLORS.textSecondary,
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {c.caseUpdate.summary}
                        </p>
                      </div>
                    )}

                    {/* Chronicle Tab */}
                    {detailTab === "chronicle" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {c.chronicle.events.map((evt, ei) => (
                          <div
                            key={ei}
                            style={{
                              display: "flex",
                              gap: 14,
                              padding: "12px 14px",
                              background: COLORS.midnight,
                              borderRadius: 8,
                              border: `1px solid ${COLORS.border}`,
                            }}
                          >
                            <div
                              style={{
                                minWidth: 50,
                                fontSize: 11,
                                color: COLORS.accent,
                                fontWeight: 600,
                                paddingTop: 2,
                              }}
                            >
                              {evt.date}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: 13,
                                  color: COLORS.textPrimary,
                                  marginBottom: 4,
                                }}
                              >
                                {evt.event}
                              </div>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: COLORS.textMuted,
                                  fontStyle: "italic",
                                }}
                              >
                                {evt.significance}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Chambers AI Tab */}
                    {detailTab === "chambers" && (
                      <div
                        style={{
                          padding: 16,
                          background: `linear-gradient(135deg, ${COLORS.accentSoft}, ${COLORS.midnight})`,
                          borderRadius: 10,
                          border: `1px solid ${COLORS.accent}20`,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 14,
                          }}
                        >
                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 10,
                              background: COLORS.surface,
                              border: `1px solid ${COLORS.border}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color:
                                  c.chambers.riskScore >= 7
                                    ? COLORS.rose
                                    : c.chambers.riskScore >= 5
                                      ? COLORS.amber
                                      : COLORS.emerald,
                              }}
                            >
                              {c.chambers.riskScore}
                            </div>
                            <div
                              style={{
                                fontSize: 7,
                                color: COLORS.textMuted,
                                textTransform: "uppercase",
                                letterSpacing: "0.04em",
                              }}
                            >
                              Risk
                            </div>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: 10,
                                color: COLORS.textMuted,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                marginBottom: 4,
                              }}
                            >
                              Recommendation
                            </div>
                            <div
                              style={{
                                fontSize: 13,
                                color: COLORS.textPrimary,
                                fontWeight: 500,
                              }}
                            >
                              {c.chambers.recommendation}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: 12,
                            background: COLORS.surface,
                            borderRadius: 8,
                            border: `1px solid ${COLORS.border}`,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 10,
                              color: COLORS.accent,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              marginBottom: 6,
                              fontWeight: 600,
                            }}
                          >
                            Key Insight
                          </div>
                          <p
                            style={{
                              fontSize: 13,
                              color: COLORS.textSecondary,
                              lineHeight: 1.7,
                              margin: 0,
                            }}
                          >
                            {c.chambers.keyInsight}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </FadeIn>

      {/* Responsive styles for case rows */}
      <style>{`
        @media (max-width: 699px) {
          .trial-case-row {
            grid-template-columns: 1fr 0.6fr 0.3fr !important;
            font-size: 12px !important;
          }
          .trial-case-row > div:nth-child(3),
          .trial-case-row > div:nth-child(4) {
            display: none !important;
          }
          .trial-grid-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
