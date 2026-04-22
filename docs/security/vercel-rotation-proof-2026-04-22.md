# Vercel Breach Response — Rotation Proof
*2026-04-22*

## Rotations executed

### APOLLO_API_KEY
- **Action:** DELETED from Vercel (all 3 environments). Not rotated because deployed code (`src/`) has zero references — dead env var.
- **Verification:** `vercel env ls` shows APOLLO_API_KEY absent post-removal.
- **Apollo API key at source:** NOT rotated. Still lives in `.env.local` for COS automation. Out of Vercel breach scope.

### BEEHIIV_API_KEY
- **Action:** Rotated at source (Beehiiv dashboard). New key "claude 3" created by Wes 2026-04-22 ~10:53 ET.
- **New value deployed to:** Vercel env (production + preview, --sensitive flag) + `~/Desktop/litigation-sentinel/.env.local`.
- **Old keys in Beehiiv:** Wes deleted "claude" (2026-04-22 ~10:56), then "Production" + "Claude 2" (~11:06). Only "claude 3" remains active.
- **Smoke test:** `POST https://www.litigationsentinel.com/api/subscribe` with throwaway email → HTTP 200 `{"success":true}` (confirms new key live in serverless function runtime; no redeploy needed because Vercel injects env at invocation time, not build time).
- **401 proof:** `GET https://api.beehiiv.com/v2/publications` with OLD key value → HTTP 401. Confirmed 2026-04-22 11:07 ET.

### BEEHIIV_PUBLICATION_ID
- **Action:** Re-added as Sensitive in production + preview (same value — not a secret, flag hygiene only).
- **Note:** Vercel disallows Sensitive env vars in `development` environment, so this var now exists in prod + preview only. Not an issue because litigation-sentinel dev workflow doesn't require hitting live Beehiiv.

## Residual actions for future session

- **Google OAuth client `110671459871-30f1spbu0hptbs60cb4vsmv79i7bbvqj`** — revoke at myaccount.google.com/permissions. Wes interactive. Not executed this session.
- **Vercel account-level token inventory** — Wes has ~7 active tokens. Deployment audit was clean (no unknown deployers), so no urgency. Hygiene cleanup deferred.
- **GitHub↔Vercel OAuth re-auth** — SKIPPED. Deployment audit clean; no evidence of compromise warrants the friction.

## Audit finding: no indicators of compromise in this project

- 20+ deploys in last 50d: all authored by `bettercallwesley` (Wes). Zero unknown deployers.
- No failed deployments. All build durations normal (22-35s).
- No anomalies in deployment metadata.

## Notes for next rotation cycle

1. Enforce **one Beehiiv API key per publication**. Past sessions accumulated 4 keys because each session minted new ones instead of locating the existing one. The `beehiiv-ops.md` skill already says "pull from `.env.local`, do not hardcode" — but didn't prohibit key creation sprawl. Consider adding: "Before creating a new Beehiiv API key, verify the one in `.env.local` is not working via a `GET /v2/publications` probe."
2. Default ALL new Vercel env vars to `--sensitive` flag at creation. The 3 vars that existed on this project were all plain-Encrypted, which is what put them in breach scope.
3. STATE.md fidelity: the pre-staged Phase 3 rotation list (SUPABASE_*, OPENAI_*, RESEND_API_KEY, webhook secrets) was speculative. None of those existed in Vercel for this project. Future research should read `vercel env ls` before writing rotation lists.
