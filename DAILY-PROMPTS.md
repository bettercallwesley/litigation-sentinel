# CaseGlide Daily Execution Prompts

**Phone-friendly quick reference. Open a new Claude Code session, paste the prompt for today.**

Claude reads CLAUDE.md and GTM-PLAN-V3.md automatically. These prompts are all you need to paste.

---

## PHASE 1: BUILD THE DESTINATION (Feb 21 – Mar 1)

### Day 0 — Fri Feb 21

```
Read GTM-PLAN-V3.md (especially the V3.1 amendment). Add the Beehiiv API key to .env. Then build all four API integration modules:
1. Apollo API (search, enrich, create contacts, enroll in sequences, poll engagement)
2. Pipedrive API (create pipeline with stages from GTM plan, create custom fields, CRUD deals/contacts/activities/notes)
3. Typefully API (schedule LinkedIn posts to my profile)
4. Beehiiv API (manage subscribers, prepare for newsletter sends)
Build these as utility scripts in a new src/lib/api/ directory. Test each integration against the live APIs to confirm authentication works. Show me the results.
```

**After:** Confirm all 4 APIs connected.

---

### Day 1 — Mon Feb 24

```
Read GTM-PLAN-V3.md (V3.1 amendment, "Website Requirements" section). Two tasks today:

TASK 1 — CONTENT RESEARCH: Research the three high-engagement content pillars for the Litigation Sentinel newsletter. I need you to find the most current, important developments that F500 GCs and litigation executives would find essential reading this week:
1. Litigation Funding Transparency: What's the status of the litigation funding bill in the US Senate? Any state-level developments? What should GCs be preparing for?
2. RICO Fraud Ecosystem: What's happening with Uber's RICO cases against fraud rings? Any other major F500 RICO fraud litigation? Pull from case documents and recent filings.
3. AI in Court Documents: What are the latest rules in Florida? Other states? Federal developments? Where is AI failing or being challenged in legal filings?

For each topic: give me a summary of the current state, the most interesting angles for our audience, and a recommended article headline and thesis. Also identify any OTHER current litigation topics that should be on our radar.

TASK 2 — MOCK ENGAGEMENT: Add mock engagement indicators to every article on the Litigation Sentinel website. Each article should show likes, comments, and share counts. Make the numbers realistic and varied (not all the same). These are social proof for first-time visitors. Build it so we can sunset them later when real engagement develops.

Show me the research findings and the updated website with engagement indicators.
```

**After:** Review 3 topic summaries. Pick lead article topic. Tell Claude: "Lead with [topic], also cover [topic] and [topic]"

---

### Day 2 — Tue Feb 25

```
Read GTM-PLAN-V3.md (V3.1 amendment, "Website Requirements" sections 3-5). Three builds today:

1. EXECUTIVE BRIEFING EMAIL GATE: Update the Executive Briefing flow so that when someone completes the assessment, they must enter their email address to receive their personalized report. The report is not shown immediately — it gets emailed to them. This captures who they are so we can follow up. Create a Pipedrive deal when they submit.

2. COUNCIL LANDING PAGE: Build a compelling landing page for the CaseGlide Council program. This replaces the current direct link to the Council app. The page should:
   - Sell the Council program to an executive audience (use positioning from docs/caseglide-master-context-memo-v2.md section 6)
   - Include an email capture form ("Request a Call" — name, email, company, title)
   - Create a Pipedrive deal when they submit
   - Match the Litigation Sentinel design language
   - Do NOT link to or show the actual Council app

3. TRIAL LANDING PAGE: Same as Council but for the Trial platform. Sell it, capture email, create Pipedrive deal. Use positioning from the master context memo. Do NOT link to the actual Trial app.

Update all navigation links on the Litigation Sentinel site: Council and Trial links should point to these new landing pages, not to the apps.

Show me all three working.
```

**After:** Test all 3 forms. Check nav links updated.

---

### Day 3 — Wed Feb 26

