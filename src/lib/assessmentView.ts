import type { AssessmentResult, PillarKey } from "@/lib/assessmentCapture";

/**
 * Presentation layer shared by the results page and the print-HTML PDF route so
 * the two can never drift on labels or copy. Pure, no I/O.
 */

export const DIM_LABELS: Record<string, string> = {
  open_visibility: "Open Case Visibility",
  open_intervention: "Intervention and Settlement Readiness",
  closed_outcomes: "Outcome Measurement",
  attorney_value: "Attorney Performance and Selection",
  ai_insight: "On-Demand Intelligence",
};

export const PILLAR_LABELS: Record<PillarKey, string> = {
  docket: "Open Docket Command",
  precedent: "Closed-Case Precedent",
  ai: "On-Demand Intelligence",
};

const LEVEL_DESCRIPTOR: Record<number, { title: string; blurb: string }> = {
  1: {
    title: "Reactive",
    blurb: "Litigation is managed case by case, after the fact. The biggest gains come from basic visibility across the open docket.",
  },
  2: {
    title: "Aware",
    blurb: "You see the docket but act late. Earlier intervention and consistent outcome measurement are the next unlock.",
  },
  3: {
    title: "Managed",
    blurb: "Solid fundamentals in place. The edge now is turning closed-case history and attorney performance into forward decisions.",
  },
  4: {
    title: "Proactive",
    blurb: "You intervene early and measure outcomes. On-demand intelligence across the portfolio is what separates you from best-in-class.",
  },
  5: {
    title: "Predictive",
    blurb: "Litigation is run on data end to end. The focus shifts to compounding the advantage and defending it.",
  },
};

export function levelDescriptor(level: number): { title: string; blurb: string } {
  return LEVEL_DESCRIPTOR[level] || LEVEL_DESCRIPTOR[3];
}

/** Greeting name when the completion carried no name (the assessment POST does
 * not collect one): the capitalized first token of the email local-part. */
export function firstNameFromEmail(email: string): string {
  const local = (email.split("@")[0] || "there").trim();
  const token = local.split(/[._+-]/)[0] || local;
  if (!token) return "there";
  return token.charAt(0).toUpperCase() + token.slice(1);
}

export function pillarBars(result: AssessmentResult): { label: string; score: number; pct: number }[] {
  return (Object.keys(result.pillar_scores) as PillarKey[]).map((k) => ({
    label: PILLAR_LABELS[k],
    score: result.pillar_scores[k],
    pct: Math.round((result.pillar_scores[k] / 5) * 100),
  }));
}

export function weakestLabels(result: AssessmentResult): string[] {
  return result.weakest_dims.map((d) => DIM_LABELS[d] || d);
}
