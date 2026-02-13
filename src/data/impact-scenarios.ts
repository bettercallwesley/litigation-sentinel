export interface ImpactScenario {
  pct: number;
  label: string;
  color: string;
  spend: string;
  outcomes: string;
  description: string;
}

export const IMPACT_SCENARIOS: ImpactScenario[] = [
  {
    pct: 5,
    label: "Conservative",
    color: "#FBBF24",
    spend: "$420K",
    outcomes: "3-5 cases",
    description: "Early settlements on clear-value cases identified by Precedent comps",
  },
  {
    pct: 10,
    label: "Expected",
    color: "#3B82F6",
    spend: "$840K",
    outcomes: "8-12 cases",
    description: "Systematic attorney performance optimization + data-driven settlement timing",
  },
  {
    pct: 15,
    label: "Optimized",
    color: "#34D399",
    spend: "$1.26M",
    outcomes: "15-20 cases",
    description: "Full portfolio intelligence with proactive intervention at every milestone",
  },
];
