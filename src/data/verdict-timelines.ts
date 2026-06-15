// E2 Living Case Files — verdict-timeline data, keyed by article slug.
// NEW data surface (named as new), kept separate from the shared Article
// interface to avoid schema surgery. Beats are VERBATIM from the council's
// fact-verified pilot-articles.json (per-beat fact-verifier pass): every
// `detail` traces to published article copy recorded in `source`. The `source`
// field is provenance for the fact trail and is NOT rendered as reader copy.

export interface VerdictBeat {
  date: string;
  headline: string;
  detail: string;
  /** Provenance only — published-copy trace, never rendered to the reader. */
  source: string;
}

export interface VerdictTimeline {
  slug: string;
  /** One-line trial-drama caption for the 16:9 share frame (Source Serif 4). */
  caption: string;
  /** Signature figure rendered as the gold marker in the share frame. */
  stat: string;
  beats: VerdictBeat[];
}

export const VERDICT_TIMELINES: Record<string, VerdictTimeline> = {
  "morgan-morgan-mx2-harvard-pro-hac-denied": {
    slug: "morgan-morgan-mx2-harvard-pro-hac-denied",
    caption: "Eight cited cases. None of them existed.",
    stat: "$5,000 + a pulled bar card",
    beats: [
      {
        date: "February 2025",
        headline: "Judge Rankin Finds Eight Fake Cases in a Wyoming Brief",
        detail:
          "In Wadsworth v. Walmart, a Morgan & Morgan brief cited nine federal cases. Eight came back as inventions of MX2.law, the firm's own AI platform.",
        source:
          "published-copy: The associate had filed a brief citing nine federal cases, eight of which Rankin found did not exist.",
      },
      {
        date: "February 2025",
        headline: "$5,000 in Sanctions, and a Bar Card Pulled in Wyoming",
        detail:
          "Rankin fined the associate $3,000, the partner $1,000, and co-counsel Taly Goody $1,000, and revoked the associate's pro hac vice admission in Wyoming.",
        source:
          "published-copy: The associate drew $3,000 and lost his pro hac vice admission in the Wyoming court.",
      },
      {
        date: "May 2025",
        headline: "Cedric Lodge Pleads Guilty in the Harvard Morgue Case",
        detail:
          "The former morgue manager pleaded guilty to federal charges in the Middle District of Pennsylvania and is serving 96 months. The civil mass tort runs parallel.",
        source:
          "published-copy: Former morgue manager Cedric Lodge pleaded guilty in May 2025 to federal charges in the Middle District of Pennsylvania and is serving 96 months.",
      },
      {
        date: "May 19, 2026",
        headline: "Justice Salinger Says No in Boston",
        detail:
          'Salinger denied the partner\'s pro hac vice motion in Wilder v. Harvard, writing he "has made no showing that he has learned from his mistakes."',
        source:
          "published-copy: Justice Kenneth Salinger of Suffolk County Superior Court ruled that a Morgan & Morgan partner could not appear",
      },
      {
        date: "May 2026",
        headline: "The Wyoming Sanction Now Travels With Every Motion",
        detail:
          "Any pro hac vice motion the partner files arrives with the Wadsworth order attached. The morgue case proceeds without him. MX2.law remains in use.",
        source: "published-copy: That paragraph is now a portable disqualifier.",
      },
    ],
  },
  "musk-verdict-savitt-calendar-gambit": {
    slug: "musk-verdict-savitt-calendar-gambit",
    caption: "A $150 billion claim, decided in one hour and fifty-three minutes.",
    stat: "1:53 to verdict",
    beats: [
      {
        date: "April 27, 2026",
        headline: "Savitt Opens With Two Clauses in Oakland",
        detail:
          "William Savitt of Wachtell told the nine-member advisory jury Musk waited too long to sue. Steven Molo opened for Musk in three words: stole a charity.",
        source: "published-copy: William Savitt opened the defense on April 27 with two clauses.",
      },
      {
        date: "April 28, 2026",
        headline: '"It Is a Lie to Say They Are Simple": Musk on the Stand',
        detail:
          "Across three trial days of cross by Savitt, Musk raised his voice, accused counsel of trick questions, and could not recall a years-old term sheet.",
        source:
          "published-copy: April 28 through April 30, Musk took the stand under direct from Toberoff and cross from Savitt.",
      },
      {
        date: "May 7, 2026",
        headline: "Shivon Zilis Surfaces the Tesla Board Seat Offer",
        detail:
          "Zilis testified Musk offered Altman a seat on the Tesla board in 2018 amid a contemplated Tesla-OpenAI merger. Musk's own circle put it into evidence.",
        source:
          "published-copy: Zilis testified that in 2018 Musk had offered Altman a seat on the Tesla board as part of a contemplated Tesla-OpenAI merger.",
      },
      {
        date: "May 11, 2026",
        headline: "Nadella Fears Becoming the Next IBM",
        detail:
          "Microsoft's CEO surfaced an internal email worrying Microsoft could become the next IBM while OpenAI became the next Microsoft.",
        source:
          "published-copy: he had worried Microsoft could become the next IBM while OpenAI became the next Microsoft",
      },
      {
        date: "May 12, 2026",
        headline: 'Bret Taylor Answers "That\'s Correct" on Altman\'s Candor',
        detail:
          "On cross, OpenAI's board chair conceded he had determined Altman had not been transparent with the prior board. No credibility question reached the form.",
        source:
          "published-copy: Taylor conceding on cross that he had determined Altman had been less than transparent is the most damaging exhibit the plaintiff put up",
      },
      {
        date: "May 12, 2026",
        headline: '"I Felt Like He Had Abandoned Us": Altman Takes the Stand',
        detail:
          "Roughly four hours across direct, cross, and re-direct. Molo asked, do you always tell the truth. Altman: I believe I'm a truthful person.",
        source:
          "published-copy: I felt like he had abandoned us, not come through on his promises, put the company in a very difficult place",
      },
      {
        date: "May 18, 2026",
        headline: "One Hour Fifty-Three Minutes, and the Case Is Over",
        detail:
          "The advisory jury opened at 8:30 a.m. PT. At 10:23 a.m. the foreperson sent a note: we have a verdict. Judge Gonzalez Rogers adopted it from the bench.",
        source:
          'published-copy: At 10:23 a.m. PT the foreperson sent the judge a note. "We have a verdict."',
      },
    ],
  },
  "carrier-rico-playbook-scoreboard": {
    slug: "carrier-rico-playbook-scoreboard",
    caption: "The carriers stopped paying. They started suing.",
    stat: "$7.9M sought from one family",
    beats: [
      {
        date: "January 14, 2026",
        headline: "The Fifth Circuit Hands Carriers Bhagat",
        detail:
          "Allstate Indemnity v. Bhagat held a carrier pleading mail-fraud RICO need not plead first-party reliance to satisfy proximate cause. The load-bearing precedent.",
        source:
          "published-copy: the Fifth Circuit's January 14 decision in Allstate Indemnity Co. v. Bhagat, No. 25-20020 (5th Cir. 2026)",
      },
      {
        date: "January 2026",
        headline: "Merchants Insurance Files in Western New York",
        detail:
          "Merchants Insurance Group brought a construction-fraud RICO suit in the W.D.N.Y. It is alive but quiet. The next case on the board to watch.",
        source:
          "published-copy: Merchants Insurance Group's W.D.N.Y. construction-fraud RICO suit, filed in January 2026, is alive but quiet.",
      },
      {
        date: "February 19, 2026",
        headline: "Tradesman's Reinsurer Architecture Dies in Manhattan",
        detail:
          "The S.D.N.Y. dismissed the latest Tradesman and Roosevelt Road Re suit with prejudice. The MGA and reinsurer lacked a direct relationship to the injury.",
        source:
          "published-copy: The Southern District of New York dismissed the latest of those suits with prejudice on February 19, 2026.",
      },
      {
        date: "April 10, 2026",
        headline: "Allstate Sues the Roopani Family for $7.9 Million",
        detail:
          "Case 4:26-cv-02842 in the Southern District of Texas seeks treble damages and a declaration cutting the network off from any future Allstate recovery.",
        source:
          "published-copy: Filed April 10, 2026 under case number 4:26-cv-02842, it seeks $7.9 million in actual damages",
      },
      {
        date: "April 2026",
        headline: "Uber and Liberty Mutual Open the EDNY Front",
        detail:
          "The Eastern District of New York, after the April 2026 Uber and Liberty Mutual filing, is showing carrier-friendly signals on the corporate side.",
        source:
          "published-copy: The Eastern District of New York, after the April 2026 Uber and Liberty Mutual filing, is showing similar signals on the corporate side.",
      },
      {
        date: "May 15, 2026",
        headline: "Uber and FedEx Keep Simon & Simon on the Hook",
        detail:
          "As of the mid-May scoreboard, the corporate-defendant RICO theory against Marc Simon and Simon & Simon had survived a motion to dismiss. The doctrine travels.",
        source:
          "published-copy: Uber and FedEx v. Marc Simon and Simon & Simon, a corporate-defendant offensive RICO theory that survived a motion to dismiss",
      },
    ],
  },
};

export function getVerdictTimeline(slug: string): VerdictTimeline | undefined {
  return VERDICT_TIMELINES[slug];
}
