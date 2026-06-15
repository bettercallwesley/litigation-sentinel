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

// ISSUE is exported at the bottom of this file: its date is DERIVED from the
// newest article record (B7, WES-PROXY-5: computation over reminder), with a
// build-failing staleness assertion on the issue-number bump record.

export const FEATURED_ARTICLE: NewsletterArticle = {
  slug: "judge-fires-both-sides-ai",
  section: "Litigation Tech",
  tag: "Case Watch",
  title: "'A Rubberstamp,' Judge Aycock Wrote, Then Removed All Four Lawyers Over AI",
  subtitle:
    "A federal judge in Mississippi read the briefs on both sides of her courtroom, found fabricated cases on every one, and did something no court had done before: removed all four lawyers, plaintiff and defense, for trusting the same machine.",
  readTime: "4 min read",
  author: "Wesley Todd",
  date: "June 13, 2026",
  trending: true,
  content: [
    { type: "paragraph", text: "On June 8, 2026, Senior U.S. District Judge Sharion Aycock looked at the briefs filed on both sides of her courtroom and called one lawyer's conduct \"a prime example of the risk associated with serving as a rubberstamp when acting as local counsel.\" Then she did something no federal judge had done before. She [removed every attorney from the case](https://www.abajournal.com/news/article/federal-judge-terminates-4-plaintiff-and-defense-attorneys-over-ai-errors). Plaintiff and defense. All four." },
    { type: "paragraph", text: "The case was Withers v. City of Aberdeen, a civil matter in the Northern District of Mississippi. It is the kind of docket that never makes headlines. It made one anyway." },
    { type: "paragraph", text: "The trouble was in the citations. Briefs from both sides leaned on cases that did not exist. The quotes were invented. The holdings were invented. The reporter volumes pointed nowhere. Aycock read them, checked them, and found the same fingerprint on filings from opposing camps that agreed on nothing else. Generative AI had written the law, and no human had checked whether the law was real." },
    { type: "paragraph", text: "Four lawyers signed those filings. Aycock named each one." },
    { type: "paragraph", text: "Kathleen M. Wilson, admitted pro hac vice from Louisiana, led for the plaintiff. Shauncey Hunter Ridgeway, a Mississippi attorney, served as her local counsel. Kathryn Y. Williams, admitted pro hac vice from Texas, led for the defense. Mark McClinton, also of Mississippi, was her local counsel. Two out-of-state specialists. Two in-state names on the signature block whose job was to stand behind the work." },
    { type: "paragraph", text: "That second job is where Aycock's anger settled. Local counsel exists so that someone licensed in the district vouches for what gets filed. The signature is a promise. Aycock found the promise empty. The local lawyers had passed the briefs through without reading the cases inside them. In an era of rampant unverified AI usage, she wrote, the rubberstamp is the risk." },
    { type: "paragraph", text: "The court did not accept the defense that nobody understood the tool. You do not get to sign a federal filing, put fabricated precedent in front of a judge, and then plead that the machine did it. The signature is yours. The duty to verify is yours. The machine has no bar card." },
    { type: "paragraph", text: "So Aycock priced the failure." },
    { type: "paragraph", text: "Wilson drew the heaviest fine, $3,500. Williams drew $2,500. The two local-counsel signatures, Ridgeway and McClinton, drew $1,000 apiece. The dollar figures are small. The next part is not." },
    { type: "paragraph", text: "Wilson and Williams, the two out-of-state lead attorneys, lost their pro hac vice status in the case and were barred from practicing in the [Northern District of Mississippi](https://www.uscourts.gov/court-locator) for two years. A federal court closed its doors to them. Two years is a long time to explain to a client why you cannot appear in a district where their matter sits." },
    { type: "paragraph", text: "Read the order on the [public docket](https://www.courtlistener.com/) and the symmetry is the story. Judges have sanctioned plaintiff lawyers for AI fabrications before. Judges have sanctioned defense lawyers for the same. What no court had done until June 8 was strike both sides of a single case in one order for the same sin. Aycock did not find a villain and a victim. She found a courtroom where every brief on the table was built on cases that were never decided." },
    { type: "pullquote", text: "A model wrote the law. A lead lawyer trusted it. A local lawyer signed it. A federal judge caught it." },
    { type: "paragraph", text: "The mechanism that failed is older than AI. Local counsel was the last human check, the licensed set of eyes that read what gets filed in a district court. That check was supposed to catch exactly this. It caught nothing. The briefs flowed up from a generative model, through an out-of-state lead, past a local name that signed without looking, and onto a federal judge's desk as if they were law." },
    { type: "paragraph", text: "The defense team here did not lose on the merits. It lost the right to appear. Outside counsel bills for judgment, for the human act of confirming that a cited holding exists and says what the brief claims it says. In Withers, that act never happened. The client's case caption now sits on a sanctions order, and the firm hired to protect that caption is the reason it is there." },
    { type: "paragraph", text: "The fines will be paid and forgotten. The two-year bar will not. Four lawyers walked into Withers v. City of Aberdeen on opposite sides. They walked out on the same one, removed by the same judge, for trusting the same machine. Aycock wrote the word that explains all of it. Rubberstamp. The court is closed to them now. The room is gone." },
  ],
};

