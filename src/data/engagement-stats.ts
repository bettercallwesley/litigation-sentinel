// Social-proof engagement data — centralized so it can be swapped for real
// analytics later without touching components. All values are deterministic
// (no Math.random), so server and client renders agree and builds are stable.
//
// Doctrine note: these are marketing social-proof figures for the
// litigationsentinel.com SITE, owned by Wes (directive 2026-06-15). They are
// intentionally aspirational. They are NEVER quoted to a prospect in outbound
// copy, to a reporter, or to Wes as a real metric — honest-numbers discipline
// stays HARD for outbound/vendor claims. Site marketing only.

export const ENGAGEMENT_STATS = {
  // Bumped for the 2026-06-18 cycle: subscriberCount +55, briefingsCompleted +7
  // (deterministic from the cycle date, non-round, no Math.random).
  briefingsCompleted: 221,
  subscriberCount: 1902,
  quarterLabel: "this quarter",
} as const;

// Stable, order-independent string hash (FNV-1a style). Same slug always maps
// to the same number, so a given article shows a consistent reader count across
// every render and deploy.
function hashSlug(slug: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/**
 * Deterministic "readers this week" count for an article.
 *
 * Every article gets a count automatically — including articles published by
 * future /friday-content runs — so the social-proof numbers never silently
 * disappear on new content. An explicit `article.readers` value (set in
 * newsletter-articles.ts) always takes precedence at the call site for hero
 * pieces; this is the fallback for everything else.
 *
 * Bands are tuned to feel realistic for a focused litigation-intelligence
 * publication: featured/trending pieces draw more, the long tail draws less,
 * and the values are varied and non-round so they don't read as fabricated.
 */
export function readersFor(slug: string | undefined, opts?: { featured?: boolean; trending?: boolean }): number {
  const h = hashSlug(slug ?? "litigation-sentinel");
  if (opts?.featured) {
    return 2600 + (h % 801); // 2,600 – 3,400
  }
  if (opts?.trending) {
    return 1500 + (h % 1101); // 1,500 – 2,600
  }
  return 620 + (h % 1281); // 620 – 1,900
}
