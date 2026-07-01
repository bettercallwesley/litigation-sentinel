import { put, list } from "@vercel/blob";
import { createHash } from "node:crypto";

/**
 * Per-completion durable store for the Litigation Sentinel executive
 * assessment. Mirrors the src/lib/captureLedger.ts Blob pattern, but with a
 * HARD-durability contract that inverts the original bug: the caller
 * (briefing-capture) treats a false return as a fatal 500, never a silent
 * success. captureLedger was reporting-only and fail-soft, which is how
 * Gabriel Mayer's completion (2026-06-24) was silently discarded.
 *
 * One immutable blob per completion at assessments/{emailHash}/{captured_at}.json.
 * The latest by captured_at is the visitor's current result, so a retake
 * updates the same stable results URL with no stale-link hole. Blobs are
 * public (unguessable url) and read by COS via the authenticated Blob list API.
 */

export interface AssessmentAnswers {
  open_visibility: number;
  open_intervention: number;
  closed_outcomes: number;
  attorney_value: number;
  ai_insight: number;
}

export type PillarKey = "docket" | "precedent" | "ai";

export interface AssessmentResult {
  email: string;
  captured_at: string;
  gate_type: "assessment-results";
  answers: AssessmentAnswers;
  pillar_scores: Record<PillarKey, number>;
  maturity_level: number;
  weakest_dims: string[];
  weakest_pillar: PillarKey;
  attribution: Record<string, unknown>;
}

export const ANSWER_KEYS: (keyof AssessmentAnswers)[] = [
  "open_visibility",
  "open_intervention",
  "closed_outcomes",
  "attorney_value",
  "ai_insight",
];

/** sha256(email)[:16] namespaces one person's completions under a prefix COS
 * lists to read them all. Same hashing on both repos (COS uses the identical
 * 16-hex truncation), so the key is portable across the TS writer and the
 * Python reader. */
export function emailHash(email: string): string {
  return createHash("sha256").update(email.toLowerCase().trim()).digest("hex").slice(0, 16);
}

/**
 * The two env prerequisites for a complete, linkable assessment deliverable.
 * Exported so the loud-500 guard in the route and its unit test assert the
 * exact same condition (the store to persist, the secret to sign the link).
 */
export function assessmentPrereqsPresent(env: NodeJS.ProcessEnv = process.env): boolean {
  return Boolean(env.BLOB_READ_WRITE_TOKEN && env.RESULTS_HMAC_SECRET);
}

/** Newest completion by captured_at, or null for an empty set. Pure and
 * unit-tested; getLatestAssessment uses it after reading the blobs. */
export function pickLatest(records: AssessmentResult[]): AssessmentResult | null {
  if (!records || records.length === 0) return null;
  return [...records].sort((x, y) => (x.captured_at < y.captured_at ? 1 : -1))[0];
}

function clampScore(n: unknown): number {
  const v = typeof n === "number" && Number.isFinite(n) ? n : 0;
  return Math.min(5, Math.max(1, Math.round(v)));
}

/**
 * Deterministic result math (unit-tested).
 *  - pillar_scores are the MEAN of member dimensions, kept on the 1-5 scale so
 *    the three pillar bars are directly comparable (ai is a single dimension).
 *  - maturity_level is round(mean of the 5), clamped 1-5.
 *  - weakest_dims is the bottom-3 dimensions by score (stable order).
 *  - weakest_pillar is the lowest pillar mean.
 */
export function computeAssessmentResult(
  email: string,
  answers: Record<string, unknown>,
  attribution: Record<string, unknown>
): AssessmentResult {
  const a: AssessmentAnswers = {
    open_visibility: clampScore(answers.open_visibility),
    open_intervention: clampScore(answers.open_intervention),
    closed_outcomes: clampScore(answers.closed_outcomes),
    attorney_value: clampScore(answers.attorney_value),
    ai_insight: clampScore(answers.ai_insight),
  };
  const mean = (xs: number[]) => xs.reduce((s, x) => s + x, 0) / xs.length;
  const round1 = (x: number) => Math.round(x * 10) / 10;
  const pillar_scores: Record<PillarKey, number> = {
    docket: round1(mean([a.open_visibility, a.open_intervention])),
    precedent: round1(mean([a.closed_outcomes, a.attorney_value])),
    ai: round1(a.ai_insight),
  };
  const maturity_level = Math.min(
    5,
    Math.max(1, Math.round(mean(ANSWER_KEYS.map((k) => a[k]))))
  );
  const weakest_dims = [...ANSWER_KEYS]
    .map((k) => ({ k, score: a[k] }))
    .sort((x, y) => x.score - y.score)
    .slice(0, 3)
    .map((d) => d.k as string);
  const weakest_pillar = (Object.entries(pillar_scores).sort(
    (x, y) => x[1] - y[1]
  )[0][0]) as PillarKey;
  return {
    email: email.toLowerCase().trim(),
    captured_at: new Date().toISOString(),
    gate_type: "assessment-results",
    answers: a,
    pillar_scores,
    maturity_level,
    weakest_dims,
    weakest_pillar,
    attribution: attribution && typeof attribution === "object" ? attribution : {},
  };
}

/**
 * Write ONE immutable blob for this completion. Returns false (never throws) on
 * any failure; the caller MUST treat false as a hard 500. A stable key (no
 * random suffix) with allowOverwrite covers the rare same-millisecond
 * double-fire without duplicating rows, and never silently skips a real retake
 * (a later captured_at is always a new key).
 */
export async function captureAssessmentResult(result: AssessmentResult): Promise<boolean> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("[ASSESSMENT_CAPTURE_ERROR] BLOB_READ_WRITE_TOKEN absent");
    return false;
  }
  try {
    const key = `assessments/${emailHash(result.email)}/${result.captured_at}.json`;
    await put(key, JSON.stringify(result), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      token,
    });
    console.log(`[ASSESSMENT_CAPTURE_OK] hash=${emailHash(result.email)}`);
    return true;
  } catch (err) {
    console.error("[ASSESSMENT_CAPTURE_ERROR]", err instanceof Error ? err.message : "error");
    return false;
  }
}

/**
 * Latest completion for an email, or null when the prefix lists zero blobs.
 * Lists assessments/{hash}/, fetches each public blob, returns the newest by
 * captured_at. Returns null (not throw) on read failure so the results page
 * renders a clean notFound() rather than a 500.
 */
export async function getLatestAssessment(email: string): Promise<AssessmentResult | null> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;
  try {
    const prefix = `assessments/${emailHash(email)}/`;
    const records: AssessmentResult[] = [];
    let cursor: string | undefined;
    do {
      const page = await list({ prefix, cursor, token });
      for (const blob of page.blobs) {
        try {
          const res = await fetch(blob.url, { cache: "no-store" });
          if (res.ok) records.push((await res.json()) as AssessmentResult);
        } catch {
          // Skip one unreadable blob; never fail the whole read.
        }
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    return pickLatest(records);
  } catch (err) {
    console.error("[ASSESSMENT_READ_ERROR]", err instanceof Error ? err.message : "error");
    return null;
  }
}