export const LITIGATION_MANAGEMENT_DEAD_ARTICLE: NewsletterArticle = {
  slug: "litigation-management-is-dead",
  tag: "Deep Dive",
  title: "Litigation Management Is Dead. Here's What Replaces It.",
  subtitle:
    "For twenty years, 'litigation management' meant tracking spend and hoping your outside counsel told you the truth. That era is over. The companies pulling ahead are running on something fundamentally different — and it starts with a formula most legal departments have never seen.",
  readTime: "8 min read",
  author: "Wes Todd",
  date: "February 12, 2026",
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

export const SC_AI_HALLUCINATION_ARTICLE: NewsletterArticle = {
  slug: "sullivan-cromwell-ai-hallucination",
  section: "AI in Court",
  tag: "Breaking",
  title:
    "Sullivan & Cromwell Just Apologized for AI Hallucinations. Your Panel Firms Are Probably Next.",
  subtitle:
    "On April 18, one of the most prestigious law firms in the country sent a letter to a federal bankruptcy judge admitting roughly 40 AI-generated errors across multiple court filings. The firm has internal AI policies. The errors still landed in the record. Here is what carriers and corporate legal teams should take from this incident — and the trend behind it.",
  readTime: "7 min read",
  author: "Wes Todd",
  date: "April 25, 2026",
  trending: true,
  content: [
    { type: "heading", text: "What Happened: A Letter From a Top-Five Firm to a Federal Judge" },
    {
      type: "paragraph",
      text: "On Saturday April 18, 2026, Andrew Dietderich, co-head of Sullivan & Cromwell's global restructuring practice, sent a letter to Chief Bankruptcy Judge Martin Glenn of the United States Bankruptcy Court for the Southern District of New York. The subject of the letter was that AI tools had generated roughly 40 errors across multiple S&C filings in the Chapter 15 proceeding for Prince Global Holdings, a BVI-incorporated entity tied to a Cambodian conglomerate whose founder was indicted in Brooklyn federal court for forced-labor compounds and a multibillion-dollar investment fraud.",
    },
    {
      type: "paragraph",
      text: "The errors were not minor. Fabricated case citations. Wrong volume numbers. Pin cites pointing to nothing. Quoted parentheticals that did not appear anywhere in the actual cited cases. The errors were spread across the firm's emergency motion, verified petition, joint administration motion, scheduling motion, and supporting declarations — five separate documents.",
    },
    {
      type: "paragraph",
      text: "The firm's internal review process did not catch any of them. Boies Schiller Flexner did, on the other side of the case. Matthew Schwartz, the BSF chair representing Cambodian conglomerate founder Chen Zhi, raised the citations in correspondence with S&C. Within days the firm filed the apology letter and a redline correction.",
    },
    {
      type: "pullquote",
      text: "The inaccuracies and errors in the Motion include artificial intelligence ('AI') 'hallucinations.' We deeply regret that this has occurred.",
    },
    {
      type: "paragraph",
      text: "That apology, signed by Dietderich, also notes that the firm 'maintains comprehensive policies and training requirements governing the use of AI tools in legal work.' That last clause is the part to absorb. Sullivan & Cromwell is not a firm with a casual approach to AI. It has internal policies, training requirements, and review processes. Those controls failed to catch ungrounded AI output before it landed in federal court filings tied to billions of dollars in claims against an indicted defendant.",
    },

    { type: "heading", text: "Why This Is Not Isolated: The Trend Behind the Headline" },
    {
      type: "paragraph",
      text: "If S&C's controls were not enough, every legal department whose outside counsel uses AI in any drafting workflow has the same exposure on their books right now. The exposure does not show up on any conventional risk register because no one has yet built one for it.",
    },
    {
      type: "paragraph",
      text: "The S&C incident is also not an outlier. Researcher Damien Charlotin's public tracker now identifies more than 1,300 court filings worldwide that contain AI-generated hallucinations. The pace has steepened sharply: roughly two cases per week before spring 2025, two or three per day by fall 2025. 2026 is on the same curve.",
    },
    {
      type: "callout",
      text: "The cases that get press coverage are the ones with embarrassed Big Law firms attached. Most are happening at smaller firms and going through routine sanctions hearings without national attention.",
    },
    {
      type: "paragraph",
      text: "A representative sample from the past twelve months: the 6th Circuit at Cincinnati sanctioned two attorneys $30,000 in a single ruling for two dozen fabricated citations. The 5th Circuit sanctioned an attorney $2,500 for using vLex and Thomson Reuters CoCounsel without verifying the output. Two attorneys representing MyPillow CEO Mike Lindell in a Colorado defamation case were each fined $3,000 for a filing containing more than two dozen mistakes and citations of cases that did not exist. The Utah Court of Appeals sanctioned attorney Richard Bednar for a brief citing the non-existent case Royer v. Nelson, after his unlicensed law clerk drafted it from ChatGPT and Bednar filed it without verification.",
    },
    {
      type: "paragraph",
      text: "None of these firms had S&C's brand. All of them had the same root cause: an attorney trusted the model, did not verify the cited cases, filed the brief, opposing counsel ran the citations, the citations did not exist. The AI tool was almost always a general-purpose chatbot operating without grounding to a verified case-law database.",
    },
    {
      type: "paragraph",
      text: "The American Bar Association issued its first formal ethics opinion on the responsibilities of lawyers using generative AI in July 2024. The opinion did not slow the trend. Sanctions did not slow the trend. Internal firm policies, in S&C's case, did not slow the trend.",
    },

    { type: "heading", text: "The Carrier-Side Question Is Specific and Narrow" },
    {
      type: "paragraph",
      text: "Most carriers and corporate legal teams have not asked their panel firms a direct question about AI use in drafting workflows. The question is not philosophical. It is operational, and it has two parts:",
    },
    {
      type: "paragraph",
      text: "First: which of our panel firms are using AI in their drafting workflows? Most have not been asked the question directly. Many will not know exactly which workflows the answer covers — discovery summaries, motion drafting, deposition prep, settlement memos, status reports — because AI use has crept in by individual lawyer and individual practice group, not by firm-level rollout.",
    },
    {
      type: "paragraph",
      text: "Second: is the AI those firms use grounded? This is the technical question, and the answer determines the risk profile. Grounded AI works against a verified database — published case law from a reputable source, your own matter file, your own claim record — and refuses to generate text without a citation back to that source. Ungrounded AI is a general-purpose chatbot that produces fluent prose by predicting plausible next words. The two are not equivalent. One leaves audit trails. The other writes Mata v. Avianca all over again.",
    },
    {
      type: "callout",
      text: "If your panel firms are using AI in any drafting workflow without enforced per-citation verification, your filings carry the same risk profile as the S&C motion. The exposure is judges who lose patience with the carrier-counsel relationship, motions that get tossed for procedural defects, and adverse inferences in matters where opposing counsel finds fabricated citations first.",
    },
    {
      type: "paragraph",
      text: "The exposure is not just sanctions on the firm. It is the carrier-counsel relationship and the venue's perception of the carrier's program — both of which compound across cases far beyond the matter where the citation got caught.",
    },

    { type: "heading", text: "What Grounded AI Looks Like in Practice" },
    {
      type: "paragraph",
      text: "Grounded AI is not a marketing term. It refers to a specific architectural choice: the AI system retrieves source documents from a verified store, reasons over those retrieved documents, and refuses to produce text that cannot be cited back to a retrieved source. The design constraint is that hallucination becomes architecturally hard rather than aspirationally discouraged.",
    },
    {
      type: "paragraph",
      text: "In a litigation context, the verified source is your matter file. Pleadings, discovery responses, deposition transcripts, expert reports, claim records, and the cited body of governing case law — all retrieved at query time, all referenced inside the generated answer. A grounded litigation AI cannot tell you what the case stands for if no document in the matter file or the case-law database supports the claim. It returns 'no source found' instead of inventing a parenthetical.",
    },
    {
      type: "paragraph",
      text: "The contrast with general-purpose chatbots is straightforward. A chatbot trained on a snapshot of the public internet has read enough legal writing to produce plausible-looking citations. It has no enforced connection between the citation it produces and any actual case. The citation looks right because it follows the format. There is no system in place to verify the case exists, the volume number is correct, or the parenthetical accurately reflects the holding.",
    },
    {
      type: "paragraph",
      text: "The S&C incident is a clean illustration of the difference. The firm's internal policies likely required attorney verification of AI output. The verification did not happen at the per-citation level it needed to. A grounded system with retrieval citations would have made the verification mechanical — every claim in the brief either points to a real source in the matter file or a real case in the case-law database, and the system flags any text that does not.",
    },

    { type: "heading", text: "What to Do This Quarter" },
    {
      type: "paragraph",
      text: "Three concrete moves for any carrier or corporate legal department reading this:",
    },
    {
      type: "paragraph",
      text: "1. Survey your panel. Send a one-page question to every active outside firm asking which of their drafting workflows use AI, what tool, and what verification process is in place. Track the responses. The firms that cannot answer the second question have the highest exposure on your book.",
    },
    {
      type: "paragraph",
      text: "2. Update your billing guidelines to require per-citation verification for any filing produced with AI assistance. The language can be one paragraph. The point is not punitive enforcement. The point is that asking the question on the record changes the firm-side workflow.",
    },
    {
      type: "paragraph",
      text: "3. Audit your own internal AI usage on the same standard you are about to apply to your panel. Internal teams running AI for case strategy, settlement analysis, and brief review have the same hallucination exposure. Apply the grounded-vs-ungrounded test inside the company too.",
    },
    {
      type: "paragraph",
      text: "These three moves take a quarter to implement and produce a defensible risk posture by the time the next high-profile sanction lands. Given the trend line, that next sanction will arrive before the end of Q3.",
    },

    { type: "heading", text: "The Brief" },
    {
      type: "paragraph",
      text: "If you want to know specifically where your portfolio has visibility and where it does not — measured against the patterns these AI failures expose and the panel-firm question raised here — the Litigation Sentinel Executive Briefing is a six-question diagnostic built for exactly that. About four minutes. Produces a specific readout, not a generic one.",
    },
    {
      type: "paragraph",
      text: "litigationsentinel.com/briefing",
    },
  ],
};

export const ARTICLES: NewsletterArticle[] = [
  {
    slug: "judge-fires-both-sides-ai",
    section: "Litigation Tech",
    tag: "Case Watch",
    title: "'A Rubberstamp,' Judge Aycock Wrote, Then Removed All Four Lawyers Over AI",
    subtitle:
      "A federal judge in Mississippi read the briefs on both sides of her courtroom, found fabricated cases on every one, and did something no court had done before: removed all four lawyers, plaintiff and defense, for trusting the same machine.",
    readTime: "4 min read",
    author: "Wesley Todd",
    date: "June 13, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "On June 8, 2026, Senior U.S. District Judge Sharion Aycock looked at the briefs filed on both sides of her courtroom and called one lawyer's conduct \"a prime example of the risk associated with serving as a rubberstamp when acting as local counsel.\" Then she did something no federal judge had done before. She [removed every attorney from the case](https://www.abajournal.com/news/article/federal-judge-terminates-4-plaintiff-and-defense-attorneys-over-ai-errors). Plaintiff and defense. All four." },
      { type: "paragraph", text: "The case was Withers v. City of Aberdeen, a civil matter in the Northern District of Mississippi. It is the kind of docket that never makes headlines. It made one anyway." },
      { type: "paragraph", text: "The trouble was in the citations. Briefs from both sides leaned on cases that did not exist. The quotes were invented. The holdings were invented. The reporter volumes pointed nowhere. Aycock read them, checked them, and found the same fingerprint on filings from opposing camps that agreed on nothing else. Generative AI had written the law, and no human had checked whether the law was real." },
      { type: "paragraph", text: "Four lawyers signed those filings. Aycock named each one." },
      { type: "paragraph", text: "Kathleen M. Wilson, admitted pro hac vice from Louisiana, led for the plaintiff. Shauncey Hunter Ridgeway, a Mississippi attorney, served as her local counsel. Kathryn Y. Williams, admitted pro hac vice from Texas, led for the defense. Mark McClinton, also of Mississippi, was her local counsel. Two out-of-state specialists. Two in-state names on the signature block whose job was to stand behind the work." },
      { type: "paragraph", text: "That second job is where Aycock's anger settled. Local counsel exists so that someone licensed in the district vouches for what gets filed. The signature is a promise. Aycock found the promise empty. The local lawyers had passed the briefs through without reading the cases inside them. In an era of rampant unverified AI usage, she wrote, the rubberstamp is the risk." },
      { type: "paragraph", text: "The court did not accept the defense that nobody understood the tool. You do not get to sign a federal filing, put fabricated precedent in front of a judge, and then plead that the machine did it. The signature is yours. The duty to verify is yours. The machine has no bar card." },
      { type: "paragraph", text: "So Aycock priced the failure." },
      { type: "paragraph", text: "Wilson drew the heaviest fine, $3,500. Williams drew $2,500. The two local-counsel signatures, Ridgeway and McClinton, drew $1,000 apiece. The dollar figures are small. The next part is not." },
      { type: "paragraph", text: "Wilson and Williams, the two out-of-state lead attorneys, lost their pro hac vice status in the case and were barred from practicing in the [Northern District of Mississippi](https://www.uscourts.gov/court-locator) for two years. A federal court closed its doors to them. Two years is a long time to explain to a client why you cannot appear in a district where their matter sits." },
      { type: "paragraph", text: "Read the order on the [public docket](https://www.courtlistener.com/) and the symmetry is the story. Judges have sanctioned plaintiff lawyers for AI fabrications before. Judges have sanctioned defense lawyers for the same. What no court had done until June 8 was strike both sides of a single case in one order for the same sin. Aycock did not find a villain and a victim. She found a courtroom where every brief on the table was built on cases that were never decided." },
      { type: "pullquote", text: "A model wrote the law. A lead lawyer trusted it. A local lawyer signed it. A federal judge caught it." },
      { type: "paragraph", text: "The mechanism that failed is older than AI. Local counsel was the last human check, the licensed set of eyes that read what gets filed in a district court. That check was supposed to catch exactly this. It caught nothing. The briefs flowed up from a generative model, through an out-of-state lead, past a local name that signed without looking, and onto a federal judge's desk as if they were law." },
      { type: "paragraph", text: "The defense team here did not lose on the merits. It lost the right to appear. Outside counsel bills for judgment, for the human act of confirming that a cited holding exists and says what the brief claims it says. In Withers, that act never happened. The client's case caption now sits on a sanctions order, and the firm hired to protect that caption is the reason it is there." },
      { type: "paragraph", text: "The fines will be paid and forgotten. The two-year bar will not. Four lawyers walked into Withers v. City of Aberdeen on opposite sides. They walked out on the same one, removed by the same judge, for trusting the same machine. Aycock wrote the word that explains all of it. Rubberstamp. The court is closed to them now. The room is gone." },
    ],
  },
  {
    slug: "panish-176m-then-21m-more",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "Brian Panish Won $176M in Van Nuys. A Week Later the Jury Added $21M.",
    subtitle:
      "A record compensatory verdict closed every news cycle, then the same jury came back a week later with punitive damages no reserve model prices. For an auto book, the lesson is the timing, not the dollars.",
    readTime: "4 min read",
    author: "Wesley Todd",
    date: "June 13, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On June 3, 2026, a Van Nuys jury handed Brian Panish a [$176 million verdict](https://www.mpacorn.com/articles/jury-tags-grossman-erickson-with-additional-22-17m-in-punitive-damages/) against Rebecca Grossman and Scott Erickson. The number was already a record. Then the trial did not end." },
      { type: "paragraph", text: "The case was Iskander v. Grossman. Two boys, Mark and Jacob Iskander, ages 11 and 8, were killed in a marked crosswalk on Triunfo Canyon Road in Westlake Village in 2020. Two Mercedes SUVs. One of them driven by Grossman, a former Hidden Hills socialite now serving 15 years to life for their deaths. The jury found both drivers liable for $176 million in compensatory damages to the parents. Panish had asked for $439 million. He did not get it. He got the next phase." },
      { type: "paragraph", text: "A week later, on June 10, the same jury came back with punitive damages. [$21 million against Grossman](https://www.foxla.com/news/grossman-civil-trial-punitive-phase-176m-verdict). $1.17 million against Erickson. The total climbed to roughly $198 million. The headline number that closed every news cycle the week before was now wrong by twenty-two million dollars." },
      { type: "paragraph", text: "This is the part that should hold a reserve actuary's attention. The verdict did not arrive whole. It arrived in two pieces, a week apart, and the second piece was a punitive award that no compensatory model prices." },
      { type: "paragraph", text: "Reserves get set the moment a claim looks serious. A carrier or a self-insured fleet looks at the facts, the venue, the plaintiff firm, and books a number. That number is a guess about where the case lands. When a verdict comes in, the guess resolves. The book moves. The reinsurance treaty either attaches or it does not, depending on whether the loss pierces the layer." },
      { type: "paragraph", text: "A single-day verdict is clean. You read the figure, you true up the reserve, you cede what belongs above the retention, and you close the file. A verdict that grows after the headline is not clean. The compensatory number resolves one set of reserves. Then a second number lands on top of it, days later, after the file already looked settled in the ledger. The reinsurance attachment point that was comfortably clear of the $176 million figure may sit right inside the $198 million figure. The same loss now pierces a layer it did not pierce on June 3." },
      { type: "paragraph", text: "Punitive damages are the tail that compensatory models do not carry. Compensatory loss is bounded by something real. Medical bills, lost earnings, the value a jury puts on grief. It is large here, but it is anchored. Punitive damages are anchored to nothing but the jury's appetite to punish. [Panish called the punitive phase](https://www.mpacorn.com/articles/jury-tags-grossman-erickson-with-additional-22-17m-in-punitive-damages/) \"the most important part of the trial.\" He told the jury to punish and deter. That is a number with no ceiling and no actuarial input. It is the developing tail on an auto file, and it shows up after the case already read as resolved." },
      { type: "pullquote", text: "Act one is the record compensatory verdict that makes the news. Act two is the punitive phase, days later, where the number grows again." },
      { type: "paragraph", text: "For an auto book, the structural lesson is the timing, not the dollars. The dollars are someone else's problem in this particular case, because Grossman is a convicted criminal whose conduct likely strips coverage clean off the loss. But the mechanism is general. The plaintiff bar in Los Angeles now runs a two-act trial. Act one is the record compensatory verdict that makes the news. Act two is the punitive phase, days later, where the number that was already a record grows again. Panish won a [$488 million verdict](https://markets.financialcontent.com/prnews.investoruprising/article/bizwire-2025-7-18-panish-shea-ravipudi-llp-obtains-488-million-jury-verdict-for-pedestrian-left-comatose-after-being-struck-by-city-of-los-angeles-sanitation-truck) for a single pedestrian last year. He runs this play at scale." },
      { type: "paragraph", text: "A reserve set on the compensatory verdict is a reserve set before the trial is over. The file is not done when the big number prints. It is done when the punitive jury comes back. Anyone who trued up reserves on June 3 trued them up to a number that was about to move." },
      { type: "paragraph", text: "The reinsurance question is sharper still. Treaties attach at a point. A loss that crosses the point in two installments, on two dates, with the second installment driven by a punitive standard no model forecasts, is a loss that tests whether the attachment math was built for a verdict that arrives once or a verdict that keeps arriving." },
      { type: "paragraph", text: "Panish has built a machine that makes verdicts grow after the headline. The reserve and the treaty were built for verdicts that stop. One of those two things is wrong. Right now it is the books." },
    ],
  },
  {
    slug: "mccabe-101m-north-carolina-record",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "A Retaining Wall Fell in Hendersonville. John McCabe Won a $101M State Record.",
    subtitle:
      "A concrete wall came down on three men at a plumbing supply yard in 2021. Five years later it became the largest personal injury verdict in North Carolina history, and a comparable that now reprices every premises file in the state.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 13, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "In Hendersonville, on a workday in 2021, a concrete block retaining wall at a plumbing supply business on Spartanburg Highway came down on three men. One died where he stood. Two more were crushed and lived. Five years later, on May 19, 2026, a Henderson County jury put a number on what that wall did, and lawyer John McCabe walked out with [$101 million](https://nclawyersweekly.com/2026/05/27/jury-returns-record-award-in-tragic-retaining-wall-failure-case/) in compensatory damages." },
      { type: "paragraph", text: "The lawyers believe it is the largest personal injury jury verdict ever recorded in North Carolina. A spouse lost the life she had built around one of those men. The case that started as a routine workplace claim became a state record." },
      { type: "paragraph", text: "The case is Valdez v. Hajoca Corporation. Judge Steve Warren presided in [Henderson County Superior Court](https://www.nccourts.gov/locations/henderson-county). The verdict came down May 19, 2026. The plaintiffs were a worker who was killed, two workers who survived catastrophic injury, and a spouse with a loss of consortium claim." },
      { type: "paragraph", text: "Read the injury list and the dollar figure stops looking abstract. Crush injuries. Multiple facial fractures. Lost teeth. A subarachnoid hemorrhage. Pelvic fractures. Acute renal injury. A herniated disc. One survivor walked away with a shattered femur, broken feet, and PTSD that does not show up on an X-ray. These are not paper plaintiffs. They are men a wall fell on." },
      { type: "paragraph", text: "The lawyer who carried it is John McCabe. The [Law Offices of John M. McCabe](https://nclawyersweekly.com/2026/05/27/jury-returns-record-award-in-tragic-retaining-wall-failure-case/) sits in Cary, two and a half hours east of the mountain town where the wall stood. He did not try it alone. Brian and Beth Davis of Davis Law Group came in from Asheville, local to the courthouse. Meredith Hinton of Ricci Law Firm worked it out of Greenville. Alicia Campbell flew in from Saint Louis. That is a five-firm, three-city plaintiff bench built for one room. The defense read the roster the way you read a loaded courtroom. It signals a verdict, not a settlement." },
      { type: "paragraph", text: "\"This verdict reflects the extraordinary courage of our clients and the commitment of the jury to delivering justice,\" McCabe said after the panel came back. Plain words. They land harder than the number, which is the point of saying them." },
      { type: "paragraph", text: "Now move to the side of the table that pays. A retaining wall on commercial property is a premises and general-liability exposure. Somebody underwrote that plumbing supply yard. Somebody set a reserve when the loss came in five years ago. The question for any chief claims officer is whether the number on that reserve had a one and two commas in front of it, or whether it had a comfortable five-figure handle that nobody revisited while the file aged." },
      { type: "paragraph", text: "This is the part the trade press skips. A nuclear premises verdict does not arrive as a surprise on verdict day. It arrives as a [retaining-wall claim](https://nclawyersweekly.com/2026/05/27/jury-returns-record-award-in-tragic-retaining-wall-failure-case/) that looked like a workers comp matter, then a third-party suit, then a multi-plaintiff action, then a five-firm trial team, then a record. Every step up that ladder was a reserve signal. The signal was there in 2021. The bill arrived in 2026." },
      { type: "pullquote", text: "Comparables drive reserves. Reserves drive reinsurance. A single verdict in a mountain county reprices an entire category." },
      { type: "paragraph", text: "A fatality with two catastrophic co-plaintiffs and a consortium claim is the exact fact pattern that runs past a policy limit and into the carrier's own exposure. When the verdict clears nine figures, the primary tower is gone in the first breath. Excess gets the rest. And the reserve adequacy review that should have flagged this file becomes a postmortem about why it did not." },
      { type: "paragraph", text: "North Carolina did not have a hundred-million-dollar personal injury verdict before this one. Now it has a ceiling, and a plaintiff bar that knows the ceiling can be reached. That changes the next retaining-wall file, the next scaffold collapse, the next loading-dock fatality in the state. Every adjuster pricing a premises death in North Carolina now has a comparable that did not exist three weeks ago. Comparables drive reserves. Reserves drive reinsurance. A single verdict in a mountain county reprices an entire category." },
      { type: "paragraph", text: "The defense will appeal. Big verdicts often shrink on the back end through remittitur or settlement. None of that reaches the men in the injury list, and none of it un-rings the bell for the next claims file. The record is the record. It is real on May 19, and it is real for the underwriter pricing the renewal in July." },
      { type: "paragraph", text: "This was never only a courtroom story. It was a reserve story wearing a courtroom. The wall fell once. Everything after it kept falling. The loss, the suit, the five-firm trial team, the verdict, the appeal, and the comparable that now haunts every premises file in the state. The number that matters is not the $101 million on the Henderson County docket. It is the quiet five-figure reserve sitting on some other retaining-wall claim right now, the one that still reads like a workers comp matter. In 2021, so did this one." },
    ],
  },
  {
    slug: "paying-verdict-no-bad-faith-shield",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "AmGUARD Paid Its $31,330 Verdict in Florida. The Bad-Faith Suit Came Back Anyway.",
    subtitle:
      "A carrier paid the underlying verdict and argued the check closed the matter. Florida's Fourth District said the check closed nothing, and the carrier's own defense theory is what revived the bad-faith suit.",
    readTime: "4 min read",
    author: "Wesley Todd",
    date: "June 13, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On June 10, 2026, Florida's Fourth District Court of Appeal handed AmGUARD Insurance Company a loss it had already paid for. AmGUARD wrote the check on the underlying $31,330 verdict. It argued that the check closed the matter. The Fourth District said the check closed nothing. The bad-faith suit AmGUARD thought it had bought its way out of is alive again, and the carrier's own defense theory is what put it there." },
      { type: "paragraph", text: "The dispute traces to a 2017 ceiling collapse in the dining room of a restaurant insured under an AmGUARD commercial policy. The fire department called the building unsafe. The policyholder, Healthy Food Experts LLC, filed for business personal property and business income losses. AmGUARD investigated, then denied most of it. It agreed to pay food spoilage and little else. What AmGUARD did not do, according to the [appellate record reported by Business Insurance](https://www.businessinsurance.com/court-revives-restaurants-bad-faith-suit-against-insurer/), was hand over the reports its own engineer and field adjuster had written. Those reports said the collapse was sudden and accidental. That language matters, because sudden-and-accidental is the trigger the policy covered. The carrier sat on the documents that pointed toward coverage and paid as if they did not exist." },
      { type: "paragraph", text: "The case went to a jury on the contract question. The jury found that defective construction and hidden decay caused the collapse. Both were covered perils. It awarded Healthy Food Experts $31,330, [a figure later confirmed in the appellate coverage](https://www.businessinsurance.com/court-revives-restaurants-bad-faith-suit-against-insurer/). Small number. Hold that thought." },
      { type: "paragraph", text: "Then the strategy that decides most of these fights kicked in. AmGUARD paid the verdict and moved to end the separate bad-faith claim. Its argument had two legs. First, paying the contract damages mooted the extracontractual case, because there was nothing left to litigate. Second, a first-party bad-faith claim requires an excess judgment, a verdict larger than the policy limits, and there was no excess judgment here. The trial court bought it and dismissed. For a moment AmGUARD had the outcome every carrier wants. Pay the smallest possible number, and the bad-faith exposure dies with it." },
      { type: "paragraph", text: "The Fourth District read the law the other way. It held that the trial court had it backward. The contract verdict, the panel reasoned, fixes one thing and one thing only. As [Insurance Business America reported](https://www.insurancebusinessmag.com/us/news/breaking-news/florida-court-revives-bad-faith-suit-after-insurer-pays-the-verdict-578610.aspx), the court found the verdict settles the contract damages alone and does not block a separate claim for the extracontractual damages bad faith can cause. The two cases ask different questions. One asks what the policy owed. The other asks what the carrier's conduct cost beyond the policy. Paying the first answer does not pay the second." },
      { type: "paragraph", text: "Then the court took out the carve-out AmGUARD had leaned on hardest. The panel rejected the argument that an excess judgment is a required element of a first-party bad-faith claim. That holding is the heart of it. AmGUARD had tried to import a rule from third-party bad faith, where the classic harm is a judgment that buries the insured above the limits, and graft it onto a first-party case. The court declined. A first-party policyholder does not have to wait for a runaway verdict to be harmed. The harm can be the carrier's handling itself. By tying the bad-faith case to an excess judgment that would never exist in a $31,330 dispute, AmGUARD had built a shield that, if the court had blessed it, would have made first-party bad faith unprovable in every small-loss claim. The court would not blink it into law." },
      { type: "pullquote", text: "The conduct is the claim. The conduct does not settle." },
      { type: "paragraph", text: "That is why the dollar figure is the least interesting number in the opinion and the most important one. A $31,330 verdict could never produce an excess judgment. Under AmGUARD's theory, that mathematical fact alone would have immunized the claim handling. The Fourth District just told every Florida carrier that the size of the loss is not a license. The extracontractual case rides on conduct, not on the magnitude of the check." },
      { type: "paragraph", text: "For a claims operation, the reframe is blunt. The bad-faith exposure is not capped by the verdict and it does not vanish when the verdict gets paid. It attaches to how the file was worked, what was disclosed, and when. The undisclosed engineer report is the fact pattern that loses these cases, and paying the contract number afterward does not bury it. The conduct is the claim. The conduct does not settle." },
      { type: "paragraph", text: "AmGUARD paid. AmGUARD lost anyway. The suit is back." },
    ],
  },
  {
    slug: "sublimit-held-bec-loss",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "A $250K Cyber Cap Swallowed Perry's $874,863 Loss. In Texas, the Sublimit Held.",
    subtitle:
      "Two fraudulent wires, one social-engineering scam, and a policyholder's argument that two invoices meant two claims. A Texas federal court called it bookkeeping and held the cap, the mirror image of the CiCi's matter that ran the other way.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 13, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On December 19, 2023, an email landed in the inbox of a Texas builder. It looked like the steel vendor. It asked for payment on two open invoices. The next day Perry & Perry Builders wired the money. First $601,866.25. Then $272,997.45. The two transfers went out less than one minute apart. Both went to fraudsters." },
      { type: "paragraph", text: "The total loss was $874,863.70. The check the carriers wrote was for $250,000. On [March 9, 2026, a federal judge in the Western District of Texas](https://www.jdsupra.com/legalnews/texas-federal-court-applies-single-8771005/) said that was the whole bill." },
      { type: "paragraph", text: "Perry sued Cowbell Cyber and Obsidian Specialty for the rest. The policy carried a cyber-crime loss limit. Perry's read was simple. Two invoices, two transfers, two separate claims. Pay the limit twice. Get to $500,000. Cut the gap roughly in half." },
      { type: "paragraph", text: "The court did not buy it. The policy contained a Breach Fund Separate Limit Endorsement. That endorsement capped cyber-crime loss at $250,000 [regardless of the number of claims or cyber-crime incidents](https://natlawreview.com/article/texas-federal-court-reinforces-single-limit-social-engineering-loss-arising). One scam. One social-engineering event. One limit. The number of wires Perry chose to send did not change the math." },
      { type: "paragraph", text: "The language the judge used is the part that decided the money. Perry was, in the court's words, \"hard-pressed to make the argument that the number of claims or losses that it can assert under the policy depends on its own bookkeeping choices.\" The number of claims is not a thing a policyholder gets to manufacture by splitting a payment. The endorsement caps \"what defendants must pay for all of Perry's cyber losses during the policy period, regardless of the number and value of each such loss.\" All. During the policy period. Full stop." },
      { type: "paragraph", text: "This is the case that runs the other way." },
      { type: "paragraph", text: "Three weeks ago Litigation Sentinel covered the [CiCi's matter](https://litigationsentinel.com/article/judge-capped-nothing), where a court read an ambiguous sublimit against the carrier and let the full loss through. The lesson there was that a sublimit written loosely is not a cap at all. Perry is the mirror. Same product line. Same kind of fraud. Opposite outcome. The difference was not luck. It was drafting." },
      { type: "paragraph", text: "Read the two opinions side by side and a rule emerges. A sublimit holds when the endorsement does three things. It names the peril. It states the dollar cap. And it forecloses the multiplication argument with a phrase like \"regardless of the number of claims.\" The Breach Fund endorsement in the Perry policy did all three. The court never had to reach for ambiguity, because there was none to reach for. The cap was the cap." },
      { type: "pullquote", text: "Same line of business. Two completely different tail profiles. The only thing standing between them is the sentence that defines a claim." },
      { type: "paragraph", text: "For a carrier, that is the entire ballgame. Social-engineering fraud is the loss that scales fastest in the cyber book. A single spoofed vendor email can move seven figures in two clicks. The premium does not scale with it. The only thing standing between a $250,000 expectation and an $874,863 demand is the sentence that defines a claim. When that sentence is clean, the sublimit does the work the underwriter priced it to do. When it is loose, the policyholder's lawyer turns one scam into as many claims as there were invoices." },
      { type: "paragraph", text: "Perry tried exactly that. The court called it bookkeeping. The word matters. It tells you how a judge views the multiplication move when the endorsement is tight. Not as a coverage question. As an accounting trick." },
      { type: "paragraph", text: "The economic stakes sit on the claims side of the house. A carrier that wins this fight pays $250,000 and closes the file. A carrier that loses it pays twice, or pays the full loss, and then watches every other insured with a split-payment fraud cite the same theory. One loose endorsement does not cost one claim. It reprices the book. That is why the drafting is not a back-office detail. It is the reserve." },
      { type: "paragraph", text: "The two outcomes split on the same fault line. Where the endorsement reads like Cowbell's, the exposure stops at the sublimit and the loss the carrier eats is the $250,000 it wrote. Where it reads like the CiCi policy, the exposure is the loss itself, and the loss is whatever a fraudster can move before the wire clears. Same line of business. Two completely different tail profiles. The only thing standing between them is the sentence that defines a claim. Perry turned on that sentence. So did CiCi. They turned in opposite directions." },
      { type: "paragraph", text: "The fraud took two minutes. The fight over what it cost took most of a year. Perry walked away $624,863.70 short of whole. The carriers paid what they wrote down. The endorsement said $250,000. The court said $250,000. This time the words held." },
    ],
  },
  {
    slug: "greater-ny-mutual-liakas-rico",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "The Carrier Is the Plaintiff Now. Greater NY Mutual Filed RICO Against a Brooklyn Firm.",
    subtitle: "An insurer became the plaintiff and pointed federal RICO, the racketeering statute built for the mob, at a plaintiffs' firm. Its Exhibit A: a celebration photo of a man the carrier says swore he could not dress himself.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 5, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "A personal-injury claimant testified, the complaint says, that he was hurt badly enough he could not dress himself without help. Greater New York Mutual Insurance Company says it then produced a photo of the same man at a bar, and that when asked about it he confirmed he was out celebrating a soccer tournament his team had won. On January 27, 2026, the carrier dropped that photo into a federal racketeering complaint in Brooklyn. The image, Greater New York Mutual alleges, captures eleven people it says are responsible for twelve injury lawsuits, in a single frame." },
      { type: "paragraph", text: "That is the image at the center of [Greater New York Mutual Insurance Company v. Liakas Law, P.C.](https://www.courtlistener.com/docket/72191529/greater-new-york-mutual-insurance-company-v-liakas-law-pc/), docket [1:26-cv-00450](https://dockets.justia.com/docket/new-york/nyedce/1:2026cv00450/541193) in the United States District Court for the Eastern District of New York. And the strange thing about it is who filed it. For decades, an insurer in a personal-injury fight is the defendant. It writes the check or it fights the demand. Here the carrier is the plaintiff. It is the one bringing the claim. It is the one accusing a plaintiffs' firm of running a crime." },
      { type: "paragraph", text: "The defendants include the firm, Liakas Law, P.C., two of its principals, Dean N. Liakas and Nicholas E. Liakas, and a litigation funder, Jumpstart Funding LLC. The complaint also points to the firm's special counsel, Ali Najmi. The cause of action is civil RICO. That is the federal racketeering statute built for the mob. Greater New York Mutual is pointing it at a law firm." },
      { type: "paragraph", text: "The theory is an enterprise. Not one bad case. A machine. The complaint describes a coordinated association of a plaintiffs' firm, medical clinics and doctors, and litigation funders, working together. The firm brings the lawsuits. The clinics supply the treatment and the paper. The funders supply the cash. Money moves through the loop and comes out the other side as settlement demands." },
      { type: "paragraph", text: "The predicate acts are the ordinary stuff of fraud. Mail fraud. Wire fraud. Travel Act violations. The pattern, the carrier alleges, is the manufacture of injuries that did not happen, or did not happen the way the file says they did." },
      { type: "paragraph", text: "The recruitment is where it turns ugly. The complaint alleges that runners found vulnerable people. Often undocumented. Often immigrants with no good reason to trust the courts and every reason to take the cash. The runners, the carrier says, steered them into staged or exaggerated trip-and-fall accidents at sites across New York State. Then, it alleges, the claimants were routed through medical procedures they did not need, the records were dressed up, and the demand letters went out inflated." },
      { type: "paragraph", text: "The man in the photo is one face of that. The complaint reportedly carries other exhibits in the same key. A woman whose injury claim sits next to social-media posts of her bowling and dancing. The point of each, the carrier says, is the same. The body in the medical file does not match the body in the photo. Greater New York Mutual is asking a federal judge to read the gap as fraud." },
      { type: "paragraph", text: "There is a real defense, and it is sharp. Liakas Law sent a spokesman, Hank Sheinkopf, who did not flinch. \"Big insurance files a baseless claim, seeks to vilify plaintiff lawyers, and watches the case fall apart once judicial scrutiny is applied,\" he said. \"Judges have consistently rejected these attempts because they are unsupported by facts or law.\" That is not noise. Greater New York Mutual filed two of these RICO suits at once, and an earlier carrier RICO suit of the same kind, against a different firm, was dismissed only months ago. Insurers have swung this bat before and missed. The firm knows it." },
      { type: "paragraph", text: "No dollar figure has surfaced. The complaint does not put a clean number on the loss in any record reachable without a PACER login. What the carrier asks for instead is treble damages. RICO triples whatever a jury finds. It also wants an injunction, which is the part that should keep a plaintiffs' firm up at night. A money judgment is a cost of business. An injunction is a court telling you how, and whether, you may keep practicing." },
      { type: "pullquote", text: "The fight has a name, and it did not come from the carrier. The insurance-defense bar coined it: the \"fraudemic.\"" },
      { type: "paragraph", text: "As appellate attorney [Tim Capowski](https://kahanafeld.com/team-member/tim-capowski-esq/) of Kahana Feld has documented, the industry now calls the wave of staged and inflated claims a \"fraudemic,\" a campaign rather than an accident. Greater New York Mutual is filing under that banner. The word frames a single firm as one node in something the industry says is everywhere, and it tells you the carriers plan to keep filing." },
      { type: "paragraph", text: "What happens next runs through the docket. Watch the [Eastern District of New York](https://www.courtlistener.com/docket/72191529/greater-new-york-mutual-insurance-company-v-liakas-law-pc/) for a motion to dismiss, the stage where suits of this kind have failed before. This one may follow, or it may not. The complaint is built on images a jury could see with its own eyes: a claimant who, the carrier says, swore he could not dress himself, smiling in a bar photo from around the same stretch of weeks. Greater New York Mutual is betting that picture is worth more than a brief." },
      { type: "paragraph", text: "For once, the insurer is the one who gets to swing first." },
    ],
  },
  {
    slug: "ninth-circuit-ai-citation-suspension",
    section: "Litigation Tech",
    tag: "Case Watch",
    title: "Two Cases That Never Existed. The Ninth Circuit Suspended Both Lawyers Six Months.",
    subtitle: "Other courts have fined lawyers for fake citations. The Ninth Circuit took the bar card, six months, after a typo defense did not survive contact with the page numbers.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 5, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On June 3, 2026, three judges of the Ninth Circuit put quotation marks around a case name to make a point. \"Eduardo v. Garland, 28 F.4th 742 (9th Cir. 2022),\" the panel wrote, was a case that \"do not exist and never existed.\" So was \"Lay v. Holder, 729 F.3d 962 (9th Cir. 2013).\" Both had been cited to the court in a brief signed by a member of its bar. \"We add quotation marks to the names of fabricated cases,\" the [order](https://cdn.ca9.uscourts.gov/datastore/opinions/2026/06/03/24-4790.pdf) reads, \"to distinguish them from real cases.\"" },
      { type: "paragraph", text: "The lawyer who filed them was Mike Singh Sethi of the Sethi Law Group in Orange, California. The brief was an immigration appeal, Lnu v. Blanche, No. 24-4790. Only Sethi's name was on the briefs. At oral argument, William Rounds, of Bill Rounds Attorney at Law PC, also in Orange, appeared for the petitioners instead. Judges Richard Paez, Carlos Bea, and Danielle Forrest sat on the panel. They did not buy what came next." },
      { type: "paragraph", text: "What came next was a typo defense. Sethi called the fabricated citations \"typographical errors\" in a Motion to Correct. At oral argument, Rounds tried a softer word. The intended citations, he said, were \"somewhat garbled,\" and \"it looks like it was a copy and paste error or something like that.\" The panel went and checked. There were real cases buried under the fakes. \"Eduardo v. Garland\" had started life as Udo v. Garland. \"Lay v. Holder\" had been Lai v. Holder. The volume numbers, the page numbers, the years, none of them lined up with the real ones either." },
      { type: "paragraph", text: "So the court did the math out loud. \"We have not identified any plausible explanation,\" the order states, \"for how innocent typographical or copy-paste errors could turn Udo v. Garland and Lai v. Holder into 'Eduardo v. Garland' and 'Lay v. Holder,' the clearly hallucinated citations.\" A slipped finger turns Udo into Odo. It does not turn Udo into Eduardo. The defense did not survive contact with the page numbers." },
      { type: "paragraph", text: "The fake cases were not the whole of it. Sethi had also pulled quotes out of two real opinions. He told the court that Kamalthas v. INS held \"An adverse credibility determination is not necessarily a death knell to CAT protection.\" He told the court that Avendano-Hernandez v. Lynch held \"The BIA must consider all evidence of record.\" Neither sentence appears in either opinion. The court read the opinions. The words were not there." },
      { type: "paragraph", text: "The panel was careful about where the line falls. \"The rules are not violated at the point of research and drafting,\" the order says, \"but at the point of signing and filing. If an attorney files a brief with cases or quotations that do not exist, it generally does not matter if he pulled the hallucination from the output of an artificial intelligence tool or from his own natural intelligence.\" The court noted, almost in passing, that legal AI tools from Westlaw and Lexis \"hallucinated 17% and 33% of answers, respectively,\" to a representative set of queries run in 2024, a point [legal observers flagged](https://reason.com/volokh/2026/06/03/ninth-circuit-on-ai-hallucinations/) within hours of the order. The tool was not on trial. The signature was." },
      { type: "paragraph", text: "And the signature kept making it worse. The court did not sanction Sethi and Rounds for the first bad cite. It sanctioned them for what they did after. \"At every subsequent step,\" the order reads, \"including a Motion to Correct, oral argument, the Response to the panel's Order to Show Cause, and more recent filings in other cases, the attorneys knowingly or recklessly made false statements to this Court.\" The typo story was offered, and held, and repeated. The panel named that as the real offense. \"The gravity of discipline we impose, including the temporary suspension of practice, is owed to this repeated failure of candor.\"" },
      { type: "paragraph", text: "Then it imposed it. Each lawyer was personally sanctioned $2,500, payable in twenty-one days to the Clerk of the US Courts in San Francisco. That number is not the headline. The headline is the next paragraph. \"Sethi and Rounds are hereby suspended from practice before this Court for a period of six months starting ten days after this Order is filed.\" On top of the suspension, every attorney at the firm must, for the next two years, file a statement under penalty of perjury in every filing, disclosing whether and how AI was used." },
      { type: "pullquote", text: "Other courts have fined lawyers for fake citations. The Ninth Circuit took the bar card." },
      { type: "paragraph", text: "For half a year, in the largest federal circuit in the country, neither lawyer can file. Two cases that were never real put them out." },
    ],
  },
  {
    slug: "burford-sysco-settlement-veto",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "$140 Million Bought a Veto. A Seventh Circuit Judge Called It a Trading Floor.",
    subtitle: "A litigation funder sank more than $140 million into a price-fixing fight, then refused to let the company it bankrolled walk away with $50 million, and a circuit judge wrote a concurrence to call the courtroom a trading floor.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 5, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On February 5, 2026, in Chicago, Circuit Judge Nancy L. Maldonado wrote a separate concurrence to say out loud what the majority opinion had left between the lines. \"Having turned the courtroom into a trading floor, and calculated that continued litigation was more profitable than settlement, Burford wrested total control over the settlement of Sysco's claims.\" She was describing a litigation funder that had sunk more than $140 million into a price-fixing fight and then refused to let the company it bankrolled walk away with $50 million." },
      { type: "paragraph", text: "The case is [Carina Ventures LLC v. Pilgrim's Pride Corp.](https://media.ca7.uscourts.gov/cgi-bin/OpinionsWeb/processWebInputExternal.pl?Submit=Display&Path=Y2026%2FD02-05%2FC%3A25-1110%3AJ%3AHamilton%3Aaut%3AT%3AfnOp%3AN%3A3489067%3AS%3A0), No. 25-1110, an appeal that grew out of the sprawling Broiler Chicken antitrust litigation in the Northern District of Illinois. Carina Ventures is a Burford Capital affiliate. It now holds claims that once belonged to Sysco, the food distributor that says it overpaid for chicken in a rigged market. The story of how a funder ended up litigating in the injured party's chair is the story of a single contract clause." },
      { type: "paragraph", text: "Sysco took Burford's money under a Capital Provision Agreement. The terms gave Burford a share of any favorable proceeds across the Broilers, Pork, and Beef cases. They also gave Burford a leash. Sysco, the agreement read, \"shall not accept a settlement offer without [Burford Capital's] prior written consent, which shall not be unreasonably withheld.\" On paper that reads like a routine investor protection. In practice it was a veto." },
      { type: "paragraph", text: "In late August 2022 Sysco negotiated a deal. It would [resolve the Broilers case against Pilgrim's Pride for $50 million](https://www.courthousenews.com/seventh-circuit-chickens-out-of-50-million-poultry-settlement-brokered-over-email/). Sysco told Burford. Burford thought the number was too low and withheld its consent. Then it went further. Burford filed a Request for Arbitration to block Sysco from settling, moving to stop the company from executing the very deal it had struck. The party that had been wronged in the chicken market wanted out. The party that had written the checks would not let it leave." },
      { type: "paragraph", text: "Maldonado, writing only for herself, did not soften the diagnosis. \"This case presents perhaps the foremost danger of litigation finance: funders aggressively interfering with, and exerting control over, ongoing litigation, while rejecting the funded party's preferences with the hope of maximizing returns.\" She put the financial motive in plain words. Carina's appeal, which is to say Burford's, was in her reading \"motivated far more by its speculative financial investment than by a desire to seek justice for Sysco, the true injured party.\" Sysco, she noted, said it was \"forced to indefinitely litigate against its will against key suppliers who have offered fair and reasonable settlement payments.\"" },
      { type: "paragraph", text: "The majority got Sysco the same result by a colder route. Judge David F. Hamilton, joined by Judge Frank Easterbrook, did not hold that a funder's veto voids a settlement. He held that no binding settlement had formed at all. Material terms were still open when the parties shook hands, so there was nothing yet to enforce. On that footing the panel reversed the summary judgment that Judge Thomas M. Durkin had entered below, the order that would have locked Sysco into the deal. The result and the reasoning split. Hamilton freed Sysco on contract law. Maldonado used her separate pages to name the funder mechanic the contract-law holding never reached." },
      { type: "paragraph", text: "That distinction matters to anyone watching where funder-control law goes next. A circuit majority declined to rule that a consent veto, by itself, strips a settlement of force. The hard line came in a concurrence, which binds no one. What the funder did was unwound on narrower grounds, and the broadest reading of the conduct sits in a single judge's separate opinion. The clause that let Burford block a $50 million deal is still, as a matter of holding, just a clause." },
      { type: "pullquote", text: "A funder bought a veto with a wire transfer. A judge called it a trading floor. The investor is still in the chair." },
      { type: "paragraph", text: "The numbers are the part that travels. More than $140 million in. A $50 million settlement frozen. Years of extra litigation against suppliers who had already offered to pay. Sysco ended up assigning its claims to the Burford affiliate, so the funder now litigates in the seat of the company it once merely backed. Maldonado called the whole arc \"a cautionary tale to any party who seeks to fund its litigation through a third party.\"" },
    ],
  },
  {
    slug: "ny-consumer-funding-25-cap",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "June 17 in New York: Oasis's $20 Billion Market, and a Rule That Forfeits the Whole Loan.",
    subtitle: "New York's Consumer Litigation Funding Act puts a 25% ceiling on the funder's take and a principal-forfeiture torch under any willful violation, repricing a roughly $20-billion asset class on June 17.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 5, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On June 17, 2026, a New York lawsuit lender like Oasis Financial that breaks the new rules does not pay a fine and move on. It eats the loan: a willful violator [waives its right to recover both the funded amount and any and all charges](https://www.nysenate.gov/legislation/bills/2025/S1104), the statute's plain way of saying the funder forfeits its entire stake, principal included. The funded amount, the interest, every charge stacked on top, gone. That is the day the math changes on a roughly $20-billion asset class." },
      { type: "paragraph", text: "The asset class is consumer pre-settlement funding. A plaintiff in a personal-injury case takes a cash advance against a future settlement. The funder collects when the case pays. The whole model rests on the funder eventually clawing back its money plus a return, and New York's Consumer Litigation Funding Act now puts a ceiling on the return and a torch under the principal." },
      { type: "paragraph", text: "The ceiling comes first. The [maximum allowable charges shall not exceed twenty-five percent of the gross proceeds from the applicable legal claim, regardless of the funded amount provided](https://www.nysenate.gov/legislation/bills/2025/S1104). Read that against how the business has run. A funder used to price each advance to its own risk math and let the charges compound. After June 17, a $100,000 New York settlement caps the funder's total take at $25,000, no matter what the advance was or how long the case dragged. Prepayment penalties, another reliable line on the funder's ledger, are barred outright. The revenue side of every New York consumer-funding contract just got a hard lid." },
      { type: "paragraph", text: "The principal is where the teeth close. Operating without registering is unlawful, and registration is not a formality the funder can skip and absorb. A funder must register with the New York Department of State, pass a character, fitness and financial-stability review, post a bond of up to $50,000 or an irrevocable letter of credit, file its contract forms before using them, and pay $500 to start and $200 every two years to stay live. Skip any of it in a willful way and the waiver clause does not reduce the funder's recovery. It zeroes it. The advance the funder already wired becomes money it cannot get back." },
      { type: "paragraph", text: "Two kinds of contract die on contact. A funding agreement that violates the referral-fee prohibition is [void ab initio](https://www.nysenate.gov/legislation/bills/2025/S1104), and so is one that crosses the fraud and fabricated-claim collusion bar. Void ab initio means the contract never existed in the eyes of the law, so there is nothing for the funder to enforce and nothing to collect against. A separate clause renders any agreement missing the required attorney acknowledgment null and void. Each of these is a paid-out advance that converts to a total loss the moment the defect is found. On top of the forfeiture, the New York Attorney General can assess up to $5,000 per violation, and a funder running a book of thousands of New York advances is exposed per contract, not per company." },
      { type: "paragraph", text: "The companies in the blast radius are the consumer pre-settlement lenders. [Oasis Financial](https://www.insurancejournal.com/news/east/2026/01/07/853304.htm), the largest U.S. consumer funder, built its book on non-recourse personal-injury advances and now writes every New York deal under the cap and the forfeiture rule. RD Legal Funding, which already carried prior CFPB and New York Attorney General enforcement over settlement-advance practices, faces the same repricing. The New York-based lawsuit-loan shops that fill out the rest of the market inherit the identical exposure. The commercial portfolio funders that back companies and law firms in big-ticket litigation are a different industry and sit outside this statute entirely." },
      { type: "paragraph", text: "What the public sees of all this is deliberately thin. The Department of State publishes annual aggregate figures, the number of fundings, the total dollars advanced, the percentages charged across the industry. It does not publish which funder did which deal with which consumer. So a carrier or a defendant watching the New York book reprice sees the aggregate weather, not the individual contract, and the funder's per-deal economics stay behind the registration wall." },
      { type: "pullquote", text: "One willful misstep turns a loan into a write-off. Agreements signed before June 17 are grandfathered. Every advance written after carries the new arithmetic." },
      { type: "paragraph", text: "The sponsor framed the stakes in the language of protection. Senator Jeremy Cooney, who carried the bill that became Chapter 645 of 2025, cast it as a step toward protecting everyday New Yorkers from opaque and often predatory litigation financing. Translated into the funder's ledger, that protection is a 25% revenue ceiling and a principal-forfeiture trigger on one of the country's largest litigation markets." },
    ],
  },
  {
    slug: "tesla-autopilot-243m-upheld",
    section: "Litigation Strategy",
    tag: "Case Watch",
    title: "A Dropped Phone at 62 in Key Largo. Judge Bloom Left $243 Million Standing.",
    subtitle: "One dropped phone, one rural-road crash, one driver who wasn't even a defendant in the punitive room, and a $243 million judgment against Tesla that survived every post-trial motion a well-funded defendant could file.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 5, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On April 25, 2019, George McGee dropped his phone at roughly 62 miles an hour on Card Sound Road, a two-lane stretch outside Key Largo, and bent to retrieve it. His 2019 Tesla Model S, Autopilot engaged, kept going. The crash that followed would end in a $243 million judgment against Tesla that a federal judge refused to touch. The car blew through a stop sign and a flashing red light and slammed into the back of a parked Chevrolet Tahoe. Naibel Benavides Leon, 22, was standing beside that SUV on the shoulder. She was killed. Dillon Angulo, standing with her, took a traumatic brain injury he is still living with. The date was April 25, 2019." },
      { type: "paragraph", text: "Six years later the case had a number attached to it. A federal jury in Miami put it there on August 1, 2025. The gross award came to roughly $329 million. After the jury apportioned fault, the piece aimed at [Tesla](https://www.cnbc.com/2026/02/20/tesla-loses-bid-toss-243-million-verdict-fatal-autopilot-crash-suit.html) settled at $243 million. Of that, $200 million was punitive, assessed against the carmaker alone. The driver, McGee, bore two-thirds of the compensatory fault. Tesla bore one-third. The jury still pointed its punitive arm straight at the company that built the car." },
      { type: "paragraph", text: "Tesla did what defendants with that kind of exposure do. It moved to make the number go away. It asked Judge Beth Bloom of the Southern District of Florida for judgment as a matter of law. It asked for a new trial. It asked, in the alternative, for remittitur, the legal lever that lets a judge shave a verdict she finds excessive. Three separate routes to the same destination. Erase $243 million, or cut it down to something a carmaker can absorb without a headline." },
      { type: "paragraph", text: "Bloom said no to all of it." },
      { type: "paragraph", text: "On or about February 19, 2026, with the order made public that Friday the 20th, she denied the post-trial motions. She wrote that the evidence admitted at trial \"more than supports the jury verdict.\" She noted that the grounds Tesla relied on were \"virtually the same as those Tesla put forth previously during the course of trial.\" Translation: the company brought nothing new. It re-argued a case it had already lost, and the judge who presided over that case did not flinch. The $200 million in punitive damages stayed exactly where the jury aimed it." },
      { type: "paragraph", text: "Read the compensatory math and the shape of the thing comes into focus. The jury set compensatory damages at roughly $129 million. Tesla's one-third share of that came to about $42.6 million, [$19.5 million on the Benavides estate's portion and $23.1 million on Angulo's](https://www.insurancejournal.com/news/national/2026/02/23/859068.htm). On top of that share, Tesla alone carries the entire $200 million punitive load that no apportionment touches. The driver dropped the phone. The company paid for the system that was steering when he did." },
      { type: "paragraph", text: "That is what makes this a number worth sitting with rather than a headline to scroll past. The ruling is roughly fifteen weeks old now. The news cycle has moved on. The exposure has not. A single rural-road crash, one dropped phone, one driver who was not even a defendant in the room where the punitive damages landed, produced a $243 million judgment that survived every motion a well-funded defendant could file. The verdict is no longer contingent on a jury's mood or a sympathetic plaintiff's testimony. A judge looked at it cold, months later, and let every dollar stand." },
      { type: "paragraph", text: "For anyone holding exposure on automated-driving systems, the story does not end in the courtroom. It moves to the reserve. A claim like this does not behave like an ordinary auto file. It carries punitive damages that ride the manufacturer regardless of how the driver's fault gets carved up. It carries a punitive award, $200 million, more than four times Tesla's $42.6 million compensatory share, that ordinary loss-development triangles never anticipated. It survived a remittitur motion, which means a court has already declined to call it excessive. The driver's share of fault did not cap the company's share of the punitive bill. Nothing did." },
      { type: "pullquote", text: "Autonomy was supposed to take the human error out of the loss. Here it added a defendant with the deepest pockets in the room and a punitive multiple to match." },
      { type: "paragraph", text: "The crash was one car, one night, two people on a shoulder. The number that survives a remittitur motion is the real number. This one survived. Bloom did not blink. Tesla owes $243 million. The math is done." },
    ],
  },
  {
    slug: "cici-ransomware-sublimit-capped-nothing",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "$250K Sub-Limit. $1.2M Loss. A Judge Capped Nothing.",
    subtitle: "A federal judge in Dallas read HSB Specialty's ransomware endorsement word by word, found it capped a coverage it never named, and freed CiCi's loss into a $3 million tower — with a bad-faith trial still waiting.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 1, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "On February 23, 2026, Judge Sam A. Lindsay of the [Northern District of Texas](https://www.txnd.uscourts.gov/) ruled that the [ransomware endorsement HSB Specialty wrote into CiCi Enterprises' cyber policy](https://www.insurancebusinessmag.com/us/news/cyber/court-blocks-hsbs-ransomware-sublimit-in-firstofitskind-cyber-ruling-567006.aspx) \"contains no explicit language subjecting Insuring Agreement D. Cyber Extortion to the sub-limit.\" If the carrier \"intended for the Ransomware Endorsement to modify 'Cyber Extortion' coverage,\" Lindsay wrote, \"[it] should have included language in the endorsement to that effect.\" That holding gutted the only number HSB had been fighting to enforce." },
      { type: "paragraph", text: "The number was $250,000." },
      { type: "paragraph", text: "[HSB Specialty Insurance Company](https://www.munichre.com/hsb/en.html) had spent the litigation insisting that figure was the ceiling. The endorsement, the carrier argued, capped what it owed on the ransomware claim no matter how large the loss ran. Lindsay read the same endorsement and found a hole in it. The clause limited liability \"solely with respect to the coverage afforded under this endorsement.\" Then it never said what coverage that was. An endorsement that caps an unnamed thing caps nothing. The judge would not supply the words the drafter left out." },
      { type: "paragraph", text: "So the cap fell. And once it fell, the math changed completely." },
      { type: "paragraph", text: "Go back to what happened to CiCi. The attack hit on May 21, 2022. Ransomware locked the company's systems. The attackers opened at $2 million. CiCi negotiated them down and paid $400,000 to get its data back. By the time the dust settled the total loss ran past $1.2 million. CiCi turned to the cyber policy it had bought for exactly this kind of day." },
      { type: "paragraph", text: "The policy carried a $3 million aggregate limit. Four insuring agreements sat inside it. Information Privacy. Network Security. Business Interruption. Cyber Extortion. The extortion coverage is the one that answers a ransomware demand. CiCi had it. CiCi had paid for it. The tower was three million dollars deep." },
      { type: "paragraph", text: "Then HSB pointed at the ransomware endorsement and said the real number was $250,000." },
      { type: "paragraph", text: "That is the gap the case turned on. A $250,000 sub-limit against a loss north of $1.2 million inside a $3 million tower. Roughly $950,000 hung on whether one endorsement reached one insuring agreement. The carrier said it did. The policyholder said the endorsement never named the coverage it claimed to shrink. Lindsay sided with the policyholder." },
      { type: "paragraph", text: "Read the holding again, because the reasoning is the whole story. Lindsay did not rule that ransomware coverage is unlimited. He did not rewrite the contract in CiCi's favor. He ruled on what the page in front of him actually said. The endorsement modified coverage \"solely with respect to the coverage afforded under this endorsement,\" and the endorsement was silent on what that coverage was. A cap needs an object. This one floated free. The judge declined to attach it to Cyber Extortion by inference. The drafter could have written the link in one sentence. The drafter did not. The court would not write it for them." },
      { type: "paragraph", text: "This is why coverage lawyers are calling the ruling first of its kind. Sub-limits inside cyber towers are everywhere. They sit on the page in dense endorsement language that almost no insured reads and almost no carrier expects a court to parse word by word. Lindsay parsed it word by word. He treated the endorsement as a contract that has to say what it means, not a label that means whatever the carrier needs it to mean in litigation. The $250,000 ceiling was real on paper right up until a federal judge asked it what coverage it was capping. It had no answer." },
      { type: "paragraph", text: "The carrier's whole defense ran through that ceiling. Knock it out and the structure behind it changes shape. CiCi's loss now reaches into a $3 million tower instead of stopping at a quarter million. The ransom payment alone, $400,000, already clears the sub-limit HSB tried to enforce. Everything past it that the company can prove now lives inside the real limit. The carrier spent the case defending a wall. The judge found the wall was painted on." },
      { type: "heading", text: "Now the part that should keep HSB's lawyers up at night" },
      { type: "paragraph", text: "The coverage ruling is not the end of [CiCi Enterprises v. HSB Specialty Insurance Company, No. 3:23-CV-2155-L](https://www.insurancebusinessmag.com/us/news/cyber/court-blocks-hsbs-ransomware-sublimit-in-firstofitskind-cyber-ruling-567006.aspx). It is the opening. The sub-limit fight was the threshold question. CiCi also pleaded breach of contract. CiCi pleaded violations of the Texas Insurance Code. And CiCi pleaded bad faith. Those claims did not go away when Lindsay construed the endorsement. They are still live. They are heading for a jury." },
      { type: "paragraph", text: "That reordering matters. When the sub-limit stood, HSB had a clean story for trial. We paid what the policy said. The cap was the cap. Our reading was reasonable, and a reasonable reading is not bad faith. The whole defense leaned on the endorsement doing what the carrier claimed it did. Lindsay just held it did not. The carrier capped a $1.2 million loss at $250,000 on the strength of language a federal court found did not even name the coverage it was capping. A jury in Texas gets to decide what that was." },
      { type: "paragraph", text: "That is the cliffhanger. Trial is targeted for fall 2026. Lindsay pushed both sides toward settlement, setting a March 6 marker on the calendar to talk. The talking did not end it. So the case marches toward a courtroom where the question is no longer what the endorsement meant. The judge answered that. The question becomes whether a carrier that read a sub-limit into coverage the sub-limit never named handled the claim in good faith." },
      { type: "paragraph", text: "The carrier has to walk into that room having already lost the coverage fight. The endorsement it built the denial on has been read against it on the record by the judge who will preside over the trial. Plaintiff's counsel will quote Lindsay's own words back to the jury. The endorsement \"contains no explicit language subjecting Insuring Agreement D. Cyber Extortion to the sub-limit.\" A carrier that enforced a cap the court says was never there, on a loss five times the size of that cap, is a difficult client to defend on the question of good faith. The bad-faith claim does not need new facts. It feeds on the coverage ruling." },
      { type: "paragraph", text: "Step back and the timeline tells it plainly. May 2022, the attack. $400,000 out the door to the attackers. Past $1.2 million in total loss. A $3 million tower bought for this exact event. A $250,000 number the carrier swore was the ceiling. February 2026, a federal judge who reads the endorsement and finds it caps nothing. Fall 2026, a Texas jury that decides whether trying to enforce that ceiling was bad faith." },
      { type: "pullquote", text: "Two hundred fifty thousand on one side. A million two on the other. Three million in the tower behind it. The carrier bet the case on a single endorsement holding the line. The line was a sentence the drafter never finished." },
      { type: "paragraph", text: "CiCi paid the ransom in 2022. The carrier handed back $250,000 and called it the cap. A judge in Dallas read the page and said the cap was not on it. Now the only fight left is whether saying it was cost the carrier the right to say much of anything. That fight has a date. It is in the fall. And the carrier walks in down a point." },
    ],
  },
  {
    slug: "watts-guerra-captive-bad-faith",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "$116M Claim. Contract Count Dead. The Bad-Faith Case Lived.",
    subtitle: "Watts Guerra built a $120 million captive to insure its own lawsuits, then hired Susman Godfrey to sue it when a $116 million claim stalled — and the North Carolina Business Court let the bad-faith count survive even after dismissing the contract count.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 1, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "On March 3, 2026, the North Carolina Business Court told Watts Guerra LLC that its bad-faith case against its own insurance company could go to trial. \"Even when an insurer does not breach the insurance contract because it ultimately indemnifies its insured,\" Judge Adam Conrad wrote, [\"it can be liable in tort for engaging in bad faith during the claims handling process.\"](https://storage.courtlistener.com/pdf/2026/03/03/watts_guerra_llc_v._series_1_of_oxford_ins._co._nc_llc.pdf) The line reads like boilerplate. It is not. The insured suing for bad faith was a plaintiffs' firm. The carrier it was suing was a captive the firm had stood up to insure its own lawsuits. And the lawyer running the offense was Bill Carmody of Susman Godfrey." },
      { type: "paragraph", text: "Read that sequence again. A plaintiffs' firm bought insurance on the value of its own contingency cases. When the carrier slow-walked the payout, the firm did the one thing plaintiffs' firms are built to do. It sued the carrier for bad faith. The hunter became the policyholder, then went back to being the hunter, with itself cast as the wronged party. There is no cleaner role-reversal in the 2026 docket." },
      { type: "paragraph", text: "The structure came first. Watts Guerra, the San Antonio firm that built its name on mass-tort and pharmaceutical recoveries, set up a captive arrangement through [Series 1 of Oxford Insurance Company NC LLC](https://storage.courtlistener.com/pdf/2026/03/03/watts_guerra_llc_v._series_1_of_oxford_ins._co._nc_llc.pdf), a North Carolina series captive. The firm paid roughly $7 million in premium for twelve $10 million policies. Layered together, that is $120 million of coverage written against the firm's own litigation portfolio, a book the firm valued at more than $340 million. The policies were meant to backstop the firm if its expected recoveries fell short. Insurance on lawsuits. Bought by the people filing them." },
      { type: "paragraph", text: "Then a claim came due. Watts Guerra presented a $116 million loss against the captive. And the captive, the entity the firm had funded and structured to pay exactly this kind of event, did not pay. It asked questions. It requested documents. It let the calendar run. Whatever the captive thought it was doing, Watts Guerra read it as a stall, and a stall on $116 million is not a paperwork dispute. It is a fight." },
      { type: "paragraph", text: "For most insureds, that fight starts and ends with breach of contract. Watts Guerra is not most insureds. The firm brought in [Susman Godfrey](https://storage.courtlistener.com/pdf/2026/03/03/watts_guerra_llc_v._series_1_of_oxford_ins._co._nc_llc.pdf), the trial shop that has spent decades teaching corporate defendants what a real plaintiffs' offense looks like. Bill Carmody, with Shawn Rabin and Samir Doshi on the brief, did not file a tidy coverage suit. They filed breach of contract, statutory unfair-and-deceptive-trade-practices claims under North Carolina's UDTPA, and common-law bad faith. They built the complaint the way they would build it for any client suing a carrier. The fact that the carrier was their client's own captive did not soften a single count." },
      { type: "paragraph", text: "The captive moved to dismiss, and here the case turns. On the contract count, the court agreed with the carrier and dismissed it. A plaintiffs' firm that engineered its own coverage structure could not, on these pleadings, show the policy had been breached. That should have been the carrier's day. It was not." },
      { type: "paragraph", text: "Because Judge Conrad refused to let the contract ruling carry the rest of the case with it. The court held that the bad-faith and UDTPA claims survive on their own legs, independent of whether the contract was ever breached. The reasoning is the spine of the opinion. Bad faith in North Carolina is a tort about conduct during claims handling, not a verdict on whether the check eventually clears. A carrier that drags out a meritorious claim, that manufactures pretext, that treats a real loss as a negotiating posture, can be liable for that conduct even if it pays in the end. The contract count asks whether the carrier owed the money. The tort count asks how the carrier behaved while deciding. Those are different questions, and dismissing the first does not answer the second." },
      { type: "paragraph", text: "That holding is what makes the case dangerous, and not just to one captive in North Carolina. The conventional defense playbook treats a coverage dispute as a closed system. Win the contract argument and the extracontractual exposure collapses with it. The Business Court just severed that link in writing. The carrier can be right about the policy and still stand trial for bad faith. Pay the claim and still owe damages for the stall. For an industry that has spent years arguing that good-faith disputes over coverage cannot become tort cases, that is the holding nobody wanted to read in a published opinion." },
      { type: "paragraph", text: "And it is published, by the court that other commercial dockets watch. The North Carolina Business Court is a designated forum for complex business litigation, and its opinions travel. In the thirteen weeks since the March ruling, the reasoning has not stayed put. Policyholder-side firms have started citing it for the proposition that a dismissed breach count does not dispose of a bad-faith count, and they are citing it against carriers who assumed the two rose and fell together. This is no longer a curiosity from one captive fight. It is precedent that has begun to replicate, and it cuts in the direction of more extracontractual trials, not fewer." },
      { type: "paragraph", text: "Sit with the irony, because it is the whole story. The captive insurance structure exists, in part, so sophisticated parties can control their own risk and avoid exactly this kind of adversarial coverage war. Watts Guerra built one. The firm picked the carrier because the firm was the carrier, in substance. And when the claim came, the structure did not buy peace. It bought a lawsuit, brought by Susman Godfrey, on the same theories plaintiffs' firms use against State Farm and Allstate. The firm that monetizes other people's litigation is now monetizing its own coverage dispute, against a carrier it created." },
      { type: "paragraph", text: "The trial, if it gets there, will be a strange one. A plaintiffs' firm will sit at the plaintiff's table and argue that an insurer acted in bad faith. The captive will argue it asked reasonable questions about a $116 million demand. A jury will be asked to decide whether a firm built on suing insurers was itself the victim of one. Carmody has spent a career making that argument for other clients. Now the client is the firm down the hall." },
      { type: "pullquote", text: "A breach win is not a bad-faith win. The two claims do not have to die together. One opinion, one captive, one plaintiffs' firm holding the policy. The wall between contract and tort just took a crack. And cracks spread." },
    ],
  },
  {
    slug: "oregon-110k-ai-sanction-ceiling",
    section: "Litigation Tech",
    tag: "Special Report",
    title: "$110K Fine. $12M Claim. A Judge Killed Both Over Fake Cases.",
    subtitle: "Judge Mark D. Clarke called the fabrications \"a notorious outlier in both degree and volume,\" handed down $110,000, and dismissed an elder-abuse case with prejudice for a client who never touched the briefs.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 1, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "In a Medford, Oregon courtroom this spring, U.S. Magistrate Judge Mark D. Clarke wrote that the case in front of him was [\"a notorious outlier in both degree and volume.\"](https://www.abajournal.com/news/article/oregon-federal-judge-hands-down-110000-penalty-for-ai-errors) Then he handed down the largest AI-hallucination sanction in the history of American courts. The number was $110,000. The dismissed claim behind it was worth $12 million." },
      { type: "paragraph", text: "The attorneys were [Stephen Brigandi and Tim Murphy](https://www.abajournal.com/news/article/oregon-federal-judge-hands-down-110000-penalty-for-ai-errors). They represented Joanne Couvrette in an elder-abuse case in the [U.S. District Court for the District of Oregon](https://www.ord.uscourts.gov/). The case was the kind plaintiff lawyers fight to keep alive. It had a sympathetic client. It had a seven-figure ask. It died with prejudice, which means it can never be refiled, and it died not on the merits but on the conduct of the lawyers who filed the briefs." },
      { type: "paragraph", text: "Judges have been issuing AI sanctions for two years now. The [running tally of these cases](https://www.damiencharlotin.com/hallucinations/) now numbers in the hundreds. Most run a few thousand dollars. A lawyer cites a case that does not exist, the court catches it, the lawyer apologizes, and a modest fine follows. The pattern had become almost routine. Clarke saw something different on his docket. He counted the fabrications. He measured the volume. And he reached for the word \"outlier\" because nothing else fit." },
      { type: "paragraph", text: "The volume is what set this apart. This was not one phantom citation slipped into one brief. It was a body of work. Fake cases. Fake quotations attributed to real cases. Made-up propositions of law dressed up to look like settled doctrine. The court did not find a careless lawyer who leaned on a tool once. It found filings shot through with material the machine had invented and the humans had signed." },
      { type: "paragraph", text: "Clarke did not hide his reasoning behind procedural language. He wrote that [\"if there was ever an 'appropriate case' to grant terminating sanctions for the misuse of artificial intelligence, this is it.\"](https://www.abajournal.com/news/article/oregon-federal-judge-hands-down-110000-penalty-for-ai-errors) That is a judge telling the bar that he knows the line he is drawing. Terminating sanctions are the heaviest weapon a court holds. They do not punish a filing. They end the case. Clarke aimed that weapon at the plaintiff's $12 million claim and pulled the trigger." },
      { type: "paragraph", text: "Think about what that costs a client. Joanne Couvrette did not write the briefs. She did not prompt the model. She hired counsel, the way every litigant does, and trusted that the words filed under her name would be real. The terminating sanction fell on her case all the same. The elder-abuse claim was extinguished. The path to a $12 million recovery closed. The lawyers' conduct became the client's loss, which is the quiet cruelty of a dismissal with prejudice." },
      { type: "paragraph", text: "The $110,000 is the part that will travel. It is the headline number, and it should be. But the dollar figure is the smaller half of the story. The dismissal is the larger half. A sanction is money. A terminating sanction is the case itself. Clarke chose both. He fined the lawyers and he killed the claim, and he wrote his order in a way that makes clear he understood the weight of doing both at once." },
      { type: "paragraph", text: "The phrase \"in both degree and volume\" is doing precise work. Degree is how bad each error was. Volume is how many there were. A judge willing to separate those two axes is a judge who has read the filings closely enough to grade them. Clarke did not wave at \"AI errors\" as a category. He took the measure of these particular errors, in this particular case, and found them off the chart on both axes at once." },
      { type: "paragraph", text: "The misuse here is a kind every trial lawyer now recognizes. The tool is fast. It is confident. It produces citations that look exactly like citations. It produces quotations that read exactly like quotations. The only thing it does not reliably produce is truth. A lawyer in a hurry, facing a deadline, asks the model for support and gets back a brief that looks finished. The trap is that \"looks finished\" and \"is real\" are no longer the same thing, and the gap between them is where careers go to die." },
      { type: "paragraph", text: "Brigandi and Murphy walked into that gap. The record does not show two lawyers who set out to deceive the court. It shows something more ordinary and more dangerous. Lawyers who trusted a machine, did not check its work, and signed their names to its output. The signature is the act that matters. When a lawyer signs a filing, the lawyer certifies that the contents are true and warranted. The machine cannot make that certification. Only the human can, and Brigandi and Murphy did, on filings full of things that were not so." },
      { type: "paragraph", text: "Clarke's order arrives at a moment when courts across the country are still calibrating. Some judges issue warnings. Some impose small fines. Some require continuing-education hours on AI. The bench has not converged on a number or a rule. Into that uncertainty, an Oregon magistrate dropped the ceiling. Not a thousand dollars. Not ten thousand. One hundred ten thousand, plus the death of the underlying claim. Every judge weighing an AI sanction now has a marker on the high end, and a colleague who explained, in plain words, why he set it there." },
      { type: "paragraph", text: "The \"outlier\" framing cuts two ways, and Clarke surely knew it. An outlier is, by definition, the exception. He is saying this conduct was worse than the run of cases. But an outlier is also a data point that pulls the whole distribution. The next judge who sees a pile of fabricated citations will have Clarke's order in hand. The next lawyer who is tempted to file unchecked AI output will have a number in mind. Outliers do not stay outliers for long once they are written into an order and indexed in a database. They become the case other judges cite." },
      { type: "paragraph", text: "There is a coverage wrinkle worth noting for anyone watching this from the carrier side. The reporting on Clarke's ruling broke in May 2026, in OPB and Fortune, even though the order itself is docketed earlier. The lag shows how these stories surface. The order sits quietly in a federal docket for months. Then it breaks into the trade press, and suddenly the number is everywhere, and the bar is talking about it. The $110,000 was always real. It just took a news cycle to make it loud." },
      { type: "pullquote", text: "The machine was wrong. The lawyers signed anyway. The judge counted the lies. The claim is dead." },
    ],
  },
  {
    slug: "ector-county-49m-ammons-verdict",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "No Model Feared Ector County. A Jury Returned $49M in Three Days.",
    subtitle: "Rob Ammons tried a trucking-company safety case in three days in Ector County and walked out with $49 million — nearly ten times the anchor — against a defendant that no longer exists.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 1, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "Steffan Robert Mick was pronounced dead at 6:58 p.m. on a January 2025 evening, twenty-two minutes after a 42-foot trailer crossed his lane on a farm-to-market road near Midland, Texas. \"The evidence showed that this crash was not the result of one isolated mistake,\" Rob Ammons told the jury in [Ector County](https://texaslawbook.net/trucking-co-hit-with-49m-jury-verdict-in-west-texas/). \"OPG Logistics had no real safety program, no driver training infrastructure and no meaningful system for making sure its drivers followed mandatory hours-of-service rules.\"" },
      { type: "paragraph", text: "Mick was 29. He had a wife, Kayla Callahan. He had two children, Raylynn and Rhyder. He was driving a 2001 Chevrolet Suburban home that night. He never made the turn off the farm road." },
      { type: "paragraph", text: "The truck that hit him was a 2016 Peterbilt. The trailer behind it was empty. The man at the wheel was Biorkys Sanchez Fernandez, and by the time he reached the intersection at 6:36 p.m. he had been driving for more than twelve hours. He had been on duty for more than fifteen. He failed to yield. He turned left across Mick's path. The Suburban had nowhere to go." },
      { type: "paragraph", text: "That is the part juries can see. A man, a road, a clock that ran too long. What Rob Ammons and his co-counsel built over three days in [Judge Lori Ruiz-Crutcher's courtroom](https://texaslawbook.net/trucking-co-hit-with-49m-jury-verdict-in-west-texas/) was the part juries usually cannot. The crash was the symptom. The company behind the driver was the disease." },
      { type: "paragraph", text: "The trial ran fast. Three days, start to finish, in a county courthouse most of the country could not find on a map. Ammons handled the case with Elizabeth H. Lawrence of [The Ammons Law Firm](https://www.ammonslaw.com/) and Brian Carney of The Carney Law Firm. They did not try a fender bender. They tried a system. No safety program. No training. No one watching the hours a tired man spent behind 80,000 pounds of steel." },
      { type: "paragraph", text: "A reasonable defense in this posture aims the case at the driver. One man, one bad left turn, one tragic night. Keep the corporate logo off the chalkboard and the number stays small. The strategy collapses the moment the jury starts asking who let a driver run fifteen hours without a system to stop him. Sanchez made the turn. But somebody decided no one would ever check whether Sanchez should have been on the road at all." },
      { type: "paragraph", text: "The jury came back late on a Wednesday evening, May 21, 2026. They had heard three days of evidence about a company that ran trucks and did not run a safety department." },
      { type: "paragraph", text: "Plaintiff's counsel had framed the case around a figure of five million dollars." },
      { type: "paragraph", text: "The jury returned forty-nine." },
      { type: "paragraph", text: "Read that again. The number on the verdict form was nearly ten times the anchor the plaintiff's side had set. Forty and a half million in compensatory damages. Eight and a half million in punitive. A West Texas jury, in a three-day trial, in a county with a population smaller than a single Houston ZIP code, decided that a man's life and a company's indifference were worth $49 million." },
      { type: "paragraph", text: "The number is not the remarkable part. The geography is." },
      { type: "paragraph", text: "There is a familiar map of where the big verdicts live. Cook County. The Rio Grande Valley. Philadelphia. St. Louis. The forum-risk models that price commercial auto and excess casualty have those counties shaded dark red, with rate loaded accordingly. Underwriters know to fear them. Claims departments staff for them. The models that decide whether a case settles for policy limits or goes to a jury were trained on those counties for a generation." },
      { type: "paragraph", text: "Ector County is not one of them. Odessa is the seat. Oil and gas, dust, a few hundred thousand people across the basin. It is not a venue that shows up on a heat map of judicial hellholes. It did not need to. A man died on a farm road. A jury watched a trucking company explain why it had no system to keep its drivers awake. And the verdict came in at $49 million in three days." },
      { type: "paragraph", text: "The point is not that Ector County is the next Cook County. The point is that the map is wrong. Nuclear verdicts are no longer the property of a dozen famous venues. They follow the facts and the lawyers now, not the ZIP code. Rob Ammons does not need a hellhole. He needs a dead father of two, a driver who ran fifteen hours, and a defendant that cannot produce a single page of a safety manual. He can find that anywhere. He found it in Odessa." },
      { type: "pullquote", text: "The forum-risk models scored Ector County quiet. A jury there returned $49 million in under a week. The map said pale. The verdict came in eight figures." },
      { type: "paragraph", text: "Which brings the case to its cruelest turn. OPG Logistics is no longer in business." },
      { type: "paragraph", text: "The company that ran trucks without a safety program does not exist anymore. The corporate name on the verdict form belongs to an entity that has stopped operating. There is a $49 million judgment. There may be no one left to pay it. The compensatory damages are real. The punitive damages are real. Kayla Callahan and her two children hold a piece of paper worth $49 million against a company that has dissolved into the basin air." },
      { type: "paragraph", text: "This is where a plaintiff's victory turns into an insurer's question. A judgment is only as good as the assets and the coverage behind it. When the defendant is defunct, the verdict points straight at the policy. The carrier that wrote OPG Logistics, at whatever limit, is now the last solvent name in the room. Whatever the model said Ector County was worth, the tower is what is left." },
      { type: "paragraph", text: "So the number that matters is not $49 million. It is the limit on a policy written for a company that no longer answers the phone. The jury did its work in three days. The collection fight will take longer. Steffan Mick's children will grow up while lawyers argue over who is left to pay for the night their father did not come home." },
      { type: "paragraph", text: "A man drove home on a January night. A tired trucker turned left. A jury in a county no model feared returned $49 million. The company that earned it is gone. The bill is not." },
    ],
  },
  {
    slug: "simon-simon-rico-survives-dismissal",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "Judge Kearney Kept Uber's RICO Suit Alive. Now Simon & Simon's Files Open.",
    subtitle: "Judge Mark Kearney refused to dismiss Uber's racketeering case against the plaintiffs' firm — converting an accusation into an investigation with subpoena power, and turning the chair toward the lawyers who usually ask the questions.",
    readTime: "5 min read",
    author: "Wesley Todd",
    date: "June 1, 2026",
    trending: false,
    content: [
      { type: "paragraph", text: "On May 13, 2026, U.S. District Judge Mark Kearney sat in Philadelphia and refused to throw out Uber's racketeering case against the plaintiffs' firm [Simon & Simon, P.C.](https://www.insurancejournal.com/news/east/2026/05/13/869609.htm), writing that \"Uber's pleaded facts viewed in their totality support a reasonable inference the lawyers and doctors acted with fraudulent intent, or at minimum reckless disregard for the truth, in using the mails and interstate wires to transmit false or misleading medical documents in furtherance of the alleged scheme.\" That sentence does more than keep a complaint alive. It hands Uber a key to the firm's filing cabinets." },
      { type: "paragraph", text: "The motion to dismiss was the gate. Marc Simon's firm tried to close it. Judge Kearney left it open. What matters now is not the procedural box checked on a Wednesday in [the Eastern District of Pennsylvania](https://www.paed.uscourts.gov/). What matters is what walks through that gate next. Discovery." },
      { type: "paragraph", text: "Most carrier-offense RICO suits never get here. They die at the pleading stage because a defendant firm argues the complaint is a dressed-up dispute over billing, not a fraud scheme, and judges agree. Kearney did not agree. He found Uber pleaded enough to make the inference of fraudulent intent reasonable. Reasonable inference is the threshold. Cross it, and the defendant must answer questions under oath about how it ran its business." },
      { type: "paragraph", text: "Think about what a prominent personal-injury firm does not want a corporate adversary to see. The intake script. The rule that decides which caller becomes a case and which gets turned away. The list of doctors the firm sends clients to, and how that list got built. The fee arrangements, if any, that run between the lawyers and the clinics. The internal email where someone flags a record that does not add up and asks what to do about it. None of that is public. All of it is now potentially discoverable." },
      { type: "paragraph", text: "Uber's theory, as Kearney summarized it, is that lawyers and doctors moved \"false or misleading medical documents\" through the mail and wires to inflate claims. To prove that theory, Uber does not need a confession. It needs the paper trail. Discovery is the mechanism that produces the paper trail. Document requests reach the firm's case-management system. Interrogatories force the firm to name names. Depositions put the partners in a chair across from Uber's lawyers, with a court reporter taking down every pause." },
      { type: "paragraph", text: "The gatekeeping question is the live wire. In the parallel FedEx racketeering complaint filed in the Southern District of New York against a different firm, the carrier alleged a named attorney \"occupied a gatekeeping position, specifically, selecting which claims would be advanced, which providers would be used, and when and where litigation would be initiated, thereby directing the flow of fraudulent claims through such enterprise.\" That is the architecture carriers are now hunting for. Not a single bad document. A system. A pattern of selection that turns ordinary referrals into a RICO enterprise. Discovery is where you find out whether the system exists or whether the carrier guessed wrong." },
      { type: "paragraph", text: "For Simon & Simon, the deposition is the part that bites. A document production is a fight over scope and privilege, run by lawyers, conducted on paper. A deposition is a person answering live. Uber's counsel will ask how the doctor list was assembled. They will ask who reviewed the medical records before they went out. They will ask whether anyone at the firm ever questioned a diagnosis and sent the claim anyway. Every answer is locked in. Every \"I don't recall\" is on the record. The firm's partners spend their careers asking those questions of defendants. Now the chair turns." },
      { type: "paragraph", text: "Privilege will be the next battlefield, and it is not the shield it looks like. Attorney-client privilege protects legal advice. It does not protect the mechanics of a business, and it does not protect communications made in furtherance of a fraud. That second piece is the crime-fraud exception, and it is exactly the kind of fight Kearney's \"reasonable inference\" finding sets up. Uber will argue that because the judge already found a plausible inference of fraudulent intent, the firm cannot bury the operative documents behind privilege. The firm will argue every withheld page is protected work product. Whoever wins that argument wins the case, because the documents at the center of it are the documents that show whether the scheme was real." },
      { type: "paragraph", text: "The asymmetry of exposure is the strategic engine here. Uber is a defendant in thousands of injury suits and has institutional patience and a litigation budget that does not blink. Simon & Simon runs on case volume and reputation. Discovery against a plaintiffs' firm is not just expensive. It is exposing. The same files Uber wants in this case describe how the firm handles every other case. A deposition transcript does not stay in one matter. It becomes a roadmap other defendants can follow. The firm now litigates under the knowledge that everything it produces can be read by the next carrier with a RICO theory and a filing fee." },
      { type: "paragraph", text: "The damages number reads small. Uber pleaded losses of \"more than $50,000,\" the federal-court floor, with treble damages and the total scheme value left unquantified. Do not read the figure as the stakes. RICO trebles. And the real exposure is not the dollar amount in the complaint. It is the precedent and the disclosure. A plaintiffs' firm that has its intake system, its doctor relationships, and its record-review practices pulled into the open under oath has lost something money does not measure, whether or not Uber ever collects a judgment." },
      { type: "paragraph", text: "This is why the discovery phase, not the dismissal ruling, is the story. The headline that the suit \"survived\" is a procedural fact. The consequence is operational. Kearney's order converts an accusation into an investigation with subpoena power behind it. Uber now gets to ask the questions and compel the answers. The firm now has to choose, document by document, what to fight over and what to hand across." },
      { type: "paragraph", text: "Watch three things as the case moves. First, the protective order. How tightly the parties wall off what Uber learns will tell you how sensitive the firm believes its files are. Second, the privilege log. Its length and its fights signal where the firm thinks the danger sits. Third, the first deposition notice. The name on it reveals who Uber thinks built the machine." },
      { type: "pullquote", text: "Marc Simon's firm wanted this case gone at the gate. The gate held. The hard part was supposed to be surviving the motion. It was not. The hard part starts now." },
    ],
  },
  {
    slug: "musk-verdict-savitt-calendar-gambit",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "Savitt's Calendar Gambit: How Wachtell Won Musk v. OpenAI in Opening",
    subtitle: "William Savitt of Wachtell opened the defense on April 27 with two clauses. The advisory jury answered question one Monday in 1 hour 53 minutes. The calendar gambit ended the way it began.",
    readTime: "11 min read",
    author: "Wesley Todd",
    date: "May 19, 2026",
    trending: true,
    content: [
      { type: "paragraph", text: "William Savitt opened the defense on April 27 with two clauses. The advisory jury answered question one Monday in 1 hour 53 minutes." },
      { type: "paragraph", text: "April 27, Monday. William Savitt of Wachtell, Lipton, Rosen and Katz stood at the lectern in Judge Yvonne Gonzalez Rogers's Oakland courtroom and put two clauses in front of the nine-member advisory jury. Elon Musk had waited too long to sue. It was too late now to gin up something to harm a competitor. Sarah Eddy of Wachtell sat at counsel table beside him with the Morrison Foerster co-counsel team. Steven Molo of MoloLamken had opened minutes earlier with a different theory, delivered in three words: stole a charity. Marc Toberoff of Toberoff and Associates sat at the plaintiff table." },
      { type: "paragraph", text: "Twelve trial days. Eleven witnesses, including Musk across three days of cross by Savitt, Shivon Zilis on May 7, Microsoft chief executive Satya Nadella on May 11, OpenAI board chair Bret Taylor on May 11 and May 12, and Sam Altman across four hours of cross and re-direct between May 12 and May 15. Closing arguments landed May 14. The advisory jury opened deliberations at 8:30 a.m. PT Monday morning. At 10:23 a.m. PT the foreperson sent the judge a note. \"We have a verdict.\"" },
      { type: "paragraph", text: "[One hour fifty-three minutes.](https://www.nbcnews.com/tech/tech-news/openai-elon-musk-case-verdict-rcna345655)" },
      { type: "paragraph", text: "The verdict form put the statute-of-limitations question first. The advisory jury answered yes for the defense on the gate question and never reached a merits question. Judge Gonzalez Rogers adopted the finding from the bench. The theory Savitt delivered in opening was the theory the jury returned in deliberation." },
      { type: "paragraph", text: "[Outside the courthouse Savitt told reporters](https://www.cbsnews.com/news/musk-openai-lawsuit-dismissed-jury-recommendation/) the decision was substantive, not technical. Toberoff told [CNN Business](https://www.cnn.com/2026/05/18/tech/openai-musk-lawsuit-verdict) the case was about preserving charities and that they would appeal. Musk posted on X within hours that the verdict ran on a calendar technicality and announced his intent to appeal at the Ninth Circuit. Steven Molo told [NBC News](https://www.nbcnews.com/tech/tech-news/openai-elon-musk-case-verdict-rcna345655) the appellate theory would lean on the continuing-violation doctrine. No Notice of Appeal had been docketed at the Ninth Circuit as of the search window for this readout." },
      { type: "heading", text: "Savitt's calendar gambit" },
      { type: "paragraph", text: "April 27, Monday, Oakland federal courthouse. The advisory jury had just been sworn. Molo opened for Musk. \"Ladies and gentlemen, we are here today because the defendants in this case stole a charity,\" he told the panel, then put three questions on the record: whether OpenAI had a charitable mission to operate as a non-profit and develop safe AI open-source for the good of humanity, whether Altman and Greg Brockman violated that mission through what they had done with the for-profit business, and whether Microsoft knew about the charitable mission and substantially assisted in breaching it. Three questions. Plain English. A charitable-theft case delivered in the cadence of a closing." },
      { type: "paragraph", text: "Savitt opened second. He did not begin with the merits. He began with the calendar. The phrasing the jury would hear in deliberations on May 18 was the phrasing they heard from Savitt on April 27. Musk had waited too long to sue. The complaint was instrumental to xAI, Musk's competing AI venture. It was too late now to gin up something to harm a competitor. [NBC News](https://www.nbcnews.com/tech/tech-news/openai-elon-musk-case-verdict-rcna345655) paraphrased the lines verdict-day. [PBS NewsHour](https://www.pbs.org/newshour/nation/jury-sides-with-openai-saying-elon-musks-lawsuit-was-not-filed-on-time) corroborated the framing. Eddy followed Savitt with the defense's substantive frame, the one that said even on the merits Musk had no charitable trust to enforce because his early-stage donations had come with no strings attached. The defense stacked its first move and its second move in the same opening. Calendar first. Merits as backup. The jury form would later mirror the architecture of the opening." },
      { type: "paragraph", text: "The defense refused to let the case become a referendum on Altman's candor." },
      { type: "paragraph", text: "It made the case a referendum on Musk's filing date." },
      { type: "heading", text: "Musk on the stand" },
      { type: "paragraph", text: "April 28 through April 30, Musk took the stand under direct from Toberoff and cross from Savitt. Three trial days. The verbatim exchange that traveled furthest from the transcript came on one of Savitt's middle passes. Musk, raising his voice with Savitt:" },
      { type: "pullquote", text: "\"Your questions are definitionally complex, not simple. It is a lie to say they are simple.\"" },
      { type: "paragraph", text: "The exchange was captured by the [ABC7 San Francisco live-updates blog](https://abc7news.com/live-updates/elon-musk-sam-altman-live-updates-open-ai-ceo-testifies-in-trial-that-could-determine-ai%27s-future/19080697/entry/19000443/) and corroborated by CNBC's day-three summary. On another pass Musk accused Savitt of asking questions designed to trick him. On a third Savitt confronted Musk with a years-old term sheet. Musk could not recall having read the document. Savitt walked the witness through the fact that no prior deposition contained any reference to the document either. [CNBC characterized the exchange](https://www.cnbc.com/2026/04/29/musk-altman-live-updates-day-3-open-ai-trial.html) as a heated moment. Court reporters watching the box noted Musk's color rising, his sentences shortening, his pauses lengthening between the document on the lectern and the answers he was now giving." },
      { type: "paragraph", text: "The defense's calendar theory needed a clean witness record on when Musk first knew or should have known the facts giving rise to his charitable-trust theory. The witness arguing the merits stayed at the merits. The lawyer arguing the timing kept asking when. Every clash on every term sheet and every founding email locked another exhibit into a date the jury could later count to 2024." },
      { type: "heading", text: "The bridge witnesses" },
      { type: "paragraph", text: "Three witnesses ran the bridge between Musk's account and the defense's calendar theory. None of them was Wachtell's witness in a courtroom sense; each one was either a Musk-side associate, a Microsoft executive, or an OpenAI board chair. All three put facts on the record that complicated the plaintiff's framing while never quite landing as defense direct testimony." },
      { type: "paragraph", text: "Shivon Zilis took the stand on May 7. Former OpenAI board member. Longtime Musk adviser. Mother of four of Musk's children. [CNN Business](https://www.cnn.com/2026/05/07/tech/musk-trial-shivon-zilis-testimony) walked her testimony. Zilis testified that in 2018 Musk had offered Altman a seat on the Tesla board as part of a contemplated Tesla-OpenAI merger. She surfaced February 2018 text messages in which Musk, still on OpenAI's nonprofit board, told her the relationship with OpenAI should stay close and friendly while Tesla actively tried to move three or four people from OpenAI to Tesla. Wachtell never had to call her. Musk's own circle put the corporate-acquisition record into evidence. The merits Molo wanted the jury to weigh now carried a Tesla board seat Musk had offered the man he was now suing." },
      { type: "paragraph", text: "Satya Nadella took the stand on May 11 for approximately two and a half hours. [CNBC walked his direct and cross](https://www.cnbc.com/2026/05/11/microsoft-ceo-satya-nadella-musk-altman-trial.html). Nadella testified that Musk had never raised concerns with him about Microsoft's OpenAI investment violating any charitable-mission commitment. On the IP-rights framing of Microsoft's initial pact with OpenAI: \"Essentially, we were forgoing the opportunity on our side to develop it on our own, so it was very important to us to have IP rights.\" On the dependency risk between the two companies, Nadella surfaced an internal email in which he had worried Microsoft could become the next IBM while OpenAI became the next Microsoft. He also testified that he had never demanded the board reinstate Altman during the November 2023 firing; he had told the board he had to be the adult in the room. The sitting CEO of a $3-trillion-market-cap company framed his own company as the dependent party in the partnership. The platform-shift testimony complicated the merits without ever directly addressing the calendar." },
      { type: "paragraph", text: "Bret Taylor, OpenAI board chair, took the stand on May 11 and May 12. On cross, Musk's counsel walked Taylor through a 2023 text message setting his condition for joining the post-firing board: Altman reinstated and seated on the board. Musk's counsel then asked whether Taylor had determined at that point that Altman was a liar or had not been transparent with the prior board. [CNBC captured the exchange](https://www.cnbc.com/2026/05/12/openai-trial-updates-sam-altman-set-to-testify-in-musk-suit.html). Taylor's answer:" },
      { type: "pullquote", text: "\"That's correct.\"" },
      { type: "paragraph", text: "Taylor conceding on cross that he had determined Altman had been less than transparent is the most damaging exhibit the plaintiff put up across twelve trial days. The verdict form did not contain a credibility question. It contained a timing question." },
      { type: "heading", text: "Altman crossed by Molo" },
      { type: "paragraph", text: "May 12 through May 15. Sam Altman took the stand for what totaled roughly four hours of testimony across direct, cross, and re-direct. [CNBC's takeaway recap](https://www.cnbc.com/2026/05/13/altman-musk-trial-testimony-takeaways.html) and [NPR's live-blog](https://www.npr.org/2026/05/12/nx-s1-5811730/openai-sam-altman-testimony-elon-musk-trial) both put his lead quotes in the same place. On Musk's departure from the OpenAI board in 2018:" },
      { type: "pullquote", text: "\"I felt like he had abandoned us, not come through on his promises, put the company in a very difficult place, jeopardized the mission, didn't really care about the things I thought he cared about.\"" },
      { type: "paragraph", text: "Altman reframed the case in his own voice, from fraud to abandonment. He testified that he had never promised Musk OpenAI would remain a nonprofit. On the personal cost of the public conflict with Musk, Altman told the jury it had been an extremely painful thing for him to have someone he had respected so much not acknowledge that and continue to publicly attack the company. The line traveled. Every wire piece on Altman's testimony quoted it." },
      { type: "paragraph", text: "Molo's cross drilled directly on credibility. [The Ringer](https://www.theringer.com/2026/05/15/tech/sam-altman-defense-testimony-elon-musk-trial) walked the exchange. Molo:" },
      { type: "pullquote", text: "\"Do you always tell the truth?\" Altman: \"I believe I'm a truthful person.\"" },
      { type: "paragraph", text: "Molo pressed several variations of the same question, tying each back to the November 2023 OpenAI Foundation board finding that Altman had not been consistently candid. [The Washington Post](https://www.washingtonpost.com/technology/2026/05/16/elon-musk-trial-against-sam-altman-renews-questions-about-his-honesty/) characterized the cross as the strongest single sequence of Musk's case. Even the strongest plaintiff cross of the trial did not move the calendar gate." },
      { type: "heading", text: "Two hours in the jury room" },
      { type: "paragraph", text: "May 18, Monday morning. The advisory jury opened deliberations in the jury room at 8:30 a.m. PT. At 10:23 a.m. PT, court staff received a note from the foreperson. \"We have a verdict.\" One hour fifty-three minutes. The [DRC Capital release](https://www.globenewswire.com/news-release/2026/05/18/3297060/0/en/DRC-Congratulates-Sarah-Eddy-William-Savitt-and-the-Wachtell-and-Morrison-Foerster-Trial-Team-on-Their-Victory-for-OpenAI-in-Musk-et-al-v-Altman-et-al.html), a vendor-side congratulatory press release naming the Wachtell-Morrison Foerster trial team, confirmed the verdict-form structure: statute of limitations as question one on the form. Once the advisory jury answered yes for the defense on that gate question, no merits question needed to be reached. No post-verdict primary source named the foreperson. No juror stopped to speak with reporters." },
      { type: "paragraph", text: "Nine seats. The note from the foreperson reached the bench at 10:23 a.m. Twelve trial days had funneled to one piece of paper." },
      { type: "paragraph", text: "Judge Gonzalez Rogers took the bench and read the verdict form. She accepted the advisory finding from the bench in the same minute she read it. From [Newsweek](https://www.newsweek.com/musk-openai-lawsuit-verdict-altman-ai-trial-11964171):" },
      { type: "pullquote", text: "\"I've always said I would accept the jury's verdict.\" \"The court now confirms the prior indication that it would accept the jury's findings as its own.\" \"There's a substantial amount of evidence to support the jury's finding, which is why I was prepared to dismiss on the spot.\"" },
      { type: "paragraph", text: "The bench-acceptance moment is the procedural pivot the trial-strategy reader keeps. The judge had been running the parallel remedies record alongside liability. The verdict landed mid-remedies-hearing posture. [TechCrunch](https://techcrunch.com/2026/05/18/elon-musk-has-lost-his-lawsuit-against-sam-altman-and-openai/) and [Newsweek](https://www.newsweek.com/musk-openai-lawsuit-verdict-altman-ai-trial-11964171) both captured the geography. The court had been hearing remedies argument when the liability jury came back. The remedies-phase bench trial that would have decided up to $150 billion in disgorgement, the removal of Altman and Brockman, and the rescission of OpenAI's 2025 for-profit restructuring all mooted in the same minute. The case was over before lunch." },
      { type: "heading", text: "The courthouse steps" },
      { type: "paragraph", text: "Outside the federal courthouse, hours apart, three dueling sound bites stacked." },
      { type: "paragraph", text: "Savitt, to reporters, [via CNBC](https://www.cnbc.com/2026/05/18/musk-altman-openai-trial-verdict.html) and [CBS News](https://www.cbsnews.com/news/musk-openai-lawsuit-dismissed-jury-recommendation/):" },
      { type: "pullquote", text: "\"It's not a technical decision, it's a substantive one. You brought your claims too late, and you did it because you were sitting on them to use them as a weapon of a competitor who can't compete in the marketplace.\" \"The finding of the jury confirms that what this lawsuit was was a hypocritical attempt to sabotage a competitor and to overcome a long history of very bad predictions about what OpenAI has been and will become.\"" },
      { type: "paragraph", text: "Toberoff, [via CNN Business](https://www.cnn.com/2026/05/18/tech/openai-musk-lawsuit-verdict):" },
      { type: "pullquote", text: "\"At its core, [this case] is about preserving charities from this kind of exploitation. If they get away with it, they shouldn't.\"" },
      { type: "paragraph", text: "Musk on X within hours, [captured by CBS News](https://www.cbsnews.com/news/musk-openai-lawsuit-dismissed-jury-recommendation/):" },
      { type: "pullquote", text: "\"Regarding the OpenAI case, the judge & jury never actually ruled on the merits of the case, just on a calendar technicality.\" \"I will be filing an appeal with the Ninth Circuit, because creating a precedent to loot charities is incredibly destructive to charitable giving in America.\"" },
      { type: "paragraph", text: "The defense framed the decision as substantive, not technical. The plaintiff framed the case as charitable exploitation. The litigant framed it on the platform he owns. Three sound bites in front of the same courthouse door, all on May 18, all under the same camera light." },
      { type: "heading", text: "The 9th Circuit math" },
      { type: "paragraph", text: "Steven Molo told the bench, with the verdict still on the record, that the team wanted to get going on the appeal. He told reporters the appellate theory would run partly on the continuing-violation doctrine, a legal concept that can extend the statute of limitations where there has been a long pattern of wrongful conduct. [NBC News](https://www.nbcnews.com/tech/tech-news/openai-elon-musk-case-verdict-rcna345655) walked the framing. [MIT Technology Review](https://www.technologyreview.com/2026/05/18/1137488/elon-musk-suit-openai-verdict/) corroborated. Molo told the court the team had not yet decided how it would proceed but was preserving its right to appeal." },
      { type: "paragraph", text: "The Ninth Circuit's posture on statute-of-limitations dismissals in fiduciary-duty and charitable-trust cases is the math now in front of Musk's counsel. A [Northwestern Law expert page](https://news.northwestern.edu/stories/2026/05/northwestern-legal-expert-on-jury-ruling-in-openais-favor-in-musk-v-altman-court-battle) on the verdict paraphrased the appellate outlook in one sentence: a statute-of-limitations dismissal is difficult to overturn. The trial court ran an advisory-jury procedure on the limitations question, the judge adopted the advisory finding from the bench within minutes of receiving the note, and the judge added the bench remark that there was a substantial amount of evidence supporting the finding. An appellate panel reading that record sees a district judge who told the courtroom she was prepared to dismiss on the spot. The continuing-violation theory has to clear that record before it reaches the merits Molo wants the panel to weigh." },
      { type: "paragraph", text: "No Notice of Appeal had been docketed at the Ninth Circuit as of this readout's search window. Musk has stated intent on X. Molo has stated intent in court. Toberoff has stated intent on the courthouse steps. The trial-court door is closed. What sits between that door and the appellate door is the procedural posture Savitt set in opening on April 27 and held through verdict on May 18. Two clauses against three words. Twelve trial days. Eleven witnesses. One hour fifty-three minutes of deliberation. The calendar gambit ended the way it began. In two clauses. On the calendar." },
    ],
  },
  {
    slug: "montgomery-kavanaugh-cascade",
    tag: "Deep Dive",
    title: "Kavanaugh's Cascade: Montgomery in a 72 Billion Dollar Market 58 Quarters Hot",
    subtitle: "Justice Amy Coney Barrett retired a 32-year preemption shield in six pages. Justice Kavanaugh, joined by Justice Alito, wrote the price tag.",
    readTime: "13 min read",
    author: "Wesley Todd",
    date: "May 19, 2026",
    trending: true,
    content: [
      { type: "heading", text: "Kavanaugh's six sentences and a 72 billion dollar industry that did not see them coming" },
      { type: "paragraph", text: "Thursday morning, May 14, the slip opinion in [No. 24-1238](https://www.law.cornell.edu/supremecourt/text/24-1238) hit the Court's electronic docket. Justice Brett Kavanaugh, writing separately and joined by Justice Samuel Alito, had attached six sentences to a unanimous opinion. The six sentences carried a price tag." },
      { type: "pullquote", text: "\"the costs of litigation and insurance, as well as the costs of brokers' conducting more substantial inquiries into trucking companies, will cascade through the economy and be paid in part by American consumers in the form of higher prices.\"" },
      { type: "paragraph", text: "The market those words land on had run [58 consecutive quarters of premium increases](https://riskandinsurance.com/soft-market-emerges-as-commercial-insurance-premiums-flatten-in-q4-2025/) through the fourth quarter of 2025, the longest streak of any commercial property and casualty line by a wide margin. It booked [$72.18 billion of direct premium written in 2024](https://news.ambest.com/newscontent.aspx?refnum=267512&altsrc=23), up 12.1 percent year over year per AM Best's annual industry ranking." },
      { type: "paragraph", text: "The slip opinion dropped four business days after the Bureau of Labor Statistics released the April 2026 Consumer Price Index print showing headline inflation at 3.8 percent year over year, the highest annual print since May 2023, with energy at +17.9 percent and food at +3.2 percent. It dropped one business day after BLS released the April 2026 Producer Price Index for Final Demand Transportation and Warehousing Services at +5.0 percent month over month. The cascade prediction sits in the United States Reports. The macro conditions under which an added cost layer most readily passes to the consumer sat in the BLS release archive when the slip opinion dropped." },
      { type: "paragraph", text: "Trucking trade press and law-firm client alerts in the five business days since have read Montgomery doctrinally. The FAAAA preemption shield is gone. State-law negligent-hiring claims against freight brokers will now reach the merits. Brokers will litigate, settle, or lose those claims rather than dispose of them on a motion to dismiss. True, all of it. None of it captures the magnitude." },
      { type: "paragraph", text: "The magnitude sits in the Kavanaugh concurrence. The Court itself, through Kavanaugh and Alito, published a cost-pass-through prediction inside a unanimous opinion. The first time in modern memory a sitting Justice has done so in a freight-transportation case, landing on a 58-quarter rate-increase streak in commercial auto with a $31.3 billion 2024 nuclear-verdict environment running underneath. The cascade is on the calendar." },
      { type: "heading", text: "Barrett's six-page majority and the textualist trap" },
      { type: "paragraph", text: "The majority opinion was authored by [Justice Amy Coney Barrett](https://www.law.cornell.edu/supremecourt/text/24-1238). It was unanimous. It was, in the characterization of Transport Topics's same-day coverage, \"remarkably concise\" at roughly six pages. There was no dissent. Justice Sonia Sotomayor did not write the opinion, despite early-cycle intake confusion in some trade-press summaries that briefly attributed it to her; the official slip opinion as posted by the Court and reproduced by Cornell Legal Information Institute names Barrett as the author and notes the Kavanaugh concurrence joined by Alito." },
      { type: "paragraph", text: "Barrett's interpretive move was textualist. The Federal Aviation Administration Authorization Act of 1994 preempts state laws \"related to a price, route, or service of any motor carrier or broker.\" The Act also contains a savings clause preserving state authority \"with respect to the safety regulatory authority of a State with respect to motor vehicles.\" The question presented in Montgomery was whether the savings clause reaches state-law negligent-hiring claims against freight brokers. The Ninth Circuit, in [Miller v. C.H. Robinson](https://cdn.ca9.uscourts.gov/datastore/opinions/2020/09/28/19-35744.pdf) (2020), said yes. The Seventh Circuit, in Ye v. GlobalTranz (2023), said no. The split lasted three years." },
      { type: "paragraph", text: "Barrett resolved it by construing \"with respect to motor vehicles\" to mean \"concerns\" rather than the narrower \"is directed at.\" The broader reading lets negligent-hiring tort suits fit within the savings clause because such suits concern the safety of motor vehicles even though their immediate object is the broker's hiring conduct. The holding, in Cornell LII's summary of the slip opinion: \"A claim that one company negligently hired another to transport goods is not preempted by the FAAAA because States retain authority to regulate safety 'with respect to motor vehicles' under the Act.\"" },
      { type: "paragraph", text: "Barrett's textualism left the broker bar no daylight for a narrowing construction. The opinion does not adopt a multi-factor test. It does not draw a line that lets some negligent-hiring claims through and stops others at the pleading stage. It identifies one statutory clause, gives it the broader of two ordinary-language readings, and ends. The Faegre Drinker client alert published Thursday afternoon flagged this as the structural problem for the defense bar going forward. Plaintiff counsel will plead within the four corners of Barrett's textualism. Broker defense counsel will litigate ordinary-negligence merits, not preemption." },
      { type: "heading", text: "The 58-quarter streak meets a new exposure class" },
      { type: "paragraph", text: "The [Council of Insurance Agents and Brokers Q4 2025 Commercial Property and Casualty Market Index](https://riskandinsurance.com/soft-market-emerges-as-commercial-insurance-premiums-flatten-in-q4-2025/), released in February 2026, reported commercial-auto premiums up 6.6 percent in the fourth quarter of 2025, \"the highest out of all lines by a large margin.\" That increase extended the commercial-auto rate-increase streak to 58 consecutive quarters, an unbroken run since the third quarter of 2011. No other commercial line is in the same neighborhood. Workers' compensation has cycled through soft and hard markets twice in that window. Commercial property had a single-digit-quarter streak that ended with the 2025 reinsurance softening. Commercial auto is the outlier." },
      { type: "paragraph", text: "Underneath the rate streak is a loss-cost trajectory that explains it. AM Best, in its September 2025 commercial-auto outlook, reported that the average commercial-auto claim cost more than doubled between 2015 and 2024, growing approximately 8 percent annually. The Insurance Information Institute, in its joint analysis with the Casualty Actuarial Society, calculated that the commercial-auto loss-severity index rose 93.5 percent over the same window. S&P Global Market Intelligence projects the commercial-auto combined ratio at 104.4 in 2026, rising to 106.3 by 2029. A combined ratio above 100 means insurers are paying out more than they are taking in on net premium written. The 2026 projection is PROVISIONAL per R2 deep research, sourced through Carrier Management; the directional point that the line was unprofitable on an underwriting basis before Montgomery added a new tort theory to the loss pool is not provisional. It is the documented baseline." },
      { type: "paragraph", text: "Montgomery adds a new exposure class to that loss pool. The negligent-selection theory against freight brokers had not previously contributed meaningfully to commercial-auto loss costs because FAAAA preemption disposed of the theory at the pleading stage in most jurisdictions. After Montgomery, the theory survives motion-to-dismiss in every federal jurisdiction and most state jurisdictions, which means discovery, which means depositions, which means settlement values calibrated to the new merits-stage litigation cost and the new severity environment." },
      { type: "paragraph", text: "The 58-quarter rate streak met its next driver. Thursday morning." },
      { type: "heading", text: "$31.3 billion in nuclear verdicts, 2024" },
      { type: "paragraph", text: "The severity environment into which the new exposure class enters is documented in [Marathon Strategies's \"Corporate Verdicts Go Thermonuclear\"](https://marathonstrategies.com/corporate-verdicts-go-thermonuclear-data/) annual report, with the 2024 figures released and covered by Transport Topics on 2026-01-23. The headline number is $31.3 billion of nuclear verdicts against corporate defendants in 2024, where \"nuclear\" is defined as a single verdict of $10 million or more. The 2024 total is up 116 percent over 2023. The case count is 135 in 2024 versus 89 in 2023, a 52 percent year-over-year jump. Within the 135 cases, 49 broke the $100 million threshold, what Marathon labels \"thermonuclear,\" up 81 percent year over year." },
      { type: "paragraph", text: "The trucking-defendant subset of those nuclear verdicts in 2024 ran eight cases with a combined total of $790.5 million. The trucking and automotive subset combined ran fifteen cases totaling more than $1.4 billion. Median nuclear-verdict severity has climbed in parallel with the count. The 2023 median nuclear verdict ran $44 million. Up from $21 million in 2020. The venue concentration matters. The 2024 top venues by nuclear-verdict dollars: Nevada $8.4 billion, California $6.9 billion, Pennsylvania $3.4 billion, Texas $3.0 billion, New York $2.1 billion. Those five states absorbed the bulk of the year's catastrophic-verdict dollars and are the jurisdictions in which the post-Montgomery plaintiff bar will be filing the first wave of broker negligent-selection cases." },
      { type: "paragraph", text: "Montgomery did not create that severity curve. The Triple-I and Casualty Actuarial Society 2025 joint analysis attributes [approximately $230 billion in cumulative liability-loss costs](https://www.iii.org/press-release/legal-system-abuse-not-just-economic-inflation-drives-liability-insurance-losses-by-more-than-230-billion-over-past-10-years-new-triple-i-casualty-actuary-society-analysis-shows-103025) over the 2014-2023 period to social inflation and legal-system abuse, of which approximately $30 billion is incremental commercial-auto claim cost. Those numbers are PROVISIONAL per R2 deep research because they are aggregations of industry analysis rather than a single primary projection. The directional point stands. The severity environment was already steepening before the slip opinion dropped. Montgomery opened a new class of defendant to it." },
      { type: "heading", text: "What the BMC-84 bond doesn't cover" },
      { type: "paragraph", text: "The freight-broker financial-responsibility regime Congress built in the Moving Ahead for Progress in the 21st Century Act of 2013 has two layers. The first is the [BMC-84 surety bond at $75,000 per broker](https://www.fmcsa.dot.gov/registration/broker-registration), administered by the Federal Motor Carrier Safety Administration. The second is the broker errors-and-omissions insurance market, which is private and underwritten by a small number of program-broker specialists. Neither responds to a negligent-selection tort judgment against the broker." },
      { type: "paragraph", text: "The BMC-84 bond is a financial-responsibility minimum designed to ensure that brokered freight charges and brokered carrier payments do not default on the broker's insolvency. It does not respond to bodily-injury or property-damage claims. The standard broker errors-and-omissions policy responds to \"miscommunication, incorrect shipment details, or contract disputes,\" in the language of policy materials published by Reliance Partners, DAT, PFA Transportation, NFP, and Amwins; bodily injury and property damage are excluded from the policy by industry-standard wording. R2 deep research confirms this exclusion across five independent program-broker sources. The Hanson Bridgett and Faegre Drinker client alerts both flagged the gap in their Thursday-afternoon Montgomery analyses." },
      { type: "paragraph", text: "The typical mid-market broker carries $1 million to $2 million per-occurrence E&O capacity. The $5 million to $20 million per-occurrence band exists but runs capacity-constrained, growing at a stated 14.9 percent compound annual rate per NAPA Benefits and MoneyGeek 2026 reports, a figure PROVISIONAL per R2 because it is secondary aggregation. The Amwins \"Truck Brokers' Contingent Liability\" product is one of the few existing structures purpose-built to bridge the bodily-injury exclusion in standard broker E&O, and its existence is the market's own acknowledgment that the gap is real." },
      { type: "paragraph", text: "Underwriters now ask one question. Does the gap-bridging product class grow fast enough through the 2026 renewal cycle to absorb the new exposure, or does the broker's balance sheet absorb it as a self-funded retention?" },
      { type: "heading", text: "Decided into a reflation episode" },
      { type: "paragraph", text: "The April 2026 BLS releases were the macro context the slip opinion dropped into. The [CPI release dated 2026-05-12](https://www.bls.gov/news.release/cpi.nr0.htm) showed all-items CPI up 0.6 percent month over month seasonally adjusted, and up 3.8 percent year over year not seasonally adjusted. The verbatim BLS language: \"Over the last 12 months, the all items index increased 3.8 percent before seasonal adjustment.\" Core CPI excluding food and energy ran +0.4 percent month over month and +2.8 percent year over year. Energy ran +3.8 percent month over month and +17.9 percent year over year. Food ran +0.5 percent month over month and +3.2 percent year over year, with food-at-home (grocery) at +0.7 percent month over month and +2.9 percent year over year. CNN Business characterized the 3.8 percent annual headline print as the highest since May 2023, with energy alone accounting for \"over forty percent of the monthly all items increase.\"" },
      { type: "paragraph", text: "The April 2026 [PPI release dated 2026-05-13](https://www.bls.gov/news.release/ppi.nr0.htm) reported Final Demand Transportation and Warehousing Services up 5.0 percent month over month. The Bureau of Transportation Statistics's Transportation PPI for April 2026 showed Freight Transportation and Equipment up 2.4 percent year over year. The PPI release went out one business day before the slip opinion." },
      { type: "paragraph", text: "Kavanaugh's cascade prediction is, in the language of contemporaneous Federal Reserve speeches and the Wall Street Journal's economics coverage, a cost-push inflation prediction with a specific transmission channel. Cost-push inflation passes most readily to the consumer when the demand side is firm and substitution options are limited. The April 2026 macro environment satisfied both conditions. Energy at +17.9 percent year over year and grocery at +2.9 percent year over year describe a household budget already absorbing reflation across the categories most sensitive to truck-delivered cost. The transportation-services PPI at +5.0 percent month over month describes the freight layer specifically running hot before the new cost layer arrived." },
      { type: "paragraph", text: "Kavanaugh's six sentences are not a prediction about a hypothetical future inflation episode. They are a prediction about a cost transmission channel running in April 2026." },
      { type: "heading", text: "Why Sysco and US Foods read the slip opinion on Wednesday" },
      { type: "paragraph", text: "The shipper end of the cascade is concentrated. [Walmart fiscal 2025 revenue was $680.99 billion](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm) per the Walmart 10-K, with private fleet handling 15 to 20 percent of freight in-house and the balance moving through carriers and brokers. Sysco fiscal 2025 revenue ran $81.37 billion across 337 distribution facilities and approximately 19,000 delivery vehicles, 91 percent of which are owned by Sysco; inbound long-haul to those distribution centers nonetheless touches brokered carrier capacity. US Foods, Amazon, Target, and the major grocery chains run analogous mixes of private fleet, asset-based carrier, and broker-arranged loads." },
      { type: "paragraph", text: "The freight intermediary layer they procure through is sized. The Armstrong & Associates 2026 Convergence report puts US 3PL gross revenue at $323.4 billion in 2025, with net 3PL revenue at $138 billion. The top 20 brokers account for roughly $53.733 billion of that gross revenue, a figure PROVISIONAL per R2 from FreightCaviar aggregation. The top 5 brokers account for slightly under 50 percent. C.H. Robinson alone moves $23 billion of freight annually across 83,000 customers and 450,000 contract carriers, per Statista on company disclosures, with 2025 quarterly revenue running $4.0 billion, $4.1 billion, third-quarter figure not pulled in this research pass, and $3.9 billion in Q4 for an annualized roughly $16 billion in CHRW revenue per its SEC EDGAR 8-K filings." },
      { type: "paragraph", text: "The stock-price reaction on decision day was traceable. C.H. Robinson closed at $163.59 per a Citi Research note relayed by Seeking Alpha that characterized the direct financial impact on CHRW as \"modest due to its strong financial footing.\" Citi's read was that smaller brokers would face the squeeze. RXO traded in a same-day intraday range of $16.75 to $20.40, a figure PROVISIONAL per R2 because it aggregates GuruFocus intraday tape rather than NYSE TAQ. Simply Wall St flagged J.B. Hunt Transport Services as a relative beneficiary of the post-Montgomery asset-light versus vertically-integrated split on the theory that J.B. Hunt's intermodal and owned-trucking mix carries lower negligent-selection exposure than the predominantly asset-light CHRW, RXO, and XPO models. Specific same-day reactions for XPO and Hub Group were not surfaced in R2's pass and are not asserted here." },
      { type: "paragraph", text: "The cascade Kavanaugh predicted runs from the broker's E&O retention through the broker's primary auto-liability tower through the broker's excess-liability tower through the broker's indemnity-bearing master service agreement with the shipper through the shipper's own logistics cost line through the shipper's price to the consumer. The IMA Q4 2025 Property & Casualty Markets in Focus report had already flagged excess-liability fleet exposures running plus 10 to plus 15 percent in renewal, with carriers reducing line sizes and the $1 million to $2 million lead-umbrella layer described as \"the tightest.\" That renewal-cycle pressure predates Montgomery. The Montgomery layer adds to it." },
      { type: "heading", text: "The plaintiff bar in 2026 and the doctrinal arc back to 1994" },
      { type: "paragraph", text: "The plaintiff bar moved within hours. Walkup, Melodia, Kelly & Schoenberger, the San Francisco firm representing fatal-collision plaintiffs in California Superior Court, posted \"Supreme Court Delivers Good News For Victims Of Negligently Selected Trucking Brokers\" on its firm site on Wednesday May 14, decision day. Scolaro Law in New York posted \"Unanimous Supreme Court Decision in Montgomery v. Caribe Transport Expands Recovery for Trucking Accident Victims\" the same week. McFarlane Law, Collins Law, and Bowman Law in Colorado all posted claim-acquisition materials within five business days. The intake calendar on the plaintiff side is functioning in days, not weeks." },
      { type: "paragraph", text: "The defense bar's analytical infrastructure ran in parallel. The Matthiesen, Wickert & Lehrer client alert and the Faegre Drinker post identified at least five named theories of liability now open against freight brokers in the wake of Montgomery: negligent hiring or selection of motor carrier (the direct Montgomery theory), negligent supervision of motor carrier during shipment, negligent entrustment where the broker had access to FMCSA Safety Measurement System or Compliance Safety Accountability score data showing pattern violations, common-law aiding-and-abetting under state tort doctrines, and vicarious liability theories where the broker-carrier relationship can be reframed as agency. The standard of care across all five is ordinary negligence, not strict liability. Barrett's opinion explicitly does not impose strict liability. The Faegre Drinker analysis emphasizes that the ordinary-negligence standard preserves factual ground for the defense to litigate, which is true; the defense ground is no longer the pleading stage, and that is the structural change." },
      { type: "paragraph", text: "The doctrinal arc closes a thirty-two-year loop. The FAAAA was enacted in 1994 to extend the deregulation that began with the Airline Deregulation Act of 1978 and the Motor Carrier Act of 1980. The freight-brokerage industry as a distinct industry emerged after the Motor Carrier Act, when revenue per truckload-ton fell 22 percent in real terms from 1979 to 1986 per the Surface Freight Transportation Deregulation literature surfaced through Econlib. The brokerage layer is itself a deregulation artifact, and the FAAAA preemption shield it accreted over thirty-two years was the doctrinal complement to that deregulation. Justice Barrett's six pages do not unwind the 1980 deregulation. They unwind the broker-specific preemption complement to it." },
      { type: "heading", text: "The 1/1/2027 reinsurance renewal clock" },
      { type: "paragraph", text: "Five business days after Montgomery, [Munich Re and Swiss Re](https://www.munichre.com/en/insights/mobility-and-transport/insurance-insights-for-fleets.html) have published no public commentary on the decision. Munich Re is the largest reinsurer in the world by gross premium written, at roughly $52 billion GPW per beinsure.com 2026 rankings, with net premium written at roughly $49 billion. Swiss Re is the second largest at roughly $40 billion GPW and $37 billion NPW. Together the two account for the bulk of US commercial-auto excess-of-loss reinsurance treaty capacity. The 1/1/2027 treaty renewal cycle is seven and a half months out as of this writing." },
      { type: "paragraph", text: "The absence of public reinsurer commentary at the five-business-day mark is operationally informative. Major reinsurers typically publish same-day or next-day client alerts on adverse-loss-environment court decisions, particularly where the decision opens a new exposure class. The five-day silence supports one of two readings. The first is that Munich Re and Swiss Re are still modeling the exposure, in which case the public-comment window opens at the next quarterly outlook publication, typically late June for AM Best's E&S outlook and roughly mid-quarter for individual reinsurer client communications. The second is that the reinsurers have concluded Montgomery stays within the primary and excess layers of broker and motor-carrier coverage and does not reach excess-of-loss reinsurance treaties. Both readings are informative. Neither is yet confirmed by primary-source reinsurer commentary. R2 deep research explicitly labels the \"silence is informative\" framing as OBSERVATION rather than citable analysis." },
      { type: "paragraph", text: "The casualty reinsurance market broadly entered 2026 with what industry-watchers characterized as stable rates, on the read that casualty business benefits from higher reinsurance capital allocation in a year of moderating catastrophe activity. That commentary predates Montgomery. The empirical question is whether the 1/1/2027 renewals price the new exposure into commercial-auto treaty rates and into broker-specific facultative reinsurance. The watch-list signal is the next AM Best E&S quarterly outlook in late June 2026, followed by the September and early-fall reinsurer broker reports from Aon, Howden Tiger, and Guy Carpenter that traditionally set the tone for the 1/1 renewal cycle." },
      { type: "heading", text: "The Cantwell-Graves legislative gap" },
      { type: "paragraph", text: "The legislative-fix path is open and unattended five business days after the decision. The [Transportation Intermediaries Association](https://www.ttnews.com/articles/scotus-broker-liability), through President and CEO Chris Burroughs, published a same-day statement characterizing the ruling as \"deeply disappointing\" and arguing it \"imposes an impossible task on brokers, effectively asking them to evaluate the safety of a given motor carrier despite having been deemed safe to operate on public roads by the federal government.\" Burroughs offered the operative analogy: \"This is like asking travel agents to evaluate the safety of a given airline despite the fact that the airline has been licensed to fly by the federal government.\" The [National Federation of Independent Business](https://www.nfib.com/news/press-release/supreme-court-declines-to-protect-shipping-industry/), through VP and NFIB Small Business Legal Center Executive Director Beth Milito, published a same-day statement that read in part: \"This decision doesn't just expand freight broker liability, it eliminates all clarity and consistency in motor carrier safety standards for our nation's supply chains. Without a uniform standard, every small business who uses a trucking company will be hit with higher costs and reduced availability as the resulting patchwork of rules and risk ricochets through the supply chain.\" NFIB had filed an amicus brief on the broker side." },
      { type: "paragraph", text: "What did not happen in the five business days following the decision is a public statement from House Transportation and Infrastructure Committee Chair Sam Graves, Republican of Missouri, or from Senate Commerce Committee Ranking Member Maria Cantwell, Democrat of Washington. R2 deep research exhausted search across graves.house.gov press releases, the T&I Committee site, Landline Media, Transport Topics, commerce.senate.gov, and the relevant trade press for the 2026-05-14 through 2026-05-19 window without surfacing a Montgomery statement from either member. No FAAAA amendment bill draft has been located. The Daily Caller referenced an industry tort-reform lobbying response framed as \"the hidden tax bleeding your wallet dry\" but that is opinion-page commentary, not legislative text. R2 labels the legislative absence UNVERIFIED in the sense that the absence itself is asserted only as \"not located in this research pass,\" not as the absolute claim that no such statement exists." },
      { type: "paragraph", text: "The legislative-gap framing matters because Kavanaugh's concurrence is, structurally, an invitation. He observes that the FAAAA mandates minimum insurance coverage for trucking companies but not for brokers, a structural gap suggesting Congress did not anticipate broker tort exposure in 1994; if Congress had anticipated broker tort exposure, \"it presumably would have mandated insurance for them too.\" That sentence is a roadmap for a FAAAA amendment that would either preempt state-law negligent-selection claims directly or impose a federal minimum-insurance regime for brokers analogous to the FMCSA-mandated minimum for motor carriers. The roadmap sits in a concurrence joined by two Justices. The committees of jurisdiction have not, as of fetch date 2026-05-19, taken it up." },
      { type: "heading", text: "Closing" },
      { type: "paragraph", text: "The Kavanaugh concurrence is a cost-cascade prediction published in the United States Reports, into a $72.18 billion industry that has run 58 consecutive quarters of premium increases, against a $31.3 billion nuclear-verdict environment, on a decision day that came four business days after a +3.8 percent CPI print and one business day after a +5.0 percent monthly transportation-services PPI print. The cascade is on the calendar. The next public reinsurance signal is approximately seven weeks out at the AM Best E&S quarterly outlook. The legislative-fix window opens whenever Chairman Graves or Ranking Member Cantwell decides to open it. Justice Barrett wrote the opinion. Justice Kavanaugh wrote the price tag." },
    ],
  },
  {
    slug: "musk-v-openai-closing-args-directed-verdict",
    tag: "Special Report",
    title: "One Jury Answer Ends the Case for Musk, the Judge Said",
    subtitle: "Judge Gonzalez Rogers told Musk's lead counsel from the bench on Thursday that a single jury finding on the statute of limitations is highly likely to direct verdict for the defendants. The F500 audit-committee lesson is that calendar diligence, not the moral weight of the breach, is the dispositive variable in a charitable-trust suit.",
    readTime: "8 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: true,
    content: [
      { type: "heading", text: "The bench reprimand and the one-sentence directed-verdict pre-commitment" },
      { type: "paragraph", text: "Judge Yvonne Gonzalez Rogers cleared the jury on Thursday afternoon in the Ronald V. Dellums Federal Building in Oakland, turned to Steven Molo, Musk's lead trial counsel, and put a single sentence on the record that reshapes how this case ends." },
      { type: "pullquote", text: "\"If the jury finds that Musk failed to file his action within the statute of limitations, it is highly likely [I will] accept that finding and direct verdict to the defendants.\"" },
      { type: "paragraph", text: "That is not a trial-management aside. It is a pre-commitment from the bench, said in open court with the parties present, that one jury answer on one procedural question will end a multi-billion-dollar charitable-trust suit before the merits are reached. The same hearing produced a second bench warning. Gonzalez Rogers reminded Musk's team that the plaintiff is seeking billions of dollars of disgorgement, and told counsel to either retract the no-money statement from the trial record or \"drop your claim for billions of dollars.\" Closing arguments proceeded from there." },
      { type: "paragraph", text: "This is the eighth installment of the Litigation Sentinel Special Report series on Musk v. Altman, docket 4:24-cv-04722, N.D. Cal., and it is the bookend. Jury deliberations begin Monday May 18. The remedies-phase record is running in parallel. The narrative the press has been chasing for a week is the celebrity drama. The narrative an F500 General Counsel needs to brief to the audit committee on Monday morning is procedural, and it lives in that one sentence." },
      { type: "heading", text: "Why one question ends a multi-billion-dollar case" },
      { type: "paragraph", text: "The statute-of-limitations defense is the cleanest exit ramp in fiduciary-duty litigation. It does not require the trier of fact to weigh the credibility of the witnesses, the moral weight of the conduct, or the equitable balance between the parties. It asks one question. Did the plaintiff file within the window the law allows after the plaintiff knew or should have known of the breach." },
      { type: "paragraph", text: "Under California law, the limitations clock on a breach-of-charitable-trust claim runs from accrual under the discovery rule. The defense theory has been on the record since OpenAI's motion practice. Musk knew of the for-profit conversion plans by 2017 and 2018. The OpenAI LP entity was publicly announced in March 2019. Musk's contemporaneous communications, surfaced through the Brockman journal and the Birchall testimony, place him squarely inside the room where the conversion was discussed. The complaint was filed in August 2024. The defense's argument is that the three-year clock for fraud and the four-year clock for breach of fiduciary duty both expired before he walked into court." },
      { type: "paragraph", text: "The reason this matters at the audit-committee level is that the limitations defense is not a moral defense. It is a calendar defense. It can succeed where a moral defense would fail. A board that approves a nonprofit-to-PBC conversion, an AI-vendor partnership tied to a former charitable affiliate, or any transaction that could later be challenged by historical donors needs to understand that the survivability of the challenge turns on what the donors knew and when, and whether they sat on the claim past the statutory window." },
      { type: "pullquote", text: "The dispositive variable in a charitable-trust case is not whether the breach happened. It is whether the plaintiff sued in time." },
      { type: "paragraph", text: "Gonzalez Rogers signaled on Thursday that she would respect the jury's answer on that question if the jury reaches it. That is the procedural posture the audit committee should be briefed against." },
      { type: "heading", text: "The five witnesses who called Altman a liar" },
      { type: "paragraph", text: "Molo closed with the credibility frame. He told the jury that the case is, at its core, about whether Sam Altman can be believed." },
      { type: "pullquote", text: "\"Sam Altman's credibility is directly at issue in this case. If you cannot trust him, if you don't believe him, they cannot win. It's that simple.\"" },
      { type: "paragraph", text: "Molo went further later in the same closing. \"Liar's a very powerful word in a courtroom.\" He used it deliberately. The frame is supported by the trial record. Five witnesses testified under oath that Altman was not truthful with them or with the board. Helen Toner and Tasha McCauley, former OpenAI directors. Mira Murati, former chief technology officer. Ilya Sutskever, former chief scientist. Musk himself. Three of the five sat on or reported into the board of a California 501(c)(3) public-benefit corporation during the period in question." },
      { type: "paragraph", text: "The governance implication is precise. When five witnesses with direct board-level or executive-level exposure to a CEO testify under oath that the CEO was not truthful, the General Counsel of any company contemplating that CEO as a partner, an acquirer, or a portfolio counterparty has a documented credibility record to brief against. It does not need to win in court for the audit committee to weigh it. The transcript is the artifact." },
      { type: "paragraph", text: "This is also the audit-committee lesson for any F500 board that maintains an executive AI vendor relationship. The board does not need to wait for a verdict to update its diligence file. The five-witness pattern is now public record." },
      { type: "heading", text: "The defense's failed-competitor frame" },
      { type: "paragraph", text: "William Savitt, closing for Altman, took the opposite tack. He told the jury Musk was a frustrated competitor dressed in charitable-trust clothing." },
      { type: "pullquote", text: "\"Musk may have the Midas touch in some areas, but not in AI. To succeed in AI, as it turns out, all Mr. Musk can do is come to court.\"" },
      { type: "paragraph", text: "The framing matters beyond the Musk fact pattern. The failed-competitor theory is the cleanest defense to any historical-donor suit. It reframes the plaintiff's standing. It tells the trier that the plaintiff is not enforcing a charitable trust, the plaintiff is using the charitable-trust statute as a competitive weapon. Every F500 corporate foundation that has ever made a large gift to an affiliated or partnered nonprofit needs to read that paragraph twice. The defense to a future donor-suit by a former corporate parent or strategic competitor will look exactly like Savitt's closing. The board minutes that record the original gift, the strategic rationale, and the disclosed competitive position at the time of the gift become the primary diligence record." },
      { type: "heading", text: "The no-strings-attached doctrine" },
      { type: "paragraph", text: "Sarah Eddy, also closing for OpenAI, distilled the defense's substantive argument into one sentence." },
      { type: "pullquote", text: "\"If the donations came with no strings attached, then Mr. Musk does not have a charitable trust to enforce.\"" },
      { type: "paragraph", text: "That is a diligence test, expressed as a doctrine. It is also a one-sentence checklist for any F500 corporate-giving program. If a gift was made with no written restriction at the time of the transfer, the donor has no standing to enforce a use restriction later. The doctrinal home is California Probate Code §16002 and Corporations Code §5142, both of which run from the gift instrument and the contemporaneous record. If the gift documentation is silent, the post-hoc enforcement claim is weak." },
      { type: "paragraph", text: "The audit-committee takeaway is to inventory every charitable gift over a defined threshold made by the company or its founders to any entity the company now does commercial business with, and confirm whether the gift instrument contains an enforceable use restriction at the time of transfer. If the answer is no, the company has no charitable-trust claim against the recipient regardless of what the recipient later did with the funds. The defense Eddy ran on Thursday is the defense the recipient will run if the question is ever raised." },
      { type: "heading", text: "The remedies-phase parallel track" },
      { type: "paragraph", text: "Gonzalez Rogers has run the remedies-phase record in parallel with the liability phase. That is unusual. Most federal courts bifurcate cleanly. Liability first, remedies second. The parallel posture in Oakland signals that the court anticipates non-trivial liability findings on at least one count, and is positioning to move directly to equitable relief without losing weeks of trial calendar." },
      { type: "paragraph", text: "The remaining theories at closing are narrow. Breach of charitable trust against OpenAI, Altman, and Brockman. Unjust enrichment against Altman and Brockman. Aiding and abetting breach of charitable trust against Microsoft. The remedies record covers disgorgement, rescission of the for-profit conversion, removal of Altman as CEO, and constructive trust over the charitable share of OpenAI Inc.'s equity in OpenAI LP. The parallel scheduling means the court could rule on equitable relief inside weeks of an advisory verdict, not months." },
      { type: "paragraph", text: "For an F500 GC, the procedural lesson is that a court running remedies and liability in parallel is a court that has already weighed the strength of the plaintiff's case and is preserving optionality on equitable relief. The audit committee should be briefed on the implication. A nonprofit-to-PBC conversion that draws a credible historical-donor challenge can reach the constructive-trust stage faster than most boards model in their risk register." },
      { type: "heading", text: "The audit-committee takeaway" },
      { type: "paragraph", text: "The brief to the audit committee on Monday morning is three sentences." },
      { type: "paragraph", text: "The judge in Musk v. Altman told both sides that one jury answer on the statute of limitations will end a multi-billion-dollar charitable-trust suit before the merits are reached. The dispositive variable in a charitable-trust challenge is not the strength of the breach evidence, it is the calendar diligence of the plaintiff and the documentary record of the original gift. Any nonprofit-to-PBC conversion, AI-vendor partnership, or corporate-giving program in front of this board should be evaluated against those two facts before the conversion or the partnership closes." },
      { type: "paragraph", text: "The litigators will spend the weekend reading the closings. The General Counsel should spend it pulling the gift instruments and the conversion-board minutes." },
      { type: "paragraph", text: "Sources. Trial coverage drawn from ABC News, CNBC, Rappler, KQED, U.S. News, and Local News Matters reporting from the Oakland courthouse on May 14, 2026. Procedural posture verified against the CourtListener docket for Musk v. Altman, 4:24-cv-04722, N.D. Cal., Hon. Yvonne Gonzalez Rogers presiding. This is the eighth and bookend installment of the Litigation Sentinel Special Report series on this trial." },
    ],
  },
  {
    slug: "claude-for-legal-compliance-page-is-blank",
    tag: "Deep Dive",
    title: "Anthropic Shipped Claude for Legal. The Compliance Page Is Blank.",
    subtitle: "On May 12, Anthropic announced Claude for Legal with eleven named launch customers including Freshfields, Quinn Emanuel, and Holland & Knight. The launch post does not mention SOC 2, BAA, zero data retention, EU residency, or privilege protection. This is not a product launch story. It is a procurement and discovery story.",
    readTime: "9 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: true,
    content: [
      { type: "heading", text: "What Was Announced and What Was Not" },
      { type: "paragraph", text: "On Tuesday May 12, 2026, Anthropic published a post at claude.com/blog/claude-for-the-legal-industry announcing Claude for Legal. The launch named eleven customers across Big Law, in-house, and the legal AI vendor stack: Freshfields, Quinn Emanuel, Holland & Knight, Crosby Legal, DocuSign, Thomson Reuters, Harvey, Accenture, Eve, Legora, and Solve Intelligence. It introduced twelve practice-area Plugins covering Litigation, Corporate, Employment, IP, Privacy, Regulatory, Commercial, Product, AI Governance, and three other domains. It enabled more than twenty MCP connectors into the systems where legal work actually happens, including Harvey and Thomson Reuters CoCounsel." },
      { type: "paragraph", text: "The launch covered features. It did not cover terms." },
      { type: "paragraph", text: "Read the post yourself. The document does not contain the strings \"SOC 2,\" \"BAA,\" \"HIPAA,\" \"ISO 27001,\" \"GDPR data residency,\" \"zero data retention,\" \"privilege carve-out,\" or any statement that the product is offered under a Master Services Agreement with confidentiality obligations binding on the vendor. The pricing model is not disclosed. The data-handling tier that a customer is on by default is not specified. The launch post says the product is for in-house legal teams. It does not say what contractual posture the in-house legal team is buying into when it adopts the product." },
      { type: "paragraph", text: "Every other legaltech outlet covered this as a product launch. Plugins, connectors, partners, ecosystem. This is not a product launch story. It is a procurement and discovery story. The GC who reads only the Bloomberg Law writeup will not see it. The GC who reads only the Anthropic blog post will not see it either." },
      { type: "heading", text: "What Mark Pike Did Not Say" },
      { type: "paragraph", text: "Mark Pike is Anthropic's Associate General Counsel and the product lead for Claude for Legal. He gave two on-the-record quotes the day of launch." },
      { type: "paragraph", text: "To Bloomberg Law: \"We see this step as in furtherance of building an ecosystem that partners have told us they enjoy seeing built on top of Claude.\"" },
      { type: "paragraph", text: "To Artificial Lawyer: \"Don't use it out of the box. It's at its best when you customize it.\"" },
      { type: "paragraph", text: "Read those two sentences twice. The product lead and Associate General Counsel of the company shipping a legal AI product is telling in-house legal teams to customize the product before they use it. He is not telling them what data the model retains. He is not telling them what residency commitments apply to documents uploaded through the twenty-plus MCP connectors. He is not telling them whether queries run through Claude for Legal are zero-retention by default or whether retention is a contract negotiation. He is telling them to customize." },
      { type: "paragraph", text: "The compliance language gap in the launch post is not an oversight. It is a positioning choice. The company shipping the product has chosen to lead with ecosystem and customization and to leave the security, retention, residency, and privilege questions to private MSA conversations with customers who know to ask. Most customers will not know to ask. That is the problem." },
      { type: "heading", text: "The Rakoff Ruling Everyone Forgot" },
      { type: "paragraph", text: "On February 10, 2026, Judge Jed Rakoff of the Southern District of New York held that a litigant's chats with consumer Claude were not protected by the attorney-client privilege or the work-product doctrine. The decision turned on a specific factual finding: the vendor was not contractually bound to the same standard of confidentiality that defines the privileged relationship. The opinion was careful to note that the analysis would be \"materially different\" with respect to enterprise tools, because in that case the vendor is contractually bound." },
      { type: "paragraph", text: "This ruling has been sitting in the case law for three months. It is the single most important judicial holding for any GC whose lawyers, in-house or outside, are using AI in client matters. It states the rule plainly. Privilege depends on contract. Consumer tier is not privileged. Enterprise tier is potentially privileged. The MSA terms are what move the case from one bucket to the other." },
      { type: "paragraph", text: "Apply that ruling to the May 12 launch. Anthropic shipped a product pitched at in-house legal teams. The launch post does not specify which Claude tier Claude for Legal sits on by default. It does not specify whether the contractual confidentiality language that satisfies Rakoff is included as standard or only as a negotiated addendum. It does not address the discoverability problem directly." },
      { type: "paragraph", text: "Every GC whose team has been using Claude Pro instead of Claude Enterprise just acquired a discoverability problem they did not have in January. Claude for Legal does not automatically solve that problem. Only the MSA terms solve it. The product launch and the underlying contract posture are two different things." },
      { type: "heading", text: "Three Procurement Paths, One Model Dependency" },
      { type: "paragraph", text: "Look at the launch customer list with one specific question in mind: how many of those vendors are routing model calls through Anthropic's Claude?" },
      { type: "paragraph", text: "Harvey is built on multiple model providers and sits inside Claude for Legal as a connector. Harvey also signed a partnership with DocuSign on May 8 to bring Harvey directly into the DocuSign contract platform. Thomson Reuters CoCounsel is built on the Anthropic Claude Agent SDK and integrates back into Claude for Legal through MCP. Eve, Legora, and Solve Intelligence are all on the partner list, all running on Anthropic infrastructure for some portion of their stack." },
      { type: "paragraph", text: "A corporate legal team that signs Harvey, signs DocuSign, and signs Claude for Legal is buying the same model dependency three separate times through three separate procurement events. The third-party-risk register treats them as three vendors. The model concentration risk treats them as one." },
      { type: "paragraph", text: "This is the same pattern that surfaced in the SolarWinds supply-chain failure, in the Okta downstream incidents, and in every shared-infrastructure dependency that registered as a portfolio risk only after a single failure took down multiple vendors at once. The legal AI stack now has that pattern. Most GC offices have not updated their vendor risk methodology to capture it." },
      { type: "paragraph", text: "The diligence question is no longer \"is Harvey safe\" or \"is CoCounsel safe.\" The diligence question is \"what is our aggregate exposure to a single model provider across every legaltech vendor in our stack.\" That number is larger than any single contract." },
      { type: "heading", text: "The Sullivan & Cromwell Reality Check" },
      { type: "paragraph", text: "On April 21, Andrew Dietderich of Sullivan & Cromwell sent a letter to Chief Bankruptcy Judge Martin Glenn admitting roughly forty AI-generated hallucinations across five court filings in the Prince Global Holdings Chapter 15 proceeding. The firm has internal AI policies. The firm has training requirements. The firm has review processes. The hallucinations landed in federal court filings anyway." },
      { type: "paragraph", text: "The outside-counsel-guideline assumption that \"premium firm AI use is safe\" is wrong. It was wrong before May 12. It is more wrong now." },
      { type: "paragraph", text: "The reason that matters here is straightforward. The Anthropic launch named Freshfields, Quinn Emanuel, and Holland & Knight as enterprise rollouts. Those firms are now defaulting more of their drafting workflow into a Claude environment. The S&C apology letter shows what happens when a firm of that caliber loses control of its AI verification process. There is no firm-brand premium that immunizes against the failure mode." },
      { type: "paragraph", text: "The GC who treats \"we use Freshfields, so we're fine on AI\" as a sufficient answer is the GC who will be the next Dietderich letter. The premium-firm assumption was load-bearing in the outside-counsel-selection model for two decades. It does not survive contact with the current evidence." },
      { type: "heading", text: "What the GC Tells the Audit Committee Monday Morning" },
      { type: "paragraph", text: "The audit committee asks one question this quarter. \"What are we doing about AI in legal work?\" The wrong answer is \"we're evaluating Claude for Legal\" or \"we're piloting Harvey.\" Those are tool decisions. The audit committee is asking a governance question." },
      { type: "paragraph", text: "The right answer has three parts." },
      { type: "paragraph", text: "First: we have inventoried which AI tier every member of the legal department is on. Not which tools they use. Which contractual tier. Consumer, Pro, Team, Enterprise. We have the list. We have moved everyone off any tier that does not carry the contractual confidentiality language that satisfies the Rakoff standard." },
      { type: "paragraph", text: "Second: we have required from every vendor in the legal AI stack a written attestation covering SOC 2 Type II, BAA where applicable, zero-data-retention by default, data residency, and an explicit privilege carve-out in the master agreement. The attestations are in the file. The vendors that cannot produce them have been moved to a remediation list with a sixty-day deadline." },
      { type: "paragraph", text: "Third: we have updated the third-party-risk register to reflect model-layer concentration. We track Anthropic exposure across Claude for Legal, Harvey, CoCounsel, and any other vendor in the stack that routes through the same model provider. The number is a single aggregate. It is reported alongside the per-vendor numbers." },
      { type: "paragraph", text: "That is the answer that closes the audit committee question. None of those three answers are about features. All of them are about contracts." },
      { type: "heading", text: "The Two Questions That Matter Before Any Pilot" },
      { type: "paragraph", text: "If your team is being asked to pilot Claude for Legal in the next sixty days, the answer is not yes or no. The answer is two questions to the vendor." },
      { type: "paragraph", text: "First. What is the data retention and residency posture of this product under the default contract? Not the negotiated MSA posture available to a Fortune 100 buyer with leverage. The default contract that the in-house counsel team operates under from day one of the pilot. If the answer is anything other than zero retention with named regional residency, the pilot does not begin until that becomes the default." },
      { type: "paragraph", text: "Second. Does the MSA include privilege protection language sufficient to support an enterprise-tier confidentiality finding under the Rakoff standard? The vendor's counsel will know what that means. If the vendor's counsel cannot point to the specific clause that answers the question, the pilot does not begin until they can." },
      { type: "paragraph", text: "These are not aggressive questions. They are the basic procurement diligence that should have been answered before the May 12 launch post went live. Anthropic chose not to answer them in the launch. Every GC who buys the product is responsible for getting the answer before signing." },
      { type: "paragraph", text: "The legaltech press will continue covering this as a product story for the next two weeks. Plugins. Connectors. Ecosystem. The procurement story is the one that matters when discovery starts. Get the contract right before the tool gets deployed. The tool is the easy part." },
    ],
  },
  {
    slug: "rakoff-ruling-claude-enterprise-mandatory",
    tag: "Deep Dive",
    title: "A Federal Judge Just Broke Privilege for Consumer Claude",
    subtitle: "On February 10, 2026, Judge Jed Rakoff held that client chats with consumer-tier Claude are not protected by the attorney-client privilege. The ruling sits underneath every legal-AI procurement decision F500 GCs will make this quarter, including the one Anthropic announced on May 12.",
    readTime: "7 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: false,
    content: [
      { type: "heading", text: "What Rakoff Held" },
      { type: "paragraph", text: "On February 10, 2026, Judge Jed S. Rakoff of the United States District Court for the Southern District of New York issued an opinion that the legal-AI industry has spent three months trying not to talk about. The holding was narrow on its face and load-bearing in its consequence. Client interactions with consumer-tier Claude, the version sold under the Pro and Max subscription plans, are not protected by the attorney-client privilege. The summary published by Herbert Smith Freehills Kramer captures the reasoning in a single sentence: Anthropic, as a consumer-tier vendor, is not contractually bound to the standard of confidentiality that a third-party agent in the attorney-client relationship would be." },
      { type: "paragraph", text: "The doctrinal hook is the agent-of-the-attorney rule. Privilege survives when an attorney shares client confidences with a third party who is bound to the same duty of confidentiality the attorney owes. Paralegals, contract reviewers, retained experts, and translation services have all been folded into the rule under decades of case law. The binding is what does the work. Consumer Claude fails the binding. The standard subscription terms permit model training on user inputs unless the user opts out, retain conversation logs for vendor purposes, and grant Anthropic employee access for safety review. The court read those terms and concluded that no agency relationship of the kind privilege requires can attach to them." },
      { type: "heading", text: "The Enterprise Carveout Is Not Cosmetic" },
      { type: "paragraph", text: "Rakoff did not write a referendum on AI in legal practice. He wrote a referendum on contracts. The opinion explicitly distinguishes the enterprise tier, noting that enterprise deployments present a \"materially different analysis\" because the vendor in that case is contractually bound to the confidentiality standard. The HSF Kramer note carries that line forward. Enterprise master service agreements typically include zero data retention, no training on customer inputs, customer-controlled retention windows, and indemnification language that imports vendor confidentiality obligations into the attorney-client chain. The word that matters in that list is \"typically.\" Not every enterprise contract carries all four. The ones that do restore the binding. The ones that do not, do not." },
      { type: "paragraph", text: "What the ruling produced, in operational terms, is a single new question that now sits underneath every conversation a lawyer has with an AI tool on a client matter. Which tier is the lawyer on. Pro. Max. Team. Enterprise. The answer is now the privilege question. Not a privilege question. The privilege question. A lawyer on a Pro account drafting a settlement memo with client facts in the prompt is, on Rakoff's reasoning, generating a discovery target. A lawyer on a properly negotiated Enterprise account doing the same thing has the binding in place." },
      { type: "heading", text: "What Anthropic Did Not Say on Monday" },
      { type: "paragraph", text: "On May 12, 2026, Anthropic announced Claude for Legal, the company's first product offering branded specifically for law firms and in-house legal teams. The launch post is a marketing document. It walks through workflow integrations, the partnerships with Harvey and a set of AmLaw 100 firms, and the case-law search and contract analysis features. The post does not name the Rakoff ruling. The post does not explain that Claude for Legal is sold across Pro, Max, Team, and Enterprise tiers and that the tier the customer buys determines whether the product carries the binding privilege requires. The post does not contain the words \"privilege,\" \"zero data retention,\" \"ZDR,\" or \"MSA.\"" },
      { type: "paragraph", text: "A general counsel reading the launch post would be forgiven for assuming that a product named \"Claude for Legal\" comes with the privilege-protective contract terms a legal product needs. It does not, automatically. The product name is a marketing layer on top of the same underlying tier structure that produced the Rakoff problem. Buying Claude for Legal on the Pro tier puts the same data in the same training pipeline and the same retention window as buying consumer Claude on the Pro tier. The contract is the product. The brand is not." },
      { type: "heading", text: "The Panel-Firm Inheritance Problem" },
      { type: "paragraph", text: "The Rakoff ruling does not stop at the GC's own legal department. F500 general counsel sit at the top of an outside-counsel panel that can run to fifty firms across litigation, regulatory, IP, employment, and corporate work. Every one of those firms now has a tier question of its own. The April 21 Sullivan & Cromwell apology letter to the Southern District of New York covered roughly forty AI-generated errors across five filings in a single Chapter 15 proceeding. The takeaway from that letter was that even AmLaw top-tier firms do not have AI use under management-level control. The Rakoff takeaway is the same problem rotated ninety degrees. If a panel firm has lawyers running consumer Claude on the F500's matters, the GC has inherited the privilege risk through the panel firm. The discoverability sits with the F500. The contract the GC needs is one the GC does not control." },
      { type: "paragraph", text: "The 2026 outside counsel guidelines most F500 legal departments are running on were written before any of this was visible. They cover hourly rates, staffing requirements, billing protocols, conflicts disclosures, and document retention. They do not cover what tier of AI subscription the firm's associates use to draft the memos that get filed under the F500's name." },
      { type: "heading", text: "The Three-Step Diligence Checklist" },
      { type: "paragraph", text: "The Rakoff ruling is not a theoretical risk. It is a discovery target that is already cited in privilege motions in the SDNY and is being briefed by the plaintiff bar in venues outside New York. A general counsel reading this article this quarter can produce a defensible posture with three concrete moves." },
      { type: "paragraph", text: "First, pull the Pro and Max tier user list from your IT or procurement department for every individual seat across the legal department and any business unit whose staff touch privileged material. Not a sample. The full list. The output of this step is a defensible record of which seats need to be migrated to Enterprise tier under a privilege-protective MSA and which need to be terminated. Map the seats against ongoing matters." },
      { type: "paragraph", text: "Second, inventory which panel firms use consumer-tier Claude or any consumer-tier AI tool on your matters. Send the question in writing on firm letterhead. The firms that cannot answer the question are the highest exposure on your panel. The firms that answer the question with \"we don't track that\" are the second highest. The firms that produce a clean per-matter audit trail are the model the panel needs to converge on." },
      { type: "paragraph", text: "Third, issue an outside counsel guideline amendment that requires Enterprise-tier or panel-firm-issued ZDR attestation for any AI used on your matters. The language can be one paragraph. The attestation requirement, not the punitive enforcement, is the operative move. Asking the question on the record changes what the firm-side workflow has to look like." },
      { type: "paragraph", text: "The Rakoff opinion will be the cited authority in the first wave of privilege motions on AI-generated work product, and the cite will be in a discovery dispute on a matter the GC is already managing. The three moves above take a quarter to run. The discovery motion that forces them does not give the GC a quarter to respond." },
      { type: "heading", text: "The Brief" },
      { type: "paragraph", text: "If you want a specific readout on where your portfolio sits against the AI-privilege exposure this ruling opens up, the Litigation Sentinel Executive Briefing is a six-question diagnostic built for that purpose. About four minutes. Produces a specific readout, not a generic one." },
      { type: "paragraph", text: "litigationsentinel.com/briefing" },
    ],
  },
  {
    slug: "information-barrier-half-life-nourafchan",
    tag: "Deep Dive",
    title: "Sidley, Latham, Goodwin, Willkie: One Lawyer, Four Firms, One Ring",
    subtitle: "Boston federal prosecutors charged 30 defendants on May 6 in an M&A insider-trading ring built around a single Yale Law-trained attorney who rotated through four AmLaw 50 firms over a decade. The audit committee question is not whether your deal leaked. It is how you would know.",
    readTime: "8 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: true,
    content: [
      { type: "heading", text: "What Happened: Four Firms, One Attorney, Thirty Defendants" },
      { type: "paragraph", text: "On May 6, 2026, the United States Attorney's Office for the District of Massachusetts and the Securities and Exchange Commission filed parallel actions in Boston charging thirty defendants in what prosecutors describe as one of the largest M&A-driven insider-trading rings ever assembled around a single law firm insider. The central tipper is Nicolo Nourafchan, a Yale Law-trained M&A associate who, between 2013 and 2023, rotated through Sidley Austin, Latham & Watkins, Goodwin Procter, and Willkie Farr & Gallagher. The indictment identifies roughly thirty unannounced transactions whose terms moved from Nourafchan's deal teams into the trading accounts of friends, family, and an organized downstream of co-conspirators that included Robert Gershowitz and twenty-eight others." },
      { type: "paragraph", text: "The confirmed deals named in the public record include the Amazon-iRobot transaction. The full universe will surface as the SEC files its disgorgement schedule and the DOJ moves to forfeiture. Bloomberg's coverage of the indictment frames it as the \"biggest insider-trading case in a generation by deal count.\" Above the Law's coverage is bluntly titled \"The BigLaw Insider-Trading Scheme, Now With More BigLaw.\"" },
      { type: "paragraph", text: "Willkie Farr & Gallagher issued a verbatim statement: \"a former employee is alleged to have engaged in conduct that would constitute a severe violation of our clear and well-defined compliance policies.\" The other three firms issued statements in the same register. Every statement is true. Every statement is also the wrong frame." },
      { type: "paragraph", text: "The story every outlet is running is a rogue-attorney story. The story the F500 general counsel has to brief the audit committee on is different. Four elite firms' information-barrier regimes failed simultaneously, over a decade, on a single rotating attorney. That is not a personnel problem. That is a doctrinal problem with the way information barriers actually work inside the firms F500 companies retain to handle the most material transactions of the year." },
      { type: "heading", text: "What an Information Barrier Is, and Why It Failed" },
      { type: "paragraph", text: "The doctrinal architecture is ABA Model Rule 1.10 (imputation of conflicts across the firm), Model Rule 1.18 (duties to prospective clients), and Model Rule 1.7 (current-client conflicts). When a firm represents Buyer in a transaction and an attorney with knowledge of that transaction moves to a firm that represents Seller, the receiving firm avoids imputed disqualification by erecting an \"ethical wall\" or \"screen\" around the lateral. The wall is supposed to do three things. Restrict the lateral's access to the conflicted matter. Prohibit any communication between the lateral and the deal team. Document the screen in writing and certify compliance to the affected client." },
      { type: "paragraph", text: "The doctrine is sound in the abstract. The Nourafchan facts demonstrate what it does not protect against." },
      { type: "paragraph", text: "A wall only restricts what the firm knows it needs to restrict. When the lateral is not on the deal team, when the deal post-dates the lateral's arrival, when the lateral has no formal access to the matter file, there is no wall because there is no triggering conflict to wall off. Nourafchan was not screened off the Amazon-iRobot transaction at any of his firms. He did not need to be. He was the deal lawyer or one node removed from the deal lawyer. He had legitimate access to the information he leaked." },
      { type: "paragraph", text: "The second failure is structural. The screening doctrine assumes the threat actor is the firm. It assumes the firm is the entity that might benefit from the leaked information and the entity that must therefore be walled off. The doctrine has no framework for the threat actor who is the attorney, acting against the firm, against the client, and against the public market simultaneously. Every confidentiality policy at every firm Nourafchan worked for prohibited exactly what he is alleged to have done. The prohibition did not stop the conduct. Detection would have. None of the four firms detected anything across a decade." },
      { type: "heading", text: "The Amazon-iRobot Trade" },
      { type: "paragraph", text: "The Amazon-iRobot deal is the named, verifiable transaction. Amazon announced its $1.7 billion acquisition of iRobot on August 5, 2022. The deal was eventually abandoned in January 2024 after European Commission opposition, but the trading window the SEC focuses on is the run-up to the announcement." },
      { type: "paragraph", text: "In the days before August 5, options activity in iRobot showed the signature pattern federal prosecutors look for. Out-of-the-money call options purchased in unusual volume by accounts with no prior history of trading iRobot. Concentrated buying in short-dated expirations. Profitable closing of those positions immediately after the announcement. The SEC's complaint walks the trading log through this exact pattern and ties the accounts to the downstream of the Nourafchan ring. The Amazon-iRobot trade alone, by the SEC's pleading, generated several million dollars in illicit profit across the named accounts." },
      { type: "paragraph", text: "For the F500 general counsel sitting across the table from her audit committee, the Amazon-iRobot example matters for a specific reason. Amazon ran a clean process. iRobot ran a clean process. The deal teams at the relevant firms followed every protocol. The leak happened anyway. The trade is visible in the options data only in retrospect, only after federal prosecutors built a multi-year case from cooperating witnesses and trading records that no individual issuer would have had standing or capacity to assemble in real time." },
      { type: "heading", text: "The Audit Committee Question Nobody Wants to Ask" },
      { type: "paragraph", text: "The question is simple. How would you know if your deal leaked?" },
      { type: "paragraph", text: "Walk through the honest answer. The general counsel does not see the options book. The investment banker does. The banker watches for unusual derivatives activity in the days before announcement and flags anomalies as part of standard rumor-and-leak protocol. That protocol is real. It is also blind to the kind of leak the Nourafchan ring ran. The downstream traders in the SEC complaint were not concentrated in one account or one venue. They were geographically dispersed, used multiple brokers, traded varying expirations, and laundered the signal through enough noise that no single banker's leak-monitoring desk would have caught the pattern." },
      { type: "paragraph", text: "The general counsel does not see the SEC's market-surveillance feeds. The exchanges do. The exchanges report unusual activity to FINRA and the SEC. The issuer learns about the surveillance only if and when prosecutors bring a case, which in the Nourafchan facts was years after the leak." },
      { type: "paragraph", text: "The honest answer to the audit committee question is: you would not know. Not at announcement. Not in the quarter after. Possibly not ever, unless a federal investigation eventually surfaces your deal in a charging document." },
      { type: "paragraph", text: "That answer is unacceptable as a governance posture. The next section is about what to do with it." },
      { type: "heading", text: "The Outside-Counsel Guideline Rewrite" },
      { type: "paragraph", text: "Every F500 legal department maintains outside-counsel guidelines. The Nourafchan ring is the prompt for the next refresh cycle. Four specific provisions belong in the rewrite." },
      { type: "paragraph", text: "First, a firm-level breach-notification clause. Current OCGs typically require the firm to notify the client of a security incident affecting client data. The clause needs to expand. Specifically: \"Outside Counsel shall notify Client in writing within seventy-two hours of any internal investigation, governmental subpoena, or regulatory inquiry concerning the alleged misuse of material non-public information by any current or former attorney, paralegal, or staff member who had access to Client matters within the preceding ten years.\" That language is not in most OCGs today. The Nourafchan facts say it has to be." },
      { type: "paragraph", text: "Second, periodic conflicts and barrier audits. The OCG should require the firm to certify, annually, that its conflicts database and information-barrier protocols have been audited by an independent function within the firm, and to deliver a one-page summary of the audit findings to the client's general counsel. Annual frequency. Independent function. Written summary. None of those are standard today." },
      { type: "paragraph", text: "Third, panel rotation for sensitive matters. The largest M&A clients of the four named firms had multi-year roster relationships that made it possible for a rotating attorney to maintain ten years of access across the deal universe. Rotation of panel firms on a deal-by-deal basis for transactions above a defined materiality threshold breaks the cross-firm aggregation that the Nourafchan facts exploited. The materiality threshold is the client's call. The rotation principle should not be." },
      { type: "paragraph", text: "Fourth, explicit market-abuse cooperation rights with disclosure. The OCG should require the firm, upon receipt of a subpoena, civil investigative demand, or formal regulatory inquiry concerning trading activity in a Client transaction, to disclose the existence of that inquiry to Client within a defined window and to cooperate with any independent forensic review Client commissions. This provision will be negotiated. It should still be drafted into the first ask." },
      { type: "heading", text: "The Half-Life of an Information Barrier" },
      { type: "paragraph", text: "The closing argument is a question. What is the actual half-life of an information barrier when a single attorney has cross-firm access?" },
      { type: "paragraph", text: "The Nourafchan facts answer it. The barrier holds within the four corners of a single matter at a single firm. It does not hold across firms. It does not hold across time. It does not hold against the threat actor the doctrine was never designed to address: the deal lawyer with legitimate access to the matter, acting against the firm and against the client in pursuit of personal trading profit." },
      { type: "paragraph", text: "The audit committee briefing on this story, the one the F500 general counsel will be asked to deliver in the next quarterly cycle, has to make one specific pivot. Cross-firm attorney rotation, which the doctrine treats as the cure for imputed conflicts, is now also a diligence trigger. When the firm pitching your next material transaction has lateraled in an M&A attorney from a competitor in the past twenty-four months, that fact belongs on the engagement-decision checklist alongside billing rate and bench depth. It is not disqualifying. It is diligence-relevant." },
      { type: "paragraph", text: "The four firms named in the indictment are not bad firms. They are the firms F500 clients hire precisely because the bench is deep and the cross-pollination is constant. The same feature that makes the bench valuable is the feature the Nourafchan ring exploited. There is no version of this story where you fix it by hiring less prestigious firms. The fix is in the contract terms, the audit rights, and the rotation protocols that bind the prestigious firms you are going to hire anyway." },
      { type: "paragraph", text: "The half-life of an information barrier is shorter than the ten-year cross-firm window the indictment describes. The audit committee is going to ask how short. The right answer is not a number. The right answer is the contract amendment that makes the number knowable." },
      { type: "paragraph", text: "litigationsentinel.com/briefing" },
    ],
  },
  {
    slug: "scotus-montgomery-faaaa-preemption-dies",
    tag: "Deep Dive",
    title: "SCOTUS Killed FAAAA Preemption 9-0. Shippers Have a Monday Problem.",
    subtitle: "The Court's unanimous ruling in Montgomery v. Caribe Transport II ended a 30-year preemption shield freight brokers had been using to dispose of negligent-hiring claims at the pleading stage. The downstream exposure runs through every F500 that procures motor carriers through a broker, which is most of them.",
    readTime: "7 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: true,
    content: [
      { type: "heading", text: "The 9-0 That Trucking Trade Press Will Frame Too Narrowly" },
      { type: "paragraph", text: "On May 14, the Supreme Court ruled unanimously in Montgomery v. Caribe Transport II, LLC that the Federal Aviation Administration Authorization Act of 1994 does not preempt state-law negligent-hiring claims against freight brokers. Nine justices. No dissent. A 30-year preemption shield, gone in a single decision." },
      { type: "paragraph", text: "The trucking trade press is already framing this as a broker-liability case. That framing is wrong, or at least incomplete. C.H. Robinson is the named industry incumbent that has been litigating FAAAA preemption for a decade, and yes, C.H. Robinson now has a different risk posture than it did on Wednesday. But the broker side of this is not where the largest exposure sits. The largest exposure sits one layer up. It sits at the F500 shippers who procure motor carriers through those brokers and who wrote their logistics master service agreements under the assumption that FAAAA preemption would always be there to absorb the downstream liability." },
      { type: "paragraph", text: "Justice Kavanaugh wrote separately to flag exactly this. The ruling, he warned, will \"increase litigation and insurance costs for freight brokers that eventually cascade through the economy.\" That is not a throwaway concurrence. That is a sitting Supreme Court justice publishing a cost-cascade prediction in the U.S. Reports. Every F500 GC with a transportation spend should treat that sentence as load-bearing." },
      { type: "heading", text: "What FAAAA Preemption Was Actually Worth" },
      { type: "paragraph", text: "Congress passed the FAAAA in 1994. Section 14501(c)(1) preempts state laws \"related to a price, route, or service of any motor carrier or broker.\" The statute was written to keep states from regulating trucking rates after deregulation. It was not written to immunize broker tort liability. But within five years of enactment, the broker bar had figured out it could read it that way, and for the next three decades brokers used FAAAA preemption to dispose of negligent-hiring claims at the motion-to-dismiss stage. The structural argument was simple. A negligent-hiring claim is \"related to\" the broker's service of selecting carriers. Therefore the state-law claim is preempted. Case dismissed." },
      { type: "paragraph", text: "The strategy worked. It worked so well it became the default pleading response to any state-law tort claim that touched a broker. Plaintiffs adapted by trying to plead around it. Brokers adapted by litigating preemption first and merits never. The circuit courts split. The Ninth Circuit held in Miller v. C.H. Robinson in 2020 that FAAAA does not preempt these claims. The Seventh Circuit held the opposite in Ying Ye v. GlobalTranz in 2023. Montgomery resolves the split for the plaintiff side." },
      { type: "paragraph", text: "What this means in practice is that brokers can no longer win these cases at the pleading stage. They now have to litigate the underlying negligent-hiring claim on its merits, which means discovery, which means depositions, which means a settlement value far north of zero on cases that used to settle for nuisance. The brokers know this. Their insurers know this. The plaintiff bar knows this. The question is whether the shippers know this." },
      { type: "heading", text: "The Downstream Question Nobody Is Asking Yet" },
      { type: "paragraph", text: "Most of the coverage will stop at the broker. The Sentinel angle is what happens after the broker." },
      { type: "paragraph", text: "Amazon procures last-mile and middle-mile motor-carrier capacity through brokers as a matter of operational design. Walmart's transportation organization runs a hybrid of dedicated fleet, asset-based carriers, and broker-arranged loads, with the broker layer scaling up and down with seasonal demand. Sysco and US Foods, the two largest broadline foodservice distributors in North America, run brokered carrier capacity into every region they serve. Target, every grocery chain, every retailer with a national delivery footprint. All of them touch brokered carriers, and all of them just lost a preemption defense they did not know they had been relying on." },
      { type: "paragraph", text: "The exposure runs through two channels. The first is direct. Plaintiff counsel in a fatal-collision case used to sue the carrier and pick up the broker if assets were thin. After Montgomery, the broker becomes a primary defendant on a survivable negligent-hiring theory, and the shipper becomes the next named defendant on a parallel negligent-selection-of-broker theory. That is the theory the plaintiff bar will be testing within ninety days. It is the same logic applied one rung up the procurement ladder. If the broker had a duty to vet the carrier, the shipper had a duty to vet the broker." },
      { type: "paragraph", text: "The second channel is contractual. The standard logistics master service agreement allocates broker-tort liability through indemnification language. Most of those MSAs were written under the assumption that broker tort exposure was small because FAAAA preemption disposed of it. The indemnity terms were calibrated to that assumption. They are now mispriced." },
      { type: "heading", text: "What the Standard Logistics MSA Actually Says" },
      { type: "paragraph", text: "Pull a typical F500 logistics MSA off the shelf and look at the indemnification clause. It usually reads something like this. The broker indemnifies the shipper for any third-party claim \"arising out of or related to\" the broker's performance of services under the agreement, subject to the broker's commercial general liability and auto liability limits, subject to a cap pegged to fees paid over the trailing twelve months. There is usually a carve-out for the shipper's own negligence. There is usually a duty-to-defend clause. There is sometimes a mutual indemnity that runs the other way." },
      { type: "paragraph", text: "That language was workable when broker tort claims died at the pleading stage. The broker's CGL tower was rarely tested because the cases settled cheap or went away. After Montgomery, the broker's CGL tower will be tested, the indemnity will be triggered, and the cap will be hit on the catastrophic cases. When the cap is hit, the residual exposure falls through to the shipper, which is now sitting on top of a fatal-collision verdict with a broker indemnitor that is tapped out." },
      { type: "paragraph", text: "The fix is not complicated, but it has to be specific. The indemnity cap should be raised to reflect the new tort exposure, or the cap should be replaced with a primary-and-non-contributory structure tied to the broker's auto liability tower. The defense duty should be expanded. The insurance schedule attached to the MSA should require the broker to carry an excess transportation tower sized to a survivable negligent-hiring verdict, which in a federal jurisdiction can run mid-eight figures." },
      { type: "heading", text: "The Q3 2026 Punch List" },
      { type: "paragraph", text: "Three items, concrete, in this order." },
      { type: "paragraph", text: "First, broker-panel re-vetting. Pull the current approved-broker list, run each broker against FMCSA SAFER carrier safety scores for the carriers that broker has booked over the trailing twelve months, and flag any broker whose booked-carrier mix shows a pattern of poor BASIC scores or recent out-of-service orders. The plaintiff bar will be running this same query on day one of discovery. The shipper that has not run it first will be the shipper that gets surprised." },
      { type: "paragraph", text: "Second, MSA review. Every active logistics MSA needs a clause-by-clause read against the post-Montgomery liability map. Specifically the indemnification language, the insurance schedule, the defense duty, and any limitation-of-liability cap that would block recovery on a catastrophic tort. The output of this review is a redline that goes back to the broker on the next renewal cycle. The redline is non-negotiable on the insurance schedule." },
      { type: "paragraph", text: "Third, excess-tower adequacy. The shipper's own transportation and general-liability excess tower was sized to a different threat model. The new model assumes that some percentage of broker indemnities will fail under the new exposure regime, which means the shipper's own tower has to absorb the gap. Run the tower against a $25 million severity scenario on a single brokered-carrier fatality. If the tower has a gap, fill it before the next policy bind date." },
      { type: "heading", text: "The Insurance Cost Cascade Kavanaugh Predicted" },
      { type: "paragraph", text: "Kavanaugh's concurrence is the line every F500 GC should print and tape to the wall. Litigation and insurance costs for freight brokers will increase. Those costs will cascade through the economy. The cascade has a specific shape. Broker primary liability premiums will harden in the next renewal cycle, broker capacity will tighten as some markets exit, and shipper-side procurement organizations will see broker fees rise to absorb the new cost. The fee absorption will be uneven. Brokers with strong carrier-vetting infrastructure will absorb less and price more competitively. Brokers without that infrastructure will price aggressively to hold share and will trade for a higher tail-loss profile on the back end, which is exactly the broker the shipper does not want on its approved panel." },
      { type: "paragraph", text: "The shippers that understand the cascade will adjust their procurement criteria before the next bid cycle. The shippers that do not will get the cheapest broker on the panel and the highest tail-loss exposure in the transportation tower, and they will discover the mismatch only when a complaint lands in federal court naming the broker and the shipper as co-defendants on a parallel negligent-selection theory." },
      { type: "paragraph", text: "Montgomery is a broker-liability case in the same way Erie Railroad v. Tompkins is a railroad case. The named defendant is not the point. The doctrinal shift is the point. The F500 GCs who treat this as a broker problem will be back in this Briefing in eighteen months explaining why their transportation tower is upside down. The ones who treat it as a procurement-and-MSA problem on Monday morning will not." },
    ],
  },
  {
    slug: "carrier-rico-playbook-scoreboard",
    tag: "Council",
    title: "The Carrier RICO Playbook Scoreboard",
    subtitle: "Tradesman's New York reinsurer-standing dismissals just killed the MGA-via-reinsurer architecture. Allstate's Houston filing, following the Fifth Circuit's January 14 Bhagat decision, shows the direct-carrier version still works. Here is what to copy and what to abandon.",
    readTime: "9 min read",
    author: "Wes Todd",
    date: "May 15, 2026",
    trending: false,
    content: [
      { type: "heading", text: "The Scoreboard, as of This Week" },
      { type: "paragraph", text: "The carrier-offensive RICO playbook reached an inflection point this quarter. Four threads sit on the board. Two of them are alive. One is dead at the trial level. One is corporate, not carrier, and worth watching for reasons most GCs have not yet sat with." },
      { type: "paragraph", text: "Allstate v. the Roopani family in the Southern District of Texas is alive. Filed April 10, 2026 under case number 4:26-cv-02842, it seeks $7.9 million in actual damages, treble damages under 18 U.S.C. Section 1964(c), and a judicial declaration cutting the network off from any future recovery under any Allstate policy. The filing came three months after the Fifth Circuit's January 14 decision in Allstate Indemnity Co. v. Bhagat, No. 25-20020 (5th Cir. 2026), which held a carrier alleging a RICO scheme predicated on mail fraud need not plead first-party reliance on the fraudulent bills to satisfy proximate cause. That ruling is the load-bearing precedent the direct-carrier recovery posture in Texas now runs on." },
      { type: "paragraph", text: "Tradesman Program Managers and Roosevelt Road Re v. five separate sets of New York plaintiff firms and medical providers is dead. The Southern District of New York dismissed the latest of those suits with prejudice on February 19, 2026. The dismissal turned on a single doctrinal point: the MGA and the reinsurer did not have a direct enough relationship to the predicate-act injury to bring claims under RICO. Insurance Insider US called it \"a wake-up call to NY insurers and defense bar.\" That framing understates the damage. This was not a setback. It was a structural verdict on the architecture itself." },
      { type: "paragraph", text: "Merchants Insurance Group's W.D.N.Y. construction-fraud RICO suit, filed in January 2026, is alive but quiet. Nothing surfaced between May 8 and today. The fourth thread is Uber and FedEx v. Marc Simon and Simon & Simon, a corporate-defendant offensive RICO theory that survived a motion to dismiss. It is not a carrier case. It belongs on this board anyway, and the back half of this piece explains why." },
      { type: "paragraph", text: "The scoreboard is the easy part. The harder question is which architecture to copy." },
      { type: "heading", text: "Allstate's Working Template" },
      { type: "paragraph", text: "The Roopani complaint reads like a doctrinal worked example. Allstate is the direct primary carrier. Allstate paid the claims. Allstate sustained the injury. Allstate sues on its own behalf. There is no MGA layered between the underwriter and the loss. There is no reinsurer trying to assert standing on a downstream payment. The injury runs in a straight line from the predicate acts to the plaintiff named on the caption." },
      { type: "paragraph", text: "The Fifth Circuit's January 14, 2026 Bhagat decision is what made that line defensible in Texas. The ruling held that a carrier alleging a RICO scheme predicated on mail fraud need not plead first-party reliance on the fraudulent bills to satisfy proximate cause, and that but-for causation is satisfied where the carrier pleads it would not have paid the settlements but for the fraudulent bills. That sounds technical. It is the entire game. Without proximate cause, the case dies on a 12(b)(6). With it, the case survives long enough to force discovery, which is where the actual leverage lives." },
      { type: "paragraph", text: "The structural recipe is now clear. Direct primary carrier as named plaintiff. Predicate acts pled with specificity, mail and wire fraud tied to identifiable billing records and claim submissions. A pattern that spans years and dollars, not months and thousands. Relief that goes beyond recovery and seeks to cut the network off from future claim payments. That last piece is the part most carriers still under-ask for. Allstate asked for it. The court will decide whether to grant it." },
      { type: "paragraph", text: "The Houston venue matters. The Southern District of Texas now sits inside a Fifth Circuit that has spoken on carrier RICO standing in the carrier's favor within the last six months. That is the most carrier-friendly federal posture in the country right now for this kind of suit." },
      { type: "heading", text: "Tradesman's Reinsurer-Standing Trap" },
      { type: "paragraph", text: "The Tradesman suits failed because the architecture was wrong. Tradesman Program Managers is an MGA. Roosevelt Road Re is a reinsurer. Neither one paid a claim directly to a fraudulent provider. The MGA managed policies. The reinsurer absorbed downstream loss. The plaintiff law firms and medical providers on the defendant side allegedly submitted fraudulent claims, but those claims were submitted to the primary carriers Tradesman managed, not to Tradesman or Roosevelt Road itself." },
      { type: "paragraph", text: "The court held that the MGA and the reinsurer \"did not meet the direct-relationship requirement necessary to bring claims under RICO.\" That is the line every carrier general counsel and chief claims officer should be reading twice. It is not a hedge. It is a structural rejection of the entire layered-architecture approach to offensive RICO in the Second Circuit." },
      { type: "paragraph", text: "The implication runs further than the five dismissed suits. Any captive structure that puts the loss-bearing entity at one remove from the predicate acts now has the same problem. Any program where the MGA holds the data, the reinsurer holds the loss, and the primary carrier is a passive fronting party faces the same standing argument. The plaintiff bar will run that argument every time, and in New York federal court, it now has a string of precedents." },
      { type: "paragraph", text: "Tradesman has appeal options. It also has the option to refile through the primary carriers themselves as named plaintiffs, which is the move the Allstate template suggests. Whether the program economics work that way is a separate question. The litigation architecture question is settled for now." },
      { type: "heading", text: "The Corporate-Defendant Parallel" },
      { type: "paragraph", text: "Uber and FedEx v. Marc Simon and Simon & Simon belongs on this scoreboard because it answers a question most F500 general counsels have not yet asked. The question is when a corporate defendant flips to offensive RICO against the plaintiff firm rather than just defending the individual cases." },
      { type: "paragraph", text: "The Simon & Simon case survived a motion to dismiss on a corporate-defendant offensive theory. Uber and FedEx allege the firm built a referral and litigation network designed to extract value from corporate liability programs through repeat documented patterns. Same allegations, different industry. Same RICO doctrine, different plaintiff posture." },
      { type: "paragraph", text: "For F500 GCs at retailers, transportation companies, logistics operators, and any other business that absorbs high-frequency premises-liability or motor-vehicle claims, this is the case to watch. The doctrine carriers are now using is portable. The Uber filing proves it travels from claim-payment fraud into commercial-litigation fraud without losing structural integrity. Any GC sitting on a documented pattern of staged or manufactured claims tied to a specific plaintiff firm should be asking outside counsel the same question Uber's team asked: does this pattern, documented to the predicate-act level, meet the RICO pleading standard." },
      { type: "paragraph", text: "The answer for most portfolios is that it could, if the data work were done. The data work is the bottleneck, not the law." },
      { type: "heading", text: "The Architecture Choice" },
      { type: "paragraph", text: "Three architectures are now on the table, and the choice is mostly settled by venue and corporate structure." },
      { type: "paragraph", text: "File direct when the primary carrier paid the claims and sits in a circuit that has signaled openness to carrier RICO standing. The Fifth Circuit is now that circuit. The Eastern District of New York, after the April 2026 Uber and Liberty Mutual filing, is showing similar signals on the corporate side. Pleading is straightforward. Standing is clean." },
      { type: "paragraph", text: "Coordinate through an MGA only when the MGA itself was the contractually obligated payer on the fraudulent claims, not when the MGA is one layer up from the actual loss. The Tradesman dismissals do not preclude MGA-as-plaintiff suits in all forms. They preclude MGA-as-plaintiff suits where the MGA's injury is derivative of the primary carrier's loss. That distinction matters, and it is the distinction the Second Circuit will test again." },
      { type: "paragraph", text: "Coalition with named co-plaintiffs when the loss is spread across multiple primary carriers and no single one can pencil the litigation spend alone. This is the route most underutilized in 2026. It requires interest alignment across carriers that compete on every other dimension. It also produces the largest documented patterns, because it pools claim-data across the actual scope of the fraud network rather than slicing it to one carrier's window." },
      { type: "paragraph", text: "Reinsurer as named plaintiff is, for now, off the board in the Second Circuit. Anywhere else, it is untested and risky. Treat it as the architecture of last resort." },
      { type: "heading", text: "What Comes Next" },
      { type: "paragraph", text: "Tradesman's likely pivot is to refile through the primary carriers it manages, with the MGA repositioned as a documentary witness rather than a named plaintiff. That is the cleanest path back into court. Whether the relationship with the underlying carriers supports it is a commercial question, not a doctrinal one. The doctrinal question is answered." },
      { type: "paragraph", text: "Merchants Insurance Group's W.D.N.Y. construction-fraud suit is the next case on the board to watch. A Second Circuit decision on Merchants that goes against the carrier would harden the Tradesman doctrine and force every Northeast carrier into the Allstate template. A decision in Merchants' favor would split the trial-level posture in the Second Circuit and create the conditions for a circuit-level fight that resolves in 2027." },
      { type: "paragraph", text: "The 2026 outlook is that direct-carrier filings will multiply in the Fifth, Eleventh, and Eighth Circuits, where the standing doctrine sits more favorably. New York federal will continue to be hostile to layered architectures. The corporate-defendant version of the same doctrine, on the Uber and FedEx track, will produce at least two more filings before year-end from F500 retailers and transportation operators sitting on documented patterns." },
      { type: "paragraph", text: "For any general counsel or chief claims officer reading this and wondering whether the patterns inside your own book of claims would survive the pleading standard, the answer depends on whether the documentation work has been done. The doctrine is settled enough to act on. The data work is what determines whether you have a case or a hypothesis." },
      { type: "paragraph", text: "litigationsentinel.com/briefing" },
    ],
  },
  {
    slug: "musk-v-altman-day-7-brockmans-journal",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "Brockman's Journal: The Day OpenAI's Mission Met Its Author",
    subtitle:
      "On November 6, 2017, OpenAI's president wrote in his private journal that he could not say the company was committed to the non-profit. Fifteen months later, OpenAI LP was announced. The journal is now in evidence in a federal courthouse in Oakland, and a California charitable-trust case is being tried on the strength of its author's own handwriting.",
    readTime: "9 min read",
    author: "Wes Todd",
    date: "May 6, 2026",
    trending: true,
    content: [
      { type: "heading", text: "Greg Brockman's journal is now the case" },
      {
        type: "paragraph",
        text: "Greg Brockman kept a journal. Roughly one hundred typed pages, written between August and November 2017, while he served as president of OpenAI Inc., the California 501(c)(3) public-benefit corporation. Steven Molo, working alongside lead trial counsel Marc Toberoff for Musk, walked the jury through it page by page on Monday and Tuesday. Brockman concluded his testimony Tuesday afternoon. The journal stayed on the screen.",
      },
      {
        type: "paragraph",
        text: "One entry carried a date stamp the jury was asked to remember.",
      },
      {
        type: "pullquote",
        text: "Cannot say that we are committed to the non-profit. Don't wanna say that we're committed. If three months later we're doing b-corp then it was a lie. (November 6, 2017)",
      },
      {
        type: "paragraph",
        text: "The date matters for reasons a federal jury can be asked to weigh. November 6, 2017 sits roughly fifteen months before OpenAI LP was publicly announced in March 2019. It sits weeks before some of Elon Musk's last large charitable contributions to OpenAI Inc. were recorded. And under California law, it sits squarely inside the period during which Brockman owed the assets of OpenAI Inc. a duty of loyalty as a director of a charitable trust, a duty Cal. Corp. Code §5231 imports from the general law of trusts and Cal. Probate Code §16002 defines as the duty to administer the trust solely in the interest of the beneficiaries.",
      },
      {
        type: "paragraph",
        text: "A second entry, also dated November 2017, was read into the record without paraphrase.",
      },
      {
        type: "pullquote",
        text: "The true answer is that we want him out. And his story will correctly be that we weren't honest with him in the end about still wanting to do the for profit just without him.",
      },
      {
        type: "paragraph",
        text: "Judge Yvonne Gonzalez Rogers had already cited a third entry, the two-word reflective line \"Were we honest?\", in her January 2026 order denying the motion to dismiss, writing that the entries \"suggest Brockman intended to deceive.\" The motion-to-dismiss language is now back in front of the jury through the document itself. The author of the document was on the stand for two days defending it.",
      },

      { type: "heading", text: "Toberoff's St. Jude's frame and the morally bankrupt entry" },
      {
        type: "paragraph",
        text: "Toberoff put the question to the jury in a single sentence on Tuesday.",
      },
      {
        type: "pullquote",
        text: "Just imagine if the president of Saint Jude's Hospital for the children did something like that. Mr. Brockman referred to, quote, the mission over 50 times in his testimony over two days. But the question now is, whose mission is it?",
      },
      {
        type: "paragraph",
        text: "OpenAI counsel Sarah Eddy answered with a different page from the same journal. On redirect, Eddy walked Brockman through an entry he had written in the same November 2017 stretch.",
      },
      {
        type: "pullquote",
        text: "It'd be wrong to steal the non-profit from him. That'd be pretty morally bankrupt.",
      },
      {
        type: "paragraph",
        text: "Eddy's framing was that Brockman was a conflicted but conscientious officer wrestling in private with a hard problem, not an insider plotting a diversion of charitable assets. Toberoff's reframing on re-cross was that a fiduciary who recognizes the act would be morally bankrupt and then participates in something close to it has not been exonerated by his own conscience. The jury now has both readings of the same notebook in the same hand. The advisory verdict form will ask them to pick one.",
      },

      { type: "heading", text: "The Cerebras thread is the part F500 General Counsel should read twice" },
      {
        type: "paragraph",
        text: "The headline coverage so far has centered on Musk's reactions and Brockman's wording. The piece of Tuesday's testimony most relevant to corporate-foundation governance is the Cerebras thread, and it is being undercovered.",
      },
      {
        type: "paragraph",
        text: "Brockman conceded under oath that in 2017, while serving as a director and officer of OpenAI Inc., he held a personal investment interest in Cerebras, an AI chipmaker that OpenAI Inc. was simultaneously evaluating as a counterparty. Sam Altman held a parallel personal interest. Brockman further conceded, under questioning about a specific document Toberoff produced, that no written disclosure of his Cerebras position was ever made to Musk while Musk was a director and the largest funder of the charity.",
      },
      {
        type: "pullquote",
        text: "I do not believe an email that says that exists.",
      },
      {
        type: "paragraph",
        text: "Pressed further, Brockman expanded the answer to encompass the absence of any contemporaneous written disclosure of the Cerebras interest to the OpenAI Inc. board. No email, no chat, no text. The relevance of the omission is not theoretical. In December 2025 OpenAI committed approximately $10 billion in compute spend to Cerebras and extended an additional $1 billion loan facility. In February 2026 Cerebras's private valuation tripled, from roughly $8 billion to roughly $23 billion. A separate piece of testimony surfaced an interest in Altman's personal investment fund that was granted to Brockman, language Toberoff translated for the jury as \"compensated Greg on the side.\"",
      },
      {
        type: "paragraph",
        text: "Under IRC §501(c)(3), a tax-exempt entity organized for charitable purposes may not be operated for the private benefit of insiders. Treas. Reg. §1.501(c)(3)-1(d)(1)(ii) makes the test explicit: the organization must serve a public rather than a private interest, and even where charitable purposes are also advanced, private benefit to designated individuals is grounds for revocation. Rev. Rul. 76-91 reinforces that a single qualifying private-benefit transaction can defeat exempt status. The fact pattern Toberoff put on the screen, undisclosed insider stakes in a counterparty followed years later by a ten-figure commercial commitment from the charity's controlled affiliate to that counterparty, is precisely the fact pattern those authorities were drafted to reach.",
      },

      { type: "heading", text: "The prediction" },
      {
        type: "paragraph",
        text: "The advisory jury will return a liability finding for Musk on Count XVIII, the breach-of-charitable-trust count, and on at least one of the fraud or unjust-enrichment counts. The journal in Brockman's hand, the Cerebras concessions, and the absence of any written disclosure to the board are sufficient to carry that burden under Cal. Corp. Code §5142, which authorizes claims for breach of charitable trust against directors of California public-benefit corporations.",
      },
      {
        type: "paragraph",
        text: "Judge Gonzalez Rogers, sitting as the equitable trier in the bifurcated remedies phase, will not order divestiture, will not order rescission of the OpenAI LP conversion, and will not unwind the Microsoft transactions under Rule 19. She will impose a constructive trust under Cal. Civ. Code §2224 over a defined slice of OpenAI Inc.'s equity in the for-profit, with the 501(c)(3) entity as beneficiary. That slice will be sized to capture the value the court finds was acquired in violation of fiduciary obligation, and it will be administered going forward under California Attorney General oversight.",
      },
      {
        type: "paragraph",
        text: "Two California precedents drive that result. In Queen of Angels Hospital v. Younger, 66 Cal. App. 3d 359 (1977), the California Court of Appeal upheld Attorney-General-led equitable relief against nonprofit-hospital insiders who had attempted to redirect charitable assets to affiliated commercial entities. In Stern v. Lucy Webb Hayes National Training School (Sibley Hospital), 381 F. Supp. 1003 (D.D.C. 1974), the federal district court held nonprofit directors personally liable for self-dealing transactions involving entities in which they held undisclosed interests, and articulated disclosure-and-abstention as the curative standard. Both opinions sit comfortably alongside Cal. Probate Code §16002's duty of loyalty. Judge Gonzalez Rogers's own pattern in the Roundup Products Liability MDL favored targeted equitable remedies over wholesale rescission where commercial third parties had relied in good faith. Microsoft is that third party here.",
      },
      {
        type: "paragraph",
        text: "Settlement before closing argument is now unlikely. Musk's pre-trial settlement texts to Brockman and Altman were already aired in open court in the first week and did not produce a deal. With the journal and the Cerebras concessions in evidence, OpenAI's settlement leverage on the liability finding is weaker than it was a week ago, and Musk has no incentive to accept terms he refused before the trier of fact saw the documents.",
      },

      {
        type: "callout",
        text: "F500 GC takeaway. Officers and directors of an affiliated corporate foundation owe fiduciary duties to the charity that are independent of their duties to the parent enterprise. Personal investments in counterparties of the foundation must be disclosed in writing to the foundation's board, with the disclosure memorialized in a contemporaneous record the General Counsel controls. \"No email, no chat, no text\" is the answer that lost Brockman the day under cross. Treat the foundation's board minutes, conflict-of-interest registry, and recusal log as primary corporate records. They are the only documents that defend the fiduciary later.",
      },

      { type: "heading", text: "What today decides: Shivon Zilis takes the stand" },
      {
        type: "paragraph",
        text: "Shivon Zilis is scheduled to testify Wednesday morning. She is the bridge witness in this case, and her testimony is what makes Day 7 the inflection point. Zilis served on the OpenAI Inc. nonprofit board from 2019 through 2023, the exact window in which the for-profit conversion was executed and the governance changes Musk now challenges were ratified. She is also a senior executive at Neuralink and the mother of four of Musk's children.",
      },
      {
        type: "paragraph",
        text: "Two narratives meet in her testimony. If she corroborates the journal, the inference that the nonprofit board was on notice and chose not to act tightens, and the constructive-trust theory gains a contemporaneous board-level witness. If she defends the conversion as a board member who voted for it with full information, OpenAI gets a rebuttal to Toberoff's St. Jude's frame from inside the room. Watch how Toberoff handles the personal relationship on cross, watch whether Eddy elicits any contemporaneous written disclosure of the Cerebras interests at the board level, and watch what Zilis says she did with what she knew.",
      },
      {
        type: "paragraph",
        text: "Sam Altman is expected later this week or next. Ilya Sutskever and Mira Murati remain possible. The journal is now in the record. The witnesses who follow it will be asked, in effect, whether they read it the way Brockman wrote it.",
      },
      {
        type: "paragraph",
        text: "Wes",
      },

      {
        type: "callout",
        text: "Sources. Trial coverage drawn from CNBC, Bloomberg, ABC7, NBC News, MLex, TechCrunch, CNN Business, Local News Matters, Washington Post, and MIT Technology Review reporting from the Oakland courthouse this week. Procedural posture and the January 2026 motion-to-dismiss order verified against the FindLaw case page and the CourtListener docket for Musk v. Altman, 4:24-cv-04722, N.D. Cal., Hon. Yvonne Gonzalez Rogers presiding. This is the fourth installment of the Litigation Sentinel Special Report series on this trial. The regularly scheduled Issue #3 of the biweekly briefing ships separately.",
      },
    ],
  },
  {
    slug: "musk-v-altman-day-3-musk-stepped-down",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "Musk Stepped Down on Day 3 of the OpenAI Trial. Then the Judge Drew a Line.",
    subtitle:
      "Elon Musk concluded his testimony in Musk v. Altman on Thursday afternoon after parts of three trial days on the witness stand. Then his family-office advisor Jared Birchall took the stand and answered that part of his information about Sam Altman came from lawyers. Then Judge Yvonne Gonzalez Rogers told the courtroom this is not a trial on the safety risks of artificial intelligence. Three F500 governance lessons from a day the case got narrower.",
    readTime: "8 min read",
    author: "Wes Todd",
    date: "May 1, 2026",
    trending: true,
    content: [
      { type: "heading", text: "Musk Stepped Down. Then the Judge Drew a Line." },
      {
        type: "paragraph",
        text: "After parts of three trial days on the witness stand in a federal courthouse in Oakland, Elon Musk concluded his testimony in Musk v. Altman on Thursday afternoon. He stepped down. The trial moved on without him.",
      },
      {
        type: "paragraph",
        text: "For an F500 General Counsel reading the live coverage, the structural news of Day 3 is that the named plaintiff is no longer the active witness in his own lawsuit. The doctrinal news arrived shortly after.",
      },
      {
        type: "paragraph",
        text: "Through three trial days the lawyers on both sides have circled the same temptation. The defense has wanted to make the trial about Musk's xAI competitive position and his AI-safety record at Grok. The plaintiff has wanted to make the trial about the existential risk of frontier AI models in the hands of a now-for-profit lab. Judge Yvonne Gonzalez Rogers told the courtroom on Thursday that neither of those is what she is deciding.",
      },
      {
        type: "pullquote",
        text: "This is not a trial on the safety risks of artificial intelligence.",
      },
      {
        type: "paragraph",
        text: "The full bench statement, captured in the live coverage, situated the court's view of what the case actually is. The question, the judge said, is whether there was a breach of charitable trust. The framing is doctrinal and narrow. It tracks the equitable claims the plaintiff pleaded. It excludes the AI-policy debate the parties have been trying to litigate around the edges.",
      },
      {
        type: "paragraph",
        text: "Judges narrow before they rule. The narrowing tells the parties which doctrinal frontier the opinion will be written on. Every F500 General Counsel reading the trial coverage this week should anchor on that frontier and ignore the rest.",
      },

      { type: "heading", text: "Savitt's Closing Recross and Microsoft's Ten Minutes" },
      {
        type: "paragraph",
        text: "Before Musk stepped down, OpenAI's lead counsel William Savitt closed his recross with the line that will travel furthest from this trial. He walked Musk through the for-profit ventures Musk has founded or controls. Tesla. SpaceX. Neuralink. X. He asked Musk to reconcile the philosophical objection in the complaint with a personal balance sheet built almost entirely on for-profit corporate forms. The framing was hypocrisy. The intent was to install in the jury's working memory the idea that the plaintiff's argument is selective.",
      },
      {
        type: "paragraph",
        text: "Musk handled it the way he had handled most of cross. He argued the form of the question, restated his charitable-trust framing, and used the witness chair as a microphone. When the recross wrapped, Musk had been on the stand for parts of three trial days.",
      },
      {
        type: "paragraph",
        text: "Then Microsoft's attorney took ten minutes. Russell Cohen represents Microsoft, a co-defendant in the case with roughly thirteen billion dollars committed to OpenAI. Most live blogs called it a brief cross. The framing undersells what happened.",
      },
      {
        type: "paragraph",
        text: "Cohen put two categories of evidence in front of the jury through Musk himself. First, exhibits in which Musk had written that OpenAI should be more open. The plaintiff's own pre-litigation writings about openness, surfaced by a co-defendant's counsel, with Musk on the stand to authenticate them. Second, text messages between Musk and Altman in which Altman privately assured Musk that users beyond Microsoft would continue to be able to access OpenAI's models. Contemporaneous assurances, in writing, from a defendant the complaint accuses of suborning the charitable mission.",
      },
      {
        type: "pullquote",
        text: "The brevity was the message. Musk's own paper trail did the rest.",
      },
      {
        type: "paragraph",
        text: "Microsoft's defense theory does not require Musk to be a bad witness. It requires the jury and the bench to read Musk's own communications and Altman's contemporaneous assurances and conclude that the conversion narrative the plaintiff built into the complaint does not match the evidentiary record. Ten minutes was the dose required to plant that doubt. Then Musk stepped down.",
      },

      { type: "heading", text: "The Money Man Took the Stand and Hit a Privilege Fence" },
      {
        type: "paragraph",
        text: "Jared Birchall runs Excession LLC, the family office that manages Elon Musk's personal capital. He sits on the executive teams of xAI and Neuralink. On Thursday afternoon he took the witness stand, was sworn in, and began direct examination by Robert Kry of Musk's legal team.",
      },
      {
        type: "paragraph",
        text: "Then OpenAI's counsel Wilson took the cross. Wilson pressed Birchall on the central factual claim Birchall is on the witness list to support. The claim is that Sam Altman was negotiating on both sides of the table during the period the complaint targets, with knowledge that the for-profit conversion would benefit him personally.",
      },
      {
        type: "paragraph",
        text: "Wilson asked Birchall how he became convinced of that. Birchall's answer is the moment of the day worth reading slowly.",
      },
      {
        type: "pullquote",
        text: "Some of it I learned from public sources. Some of it I learned from lawyers.",
      },
      {
        type: "paragraph",
        text: "Birchall did not say which lawyers. The answer named no document, no meeting, no conversation that would independently support the factual claim if attorney-channeled information were excluded. This is the kind of answer a sophisticated witness gives when the underlying basis for the claim is at least partly something the witness cannot describe without breaching privilege or stepping outside what counsel will let them say.",
      },
      {
        type: "paragraph",
        text: "Judge Gonzalez Rogers asked Birchall a series of clarifying questions from the bench. She did not rule from the bench on what to do with the answer. She told the courtroom she would decide in the coming days how to deal with Birchall's testimony.",
      },
      {
        type: "paragraph",
        text: "That sentence, said quietly from the bench, is the procedural news of the day.",
      },

      { type: "heading", text: "Three F500 Governance Lessons From Day 3" },
      {
        type: "paragraph",
        text: "First. The doctrinal frontier of a high-profile trial is set by the bench, not by the press. The judge's narrowing on Day 3 told the courtroom what the opinion will be about. Charitable trust law. Not AI policy. Not nonprofit governance writ large. Not the philosophical case for or against frontier-AI commercialization. Boards briefing themselves on what the eventual opinion will mean for their corporate structures should read the bench statements over the live blog headlines every time the two diverge.",
      },
      {
        type: "paragraph",
        text: "Second. Privilege-adjacent witnesses get judicial reservations. Birchall is not a fact witness in the conventional sense. He is the donor's family-office advisor, called to support a state-of-mind claim about a defendant. When the basis for that state-of-mind claim runs partly through attorney-channeled information, the trial court has tools. The court can strike the testimony. It can limit the weight of the answer in the findings of fact. It can hold a sealed in-camera session to evaluate the underlying communications. Gonzalez Rogers reserved on which tool she will use. F500 boards relying on advisor testimony to support a state-of-mind claim in their own litigation should expect the same reservation, and should expect the equitable court to weigh the testimony down accordingly.",
      },
      {
        type: "paragraph",
        text: "Third. Your own writings will come back at you, and they will come back through someone you did not expect. Musk arrived at trial expecting to be cross-examined by Altman's counsel. He was. He did not arrive expecting Microsoft's attorney to appear briefly and use Musk's own openness rhetoric and Altman's reassuring text messages to plant a defense theme. Co-defendants run their own playbooks. F500 boards facing multi-defendant litigation should assume that the friendliest defendant in the room may still cross-examine the plaintiff with the plaintiff's own paper trail. Document discipline is a year-zero question. By the time trial begins, the paper trail is already what it is.",
      },

      {
        type: "callout",
        text: "If your firm holds, has held, or is downstream of charitable-mission assets, the doctrinal frontier set on Day 3 is the one to brief. The opinion when it arrives will be a charitable-trust opinion. It will travel to every state with a parallel statute. The AI-policy commentary in the press around this trial will not appear in the four corners of the ruling that gets cited in the next case.",
      },

      { type: "heading", text: "What Monday Decides" },
      {
        type: "paragraph",
        text: "Judge Gonzalez Rogers released the jury a few minutes early on Thursday afternoon. There are no proceedings on Friday. The jury returns Monday morning. Birchall's continued testimony is the first item, subject to whatever the judge has decided in the meantime about how to handle the parts of his answer she reserved on. OpenAI's counsel has placed Greg Brockman on forty-eight-hour notice for next week. Sam Altman is widely expected to take the witness stand the week of May fifth.",
      },
      {
        type: "paragraph",
        text: "Two specific things to watch on Monday. First, whether the judge limits or strikes any portion of Birchall's testimony on the both-sides-of-the-table claim. That ruling will set the procedural ceiling for any similar advisor witnesses the plaintiff calls. Second, whether the plaintiff narrows its remaining witness list now that the bench has signaled the doctrinal frontier. Witnesses staged primarily to support an AI-safety theme are now on borrowed time.",
      },
      {
        type: "paragraph",
        text: "Litigation Sentinel will continue to publish trial coverage at the article level for the duration of the case. The next regularly scheduled biweekly newsletter ships Wednesday, May 6.",
      },
      {
        type: "paragraph",
        text: "Wes",
      },
      {
        type: "callout",
        text: "Sources. All quoted testimony, bench statements, and procedural details verified against multiple Tier-1 sources covering the Thursday April 30 proceedings in the Northern District of California. Primary references: CNBC Day 3 and Day 4 live blogs (April 29 and April 30), CNN Business takeaways (April 30), NBC News Day 3 coverage (April 30), SF Standard Day 3 piece (April 30), The Ringer annotated transcript (April 30), Rappler trial coverage (April 30), and CourtListener docket 4:24-cv-04722. This is a Special Report follow-up to the Litigation Sentinel Special Reports of April 29 and April 30. The next regularly scheduled Sentinel newsletter, Issue #3, ships Wednesday, May 6.",
      },
    ],
  },
  {
    slug: "musk-v-altman-day-2-the-fool-cross",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "\"I Was a Fool\": Day 2 of Musk v. Altman Put the Charitable-Trust Theory Through a Five-Hour Cross",
    subtitle:
      "Elon Musk spent roughly five hours under cross-examination on Day 2 of the OpenAI trial. William Savitt drew out the line that will define the case either way: $38 million of donor funding, an $800 billion company, and a witness who called himself a fool on the record. Here is what the cross actually established, and why every F500 General Counsel should keep reading the trial coverage this week.",
    readTime: "8 min read",
    author: "Wes Todd",
    date: "April 30, 2026",
    trending: true,
    content: [
      { type: "heading", text: "The Cross That Will Travel" },
      {
        type: "paragraph",
        text: "OpenAI lead counsel William Savitt asked Elon Musk yes-or-no questions for most of Wednesday afternoon in Judge Yvonne Gonzalez Rogers's Oakland courtroom. Musk did not give him yes-or-no answers. By the second hour, the witness was openly arguing with the form of the questions.",
      },
      {
        type: "pullquote",
        text: "Your questions are not simple. They are designed to trick me essentially.",
      },
      {
        type: "paragraph",
        text: "Musk's response to the cross-examination style became its own line of testimony. He told Savitt the questions were definitionally complex, accused him of being misleading, and at one point compared the form of the questioning to the classic loaded-question example: \"Have you stopped beating your wife?\" Judge Gonzalez Rogers cut him off from the bench: \"We are not going to go there.\" The courtroom laughed. The exchange will be in every recap of the trial, and it should be. It is the closest a celebrity-trial moment has come to capturing what charitable-trust litigation actually feels like under contested cross.",
      },
      {
        type: "paragraph",
        text: "Savitt was not trying to win the cross-examination on personality. He was trying to install a single number in the jury's working memory. He largely succeeded.",
      },

      { type: "heading", text: "The Number That Defines the Case" },
      {
        type: "paragraph",
        text: "Musk pledged a billion dollars when OpenAI was a 501(c)(3). He gave $38 million of it before he left the board in 2018. OpenAI's lead counsel walked the jury through that gap on Wednesday morning. He pulled emails. He pulled meeting notes. He read internal Musk communications back to the witness, including ones in which Musk himself argued OpenAI needed a for-profit aspect to compete against Google. Then he asked Musk to explain the friction between his deposition record, his X posts, and his testimony in court.",
      },
      {
        type: "paragraph",
        text: "Musk's response handed the plaintiff side its line of the trial.",
      },
      {
        type: "pullquote",
        text: "I was a fool who provided them free funding to create a startup.",
      },
      {
        type: "paragraph",
        text: "He clarified for the jury what he meant: \"I gave them $38 million of essentially free funding to create what would become an $800 billion company.\" He repeated a version of the same sentence three different ways during direct and cross. The phrasing matters. \"Free funding\" anchors the charitable-asset framing. \"$800 billion\" anchors the disgorgement remedy. \"Fool\" anchors the equitable-relief argument that a sympathetic donor was taken advantage of by sophisticated counterparties who knew what they were doing.",
      },
      {
        type: "paragraph",
        text: "The defense will argue that $38 million was no charity at all. Savitt pressed Musk on the gap between the pledge and the contribution, the rejected for-profit-control proposals from 2018, and the timeline of xAI, which Musk founded after losing the OpenAI board fight and which has reportedly raised over $10 billion at a multi-tens-of-billions valuation. Asked whether xAI now competes with OpenAI, Musk conceded: \"It is, at this point, technically competitive but much smaller than OpenAI.\"",
      },
      {
        type: "paragraph",
        text: "Musk also kept reaching for the framing that has run through the trial since opening day. \"Without me, OpenAI would not exist. I came up with the name. I came up with the idea.\" And on the structural argument behind the case: \"What you can't do is have your cake and eat it too, reaping the good association with being a non-profit and then switching to a for-profit model.\"",
      },

      { type: "heading", text: "What the Cross Actually Established" },
      {
        type: "paragraph",
        text: "Three things, none of them what the headline coverage will lead with.",
      },
      {
        type: "paragraph",
        text: "First, Musk's prior statements are now in evidence. The X posts calling Altman \"Scam Altman.\" The 2018 emails contemplating a for-profit subsidiary. The deposition silences on the term sheet Musk testified Wednesday he had read. Savitt got each of those exhibits in front of the jury without Musk landing a clean denial. That is the impeachment record the defense will cite in closing.",
      },
      {
        type: "paragraph",
        text: "Second, the charitable-trust theory survived contact. Musk did not back off the framing under five hours of cross. He restated it under pressure, kept the disgorgement remedy in the room, and refused to characterize the lawsuit as a competitive maneuver. When Savitt pressed him on personal financial gain from a remedy, Musk answered: \"No vacation homes, no yachts or anything.\"",
      },
      {
        type: "paragraph",
        text: "Third, the bench tone shifted. Judge Gonzalez Rogers stayed measured but visibly active. When Savitt complained from the lectern that he was struggling to get answers out of the witness, the judge replied: \"That is the challenge of all litigants.\" That bench register matters. The jury is advisory in this case. The judge will decide liability and remedy as a matter of equity. Bench language about how a witness handles cross is a leading indicator of how that judge weighs the witness's credibility on the equitable claims.",
      },

      { type: "heading", text: "Day 3 and the Witnesses Behind Musk" },
      {
        type: "paragraph",
        text: "Cross-examination resumed Thursday morning, today, and Savitt has indicated he expects to wrap in roughly an hour. After Musk steps down, plaintiff's counsel will call Jared Birchall, who runs Musk's family office Excession LLC and sits on the executive teams at xAI and Neuralink. OpenAI's counsel has placed Greg Brockman on 48-hour notice. Sam Altman has not yet personally taken the witness stand and is widely expected to testify next week.",
      },
      {
        type: "paragraph",
        text: "The thing to track today is whether OpenAI's counsel pulls Musk's xAI-side AI-safety record into the cross. Reporting earlier this morning suggests Savitt is preparing to ask about Grok's published safety incidents as evidence that Musk's AI-safety framing in the lawsuit does not match his commercial conduct outside the courtroom. That is the bridge from the charitable-trust theory to the AI-vendor governance question, and the cross-examination over the next 24 hours is where that bridge gets built or burned.",
      },

      { type: "heading", text: "Why F500 Boards Should Still Be Reading" },
      {
        type: "paragraph",
        text: "The Apr 29 Special Report on this trial flagged the F500 exposure. Hospital systems holding donor-restricted endowments. University research arms spinning out commercial labs. Private foundations funding for-profit subsidiaries. Each of those structures depends on a doctrine that says a once-charitable asset, once converted, stays converted. Day 2 narrowed that exposure rather than diluting it. Savitt's cross was the strongest version of the standing-and-motive defense the defense will run, and it did not move Musk off the charitable-trust framing. If the equitable claims survive a directed verdict and reach Judge Gonzalez Rogers's findings of fact, the opinion's reasoning will travel to every state with a charitable-trust statute and a donor with standing to invoke it.",
      },
      {
        type: "callout",
        text: "The F500 board question this week is not whether the jury delivers an advisory verdict for Musk. It is whether the firm's outside counsel can produce a one-page exposure analysis on every entity in the corporate structure that holds, has held, or is downstream of charitable-mission assets. Most cannot, today. The trial is the forcing function for asking.",
      },

      { type: "heading", text: "What the Next 48 Hours Decide" },
      {
        type: "paragraph",
        text: "Two specific things to watch through Friday close. First: whether Savitt lands a clean impeachment moment on the term-sheet inconsistency, which would be the defense's cleanest jury soundbite. Second: whether Birchall's testimony reinforces the donor-narrative or hands the defense a competing motive narrative tied to Musk's family-office structure. Either outcome shapes the directed-verdict posture going into the second week.",
      },
      {
        type: "paragraph",
        text: "Litigation Sentinel will continue to publish trial coverage at the article level for the duration of the case. The next regularly scheduled biweekly newsletter ships Wednesday, May 6.",
      },
      {
        type: "paragraph",
        text: "Wes",
      },
      {
        type: "callout",
        text: "Sources. All quoted testimony and bench statements verified against multiple Tier-1 sources as of the morning of April 30, 2026. Primary references: NPR (April 29), CNN Business (April 29), CBS News (April 29), Gizmodo (April 29), NBC News (April 29), SF Standard (April 29), PBS NewsHour (April 29), Al Jazeera (April 29), CNBC Day 3 live blog (April 29), CNBC Day 4 live blog (April 30), Axios (April 30), and CourtListener docket 4:24-cv-04722. This is a Special Report follow-up to the Litigation Sentinel Special Report of April 29. Litigation Sentinel's regular Issue #3 newsletter ships Wednesday, May 6.",
      },
    ],
  },
  {
    slug: "musk-v-altman-took-the-stand",
    section: "Litigation Strategy",
    tag: "Special Report",
    title: "Musk Took the Stand: The Charitable-Trust Theory Every F500 Board Should Brief This Week",
    subtitle:
      "Day 1 of Musk v. Altman put Elon Musk on the witness stand for nearly three hours, with verbatim testimony on charitable trust, AI safety, and the friendship that broke. The trial sets the precedent for whether nonprofit-to-for-profit conversions can be unwound by historical donors. Here is what every F500 board should be asking its General Counsel this week.",
    readTime: "10 min read",
    author: "Wes Todd",
    date: "April 29, 2026",
    trending: true,
    content: [
      { type: "heading", text: "The Founder Who Showed Up" },
      {
        type: "paragraph",
        text: "Elon Musk and Sam Altman built OpenAI together over a series of dinners in 2015. On Tuesday morning, in a federal courtroom in Oakland, Musk took the witness stand for nearly three hours and recounted under oath the moment that friendship broke. Altman, the named defendant, did not appear at trial Day 1. He sent a prerecorded video to an Amazon Web Services event across the bay, citing a schedule conflict.",
      },
      {
        type: "paragraph",
        text: "Day 1 of Musk v. Altman, docket 4:24-cv-04722 before Judge Yvonne Gonzalez Rogers, opened with $38 million Musk donated when OpenAI was a 501(c)(3) nonprofit, two surviving claims (breach of charitable trust and unjust enrichment), and a remedy demand that includes the ouster of Altman and the unwinding of OpenAI's for-profit conversion. Musk has publicly disclaimed any personal recovery. His framing is bigger than the dollar figure.",
      },
      {
        type: "pullquote",
        text: "If we make it OK to loot a charity, the entire foundation of charitable giving in America will be destroyed.",
      },
      {
        type: "paragraph",
        text: "Musk returned to the same point later in his direct: \"Fundamentally, I think they're going to try to make this lawsuit very complicated, but it's actually very simple. Which is that it's not OK to steal a charity.\"",
      },
      {
        type: "paragraph",
        text: "Those sentences, delivered under oath in front of a jury that will issue an advisory verdict, are the through-line of the trial. Set aside the celebrity arithmetic and the $150B+ damages headline, and what remains is a charitable-trust theory that, if Judge Gonzalez Rogers adopts it, reaches every research lab, hospital system, university spinout, and charitable-asset-backed entity in the United States. The defense will frame the case as a sore-loser lawsuit by a founder who lost a board fight in 2018. The plaintiff will frame it as a charitable-asset recovery action by a donor who never received what he gave under. The court will decide which frame the law recognizes.",
      },

      { type: "heading", text: "The Legal Theory in Plain English" },
      {
        type: "paragraph",
        text: "Twenty-four claims were dropped pre-trial. Two stayed. Breach of charitable trust. Unjust enrichment.",
      },
      {
        type: "paragraph",
        text: "In plain English, the question is whether a 501(c)(3) can pivot, take a $10B+ investment from a strategic partner, restructure toward a conventional for-profit, and mint its founders into the wealthiest people on earth using assets that came in under a charitable mission. Musk's argument is that a charity is a one-way ratchet. Money flows in under the mission. It does not flow back out as founder equity. If Judge Gonzalez Rogers buys that theory, the remedy could include forced reversion to nonprofit governance and disgorgement of Microsoft's stake.",
      },
      {
        type: "paragraph",
        text: "The plaintiff's metaphor, delivered by Musk's lead trial counsel Steven Molo in opening: \"The museum store can't loot the museum and sell the Picassos.\" The point is that a nonprofit's commercial subsidiary exists to serve the mission. It cannot become the mission's heir. Once the assets came in tax-deductible, they stayed in.",
      },
      {
        type: "paragraph",
        text: "The remedy demand is the part that should keep an F500 General Counsel up at night. Plaintiff is asking the court to unwind a corporate conversion that took years and required investment-grade tax opinions, a corporate restructuring, billions of dollars in third-party capital, and a global commercial enterprise built on top. The remedy asks Judge Gonzalez Rogers to reach back through all of it and put the assets back where they started. If she does, the precedent is created. If she doesn't, every nonprofit-to-for-profit conversion in the country gets a green light to keep moving.",
      },

      { type: "heading", text: "The Larry Page Arc" },
      {
        type: "paragraph",
        text: "The single most-quotable moment of Day 1 was not about money. It was about Larry Page.",
      },
      {
        type: "pullquote",
        text: "The reason OpenAI exists is because Larry Page called me a 'specieist.'",
      },
      {
        type: "paragraph",
        text: "He continued in his AI-safety origin story: \"We don't want to have a 'Terminator' outcome. We want to be in a Gene Roddenberry outcome, like 'Star Trek.' Not so much a James Cameron movie like 'Terminator.'\"",
      },
      {
        type: "paragraph",
        text: "The story Musk told the jury was that OpenAI exists because of an argument with Larry Page over whether human survival mattered. Page, in Musk's telling, accused him of caring more about humans than about machine intelligence. Musk, on the stand, said that argument was the moment he realized Google was not the right home for AI safety work and that someone had to build a counterweight. His exact framing: \"I was very close friends with Larry Page at Google. We would talk for many hours about AI safety. At a certain point, it was clear to me Larry Page was not sufficiently caring about AI. We had to have a counterpoint against Google.\"",
      },
      {
        type: "paragraph",
        text: "That testimony does two things at once. It positions Musk's $38M donation as the founding act of an AI-safety institution rather than the seed capital for a commercial enterprise. It also gives the jury a story they will remember in deliberations: a founder who walked away from a friendship and from Google because he believed the species was at stake. That is a hard frame to dislodge with cross-examination.",
      },
      {
        type: "paragraph",
        text: "The defense knows it. That is why the defense opening did not try to dismiss the friendship arc. It tried to redirect the jury to a different question.",
      },

      { type: "heading", text: "The Opposing Frames" },
      {
        type: "pullquote",
        text: "We are here because Mr. Musk didn't get his way at OpenAI.",
      },
      {
        type: "paragraph",
        text: "OpenAI's lead counsel William Savitt opened with that frame. Savitt's case is built around three pieces of evidence. Musk wanted control of OpenAI in 2018 and was rejected. Musk left the board after the rejection. Musk subsequently founded xAI, a direct commercial competitor that has reportedly raised over $10B at a multi-tens-of-billions valuation. The defense's theory is that this lawsuit is litigation in service of competition. The \"loot a charity\" framing, Savitt will argue, is a pretext for a remedy that would hand a strategic advantage to xAI by disabling its largest competitor.",
      },
      {
        type: "paragraph",
        text: "Savitt put the personal frame on Musk directly in opening: \"What he cares about is Elon Musk being on top.\" The cross-examination strategy reportedly includes Musk's own communications about OpenAI's safety researchers, some of which include the word \"Jackasses.\" If those exhibits land, the jury will hear Musk's public AI-safety stance and his private dismissals of OpenAI's safety culture in the same week. That tension is the core of the defense theory.",
      },
      {
        type: "paragraph",
        text: "The plaintiff's counter is structural. Standing under California charitable-trust law does not require pure motives. It requires donor status and a documented mission. Musk has both. Whether he founded a competitor afterward is, on this theory, irrelevant.",
      },

      { type: "heading", text: "Day 2 Cross-Examination" },
      {
        type: "paragraph",
        text: "Wednesday morning, Musk returned to the stand for cross-examination by OpenAI's counsel and continued portions of his direct. The themes shifted from charitable-trust framing to AI capability and timing. On AGI, Musk testified: \"My guess is AI will probably be smarter than any human next year.\" On the present moment, he added: \"Here we are in 2026, AI is very smart.\" Asked whether he stood to gain financially from a remedy, Musk answered: \"No vacation homes, no yachts or anything.\"",
      },
      {
        type: "paragraph",
        text: "The defense surfaced Musk's own X posts as exhibits. The most pointed read directly to the jury: \"Scam Altman and Greg Brockman stole a charity. Full stop.\" Plaintiff's read is that the post is consistent with the same charitable-asset framing Musk has carried under oath. Defense's read is that it is evidence of a litigation campaign disguised as a fiduciary one. The jury will be asked, in effect, whether public X posts about a defendant are admissible context or impeachment material.",
      },
      {
        type: "paragraph",
        text: "Musk's chief of staff Jared Birchall is on the witness list and was scheduled to testify Wednesday. OpenAI's counsel placed Greg Brockman on 48-hour notice, signaling Brockman could be called as soon as the day after Birchall. Sam Altman has not yet personally taken the witness stand at trial as of close of Day 2.",
      },

      { type: "heading", text: "Why This Reaches Every F500" },
      {
        type: "paragraph",
        text: "Consider the entities sitting on charitable-mission assets in the United States right now. Hospital systems holding donor-restricted endowments. University research arms spinning out commercial labs. Private foundations funding for-profit subsidiaries. Charitable-asset-backed entities that were converted, reorganized, or merged into commercial structures over the last two decades. Every one of those structures depends on a doctrine that says a once-charitable asset, once converted, stays converted.",
      },
      {
        type: "paragraph",
        text: "If Musk's theory wins, that doctrine cracks. A donor twelve years removed from the original gift gets standing to sue to claw the conversion back. The relevant question is not whether the conversion was legally papered. The relevant question is whether the assets sitting in the for-profit form today can be traced back to charitable-mission inflows. If they can, the remedy theory says they belong back inside the mission.",
      },
      {
        type: "paragraph",
        text: "The board question is uncomfortable. How much of our balance sheet is exposed to a charitable-trust challenge from a historical donor we have never thought about? For most F500s with any nonprofit-adjacent activity, the answer is: nobody has run that analysis recently. The inputs are scattered across general counsel files, foundation board minutes, M&A diligence binders from prior decades, and tax-opinion letters that nobody has revisited since the deal closed.",
      },
      {
        type: "callout",
        text: "That analysis becomes urgent on the day a court rules in favor of a charitable-trust theory. Running it now, before the verdict, is the cheapest version of the work.",
      },

      { type: "heading", text: "Procedural Posture and What to Watch" },
      {
        type: "paragraph",
        text: "The jury in this case is advisory. Judge Gonzalez Rogers, sitting in the Northern District of California, will decide liability and remedy as a matter of equity. From the bench on Day 1, she framed the trial in plain terms: \"It's a good jury, and they're going to hear the facts, and we're going to get a verdict.\" She has indicated she will weigh the jury's liability findings. The trial is expected to run through mid-May. The witness list includes Sam Altman, OpenAI co-founder Ilya Sutskever, Greg Brockman, Microsoft CEO Satya Nadella by deposition, Musk's chief of staff Jared Birchall, former OpenAI CTO Mira Murati by videotaped deposition, and expert testimony from UC Berkeley's Stuart Russell and Columbia Law's David Schizer.",
      },
      {
        type: "paragraph",
        text: "Three things to watch over the next two weeks. First: whether the judge issues any pretrial ruling that signals her view on charitable-trust standing under California law. Second: whether OpenAI's counsel succeeds in getting the \"Jackasses\" exhibits in front of the jury, and whether Musk has a clean answer when confronted with them. Third: whether Altman's testimony, when it comes, produces a single quotable line that supplants Musk's \"loot a charity\" framing as the trial's defining moment.",
      },
      {
        type: "paragraph",
        text: "A verdict in mid-May lands in the middle of Q2 board cycles. The opinion's reasoning, more than its disposition, is what will travel.",
      },

      { type: "heading", text: "The Social-Media Admonishment" },
      {
        type: "paragraph",
        text: "Before the jury was seated, Judge Gonzalez Rogers lectured both Musk and Altman over their public social-media posts about each other. Musk has called Altman \"Scam Altman\" repeatedly on X. The judge's instruction from the bench: \"Try to control your propensity to use social media to make things worse outside this courtroom.\" She declined to issue a gag order. The episode is being covered as a celebrity-trial color piece. It is more than that.",
      },
      {
        type: "paragraph",
        text: "Every executive in active litigation should read the admonishment as a benchmark. X posts, LinkedIn comments, podcast appearances, and earnings-call asides are deposition exhibits in 2026. The bar for executive social discipline keeps moving up. The question for an F500 board is not whether your CEO has a written social-media policy. The question is whether that policy was last updated when Twitter was still called Twitter.",
      },
      {
        type: "paragraph",
        text: "Two specific exposures sit underneath this. First, public commentary on threatened or active litigation becomes admissible as evidence of state of mind, intent, or admission. Second, the same commentary becomes available to opposing counsel for impeachment of the executive's later testimony. The cleanest approach is a written executive-communications protocol that treats every public statement as a deposition rehearsal.",
      },

      { type: "heading", text: "Three Questions Every F500 Board Should Put to Its GC This Week" },
      {
        type: "paragraph",
        text: "1. Walk us through every entity in our corporate structure that holds, or has ever held, charitable-mission assets. What is our exposure if a historical donor sued tomorrow under a charitable-trust theory?",
      },
      {
        type: "paragraph",
        text: "2. What is our current written protocol for executive social-media commentary on active or threatened litigation, and when was it last reviewed against post-2024 case law on admission and impeachment?",
      },
      {
        type: "paragraph",
        text: "3. If we received a charitable-trust challenge on a prior nonprofit-to-for-profit conversion, who is our outside counsel, what is the standing analysis they would run on day one, and what is the disgorgement exposure on the underlying assets at today's valuation?",
      },
      {
        type: "paragraph",
        text: "Litigation Sentinel will publish a daily tracker for the duration of the trial.",
      },
      {
        type: "paragraph",
        text: "Wes",
      },
      {
        type: "callout",
        text: "Sources. All quoted testimony and bench statements verified against Tier-1 coverage as of April 29, 2026. Primary references: Al Jazeera (April 28), Fortune (April 28), Boston Globe (April 28), TheNextWeb (April 28), TechCrunch (April 28), Reuters via Investing.com (April 28), ABC7 News week-1 live blog, CNBC Day 1 and Day 3 live blogs, Local News Matters Day 2 (April 28), Bloomberg (social-media admonishment, April 28), and CourtListener docket 4:24-cv-04722.",
      },
    ],
  },
  SC_AI_HALLUCINATION_ARTICLE,
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
    readTime: "9 min read",
    author: "Wes Todd",
    date: "January 29, 2026",
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
export const CHUBB_GREENBERG_ARTICLE: NewsletterArticle = {
  slug: "chubb-greenberg-deposition-doctrine",
  section: "Case Watch",
  tag: "Deep Dive",
  title: "Chubb's CEO Can't Hide: Why Greenberg's Deposition Reorders Bad-Faith Doctrine",
  subtitle:
    "A New York special referee just put Evan Greenberg's name on a deposition notice in the Archdiocese of New York CVA coverage fight. The apex doctrine collapsed in three sentences. Plaintiffs' counsel will file the transcript as an exhibit in every other CVA coverage case in the state by the end of the month.",
  readTime: "4 min read",
  author: "Wesley Todd",
  date: "May 22, 2026",
  content: [
    {
      type: "paragraph",
      text: "New York, May 21. Special referee Justice Rosalyn Richter signed an opinion that put Evan Greenberg's name on a deposition notice. Greenberg runs Chubb. He has run it for more than two decades. He has never been deposed in a coverage fight. That changes now.",
    },
    {
      type: "paragraph",
      text: "The case is the [Archdiocese of New York coverage action](https://www.insurancejournal.com/news/national/2026/05/21/870917.htm) over Child Victims Act claims. The Archdiocese sued its carriers after Chubb declined to fund a $300 million survivors' compensation fund. More than 1,300 CVA suits sit behind the coverage dispute. Cardinal Dolan signed the complaint. Greenberg signed the denial letter, or at minimum approved the position. That signature is what brought Richter's pen down.",
    },
    {
      type: "paragraph",
      text: "Chubb fought the deposition the way every carrier fights a CEO deposition. The standard playbook runs on the apex-doctrine ladder. Show that the lower claims executives have full authority. Show that the CEO had no unique personal knowledge. Show that other witnesses can answer every relevant question. Richter rejected all three. She wrote that the coverage decision sat \"at the highest levels\" of the company. That phrase is the operative language. Once a special referee finds the CEO personally directed the position, the apex doctrine collapses.",
    },
    {
      type: "paragraph",
      text: "The order is short. The reasoning is shorter. Richter cited internal Chubb communications produced in discovery. She named the meetings. She named the dates. She walked through who signed off. The opinion reads like a closing argument, not a procedural ruling. Plaintiffs' counsel for the Archdiocese will file the transcript exhibit in every other CVA coverage fight in the state by the end of the month.",
    },
    {
      type: "pullquote",
      text: "The doctrine moved on a Thursday in May, in a referee's chambers, on a 1,300-suit coverage dispute that had been pending for two years. Now it sits.",
    },
    {
      type: "paragraph",
      text: "The number that matters is $300 million. That is the survivors' fund the Archdiocese cannot fully cover without insurance. Chubb sits at the top of the tower. The denial pushed the dispute into court. The carriers underneath Chubb, including some lower-layer markets, have been watching the lead carrier's posture before setting their own. They will watch now whether Greenberg sits or whether Chubb files an emergency Article 78 to vacate Richter's order.",
    },
    {
      type: "paragraph",
      text: "Three doctrinal pieces moved in the same opinion. First, the apex shield. Chubb argued that Greenberg had no involvement in the day-to-day claim file. Richter found involvement in the strategic file. The two are not the same, and the distinction is what plaintiff bars across the country will press next time a Fortune 100 CEO sits at the top of a coverage denial. Second, the bad-faith pleading bar. Once a CEO is on the record under oath about why coverage was denied, the punitive-damages threshold becomes a fact question, not a pleading question. Third, the timing. The deposition will happen before the underlying CVA settlements close. Plaintiffs in the underlying suits get a CEO transcript on coverage motive while their own damages are still being negotiated. The leverage runs one direction.",
    },
    {
      type: "paragraph",
      text: "Chubb's defense team has not yet announced its next move. The options are narrow. An interlocutory appeal of a special referee's discovery order is uphill in New York. A protective order capping the deposition's scope is possible. A negotiated written-Q-and-A substitute is theoretically available but rarely accepted once the apex finding has been written. The most likely scenario is that Greenberg sits, with a tight protective order on duration and topic, sometime before the Article 75 confirmation hearing.",
    },
    {
      type: "paragraph",
      text: "Plaintiff counsel for the Archdiocese has not posted the order publicly yet. It will surface on PACER-adjacent state-court trackers within days. Insurance Journal carried the first wire summary. The full text of [Richter's opinion](https://iapps.courts.state.ny.us/nyscef/CaseSearch) will appear on NYSCEF under the Archdiocese coverage docket.",
    },
    {
      type: "paragraph",
      text: "What the carrier defense bar reads in the opinion is a roadmap for the next twenty CVA coverage fights. Each one will name the CEO if there is a signed denial. Each will cite Richter. Each will quote the \"highest levels\" phrase. The doctrine moved on a Thursday in May, in a referee's chambers, on a 1,300-suit coverage dispute that had been pending for two years. Now it sits.",
    },
    {
      type: "paragraph",
      text: "Greenberg has thirty days. Then he takes the oath. Then plaintiffs' counsel asks the first question. Then the transcript becomes an exhibit in every other CVA coverage fight in the state. That is the cascade.",
    },
  ],
};

