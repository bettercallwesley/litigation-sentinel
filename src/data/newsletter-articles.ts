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
  readers?: number;
  trending?: boolean;
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
  readers: 2847,
  trending: true,
  content: [
    // --- Section 1: The Era of Tracking Spend and Hoping for the Best Is Over ---
    { type: "heading", text: "The Era of Tracking Spend and Hoping for the Best Is Over" },
    {
      type: "paragraph",
      text: "I spend most of my time working with General Counsel who manage litigation portfolios worth hundreds of millions of dollars. Some run lean teams with forty open matters. Others oversee thousands of cases across dozens of jurisdictions, multiple practice areas, and a rotating bench of outside firms.",
    },
    {
      type: "paragraph",
      text: "They are all smart. They are all experienced. And most of them are operating with the same fundamental approach to litigation management that existed twenty years ago.",
    },
    {
      type: "paragraph",
      text: "That approach looks like this: track what you spend, collect invoices, read quarterly narratives from outside counsel, update reserves based on attorney judgment, and present a summary to leadership once a quarter. It is built on trust, tradition, and the assumption that if something important changes, someone will tell you.",
    },
    {
      type: "paragraph",
      text: "It worked for a long time. It does not work anymore.",
    },
    {
      type: "paragraph",
      text: "The companies I see pulling ahead have stopped managing litigation in the traditional sense. They have started running intelligence operations. They are not tracking spend and hoping for the best. They are measuring what is changing, identifying severity before it hardens, and making intervention decisions based on data patterns that most legal departments do not even collect.",
    },
    {
      type: "paragraph",
      text: "This is the shift from litigation management to litigation intelligence. And it starts with understanding why the old model breaks.",
    },

    // --- Section 2: What Litigation Management Actually Means in Practice ---
    { type: "heading", text: "What Litigation Management Actually Means in Practice" },
    {
      type: "paragraph",
      text: "Let me describe what litigation management looks like inside the majority of Fortune 500 legal departments. Not the aspirational version. The real one.",
    },
    {
      type: "paragraph",
      text: "Cases come in. They get assigned to outside counsel. A matter management system logs the basics \u2014 parties, jurisdiction, practice area, assigned firm. Invoices flow in monthly or quarterly. Someone reviews them for billing guideline compliance. A report gets pulled showing total spend by firm, by matter type, by business unit.",
    },
    {
      type: "paragraph",
      text: "Once a quarter, outside counsel submits a narrative update. Two paragraphs, sometimes three. It describes recent activity \u2014 depositions taken, motions filed, settlement discussions initiated. It includes a reserve recommendation. The in-house attorney reads it, adjusts the number if necessary, and passes a summary up the chain.",
    },
    {
      type: "paragraph",
      text: "Leadership sees a dashboard. Total open matters. Total spend year-to-date. Maybe a comparison to last year. The conversation in the boardroom is about budget variance, not case trajectory.",
    },
    {
      type: "pullquote",
      text: "Most GCs can tell you what they are spending. Very few can tell you what they are getting.",
    },
    {
      type: "paragraph",
      text: "That distinction matters more than it sounds like it should. Spend is an input. What you are getting \u2014 the outcomes, the resolution quality, the cost-per-outcome relative to case difficulty \u2014 that is the actual measure of whether your litigation program is working. Almost nobody tracks it.",
    },
    {
      type: "paragraph",
      text: "This system was designed for a world where the plaintiff bar was fragmented, verdicts were somewhat predictable, and the pace of change inside a case was slow enough that quarterly reporting could keep up. That world no longer exists.",
    },
    {
      type: "callout",
      text: "Nuclear verdicts increased 28% year-over-year. The gap between initial reserves and actual outcomes has widened to 340%. The plaintiff bar is consolidating, data-driven, and better funded than at any point in the last three decades. Quarterly reporting cannot keep pace with this environment.",
    },
    {
      type: "paragraph",
      text: "The old model does not break all at once. It breaks slowly, one case at a time, in ways that are invisible until the number shows up on a settlement check or a verdict form. By then, the outcome was already set.",
    },

    // --- Section 3: Drift Is the Real Threat ---
    { type: "heading", text: "Drift Is the Real Threat, and You Cannot See It in a Quarterly Report" },
    {
      type: "paragraph",
      text: "There is a pattern I keep coming back to in conversations with legal leadership. I call it drift.",
    },
    {
      type: "paragraph",
      text: "Drift is what happens when a case sits too long without a meaningful event. When a negotiation stalls and nobody escalates. When severity hardens \u2014 when the probable outcome of a case gets worse \u2014 and the change happens so gradually that it never triggers an alert, a phone call, or a strategy review.",
    },
    {
      type: "paragraph",
      text: "Drift is not dramatic. It is not a motion to compel or a surprise witness. It is the absence of action in a case that needed action three months ago.",
    },
    {
      type: "pullquote",
      text: "The most expensive litigation outcomes almost never start with a blowup. They start with drift.",
    },
    {
      type: "paragraph",
      text: "Here is what drift looks like in practice. A premises liability case gets filed. Defense counsel is assigned. Early evaluation puts probable exposure at $200,000. Counsel files an answer, takes a few depositions, and the case enters the holding pattern that most cases enter \u2014 where everyone is busy but nothing decisive is happening.",
    },
    {
      type: "paragraph",
      text: "Six months pass. The quarterly report says the case is \"in active discovery.\" The reserve stays at $200,000. But what the report does not say is that the plaintiff\u2019s medical specials have doubled since filing, that a similar case in the same venue just returned a $1.4 million verdict, and that opposing counsel \u2014 who the defense firm has faced eleven times \u2014 wins 70% of cases that reach this stage without a settlement offer on the table.",
    },
    {
      type: "paragraph",
      text: "None of that information is in the quarterly narrative. Not because anyone is hiding it. Because the reporting structure was never designed to surface it.",
    },
    {
      type: "paragraph",
      text: "By the time the case reaches mediation, the real exposure is north of $800,000. The reserve has not moved. The GC learns about the gap when defense counsel calls to discuss the mediator\u2019s proposal. The case settles for $650,000. Everyone agrees it was a \"tough case in a tough venue.\"",
    },
    {
      type: "paragraph",
      text: "It was not a tough case. It was a case that drifted.",
    },
    {
      type: "callout",
      text: "Severity formation \u2014 the period during which the probable outcome of a case shifts from the initial evaluation to the number it will actually resolve at \u2014 happens in the middle of the case lifecycle. Not at filing. Not at trial. In the months between, when most reporting systems are collecting narratives instead of measuring change.",
    },
    {
      type: "paragraph",
      text: "If you cannot see severity forming before mediation, you are managing outcomes after they have been set. That is not governance. That is reaction.",
    },
    {
      type: "paragraph",
      text: "The GCs I work with who have the least volatility in their portfolios are not the ones with fewer cases or smaller dockets. They are the ones who catch drift early. They see which cases are aging without movement, which negotiations have stalled, and where severity is hardening \u2014 and they intervene before the outcome is locked in.",
    },

    // --- Section 4: The Three Questions Every Board Eventually Asks ---
    { type: "heading", text: "The Three Questions Every Board Eventually Asks" },
    {
      type: "paragraph",
      text: "Every board I have briefed asks the same three questions about litigation. The wording changes. The intent does not.",
    },
    {
      type: "paragraph",
      text: "First: Are we exposed? Not \"how much are we spending\" \u2014 that is the easy question. They want to know whether the portfolio contains cases that could produce outcomes significantly above reserves. They want to know if there are concentration risks \u2014 too many high-severity cases in the same venue, too much exposure managed by the same firm, too many matters in a practice area where verdicts are accelerating.",
    },
    {
      type: "paragraph",
      text: "Second: Is it getting better or worse? They want a trend line, not a snapshot. Are open matters aging? Is severity increasing across the portfolio? Are new filings accelerating in a particular practice area? A single quarter of data does not answer this. You need trajectory.",
    },
    {
      type: "paragraph",
      text: "Third: Where should we intervene? This is the question that separates governance from reporting. Reporting tells you what happened. Governance tells you where to act. The board wants to know which ten cases deserve executive attention right now \u2014 not because they are the biggest, but because they are the ones where intervention will change the outcome.",
    },
    {
      type: "paragraph",
      text: "Most GCs cannot answer these three questions with data. They answer with narratives. They say \"we feel good about the portfolio\" or \"there are a few matters we are watching closely.\" These are not wrong answers. They are just not defensible ones.",
    },
    {
      type: "paragraph",
      text: "Ask your litigation team one question: which ten cases will cost the most next year? If the answer is a guess, that is your signal.",
    },
    {
      type: "paragraph",
      text: "The shift from litigation management to litigation intelligence is, at its core, the shift from answering board questions with narratives to answering them with data. Not data about spend. Data about trajectory, severity, counsel performance, and probability.",
    },

    // --- Section 5: What Replaces It: The Litigation Intelligence Formula ---
    { type: "heading", text: "What Replaces It: The Litigation Intelligence Formula" },
    {
      type: "paragraph",
      text: "If the old model is track, report, react \u2014 the new model is measure, predict, intervene. It has three components. Each one is necessary. None of them alone is sufficient.",
    },
    {
      type: "paragraph",
      text: "The first component is real-time case intelligence. This means having continuous visibility into what is changing inside each case \u2014 not once a quarter, but as it happens. Which cases have had no meaningful activity in 90 days? Where has the opposing party made a move that shifts the probable outcome? Which matters have upcoming deadlines that require strategic decisions?",
    },
    {
      type: "paragraph",
      text: "Real-time does not mean checking a dashboard every morning. It means the system surfaces what matters. The GC should not have to go looking for the case that drifted. The case that drifted should find the GC.",
    },
    {
      type: "paragraph",
      text: "The second component is counsel performance calibrated by difficulty. Most companies that track outside counsel performance track win rates or average cost per matter. Both metrics are nearly useless in isolation. A firm that handles straightforward contract disputes in Delaware will have a different cost profile than a firm handling catastrophic injury cases in South Florida. Comparing them on spend tells you nothing.",
    },
    {
      type: "paragraph",
      text: "What matters is spend-to-outcome adjusted for case difficulty, venue, and opposing counsel. A firm that consistently resolves high-difficulty cases below expected severity is outperforming. A firm that consistently spends above benchmark on low-difficulty matters is underperforming. You cannot see this without a model that accounts for the variables that actually drive outcomes.",
    },
    {
      type: "callout",
      text: "The Litigation Intelligence Formula: (1) Real-time case intelligence \u2014 continuous visibility into what is changing. (2) Counsel performance calibrated by case difficulty and venue \u2014 spend-to-outcome that actually means something. (3) Severity signals before mediation \u2014 predictability before the outcome is locked in.",
    },
    {
      type: "paragraph",
      text: "The third component is severity signals before mediation. This is where the formula pays for itself. If you can see severity forming \u2014 if you can identify the cases where exposure is increasing, where the gap between reserves and probable outcomes is widening, where the window for favorable resolution is closing \u2014 you can intervene. You can accelerate settlement conversations. You can change counsel. You can adjust strategy while the outcome is still in play.",
    },
    {
      type: "paragraph",
      text: "Without severity signals, every mediation is a surprise. The defense team walks in with a number. The plaintiff walks in with a number. The gap is larger than anyone expected because nobody was watching the signals that predicted it.",
    },
    {
      type: "paragraph",
      text: "With severity signals, mediation becomes a confirmation of what you already know. The GC walks in with a data-informed view of probable outcomes, historical comparables, and settlement authority based on analytics rather than attorney intuition. That is a fundamentally different negotiating position.",
    },
    {
      type: "paragraph",
      text: "Together, these three components create something that does not exist in the traditional litigation management model: predictability. Not certainty \u2014 litigation will always carry uncertainty. But predictability in the sense that you can see where the portfolio is heading, you can identify where it is heading toward bad outcomes, and you can act before those outcomes are locked in.",
    },

    // --- Section 6: The Governed Portfolio vs. the Ungoverned Portfolio ---
    { type: "heading", text: "The Governed Portfolio vs. the Ungoverned Portfolio" },
    {
      type: "pullquote",
      text: "The difference between a governed portfolio and an ungoverned portfolio is not budget. It is visibility.",
    },
    {
      type: "paragraph",
      text: "The ungoverned portfolio looks fine on the surface. Spend is within budget. The quarterly report shows no surprises. Leadership is comfortable. But underneath, cases are drifting. Severity is forming in three matters that should have settled six months ago. Two firms are running up hours without moving the needle. Nobody sees it because the reporting was not designed to show it.",
    },
    {
      type: "paragraph",
      text: "The governed portfolio looks different. Not because the cases are easier or the budget is bigger. Because the GC can see across the portfolio in real time. They know which cases are aging. They know where severity is hardening. They know which firms are outperforming and which are coasting. When the board asks the three questions, the answers come with data.",
    },
    {
      type: "paragraph",
      text: "The GCs who sleep well at night are not the ones with fewer cases. They are the ones who can see across the portfolio.",
    },
    {
      type: "paragraph",
      text: "That visibility is not a luxury. In an environment where nuclear verdicts are accelerating, where the plaintiff bar is consolidating and getting smarter, and where boards are asking harder questions about total cost of risk \u2014 visibility is the difference between governing your litigation program and being governed by it.",
    },

    // --- Section 7: Where to Start ---
    { type: "heading", text: "Where to Start" },
    {
      type: "paragraph",
      text: "If you have read this far, you are already thinking about where your portfolio sits on the spectrum between governed and ungoverned. That is the right question to be asking.",
    },
    {
      type: "paragraph",
      text: "We built a two-minute diagnostic \u2014 the Executive Briefing \u2014 that maps exactly that. Six questions. No sales pitch. It shows you where your portfolio has visibility and where it has blind spots, benchmarked against what the top-performing legal departments actually measure.",
    },
    {
      type: "paragraph",
      text: "It will not tell you everything. But it will tell you where to look.",
    },
  ],
};

