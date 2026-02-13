export interface DataField {
  name: string;
}

export interface DataCategory {
  id: string;
  name: string;
  icon: string;
  fields: string[];
}

export const DATA_CATEGORIES: DataCategory[] = [
  {
    id: "case_id",
    name: "Case Identification",
    icon: "📁",
    fields: ["Case name", "Parties", "Jurisdiction", "Venue", "Filing date", "Case type", "Claim amount"],
  },
  {
    id: "party_counsel",
    name: "Party & Counsel",
    icon: "👥",
    fields: ["Plaintiff info", "Defense counsel", "Opposing counsel", "Expert witnesses", "Mediators", "Judges"],
  },
  {
    id: "financial",
    name: "Financial",
    icon: "💰",
    fields: ["Reserves", "Incurred", "Paid", "Budget", "Legal spend by phase"],
  },
  {
    id: "timeline_status",
    name: "Timeline & Status",
    icon: "📅",
    fields: ["Current status", "Key dates", "Next milestone", "Statute of limitations", "Important deadlines"],
  },
  {
    id: "case_assessment",
    name: "Case Assessment",
    icon: "📊",
    fields: ["Liability %", "Damages assessment", "Settlement range", "Risk rating", "Recommended strategy"],
  },
  {
    id: "outcomes_history",
    name: "Outcomes & History",
    icon: "📈",
    fields: ["Resolution type", "Settlement amount", "Verdict", "Duration", "Key learnings"],
  },
];

export const DATA_SOURCE_OPTIONS = [
  {
    id: "csv",
    name: "CSV Upload",
    icon: "📤",
    description: "Structured data from existing systems",
  },
  {
    id: "ai",
    name: "Manual Entry + Case Clerk AI",
    icon: "🤖",
    description: "Drag in documents, AI extracts structured data",
  },
  {
    id: "hybrid",
    name: "Hybrid",
    icon: "🔄",
    description: "CSV for what's available, Case Clerk AI for documents, manual for gaps",
  },
];
