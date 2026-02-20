"use client";

import React, { useState } from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { PROSPECTS, MEETING_PREP_SECTIONS } from "@/data/prospects";

// Only show prospects with meeting owners (active conversations)
const MEETING_PROSPECTS = PROSPECTS.filter(p =>
  p.stage === "trial" || p.stage === "council" || p.stage === "contract" || p.meetingOwner
);

interface PrepData {
  [sectionTitle: string]: string;
}

// Pre-built meeting prep data for active prospects
const PREP_CONTENT: Record<string, PrepData> = {
  "p-003": {
    "Company Profile": "Johnson & Johnson (NYSE: JNJ). $85B revenue. One of the largest pharmaceutical and consumer health companies globally. Currently managing significant MDL exposure across opioid and talc dockets. Legal department ~180 attorneys. Recently spun off consumer health as Kenvue.",
    "Litigation Portfolio Analysis": "Estimated 5,000+ open matters. Heavy MDL concentration (opioid, talc, PFAS). ~45 jurisdictions. Primary outside counsel: Williams & Connolly, Dechert, Skadden. Annual legal spend estimated $2.1B including settlements.",
    "Executive Background": "Angela Torres, VP Litigation. 18 years at J&J, promoted from Senior Litigation Counsel in 2022. Presented at ACC Annual Meeting on MDL management strategy. Active on LinkedIn — shares content about litigation tech and legal ops.",
    "Pain Point Mapping": "1) MDL coordination across thousands of related cases. 2) Attorney performance tracking across massive outside counsel panel. 3) Settlement strategy optimization with nuclear verdict exposure. 4) Board-level reporting on litigation reserves.",
    "CaseGlide Fit Assessment": "High fit. Docket for real-time MDL tracking. Precedent for settlement benchmarking across 5,000+ matters. Chambers AI for strategy recommendations on bellwether cases. Estimated ROI: $12-18M annually from improved settlement timing and outside counsel management.",
    "Addendum": "CONFIDENTIAL — Pre-Meeting Addendum\n\nJ&J Trial Week 2: 6 of 10 cases activated. Focus this session on talc docket cases — Angela's team is most engaged there. Key win: show how Precedent data from closed opioid cases can inform talc settlement strategy.\n\nKey talking point: Their Q4 reserve adjustment of -$800M suggests they're getting more accurate. Show how CaseGlide accelerates that accuracy from quarterly to real-time.",
    "Talking Points": "1. 'Your Q4 reserve accuracy improvement was impressive — how is your team getting to those numbers today?'\n2. 'With the talc cases moving to mediation, how are you benchmarking settlement ranges across jurisdictions?'\n3. 'If you could see attorney performance scores across your entire panel in real-time, which metrics would matter most?'",
    "Rehearsal Questions": "Q: 'We already have a litigation management system. Why would we need CaseGlide?'\nA: 'CaseGlide isn't replacing your LMS — it's the intelligence layer on top. Your LMS stores data. CaseGlide tells you what the data means: which attorneys outperform, which cases need attention, what your settlement range should be.'\n\nQ: 'How do you handle data security for MDL-sensitive information?'\nA: 'SOC 2 Type II certified. All data encrypted at rest and in transit. Client-specific data isolation. We can walk through our security architecture with your IT team.'",
  },
  "p-004": {
    "Company Profile": "Liberty Mutual Insurance Group. $49B revenue. Third-largest P&C insurer in the US. Headquarters: Boston, MA. Global operations in 29 countries. Claims operations handle 500K+ claims annually.",
    "Litigation Portfolio Analysis": "Estimated 8,000+ open litigated claims. Coverage litigation, bad faith defense, subrogation. Heavy auto liability and premises exposure. Outside counsel panel: 200+ firms across US. Annual litigation spend estimated $1.4B.",
    "Executive Background": "James Wright, CRO. 22 years in insurance industry, joined Liberty Mutual in 2019 from Travelers. Former VP Claims at Travelers. Known for data-driven claims management. Referred by Mike Torres at Zurich.",
    "Pain Point Mapping": "1) Massive volume — 8K+ matters with limited portfolio visibility. 2) Outside counsel cost variance across panel firms. 3) Settlement authority decisions based on incomplete comparable data. 4) Claims-to-litigation handoff data gaps.",
    "CaseGlide Fit Assessment": "Very high fit for insurance use case. Docket for claims portfolio visibility. Attorney Scorecard for panel management across 200+ firms. Precedent for settlement benchmarking. Insurance company mode (Win95) for familiar interface. Estimated ROI: $8-14M annually from panel optimization and settlement timing.",
    "Addendum": "CONFIDENTIAL — Pre-Meeting Addendum\n\nLiberty Mutual Trial: 8/10 cases activated. James highly engaged — CRO-level buy-in is rare at this stage. Portfolio impact review on Feb 25 is the conversion moment.\n\nKey angle: Referral from Mike Torres at Zurich gives us credibility. James knows Mike's team saw 23% improvement in reserve accuracy.\n\nDemonstrate Insurance Company Mode — Liberty Mutual's claims team will respond to the Win95 interface pattern.",
    "Talking Points": "1. 'Mike Torres mentioned your claims team has been focused on reducing outside counsel cost variance — what's driving that priority?'\n2. 'With 200+ panel firms, how do you currently identify which firms consistently deliver better outcomes per dollar?'\n3. 'If you could see your entire litigated claims portfolio in one view with real-time risk scoring, what decisions would that change?'",
    "Rehearsal Questions": "Q: 'We handle 8,000+ matters. Can your system scale to that volume?'\nA: 'Absolutely. CaseGlide was built for enterprise litigation portfolios. Our architecture handles real-time updates across tens of thousands of matters. The 10-case trial is about proving the intelligence value — deployment scales to your full book.'\n\nQ: 'How does this integrate with our claims management system?'\nA: 'We integrate via API or bulk data import. Most insurance clients start with a hybrid approach — CSV export from your CMS plus Case Clerk AI for attorney work product. During Council, we design the integration together.'",
  },
};

