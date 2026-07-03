# Workstream P — live prod verification (2026-07-02)

Deploy: https://litigation-sentinel-1rshqimcl-case-glide.vercel.app (aliased www.litigationsentinel.com)
Merge SHA: a53a4c7 (PR #39, squash)

Playwright screenshots could not be captured through the MCP screenshot path on
the briefing pages (custom-font load exceeds the tool's 5s call cap: it logs
"fonts loaded" then times out on encode/return). The accessibility snapshots
below are the authoritative functional proof — they carry the exact rendered
text and structure of the live prod page.

## P3 — Briefing -> Council program selector (low score -> Council)

Walked the live assessment at /briefing?src=playwright-verify, answered every
question with the lowest option (score 1). Results page reported **1.0 / 5.0,
Level 1**. Unsealed the file, then clicked the terminal CTA
**"See your two paths forward ->"** (the F1 change; formerly router.push to /demo).

The NEXT phase (PostBriefingPage) rendered live:

- Rail: CONTEXT > ASSESSMENT > RESULTS > NEXT (NEXT active — activeIndex remap works)
- Heading: "Two Paths to Litigation Intelligence"
- Recommendation: "Based on your assessment, we recommend starting with the **Council**."
- Council card carries the "Recommended for You" ribbon (low-score path -> Council, as specced)
- Founder-led copy live (no pricing, no "specialist" tone, checkmark entity fixed)
- Buttons: "Choose Council" / "Choose Trial"
- Secondary /demo link present: "Or send Wes your details and he will reply personally" -> /url: /demo

## P1 — capture ledger canary

`[CAPTURE_LEDGER_OK] tool=demo-request gate=demo-request` confirmed in prod runtime logs
after POSTing a synthetic canary to /api/demo-request.

## P2 — durable event sink

`[EVENT_SINK_OK] event=subscribe_success_view` confirmed in prod runtime logs
after POSTing to /api/track-event.

## P4 — subscribe-success forward chain

Served prod bundle chunk /_next/static/chunks/779-1b362853f5122391.js (HTTP 200)
contains: briefing?src=subscribe-success, nuclear-verdicts?src=subscribe-success,
"See where your desk sits on the national curve", and the durable event names
subscribe_success_view / subscribe_success_nuclear_click.

## Curl status

/briefing 200, /council 200, /nuclear-verdicts 200. Footer /council link and
"Council Program" label present in served article HTML.
