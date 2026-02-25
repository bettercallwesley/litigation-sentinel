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

## Deployment & Git
- GitHub repo: `bettercallwesley/litigation-sentinel` (private)
- GitHub push is pre-configured — Claude can push directly without user intervention
- Vercel auto-deploys from GitHub pushes (target: litigation-sentinel.vercel.app)
- Primary domain: LitigationSentinel.com
- Default branch: `main`

### Claude → Production Workflow
1. **Develop** on `claude/*` feature branches (required by sandbox — direct push to `main` returns 403)
2. **Push** the branch: `git push -u origin claude/<branch-name>`
3. **Auto-merge**: `.github/workflows/auto-merge-claude.yml` triggers on every `claude/**` push — creates a PR and squash-merges it into `main` automatically
4. **Vercel deploys** from `main` → changes go live at LitigationSentinel.com
- No manual PR creation needed — push to a `claude/` branch and the Action handles the rest
- If the Action is not yet enabled, the user must merge the workflow file to `main` first (one-time setup)

## Nuclear Verdicts® Heat Map — Data Sources
- Route: `/nuclear-verdicts` — interactive SVG US map with state-level data
- Data file: `src/data/nuclear-verdicts.ts` — all state entries, notable verdicts, industry breakdown, social inflation stats
- Component: `src/components/sentinel/NuclearVerdictsHeatMap.tsx` — map + analytics sections
- State detail: `src/components/sentinel/NuclearVerdictStateDetail.tsx` — click-to-expand panel
- Nuclear Verdict® is a registered trademark of Tyson & Mendes LLP — always attribute
- Key data sources (all verified, free to use — verdict facts are public court records):
  - Marathon Strategies — primary 2024 data (135 verdicts, $31.3B, 52% YoY growth)
  - Morgan & Morgan — individual FL-centric case details (amounts, jurisdictions)
  - Tyson & Mendes LLP — aggregate stats, Nuclear Verdict® trademark holder
  - CAS / Triple-I — $231B excess tort costs (actuarial analysis)
  - Swiss Re — Social Inflation Index
  - ATRI, Sedgwick, Doctors Company, TransRe, KCIC, Travelers, Gen Re, Allianz
  - TopVerdict.com — searchable verdict database (free)
- "Smoldering settlements" — term NOT found in any public source; do not use
