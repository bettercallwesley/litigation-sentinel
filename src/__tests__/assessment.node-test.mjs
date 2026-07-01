import { test } from "node:test";
import assert from "node:assert/strict";

// Node 24 strips TypeScript types on import, so these .ts sources run directly.
// The @/ path alias is a bundler/tsconfig concern and is not resolved by Node,
// so we import by relative path. These modules pull in only node:crypto and (for
// assessmentCapture) @vercel/blob at import time; the tested functions are pure
// and never touch the network.
process.env.RESULTS_HMAC_SECRET = "test-secret-do-not-use-in-prod-0000000000000000";

const { signResultsToken, verifyResultsToken } = await import("../lib/resultsToken.ts");
const { computeAssessmentResult, pickLatest, assessmentPrereqsPresent } = await import(
  "../lib/assessmentCapture.ts"
);

test("results token: deterministic sign, verify accepts and rejects tampering", () => {
  const email = "Jane.Doe@Example.com";
  const t1 = signResultsToken(email);
  const t2 = signResultsToken("jane.doe@example.com  ");
  assert.equal(t1, t2, "sign is case- and whitespace-insensitive and deterministic");
  assert.equal(t1.length, 32, "token is 32 hex chars");

  assert.ok(verifyResultsToken(email, t1), "correct token verifies");
  assert.ok(!verifyResultsToken(email, t1.slice(0, 31) + "0"), "tampered token rejected");
  assert.ok(!verifyResultsToken("other@example.com", t1), "wrong email rejected");
  assert.ok(!verifyResultsToken(email, ""), "empty token rejected");
  assert.ok(!verifyResultsToken(email, t1 + "extra"), "wrong-length token rejected");
});

test("computeAssessmentResult: pillars, level, and bottom-3 for [1,2,3,4,5]", () => {
  const r = computeAssessmentResult(
    "Ceo@Prospect.com",
    {
      open_visibility: 1,
      open_intervention: 2,
      closed_outcomes: 3,
      attorney_value: 4,
      ai_insight: 5,
    },
    {}
  );
  assert.equal(r.email, "ceo@prospect.com", "email lowercased");
  assert.equal(r.gate_type, "assessment-results");
  assert.equal(r.pillar_scores.docket, 1.5);
  assert.equal(r.pillar_scores.precedent, 3.5);
  assert.equal(r.pillar_scores.ai, 5);
  assert.equal(r.maturity_level, 3, "round(mean(1..5)) = 3");
  assert.deepEqual(r.weakest_dims, ["open_visibility", "open_intervention", "closed_outcomes"]);
  assert.equal(r.weakest_pillar, "docket");
  assert.equal(typeof r.captured_at, "string");
});

test("computeAssessmentResult: clamps out-of-range and non-numeric answers to 1-5", () => {
  const r = computeAssessmentResult(
    "x@y.com",
    { open_visibility: 9, open_intervention: 0, closed_outcomes: "bad", attorney_value: 5, ai_insight: 3 },
    {}
  );
  assert.equal(r.answers.open_visibility, 5, "9 clamps to 5");
  assert.equal(r.answers.open_intervention, 1, "0 clamps to 1");
  assert.equal(r.answers.closed_outcomes, 1, "non-numeric clamps to 1");
});

test("pickLatest returns newest by captured_at, null on empty", () => {
  assert.equal(pickLatest([]), null);
  const mk = (ts) => ({ captured_at: ts, email: "a@b.com" });
  const latest = pickLatest([
    mk("2026-06-01T00:00:00.000Z"),
    mk("2026-06-24T12:00:00.000Z"),
    mk("2026-06-10T00:00:00.000Z"),
  ]);
  assert.equal(latest.captured_at, "2026-06-24T12:00:00.000Z");
});

test("assessmentPrereqsPresent: true only when BOTH env vars are set", () => {
  assert.ok(assessmentPrereqsPresent({ BLOB_READ_WRITE_TOKEN: "x", RESULTS_HMAC_SECRET: "y" }));
  assert.ok(!assessmentPrereqsPresent({ RESULTS_HMAC_SECRET: "y" }), "missing blob token -> false");
  assert.ok(!assessmentPrereqsPresent({ BLOB_READ_WRITE_TOKEN: "x" }), "missing secret -> false");
  assert.ok(!assessmentPrereqsPresent({}), "neither -> false");
});
