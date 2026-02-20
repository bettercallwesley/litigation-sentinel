// ─── CaseGlide Campaign Definitions ─────────────────────────────────────────
// Four campaigns targeting F500 GCs, CLOs, CROs, VP Claims
// Two destinations: Executive Briefing (direct CTA) and Litigation Sentinel (holding bin)

export type CampaignId = "A" | "B" | "C" | "D";
export type CampaignStatus = "active" | "paused" | "draft";
export type DestinationType = "briefing" | "sentinel";

export interface CampaignMetrics {
  enrolled: number;
  contacted: number;
  replied: number;
  meetings: number;
  converted: number;
}

export interface Campaign {
  id: CampaignId;
  name: string;
  channel: string;
  tool: string;
  description: string;
  destination: DestinationType;
  status: CampaignStatus;
  metrics: CampaignMetrics;
  sequenceSteps: number;
  avgResponseRate: number;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: "A",
    name: "Apollo Volume",
    channel: "Email",
    tool: "Apollo",
    description: "High-volume email sequences targeting litigation leaders at F500 companies. Multi-step sequences with personalized openers driving to Executive Briefing assessment.",
    destination: "briefing",
    status: "active",
    metrics: {
      enrolled: 2450,
      contacted: 1870,
      replied: 187,
      meetings: 23,
      converted: 8,
    },
    sequenceSteps: 5,
    avgResponseRate: 10,
  },
  {
    id: "B",
    name: "LinkedIn Precision",
    channel: "LinkedIn InMail",
    tool: "Sales Navigator",
    description: "Precision InMail outreach via Sales Navigator to hand-picked GCs and CLOs. Every first line requires Wes approval before send.",
    destination: "briefing",
    status: "active",
    metrics: {
      enrolled: 145,
      contacted: 112,
      replied: 34,
      meetings: 12,
      converted: 5,
    },
    sequenceSteps: 3,
    avgResponseRate: 30,
  },
  {
    id: "C",
    name: "Promoter Marketing",
    channel: "Referral",
    tool: "LinkedIn",
    description: "Leveraging existing CaseGlide promoters and industry contacts to warm-introduce prospects. Pitch requires Wes review before outreach.",
    destination: "sentinel",
    status: "active",
    metrics: {
      enrolled: 38,
      contacted: 28,
      replied: 15,
      meetings: 9,
      converted: 4,
    },
    sequenceSteps: 2,
    avgResponseRate: 53,
  },
  {
    id: "D",
    name: "LinkedIn Ads",
    channel: "Paid Social",
    tool: "Campaign Manager",
    description: "Targeted LinkedIn ad campaigns reaching litigation leadership personas. Drives to Litigation Sentinel newsletter for nurture.",
    destination: "sentinel",
    status: "active",
    metrics: {
      enrolled: 0,
      contacted: 4200,
      replied: 0,
      meetings: 0,
      converted: 186,
    },
    sequenceSteps: 0,
    avgResponseRate: 4.4,
  },
];

export type PipelineStage = "subscriber" | "briefing" | "council" | "trial" | "contract";

export interface PipelineStageConfig {
  id: PipelineStage;
  label: string;
  description: string;
  color: string;
}

export const PIPELINE_STAGES: PipelineStageConfig[] = [
  { id: "subscriber", label: "Newsletter", description: "Litigation Sentinel subscriber — nurture stage", color: "#8B95A8" },
  { id: "briefing", label: "Briefing", description: "Completed or scheduled Executive Briefing assessment", color: "#3B82F6" },
  { id: "council", label: "Council", description: "90-day paid Council Program participant", color: "#D4A853" },
  { id: "trial", label: "Trial", description: "30-day proving ground with 10 hardest cases", color: "#34D399" },
  { id: "contract", label: "Contract", description: "Full CaseGlide deployment", color: "#F472B6" },
];

export type ApprovalType = "inmail" | "post" | "apollo_copy" | "promoter_pitch";

export interface ApprovalItem {
  id: string;
  type: ApprovalType;
  prospect?: string;
  company?: string;
  content: string;
  campaign: CampaignId;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
}

export const APPROVAL_TYPE_LABELS: Record<ApprovalType, string> = {
  inmail: "InMail First Line",
  post: "LinkedIn Post",
  apollo_copy: "Apollo Sequence Copy",
  promoter_pitch: "Promoter Outreach Pitch",
};

export const SAMPLE_APPROVALS: ApprovalItem[] = [
  {
    id: "appr-001",
    type: "inmail",
    prospect: "Sarah Chen",
    company: "Dow Chemical",
    content: "Sarah — your team's 2024 MDL strategy was one of the more thoughtful approaches I've studied. The way you consolidated outside counsel across the opioid docket mirrors exactly what we're seeing top-quartile legal departments do with litigation intelligence platforms.",
    campaign: "B",
    createdAt: "2026-02-20T08:30:00Z",
    status: "pending",
  },
  {
    id: "appr-002",
    type: "inmail",
    prospect: "David Park",
    company: "Caterpillar",
    content: "David — I noticed Caterpillar's litigation reserves dropped 12% last quarter while case volume held steady. That level of efficiency usually signals strong outside counsel management. I'd love to show you how CaseGlide benchmarks those results against peer companies.",
    campaign: "B",
    createdAt: "2026-02-20T09:15:00Z",
    status: "pending",
  },
  {
    id: "appr-003",
    type: "post",
    content: "Nuclear verdicts are up 28% since 2023. But the real risk isn't the headline number — it's the 6-18 months of data gaps between filing and first strategy review.\n\nWe analyzed 1,200 closed matters from F500 legal departments and found that companies with structured case intelligence had 34% lower average resolution costs.\n\nThe difference? They knew what they had before the first mediation.\n\nFull analysis in this week's Litigation Sentinel.",
    campaign: "B",
    createdAt: "2026-02-19T14:00:00Z",
    status: "pending",
  },
  {
    id: "appr-004",
    type: "promoter_pitch",
    prospect: "Mike Torres",
    company: "Zurich Insurance",
    content: "Hey Mike — thanks again for the intro to the Zurich claims team. I'm putting together a quick Litigation Sentinel briefing for Jennifer. Would you mind if I mentioned that you suggested we connect? Also planning to highlight the reserve accuracy improvements your team saw in Q4.",
    campaign: "C",
    createdAt: "2026-02-20T10:00:00Z",
    status: "pending",
  },
  {
    id: "appr-005",
    type: "apollo_copy",
    content: "Subject: Litigation intelligence for {{company}}\n\nHi {{first_name}},\n\n{{company}}'s litigation portfolio caught my attention — specifically how your team is managing {{case_count}}+ open matters across {{jurisdiction_count}} jurisdictions.\n\nWe built CaseGlide to give legal departments like yours real-time intelligence on case outcomes, attorney performance, and portfolio exposure.\n\nWould a 15-minute walkthrough be worth your time this week?\n\nBest,\nWes",
    campaign: "A",
    createdAt: "2026-02-18T16:30:00Z",
    status: "pending",
  },
];
