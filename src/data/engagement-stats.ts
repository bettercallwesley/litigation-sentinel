// Mock engagement data — centralized for easy swap when real analytics come online.
// All numbers are hardcoded and deterministic (no Math.random).
//
// MAINTENANCE: Update these numbers every ~2 weeks with modest increases.
// Article reader counts live in newsletter-articles.ts (readers field on each article).
// SUNSET: Remove mock data and replace with real analytics ~June 2026 (3-4 months).

export const ENGAGEMENT_STATS = {
  briefingsCompleted: 214,
  subscriberCount: 1847,
  quarterLabel: "this quarter",
} as const;
