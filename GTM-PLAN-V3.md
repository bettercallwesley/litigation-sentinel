# CaseGlide Go-To-Market Plan

**Version 3.1 — February 21, 2026**
**Wes Todd (CEO) + Claude Automation**
**Confidential**

---

## First Principles

One question: **Are Fortune 500 corporate legal and insurance viable growth markets for CaseGlide?**

To answer it by May 31, we need enough qualified conversations with target buyers to assess product-market fit. Everything else is subordinate to that.

The math is simple:

```
Conversations = Outbound Volume × Response Rate × Qualification Rate
```

We control volume. We control quality (which drives response rate). We cannot control qualification rate — that's what we're testing. So the optimization function is:

**Maximize outbound volume and quality. Minimize CEO time per unit of outreach.**

Wes has 10 hours/week for GTM. Every hour Wes spends manually executing tasks that Claude can automate is an hour not spent on prospect meetings, strategy, and closing. The plan that wins is the one where Claude runs the engine and Wes drives the conversations that the engine produces.

### The v2 Plan's Core Failure

The v2 plan treated Claude as an always-on automation engine but then put Wes in the approval loop for every email, every InMail, every LinkedIn post, and every Apollo enrollment. That's not automation — it's a human middleware layer that caps outbound velocity at whatever Wes can manually review and click "send" on.

### What Changes in v3

1. **Wes approves strategy and templates once. Claude executes within the approved framework.** No per-item approval bottleneck.
2. **API-first architecture.** Apollo, Pipedrive, and LinkedIn posting are all API-automatable. We build the integrations.
3. **Outbound velocity is the priority.** Thousands of emails per week, not dozens.
4. **LinkedIn InMail is deprioritized.** No API, highest time cost per touch, lowest volume. Not where you start.
5. **Claude Chrome prompts for non-API tasks.** Structured, atomic prompts for anything that can't be automated via API.

---

## V3.1 Strategic Amendment — Newsletter-First GTM (Feb 21, 2026)

### Why the Change

Steve Kiernan's Apollo campaigns to Fortune 500 did not perform. Diagnosis: generic emails driving to an unconvincing landing page. The response was predictable. F500 GCs get dozens of vendor emails. An email that says "book 30 minutes with me" from a company they've never heard of, linking to a page that doesn't earn their attention, gets deleted.

The fix is not to send more emails. It's to build something worth sending people to.

**The Litigation Sentinel newsletter website becomes the primary destination for ALL outbound.** Before a single Apollo email or LinkedIn post goes out, the website needs to be compelling enough that a F500 GC visiting for the first time sees the best litigation intelligence newsletter in the market. Real content. Real engagement. Real reason to subscribe.

Then outbound drives them there. The newsletter does the trust-building. The Executive Briefing, Council, and Trial ads embedded in the newsletter do the conversion.

### What This Overrides

| Original V3 | V3.1 Override |
|---|---|
| Newsletter is Priority #3 ("holding bin") | **Newsletter website is Priority #1.** Must be built and live before outbound launches. |
| Apollo emails sell the Executive Briefing directly | **Apollo emails sell the newsletter.** Briefing is embedded in newsletter. |
| Monthly newsletter cadence | **Weekly newsletter cadence.** Full week to research best content. |
| Executive Briefing results shown immediately | **Email required to receive report** (lead capture gate). |
| Council/Trial links go directly to apps | **Council/Trial links go to landing pages** with email capture ("request a call"). |
| LinkedIn post includes link in body | **Link goes in first comment** (avoid throttling). |
| LinkedIn Ads drive to Executive Briefing | **LinkedIn Ads and retargeting drive to newsletter website.** |
| Email sequence CTA: "book 30 minutes" | **Email sequence CTA: "check out this week's Litigation Sentinel"** |

### What Stays (Not Overridden)

Everything not listed above. Apollo as the primary outbound engine. Pipedrive pipeline automation. Typefully integration. Promoter marketing. The automation stack and API architecture. 10 hrs/week Wes budget. May 31 decision point. Safety rails. Chrome prompt strategy.

### The New Funnel

```
Apollo Email / LinkedIn Post / LinkedIn Ad
            ↓
   Litigation Sentinel Website
   (best-in-class content + social proof)
            ↓
   Newsletter Subscription (email capture)
            ↓
   Weekly Newsletter (embedded ads)
     ├── Executive Briefing (email gate for report)
     ├── Council Landing Page (email capture → request a call)
     └── Trial Landing Page (email capture → request a call)
            ↓
   Briefing → Council → Trial → Contract
```

The newsletter is the trust-building layer. Nobody books an Executive Briefing from a cold email. They book it after they've been reading sharp litigation intelligence every week and recognize CaseGlide as a serious player.

### Website Requirements (Build Before Outbound)

These must be live before any Apollo email or LinkedIn post goes out:

**1. Current, High-Engagement Content**

The newsletter articles need to cover what F500 GCs and litigation executives find most important RIGHT NOW. Not evergreen thought leadership. Not product-adjacent content. The actual topics these executives are discussing in their meetings this week.

Current high-engagement topics (Feb 2026):

- **Litigation Funding Transparency Bill (US Senate)** — This affects everyone. Daily updates, implications analysis, what GCs should be preparing for. This is the type of content that has that aura of importance that serious executives find engaging.
- **RICO Fraud Ecosystem Cases (Uber v. fraud rings)** — A real Fortune 500 company running a genuinely interesting litigation strategy. Regular updates from case documents. The wide variety of RICO cases related to fraud provide a deep well of compelling content.
- **AI in Court Documents** — Florida rules, other state developments, federal implications. This challenges the audience to think about how AI will be used. Many are afraid of it. They want to hear the real stories, especially where AI isn't working as expected.

These are examples of the frame. The key is identifying what is going to be the most important and influential content to our target audience on a regular basis.

**2. Mock Engagement Indicators**

Every article needs visible likes, comments, and shares. When a F500 GC visits the Litigation Sentinel for the first time, they should not feel like they're going out on a limb. They need to see the type of engagement we expect the newsletter to generate. Social proof. We sunset these over time as real engagement develops.

**3. Executive Briefing Ad (Updated)**

The embedded Briefing CTA stays (the mid-newsletter placement is great). One change: when they complete the assessment, they must enter their email address to receive their personalized report. This captures who they are so we can follow up.

**4. Council Landing Page (New)**

The current Council link goes directly to the app. Change: it goes to a compelling landing page that sells the Council program and requires an email submission to "request a call." Do NOT send them directly into the app.

**5. Trial Landing Page (New)**

Same as Council. Compelling landing page. Email capture. "Request a call." NOT a direct link to the Trial app.

**6. Best-in-Class Design**

This needs to look like the definitive litigation intelligence resource for F500. The design is already strong. Polish it. Make sure the content quality matches.

### Content Strategy (Weekly Newsletter)

