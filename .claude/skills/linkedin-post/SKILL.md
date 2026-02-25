# Skill: Draft LinkedIn Post

> Invocable skill for drafting LinkedIn posts for Wesley Todd / CaseGlide.
> Usage: `/linkedin-post` or ask Claude to "draft a LinkedIn post"

## Prerequisites

Before drafting, Claude MUST load and follow:
- `.claude/rules/linkedin-2026-algorithm.md` — Algorithm strategy and format guidelines
- `.claude/rules/content-voice-guide.md` — Wesley's voice, anti-AI patterns, vocabulary blacklist
- `src/data/nuclear-verdicts.ts` — Current nuclear verdict data for statistical references
- `src/data/newsletter-articles.ts` — Recent Litigation Sentinel articles for content hooks

## Inputs (Ask the user if not provided)

1. **Topic or trigger** — What's the post about? (article, data point, client insight, industry event)
2. **Content pillar** — Which pillar? (Nuclear Verdicts, Litigation Intelligence, F500 Operations, Industry Risk, Legal Tech, CaseGlide Proof)
3. **Format preference** — Text post, carousel outline, or video script? (Default: text post)
4. **CTA destination** — Where should interested readers go? (Litigation Sentinel, Executive Briefing, or none)

## Drafting Process

### Step 1: Research Context
- Check `src/data/nuclear-verdicts.ts` for relevant statistics
- Check `src/data/newsletter-articles.ts` for recent articles to reference
- If the topic relates to a current event, search for recent data

### Step 2: Select Post Structure
Based on the content pillar and 2026 algorithm rules, choose ONE:

**A. Data-Led Insight (best for Nuclear Verdicts, Industry Risk)**
```
[Specific data point — stark, surprising]

[2-3 sentences of context — what this means]

[The insight most people miss]

[What this means for the reader's role specifically]

[Quiet CTA or forward-looking close]
```

**B. "How I/We" Story (best for CaseGlide Proof, Litigation Intelligence)**
```
[Start mid-story — specific moment]

[What we expected vs. what we found]

[The specific numbers/results]

[Why this matters beyond our experience]

[Close with the broader implication]
```

**C. Contrarian Take (best for F500 Operations, Legal Tech)**
```
[Bold contrarian statement]

[Why the conventional wisdom is wrong — with evidence]

[What the data actually shows]

[The real framework/approach that works]

[Close with a challenge to the reader]
```

**D. Framework/Educational (best for saves — highest algorithm signal)**
```
[The problem in one sentence]

[Why existing approaches fail — specific example]

[The framework, step by step — be concrete]
[Step 1: ...]
[Step 2: ...]
[Step 3: ...]

[Proof this works — specific result]

[Close: what to do first]
```

### Step 3: Write the Draft
- Target 1,000-1,300 characters for text posts
- Open with a hook that earns the "See more" click (first 2 lines are critical)
- Use Wesley's voice patterns from the voice guide
- Run through the vocabulary blacklist — replace any banned words
- Ensure at least one specific data point or named example
- Include natural industry shorthand (MDL, reserve accuracy, outside counsel)
- End with insight, not a hard sell

### Step 4: Optimize for 360 Brew
- **Saves check**: Would a GC bookmark this for reference? If not, add a framework, data point, or checklist.
- **Dwell time check**: Is it structured to keep readers engaged for 30+ seconds?
- **Topic alignment check**: Does this match Wesley's profile topic DNA (litigation intelligence, legal tech, F500)?
- **No external links** in post body — add any URLs as first comment
- **No engagement bait** — no "like if you agree," no "comment YES"

### Step 5: Present to User
Output the draft with:
1. The post text (ready to copy-paste)
2. **Suggested first comment** (if there's a link to share)
3. **Posting notes**: Recommended day/time, any engagement strategy
4. **Pillar tag**: Which content pillar this serves
5. **Save-worthiness score**: Quick assessment of bookmark potential (Low/Medium/High)

## Carousel Variant

If format = carousel, output:
1. **Slide-by-slide outline** (8-10 slides)
2. **Slide 1**: Hook/title slide (contrast, bold statement)
3. **Slides 2-8**: One key point per slide with supporting data
4. **Slide 9-10**: Summary + where to learn more
5. **Cover text for the post** (what appears above the carousel)
6. **Design notes**: Color scheme, typography suggestions aligned with CaseGlide brand

## Quality Gate

Before presenting the draft, verify:
- [ ] No words from the vocabulary blacklist
- [ ] Opens with a pattern from the "Post Opening Patterns" list
- [ ] Closes with a pattern from the "Post Closing Patterns" list
- [ ] Contains at least one specific number or data point
- [ ] Reads as Wesley, not as AI
- [ ] Maps to a defined content pillar
- [ ] Optimized for saves (educational/reference value)
- [ ] No external links in post body
- [ ] 1,000-1,300 characters for text posts
