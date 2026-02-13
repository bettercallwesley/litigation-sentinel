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

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "open_visibility",
    painPoint: "Open Case Visibility",
    feature: "Docket Dashboard",
    pillar: "docket",
    question: "Right now, can you see which open cases need your attention — over budget, aging past 12 or 18 months, stalled negotiations, or approaching a key event like mediation or trial?",
    options: [
      { score: 1, label: "No — we rely on outside counsel to flag issues, or we discover them reactively" },
      { score: 2, label: "Partially — we track some metrics in spreadsheets, but it's manual and incomplete" },
      { score: 3, label: "We have dashboards, but they require manual updates and don't surface exceptions automatically" },
      { score: 4, label: "We have real-time dashboards with alerts for budget, aging, and key milestones" },
      { score: 5, label: "We have intelligent dashboards that proactively flag intervention opportunities based on case patterns" },
    ],
  },
  {
    id: "open_intervention",
    painPoint: "Intervention & Settlement Readiness",
    feature: "Docket Dashboard",
    pillar: "docket",
    question: "Can you identify which cases are ready to settle, which have stalled post-mediation, or where a particular plaintiff firm is creating outsized exposure?",
    options: [
      { score: 1, label: "No — we don't have that data consolidated in a way that surfaces those patterns" },
      { score: 2, label: "We can answer some of these, but it takes days of manual review to compile" },
      { score: 3, label: "We have reporting that covers some of this, but it's not real-time or comprehensive" },
      { score: 4, label: "We can see settlement readiness, negotiation gaps, and firm-level patterns in a single view" },
      { score: 5, label: "Our system proactively recommends intervention points and flags negotiation anomalies" },
    ],
  },
  {
    id: "closed_outcomes",
    painPoint: "Outcome Measurement",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question: "For your resolved cases, can you determine whether an outcome was good — not just what was spent, but whether you got value relative to liability, damages, venue, and strategy used?",
    options: [
      { score: 1, label: "We track legal spend, but we can't connect it to outcome quality or case characteristics" },
      { score: 2, label: "We have basic outcome data, but it's not structured enough to draw conclusions" },
      { score: 3, label: "We measure outcomes and spend, but can't calibrate value by venue, judge, or strategy" },
      { score: 4, label: "We have structured outcome data with liability, damages, negotiations, and venue — and can benchmark" },
      { score: 5, label: "We can fully calibrate outcome value against all case variables and use it to predict future performance" },
    ],
  },
  {
    id: "attorney_value",
    painPoint: "Attorney Performance & Selection",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question: "Can you measure the value your defense attorneys deliver — not just their rates, but their outcomes relative to case difficulty, and use that to assign the right attorney to the right case?",
    options: [
      { score: 1, label: "We know what they bill, but we can't objectively measure outcome quality by attorney" },
      { score: 2, label: "We have some outcome data, but it's not structured to compare attorneys fairly" },
      { score: 3, label: "We benchmark attorneys on spend and cycle time, but lack outcome-calibrated performance data" },
      { score: 4, label: "We measure attorney performance across spend, outcomes, and case characteristics — and use it for assignments" },
      { score: 5, label: "AI-driven performance scoring that accounts for case complexity, venue, and liability — fully integrated into counsel selection" },
    ],
  },
  {
    id: "ai_insight",
    painPoint: "On-Demand Intelligence",
    feature: "Chambers & Chronicle",
    pillar: "ai",
    question: "When you need an instant answer about your portfolio — or a case timeline for a board meeting — how quickly can you get it?",
    options: [
      { score: 1, label: "Someone has to compile it manually — hours or days" },
      { score: 2, label: "We have reports, but they require manual updates and can't handle ad hoc questions" },
      { score: 3, label: "We have dashboards, but narrative summaries and timelines are still manual" },
      { score: 4, label: "We can query the portfolio flexibly and auto-generate case timelines with human review" },
      { score: 5, label: "AI generates instant answers to any portfolio question and produces board-ready narratives on demand" },
    ],
  },
  {
    id: "data_capture",
    painPoint: "Data Foundation",
    feature: "Case Updates & CG Intelligence",
    pillar: "ai",
    question: "How does the structured case data that powers all of this — liability assessments, strategy, milestone details — actually get into your system?",
    options: [
      { score: 1, label: "It doesn't — most of that information lives in emails and attorney notes, unstructured" },
      { score: 2, label: "We ask for it manually, but compliance is inconsistent and the data is incomplete" },
      { score: 3, label: "We have structured intake forms, but they're static and disconnected from case stage" },
      { score: 4, label: "Dynamic, milestone-aware requests capture the right data at the right time" },
      { score: 5, label: "Intelligent requests adapt to case context, and AI extracts data from any document or communication automatically" },
    ],
  },
];
