export interface ProvingCase {
  id: number;
  name: string;
  type: string;
  stage: string;
  days: number;
  reserve: string;
  attorney: string;
  difficulty: "Low" | "Medium" | "High" | "Critical";
  currentUpdate: string;
  before: { strategy: string; data: string; insight: string };
  after: { strategy: string; data: string; insight: string };
}

export const PROVING_CASES: ProvingCase[] = [
  {
    id: 1, name: "Martinez v. Acme Corp", type: "Auto Liability", stage: "Discovery", days: 412, reserve: "$67K", attorney: "Morrison Drake LLP", difficulty: "High", currentUpdate: "discovery",
    before: { strategy: "Standard defense, waiting for plaintiff depo", data: "Basic claim info only", insight: "None — relying on quarterly counsel report" },
    after: { strategy: "Aggressive MSJ based on Precedent comps showing 72% dismissal rate for similar venue/liability profile", data: "Full discovery update, liability reassessed from 60% to 35%", insight: "Precedent shows Morrison Drake averages 14mo on similar cases — this is at 14mo with no resolution path" },
  },
  {
    id: 2, name: "Thompson Class Action", type: "Product Liability", stage: "Mediation", days: 289, reserve: "$142K", attorney: "Sterling Whitmore", difficulty: "Critical", currentUpdate: "mediation",
    before: { strategy: "Mediation scheduled, hoping for settlement", data: "Demand letter and initial reserve", insight: "No comparable outcomes data" },
    after: { strategy: "Settlement target of $95K based on 23 Precedent comps. Sterling Whitmore's median is 18% above comparable — recommend co-counsel", data: "Full mediation prep with demand analysis, 23 comparable outcomes", insight: "This plaintiff firm settles 81% of cases post-mediation within 60 days at 65% of demand" },
  },
  {
    id: 3, name: "Lee v. National Insurance", type: "Slip & Fall", stage: "Plaintiff Depo", days: 198, reserve: "$38K", attorney: "Baker & Associates", difficulty: "Medium", currentUpdate: "plaintiff_depo",
    before: { strategy: "Await deposition, reassess", data: "Claim report, photos", insight: "No venue-specific data" },
    after: { strategy: "Post-depo: plaintiff credibility weak — pursue early settlement at $18K (Precedent median for this profile)", data: "Depo summary: plaintiff inconsistent on mechanism, prior injuries surfaced", insight: "Baker resolves these 40% faster than panel avg. This venue settles 78% pre-trial" },
  },
  {
    id: 4, name: "Garcia v. SafeGuard", type: "Employment", stage: "MSJ", days: 356, reserve: "$215K", attorney: "Morrison Drake LLP", difficulty: "Critical", currentUpdate: "msj",
    before: { strategy: "Filed MSJ, awaiting ruling", data: "Complaint and answer only", insight: "No outcome prediction capability" },
    after: { strategy: "MSJ denied — pivot to mediation. Precedent shows 62% settlement rate post-MSJ denial at 45% of demand", data: "Full case update with judge's ruling analysis, comparable outcomes", insight: "This judge denies MSJ 71% of the time but settlements post-denial average 40% below demand" },
  },
  {
    id: 5, name: "Wilson v. Metro Transit", type: "Auto Liability", stage: "Expert Reports", days: 267, reserve: "$89K", attorney: "Baker & Associates", difficulty: "High", currentUpdate: "experts",
    before: { strategy: "Retained biomechanical expert", data: "Police report, medical records", insight: "Unknown expert effectiveness" },
    after: { strategy: "Expert opinion supports $45K value. Precedent: similar cases with strong expert testimony settle 33% below reserve", data: "Expert report quantified, damages capped at $52K with rebuttal strategy", insight: "Baker's expert selection in this category has produced favorable outcomes 84% of the time" },
  },
  {
    id: 6, name: "Adams v. Cornerstone LLC", type: "Premises Liability", stage: "Discovery", days: 145, reserve: "$52K", attorney: "Sterling Whitmore", difficulty: "Medium", currentUpdate: "discovery",
    before: { strategy: "Early case — monitoring", data: "Incident report only", insight: "No benchmark for timeline" },
    after: { strategy: "Discovery reveals maintenance log gaps — liability exposure higher than expected. Recommend early mediation", data: "Discovery update flagged adverse docs, liability revised upward to 75%", insight: "Precedent: early mediation in similar premises cases saves avg $12K vs. waiting for depo phase" },
  },
  {
    id: 7, name: "Brown v. National Ins.", type: "Auto Liability", stage: "ICA", days: 45, reserve: "$28K", attorney: "Baker & Associates", difficulty: "Low", currentUpdate: "ica",
    before: { strategy: "Just opened — no strategy yet", data: "Claim intake form", insight: "No immediate action framework" },
    after: { strategy: "Early settlement track — Precedent shows 89% of similar low-complexity claims settle within 6 months at avg $19K", data: "Full ICA with liability at 45%, damages at $22K, venue favorable", insight: "Baker resolves these in avg 4.2 months. Set 6-month settlement target of $17K" },
  },
  {
    id: 8, name: "Chen v. Pacific Holdings", type: "Employment", stage: "Defendant Depo", days: 312, reserve: "$175K", attorney: "Morrison Drake LLP", difficulty: "Critical", currentUpdate: "defendant_depo",
    before: { strategy: "Defend deposition, reassess exposure", data: "EEOC charge, position statement", insight: "No comparable jury verdict data" },
    after: { strategy: "Defendant depo went well — liability exposure reduced. Recommend demand at $110K before trial costs escalate", data: "Depo assessment: strong defense, plaintiff case weakened on key elements", insight: "Nuclear verdict risk in this venue: 8% of employment cases exceed $500K. Settling now avoids tail risk" },
  },
  {
    id: 9, name: "Rivera v. Summit Corp", type: "Product Liability", stage: "Mediation", days: 523, reserve: "$310K", attorney: "Sterling Whitmore", difficulty: "Critical", currentUpdate: "mediation",
    before: { strategy: "Second mediation attempt", data: "Prior mediation brief", insight: "No analysis of why first mediation failed" },
    after: { strategy: "First mediation gap was $180K. Plaintiff has new trial counsel — urgency increased. Settle at $195K (Precedent median for post-2nd-mediation)", data: "Full negotiation history, demand trajectory analysis, plaintiff firm switch analysis", insight: "Sterling Whitmore's post-mediation stall rate is 3x panel avg. Recommend settlement authority increase + deadline" },
  },
  {
    id: 10, name: "Park v. Allied Services", type: "Slip & Fall", stage: "Trial", days: 678, reserve: "$95K", attorney: "Baker & Associates", difficulty: "High", currentUpdate: "trial",
    before: { strategy: "Trial prep underway", data: "Trial brief", insight: "No venue trial outcome data" },
    after: { strategy: "Trial risk assessment: 65% favorable verdict probability based on 18 Precedent comps in this venue. Defense verdict value: $0. Adverse verdict range: $80-140K", data: "Full trial prep with judge profile, jury demographics, comparable verdicts", insight: "Baker's trial win rate in this venue: 71%. This judge's median defense verdict rate: 58%. Recommend trial." },
  },
];
