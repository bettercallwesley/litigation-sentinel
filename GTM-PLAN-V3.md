# CaseGlide Go-To-Market Plan

**Version 3 — February 20, 2026**
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

### Email Sequence (Approved Template)

Wes approves this copy ONCE. Claude executes it at scale.

| # | Day | Subject Line | Core Message |
|---|-----|-------------|--------------|
| 1 | 1 | The case everyone knows, the lesson no one applied | Portfolio drift is invisible until it's expensive. Offer executive briefing. |
| 2 | 3 | Where outcomes actually get set | Outcomes decided before mediation. Negotiation gaps. Which firms push vs drift. |
| 3 | 6 | The questions boards ask | Boards ask exposure, direction, top 3 interventions. Info trapped in emails/PDFs. |
| 4 | 9 | What early visibility changes | Visibility is the most expensive failure mode. Severity hardens. |
| 5 | 14 | Next step or close the loop? | Polite close. Yes/no. Permission to stop if not relevant. |

**Rule:** These emails sell the executive conversation, never the software. No feature dumps. No screenshots. No pricing.

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

The holding bin needs to actually function. Today it's a beautiful static site that can't capture emails.

### What Needs to Be Built

1. **Email signup form** on the Litigation Sentinel site → connected to an email service (Beehiiv, ConvertKit, or Mailchimp)
2. **Executive Briefing request form** → creates a Pipedrive deal via API
3. **Email delivery pipeline** → newsletter actually gets sent to subscribers
4. **Vercel Analytics** → track traffic and conversion (free, already available)

### Newsletter Content (Claude Writes)

Monthly newsletter with:
- 1 lead article on litigation intelligence (1,000–1,500 words)
- 2–3 shorter insights (300–500 words each)
- Executive Briefing CTA in every issue
- Council Program mention for qualified prospects

Wes reviews the draft once before send. Claude handles all writing, formatting, and scheduling.

### Newsletter as Campaign Destination

| Campaign | Newsletter Role |
|----------|----------------|
| A (Apollo) | Secondary CTA for prospects not ready for briefing |
| B (LinkedIn) | Link in bio, post CTAs |
| C (Promoter) | Primary CTA for all media collaborations |
| D (Ads) | Retargeting audience from newsletter visitors |

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

Set-and-forget after initial setup. Claude generates a Claude Chrome prompt for Wes to configure the campaigns.

- **Thought Leader Ads:** Boost Wes's organic posts exceeding 2% engagement
- **Direct Response Ads:** Creative driving to Executive Briefing page
- **Retargeting:** LinkedIn Insight Tag on caseglide.com + Litigation Sentinel site. Apollo email list as matched audience.
- **Targeting:** GC, CLO, CRO, VP Risk, VP Legal, Deputy GC. VP/CXO/Director. 1,000+ employees. US only.
- **Budget:** $1,500/month. Scale if cost-per-briefing < $500.

LinkedIn Marketing API could automate campaign management if we get approved. Claude Chrome handles it until then.

---

## What Wes Does: 10 Hours/Week Redesigned

The v2 plan had Wes manually executing in every tool. The v3 plan has Wes doing what only Wes can do.

### Monday (3 hours)

| Task | Time | Description |
|------|------|-------------|
| Review Claude's weekly report | 30 min | Pipeline, Apollo performance, LinkedIn engagement, newsletter metrics |
| Review Apollo engaged contacts | 15 min | High-intent signals, anyone to follow up with personally |
| Strategy adjustments | 30 min | Change targeting, adjust messaging, redirect budget |
| Prospect meetings | 1–2 hrs | Any Monday-scheduled demos/calls |

### Wednesday (3 hours)

| Task | Time | Description |
|------|------|-------------|
| Review Typefully queue (3 posts) | 15 min | Approve/edit LinkedIn posts for the week |
| Respond to LinkedIn DMs/comments | 15 min | Engagement that requires personal response |
| Review Promoter outreach drafts | 15 min | Approve media pitches (Phase 2) |
| Prospect meetings | 2 hrs | Any Wednesday-scheduled demos/calls |

### Thursday (2 hours)

| Task | Time | Description |
|------|------|-------------|
| Prospect meetings | 2 hrs | Any Thursday-scheduled demos/calls |

### Friday (2 hours)

