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

**Rule:** These emails sell the executive conversation, never the software. No feature dumps. No screenshots. No pricing.

---

**Email 1 | Day 1**
**Subject:** The case everyone knows, the lesson no one applied

{{first_name}},

The McDonald's hot coffee verdict is the case every executive thinks they understand. Most don't. The real lesson isn't about frivolous lawsuits. It's about how quietly a routine claim drifts into a catastrophic outcome when nobody is watching the right signals.

That pattern plays out inside corporate litigation portfolios constantly. Cases sit. Negotiations stall. Counsel sounds confident, but nothing moves. By the time leadership notices, severity has hardened and the outcome is already expensive.

We work with legal and risk teams to surface those drift signals early, before matters age into problems that show up in board reports.

I'd welcome 30 minutes to share what we're seeing across portfolios like {{company}}'s and where early intervention tends to change outcomes. Worth a conversation?

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

The challenge is that these moments are invisible unless you have a portfolio-level view. Individual case updates won't show you the pattern. And by the time a quarterly review surfaces the problem, the window for intervention has closed.

We help leadership see these moments across the full portfolio, not just case by case. Happy to walk you through what that looks like in practice.

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

Most legal teams struggle to answer those questions clearly because the truth lives in emails, PDFs, and individual attorney relationships. The information exists. It's just not structured in a way that produces defensible answers under pressure.

We've spent a decade helping litigation teams close that gap. I'd value 30 minutes to show you how other leadership teams are building that narrative without overhauling their existing workflow.

Wes Todd
CEO, CaseGlide

---

**Email 4 | Day 9**
**Subject:** What early visibility changes

{{first_name}},

Late visibility is the most expensive failure mode in litigation.

Once severity hardens on a case, the cost of resolution goes up and the leverage to change direction goes down. The problem is that most teams only get a clear picture when something has already gone wrong, during a reserve spike, a surprise verdict, or a board question they can't answer confidently.

Early visibility doesn't mean more reports or more dashboards. It means seeing where outcomes are being set across the portfolio and knowing which matters need attention before they drift past the point of intervention.

That's the conversation I'd like to have. 30 minutes, no pitch, just a look at what early visibility changes for teams managing litigation at {{company}}'s scale.

Wes Todd
CEO, CaseGlide

---

**Email 5 | Day 14**
**Subject:** Next step or close the loop?

{{first_name}},

I've sent a few notes about how legal and risk teams are getting earlier visibility into litigation outcomes. I want to be respectful of your time.

If this is relevant to what you're working on at {{company}}, I'd welcome a 30-minute conversation. No preparation needed on your end.

If the timing isn't right or this isn't a priority, no problem at all. Just say the word and I'll close the loop.

Either way, appreciate your time.

Wes Todd
CEO, CaseGlide

---

**Summary Table:**

| # | Day | Subject Line | Core Message |
|---|-----|-------------|--------------|
| 1 | 1 | The case everyone knows, the lesson no one applied | Portfolio drift is invisible until it's expensive. Offer executive briefing. |
| 2 | 3 | Where outcomes actually get set | Outcomes decided before mediation. Negotiation gaps. Which firms push vs drift. |
| 3 | 6 | The questions boards ask | Boards ask exposure, direction, top 3 interventions. Info trapped in emails/PDFs. |
| 4 | 9 | What early visibility changes | Visibility is the most expensive failure mode. Severity hardens. |
| 5 | 14 | Next step or close the loop? | Polite close. Yes/no. Permission to stop if not relevant. |

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

1. **Email signup form** on the Litigation Sentinel site → connected to Beehiiv (free tier, REST API)
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

## Execution Schedule — Day by Day

**Three phases. 14 weeks. 10 hours/week max from Wes.**

Every session below: open Claude Code in the `litigation-sentinel` repo and paste the exact prompt shown. Claude reads CLAUDE.md automatically, which loads the full GTM context and document references.

---

