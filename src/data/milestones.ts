export interface Milestone {
  id: string;
  name: string;
  week: string;
  description: string;
  teamTask: string;
  execTask: string;
  status: "completed" | "active" | "upcoming";
}

export const MILESTONES: Milestone[] = [
  { id: "kickoff", name: "Kickoff & Data Discovery", week: "Week 1-2", description: "Map data landscape, identify sources, define priority fields for dashboards", teamTask: "Share system access, identify data owners, export sample data", execTask: "Align on dashboard priorities — what do you most want to see?", status: "active" },
  { id: "case_updates", name: "Case Update Design", week: "Week 2-3", description: "Build custom milestone templates for your case types and configure Case Clerk AI extraction fields", teamTask: "Review milestone templates, identify key document types, test Case Updates", execTask: "Review feature demos: Case Updates and Case Clerk AI document extraction", status: "upcoming" },
  { id: "precedent_load", name: "Precedent Data Load", week: "Week 3-6", description: "Import closed case data via best-fit method — CSV, integration, or Case Clerk AI extraction from documents", teamTask: "Execute data transfer, validate imported records, fill gaps", execTask: "First look at Precedent Dashboard with real data — attorney performance preview", status: "upcoming" },
  { id: "docket_load", name: "Docket Data Load", week: "Week 5-8", description: "Import open case data, configure exception rules, set up intervention triggers", teamTask: "Import open matters, configure budget thresholds, aging rules, milestone tracking", execTask: "First look at Docket Dashboard — see your open portfolio with real exception flags", status: "upcoming" },
  { id: "ai_config", name: "Intelligence Layer", week: "Week 7-10", description: "Configure Chambers AI queries, Chronicle timeline generation, and Case Clerk AI extraction optimization", teamTask: "Train Case Clerk AI on your document types, test Chambers queries, review Chronicle output", execTask: "Deep dive: Chambers & Chronicle — ask your portfolio real questions, generate board-ready timelines", status: "upcoming" },
  { id: "activation", name: "Full Activation & Readout", week: "Week 10-12", description: "Executive readout with live dashboards, ROI assessment, and implementation plan for full deployment", teamTask: "Final data validation, user training, workflow optimization", execTask: "Executive readout: see the full picture — Precedent + Docket + AI, with your real data", status: "upcoming" },
];
