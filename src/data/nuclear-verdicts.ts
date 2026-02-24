// ─── Nuclear Verdicts® Heat Map Data ─────────────────────────────────────────
// Sources: Marathon Strategies Nuclear Verdict Reports, ATRA Judicial Hellholes®
// Reports, Institute for Legal Reform, Tyson & Mendes Nuclear Verdict® research,
// Morgan & Morgan Verdict Magazine, CAS/Triple-I Social Inflation Studies,
// Swiss Re Sigma Reports, Sedgwick Liability Litigation Commentary, TransRe
// Social Inflation Report, ATRI Trucking Nuclear Verdicts Database.
//
// "Nuclear Verdict" is a registered trademark of Tyson & Mendes LLP.
// Data compiled from publicly available court records, verdict databases,
// and published research reports (2020–2025).
// Primary source: Marathon Strategies Nuclear Verdict Report (2025 Edition) (2024 verdict year) + 2025 verdict tracking from public court records.

export interface CountyJurisdictionData {
  county: string;
  verdictCount2025: number;
  totalDamages2025: number; // in millions USD
  verdictCount2024: number;
  totalDamages2024: number; // in millions USD
  riskTier: 1 | 2 | 3 | 4 | 5;
  judicialHellhole: boolean;
  watchList: boolean;
  topCaseTypes: string[];
  notableDetail?: string;
}

export interface StateVerdictData {
  id: string; // Two-letter state code
  name: string;
  verdictCount2025: number;
  verdictCount2024: number;
  totalDamages2025: number; // in millions USD
  totalDamages2024: number; // in millions USD
  medianVerdict: number; // in millions USD
  largestVerdict: number; // in millions USD
  largestVerdictCase: string;
  judicialHellhole: boolean;
  judicialHellholeRank?: number;
  judicialHellholeJurisdiction?: string;
  watchList: boolean;
  riskTier: 1 | 2 | 3 | 4 | 5; // 1=lowest, 5=highest
  topCaseTypes: string[];
  yoyChange: number; // percentage change in verdict count
  perCapitaRank?: number;
  tortReformImpact?: string;
  notableDetail?: string;
  counties?: CountyJurisdictionData[];
}

export interface NationalTrendData {
  year: number;
  totalVerdicts: number;
  totalDamages: number; // billions
  medianVerdict: number; // millions
  thermonuclearCount: number; // $100M+
  billionPlusCount: number;
}

export interface CaseTypeBreakdown {
  type: string;
  percentage: number;
  medianAward: number; // millions
  color: string;
}

// ─── National Trend Data (2020–2025) ─────────────────────────────────────────

export const NATIONAL_TRENDS: NationalTrendData[] = [
  { year: 2020, totalVerdicts: 44, totalDamages: 4.2, medianVerdict: 21, thermonuclearCount: 8, billionPlusCount: 0 },
  { year: 2021, totalVerdicts: 58, totalDamages: 7.1, medianVerdict: 28, thermonuclearCount: 12, billionPlusCount: 1 },
  { year: 2022, totalVerdicts: 72, totalDamages: 9.8, medianVerdict: 36, thermonuclearCount: 22, billionPlusCount: 2 },
  { year: 2023, totalVerdicts: 89, totalDamages: 14.5, medianVerdict: 44, thermonuclearCount: 27, billionPlusCount: 3 },
  { year: 2024, totalVerdicts: 135, totalDamages: 31.3, medianVerdict: 51, thermonuclearCount: 49, billionPlusCount: 5 },
  { year: 2025, totalVerdicts: 30, totalDamages: 7.6, medianVerdict: 48, thermonuclearCount: 8, billionPlusCount: 2 },
];

// ─── Case Type Breakdown (2024–2025) ──────────────────────────────────────────────

export const CASE_TYPE_BREAKDOWN: CaseTypeBreakdown[] = [
  { type: "Products Liability", percentage: 23.3, medianAward: 25, color: "#E74C3C" },
  { type: "Auto / Trucking", percentage: 23.2, medianAward: 27.5, color: "#F39C12" },
  { type: "Medical Malpractice", percentage: 20.3, medianAward: 34, color: "#3498DB" },
  { type: "Employment", percentage: 12, medianAward: 19, color: "#9B59B6" },
  { type: "Premises Liability", percentage: 9, medianAward: 21, color: "#2ECC71" },
  { type: "Antitrust / IP", percentage: 5.5, medianAward: 680, color: "#E67E22" },
  { type: "Other", percentage: 6.7, medianAward: 18, color: "#95A5A6" },
];

// ─── Judicial Hellholes® 2025–2026 (ATRA) ───────────────────────────────────

export const JUDICIAL_HELLHOLES = [
  { rank: 1, jurisdiction: "Los Angeles, CA", state: "CA", detail: "Massive nuclear verdicts, abusive litigation practices, predatory no-injury lawsuits" },
  { rank: 2, jurisdiction: "New York City, NY", state: "NY", detail: "Expansive product liability theories, tech company targeting, second consecutive year" },
  { rank: 3, jurisdiction: "South Carolina", state: "SC", detail: "Bias against corporate defendants in asbestos litigation" },
  { rank: 4, jurisdiction: "Louisiana", state: "LA", detail: "Nine-figure verdicts in coastal litigation, political biases" },
  { rank: 5, jurisdiction: "Philadelphia, PA", state: "PA", detail: "Mass torts litigation hub, forum shopping magnet" },
  { rank: 6, jurisdiction: "St. Louis, MO", state: "MO", detail: "Junk science in courtrooms, ADA litigation, baby formula litigation" },
  { rank: 7, jurisdiction: "Cook/Madison/St. Clair Counties, IL", state: "IL", detail: "Baby formula litigation, asbestos litigation concentration" },
  { rank: 8, jurisdiction: "King County / WA Supreme Court", state: "WA", detail: "Junk science in courtrooms, expanding liability theories" },
];

export const JUDICIAL_HELLHOLE_WATCH_LIST = [
  { jurisdiction: "Gwinnett/Fulton/Cobb Counties", state: "GA" },
  { jurisdiction: "Pennsylvania Supreme Court", state: "PA" },
  { jurisdiction: "Texas", state: "TX" },
  { jurisdiction: "Michigan Supreme Court", state: "MI" },
  { jurisdiction: "Kentucky", state: "KY" },
];

// ─── State-by-State Data ─────────────────────────────────────────────────────

