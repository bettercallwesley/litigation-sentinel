# CaseGlide Platform — Project Rules

## Architecture
- Next.js 14 with App Router, TypeScript, Tailwind CSS
- All design tokens live in src/components/design-system/tokens.ts
- Full specification is in SPEC.md — reference it before building any feature
- All data models live in src/data/ as typed exports
- Each app (sentinel, briefing, council, trial) has its own component folder

## Design Rules
- Headings: Source Serif 4 (Google Fonts). NEVER Inter, Roboto, Arial, or system fonts.
- Body: DM Sans (Google Fonts)
- Dark theme for apps (Briefing, Council, Trial): midnight #0A0E1A background
- Light theme for newsletter (Sentinel): #FAFAF8 background
- Cards: 14px border-radius, 1px solid border, surface background
- Win95 mode: 0px border-radius, beveled borders, MS Sans Serif 11px
- Mobile breakpoint: 700px
- All grids must use responsive classes that collapse on mobile

## Naming (CRITICAL — never deviate)
- Advisor: **Liana Rodriguez** (never Martinez)
- Document AI: **Case Clerk AI** (never Clerk.ai)
- AI Chat: **Chambers** or **Chambers AI**
- Timeline AI: **Chronicle** or **Chronicle AI**
- Newsletter: **Litigation Sentinel**
- Assessment tool: **Executive Briefing**
- Onboarding: **Council Program**
- Proving ground: **Trial**

## Component Patterns
- FadeIn wrapper with delay prop for staggered animations
- Card component with optional onClick for interactive cards
- Badge component with color + glow props
- All navigation buttons must actually navigate (no dead links)
- Theme toggle fixed at bottom-right of every app page
- Win95 mode must transform the ENTIRE UI, not just colors

## Quality Standards
- Every page must be mobile-responsive
- Every button/link must have a working target
- No Math.random() in rendered content (deterministic data only)
- Before/After toggle in Trial defaults to "After" (the sell)
- Test in both Fortune 500 and Insurance Company (Win95) modes

## Reference Documents (READ before any GTM or content task)
- **GTM-PLAN-V3.md** — Full GTM plan **with V3.1 amendment (newsletter-first strategy)**. READ IT at the start of any GTM-related session. The V3.1 amendment near the top overrides specific parts of V3 — read it carefully.
- **DAILY-PROMPTS.md** — Phone-friendly daily execution prompts for Phase 1-2. Reference for one-time setup tasks.
- **docs/caseglide-master-context-memo-v2.md** — Product positioning, messaging pillars, buyer personas, competitive landscape, voice/tone guide. READ before writing any outbound copy, newsletter content, LinkedIn posts, or sales materials.
- **docs/caseglide-demo-script.md** — 25-minute demo script (McDonald's hot coffee case). READ before any meeting prep or demo-related work.
- **SPEC.md** — Platform specification. READ before building any feature.
- **.env** — API keys for Apollo, Pipedrive, Typefully, Beehiiv (gitignored, local only)
- **.env.example** — Template showing required keys

## GTM Execution Context (CRITICAL — read every session)
- CaseGlide sells **Litigation Intelligence** to F500 GCs, CLOs, CROs, VP Claims, and insurance executives.
- **Primary objective:** Determine by May 31, 2026 whether F500 corporate legal and insurance are viable growth markets for CaseGlide.
- **V3.1 STRATEGY (Feb 21, 2026):** Newsletter-first GTM. The Litigation Sentinel website is the PRIMARY destination for ALL outbound. Build the destination first, then drive traffic. See GTM-PLAN-V3.md V3.1 amendment for full details.
- **Campaign priority order (V3.1 updated):** 1) Litigation Sentinel Newsletter Website (must be compelling before outbound launches), 2) Apollo Volume Engine (emails drive to newsletter, not direct briefing pitch), 3) Pipedrive Pipeline, 4) LinkedIn Organic via Typefully (link in comment, not body), 5) LinkedIn Ads (drive to newsletter), 6) Promoter Marketing.
- **The funnel:** Apollo/LinkedIn/Ads → Litigation Sentinel Website → Newsletter Subscription → Weekly Newsletter (embedded ads) → Executive Briefing (email gate) / Council Landing Page (email capture) / Trial Landing Page (email capture) → Briefing → Council → Trial → Contract
- **Weekly newsletter cadence:** Published every Monday. Claude researches Wed, writes Fri, Wes reviews Fri, Claude sends Mon.
- **Sales funnel stages:** Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract
- **Team:** Wes Todd (CEO, 10 hrs/week GTM), Liana Rodriguez (VP Client Ops, demos), Claude (automation engine — API-driven execution)
- **API Stack:** Apollo API (search, enrich, enroll, auto-send), Pipedrive API (deals, pipeline, contacts, webhooks), Typefully API (LinkedIn post scheduling), Beehiiv API (newsletter subscribers, email sends). Keys stored in .env file.
- **Automation-first rules:** Wes approves TEMPLATES and STRATEGY once. Claude executes autonomously within approved framework. No per-item approval bottleneck. Claude never modifies active sequences, sends from personal email, or changes caseglide.com without Wes approval.
- **Claude Chrome prompts:** For non-API tasks (creating Apollo sequences, LinkedIn InMail, Sales Navigator, Campaign Manager), Claude generates atomic prompts for Wes to paste into Claude Chrome.
- **Custom slash commands (in .claude/commands/):** `/monday-scan` | `/post-prep` | `/weekly-report` | `/meeting-prep [company]` | `/enroll-batch` | `/pipeline-review` — These are the Phase 3 recurring prompts. For Phase 1-2 one-time tasks, see DAILY-PROMPTS.md.
- **Steve Kiernan** departed March 1. All GTM execution is Wes + Claude after that date.
- **Content pillars (current, Feb 2026):** Litigation funding transparency, RICO fraud ecosystem, AI in courts, nuclear verdicts/venue risk, plaintiff bar tactics. Content must be CURRENT — what F500 GCs care about THIS week.
- **LinkedIn rules (V3.1):** No links in post body (throttled). Link goes in first comment. End with a question.
- **Email gate rules (V3.1):** Executive Briefing requires email to get report. Council and Trial link to landing pages with email capture, NOT directly to apps.
