export interface Milestone {
  id: string;
  name: string;
  weeks: string;
  description: string;
  teamTask: string;
  executiveTask: string;
  status: "completed" | "active" | "upcoming";
}

export const MILESTONES: Milestone[] = [
  {
    id: "data_audit",
    name: "Data Audit & Strategy",
    weeks: "Week 1-2",
    description: "Map existing systems, identify data sources, and choose the ingestion approach that works for your team.",
    teamTask: "Map all litigation data sources (spreadsheets, claims systems, email) and document what exists",
    executiveTask: "Review data landscape summary and approve ingestion approach",
    status: "completed",
  },
  {
    id: "case_update_design",
    name: "Case Update Design",
    weeks: "Week 2-3",
    description: "Build milestone-specific update templates and configure Case Clerk AI for your document types.",
    teamTask: "Configure Case Update templates for your case types and milestones",
    executiveTask: "Review update templates — ensure they capture what you need for executive reporting",
    status: "active",
  },
  {
    id: "precedent_load",
    name: "Precedent Data Load",
    weeks: "Week 3-6",
    description: "Import historical closed case data to build your Precedent database for benchmarking and outcome analysis.",
    teamTask: "Prepare and upload closed case data (CSV or Case Clerk AI document extraction)",
    executiveTask: "Preview initial Precedent Dashboard — see attorney performance and outcome quality metrics",
    status: "upcoming",
  },
  {
    id: "docket_setup",
    name: "Docket Setup",
    weeks: "Week 5-8",
    description: "Connect open case monitoring and build your real-time Docket Dashboard for active case management.",
    teamTask: "Load active cases and configure docket categories, alerts, and exception thresholds",
    executiveTask: "Review Docket Dashboard — identify which exception views are most useful for your workflow",
    status: "upcoming",
  },
  {
    id: "intelligence_layer",
    name: "Intelligence Layer",
    weeks: "Week 7-10",
    description: "Configure Chambers AI for portfolio queries, Chronicle for case timelines, and Case Clerk AI for automated extraction.",
    teamTask: "Train Case Clerk AI on your document formats and test Chambers queries against your data",
    executiveTask: "Test Chambers — ask your portfolio real questions and validate the answers",
    status: "upcoming",
  },
  {
    id: "full_activation",
    name: "Full Activation",
    weeks: "Week 10-12",
    description: "All systems live. Executive dashboards active. Outside counsel connected. Intelligence flowing.",
    teamTask: "Verify all integrations, run final data quality checks, confirm outside counsel access",
    executiveTask: "Executive sign-off on dashboards. Schedule board-ready reporting walkthrough",
    status: "upcoming",
  },
];
