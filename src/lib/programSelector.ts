/**
 * F1 program selector (Workstream P).
 *
 * The post-briefing program recommendation: a lower maturity average points to
 * the guided 90-day Council activation; a higher average points to the hands-on
 * 30-day Trial. Extracted from PostBriefingPage so the boundary is unit-tested
 * (a "use client" component cannot be imported by the node:test rig).
 *
 * Threshold is 2.5 inclusive toward Council: avg <= 2.5 -> "council", else "trial".
 */
export type Program = "council" | "trial";

export const COUNCIL_THRESHOLD = 2.5;

/** Recommend a program from a pre-computed average maturity score (1..5). */
export function recommendProgram(avgScore: number): Program {
  return avgScore <= COUNCIL_THRESHOLD ? "council" : "trial";
}

/** Average of the answer scores over `questionCount` questions. Mirrors the
 * ResultsPage / route.ts math: sum of answers divided by the number of
 * assessment questions (not the number of answers present). */
export function averageScore(
  answers: Record<string, number>,
  questionCount: number
): number {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  return total / questionCount;
}