### PHASE 1: FOUNDATION BUILD (Feb 20 – Mar 7)

Build all integrations, create all sequences, test everything end-to-end. Heavy setup — drops to maintenance rhythm after this.

#### Day 0 — Fri Feb 20 | 1 hr Wes time

**Wes does (no Claude prompt needed):**
- [x] Provide Apollo API key ✓
- [x] Provide Pipedrive API token ✓
- [x] Provide Typefully API key ✓
- [x] Sign up for Beehiiv (free tier, beehiiv.com) → provide API key to Claude ✓
- [ ] Approve 5-email sequence copy (see "Email Sequence" section above in this plan)

**Prompt to paste after providing Beehiiv key:**
```
Read GTM-PLAN-V3.md. Add the Beehiiv API key to .env. Then build all four API integration modules:
1. Apollo API (search, enrich, create contacts, enroll in sequences, poll engagement)
2. Pipedrive API (create pipeline with stages from GTM plan, create custom fields, CRUD deals/contacts/activities/notes)
3. Typefully API (schedule LinkedIn posts to my profile)
4. Beehiiv API (manage subscribers, prepare for newsletter sends)
Build these as utility scripts in a new src/lib/api/ directory. Test each integration against the live APIs to confirm authentication works. Show me the results.
```

**Milestone:** All 4 API connections verified working.

---

#### Day 1 — Mon Feb 23 | 2.5 hrs Wes time

**Prompt:**
```
Read GTM-PLAN-V3.md. Today is Day 1: Apollo Sequence Setup.
1. Generate a Claude Chrome prompt for me to create the 5-step email sequence in Apollo UI. Use the exact copy from the "Email Sequence (Approved Template)" section of the GTM plan. Include sequence name, schedule settings (business days, 8am-6pm ET, 150/day limit), and auto-stop on reply.
2. Generate a second Claude Chrome prompt for me to connect my sending mailbox in Apollo and configure warm-up settings.
3. Using the Pipedrive API, create the full pipeline with these stages: Newsletter Subscriber → Briefing Scheduled → Briefing Completed → Council Proposed → Council Active → Trial → Contract. Create all custom fields (campaign_source, icp_segment, engagement_score, last_apollo_activity, linkedin_engaged).
4. Show me the Pipedrive pipeline is live.
```

**Wes does after Claude finishes:**
- Execute Chrome prompt #1: Create Apollo sequence (45 min)
- Execute Chrome prompt #2: Connect mailbox + warm-up (30 min)
- Review Pipedrive pipeline in UI, confirm stages look right (15 min)
- Confirm to Claude that sequence and mailbox are set up (paste sequence ID if visible)

**Milestone:** Apollo sequence created. Pipedrive pipeline live. Mailbox warming up.

---

#### Day 2 — Wed Feb 26 | 1.5 hrs Wes time

**Prompt:**
```
Read GTM-PLAN-V3.md. Today is Day 2: Newsletter & Forms.
1. Add a working newsletter signup form to the Litigation Sentinel page that connects to Beehiiv (creates subscriber via API). Include email field and a "Subscribe to Litigation Sentinel" button.
2. Add a working Executive Briefing request form that creates a Pipedrive deal at the "Briefing Scheduled" stage with contact info. Include name, email, company, title fields.
3. Schedule 3 LinkedIn posts for this week via Typefully API. Content pillars: litigation intelligence insight, nuclear verdict trend, governance gap. Use the voice/tone from docs/caseglide-master-context-memo-v2.md.
4. Show me all three working: newsletter form, briefing form, scheduled posts.
```

**Wes does after Claude finishes:**
- Test newsletter signup with a personal email — confirm it appears in Beehiiv (15 min)
- Test Executive Briefing form — confirm deal appears in Pipedrive (15 min)
- Review 3 LinkedIn posts in Typefully UI — approve/edit/reject (15 min)
- Respond to any existing LinkedIn engagement (15 min)