| Task | Time | Description |
|------|------|-------------|
| Review newsletter draft | 30 min | Monthly, when applicable |
| Meeting prep review | 30 min | Claude-generated addendums for next week's meetings |
| Next week planning | 30 min | Priorities, adjustments |
| Buffer | 30 min | Catch-up on anything from the week |

**Notice what's NOT on this schedule:** Manually sending emails. Manually enrolling contacts. Manually entering Pipedrive data. Manually scheduling LinkedIn posts. Manually pulling reports. Claude does all of that.

---

## What Claude Does Autonomously

### Daily (Automated via API)

- Enroll new contacts in Apollo sequences
- Poll Apollo for engagement signals
- Create Pipedrive deals for engaged contacts
- Update Pipedrive deal stages based on signals
- Schedule LinkedIn posts via Typefully API

### Weekly (Triggered by Session)

- Generate weekly performance report
- Draft 3 LinkedIn posts for Typefully queue
- Identify new ICP prospects via Apollo People Search
- Enrich and add new contacts to sequences
- Generate Claude Chrome prompts for any UI-only tasks
- Review pipeline for stale deals, generate follow-up recommendations

### Monthly

- Draft Litigation Sentinel newsletter issue
- Expand Industry Media Target List
- Review and propose sequence copy optimizations (Wes approves changes)
- Generate monthly performance summary with trends

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

## Implementation Roadmap

### Week 1: Foundation (Feb 20–28)

**Claude builds:**
- [ ] Apollo API integration scripts (search, enrich, create, enroll)
- [ ] Pipedrive API integration scripts (deals, contacts, pipeline, activities)
- [ ] Typefully API integration for LinkedIn posting
- [ ] Newsletter signup form connected to email service
- [ ] Executive Briefing request form connected to Pipedrive

**Wes does:**
- [ ] Provide Apollo API key
- [ ] Provide Pipedrive API token
- [ ] Sign up for Typefully Creator plan ($19/mo), provide API key
- [ ] Choose email service for newsletter (Beehiiv, ConvertKit, or Mailchimp)
- [ ] Execute Claude Chrome prompt to create/update Apollo email sequences

**Steve delivers (by Mar 1):**
- [ ] All credential transfers
- [ ] Industry Media Target List
- [ ] Pipedrive pipeline review

### Week 2: Launch Apollo Engine (Mar 1–7)

- Apollo sequences active with updated messaging and Executive Briefing destination
- Claude begins automated enrollment: 500+ contacts/week
- Pipedrive auto-creating deals from engagement signals
- First 3 LinkedIn posts scheduled via Typefully
- Newsletter accepting signups

### Week 3–4: Optimize and Scale (Mar 8–21)

- Scale Apollo to 1,000+ contacts/week
- Launch LinkedIn ads (Campaign D) with retargeting
- First newsletter issue sent
- Begin Promoter outreach (Campaign C) to top 10 media targets
- Weekly performance reviews — which segments respond best?

### Weeks 5–14: Full Execution (Mar 22 – May 31)

- All campaigns running simultaneously
- Claude automating execution across all channels
- Wes + Liana conducting prospect meetings (Claude provides meeting prep)
- Monthly decision: scale what's working, kill what's not
- Continuous list expansion via Apollo People Search
- Promoter campaign generating media appearances

### May 31: Decision Point

By end of May, we should have enough data to answer the core question. The metrics that matter:
- Executive Briefings completed
- Council programs proposed
- Conversion rates by campaign and segment
- Pipeline value
- Which ICP segments (F500 legal vs. insurance) show stronger signal

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

## Success Metrics

| Metric | Monthly Target | By May 31 | Owner |
|--------|---------------|-----------|-------|
| Apollo Emails Sent | 4,000–6,000 | 20,000+ | Claude (auto) |
| Apollo Open Rate | >15% | Maintain | Claude (monitor) |
| Apollo Click Rate | >10% | Maintain | Claude (monitor) |
| Apollo Reply Rate | >2% | Growing | Claude (monitor) |
| Executive Briefings Completed | 4–6 | 15–20 | Wes + Liana |
| Council Programs Proposed | 1–2 | 4–8 | Wes |
| Newsletter Subscribers | 50–100 | 300+ | All campaigns |
| LinkedIn Post Engagement | >2% | Growing | Claude (Typefully) |
| Podcast/Media Appearances | 1–2 | 5–8 | Wes + Claude |
| Pipedrive Pipeline Value | Growing | $500K+ | Claude (auto) |
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