export const TAKEDA_885M_ARTICLE: NewsletterArticle = {
  slug: "takeda-885m-carrier-subrogation-template",
  section: "Case Watch",
  tag: "Deep Dive",
  title: "Takeda Hit for $885M: The Pay-for-Delay Verdict That Becomes a Carrier Subrogation Template",
  subtitle:
    "At 4:47 p.m. Thursday a Boston federal jury returned the first plaintiff verdict against a pharmaceutical company in a pay-for-delay class action since the Supreme Court greenlit the theory in 2013. $821.7 million of the award trebles to roughly $2.47 billion. The opt-out geometry — CVS and Walgreens captured $312 million combined, the entire end-payor class split $63.2 million — is the template every carrier antitrust unit is reading this weekend.",
  readTime: "5 min read",
  author: "Wesley Todd",
  date: "May 22, 2026",
  content: [
    { type: "heading", text: "The Verdict" },
    {
      type: "paragraph",
      text: "At 4:47 p.m. on Thursday, May 21, 2026, the foreperson of a federal jury in Boston rose and read out a number that made Takeda Pharmaceutical's lead trial counsel sit very still: eight hundred eighty-five million dollars. The jurors had spent five weeks watching Kristen Johnson walk them through what she called \"a $210 million payoff\" wired between two drugmakers to keep a cheaper version of the constipation drug Amitiza off pharmacy shelves until January 2021. They returned with the first plaintiff verdict against a pharmaceutical company in a pay-for-delay class action since the Supreme Court greenlit the theory in 2013. Under federal antitrust law, $821.7 million of the award trebles automatically to roughly $2.47 billion. The number, reported within the hour by [Insurance Journal](https://www.insurancejournal.com/news/national/2026/05/21/870926.htm), kept climbing on the screens of carrier general counsel from Hartford to Bloomfield.",
    },
    { type: "heading", text: "What the Jury Saw" },
    {
      type: "paragraph",
      text: "The case sat in the U.S. District Court for the District of Massachusetts under the consolidated caption In re Amitiza Antitrust Litigation. Johnson, of Hagens Berman, ran point for the direct purchaser class. Jonathan Stratton handled the retailer track. Across the aisle sat Joshua Barlow, defending Takeda through a five-week trial that turned on a single 2014 agreement: Par Pharmaceutical, the would-be generic challenger, would drop its patent fight in exchange for a payment and a January 2021 launch date. Plaintiffs called it a reverse payment. Takeda called it a patent settlement.",
    },
    {
      type: "paragraph",
      text: "Johnson, in closing, told jurors: \"This verdict makes clear that pharmaceutical companies cannot buy their way out of competition.\" The jury agreed in three columns. Direct purchasers, the wholesalers who buy from manufacturers, took $474.9 million. The end-payor class, which is where the property and casualty carriers, health funds, and ERISA plans live, took $63.2 million. Individual retailers who opted out and sued on their own took $346.8 million, with CVS recovering $191 million and Walgreens recovering $121 million.",
    },
    { type: "heading", text: "The Opt-Out Geometry" },
    {
      type: "paragraph",
      text: "The shape of the $885 million award is itself the story for any subrogation lawyer reading the docket Friday morning. CVS and Walgreens did not stay in the class. They hired their own counsel, sat at their own counsel table, and walked out with per-plaintiff recoveries roughly three times larger than what their fellow retailers split inside the class. The math is not subtle. Two named retailers, acting individually, captured $312 million of the verdict. The entire end-payor class, which includes every major health insurer that paid an Amitiza claim between 2014 and 2021, split $63.2 million.",
    },
    {
      type: "pullquote",
      text: "Two named retailers, acting individually, captured $312 million of the verdict. The entire end-payor class split $63.2 million. The ratio is the template.",
    },
    {
      type: "paragraph",
      text: "That ratio is the template. It is also the conversation happening this weekend inside every carrier antitrust unit that previously treated pay-for-delay recovery as a passive class-membership exercise. The Hagens Berman complaint, the [docket on PACER and mirrored on CourtListener](https://www.courtlistener.com/docket/?q=amitiza+antitrust), and the [Hagens Berman case page](https://www.hbsslaw.com/cases/amitiza-antitrust) all show the named opt-out plaintiffs filed substantively identical pleadings to the class, then tried the case in parallel. The opt-out machinery is not exotic. It is paperwork and a willingness to seat counsel.",
    },
    { type: "heading", text: "Takeda's Defense and Its Edges" },
    {
      type: "paragraph",
      text: "Barlow's defense leaned on the Hatch-Waxman framework: Takeda's underlying patent was presumed valid, the Par settlement preserved a launch date earlier than patent expiration, and the payment, in Takeda's telling, reflected litigation risk rather than monopoly rent. The jury was not persuaded. They were shown internal Takeda projections of generic erosion, the timing of the payment alongside the dismissal of Par's paragraph IV challenge, and the price curve Amitiza traveled between 2014 and 2021. Generic linaclotide and lubiprostone substitutes arrived only after the agreed January 2021 date. The premium consumers, pharmacies, and end-payors paid in the interim is what plaintiffs metered against the $885 million figure.",
    },
    {
      type: "paragraph",
      text: "Takeda issued a one-paragraph statement after the verdict announcing it would seek post-trial relief and, if denied, an appeal to the First Circuit. The company's stock closed before the verdict and will reopen to it Friday. Internal counsel familiar with the trial team's strategy expect motions for judgment as a matter of law and remittitur within the standard twenty-eight day post-verdict window, with the appeal docketed before the First Circuit by late summer.",
    },
    { type: "heading", text: "What Sits on Carrier Desks Friday" },
    {
      type: "paragraph",
      text: "The class verdict of $63.2 million for end-payors will be distributed through a claims administrator on a pro rata basis tied to documented Amitiza paid claims. Carriers who archived pharmacy benefit manager remittance data from 2014 through 2021 will receive checks. Carriers who did not, or who relied on PBM aggregators to file class proofs of claim, will receive smaller checks or none. The Hagens Berman administrator is expected to publish a claim deadline within sixty days under the standard schedule for antitrust class recoveries.",
    },
    {
      type: "paragraph",
      text: "Two separate dockets matter for what happens next. The First Circuit will hear Takeda's appeal on the reverse-payment legal standard sometime in 2027. And every active pay-for-delay case currently pending, including the Humira, Restasis, and Bystolic dockets tracked on the [FTC's pharmaceutical antitrust page](https://www.ftc.gov/news-events/topics/competition-enforcement/pharmaceutical-antitrust), now carries a $885 million data point that did not exist on Wednesday.",
    },
  ],
};

