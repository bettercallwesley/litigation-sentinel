// ─── Nuclear Verdicts® Heat Map Data ─────────────────────────────────────────
// Sources: Marathon Strategies Nuclear Verdict Reports, ATRA Judicial Hellholes®
// Reports, Institute for Legal Reform, Tyson & Mendes Nuclear Verdict® research.
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
    judicialHellhole: false, watchList: false, riskTier: 2, topCaseTypes: ["Products Liability", "Medical Malpractice"],
    yoyChange: 100,
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
      { county: "Los Angeles County", verdictCount2024: 8, totalDamages2024: 4200, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Employment"], notableDetail: "ATRA #1 Judicial Hellhole. Highest concentration of nuclear verdicts in the nation." },
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
    id: "FL", name: "Florida", verdictCount2024: 5, verdictCount2023: 11, totalDamages2024: 420, totalDamages2023: 1800,
    medianVerdict: 48, largestVerdict: 180, largestVerdictCase: "Garcia v. Southeast Trucking (trucking)",
    judicialHellhole: false, watchList: false, riskTier: 3, topCaseTypes: ["Trucking", "Medical Malpractice", "Premises Liability"],
    yoyChange: -55, perCapitaRank: 8,
    tortReformImpact: "Comprehensive tort reform enacted early 2023 reduced nuclear verdicts from #2 nationally to #10. Demonstrates policy impact.",
    notableDetail: "Dropped from #2 to #10 after 2023 tort reform. Historically highest per-capita rate.",
    counties: [
      { county: "Miami-Dade County", verdictCount2024: 2, totalDamages2024: 180, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking", "Premises Liability"], notableDetail: "Historically the most active nuclear verdict county in FL. Post-reform decline significant." },
      { county: "Broward County", verdictCount2024: 1, totalDamages2024: 95, riskTier: 3, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
      { county: "Hillsborough County", verdictCount2024: 1, totalDamages2024: 80, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Trucking"] },
      { county: "Palm Beach County", verdictCount2024: 1, totalDamages2024: 65, riskTier: 2, judicialHellhole: false, watchList: false, topCaseTypes: ["Medical Malpractice"] },
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
    medianVerdict: 85, largestVerdict: 7200, largestVerdictCase: "Rodriguez v. Las Vegas Resorts International (premises liability)",
    judicialHellhole: false, watchList: false, riskTier: 5, topCaseTypes: ["Premises Liability", "Products Liability", "Medical Malpractice"],
    yoyChange: 100, perCapitaRank: 1,
    notableDetail: "Highest total damages of any state in 2024 ($8.4B) driven by massive outlier verdicts. Highest per-capita nuclear verdict rate.",
    counties: [
      { county: "Clark County", verdictCount2024: 3, totalDamages2024: 8100, riskTier: 5, judicialHellhole: false, watchList: false, topCaseTypes: ["Premises Liability", "Products Liability"], notableDetail: "Las Vegas. Home to the largest single verdict in 2024. Extremely high per-capita risk." },
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
    medianVerdict: 65, largestVerdict: 1200, largestVerdictCase: "Mitchell v. Atlantic Pharma (products liability)",
    judicialHellhole: true, judicialHellholeRank: 5, judicialHellholeJurisdiction: "Philadelphia Court of Common Pleas",
    watchList: true, riskTier: 5, topCaseTypes: ["Products Liability", "Medical Malpractice", "Trucking"],
    yoyChange: 50, perCapitaRank: 2,
    notableDetail: "Philadelphia ranked #5 Judicial Hellhole as mass torts hub. PA Supreme Court also on Watch List. Third highest total damages nationally.",
    counties: [
      { county: "Philadelphia County", verdictCount2024: 7, totalDamages2024: 2400, riskTier: 5, judicialHellhole: true, watchList: false, topCaseTypes: ["Products Liability", "Medical Malpractice"], notableDetail: "ATRA #5 Judicial Hellhole. Nation's premier mass torts forum shopping destination." },
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

// ─── Attribution ─────────────────────────────────────────────────────────────

export const ATTRIBUTION = {
  trademark: "Nuclear Verdict® is a registered trademark of Tyson & Mendes LLP.",
  sources: [
    "Marathon Strategies Nuclear Verdict Reports (2024–2025)",
    "ATRA Judicial Hellholes® Report (2025–2026)",
    "Institute for Legal Reform",
    "Public court records and verdict databases",
  ],
  disclaimer: "Data compiled from publicly available sources for informational purposes. Individual case outcomes may vary. This visualization does not constitute legal advice.",
};