export const ARTICLES: NewsletterArticle[] = [
  {
    slug: "judicial-hellholes-keep-getting-worse",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "Judicial Hellholes Keep Getting Worse — But the Real Problem Isn't the Venue",
    subtitle:
      "Everyone knows about St. Clair County and South Florida. But the defense teams actually winning in these jurisdictions aren't avoiding them — they're outpreparing the plaintiff bar with venue intelligence and verdict data most legal departments don't even collect. Litigation Sentinel published a free Nuclear Verdicts and Judicial Hellholes Interactive Heat Map to help you see where the risk is concentrated — and where it's accelerating.",
    readTime: "6 min",
    author: "Wes Todd",
    date: "February 10, 2026",
    linksTo: "nuclear-verdicts",
    readers: 1631,
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
    readers: 1943,
    content: [
      // Section 1 — Opening
      { type: "heading", text: "Not on Purpose. But the Damage Is the Same." },
      {
        type: "paragraph",
        text: "I have read hundreds of quarterly attorney reports. Maybe thousands at this point. They come in as PDFs or slide decks, usually around the same time each quarter, usually formatted the same way. And they all have the same problem.",
      },
      {
        type: "paragraph",
        text: "They tell you what happened. They do not tell you what is changing.",
      },
      {
        type: "paragraph",
        text: "That distinction sounds small. It is not. When you are running a portfolio of 200, 500, or 2,000 active matters, the difference between knowing where you were and knowing where you are heading is the difference between governing your litigation spend and reacting to it.",
      },
      {
        type: "paragraph",
        text: "I spend most of my time working with General Counsels and CLOs who run large, complex litigation portfolios. These are sharp, experienced operators. And almost all of them are making material decisions — reserve adjustments, settlement authority, counsel allocation — based on information that is already 60 to 90 days old by the time it reaches their desk.",
      },
      {
        type: "paragraph",
        text: "Not because they want to. Because the reporting infrastructure they rely on was never designed to do anything else.",
      },

      // Section 2 — What Quarterly Reports Actually Tell You
      { type: "heading", text: "What Quarterly Reports Actually Tell You (and What They Leave Out)" },
      {
        type: "paragraph",
        text: "Pull up the last quarterly report your outside counsel sent you. It probably contains some combination of the following: case summaries with status updates, billing summaries broken out by timekeeper, a risk rating for each matter (usually low, medium, or high), and maybe a short narrative about recent activity.",
      },
      {
        type: "paragraph",
        text: "On the surface, this looks like useful information. And it is — if all you need is a rearview mirror.",
      },
      {
        type: "paragraph",
        text: "Every data point in a quarterly report is backward-looking. The billing summary tells you what was spent, not whether that spend is tracking toward a reasonable outcome. The risk rating is a point-in-time snapshot that was probably set weeks ago and has not been recalibrated since. The case narrative tells you what your attorney chose to report, which is not the same thing as what you need to know.",
      },
      {
        type: "paragraph",
        text: "There are three specific gaps that matter most.",
      },
      {
        type: "paragraph",
        text: "First, there is no severity trajectory. You get a rating — medium, high — but you do not get a trendline. Is this case getting worse? Is it stabilizing? Has the risk profile shifted since the last report? The quarterly format cannot answer these questions because it only gives you one data point per quarter.",
      },
      {
        type: "paragraph",
        text: "Second, there is no counsel performance comparison. You know what your firm billed. You do not know how that compares to other firms handling similar matters in similar venues. You have no way to evaluate whether the spend-to-outcome ratio on a given case is reasonable or whether you are paying a premium for average results.",
      },
      {
        type: "paragraph",
        text: "Third, there are no drift indicators. A case that has gone quiet for eight weeks looks the same in a quarterly report as a case that is actively progressing. But those are two very different situations, and they require two very different responses.",
      },
      {
        type: "pullquote",
        text: "Your outside counsel is not lying to you. They are just not structured to tell you the truth.",
      },
      {
        type: "paragraph",
        text: "The quarterly report format was built for a world where legal departments tracked matters in spreadsheets and measured success by whether they stayed under budget. That world is gone. The portfolios are bigger, the stakes are higher, and the speed at which cases move has accelerated. But the reporting has not kept up.",
      },

      // Section 3 — The 90-Day Blind Spot
      { type: "heading", text: "The 90-Day Blind Spot" },
      {
        type: "paragraph",
        text: "Severity does not form on a quarterly schedule. It forms continuously — in discovery responses that reveal new exposure, in venue rulings that shift the playing field, in opposing counsel moves that signal a different strategy than what your team anticipated.",
      },
      {
        type: "pullquote",
        text: "If you cannot see severity forming before mediation, you are managing outcomes after they have been set.",
      },
      {
        type: "paragraph",
        text: "Think about what that means in practice. A premises liability case comes in. Defense counsel sends an early evaluation — exposure looks manageable, reserves set at $250,000. The case enters discovery. Activity is normal for the first few weeks.",
      },
      {
        type: "paragraph",
        text: "Then it starts drifting. Week three, activity slows. Week five, the plaintiff's medical specials increase but nobody flags it. Week eight, opposing counsel — who your firm has faced eleven times and loses to 60% of the time in this venue — files a motion that signals a pivot toward trial. The severity profile is shifting, but nothing triggers an alert because the next report is not due for another six weeks.",
      },
      {
        type: "paragraph",
        text: "By the time that report lands on your desk, mediation is already on the calendar. The real exposure is north of $700,000. The reserve has not moved. You are walking into a negotiation with stale intelligence about your own case.",
      },
      {
        type: "callout",
        text: "The gap between initial reserves and actual outcomes widened to 340% last year. Reserves set on stale data produce stale reserves — and stale reserves produce bad financial surprises.",
      },
      {
        type: "paragraph",
        text: "That 340% gap is not an abstraction. It shows up as a reserve adjustment that blindsides the CFO. It shows up as a settlement that exceeds authority because nobody saw the exposure building. It shows up as a board question that the GC cannot answer with data — only with narrative.",
      },
      {
        type: "paragraph",
        text: "And the frustrating part is that the information existed. It was there, embedded in billing patterns and docket activity and case milestones. It just was not surfaced in a way that anyone could act on it in time.",
      },

      // Section 4 — What Real-Time Case Intelligence Actually Looks Like
      { type: "heading", text: "What Real-Time Case Intelligence Actually Looks Like" },
      {
        type: "paragraph",
        text: "The alternative to quarterly reporting is not more frequent quarterly reporting. Getting the same backward-looking data every month instead of every quarter does not fix the underlying problem. The information architecture itself has to change.",
      },
      {
        type: "paragraph",
        text: "Real-time case intelligence has three characteristics that distinguish it from periodic reporting.",
      },
      {
        type: "paragraph",
        text: "The first is continuous monitoring instead of periodic snapshots. Every case in the portfolio is tracked against expected milestones, billing velocity, and activity patterns. When something deviates from the expected trajectory, it surfaces immediately — not at the end of the quarter. A case that goes quiet for three weeks when it should be in active discovery gets flagged. A billing spike that does not correlate with any filed motion gets flagged. Drift becomes visible the moment it starts, not the moment someone writes a paragraph about it.",
      },
      {
        type: "paragraph",
        text: "The second is performance data calibrated by venue, case type, and opposing counsel. Knowing that a firm billed $180,000 on a case tells you almost nothing. Knowing that $180,000 is 40% above the median for similar cases in that venue against that opposing counsel tells you everything. Calibrated performance data turns billing information into intelligence. It is the difference between tracking spend and understanding whether your spend is producing the right outcomes.",
      },
      {
        type: "paragraph",
        text: "The third is portfolio-level visibility into what is changing. Not a summary of where things stand — a real-time view of which cases are moving, which are stalled, where severity is increasing, and where outcomes are forming. The GC should be able to open a single view and know, right now, which ten matters in the portfolio need attention today.",
      },
      {
        type: "paragraph",
        text: "The goal is not reducing defense spend. The goal is knowing whether your defense spend is producing the right outcomes. Those are fundamentally different objectives, and they require fundamentally different information.",
      },
      {
        type: "paragraph",
        text: "This is not a technology argument. It is an information architecture argument. The quarterly report was designed for a world that moved slowly enough for 90-day snapshots to be sufficient. That world is gone. The plaintiff bar is faster, the data is available, and the companies that build their intelligence infrastructure around continuous visibility will have better predictability, better governance, and better defensibility when the board asks hard questions.",
      },
      {
        type: "paragraph",
        text: "The ones that do not will keep reading quarterly reports and hoping the narrative matches reality.",
      },

      // Section 5 — The CLOs Who See It First Win
      { type: "heading", text: "The CLOs Who See It First Win" },
      {
        type: "pullquote",
        text: "The GCs who sleep well at night are not the ones with fewer cases. They are the ones who can see across the portfolio.",
      },
      {
        type: "paragraph",
        text: "Visibility is not a nice-to-have. It is the operating advantage. When you can see what is changing across your portfolio in real time, you catch severity forming before it reaches mediation. You catch counsel underperformance before it becomes a pattern you are paying for. You catch drift before a quiet case turns into a loud surprise.",
      },
      {
        type: "paragraph",
        text: "And when the board asks — and they will ask — you have data. Not a narrative that your outside counsel wrote for you. Not a summary that is already two months old. Actual, current, defensible data about the state of your litigation portfolio and the economics driving it.",
      },
      {
        type: "paragraph",
        text: "The legal departments that figure this out first will not just manage litigation better. They will fundamentally change their relationship with the rest of the business — from a cost center that reports backward to a governance function that drives predictability forward.",
      },
      {
        type: "paragraph",
        text: "That shift is already happening. The only question is whether you are leading it or reading about it in next quarter's report.",
      },

      // Section 6 — Close
      { type: "heading", text: "Find Out Where Your Blind Spots Are" },
      {
        type: "paragraph",
        text: "We built a short assessment that identifies exactly where your portfolio intelligence has gaps — where you are relying on stale data, where you lack visibility into counsel performance, and where severity is forming without anyone watching. It takes about two minutes.",
      },
      {
        type: "paragraph",
        text: "If anything in this article felt familiar, it is worth taking. You can find it here: /briefing",
      },
    ],
  },
  {
    slug: "nuclear-verdicts-up-28-percent",
    section: "Litigation Strategy",
    tag: "Analysis",
    title: "Nuclear Verdicts Are Up 28%. Your Reserve Model Probably Can't Handle It.",
    subtitle:
      "The gap between initial reserves and actual outcomes widened to 340% last year. With 135 nuclear verdicts totaling $31.3B in 2024 alone, the risk landscape is shifting faster than most reserve models were built to handle. Litigation Sentinel published a free Nuclear Verdicts and Judicial Hellholes Interactive Heat Map with state-by-state verdict analytics, trend data, and Judicial Hellhole® overlays.",
    readTime: "6 min",
    author: "Wes Todd",
    date: "February 5, 2026",
    linksTo: "nuclear-verdicts",
    readers: 1187,
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
    readers: 892,
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
    readers: 743,
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
    readers: 1054,
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
  readers: 1412,
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