export default function MeetingPrep() {
  const [selectedProspect, setSelectedProspect] = useState<string>(MEETING_PROSPECTS[0]?.id || "");
  const [activeSection, setActiveSection] = useState<string>(MEETING_PREP_SECTIONS[0]?.title || "");
  const [generating, setGenerating] = useState(false);

  const prospect = PROSPECTS.find(p => p.id === selectedProspect);
  const prepData = PREP_CONTENT[selectedProspect];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.accent} glow={COLORS.accentGlow}>Meeting Intelligence</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Meeting Prep
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Research, addendums, talking points, and rehearsal support for Wes + Liana.
          </p>
        </div>
      </FadeIn>

      {/* Prospect selector */}
      <FadeIn delay={50}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {MEETING_PROSPECTS.map(p => (
            <button
              key={p.id}
              onClick={() => { setSelectedProspect(p.id); setActiveSection(MEETING_PREP_SECTIONS[0].title); }}
              style={{
                padding: "8px 16px",
                borderRadius: RADIUS.button,
                border: `1px solid ${selectedProspect === p.id ? COLORS.accent : COLORS.border}`,
                background: selectedProspect === p.id ? COLORS.accentGlow : COLORS.surface,
                color: selectedProspect === p.id ? COLORS.textPrimary : COLORS.textSecondary,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              {p.name}
              <span style={{ fontSize: 10, color: COLORS.textMuted, marginLeft: 6 }}>{p.company}</span>
            </button>
          ))}
        </div>
      </FadeIn>

      {prospect && (
        <FadeIn delay={100}>
          {/* Prospect summary */}
          <Card style={{ padding: "16px 20px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.textPrimary }}>{prospect.name}</div>
                <div style={{ fontSize: 13, color: COLORS.textSecondary }}>{prospect.title} at {prospect.company}</div>
                <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 4 }}>{prospect.notes}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Badge color={COLORS.accent}>{prospect.stage}</Badge>
                {prospect.meetingOwner && (
                  <Badge
                    color={prospect.meetingOwner === "Wes" ? COLORS.accent : COLORS.gold}
                    glow={prospect.meetingOwner === "Wes" ? COLORS.accentGlow : COLORS.goldGlow}
                  >
                    {prospect.meetingOwner}
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          {/* Section tabs */}
          <div style={{
            display: "flex",
            gap: 4,
            marginBottom: 16,
            overflowX: "auto",
            paddingBottom: 4,
          }}>
            {MEETING_PREP_SECTIONS.map(section => (
              <button
                key={section.title}
                onClick={() => setActiveSection(section.title)}
                style={{
                  padding: "6px 14px",
                  borderRadius: RADIUS.badge,
                  border: `1px solid ${activeSection === section.title ? COLORS.gold : COLORS.border}`,
                  background: activeSection === section.title ? COLORS.goldGlow : "transparent",
                  color: activeSection === section.title ? COLORS.gold : COLORS.textSecondary,
                  fontSize: 11,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Content area */}
          <Card style={{ padding: 0 }}>
            <div style={{
              padding: "14px 20px",
              borderBottom: `1px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: COLORS.textPrimary }}>{activeSection}</div>
                <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                  {MEETING_PREP_SECTIONS.find(s => s.title === activeSection)?.description}
                </div>
              </div>
              {!prepData && (
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  style={{
                    padding: "6px 16px",
                    background: generating ? COLORS.surface : `linear-gradient(135deg, ${COLORS.accent}, #1D4ED8)`,
                    border: "none",
                    borderRadius: RADIUS.button,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: generating ? "wait" : "pointer",
                    fontFamily: FONTS.sans,
                    opacity: generating ? 0.6 : 1,
                  }}
                >
                  {generating ? "Generating..." : "Generate Prep"}
                </button>
              )}
            </div>
            <div style={{
              padding: 20,
              minHeight: 200,
            }}>
              {prepData && prepData[activeSection] ? (
                <div style={{
                  fontSize: 13,
                  color: COLORS.textSecondary,
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                }}>
                  {prepData[activeSection]}
                </div>
              ) : (
                <div style={{
                  padding: "40px 20px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 14, color: COLORS.textMuted }}>
                    {generating
                      ? "Researching prospect and generating meeting prep..."
                      : "Click \"Generate Prep\" to create meeting intelligence for this prospect."
                    }
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 8 }}>
                    Sources: Sales Navigator, LinkedIn, Pipedrive, public filings, news
                  </div>
                </div>
              )}
            </div>
          </Card>
        </FadeIn>
      )}
    </div>
  );
}