> Before pasting: replace [PASTE WES'S DIRECTION HERE] with your actual direction from Day 1.

```
Read GTM-PLAN-V3.md (V3.1 amendment, "Content Strategy" section). Based on Wes's approved content direction from Monday [PASTE WES'S DIRECTION HERE, e.g. "Lead with the litigation funding bill, also cover the Uber RICO case and AI in Florida courts"], write the first set of newsletter articles:

1. LEAD ARTICLE (1,000-1,500 words): Deep analysis of [APPROVED LEAD TOPIC]. This should be the kind of article a F500 GC forwards to their team. Use Wes's voice from docs/caseglide-master-context-memo-v2.md — opinionated, operationally grounded, slightly contrarian. Include specific details, case references, and implications. End with a question that provokes discussion.

2. SHORTER ARTICLE #2 (300-500 words): [APPROVED TOPIC 2]. Same voice. Focused update with analysis.

3. SHORTER ARTICLE #3 (300-500 words): [APPROVED TOPIC 3]. Same voice. Focused update with analysis.

Now update the Litigation Sentinel website:
- Replace the current placeholder/sample articles with these three real articles
- Keep the Executive Briefing ad placement mid-page
- Keep Council and Trial mentions (pointing to new landing pages)
- Make sure engagement indicators are on the new articles
- Ensure the overall site looks like THE definitive litigation intelligence resource for F500

Show me the updated site with the new content.
```

**After:** Read all 3 articles. Mark edits. Tell Claude your edit notes.

---

### Day 4 — Thu Feb 27

> Before pasting: replace [PASTE WES'S EDIT NOTES HERE] with your edits from Day 3.

```
Read GTM-PLAN-V3.md. Two tasks today:

1. CONTENT EDITS: Apply these edits to the newsletter articles: [PASTE WES'S EDIT NOTES HERE]. Then do a final polish pass on all three articles — tighten language, check facts, ensure consistent voice.

2. NEWSLETTER DELIVERY: Set up the full newsletter email delivery pipeline via Beehiiv:
   - Connect the Litigation Sentinel signup form to Beehiiv (create subscriber via API)
   - Design the email newsletter template — it should match the Litigation Sentinel visual style
   - Prepare the first weekly newsletter email using the three articles we wrote (lead article in full, shorter articles as excerpts with "read more" links to the website)
   - Include the Executive Briefing CTA mid-email
   - Include Council and Trial mentions at the bottom (links to landing pages)
   - Show me a preview of the email newsletter before we send anything

3. SITE QA: Full quality check on the Litigation Sentinel website:
   - All links work (navigation, article links, signup form, briefing, council, trial landing pages)
   - Mobile responsive (test at 700px breakpoint)
   - Engagement indicators displaying correctly
   - Design is polished and consistent
   - No broken images, missing fonts, or layout issues

Show me the newsletter email preview and the QA results.
```

**After:** Review newsletter email preview. Click through site on mobile. Say "Site is ready" or "Fix X."

---

### Day 5 — Fri Feb 28

```
Read GTM-PLAN-V3.md. Four tasks to close out Phase 1:

1. PIPEDRIVE SETUP: Using the Pipedrive API, create the full pipeline with stages: Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract. Create all custom fields (campaign_source, icp_segment, engagement_score, last_apollo_activity, linkedin_engaged). Show me it's live.

2. APOLLO TEST: Run an end-to-end test — search for 10 contacts matching ICP (F500 GC/CLO titles, 1000+ employees). Enrich them. Show me names, titles, companies, emails found. DO NOT enroll them yet.

3. LINKEDIN LAUNCH: Schedule the first 3 LinkedIn posts via Typefully API. These should relate to the newsletter content we just published. Follow the V3.1 LinkedIn rules: no links in the post body. For each post, also draft the first comment that includes the Litigation Sentinel link. Use the voice/tone from docs/caseglide-master-context-memo-v2.md. End each post with a question.

4. GO-LIVE CHECKLIST: Generate a comprehensive checklist of everything that's ready vs. anything that still needs attention before we launch outbound next week. Categories: Website, Newsletter, Apollo, Pipedrive, LinkedIn, Forms/Capture.

Show me all results.
```

**After:** Review pipeline, Apollo results, LinkedIn posts, checklist. Say "Ready for outbound launch Monday" or flag issues.

---

## PHASE 2: LAUNCH NEWSLETTER + OUTBOUND (Mar 2 – Mar 14)

### Day 6 — Mon Mar 2 (LAUNCH DAY)

```
Read GTM-PLAN-V3.md (V3.1 amendment). Launch day. Three things:

1. SEND FIRST NEWSLETTER: Send the first weekly Litigation Sentinel newsletter via Beehiiv to all current subscribers. This is the first real send — confirm it went out successfully and show me delivery metrics.

2. APOLLO SEQUENCE SETUP: Generate a Claude Chrome prompt for me to create the 5-step email sequence in Apollo UI. Use the REVISED newsletter-focused copy from the "Revised Apollo Email Sequence" section of the V3.1 amendment. Important:
   - For [CURRENT TOPIC], use this week's lead article topic
   - For {{sentinel_link}}, use the Litigation Sentinel website URL
   - Sequence name: "F500 Legal — Litigation Sentinel Q1 2026"
   - Schedule: Business days, 8am-6pm ET, 150/day limit
   - Auto-stop on reply: Yes
   Also generate a Chrome prompt for connecting the sending mailbox with warm-up settings.

3. FIRST APOLLO BATCH: Search for the first 50 contacts matching ICP criteria. Prioritize F500 GC, CLO, VP Legal titles. Enrich all 50. Show me the list. DO NOT enroll yet — I need to create the sequence in Apollo first.

Show me everything.
```

**After:** Confirm newsletter sent. Execute Chrome prompts to create Apollo sequence + connect mailbox (~75 min). Review 50-contact list. Tell Claude: "Sequence created, ID is [X]. Go ahead and enroll the 50."

---

### Day 7 — Wed Mar 4

> Before pasting: replace [PASTE ID] with your Apollo sequence ID from Day 6.

```
Post prep. Also:
1. Enroll the 50 approved contacts in the Apollo sequence I created (sequence ID: [PASTE ID]).
2. Create Pipedrive deals for all 50 at "Newsletter Subscriber" stage with campaign_source = Apollo.
3. Schedule 3 new LinkedIn posts via Typefully. Connect them to this week's newsletter themes. NO links in post body — draft the first comment with the Litigation Sentinel link for each.
4. Search Apollo for the next 200 contacts matching ICP — build the queue for scaling later this week. Don't enroll yet.
5. Begin research for next week's newsletter: What are the most important litigation developments this week? Focus on our content pillars (litigation funding, RICO, AI in courts, nuclear verdicts, plaintiff bar).

Show me the enrollment confirmation, LinkedIn posts for review, the 200-contact queue, and the content research.
```

**After:** Review LinkedIn posts. Review 200-contact queue. Review content research. Tell Claude: "Next week's newsletter should lead with [topic]"

---

### Day 8 — Fri Mar 6

> Before pasting: replace [PASTE DIRECTION] with your topic choice from Day 7.

```
Weekly report. Plus three additional tasks:

1. WEEK 1 REPORT: Full performance — Apollo deliverability (bounce rate, open rate for first 50), newsletter delivery metrics (sends, opens, clicks), LinkedIn post performance, Pipedrive pipeline snapshot. Flag any issues.

2. ENROLL NEXT BATCH: Enroll 100 contacts from the queue into the Apollo sequence. Update Pipedrive.

3. WRITE WEEK 2 NEWSLETTER: Based on Wes's approved direction [PASTE DIRECTION], write the next weekly newsletter:
   - Lead article (1,000-1,500 words) on [APPROVED TOPIC]
   - 2-3 shorter pieces on other current topics
   - Use Wes's voice. Make it current, sharp, and worth forwarding.
   - Update the Litigation Sentinel website with these new articles
   - Prepare the Beehiiv email version for Monday send

4. VOLUME RECOMMENDATION: Based on Week 1 deliverability data, what should our enrollment volume be next week?

Show me the report, the new articles, and the recommendation.
```

**After:** Review report. Read newsletter articles — mark edits or "approved as-is." Approve volume recommendation.

---

### Day 9 — Mon Mar 9

> Before pasting: replace [PASTE EDITS or "approved as-is"] with your feedback from Day 8.

```
Monday scan. Plus:
1. Apply Wes's edits to the Week 2 newsletter: [PASTE EDITS or "approved as-is"]. Send via Beehiiv.
2. Enroll next Apollo batch (200+ if deliverability supports it from last week's recommendation).
3. Poll all existing contacts for engagement — opens, clicks, replies. Update Pipedrive.
4. Flag any replies for my review.
5. Update the Apollo email sequence: replace [CURRENT TOPIC] in Emails 1 and 4 with this week's lead article topic.
6. Full Monday report: enrolled count, pipeline snapshot, engagement signals, newsletter metrics from last week's send.
```

**After:** Review report (20 min). Review flagged replies (15 min). Prospect meetings.

---

### Day 10 — Wed Mar 11

```
Post prep. Also:
1. Schedule 3 LinkedIn posts (link in first comment, not body).
2. Generate a Claude Chrome prompt for setting up LinkedIn Ads (Campaign D from GTM plan). V3.1 UPDATE: All ads and retargeting should drive to the Litigation Sentinel newsletter website, NOT to the Executive Briefing directly. Include targeting specs (GC, CLO, CRO, VP Risk, VP Legal, Deputy GC, 1000+ employees, US only), budget ($1,500/mo), and creative recommendations.
3. Check mid-week Apollo metrics. Any new engagement signals? Update Pipedrive.
4. Begin Week 3 newsletter content research. What's the biggest litigation story this week?

Show me LinkedIn posts for review, the ads Chrome prompt, and the content research.
```

**After:** Review LinkedIn posts. Review ads Chrome prompt (execute Friday). Pick Week 3 lead topic.

---

### Day 11 — Fri Mar 14

> Before pasting: replace [PASTE DIRECTION] with your topic choice from Day 10.

```
Weekly report. Plus:
1. Full Week 2 performance: Apollo (total enrolled, deliverability, engagement by segment), newsletter (subscribers, open rate, clicks for both issues), LinkedIn (post engagement, any follower growth), Pipedrive (deals by stage, new this week, stale).
2. Write Week 3 newsletter based on Wes's direction [PASTE DIRECTION]. Same format: lead article + 2-3 shorter pieces. Update website. Prepare Beehiiv email.
3. Begin Promoter campaign: identify top 10 media targets from existing docs and draft personalized pitches. Every pitch should drive to the Litigation Sentinel as the CTA.
4. Recommend: should we scale Apollo further? What's working, what's not?

Show me report, newsletter draft, and media pitches.
```

**After:** Review report. Read newsletter — mark edits. Review media pitches. Execute LinkedIn ads Chrome prompt from Wed (~30 min).

---

## PHASE 3: STEADY STATE (Mar 16 – May 31)

Same 3 prompts every week. The newsletter production cycle is woven in.

### Every Monday

> Before pasting: include edits from Friday's newsletter review, or "approved as-is."

```
Monday scan
```

(Claude knows what to do: send newsletter, enroll Apollo batch, poll engagement, update Pipedrive, flag replies, generate report.)

---

### Every Wednesday

```
Post prep
```

(Claude knows what to do: 3 LinkedIn posts, mid-week Apollo check, research next week's newsletter topics, media pitches if active.)

**After:** Review LinkedIn posts. Pick next week's newsletter lead topic.

---

### Every Friday

> Before pasting: replace [PASTE TOPIC DIRECTION FROM WEDNESDAY] with your choice.

```
Weekly report. Also write next week's newsletter based on this direction: [PASTE TOPIC DIRECTION FROM WEDNESDAY]. Show me the draft for review.
```

**After:** Review report. **Read the newsletter draft — mark edits or say "approved as-is."** This is the critical weekly handoff.

---

### On-Demand Prompts

**Meeting prep:**
```
Meeting prep [company name]
```

**Monthly deep review (1st Monday):**
```
Monday scan. Include monthly summary: trends, conversion rates by segment, what's working, what's not, strategy recommendations. Which newsletter topics got the most engagement?
```

**Month-end review (last Friday):**
```
Weekly report. Include month-end summary: total outreach, conversion rates, pipeline value, Executive Briefings completed, newsletter subscriber growth, top-performing content topics, next month priorities. Propose any sequence copy changes based on engagement data.
```