export const WTW_HOWDEN_ARTICLE: NewsletterArticle = {
  slug: "wtw-howden-broker-playbook",
  section: "Case Watch",
  tag: "Deep Dive",
  title: "WTW Walks Into SDFL With a Theory of the Case: \"Howden's Playbook of Hiring Entire Teams\"",
  subtitle:
    "On May 19, Willis Towers Watson filed in Miami federal court against Howden US and five former marine and yacht brokers. The complaint frames the defections as \"Howden's playbook of hiring entire teams.\" That sentence is the case. WTW has filed parallel actions against Marsh, Aon, Alliant, and Brown & Brown — each docket validates the next.",
  readTime: "5 min read",
  author: "Wesley Todd",
  date: "May 22, 2026",
  content: [
    {
      type: "paragraph",
      text: "On May 19, 2026, Willis Towers Watson Northeast filed [Willis Towers Watson Northeast v. Howden US, et al.](https://www.insurancejournal.com/news/national/2026/05/21/870968.htm) in the U.S. District Court for the Southern District of Florida. The complaint names [Howden US](https://www.howdengroup.com/us-en) as the corporate defendant and pulls five former WTW marine and yacht brokers in alongside it: Nancy Poppe, Diana Fabozzi, Jasmyn Tomlinson, Kathleen Shea, and Christel Lynn Lincoln. WTW does not describe the defections as opportunistic. It calls them, in the words of the complaint, \"Howden's playbook of hiring entire teams from other insurance brokerage companies and having those former employees violate their duties of loyalty while still employed and then breach their post-employment restrictive covenants.\"",
    },
    {
      type: "paragraph",
      text: "That sentence is the case. Everything else in the filing is structure built around it.",
    },
    { type: "heading", text: "The Venue Choice" },
    {
      type: "paragraph",
      text: "WTW filed in Miami, not New York, not London, not the Delaware Chancery. The Southern District of Florida is where the yacht book lives. Poppe, who served as senior director of broking at WTW before her December 22, 2025 departure, now runs Howden's yacht practice. Lincoln walked the same day. Fabozzi, Shea, and Tomlinson followed in early 2026. The article identifies a sixth departure, Alexandra Walker, who is not a named defendant in the caption WTW filed Tuesday.",
    },
    {
      type: "paragraph",
      text: "The forum picks itself once you accept WTW's framing. The clients live on the water in Fort Lauderdale, Palm Beach, and the Keys. The covenants attach to a book of business that physically sits in the district. A Florida federal judge will rule on whether brokers who placed hull and protection-and-indemnity coverage for nine-figure vessels can carry that work across the street to a competitor within months of resigning. The docket will sit in the [SDFL public records system](https://www.flsd.uscourts.gov/) once the case number propagates.",
    },
    { type: "heading", text: "The Pattern Argument" },
    {
      type: "paragraph",
      text: "WTW did not file one suit. It filed five. Parallel actions are pending against [Marsh](https://www.marsh.com/), [Aon](https://www.aon.com/), [Alliant](https://www.alliant.com/), and [Brown & Brown](https://www.bbinsurance.com/). The Howden complaint reads as the fifth piece of a coordinated litigation strategy, not a one-off response to a team lift.",
    },
    {
      type: "paragraph",
      text: "This matters for the attorney-maneuver question. A single suit against a single competitor for a single team lift is a covenant case. Five suits filed in close sequence, each framed around the same factual template, is something else. WTW is trying to create a record. Each complaint that survives a motion to dismiss validates the next one. Each preliminary injunction that holds raises the cost of the next lift across the entire market. The brokers WTW competes with read these dockets the same way insurance carriers read the National Loss Database.",
    },
    {
      type: "pullquote",
      text: "Five suits filed in close sequence, each framed around the same factual template, is something else. WTW is trying to create a record.",
    },
    { type: "heading", text: "What the Complaint Has to Prove" },
    {
      type: "paragraph",
      text: "The restrictive-covenant question in federal court turns on three things: whether the covenants are enforceable under the governing state law, whether the conduct alleged actually breached them, and whether WTW can show irreparable harm. The first is a legal question the judge will decide. The second is fact-intensive and will turn on emails, client contact logs, and what Poppe and the others said to clients between November 2025 and their resignation dates. The third is where WTW's pattern argument earns its keep. If the same five-broker structure recurs across Marsh, Aon, Alliant, Brown & Brown, and now Howden, the harm theory shifts from \"we lost a team\" to \"a competitor is running a documented acquisition method against us.\" Judges treat those differently at the injunction stage.",
    },
    { type: "heading", text: "What Howden's Answer Will Look Like" },
    {
      type: "paragraph",
      text: "Expect three moves. First, attack the covenants on their face under Florida non-compete law, which permits enforcement but scrutinizes scope. Second, challenge the duty-of-loyalty allegations by demanding contemporaneous evidence rather than post-resignation inference. Third, contest the \"playbook\" characterization itself as commercial defamation dressed up as litigation rhetoric. Howden has hired aggressively in the U.S. since 2023 and will frame that as ordinary market behavior, not a coordinated scheme.",
    },
    {
      type: "paragraph",
      text: "The pleading-stage fight is whether WTW's pattern allegations clear the plausibility bar set by Twombly and Iqbal. If they do, discovery opens onto Howden's internal hiring records across multiple lifts. If they do not, the case collapses into five individual covenant disputes that turn on whose Outlook calendar shows what.",
    },
    { type: "heading", text: "The Read From the Outside" },
    {
      type: "paragraph",
      text: "Restrictive-covenant enforcement is the live battleground in insurance distribution. The carriers watch this docket because the brokers control the placement, and the brokers know the covenants are the only friction keeping a producer from walking with the book. Tuesday's filing in Miami is the most aggressive framing any of the global brokers has put on paper against a single competitor. The next 90 days will say whether SDFL accepts that framing or treats it as five covenant cases stapled together.",
    },
  ],
};

