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

## GTM Execution Context (CRITICAL — read every session)
- The full GTM Plan v2 is in **GTM-PLAN-V2.md** at the project root. READ IT at the start of any GTM-related session.
- CaseGlide sells **Litigation Intelligence** to F500 GCs, CLOs, CROs, VP Claims, and insurance executives.
- **Four campaigns:** A (Apollo email volume), B (LinkedIn precision InMail + organic), C (Promoter marketing to media/podcasts), D (LinkedIn ads)
- **Two conversion destinations:** Executive Briefing (direct CTA) and Litigation Sentinel Newsletter (holding bin)
- **Sales funnel:** Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract
- **Team:** Wes Todd (CEO, 10 hrs/week GTM), Liana Rodriguez (VP Client Ops, demos), Claude (automation, content drafting, research, meeting prep)
- **Tools:** Apollo, Sales Navigator, LinkedIn, Campaign Manager, Pipedrive, Leadpages, WordPress, Litigation Sentinel platform
- **Rules:** Never send InMail, publish LinkedIn post, change Apollo copy, or send Promoter outreach without Wes approval. All other actions (drafting, research, reporting, meeting prep) run autonomously.
- **Shortcuts:** "Monday scan" | "Post prep" | "InMail queue" | "Enroll batch" | "Promoter outreach" | "Weekly report" | "Pipeline review" | "Meeting prep [prospect]"
- **Primary objective:** Determine by May 31, 2026 whether F500 corporate legal and insurance are viable growth markets for CaseGlide.
- **Steve Kiernan** departed March 1. All GTM execution is Wes + Claude after that date.