- **Cadence:** Weekly. Published every Monday morning.
- **Research window:** Full week to find the best content and produce the best analysis.
- **Voice:** Wes's authentic LinkedIn voice — opinionated, operationally grounded, slightly contrarian, vivid operational detail. Reference docs/caseglide-master-context-memo-v2.md and Wes's LinkedIn post examples for tone calibration.
- **Content pillars (current, Feb 2026):**
  1. Litigation funding transparency (Senate bill, state-level developments)
  2. RICO and fraud ecosystem litigation (Uber and others)
  3. AI in courts (Florida, federal, state rules and implications)
  4. Nuclear verdicts and venue risk (ongoing)
  5. Plaintiff bar tactics and scale (Morgan & Morgan and others)
- **Each weekly issue includes:**
  - 1 lead article: deep analysis of the most important current topic
  - 2-3 shorter pieces: updates, analysis, opinion on other current topics
  - Executive Briefing CTA (embedded ad, mid-newsletter)
  - Council and Trial mentions (links to landing pages, not apps)

### Revised Apollo Email Sequence (Newsletter-Focused)

The 5-email sequence keeps the same problem-narrative spine (drift, outcomes, boards, visibility) but shifts the CTA from "book 30 minutes" to "we cover this weekly in the Litigation Sentinel." The newsletter itself has the Executive Briefing, Council, and Trial ads embedded. The sequence sells the content. The content sells the conversation.

**Email 1 | Day 1**
**Subject:** The case everyone knows, the lesson no one applied

{{first_name}},

The McDonald's hot coffee verdict is the case every executive thinks they understand. Most don't. The real lesson isn't about frivolous lawsuits. It's about how quietly a routine claim drifts into a catastrophic outcome when nobody is watching the right signals.

That pattern plays out inside corporate litigation portfolios constantly. Cases sit. Negotiations stall. Counsel sounds confident, but nothing moves. By the time leadership notices, severity has hardened and the outcome is already expensive.

We write about these patterns weekly in the Litigation Sentinel, a newsletter for litigation leaders who want earlier visibility into where outcomes are actually being set. This week's issue covers [CURRENT TOPIC].

Worth a look: {{sentinel_link}}

Wes Todd
CEO, CaseGlide

---

**Email 2 | Day 3**
**Subject:** Where outcomes actually get set

{{first_name}},

Most litigation outcomes are effectively decided well before mediation or trial. They get set in small moments that rarely show up in status reports:

/ How long since the last real negotiation movement
/ Whether cases hit key inflection points on schedule
/ Which firms push matters forward vs. let them age
/ Which matters get senior attorney attention and which don't

Individual case updates won't show you the pattern. And by the time a quarterly review surfaces the problem, the window for intervention has closed.

We break down these dynamics weekly for litigation leaders at {{company}}'s level. The latest issue is here: {{sentinel_link}}

Wes Todd
CEO, CaseGlide

---

**Email 3 | Day 6**
**Subject:** The questions boards ask

{{first_name}},

When boards and risk committees ask about litigation, they don't want matter summaries. They ask three things:

/ Are we exposed right now?
/ Is that exposure getting better or worse?
/ If we could intervene in three places, where would we do it?

Most legal teams struggle to answer those clearly because the truth lives in emails, PDFs, and individual attorney relationships. The information exists. It's just not structured in a way that produces defensible answers under pressure.

This is the kind of problem we unpack every week in the Litigation Sentinel. If governance over litigation outcomes matters to your team, it's worth subscribing: {{sentinel_link}}

Wes Todd
CEO, CaseGlide

---

**Email 4 | Day 9**
**Subject:** What early visibility changes

{{first_name}},

Late visibility is the most expensive failure mode in litigation.

Once severity hardens on a case, the cost of resolution goes up and the leverage to change direction goes down. Most teams only get a clear picture when something has already gone wrong: a reserve spike, a surprise verdict, a board question they can't answer confidently.

Early visibility doesn't mean more reports. It means seeing where outcomes are being set across the portfolio and knowing which matters need attention before they drift past the point of intervention.

This week's Litigation Sentinel digs into [CURRENT TOPIC]. Hundreds of litigation leaders at companies like {{company}} read it weekly: {{sentinel_link}}

Wes Todd
CEO, CaseGlide

---

**Email 5 | Day 14**
**Subject:** Last one from me

{{first_name}},

I've sent a few notes about how legal and risk teams are getting earlier visibility into litigation outcomes. I don't want to be noise in your inbox.

If you found any of it relevant, the Litigation Sentinel is where we publish this kind of analysis weekly. Free, no commitment: {{sentinel_link}}

If not, no worries. I'll stop here.

Wes Todd
CEO, CaseGlide

---

**Note on {{sentinel_link}}:** This is the Litigation Sentinel website URL. For email deliverability, use a clean domain link (not a redirect or tracking URL on first sends). Once deliverability is established, Apollo's built-in tracking can be enabled.

**Note on [CURRENT TOPIC]:** Claude updates this dynamically each week when preparing the Apollo sequence. It references whatever the current week's lead newsletter article covers. This makes every email feel timely, not templated.

### LinkedIn Rules (V3.1)

- **Post body:** Content only. No external links in the post body. Links get throttled by LinkedIn's algorithm.
- **First comment:** Immediately after posting, add a comment: "This week's Litigation Sentinel covers this in detail: [link]"
- **Frequency:** 3 posts/week via Typefully
- **Voice:** Same as newsletter. Opinionated. Operationally grounded. End with a question.
- **Content connection:** Each LinkedIn post should relate to that week's newsletter content, creating a cohesive content ecosystem.

---

## The Automation Stack

Based on thorough API research, here's what Claude can actually automate and how:

### Tier 1: Full API Automation (No Wes Involvement After Setup)

| Tool | What Claude Can Do via API | What Requires UI |
|------|---------------------------|-----------------|
| **Apollo** | Search 210M+ contacts by title/company/industry/size. Enrich contacts (get emails). Create contacts. Enroll contacts in sequences. Sequences auto-send emails. Monitor engagement (poll for opens/clicks). | Create/edit sequences and their email templates. Create saved lists. View aggregate dashboards. |
| **Pipedrive** | Create deals, contacts, organizations. Move deals through pipeline stages. Add notes. Create activities/follow-ups. Custom fields. Webhooks on all events. | Send emails. View Insights reports. |
| **Typefully** | Schedule LinkedIn posts to Wes's personal profile. Set publish time. | Wes reviews scheduled posts in Typefully UI before they go live. |

### Tier 2: Claude Chrome Prompts (Claude Generates, Chrome Executes)

| Tool | Task | Prompt Strategy |
|------|------|----------------|
| **Apollo UI** | Create/modify email sequences, create saved lists, view engagement dashboards | Atomic step-by-step prompts with exact field values |
| **LinkedIn** | Send InMails, manage Sales Navigator, manage company page | Atomic prompts with pre-written copy |
| **LinkedIn Campaign Manager** | Set up/adjust ad campaigns | Atomic prompts with targeting specs |
| **WordPress** | Update caseglide.com content | Atomic prompts with exact content |

### Tier 3: Manual (Wes Only)

| Task | Why Manual |
|------|-----------|
| Prospect meetings/demos | Requires human judgment and relationship |
| Strategy decisions | CEO function |
| Warm introductions | Personal network |
| Podcast/media interviews | Wes is the voice |