export const CARRIER_RICO_SCOREBOARD_ARTICLE: NewsletterArticle = {
  slug: "carrier-rico-scoreboard-2026-mid-year",
  section: "Litigation Strategy",
  tag: "Deep Dive",
  title: "The Fraudemic Scoreboard at Mid-Year 2026: Where the Carrier RICO Offense Is Actually Landing",
  subtitle:
    "Tim Capowski coined \"Fraudemic\" to describe what his firm bio calls the largest insurance fraud in U.S. history. The label has done a lot of work. Behind it now sits a growing public archive of carrier RICO complaints, a CLM conference panel slot, and a mid-year read that separates the rhetoric from the trajectory.",
  readTime: "5 min read",
  author: "Wesley Todd",
  date: "May 22, 2026",
  content: [
    { type: "heading", text: "The Fraudemic Scoreboard at Mid-Year 2026" },
    {
      type: "paragraph",
      text: "Tim Capowski, a partner at [Kahana Feld and head of its National Appellate Litigation & Consulting Group](https://kahanafeld.com/team-member/tim-capowski-esq/), coined the word \"Fraudemic\" to describe what his firm bio calls \"the largest insurance fraud in U.S. history.\" The label has done a lot of work since. It now sits behind a body of plaintiff-style complaints filed by insurance carriers in federal court, a growing public archive of those filings, and a panel slot at the 2026 Claims and Litigation Management Annual Conference titled \"Stronger Together: Time to Collaborate on Defense Strategies.\"",
    },
    {
      type: "paragraph",
      text: "The doctrine those filings rely on is not new. Civil RICO sat in the carrier toolbox for years, dormant except in staged-accident cases out of the Eastern District of New York. What changed is the cataloguing. The [Kahana Feld Appellate Toolbox](https://kahanafeld.com/toolbox/) now publishes a year-by-year archive of New York federal RICO fraud complaints and indictments against plaintiff attorneys and medical professionals running from 2012 through 2026. That archive is the closest thing the carrier bar has to a scoreboard, and a mid-year read of it gives the clearest picture of where the offense is and is not landing.",
    },
    { type: "heading", text: "What Capowski actually wrote" },
    {
      type: "paragraph",
      text: "Two Capowski pieces in the Appellate Toolbox set the floor for any current discussion of carrier-side offense. The first is [\"The Sunlight Disinfectant Principle: Transparency & Full Disclosure Are Necessary Safeguards for Consumer Litigation Funding,\"](https://kahanafeld.com/toolbox/) published in January 2024. Capowski's thesis in that piece, per the title and the firm's framing of his litigation-funding work, is that mandatory disclosure of third-party funders is itself a defensive measure that exposes the economic engine plaintiff firms otherwise keep off the record. He does not argue for RICO directly in that piece. He argues for the precondition that makes a RICO theory pleadable, which is the ability to identify who is paying for the claim and on what terms.",
    },
    {
      type: "paragraph",
      text: "The second is his December 2022 piece, [\"The Snake Attack Phenomenon: The Courts Must Stop Overlooking and Facilitating The Continued Poisoning of Our Jury System.\"](https://kahanafeld.com/toolbox/) That article, again per its title, treats coordinated plaintiff tactics as a systemic problem the bench has been too slow to identify. The Snake Attack frame and the Fraudemic frame share an assumption Capowski has been explicit about: the plaintiff side has industrialized, and isolated case-by-case defense will not match it. Every reference in this article to Capowski's framing rests on those two published pieces and his bio's own description of his Fraudemic coinage. Nothing here is original CaseGlide doctrine.",
    },
    { type: "heading", text: "The carrier RICO pattern, as currently filed" },
    {
      type: "paragraph",
      text: "A scoreboard read of the Toolbox archive shows three repeat features in the New York federal RICO complaints Capowski's group tracks. They are worth naming because they are the test of whether a given carrier complaint is well-pleaded or aspirational.",
    },
    {
      type: "paragraph",
      text: "First, the strongest carrier RICO complaints in the archive name specific clinics and specific runners alongside the law firm. A no-fault staged-accident ring is a closed loop, and the cases that survive motions to dismiss are the ones that close the loop on paper. Carrier complaints that name only the firm and gesture at \"co-conspirators to be identified\" run into pleading-particularity walls under Rule 9(b). The Toolbox's 2024 and 2025 entries are heavy on the co-defendant clinic and the named-physician model. The 2026 entries follow the same pattern.",
    },
    {
      type: "paragraph",
      text: "Second, the predicate-acts list almost always anchors on mail and wire fraud tied to claim submissions. That is mechanical. What is not mechanical is the pattern element. Carrier complaints that succeed plead a multi-year pattern with a count of submitted claims and a dollar total. The complaints that fail are the ones that plead one big number without the underlying claim-by-claim count.",
    },
    {
      type: "paragraph",
      text: "Third, the venue is concentrated. EDNY remains the dominant home for these filings, with SDNY second. Federal courts outside New York have seen scattered filings, but the doctrine and the bench's familiarity with no-fault fraud both live in the EDNY. That concentration is itself a strategic signal. A carrier weighing a RICO offense in a non-New York venue is weighing a venue that has not yet been trained on the theory.",
    },
    { type: "heading", text: "What the mid-year read tells claims leaders" },
    {
      type: "paragraph",
      text: "The most useful thing the scoreboard does is separate the rhetoric from the trajectory. Capowski's Fraudemic framing is rhetorically aggressive, and that framing has done a lot to shift the conversation at conferences like CLM. The actual filed-case curve is steadier than the rhetoric. Carrier RICO complaints have been filed in measurable numbers every year since 2012 per the Toolbox archive, and the case mix continues to skew toward no-fault and staged-accident rings rather than general personal-injury practices.",
    },
    {
      type: "paragraph",
      text: "The strategic implication for a claims operation watching this from the outside is narrower than the conference-panel framing suggests. The cases that get filed are the cases where investigators have already mapped the clinic-runner-firm network. The cases that do not get filed are the ones where the carrier sees a suspicious volume from a single firm but has not done the network work. The scoreboard rewards the network work, not the headline.",
    },
    {
      type: "pullquote",
      text: "The scoreboard rewards the network work, not the headline.",
    },
    {
      type: "paragraph",
      text: "The next Capowski-tracked filing worth watching is the one that breaks out of EDNY and survives a 12(b)(6) motion in a venue that has not seen the theory before. Until then, the scoreboard reads as a doctrine still mostly concentrated in the place it was first proved.",
    },
  ],
};

