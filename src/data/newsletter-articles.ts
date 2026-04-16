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
  date: "March 6, 2026",
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
    slug: "how-top-insurers-solve-litigation-with-less-tech",
    section: "Litigation Intelligence",
    tag: "Strategy",
    title: "How Top Insurers Are Using the Latest Tech Advancements to Solve Litigation with Less Tech",
    subtitle:
      "The highest-performing carriers are not launching IT projects to solve their litigation problem. They are bringing in experts who use the latest technology on their behalf — and getting answers within 10 weeks, without a single API connection.",
    readTime: "10 min read",
    author: "Wes Todd",
    date: "April 3, 2026",
    readers: 783,
    trending: false,
    content: [
      // --- Section 1: The Three Questions Boards Cannot Answer ---
      { type: "heading", text: "The Three Questions Every Insurance Board Is Asking Right Now" },
      {
        type: "paragraph",
        text: "Insurance executives are hearing the same three questions from their boards with increasing urgency. The wording varies. The intent does not.",
      },
      {
        type: "paragraph",
        text: "First: Why are commercial lines continuing to see such substantial adverse loss development? Reserves set twelve and eighteen months ago are proving inadequate. Outcomes are coming in above expectations at a rate that is no longer attributable to individual case anomalies. Something structural is happening, and the board wants to know what it is.",
      },
      {
        type: "paragraph",
        text: "Second: Why can't the litigation team get control of legal expense and adequately reserve outcomes? The claim is that data is being tracked. The reality is that reserve accuracy has not improved. Spend continues to rise faster than case counts. The explanation is always \"a tough jurisdiction\" or \"an aggressive plaintiff attorney.\" The board is no longer accepting that as an answer.",
      },
      {
        type: "paragraph",
        text: "Third: Are there proven litigation services or software that can actually help here? Not theoretical solutions. Not pilot programs with eighteen-month implementation timelines. Actual tools and services that are delivering measurable results at carriers right now.",
      },
      {
        type: "paragraph",
        text: "These questions persist not because insurers lack data. They have enormous amounts of it — claims system exports, outside counsel billing reports, PACER docket data, historical settlement records. The data exists. The problem is that it lives in silos. Emails, spreadsheets, individual case files, billing portals that don't talk to each other. There is no consolidated view. And without a consolidated view, there are no consolidated answers.",
      },
      {
        type: "pullquote",
        text: "The data is already there. It just needs to be organized. The carriers getting answers are not waiting for IT to do that work.",
      },

      // --- Section 2: The Conventional Response and Why It Fails ---
      { type: "heading", text: "The Conventional Response — and Why It Is Not Working" },
      {
        type: "paragraph",
        text: "Most carriers respond to a litigation data problem the way they respond to every data problem: they scope an IT project. New integrations with the claims system. New dashboards in the business intelligence platform. New data governance frameworks. A steering committee. A project manager. A timeline.",
      },
      {
        type: "paragraph",
        text: "The timeline is almost always measured in years.",
      },
      {
        type: "paragraph",
        text: "By the time the project delivers — if it delivers — the litigation environment has shifted. The jurisdiction that was manageable eighteen months ago is now producing nuclear verdicts. The plaintiff firm that was a moderate adversary has consolidated, upgraded its data operation, and is filing three times as many cases as it was when the project kicked off. The business questions the dashboards were built to answer have been replaced by new business questions.",
      },
      {
        type: "paragraph",
        text: "This is not a technology failure. It is a sequencing failure. The organization made an infrastructure investment before it understood what the data actually shows. And because the intelligence never arrived, the IT investment never had the foundation it needed to deliver value.",
      },
      {
        type: "callout",
        text: "The hidden cost of the IT-first approach: Implementation delays measured in years. Business questions that evolve faster than dashboards get built. Sunk costs in integrations that deliver reports instead of answers. And litigation outcomes that continue to deteriorate while the project is in progress.",
      },
      {
        type: "paragraph",
        text: "The highest-performing carriers have found a better sequence. They are getting the intelligence first — and making the infrastructure decision later, once they have seen what the data actually shows.",
      },

      // --- Section 3: What Top Insurers Are Actually Doing ---
      { type: "heading", text: "What Top Insurers Are Actually Doing Differently" },
      {
        type: "paragraph",
        text: "Leading carriers have learned to separate two things that most organizations bundle together: the intelligence and the infrastructure.",
      },
      {
        type: "paragraph",
        text: "The intelligence is the analysis — the findings, the patterns, the actionable insights. Which law firms are underperforming when adjusted for case difficulty and venue? Which plaintiff attorneys are driving the worst outcomes in which jurisdictions? Where is nuclear verdict exposure concentrating, and which active cases sit inside that exposure? What does the reserve gap look like across the portfolio, and which cases are the largest contributors to it?",
      },
      {
        type: "paragraph",
        text: "The infrastructure is the integrations — the system access, the API connections, the data pipelines, the IT project.",
      },
      {
        type: "paragraph",
        text: "Top carriers are getting the intelligence without waiting for the infrastructure. They are engaging analytics experts who use the latest technology to do the data work on their behalf — transforming whatever the carrier already has into actionable litigation intelligence, delivered within weeks, not years. The carrier provides the data in whatever format their systems already produce. The analytics team handles everything else.",
      },
      {
        type: "paragraph",
        text: "This is not a new concept in professional services. McKinsey has done rapid diagnostic engagements for decades. Big 4 firms run analytics assessments before recommending platform investments. The concept — get the analysis first, build the infrastructure once you know what you need — is standard practice in every other domain of enterprise consulting. It is new in insurance litigation.",
      },
      {
        type: "pullquote",
        text: "Get the intelligence first. Make the infrastructure decision once you know what the data actually shows.",
      },

      // --- Section 4: The Process — Step by Step ---
      { type: "heading", text: "The Process — How Leading Carriers Are Getting Answers in 10 Weeks" },
      {
        type: "paragraph",
        text: "The engagement model that top carriers are using follows a clear four-phase structure. Each phase has a defined scope and a defined deliverable. Total senior leadership time required from the carrier: approximately four to five hours.",
      },
      { type: "heading", text: "Phase 1: Data Discovery (Weeks 1–2)" },
      {
        type: "paragraph",
        text: "The engagement begins with a kick-off call and a structured Data Discovery Questionnaire. The goal is straightforward: understand what data the carrier already has, where it lives, and what format it is in.",
      },
      {
        type: "paragraph",
        text: "Most carriers have more than they think. Claims system exports. Outside counsel billing files. PACER docket data. Historical settlement records from the past three to five years. Reserve histories. The data does not need to be clean or structured. The analytics team's job is to handle that. Discovery is simply about understanding the starting inventory.",
      },
      { type: "heading", text: "Phase 2: Data Extraction and Preparation (Weeks 2–4)" },
      {
        type: "paragraph",
        text: "The carrier provides data extracts in whatever format their systems already produce — CSV exports, Excel files, PDF billing statements. No system access is required. No API connections. No IT involvement at this stage.",
      },
      {
        type: "paragraph",
        text: "Data arrives via secure file transfer. The analytics team handles all transformation, normalization, deduplication, and structuring. This is where the technology does its work — ingesting messy, multi-format data and converting it into a clean, analyzable dataset. The carrier's involvement in this phase is minimal.",
      },
      {
        type: "callout",
        text: "What the carrier does NOT need: System integrations. API access. IT steering committee involvement. Data governance frameworks. A project manager. The carrier needs a claims supervisor who can pull exports. That is the extent of the technical lift.",
      },
      { type: "heading", text: "Phase 3: Dashboard Population (Weeks 4–8)" },
      {
        type: "paragraph",
        text: "With clean data in hand, the analytics team populates two core intelligence environments using that data.",
      },
      {
        type: "paragraph",
        text: "The first is Closed Case Intelligence — an analysis of the carrier's full litigation history. Law firm performance scoring across every closed matter: cost per case, outcome rates, demand reduction effectiveness, cycle time by firm and jurisdiction. Plaintiff attorney pattern analysis identifying which opposing attorneys produce the worst outcomes in which venues. Jurisdiction risk mapping showing nuclear verdict exposure concentration by state and county.",
      },
      {
        type: "paragraph",
        text: "The second is Active Portfolio Intelligence — a real-time view of the open case portfolio. Case aging analysis showing which matters have sat too long without meaningful resolution activity. Budget versus actual tracking by matter. Trial timelines and upcoming deadlines requiring strategic decisions. A prioritized view of which cases carry the most reserve risk and which require immediate intervention.",
      },
      {
        type: "paragraph",
        text: "These are not generic dashboards built for an anonymous carrier. They are populated with the carrier's own historical data, reflecting their actual law firm relationships, their actual jurisdictions, and their actual case history. The insights are specific because the data is specific.",
      },
      { type: "heading", text: "Phase 4: Analysis and Delivery (Weeks 8–10)" },
      {
        type: "paragraph",
        text: "The analytics team delivers findings in two sessions.",
      },
      {
        type: "paragraph",
        text: "The first is a 90-minute platform walkthrough using the carrier's own data. The team presents top findings: which law firms are outliers on cost or outcomes, which plaintiff attorneys are driving the worst results, where nuclear verdict risk is concentrating, and which active cases require immediate attention. The session concludes with three to five specific, prioritized action items — not recommendations for further analysis, but concrete interventions the claims team can execute.",
      },
      {
        type: "paragraph",
        text: "The second session — optional, and typically conducted two to three weeks later — is a condensed executive summary for senior leadership and board reporting. This session translates the findings into the language boards actually use: reserve adequacy, adverse loss development drivers, and the specific changes in law firm and litigation strategy that will address them.",
      },
      {
        type: "pullquote",
        text: "Total engagement: 10 weeks. Total senior leadership time from the carrier: 4–5 hours. The rest is the analytics team's work.",
      },

      // --- Section 5: The Less Tech Insight ---
      { type: "heading", text: "The 'Less Tech' Insight That Changes the Equation" },
      {
        type: "paragraph",
        text: "Here is the key insight that separates this model from every IT project the carrier has seen before: the technology does the heavy lifting, but the carrier does not manage it.",
      },
      {
        type: "paragraph",
        text: "The analytics team uses sophisticated data transformation tools, machine learning models for pattern recognition, and purpose-built litigation intelligence platforms to process the carrier's data. The technology involved is genuinely advanced. But none of it sits inside the carrier's environment. None of it requires the carrier's IT team to configure, maintain, or support it. None of it has an implementation timeline that stretches into next year.",
      },
      {
        type: "paragraph",
        text: "The carrier's role is to provide data extracts — something a claims supervisor or TPA contact can typically accomplish in a few hours using their existing system access. The rest is the analytics team's domain.",
      },
      {
        type: "paragraph",
        text: "The result feels like the carrier added a sophisticated analytics capability to their organization overnight. Because they effectively did. No integration project. No IT steering committee. No change management program. No 18-month timeline. Just answers — within 10 weeks of starting.",
      },
      {
        type: "callout",
        text: "The technology is real, modern, and sophisticated. The difference is that someone else runs it. The carrier gets the output — actionable litigation intelligence built on their own data — without owning the infrastructure that produces it.",
      },
      {
        type: "paragraph",
        text: "This is why the framing of 'less tech' is accurate. From the carrier's perspective, the experience is analytically rich and operationally light. From the claims organization's perspective, the answer to the board's question — 'Are there proven services that can actually help here?' — is yes, and the answer arrived without a single IT ticket.",
      },

      // --- Section 6: Outcomes ---
      { type: "heading", text: "What Carriers See After 10 Weeks" },
      {
        type: "paragraph",
        text: "Carriers that have run this engagement model consistently report results in three areas.",
      },
      {
        type: "paragraph",
        text: "Outside counsel spend. Law firm performance analysis almost always surfaces outliers — firms that are spending above benchmark on cases with comparable difficulty profiles, firms whose demand reduction rates trail the panel average, firms whose cycle times are extending beyond reasonable norms for their jurisdiction. Addressing those outliers directly — through panel restructuring, billing guideline tightening, or firm reassignment — typically produces 20 to 25 percent reductions in outside counsel spend within the first year.",
      },
      {
        type: "paragraph",
        text: "Settlement outcomes. Plaintiff attorney pattern analysis identifies which opposing counsel produce the worst outcomes in which venues — and, crucially, at what point in the litigation lifecycle those attorneys are most likely to settle. Carriers that use this intelligence to inform their negotiation strategy typically see 10 percent improvement in settlement outcomes across comparable case types.",
      },
      {
        type: "paragraph",
        text: "Reserve accuracy. The combination of closed case intelligence and active portfolio analysis produces a significantly more accurate view of probable outcomes for open matters. Carriers consistently report meaningfully better reserve accuracy in the first year of operation — reducing the adverse development that was producing the board-level questions in the first place.",
      },
      {
        type: "paragraph",
        text: "For a mid-size carrier, those three outcomes translate to millions in recovered spend and reduced loss development. For a large commercial carrier — one managing tens of thousands of open matters across multiple jurisdictions — the financial impact reaches into the tens of millions.",
      },
      {
        type: "callout",
        text: "Typical first-year outcomes: 20–25% reduction in outside counsel spend. 10% improvement in settlement outcomes. Meaningfully better reserve accuracy. Specific action items from the analysis are implementable by the claims team within 30 days of delivery.",
      },

      // --- Section 7: The Sequencing Question ---
      { type: "heading", text: "The Sequencing Question Every Carrier Needs to Answer" },
      {
        type: "paragraph",
        text: "The boards asking hard questions about litigation are not asking because they want a technology roadmap. They are not asking to be told that the answer is an eighteen-month implementation project. They are asking because they want answers — now, with the data that already exists, about the portfolio that is developing adversely today.",
      },
      {
        type: "paragraph",
        text: "The carriers getting those answers are not waiting for IT. They are engaging analytics experts, getting the analysis done, and then — once they have seen what the data shows — making informed decisions about what infrastructure investments actually make sense.",
      },
      {
        type: "paragraph",
        text: "Some carriers, after seeing the findings, decide to build internal dashboards that replicate the intelligence using their own technology stack. Others decide the expert-led model is the right long-term structure and continue the engagement. The point is they make that decision with information rather than assumptions. They know what the data shows before they commit to how they want to own the infrastructure that produces it.",
      },
      {
        type: "paragraph",
        text: "This is fundamentally different from the IT-first approach, which asks the carrier to make a multi-year infrastructure commitment before seeing a single finding. The expert-led model inverts that sequence. Intelligence first. Infrastructure decision second. Results throughout.",
      },
      {
        type: "pullquote",
        text: "The carriers with the best litigation outcomes are not the ones with the most sophisticated technology platforms. They are the ones who know what their data actually shows.",
      },

      // --- Section 8: Where to Start ---
      { type: "heading", text: "Where to Start" },
      {
        type: "paragraph",
        text: "If you are running a commercial lines or specialty book and the adverse development conversation is becoming a recurring board topic, the first step is not a technology evaluation. It is a visibility assessment.",
      },
      {
        type: "paragraph",
        text: "The free 5-minute Litigation Visibility Assessment at litigationsentinel.com/briefing maps exactly where your program has visibility and where the blind spots are — benchmarked against what top-performing carriers actually measure. It covers law firm performance, plaintiff attorney pattern visibility, jurisdiction risk awareness, reserve methodology, and active case monitoring. Six questions. No sales pitch. A specific read on where your program stands.",
      },
      {
        type: "paragraph",
        text: "If the assessment surfaces gaps — and for most carriers it surfaces several — the next step is understanding what an expert-led engagement would look like against your specific data environment. That conversation starts with the Data Discovery Questionnaire described above. It takes one call. The carrier's claims supervisor or TPA contact can answer most of it.",
      },
      {
        type: "paragraph",
        text: "The data is already there. The litigation history is already recorded. The case files, the billing records, the settlement outcomes — they exist in your systems right now. The only question is whether you want to wait for an IT project to organize them, or whether you want answers in 10 weeks.",
      },
    ],
  },
  {
    slug: "ny-ai-legal-advice-ban",
    section: "Litigation Tech",
    tag: "Regulatory",
    title: "New York Wants to Make AI Legal Advice a Felony. Five Other States Are Watching.",
    subtitle:
      "Senate Bill 7263 passed the New York Judiciary Committee 7-0 in February and would classify personalized AI legal advice as a Class E felony — punishable by up to four years in prison. It is the most aggressive AI-professional-services bill in the country, and it is not the only one. Here is what corporate legal departments need to know before the regulatory wave hits.",
    readTime: "10 min read",
    author: "Wes Todd",
    date: "March 6, 2026",
    readers: 856,
    trending: true,
    content: [
      { type: "heading", text: "The Bill That Changes the Equation" },
      { type: "paragraph", text: "On February 25, 2026, the New York State Senate Judiciary Committee voted 7-0 to advance Senate Bill 7263, introduced by Senator Jessica Gonzalez. The bill would make it a Class E felony for an AI system to provide personalized legal advice to a consumer. Not a regulatory violation. Not a fine. A felony carrying one to four years in prison." },
      { type: "paragraph", text: "That sentence is worth reading twice, because it represents a category shift in how legislatures are thinking about AI in professional services. We have spent the last three years debating whether AI tools constitute the unauthorized practice of law. New York has decided to skip the debate and go straight to the criminal code." },
      { type: "paragraph", text: "S7263 does not stop at lawyers. It covers fourteen licensed professions \u2014 including doctors, accountants, engineers, architects, nurses, pharmacists, psychologists, social workers, veterinarians, dental hygienists, physical therapists, chiropractors, and dietitians. The bill draws a line between AI providing general information and AI providing personalized advice tailored to a specific individual\u2019s situation. The first is permitted. The second is a felony." },
      { type: "paragraph", text: "The New York State Bar Association supports the bill. And if you are a General Counsel or CLO running a legal department that has deployed AI tools \u2014 or plans to \u2014 the implications extend well beyond New York." },
      { type: "heading", text: "The Distinction That Will Define the Next Five Years of AI Regulation" },
      { type: "paragraph", text: "The core of S7263 rests on a distinction that every legal department needs to internalize now: the difference between general legal information and personalized legal advice. An AI tool that explains what a non-compete clause typically contains is providing information. An AI tool that reviews your specific employment agreement and tells you whether your non-compete is enforceable in your jurisdiction is providing advice." },
      { type: "pullquote", text: "The line between legal information and legal advice has always been blurry. New York just drew it with a Sharpie and attached a prison sentence." },
      { type: "paragraph", text: "This distinction is not new. It has existed in unauthorized practice of law jurisprudence for decades. But it has never been applied to AI systems, and the practical challenge is significant. Modern large language models do not reliably stay on one side of that line. A user asks a general question, the model asks a follow-up, the user provides specifics, and within three exchanges the AI is doing something that looks a lot like tailored legal advice. The technology does not have a built-in governor for this. The bill says it needs one." },
      { type: "paragraph", text: "For corporate legal departments, the question is not whether your team is using AI to give legal advice to consumers. It is whether any AI-powered tool in your operation \u2014 contract review platforms, compliance chatbots, employee self-service legal portals \u2014 could be construed as crossing that line. If your company deploys a customer-facing AI that answers insurance coverage questions or explains policy terms based on a specific policyholder\u2019s circumstances, you are in the zone." },
      { type: "callout", text: "Key S7263 definitions: \"Personalized legal advice\" means guidance tailored to a specific individual\u2019s legal situation, as distinguished from general legal information. The bill covers 14 licensed professions. Violation is a Class E felony (1-4 years imprisonment). The NY State Bar Association has endorsed the bill." },
      { type: "heading", text: "New York Is the Loudest Voice, Not the Only One" },
      { type: "paragraph", text: "S7263 gets the headlines because of the felony classification. But the regulatory trend is multi-state and accelerating. California, Texas, Florida, and Illinois are all moving \u2014 each with a different theory of the case, but all pointed in the same direction." },
      { type: "paragraph", text: "California\u2019s SB 574, introduced by Senator Tom Umberg, takes a disclosure-and-oversight approach rather than outright criminalization. It would require AI legal platforms to display prominent disclaimers that they are not providing legal advice, prohibit AI from representing clients in court proceedings, and mandate human attorney oversight for any AI tool marketed as providing legal services. It is a lighter touch than New York, but it creates compliance obligations that will affect every legal tech vendor operating in the state \u2014 which is most of them." },
      { type: "paragraph", text: "Texas is pursuing a liability framework through the RAIGA Act \u2014 Regulate AI-Generated Advice \u2014 which focuses less on criminalizing AI output and more on establishing clear liability rules for providers. The theory is that if you deploy an AI system that gives bad legal advice, you own the consequences. Florida\u2019s AI Task Force is exploring similar legislative options, and Illinois has proposed AI professional licensing requirements that would create a new regulatory category specifically for AI systems operating in licensed professional domains." },
      { type: "paragraph", text: "At the federal level, the GUARD Act \u2014 Government Unified AI Regulatory Direction Act \u2014 would create a national framework for AI in professional services, potentially preempting or supplementing the state patchwork. The FTC is separately investigating AI platforms that make claims about providing legal guidance, focusing on whether those claims constitute deceptive trade practices." },
      { type: "pullquote", text: "Five states are writing five different rules for AI in legal services. If you operate nationally, you need to comply with all of them." },
      { type: "paragraph", text: "The pattern is clear. Within eighteen months, any AI tool that touches legal advice, legal information, or legal services will operate in a regulatory environment that does not yet exist today. The specifics will vary by state. The direction will not. We mapped nuclear verdict exposure by state on our interactive heat map at litigationsentinel.com/nuclear-verdicts \u2014 the geographic patterns matter when you are thinking about regulatory risk too, because the states with the highest litigation exposure are also the ones moving fastest on AI regulation." },
      { type: "heading", text: "The ABA Has Already Told You What Is Coming" },
      { type: "paragraph", text: "The American Bar Association has been telegraphing this regulatory wave for two years. In 2024, Formal Opinion 512 confirmed that AI tools used by licensed attorneys under proper supervision do not constitute the unauthorized practice of law. That opinion was a green light for attorney-supervised AI \u2014 and a red light for everything else." },
      { type: "paragraph", text: "In 2025, ABA Resolution 604 went further: it explicitly recommended that state legislatures update their unauthorized practice of law statutes to address AI systems. The resolution did not dictate how. It simply said the existing rules were not built for this technology and needed to be modernized. S7263 is one answer to that call. California SB 574 is another. More are coming." },
      { type: "paragraph", text: "The ABA\u2019s AI Task Force report called for a \"technology-neutral\" approach to professional regulation \u2014 the idea being that the rules should focus on what the tool does, not what the tool is. If a system provides personalized legal advice, it should be regulated the same way regardless of whether a human or a machine is providing it. That principle sounds reasonable in the abstract. In practice, it means AI tools that cross the information-to-advice threshold will face the same regulatory framework as a human practicing law without a license." },
      { type: "paragraph", text: "For corporate legal departments, the ABA\u2019s position creates a clear safe harbor and a clear danger zone. The safe harbor: AI tools used by licensed attorneys, with appropriate supervision and governance, to support their practice. The danger zone: AI tools deployed directly to consumers, employees, or business partners that provide tailored guidance on specific legal situations without attorney oversight. If you are in the safe harbor, you are fine. If you are in the danger zone, the regulatory ground beneath you is shifting fast." },
      { type: "heading", text: "The Courts Are Already Drawing Lines" },
      { type: "paragraph", text: "While legislatures draft bills, courts have been establishing their own precedent \u2014 and the picture is not encouraging for organizations that have been treating AI as a free-form legal research tool without governance." },
      { type: "paragraph", text: "In Mata v. Avianca (2023), a New York federal judge sanctioned attorney Steven Schwartz for submitting a brief that cited six cases fabricated by ChatGPT. The court found that Schwartz had failed to verify the AI output against actual legal databases \u2014 a basic competency obligation that the technology made dangerously easy to skip. In re: Schwartz imposed additional sanctions in the same matter. These cases established that AI hallucinations are the attorney\u2019s problem, not a defense." },
      { type: "paragraph", text: "More recently \u2014 and more relevant to the regulatory trend \u2014 Judge Rakoff\u2019s ruling in the Heppner case earlier this year found that AI-generated legal documents are not protected by attorney-client privilege when created using consumer AI tools without attorney direction. We covered that ruling in depth in our analysis of the AI privilege split \u2014 if you have not read it, it is the most consequential AI-privilege ruling to date and directly compounds the risks I am describing here." },
      { type: "callout", text: "The regulatory and judicial trend lines are converging: Mata v. Avianca (2023) established attorney liability for unverified AI output. Heppner (2026) stripped privilege from consumer AI interactions. S7263 would criminalize personalized AI legal advice. ABA Resolution 604 recommended states update UPL statutes for AI. Five states now have active AI-legal-services legislation. Each development makes the next one more likely \u2014 and more aggressive." },
      { type: "paragraph", text: "The courts are telling you that AI output is your responsibility. The legislatures are telling you that unsupervised AI in professional services is heading toward criminal liability. The ABA is telling you the rules are changing. The only question is whether your department\u2019s governance framework reflects any of this." },
      { type: "heading", text: "What This Means for Your Legal Department" },
      { type: "paragraph", text: "Let me be direct about what I am not saying. I am not saying AI is dangerous. I am not saying legal departments should stop using AI tools. I use AI in my practice. The companies I work with use AI across their legal operations. The technology is genuinely transformative when deployed correctly." },
      { type: "paragraph", text: "What I am saying is that the regulatory environment is catching up to the technology, and most corporate legal departments have not updated their governance frameworks to reflect that. Many deployed AI tools eighteen months ago under the assumption that the regulatory environment would remain permissive. That assumption is no longer safe." },
      { type: "paragraph", text: "Here is where the risk concentrates. First, customer-facing AI tools. If your company deploys a chatbot, virtual assistant, or automated guidance system that answers legal or quasi-legal questions for customers \u2014 coverage questions, claims guidance, policy interpretation, compliance advice \u2014 you need to evaluate whether that tool could be construed as providing personalized legal advice under S7263 or its equivalents. The exemption for general information is narrow, and these tools are designed to get specific." },
      { type: "paragraph", text: "Second, employee self-service legal tools. Many large organizations have deployed internal AI tools that help employees navigate HR policies, compliance requirements, or benefits questions. Some of these tools are sophisticated enough to provide guidance that could cross the information-to-advice line. Under S7263\u2019s framework, the fact that the tool is internal does not necessarily exempt it \u2014 the bill targets the act of providing personalized professional advice, not the commercial context." },
      { type: "paragraph", text: "Third, legal operations AI without attorney oversight. Contract review platforms, litigation hold automation, discovery tools \u2014 if these are operating without a licensed attorney in the supervision chain, the regulatory trajectory I have described will eventually reach them. ABA Opinion 512 protects attorney-supervised AI. It does not protect AI operating autonomously in a legal function." },
      { type: "pullquote", text: "The question is not whether you use AI. It is whether you can prove \u2014 to a regulator, a judge, or a jury \u2014 that a licensed attorney supervised every output that touched legal advice." },
      { type: "heading", text: "Five Things to Do Before the End of Q2" },
      { type: "paragraph", text: "The legislative timelines on these bills range from months to a year. S7263 still needs a full Senate vote and Assembly passage. California SB 574 is earlier in its committee process. But the direction is set, and the compliance lift is not trivial. Starting now gives you time to do this right instead of doing it under pressure." },
      { type: "paragraph", text: "One: Inventory every AI tool in your legal operation and classify it. Map each tool against the information-versus-advice distinction. Any tool that takes user-specific inputs and generates tailored legal guidance \u2014 even indirectly \u2014 needs to be flagged for governance review. Do not limit this to tools the legal department procured. Check what customer service, HR, and compliance deployed independently." },
      { type: "paragraph", text: "Two: Establish attorney oversight protocols for every tool that crosses the line. ABA Opinion 512 provides the framework: a licensed attorney must supervise the AI\u2019s output when it touches legal advice. Document who that attorney is, what the supervision process looks like, and how it is enforced. If you cannot name the attorney, the tool is not supervised." },
      { type: "paragraph", text: "Three: Update your AI acceptable use policy to reflect the multi-state regulatory landscape. Your policy was probably written before S7263, SB 574, and the RAIGA Act existed. It needs to account for the possibility that personalized AI legal advice will be criminalized in your operating jurisdictions. If your company operates in New York, California, or Texas, this is not hypothetical." },
      { type: "paragraph", text: "Four: Coordinate with your technology and product teams. If your company sells or deploys AI tools that interact with customers on legal, financial, or health-related topics, the product team needs to understand S7263\u2019s fourteen-profession scope. This is not just a legal department problem. It is a product liability problem, a compliance problem, and potentially a criminal exposure problem." },
      { type: "paragraph", text: "Five: Build a monitoring framework for the legislative trend. The bills I have described are the first wave. By the end of 2026, I expect at least ten states to have active legislation addressing AI in professional services. Your regulatory tracking should include these bills the same way it tracks data privacy legislation or litigation funding reforms." },
      { type: "callout", text: "Action checklist for GCs: (1) Inventory all AI tools touching legal advice \u2014 including tools deployed by non-legal departments. (2) Classify each tool on the information-vs-advice spectrum. (3) Assign attorney oversight to every tool that crosses the advice threshold. (4) Update AI acceptable use policies for multi-state compliance. (5) Brief product and technology leadership on S7263\u2019s fourteen-profession scope." },
      { type: "heading", text: "The Regulatory Wave Is the Easy Part" },
      { type: "paragraph", text: "Here is the part nobody is talking about yet. S7263 and its equivalents are addressing the supply side \u2014 restricting what AI tools can do. But the demand side is not going away. Consumers want cheaper, faster access to legal guidance. Businesses want to automate legal operations. The economic pressure to deploy AI in legal services is enormous and growing." },
      { type: "paragraph", text: "The organizations that navigate this well will be the ones that build governance frameworks robust enough to satisfy regulators while capturing the efficiency gains that AI makes possible. That is not a contradiction. It is a design problem. And the legal departments that solve it first will have a meaningful competitive advantage \u2014 both in operational efficiency and in regulatory risk management." },
      { type: "paragraph", text: "The organizations that navigate it poorly will be the ones that either freeze \u2014 stopping all AI deployment out of regulatory fear \u2014 or ignore the trend and discover the compliance gap when a regulator, a court, or opposing counsel surfaces it for them. Neither outcome is acceptable." },
      { type: "paragraph", text: "I started covering the AI-and-litigation intersection with our analysis of the Heppner privilege ruling last month. The regulatory story I have outlined here is the next chapter. The privilege question, the unauthorized practice question, and the governance question are all converging into a single reality: AI in legal services is no longer an unregulated frontier. The rules are being written now. Your department\u2019s governance framework should be written at least that fast." },
      { type: "paragraph", text: "We are tracking every bill, ruling, and ABA development in this space through Litigation Sentinel. If you are not subscribed, this is the coverage that will keep you ahead of the regulatory curve. And if you want to see where your legal operations stand against the governance benchmarks that are emerging, our Executive Briefing at litigationsentinel.com/briefing is a two-minute diagnostic that maps your blind spots \u2014 including the AI governance gaps that S7263 just made urgent." },
    ],
  },
  {
    slug: "two-courts-two-answers-ai-privilege",
    section: "Litigation Tech",
    tag: "Case Watch",
    title: "Two Courts, Same Day, Opposite Answers: Your AI Conversations May Already Be Discoverable",
    subtitle:
      "On February 10, 2026, a federal judge in Manhattan ruled that AI-generated documents are not privileged. Hours later, a federal judge in Michigan ruled the opposite on work product. The split creates a governance gap most legal departments are not prepared for.",
    readTime: "9 min read",
    author: "Wes Todd",
    date: "February 24, 2026",
    readers: 1247,
    trending: true,
    content: [
      { type: "heading", text: "A Federal Judge Just Made Your AI Conversations Discoverable" },
      {
        type: "paragraph",
        text: "On February 10, 2026, Judge Jed Rakoff of the Southern District of New York ruled from the bench that 31 documents a criminal defendant generated using Anthropic\u2019s Claude were not protected by attorney-client privilege or the work product doctrine. The defendant, Bradley Heppner, had fed information from his defense counsel into the consumer version of Claude, generated reports outlining his legal strategy, and transmitted those documents to his lawyers.",
      },
      {
        type: "paragraph",
        text: "The FBI seized the documents during a search of Heppner\u2019s home. His attorneys claimed privilege. Judge Rakoff rejected the claim on every ground they raised.",
      },
      {
        type: "paragraph",
        text: "This is the first federal ruling to address whether conversations with a publicly accessible AI tool are privileged. Judge Rakoff\u2019s written opinion, issued February 17, characterized it as a nationwide matter of first impression. The answer, at least in the Southern District of New York, is unambiguous: they are not.",
      },
      {
        type: "pullquote",
        text: "AI is not an attorney. It cannot maintain a confidential relationship. And in the eyes of this court, sharing privileged information with a consumer AI tool is the same as sharing it with any other third party.",
      },
      {
        type: "paragraph",
        text: "The reasoning was straightforward. Claude is not an attorney. There is no fiduciary relationship between a user and an AI platform. Anthropic\u2019s privacy policy explicitly states that user inputs may be used for model training and disclosed to third parties, including governmental authorities. There was, as Rakoff put it, simply no reasonable expectation of confidentiality.",
      },
      {
        type: "paragraph",
        text: "On work product, the court was equally direct. Heppner created the documents on his own initiative. His defense team at Quinn Emanuel did not direct him to use AI. Without attorney direction, work product protection does not attach.",
      },

      { type: "heading", text: "The Same Day, a Different Court Reached the Opposite Conclusion" },
      {
        type: "paragraph",
        text: "On the same day Judge Rakoff ruled from the bench in Manhattan, Magistrate Judge Anthony P. Patti of the Eastern District of Michigan issued a written ruling in Warner v. Gilbarco, Inc. that went the other direction entirely.",
      },
      {
        type: "paragraph",
        text: "In Warner, the defendants demanded that a pro se plaintiff turn over her ChatGPT conversations, arguing that by using AI she had waived any work product protection. Judge Patti denied the request on two independent grounds.",
      },
      {
        type: "paragraph",
        text: "First, the materials were prepared in anticipation of litigation, which brings them under the protection of Rule 26(b)(3)(A). Second, and more significantly, Judge Patti drew a distinction that Rakoff did not: attorney-client privilege waiver and work product waiver are not the same thing.",
      },
      {
        type: "callout",
        text: "Attorney-client privilege can be waived by voluntary disclosure to any third party. Work product waiver requires disclosure to an adversary or in a manner likely to reach an adversary. Judge Patti then held that \u201cChatGPT and other generative AI programs are tools, not persons.\u201d Sharing materials with a tool does not constitute disclosure to an adversary.",
      },
      {
        type: "paragraph",
        text: "Judge Patti also rejected what he characterized as a fishing expedition \u2014 the defendants were seeking the plaintiff\u2019s internal analysis and mental impressions, which are not discoverable as a matter of law.",
      },
      {
        type: "paragraph",
        text: "Two federal courts. The same day. Opposite conclusions. One says AI is a third party that destroys confidentiality. The other says AI is a tool that preserves work product protection. Both applied existing legal frameworks. Neither invented new rules. They just read the same doctrines differently.",
      },

      { type: "heading", text: "The Governance Gap This Creates" },
      {
        type: "paragraph",
        text: "I spend most of my time working with General Counsel and CLOs who manage large litigation portfolios. Here is what this split means in practice: right now, today, your legal team is almost certainly using AI in some form. They are using it to draft briefs, analyze contracts, research case law, prepare for depositions, and generate strategy memos. Some of this is happening on enterprise platforms with confidentiality safeguards. Some of it is happening on consumer tools that train on inputs.",
      },
      {
        type: "paragraph",
        text: "Most legal departments have no policy that distinguishes between the two. And after Heppner, the distinction is the difference between a protected communication and a discoverable document.",
      },
      {
        type: "pullquote",
        text: "The question is not whether your team uses AI. The question is whether your governance framework treats a ChatGPT prompt the same as an email to outside counsel. Because after Heppner, opposing counsel will.",
      },
      {
        type: "paragraph",
        text: "Judge Rakoff did leave a door open. In dicta, he noted that the analysis might differ if AI use had been directed by counsel under a Kovel-type arrangement. If counsel directs the client to use an AI tool, the AI might function as a lawyer\u2019s agent. But that requires documentation, direction, and a governance framework that most legal departments do not have.",
      },
      {
        type: "paragraph",
        text: "The ABA\u2019s Task Force on Law and Artificial Intelligence released its final report in December 2025, and its central conclusion is relevant here: AI has moved from experiment to infrastructure for the legal profession, and governance is now a central responsibility. Formal Opinion 512, issued in July 2024, requires lawyers to maintain a reasonable understanding of the AI tools they use. Forty-four percent of law firms still have no formal AI governance policy.",
      },
      {
        type: "paragraph",
        text: "That was a problem before Heppner. Now it is a liability.",
      },

      { type: "heading", text: "What This Means for Corporate Legal Departments" },
      {
        type: "paragraph",
        text: "The immediate practical implications break down into three areas.",
      },
      {
        type: "paragraph",
        text: "First, consumer AI tools are a privilege risk. Any AI platform that trains on user inputs or reserves the right to share data with third parties cannot maintain the confidentiality required for attorney-client privilege. After Heppner, feeding case strategy, legal analysis, or client communications into these tools is functionally the same as publishing them. Every legal department needs a clear policy that specifies which AI tools are approved for privileged work and which are not.",
      },
      {
        type: "paragraph",
        text: "Second, enterprise AI tools with proper confidentiality controls are a different story. Commentators analyzing the Heppner decision have noted that Judge Rakoff\u2019s reasoning hinges on Anthropic\u2019s specific privacy policy. An enterprise deployment that contractually prohibits training on inputs, encrypts data in transit and at rest, and maintains SOC 2 compliance should not trigger the same analysis. But \u201cshould not\u201d is not \u201cwill not.\u201d Until a court rules on this distinction, the safe approach is to have the governance framework in place before the question arises.",
      },
      {
        type: "paragraph",
        text: "Third, work product may be more durable than privilege in the AI context. Judge Patti\u2019s reasoning in Warner suggests that materials prepared in anticipation of litigation maintain work product protection even when generated through AI \u2014 because an AI tool is not an adversary. But this only helps if the materials were genuinely prepared in anticipation of litigation. Internal analyses, strategy documents, and case evaluations created before litigation is reasonably anticipated do not qualify. Timing and documentation matter.",
      },
      {
        type: "callout",
        text: "The practical takeaway: privilege is fragile when AI is involved. Work product may be more resilient. But neither protection is automatic. Both require governance \u2014 policies, approved tool lists, documentation of counsel direction, and clear boundaries between consumer and enterprise AI platforms.",
      },

      { type: "heading", text: "The Pattern I Keep Seeing" },
      {
        type: "paragraph",
        text: "There is a pattern I keep coming back to in conversations with legal leadership. The tools arrive before the governance. The technology gets adopted before the policies catch up. And the risk materializes in exactly the gap between the two.",
      },
      {
        type: "paragraph",
        text: "AI in legal departments follows the same trajectory as every other technology shift \u2014 from email to cloud storage to collaboration platforms. The tool gets adopted bottom-up. Individual attorneys start using it because it makes them faster. By the time leadership notices, the tool is embedded in workflows across the department. Then something happens \u2014 a ruling like Heppner, a discovery dispute, a breach \u2014 and everyone realizes the governance framework was never built.",
      },
      {
        type: "paragraph",
        text: "The GCs I work with who have the least exposure to this kind of risk are not the ones who banned AI. That is unrealistic and counterproductive. They are the ones who built the governance layer before it was tested. Approved tool lists. Enterprise-grade platforms with audit trails. Clear policies on what types of information can be processed through which channels. Documentation of counsel direction when AI is used for litigation preparation.",
      },
      {
        type: "paragraph",
        text: "After Heppner, the cost of not having that layer is no longer theoretical. It is discoverable.",
      },

      { type: "heading", text: "What to Do This Week" },
      {
        type: "paragraph",
        text: "If you manage a legal department, here are five things you should do in the next seven days.",
      },
      {
        type: "paragraph",
        text: "One: Audit which AI tools your team is using. Not just the ones you approved \u2014 the ones they are actually using. Consumer tools, enterprise tools, browser extensions, embedded AI features in existing software. You cannot govern what you cannot see.",
      },
      {
        type: "paragraph",
        text: "Two: Review the privacy policies and terms of service for every AI platform in use. Specifically, check whether the platform trains on user inputs, whether it shares data with third parties, and what its data retention and deletion policies are. If the policy says inputs may be used for training, that tool cannot be used for privileged work after Heppner.",
      },
      {
        type: "paragraph",
        text: "Three: Establish a clear distinction between approved enterprise AI tools and consumer tools. Enterprise tools with contractual confidentiality protections should be the only platforms used for any work involving privileged information, litigation strategy, or client communications.",
      },
      {
        type: "paragraph",
        text: "Four: Document counsel direction when AI is used in litigation preparation. If work product protection is your fallback, you need to show that AI use was at the direction of counsel, not a unilateral decision by the client or a staff member. Build this into your workflow.",
      },
      {
        type: "paragraph",
        text: "Five: Brief your outside counsel. They need to know your AI governance expectations, and you need to know what tools they are using on your matters. If they are running case research through consumer AI tools, that is your exposure too.",
      },
      {
        type: "paragraph",
        text: "The Heppner ruling is not the end of AI in legal practice. It is the beginning of AI governance as a non-negotiable requirement. The departments that build the framework now will operate from a position of strength. The ones that wait will learn the framework\u2019s value from opposing counsel\u2019s discovery request.",
      },
      {
        type: "paragraph",
        text: "We built a short diagnostic that maps where your litigation operations have visibility and where the blind spots are \u2014 including governance gaps like this one. It takes about two minutes: /briefing",
      },
    ],
  },
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
    readTime: "9 min read",
    author: "Wes Todd",
    date: "January 29, 2026",
    readers: 1054,
    content: [
      // --- Section 1: The Biggest Law Firm You Have Never Worried About Enough ---
      { type: "heading", text: "The Biggest Law Firm You Have Never Worried About Enough" },
      {
        type: "paragraph",
        text: "Morgan & Morgan employs more than 1,125 attorneys. They operate over 100 offices across the United States. They generate north of two billion dollars in annual revenue. In 2025 alone, they secured $1.098 billion in jury verdicts.",
      },
      {
        type: "paragraph",
        text: "If you run a litigation portfolio for any company that gets sued by individuals — insurance, healthcare, transportation, retail, real estate, construction — Morgan & Morgan is either already on the other side of your cases or they will be soon. They are the largest personal injury firm in the country and they are still growing. They hired 200 more attorneys last year. They are opening offices in states where they had no presence eighteen months ago.",
      },
      {
        type: "paragraph",
        text: "But here is the part that should actually keep you up at night. It is not the size. It is not the $350 million they spend on advertising every year, although that number is staggering in its own right. It is not even the fact that John Morgan is a billionaire who can fund any case for as long as it takes without a whisper of settlement pressure.",
      },
      {
        type: "paragraph",
        text: "The part that should worry you is that Morgan & Morgan almost certainly knows more about your litigation patterns than you do.",
      },

      // --- Section 2: Size Is Not the Weapon. Data Is. ---
      { type: "heading", text: "Size Is Not the Weapon. Data Is." },
      {
        type: "paragraph",
        text: "Most defense-side counsel, when they see Morgan & Morgan on the other side of a case, think about scale. They think about the advertising budget. They think about the brand recognition that contaminates jury pools before voir dire even begins. Those things matter. But they are not the competitive advantage that is actually hurting you.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan built Litify — a legal technology platform running on Salesforce infrastructure — to manage their own caseload. Then they spun it off as a separate company. Today Litify is used by more than 200 law firms. Think about that for a moment. Morgan & Morgan did not just build technology for their own cases. They built a platform that captures data from hundreds of firms across thousands of cases, and the architecture of that platform was designed by the plaintiff bar's most sophisticated operation.",
      },
      {
        type: "pullquote",
        text: "Morgan & Morgan does not win because they are big. They win because they have built a data operation that tells them exactly which cases to take, which venues to file in, and which defense firms will fold.",
      },
      {
        type: "paragraph",
        text: "When Morgan & Morgan evaluates an intake call, they are not just running it past an experienced attorney. They are running it through AI-powered case evaluation tools trained on decades of outcome data. They know, with statistical precision, the expected value of a slip-and-fall in Hillsborough County versus a product liability case in Cook County versus a trucking accident in St. Louis. They know which case types have the highest ratio of verdict to demand. They know which fact patterns correlate with jury sympathy and which ones do not.",
      },
      {
        type: "paragraph",
        text: "John Morgan has said it publicly: they do not take bad cases. They take the right cases and they win them. That is not bravado. That is the output of a data-driven case selection engine that most defense operations do not even realize exists.",
      },

      // --- Section 3: The Information Asymmetry That Is Costing You ---
      { type: "heading", text: "The Information Asymmetry That Is Costing You" },
      {
        type: "paragraph",
        text: "Here is the uncomfortable truth that nobody on the defense side wants to say out loud.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan knows which of your defense firms settle early. They know which adjusters have authority ceilings that can be reached with the right pressure at the right time. They know which venues produce verdicts two to three times higher than the regional average and they file there deliberately. They know which defense attorneys lose motions in limine at a higher rate than their peers. They know which jurisdictions have jury pools that are statistically more sympathetic to certain injury types.",
      },
      {
        type: "paragraph",
        text: "They know all of this because they have the data. Fifty thousand cases per year, flowing through a technology stack purpose-built to extract patterns. Every settlement, every verdict, every defense motion, every judicial ruling — it all goes into the machine. And the machine gets smarter every quarter.",
      },
      {
        type: "paragraph",
        text: "Now ask yourself this: do you have the same data about your own portfolio?",
      },
      {
        type: "paragraph",
        text: "Can you tell me, right now, which of your outside firms resolves cases below expected severity and which ones consistently come in above? Can you tell me which venues in your portfolio are producing outcomes that are accelerating faster than your reserves? Can you tell me which opposing counsel — not which firm, which individual attorney — has the highest win rate against your defense panel?",
      },
      {
        type: "callout",
        text: "The plaintiff bar has invested in pattern recognition for two decades. They have built technology platforms, AI intake systems, and predictive analytics engines. The defense side, by and large, is still tracking spend in spreadsheets and reading quarterly narratives. This is an information asymmetry, and it is compounding.",
      },
      {
        type: "paragraph",
        text: "If you cannot answer those questions, you are playing a game where the other side has better information than you do. That is not a fair fight. And Morgan & Morgan is not the only plaintiff firm that has figured this out — they are just the biggest and the most public about it. The entire plaintiff bar is moving in this direction. Morgan & Morgan is simply five years ahead of everyone else.",
      },

      // --- Section 4: How They Pick You Apart ---
      { type: "heading", text: "How They Pick You Apart, One Pattern at a Time" },
      {
        type: "paragraph",
        text: "Let me walk you through how this actually works in practice, because the abstraction undersells the damage.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan takes a new trucking case in Florida. Before their attorney spends a single hour on strategy, the data system has already run the case profile against thousands of historical outcomes. It knows the expected verdict range for this fact pattern in this venue with this judge. It knows how the assigned defense firm has performed in similar cases — their average time to settlement, their typical first offer as a percentage of demand, their trial record over the last five years.",
      },
      {
        type: "paragraph",
        text: "The system flags that this particular defense firm has a pattern: they make aggressive initial offers, then fold before trial in 80 percent of cases. It flags that the assigned judge grants plaintiff motions in limine at a rate 15 percentage points above the county average. It flags that trucking cases in this venue have seen a 40 percent increase in median verdicts over the last three years.",
      },
      {
        type: "paragraph",
        text: "Armed with this, the Morgan & Morgan attorney knows exactly what to do. Do not settle early. Push past the initial lowball. File aggressively on discovery disputes because this judge will rule favorably. Set the case for trial because this defense firm will increase their offer by 60 percent once a trial date is set.",
      },
      {
        type: "pullquote",
        text: "When Morgan & Morgan is on the other side, average verdicts run two to three times higher than the regional baseline. That is not luck. That is case selection, venue strategy, and pattern exploitation — all powered by data you do not have.",
      },
      {
        type: "paragraph",
        text: "Meanwhile, your defense counsel is working the case with a legal pad and a gut feel. They know the law. They know the judge. They may even be very good trial lawyers. But they do not know what the other side knows about them. They do not know their own patterns. They cannot see their own blind spots because nobody is measuring them.",
      },
      {
        type: "paragraph",
        text: "This is not hypothetical. When Morgan & Morgan is on the opposing side of a case, the data shows that average verdicts run significantly higher than the regional baseline. Their case selection is so precise that they rarely go to trial with a weak case. By the time you are facing them in a courtroom, they have already determined that the odds are overwhelmingly in their favor. You are not in a fair fight. You just do not know it yet.",
      },

      // --- Section 5: The Geographic Concentration Problem ---
      { type: "heading", text: "The Geographic Concentration Problem" },
      {
        type: "paragraph",
        text: "There is another dimension to this that most defense-side legal departments are completely blind to: geographic concentration.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan does not file cases randomly. They have identified the venues that produce the highest verdicts for their case types and they concentrate resources there. South Florida. Cook County. St. Louis. The Rio Grande Valley. These are not accidents. These are strategic choices backed by venue-level outcome data that most defense departments have never compiled.",
      },
      {
        type: "paragraph",
        text: "The plaintiff bar calls them judicial hellholes, and they say it with a wink because those hellholes are profit centers. They know exactly which counties produce nuclear verdicts at the highest rates, and they build their practices around those geographies.",
      },
      {
        type: "paragraph",
        text: "Do you know where your nuclear verdict exposure is concentrated? Can you see which jurisdictions in your portfolio are producing outcomes that are accelerating beyond historical norms? Can you map the geographic distribution of your highest-severity cases and overlay it against venue-level verdict trends?",
      },
      {
        type: "callout",
        text: "We built the Nuclear Verdicts Heat Map at litigationsentinel.com/nuclear-verdicts to surface exactly this kind of geographic intelligence. It shows state-by-state verdict data, concentration patterns, and trend acceleration — the same kind of venue-level analysis that the plaintiff bar uses to decide where to file. If you have not looked at it, you should. The patterns are not subtle.",
      },
      {
        type: "paragraph",
        text: "If you cannot answer those questions, you are exposed in ways you cannot see. And the plaintiff bar is exploiting that blind spot every single day.",
      },

      // --- Section 6: The Advertising Moat Nobody Talks About ---
      { type: "heading", text: "The Advertising Moat Nobody Talks About" },
      {
        type: "paragraph",
        text: "I want to touch briefly on the advertising because it connects to the data advantage in a way that is underappreciated.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan spends upward of $350 million per year on advertising. Television, digital, billboards, social media. The \"For the People\" tagline is one of the most recognized legal brands in America. That kind of saturation spending does two things that directly affect your litigation outcomes.",
      },
      {
        type: "paragraph",
        text: "First, it drives volume. More intake calls mean more data. More data means better case selection. Better case selection means higher win rates. Higher win rates justify more advertising spend. It is a flywheel, and it has been compounding for nearly forty years since the firm was founded in 1988.",
      },
      {
        type: "paragraph",
        text: "Second — and this is the one defense counsel rarely acknowledges — it contaminates jury pools. When a juror walks into the box and sees \"Morgan & Morgan\" on the plaintiff's side, there is an unconscious credibility transfer. They have seen the ads. They associate the brand with helping injured people. That is not a legal argument. It is a branding advantage that operates below the level of conscious evaluation, and it is worth billions in aggregate verdict outcomes.",
      },
      {
        type: "paragraph",
        text: "You cannot outspend Morgan & Morgan on advertising. That is not a viable strategy. But you can neutralize the advantages that their data gives them. And that starts with having your own data.",
      },

      // --- Section 7: What You Can Actually Do About It ---
      { type: "heading", text: "What You Can Actually Do About It" },
      {
        type: "paragraph",
        text: "I am not writing this to make you feel helpless. I am writing it because the defense side has a solvable problem that most legal departments are not solving.",
      },
      {
        type: "paragraph",
        text: "The solvable problem is this: you have the data. It already exists inside your portfolio. You have years of case outcomes, settlement amounts, defense costs, venue information, counsel performance records, judicial rulings, and resolution timelines. The raw material for the same kind of pattern recognition that Morgan & Morgan runs is sitting in your matter management system, your billing records, and your claims files.",
      },
      {
        type: "paragraph",
        text: "You are just not using it.",
      },
      {
        type: "paragraph",
        text: "The typical Fortune 500 legal department treats historical case data as an archive — something to reference when a similar case comes up, not something to mine for predictive patterns. The typical insurance carrier tracks loss ratios and reserves but does not connect those numbers to the venue-level, counsel-level, and opposing-party-level variables that actually drive outcomes.",
      },
      {
        type: "paragraph",
        text: "Closing the information gap requires three things. First, you need to know your own patterns — which firms perform, which venues are dangerous, where severity is forming in your active cases. Second, you need to benchmark against external data — what is happening in the broader litigation environment, not just inside your four walls. Third, you need to act on what the data tells you before mediation, not after. The plaintiff bar acts on their data in real time. If you are reviewing yours once a quarter, you have already lost the information advantage.",
      },
      {
        type: "pullquote",
        text: "You have the data. It already exists inside your portfolio. The raw material for the same pattern recognition that Morgan & Morgan runs is sitting in your systems right now. You are just not using it.",
      },
      {
        type: "paragraph",
        text: "This is not about buying a new software platform. It is about changing the operating model from reactive to predictive. It is about measuring severity formation in real time instead of reading about it in a quarterly narrative. It is about knowing — before the plaintiff's attorney knows — which cases in your portfolio are most vulnerable and what you should do about them.",
      },

      // --- Section 8: The Parity Mandate ---
      { type: "heading", text: "The Parity Mandate" },
      {
        type: "paragraph",
        text: "I want to be direct about what is at stake here because I think the defense side is underestimating it.",
      },
      {
        type: "paragraph",
        text: "The plaintiff bar's data advantage is not static. It is compounding. Every year Morgan & Morgan files 50,000 cases, their models get better. Every year the defense side relies on quarterly narratives and attorney judgment calls, the gap widens. We are not at the beginning of this divergence. We are well into it.",
      },
      {
        type: "paragraph",
        text: "Five years ago, the information asymmetry was noticeable. Today it is structural. Five years from now, it will be insurmountable — unless the defense side starts treating data with the same seriousness that the plaintiff bar has treated it for the last decade.",
      },
      {
        type: "paragraph",
        text: "I call this the parity mandate. You do not need to outperform Morgan & Morgan's data operation. You need to reach parity. You need to know your own portfolio as well as the opposing counsel knows it. That is the floor, not the ceiling.",
      },
      {
        type: "paragraph",
        text: "If you do not reach parity, you are negotiating from a position of ignorance against an opponent who has done their homework. Every settlement conversation, every mediation, every trial — you are walking in with less information than the person across the table. And they know it.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan is not going to slow down. They are not going to stop investing in technology. They are not going to stop hiring attorneys or opening offices or saturating markets with advertising. The firm's founder has said publicly that the philosophy is grow or die. They have chosen to grow.",
      },
      {
        type: "paragraph",
        text: "The question is whether you are going to match them on the only axis where matching them is possible: data. You cannot outspend them. You cannot out-advertise them. You cannot out-hire them. But you can know your own portfolio. You can measure what matters. You can see severity forming before it hardens. And you can make intervention decisions based on patterns rather than guesswork.",
      },
      {
        type: "paragraph",
        text: "That is the only asymmetry that is within your control to close. And the window to close it is narrowing.",
      },

      // --- Section 9: Where to Start ---
      { type: "heading", text: "Where to Start" },
      {
        type: "paragraph",
        text: "If you have read this far, you are either already thinking about how to close the data gap, or you are uncomfortably aware that the gap exists and you do not yet have a plan.",
      },
      {
        type: "paragraph",
        text: "Either way, the first step is the same: get visibility into what is actually happening in the litigation environment around you. Not just inside your portfolio — around you. Verdict trends by jurisdiction. Nuclear verdict concentration by state. Which venues are accelerating and which are holding steady. Where the plaintiff bar is concentrating resources and why.",
      },
      {
        type: "paragraph",
        text: "That is what Litigation Sentinel exists to provide. Every issue is built around the intelligence that legal departments and claims organizations need to make informed decisions — verdict data, venue analysis, counsel performance benchmarks, and severity trend patterns. If you are not already reading it, subscribe at litigationsentinel.com. It is free and it is written specifically for the people who are on the other side of cases from firms like Morgan & Morgan.",
      },
      {
        type: "paragraph",
        text: "If you want to go further — if you want a data-driven assessment of your own portfolio's exposure, your counsel performance patterns, and the severity risks that are forming inside your active cases — the Executive Briefing at litigationsentinel.com/briefing is designed for exactly that. It is the same analytical framework we use to help legal departments reach data parity with the plaintiff bar. The plaintiff bar already has this advantage. The question is whether you will build it for yourself before the gap becomes permanent.",
      },
      {
        type: "paragraph",
        text: "Morgan & Morgan is eating your lunch. Your data is the reason. And your data is also the way out.",
      },
    ],
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

