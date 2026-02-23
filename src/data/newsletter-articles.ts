export interface ArticleContentBlock {
  type: "paragraph" | "heading" | "pullquote" | "callout";
  text: string;
}

export interface NewsletterArticle {
  slug?: string;
  section?: string;
  tag: string;
  title: string;
  subtitle: string;
  readTime: string;
  linksTo?: string;
  author?: string;
  date?: string;
  content?: ArticleContentBlock[];
}

export const ISSUE = {
  number: 12,
  date: "February 12, 2026",
  headline: "The Litigation Intelligence Era Is Here",
};

export const FEATURED_ARTICLE: NewsletterArticle = {
  slug: "litigation-management-is-dead",
  tag: "Deep Dive",
  title: "Litigation Management Is Dead. Here's What Replaces It.",
  subtitle:
    "For twenty years, 'litigation management' meant tracking spend and hoping your outside counsel told you the truth. That era is over. The companies pulling ahead are running on something fundamentally different — and it starts with a formula most legal departments have never seen.",
  readTime: "8 min read",
  author: "Wes Todd",
  date: "February 12, 2026",
  linksTo: "briefing",
};

export const ARTICLES: NewsletterArticle[] = [
  {
    slug: "judicial-hellholes-keep-getting-worse",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "Judicial Hellholes Keep Getting Worse — But the Real Problem Isn't the Venue",
    subtitle:
      "Everyone knows about St. Clair County and South Florida. But the defense teams actually winning in these jurisdictions aren't avoiding them — they're outpreparing the plaintiff bar with data most legal departments don't even collect.",
    readTime: "6 min",
    author: "Wes Todd",
    date: "February 10, 2026",
  },
  {
    slug: "quarterly-attorney-report-lying",
    section: "Litigation Tech",
    tag: "Analysis",
    title: "Your Quarterly Attorney Report Is Lying to You",
    subtitle:
      "Not on purpose. But when you're getting a narrative summary 90 days after the fact, you're making decisions on stale information. Here's what real-time case intelligence actually looks like — and why the difference matters more than most CLOs realize.",
    readTime: "5 min",
    author: "Wes Todd",
    date: "February 7, 2026",
    linksTo: "briefing",
  },
  {
    slug: "nuclear-verdicts-up-28-percent",
    section: "Litigation Strategy",
    tag: "Analysis",
    title: "Nuclear Verdicts Are Up 28%. Your Reserve Model Probably Can't Handle It.",
    subtitle:
      "The gap between initial reserves and actual outcomes widened to 340% last year. Verdict data alone doesn't predict exposure — you need performance data, venue data, and attorney outcome data working together. Most companies have one of the three.",
    readTime: "6 min",
    author: "Wes Todd",
    date: "February 5, 2026",
  },
  {
    slug: "build-litigation-intelligence-stack",
    section: "Litigation Tech",
    tag: "How-To",
    title: "How to Build a Litigation Intelligence Stack Without Replacing Your Claims System",
    subtitle:
      "The best implementations layer intelligence on top of what you already have. Here's the architecture that actually works — and the one mistake that derails the whole thing.",
    readTime: "7 min",
    author: "Wes Todd",
    date: "February 3, 2026",
    linksTo: "council",
  },
  {
    slug: "outside-counsel-performance-top-10-percent",
    section: "Litigation Strategy",
    tag: "Benchmark",
    title: "Outside Counsel Performance: What the Top 10% of Legal Departments Actually Measure",
    subtitle:
      "Most companies track spend. A few track cycle time. The ones winning track outcome quality calibrated by case difficulty, venue, and opposing counsel. Here's their scorecard.",
    readTime: "5 min",
    author: "Wes Todd",
    date: "January 31, 2026",
  },
  {
    slug: "morgan-and-morgan-eating-your-lunch",
    section: "Litigation Strategy",
    tag: "Opinion",
    title: "Morgan & Morgan Is Eating Your Lunch — And Your Data Is the Reason",
    subtitle:
      "The plaintiff bar has gotten scary good at pattern recognition. They know which venues favor them, which adjusters settle fast, and which defense firms fold under pressure. The question is whether you know the same things about your own portfolio.",
    readTime: "5 min",
    author: "Wes Todd",
    date: "January 29, 2026",
  },
];

export const TRIAL_ARTICLE: NewsletterArticle = {
  slug: "10-cases-30-days",
  section: "Case Study",
  tag: "Results",
  title:
    "10 Cases, 30 Days: How One CLO Went From 'We Think We're Doing Fine' to 'We Had No Idea'",
  subtitle:
    "They picked their ten hardest cases. Ran real data through real dashboards. Within two weeks, they found three cases that should have settled months ago and two attorneys who were consistently underperforming. The math was hard to argue with.",
  readTime: "6 min",
  linksTo: "trial",
};

export const ALL_ARTICLES: NewsletterArticle[] = [
  FEATURED_ARTICLE,
  ...ARTICLES,
  TRIAL_ARTICLE,
];

export function getArticleBySlug(slug: string): NewsletterArticle | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ALL_ARTICLES.filter((a) => a.slug).map((a) => a.slug!);
}

export const NAV_CATEGORIES = [
  "Litigation Strategy",
  "Litigation Tech",
  "Case Watch",
  "How-To Guides",
];
