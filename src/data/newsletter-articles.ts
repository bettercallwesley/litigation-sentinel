export interface NewsletterArticle {
  section?: string;
  tag: string;
  title: string;
  subtitle: string;
  readTime: string;
  linksTo?: string;
}

export const ISSUE = {
  number: 12,
  date: "February 12, 2026",
  headline: "The Litigation Intelligence Era Is Here",
};

export const FEATURED_ARTICLE: NewsletterArticle = {
  tag: "Deep Dive",
  title: "Inside the 90-Day Activation: How One Legal Team Transformed Their Litigation Operations",
  subtitle: "A step-by-step look at how a Fortune 500 company went from quarterly attorney reports to real-time case intelligence — and what their first Trial proved about reducing spend by 15%.",
  readTime: "8 min read",
  linksTo: "council",
};

export const ARTICLES: NewsletterArticle[] = [
  {
    section: "Litigation Strategy", tag: "Case Watch",
    title: "What the $42M Opioid MDL Bellwether Tells Us About Litigation Budgeting",
    subtitle: "The gap between initial reserves and actual outcomes widened to 340%. Here's what data-driven departments are doing differently.",
    readTime: "5 min",
  },
  {
    section: "Litigation Tech", tag: "Tools",
    title: "Top 10 Prompts for Getting Actionable Case Summaries from AI",
    subtitle: "The difference between a useless AI summary and one that changes your strategy comes down to how you ask. These prompts work across platforms.",
    readTime: "4 min",
  },
  {
    section: "Litigation Strategy", tag: "Analysis",
    title: "Nuclear Verdicts Are Up 28% — But the Real Risk Is in the Data You Don't Have",
    subtitle: "Verdict data alone doesn't predict exposure. The teams winning are combining Precedent analysis with real-time docket monitoring to identify risk before it escalates.",
    readTime: "6 min",
  },
  {
    section: "Litigation Tech", tag: "How-To",
    title: "How to Build a Litigation Intelligence Stack Without Replacing Your Claims System",
    subtitle: "The best implementations layer intelligence on top of existing systems. Here's the architecture that works — and the one mistake that derails it.",
    readTime: "7 min",
    linksTo: "council",
  },
  {
    section: "Litigation Strategy", tag: "Benchmark",
    title: "Outside Counsel Performance: What the Top 10% of Legal Departments Measure",
    subtitle: "Most companies track spend. The best track outcome quality, cycle time, and strategic compliance. Here's the scorecard they use.",
    readTime: "5 min",
  },
  {
    section: "Litigation Tech", tag: "How-To",
    title: "Top 5 Tools for Litigation Operations Teams in 2026",
    subtitle: "From case intake automation to AI-powered settlement analysis — the tools that are actually moving the needle for operations teams managing 100+ matters.",
    readTime: "4 min",
  },
];

export const TRIAL_ARTICLE: NewsletterArticle = {
  section: "Case Study", tag: "Results",
  title: "10 Cases, 30 Days: How a Litigation Trial Changed One CLO's Approach to Settlement Strategy",
  subtitle: "The before and after was stark — from 'waiting for the quarterly report' to 'we knew the optimal settlement range before mediation started.' Here's what happened.",
  readTime: "6 min",
  linksTo: "trial",
};

export const NAV_CATEGORIES = [
  "Litigation Strategy",
  "Litigation Tech",
  "Case Watch",
  "How-To Guides",
];