---

## Campaign Priority Order

Ranked by: (outbound velocity × automation potential) ÷ (Wes time required)

### Priority 1: Apollo Volume Engine
- **Volume:** 500–1,500+ emails/week (depending on mailbox count and warm-up)
- **Automation:** 95% via API. Wes approves templates once.
- **Wes time:** ~1 hr/week reviewing performance reports
- **Why first:** Highest velocity, most automatable, channel already validated (16.7% open, 12.1% click under v1)

### Priority 2: Pipedrive Pipeline Automation
- **What it does:** Automatically creates deals from Apollo engaged contacts, tracks pipeline, provides context for meetings
- **Automation:** 100% via API after setup
- **Wes time:** 0 hrs/week (runs in background)
- **Why second:** Infrastructure that makes everything else work. No pipeline management = no way to measure progress toward May 31 answer.

### Priority 3: Litigation Sentinel Newsletter
- **What it does:** The holding bin. Captures prospects not ready for a briefing.
- **Automation:** Claude writes content. Email service handles delivery.
- **Wes time:** ~30 min/week reviewing newsletter draft
- **Why third:** Every campaign needs a destination. Newsletter is the low-commitment destination that lets us market repeatedly.

### Priority 4: LinkedIn Organic via Typefully
- **Volume:** 3 posts/week on Wes's personal profile
- **Automation:** Claude drafts → Typefully API schedules → Wes reviews in Typefully UI
- **Wes time:** ~30 min/week reviewing scheduled posts
- **Why fourth:** Creates credibility and air cover so Apollo emails don't feel random. But it's air cover — not the primary outbound channel.

### Priority 5: LinkedIn Ads
- **Volume:** Runs continuously after setup
- **Automation:** Set and adjust periodically
- **Wes time:** ~30 min/week reviewing spend and performance
- **Why fifth:** Retargets Apollo engagers and website visitors. Multiplier for Campaign A.

### Priority 6: Promoter Marketing
- **Volume:** 10–20 outreach emails/week to media targets
- **Automation:** Claude drafts, can send via Apollo sequences or manual
- **Wes time:** ~1 hr/week reviewing pitches, conducting interviews
- **Why sixth:** Valuable for credibility but lower volume than email. Phase 2 activity.

### Deprioritized: LinkedIn InMail / Sales Navigator
- **Volume:** 10–15/week maximum (LinkedIn limits)
- **Automation:** None via API. Requires manual sending or browser automation.
- **Wes time:** 2–3 hrs/week for 15 touches
- **Why deprioritized:** Worst ratio of time-to-outbound of any channel. If we have spare capacity, Claude generates Chrome prompts for batch InMail sending. Otherwise, skip it entirely.

---

## Campaign A: Apollo Volume Engine (Detailed)

This is the primary growth engine. Here's exactly how it works.

### The Automation Flow

```
Claude (API)                          Apollo (Auto)
───────────                           ─────────────
1. Search People API
   → F500 GCs, CLOs, CROs,
     VP Claims, CCOs
   → Filter by title, company
     size, industry
   → Free, no credits

2. Enrich contacts
   → Get business emails
   → 1 credit per email

3. Create contacts
   → Add to Apollo database
   → Tag with campaign/segment

4. Enroll in sequence
   → Specify sequence ID
   → Specify sending mailbox
                                     5. Emails fire automatically
                                        → Per sequence schedule
                                        → 5 touches over 14 days
                                        → Auto-stop on reply
                                        → Auto-pause on OOO
                                        → Auto-fail on bounce

6. Poll for engagement
   → Sort contacts by last
     opened/clicked
   → Identify engaged contacts

7. Create Pipedrive deals
   → For contacts showing intent
   → Auto-set stage, source,
     campaign attribution
```

### Volume Projections

| Mailboxes | Daily Send Limit | Weekly Volume | Monthly Volume |
|-----------|-----------------|---------------|----------------|
| 1 | 150/day | 750 | 3,000 |
| 2 | 300/day | 1,500 | 6,000 |
| 3 | 450/day | 2,250 | 9,000 |

Steve's original list: 3,500 contacts. With 2 mailboxes, we cycle the entire list in ~2.5 weeks. But we're not limited to the existing list — Apollo's People Search API accesses 210M+ contacts. Claude continuously identifies new prospects matching ICP criteria and enrolls them.

### Email Sequence

**V3.1 UPDATE:** The briefing-focused email sequence has been replaced by a newsletter-focused sequence. See the **"Revised Apollo Email Sequence (Newsletter-Focused)"** in the V3.1 Strategic Amendment section above for the approved copy. The emails keep the same problem-narrative spine but drive to the Litigation Sentinel newsletter instead of a direct briefing pitch.

**Summary Table:**

| # | Day | Subject Line | CTA |
|---|-----|-------------|-----|
| 1 | 1 | The case everyone knows, the lesson no one applied | Newsletter link |
| 2 | 3 | Where outcomes actually get set | Newsletter link |
| 3 | 6 | The questions boards ask | Newsletter link |
| 4 | 9 | What early visibility changes | Newsletter link |
| 5 | 14 | Last one from me | Newsletter link (polite close) |

### What Needs UI Setup (Claude Chrome Prompts)

Claude will generate detailed, atomic prompts for Wes to execute in Claude Chrome:

1. **Create/update the email sequence** in Apollo UI with the approved copy
2. **Create saved lists** for different ICP segments (F500 Legal, Insurance, etc.)
3. **Configure sending schedule** (business hours, timezone, daily limits)
4. **Set up mailbox connections** for sending accounts

After this one-time setup, the API handles everything else.

### Wes's Weekly Apollo Involvement

| Task | Time | Cadence |
|------|------|---------|
| Review Claude's weekly performance report | 30 min | Monday |
| Approve any sequence copy changes Claude proposes | 15 min | As needed |
| Review engaged contact highlights | 15 min | Monday |
| **Total** | **~1 hr/week** | |

---

## Campaign B: LinkedIn Organic via Typefully

### Why Typefully