**Milestone:** Both conversion destinations functional. First LinkedIn posts queued.

---

#### Day 3 — Fri Feb 28 | 1.5 hrs Wes time

**Prompt:**
```
Read GTM-PLAN-V3.md. Today is Day 3: Integration Testing.
1. Run an end-to-end test: Use Apollo API to search for 10 contacts matching our ICP (F500 GC/CLO titles, 1000+ employees). Enrich them. Show me the results with names, titles, companies, and emails found.
2. DO NOT enroll them yet — just show me the search + enrich flow works.
3. Test the Apollo → Pipedrive bridge: create one test deal in Pipedrive from one of the enriched contacts. Show me it created correctly with all custom fields.
4. Show me a mock weekly report using whatever test data we have — I want to see the format before we go live.
5. Generate a checklist of everything that's ready vs. anything that still needs attention before we start enrolling real contacts Monday.
```

**Wes does after Claude finishes:**
- Review search results — are these the right people? (15 min)
- Review test Pipedrive deal (10 min)
- Review weekly report format — request any changes (15 min)
- Review go-live checklist — flag any blockers (15 min)
- Confirm: "Go for warm-up enrollment Monday" or flag issues (5 min)

**Milestone:** Full integration tested end-to-end. Go/no-go decision for Monday launch.

---

#### Day 4 — Mon Mar 2 | 2 hrs Wes time

**Prompt:**
```
Read GTM-PLAN-V3.md. Today is Day 4: Warm-Up Launch.
1. Search Apollo for the first batch: 50 contacts matching ICP criteria. Prioritize F500 GC, CLO, VP Legal titles. Enrich all 50.
2. Enroll all 50 in the approved email sequence. This is warm-up volume — we'll scale after deliverability is confirmed.
3. Create Pipedrive deals for all 50 enrolled contacts at "Newsletter Subscriber" stage with campaign_source = Apollo.
4. Generate the first real Monday scan report: enrolled count, pipeline snapshot, any issues.
5. Search Apollo for the next 200 contacts (don't enroll yet) — build the queue for Wednesday and Friday batches this week.
```

**Wes does after Claude finishes:**
- Review Monday scan report (15 min)
- Review the 50 enrolled contacts — any names to exclude? (15 min)
- Review the 200-contact queue — approve for enrollment later this week (15 min)
- Prospect meetings if scheduled (1 hr)

**Milestone:** First 50 contacts enrolled. Apollo warm-up begins. Pipeline populated.

---

#### Day 5 — Wed Mar 5 | 1.5 hrs Wes time

**Prompt:**
```
Post prep. Also: enroll the next batch of 100 contacts from Monday's queue. Poll Apollo for any engagement signals from the first 50 (opens, clicks, replies). Update Pipedrive with any engagement data. Schedule 3 new LinkedIn posts via Typefully for this week.
```

**Wes does after Claude finishes:**
- Review engagement data from first 50 (15 min)
- Review 3 LinkedIn posts in Typefully (15 min)
- Respond to LinkedIn DMs/comments (15 min)
- Prospect meetings if scheduled (45 min)

**Milestone:** 150 total contacts enrolled. First engagement signals arriving.

---

#### Day 6 — Fri Mar 7 | 1.5 hrs Wes time

**Prompt:**
```
Weekly report. Full Week 1 performance: Apollo deliverability (bounce rate, open rate for first 50), total enrolled, engagement signals, Pipedrive pipeline snapshot, LinkedIn post performance. Enroll the remaining 100 from the queue. Recommend volume for next week based on deliverability. Also: draft an outline for the first Litigation Sentinel newsletter issue — just the outline, not the full draft.
```

**Wes does after Claude finishes:**
- Review weekly report (20 min)
- Approve volume recommendation for next week (10 min)
- Review newsletter outline — approve or redirect (15 min)
- Next week planning (15 min)

**Milestone:** End of Phase 1. 250 contacts enrolled. Deliverability data in. Ready to scale.

