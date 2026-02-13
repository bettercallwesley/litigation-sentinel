export interface DataCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  fields: string[];
  sources: string[];
}

export const DATA_CATEGORIES: DataCategory[] = [
  {
    id: "incident",
    name: "Incident / Claim Data",
    icon: "📋",
    description: "Loss details, claim numbers, dates of loss, claimant info, coverage type, reserves",
    fields: ["Claim Number", "Date of Loss", "Claimant Name", "Coverage Type", "Initial Reserve", "Adjuster Assigned", "Line of Business"],
    sources: ["Claims Management System", "TPA Platform", "Spreadsheets"],
  },
  {
    id: "case",
    name: "Case / Litigation Data",
    icon: "⚖️",
    description: "Parties, attorneys, venue, judge, liability assessment, damages, strategy, negotiations, milestones",
    fields: ["Plaintiff Attorney/Firm", "Defense Attorney/Firm", "Venue/Court", "Judge", "Liability Assessment", "Damages Assessment", "Negotiation History", "Strategy", "Key Milestones", "Case Stage"],
    sources: ["Matter Management System", "Outside Counsel Reports", "Attorney Invoices", "Internal Notes"],
  },
  {
    id: "billing",
    name: "Billing / Legal Spend Data",
    icon: "💰",
    description: "Attorney invoices, fee breakdowns, expense categories, billing rates, total spend by case",
    fields: ["Total Legal Spend", "Fee Breakdown by Phase", "Billing Rates", "Expense Categories", "Invoice History", "Budget vs. Actual"],
    sources: ["E-Billing System", "AP/Finance System", "Legal Bill Review Platform", "Spreadsheets"],
  },
  {
    id: "documents",
    name: "Documents & Communications",
    icon: "📄",
    description: "Lawyer reports, mediation briefs, demand letters, settlement agreements, expert reports",
    fields: ["Attorney Status Reports", "Mediation Briefs", "Demand/Offer Letters", "Settlement Agreements", "Expert Reports", "Deposition Summaries"],
    sources: ["Email/Document Management", "Outside Counsel Portals", "Shared Drives", "Physical Files"],
  },
];

export interface TransferMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  effort: string;
  speed: string;
  bestFor: string;
}

export const TRANSFER_METHODS: TransferMethod[] = [
  { id: "csv", name: "CSV/Excel Export", icon: "📊", description: "Export from current system, import into CaseGlide", effort: "Low", speed: "Fast", bestFor: "Bulk historical data with structured fields" },
  { id: "integration", name: "API Integration", icon: "🔗", description: "Direct system-to-system connection via CaseGlide integration tools", effort: "Medium", speed: "Ongoing", bestFor: "Real-time sync with claims or billing systems" },
  { id: "manual_plus_ai", name: "Manual Entry + Case Clerk AI", icon: "🤖", description: "Create cases with basic data, drag in lawyer reports — Case Clerk AI extracts the rest", effort: "Medium", speed: "Moderate", bestFor: "When structured data is limited but documents exist" },
  { id: "hybrid", name: "Hybrid Approach", icon: "⚡", description: "CSV for what's available, Case Clerk AI for what's in documents, manual for gaps", effort: "Varies", speed: "Flexible", bestFor: "Most organizations — combines all methods strategically" },
];
