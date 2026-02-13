export interface EducationItem {
  week: number;
  title: string;
  type: "Video" | "Workshop" | "Hands-On" | "Certification" | "Walkthrough" | "Strategy";
  duration: string;
}

export const TEAM_TRACK: EducationItem[] = [
  { week: 1, title: "CaseGlide Platform Overview", type: "Video", duration: "15 min" },
  { week: 2, title: "Case Clerk AI: Extracting Case Data from Attorney Reports", type: "Workshop", duration: "30 min" },
  { week: 3, title: "Building Your First Case Update Template", type: "Hands-On", duration: "45 min" },
  { week: 4, title: "Data Quality: Ensuring Clean Imports", type: "Workshop", duration: "30 min" },
  { week: 6, title: "Using Docket Dashboards for Daily Monitoring", type: "Hands-On", duration: "30 min" },
  { week: 8, title: "Case Clerk AI Advanced: Training Extraction", type: "Workshop", duration: "45 min" },
  { week: 10, title: "Chambers & Chronicle for Ongoing Intelligence", type: "Hands-On", duration: "30 min" },
  { week: 12, title: "Full Activation Certification", type: "Certification", duration: "60 min" },
];

export const EXECUTIVE_TRACK: EducationItem[] = [
  { week: 2, title: "Executive Dashboard Walkthrough", type: "Walkthrough", duration: "20 min" },
  { week: 4, title: "Reading Precedent: Attorney Performance Insights", type: "Strategy", duration: "25 min" },
  { week: 6, title: "Docket Intelligence: Your Weekly Portfolio Briefing", type: "Walkthrough", duration: "20 min" },
  { week: 10, title: "Chambers & Chronicle: Asking Your Portfolio Real Questions", type: "Strategy", duration: "30 min" },
  { week: 12, title: "Board-Ready Reporting with CaseGlide", type: "Strategy", duration: "30 min" },
];