export const CARRIER_RICO_ARTICLE: NewsletterArticle = {
  slug: "carrier-rico-offense",
  section: "RICO & Fraud",
  tag: "Breaking",
  title: "Two Federal RICO Suits in Four Days: The Carrier Side Just Learned to Punch Back",
  subtitle:
    "On April 10, Allstate filed RICO in the Southern District of Texas. On April 14, Uber and Liberty Mutual filed RICO in the Eastern District of New York. Two separate organizations, the same strategic decision. Here is what changed — and what it means for your portfolio.",
  readTime: "7 min read",
  author: "Wes Todd",
  date: "April 16, 2026",
  readers: 0,
  trending: true,
  content: [
    // --- Section 1: What Happened ---
    { type: "heading", text: "What Happened: Two Complaints, Four Days Apart" },
    {
      type: "paragraph",
      text: "On April 10, 2026, Allstate Insurance Company filed a federal civil RICO complaint in the Southern District of Texas, Case No. 4:26-cv-02842. The defendants: four members of the Roopani family and sixteen related entities, including medical practices, imaging centers, and management companies operating across the Houston area. The complaint alleges the defendants billed Allstate for medical services that were either unnecessary, never actually rendered, or performed by unlicensed individuals concealed behind a nominal physician figurehead.",
    },
    {
      type: "paragraph",
      text: "The alleged exposure is $7.9 million in fraudulent billing. The relief sought goes further: treble damages under 18 U.S.C. Section 1964(c), injunctive relief, and a judicial declaration that the defendants are not entitled to collect on any pending or future claims under Allstate policies. That last piece is significant. Allstate is not just seeking to recover what was already paid. It is seeking to cut off the network from any future recovery.",
    },
    {
      type: "paragraph",
      text: "Four days later, on April 14, Uber Technologies, Rasier-NY LLC, and Liberty Mutual Fire Insurance Company filed a federal civil RICO complaint in the Eastern District of New York, Case No. 2:26-cv-02195. The defendants: Georgette Powell and a network of co-defendants alleged to have operated a staged-collision enterprise built specifically around the Uber platform. The complaint documents eight staged collisions between August 2023 and March 2025. Named participants. Documented patterns. Perkins Coie handled Uber's position. Marshall-Dennehy handled Liberty Mutual's.",
    },
    {
      type: "pullquote",
      text: "Two federal RICO complaints, two different courts, two different fraud theories — filed within four days of each other. That is not a coincidence. That is a strategic shift.",
    },
    {
      type: "paragraph",
      text: "These are not related cases. The Allstate complaint is about medical billing fraud in Texas. The Uber complaint is about staged collisions in New York. The companies involved do not share counsel, do not share defendants, and are not coordinating litigation strategy. What they share is a decision: take documented fraud patterns out of the claims cost column and put them into federal court under RICO.",
    },

    // --- Section 2: Why RICO ---
    { type: "heading", text: "Why RICO? The Math Behind Treble Damages" },
    {
      type: "paragraph",
      text: "The Racketeer Influenced and Corrupt Organizations Act was originally designed to target organized crime. Its civil provisions, codified at 18 U.S.C. Section 1964(c), allow any person injured by a pattern of racketeering activity to sue for treble damages and attorney fees. The key word is treble. Every dollar of documented fraud becomes three dollars in a successful RICO judgment.",
    },
    {
      type: "paragraph",
      text: "The threshold for a civil RICO claim requires a pattern of racketeering activity, meaning at least two predicate acts within a ten-year period, connected by a common scheme. In both the Allstate and Uber complaints, the predicate acts are mail fraud and wire fraud tied to false billing records and staged claim submissions. The pattern requirement is what makes documentation so important. A single fraudulent claim is a fraud claim. Eight staged collisions across eighteen months, connected by the same participants and the same platform, is a RICO enterprise.",
    },
    {
      type: "callout",
      text: "The distinction matters because it changes the economics of litigation. A successful fraud recovery returns what was taken. A successful RICO recovery returns three times what was taken, plus attorney fees. For a network that has been running for years, the damages exposure is not the current billing amount. It is every provable act going back to when the pattern began.",
    },
    {
      type: "paragraph",
      text: "Fee-shifting is the other piece that makes RICO attractive to plaintiffs. In standard American litigation, each side bears its own attorney fees. RICO provides a statutory exception: the prevailing plaintiff recovers attorney fees from the defendant. That shifts the calculus for every carrier that has been reluctant to pursue fraud litigation because of cost. Under RICO, the cost of winning is recoverable.",
    },
    {
      type: "paragraph",
      text: "The risk is real. RICO plaintiffs face a high pleading standard. Courts require that the pattern of racketeering be pled with specificity — specific acts, specific dates, specific participants. Cases that survive a motion to dismiss are typically cases where the plaintiff has already done the document-level work to connect the defendants to specific fraudulent acts. That is why the data work precedes the litigation strategy.",
    },

    // --- Section 3: The Pattern Was in the Data First ---
    { type: "heading", text: "The Pattern Was in the Data Before the Case Was Filed" },
    {
      type: "paragraph",
      text: "Both complaints reveal something important about how these cases are built. The fraudulent patterns existed in the data long before they became RICO cases. Neither Allstate nor Uber filed because they suddenly discovered fraud. They filed because they had documented enough specific predicate acts — dates, amounts, participants, conduct — to meet the pleading standard. That documentation work happened first.",
    },
    {
      type: "paragraph",
      text: "In the Allstate complaint, the key evidence is a referral network built around pre-printed forms. Cooperating chiropractors allegedly used standardized referral documents to route patients into Roopani facilities for a predetermined course of treatment, regardless of individual medical need. The forms are described in the complaint. The pattern they created — predictable referral to predictable treatment to predictable billing — was visible in the claims data as a structural anomaly before it became an exhibit in a federal case.",
    },
    {
      type: "paragraph",
      text: "In the Uber complaint, the evidence is eight staged events across eighteen months tied to the same claimant networks. The complaint does not allege that Uber stumbled onto a fraud operation. It alleges that Uber and Liberty Mutual identified a pattern — same participants, same collision dynamics, same claiming behavior, same platform — and built a case around that pattern. The enterprise existed before anyone named it.",
    },
    {
      type: "pullquote",
      text: "The pattern was there. It was in the data. The question was whether anyone was looking at the data the right way.",
    },
    {
      type: "paragraph",
      text: "This has a direct implication for any claims or legal team managing a portfolio at scale. The fraud that will become a RICO case in 2027 is already generating signals in your current data. The same claimants, the same treating providers, the same plaintiff firms, the same venue concentrations. The enterprise described in the Uber complaint ran for at least eighteen months before it became a federal case. The Roopani network in the Allstate complaint operated long enough to accumulate $7.9 million in alleged fraudulent billing before anyone sued.",
    },
    {
      type: "paragraph",
      text: "The question for your litigation portfolio is not whether this kind of fraud exists in your book. It does. The question is whether your team can see it before the exposure compounds to the point where litigation is the only option left.",
    },

    // --- Section 4: What This Means for Your Program ---
    { type: "heading", text: "What This Means for Your Program" },
    {
      type: "paragraph",
      text: "Most legal and claims teams are not set up to detect these patterns. They are set up to process individual claims, respond to filed suits, and manage spend against reserves. These are reactive functions. The fraud detection that precedes a RICO complaint is an analytical function — one that requires looking across the portfolio for structural anomalies, not inside individual cases for merit.",
    },
    {
      type: "paragraph",
      text: "What Allstate found is a referral network. What Uber found is a collision enterprise. In both cases, the signal is cross-case correlation: the same actors appearing repeatedly across different claims, in patterns that exceed what random chance would produce. A single claim with a Roopani-affiliated provider is noise. Forty claims from the same referral pathway over two years is a pattern. The difference is whether you are looking at individual claims or looking at the portfolio.",
    },
    {
      type: "callout",
      text: "If your team reviews claims individually and your data lives in separate systems — claims platform, billing records, outside counsel notes — you cannot see the cross-case patterns that produce a RICO complaint. You will see the individual transactions. You will not see the enterprise.",
    },
    {
      type: "paragraph",
      text: "Building this capability does not require building a new technology platform. It requires consolidating the data that already exists in your claims system, your billing records, and your litigation history — and running it against the cross-case patterns that indicate organized activity. The raw material is already there. The question is whether it has been organized in a way that surfaces the signal.",
    },
    {
      type: "paragraph",
      text: "The carriers and corporations that are ahead of this problem are not the ones with the most sophisticated technology. They are the ones that started looking at their portfolios as portfolios — as interconnected collections of cases where patterns across cases matter as much as the facts inside any single one. That shift in perspective is the prerequisite for everything that follows.",
    },

    // --- Section 5: The Broader Pattern This Week ---
    { type: "heading", text: "One More Thing Worth Noting" },
    {
      type: "paragraph",
      text: "Two RICO filings in four days is not standard. The timing is almost certainly coincidental — these cases were built independently, over months, by separate legal teams. But the coincidence surfaces something real: the number of organizations willing to use RICO as an offensive tool against organized fraud is growing. The legal theory has been available for decades. What changed is the willingness to invest in the documentation work that makes a RICO case viable.",
    },
    {
      type: "paragraph",
      text: "The New Yorker published its investigation into staged-crash fraud in New Orleans the same week — Patrick Radden Keefe reporting on a network of attorneys and organizers who staged tractor-trailer accidents along a fourteen-mile stretch of Interstate 10. The federal informant in that case was murdered. Several attorneys were convicted by a jury this month. When that investigation runs in The New Yorker, the conversation about fraud moves out of trade publications and into boardrooms.",
    },
    {
      type: "paragraph",
      text: "These are signals. The fraud that has existed in your claims data for years is becoming visible — in federal complaints, in long-form journalism, in legislative hearings. The legal departments and claims teams that have already built the analytical capability to see these patterns will be ahead of that conversation. The ones that have not will be catching up.",
    },
    {
      type: "paragraph",
      text: "If you want to know where your own portfolio has blind spots — not in the abstract, but mapped specifically against what these kinds of patterns look like in practice — the Executive Briefing is a six-question diagnostic built for exactly that. It takes about four minutes and produces a specific readout of where your program has visibility and where it does not.",
    },
    {
      type: "paragraph",
      text: "litigationsentinel.com/briefing",
    },
  ],
};

export const ALL_ARTICLES: NewsletterArticle[] = [
  CARRIER_RICO_ARTICLE,
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