export const THIRD_PARTY_FUNDING_ARTICLE: NewsletterArticle = {
  slug: "third-party-funding-disclosure-wave-2026",
  section: "Litigation Strategy",
  tag: "Deep Dive",
  title: "The Disclosure Wave: Who Is Really Paying for the Lawsuit Across the Table",
  subtitle:
    "On February 11, Senators Grassley, Tillis, Kennedy, and Cornyn re-introduced the Litigation Funding Transparency Act of 2026. It is the fourth try. It is also the first time the introduction has coincided with record commitment volumes from Burford, Longford, and Parabellum. For a defendant, the absence of funder visibility is a hole in the loss-reserving model.",
  readTime: "5 min read",
  author: "Wesley Todd",
  date: "May 22, 2026",
  content: [
    {
      type: "paragraph",
      text: "On February 11, 2026, Senators Chuck Grassley, Thom Tillis, John Kennedy, and John Cornyn walked the [Litigation Funding Transparency Act of 2026](https://instituteforlegalreform.com/news/sens-grassley-tillis-kennedy-cornyn-introduce-litigation-funding-transparency-act-of-2026/) onto the Senate floor and asked the chamber a question that defense counsel have been asking in chambers for years. Who is the second name on the other side of the caption. Not the plaintiff. Not the firm. The capital.",
    },
    {
      type: "paragraph",
      text: "The bill would require disclosure of any third-party funder financing a civil action in federal court or a class action, including the funder's identity and the funding agreement itself. It is the fourth time the same coalition has introduced a version of this bill. It is also the first time the introduction has landed inside a calendar quarter where Burford Capital, Longford Capital, and Parabellum Capital have each separately signaled record commitment volumes in their most recent investor communications.",
    },
    { type: "heading", text: "The Stack of Capital Behind the Caption" },
    {
      type: "paragraph",
      text: "A casualty defense lawyer in Tampa knows the rhythm. A complaint lands. A reservation-of-rights goes out. A mediator gets booked. Somewhere in the spread between the demand and the policy limits sits a number nobody on the defense table has seen, because nobody on the defense table is allowed to see it. That number is the funder's expected return, and it shapes everything the plaintiff will and will not accept.",
    },
    {
      type: "paragraph",
      text: "[Burford Capital's most recent investor disclosures](https://www.burfordcapital.com/newsroom/) describe a portfolio measured in the billions of committed capital across hundreds of matters. Longford and Parabellum operate at smaller but still institutional scale. None of these funders sit at the mediation. None appear on a Rule 7.1 disclosure. None are deposed. Yet each carries an economic interest that can exceed the named plaintiff's, and a contractual right to influence settlement timing that varies by agreement.",
    },
    {
      type: "paragraph",
      text: "For a defendant, the absence of funder visibility is not a procedural oddity. It is a hole in the loss-reserving model. An insurer setting reserves on a commercial liability claim is pricing a settlement distribution against an opposing party whose floor it cannot see. The floor is set by the funder's hurdle rate, not the plaintiff's tolerance for trial.",
    },
    { type: "heading", text: "Why the State Patchwork Cannot Hold" },
    {
      type: "paragraph",
      text: "The federal bill exists because the state map is uneven. [Wisconsin in 2018 became the first state to require automatic disclosure](https://docs.legis.wisconsin.gov/2017/related/acts/235) of third-party funding agreements in state court litigation. West Virginia and Indiana followed with consumer-protection statutes aimed at funder conduct rather than disclosure. Montana enacted a 2023 statute requiring written disclosure in any civil action. New Jersey's federal district imposed a [standing order in District Court requiring disclosure](https://www.njd.uscourts.gov/sites/njd/files/CivilLitigationFunding.pdf) of any non-party funder. Several other federal districts followed with case-by-case orders rather than standing rules.",
    },
    {
      type: "paragraph",
      text: "The result is a system where the same commercial dispute, filed in two different forums, produces two different visibility profiles. A defendant litigating in Wisconsin sees the agreement. The same defendant litigating the same dispute in a non-disclosure jurisdiction sees nothing.",
    },
    {
      type: "paragraph",
      text: "The [US Chamber Institute for Legal Reform argued in a March 23, 2026 publication](https://instituteforlegalreform.com/) that the patchwork is the problem. ILR's position is that federal Rule 26 should be amended to require automatic disclosure of any non-party funding agreement in federal civil litigation, mirroring the existing disclosure obligation for insurance agreements. The proposal treats funders and insurers as economically equivalent participants in the dispute and treats their non-disclosure as a courtroom asymmetry that the Federal Rules already address on the insurance side.",
    },
    {
      type: "paragraph",
      text: "The Advisory Committee on Civil Rules has considered TPLF disclosure since 2014. It has declined to act. The bill is in part an effort to route around that institutional reticence.",
    },
    { type: "heading", text: "What This Costs in Reserves and Premium" },
    {
      type: "paragraph",
      text: "The economic consequence runs through claims departments before it reaches courtrooms. Without funder visibility, claims handlers cannot reliably distinguish a plaintiff under economic pressure to accept a discounted settlement from a plaintiff backed by a funder whose return profile requires holding out for verdict. The two postures produce different reserve numbers and different reinsurance treaty experience. They also produce different signal in the actuarial back-end where social-inflation factors are calibrated.",
    },
    {
      type: "paragraph",
      text: "The Swiss Re sigma series and other reinsurance research have repeatedly flagged third-party funding as an accelerant of nuclear-verdict frequency in commercial auto and product liability. Whether that flag is causal or correlational is contested. What is not contested is that funders price for outsized awards and that their portfolio economics depend on the tail of the verdict distribution holding up.",
    },
    {
      type: "pullquote",
      text: "An insurer setting reserves on a commercial liability claim is pricing a settlement distribution against an opposing party whose floor it cannot see.",
    },
    {
      type: "paragraph",
      text: "For a primary insurer, that means reserve assumptions calibrated against a verdict distribution shaped in part by a counterparty the insurer cannot identify. For a commercial policyholder facing a funded claim, it means a settlement window narrower than the underlying merits suggest.",
    },
    { type: "heading", text: "What to Watch Between Now and Year-End" },
    {
      type: "paragraph",
      text: "Three signals are worth tracking. The first is whether the Senate Judiciary Committee schedules a markup of the [Litigation Funding Transparency Act](https://instituteforlegalreform.com/news/sens-grassley-tillis-kennedy-cornyn-introduce-litigation-funding-transparency-act-of-2026/) before the August recess. The bill has died in committee three times. The fourth introduction is the first to coincide with active state-level activity in Florida and Texas.",
    },
    {
      type: "paragraph",
      text: "The second is whether the Advisory Committee on Civil Rules opens a new TPLF docket at its June 2026 meeting. A federal rule amendment moves the needle further than a statute, because it binds every federal district without further legislative action.",
    },
    {
      type: "paragraph",
      text: "The third is the next earnings cycle from Burford. Funder disclosures of capital deployment by U.S. court are the closest read available on where the next wave of funded litigation will land.",
    },
    {
      type: "paragraph",
      text: "The question on the caption is not new. The question is whether the caption will say so.",
    },
  ],
};

