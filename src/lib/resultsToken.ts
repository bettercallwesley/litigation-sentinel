import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Stable, unguessable credential for /results/[token].
 *
 * The token is HMAC-SHA256 of the lowercased email under RESULTS_HMAC_SECRET,
 * truncated to 32 hex chars. Properties that matter:
 *  - Stable per email, no expiry: one link always resolves to that person's
 *    LATEST completion (a retake updates it, no stale-link hole).
 *  - Unforgeable without the secret, so the token is the only credential the
 *    results page needs (no auth wall).
 *
 * The secret is provisioned into every Vercel env by
 * scripts/provision_assessment_deploy.py on the COS side. If it is somehow
 * absent, signing throws (loud) and verifying fails closed.
 */
function secret(): string {
  const s = process.env.RESULTS_HMAC_SECRET;
  if (!s) {
    throw new Error("RESULTS_HMAC_SECRET absent; cannot sign or verify results token");
  }
  return s;
}

export function signResultsToken(email: string): string {
  return createHmac("sha256", secret())
    .update(email.toLowerCase().trim())
    .digest("hex")
    .slice(0, 32);
}

export function verifyResultsToken(email: string, token: string): boolean {
  if (!email || !token || token.length !== 32) return false;
  let expected: string;
  try {
    expected = signResultsToken(email);
  } catch {
    // Secret absent: fail closed. A results page can never open without the
    // secret that would have signed a legitimate token.
    return false;
  }
  const a = Buffer.from(expected);
  const b = Buffer.from(token);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
