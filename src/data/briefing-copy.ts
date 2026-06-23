// Verdict-voice copy for the Executive Briefing results (2026-06-23 rebuild).
// Display strings only. Data keys (MATURITY_LEVELS, pillar ids, question ids)
// are untouched, so score math and Beehiiv field mapping are unaffected.
// House rule: no em dash anywhere.

// ─── Maturity display labels, reworded to verdict voice ──────────────────────
// `word` is the short verdict for the "Level N. {word}." line; `line` is the
// one-sentence reading shown under the score reveal.
export const VERDICT_MATURITY: Record<number, { word: string; line: string }> = {
  1: { word: "Reactive", line: "You learn the file is a problem when someone else tells you." },
  2: { word: "Fragmented", line: "The signal exists, scattered across inboxes and spreadsheets." },
  3: { word: "Structured", line: "You see most of it, after the fact, not in time to change it." },
  4: { word: "In command", line: "You see the file move while you can still act on it." },
  5: { word: "Ahead of the verdict", line: "The system flags the case before you would have looked." },
};

// ─── Per-pillar dossier consequence matrix (pillar x score-band) ─────────────
// Band: low = levels 1 to 2, mid = level 3, high = levels 4 to 5. Deterministic
// lookup, one consequence sentence per pillar per band, Sentinel trial-drama
// voice. The docket-low, precedent-high, and ai-low entries are the council's
// verbatim samples; the rest are authored in the same voice.
export type ScoreBand = "low" | "mid" | "high";

export function bandFor(level: number): ScoreBand {
  if (level <= 2) return "low";
  if (level === 3) return "mid";
  return "high";
}

export const PILLAR_DOSSIER_LABEL: Record<string, string> = {
  docket: "OPEN DOCKET VISIBILITY",
  precedent: "OUTCOME PRECEDENT",
  ai: "ON-DEMAND INTELLIGENCE",
};

// Lowercase phrase used inside the synthesizing close line.
export const PILLAR_PHRASE: Record<string, string> = {
  docket: "open-docket visibility",
  precedent: "outcome precedent",
  ai: "on-demand intelligence",
};

export const DOSSIER_CONSEQUENCE: Record<string, Record<ScoreBand, string>> = {
  docket: {
    low: "You find out a case went sideways when outside counsel tells you. By then the email that became the verdict is months old. This is the Mendez problem, not bad facts, bad timing.",
    mid: "You can see most of the docket, but on a lag. The budget breach and the stalled negotiation surface in the monthly report, not the week they happen. A week is enough time for a case to turn.",
    high: "You see the file move while you can still act on it. Budget, aging, and the firm running up your exposure surface as they break, not in hindsight. That is the difference between steering a case and reading its obituary.",
  },
  precedent: {
    low: "You know what every case cost you. You cannot say which ones you actually won. Spend is not outcome, and a cheap loss is still a loss you will repeat.",
    mid: "You track outcome and spend, but you cannot calibrate them by venue, by judge, or by the attorney who ran the file. Without that, every close looks the same, and the expensive ones hide in plain sight.",
    high: "You can tell a good close from an expensive one. That is rarer than you would think, most departments can only tell you what they spent.",
  },
  ai: {
    low: "The answer the board wants exists somewhere in your portfolio. Today it takes a person and a day to find it. The verdict curve does not wait for the report.",
    mid: "You have dashboards, but the narrative and the timeline are still assembled by hand. The morning of the board meeting, that hand belongs to your best analyst, and the question changes faster than the deck.",
    high: "You query the portfolio and the timeline builds itself, with a human to check it. The board's question gets an answer in the room, not a promise to follow up.",
  },
};

// ─── Closing synthesis line, keyed to strongest and weakest pillar ───────────
export function synthesisLine(
  strongestPillar: string,
  weakestPillar: string,
  firstVerdicts: number,
  lastVerdicts: number
): string {
  return `Your file is strongest on ${PILLAR_PHRASE[strongestPillar]} and most exposed on ${PILLAR_PHRASE[weakestPillar]}. On a curve that went from ${firstVerdicts} nuclear verdicts to ${lastVerdicts} in five years, the exposure is the one that compounds.`;
}
