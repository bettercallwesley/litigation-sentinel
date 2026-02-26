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

## LinkedIn Content Creation System

### File Architecture
All LinkedIn campaign knowledge lives in `.claude/` — auto-loaded by Claude Code:

```
.claude/
├── rules/                              # Auto-loaded every session
│   ├── linkedin-2026-algorithm.md      # 360 Brew algorithm, engagement signals, format performance
│   ├── content-voice-guide.md          # Wesley's voice, anti-AI patterns, vocabulary blacklist, content pillars
│   └── content-topic-priorities.md     # Ranked topics, impression data, topic-specific angles, image strategy
└── skills/                             # Loaded on demand
    ├── linkedin-post/SKILL.md          # Drafts individual LinkedIn posts → /linkedin-post
    ├── weekly-content-plan/SKILL.md    # Plans weekly content calendar → /weekly-content-plan
    └── content-audit/SKILL.md          # Monthly audit of content system → /content-audit
```

### How to Use
- **Draft a single post**: Ask Claude to "draft a LinkedIn post about [topic]" or invoke `/linkedin-post`
- **Plan the week**: Ask Claude to "plan this week's LinkedIn content" or invoke `/weekly-content-plan`
- **Audit the system**: Ask Claude to "audit the content system" or invoke `/content-audit` (monthly)
- **All drafts require Wes approval** before publishing — Claude presents drafts, never auto-publishes

### Keeping Knowledge Current
- When new LinkedIn algorithm data emerges, update `.claude/rules/linkedin-2026-algorithm.md`
- When voice/tone refinements are identified, update `.claude/rules/content-voice-guide.md`
- When new content pillars are added, update the pillars section in the voice guide
- When topic performance data changes, update `.claude/rules/content-topic-priorities.md`
- Data sources for posts live in `src/data/nuclear-verdicts.ts` and `src/data/newsletter-articles.ts`

### Content Quality Gates
- Every post runs through the vocabulary blacklist (no AI-sounding words)
- Every post must map to a defined content pillar
- Every post must be optimized for saves (the #1 algorithm signal in 2026)
- Every post must use "How I" personal proof framing over generic "How To"

## Improving Claude's Knowledge — The Enhancement Process

When you want Claude to be better at something (content creation, campaign strategy, anything), follow this process:

### Step 1: Identify the Knowledge Gap
Ask: "What do you currently know about [topic]? What rules/skills do you have for it?"
Claude will check `.claude/rules/`, `.claude/skills/`, and `CLAUDE.md` and tell you exactly what exists.

### Step 2: Research Best Practices
Ask Claude to research what's working for others:
- "Search for the best Claude Code skills/rules for [topic]"
- "What are the top community-shared CLAUDE.md patterns for [use case]?"
- "Find the most effective [LinkedIn/marketing/writing] frameworks from [source]"

Key community resources:
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — Curated skills, hooks, and orchestration patterns
- [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) — Community best practices
- [Claude Code official docs](https://code.claude.com/docs/en/memory) — Memory management guide
- [Cranot/claude-code-guide](https://github.com/Cranot/claude-code-guide) — Auto-updated comprehensive guide

### Step 3: Create or Update the Right File
| What you're adding | Where it goes | Why |
|---|---|---|
| Knowledge Claude should ALWAYS have | `.claude/rules/[topic].md` | Auto-loaded every session |
| A repeatable workflow/task | `.claude/skills/[name]/SKILL.md` | Loaded on demand, invocable |
| Project-wide rules (shared with team) | `CLAUDE.md` | Checked into git, everyone sees it |
| Personal preferences (not shared) | `CLAUDE.local.md` | Git-ignored, only your sessions |

### Step 4: Test and Iterate
- Use the new rules/skills in a real task
- Note what Claude gets wrong or misses
- Update the relevant file immediately
- Commit the change so it persists across sessions

### Key Principle
**If you tell Claude something important and don't put it in a file, it's gone next session.** Every insight, correction, or preference that should persist must be written to `.claude/rules/`, `.claude/skills/`, or `CLAUDE.md`.