---

### PHASE 2: SCALE & LAUNCH ALL CHANNELS (Mar 9 – Mar 21)

Scale Apollo to full volume. Send first newsletter. Prepare LinkedIn ads.

#### Day 7 — Mon Mar 9 | 2 hrs Wes time

**Prompt:**
```
Monday scan. Scale Apollo enrollment: search and enroll 300 new contacts (or whatever volume last week's deliverability supports). Poll all existing contacts for engagement. Update Pipedrive — move any 2+ email openers to engaged status. Flag any replies for my review. Show the full Monday report.
```

**Wes actions:** Review report (20 min), review flagged replies (20 min), prospect meetings (1 hr), strategy notes (20 min).

---

#### Day 8 — Wed Mar 12 | 2 hrs Wes time

**Prompt:**
```
Post prep. Schedule 3 LinkedIn posts. Also: draft the full first issue of the Litigation Sentinel newsletter using the approved outline from Friday. Use the voice/tone from docs/caseglide-master-context-memo-v2.md. Lead article: 1,000-1,500 words on litigation intelligence. 2-3 shorter insights. Executive Briefing CTA. Format it for Beehiiv. Show me the draft for review.
```

**Wes actions:** Review LinkedIn posts in Typefully (15 min), review full newsletter draft — mark edits (30 min), LinkedIn engagement (15 min), prospect meetings (1 hr).

---

#### Day 9 — Fri Mar 14 | 1.5 hrs Wes time

**Prompt:**
```
Weekly report. Full Week 2 performance. Apply my edits to the newsletter draft: [paste any edits here, or say "approved as-is"]. Prepare the newsletter for send via Beehiiv on Monday. Generate a Claude Chrome prompt for setting up LinkedIn ads — Campaign D from the GTM plan. Include all targeting specs, budget ($1,500/mo), and creative recommendations.
```

**Wes actions:** Review report (20 min), confirm newsletter ready (10 min), review LinkedIn ads Chrome prompt — plan to execute next week (20 min), next week planning (15 min).

---

#### Day 10 — Mon Mar 16 | 2.5 hrs Wes time

**Prompt:**
```
Monday scan. Send the first Litigation Sentinel newsletter via Beehiiv to all subscribers. Enroll next Apollo batch (500+ if deliverability supports it). Full Monday report. Any replies to review?
```

**Wes actions:** Review report (20 min), review replies (15 min), execute LinkedIn ads Chrome prompt from Friday (45 min), prospect meetings (1 hr).

**Milestone:** First newsletter sent. LinkedIn ads launching. Apollo at scale volume.

---

#### Day 11 — Wed Mar 19 | 1.5 hrs Wes time

**Prompt:**
```
Post prep. Schedule 3 LinkedIn posts. Check newsletter open/click metrics from Monday's send. Poll Apollo engagement — focus on any contacts who opened email AND clicked. Those are high-intent. Update Pipedrive accordingly.
```

**Wes actions:** Review LinkedIn posts (15 min), review newsletter metrics (15 min), review high-intent contacts — any to follow up personally? (15 min), LinkedIn engagement (15 min), prospect meetings if scheduled (30 min).

---

#### Day 12 — Fri Mar 21 | 1.5 hrs Wes time

**Prompt:**
```
Weekly report. Full Week 3 performance including: Apollo (total enrolled, deliverability, engagement by segment), newsletter (subscribers, open rate, clicks), LinkedIn (post engagement, follower growth), Pipedrive (deals by stage, new this week, stale). Begin Promoter campaign: identify top 10 media targets from docs and draft personalized pitches for each. Show me the pitches for approval.
```

**Wes actions:** Review report (20 min), review 10 media pitches — approve/edit (25 min), next week planning (15 min).

**Milestone:** End of Phase 2. All channels live. Apollo at full volume. Newsletter sent. Ads running. Promoter outreach drafted.

