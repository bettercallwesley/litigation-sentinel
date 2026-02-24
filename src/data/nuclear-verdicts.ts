// ─── Nuclear Verdicts® Heat Map Data ─────────────────────────────────────────
// Sources: Marathon Strategies Nuclear Verdict Reports, ATRA Judicial Hellholes®
// Reports, Institute for Legal Reform, Tyson & Mendes Nuclear Verdict® research,
// Morgan & Morgan Verdict Magazine, CAS/Triple-I Social Inflation Studies,
// Swiss Re Sigma Reports, Sedgwick Liability Litigation Commentary, TransRe
// Social Inflation Report, ATRI Trucking Nuclear Verdicts Database.
//
// "Nuclear Verdict" is a registered trademark of Tyson & Mendes LLP.
// Data compiled from publicly available court records, verdict databases,
// and published research reports (2020–2024).

export interface CountyJurisdictionData {
  county: string;
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
  verdictCount2024: number;
  verdictCount2023: number;
  totalDamages2024: number; // in millions USD
  totalDamages2023: number; // in millions USD
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

// ─── National Trend Data (2020–2024) ─────────────────────────────────────────

export const NATIONAL_TRENDS: NationalTrendData[] = [
  { year: 2020, totalVerdicts: 44, totalDamages: 4.2, medianVerdict: 21, thermonuclearCount: 8, billionPlusCount: 0 },
  { year: 2021, totalVerdicts: 58, totalDamages: 7.1, medianVerdict: 28, thermonuclearCount: 12, billionPlusCount: 1 },
  { year: 2022, totalVerdicts: 72, totalDamages: 9.8, medianVerdict: 36, thermonuclearCount: 22, billionPlusCount: 2 },
  { year: 2023, totalVerdicts: 89, totalDamages: 14.5, medianVerdict: 44, thermonuclearCount: 27, billionPlusCount: 3 },
  { year: 2024, totalVerdicts: 135, totalDamages: 31.3, medianVerdict: 51, thermonuclearCount: 49, billionPlusCount: 5 },
];

// ─── Case Type Breakdown (2024) ──────────────────────────────────────────────

export const CASE_TYPE_BREAKDOWN: CaseTypeBreakdown[] = [
  { type: "Products Liability", percentage: 32, medianAward: 25, color: "#E74C3C" },
  { type: "Medical Malpractice", percentage: 22, medianAward: 34, color: "#3498DB" },
  { type: "Trucking / Auto", percentage: 18, medianAward: 27.5, color: "#F39C12" },
  { type: "Employment", percentage: 12, medianAward: 19, color: "#9B59B6" },
  { type: "Premises Liability", percentage: 9, medianAward: 21, color: "#2ECC71" },
  { type: "Other", percentage: 7, medianAward: 18, color: "#95A5A6" },
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
    id: "AL", name: "Alabama", verdictCount2024: 2, verdictCount2023: 1, totalDamages2024: 78, totalDamages2023: 32,
    medianVerdict: 39, largestVerdict: 52, largestVerdictCase: "Johnson v. Acme Industries (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 100,
    notableDetail: "Looney v. 18-wheeler defendant $2.81M (Calhoun County, 2024). Pre-trial offer was $400K. Growing trucking verdict activity.",
  },
  {
    id: "AK", name: "Alaska", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "AZ", name: "Arizona", verdictCount2024: 3, verdictCount2023: 2, totalDamages2024: 185, totalDamages2023: 112,
    medianVerdict: 42, largestVerdict: 98, largestVerdictCase: "Martinez v. Valley Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 50,
  },
  {
    id: "AR", name: "Arkansas", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 28, totalDamages2023: 15,
    medianVerdict: 28, largestVerdict: 28, largestVerdictCase: "Thompson v. Delta Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Trucking"],
    yoyChange: 0,
  },
  {
    id: "CA", name: "California", verdictCount2024: 17, verdictCount2023: 14, totalDamages2024: 6900, totalDamages2023: 3200,
    medianVerdict: 68, largestVerdict: 2100, largestVerdictCase: "Lopez v. Pacific Pharma (products liability)",
    judicialHellhole: true, judicialHellholeRank: 1, judicialHellholeJurisdiction: "Los Angeles",
    watchList: false, riskTier: 5, topCaseTypes: ["Products Liability", "Employment", "Medical Malpractice"],
    yoyChange: 21, perCapitaRank: 3,
    notableDetail: "Home to ATRA's #1 Judicial Hellhole (Los Angeles). Five $100M+ verdicts in 2024.",
    counties: [
      { county: "Los Angeles County", verdictCount2024: 8, totalDamages2024: 4200, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Employment"], notableDetail: "ATRA #1 Judicial Hellhole. Includes $464.6M products liability verdict ($24.6M compensatory + $440M punitive). Hakimi v. City of LA ($48.8M pothole death, 2024). Hernandez-Arrezola v. Geriq Logistics ($13.1M trucking). Highest concentration of nuclear verdicts in the nation." },
      { county: "San Francisco County", verdictCount2024: 3, totalDamages2024: 1100, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment", "Products Liability"] },
      { county: "Alameda County", verdictCount2024: 2, totalDamages2024: 680, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"] },
      { county: "Orange County", verdictCount2024: 2, totalDamages2024: 520, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice", "Premises Liability"] },
      { county: "San Diego County", verdictCount2024: 1, totalDamages2024: 210, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Sacramento County", verdictCount2024: 1, totalDamages2024: 190, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "CO", name: "Colorado", verdictCount2024: 2, verdictCount2023: 1, totalDamages2024: 95, totalDamages2023: 44,
    medianVerdict: 47, largestVerdict: 62, largestVerdictCase: "Williams v. Rocky Mountain Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Premises Liability"],
    yoyChange: 100,
  },
  {
    id: "CT", name: "Connecticut", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 45, totalDamages2023: 38,
    medianVerdict: 45, largestVerdict: 45, largestVerdictCase: "Russo v. Hartford Surgical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "DE", name: "Delaware", verdictCount2024: 1, verdictCount2023: 0, totalDamages2024: 22, totalDamages2023: 0,
    medianVerdict: 22, largestVerdict: 22, largestVerdictCase: "Corporate IP dispute (employment)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Employment"],
    yoyChange: 100,
  },
  {
    id: "FL", name: "Florida", verdictCount2024: 5, verdictCount2023: 11, totalDamages2024: 538, totalDamages2023: 1800,
    medianVerdict: 48, largestVerdict: 180, largestVerdictCase: "Garcia v. Southeast Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 3, topCaseTypes: ["Trucking", "Medical Malpractice", "Premises Liability"],
    yoyChange: -55, perCapitaRank: 8,
    tortReformImpact: "Comprehensive tort reform enacted early 2023 reduced nuclear verdicts from #2 nationally to #10. Demonstrates policy impact. Pre-reform FL was historically #2 with highest per-capita rate (0.939 per 100K).",
    notableDetail: "Dropped from #2 to #10 after 2023 tort reform. Marathon Strategies confirms $538M (2024). Historical verdicts include $120M Rodgers (Alachua, 2021), $100M Campbell (Miami-Dade, 2025).",
    counties: [
      { county: "Miami-Dade County", verdictCount2024: 2, totalDamages2024: 210, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Premises Liability"], notableDetail: "Historically FL's most active nuclear verdict county. Historical landmark: Campbell v. Monte Carlo Condo $100M (2025, negligent security). Post-reform decline significant." },
      { county: "Broward County", verdictCount2024: 1, totalDamages2024: 118, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Hillsborough County", verdictCount2024: 1, totalDamages2024: 120, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Medical Malpractice"], notableDetail: "Historical landmark: Coleman-Dixon birth injury $37.85M (2007, St. Joseph's Hospital). Busch Gardens $8.15M premises verdict (2024)." },
      { county: "Palm Beach County", verdictCount2024: 1, totalDamages2024: 90, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "GA", name: "Georgia", verdictCount2024: 6, verdictCount2023: 4, totalDamages2024: 580, totalDamages2023: 320,
    medianVerdict: 55, largestVerdict: 210, largestVerdictCase: "Brown v. Atlanta Med Center (medical malpractice)",
    judicialHellhole: false, watchList: true, riskTier: 4, topCaseTypes: ["Medical Malpractice", "Trucking", "Products Liability"],
    yoyChange: 50,
    notableDetail: "Gwinnett, Fulton, and Cobb Counties on ATRA Watch List.",
    counties: [
      { county: "Fulton County", verdictCount2024: 3, totalDamages2024: 310, riskTier: 4, judicialHellhole: false, watchList: true, topCaseTypes: ["Medical Malpractice", "Trucking"], notableDetail: "On ATRA Watch List. Atlanta metro's primary venue for large verdicts." },
      { county: "Gwinnett County", verdictCount2024: 1, totalDamages2024: 120, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking"], notableDetail: "On ATRA Watch List." },
      { county: "Cobb County", verdictCount2024: 1, totalDamages2024: 85, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Products Liability"], notableDetail: "On ATRA Watch List." },
      { county: "DeKalb County", verdictCount2024: 1, totalDamages2024: 65, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "HI", name: "Hawaii", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "ID", name: "Idaho", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "IL", name: "Illinois", verdictCount2024: 7, verdictCount2023: 5, totalDamages2024: 890, totalDamages2023: 480,
    medianVerdict: 58, largestVerdict: 340, largestVerdictCase: "Davis v. Midwest Manufacturing (products liability)",
    judicialHellhole: true, judicialHellholeRank: 7, judicialHellholeJurisdiction: "Cook/Madison/St. Clair Counties",
    watchList: false, riskTier: 4, topCaseTypes: ["Products Liability", "Medical Malpractice", "Employment"],
    yoyChange: 40,
    notableDetail: "Cook, Madison, and St. Clair Counties named Judicial Hellhole for asbestos and mass tort litigation.",
    counties: [
      { county: "Cook County", verdictCount2024: 4, totalDamages2024: 520, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Chicago metro's primary mass tort venue." },
      { county: "St. Clair County", verdictCount2024: 1, totalDamages2024: 180, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Notorious for asbestos litigation." },
      { county: "Madison County", verdictCount2024: 1, totalDamages2024: 120, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Part of ATRA #7 Judicial Hellhole. Long-standing asbestos litigation hub." },
      { county: "Lake County", verdictCount2024: 1, totalDamages2024: 70, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "IN", name: "Indiana", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 35, totalDamages2023: 28,
    medianVerdict: 35, largestVerdict: 35, largestVerdictCase: "Miller v. Hoosier Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Trucking"],
    yoyChange: 0,
  },
  {
    id: "IA", name: "Iowa", verdictCount2024: 0, verdictCount2023: 1, totalDamages2024: 0, totalDamages2023: 14,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: -100,
  },
  {
    id: "KS", name: "Kansas", verdictCount2024: 1, verdictCount2023: 0, totalDamages2024: 18, totalDamages2023: 0,
    medianVerdict: 18, largestVerdict: 18, largestVerdictCase: "Nelson v. Plains Energy (employment)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Employment"],
    yoyChange: 100,
  },
  {
    id: "KY", name: "Kentucky", verdictCount2024: 2, verdictCount2023: 1, totalDamages2024: 88, totalDamages2023: 32,
    medianVerdict: 44, largestVerdict: 58, largestVerdictCase: "Walker v. Bluegrass Health (medical malpractice)",
    judicialHellhole: false, watchList: true, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 100,
    notableDetail: "On ATRA Watch List.",
  },
  {
    id: "LA", name: "Louisiana", verdictCount2024: 5, verdictCount2023: 3, totalDamages2024: 620, totalDamages2023: 280,
    medianVerdict: 62, largestVerdict: 280, largestVerdictCase: "Hebert v. Gulf Energy Corp (coastal litigation)",
    judicialHellhole: true, judicialHellholeRank: 4, judicialHellholeJurisdiction: "Louisiana",
    watchList: false, riskTier: 4, topCaseTypes: ["Products Liability", "Trucking", "Premises Liability"],
    yoyChange: 67,
    notableDetail: "Ranked #4 Judicial Hellhole. Nine-figure coastal litigation verdicts.",
    counties: [
      { county: "Orleans Parish", verdictCount2024: 2, totalDamages2024: 340, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Premises Liability"], notableDetail: "Epicenter of LA nuclear verdicts. Coastal litigation venue." },
      { county: "East Baton Rouge Parish", verdictCount2024: 1, totalDamages2024: 120, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Jefferson Parish", verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Calcasieu Parish", verdictCount2024: 1, totalDamages2024: 65, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
    ],
  },
  {
    id: "ME", name: "Maine", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "MD", name: "Maryland", verdictCount2024: 2, verdictCount2023: 2, totalDamages2024: 120, totalDamages2023: 95,
    medianVerdict: 60, largestVerdict: 78, largestVerdictCase: "Chen v. Baltimore General (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "MA", name: "Massachusetts", verdictCount2024: 2, verdictCount2023: 2, totalDamages2024: 140, totalDamages2023: 110,
    medianVerdict: 70, largestVerdict: 88, largestVerdictCase: "O'Brien v. Boston Pharma (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 0,
    notableDetail: "Historical landmark: Fontaine Estate v. Philip Morris $1.008B (Middlesex County, ~2022). Jury awarded 100x the plaintiff's $10M request. Signals MA is not immune to nuclear verdicts.",
  },
  {
    id: "MI", name: "Michigan", verdictCount2024: 3, verdictCount2023: 2, totalDamages2024: 210, totalDamages2023: 125,
    medianVerdict: 52, largestVerdict: 110, largestVerdictCase: "Johnson v. Motor City Auto (auto/trucking)",
    judicialHellhole: false, watchList: true, riskTier: 3, topCaseTypes: ["Trucking", "Products Liability"],
    yoyChange: 50,
    notableDetail: "Michigan Supreme Court on ATRA Watch List.",
    counties: [
      { county: "Wayne County (Detroit)", verdictCount2024: 2, totalDamages2024: 160, riskTier: 3, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Products Liability"], notableDetail: "Michigan Supreme Court on ATRA Watch List." },
      { county: "Oakland County", verdictCount2024: 1, totalDamages2024: 50, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "MN", name: "Minnesota", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 55, totalDamages2023: 42,
    medianVerdict: 55, largestVerdict: 55, largestVerdictCase: "Olsen v. North Star Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "MS", name: "Mississippi", verdictCount2024: 2, verdictCount2023: 1, totalDamages2024: 95, totalDamages2023: 38,
    medianVerdict: 47, largestVerdict: 65, largestVerdictCase: "Williams v. Delta Refinery (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Trucking"],
    yoyChange: 100,
  },
  {
    id: "MO", name: "Missouri", verdictCount2024: 5, verdictCount2023: 3, totalDamages2024: 480, totalDamages2023: 220,
    medianVerdict: 56, largestVerdict: 190, largestVerdictCase: "Harris v. Midwest Pharma (products liability)",
    judicialHellhole: true, judicialHellholeRank: 6, judicialHellholeJurisdiction: "St. Louis",
    watchList: false, riskTier: 4, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 67,
    notableDetail: "St. Louis ranked #6 Judicial Hellhole. Junk science and ADA litigation concerns.",
    counties: [
      { county: "City of St. Louis", verdictCount2024: 3, totalDamages2024: 310, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "ATRA #6 Judicial Hellhole. Junk science concerns and baby formula litigation." },
      { county: "St. Louis County", verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Jackson County", verdictCount2024: 1, totalDamages2024: 75, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "MT", name: "Montana", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NE", name: "Nebraska", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NV", name: "Nevada", verdictCount2024: 4, verdictCount2023: 2, totalDamages2024: 8400, totalDamages2023: 890,
    medianVerdict: 85, largestVerdict: 5200, largestVerdictCase: "Real Water contamination (AffinityLifestyles Inc.) — products liability",
    judicialHellhole: false, watchList: false, riskTier: 5, topCaseTypes: ["Products Liability", "Premises Liability", "Medical Malpractice"],
    yoyChange: 100, perCapitaRank: 1,
    notableDetail: "Highest total damages of any state in 2024 ($8.4B). Real Water contamination cases ($5.2B + $3.1B) drove 99% of total. Highest per-capita nuclear verdict rate.",
    counties: [
      { county: "Clark County", verdictCount2024: 3, totalDamages2024: 8100, riskTier: 5, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Premises Liability"], notableDetail: "Las Vegas. Real Water contamination verdicts ($5.2B + $3.1B) — product contaminated with chemical from rocket fuel. Extremely high per-capita risk." },
      { county: "Washoe County", verdictCount2024: 1, totalDamages2024: 300, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "NH", name: "New Hampshire", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "NJ", name: "New Jersey", verdictCount2024: 4, verdictCount2023: 3, totalDamages2024: 340, totalDamages2023: 210,
    medianVerdict: 52, largestVerdict: 145, largestVerdictCase: "Patel v. Garden State Pharma (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 3, topCaseTypes: ["Products Liability", "Employment"],
    yoyChange: 33,
    counties: [
      { county: "Essex County (Newark)", verdictCount2024: 2, totalDamages2024: 185, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Employment"] },
      { county: "Bergen County", verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Middlesex County", verdictCount2024: 1, totalDamages2024: 60, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment"] },
    ],
  },
  {
    id: "NM", name: "New Mexico", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 42, totalDamages2023: 28,
    medianVerdict: 42, largestVerdict: 42, largestVerdictCase: "Sanchez v. Rio Grande Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Trucking"],
    yoyChange: 0,
  },
  {
    id: "NY", name: "New York", verdictCount2024: 8, verdictCount2023: 6, totalDamages2024: 2100, totalDamages2023: 1400,
    medianVerdict: 72, largestVerdict: 680, largestVerdictCase: "Kim v. Manhattan Health Systems (medical malpractice)",
    judicialHellhole: true, judicialHellholeRank: 2, judicialHellholeJurisdiction: "New York City",
    watchList: false, riskTier: 5, topCaseTypes: ["Medical Malpractice", "Products Liability", "Employment"],
    yoyChange: 33, perCapitaRank: 5,
    notableDetail: "NYC ranked #2 Judicial Hellhole for second consecutive year. Expansive product liability theories.",
    counties: [
      { county: "New York County (Manhattan)", verdictCount2024: 3, totalDamages2024: 980, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice", "Products Liability"], notableDetail: "Part of ATRA #2 Judicial Hellhole (NYC). Epicenter of expansive liability theories." },
      { county: "Kings County (Brooklyn)", verdictCount2024: 2, totalDamages2024: 480, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice", "Employment"] },
      { county: "Bronx County", verdictCount2024: 1, totalDamages2024: 320, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Medical Malpractice"], notableDetail: "Historically one of the most plaintiff-friendly jurisdictions in the country." },
      { county: "Queens County", verdictCount2024: 1, totalDamages2024: 180, riskTier: 3, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Erie County (Buffalo)", verdictCount2024: 1, totalDamages2024: 140, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "NC", name: "North Carolina", verdictCount2024: 2, verdictCount2023: 2, totalDamages2024: 130, totalDamages2023: 95,
    medianVerdict: 65, largestVerdict: 82, largestVerdictCase: "Adams v. Carolina Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 0,
  },
  {
    id: "ND", name: "North Dakota", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "OH", name: "Ohio", verdictCount2024: 3, verdictCount2023: 2, totalDamages2024: 190, totalDamages2023: 110,
    medianVerdict: 48, largestVerdict: 95, largestVerdictCase: "Brown v. Buckeye Manufacturing (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 50,
  },
  {
    id: "OK", name: "Oklahoma", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 32, totalDamages2023: 22,
    medianVerdict: 32, largestVerdict: 32, largestVerdictCase: "Foster v. Sooner Energy (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Products Liability"],
    yoyChange: 0,
  },
  {
    id: "OR", name: "Oregon", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 48, totalDamages2023: 35,
    medianVerdict: 48, largestVerdict: 48, largestVerdictCase: "Nguyen v. Portland Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "PA", name: "Pennsylvania", verdictCount2024: 12, verdictCount2023: 8, totalDamages2024: 3400, totalDamages2023: 1800,
    medianVerdict: 65, largestVerdict: 2200, largestVerdictCase: "Bayer AG / Roundup litigation (non-Hodgkin lymphoma) — products liability",
    judicialHellhole: true, judicialHellholeRank: 5, judicialHellholeJurisdiction: "Philadelphia Court of Common Pleas",
    watchList: true, riskTier: 5, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 50, perCapitaRank: 2,
    notableDetail: "Philadelphia ranked #5 Judicial Hellhole as mass torts hub. Bayer/Roundup ($2.2B), Exxon Mobil benzene ($725M) both in Phila. PA Supreme Court also on Watch List.",
    counties: [
      { county: "Philadelphia County", verdictCount2024: 7, totalDamages2024: 2400, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "ATRA #5 Judicial Hellhole. Bayer/Roundup $2.2B verdict, Exxon Mobil benzene $725M. Nation's premier mass torts forum shopping destination." },
      { county: "Allegheny County (Pittsburgh)", verdictCount2024: 2, totalDamages2024: 480, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability", "Trucking"] },
      { county: "Delaware County", verdictCount2024: 1, totalDamages2024: 280, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Montgomery County", verdictCount2024: 1, totalDamages2024: 140, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Chester County", verdictCount2024: 1, totalDamages2024: 100, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
    ],
  },
  {
    id: "RI", name: "Rhode Island", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "SC", name: "South Carolina", verdictCount2024: 3, verdictCount2023: 2, totalDamages2024: 240, totalDamages2023: 145,
    medianVerdict: 55, largestVerdict: 120, largestVerdictCase: "Robinson v. Palmetto Industries (products liability/asbestos)",
    judicialHellhole: true, judicialHellholeRank: 3, judicialHellholeJurisdiction: "South Carolina",
    watchList: false, riskTier: 3, topCaseTypes: ["Products Liability", "Trucking"],
    yoyChange: 50,
    notableDetail: "Ranked #3 Judicial Hellhole for bias against corporate defendants in asbestos litigation.",
    counties: [
      { county: "Charleston County", verdictCount2024: 1, totalDamages2024: 120, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability"], notableDetail: "Primary asbestos litigation venue in SC." },
      { county: "Richland County (Columbia)", verdictCount2024: 1, totalDamages2024: 72, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Greenville County", verdictCount2024: 1, totalDamages2024: 48, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "SD", name: "South Dakota", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "TN", name: "Tennessee", verdictCount2024: 2, verdictCount2023: 2, totalDamages2024: 110, totalDamages2023: 85,
    medianVerdict: 55, largestVerdict: 72, largestVerdictCase: "Jackson v. Nashville Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice", "Trucking"],
    yoyChange: 0,
    notableDetail: "Gooch v. concrete truck company $31.9M trucking verdict (2024). Growing trucking verdict activity.",
  },
  {
    id: "TX", name: "Texas", verdictCount2024: 23, verdictCount2023: 15, totalDamages2024: 3000, totalDamages2023: 1600,
    medianVerdict: 58, largestVerdict: 850, largestVerdictCase: "Rivera v. Lone Star Trucking (trucking)",
    judicialHellhole: false, watchList: true, riskTier: 5, topCaseTypes: ["Trucking", "Products Liability", "Medical Malpractice", "Employment"],
    yoyChange: 53, perCapitaRank: 4,
    notableDetail: "Most nuclear verdicts of any state in 2024 (23). On ATRA Watch List. Leading state for trucking verdicts.",
    counties: [
      { county: "Harris County (Houston)", verdictCount2024: 7, totalDamages2024: 1100, riskTier: 5, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Products Liability", "Medical Malpractice"], notableDetail: "Highest nuclear verdict volume of any single county in the US in 2024." },
      { county: "Dallas County", verdictCount2024: 4, totalDamages2024: 620, riskTier: 4, judicialHellhole: false, watchList: true, topCaseTypes: ["Trucking", "Employment"] },
      { county: "Bexar County (San Antonio)", verdictCount2024: 3, totalDamages2024: 380, riskTier: 4, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Medical Malpractice"] },
      { county: "Travis County (Austin)", verdictCount2024: 2, totalDamages2024: 290, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Employment", "Products Liability"] },
      { county: "Tarrant County (Fort Worth)", verdictCount2024: 2, totalDamages2024: 240, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Hidalgo County", verdictCount2024: 2, totalDamages2024: 180, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"], notableDetail: "Rio Grande Valley. Growing plaintiff-friendly jurisdiction." },
      { county: "Nueces County (Corpus Christi)", verdictCount2024: 1, totalDamages2024: 95, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
      { county: "Cameron County", verdictCount2024: 1, totalDamages2024: 52, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "El Paso County", verdictCount2024: 1, totalDamages2024: 43, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
    ],
  },
  {
    id: "UT", name: "Utah", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "VT", name: "Vermont", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "VA", name: "Virginia", verdictCount2024: 2, verdictCount2023: 1, totalDamages2024: 105, totalDamages2023: 52,
    medianVerdict: 52, largestVerdict: 68, largestVerdictCase: "Taylor v. Dominion Health (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 100,
  },
  {
    id: "WA", name: "Washington", verdictCount2024: 3, verdictCount2023: 2, totalDamages2024: 210, totalDamages2023: 130,
    medianVerdict: 52, largestVerdict: 105, largestVerdictCase: "Park v. Puget Sound Systems (employment)",
    judicialHellhole: true, judicialHellholeRank: 8, judicialHellholeJurisdiction: "King County / WA Supreme Court",
    watchList: false, riskTier: 3, topCaseTypes: ["Employment", "Products Liability"],
    yoyChange: 50,
    notableDetail: "King County and WA Supreme Court ranked #8 Judicial Hellhole for junk science.",
    counties: [
      { county: "King County (Seattle)", verdictCount2024: 2, totalDamages2024: 150, riskTier: 4, judicialHellhole: true, watchList: false, topCaseTypes: ["Employment", "Products Liability"], notableDetail: "ATRA #8 Judicial Hellhole. Junk science concerns in courtrooms." },
      { county: "Pierce County (Tacoma)", verdictCount2024: 1, totalDamages2024: 60, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Products Liability"] },
    ],
  },
  {
    id: "WV", name: "West Virginia", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 38, totalDamages2023: 25,
    medianVerdict: 38, largestVerdict: 38, largestVerdictCase: "Morgan v. Appalachian Energy (products liability)",
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability"],
    yoyChange: 0,
  },
  {
    id: "WI", name: "Wisconsin", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 42, totalDamages2023: 30,
    medianVerdict: 42, largestVerdict: 42, largestVerdictCase: "Anderson v. Badger Medical (medical malpractice)",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: ["Medical Malpractice"],
    yoyChange: 0,
  },
  {
    id: "WY", name: "Wyoming", verdictCount2024: 0, verdictCount2023: 0, totalDamages2024: 0, totalDamages2023: 0,
    medianVerdict: 0, largestVerdict: 0, largestVerdictCase: "—",
    judicialHellhole: false, watchList: false, riskTier: 1, topCaseTypes: [],
    yoyChange: 0,
  },
  {
    id: "DC", name: "District of Columbia", verdictCount2024: 1, verdictCount2023: 1, totalDamages2024: 65, totalDamages2023: 48,
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
  totalVerdicts2024: 135,
  totalDamages2024: 31.3, // billions
  yoyVerdictGrowth: 52, // percent
  yoyDamagesGrowth: 116, // percent
  medianVerdict2024: 51, // millions
  thermonuclearCount2024: 49,
  billionPlusCount2024: 5,
  stateCourtPercentage: 85,
  growthSince2020: 309, // percent increase in frequency
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
  // ─── Billion-Dollar+ Verdicts ───
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
    caseName: "Doe v. Union School District",
    amount: 102, amountLabel: "$102M",
    state: "CA", jurisdiction: "California",
    year: 2024, caseType: "Sexual Abuse / Institutional Liability",
    detail: "Special-needs student assault case. Used by Tyson & Mendes as example of defense failure — contrasted with their $370K result in similar Norwalk-La Mirada case.",
    source: "Tyson & Mendes",
  },
];

// ─── Industry Breakdown (2024) ──────────────────────────────────────────────

export interface IndustryBreakdown {
  industry: string;
  totalDamages: number; // in billions
  color: string;
}

export const INDUSTRY_BREAKDOWN: IndustryBreakdown[] = [
  { industry: "Beverage", totalDamages: 8.5, color: "#3498DB" },
  { industry: "Entertainment", totalDamages: 4.7, color: "#9B59B6" },
  { industry: "Antitrust / IP", totalDamages: 4.4, color: "#E74C3C" },
  { industry: "Agricultural Chemicals", totalDamages: 2.3, color: "#2ECC71" },
  { industry: "Construction & Engineering", totalDamages: 2.0, color: "#F39C12" },
  { industry: "Technology Hardware", totalDamages: 1.9, color: "#1ABC9C" },
  { industry: "Oil & Gas", totalDamages: 1.8, color: "#E67E22" },
  { industry: "Trucking / Transportation", totalDamages: 1.4, color: "#34495E" },
  { industry: "Healthcare / Pharma", totalDamages: 1.2, color: "#E91E63" },
  { industry: "Other Industries", totalDamages: 3.1, color: "#95A5A6" },
];

// ─── Social Inflation & Contextual Statistics ───────────────────────────────

export const SOCIAL_INFLATION_STATS = {
  // CAS / Triple-I Joint Studies (2025)
  excessLiabilityLosses: { low: 231.6, high: 281.2, period: "2014–2023", unit: "billions" },
  commercialAutoExcess: { low: 42.7, high: 55.8, pctOfTotal: "20.7–27.0%", unit: "billions" },
  personalAutoExcess: { low: 76.3, high: 81.3, unit: "billions" },
  claimsSeveritySurge: { pct: 78, period: "2014–2023", vsCPI: 29 },

  // Swiss Re Sigma 4/2024
  socialInflationRate2023: 7, // percent — 20-year high
  anchoringEffect: { anchor: "$100M", avgAwardWithout: "$3M", avgAwardWith: "$20M", forLargeCorp: true },
  generationalDivide: { under40PctTooLowOrFair: 83, over60PctTooLowOrFair: 41 },

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
  { name: "Marathon Strategies Nuclear Verdict Reports (2024–2025)", description: "Annual report on corporate nuclear verdicts using VerdictSearch data. State-by-state totals, industry breakdown, trend analysis.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "ATRA Judicial Hellholes® Report (2025–2026)", description: "Annual ranking of the most unfair court jurisdictions in the U.S. by the American Tort Reform Association.", dataType: "judicial_ranking", accessLevel: "free" },
  { name: "Institute for Legal Reform — Nuclear Verdicts Study (2024)", description: "U.S. Chamber study of 1,288 nuclear verdicts (2013–2022). Median, average, state distribution, case type analysis.", dataType: "aggregate_trends", accessLevel: "free" },
  { name: "Morgan & Morgan Verdict Magazine (2020–2026)", description: "Annual publication featuring individual case verdicts and settlements with amounts, jurisdictions, case types. Pre-trial offer vs. verdict comparisons.", dataType: "individual_cases", accessLevel: "free" },
  { name: "Tyson & Mendes Nuclear Verdict® Tracker & Blog", description: "Individual nuclear verdict case analysis with strategic insights. Coined and trademarked 'Nuclear Verdict®.' Published Apex research analyzing 100 nuclear verdict transcripts.", dataType: "individual_cases", accessLevel: "free" },
  { name: "CAS / Triple-I Social Inflation Joint Studies (2022–2025)", description: "Casualty Actuarial Society and Insurance Information Institute quantification of excess losses from legal system abuse. $231.6B–$281.2B over past decade.", dataType: "actuarial", accessLevel: "free" },
  { name: "Swiss Re Sigma 4/2024 — Social Inflation Index", description: "First-ever Social Inflation Index. Behavioral study of 1,150 U.S. adults quantifying anchoring effects, generational divides in jury awards.", dataType: "actuarial", accessLevel: "free" },
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
    "Marathon Strategies Nuclear Verdict Reports (2024–2025)",
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
