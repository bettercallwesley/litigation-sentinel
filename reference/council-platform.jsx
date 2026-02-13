import { useState, useEffect, createContext, useContext } from "react";

// ─── Theme Context ──────────────────────────────────────────────────────────
const ThemeContext = createContext("fortune500");
const useTheme = () => useContext(ThemeContext);

// ─── Win95 Design System ────────────────────────────────────────────────────
const W = {
  bg: "#008080", silver: "#C0C0C0", darkSilver: "#808080", white: "#FFFFFF", black: "#000000",
  navy: "#000080", navyText: "#FFFFFF", fieldBg: "#FFFFFF", titleActive: "#000080",
  btnFace: "#C0C0C0", btnHighlight: "#FFFFFF", btnShadow: "#808080", btnDkShadow: "#000000",
  text: "#000000", textMuted: "#808080", red: "#FF0000", green: "#008000", yellow: "#FFFF00",
  font: "'MS Sans Serif', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};
const wr = { borderTop: `2px solid ${W.btnHighlight}`, borderLeft: `2px solid ${W.btnHighlight}`, borderBottom: `2px solid ${W.btnDkShadow}`, borderRight: `2px solid ${W.btnDkShadow}` };
const ws = { borderTop: `2px solid ${W.btnShadow}`, borderLeft: `2px solid ${W.btnShadow}`, borderBottom: `2px solid ${W.btnHighlight}`, borderRight: `2px solid ${W.btnHighlight}` };
const wbtn = { ...wr, background: W.btnFace, padding: "4px 12px", fontSize: 11, fontFamily: W.font, cursor: "pointer", color: W.text, borderRadius: 0 };

const W95Win = ({ title, children, style = {} }) => (
  <div style={{ background: W.silver, ...wr, padding: 3, ...style }}>
    <div style={{ background: `linear-gradient(90deg, ${W.titleActive}, #1084D0)`, padding: "3px 4px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: W.navyText, fontFamily: W.font }}>{title}</span>
      <div style={{ display: "flex", gap: 2 }}>
        {["_", "□", "×"].map((b, i) => (
          <button key={i} style={{ ...wr, width: 16, height: 14, padding: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, fontFamily: W.font, background: W.silver, cursor: "pointer", borderRadius: 0, color: W.text }}>{b}</button>
        ))}
      </div>
    </div>
    <div>{children}</div>
  </div>
);
const W95Panel = ({ children, style = {} }) => <div style={{ ...ws, background: W.fieldBg, padding: 8, ...style }}>{children}</div>;
const W95Btn = ({ children, onClick, style = {} }) => <button onClick={onClick} style={{ ...wbtn, ...style }}>{children}</button>;
const W95Badge = ({ children, color = W.navy }) => <span style={{ padding: "1px 6px", background: color, color: W.navyText, fontSize: 10, fontWeight: 700, fontFamily: W.font }}>{children}</span>;
const W95Bar = ({ value, max, color = W.navy }) => (
  <div style={{ ...ws, height: 16, background: W.fieldBg, position: "relative" }}>
    <div style={{ position: "absolute", top: 2, left: 2, bottom: 2, width: `${(value / max) * 100}%`, background: color }} />
  </div>
);
const W95Tab = ({ label, active, onClick }) => (
  <button onClick={onClick} style={{
    padding: "4px 12px", fontSize: 11, fontFamily: W.font, cursor: "pointer", borderRadius: 0, color: W.text,
    background: active ? W.silver : W.darkSilver,
    borderTop: active ? `2px solid ${W.btnHighlight}` : `1px solid ${W.btnShadow}`,
    borderLeft: active ? `2px solid ${W.btnHighlight}` : `1px solid ${W.btnShadow}`,
    borderRight: active ? `2px solid ${W.btnDkShadow}` : `1px solid ${W.btnDkShadow}`,
    borderBottom: active ? `2px solid ${W.silver}` : `1px solid ${W.btnShadow}`,
    marginBottom: active ? -1 : 0, position: "relative", zIndex: active ? 2 : 1,
    fontWeight: active ? 700 : 400,
  }}>{label}</button>
);

// ─── Fortune 500 Design System ──────────────────────────────────────────────
const C = {
  midnight: "#0A0E1A",
  deep: "#111827",
  surface: "#1A1F2E",
  surfaceHover: "#242B3D",
  border: "#2A3142",
  borderLight: "#3A4256",
  textPrimary: "#F1F3F7",
  textSecondary: "#8B95A8",
  textMuted: "#5A6478",
  accent: "#3B82F6",
  accentGlow: "rgba(59, 130, 246, 0.15)",
  accentSoft: "rgba(59, 130, 246, 0.08)",
  gold: "#D4A853",
  goldGlow: "rgba(212, 168, 83, 0.12)",
  emerald: "#34D399",
  emeraldGlow: "rgba(52, 211, 153, 0.12)",
  rose: "#F472B6",
  roseGlow: "rgba(244, 114, 182, 0.12)",
  amber: "#FBBF24",
  amberGlow: "rgba(251, 191, 36, 0.12)",
};

// ─── Logo ────────────────────────────────────────────────────────────────────
const CaseGlideLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="cg-g" x1="0" y1="0" x2="48" y2="48">
        <stop offset="0%" stopColor={C.accent} /><stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="cg-f" x1="28" y1="0" x2="40" y2="12">
        <stop offset="0%" stopColor="#60A5FA" /><stop offset="100%" stopColor={C.accent} />
      </linearGradient>
      <linearGradient id="cg-a" x1="10" y1="28" x2="34" y2="28">
        <stop offset="0%" stopColor={C.gold} /><stop offset="100%" stopColor="#E5C066" />
      </linearGradient>
    </defs>
    <path d="M8 6C8 3.79 9.79 2 12 2H30L40 12V42C40 44.21 38.21 46 36 46H12C9.79 46 8 44.21 8 42V6Z" fill="url(#cg-g)" />
    <path d="M30 2L40 12H34C31.79 12 30 10.21 30 8V2Z" fill="url(#cg-f)" opacity="0.7" />
    <rect x="14" y="18" width="16" height="2" rx="1" fill="white" opacity="0.5" />
    <rect x="14" y="23" width="12" height="2" rx="1" fill="white" opacity="0.35" />
    <rect x="14" y="29" width="20" height="3" rx="1.5" fill="url(#cg-a)" opacity="0.9" />
    <rect x="14" y="35" width="14" height="2" rx="1" fill="white" opacity="0.25" />
  </svg>
);

// ─── Utilities ───────────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s ease" }}>{children}</div>;
};

const Badge = ({ children, color = C.accent, glow }) => (
  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color, background: glow || `${color}15`, border: `1px solid ${color}30` }}>{children}</span>
);

const ProgressRing = ({ value, max, size = 64, color = C.accent, label }) => {
  const pct = Math.round((value / max) * 100);
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={4} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={4} strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: size * 0.28, fontWeight: 600, color }}>{pct}%</span>
        {label && <span style={{ fontSize: 8, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>}
      </div>
    </div>
  );
};

const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s", cursor: onClick ? "pointer" : "default", ...style }}>{children}</div>
);

