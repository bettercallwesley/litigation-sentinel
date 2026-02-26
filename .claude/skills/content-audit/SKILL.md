# Skill: LinkedIn Content System Audit

> Invocable skill for auditing and improving the LinkedIn content creation system.
> Usage: `/content-audit` or ask Claude to "audit the content system"

## Purpose

Periodically review what's working and what needs updating across the entire LinkedIn content system — rules, skills, topic priorities, and voice guide. Run this monthly or after any significant performance shift.

## Audit Process

### Step 1: Check Topic Performance Data

Ask the user for recent LinkedIn post performance data:
- Which posts got the most impressions this month?
- Which posts got the most saves and comments?
- Any posts that underperformed expectations?
- Any new topics that surprisingly worked well?

Compare against the current rankings in `.claude/rules/content-topic-priorities.md`:
- Do the tier rankings still hold?
- Should any topic move up or down?
- Are there new topics not yet in the system?

**Update `content-topic-priorities.md`** with any ranking changes and new impression data.

### Step 2: Voice Guide Health Check

Review `.claude/rules/content-voice-guide.md` against recent posts:
- Has Wesley's voice evolved? New recurring phrases?
- Any new "Wesley-isms" from recent posts that should be captured?
- Any phrases that used to work but now feel stale?
- Has the audience mix shifted (more corporate GCs vs. insurance)?

Ask the user:
- "Any phrases or patterns in your recent posts that felt particularly 'you'?"
- "Any posts where the AI draft needed heavy editing? What was wrong?"
- "Has your audience shifted at all?"

**Update `content-voice-guide.md`** with any new patterns, phrases, or corrections.

### Step 3: Algorithm Rule Check

Review `.claude/rules/linkedin-2026-algorithm.md`:
- Is the algorithm data still current?
- Has LinkedIn announced any feed changes?
- Are the format performance rankings still accurate based on recent data?

Search the web for:
- "LinkedIn algorithm changes 2026"
- "LinkedIn 360 Brew updates"
- "LinkedIn engagement data 2026"

**Update `linkedin-2026-algorithm.md`** if any significant changes are found.

### Step 4: Vocabulary Blacklist Audit

Review the vocabulary blacklist in the voice guide:
- Were any blacklisted words accidentally used in recent drafts?
- Are there new AI-sounding words or phrases that should be added?
- Has the user flagged any words that "sounded too AI"?

**Update the blacklist** with any additions.

### Step 5: Skill Effectiveness Check

Review both skills:
- `.claude/skills/linkedin-post/SKILL.md` — Is the drafting process producing good first drafts?
- `.claude/skills/weekly-content-plan/SKILL.md` — Is the weekly planning useful?

Ask the user:
- "How much editing do AI drafts typically need? (Light touch / Moderate / Heavy rewrite)"
- "Is the weekly planning cadence working, or do you prefer a different rhythm?"
- "Any part of the drafting process that feels unnecessary or missing?"

**Update skills** based on feedback.

### Step 6: Content Pillar Review

Check the 12 content pillars in the voice guide:
- Are all 12 still relevant?
- Has any pillar been neglected for 3+ weeks?
- Should any new pillar be added based on emerging topics?
- Are the insurance-to-corporate translations still accurate?

### Step 7: Data Source Freshness

Check the data files that feed posts:
- `src/data/nuclear-verdicts.ts` — Is the data current? Any new state-level data to add?
- `src/data/newsletter-articles.ts` — Are recent Sentinel articles captured?

Flag any data that's more than 3 months old for refresh.

## Output Format

```
## Content System Audit — [Date]

### Performance Summary
- Top performing topics this month: [list with impressions]
- Underperforming topics: [list]
- Saves/comment leaders: [list]

### Changes Made
1. [File]: [What was updated and why]
2. [File]: [What was updated and why]
...

### Recommendations
- [Topic/format/cadence changes to try next month]
- [New angles or hooks to test]
- [Data that needs refreshing]

### No Changes Needed
- [Files that were reviewed and are still current]

### Action Items for Wes
- [ ] [Anything requiring user input or decision]
- [ ] [Data to provide for next audit]
```

## Audit Schedule

- **Monthly**: Full audit (all 7 steps)
- **After any viral post (5K+ impressions)**: Quick audit of what worked and capture patterns
- **After any algorithm news**: Step 3 only (algorithm check)
- **After heavy editing of a draft**: Steps 2 + 4 (voice and vocabulary check)