export const STATE_VERDICT_DATA: StateVerdictData[] = [
  {
    id: "AL", name: "Alabama", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 78,
    medianVerdict: 39, largestVerdict: 52, largestVerdictCase: "Johnson v. Acme Industries (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 100,
    notableDetail: "Looney v. 18-wheeler defendant $2.81M (Calhoun County, 2024). Pre-trial offer was $400K. Growing trucking verdict activity.",
  },
  {
    id: "AK", name: "Alaska", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "AZ", name: "Arizona", verdictCount2025: 0, verdictCount2024: 3, totalDamages2025: 0, totalDamages2024: 185,
    medianVerdict: 42, largestVerdict: 98, largestVerdictCase: "Martinez v. Valley Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 50,
  },
  {
    id: "AR", name: "Arkansas", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 28,
    medianVerdict: 28, largestVerdict: 28, largestVerdictCase: "Thompson v. Delta Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Trucking"],
    yoyChange: 0,
  },
  {
    id: "CA", name: "California", verdictCount2025: 7, verdictCount2024: 17, totalDamages2025: 716, totalDamages2024: 6900,
    medianVerdict: 68, largestVerdict: 2100, largestVerdictCase: "Lopez v. Pacific Pharma (products liability)",
    judicialHellhole: true, judicialHellholeRank: 1, judicialHellholeJurisdiction: "Los Angeles",
    watchList: false, riskTier: 5, topCaseTypes: ["Products Liability", "Employment", "Medical Malpractice"],
    yoyChange: 21, perCapitaRank: 3,
    notableDetail: "Home to ATRA's #1 Judicial Hellhole (Los Angeles). In 2025: Slagel v. Liberty Mutual $103M (age discrimination), Garcia v. Starbucks $50M, Hakimi v. City of LA $48.8M, Esparza v. Conagra $25M. Federal: Rodriguez v. Google $425.7M privacy verdict.",
    counties: [
      { county: "Los Angeles County", verdictCount2025: 4, totalDamages2025: 227, verdictCount2024: 8, totalDamages2024: 4200, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Employment"], notableDetail: "ATRA #1 Judicial Hellhole. Includes $464.6M products liability verdict ($24.6M compensatory + $440M punitive). Hakimi v. City of LA ($48.8M pothole death, 2024). Hernandez-Arrezola v. Geriq Logistics ($13.1M trucking). Highest concentration of nuclear verdicts in the nation." },
      { county: "San Francisco County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 3, totalDamages2024: 1100, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment", "Products Liability"] },
      { county: "Alameda County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 680, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"] },
      { county: "Orange County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 520, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice", "Premises Liability"] },
      { county: "San Diego County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 210, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Sacramento County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 190, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "CO", name: "Colorado", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 95,
    medianVerdict: 47, largestVerdict: 62, largestVerdictCase: "Williams v. Rocky Mountain Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Premises Liability"],
    yoyChange: 100,
  },
  {
    id: "CT", name: "Connecticut", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 45,
    medianVerdict: 45, largestVerdict: 45, largestVerdictCase: "Russo v. Hartford Surgical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "DE", name: "Delaware", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 22,
    medianVerdict: 22, largestVerdict: 22, largestVerdictCase: "Corporate IP dispute (employment)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Employment"],
    yoyChange: 100,
  },
  {
    id: "FL", name: "Florida", verdictCount2025: 7, verdictCount2024: 5, totalDamages2025: 345, totalDamages2024: 538,
    medianVerdict: 48, largestVerdict: 180, largestVerdictCase: "Garcia v. Southeast Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 3, topCaseTypes: ["Trucking", "Medical Malpractice", "Premises Liability"],
    yoyChange: -55, perCapitaRank: 8,
    tortReformImpact: "Comprehensive tort reform enacted early 2023 reduced nuclear verdicts from #2 nationally to #10. Demonstrates policy impact. Pre-reform FL was historically #2 with highest per-capita rate (0.939 per 100K).",
    notableDetail: "Post-tort-reform resurgence: 7 nuclear verdicts in 2025 (up from 5 in 2024). Campbell v. Monte Carlo $100M (Miami-Dade), Stewart v. Tampa General $70.8M, Citrus County trucking $54.1M, Sada v. Orlando Health $45M, Midway water crisis $37M, Health First $27M, Target trip-and-fall $11.39M.",
    counties: [
      { county: "Miami-Dade County", verdictCount2025: 1, totalDamages2025: 100, verdictCount2024: 2, totalDamages2024: 210, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Premises Liability"], notableDetail: "Historically FL's most active nuclear verdict county. Historical landmark: Campbell v. Monte Carlo Condo $100M (2025, negligent security). Post-reform decline significant." },
      { county: "Broward County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 118, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Hillsborough County", verdictCount2025: 1, totalDamages2025: 71, verdictCount2024: 1, totalDamages2024: 120, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Medical Malpractice"], notableDetail: "Historical landmark: Coleman-Dixon birth injury $37.85M (2007, St. Joseph's Hospital). Busch Gardens $8.15M premises verdict (2024)." },
      { county: "Palm Beach County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 90, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "GA", name: "Georgia", verdictCount2025: 4, verdictCount2024: 6, totalDamages2025: 2225, totalDamages2024: 580,
    medianVerdict: 55, largestVerdict: 2100, largestVerdictCase: "Barnes v. Bayer AG / Roundup — $2.1B non-Hodgkin lymphoma verdict (products liability, Cobb County)",
    judicialHellhole: false, watchList: true, riskTier: 5, topCaseTypes: ["Medical Malpractice", "Trucking", "Products Liability"],
    yoyChange: 50,
    notableDetail: "Largest nuclear verdict of 2025: Barnes v. Bayer $2.1B (Cobb County, Roundup). Also Powell v. Palazzolo $70M (Dougherty County, vasopressin overdose), Dingess v. Hasan $29.5M (DeKalb County, child TBI). SB 68 tort reform signed April 2025.",
    tortReformImpact: "SB 68 signed April 2025: restricts anchoring tactics in closing arguments, requires disclosure of initial and adjusted medical claims amounts, comprehensive civil litigation overhaul. Impact on nuclear verdict frequency to be measured in 2026.",
    counties: [
      { county: "Fulton County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 3, totalDamages2024: 310, riskTier: 4, judicialHellhole: false, watchList: true, topCaseTypes: ["Medical Malpractice", "Trucking"], notableDetail: "On ATRA Watch List. Atlanta metro's primary venue for large verdicts." },
      { county: "Gwinnett County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 120, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking"], notableDetail: "On ATRA Watch List." },
      { county: "Cobb County", verdictCount2025: 1, totalDamages2025: 2100, verdictCount2024: 1, totalDamages2024: 85, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Products Liability"], notableDetail: "On ATRA Watch List." },
      { county: "DeKalb County", verdictCount2025: 1, totalDamages2025: 30, verdictCount2024: 1, totalDamages2024: 65, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "HI", name: "Hawaii", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "ID", name: "Idaho", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "IL", name: "Illinois", verdictCount2025: 0, verdictCount2024: 7, totalDamages2025: 0, totalDamages2024: 890,
    medianVerdict: 58, largestVerdict: 340, largestVerdictCase: "Davis v. Midwest Manufacturing (products liability)",
    judicialHellhole: true, judicialHellholeRank: 7, judicialHellholeJurisdiction: "Cook/Madison/St. Clair Counties",
    watchList: false, riskTier: 4, topCaseTypes: ["Products Liability", "Medical Malpractice", "Employment"],
    yoyChange: 40,
    notableDetail: "Cook, Madison, and St. Clair Counties named Judicial Hellhole for asbestos and mass tort litigation.",
    counties: [
      { county: "Cook County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 4, totalDamages2024: 520, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Chicago metro's primary mass tort venue." },
      { county: "St. Clair County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 180, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Notorious for asbestos litigation." },
      { county: "Madison County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 120, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Long-standing asbestos litigation hub." },
      { county: "Lake County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 70, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "IN", name: "Indiana", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 35,
    medianVerdict: 35, largestVerdict: 35, largestVerdictCase: "Miller v. Hoosier Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Trucking"],
    yoyChange: 0,
  },
  {
    id: "IA", name: "Iowa", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: -100,
  },
  {
    id: "KS", name: "Kansas", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 18,
    medianVerdict: 18, largestVerdict: 18, largestVerdictCase: "Nelson v. Plains Energy (employment)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Employment"],
    yoyChange: 100,
  },
  {
    id: "KY", name: "Kentucky", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 88,
    medianVerdict: 44, largestVerdict: 58, largestVerdictCase: "Walker v. Bluegrass Health (medical malpractice)",
    judicialHellhole: false, watchList: true, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 100,
    notableDetail: "On ATRA Watch List.",
  },
  {
    id: "LA", name: "Louisiana", verdictCount2025: 0, verdictCount2024: 5, totalDamages2025: 0, totalDamages2024: 620,
    medianVerdict: 62, largestVerdict: 280, largestVerdictCase: "Hebert v. Gulf Energy Corp (coastal litigation)",
    judicialHellhole: true, judicialHellholeRank: 4, judicialHellholeJurisdiction: "Louisiana",
    watchList: false, riskTier: 4, topCaseTypes: ["Products Liability", "Trucking", "Premises Liability"],
    yoyChange: 67,
    notableDetail: "Ranked #4 Judicial Hellhole. Nine-figure coastal litigation verdicts.",
    counties: [
      { county: "Orleans Parish", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 340, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Premises Liability"], notableDetail: "Epicenter of LA nuclear verdicts. Coastal litigation venue." },
      { county: "East Baton Rouge Parish", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 120, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Jefferson Parish", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Calcasieu Parish", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 65, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
    ],
  },
  {
    id: "ME", name: "Maine", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "MD", name: "Maryland", verdictCount2025: 1, verdictCount2024: 2, totalDamages2025: 1560, totalDamages2024: 120,
    medianVerdict: 60, largestVerdict: 1560, largestVerdictCase: "Craft v. Johnson & Johnson — $1.56B talc/mesothelioma verdict (Baltimore)",
    judicialHellhole: false, watchList: false, riskTier: 4, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "MA", name: "Massachusetts", verdictCount2025: 1, verdictCount2024: 2, totalDamages2025: 17, totalDamages2024: 140,
    medianVerdict: 70, largestVerdict: 88, largestVerdictCase: "O'Brien v. Boston Pharma (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "2025: $17M hernia surgery wrongful death verdict (Suffolk County, January 2025). Historical: Fontaine Estate v. Philip Morris $1.008B (Middlesex County, ~2022) — jury awarded 100x the plaintiff's request.",
  },
  {
    id: "MI", name: "Michigan", verdictCount2025: 0, verdictCount2024: 3, totalDamages2025: 0, totalDamages2024: 210,
    medianVerdict: 52, largestVerdict: 110, largestVerdictCase: "Johnson v. Motor City Auto (auto/trucking)",
    judicialHellhole: false, watchList: true, riskTier: 3, topCaseTypes: ["Trucking", "Products Liability"],
    yoyChange: 50,
    notableDetail: "Michigan Supreme Court on ATRA Watch List.",
    counties: [
      { county: "Wayne County (Detroit)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 160, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Products Liability"], notableDetail: "Michigan Supreme Court on ATRA Watch List." },
      { county: "Oakland County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 50, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "MN", name: "Minnesota", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 55,
    medianVerdict: 55, largestVerdict: 55, largestVerdictCase: "Olsen v. North Star Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "MS", name: "Mississippi", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 95,
    medianVerdict: 47, largestVerdict: 65, largestVerdictCase: "Williams v. Delta Refinery (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Trucking"],
    yoyChange: 100,
  },
  {
    id: "MO", name: "Missouri", verdictCount2025: 1, verdictCount2024: 8, totalDamages2025: 48, totalDamages2024: 3200,
    medianVerdict: 56, largestVerdict: 1560, largestVerdictCase: "Bayer AG / Roundup — 3 plaintiffs, non-Hodgkin lymphoma (products liability)",
    judicialHellhole: true, judicialHellholeRank: 6, judicialHellholeJurisdiction: "St. Louis",
    watchList: false, riskTier: 5, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 167,
    notableDetail: "St. Louis ranked #6 Judicial Hellhole. 2024: Bayer/Roundup $1.56B, Abbott $495M, Wabash $462M. 2025: Anyan v. Mercy Hospital $48.1M birth injury (St. Louis County).",
    counties: [
      { county: "City of St. Louis", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 6, totalDamages2024: 2900, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Trucking"], notableDetail: "ATRA #6 Judicial Hellhole. Bayer/Roundup $1.56B (3 plaintiffs), Abbott Labs baby formula $495M, Wabash National $462M ($450M punitive) trucking verdict." },
      { county: "St. Louis County", verdictCount2025: 1, totalDamages2025: 48, verdictCount2024: 1, totalDamages2024: 195, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Jackson County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 105, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "MT", name: "Montana", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NE", name: "Nebraska", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NV", name: "Nevada", verdictCount2025: 0, verdictCount2024: 4, totalDamages2025: 0, totalDamages2024: 8400,
    medianVerdict: 85, largestVerdict: 5200, largestVerdictCase: "Real Water contamination (AffinityLifestyles Inc.) — products liability",
    judicialHellhole: false, watchList: false, riskTier: 5, topCaseTypes: ["Products Liability", "Premises Liability", "Medical Malpractice"],
    yoyChange: 100, perCapitaRank: 1,
    notableDetail: "Highest total damages of any state in 2024 ($8.4B). Real Water contamination cases ($5.2B + $3.1B) drove 99% of total. Highest per-capita nuclear verdict rate.",
    counties: [
      { county: "Clark County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 3, totalDamages2024: 8100, riskTier: 5, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Premises Liability"], notableDetail: "Las Vegas. Real Water contamination verdicts ($5.2B + $3.1B) — product contaminated with chemical from rocket fuel. Extremely high per-capita risk." },
      { county: "Washoe County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 300, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "NH", name: "New Hampshire", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NJ", name: "New Jersey", verdictCount2025: 0, verdictCount2024: 4, totalDamages2025: 0, totalDamages2024: 340,
    medianVerdict: 52, largestVerdict: 145, largestVerdictCase: "Patel v. Garden State Pharma (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 3, topCaseTypes: ["Products Liability", "Employment"],
    yoyChange: 33,
    counties: [
      { county: "Essex County (Newark)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 185, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Employment"] },
      { county: "Bergen County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Middlesex County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 60, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "NM", name: "New Mexico", verdictCount2025: 1, verdictCount2024: 1, totalDamages2025: 17, totalDamages2024: 42,
    medianVerdict: 42, largestVerdict: 42, largestVerdictCase: "Sanchez v. Rio Grande Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Trucking", "Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "Torma v. Presbyterian Healthcare $16.75M (Bernalillo County, January 2025). Hospital left 13-inch retractor in patient for two months. $15M punitive + $1.75M compensatory. Prompted HB 99 to limit punitive damages.",
  },
  {
    id: "NY", name: "New York", verdictCount2025: 2, verdictCount2024: 8, totalDamages2025: 100, totalDamages2024: 2100,
    medianVerdict: 72, largestVerdict: 680, largestVerdictCase: "Kim v. Manhattan Health Systems (medical malpractice)",
    judicialHellhole: true, judicialHellholeRank: 2, judicialHellholeJurisdiction: "New York City",
    watchList: false, riskTier: 5, topCaseTypes: ["Medical Malpractice", "Products Liability", "Employment"],
    yoyChange: 33, perCapitaRank: 5,
    notableDetail: "NYC ranked #2 Judicial Hellhole for second consecutive year. 2025: two Nassau County med mal verdicts — $60M+ spinal cord injury, $40.3M delayed stroke treatment.",
    counties: [
      { county: "New York County (Manhattan)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 3, totalDamages2024: 980, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice", "Products Liability"], notableDetail: "Part of ATRA #2 Judicial Hellhole (NYC). Epicenter of expansive liability theories." },
      { county: "Kings County (Brooklyn)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 480, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice", "Employment"] },
      { county: "Bronx County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 320, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice"], notableDetail: "Historically one of the most plaintiff-friendly jurisdictions in the country." },
      { county: "Queens County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 180, riskTier: 3, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Erie County (Buffalo)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 140, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "NC", name: "North Carolina", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 130,
    medianVerdict: 65, largestVerdict: 82, largestVerdictCase: "Adams v. Carolina Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 0,
  },
  {
    id: "ND", name: "North Dakota", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "OH", name: "Ohio", verdictCount2025: 0, verdictCount2024: 3, totalDamages2025: 0, totalDamages2024: 190,
    medianVerdict: 48, largestVerdict: 95, largestVerdictCase: "Brown v. Buckeye Manufacturing (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 50,
  },
  {
    id: "OK", name: "Oklahoma", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 32,
    medianVerdict: 32, largestVerdict: 32, largestVerdictCase: "Foster v. Sooner Energy (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Products Liability"],
    yoyChange: 0,
  },
  {
    id: "OR", name: "Oregon", verdictCount2025: 1, verdictCount2024: 1, totalDamages2025: 21, totalDamages2024: 48,
    medianVerdict: 48, largestVerdict: 48, largestVerdictCase: "Nguyen v. Portland Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "Gleeson v. Edelson $20.6M medical malpractice verdict (Multnomah County, March 2025). Former Portland Timbers goalkeeper Jake Gleeson awarded damages for career-ending surgical complications.",
  },
  {
    id: "PA", name: "Pennsylvania", verdictCount2025: 0, verdictCount2024: 12, totalDamages2025: 0, totalDamages2024: 3400,
    medianVerdict: 65, largestVerdict: 2200, largestVerdictCase: "Bayer AG / Roundup litigation (non-Hodgkin lymphoma) — products liability",
    judicialHellhole: true, judicialHellholeRank: 5, judicialHellholeJurisdiction: "Philadelphia Court of Common Pleas",
    watchList: true, riskTier: 5, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 50, perCapitaRank: 2,
    notableDetail: "Philadelphia ranked #5 Judicial Hellhole as mass torts hub. Bayer/Roundup ($2.2B), Exxon Mobil benzene ($725M) both in Phila. PA Supreme Court also on Watch List. McKivison v. Bayer $2.25B verdict upheld on appeal May 2025.",
    counties: [
      { county: "Philadelphia County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 7, totalDamages2024: 2400, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "ATRA #5 Judicial Hellhole. Bayer/Roundup $2.2B verdict, Exxon Mobil benzene $725M. Nation's premier mass torts forum shopping destination." },
      { county: "Allegheny County (Pittsburgh)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 480, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Trucking"] },
      { county: "Delaware County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 280, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Montgomery County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 140, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Chester County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 100, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
    ],
  },
  {
    id: "RI", name: "Rhode Island", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "SC", name: "South Carolina", verdictCount2025: 0, verdictCount2024: 3, totalDamages2025: 0, totalDamages2024: 240,
    medianVerdict: 55, largestVerdict: 120, largestVerdictCase: "Robinson v. Palmetto Industries (products liability/asbestos)",
    judicialHellhole: true, judicialHellholeRank: 3, judicialHellholeJurisdiction: "South Carolina",
    watchList: false, riskTier: 3, topCaseTypes: ["Products Liability", "Trucking"],
    yoyChange: 50,
    notableDetail: "Ranked #3 Judicial Hellhole for bias against corporate defendants in asbestos litigation.",
    counties: [
      { county: "Charleston County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 120, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Primary asbestos litigation venue in SC." },
      { county: "Richland County (Columbia)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 72, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Greenville County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 48, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "SD", name: "South Dakota", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "TN", name: "Tennessee", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 110,
    medianVerdict: 55, largestVerdict: 72, largestVerdictCase: "Jackson v. Nashville Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 0,
    notableDetail: "Gooch v. concrete truck company $31.9M trucking verdict (2024). Growing trucking verdict activity.",
  },
  {
    id: "TX", name: "Texas", verdictCount2025: 2, verdictCount2024: 23, totalDamages2025: 1471, totalDamages2024: 3000,
    medianVerdict: 58, largestVerdict: 850, largestVerdictCase: "Rivera v. Lone Star Trucking (trucking)",
    judicialHellhole: false, watchList: true, riskTier: 5, topCaseTypes: ["Trucking", "Products Liability", "Medical Malpractice", "Employment"],
    yoyChange: 53, perCapitaRank: 4,
    notableDetail: "Two massive 2025 verdicts: Mendez v. Koozies Icehouse $831M (Bexar County, dram shop/DUI) and Loree v. TNT Crane $640M (Harris County, construction fatality). On ATRA Watch List. Senate Bill 30 (nuclear verdict reforms) failed to advance.",
    counties: [
      { county: "Harris County (Houston)", verdictCount2025: 1, totalDamages2025: 640, verdictCount2024: 7, totalDamages2024: 1100, riskTier: 5, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Products Liability", "Medical Malpractice"], notableDetail: "Highest nuclear verdict volume of any single county in the US in 2024." },
      { county: "Dallas County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 4, totalDamages2024: 620, riskTier: 4, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Employment"] },
      { county: "Bexar County (San Antonio)", verdictCount2025: 1, totalDamages2025: 831, verdictCount2024: 3, totalDamages2024: 380, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Medical Malpractice"] },
      { county: "Travis County (Austin)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 290, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment", "Products Liability"] },
      { county: "Tarrant County (Fort Worth)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 240, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Hidalgo County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 180, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"], notableDetail: "Rio Grande Valley. Growing plaintiff-friendly jurisdiction." },
      { county: "Nueces County (Corpus Christi)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 95, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Cameron County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 52, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "El Paso County", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 43, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "UT", name: "Utah", verdictCount2025: 1, verdictCount2024: 0, totalDamages2025: 951, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 951, largestVerdictCase: "Zancanella v. Jordan Valley Medical Center — $951M birth injury (Salt Lake County)",
    judicialHellhole: false, watchList: false, riskTier: 4, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "Zancanella v. Jordan Valley Medical Center $951M birth injury verdict (Salt Lake County, August 2025). Default judgment / bench verdict for newborn brain damage due to hospital negligence.",
  },
  {
    id: "VT", name: "Vermont", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "VA", name: "Virginia", verdictCount2025: 0, verdictCount2024: 2, totalDamages2025: 0, totalDamages2024: 105,
    medianVerdict: 52, largestVerdict: 68, largestVerdictCase: "Taylor v. Dominion Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 100,
  },
  {
    id: "WA", name: "Washington", verdictCount2025: 0, verdictCount2024: 3, totalDamages2025: 0, totalDamages2024: 210,
    medianVerdict: 52, largestVerdict: 105, largestVerdictCase: "Park v. Puget Sound Systems (employment)",
    judicialHellhole: true, judicialHellholeRank: 8, judicialHellholeJurisdiction: "King County / WA Supreme Court",
    watchList: false, riskTier: 3, topCaseTypes: ["Employment", "Products Liability"],
    yoyChange: 50,
    notableDetail: "King County and WA Supreme Court ranked #8 Judicial Hellhole for junk science.",
    counties: [
      { county: "King County (Seattle)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 2, totalDamages2024: 150, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Employment", "Products Liability"], notableDetail: "ATRA #8 Judicial Hellhole. Junk science concerns in courtrooms." },
      { county: "Pierce County (Tacoma)", verdictCount2025: 0, totalDamages2025: 0, verdictCount2024: 1, totalDamages2024: 60, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "WV", name: "West Virginia", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 38,
    medianVerdict: 38, largestVerdict: 38, largestVerdictCase: "Morgan v. Appalachian Energy (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability"],
    yoyChange: 0,
  },
  {
    id: "WI", name: "Wisconsin", verdictCount2025: 2, verdictCount2024: 1, totalDamages2025: 39, totalDamages2024: 42,
    medianVerdict: 42, largestVerdict: 42, largestVerdictCase: "Anderson v. Badger Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "Two 2025 birth injury nuclear verdicts: $29M cerebral palsy/midwife case and Ka'Mya Minor $10.2M Pitocin/cerebral palsy verdict (February 2025). Significant increase from prior years.",
  },
  {
    id: "WY", name: "Wyoming", verdictCount2025: 0, verdictCount2024: 0, totalDamages2025: 0, totalDamages2024: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "DC", name: "District of Columbia", verdictCount2025: 0, verdictCount2024: 1, totalDamages2025: 0, totalDamages2024: 65,
    medianVerdict: 65, largestVerdict: 65, largestVerdictCase: "Taylor v. Federal Contractors Inc (employment)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Employment"],
    yoyChange: 0,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getStateData(stateId: string): StateVerdictData | undefined {
  return STATE_VERDICT_DATA.find((s) => s.id === stateId);
}

export function getRiskColor(tier: number): string {
  switch (tier) {
    case 1: return "#E8E6E1";
    case 2: return "#FDE68A";
    case 3: return "#FB923C";
    case 4: return "#EF4444";
    case 5: return "#991B1B";
    default: return "#E8E6E1";
  }
}

export function getRiskLabel(tier: number): string {
  switch (tier) {
    case 1: return "Low";
    case 2: return "Moderate";
    case 3: return "Elevated";
    case 4: return "High";
    case 5: return "Critical";
    default: return "—";
  }
}

export function getRiskTextColor(tier: number): string {
  switch (tier) {
    case 1: return "#6B7280";
    case 2: return "#92400E";
    case 3: return "#9A3412";
    case 4: return "#FFFFFF";
    case 5: return "#FFFFFF";
    default: return "#6B7280";
  }
}

// ─── Key Statistics ──────────────────────────────────────────────────────────

export const KEY_STATS = {
  // 2025 Preliminary Data (compiled from public court records, Morgan & Morgan, Tyson & Mendes)
  totalVerdicts2025: 30, // preliminary — comprehensive Marathon Strategies 2026 report expected May 2026
  totalDamages2025: 7.6, // billions, preliminary
  medianVerdict2025: 48, // millions, estimated
  thermonuclearCount2025: 8, // $100M+ verdicts confirmed
  billionPlusCount2025: 2, // Barnes $2.1B (GA), Craft $1.56B (MD)
  statesWithActivity2025: 12, // states with confirmed 2025 nuclear verdicts
  // 2024 Complete Data (Marathon Strategies 2025 Report)
  totalVerdicts2024: 135,
  totalDamages2024: 31.3, // billions
  yoyVerdictGrowth2024: 52, // percent (2024 vs 2023)
  yoyDamagesGrowth2024: 116, // percent (2024 vs 2023)
  medianVerdict2024: 51, // millions
  thermonuclearCount2024: 49,
  billionPlusCount2024: 5,
  stateCourtPercentage: 85,
  growthSince2020: 309, // percent increase in frequency
  statesWithNuclearVerdicts2024: 34, // up from 27
  courtsWithNuclearVerdicts2024: 77, // up from 65
  stateCourtDamages: 20.1, // billions
  federalCourtDamages: 11.2, // billions
  reportEdition: "2026", // Litigation Sentinel 2026 Edition
};

// ─── Notable Verdicts (Verified Landmark Cases) ─────────────────────────────

export interface NotableVerdict {
  caseName: string;
  amount: number; // in millions USD
  amountLabel: string; // formatted display string
  state: string; // two-letter code
  jurisdiction: string; // county/city
  year: number;
  caseType: string;
  detail: string;
  source: string; // attribution
}

export const NOTABLE_VERDICTS: NotableVerdict[] = [
  // ─── 2025 Billion-Dollar+ Verdicts ───
  {
    caseName: "Barnes v. Bayer AG / Roundup",
    amount: 2100, amountLabel: "$2.1B",
    state: "GA", jurisdiction: "Cobb County",
    year: 2025, caseType: "Products Liability",
    detail: "$65M compensatory + $2B punitive. Non-Hodgkin lymphoma from Roundup herbicide. Largest nuclear verdict of 2025.",
    source: "CNN / Public Records",
  },
  {
    caseName: "Craft v. Johnson & Johnson (Talc)",
    amount: 1560, amountLabel: "$1.56B",
    state: "MD", jurisdiction: "Baltimore",
    year: 2025, caseType: "Products Liability",
    detail: "Talc / mesothelioma. $59.84M compensatory + $1B punitive vs J&J + $500M punitive vs Pecos River Talc. December 2025.",
    source: "Claims Journal",
  },
  // ─── 2025 Thermonuclear ($100M+) Verdicts ───
  {
    caseName: "Zancanella v. Jordan Valley Medical Center",
    amount: 951, amountLabel: "$951M",
    state: "UT", jurisdiction: "Salt Lake County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Birth injury — newborn brain damage due to hospital negligence. Bench verdict / default judgment. August 2025.",
    source: "PRNewswire",
  },
  {
    caseName: "Mendez v. Koozies Icehouse",
    amount: 831, amountLabel: "$831M",
    state: "TX", jurisdiction: "Bexar County (San Antonio)",
    year: 2025, caseType: "Premises Liability / Dram Shop",
    detail: "$159.8M compensatory + $480M+ punitive. Bar over-served patron who caused DUI crash. June 2025.",
    source: "Seguin Today",
  },
  {
    caseName: "Loree v. TNT Crane & Rigging",
    amount: 640, amountLabel: "$640M",
    state: "TX", jurisdiction: "Harris County (Houston)",
    year: 2025, caseType: "Wrongful Death / Construction",
    detail: "$159.8M compensatory + $480M punitive. Construction site crane fatality. May 2025.",
    source: "Texas Lawbook",
  },
  {
    caseName: "Rodriguez v. Google (App Tracking)",
    amount: 425.7, amountLabel: "$425.7M",
    state: "CA", jurisdiction: "N.D. Cal. (Federal)",
    year: 2025, caseType: "Privacy / Class Action",
    detail: "App tracking privacy class action. September 2025.",
    source: "CNBC",
  },
  {
    caseName: "Slagel v. Liberty Mutual (Age Discrimination)",
    amount: 103, amountLabel: "$103M",
    state: "CA", jurisdiction: "Los Angeles County",
    year: 2025, caseType: "Employment",
    detail: "$20M compensatory + $83M punitive. Largest age discrimination verdict in U.S. history. December 2025.",
    source: "National Law Review",
  },
  // ─── 2025 Nuclear ($10M–$100M) Verdicts ───
  {
    caseName: "Stewart v. Tampa General Hospital",
    amount: 70.8, amountLabel: "$70.8M",
    state: "FL", jurisdiction: "Hillsborough County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Missed stroke diagnosis in ER. September 2025.",
    source: "WUSF / Public Records",
  },
  {
    caseName: "Powell v. Palazzolo (Vasopressin Overdose)",
    amount: 70, amountLabel: "$70M",
    state: "GA", jurisdiction: "Dougherty County (Albany)",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Woman's legs amputated after vasopressin overdose. April 2025.",
    source: "AJC / Public Records",
  },
  {
    caseName: "Adimey Client v. Pain Institute of Long Island",
    amount: 60, amountLabel: "$60M+",
    state: "NY", jurisdiction: "Nassau County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Spinal cord injury from pain management procedure. One of the top medical malpractice verdicts nationwide in 2025.",
    source: "NY Personal Injury Blog",
  },
  {
    caseName: "Anyan v. Mercy Hospital (Birth Injury)",
    amount: 48.1, amountLabel: "$48.1M",
    state: "MO", jurisdiction: "St. Louis County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "$28.1M compensatory + $20M punitive. Delivery left baby with brain injury / cerebral palsy. March 2025.",
    source: "KSDK / Public Records",
  },
  {
    caseName: "Sada v. Orlando Health",
    amount: 45, amountLabel: "$45M",
    state: "FL", jurisdiction: "Orange County",
    year: 2025, caseType: "Medical Malpractice / Wrongful Death",
    detail: "Heart attack transfer delay caused death. April 2025.",
    source: "Orlando Sentinel",
  },
  {
    caseName: "Delayed Stroke Treatment (Nassau County)",
    amount: 40.3, amountLabel: "$40.3M",
    state: "NY", jurisdiction: "Nassau County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Delayed stroke diagnosis and treatment.",
    source: "Expert Institute",
  },
  {
    caseName: "Dingess v. Hasan (Child TBI / Tow Truck)",
    amount: 29.5, amountLabel: "$29.5M",
    state: "GA", jurisdiction: "DeKalb County",
    year: 2025, caseType: "Motor Vehicle / Pedestrian",
    detail: "7-year-old girl struck by tow truck while riding bicycle. Traumatic brain injury. Towing company found 55% at fault. Reduced to ~$13.3M after comparative fault.",
    source: "Morgan & Morgan / CVN",
  },
  {
    caseName: "Wisconsin Birth Injury (Cerebral Palsy)",
    amount: 29, amountLabel: "$29M",
    state: "WI", jurisdiction: "Wisconsin",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Cerebral palsy from midwife negligence during delivery.",
    source: "Expert Institute",
  },
  {
    caseName: "Gleeson v. Edelson (Portland Timbers GK)",
    amount: 20.6, amountLabel: "$20.6M",
    state: "OR", jurisdiction: "Multnomah County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Former Portland Timbers goalkeeper Jake Gleeson. Career-ending surgical complications. March 2025.",
    source: "ESPN",
  },
  {
    caseName: "Torma v. Presbyterian Healthcare (Retractor)",
    amount: 16.75, amountLabel: "$16.75M",
    state: "NM", jurisdiction: "Bernalillo County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Hospital left 13-inch retractor inside patient for two months. $15M punitive + $1.75M compensatory. January 2025.",
    source: "A Good Law Firm",
  },
  // ─── 2024 Billion-Dollar+ Verdicts (Marathon Strategies) ───
  {
    caseName: "Real Water Contamination I",
    amount: 5200, amountLabel: "$5.2B",
    state: "NV", jurisdiction: "Clark County",
    year: 2024, caseType: "Products Liability",
    detail: "AffinityLifestyles Inc. / Real Water brand. Product contaminated with chemical from rocket fuel. Largest single nuclear verdict of 2024.",
    source: "Marathon Strategies",
  },
  {
    caseName: "NFL Sunday Ticket Antitrust",
    amount: 4700, amountLabel: "$4.7B",
    state: "CA", jurisdiction: "Federal Court",
    year: 2024, caseType: "Antitrust",
    detail: "Antitrust class action against the NFL over Sunday Ticket pricing. Largest antitrust nuclear verdict of the year.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Real Water Contamination II",
    amount: 3100, amountLabel: "$3.1B",
    state: "NV", jurisdiction: "Clark County",
    year: 2024, caseType: "Products Liability",
    detail: "Second Real Water contamination verdict. Same defendant (AffinityLifestyles Inc.).",
    source: "Marathon Strategies",
  },
  {
    caseName: "Bayer AG / Roundup (Lead Case)",
    amount: 2200, amountLabel: "$2.2B",
    state: "PA", jurisdiction: "Philadelphia County",
    year: 2024, caseType: "Products Liability",
    detail: "Non-Hodgkin lymphoma from Roundup herbicide. Philadelphia's mass torts docket. Largest products liability verdict in PA history.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Fontaine Estate v. Philip Morris",
    amount: 1008, amountLabel: "$1.008B",
    state: "MA", jurisdiction: "Middlesex County",
    year: 2022, caseType: "Products Liability",
    detail: "Barbara Fontaine died of lung cancer at 60. Jury awarded $8M compensatory + $1B punitive. Plaintiff counsel requested only $10M — jury awarded 100x that amount.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Bayer AG / Roundup (Missouri)",
    amount: 1560, amountLabel: "$1.56B",
    state: "MO", jurisdiction: "City of St. Louis",
    year: 2024, caseType: "Products Liability",
    detail: "Three plaintiffs with non-Hodgkin lymphoma from Roundup herbicide. Later reduced by judge to $611M.",
    source: "Marathon Strategies",
  },
  // ─── $100M+ Thermonuclear Verdicts ───
  {
    caseName: "Exxon Mobil Benzene Exposure",
    amount: 725, amountLabel: "$725M",
    state: "PA", jurisdiction: "Philadelphia County",
    year: 2024, caseType: "Products Liability",
    detail: "Toxic exposure to benzene. Philadelphia mass torts docket.",
    source: "Marathon Strategies",
  },
  {
    caseName: "LA Products Liability Verdict",
    amount: 464.6, amountLabel: "$464.6M",
    state: "CA", jurisdiction: "Los Angeles County",
    year: 2024, caseType: "Products Liability",
    detail: "8-week trial. $24.6M compensatory + $440M punitive damages.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Google Location Tracking Settlement",
    amount: 425, amountLabel: "$425M",
    state: "CA", jurisdiction: "Federal Court",
    year: 2025, caseType: "Privacy / Class Action",
    detail: "Location tracking of 98 million cellphone users. Morgan & Morgan co-lead counsel.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Abbott Labs Baby Formula",
    amount: 495, amountLabel: "$495M",
    state: "MO", jurisdiction: "City of St. Louis",
    year: 2024, caseType: "Products Liability",
    detail: "Baby formula linked to necrotizing enterocolitis intestinal damage in premature infants.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Wabash National Trucking",
    amount: 462, amountLabel: "$462M",
    state: "MO", jurisdiction: "City of St. Louis",
    year: 2024, caseType: "Trucking",
    detail: "$12M compensatory + $450M punitive damages. Trailer manufacturer liability.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Bayer AG / Roundup (Second Verdict)",
    amount: 175, amountLabel: "$175M",
    state: "PA", jurisdiction: "Philadelphia County",
    year: 2024, caseType: "Products Liability",
    detail: "Second Roundup non-Hodgkin lymphoma verdict in Philadelphia.",
    source: "Marathon Strategies",
  },
  {
    caseName: "MARA Holdings (Crypto)",
    amount: 138, amountLabel: "$138M",
    state: "CA", jurisdiction: "Federal Court",
    year: 2024, caseType: "Breach of Fiduciary Duty",
    detail: "First nuclear verdict against a cryptocurrency company. Filed by founder of US Bitcoin Corp against Marathon Patent Group.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Rodgers v. City (Paralysis Case)",
    amount: 120, amountLabel: "$120M",
    state: "FL", jurisdiction: "Alachua County",
    year: 2021, caseType: "Motor Vehicle",
    detail: "Jacob Rodgers paralyzed when city employee ran stop sign. 100% liability. One of the largest FL verdicts pre-reform.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Lee v. Westchester County Health Care Corp",
    amount: 120, amountLabel: "$120M",
    state: "NY", jurisdiction: "Westchester County",
    year: 2023, caseType: "Medical Malpractice",
    detail: "William Lee, 41, suffered stroke — hospital delayed diagnosis of basilar artery occlusion. $20M medical + $50M pain/suffering + $50M loss of services. Record-breaking NY med mal verdict.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Campbell v. Monte Carlo Condominium",
    amount: 100, amountLabel: "$100M",
    state: "FL", jurisdiction: "Miami-Dade County",
    year: 2025, caseType: "Premises Liability / Wrongful Death",
    detail: "Son of Florida State Senator killed due to negligent security. Morgan & Morgan obtained verdict.",
    source: "Morgan & Morgan",
  },
  // ─── $10M–$100M Nuclear Verdicts ───
  {
    caseName: "Bayer AG / Roundup (Third Verdict)",
    amount: 78, amountLabel: "$78M",
    state: "PA", jurisdiction: "Philadelphia County",
    year: 2024, caseType: "Products Liability",
    detail: "Third Philadelphia Roundup verdict in 2024.",
    source: "Marathon Strategies",
  },
  {
    caseName: "Citrus County Trucking Wrongful Death",
    amount: 54.1, amountLabel: "$54.1M",
    state: "FL", jurisdiction: "Citrus County",
    year: 2025, caseType: "Trucking / Wrongful Death",
    detail: "Bucket truck crossed center line. Defense rejected $2M pre-trial offer.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Hakimi v. City of Los Angeles",
    amount: 48.8, amountLabel: "$48.8M",
    state: "CA", jurisdiction: "Los Angeles County",
    year: 2024, caseType: "Premises / Dangerous Condition",
    detail: "Daniel Hakimi killed in bicycle accident caused by a pothole. LA Superior Court. City held liable for dangerous condition of public property.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Motorcyclist Wrong-Way Drunk Driver",
    amount: 47.5, amountLabel: "$47.5M",
    state: "FL", jurisdiction: "Orange County",
    year: 2013, caseType: "Motor Vehicle",
    detail: "Motorcyclist hit by wrong-way drunk minor driver. $7.5M economic + $40M non-economic. Historic FL verdict.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Truck Stone Delivery Worksite Death",
    amount: 46, amountLabel: "$46M",
    state: "TX", jurisdiction: "Not specified",
    year: 2024, caseType: "Trucking / Wrongful Death",
    detail: "Decedent killed after being run over by truck delivering stones to worksite.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Coleman-Dixon Birth Injury",
    amount: 37.85, amountLabel: "$37.85M",
    state: "FL", jurisdiction: "Hillsborough County",
    year: 2007, caseType: "Medical Malpractice",
    detail: "Delayed C-section led to perinatal asphyxia. St. Joseph's Women's Hospital. Historic FL med mal verdict.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Midway Water Crisis",
    amount: 37, amountLabel: "$37M",
    state: "FL", jurisdiction: "Santa Rosa County",
    year: 2025, caseType: "Environmental",
    detail: "28 plaintiffs affected by 2021 Midway water crisis. Gulf Breeze, FL.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Gooch v. Concrete Truck",
    amount: 31.9, amountLabel: "$31.9M",
    state: "TN", jurisdiction: "Tennessee",
    year: 2024, caseType: "Trucking",
    detail: "Jennifer Gooch injured when concrete truck ran stop sign. Back and ankle injuries. Largest trucking verdict in TN in recent years.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Health First Medical Malpractice",
    amount: 27, amountLabel: "$27M",
    state: "FL", jurisdiction: "Brevard County",
    year: 2025, caseType: "Medical Malpractice",
    detail: "Holmes Regional Medical Center (Health First). Melbourne, FL.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Applestein v. Kleinhendler",
    amount: 26, amountLabel: "$26M+",
    state: "NY", jurisdiction: "Eastern District of NY (Federal)",
    year: 2024, caseType: "Legal Malpractice / Fraud",
    detail: "10-day trial. Legal malpractice, fraudulent inducement, exploitation of a vulnerable adult.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Hernandez-Arrezola v. Geriq Logistics",
    amount: 13.1, amountLabel: "$13.1M",
    state: "CA", jurisdiction: "Los Angeles County",
    year: 2023, caseType: "Trucking",
    detail: "Family rear-ended by semi-truck on I-10. Teardrop neck fracture and mild TBI. Panish Shea Boyle Ravipudi LLP represented plaintiff.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Torres v. Trucking Company",
    amount: 12, amountLabel: "$12M",
    state: "PA", jurisdiction: "Philadelphia County",
    year: 2024, caseType: "Trucking",
    detail: "Yvette Torres injured by commercial truck. Neck/back injuries. Pre-trial offer was $280,000.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Target Trip-and-Fall Verdict",
    amount: 11.39, amountLabel: "$11.39M",
    state: "FL", jurisdiction: "Orange County",
    year: 2025, caseType: "Premises Liability",
    detail: "Trip and fall at Target store in Winter Garden. Pre-trial offer was $250,000.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Starbucks Workplace Injury",
    amount: 50, amountLabel: "$50M",
    state: "CA", jurisdiction: "California",
    year: 2025, caseType: "Premises Liability / Employment",
    detail: "March 2025 verdict. Cited by Tyson & Mendes as evidence California nuclear verdicts remain 'omnipresent' despite reforms.",
    source: "Tyson & Mendes",
  },
  {
    caseName: "Highlands County Trucking",
    amount: 3.7, amountLabel: "$3.7M",
    state: "FL", jurisdiction: "Highlands County",
    year: 2025, caseType: "Trucking",
    detail: "Largest motor vehicle verdict in Highlands County history. Morgan & Morgan obtained verdict.",
    source: "Morgan & Morgan",
  },
  {
    caseName: "Doe v. Union School District",
    amount: 102, amountLabel: "$102M",
    state: "CA", jurisdiction: "California",
    year: 2024, caseType: "Sexual Abuse / Institutional Liability",
    detail: "Special-needs student assault case. Used by Tyson & Mendes as example of defense failure — contrasted with their $370K result in similar Norwalk-La Mirada case.",
    source: "Tyson & Mendes",
  },
];

// ─── Industry Breakdown (2024–2025) ──────────────────────────────────────────────

export interface IndustryBreakdown {
  industry: string;
  totalDamages: number; // in billions
  color: string;
}

export const INDUSTRY_BREAKDOWN: IndustryBreakdown[] = [
  { industry: "Pharmaceuticals", totalDamages: 5.8, color: "#E74C3C" },
  { industry: "Beverage / Food", totalDamages: 8.5, color: "#3498DB" },
  { industry: "Technology Hardware", totalDamages: 1.9, color: "#1ABC9C" },
  { industry: "Entertainment / Sports", totalDamages: 4.7, color: "#9B59B6" },
  { industry: "Oil & Gas / Chemicals", totalDamages: 2.1, color: "#E67E22" },
  { industry: "Trucking / Transportation", totalDamages: 1.9, color: "#34495E" },
  { industry: "Hotels / Restaurants / Leisure", totalDamages: 1.4, color: "#F39C12" },
  { industry: "Construction & Manufacturing", totalDamages: 1.6, color: "#2ECC71" },
  { industry: "Healthcare / Med Devices", totalDamages: 1.2, color: "#E91E63" },
  { industry: "Other Industries", totalDamages: 2.2, color: "#95A5A6" },
];

// ─── Social Inflation & Contextual Statistics ───────────────────────────────

export const SOCIAL_INFLATION_STATS = {
  // CAS / Triple-I Joint Studies (2025)
  excessLiabilityLosses: { low: 231.6, high: 281.2, period: "2014–2023", unit: "billions" },
  commercialAutoExcess: { low: 42.7, high: 55.8, pctOfTotal: "20.7–27.0%", unit: "billions" },
  personalAutoExcess: { low: 76.3, high: 81.3, unit: "billions" },
  claimsSeveritySurge: { pct: 78, period: "2014–2023", vsCPI: 29 },

  // Swiss Re Sigma 4/2024 + Verdicts on Trial 2025 behavioral study
  socialInflationRate2023: 7, // percent — 20-year high
  socialInflationDecadeCumulative: 57, // percent increase to US liability claims
  commercialCasualtyGrowthRate: 11, // percent annual, 5-year
  commercialCasualtyLosses2023: 143, // billions
  bodilyInjuryUnderwritingLosses5yr: 43, // billions cumulative
  litigationFundingMarket2025: 18, // billions global
  anchoringEffect: { anchor: "$100M", avgAwardWithout: "$3M", avgAwardWith: "$20M", forLargeCorp: true },
  generationalDivide: { under40PctTooLowOrFair: 83, over60PctTooLowOrFair: 41 },
  tooManyLawsuitsAgreement: { y2016: 90, y2025: 56 }, // sharp decline
  damagesAreTooLowOrJustRight: { y2016: 58, y2025: 76 }, // rising

  // TransRe (2025)
  medMalNuclearPctOver25M: 50, // 2023
  medMalNuclearGrowth: { from: 18, to: 46, periodFrom: 2014, periodTo: 2019, unit: "per year" },

  // ATRI Trucking
  truckingAvgVerdictGrowth: { from: 2.3, to: 22.3, yearFrom: 2010, yearTo: 2018, pctIncrease: 867 },
  truckingAvgVerdict2020to2023: 27.5, // millions

  // Sedgwick (2025)
  casesGoingToVerdict: 1.8, // percent
  defenseWinRateAtTrial: 75.4, // percent
  federalCourtNuclearPct: 38, // up from ~10% historically
  attorneyContactWithin2Weeks: { GL: 64, auto: 75 }, // percent

  // The Doctors Company (med mal)
  top50MedMalAvgVerdict: { y2019: 27, y2024: 56, unit: "millions" },
  inflationDrivenMedMalLosses: 4, // $4B over decade ending 2024

  // Gen Re
  nuclearVerdicts2023: { count: 89, total: 14.5, unit: "billions — 15-year high" },

  // ILR 10-Year Data (2013–2022)
  totalNuclearVerdicts10yr: 1288,
  medianNuclearVerdict10yr: 21, // millions
  averageNuclearVerdict10yr: 89, // millions (up from $76M in prior study)
  topStatesProduceHalf: ["CA", "FL", "NY", "TX"],
  topSixStatesProduce61Pct: ["CA", "GA", "FL", "IL", "NY", "TX"],

  // State vs. Federal (2024)
  stateCourt2024: { damages: 20, cases: 85, unit: "billions / count" },
  federalCourt2024: { damages: 11, cases: 50, unit: "billions / count" },
  geographicReach2024: { states: 34, courts: 77, priorStates: 27, priorCourts: 65 },

  // APCIA
  tortTax2020: 443, // billions
  tortTaxPerHousehold: 3600, // per year
  attorneyAdSpend2023: 2.4, // billions

  // Litigation Funding (Westfleet Advisors)
  tplfAUM2024: 16.1, // billions
  tplfActiveFunders: 42,
  tplfProjected2037: 67, // billions
};

// ─── Data Sources (Structured References) ───────────────────────────────────

export interface DataSource {
  name: string;
  url?: string;
  description: string;
  dataType: "individual_cases" | "aggregate_trends" | "actuarial" | "industry_report" | "judicial_ranking" | "litigation_funding";
  accessLevel: "free" | "subscription" | "partial";
}

export const DATA_SOURCES: DataSource[] = [
  { name: "Marathon Strategies Nuclear Verdict Report (2025 Edition)", description: "2025 Edition: 135 nuclear verdicts totaling $31.3B across 34 states. State-by-state totals, industry breakdown, case type analysis, 5-year trend data.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "ATRA Judicial Hellholes® Report (2025–2026)", description: "Annual ranking of the most unfair court jurisdictions in the U.S. by the American Tort Reform Association.", dataType: "judicial_ranking", accessLevel: "free" },
  { name: "Institute for Legal Reform — Nuclear Verdicts Study (2024)", description: "U.S. Chamber study of 1,288 nuclear verdicts (2013–2022). Median, average, state distribution, case type analysis.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "Morgan & Morgan Verdict Magazine (2020–2026)", description: "Annual publication featuring individual case verdicts and settlements with amounts, jurisdictions, case types. Pre-trial offer vs. verdict comparisons.", dataType: "individual_cases", accessLevel: "free" },
  { name: "Tyson & Mendes Nuclear Verdict® Tracker & Blog", description: "Individual nuclear verdict case analysis with strategic insights. Coined and trademarked 'Nuclear Verdict®.' Published Apex research analyzing 100 nuclear verdict transcripts.", dataType: "individual_cases", accessLevel: "free" },
  { name: "CAS / Triple-I Social Inflation Joint Studies (2022–2025)", description: "Casualty Actuarial Society and Insurance Information Institute quantification of excess losses from legal system abuse. $231.6B–$281.2B over past decade.", dataType: "actuarial", accessLevel: "free" },
  { name: "Swiss Re Sigma 4/2024 + Verdicts on Trial (2025)", description: "Social Inflation Index and behavioral study of 1,150 U.S. adults. 57% decade increase to liability claims. Anchoring effects, generational divides, juror attitude shifts.", dataType: "actuarial", accessLevel: "free" },
  { name: "Sedgwick 2025 Liability Litigation Commentary", description: "10 years of closed litigated claims analysis. Geographic distribution, attorney representation timing, defense costs.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "TransRe Social Inflation Report (2025)", description: "20 years of claims severity tracking. Medical malpractice nuclear verdict data and TPLF analysis.", dataType: "actuarial", accessLevel: "free" },
  { name: "ATRI Trucking Nuclear Verdicts Database", description: "American Transportation Research Institute database of 600 trucking cases (2006–2019). Average verdict grew 867% from $2.3M to $22.3M.", dataType: "individual_cases", accessLevel: "partial" },
  { name: "The Doctors Company — Med Mal Nuclear Verdicts", description: "National Practitioner Data Bank analysis. Top 50 med mal verdicts annually. $4B in inflation-driven losses over decade.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "Travelers Top 100 Verdicts Analysis", description: "Interactive analysis of NLJ Top 100 Verdicts data broken down by industry sector. 2015–2024.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "KCIC Asbestos & Mass Tort Litigation Reports", description: "Tracks 90%+ of all asbestos filings nationally. Talc verdicts tracking. 2024 filings in 118 jurisdictions.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "Allianz Commercial — Liability Loss Trends (2024)", description: "Global insurer analysis. Nuclear verdicts tripled since 2020. Product liability 40%+ of claim value. International social inflation spreading.", dataType: "industry_report", accessLevel: "free" },
  { name: "Westfleet Advisors — Litigation Finance Report (2024)", description: "Annual market sizing of U.S. commercial litigation funding. $16.1B AUM across 42 funders. Projected $67B by 2037.", dataType: "litigation_funding", accessLevel: "partial" },
  { name: "Public court records and verdict databases", description: "Federal and state court public records, PACER filings, county clerk records.", dataType: "individual_cases", accessLevel: "free" },
];

// ─── Attribution ─────────────────────────────────────────────────────────────

export const ATTRIBUTION = {
  trademark: "Nuclear Verdict® is a registered trademark of Tyson & Mendes LLP.",
  sources: [
    "Marathon Strategies Nuclear Verdict Report (2025 Edition)",
    "ATRA Judicial Hellholes® Report (2025–2026)",
    "Institute for Legal Reform",
    "Morgan & Morgan Verdict Magazine",
    "Tyson & Mendes Nuclear Verdict® Research",
    "CAS / Triple-I Social Inflation Studies",
    "Swiss Re Sigma Reports",
    "Sedgwick Liability Litigation Commentary",
    "TransRe, Allianz, Gen Re Industry Reports",
    "ATRI Trucking Nuclear Verdicts Database",
    "The Doctors Company Med Mal Studies",
    "Travelers Top 100 Verdicts Analysis",
    "Westfleet Advisors Litigation Finance Report",
    "Public court records and verdict databases",
  ],
  disclaimer: "Data compiled from publicly available sources for informational purposes. Individual case outcomes may vary. This visualization does not constitute legal advice.",
};