// ─── Data Model ──────────────────────────────────────────────────────────────
const DATA_CATEGORIES = [
  {
    id: "incident",
    name: "Incident / Claim Data",
    icon: "📋",
    description: "Loss details, claim numbers, dates of loss, claimant info, coverage type, reserves",
    fields: ["Claim Number", "Date of Loss", "Claimant Name", "Coverage Type", "Initial Reserve", "Adjuster Assigned", "Line of Business"],
    sources: ["Claims Management System", "TPA Platform", "Spreadsheets"],
  },
  {
    id: "case",
    name: "Case / Litigation Data",
    icon: "⚖️",
    description: "Parties, attorneys, venue, judge, liability assessment, damages, strategy, negotiations, milestones",
    fields: ["Plaintiff Attorney/Firm", "Defense Attorney/Firm", "Venue/Court", "Judge", "Liability Assessment", "Damages Assessment", "Negotiation History", "Strategy", "Key Milestones", "Case Stage"],
    sources: ["Matter Management System", "Outside Counsel Reports", "Attorney Invoices", "Internal Notes"],
  },
  {
    id: "billing",
    name: "Billing / Legal Spend Data",
    icon: "💰",
    description: "Attorney invoices, fee breakdowns, expense categories, billing rates, total spend by case",
    fields: ["Total Legal Spend", "Fee Breakdown by Phase", "Billing Rates", "Expense Categories", "Invoice History", "Budget vs. Actual"],
    sources: ["E-Billing System", "AP/Finance System", "Legal Bill Review Platform", "Spreadsheets"],
  },
  {
    id: "documents",
    name: "Documents & Communications",
    icon: "📄",
    description: "Lawyer reports, mediation briefs, demand letters, settlement agreements, expert reports",
    fields: ["Attorney Status Reports", "Mediation Briefs", "Demand/Offer Letters", "Settlement Agreements", "Expert Reports", "Deposition Summaries"],
    sources: ["Email/Document Management", "Outside Counsel Portals", "Shared Drives", "Physical Files"],
  },
];

const TRANSFER_METHODS = [
  { id: "csv", name: "CSV/Excel Export", icon: "📊", description: "Export from current system, import into CaseGlide", effort: "Low", speed: "Fast", bestFor: "Bulk historical data with structured fields" },
  { id: "integration", name: "API Integration", icon: "🔗", description: "Direct system-to-system connection via CaseGlide integration tools", effort: "Medium", speed: "Ongoing", bestFor: "Real-time sync with claims or billing systems" },
  { id: "manual_plus_ai", name: "Manual Entry + Case Clerk AI", icon: "🤖", description: "Create cases with basic data, drag in lawyer reports — Case Clerk AI extracts the rest", effort: "Medium", speed: "Moderate", bestFor: "When structured data is limited but documents exist" },
  { id: "hybrid", name: "Hybrid Approach", icon: "⚡", description: "CSV for what's available, Case Clerk AI for what's in documents, manual for gaps", effort: "Varies", speed: "Flexible", bestFor: "Most organizations — combines all methods strategically" },
];

const MILESTONES = [
  { id: "kickoff", name: "Kickoff & Data Discovery", week: "Week 1-2", description: "Map data landscape, identify sources, define priority fields for dashboards", teamTask: "Share system access, identify data owners, export sample data", execTask: "Align on dashboard priorities — what do you most want to see?", status: "active" },
  { id: "case_updates", name: "Case Update Design", week: "Week 2-3", description: "Build custom milestone templates for your case types and configure Case Clerk AI extraction fields", teamTask: "Review milestone templates, identify key document types, test Case Updates", execTask: "Review feature demos: Case Updates and Case Clerk AI document extraction", status: "upcoming" },
  { id: "precedent_load", name: "Precedent Data Load", week: "Week 3-6", description: "Import closed case data via best-fit method — CSV, integration, or Case Clerk AI extraction from documents", teamTask: "Execute data transfer, validate imported records, fill gaps", execTask: "First look at Precedent Dashboard with real data — attorney performance preview", status: "upcoming" },
  { id: "docket_load", name: "Docket Data Load", week: "Week 5-8", description: "Import open case data, configure exception rules, set up intervention triggers", teamTask: "Import open matters, configure budget thresholds, aging rules, milestone tracking", execTask: "First look at Docket Dashboard — see your open portfolio with real exception flags", status: "upcoming" },
  { id: "ai_config", name: "Intelligence Layer", week: "Week 7-10", description: "Configure Chambers AI queries, Chronicle timeline generation, and Case Clerk AI extraction optimization", teamTask: "Train Case Clerk AI on your document types, test Chambers queries, review Chronicle output", execTask: "Deep dive: Chambers & Chronicle — ask your portfolio real questions, generate board-ready timelines", status: "upcoming" },
  { id: "activation", name: "Full Activation & Readout", week: "Week 10-12", description: "Executive readout with live dashboards, ROI assessment, and implementation plan for full deployment", teamTask: "Final data validation, user training, workflow optimization", execTask: "Executive readout: see the full picture — Precedent + Docket + AI, with your real data", status: "upcoming" },
];

const EDUCATION_CONTENT = {
  team: [
    { week: 1, title: "Case Updates: How Milestone-Driven Data Collection Works", type: "Feature Deep Dive", icon: "🔄" },
    { week: 2, title: "Case Clerk AI: Extracting Case Data from Attorney Reports", type: "Feature Deep Dive", icon: "🤖" },
    { week: 3, title: "Data Import: CSV Upload and Field Mapping", type: "How-To Guide", icon: "📊" },
    { week: 4, title: "Building Your Precedent Dataset: What Fields Matter Most", type: "Strategy Guide", icon: "⚖️" },
    { week: 5, title: "Configuring Docket Exceptions: Budget, Aging, and Intervention Rules", type: "How-To Guide", icon: "📋" },
    { week: 6, title: "Case Updates in Action: Real Workflow Examples", type: "Case Study", icon: "✨" },
    { week: 8, title: "Case Clerk AI Advanced: Training Extraction on Your Document Types", type: "How-To Guide", icon: "🤖" },
    { week: 10, title: "Chambers Queries: Asking Your Portfolio the Right Questions", type: "Feature Deep Dive", icon: "💬" },
  ],
  exec: [
    { week: 1, title: "Litigation Intelligence: The Docket Dashboard Vision", type: "Executive Brief", icon: "📊" },
    { week: 2, title: "Precedent: Measuring Attorney Value Beyond Legal Spend", type: "Executive Brief", icon: "⚖️" },
    { week: 4, title: "Your Data is Loading: First Look at Precedent Insights", type: "Progress Update", icon: "📈" },
    { week: 6, title: "Docket Dashboard Preview: Your Open Portfolio Exceptions", type: "Progress Update", icon: "🎯" },
    { week: 8, title: "Chambers & Chronicle: AI That Answers and Narrates", type: "Executive Brief", icon: "💬" },
    { week: 10, title: "Pre-Readout: What Your Data is Telling Us", type: "Insight Report", icon: "🔍" },
    { week: 12, title: "Executive Readout: Full Litigation Intelligence Assessment", type: "Final Deliverable", icon: "🏆" },
  ],
};

// ─── Navigation ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "data", label: "Data Readiness", icon: "◫" },
  { id: "activation", label: "Activation", icon: "▶" },
  { id: "education", label: "Education", icon: "◆" },
  { id: "dashboards", label: "Dashboard Preview", icon: "▦" },
];

// ─── Pages ───────────────────────────────────────────────────────────────────

