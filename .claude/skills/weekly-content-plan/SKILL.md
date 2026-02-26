# Skill: Weekly LinkedIn Content Plan

> Invocable skill for planning Wesley's LinkedIn content calendar for the week.
> Usage: `/weekly-content-plan` or ask Claude to "plan this week's LinkedIn content"

## Prerequisites

Before planning, Claude MUST load:
- `.claude/rules/linkedin-2026-algorithm.md` — Algorithm strategy
- `.claude/rules/content-voice-guide.md` — Voice guide and content pillars
- `.claude/rules/content-topic-priorities.md` — Topic rankings, impression data, angles
- `src/data/nuclear-verdicts.ts` — Fresh data for post topics
- `src/data/newsletter-articles.ts` — Recent Sentinel articles to amplify

## Weekly Cadence: 3-4 Posts Per Week

### Recommended Weekly Mix (Informed by Topic Performance Data)

| Day | Format | Topic Tier | Goal |
|-----|--------|-----------|------|
| **Tuesday** | Text post (Bold Claim or Provocative Data) | **Tier 1** — Judicial Hellholes, RICO, or Morgan & Morgan | Maximum reach. These are proven 10K-55K impression topics. |
| **Wednesday** | Carousel or Framework post | **Tier 2** — Nuclear Verdicts, Bill Review Bashing, or AI in Litigation | Drive saves. Educational/data content bookmarked by GCs. |
| **Thursday** | Text post ("How I/We" or Contrarian) | **Tier 2/3** — CaseGlide Proof, Defense Attorney Advocacy, or Lit Intelligence | Build trust through proof-of-work and earned opinions. |
| **Optional Monday** | Short punchy post or humor/meme | **Any tier** — Contrarian take, humor, or conference CTA | Generate comments and shares. Low effort, high potential. |

### Topic Rotation Rules
- At least 1 Tier 1 topic per week (these drive reach)
- At least 1 Tier 2 topic per week (these build authority)
- Never repeat the same specific topic two weeks in a row
- Rotate Tier 3 topics so each gets covered once per month
- When a conference is approaching (ITC, CLM, Connections), add a conference CTA post
- If major litigation news breaks, bump a planned post and cover it immediately

### Planning Process

#### Step 1: Content Audit
- What was posted last week? Avoid topic repetition.
- What Litigation Sentinel articles published recently? (Check newsletter-articles.ts)
- Any breaking industry news? (Nuclear verdicts, RICO suits, court rulings, legislative changes)
- Any CaseGlide milestones or client wins to share?
- Any upcoming conferences or events?
- Search web for latest news in Tier 1 topics to find fresh angles

#### Step 2: Topic Selection
For each post slot, select a topic that:
1. Follows the tier rotation from the weekly mix above
2. Has a specific data point, quote, or story to anchor it
3. Is save-worthy (would a GC bookmark it?)
4. Hasn't been covered in the last 2 weeks
5. Uses an angle from content-topic-priorities.md
6. If insurance-specific, has been translated to corporate language

#### Step 3: Draft Outlines
For each post, provide:
- **Working title** (internal reference only)
- **Hook** (first 2 lines — the "See more" earner)
- **Core message** (1 sentence)
- **Key data point or proof**
- **Post structure** (from the 6 templates in linkedin-post/SKILL.md: Bold Claim, Quote-Led, Provocative Data, How I/We, Contrarian Callout, or Framework)
- **Format**: Text / Carousel / Video script
- **CTA style**: Keyword DM / Conference / Newsletter / Challenge / None
- **Save-worthiness**: Low / Medium / High
- **Image recommendation**: List image / Podcast thumbnail / Product screenshot / Meme / AI-generated / None

#### Step 4: Engagement Strategy
For each post, note:
- **First comment**: What link or additional context to add as first comment
- **Reply strategy**: Key points to make if specific personas comment
- **Cross-promotion**: Should this be referenced in the Sentinel newsletter?

### Output Format

```
## Week of [Date] — LinkedIn Content Plan

### Post 1: [Tuesday] — Tier 1 Reach Play
- Title: [Working title]
- Pillar: [Content pillar]
- Structure: [Which of the 6 templates]
- Format: [Text/Carousel]
- Hook: "[First 2 lines]"
- Core: [1-sentence summary]
- Data: [Key stat or proof point]
- CTA: [Style + destination]
- Image: [Recommendation]
- Save score: [Low/Medium/High]
- First comment: [Link or context to add]

### Post 2: [Wednesday] — Tier 2 Authority Builder
[Same structure]

### Post 3: [Thursday] — Proof/Trust Post
[Same structure]

### Post 4: [Monday — Optional] — Wildcard
[Same structure]

---
Notes:
- [Any timing considerations]
- [Industry events to reference]
- [Follow-up actions needed]
- [Topics to save for next week]
```

## After Approval

Once the user approves the plan, use the `/linkedin-post` skill to draft each post individually. Present one at a time for approval before moving to the next.
