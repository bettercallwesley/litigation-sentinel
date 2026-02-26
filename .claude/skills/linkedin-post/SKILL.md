# Skill: Draft LinkedIn Post

> Invocable skill for drafting LinkedIn posts for Wesley Todd / CaseGlide.
> Usage: `/linkedin-post` or ask Claude to "draft a LinkedIn post about [topic]"

## Prerequisites

Before drafting, Claude MUST load and follow:
- `.claude/rules/linkedin-2026-algorithm.md` — Algorithm strategy and format guidelines
- `.claude/rules/content-voice-guide.md` — Wesley's voice, anti-AI patterns, vocabulary blacklist
- `.claude/rules/content-topic-priorities.md` — Topic rankings, angles, and hooks
- `src/data/nuclear-verdicts.ts` — Current nuclear verdict data for statistical references
- `src/data/newsletter-articles.ts` — Recent Litigation Sentinel articles for content hooks

## Inputs (Ask the user if not provided)

1. **Topic or trigger** — What's the post about? (article, data point, client insight, industry event)
2. **Content pillar** — Which pillar from the 12 defined pillars? (Check content-topic-priorities.md)
3. **Format preference** — Text post, carousel outline, or video script? (Default: text post)
4. **Audience** — Insurance-focused, corporate GC-focused, or both? (Default: both — use corporate language)
5. **CTA style** — Keyword DM, conference, newsletter link, or none? (Default: choose based on topic)

## Drafting Process

### Step 1: Research Context
- Check `src/data/nuclear-verdicts.ts` for relevant statistics
- Check `src/data/newsletter-articles.ts` for recent articles to reference
- Check `content-topic-priorities.md` for topic-specific angles and hooks
- If the topic relates to a current event, search for recent data
- If referencing Morgan & Morgan, RICO, or Judicial Hellholes — check for latest public data

### Step 2: Select Post Structure

Based on the topic and 2026 algorithm rules, choose the best structure. These are modeled on Wesley's actual top-performing posts:

**A. Bold Claim + Evidence + Challenge (55K impressions — Judicial Hellholes post)**
Best for: Judicial Hellholes, RICO, Nuclear Verdicts
```
[Insider term or bold claim — the hook]

[What that actually means — 2-3 specific bullets with evidence]

[What the defense side should do about it — actionable steps]

[Specific proof: "One legal ops leader we partner with did exactly this..."]

[Soft CTA: "If you'd like [specific resource], message me."]
```

**B. Quote-Led Story (15K impressions — Morgan & Morgan podcast post)**
Best for: Plaintiff's Bar Intelligence, Industry-Specific Risk
```
[Set the scene: "Inside the head of..." or "At [timestamp], [person] discusses..."]

[Direct quotes — specific, colorful, unpolished]

[More quotes — let the source speak]

[Wesley's take: what this means for the reader]

[Punchy close: "Is the Fortune 500 ready for what's next?"]
```

**C. Provocative Data Point (10K impressions — Morgan & Morgan ad spend post)**
Best for: Nuclear Verdicts, Social Inflation, Litigation Finance
```
[One striking data point]

[Context that makes it worse: "But the more important number is what comes next."]

[The escalation: bigger number, trend, trajectory]

[Let that sink in.]

[One-line challenge to the reader]
```

**D. "How I/We" Story (best for CaseGlide Proof, Litigation Intelligence)**
Best for: CaseGlide Proof Points, Defense Attorney Advocacy
```
[Start mid-story — specific moment or prospect quote]

[What we expected vs. what we found]

[The specific numbers/results]

[Why this matters beyond our experience]

[Close with broader implication + soft CTA]
```

**E. Contrarian / Industry Callout (6K impressions — Bill Review Bashing post)**
Best for: Legacy vs Intelligence, F500 Operations
```
[Provocative statement: "You'd be surprised how much damage you're doing with..."]

[The real story behind the surface: "Nobody asks the critical question..."]

[Why the conventional approach fails — with specifics]

[What the best teams do instead]

[Challenge: "If you want to keep [bad practice], you're not a good fit for us."]
```

**F. Framework/Process (best for saves — highest algorithm signal)**
Best for: Educational content, Litigation Intelligence methodology
```
[The problem in one sentence — from a real conversation]

[Why existing approaches fail — name the legacy approach]

[The framework, concrete steps — not generic advice]
Week 1: [specific action]
Week 2: [specific action]
Week 3: [specific action]

[Proof this works — specific client archetype result]

[Keyword CTA: "Reply/message [KEYWORD] and you can schedule this with my experts."]
```

