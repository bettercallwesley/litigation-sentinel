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
  title: "Litigation Management Is Dead. Here's What Replaces It.",
  subtitle:
    "For twenty years, 'litigation management' meant tracking spend and hoping your outside counsel told you the truth. That era is over. The companies pulling ahead are running on something fundamentally different — and it starts with a formula most legal departments have never seen.",
  readTime: "8 min read",
  linksTo: "briefing",
};

export const ARTICLES: NewsletterArticle[] = [
  {
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "Judicial Hellholes Keep Getting Worse — But the Real Problem Isn't the Venue",
    subtitle:
      "Everyone knows about St. Clair County and South Florida. But the defense teams actually winning in these jurisdictions aren't avoiding them — they're outpreparing the plaintiff bar with data most legal departments don't even collect.",
    readTime: "6 min",
  },
  {
    section: "Litigation Tech",
    tag: "Analysis",
    title: "Your Quarterly Attorney Report Is Lying to You",
    subtitle:
      "Not on purpose. But when you're getting a narrative summary 90 days after the fact, you're making decisions on stale information. Here's what real-time case intelligence actually looks like — and why the difference matters more than most CLOs realize.",
    readTime: "5 min",
    linksTo: "briefing",
  },
  {
    section: "Litigation Strategy",
    tag: "Analysis",
    title: "Nuclear Verdicts Are Up 28%. Your Reserve Model Probably Can't Handle It.",
    subtitle:
      "The gap between initial reserves and actual outcomes widened to 340% last year. Verdict data alone doesn't predict exposure — you need performance data, venue data, and attorney outcome data working together. Most companies have one of the three.",
    readTime: "6 min",
  },
  {
    section: "Litigation Tech",
    tag: "How-To",
    title: "How to Build a Litigation Intelligence Stack Without Replacing Your Claims System",
    subtitle:
      "The best implementations layer intelligence on top of what you already have. Here's the architecture that actually works — and the one mistake that derails the whole thing.",
    readTime: "7 min",
    linksTo: "council",
  },
  {
    section: "Litigation Strategy",
    tag: "Benchmark",
    title: "Outside Counsel Performance: What the Top 10% of Legal Departments Actually Measure",
    subtitle:
      "Most companies track spend. A few track cycle time. The ones winning track outcome quality calibrated by case difficulty, venue, and opposing counsel. Here's their scorecard.",
    readTime: "5 min",
  },
  {
    section: "Litigation Strategy",
    tag: "Opinion",
    title: "Morgan & Morgan Is Eating Your Lunch — And Your Data Is the Reason",
    subtitle:
      "The plaintiff bar has gotten scary good at pattern recognition. They know which venues favor them, which adjusters settle fast, and which defense firms fold under pressure. The question is whether you know the same things about your own portfolio.",
    readTime: "5 min",
  },
];

export const TRIAL_ARTICLE: NewsletterArticle = {
  section: "Case Study",
  tag: "Results",
  title:
    "10 Cases, 30 Days: How One CLO Went From 'We Think We're Doing Fine' to 'We Had No Idea'",
  subtitle:
    "They picked their ten hardest cases. Ran real data through real dashboards. Within two weeks, they found three cases that should have settled months ago and two attorneys who were consistently underperforming. The math was hard to argue with.",
  readTime: "6 min",
  linksTo: "trial",
};

export const NAV_CATEGORIES = [
  "Litigation Strategy",
  "Litigation Tech",
  "Case Watch",
  "How-To Guides",
];
