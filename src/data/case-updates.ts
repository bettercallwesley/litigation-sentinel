export interface CaseUpdate {
  id: string;
  name: string;
  icon: string;
  fields: string[];
}

export const CASE_UPDATES: CaseUpdate[] = [
  { id: "ica", name: "Initial Case Evaluation", icon: "📋", fields: ["Liability assessment", "Damages assessment", "Initial strategy", "Key parties", "Venue analysis", "Budget estimate"] },
  { id: "discovery", name: "Discovery Update", icon: "🔍", fields: ["Documents produced/received", "Key findings", "Revised liability", "Discovery timeline", "Upcoming tasks"] },
  { id: "plaintiff_depo", name: "Plaintiff Deposition", icon: "🎤", fields: ["Deposition date", "Presentation assessment", "Impact on liability", "Impact on damages", "Key admissions", "Narrative"] },
  { id: "defendant_depo", name: "Defendant Deposition", icon: "🎙️", fields: ["Deposition date", "Presentation assessment", "Impact on defense", "Key testimony", "Upcoming tasks"] },
  { id: "msj", name: "Motion for Summary Judgment", icon: "📜", fields: ["Filing date", "Grounds", "Court ruling", "Impact on strategy", "Next steps"] },
  { id: "mediation", name: "Mediation", icon: "🤝", fields: ["Mediator", "Date", "Demand/offer exchange", "Settlement authority", "Outcome", "Recommended next steps"] },
  { id: "trial", name: "Trial", icon: "⚖️", fields: ["Trial date", "Jury selection notes", "Key rulings", "Verdict/outcome", "Post-trial motions"] },
  { id: "experts", name: "Expert Reports", icon: "🧪", fields: ["Expert name/specialty", "Opinion summary", "Impact on case value", "Rebuttal strategy"] },
];
