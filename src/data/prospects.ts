// ─── CaseGlide Prospect & Pipeline Data ─────────────────────────────────────
// Sample prospects across all pipeline stages

import { CampaignId, PipelineStage } from "./campaigns";

export type ProspectTitle = "GC" | "CLO" | "CRO" | "VP Claims" | "VP Litigation" | "Deputy GC";

export interface Prospect {
  id: string;
  name: string;
  title: ProspectTitle;
  company: string;
  industry: string;
  stage: PipelineStage;
  source: CampaignId;
  lastActivity: string;
  nextAction: string;
  meetingOwner: "Wes" | "Liana" | null;
  score: number; // 1-100 engagement score
  notes: string;
}

export const PROSPECTS: Prospect[] = [
  // Contract stage
  {
    id: "p-001",
    name: "Margaret Liu",
    title: "CLO",
    company: "3M Company",
    industry: "Manufacturing",
    stage: "contract",
    source: "B",
    lastActivity: "2026-02-15",
    nextAction: "Deployment kickoff call scheduled Feb 24",
    meetingOwner: "Liana",
    score: 98,
    notes: "Signed 3-year enterprise agreement. 4,200 open matters. Champion: VP Lit Ops Karen Wells.",
  },
  {
    id: "p-002",
    name: "Robert Kim",
    title: "GC",
    company: "Honeywell",
    industry: "Conglomerate",
    stage: "contract",
    source: "A",
    lastActivity: "2026-02-12",
    nextAction: "Integration planning with IT team",
    meetingOwner: "Liana",
    score: 95,
    notes: "Closed after Trial. 2,800 matters. Key driver: attorney performance visibility.",
  },
  // Trial stage
  {
    id: "p-003",
    name: "Angela Torres",
    title: "VP Litigation",
    company: "Johnson & Johnson",
    industry: "Pharma",
    stage: "trial",
    source: "B",
    lastActivity: "2026-02-19",
    nextAction: "Week 2 strategy session — 6 cases activated",
    meetingOwner: "Wes",
    score: 88,
    notes: "MDL-heavy portfolio. 10 hardest cases selected across opioid and talc dockets. Strong executive buy-in.",
  },
  {
    id: "p-004",
    name: "James Wright",
    title: "CRO",
    company: "Liberty Mutual",
    industry: "Insurance",
    stage: "trial",
    source: "C",
    lastActivity: "2026-02-18",
    nextAction: "Portfolio impact review scheduled Feb 25",
    meetingOwner: "Wes",
    score: 85,
    notes: "Insurance company. Referral from Mike Torres at Zurich. 8/10 cases activated. Very engaged claims team.",
  },
  // Council stage
  {
    id: "p-005",
    name: "Patricia Hernandez",
    title: "GC",
    company: "Deere & Company",
    industry: "Manufacturing",
    stage: "council",
    source: "A",
    lastActivity: "2026-02-17",
    nextAction: "Week 5 — Precedent data load review",
    meetingOwner: "Liana",
    score: 78,
    notes: "Week 5 of 12. Data readiness at 58%. Team engaged, executive track slightly behind.",
  },
  {
    id: "p-006",
    name: "William Chang",
    title: "CLO",
    company: "Northrop Grumman",
    industry: "Aerospace & Defense",
    stage: "council",
    source: "B",
    lastActivity: "2026-02-16",
    nextAction: "Week 3 — Case Update template design session",
    meetingOwner: "Liana",
    score: 72,
    notes: "Week 3 of 12. Government contracts litigation focus. Needs custom case update templates for DCAA compliance.",
  },
  // Briefing stage
  {
    id: "p-007",
    name: "Sarah Chen",
    title: "GC",
    company: "Dow Chemical",
    industry: "Chemical",
    stage: "briefing",
    source: "B",
    lastActivity: "2026-02-20",
    nextAction: "InMail pending Wes approval — assessment follow-up",
    meetingOwner: null,
    score: 62,
    notes: "Completed assessment, scored 2.3 (Developing). Biggest gap: document intelligence. InMail follow-up drafted.",
  },
  {
    id: "p-008",
    name: "Michael Thompson",
    title: "VP Claims",
    company: "Hartford Financial",
    industry: "Insurance",
    stage: "briefing",
    source: "A",
    lastActivity: "2026-02-19",
    nextAction: "Schedule briefing call — responded to Apollo sequence",
    meetingOwner: null,
    score: 55,
    notes: "Replied to email step 3. Asked about insurance-specific features. Schedule call with Wes.",
  },
  {
    id: "p-009",
    name: "David Park",
    title: "Deputy GC",
    company: "Caterpillar",
    industry: "Manufacturing",
    stage: "briefing",
    source: "B",
    lastActivity: "2026-02-20",
    nextAction: "InMail pending Wes approval",
    meetingOwner: null,
    score: 48,
    notes: "Strong LinkedIn engagement. Liked 3 posts. InMail first line drafted, awaiting approval.",
  },
  // Subscriber stage
  {
    id: "p-010",
    name: "Elizabeth Foster",
    title: "GC",
    company: "Boeing",
    industry: "Aerospace & Defense",
    stage: "subscriber",
    source: "D",
    lastActivity: "2026-02-18",
    nextAction: "Nurture — opened last 4 newsletters",
    meetingOwner: null,
    score: 35,
    notes: "LinkedIn ad conversion. Subscribed to Sentinel. Opened 4/4 emails. Not yet engaged with Briefing CTA.",
  },
  {
    id: "p-011",
    name: "Richard Patel",
    title: "CLO",
    company: "Pfizer",
    industry: "Pharma",
    stage: "subscriber",
    source: "D",
    lastActivity: "2026-02-14",
    nextAction: "Nurture — clicked article on nuclear verdicts",
    meetingOwner: null,
    score: 28,
    notes: "LinkedIn ad. Clicked through to nuclear verdicts article. High-value target — 6,000+ open matters.",
  },
  {
    id: "p-012",
    name: "Karen Wells",
    title: "VP Litigation",
    company: "Chevron",
    industry: "Energy",
    stage: "subscriber",
    source: "C",
    lastActivity: "2026-02-10",
    nextAction: "Promoter outreach pending — warm intro from industry contact",
    meetingOwner: null,
    score: 22,
    notes: "Referral lead. Subscribed but not engaged beyond initial signup. Promoter outreach being drafted.",
  },
  {
    id: "p-013",
    name: "Thomas Reed",
    title: "GC",
    company: "General Motors",
    industry: "Automotive",
    stage: "subscriber",
    source: "A",
    lastActivity: "2026-02-08",
    nextAction: "Re-engage — Apollo sequence completed, no reply",
    meetingOwner: null,
    score: 15,
    notes: "Completed Apollo sequence with no reply. Move to Sentinel nurture. Consider LinkedIn precision approach.",
  },
  {
    id: "p-014",
    name: "Jennifer Wu",
    title: "CRO",
    company: "Zurich Insurance",
    industry: "Insurance",
    stage: "briefing",
    source: "C",
    lastActivity: "2026-02-20",
    nextAction: "Promoter intro from Mike Torres — schedule briefing",
    meetingOwner: null,
    score: 50,
    notes: "Warm referral from existing Zurich contact Mike Torres. Promoter pitch pending Wes review.",
  },
];

