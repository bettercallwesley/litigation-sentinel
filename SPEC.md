# CaseGlide Platform — Complete Specification for Claude Code

## Table of Contents
1. [Getting Started with Claude Code](#1-getting-started-with-claude-code)
2. [Project Overview](#2-project-overview)
3. [Architecture & File Structure](#3-architecture--file-structure)
4. [Design System](#4-design-system)
5. [App 1: Litigation Sentinel (Home / Newsletter)](#5-litigation-sentinel)
6. [App 2: Executive Briefing](#6-executive-briefing)
7. [App 3: Council Program](#7-council-program)
8. [App 4: Trial Platform](#8-trial-platform)
9. [Shared Components](#9-shared-components)
10. [Theme Toggle System (Win95)](#10-theme-toggle-system)
11. [Mobile Responsiveness](#11-mobile-responsiveness)
12. [Data Models](#12-data-models)
13. [Build & Deployment](#13-build--deployment)

---

## 1. Getting Started with Claude Code

### What is Claude Code?
Claude Code is a command-line tool that lets you tell Claude what to build and it writes the code directly in your project files. You type natural language, it writes code. Think of it as having a senior developer sitting next to you who you talk to in plain English.

### Installation
```bash
# Install Claude Code (requires Node.js 18+)
npm install -g @anthropic-ai/claude-code

# Navigate to your project folder
cd ~/Desktop/CaseGlide/caseglide-platform

# Start Claude Code
claude
```

### Key Commands You'll Use

**Plan Mode (use this FIRST):**
```
/plan Build the CaseGlide unified platform based on the spec in SPEC.md
```
Plan mode makes Claude read the spec, think through the architecture, and propose an implementation plan BEFORE writing any code. Always start here. Review the plan, then say "execute" or adjust.

**Regular Mode:**
Just type what you want:
```
Build the Litigation Sentinel newsletter home page with the editorial design from the spec
```

**Other Useful Commands:**
- `/cost` — see how much API usage you've consumed
- `/compact` — compress context if conversation gets long
- `claude --resume` — resume a previous session
- Type `q` or `exit` to quit

### Best Practices for You (Non-Technical Founder)

1. **Always start with `/plan`** — Don't jump into building. Let Claude propose the architecture first. Read it. Adjust if needed.

2. **Work in phases** — Don't say "build everything." Instead:
   - Phase 1: Project setup, design system, shared components
   - Phase 2: Litigation Sentinel home page
   - Phase 3: Executive Briefing
   - Phase 4: Council Program  
   - Phase 5: Trial Platform
   - Phase 6: Theme toggle (Win95), mobile polish, final QA

3. **Use the CLAUDE.md file** — Create a file called `CLAUDE.md` in your project root. Claude Code reads this automatically on every session. Put project rules there:
   ```markdown
   # CaseGlide Platform Rules
   
   - Always use the design system tokens from src/design-system.ts
   - All components must be mobile-responsive (breakpoint: 700px)
   - Use Source Serif 4 for headings, DM Sans for body text
   - Never use Inter, Roboto, or generic system fonts
   - All text naming: "Liana Rodriguez" (not Martinez), "Case Clerk AI" (not Clerk.ai)
   - Full spec is in SPEC.md — always reference it
   ```

4. **Review before accepting** — Claude Code shows you diffs. Read them. If something looks wrong, say "wait, that's not right — the newsletter should use a light background not dark."

5. **Test frequently** — After each phase, run the app:
   ```bash
   npm run dev
   ```
   Open the browser, click through everything, check mobile view (use browser dev tools).

6. **Use git** — Claude Code works best with git:
   ```bash
   git init
   git add -A
   git commit -m "Phase 1: design system and shared components"
   ```
   This way you can always roll back if something breaks.

### Project Setup (Tell Claude Code This First)

```
Create a new Next.js 14 project with TypeScript and Tailwind CSS. Use the App Router. 
Set up the project structure from the SPEC.md file I've placed in the root directory.
Use React with client-side state management (no backend needed yet).
Install these additional packages: framer-motion for animations.
```

---

## 2. Project Overview

### What We're Building
A unified web platform with four integrated applications:

1. **Litigation Sentinel** — A premium editorial newsletter that serves as the home page and marketing engine. Hosted at www.LitigationSentinel.com. Covers litigation strategy, litigation tech, case analysis, and how-to guides. Contains embedded CTAs for the three CaseGlide software tools.

2. **Executive Briefing** — A 6-question litigation intelligence readiness assessment for C-suite legal executives (CLO, GC, CRO). Self-service assessment → personalized maturity score → briefing with peer benchmarks → scheduling.

3. **Council Program** — A 90-day client activation platform with two tracks: executive dashboard visibility, and operations team data onboarding. Five sections: Overview, Data Readiness, Activation Timeline, Education, Dashboard Preview.

4. **Trial** — A 30-day proving ground where the client's 10 hardest cases are fully activated in CaseGlide. Produces before/after comparisons, AI-powered strategy recommendations, and portfolio impact projections.

### Target Users
- **Primary:** Fortune 500 General Counsel, Chief Legal Officers, Chief Risk Officers
- **Secondary:** Insurance company litigation leadership
- **Operations:** Litigation operations managers and claims directors

### Business Objective
Convert corporate litigation executives from newsletter reader → assessment taker → council participant → trial customer → full deployment. Each stage builds on the last.

---

## 3. Architecture & File Structure

```
caseglide-platform/
├── CLAUDE.md                          # Claude Code project rules
├── SPEC.md                            # This file
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
│
├── public/
│   └── fonts/                         # Self-hosted fonts if needed
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with fonts, metadata
│   │   ├── page.tsx                   # Home → renders LitigationSentinel
│   │   ├── briefing/
│   │   │   └── page.tsx               # Executive Briefing app
│   │   ├── council/
│   │   │   └── page.tsx               # Council Program app
│   │   └── trial/
│   │       └── page.tsx               # Trial Platform app
│   │
│   ├── components/
│   │   ├── design-system/
│   │   │   ├── tokens.ts              # All color, font, spacing tokens
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ProgressRing.tsx
│   │   │   ├── FadeIn.tsx
│   │   │   └── CaseGlideLogo.tsx
│   │   │
│   │   ├── sentinel/                  # Newsletter components
│   │   │   ├── Masthead.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── BriefingCTA.tsx
│   │   │   ├── SubscribeBlock.tsx
│   │   │   └── SentinelFooter.tsx
│   │   │
│   │   ├── briefing/                  # Executive Briefing components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── AssessmentPage.tsx
│   │   │   ├── ResultsPage.tsx
│   │   │   ├── BriefingPage.tsx
│   │   │   ├── PostBriefingPage.tsx
│   │   │   └── ScheduleModal.tsx
│   │   │
│   │   ├── council/                   # Council components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── OverviewPage.tsx
│   │   │   ├── DataReadinessPage.tsx
│   │   │   ├── ActivationPage.tsx
│   │   │   ├── EducationPage.tsx
│   │   │   └── DashboardPreviewPage.tsx
│   │   │
│   │   ├── trial/                     # Trial components
│   │   │   ├── OverviewPage.tsx
│   │   │   ├── ExecutivePage.tsx
│   │   │   ├── CasesPage.tsx
│   │   │   ├── SessionPage.tsx
│   │   │   ├── ImpactPage.tsx
│   │   │   └── ChronicleTimeline.tsx
│   │   │
│   │   ├── win95/                     # Win95 theme components
│   │   │   ├── Win95Window.tsx
│   │   │   ├── Win95Button.tsx
│   │   │   ├── Win95Panel.tsx
│   │   │   ├── Win95Taskbar.tsx
│   │   │   ├── Win95Badge.tsx
│   │   │   └── Win95Tab.tsx
│   │   │
│   │   └── shared/
│   │       └── ThemeToggle.tsx
│   │
│   ├── data/
│   │   ├── assessment-questions.ts    # 6 assessment questions
│   │   ├── case-updates.ts            # 8 case update types
│   │   ├── proving-cases.ts           # 10 trial cases with before/after
│   │   ├── data-categories.ts         # Council data categories
│   │   ├── milestones.ts              # Council milestones
│   │   ├── education-content.ts       # Council education tracks
│   │   ├── newsletter-articles.ts     # Sentinel article content
│   │   └── impact-scenarios.ts        # Trial impact projections
│   │
│   ├── contexts/
│   │   └── ThemeContext.tsx            # fortune500 | insurance theme
│   │
│   └── styles/
│       ├── globals.css                # Base styles, scrollbar, selection
│       └── win95.css                  # Win95-specific overrides
```

---

## 4. Design System

### Fonts (loaded via Google Fonts)
```
Source Serif 4 (300, 400, 500, 600, 700) — Headings, editorial
DM Sans (300, 400, 500, 600, 700) — Body, UI
JetBrains Mono (400, 500) — Code, data labels (optional)
```

### Color Tokens

**Sentinel / Newsletter (Light Theme)**
| Token | Hex | Usage |
|-------|-----|-------|
| bg | #FAFAF8 | Page background |
| bgWarm | #F5F3EF | Card backgrounds |
| ink | #1A1A1A | Primary text |
| inkLight | #4A4A4A | Secondary text |
| inkMuted | #8A8A8A | Tertiary text |
| sentinel | #1B2B4A | Brand navy |
| sentinelAccent | #C19A3E | Brand gold |
| border | #E8E6E1 | Dividers |
| surface | #FFFFFF | Cards |

**Apps / Dark Theme (Briefing, Council, Trial)**
| Token | Hex | Usage |
|-------|-----|-------|
| midnight | #0A0E1A | Background |
| deep | #111827 | Sidebar/header |
| surface | #1A1F2E | Card background |
| surfaceHover | #242B3D | Hover state |
| border | #2A3142 | Borders |
| textPrimary | #F1F3F7 | Primary text |
| textSecondary | #8B95A8 | Secondary text |
| textMuted | #5A6478 | Muted text |
| accent | #3B82F6 | Primary action |
| gold | #D4A853 | Premium accent |
| emerald | #34D399 | Success/positive |
| rose | #F472B6 | Danger/critical |
| amber | #FBBF24 | Warning/medium |

Each semantic color also has a `Glow` variant at 12% opacity for backgrounds.

### Win95 Theme Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| bg | #008080 | Teal desktop |
| silver | #C0C0C0 | Window/button face |
| navy | #000080 | Title bars, selections |
| fieldBg | #FFFFFF | Input fields |
| btnHighlight | #FFFFFF | Raised top/left |
| btnShadow | #808080 | Raised bottom/right |
| btnDkShadow | #000000 | Deep shadow |
| font | MS Sans Serif, Tahoma, sans-serif |

### Spacing Scale
4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80

### Border Radius
- Cards: 14px
- Buttons: 10px
- Badges: 100px (pill)
- Input fields: 8px
- Win95: 0px (always)

---

## 5. Litigation Sentinel

### Purpose
The marketing home page. A premium editorial newsletter that positions CaseGlide as the authority on litigation intelligence. Readers come for the content, discover the tools naturally.

### Design Direction
**Editorial / Magazine feel.** Think: The Economist meets Morning Brew meets a premium law review. Light background, excellent typography, generous whitespace, zero "SaaS landing page" feel. The newsletter should feel like content worth reading, not an advertisement.

### URL
www.LitigationSentinel.com (home page of the whole platform)

### Layout Spec

**Masthead**
- "A CaseGlide Publication · Vol. 1 · Issue 12" (small, above)
- "Litigation Sentinel" in Source Serif 4, 56px, #1B2B4A
- Gold 48px horizontal rule beneath
- "Intelligence for Corporate Litigation Leaders" tagline
- Date below

**Category Nav Strip**
- Horizontal: "Litigation Strategy" | "Litigation Tech" | "Case Watch" | "How-To Guides"
- 11px uppercase, muted, centered

**Featured Article (links to Council — not obvious)**
- Deep Dive tag
- Title: "Inside the 90-Day Activation: How One Legal Team Transformed Their Litigation Operations"
- Subtitle describes the Council activation process as a journalistic narrative
- "Read the full story →" link → navigates to Council app
- This reads as editorial content, not a product page

**Article Feed**
Mix of 8 articles across sections:

1. **Case Watch:** "What the $42M Opioid MDL Bellwether Tells Us About Litigation Budgeting"
2. **Tools:** "Top 10 Prompts for Getting Actionable Case Summaries from AI"
3. **Analysis:** "Nuclear Verdicts Are Up 28% — But the Real Risk Is in the Data You Don't Have"

**Executive Briefing CTA (ad placement)**
- Dark background card (#0A0E1A) — breaks the light editorial flow
- "From the Editors" label in gold
- "Where Does Your Litigation Department Stand?"
- Assessment pitch + "Begin Assessment →" button
- Navigates to Executive Briefing app
- Positioned BETWEEN articles so it feels like a natural editorial ad

4. **How-To:** "How to Build a Litigation Intelligence Stack Without Replacing Your Claims System" → links to Council
5. **Results (Case Study):** "10 Cases, 30 Days: How a Litigation Trial Changed One CLO's Approach to Settlement Strategy" → links to Trial
6. **Benchmark:** "Outside Counsel Performance: What the Top 10% of Legal Departments Measure"
7. **How-To:** "Top 5 Tools for Litigation Operations Teams in 2026"

**Subscribe Block**
- Warm background (#F5F3EF) card
- "Stay Informed" gold label
- Email input + Subscribe button
- "Weekly intelligence for litigation leaders"

**Software Suite Footer**
- Small "CaseGlide Software Suite" label
- Three cards: Executive Briefing, Council Program, Trial
- Each navigable

**Copyright Footer**
- Double-line border top
- "Litigation Sentinel" + "Published by CaseGlide" + copyright

### Content Strategy Notes
The newsletter articles are written as genuine editorial content. The Council and Trial links are embedded as "case studies" and "deep dives" that happen to open the actual software tools. The Executive Briefing is the only overt advertisement, positioned as "From the Editors."

---

## 6. Executive Briefing

### Purpose
Self-service assessment that scores a legal department's litigation intelligence maturity. The executive answers 6 questions, gets a maturity score, sees a personalized briefing, and schedules a call.

### Phases (linear flow)
1. **Landing** → 2. **Assessment** → 3. **Results** → 4. **Briefing** → 5. **Post-Briefing**

### Phase 1: Landing Page
- CaseGlide logo + wordmark
- "Executive Briefing" gold badge
- "Litigation Intelligence Readiness Assessment" headline (Instrument Serif → Source Serif 4 in production)
- Subtitle: "A confidential, 6-question assessment..."
- Two buttons: "Begin Assessment →" (blue gradient), "Schedule Briefing" (ghost)
- Trust signals: "6 questions · 4 min", "Personalized insights", "Confidential"

### Phase 2: Assessment (6 Questions)
Each question maps to a CaseGlide feature and a pain point:

**Question 1: Case Data Access**
- Pain: "How quickly can you get a complete picture of any open case?"
- Feature: Docket
- Options (1-5 scale, each is a radio button):
  1. "Days — we contact outside counsel and wait for updates"
  2. "Hours — we check multiple systems and compile manually"
  3. "Within the hour — we have a central system but it requires manual entry"
  4. "Minutes — we have automated feeds but lack analytics"
  5. "Instantly — real-time dashboards with analytics and alerts"

**Question 2: Outcome Intelligence**
- Pain: "When a case settles, how do you evaluate if the outcome was good?"
- Feature: Precedent
- 1: "Gut feel" → 5: "Quantitative scoring against comparable matters"

**Question 3: Attorney Oversight**
- Pain: "How do you monitor outside counsel performance across your panel?"
- Feature: Attorney Scorecard
- 1: "We don't" → 5: "Automated scoring across spend, outcomes, and compliance"

**Question 4: Case Strategy Updates**
- Pain: "How do attorneys report case developments to your team?"
- Feature: Case Updates
- 1: "Quarterly written reports" → 5: "Structured digital updates at every milestone"

**Question 5: Document Intelligence**
- Pain: "When you receive attorney work product, how is key data extracted?"
- Feature: Case Clerk AI
- 1: "Someone reads it manually" → 5: "AI extraction with human review"

**Question 6: Strategic Decision Making**
- Pain: "When making a major case decision (settle, try, appeal), what data do you have?"
- Feature: Chambers AI
- 1: "Attorney recommendation only" → 5: "AI analysis with precedent comps, venue data, and outcome modeling"

**UI Details:**
- Progress bar at top
- Pain point badge (rose) + Feature badge (blue) above each question
- Option cards with score circles (1-5)
- Auto-advance 300ms after selection
- Previous button below options

### Phase 3: Results
- Animated score reveal
- Maturity level (1-5): Foundational / Developing / Established / Advanced / Transformative
- Radar chart showing 6 dimensions
- Peer comparison: "Companies at your level typically..."
- "Your biggest gap" highlight
- "See Your Briefing →" CTA

### Phase 4: Briefing
- Personalized briefing based on scores
- For each low-scoring area: specific recommendation + CaseGlide feature mapping
- ROI projection based on maturity gaps
- Industry benchmarks
- "Request Full Briefing" or "Schedule Call" CTAs

### Phase 5: Post-Briefing
- Thank you + next steps
- Calendar scheduling integration
- CaseGlide advisor contact: Liana Rodriguez, liana@caseglide.com
- "Schedule Call" CTA

### Schedule Modal
- Overlay modal accessible from any phase
- Name, company, email, preferred date, message fields
- "Request Briefing" + "Cancel" buttons

---

## 7. Council Program

### Purpose
90-day client activation platform. The client has purchased CaseGlide. This guides their team through onboarding data, understanding dashboards, and reaching full operational capability.

### Layout
- **Desktop (≥700px):** Fixed 240px sidebar + scrollable content area
- **Mobile (<700px):** Sticky top header with hamburger menu, full-width content

### Sidebar / Navigation
- CaseGlide logo + "COUNCIL" label
- Client name: "Acme Insurance" (simulated)
- Week indicator: "Week 3 of 12"
- Progress bar (visual)
- Five nav items: Overview, Data Readiness, Activation Timeline, Education, Dashboard Preview

### Page 1: Overview (rebuilt for action)

**This Week's Priority Card** (hero, gradient accent border)
- Current milestone name + description
- Dual tracks: "👥 Your Team This Week" and "👔 Executive This Week"
- CTA: "Start: Map Your Data Sources →"

**Status Cards** (4 metrics, clickable)
- Data Loaded: 42% → links to dashboards
- Milestones: 2/6 → links to activation
- Team Activity: 72%
- Next Check-In: Fri, Feb 14, 2:00 PM (NEW — visible touchpoint)

**Your CaseGlide Team Card**
- Advisor: Liana Rodriguez with gradient avatar (LR initials)
- Email: liana@caseglide.com
- Buttons: "Message" and "Schedule Call"

**Jump To Navigation** (4 compact cards)
- Data Readiness, Activation Timeline, Education, Dashboard Preview

### Page 2: Data Readiness
Assessment of what data exists and how to get it into CaseGlide.

**Data Source Options** (3 methods):
1. CSV Upload — structured data from existing systems
2. Manual Entry + Case Clerk AI — drag in documents, AI extracts
3. Hybrid — CSV for what's available, Case Clerk AI for documents, manual for gaps

**Data Categories** (6):
1. Case Identification (case name, parties, jurisdiction, venue, filing date, case type, claim amount)
2. Party & Counsel (plaintiff info, defense counsel, opposing counsel, expert witnesses, mediators, judges)
3. Financial (reserves, incurred, paid, budget, legal spend by phase)
4. Timeline & Status (current status, key dates, next milestone, statute of limitations, important deadlines)
5. Case Assessment (liability %, damages assessment, settlement range, risk rating, recommended strategy)
6. Outcomes & History (resolution type, settlement amount, verdict, duration, key learnings)

### Page 3: Activation Timeline
6 milestones across 12 weeks:

1. **Data Audit & Strategy** (Week 1-2) — Map existing systems, choose ingestion approach
2. **Case Update Design** (Week 2-3) — Build milestone templates, configure Case Clerk AI
3. **Precedent Data Load** (Week 3-6) — Import closed cases
4. **Docket Setup** (Week 5-8) — Connect open case monitoring
5. **Intelligence Layer** (Week 7-10) — Configure Chambers AI, Chronicle, Case Clerk AI
6. **Full Activation** (Week 10-12) — All systems live, executive dashboards active

Each milestone shows: description, team task, executive task, status (completed/active/upcoming)

### Page 4: Education
Two tracks: Team and Executive

**Team Track:**
- Week 1: CaseGlide Platform Overview (Video)
- Week 2: Case Clerk AI: Extracting Case Data from Attorney Reports
- Week 3: Building Your First Case Update Template
- Week 4: Data Quality: Ensuring Clean Imports
- Week 6: Using Docket Dashboards for Daily Monitoring
- Week 8: Case Clerk AI Advanced: Training Extraction
- Week 10: Chambers & Chronicle for Ongoing Intelligence
- Week 12: Full Activation Certification

**Executive Track:**
- Week 2: Executive Dashboard Walkthrough
- Week 4: Reading Precedent: Attorney Performance Insights
- Week 6: Docket Intelligence: Your Weekly Portfolio Briefing
- Week 10: Chambers & Chronicle: Asking Your Portfolio Real Questions
- Week 12: Board-Ready Reporting with CaseGlide

### Page 5: Dashboard Preview
**Progress/Vision toggle:**

- **"Your Progress" view:** Shows partial data (42% Docket, 28% Precedent), placeholder cards where data is still loading, sample "Needs Attention" cases
- **"Full Vision ✦" view:** Shows complete dashboards with all data loaded

**Docket Tab (Full Vision):**
- Metrics: Cases Open (1,250 +8%), Median Duration (145 Days -12%), Median Spend ($32,500 +15%)
- Cases to Watch table: Plaintiff Depo (12), Mediation (8), Dispositive Motion (5), Trial (3), Over 365 Days (25)
- Cases by Track progress bars
- Time Since Last Negotiation breakdown
- Legal Expense Alert: Over Budget (65), Over $50K (42%), Over $25K (78%)

**Precedent Tab (Full Vision):**
- Value of Defense: $5.8M (+18%)
- Budget Accuracy: 92% (+12%)
- Cycle Time Efficiency per stage
- Closed Cases by Resolution Type (pie)
- Attorney performance table

---

## 8. Trial Platform

### Purpose
30-day proving ground. 10 hardest cases fully activated. Before/after comparisons. Strategy recommendations. Portfolio impact projection. The conversion event.

### Layout
Same sidebar/mobile pattern as Council, but with different nav items.

### Navigation
- Overview
- Executive Intelligence
- 10-Case Proving Ground
- Strategy Session
- Portfolio Impact

### Page 1: Overview
- "Trial: 30-Day Proving Ground" headline
- Mission card: "Take 10 difficult cases through full CaseGlide activation..."
- Status metrics: Cases Activated (4/10), Updates Received (7), Strategies Ready (4), Days Remaining (18)
- Advisor card: Liana Rodriguez
- "Schedule Strategy Session" button → navigates to Session page
- Quick nav cards to other sections

### Page 2: Executive Intelligence
- Value of Defense: $5.8M (emerald gradient card)
- Portfolio Exposure: $8.4M (blue gradient card)
- **Attorney Performance Rankings:**
  - Baker & Associates: 34 cases, $42K avg, 8.2/10, 71% win → "High Value"
  - Morrison Drake LLP: 28 cases, $61K avg, 6.1/10, 54% win → "Monitor"
  - Sterling Whitmore: 19 cases, $78K avg, 5.4/10, 45% win → "Review"
- **Portfolio Insights from Precedent** (3 insights with actions):
  1. Employment cases: Morrison 18% higher spend → panel rebalancing
  2. Early mediation: 35% vs 18% below demand → accelerate 9 cases
  3. Sterling post-mediation stall: 3x avg → 30-day follow-up protocol
- "View Impacted Cases in Proving Ground →" link

### Page 3: 10-Case Proving Ground
**Case List View:**
- Progress ring: 4/10 activated
- 10 case cards with: name, type, stage, days, attorney, reserve, difficulty badge, status badge
- Color-coded left border (Critical=rose, High=amber, Medium=blue)

**Case Detail View (click any case):**
- Prev/Next navigation with "Case X of 10" indicator
- Case header: name, type, stage, days, attorney, reserve, difficulty badge
- **Case Update Pipeline:** Visual horizontal track showing all 8 update types, colored by status (completed ✓ / current / upcoming)
- **Before/After Toggle** (defaults to After):
  - Toggle pills: "Before CaseGlide" (rose) / "After CaseGlide ✦" (emerald)
  - Three cards per state: Strategy, Available Data, Intelligence
  - After view includes **Chronicle Timeline**: 4-event vertical timeline (Filed → ICA → Current Stage → CaseGlide Activated)

**All 10 Cases (complete data):**

| # | Case Name | Type | Stage | Days | Reserve | Attorney | Difficulty |
|---|-----------|------|-------|------|---------|----------|------------|
| 1 | Martinez v. Acme Corp | Auto Liability | Discovery | 412 | $67K | Morrison Drake | High |
| 2 | Thompson Class Action | Product Liability | Mediation | 289 | $142K | Sterling Whitmore | Critical |
| 3 | Lee v. National Insurance | Slip & Fall | Plaintiff Depo | 198 | $38K | Baker & Associates | Medium |
| 4 | Garcia v. SafeGuard | Employment | MSJ | 356 | $215K | Morrison Drake | Critical |
| 5 | Wilson v. Metro Transit | Auto Liability | Expert Reports | 267 | $89K | Baker & Associates | High |
| 6 | Adams v. Cornerstone LLC | Premises Liability | Discovery | 145 | $52K | Sterling Whitmore | Medium |
| 7 | Brown v. National Ins. | Auto Liability | ICA | 45 | $28K | Baker & Associates | Low |
| 8 | Chen v. Pacific Holdings | Employment | Defendant Depo | 312 | $175K | Morrison Drake | Critical |
| 9 | Rivera v. Summit Corp | Product Liability | Mediation | 523 | $310K | Sterling Whitmore | Critical |
| 10 | Park v. Allied Services | Slip & Fall | Trial | 678 | $95K | Baker & Associates | High |

Each case has unique Before/After content for Strategy, Data, and Intelligence. See data/proving-cases.ts for full text.

### Page 4: Strategy Session
- Case tabs (4 ready cases + "+6 cases pending activation" indicator)
- Scrollable tabs with flexShrink: 0 for mobile
- **Case Scorecard** per case:
  - Badges: Case Scorecard (gold) + Difficulty
  - Case details
  - Strategy Recommendation (emerald label)
  - Key Insight (dark inset card)
- **Chambers AI Interactive:**
  - "💬 Ask Chambers About This Case" header
  - 3 clickable question buttons per case:
    1. "What's the likely settlement range?"
    2. "Is this a nuclear verdict jurisdiction?"
    3. "How does our attorney compare on similar cases?"
  - Each returns contextual, data-backed answer
  - Answers are deterministic (no Math.random), use case data

### Page 5: Portfolio Impact
- Three scenario cards:
  - Conservative (5%): $420K savings, 3-5 cases, amber
  - Expected (10%): $840K savings, 8-12 cases, blue (highlighted with top accent bar)
  - Optimized (15%): $1.26M savings, 15-20 cases, emerald
- **Path Forward Card** (gold border, gradient background):
  - "From 10 Cases to Full Portfolio Intelligence"
  - Description of full deployment value
  - Three mini cards: Precedent, Docket, Intelligence
  - **CTAs:** "Request Deployment Proposal →" (blue gradient) + "Schedule Executive Review" (ghost)

---

## 9. Shared Components

### CaseGlideLogo (SVG)
- Case file icon with folded corner
- Blue gradient fill (#3B82F6 → #1D4ED8)
- Gold accent line (#D4A853)
- Props: size (default 32)

### CaseGlideWordmark
- Logo + "CaseGlide" text
- Source Serif 4, 300 weight
- Blue gradient text fill

### Badge
- Pill shape (border-radius: 100px)
- Color + glow (12% opacity) background
- 11px uppercase, 0.05em letter-spacing

### Card
- Background: surface color
- Border: 1px solid border color
- Border-radius: 14px
- Optional onClick for interactivity

### ProgressRing
- SVG circle with stroke-dasharray animation
- Shows percentage in center
- Props: value, max, size, color

### FadeIn
- Opacity 0 → 1 + translateY(12px → 0)
- 0.5s ease transition
- Props: delay (ms)

### ProgressBar
- Full-width bar with fill
- Smooth width transition
- Used in sidebar, assessment, data loading

---

## 10. Theme Toggle System

### Architecture
- ThemeContext provides "fortune500" | "insurance" to all components
- Toggle button fixed at bottom-right of every app
- Fortune 500 mode: "🖥️ Insurance Company Mode" (subtle, glass-morphism button)
- Insurance mode: "💼 Switch to Fortune 500 Mode" (Win95 beveled button)

### Win95 Theme Specification

**When insurance mode is active, the ENTIRE app transforms:**

**Visual System:**
- Background: #008080 (teal)
- All cards become Win95 windows with:
  - Silver (#C0C0C0) background
  - 3D beveled borders (white top/left, black bottom/right)
  - Blue gradient title bars (#000080 → #1084D0)
  - Minimize/Maximize/Close buttons in title bar
- Font: MS Sans Serif, 11px
- All border-radius: 0
- Sunken panels for content areas (reversed bevel)
- Radio buttons with classic Win95 styling
- Tables with navy headers, alternating silver/white rows
- Progress bars: sunken container with flat navy fill

**Win95 Taskbar:**
- Fixed bottom bar, 28px height
- Start button with 🪟 icon
- Active window name in sunken panel
- Clock in sunken panel (right side)

**CSS Overrides:**
```css
* { image-rendering: pixelated; }
::selection { background: #000080; color: white; }
::-webkit-scrollbar { width: 16px; }
::-webkit-scrollbar-track { background: #C0C0C0; }
::-webkit-scrollbar-thumb { /* raised bevel */ }
```

**Component Mapping:**
| Fortune 500 | Win95 |
|-------------|-------|
| Card | Win95Window |
| Button | Win95Button (beveled) |
| Badge | Win95Badge (flat color block) |
| ProgressBar | Win95ProgressBar (sunken) |
| Tab | Win95Tab (classic tab control) |
| Sidebar | Win95 nav buttons across top |

---

## 11. Mobile Responsiveness

### Breakpoint: 700px

### Desktop (≥700px)
- Council/Trial: Sidebar (240px fixed) + content
- Newsletter: Single column, max-width 680px
- Briefing: Centered, max-width 800px

### Mobile (<700px)
- Council/Trial: Sidebar hidden, sticky top header with hamburger menu
- Grids: 2-col → 1-col (using CSS class `trial-2col`, `council-grid-stats`, etc.)
- Tables: Compressed with smaller font
- Case Update Pipeline: Horizontal scroll
- Strategy Session tabs: Horizontal scroll with flexShrink: 0

### CSS Media Query Pattern
```css
@media (min-width: 700px) {
  .app-layout { display: flex !important; }
  .app-sidebar { display: flex !important; }
  .app-topbar { display: none !important; }
}
@media (max-width: 699px) {
  .app-layout { display: block !important; }
  .app-sidebar { display: none !important; }
  .app-topbar { display: flex !important; }
  .responsive-grid { grid-template-columns: 1fr !important; }
}
```

---

## 12. Data Models

### assessment-questions.ts
```typescript
interface AssessmentQuestion {
  id: string;           // e.g., "case_data"
  question: string;     // The question text
  painPoint: string;    // Short pain label
  feature: string;      // CaseGlide feature name
  options: {
    score: number;      // 1-5
    label: string;      // Option text
  }[];
}
```

### proving-cases.ts
```typescript
interface ProvingCase {
  id: number;
  name: string;
  type: string;         // "Auto Liability" | "Product Liability" | etc.
  stage: string;        // "Discovery" | "Mediation" | "ICA" | etc.
  days: number;
  reserve: string;      // "$67K"
  attorney: string;
  difficulty: "Low" | "Medium" | "High" | "Critical";
  currentUpdate: string; // matches CASE_UPDATES id
  before: {
    strategy: string;
    data: string;
    insight: string;
  };
  after: {
    strategy: string;
    data: string;
    insight: string;
  };
}
```

### case-updates.ts
```typescript
interface CaseUpdate {
  id: string;
  name: string;
  icon: string;
  fields: string[];
}
// 8 types: ica, discovery, plaintiff_depo, defendant_depo, msj, mediation, trial, experts
```

---

## 13. Build & Deployment

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + inline styles for dynamic values
- **Animations:** Framer Motion (or CSS transitions)
- **Fonts:** Google Fonts (Source Serif 4, DM Sans, JetBrains Mono)
- **Hosting:** Vercel (recommended) or any static host
- **Domain:** www.LitigationSentinel.com

### Build Commands
```bash
npm run dev          # Local development
npm run build        # Production build
npm run start        # Start production server
```

### Deployment to Vercel
```bash
npm install -g vercel
vercel
# Follow prompts, connect to Git repo
```

### Environment Variables
None required for MVP (all data is static/simulated).

---

## Appendix: Naming Conventions

- Advisor name: **Liana Rodriguez** (not Martinez)
- Document AI: **Case Clerk AI** (not Clerk.ai)
- AI Chat: **Chambers** (Chambers AI for formal)
- Timeline: **Chronicle** (Chronicle AI for formal)
- Newsletter: **Litigation Sentinel**
- Assessment: **Executive Briefing** (not "assessment tool")
- Onboarding: **Council Program** (not "council" lowercase in UI)
- Proving Ground: **Trial** (always capitalized in UI context)

---

## Appendix: Claude Code Workflow for Each Phase

### Phase 1: Foundation
```
/plan Set up a Next.js 14 project with TypeScript and Tailwind. Create the design system 
tokens file, shared components (Card, Badge, Button, FadeIn, ProgressRing, CaseGlideLogo), 
and the ThemeContext. Reference SPEC.md sections 3, 4, and 9.
```

### Phase 2: Litigation Sentinel
```
/plan Build the Litigation Sentinel newsletter home page. This is the marketing home page 
at the root route. Use the editorial design from SPEC.md section 5. Light theme, 
Source Serif 4 headings, premium typography. Include all article content, the Executive 
Briefing CTA ad, and navigation to the three app routes.
```

### Phase 3: Executive Briefing
```
/plan Build the Executive Briefing at /briefing. Five phases: Landing, Assessment (6 questions),
Results (maturity score + radar), Briefing (personalized), Post-Briefing. Use dark theme.
Reference SPEC.md section 6 for all question content and UI details.
```

### Phase 4: Council Program
```
/plan Build the Council Program at /council. Sidebar layout with 5 pages. Reference 
SPEC.md section 7. Include the rebuilt Overview page with action priorities, Data Readiness 
assessment, 6-milestone timeline, education tracks, and Dashboard Preview with 
progress/vision toggle.
```

### Phase 5: Trial Platform
```
/plan Build the Trial Platform at /trial. Same sidebar pattern. 5 pages. Reference SPEC.md 
section 8. The 10-Case Proving Ground needs all 10 cases with before/after data, 
Chronicle timeline, prev/next navigation. Strategy Session needs interactive Chambers AI. 
Impact page needs the 3 scenarios plus deployment CTAs.
```

### Phase 6: Polish
```
/plan Add the Win95 insurance company theme toggle to all three apps. Reference SPEC.md 
section 10. Then do a full mobile responsiveness pass on every page. Reference section 11. 
Finally, do a UX audit: check every click path, every navigation link, every CTA button 
works and goes to the right place.
```
