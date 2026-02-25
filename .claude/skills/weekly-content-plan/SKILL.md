# Skill: Weekly LinkedIn Content Plan

> Invocable skill for planning Wesley's LinkedIn content calendar for the week.
> Usage: `/weekly-content-plan` or ask Claude to "plan this week's LinkedIn content"

## Prerequisites

Before planning, Claude MUST load:
- `.claude/rules/linkedin-2026-algorithm.md` — Algorithm strategy
- `.claude/rules/content-voice-guide.md` — Voice guide and content pillars
- `src/data/nuclear-verdicts.ts` — Fresh data for post topics
- `src/data/newsletter-articles.ts` — Recent Sentinel articles to amplify

## Weekly Cadence: 3-4 Posts Per Week

### Recommended Weekly Mix

| Day | Format | Pillar | Goal |
|-----|--------|--------|------|
| **Tuesday** | Text post (Data-Led Insight) | Nuclear Verdicts OR Industry Risk | Establish authority with data |
| **Wednesday** | Carousel (8-10 slides) | Framework/Educational | Drive saves (highest algorithm signal) |
| **Thursday** | Text post ("How I/We" Story) | CaseGlide Proof OR Litigation Intelligence | Build trust through proof-of-work |
| **Optional Monday** | Contrarian Take | F500 Operations OR Legal Tech | Generate comments and debate |

### Planning Process

#### Step 1: Content Audit
- What was posted last week? Avoid repetition.
- What Litigation Sentinel articles published recently? (Check newsletter-articles.ts)
- Any industry news or events this week? (Nuclear verdicts, regulatory changes, notable settlements)
- Any CaseGlide milestones or client wins to share?

#### Step 2: Topic Selection
For each post slot, select a topic that:
1. Maps to one of the 6 content pillars
2. Has a specific data point or story to anchor it
3. Is save-worthy (would a GC bookmark it?)
4. Hasn't been covered in the last 2 weeks
5. Aligns with Wesley's profile topic DNA

#### Step 3: Draft Outlines
For each post, provide:
- **Working title** (internal reference only)
- **Hook** (first 2 lines — the "See more" earner)
- **Core message** (1 sentence)
- **Key data point or proof**
- **Format**: Text / Carousel / Video script
- **CTA destination**: Litigation Sentinel / Executive Briefing / None
- **Save-worthiness**: Low / Medium / High

#### Step 4: Engagement Strategy
For each post, note:
- **First comment**: What link or additional context to add as first comment
- **Reply strategy**: Key points to make if specific personas comment
- **Cross-promotion**: Should this be referenced in the Sentinel newsletter?

### Output Format

```
## Week of [Date] — LinkedIn Content Plan

### Post 1: [Tuesday]
- Title: [Working title]
- Pillar: [Content pillar]
- Format: [Text/Carousel]
- Hook: "[First 2 lines]"
- Core: [1-sentence summary]
- Data: [Key stat or proof point]
- CTA: [Destination]
- Save score: [Low/Medium/High]
- First comment: [Link or context to add]

### Post 2: [Wednesday]
[Same structure]

### Post 3: [Thursday]
[Same structure]

### Post 4: [Monday — Optional]
[Same structure]

---
Notes:
- [Any timing considerations]
- [Industry events to reference]
- [Follow-up actions needed]
```

## After Approval

Once the user approves the plan, use the `/linkedin-post` skill to draft each post individually. Present one at a time for approval before moving to the next.