// Overview Page
const OverviewPage = ({ clientName, week, onNav }) => {
  const activeMilestone = MILESTONES.find(m => m.status === "active") || MILESTONES[0];
  const completedCount = MILESTONES.filter(m => m.status === "completed").length;
  const dataProgress = 35;
  const teamEngagement = 72;

  return (
    <div>
      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Welcome to Council
          </h1>
          <p style={{ fontSize: 14, color: C.textSecondary, margin: 0 }}>
            {clientName ? `${clientName} · ` : ""}Week {week} of 12
          </p>
        </div>
      </FadeIn>

      {/* This Week's Priority — THE thing to do */}
      <FadeIn delay={80}>
        <Card style={{ marginBottom: 20, border: `1px solid ${C.accent}30`, background: `linear-gradient(135deg, ${C.accentSoft}, ${C.surface})` }}>
          <div style={{ padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>🎯</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: "0.06em" }}>This Week's Priority</span>
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 500, color: C.textPrimary, margin: "0 0 8px" }}>{activeMilestone.name}</h3>
            <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6, margin: "0 0 16px" }}>{activeMilestone.description}</p>
            <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: 14, background: C.midnight, borderRadius: 10, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 10, color: C.accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>👥 Your Team This Week</div>
                <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5, margin: 0 }}>{activeMilestone.teamTask}</p>
              </div>
              <div style={{ padding: 14, background: C.midnight, borderRadius: 10, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 10, color: C.gold, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>👔 Executive This Week</div>
                <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5, margin: 0 }}>{activeMilestone.execTask}</p>
              </div>
            </div>
            {week <= 3 && (
              <button onClick={() => onNav("data")} style={{
                marginTop: 14, padding: "10px 20px", background: C.accent, border: "none", borderRadius: 8,
                color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}>
                Start: Map Your Data Sources →
              </button>
            )}
          </div>
        </Card>
      </FadeIn>

      {/* Status Cards */}
      <FadeIn delay={150}>
        <div className="council-grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Data Loaded", value: `${dataProgress}%`, sub: "Precedent + Docket", color: dataProgress > 50 ? C.emerald : C.amber, action: "dashboards" },
            { label: "Milestones", value: `${completedCount}/${MILESTONES.length}`, sub: "Completed", color: C.gold, action: "activation" },
            { label: "Team Activity", value: `${teamEngagement}%`, sub: "Engagement rate", color: C.emerald, action: null },
            { label: "Next Check-In", value: "Fri", sub: "Feb 14, 2:00 PM", color: C.accent, action: null },
          ].map((stat, i) => (
            <Card key={i} onClick={stat.action ? () => onNav(stat.action) : undefined} style={{ padding: 16, cursor: stat.action ? "pointer" : "default" }}>
              <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{stat.sub}</div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Your CaseGlide Team */}
      <FadeIn delay={220}>
        <Card style={{ marginBottom: 20 }}>
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "#fff" }}>LM</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary }}>Liana Rodriguez</div>
                <div style={{ fontSize: 12, color: C.textMuted }}>Your Council Advisor · liana@caseglide.com</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ padding: "8px 16px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, color: C.textSecondary, fontSize: 12, cursor: "pointer" }}>Message</button>
              <button style={{ padding: "8px 16px", background: C.accentSoft, border: `1px solid ${C.accent}30`, borderRadius: 8, color: C.accent, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Schedule Call</button>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Quick Navigation */}
      <FadeIn delay={280}>
        <div style={{ fontSize: 11, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>Jump To</div>
        <div className="council-grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
          {[
            { label: "Data Readiness", desc: "Map your data sources", action: "data", icon: "◫", color: C.accent },
            { label: "Activation Timeline", desc: "12-week milestone plan", action: "activation", icon: "▶", color: C.gold },
            { label: "Education", desc: "Feature guides & briefs", action: "education", icon: "◆", color: C.emerald },
            { label: "Dashboard Preview", desc: "Watch your data build", action: "dashboards", icon: "▦", color: C.amber },
          ].map((item, i) => (
            <Card key={i} onClick={() => onNav(item.action)} style={{ padding: 16, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 14, opacity: 0.6 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{item.label}</span>
              </div>
              <div style={{ fontSize: 11, color: C.textMuted }}>{item.desc}</div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

// Data Readiness Page
const DataReadinessPage = () => {
  const [activeCategory, setActiveCategory] = useState("incident");
  const [selections, setSelections] = useState({});
  const cat = DATA_CATEGORIES.find(c => c.id === activeCategory);

  const setSource = (catId, source) => {
    setSelections(prev => ({ ...prev, [catId]: { ...prev[catId], source } }));
  };
  const setMethod = (catId, method) => {
    setSelections(prev => ({ ...prev, [catId]: { ...prev[catId], method } }));
  };

  const completedCategories = Object.keys(selections).filter(k => selections[k]?.source && selections[k]?.method).length;

  return (
    <div>
      <FadeIn>
        <div style={{ marginBottom: 8 }}>
          <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Data Readiness Assessment
          </h1>
          <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 24px" }}>
            For each category, identify where this data currently lives and the best method for getting it into CaseGlide. This drives your Precedent and Docket dashboards.
          </p>
        </div>
      </FadeIn>

      {/* Progress */}
      <FadeIn delay={100}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: "14px 20px", background: C.surface, borderRadius: 12, border: `1px solid ${C.border}` }}>
          <ProgressRing value={completedCategories} max={4} size={48} color={completedCategories === 4 ? C.emerald : C.accent} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary }}>{completedCategories} of 4 data categories mapped</div>
            <div style={{ fontSize: 12, color: C.textMuted }}>Complete all four to generate your data activation plan</div>
          </div>
        </div>
      </FadeIn>

      {/* Category Tabs */}
      <FadeIn delay={150}>
        <div style={{ display: "flex", gap: 6, marginBottom: 24, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
          {DATA_CATEGORIES.map(c => {
            const isActive = c.id === activeCategory;
            const isDone = selections[c.id]?.source && selections[c.id]?.method;
            return (
              <button key={c.id} onClick={() => setActiveCategory(c.id)} style={{
                padding: "10px 16px", borderRadius: 10, border: `1px solid ${isActive ? C.accent : isDone ? C.emerald + "40" : C.border}`,
                background: isActive ? C.accentSoft : "transparent", color: isActive ? C.textPrimary : C.textSecondary,
                fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span>{c.icon}</span> {c.name}
                {isDone && <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.emerald }} />}
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Category Detail */}
      <FadeIn key={activeCategory}>
        <Card>
          <div style={{ padding: "24px 24px 16px", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <h2 style={{ fontSize: 20, fontWeight: 500, color: C.textPrimary, margin: 0, fontFamily: "'Instrument Serif', Georgia, serif" }}>{cat.name}</h2>
            </div>
            <p style={{ fontSize: 14, color: C.textSecondary, margin: 0, lineHeight: 1.6 }}>{cat.description}</p>
          </div>

          <div style={{ padding: 24 }}>
            {/* Key Fields */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>Key Fields for Your Dashboards</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.fields.map((f, i) => (
                  <span key={i} style={{ padding: "6px 12px", background: C.midnight, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, color: C.textSecondary }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Where does it live? */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: C.accent, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>Where does this data currently live?</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {cat.sources.map((s, i) => {
                  const isSelected = selections[cat.id]?.source === s;
                  return (
                    <button key={i} onClick={() => setSource(cat.id, s)} style={{
                      padding: "12px 16px", background: isSelected ? C.accentSoft : C.midnight, border: `1px solid ${isSelected ? C.accent : C.border}`,
                      borderRadius: 10, color: isSelected ? C.textPrimary : C.textSecondary, fontSize: 13, cursor: "pointer", textAlign: "left",
                      display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s",
                    }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${isSelected ? C.accent : C.borderLight}`, background: isSelected ? C.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {isSelected && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                      </div>
                      {s}
                    </button>
                  );
                })}
                <button onClick={() => setSource(cat.id, "Other")} style={{
                  padding: "12px 16px", background: selections[cat.id]?.source === "Other" ? C.accentSoft : C.midnight, border: `1px solid ${selections[cat.id]?.source === "Other" ? C.accent : C.border}`,
                  borderRadius: 10, color: C.textSecondary, fontSize: 13, cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${selections[cat.id]?.source === "Other" ? C.accent : C.borderLight}`, background: selections[cat.id]?.source === "Other" ? C.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {selections[cat.id]?.source === "Other" && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  Other / Not sure
                </button>
              </div>
            </div>

            {/* Transfer Method */}
            {selections[cat.id]?.source && (
              <FadeIn>
                <div>
                  <div style={{ fontSize: 11, color: C.gold, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>Best transfer method</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
                    {TRANSFER_METHODS.map(m => {
                      const isSelected = selections[cat.id]?.method === m.id;
                      return (
                        <button key={m.id} onClick={() => setMethod(cat.id, m.id)} style={{
                          padding: 16, background: isSelected ? C.accentSoft : C.midnight, border: `1px solid ${isSelected ? C.accent : C.border}`,
                          borderRadius: 12, cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                            <span style={{ fontSize: 18 }}>{m.icon}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: isSelected ? C.textPrimary : C.textSecondary }}>{m.name}</span>
                          </div>
                          <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5, margin: "0 0 8px" }}>{m.description}</p>
                          <div style={{ display: "flex", gap: 12, fontSize: 11, color: C.textMuted }}>
                            <span>Effort: <span style={{ color: m.effort === "Low" ? C.emerald : C.amber }}>{m.effort}</span></span>
                            <span>Speed: <span style={{ color: m.speed === "Fast" ? C.emerald : C.amber }}>{m.speed}</span></span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </Card>
      </FadeIn>

      {/* Activation Plan Summary */}
      {completedCategories === 4 && (
        <FadeIn delay={200}>
          <Card style={{ marginTop: 24, border: `1px solid ${C.emerald}30` }}>
            <div style={{ padding: "20px 24px", background: `${C.emerald}08` }}>
              <Badge color={C.emerald}>Data Activation Plan Ready</Badge>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: C.textPrimary, margin: "10px 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>Your Path to Live Dashboards</h3>
              <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
                All four data categories are mapped. Your CaseGlide team will use this plan to begin data activation. You'll see data start appearing in your Precedent and Docket dashboards within the next 2-3 weeks.
              </p>
            </div>
          </Card>
        </FadeIn>
      )}
    </div>
  );
};

// Activation Timeline Page
const ActivationPage = () => (
  <div>
    <FadeIn>
      <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
        90-Day Activation Timeline
      </h1>
      <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 28px" }}>
        Each phase builds toward live Precedent and Docket dashboards with your real data.
      </p>
    </FadeIn>

    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div style={{ position: "absolute", left: 23, top: 0, bottom: 0, width: 2, background: C.border, zIndex: 0 }} />

      {MILESTONES.map((m, i) => {
        const isActive = m.status === "active";
        const isDone = m.status === "completed";
        const dotColor = isDone ? C.emerald : isActive ? C.accent : C.textMuted;
        return (
          <FadeIn key={m.id} delay={i * 80}>
            <div style={{ display: "flex", gap: 20, marginBottom: 20, position: "relative" }}>
              {/* Dot */}
              <div style={{
                width: 48, minWidth: 48, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1,
              }}>
                <div style={{
                  width: isActive ? 20 : 14, height: isActive ? 20 : 14, borderRadius: "50%", background: isDone ? C.emerald : isActive ? C.accent : C.surface,
                  border: `2px solid ${dotColor}`, boxShadow: isActive ? `0 0 16px ${C.accent}40` : "none", transition: "all 0.3s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {isDone && <span style={{ fontSize: 10, color: "#fff" }}>✓</span>}
                </div>
              </div>

              {/* Content */}
              <Card style={{ flex: 1, border: isActive ? `1px solid ${C.accent}40` : `1px solid ${C.border}`, boxShadow: isActive ? `0 0 30px ${C.accent}08` : "none" }}>
                <div style={{ padding: "18px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h3 style={{ fontSize: 15, fontWeight: 500, color: C.textPrimary, margin: 0 }}>{m.name}</h3>
                      {isActive && <Badge color={C.accent}>In Progress</Badge>}
                      {isDone && <Badge color={C.emerald}>Complete</Badge>}
                    </div>
                    <span style={{ fontSize: 12, color: C.textMuted, fontWeight: 500 }}>{m.week}</span>
                  </div>
                  <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6, margin: "0 0 14px" }}>{m.description}</p>
                  <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div style={{ padding: "10px 14px", background: C.midnight, borderRadius: 8, border: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: 10, color: C.accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Team</div>
                      <div style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.5 }}>{m.teamTask}</div>
                    </div>
                    <div style={{ padding: "10px 14px", background: C.midnight, borderRadius: 8, border: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: 10, color: C.gold, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Executive</div>
                      <div style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.5 }}>{m.execTask}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </div>
);

// Education Page
const EducationPage = () => {
  const [track, setTrack] = useState("team");
  const content = EDUCATION_CONTENT[track];

  return (
    <div>
      <FadeIn>
        <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Education & Enablement
        </h1>
        <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 24px" }}>
          Curated content delivered to each track throughout the 90-day engagement — building feature knowledge and executive confidence in parallel.
        </p>
      </FadeIn>

      {/* Track Toggle */}
      <FadeIn delay={100}>
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {[
            { id: "team", label: "Team Track", color: C.accent, desc: "Claims managers, legal ops, paralegals" },
            { id: "exec", label: "Executive Track", color: C.gold, desc: "GC, CLO, VP Claims" },
          ].map(t => (
            <button key={t.id} onClick={() => setTrack(t.id)} style={{
              padding: "14px 20px", borderRadius: 12, border: `1px solid ${track === t.id ? t.color : C.border}`,
              background: track === t.id ? `${t.color}10` : "transparent", cursor: "pointer", textAlign: "left", flex: 1, transition: "all 0.2s",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: track === t.id ? t.color : C.textSecondary }}>{t.label}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{t.desc}</div>
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Content List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {content.map((item, i) => {
          const isPast = item.week <= 2; // simulated
          return (
            <FadeIn key={i} delay={100 + i * 50}>
              <Card style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: C.midnight, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary, marginBottom: 2 }}>{item.title}</div>
                  <div style={{ display: "flex", gap: 10, fontSize: 12, color: C.textMuted }}>
                    <span>{item.type}</span>
                    <span>·</span>
                    <span>Week {item.week}</span>
                  </div>
                </div>
                {isPast ? (
                  <Badge color={C.emerald}>Delivered</Badge>
                ) : item.week <= 3 ? (
                  <Badge color={C.accent}>This Week</Badge>
                ) : (
                  <Badge color={C.textMuted}>Upcoming</Badge>
                )}
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

// Dashboard Preview Page
const DashboardPreviewPage = () => {
  const [tab, setTab] = useState("docket");
  const [showVision, setShowVision] = useState(false);

  return (
    <div>
      <FadeIn>
        <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Dashboard Preview
        </h1>
        <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 20px" }}>
          Toggle between your current data progress and the full vision of what your dashboards will look like at completion.
        </p>
      </FadeIn>

      {/* View Toggle */}
      <FadeIn delay={80}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 3, padding: 3, background: C.surface, borderRadius: 10, border: `1px solid ${C.border}` }}>
            <button onClick={() => setShowVision(false)} style={{
              padding: "8px 16px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
              background: !showVision ? C.accent : "transparent", color: !showVision ? "#fff" : C.textMuted,
            }}>Your Progress</button>
            <button onClick={() => setShowVision(true)} style={{
              padding: "8px 16px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
              background: showVision ? C.gold : "transparent", color: showVision ? "#fff" : C.textMuted,
            }}>Full Vision ✦</button>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[
              { id: "docket", label: "Docket", color: C.accent },
              { id: "precedent", label: "Precedent", color: C.gold },
            ].map(d => (
              <button key={d.id} onClick={() => setTab(d.id)} style={{
                padding: "8px 14px", borderRadius: 8, border: `1px solid ${tab === d.id ? d.color : C.border}`,
                background: tab === d.id ? `${d.color}10` : "transparent", color: tab === d.id ? C.textPrimary : C.textMuted,
                fontSize: 12, fontWeight: 500, cursor: "pointer",
              }}>{d.label}</button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── DOCKET DASHBOARD ────────────────────────────────────── */}
      {tab === "docket" && (
        <FadeIn key={`docket-${showVision}`}>
          {!showVision ? (
            <>
              <Card style={{ marginBottom: 14, border: `1px solid ${C.amber}30` }}>
                <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                  <ProgressRing value={42} max={100} size={40} color={C.amber} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>42% of open cases loaded</div>
                    <div style={{ fontSize: 12, color: C.textMuted }}>87 of 208 active matters — insights are partial</div>
                  </div>
                </div>
              </Card>
              <div className="council-grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 8, marginBottom: 14 }}>
                {[
                  { label: "Over Budget", value: "5", color: C.rose, ok: true },
                  { label: "Over $50K", value: "3", color: C.amber, ok: true },
                  { label: "Aging 365+", value: "11", color: C.amber, ok: true },
                  { label: "Settlement Ready", value: "—", color: C.textMuted, ok: false },
                  { label: "Trial in 90 Days", value: "2", color: C.rose, ok: true },
                  { label: "Post-Med Stalled", value: "—", color: C.textMuted, ok: false },
                ].map((s, i) => (
                  <Card key={i} style={{ padding: 14, textAlign: "center", opacity: s.ok ? 1 : 0.45 }}>
                    <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: C.textMuted, marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                    {!s.ok && <div style={{ fontSize: 9, color: C.textMuted, fontStyle: "italic", marginTop: 2 }}>Needs data</div>}
                  </Card>
                ))}
              </div>
              <Card>
                <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.rose, textTransform: "uppercase" }}>⚠ Needs Attention</span>
                  <span style={{ fontSize: 10, color: C.textMuted }}>Based on loaded data</span>
                </div>
                {[
                  { name: "Garcia v. National Property", stage: "Discovery", days: "387 days", budget: "$52K / $40K", flag: "Over budget + aging" },
                  { name: "Williams Class Action", stage: "Pre-Trial", days: "445 days", budget: "$128K / $100K", flag: "Trial in 62 days" },
                ].map((c, i) => (
                  <div key={i} style={{ padding: "10px 16px", borderBottom: i < 1 ? `1px solid ${C.border}` : "none", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 140px" }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: C.textMuted }}>{c.stage} · {c.days}</div>
                    </div>
                    <span style={{ fontSize: 12, color: C.amber, fontWeight: 500 }}>{c.budget}</span>
                    <Badge color={C.rose}>{c.flag}</Badge>
                  </div>
                ))}
              </Card>
            </>
          ) : (
            <>
              {/* FULL VISION — Docket (from CaseGlide marketing) */}
              <Card style={{ marginBottom: 14, border: `1px solid ${C.gold}20` }}>
                <div style={{ padding: "12px 18px", background: `${C.gold}08`, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: C.gold }}>Full Vision — What your Docket Dashboard will look like</span>
                </div>
              </Card>

              {/* Key Performance Metrics */}
              <div className="council-grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 14 }}>
                {[
                  { label: "Cases Open", value: "1,250", change: "+8%", color: C.textPrimary },
                  { label: "Median Duration", value: "145 Days", change: "-12%", color: C.emerald },
                  { label: "Median Spend", value: "$32,500", change: "+15%", color: C.amber },
                ].map((m, i) => (
                  <Card key={i} style={{ padding: 16 }}>
                    <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>{m.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 600, color: m.color }}>{m.value}</div>
                    <div style={{ fontSize: 11, color: m.change.startsWith("-") ? C.emerald : C.amber, marginTop: 2 }}>▲ {m.change}</div>
                  </Card>
                ))}
              </div>

              {/* Cases to Watch + Cases by Track */}
              <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 10, marginBottom: 14 }}>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Cases to Watch</div>
                  {[
                    { label: "Plaintiff Depo Scheduled", count: 12 },
                    { label: "Mediation", count: 8 },
                    { label: "Dispositive Motion", count: 5 },
                    { label: "Trial", count: 3 },
                    { label: "Over 365 Days", count: 25 },
                  ].map((w, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none" }}>
                      <span style={{ fontSize: 12, color: C.textSecondary }}>{w.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: w.count > 10 ? C.amber : C.textPrimary }}>{w.count}</span>
                    </div>
                  ))}
                </Card>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Cases by Track</div>
                  {[
                    { label: "Early Settlement Track", pct: 22, color: C.emerald },
                    { label: "Discovery to Strategize", pct: 35, color: C.accent },
                    { label: "Potential Dispositive", pct: 18, color: C.amber },
                    { label: "Potential Settlement", pct: 45, color: C.emerald },
                    { label: "Trial Track", pct: 12, color: C.rose },
                  ].map((t, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textSecondary, marginBottom: 3 }}>
                        <span>{t.label}</span><span>{t.pct}%</span>
                      </div>
                      <div style={{ height: 6, background: C.border, borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${t.pct}%`, height: "100%", background: t.color, borderRadius: 3 }} />
                      </div>
                    </div>
                  ))}
                </Card>
              </div>

              {/* Negotiation + Expense */}
              <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Time Since Last Negotiation</div>
                  {[
                    { label: "< 30 Days", pct: 40, color: C.emerald },
                    { label: "31-60 Days", pct: 30, color: C.accent },
                    { label: "> 90 Days", pct: 20, color: C.rose },
                  ].map((n, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: C.textSecondary, width: 70, flexShrink: 0 }}>{n.label}</span>
                      <div style={{ flex: 1, height: 6, background: C.border, borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${n.pct}%`, height: "100%", background: n.color, borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: n.color, width: 32, textAlign: "right" }}>{n.pct}%</span>
                    </div>
                  ))}
                </Card>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Legal Expense Alert</div>
                  {[
                    { label: "Over Budget", value: 65, color: C.rose },
                    { label: "Over $50K", value: "42%", color: C.amber },
                    { label: "Over $25K", value: "78%", color: C.amber },
                  ].map((e, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                      <span style={{ fontSize: 12, color: C.textSecondary }}>{e.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: e.color }}>{e.value}</span>
                    </div>
                  ))}
                </Card>
              </div>
            </>
          )}
        </FadeIn>
      )}

      {/* ── PRECEDENT DASHBOARD ─────────────────────────────────── */}
      {tab === "precedent" && (
        <FadeIn key={`precedent-${showVision}`}>
          {!showVision ? (
            <>
              <Card style={{ marginBottom: 14, border: `1px solid ${C.gold}30` }}>
                <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                  <ProgressRing value={28} max={100} size={40} color={C.gold} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>28% of closed cases loaded</div>
                    <div style={{ fontSize: 12, color: C.textMuted }}>156 of 560 resolved matters — performance scoring building</div>
                  </div>
                </div>
              </Card>
              <Card>
                <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: C.gold, textTransform: "uppercase" }}>Attorney Performance — Early Signal</span>
                </div>
                <div className="council-grid-table" style={{ padding: "8px 16px", borderBottom: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1.5fr 0.8fr 0.8fr 0.8fr 1fr", gap: 8, fontSize: 11, color: C.textMuted, textTransform: "uppercase" }}>
                  <span>Firm</span><span>Cases</span><span>Spend</span><span>Score</span><span>Value</span>
                </div>
                {[
                  { firm: "Baker & Assoc.", cases: "18", spend: "$38K", score: "7.9", rating: "High", rColor: C.emerald },
                  { firm: "Morrison Drake", cases: "12", spend: "$54K", score: "—", rating: "Building", rColor: C.textMuted },
                  { firm: "Sterling Whitmore", cases: "8", spend: "$71K", score: "—", rating: "Building", rColor: C.textMuted },
                ].map((f, i) => (
                  <div key={i} className="council-grid-table" style={{ padding: "10px 16px", borderBottom: i < 2 ? `1px solid ${C.border}` : "none", display: "grid", gridTemplateColumns: "1.5fr 0.8fr 0.8fr 0.8fr 1fr", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 12, fontWeight: 500, color: C.textPrimary }}>{f.firm}</span>
                    <span style={{ fontSize: 12, color: C.textSecondary }}>{f.cases}</span>
                    <span style={{ fontSize: 12, color: C.textSecondary }}>{f.spend}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: f.rColor }}>{f.score === "—" ? "—" : `${f.score}/10`}</span>
                    <Badge color={f.rColor}>{f.rating}</Badge>
                  </div>
                ))}
              </Card>
              <div style={{ marginTop: 10, padding: "10px 14px", background: C.surface, borderRadius: 10, border: `1px solid ${C.border}` }}>
                <p style={{ fontSize: 11, color: C.textMuted, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>
                  Outcome scoring requires liability, damages, venue, and negotiation data. As more detail loads via CSV or Case Clerk AI, scores will calibrate.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* FULL VISION — Precedent (from CaseGlide marketing) */}
              <Card style={{ marginBottom: 14, border: `1px solid ${C.gold}20` }}>
                <div style={{ padding: "12px 18px", background: `${C.gold}08`, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: C.gold }}>Full Vision — What your Precedent Dashboard will look like</span>
                </div>
              </Card>

              {/* Value of Defense + Budget Accuracy */}
              <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                <Card style={{ padding: 18, background: `linear-gradient(135deg, ${C.surface}, ${C.emeraldGlow})` }}>
                  <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Value of Defense</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: C.emerald }}>$5.8M</div>
                  <div style={{ fontSize: 11, color: C.emerald }}>✓ Demand Reduction · +18%</div>
                </Card>
                <Card style={{ padding: 18, background: `linear-gradient(135deg, ${C.surface}, ${C.accentGlow})` }}>
                  <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Budget Accuracy</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: C.accent }}>92%</div>
                  <div style={{ fontSize: 11, color: C.accent }}>✓ Initial Budget Accuracy · +12%</div>
                </Card>
              </div>

              {/* Cycle Time Efficiency */}
              <Card style={{ padding: 18, marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>Cycle Time Efficiency — Days Improved</div>
                <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
                  {[
                    { stage: "Initial Analysis", days: 45 },
                    { stage: "Discovery", days: 78 },
                    { stage: "Depositions", days: 15 },
                    { stage: "Mediation", days: 22 },
                    { stage: "Trial", days: 22 },
                  ].map((s, i) => (
                    <div key={i} style={{ flex: "1 0 90px", padding: "12px 10px", background: C.midnight, borderRadius: 10, border: `1px solid ${C.border}`, textAlign: "center" }}>
                      <div style={{ fontSize: 22, fontWeight: 700, color: C.emerald }}>{s.days}</div>
                      <div style={{ fontSize: 9, color: C.textMuted, marginTop: 2 }}>Days</div>
                      <div style={{ fontSize: 10, color: C.emerald, marginTop: 4 }}>▼ Improved</div>
                      <div style={{ fontSize: 10, color: C.textMuted, marginTop: 2 }}>{s.stage}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Resolution Type + Litigation Stage */}
              <div className="council-milestone-tracks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Closed by Resolution Type</div>
                  {[
                    { label: "Dismissed", pct: 18, color: C.emerald },
                    { label: "Settled", pct: 55, color: C.accent },
                    { label: "Summary Judgment", pct: 12, color: C.gold },
                    { label: "Trial Win", pct: 10, color: C.emerald },
                    { label: "Trial Loss", pct: 5, color: C.rose },
                  ].map((r, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                      <span style={{ fontSize: 11, color: C.textSecondary, width: 80, flexShrink: 0 }}>{r.label}</span>
                      <div style={{ flex: 1, height: 8, background: C.border, borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${r.pct}%`, height: "100%", background: r.color, borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: 11, color: C.textMuted, width: 28, textAlign: "right" }}>{r.pct}%</span>
                    </div>
                  ))}
                </Card>
                <Card style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Closed by Litigation Stage</div>
                  {[
                    { label: "Initial Analysis", pct: 15, color: C.emerald },
                    { label: "Deposition", pct: 20, color: C.accent },
                    { label: "Discovery", pct: 30, color: C.gold },
                    { label: "Mediation", pct: 25, color: C.amber },
                    { label: "Trial", pct: 10, color: C.rose },
                  ].map((r, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                      <span style={{ fontSize: 11, color: C.textSecondary, width: 80, flexShrink: 0 }}>{r.label}</span>
                      <div style={{ flex: 1, height: 8, background: C.border, borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${r.pct}%`, height: "100%", background: r.color, borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: 11, color: C.textMuted, width: 28, textAlign: "right" }}>{r.pct}%</span>
                    </div>
                  ))}
                </Card>
              </div>
            </>
          )}
        </FadeIn>
      )}
    </div>
  );
};


// ─── Theme Toggle + Taskbar ──────────────────────────────────────────────────
const ThemeToggle = ({ theme, setTheme }) => {
  if (theme === "insurance") {
    return (
      <div style={{ position: "fixed", bottom: 32, right: 8, zIndex: 999 }}>
        <button onClick={() => setTheme("fortune500")} style={{ ...wbtn, padding: "3px 10px", fontSize: 10 }}>
          💼 Switch to Fortune 500 Mode
        </button>
      </div>
    );
  }
  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 999 }}>
      <button onClick={() => setTheme("insurance")} style={{
        padding: "8px 16px", background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`,
        borderRadius: 8, color: C.textMuted, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        backdropFilter: "blur(10px)",
      }}>
        <span style={{ fontSize: 13 }}>🖥️</span> Insurance Company Mode
      </button>
    </div>
  );
};

const W95Taskbar = () => (
  <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, background: W.silver, ...wr, padding: "2px 4px", display: "flex", alignItems: "center", gap: 4, height: 28 }}>
    <button style={{ ...wr, background: W.silver, padding: "2px 8px", display: "flex", alignItems: "center", gap: 4, cursor: "pointer", borderRadius: 0 }}>
      <span style={{ fontSize: 12 }}>🪟</span>
      <span style={{ fontSize: 11, fontWeight: 700, fontFamily: W.font }}>Start</span>
    </button>
    <div style={{ flex: 1 }}>
      <div style={{ ...ws, padding: "2px 8px", maxWidth: 240 }}>
        <span style={{ fontSize: 10, fontFamily: W.font }}>CaseGlide Council Program.exe</span>
      </div>
    </div>
    <div style={{ ...ws, padding: "2px 8px" }}>
      <span style={{ fontSize: 10, fontFamily: W.font }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  </div>
);

// ─── Win95 Pages ─────────────────────────────────────────────────────────────
const W95OverviewPage = ({ clientName, week, onNav }) => {
  const activeMilestone = MILESTONES.find(m => m.status === "active") || MILESTONES[0];
  return (
    <W95Win title={`Council Program - ${clientName}`} style={{ maxWidth: 600 }}>
      <div style={{ padding: 8 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <W95Panel style={{ flex: 1, padding: 6 }}>
            <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>Week</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: W.navy }}>{week}/12</div>
          </W95Panel>
          <W95Panel style={{ flex: 1, padding: 6 }}>
            <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>Data Loaded</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: W.green }}>35%</div>
          </W95Panel>
          <W95Panel style={{ flex: 1, padding: 6 }}>
            <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>Milestones</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: W.navy }}>0/6</div>
          </W95Panel>
        </div>

        <W95Panel style={{ marginBottom: 8, padding: 8 }}>
          <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted, marginBottom: 2 }}>CURRENT PHASE</div>
          <div style={{ fontSize: 12, fontWeight: 700, fontFamily: W.font, marginBottom: 4 }}>{activeMilestone.name}</div>
          <div style={{ fontSize: 11, fontFamily: W.font, lineHeight: 1.4, marginBottom: 6 }}>{activeMilestone.description}</div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ ...ws, flex: 1, background: W.fieldBg, padding: 6 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: W.navy, fontFamily: W.font, marginBottom: 2 }}>TEAM:</div>
              <div style={{ fontSize: 10, fontFamily: W.font, lineHeight: 1.4 }}>{activeMilestone.teamTask}</div>
            </div>
            <div style={{ ...ws, flex: 1, background: W.fieldBg, padding: 6 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#806600", fontFamily: W.font, marginBottom: 2 }}>EXECUTIVE:</div>
              <div style={{ fontSize: 10, fontFamily: W.font, lineHeight: 1.4 }}>{activeMilestone.execTask}</div>
            </div>
          </div>
        </W95Panel>

        <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted, marginBottom: 4 }}>Quick Navigation:</div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          <W95Btn onClick={() => onNav("data")}>📋 Data Readiness</W95Btn>
          <W95Btn onClick={() => onNav("activation")}>▶ Timeline</W95Btn>
          <W95Btn onClick={() => onNav("education")}>📖 Education</W95Btn>
          <W95Btn onClick={() => onNav("dashboards")}>📊 Dashboards</W95Btn>
        </div>
      </div>
    </W95Win>
  );
};

const W95DashboardPage = () => {
  const [tab, setTab] = useState("docket");
  return (
    <W95Win title="Dashboard Preview - CaseGlide" style={{ maxWidth: 600 }}>
      <div style={{ padding: 8 }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 0 }}>
          <W95Tab label="📊 Docket" active={tab === "docket"} onClick={() => setTab("docket")} />
          <W95Tab label="⚖️ Precedent" active={tab === "precedent"} onClick={() => setTab("precedent")} />
        </div>
        <W95Panel style={{ padding: 10 }}>
          {tab === "docket" ? (
            <div>
              <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted, marginBottom: 6 }}>Open Case Exceptions:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 8 }}>
                {[
                  { label: "Over Budget", value: "65", color: W.red },
                  { label: "Over $50K", value: "42%", color: "#CC6600" },
                  { label: "Aging 365+", value: "25", color: "#CC6600" },
                  { label: "At Mediation", value: "8", color: W.navy },
                  { label: "Trial Track", value: "3", color: W.red },
                  { label: "Post-Med Stall", value: "9", color: "#CC6600" },
                ].map((s, i) => (
                  <div key={i} style={{ ...ws, background: W.fieldBg, padding: 4, textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 10, fontFamily: W.font, fontWeight: 700, marginBottom: 4 }}>Cases to Watch:</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, fontFamily: W.font }}>
                <thead>
                  <tr style={{ background: W.navy, color: W.navyText }}>
                    <td style={{ padding: "2px 4px" }}>Case</td><td style={{ padding: "2px 4px" }}>Stage</td><td style={{ padding: "2px 4px" }}>Days</td><td style={{ padding: "2px 4px" }}>Alert</td>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Garcia v. National", stage: "Discovery", days: 387, alert: "⚠ Over budget" },
                    { name: "Williams Class Act.", stage: "Pre-Trial", days: 445, alert: "🔴 Trial 62d" },
                    { name: "Chen v. SafeGuard", stage: "Mediation", days: 201, alert: "⏸ Stalled" },
                  ].map((c, i) => (
                    <tr key={i} style={{ background: i % 2 ? W.silver : W.fieldBg }}>
                      <td style={{ padding: "2px 4px" }}>{c.name}</td>
                      <td style={{ padding: "2px 4px" }}>{c.stage}</td>
                      <td style={{ padding: "2px 4px" }}>{c.days}</td>
                      <td style={{ padding: "2px 4px", color: W.red, fontWeight: 700 }}>{c.alert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                <div style={{ ...ws, flex: 1, background: W.fieldBg, padding: 6, textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>Value of Defense</div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: W.green }}>$5.8M</div>
                  <div style={{ fontSize: 9, fontFamily: W.font, color: W.green }}>+18%</div>
                </div>
                <div style={{ ...ws, flex: 1, background: W.fieldBg, padding: 6, textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>Budget Accuracy</div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: W.font, color: W.navy }}>92%</div>
                  <div style={{ fontSize: 9, fontFamily: W.font, color: W.green }}>+12%</div>
                </div>
              </div>
              <div style={{ fontSize: 10, fontFamily: W.font, fontWeight: 700, marginBottom: 4 }}>Attorney Performance:</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, fontFamily: W.font }}>
                <thead>
                  <tr style={{ background: W.navy, color: W.navyText }}>
                    <td style={{ padding: "2px 4px" }}>Firm</td><td style={{ padding: "2px 4px" }}>Cases</td><td style={{ padding: "2px 4px" }}>Spend</td><td style={{ padding: "2px 4px" }}>Score</td>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { firm: "Baker & Assoc.", cases: 34, spend: "$42K", score: "8.2", color: W.green },
                    { firm: "Morrison Drake", cases: 28, spend: "$61K", score: "6.1", color: "#CC6600" },
                    { firm: "Sterling Whitmore", cases: 19, spend: "$78K", score: "5.4", color: W.red },
                  ].map((f, i) => (
                    <tr key={i} style={{ background: i % 2 ? W.silver : W.fieldBg }}>
                      <td style={{ padding: "2px 4px" }}>{f.firm}</td>
                      <td style={{ padding: "2px 4px" }}>{f.cases}</td>
                      <td style={{ padding: "2px 4px" }}>{f.spend}</td>
                      <td style={{ padding: "2px 4px", fontWeight: 700, color: f.color }}>{f.score}/10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </W95Panel>
      </div>
    </W95Win>
  );
};

// ─── Main App ────────────────────────────────────────────────────────────────
export default function CouncilApp() {
  const [page, setPage] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("fortune500");
  const clientName = "Acme Insurance";
  const currentWeek = 3;
  const isWin95 = theme === "insurance";

  if (isWin95) {
    return (
      <ThemeContext.Provider value={theme}>
        <div style={{ minHeight: "100vh", background: W.bg, fontFamily: W.font, color: W.text, padding: "20px 16px 40px" }}>
          <style>{`
            * { image-rendering: pixelated; }
            ::selection { background: ${W.navy}; color: white; }
          `}</style>

          {/* Win95 nav bar */}
          <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
            {NAV_ITEMS.map(item => (
              <W95Btn key={item.id} onClick={() => setPage(item.id)} style={{ fontWeight: page === item.id ? 700 : 400, background: page === item.id ? W.silver : W.darkSilver }}>
                {item.icon} {item.label}
              </W95Btn>
            ))}
          </div>

          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            {page === "overview" && <W95OverviewPage clientName={clientName} week={currentWeek} onNav={setPage} />}
            {page === "data" && (
              <W95Win title="Data Readiness Assessment" style={{ maxWidth: 600 }}>
                <div style={{ padding: 8 }}>
                  <W95Panel style={{ padding: 10, marginBottom: 8 }}>
                    <p style={{ fontSize: 11, fontFamily: W.font, margin: 0, lineHeight: 1.5 }}>
                      For each data category below, identify where it lives today and how we'll get it into CaseGlide.
                    </p>
                  </W95Panel>
                  {DATA_CATEGORIES.map((cat, i) => (
                    <div key={cat.id} style={{ ...ws, background: W.fieldBg, padding: 8, marginBottom: 6 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: W.font, marginBottom: 2 }}>{cat.icon} {cat.name}</div>
                      <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted, marginBottom: 4 }}>{cat.description}</div>
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {cat.fields.slice(0, 4).map((f, j) => (
                          <span key={j} style={{ fontSize: 9, padding: "1px 4px", background: W.navy, color: W.navyText, fontFamily: W.font }}>{f}</span>
                        ))}
                        {cat.fields.length > 4 && <span style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>+{cat.fields.length - 4} more</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </W95Win>
            )}
            {page === "activation" && (
              <W95Win title="90-Day Activation Timeline" style={{ maxWidth: 600 }}>
                <div style={{ padding: 8 }}>
                  {MILESTONES.map((m, i) => (
                    <div key={m.id} style={{ ...ws, background: m.status === "active" ? "#FFFFCC" : W.fieldBg, padding: 6, marginBottom: 4 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: 11, fontWeight: 700, fontFamily: W.font }}>{m.status === "active" ? "▶ " : m.status === "completed" ? "✓ " : "○ "}{m.name}</div>
                        <span style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>{m.week}</span>
                      </div>
                      <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted, marginTop: 2 }}>{m.description}</div>
                    </div>
                  ))}
                </div>
              </W95Win>
            )}
            {page === "education" && (
              <W95Win title="Education & Enablement" style={{ maxWidth: 600 }}>
                <div style={{ padding: 8 }}>
                  <div style={{ display: "flex", gap: 0, marginBottom: 0 }}>
                    <W95Tab label="👥 Team Track" active={true} onClick={() => {}} />
                    <W95Tab label="👔 Executive Track" active={false} onClick={() => {}} />
                  </div>
                  <W95Panel style={{ padding: 8 }}>
                    {EDUCATION_CONTENT.team.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0", borderBottom: i < EDUCATION_CONTENT.team.length - 1 ? `1px solid ${W.silver}` : "none" }}>
                        <span style={{ fontSize: 14 }}>{item.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, fontFamily: W.font }}>{item.title}</div>
                          <div style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>Week {item.week} · {item.type}</div>
                        </div>
                        {item.week <= 2 ? <W95Badge color={W.green}>Done</W95Badge> : item.week <= 3 ? <W95Badge color={W.navy}>Now</W95Badge> : <span style={{ fontSize: 9, color: W.textMuted }}>upcoming</span>}
                      </div>
                    ))}
                  </W95Panel>
                </div>
              </W95Win>
            )}
            {page === "dashboards" && <W95DashboardPage />}
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
          <W95Taskbar />
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div style={{ minHeight: "100vh", background: C.midnight, color: C.textPrimary, fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      <style>{`
        @media (min-width: 700px) {
          .council-layout { display: flex !important; }
          .council-sidebar { display: flex !important; }
          .council-topbar { display: none !important; }
        }
        @media (max-width: 699px) {
          .council-layout { display: block !important; }
          .council-sidebar { display: none !important; }
          .council-topbar { display: flex !important; }
          .council-grid-stats { grid-template-columns: 1fr 1fr !important; }
          .council-milestone-tracks { grid-template-columns: 1fr !important; }
          .council-grid-table { font-size: 10px !important; grid-template-columns: 1.2fr 0.5fr 0.6fr 0.6fr 0.7fr !important; padding: 8px 10px !important; gap: 4px !important; }
        }
      `}</style>

      {/* Mobile Top Bar */}
      <div className="council-topbar" style={{
        display: "none", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px", borderBottom: `1px solid ${C.border}`, background: C.deep,
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={28} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, letterSpacing: "0.04em" }}>COUNCIL</div>
            <div style={{ fontSize: 9, color: C.textMuted }}>{clientName} · Week {currentWeek}</div>
          </div>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          padding: "6px 12px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          color: C.textSecondary, fontSize: 13, cursor: "pointer",
        }}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: "sticky", top: 56, zIndex: 49, background: C.deep,
          borderBottom: `1px solid ${C.border}`, padding: "8px 12px",
        }}>
          {/* Progress bar */}
          <div style={{ padding: "8px 8px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: C.textMuted }}>Week {currentWeek} of 12</span>
              <span style={{ fontSize: 11, color: C.accent }}>{Math.round((currentWeek / 12) * 100)}%</span>
            </div>
            <div style={{ height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${(currentWeek / 12) * 100}%`, height: "100%", background: C.accent, borderRadius: 2 }} />
            </div>
          </div>
          {NAV_ITEMS.map(item => {
            const isActive = page === item.id;
            return (
              <button key={item.id} onClick={() => { setPage(item.id); setMobileMenuOpen(false); }} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "11px 12px",
                background: isActive ? C.accentSoft : "transparent", border: "none", borderRadius: 8,
                color: isActive ? C.textPrimary : C.textSecondary, fontSize: 14, fontWeight: isActive ? 500 : 400,
                cursor: "pointer", marginBottom: 2,
              }}>
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="council-layout" style={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <div className="council-sidebar" style={{
          width: 240, minHeight: "100vh", background: C.deep, borderRight: `1px solid ${C.border}`,
          display: "flex", flexDirection: "column", flexShrink: 0,
        }}>
          <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
            <CaseGlideLogo size={32} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.textPrimary, letterSpacing: "0.04em" }}>COUNCIL</div>
              <div style={{ fontSize: 10, color: C.textMuted }}>90-Day Activation</div>
            </div>
          </div>

          <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{clientName}</div>
            <div style={{ fontSize: 11, color: C.textMuted }}>Week {currentWeek} of 12</div>
            <div style={{ marginTop: 8, height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${(currentWeek / 12) * 100}%`, height: "100%", background: C.accent, borderRadius: 2, transition: "width 0.5s" }} />
            </div>
          </div>

          <div style={{ padding: "12px 8px", flex: 1 }}>
            {NAV_ITEMS.map(item => {
              const isActive = page === item.id;
              return (
                <button key={item.id} onClick={() => setPage(item.id)} style={{
                  display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "10px 12px",
                  background: isActive ? C.accentSoft : "transparent", border: "none", borderRadius: 8,
                  color: isActive ? C.textPrimary : C.textSecondary, fontSize: 13, fontWeight: isActive ? 500 : 400,
                  cursor: "pointer", marginBottom: 2, transition: "all 0.2s",
                }}>
                  <span style={{ fontSize: 16, opacity: isActive ? 1 : 0.6 }}>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "24px clamp(16px, 4vw, 48px)", maxWidth: 960, overflow: "auto" }}>
          {page === "overview" && <OverviewPage clientName={clientName} week={currentWeek} onNav={(p) => { setPage(p); setMobileMenuOpen(false); }} />}
          {page === "data" && <DataReadinessPage />}
          {page === "activation" && <ActivationPage />}
          {page === "education" && <EducationPage />}
          {page === "dashboards" && <DashboardPreviewPage />}
        </div>
      </div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
    </ThemeContext.Provider>
  );
}