// ─── Workflow / Shortcut Definitions ────────────────────────────────────────

export type ShortcutId =
  | "monday_scan"
  | "post_prep"
  | "inmail_queue"
  | "enroll_batch"
  | "promoter_outreach"
  | "weekly_report"
  | "pipeline_review"
  | "meeting_prep";

export interface WorkflowShortcut {
  id: ShortcutId;
  label: string;
  command: string;
  description: string;
  autonomous: boolean; // runs without Wes approval
  icon: string;
  tools: string[];
}

export const SHORTCUTS: WorkflowShortcut[] = [
  {
    id: "monday_scan",
    label: "Monday Scan",
    command: "Monday scan",
    description: "Scan Apollo replies, LinkedIn notifications, Pipedrive updates, and newsletter signups from the weekend. Surface anything that needs action.",
    autonomous: true,
    icon: "M",
    tools: ["Apollo", "LinkedIn", "Pipedrive", "Litigation Sentinel"],
  },
  {
    id: "post_prep",
    label: "Post Prep",
    command: "Post prep",
    description: "Draft a LinkedIn post based on this week's Sentinel article, industry data, or CaseGlide insight. Wes reviews final copy before publish.",
    autonomous: false,
    icon: "P",
    tools: ["LinkedIn", "WordPress"],
  },
  {
    id: "inmail_queue",
    label: "InMail Queue",
    command: "InMail queue",
    description: "Review Sales Navigator saved leads, draft personalized InMail first lines for top prospects. Each first line requires Wes approval.",
    autonomous: false,
    icon: "I",
    tools: ["Sales Navigator", "LinkedIn"],
  },
  {
    id: "enroll_batch",
    label: "Enroll Batch",
    command: "Enroll batch",
    description: "Pull new leads from Apollo lists and enroll them in Campaign A sequences. Runs autonomously — no copy changes.",
    autonomous: true,
    icon: "E",
    tools: ["Apollo"],
  },
  {
    id: "promoter_outreach",
    label: "Promoter Outreach",
    command: "Promoter outreach",
    description: "Draft outreach messages leveraging promoter contacts. Each pitch requires Wes review before sending.",
    autonomous: false,
    icon: "R",
    tools: ["LinkedIn", "Pipedrive"],
  },
  {
    id: "weekly_report",
    label: "Weekly Report",
    command: "Weekly report",
    description: "Compile metrics across all 4 campaigns: enrollments, replies, meetings, conversions, pipeline value. Auto-generated.",
    autonomous: true,
    icon: "W",
    tools: ["Apollo", "LinkedIn", "Campaign Manager", "Pipedrive"],
  },
  {
    id: "pipeline_review",
    label: "Pipeline Review",
    command: "Pipeline review",
    description: "Review all active deals in Pipedrive. Flag stale opportunities, suggest next actions, identify at-risk conversions.",
    autonomous: true,
    icon: "V",
    tools: ["Pipedrive"],
  },
  {
    id: "meeting_prep",
    label: "Meeting Prep",
    command: "Meeting prep [prospect]",
    description: "Generate meeting prep for a specific prospect: company research, litigation portfolio analysis, addendum, talking points, rehearsal questions.",
    autonomous: true,
    icon: "G",
    tools: ["Sales Navigator", "LinkedIn", "Pipedrive"],
  },
];

// ─── Meeting Prep Templates ────────────────────────────────────────────────

export interface MeetingPrepSection {
  title: string;
  description: string;
}

export const MEETING_PREP_SECTIONS: MeetingPrepSection[] = [
  { title: "Company Profile", description: "Industry, revenue, litigation footprint, recent legal news" },
  { title: "Litigation Portfolio Analysis", description: "Estimated open matters, case types, jurisdictions, outside counsel panel" },
  { title: "Executive Background", description: "Career history, publications, conference appearances, LinkedIn activity" },
  { title: "Pain Point Mapping", description: "Likely pain points based on company size, industry, and current tools" },
  { title: "CaseGlide Fit Assessment", description: "Which features map to their likely needs, ROI projections" },
  { title: "Addendum", description: "Personalized briefing document for Wes + Liana to review pre-meeting" },
  { title: "Talking Points", description: "Conversation starters, discovery questions, objection handling" },
  { title: "Rehearsal Questions", description: "Tough questions the prospect might ask, with prepared responses" },
];
