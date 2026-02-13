export interface FeatureDetail {
  icon: string;
  pillar: string;
  weight: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  "Docket Dashboard": {
    icon: "📊",
    pillar: "docket",
    weight: "40%",
    tagline: "See every open case that needs your attention — before it's too late",
    description:
      "The Docket Dashboard gives you a real-time command center for your entire active litigation portfolio. Not just status — intervention intelligence. Which cases are over budget? Aging past 365 days? Stalled after mediation? Approaching trial without adequate reserves? Which plaintiff firms are driving outsized exposure? Every question you'd ask is answered before you ask it.",
    capabilities: [
      "Cases by stage: initial assessment, discovery, depositions, mediation, trial",
      "Budget exceptions: over $25K, over $50K, over budget",
      "Aging alerts: 365+ days, 18+ months, progress vs. expected timeline",
      "Settlement readiness: negotiation gaps, post-mediation stalls",
      "Key events: upcoming mediations, trials, depositions",
      "Plaintiff firm patterns: which firms drive cost and exposure",
    ],
  },
  "Precedent Dashboard": {
    icon: "⚖️",
    pillar: "precedent",
    weight: "35%",
    tagline: "Know whether you got value — and hire the right attorney next time",
    description:
      "The Precedent Dashboard turns your closed case history into a strategic weapon. Legal spend alone doesn't tell you if an outcome was good. You need the full picture: liability assessment, damages, venue, judge, strategy, negotiations, parties, and the attorneys involved. Precedent gives you that — so you can calibrate outcome quality, benchmark attorney performance, and make data-driven counsel selection decisions.",
    capabilities: [
      "Outcome quality calibration: spend vs. liability, damages, venue, strategy",
      "Attorney performance scoring across case characteristics",
      "Counsel selection intelligence: right attorney for the right case",
      "Negotiation pattern analysis: what strategies produced the best results",
      "Venue and judge analytics: how location impacts outcomes",
      "Legal spend ROI: true value measurement, not just cost tracking",
    ],
  },
  Chambers: {
    icon: "💬",
    pillar: "ai",
    weight: "~12%",
    tagline: "Ask your portfolio anything. Get answers instantly.",
    description:
      "Chambers is your AI-powered litigation analyst. When a board member asks about total exposure, or you need to know which cases in California are over budget with trial in 90 days — Chambers gives you an accurate, sourced answer in seconds. No waiting for someone to pull a report.",
    capabilities: [
      "Natural language portfolio queries",
      "Instant exposure and reserve summaries",
      "Cross-portfolio pattern identification",
      "Board-ready answers on demand",
    ],
  },
  Chronicle: {
    icon: "📖",
    pillar: "ai",
    weight: "~8%",
    tagline: "Complete case timelines and narratives, generated from your data",
    description:
      "Chronicle produces comprehensive, accurate case timelines and narrative summaries from all structured case data — filings, milestones, communications, outcomes. Ready for board presentations, regulatory reports, or strategy sessions. No manual assembly required.",
    capabilities: [
      "AI-generated case timelines from structured data",
      "Board report narrative automation",
      "Milestone progression visualization",
      "Multi-case summary generation",
    ],
  },
  "Case Updates": {
    icon: "🔄",
    pillar: "foundation",
    weight: "foundation",
    tagline: "The data engine — how all of this intelligence gets built",
    description:
      "Everything in the Docket and Precedent dashboards depends on having structured, complete case data. Case Updates is how it gets there. Intelligent, milestone-aware requests go to outside counsel at exactly the right moment — initial case analysis, discovery, depositions, mediation, trial. Attorneys respond in a dynamic form or drag in a document and CaseGlide extracts the information automatically. This is the context layer that makes everything else possible.",
    capabilities: [
      "Milestone-triggered requests: right data at the right time",
      "Dynamic forms that adapt to case stage and type",
      "Document drag-and-drop with AI extraction",
      "Automated data capture from any format",
    ],
  },
};