- **$19/month** Creator plan
- Clean v2 REST API with Bearer token auth
- LinkedIn **personal profile** posting (critical — this is Wes's profile, not a company page)
- Scheduling with `publish_at` (ISO 8601, `"now"`, or `"next-free-slot"`)
- Web UI where Wes can review scheduled posts before they go live
- Webhook support for publish notifications

### The Automation Flow

```
Claude (Code/Chat)              Typefully (API)              LinkedIn
──────────────────              ───────────────              ────────
1. Draft 3 posts/week
   → Litigation intelligence
   → Nuclear verdict trends
   → CaseGlide thought leader

2. Schedule via API             3. Posts appear in
   → POST /v2/social-sets/        Typefully queue
     {id}/drafts
   → Set publish_at for
     optimal times
                                4. Wes reviews in UI
                                   → Approve / edit / reject
                                                              5. Auto-publish at
                                                                 scheduled time
```

### Content Pillars

Claude drafts all content. Wes reviews the weekly batch in Typefully (not one-by-one in Claude's output).

1. **Litigation Intelligence Insights** — What GCs/CLOs are missing in their data
2. **Nuclear Verdict Trends** — Pattern recognition across public case outcomes
3. **The Governance Gap** — Why visibility is the most expensive failure mode
4. **Defense Counsel Performance** — Evidence-based outside counsel management
5. **Board-Level Questions** — What boards actually ask about litigation exposure

### Wes's Weekly LinkedIn Involvement

| Task | Time | Cadence |
|------|------|---------|
| Review 3 scheduled posts in Typefully | 15 min | Wednesday |
| Respond to comments/DMs on published posts | 15 min | Wednesday |
| **Total** | **~30 min/week** | |

---

## Pipedrive Pipeline Automation

### Pipeline Stages

```
Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract
```

Claude creates and manages this entire pipeline via API:

### Automated Triggers

| Trigger | Action | Via |
|---------|--------|-----|
| Apollo contact opens 2+ emails | Create Pipedrive deal at "Newsletter Subscriber" stage | Apollo API → Claude → Pipedrive API |
| Contact clicks Executive Briefing link | Move deal to "Briefing Scheduled" stage, create follow-up activity | Apollo API → Claude → Pipedrive API |
| Contact replies to email | Flag for Wes review, add note with reply content | Apollo API → Claude → Pipedrive API |
| Newsletter signup form submitted | Create deal + contact, set stage | Webhook → Claude → Pipedrive API |
| Wes completes a briefing | Claude adds meeting notes, moves to "Briefing Completed", creates follow-up | Manual trigger → Claude → Pipedrive API |

### Custom Fields (Created via API)

| Field | Type | Purpose |
|-------|------|---------|
| `campaign_source` | Enum | A (Apollo), B (LinkedIn), C (Promoter), D (Ads) |
| `icp_segment` | Enum | F500 Legal, Insurance, Other |
| `engagement_score` | Numeric | Derived from Apollo email engagement |
| `last_apollo_activity` | Date | Last email open/click |
| `linkedin_engaged` | Boolean | Engaged with Wes's LinkedIn content |

### Weekly Pipeline Report (Claude → Wes, Automated)

- Deals by stage (count + value)
- Stage conversion rates
- Deals that haven't moved in 7+ days (stale)
- New deals created this week (by campaign source)
- Activities completed vs. scheduled

---

## Litigation Sentinel Newsletter

**V3.1 UPDATE:** The newsletter is no longer a "holding bin." It is the PRIMARY destination and the trust-building engine for the entire GTM.

### What Needs to Be Built

1. **Email signup form** on the Litigation Sentinel site → connected to Beehiiv (free tier, REST API)
2. **Email gate on Executive Briefing results** → must enter email to receive personalized report
3. **Council landing page** → compelling sales page with email capture ("request a call")
4. **Trial landing page** → compelling sales page with email capture ("request a call")
5. **Mock engagement indicators** → likes, comments, shares on every article (social proof)
6. **Email delivery pipeline** → weekly newsletter sent to subscribers via Beehiiv
7. **Vercel Analytics** → track traffic and conversion (free, already available)

### Newsletter Content (Claude Writes, Weekly)

Weekly newsletter (published Monday morning) with:
- 1 lead article on the most important current topic (1,000–1,500 words)
- 2–3 shorter insights on other current topics (300–500 words each)
- Executive Briefing CTA embedded mid-newsletter
- Council and Trial mentions (links to landing pages, not apps)
- Content must be CURRENT — what F500 GCs care about THIS week

Wes reviews the draft once before send (Friday). Claude handles all research, writing, formatting, and scheduling.

### Newsletter as Campaign Destination

| Campaign | Newsletter Role |
|----------|----------------|
| A (Apollo) | **Primary CTA** — all emails drive to newsletter |
| B (LinkedIn) | Link in first comment of every post |
| C (Promoter) | Primary CTA for all media collaborations |
| D (Ads) | **All ads and retargeting drive to newsletter website** |

---

## Campaign C: Promoter Marketing

Phase 2 activity. Launches after Apollo engine and newsletter are running.

### Automation Approach

Media outreach emails can flow through Apollo sequences (same infrastructure as Campaign A) or be sent individually via Claude Chrome prompts.

1. Claude maintains and expands the Industry Media Target List (seeded from Steve's Feb 28 deliverable)
2. Claude drafts personalized outreach for each target
3. Wes batch-reviews pitches weekly (same Typefully-style review pattern)
4. Approved outreach gets sent

### Pitch Angles (Unchanged from v2)

- "Where Nuclear Verdicts Actually Start"
- "The Questions Boards Are Asking About Litigation"
- "Why Your E-Billing System Is Lying to You"
- "The AI Opportunity in Litigation Management"
- "Defense Counsel Performance: What the Data Shows"

Every collaboration drives to the Litigation Sentinel Newsletter as the CTA.

---

## Campaign D: LinkedIn Ads

**V3.1 UPDATE:** All ads and retargeting now drive to the Litigation Sentinel newsletter website, not directly to the Executive Briefing.

Set-and-forget after initial setup. Claude generates a Claude Chrome prompt for Wes to configure the campaigns.

- **Thought Leader Ads:** Boost Wes's organic posts exceeding 2% engagement
- **Direct Response Ads:** Creative driving to **Litigation Sentinel newsletter website** (V3.1 change — was Executive Briefing)
- **Retargeting:** LinkedIn Insight Tag on caseglide.com + Litigation Sentinel site. Apollo email list as matched audience. **All retargeting drives to newsletter website** (V3.1 change).
- **Targeting:** GC, CLO, CRO, VP Risk, VP Legal, Deputy GC. VP/CXO/Director. 1,000+ employees. US only.
- **Budget:** $1,500/month. Scale if cost-per-subscriber < $50 or cost-per-briefing < $500.

LinkedIn Marketing API could automate campaign management if we get approved. Claude Chrome handles it until then.

---

## What Wes Does: 10 Hours/Week Redesigned

The v2 plan had Wes manually executing in every tool. The v3/v3.1 plan has Wes doing what only Wes can do. The V3.1 addition: Wes reviews a weekly newsletter draft every Friday.

### Monday (2.5 hours)

| Task | Time | Description |
|------|------|-------------|
| Review Claude's weekly report | 30 min | Pipeline, Apollo performance, LinkedIn engagement, newsletter metrics |
| Review Apollo engaged contacts | 15 min | High-intent signals, anyone to follow up with personally |
| Strategy adjustments | 15 min | Change targeting, adjust messaging, redirect budget |
| Prospect meetings | 1–1.5 hrs | Any Monday-scheduled demos/calls |

### Wednesday (2 hours)

| Task | Time | Description |
|------|------|-------------|
| Review Typefully queue (3 posts) | 15 min | Approve/edit LinkedIn posts for the week |
| Respond to LinkedIn DMs/comments | 15 min | Engagement that requires personal response |
| Review next week's content research — pick lead topic | 15 min | **V3.1:** Claude presents content research Wed, Wes picks the newsletter direction |
| Review Promoter outreach drafts | 15 min | Approve media pitches (Phase 2) |
| Prospect meetings | 1 hr | Any Wednesday-scheduled demos/calls |

### Thursday (2 hours)

| Task | Time | Description |
|------|------|-------------|
| Prospect meetings | 2 hrs | Any Thursday-scheduled demos/calls |

### Friday (2 hours)

| Task | Time | Description |
|------|------|-------------|
| Review weekly report | 20 min | Performance across all channels |
| **Review newsletter draft** | 30 min | **V3.1: WEEKLY.** Read the draft, mark edits or approve. This is the critical handoff. |
| Meeting prep review | 15 min | Claude-generated addendums for next week's meetings |
| Next week planning | 15 min | Priorities, adjustments |

**Notice what's NOT on this schedule:** Manually sending emails. Manually enrolling contacts. Manually entering Pipedrive data. Manually scheduling LinkedIn posts. Manually pulling reports. Writing newsletter articles from scratch. Claude does all of that. Wes's one content obligation is reading the newsletter draft Friday and saying "approved" or "change X."

---

## What Claude Does Autonomously

### Daily (Automated via API)

- Enroll new contacts in Apollo sequences
- Poll Apollo for engagement signals
- Create Pipedrive deals for engaged contacts
- Update Pipedrive deal stages based on signals
- Schedule LinkedIn posts via Typefully API

### Weekly (Triggered by Session)

- **V3.1: Research current litigation topics** (Wed) and **write full weekly newsletter** (Fri) for Wes review
- **V3.1: Update Litigation Sentinel website** with new articles (Mon, after Wes approves)
- **V3.1: Send weekly newsletter** via Beehiiv (Mon)
- **V3.1: Update Apollo sequence** [CURRENT TOPIC] references to match this week's newsletter
- Generate weekly performance report
- Draft 3 LinkedIn posts for Typefully queue (no links in body; draft first comment with newsletter link)
- Identify new ICP prospects via Apollo People Search
- Enrich and add new contacts to sequences
- Generate Claude Chrome prompts for any UI-only tasks
- Review pipeline for stale deals, generate follow-up recommendations

### Monthly

- Expand Industry Media Target List
- Review and propose sequence copy optimizations (Wes approves changes)
- Generate monthly performance summary with trends
- **V3.1: Analyze which newsletter topics drove the most engagement** — refine content strategy

### On Demand

- Meeting prep addendums (when Wes says "Meeting prep [prospect]")
- Prospect research
- Competitive intelligence
- Content for caseglide.com updates

---

## Claude Chrome Prompt Strategy

For tasks that cannot be automated via API, Claude generates structured prompts optimized for Claude Chrome execution. Based on the browser-agent research, effective prompts follow these principles:

### Prompt Structure

1. **One atomic task per prompt.** Don't combine "create a sequence AND enroll contacts." Two separate prompts.
2. **State WHAT, not HOW.** "Create a new email sequence in Apollo called 'F500 Legal Q1' with 5 steps" — not "click the Sequences tab, then click New Sequence..."
3. **Include all data values.** Every field value, every piece of copy, every setting pre-specified in the prompt.
4. **Specify the expected end state.** "When complete, the sequence should show 5 steps with status 'Active'."

### Example Prompt Library (Generated Per Session)

**Apollo: Create Email Sequence**
```
In Apollo (app.apollo.io), create a new email sequence:
- Name: "F500 Legal — Litigation Intelligence Q1 2026"
- Steps: [exact email copy for all 5 steps provided]
- Schedule: Business days, 8am-6pm ET
- Sending limits: 150/day
- Auto-stop on reply: Yes
- After creation, activate the sequence.
```

**LinkedIn: Send InMail Batch**
```
In LinkedIn Sales Navigator, send the following InMails.
For each one, navigate to the profile, click Message,
paste the provided copy, and send:

1. [Name] at [Company]: [pre-written personalized InMail]
2. [Name] at [Company]: [pre-written personalized InMail]
...
```

Claude generates these prompts fresh each session with current data, ready for Wes to paste into Claude Chrome.

---

## Execution Schedule — Day by Day (V3.1)

**V3.1 UPDATE:** This replaces the original V3 day-by-day. The key difference: we build the newsletter website FIRST, launch the first weekly newsletter SECOND, and only THEN turn on outbound (Apollo + LinkedIn). Nothing goes out until the destination is compelling.

**Four phases. 14 weeks. 10 hours/week max from Wes.**

Every session below: open Claude Code in the `litigation-sentinel` repo and paste the exact prompt shown. Claude reads CLAUDE.md automatically, which loads the full GTM context and document references.

---

### PHASE 1: BUILD THE DESTINATION (Feb 21 – Mar 1)

The Litigation Sentinel website must look like the best litigation intelligence newsletter for F500 before a single outbound email goes out. This phase builds the content, the social proof, the landing pages, and the email capture gates.

#### Day 0 — Fri Feb 21 | 1 hr Wes time (TODAY)

**Wes does (no Claude prompt needed):**
- [x] Provide Apollo API key
- [x] Provide Pipedrive API token
- [x] Provide Typefully API key
- [x] Sign up for Beehiiv (free tier, beehiiv.com) → provide API key to Claude
- [x] Approve V3.1 strategic amendment (this document)

**Prompt:**
```
Read GTM-PLAN-V3.md (especially the V3.1 amendment). Add the Beehiiv API key to .env. Then build all four API integration modules:
1. Apollo API (search, enrich, create contacts, enroll in sequences, poll engagement)
2. Pipedrive API (create pipeline with stages from GTM plan, create custom fields, CRUD deals/contacts/activities/notes)
3. Typefully API (schedule LinkedIn posts to my profile)
4. Beehiiv API (manage subscribers, prepare for newsletter sends)
Build these as utility scripts in a new src/lib/api/ directory. Test each integration against the live APIs to confirm authentication works. Show me the results.
```

**Milestone:** All 4 API connections verified working.

---

#### Day 1 — Mon Feb 24 | 1.5 hrs Wes time

**Focus:** Research current high-engagement topics + build mock engagement indicators on website.

**Prompt:**
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

**Wes does after Claude finishes:**
- Review the 3 topic research summaries — approve angles or redirect (30 min)
- Review the engagement indicators on the site — do they look credible? (15 min)
- Decide: which topic should be the lead article for Week 1's newsletter? (15 min)
- Give Claude the direction: "Lead with [topic], also cover [topic] and [topic]" (5 min)

**Milestone:** Content direction set. Social proof live on website.

---

#### Day 2 — Tue Feb 25 | 1 hr Wes time

**Focus:** Build Council and Trial landing pages with email capture. Update Executive Briefing to gate report behind email.

**Prompt:**
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

**Wes does after Claude finishes:**
- Test Executive Briefing email gate — does it capture the email and send the report? (15 min)
- Review Council landing page — is the copy compelling? Does the form work? (15 min)
- Review Trial landing page — same checks (15 min)
- Check that navigation links are updated (5 min)

**Milestone:** All three conversion funnels have email capture gates. No more sending people directly into apps.

---

#### Day 3 — Wed Feb 26 | 1.5 hrs Wes time

**Focus:** Write the first newsletter articles. Replace placeholder content on the Litigation Sentinel website with real, current content.

**Prompt:**
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

**Wes does after Claude finishes:**
- Read all three articles — mark any edits, tone adjustments, factual corrections (45 min)
- Review the site overall — does it look like something worth subscribing to? (15 min)
- Give Claude edit notes: "Change X, adjust Y, add Z" (15 min)

**Milestone:** Real, current content on the website. Site is starting to look like a destination.

---

#### Day 4 — Thu Feb 27 | 1 hr Wes time

**Focus:** Apply Wes's content edits. Polish the site design. Set up newsletter email delivery pipeline.

**Prompt:**
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

**Wes does after Claude finishes:**
- Review the newsletter email preview — does it look professional? (20 min)
- Click through the full site on mobile — any issues? (15 min)
- Final approval: "Site is ready" or "Fix X before we go" (10 min)

**Milestone:** Website polished. Newsletter email ready to send. Signup form connected to Beehiiv.

---

#### Day 5 — Fri Feb 28 | 1.5 hrs Wes time

**Focus:** Pipedrive pipeline setup. Apollo integration test. First LinkedIn posts scheduled. Confirm everything is go for Week 2 launch.

**Prompt:**
```
Read GTM-PLAN-V3.md. Four tasks to close out Phase 1:

1. PIPEDRIVE SETUP: Using the Pipedrive API, create the full pipeline with stages: Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract. Create all custom fields (campaign_source, icp_segment, engagement_score, last_apollo_activity, linkedin_engaged). Show me it's live.

2. APOLLO TEST: Run an end-to-end test — search for 10 contacts matching ICP (F500 GC/CLO titles, 1000+ employees). Enrich them. Show me names, titles, companies, emails found. DO NOT enroll them yet.

3. LINKEDIN LAUNCH: Schedule the first 3 LinkedIn posts via Typefully API. These should relate to the newsletter content we just published. Follow the V3.1 LinkedIn rules: no links in the post body. For each post, also draft the first comment that includes the Litigation Sentinel link. Use the voice/tone from docs/caseglide-master-context-memo-v2.md. End each post with a question.

4. GO-LIVE CHECKLIST: Generate a comprehensive checklist of everything that's ready vs. anything that still needs attention before we launch outbound next week. Categories: Website, Newsletter, Apollo, Pipedrive, LinkedIn, Forms/Capture.

Show me all results.
```

**Wes does after Claude finishes:**
- Review Pipedrive pipeline in UI — confirm stages look right (10 min)
- Review Apollo search results — are these the right people? (15 min)
- Review 3 LinkedIn posts in Typefully — approve/edit (15 min)
- Review go-live checklist — flag any blockers (15 min)
- Decision: "Ready for outbound launch Monday" or "Fix X first" (5 min)

**Milestone:** End of Phase 1. Website is compelling. Newsletter is ready to send. Pipeline is live. LinkedIn is queued. Apollo is tested. Ready for outbound.

---

### PHASE 2: LAUNCH NEWSLETTER + OUTBOUND (Mar 2 – Mar 14)

The destination is built. Now we drive traffic to it. First newsletter goes out. Apollo emails start flowing. LinkedIn posts go live. Everything points to the Litigation Sentinel.

#### Day 6 — Mon Mar 2 | 2 hrs Wes time

**Focus:** Send first newsletter. Rewrite Apollo sequence for newsletter CTA. Begin Apollo warm-up enrollment.

**Prompt:**
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

**Wes does after Claude finishes:**
- Confirm newsletter delivery (5 min)
- Execute Chrome prompt: Create Apollo sequence with new copy (45 min)
- Execute Chrome prompt: Connect mailbox + warm-up (30 min)
- Review the 50-contact list — any names to exclude? (15 min)
- Confirm to Claude: "Sequence created, ID is [X]. Go ahead and enroll the 50." (5 min)

**Milestone:** First newsletter sent. Apollo sequence created with newsletter-focused copy. First 50 contacts ready for enrollment.

---

#### Day 7 — Wed Mar 4 | 1.5 hrs Wes time

**Focus:** Enroll first Apollo batch. Check early signals. Schedule LinkedIn posts. Start writing Week 2 newsletter.

**Prompt:**
```
Post prep. Also:
1. Enroll the 50 approved contacts in the Apollo sequence I created (sequence ID: [PASTE ID]).
2. Create Pipedrive deals for all 50 at "Newsletter Subscriber" stage with campaign_source = Apollo.
3. Schedule 3 new LinkedIn posts via Typefully. Connect them to this week's newsletter themes. NO links in post body — draft the first comment with the Litigation Sentinel link for each.
4. Search Apollo for the next 200 contacts matching ICP — build the queue for scaling later this week. Don't enroll yet.
5. Begin research for next week's newsletter: What are the most important litigation developments this week? Focus on our content pillars (litigation funding, RICO, AI in courts, nuclear verdicts, plaintiff bar).

Show me the enrollment confirmation, LinkedIn posts for review, the 200-contact queue, and the content research.
```

**Wes does after Claude finishes:**
- Review LinkedIn posts in Typefully — approve/edit (15 min)
- Review the 200-contact queue — approve for later enrollment (15 min)
- Review content research — which topics for next week's newsletter? (30 min)
- Respond to any LinkedIn DMs/comments (15 min)
- Give Claude direction: "Next week's newsletter should lead with [topic]" (5 min)

**Milestone:** First 50 enrolled. LinkedIn live. Week 2 content direction set.

---

#### Day 8 — Fri Mar 6 | 1.5 hrs Wes time

**Focus:** Week 1 report. Enroll next batch. Write Week 2 newsletter.

**Prompt:**
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

**Wes does after Claude finishes:**
- Review weekly report (20 min)
- Read the Week 2 newsletter articles — mark edits (30 min)
- Approve volume recommendation (5 min)
- Next week planning (15 min)

**Milestone:** 150 contacts enrolled. Week 2 newsletter drafted. Deliverability data in.

---

#### Day 9 — Mon Mar 9 | 2 hrs Wes time

**Focus:** Send Week 2 newsletter. Scale Apollo. Monday scan.

**Prompt:**
```
Monday scan. Plus:
1. Apply Wes's edits to the Week 2 newsletter: [PASTE EDITS or "approved as-is"]. Send via Beehiiv.
2. Enroll next Apollo batch (200+ if deliverability supports it from last week's recommendation).
3. Poll all existing contacts for engagement — opens, clicks, replies. Update Pipedrive.
4. Flag any replies for my review.
5. Update the Apollo email sequence: replace [CURRENT TOPIC] in Emails 1 and 4 with this week's lead article topic.
6. Full Monday report: enrolled count, pipeline snapshot, engagement signals, newsletter metrics from last week's send.
```

**Wes actions:** Review report (20 min), review flagged replies (15 min), prospect meetings (1 hr), strategy notes (15 min).

**Milestone:** 350+ contacts enrolled. Two newsletters sent. Engagement data accumulating.

---

#### Day 10 — Wed Mar 11 | 1.5 hrs Wes time

**Focus:** LinkedIn posts. Begin LinkedIn ads preparation. Week 3 content research.

**Prompt:**
```
Post prep. Also:
1. Schedule 3 LinkedIn posts (link in first comment, not body).
2. Generate a Claude Chrome prompt for setting up LinkedIn Ads (Campaign D from GTM plan). V3.1 UPDATE: All ads and retargeting should drive to the Litigation Sentinel newsletter website, NOT to the Executive Briefing directly. Include targeting specs (GC, CLO, CRO, VP Risk, VP Legal, Deputy GC, 1000+ employees, US only), budget ($1,500/mo), and creative recommendations.
3. Check mid-week Apollo metrics. Any new engagement signals? Update Pipedrive.
4. Begin Week 3 newsletter content research. What's the biggest litigation story this week?

Show me LinkedIn posts for review, the ads Chrome prompt, and the content research.
```

**Wes actions:** Review LinkedIn posts (15 min), review LinkedIn ads Chrome prompt — plan to execute Friday (20 min), review content research — pick Week 3 lead topic (20 min), LinkedIn engagement (15 min).

---

#### Day 11 — Fri Mar 14 | 2 hrs Wes time

**Focus:** Week 2 report. Write Week 3 newsletter. LinkedIn ads setup. Promoter outreach prep.

**Prompt:**
```
Weekly report. Plus:
1. Full Week 2 performance: Apollo (total enrolled, deliverability, engagement by segment), newsletter (subscribers, open rate, clicks for both issues), LinkedIn (post engagement, any follower growth), Pipedrive (deals by stage, new this week, stale).
2. Write Week 3 newsletter based on Wes's direction [PASTE DIRECTION]. Same format: lead article + 2-3 shorter pieces. Update website. Prepare Beehiiv email.
3. Begin Promoter campaign: identify top 10 media targets from existing docs and draft personalized pitches. Every pitch should drive to the Litigation Sentinel as the CTA.
4. Recommend: should we scale Apollo further? What's working, what's not?

Show me report, newsletter draft, and media pitches.
```

**Wes actions:** Review report (20 min), read newsletter draft — mark edits (30 min), review media pitches — approve/edit (20 min), execute LinkedIn ads Chrome prompt from Wednesday (30 min), next week planning (15 min).

**Milestone:** End of Phase 2. Two weeks of newsletters sent. 350+ contacts in Apollo. LinkedIn ads launching. Promoter outreach drafted. All channels live and pointing to Litigation Sentinel.

---

### PHASE 3: FULL EXECUTION (Mar 16 – May 31)

Steady-state rhythm. Same schedule every week. Claude runs the engine. Wes drives the conversations that the engine produces.

The weekly rhythm has one addition vs. V3: **a weekly newsletter production cycle** woven into the existing Mon/Wed/Fri cadence.

#### Every Monday | 2–2.5 hrs Wes time

**Prompt:**
```
Monday scan
```

**What Claude does automatically:**
- Sends this week's newsletter via Beehiiv (if Wes approved Friday's draft)
- Applies any edits Wes noted to the newsletter before sending
- Updates Litigation Sentinel website with new articles
- Updates Apollo email sequence [CURRENT TOPIC] references to this week's lead article
- Searches and enrolls next Apollo batch (target: 500+/week)
- Polls all contacts for engagement signals (opens, clicks, replies)
- Updates Pipedrive — new deals, stage movements, engagement scores
- Flags replies and high-intent contacts for Wes review
- Generates weekly performance report (Apollo, newsletter, LinkedIn, pipeline)
- Identifies stale deals (no movement in 7+ days), recommends action

**Wes actions:**
- Review performance report (30 min)
- Review engaged contacts — decide on personal follow-ups (15 min)
- Strategy adjustments if needed (15 min)
- Prospect meetings (1–1.5 hrs)

---

#### Every Wednesday | 1.5–2 hrs Wes time

**Prompt:**
```
Post prep
```

**What Claude does automatically:**
- Drafts and schedules 3 LinkedIn posts via Typefully (no links in body, link in first comment draft)
- Checks mid-week Apollo metrics, updates Pipedrive
- Begins research for NEXT week's newsletter (content pillars: litigation funding, RICO, AI in courts, nuclear verdicts, plaintiff bar)
- Drafts media pitches for Promoter campaign if active
- Presents content research and recommends next week's newsletter topics

**Wes actions:**
- Review LinkedIn posts in Typefully (15 min)
- Respond to LinkedIn DMs/comments (15 min)
- Review content research — pick next week's newsletter lead topic (15 min)
- Review media pitches if applicable (15 min)
- Prospect meetings (45 min–1 hr)

---

#### Every Thursday | 2 hrs Wes time

**No prompt unless meetings are scheduled.**

**Prompt if meeting scheduled:**
```
Meeting prep [company name]
```

**What Claude does:**
- Researches the prospect company (litigation portfolio, public filings, news)
- Identifies likely pain points from ICP profile
- Suggests talking points tied to the demo script
- Prepares a one-page briefing

**Wes actions:**
- Review meeting prep (15 min)
- Conduct prospect meetings (1.5 hrs)

---

#### Every Friday | 1.5–2 hrs Wes time

**Prompt:**
```
Weekly report. Also write next week's newsletter based on this direction: [PASTE TOPIC DIRECTION FROM WEDNESDAY]. Show me the draft for review.
```

**What Claude does automatically:**
- Comprehensive weekly report (all channels, all metrics)
- Pipeline review with specific recommendations
- Sequence copy performance (which emails get opened/clicked most)
- Writes next week's full newsletter (lead article + 2-3 shorter pieces)
- Updates website with new articles (staging, not live until Monday)
- Prepares Beehiiv email version
- Next week priorities

**Wes actions:**
- Review weekly report (20 min)
- **Read the newsletter draft — mark edits or say "approved as-is"** (30 min)
- Next week planning (15 min)

**This is the critical weekly handoff:** Wes reviews the newsletter draft Friday. Monday, Claude sends it. This gives Wes the weekend to sit with it if needed, and ensures every Monday send is Wes-approved.

---

**Prompt:**
```
Post prep
```

### Weekly Time Budget (Phase 3 Steady State)

| Day | Wes Time | Activities |
|-----|----------|-----------|
| Monday | 2–2.5 hrs | Newsletter send, report review, engaged contacts, strategy, meetings |
| Wednesday | 1.5–2 hrs | LinkedIn review, next week's content direction, media pitches, meetings |
| Thursday | 2 hrs | Meeting prep, prospect meetings |
| Friday | 1.5–2 hrs | Weekly report, **review newsletter draft**, planning |
| **Total** | **7.5–8.5 hrs** | **1.5 hrs buffer for overflow** |

---

### Monthly Cadence (Within Weekly Rhythm)

| When | What | Prompt |
|------|------|--------|
| 1st Monday | Monthly deep review | `Monday scan. Include monthly summary: trends, conversion rates by segment, what's working, what's not, strategy recommendations. Which newsletter topics got the most engagement?` |
| Last Friday | Month-end review | `Weekly report. Include month-end summary: total outreach, conversion rates, pipeline value, Executive Briefings completed, newsletter subscriber growth, top-performing content topics, next month priorities. Propose any sequence copy changes based on engagement data.` |

---

### Key Milestones & Decision Points (V3.1 Updated)

| Date | Milestone | Decision |
|------|-----------|----------|
| Feb 28 | Website polished, newsletter ready, integrations tested | Go/no-go for outbound launch |
| Mar 2 | First newsletter sent, Apollo warm-up begins | Is the site compelling? First reactions? |
| Mar 14 | 2 newsletters sent, 350+ contacts in Apollo, LinkedIn ads launching | All channels live. Early engagement data. |
| Mar 31 | Month 1 complete (4 newsletters, 1,000+ Apollo contacts) | Which content topics resonate? Which segments respond? Subscriber growth rate? |
| Apr 14 | First Executive Briefings should be coming from newsletter readers | Is the funnel converting? Newsletter → Briefing path working? |
| Apr 30 | Month 2 complete | Scale what's working, kill what's not. Newsletter content strategy refined. |
| May 15 | 2 weeks to decision | Final push — are we seeing traction? |
| May 31 | **Decision point** | Are F500 legal and insurance viable for CaseGlide? |

### May 31: Decision Criteria

By end of May, we should have enough data to answer the core question. The metrics that matter:
- **Newsletter subscribers** (target: 500+)
- **Executive Briefings completed** (target: 15–20)
- **Council programs proposed** (target: 4–8)
- Conversion rates by campaign and segment
- **Newsletter → Briefing conversion rate** (are readers converting?)
- Pipeline value (target: $500K+)
- Which ICP segments (F500 legal vs. insurance) show stronger signal
- Total outreach volume achieved
- Reply rate and quality of conversations
- **Top-performing content topics** (what resonates with our audience?)

---

## Revised Rules

The v2 rules assumed Wes is in the loop for every action. The v3 rules reflect the automation-first approach:

### Wes Approves Once (Templates and Strategy)

- Email sequence copy (approve the template, Claude runs it at scale)
- LinkedIn content pillars and voice (approve the style guide, Claude drafts within it)
- Promoter pitch angles (approve the angles, Claude personalizes per target)
- ICP targeting criteria (approve the filters, Claude executes searches)

### Claude Executes Autonomously

- Apollo: searching, enriching, creating contacts, enrolling in approved sequences
- Pipedrive: creating deals, moving stages, adding notes, scheduling activities
- Typefully: scheduling posts for Wes's review queue
- Newsletter: writing content, formatting, preparing for send
- Reporting: generating all dashboards and reports
- Meeting prep: research, addendums, competitive intelligence
- Media list: maintaining and expanding Promoter targets

### Still Requires Wes Per-Instance

- Sending warm personal introductions
- Conducting prospect meetings
- Making strategy changes (targeting, messaging, budget)
- Approving changes to approved templates
- Final newsletter review before send

### Safety Rails

- Claude never modifies an active Apollo sequence without Wes approval
- Claude never sends from Wes's personal email (only Apollo-connected mailboxes)
- Claude never makes public-facing content changes to caseglide.com without Wes approval
- Claude flags any prospect reply that needs personal follow-up
- Claude reports any anomalies (deliverability drops, unusual bounce rates, negative replies)

---

## Success Metrics (V3.1 Updated)

| Metric | Monthly Target | By May 31 | Owner |
|--------|---------------|-----------|-------|
| **Newsletter Subscribers** | **100–150** | **500+** | **All campaigns (V3.1 primary KPI)** |
| **Newsletter Open Rate** | **>40%** | **Maintain** | **Claude (monitor)** |
| **Newsletter → Briefing Conversion** | **Tracking** | **>3%** | **Claude (monitor)** |
| Apollo Emails Sent | 4,000–6,000 | 20,000+ | Claude (auto) |
| Apollo Open Rate | >15% | Maintain | Claude (monitor) |
| Apollo Click Rate (to newsletter) | >10% | Maintain | Claude (monitor) |
| Apollo Reply Rate | >2% | Growing | Claude (monitor) |
| Executive Briefings Completed | 4–6 | 15–20 | Wes + Liana |
| Council Programs Proposed | 1–2 | 4–8 | Wes |
| LinkedIn Post Engagement | >2% | Growing | Claude (Typefully) |
| Podcast/Media Appearances | 1–2 | 5–8 | Wes + Claude |
| Pipedrive Pipeline Value | Growing | $500K+ | Claude (auto) |
| **Email Captures (Briefing + Council + Trial)** | **Tracking** | **50+** | **Claude (monitor)** |
| Wes GTM Hours/Week | ≤10 | ≤10 | Wes |

---

## Technical Appendix: API Capabilities Confirmed

### Apollo API (Confirmed via API Documentation Research)

| Capability | API Support | Endpoint |
|-----------|------------|----------|
| Search people by title/company/industry/size | Yes (free) | `POST /api/v1/mixed_people/api_search` |
| Enrich contacts (get emails) | Yes (1 credit/email) | `POST /api/v1/people/match` |
| Bulk enrich (10/call) | Yes | `POST /api/v1/people/bulk_match` |
| Create contacts | Yes | `POST /api/v1/contacts` |
| Enroll in sequences | Yes | `POST /api/v1/emailer_campaigns/{id}/add_contact_ids` |
| Auto-send emails | Yes (if sequence active + auto steps) | Automatic after enrollment |
| Search for sequences | Yes | `POST /api/v1/emailer_campaigns/search` |
| Search existing contacts | Yes | `POST /api/v1/contacts/search` |
| Poll engagement (sort by last opened/clicked) | Yes | `POST /api/v1/contacts/search` with sort fields |
| Create/edit sequences | No (UI only) | — |
| Create saved lists | No (UI only) | — |
| Aggregate engagement dashboards | No (UI only) | — |

### Pipedrive API (Confirmed via API Documentation Research)

| Capability | API Support | Notes |
|-----------|------------|-------|
| Create/update/move deals | Full CRUD | v2 endpoints available |
| Create/update contacts (persons) | Full CRUD | Search by name/email/phone |
| Create/update organizations | Full CRUD | With parent/child relationships |
| Pipeline and stage management | Full CRUD | Create pipelines, stages, set probabilities |
| Activity management | Full CRUD | Custom types, scheduling, completion |
| Notes on deals/contacts | Full CRUD | HTML-formatted |
| Custom fields | Full CRUD | 16 field types |
| Webhooks | Full support | 40 max, covers all entity events |
| Email history | Read-only | Via mailbox sync |
| Rate limits | Token-based | 30K base tokens/day × plan multiplier × seats |

### LinkedIn Posting via Typefully (Confirmed via API Documentation Research)

| Capability | API Support | Notes |
|-----------|------------|-------|
| Schedule posts to personal profile | Yes | v2 API, `POST /v2/social-sets/{id}/drafts` |
| Set publish time | Yes | ISO 8601, `"now"`, or `"next-free-slot"` |
| Platform-specific content | Yes | LinkedIn-specific text in JSON payload |
| Web UI for review | Yes | Wes reviews queue before publish |
| Pricing | $19/month | Creator plan |
| Auth | Bearer token | `Authorization: Bearer YOUR_API_KEY` |
