export interface AssessmentOption {
  score: number;
  label: string;
}

export interface AssessmentQuestion {
  id: string;
  painPoint: string;
  feature: string;
  pillar: "docket" | "precedent" | "ai";
  question: string;
  options: AssessmentOption[];
}

// Five-question briefing (2026-06-23 rebuild). Distribution: 2 docket / 2
// precedent / 1 ai, which preserves the weakest-pillar math. Old `data_capture`
// folded into Q5. Score math is unchanged: page.tsx and route.ts both divide by
// ASSESSMENT_QUESTIONS.length. Ids are held stable so Beehiiv custom-field
// mapping and the results breakdown keep working.
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "open_visibility",
    painPoint: "Open Case Visibility",
    feature: "Docket Dashboard",
    pillar: "docket",
    question:
      "A case is sliding. Over budget, aging past 18 months, stalled after mediation. Today, how do you find out?",
    options: [
      { score: 1, label: "Outside counsel tells us, or we find out when it is already a problem" },
      { score: 2, label: "Someone pulls it together by hand from spreadsheets, when asked" },
      { score: 3, label: "We have dashboards, but they are stale and do not flag the exception" },
      { score: 4, label: "A real-time view flags budget, aging, and milestones as they break" },
      { score: 5, label: "The system surfaces the intervention before we would have thought to look" },
    ],
  },
  {
    id: "open_intervention",
    painPoint: "Intervention & Settlement Readiness",
    feature: "Docket Dashboard",
    pillar: "docket",
    question:
      "Which of your open cases is ready to settle today, and which plaintiff firm is quietly running up your exposure? Can you answer right now?",
    options: [
      { score: 1, label: "No, that data is not consolidated anywhere we can see it" },
      { score: 2, label: "Yes, after a few days of manual review" },
      { score: 3, label: "Partly, our reporting covers some of it, not in real time" },
      { score: 4, label: "Yes, settlement readiness and firm-level patterns in one view" },
      { score: 5, label: "The system flags the negotiation anomaly before we ask" },
    ],
  },
  {
    id: "closed_outcomes",
    painPoint: "Outcome Measurement",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question:
      "When a case closes, can you tell a good outcome from an expensive one, value relative to liability, venue, and the strategy you ran?",
    options: [
      { score: 1, label: "We know what we spent, we cannot say whether it was a win" },
      { score: 2, label: "We have outcome data, but not structured enough to judge" },
      { score: 3, label: "We track outcome and spend, but cannot calibrate by venue or strategy" },
      { score: 4, label: "Structured outcomes we can benchmark by liability, damages, and venue" },
      { score: 5, label: "We calibrate every variable and use it to predict the next case" },
    ],
  },
  {
    id: "attorney_value",
    painPoint: "Attorney Performance & Selection",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question:
      "Do you know which of your defense attorneys actually wins the hard cases, and do you staff the next one accordingly?",
    options: [
      { score: 1, label: "We know their rates, we cannot rank them on outcomes" },
      { score: 2, label: "Some outcome data, not structured to compare fairly" },
      { score: 3, label: "We compare on spend and cycle time, not outcome adjusted for difficulty" },
      { score: 4, label: "We measure outcome by case difficulty and staff to it" },
      { score: 5, label: "Performance scoring accounts for venue and liability, wired into selection" },
    ],
  },
  {
    id: "ai_insight",
    painPoint: "On-Demand Intelligence",
    feature: "Chambers & Chronicle",
    pillar: "ai",
    question:
      "It is the morning of the board meeting. You need the portfolio's exposure and a clean case timeline. How long until you have it, and is the underlying data even there?",
    options: [
      { score: 1, label: "Hours or days, and half of it lives in emails and attorney notes" },
      { score: 2, label: "We have reports, but they cannot answer the question we are actually asked" },
      { score: 3, label: "Dashboards exist, the narrative and timeline are still built by hand" },
      { score: 4, label: "We query the portfolio and auto-build timelines with a human check" },
      { score: 5, label: "Instant answers and board-ready narratives, on demand" },
    ],
  },
];