### Step 3: Write the Draft

**Length targets:**
- Short punchy posts: 500-800 characters (provocative data point, humor)
- Standard posts: 1,000-1,800 characters (most post types)
- Long-form narrative: 2,000-3,000 characters (framework/process, "How I" stories)
- Wesley's real posts range widely — match length to content, don't force it

**Voice checklist:**
- Open with a hook that earns the "See more" click (first 2 lines are critical)
- Use Wesley's actual phrases: "Litigation Intelligence," "bean counters," "sorry ... not sorry!"
- Run through the vocabulary blacklist — replace any banned words
- Ensure at least one specific data point, dollar amount, or named example
- Include natural industry shorthand (MDL, OC, Rule 11, reserve accuracy)
- Use contractions throughout (don't, won't, I'm, they're)
- Vary sentence rhythm — mix short punches with longer analytical sentences
- Start some sentences with "And" or "But"
- Include at least one opinion or editorial aside ("which is insane," "that's ridiculous!")
- If insurance-specific language is used, check the translation table in the voice guide

**CTA patterns (from real posts):**
- Keyword DM: "Comment/message INTELLIGENCE and our experts can meet with you."
- Conference: "Connect with our experts at the big Fall conferences."
- Newsletter: "Full analysis in this week's Litigation Sentinel."
- Resource offer: "If you'd like the [specific resource], message me."
- Connecting: "If you'd like to chat about [topic], I'd love to help! DM me."
- Challenge (no CTA): "If you want to keep cutting bills without knowing why, you're not a good fit for us."

### Step 4: Humanization Pass (CRITICAL)

Run through the Anti-AI humanization rules from the voice guide:
1. **Read it aloud mentally** — would Wesley actually say this at a conference?
2. **Check for AI patterns**: perfect grammar, even pacing, corporate buzzwords, repetitive structure
3. **Add imperfection**: casual connector, fragment sentence, mild opinion
4. **Verify contractions**: every "do not" should be "don't," every "it is" should be "it's"
5. **Check transitions**: replace "moreover/furthermore/however" with "And/But/Plus" or nothing
6. **Final gut check**: Does any sentence feel too polished? Rough it up.

### Step 5: Optimize for 360 Brew
- **Saves check**: Would a GC bookmark this for reference? If not, add a framework, data point, or checklist.
- **Dwell time check**: Is it structured to keep readers engaged for 30+ seconds?
- **Topic alignment check**: Does this match Wesley's profile topic DNA (litigation intelligence, legal tech, F500)?
- **No external links** in post body — add any URLs as first comment
- **No engagement bait** — no "like if you agree," no "comment YES"

### Step 6: Present to User

Output the draft with:
1. **The post text** (ready to copy-paste into LinkedIn)
2. **Suggested first comment** (any links, article references, or additional context)
3. **Image recommendation**: Should this post have an image? What kind? (Reference topic-priorities.md image strategy)
4. **Pillar tag**: Which content pillar this serves
5. **Save-worthiness score**: Low / Medium / High
6. **Humanization confidence**: How confident are we this reads as Wesley, not AI? (Low/Medium/High + why)

## Carousel Variant

If format = carousel, output:
1. **Slide-by-slide outline** (8-10 slides)
2. **Slide 1**: Hook/title slide (contrast, bold statement)
3. **Slides 2-8**: One key point per slide with supporting data
4. **Slide 9-10**: Summary + where to learn more
5. **Cover text for the post** (what appears above the carousel)
6. **Design notes**: Color scheme, typography suggestions aligned with CaseGlide brand
7. Best carousel topics: frameworks, data compilations, step-by-step processes, Judicial Hellhole rankings

## Quality Gate

Before presenting the draft, verify ALL of these:
- [ ] No words from the vocabulary blacklist
- [ ] Opens with a proven pattern (check voice guide opening patterns)
- [ ] Closes with a proven pattern (check voice guide closing patterns)
- [ ] Contains at least one specific number, dollar amount, or data point
- [ ] Contains at least one of Wesley's signature phrases or formulas
- [ ] Reads as Wesley, not as AI — passes the "would he say this at a conference?" test
- [ ] Maps to one of the 12 defined content pillars
- [ ] Optimized for saves (educational/reference value)
- [ ] No external links in post body
- [ ] Uses contractions throughout
- [ ] Varied sentence rhythm (no repetitive structure)
- [ ] If insurance language used, corporate translation applied where appropriate
- [ ] No numbered lists or bullet-heavy formatting (narrative flow required)