export const MORGAN_MORGAN_ARTICLE: NewsletterArticle = {
  slug: "morgan-morgan-mx2-harvard-pro-hac-denied",
  section: "Litigation Strategy",
  tag: "Deep Dive",
  title: "Morgan & Morgan's Own AI Just Got One of Its Partners Bounced From the Harvard Morgue Case",
  subtitle:
    "Justice Kenneth Salinger denied a Morgan & Morgan partner's pro hac vice motion in the Harvard Medical School morgue mass tort because eight cases the firm's own AI platform invented in a Wyoming hoverboard brief now travel with him. The sanction is portable. The morgue case proceeds without lead counsel.",
  readTime: "4 min read",
  author: "Wesley Todd",
  date: "May 23, 2026",
  content: [
    {
      type: "paragraph",
      text: "Boston, May 19. Justice Kenneth Salinger of Suffolk County Superior Court ruled that a Morgan & Morgan partner could not appear in the [Harvard Medical School morgue case](https://www.abajournal.com/news/article/lawyer-cant-represent-plaintiffs-in-morgue-scandal-because-of-past-ai-errors-judge-says), because eight cases the firm's AI platform invented in a Wyoming hoverboard brief now traveled with him. Salinger wrote that the partner \"has made no showing that he has learned from his mistakes.\"",
    },
    {
      type: "paragraph",
      text: "The partner is a senior lawyer at Morgan & Morgan, ranked 42nd by attorney headcount in the 2025 NLJ 500. He is also among the most recognizable plaintiffs' lawyers in the country. He had moved to appear pro hac vice in Wilder v. President & Fellows of Harvard College. Wilder is the consolidated mass tort over the alleged theft and sale of body parts from the Harvard Medical School morgue. It is one of the highest-profile plaintiffs' dockets in Massachusetts this year. Salinger said no.",
    },
    {
      type: "paragraph",
      text: "The order is two pages. The reasoning is older than the order. In February 2025, U.S. District Judge Kelly H. Rankin of the District of Wyoming sanctioned the partner, a Morgan & Morgan associate, and co-counsel Taly Goody of the Goody Law Group in [Wadsworth v. Walmart](https://news.bloomberglaw.com/litigation/morgan-morgan-lawyers-fined-for-hallucinated-ai-citations), a defective-hoverboard products case. The associate had filed a brief citing nine federal cases, eight of which Rankin found did not exist. The fabricated citations came back as Westlaw-format strings from MX2.law, Morgan & Morgan's internally branded artificial-intelligence platform. Rankin wrote one line that has followed Morgan & Morgan filings since. \"The problem with these cases is that none exist, except United States v. Caraway.\"",
    },
    {
      type: "paragraph",
      text: "Rankin's sanctions came in dollars and in status. The associate drew $3,000 and lost his pro hac vice admission in the Wyoming court. The partner drew $1,000. Goody drew $1,000. The total was $5,000. The dollars were small. The pro hac vice revocation was not. The fabricated citations included Wyoming v. U.S. Department of Energy, 2006 WL 3801910 (D. Wyo. 2006), Holland v. Keller, 2018 WL 2446162 (D. Wyo. 2018), Meyer v. City of Cheyenne, 2017 WL 3461055 (D. Wyo. 2017), and Woods v. BNSF Railway Co., 2016 WL 165971 (D. Wyo. 2016). None of those cases exist. MX2.law had written them and Morgan & Morgan had filed them.",
    },
    {
      type: "paragraph",
      text: "Sixteen months later, Salinger read that Wyoming order before he ruled on the Boston motion. The partner had disclosed the sanction in his Massachusetts papers. Disclosure is required. Disclosure is not enough. Salinger wanted to see remedial measures. He wanted a record of what the firm had done. He found a sentence from a Morgan & Morgan spokesperson saying the firm had \"instituted additional safeguards within the firm regarding use of AI.\" He found nothing else. He wrote the operative paragraph in one breath. \"Since attorney Morgan's failure to comply with basic ethical requirements in the Wyoming litigation is so recent, and Morgan has made no showing that he has learned from his mistakes in that case, the court is not convinced that Morgan should be granted the privilege of appearing pro hac vice in the Massachusetts Superior Court.\"",
    },
    {
      type: "paragraph",
      text: "That paragraph is now a portable disqualifier. A pro hac vice motion the partner files in another state court arrives on a judge's desk with the Wadsworth sanction attached. The Wyoming order sits on PACER. The Boston denial sits in the [ABA Journal record](https://www.abajournal.com/news/article/lawyer-cant-represent-plaintiffs-in-morgue-scandal-because-of-past-ai-errors-judge-says). Opposing counsel can substantially incorporate both orders into opposition papers.",
    },
    {
      type: "paragraph",
      text: "The Harvard morgue case is the part Wilder counsel cares about. The civil action runs against Harvard Corporation and its medical school. Former morgue manager Cedric Lodge pleaded guilty in May 2025 to federal charges in the Middle District of Pennsylvania and is serving 96 months. The criminal track against Lodge and a network of alleged buyers runs in parallel. The civil plaintiffs are families whose deceased relatives' organs and limbs were allegedly sold for cash. The case is the kind of case Morgan & Morgan was built to lead. The partner had moved to lead Wilder. He is now not in it.",
    },
    {
      type: "paragraph",
      text: "What the order does to the rest of the plaintiffs' bar is the second question. Morgan & Morgan is one of the few law firms whose internally branded artificial-intelligence platform has surfaced by name in a public sanctions order. MX2.law is a firm-built tool. No other major plaintiffs' firm of which we are aware has publicly disclosed a branded proprietary large-language-model platform of comparable scope. Some firms use Lexis+ with Protégé (formerly Lexis+ AI), some use Westlaw Precision, some use Harvey or CoCounsel. Those are vendor products. MX2.law is a Morgan & Morgan product. The name appears in the Wyoming sanction order, in the Bloomberg Law coverage, in the Boston denial. A firm that builds and brands its own AI owns the output of that AI in every filing.",
    },
    {
      type: "paragraph",
      text: "That is the part that travels beyond Wilder. The named-adversary plaintiffs' shops the carrier bar tracks most closely, the firms that show up across the [carrier RICO scoreboard](/article/carrier-rico-scoreboard-2026-mid-year) and the venue-concentration data, are likely to track the Boston denial. They will compare it to their own AI workflows. The firms running vendor tools can point to the vendor. The firms running proprietary tools cannot. Morgan & Morgan cannot.",
    },
    {
      type: "paragraph",
      text: "Rankin wrote the original sentence. Salinger applied it across the country. The partner sits out. The morgue case goes on. The platform that wrote the cases remains in use inside the firm.",
    },
    {
      type: "paragraph",
      text: "Wes Todd · Founder · CaseGlide",
    },
  ],
};

