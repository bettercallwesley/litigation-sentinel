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
- **GTM-PLAN-V3.md** — Full GTM plan. READ IT at the start of any GTM-related session. (V2 archived in GTM-PLAN-V2.md.)
- **docs/caseglide-master-context-memo-v2.md** — Product positioning, messaging pillars, buyer personas, competitive landscape, voice/tone guide. READ before writing any outbound copy, newsletter content, LinkedIn posts, or sales materials.
- **docs/caseglide-demo-script.md** — 25-minute demo script (McDonald's hot coffee case). READ before any meeting prep or demo-related work.
- **SPEC.md** — Platform specification. READ before building any feature.
- **.env** — API keys for Apollo, Pipedrive, Typefully (gitignored, local only)
- **.env.example** — Template showing required keys

## GTM Execution Context (CRITICAL — read every session)
- CaseGlide sells **Litigation Intelligence** to F500 GCs, CLOs, CROs, VP Claims, and insurance executives.
- **Primary objective:** Determine by May 31, 2026 whether F500 corporate legal and insurance are viable growth markets for CaseGlide.
- **Campaign priority order:** 1) Apollo Volume Engine (API-automated email at scale), 2) Pipedrive Pipeline (API-automated CRM), 3) Litigation Sentinel Newsletter (holding bin), 4) LinkedIn Organic via Typefully API, 5) LinkedIn Ads, 6) Promoter Marketing. InMail is deprioritized.
- **Two conversion destinations:** Executive Briefing (direct CTA) and Litigation Sentinel Newsletter (holding bin)
- **Sales funnel:** Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract
- **Team:** Wes Todd (CEO, 10 hrs/week GTM), Liana Rodriguez (VP Client Ops, demos), Claude (automation engine — API-driven execution)
- **API Stack:** Apollo API (search, enrich, enroll, auto-send), Pipedrive API (deals, pipeline, contacts, webhooks), Typefully API (LinkedIn post scheduling). Keys stored in .env file.
- **Automation-first rules:** Wes approves TEMPLATES and STRATEGY once. Claude executes autonomously within approved framework. No per-item approval bottleneck. Claude never modifies active sequences, sends from personal email, or changes caseglide.com without Wes approval.
- **Claude Chrome prompts:** For non-API tasks (creating Apollo sequences, LinkedIn InMail, Sales Navigator, Campaign Manager), Claude generates atomic prompts for Wes to paste into Claude Chrome.
- **Shortcuts:** "Monday scan" | "Post prep" | "InMail queue" | "Enroll batch" | "Promoter outreach" | "Weekly report" | "Pipeline review" | "Meeting prep [prospect]"
- **Steve Kiernan** departed March 1. All GTM execution is Wes + Claude after that date.
