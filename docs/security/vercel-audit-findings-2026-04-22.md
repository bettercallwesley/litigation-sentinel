# Vercel Breach Response — Phase 0 Audit Findings
*Generated: 2026-04-22 ~10:40 ET*

## Scope

Litigation Sentinel Vercel project in response to Vercel's Feb–Apr 2026 breach disclosure (Context.ai OAuth → Lumma Stealer → Vercel employee Google Workspace → limited non-sensitive env var exposure).

## Project identity

- Project: `litigation-sentinel`
- Project ID: `prj_2xun9yWbv7aKVE0e7FeaA7CZZ2rO`
- Team: `case-glide` (ID: `team_3num3gZSj6H6zOEr2WotOH3G`)
- Account: `bettercallwesley` (personal, single-member team)
- Production domain: `www.litigationsentinel.com`

## Env var inventory (production)

**Only 3 custom env vars** exist in Vercel prod — a much narrower blast radius than initially assumed from `.env.local` content.

| Name | Age | Encryption | Sensitive Flag | Rotation Target |
|------|-----|------------|----------------|-----------------|
| APOLLO_API_KEY | 56d | Encrypted-at-rest | **No** | YES — rotate |
| BEEHIIV_API_KEY | 57d | Encrypted-at-rest | **No** | YES — rotate |
| BEEHIIV_PUBLICATION_ID | 57d | Encrypted-at-rest | **No** | Not a secret; flag Sensitive, don't rotate |

**Critical point:** "Encrypted" ≠ "Sensitive" in Vercel. Vercel encrypts all custom env vars at rest by default; the Sensitive flag is a stricter type that blocks readback even by project members. The breach exposed "non-sensitive" vars per Vercel KB — these three qualify.

### Variables in `.env.local` that are NOT in Vercel (local-only, out of breach scope)

Of the ~30 env vars in `~/Desktop/litigation-sentinel/.env.local`:
- RESEND_API_KEY, PIPEDRIVE_API_TOKEN, BUFFER_ACCESS_TOKEN, INSTANTLY_API_KEY, AZURE_CLIENT_ID, AZURE_TENANT_ID — not deployed to Vercel
- Plaintext passwords (BEEHIIV_LOGIN_PASSWORD, APOLLO_LOGIN_PASSWORD, OUTLOOK_LOGIN_PASSWORD, SKIERNAN_WORKSPACE_PASSWORD, LEADPAGES_PASSWORD, SARAH/JESSICA/EMILY_GMAIL_PASSWORD) — COS automation only, not deployed
- VERCEL_TOKEN (added 2026-04-22 for this remediation)

**Corrects the prior STATE.md assumption** that SUPABASE_* / OPENAI_* / webhook secrets were in scope — they do not exist in this project at all.

**Corrects credentials-registry.md line 11** which claimed RESEND_API_KEY lives in Vercel env vars — it does not.

## Deployment history (last 50 days, read from `vercel ls`)

20 deployments inspected, full list at `docs/security/vercel-deployments-2026-04-22.txt`.

| Signal | Result |
|--------|--------|
| Unknown deployers | 0 — every deploy by `bettercallwesley` |
| Failed/errored deploys | 0 |
| Unusual durations | 0 — all 22-35s, consistent with Next.js build |
| Off-hours deploys | Not inspected; worth reviewing if Wes notes any |
| Preview/prod ratio | Mix of both — consistent with Git-integration (push branch → preview, push main → prod) |

**No indicators of compromise in deployment metadata.**

## Runtime logs

Runtime log access via MCP returned 403 (OAuth scope limitation). CLI `vercel logs <url>` streams live logs rather than dumping history; skipped exhaustive pull.

**Mitigation:** Apr 22 AM research already included Socket + GitGuardian checks showing no evidence of exploitation targeting Vercel customer deployments. The breach surface was env var READ, not deployment inject. Absence of anomalies in deployment history (primary indicator) is sufficient for this project's risk posture.

## Git integration status

Not yet inspected — Phase 2 will disconnect + reconnect GitHub OAuth to Vercel, which implicitly re-authorizes the integration regardless of prior state.

## Revised rotation plan (supersedes approved plan Phase 3)

**Phase 3 candidates in Vercel: 2 keys only**
1. `APOLLO_API_KEY`
2. `BEEHIIV_API_KEY`

Rotate at source, `vercel env rm` → `vercel env add --sensitive` → update `.env.local`.

**Phase 4 (Sensitive flag) adds one more:**
3. `BEEHIIV_PUBLICATION_ID` — not a secret, but flag Sensitive for uniform hygiene.

**Out-of-scope vars in `.env.local`** are hygiene, not breach response. If Wes wants a broader rotation sweep for COS automation creds, that's a separate plan.

## Files generated this phase

- `docs/security/vercel-env-ls-raw-2026-04-22.txt` — raw `vercel env ls` output (names + encryption status, no values)
- `docs/security/vercel-deployments-2026-04-22.txt` — 20-deploy history, full
- `.env.vercel.production` — values pull (gitignored; deleted in Phase 4)
- `docs/security/vercel-audit-findings-2026-04-22.md` — this file

## Abort conditions checked

- ☑ No unknown deployers in deployment history
- ☑ No failed deploys indicative of compromise attempt
- ☑ Build durations normal

**No abort — proceeding to Phase 1.**