export const SAFETY_NATIONAL_ARTICLE: NewsletterArticle = {
  slug: "safety-national-tpa-voidable-transactions-piercing",
  section: "Litigation Strategy",
  tag: "Deep Dive",
  title: "Safety National Skips the Arbitration. It Goes Straight at the TPA Owners for $2.48 Million.",
  subtitle:
    "Safety National sued S.A.F.E., LLC's two principals personally in N.D.N.Y. for $2.48 million in 2025 distributions, pleading voidable transactions under New York Debtor and Creditor Law while a separate AAA arbitration claws back unearned fees from the entity. The asset-recovery vehicle is running in parallel with the liability fight.",
  readTime: "4 min read",
  author: "Wesley Todd",
  date: "May 23, 2026",
  content: [
    {
      type: "paragraph",
      text: "On May 7, 2026, [Safety National Casualty Corporation](https://www.safetynational.com/) walked into the U.S. District Court for the Northern District of New York and named two people personally. Gina Emerson. Ed Alberts. The carrier's complaint alleges they \"drained\" their TPA \"without retaining sufficient funds to satisfy SAFE's pre-existing obligations,\" and that the $2.48 million they pulled out in 2025 should come back. [Insurance Business America first reported the filing on May 11](https://www.insurancebusinessmag.com/us/news/risk-compliance-legal/insurer-sues-tpa-owners-alleging-2-48-million-payout-as-900-claims-sat-open-574624.aspx).",
    },
    {
      type: "paragraph",
      text: "The case is a textbook attorney maneuver. Safety National already has its breach-of-contract fight running on a separate track. That fight sits in [American Arbitration Association](https://www.adr.org/) arbitration in St. Louis. The federal complaint is something different. It is the asset-recovery vehicle running in parallel.",
    },
    {
      type: "heading",
      text: "The Money",
    },
    {
      type: "paragraph",
      text: "Safety National paid S.A.F.E., LLC roughly $9 million in claims-handling fees between 2013 and 2023. In 2025 the relationship collapsed. S.A.F.E. mailed a termination letter on November 13, 2025. The effective date was January 14, 2026. The carrier alleges S.A.F.E. then walked off more than 900 open workers'-compensation files.",
    },
    {
      type: "paragraph",
      text: "The carrier wants $5 million-plus back in unearned fees. That demand sits in the St. Louis arbitration. The number that drives the federal complaint is smaller and more interesting. Safety National alleges that during 2025, while the unearned-fee clawback was crystallizing, S.A.F.E. distributed $2,481,298 to its two principals. $1,240,649 to Emerson. $1,240,649 to Alberts. Identical checks. Same year.",
    },
    {
      type: "heading",
      text: "The Maneuver",
    },
    {
      type: "paragraph",
      text: "The four counts in the federal complaint plead voidable transactions under New York Debtor and Creditor Law sections 273(a)(1), 273(a)(2), 274(a), and 274(b). The statutory language tracks the carrier's pleading directly. The complaint alleges S.A.F.E. \"did not receive reasonably equivalent value in exchange for the transfer.\" It alleges insolvency or imminent insolvency at the time of the distributions. It alleges intent to hinder, delay, or defraud creditors.",
    },
    {
      type: "paragraph",
      text: "A breach-of-contract arbitration award against S.A.F.E. itself would reach the corporate balance sheet of an LLC the carrier suspects is hollow. A voidable-transactions judgment reaches Emerson and Alberts. It claws the money back from the bank accounts of the two people who allegedly took it out. The arbitration is the liability theory. The federal suit is how the carrier collects.",
    },
    {
      type: "paragraph",
      text: "This is the same structural move that drives the carrier-as-plaintiff cases this publication has been tracking all year. See the [carrier RICO scoreboard](https://litigationsentinel.com/article/carrier-rico-scoreboard-2026-mid-year) for the broader pattern. The named adversary changes. The logic does not. A sophisticated plaintiff who suspects the corporate defendant is judgment-proof does not wait for the award. It files in parallel against the people who emptied the company.",
    },
    {
      type: "heading",
      text: "The 900 Claims",
    },
    {
      type: "paragraph",
      text: "The 900-plus open files are the part of this case that matters outside the docket. Workers'-comp claims do not pause when a TPA walks. Injured workers wait for indemnity checks. Medical providers wait for reimbursement. Self-insured employers face statutory exposure if claims-handling lapses cause regulatory action. Excess carriers above Safety National's layer get drawn in when reserves move.",
    },
    {
      type: "paragraph",
      text: "The complaint frames the conduct in one phrase. A TPA that \"walked away from its contracts and made large payouts to its principals.\" That is the plaintiff's frame. The defendants have not yet answered. The filing is twelve days old as of this writing, and no responsive pleading has surfaced in the trade press.",
    },
    {
      type: "heading",
      text: "What This Does to Every Other TPA Contract",
    },
    {
      type: "paragraph",
      text: "The novel piece is the personal-piercing track. Voidable-transactions clawback against the named owners of a closely held insurance-services company is not new law. The Uniform Voidable Transactions Act has been on the books in New York since 2019. What is new is the carrier appetite to run that track in parallel with arbitration the moment a TPA relationship collapses. The cost of filing is small. The pressure is large. A defendant principal facing personal liability negotiates differently than a defendant LLC.",
    },
    {
      type: "paragraph",
      text: "Every carrier with an unbundled-claims program watches this docket now. So does every self-insured F500 employer with a TPA arrangement that runs through a closely held vendor. The contract clause that matters is no longer just the termination notice or the fee-reconciliation formula. It is whether the carrier can pierce to the principals if the entity hollows out before the award lands.",
    },
    {
      type: "heading",
      text: "What Comes Next",
    },
    {
      type: "paragraph",
      text: "S.A.F.E.'s answer is the next document. The defenses are predictable in shape. The 2025 distributions were ordinary compensation, not stripping. The transfers happened before insolvency. Reasonably equivalent value moved both ways. Whether those defenses survive a Rule 12 motion depends on facts the trade press has not yet captured.",
    },
    {
      type: "paragraph",
      text: "The arbitration in St. Louis runs on its own clock. The federal docket in Albany will move faster on the voidable-transactions question than the AAA panel will on the underlying contract. That asymmetry is the point.",
    },
    {
      type: "paragraph",
      text: "Safety National did not file two suits by accident.",
    },
  ],
};

export const ALL_ARTICLES: NewsletterArticle[] = [
  CARRIER_RICO_ARTICLE,
  FEATURED_ARTICLE,
  LITIGATION_MANAGEMENT_DEAD_ARTICLE,
  ...ARTICLES,
  TRIAL_ARTICLE,
  CHUBB_GREENBERG_ARTICLE,
  TAKEDA_885M_ARTICLE,
  WTW_HOWDEN_ARTICLE,
  CARRIER_RICO_SCOREBOARD_ARTICLE,
  THIRD_PARTY_FUNDING_ARTICLE,
  MORGAN_MORGAN_ARTICLE,
  SAFETY_NATIONAL_ARTICLE,
];

// ─ B7: masthead ISSUE, derived, never hand-frozen ─
// The date a visitor sees is computed from the newest article record, so it
// moves automatically with every Friday content run. The issue number stays a
// constant, but the staleness assertion below fails the build when articles
// outrun the bump record by more than 21 days, so a frozen masthead can never
// ship silently again (the March 6 freeze ran three months undetected).
const ISSUE_NUMBER = 12;
// Update this ISO date whenever ISSUE_NUMBER is bumped.
const ISSUE_NUMBER_BUMPED = "2026-06-11";
const ISSUE_STALENESS_LIMIT_DAYS = 21;

const NEWEST_ARTICLE_TS = ALL_ARTICLES.reduce((max, a) => {
  if (!a.date) return max;
  const t = Date.parse(a.date);
  return Number.isNaN(t) ? max : Math.max(max, t);
}, 0);

if (NEWEST_ARTICLE_TS === 0) {
  throw new Error("ISSUE derivation failed: no parseable article dates in ALL_ARTICLES.");
}

if (
  NEWEST_ARTICLE_TS - Date.parse(ISSUE_NUMBER_BUMPED) >
  ISSUE_STALENESS_LIMIT_DAYS * 86400000
) {
  throw new Error(
    `ISSUE is stale: newest article is dated ${new Date(NEWEST_ARTICLE_TS).toDateString()} ` +
      `but ISSUE_NUMBER ${ISSUE_NUMBER} was last bumped ${ISSUE_NUMBER_BUMPED}. ` +
      `Bump ISSUE_NUMBER and ISSUE_NUMBER_BUMPED in src/data/newsletter-articles.ts.`
  );
}

export const ISSUE = {
  number: ISSUE_NUMBER,
  date: new Date(NEWEST_ARTICLE_TS).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  headline: "The Litigation Intelligence Era Is Here",
};

export function getArticleBySlug(slug: string): NewsletterArticle | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return Array.from(new Set(ALL_ARTICLES.filter((a) => a.slug).map((a) => a.slug!)));
}

// Single source of truth for where a homepage card links.
// An entry with real body content IS a story and ALWAYS links to its own
// article page — a stray `linksTo` must never funnel a story to a CTA page
// (this is what sent every story to /briefing). `linksTo` only applies to
// content-less teaser cards (e.g. the Nuclear Verdicts / Council / Trial CTAs).
export function getArticleHref(a: NewsletterArticle): string | undefined {
  if (a.content && a.content.length > 0 && a.slug) return `/article/${a.slug}`;
  if (a.linksTo) return `/${a.linksTo}`;
  if (a.slug) return `/article/${a.slug}`;
  return undefined;
}

export const NAV_CATEGORIES = [
  "Litigation Strategy",
  "Litigation Tech",
  "Case Watch",
  "How-To Guides",
];