---

### PHASE 3: FULL EXECUTION (Mar 23 – May 31)

Steady-state rhythm. Same schedule every week. Claude runs the engine. Wes drives conversations.

#### Every Monday | 2–2.5 hrs Wes time

**Prompt:**
```
Monday scan
```

**What Claude does automatically:**
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
- Drafts and schedules 3 LinkedIn posts via Typefully
- Checks mid-week Apollo metrics
- Updates Pipedrive with new signals
- Drafts media pitches for Promoter campaign if active
- Second Wednesday of each month: drafts full newsletter issue for review

**Wes actions:**
- Review LinkedIn posts in Typefully (15 min)
- Respond to LinkedIn DMs/comments (15 min)
- Review media pitches if applicable (15 min)
- Review newsletter draft if applicable (30 min)
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

#### Every Friday | 1–1.5 hrs Wes time

**Prompt:**
```
Weekly report
```

**What Claude does automatically:**
- Comprehensive weekly report (all channels, all metrics)
- Pipeline review with specific recommendations
- Sequence copy performance (which emails get opened/clicked most)
- Next week priorities
- Last Friday of each month: monthly summary with trends and strategy recommendations

**Wes actions:**
- Review report (30 min)
- Review newsletter draft if monthly (30 min)
- Next week planning (15 min)

---

### Weekly Time Budget (Phase 3 Steady State)

| Day | Wes Time | Activities |
|-----|----------|-----------|
| Monday | 2–2.5 hrs | Report review, engaged contacts, strategy, meetings |
| Wednesday | 1.5–2 hrs | LinkedIn review, newsletter (monthly), media pitches, meetings |
| Thursday | 2 hrs | Meeting prep, prospect meetings |
| Friday | 1–1.5 hrs | Weekly report, planning |
| **Total** | **7–8 hrs** | **2 hrs buffer for overflow** |

---

### Monthly Cadence (Within Weekly Rhythm)

| When | What | Prompt |
|------|------|--------|
| 1st Monday | Monthly deep review | `Monday scan. Include monthly summary: trends, conversion rates by segment, what's working, what's not, strategy recommendations.` |
| 2nd Wednesday | Newsletter draft | `Post prep. Also draft the monthly Litigation Sentinel newsletter issue.` |
| 2nd Friday | Newsletter send approval | `Weekly report. Also finalize the newsletter with my edits: [paste edits]. Send via Beehiiv on Monday.` |
| 3rd Monday | Newsletter send | `Monday scan. Send the newsletter via Beehiiv.` |
| Last Friday | Month-end review | `Weekly report. Include month-end summary: total outreach, conversion rates, pipeline value, Executive Briefings completed, next month priorities. Propose any sequence copy changes based on engagement data.` |

---

### Key Milestones & Decision Points

| Date | Milestone | Decision |
|------|-----------|----------|
| Feb 28 | All integrations tested | Go/no-go for Apollo warm-up |
| Mar 7 | 250 contacts enrolled, deliverability confirmed | Go/no-go for full volume |
| Mar 16 | First newsletter sent, ads launching | All channels live |
| Mar 31 | Month 1 complete | First monthly review — which segments respond? |
| Apr 14 | First Executive Briefings should be happening | Is the funnel converting? Adjust messaging? |
| Apr 30 | Month 2 complete | Scale what's working, kill what's not |
| May 15 | 2 weeks to decision | Final push — are we seeing traction? |
| May 31 | **Decision point** | Are F500 legal and insurance viable for CaseGlide? |

### May 31: Decision Criteria

By end of May, we should have enough data to answer the core question. The metrics that matter:
- Executive Briefings completed (target: 15–20)
- Council programs proposed (target: 4–8)
- Conversion rates by campaign and segment
- Pipeline value (target: $500K+)
- Which ICP segments (F500 legal vs. insurance) show stronger signal
- Total outreach volume achieved
- Reply rate and quality of conversations

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
