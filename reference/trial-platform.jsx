import { useState, useEffect, createContext, useContext } from "react";

// ─── Theme ──────────────────────────────────────────────────────────────────
const ThemeCtx = createContext("fortune500");
const useTheme = () => useContext(ThemeCtx);

// ─── Win95 ──────────────────────────────────────────────────────────────────
const W = {
  bg: "#008080", silver: "#C0C0C0", dkSilver: "#808080", white: "#FFF", black: "#000",
  navy: "#000080", navyText: "#FFF", fieldBg: "#FFF", text: "#000", textMuted: "#808080",
  red: "#FF0000", green: "#008000", yellow: "#FFFF00",
  font: "'MS Sans Serif','Segoe UI',Tahoma,sans-serif",
};
const wr = { borderTop: `2px solid ${W.white}`, borderLeft: `2px solid ${W.white}`, borderBottom: `2px solid ${W.black}`, borderRight: `2px solid ${W.black}` };
const ws = { borderTop: `2px solid ${W.dkSilver}`, borderLeft: `2px solid ${W.dkSilver}`, borderBottom: `2px solid ${W.white}`, borderRight: `2px solid ${W.white}` };
const wbtn = { ...wr, background: W.silver, padding: "4px 12px", fontSize: 11, fontFamily: W.font, cursor: "pointer", color: W.text, borderRadius: 0 };
const W95Win = ({ title, children, style = {} }) => (
  <div style={{ background: W.silver, ...wr, padding: 3, ...style }}>
    <div style={{ background: `linear-gradient(90deg, ${W.navy}, #1084D0)`, padding: "3px 4px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
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
const W95Tab = ({ label, active, onClick }) => (
  <button onClick={onClick} style={{
    padding: "4px 12px", fontSize: 11, fontFamily: W.font, cursor: "pointer", borderRadius: 0, color: W.text,
    background: active ? W.silver : W.dkSilver,
    borderTop: active ? `2px solid ${W.white}` : `1px solid ${W.dkSilver}`,
    borderLeft: active ? `2px solid ${W.white}` : `1px solid ${W.dkSilver}`,
    borderRight: active ? `2px solid ${W.black}` : `1px solid ${W.black}`,
    borderBottom: active ? `2px solid ${W.silver}` : `1px solid ${W.dkSilver}`,
    fontWeight: active ? 700 : 400,
  }}>{label}</button>
);

// ─── Fortune 500 Design System ──────────────────────────────────────────────
const C = {
  midnight: "#0A0E1A", deep: "#111827", surface: "#1A1F2E", surfaceHover: "#242B3D",
  border: "#2A3142", borderLight: "#3A4256",
  textPrimary: "#F1F3F7", textSecondary: "#8B95A8", textMuted: "#5A6478",
  accent: "#3B82F6", accentGlow: "rgba(59,130,246,0.15)", accentSoft: "rgba(59,130,246,0.08)",
  gold: "#D4A853", goldGlow: "rgba(212,168,83,0.12)",
  emerald: "#34D399", emeraldGlow: "rgba(52,211,153,0.12)",
  rose: "#F472B6", roseGlow: "rgba(244,114,182,0.12)",
  amber: "#FBBF24", amberGlow: "rgba(251,191,36,0.12)",
};

// ─── Shared Components ──────────────────────────────────────────────────────
const CaseGlideLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="cg-g" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor={C.accent} /><stop offset="100%" stopColor="#1D4ED8" /></linearGradient>
      <linearGradient id="cg-a" x1="10" y1="28" x2="34" y2="28"><stop offset="0%" stopColor={C.gold} /><stop offset="100%" stopColor="#E5C066" /></linearGradient>
    </defs>
    <path d="M8 6C8 3.79 9.79 2 12 2H30L40 12V42C40 44.21 38.21 46 36 46H12C9.79 46 8 44.21 8 42V6Z" fill="url(#cg-g)" />
    <path d="M30 2L40 12H34C31.79 12 30 10.21 30 8V2Z" fill="#60A5FA" opacity="0.7" />
    <rect x="14" y="18" width="16" height="2" rx="1" fill="white" opacity="0.5" />
    <rect x="14" y="23" width="12" height="2" rx="1" fill="white" opacity="0.35" />
    <rect x="14" y="29" width="20" height="3" rx="1.5" fill="url(#cg-a)" opacity="0.9" />
  </svg>
);

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s ease" }}>{children}</div>;
};
const Badge = ({ children, color = C.accent, glow }) => (
  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color, background: glow || `${color}15`, border: `1px solid ${color}30` }}>{children}</span>
);
const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", cursor: onClick ? "pointer" : "default", ...style }}>{children}</div>
);
const ProgressRing = ({ value, max, size = 56, color = C.accent }) => {
  const pct = Math.round((value / max) * 100);
  const r = (size - 8) / 2, circ = 2 * Math.PI * r, offset = circ - (pct / 100) * circ;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={4} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={4} strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.26, fontWeight: 600, color }}>{pct}%</div>
    </div>
  );
};

// ─── Data Model ─────────────────────────────────────────────────────────────
const CASE_UPDATES = [
  { id: "ica", name: "Initial Case Evaluation", icon: "📋", fields: ["Liability assessment", "Damages assessment", "Initial strategy", "Key parties", "Venue analysis", "Budget estimate"] },
  { id: "discovery", name: "Discovery Update", icon: "🔍", fields: ["Documents produced/received", "Key findings", "Revised liability", "Discovery timeline", "Upcoming tasks"] },
  { id: "plaintiff_depo", name: "Plaintiff Deposition", icon: "🎤", fields: ["Deposition date", "Presentation assessment", "Impact on liability", "Impact on damages", "Key admissions", "Narrative"] },
  { id: "defendant_depo", name: "Defendant Deposition", icon: "🎙️", fields: ["Deposition date", "Presentation assessment", "Impact on defense", "Key testimony", "Upcoming tasks"] },
  { id: "msj", name: "Motion for Summary Judgment", icon: "📜", fields: ["Filing date", "Grounds", "Court ruling", "Impact on strategy", "Next steps"] },
  { id: "mediation", name: "Mediation", icon: "🤝", fields: ["Mediator", "Date", "Demand/offer exchange", "Settlement authority", "Outcome", "Recommended next steps"] },
  { id: "trial", name: "Trial", icon: "⚖️", fields: ["Trial date", "Jury selection notes", "Key rulings", "Verdict/outcome", "Post-trial motions"] },
  { id: "experts", name: "Expert Reports", icon: "🧪", fields: ["Expert name/specialty", "Opinion summary", "Impact on case value", "Rebuttal strategy"] },
];

const PROVING_CASES = [
  { id: 1, name: "Martinez v. Acme Corp", type: "Auto Liability", stage: "Discovery", days: 412, reserve: "$67K", attorney: "Morrison Drake LLP", difficulty: "High", currentUpdate: "discovery",
    before: { strategy: "Standard defense, waiting for plaintiff depo", data: "Basic claim info only", insight: "None — relying on quarterly counsel report" },
    after: { strategy: "Aggressive MSJ based on Precedent comps showing 72% dismissal rate for similar venue/liability profile", data: "Full discovery update, liability reassessed from 60% to 35%", insight: "Precedent shows Morrison Drake averages 14mo on similar cases — this is at 14mo with no resolution path" } },
  { id: 2, name: "Thompson Class Action", type: "Product Liability", stage: "Mediation", days: 289, reserve: "$142K", attorney: "Sterling Whitmore", difficulty: "Critical", currentUpdate: "mediation",
    before: { strategy: "Mediation scheduled, hoping for settlement", data: "Demand letter and initial reserve", insight: "No comparable outcomes data" },
    after: { strategy: "Settlement target of $95K based on 23 Precedent comps. Sterling Whitmore's median is 18% above comparable — recommend co-counsel", data: "Full mediation prep with demand analysis, 23 comparable outcomes", insight: "This plaintiff firm settles 81% of cases post-mediation within 60 days at 65% of demand" } },
  { id: 3, name: "Lee v. National Insurance", type: "Slip & Fall", stage: "Plaintiff Depo", days: 198, reserve: "$38K", attorney: "Baker & Associates", difficulty: "Medium", currentUpdate: "plaintiff_depo",
    before: { strategy: "Await deposition, reassess", data: "Claim report, photos", insight: "No venue-specific data" },
    after: { strategy: "Post-depo: plaintiff credibility weak — pursue early settlement at $18K (Precedent median for this profile)", data: "Depo summary: plaintiff inconsistent on mechanism, prior injuries surfaced", insight: "Baker resolves these 40% faster than panel avg. This venue settles 78% pre-trial" } },
  { id: 4, name: "Garcia v. SafeGuard", type: "Employment", stage: "MSJ", days: 356, reserve: "$215K", attorney: "Morrison Drake LLP", difficulty: "Critical", currentUpdate: "msj",
    before: { strategy: "Filed MSJ, awaiting ruling", data: "Complaint and answer only", insight: "No outcome prediction capability" },
    after: { strategy: "MSJ denied — pivot to mediation. Precedent shows 62% settlement rate post-MSJ denial at 45% of demand", data: "Full case update with judge's ruling analysis, comparable outcomes", insight: "This judge denies MSJ 71% of the time but settlements post-denial average 40% below demand" } },
  { id: 5, name: "Wilson v. Metro Transit", type: "Auto Liability", stage: "Expert Reports", days: 267, reserve: "$89K", attorney: "Baker & Associates", difficulty: "High", currentUpdate: "experts",
    before: { strategy: "Retained biomechanical expert", data: "Police report, medical records", insight: "Unknown expert effectiveness" },
    after: { strategy: "Expert opinion supports $45K value. Precedent: similar cases with strong expert testimony settle 33% below reserve", data: "Expert report quantified, damages capped at $52K with rebuttal strategy", insight: "Baker's expert selection in this category has produced favorable outcomes 84% of the time" } },
  { id: 6, name: "Adams v. Cornerstone LLC", type: "Premises Liability", stage: "Discovery", days: 145, reserve: "$52K", attorney: "Sterling Whitmore", difficulty: "Medium", currentUpdate: "discovery",
    before: { strategy: "Early case — monitoring", data: "Incident report only", insight: "No benchmark for timeline" },
    after: { strategy: "Discovery reveals maintenance log gaps — liability exposure higher than expected. Recommend early mediation", data: "Discovery update flagged adverse docs, liability revised upward to 75%", insight: "Precedent: early mediation in similar premises cases saves avg $12K vs. waiting for depo phase" } },
  { id: 7, name: "Brown v. National Ins.", type: "Auto Liability", stage: "ICA", days: 45, reserve: "$28K", attorney: "Baker & Associates", difficulty: "Low", currentUpdate: "ica",
    before: { strategy: "Just opened — no strategy yet", data: "Claim intake form", insight: "No immediate action framework" },
    after: { strategy: "Early settlement track — Precedent shows 89% of similar low-complexity claims settle within 6 months at avg $19K", data: "Full ICA with liability at 45%, damages at $22K, venue favorable", insight: "Baker resolves these in avg 4.2 months. Set 6-month settlement target of $17K" } },
  { id: 8, name: "Chen v. Pacific Holdings", type: "Employment", stage: "Defendant Depo", days: 312, reserve: "$175K", attorney: "Morrison Drake LLP", difficulty: "Critical", currentUpdate: "defendant_depo",
    before: { strategy: "Defend deposition, reassess exposure", data: "EEOC charge, position statement", insight: "No comparable jury verdict data" },
    after: { strategy: "Defendant depo went well — liability exposure reduced. Recommend demand at $110K before trial costs escalate", data: "Depo assessment: strong defense, plaintiff case weakened on key elements", insight: "Nuclear verdict risk in this venue: 8% of employment cases exceed $500K. Settling now avoids tail risk" } },
  { id: 9, name: "Rivera v. Summit Corp", type: "Product Liability", stage: "Mediation", days: 523, reserve: "$310K", attorney: "Sterling Whitmore", difficulty: "Critical", currentUpdate: "mediation",
    before: { strategy: "Second mediation attempt", data: "Prior mediation brief", insight: "No analysis of why first mediation failed" },
    after: { strategy: "First mediation gap was $180K. Plaintiff has new trial counsel — urgency increased. Settle at $195K (Precedent median for post-2nd-mediation)", data: "Full negotiation history, demand trajectory analysis, plaintiff firm switch analysis", insight: "Sterling Whitmore's post-mediation stall rate is 3x panel avg. Recommend settlement authority increase + deadline" } },
  { id: 10, name: "Park v. Allied Services", type: "Slip & Fall", stage: "Trial", days: 678, reserve: "$95K", attorney: "Baker & Associates", difficulty: "High", currentUpdate: "trial",
    before: { strategy: "Trial prep underway", data: "Trial brief", insight: "No venue trial outcome data" },
    after: { strategy: "Trial risk assessment: 65% favorable verdict probability based on 18 Precedent comps in this venue. Defense verdict value: $0. Adverse verdict range: $80-140K", data: "Full trial prep with judge profile, jury demographics, comparable verdicts", insight: "Baker's trial win rate in this venue: 71%. This judge's median defense verdict rate: 58%. Recommend trial." } },
];

const IMPACT_SCENARIOS = [
  { pct: 5, label: "Conservative", color: C.amber, spend: "$420K", outcomes: "3-5 cases", description: "Early settlements on clear-value cases identified by Precedent comps" },
  { pct: 10, label: "Expected", color: C.accent, spend: "$840K", outcomes: "8-12 cases", description: "Systematic attorney performance optimization + data-driven settlement timing" },
  { pct: 15, label: "Optimized", color: C.emerald, spend: "$1.26M", outcomes: "15-20 cases", description: "Full portfolio intelligence with proactive intervention at every milestone" },
];

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "executive", label: "Executive Intelligence", icon: "👔" },
  { id: "cases", label: "10-Case Proving Ground", icon: "⚡" },
  { id: "session", label: "Strategy Session", icon: "🎯" },
  { id: "impact", label: "Portfolio Impact", icon: "📈" },
];

// ─── Pages ──────────────────────────────────────────────────────────────────

const OverviewPage = ({ onNav }) => {
  const casesComplete = 4;
  const updatesReceived = 7;
  return (
    <div>
      <FadeIn>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Trial: 30-Day Proving Ground
        </h1>
        <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 24px" }}>
          Your 10 most challenging cases. Real data. Real strategy recommendations. Real results.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <Card style={{ marginBottom: 20, border: `1px solid ${C.accent}30`, background: `linear-gradient(135deg, ${C.accentSoft}, ${C.surface})` }}>
          <div style={{ padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>🎯</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: "0.06em" }}>The Mission</span>
            </div>
            <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7, margin: 0 }}>
              Take 10 difficult cases through full CaseGlide activation — Case Updates from attorneys, Case Clerk AI document extraction, Chronicle timelines, and Chambers AI analysis. Produce data-driven strategy recommendations for each case. Show your executive team the before and after.
            </p>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={150}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Cases Activated", value: `${casesComplete}/10`, color: C.accent, action: "cases" },
            { label: "Updates Received", value: `${updatesReceived}`, color: C.emerald, action: "cases" },
            { label: "Strategies Ready", value: `${casesComplete}`, color: C.gold, action: "session" },
            { label: "Days Remaining", value: "18", color: C.amber, action: null },
          ].map((s, i) => (
            <Card key={i} onClick={s.action ? () => onNav(s.action) : undefined} style={{ padding: 16, cursor: s.action ? "pointer" : "default" }}>
              <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>{s.value}</div>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={220}>
        <Card style={{ marginBottom: 20 }}>
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "#fff" }}>LM</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary }}>Liana Rodriguez</div>
                <div style={{ fontSize: 12, color: C.textMuted }}>Trial Advisor · liana@caseglide.com</div>
              </div>
            </div>
            <button style={{ padding: "8px 16px", background: C.accentSoft, border: `1px solid ${C.accent}30`, borderRadius: 8, color: C.accent, fontSize: 12, fontWeight: 600, cursor: "pointer" }} onClick={() => onNav('session')}>Schedule Strategy Session</button>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={280}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
          {NAV_ITEMS.slice(1).map((item, i) => (
            <Card key={i} onClick={() => onNav(item.id)} style={{ padding: 16, cursor: "pointer" }}>
              <div style={{ fontSize: 14, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{item.label}</div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

const ExecutivePage = ({ onNav }) => (
  <div>
    <FadeIn>
      <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>Executive Intelligence</h1>
      <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 24px" }}>What your Precedent and Docket dashboards are revealing about your portfolio.</p>
    </FadeIn>

    <FadeIn delay={100}>
      <div className="trial-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <Card style={{ padding: 18, background: `linear-gradient(135deg, ${C.surface}, ${C.emeraldGlow})` }}>
          <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", marginBottom: 4 }}>Value of Defense</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: C.emerald }}>$5.8M</div>
          <div style={{ fontSize: 11, color: C.emerald }}>Demand reduction across portfolio</div>
        </Card>
        <Card style={{ padding: 18, background: `linear-gradient(135deg, ${C.surface}, ${C.accentGlow})` }}>
          <div style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", marginBottom: 4 }}>Portfolio Exposure</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: C.accent }}>$8.4M</div>
          <div style={{ fontSize: 11, color: C.accent }}>Total reserves across 208 matters</div>
        </Card>
      </div>
    </FadeIn>

    <FadeIn delay={150}>
      <Card style={{ marginBottom: 20 }}>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.gold, textTransform: "uppercase", letterSpacing: "0.04em" }}>Top Attorney Performance</span>
        </div>
        {[
          { firm: "Baker & Associates", cases: 34, spend: "$42K avg", score: 8.2, verdict: "71% win rate", color: C.emerald },
          { firm: "Morrison Drake LLP", cases: 28, spend: "$61K avg", score: 6.1, verdict: "54% win rate", color: C.amber },
          { firm: "Sterling Whitmore", cases: 19, spend: "$78K avg", score: 5.4, verdict: "45% win rate", color: C.rose },
        ].map((f, i) => (
          <div key={i} style={{ padding: "12px 20px", borderBottom: i < 2 ? `1px solid ${C.border}` : "none", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary }}>{f.firm}</div>
              <div style={{ fontSize: 12, color: C.textMuted }}>{f.cases} cases · {f.spend} · {f.verdict}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: f.color }}>{f.score}/10</span>
              <Badge color={f.color}>{f.score >= 7.5 ? "High Value" : f.score >= 6 ? "Monitor" : "Review"}</Badge>
            </div>
          </div>
        ))}
      </Card>
    </FadeIn>

    <FadeIn delay={200}>
      <Card>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: "0.04em" }}>Key Portfolio Insights from Precedent</span>
        </div>
        <div style={{ padding: 20 }}>
          {[
            { insight: "Employment cases with Morrison Drake average 18% higher spend than Baker on comparable matters", action: "Consider panel rebalancing for employment cases", icon: "💰" },
            { insight: "Cases mediated before 12 months settle at 35% below initial demand vs. 18% after 12 months", action: "Accelerate mediation scheduling for 9 cases currently past 10 months", icon: "⏱️" },
            { insight: "Sterling Whitmore's post-mediation stall rate is 3x panel average — 9 cases currently stalled", action: "Implement 30-day post-mediation follow-up protocol", icon: "⚠️" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "14px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <div style={{ fontSize: 13, color: C.textPrimary, lineHeight: 1.6 }}>{item.insight}</div>
              </div>
              <div style={{ marginLeft: 26, fontSize: 12, color: C.emerald, fontWeight: 500 }}>→ {item.action}</div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 12, marginTop: 4 }}>
            <button onClick={() => onNav("cases")} style={{ padding: "8px 16px", background: C.accentSoft, border: `1px solid ${C.accent}30`, borderRadius: 8, color: C.accent, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>View Impacted Cases in Proving Ground →</button>
          </div>
        </div>
      </Card>
    </FadeIn>
  </div>
);

const CasesPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showAfter, setShowAfter] = useState(true);
  const sc = selectedCase !== null ? PROVING_CASES[selectedCase] : null;

  return (
    <div>
      <FadeIn>
        <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>10-Case Proving Ground</h1>
        <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 20px" }}>Your most challenging cases, fully activated in CaseGlide. Click any case to see the before and after.</p>
      </FadeIn>

      {sc === null ? (
        <div>
          <FadeIn delay={80}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "12px 16px", background: C.surface, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <ProgressRing value={4} max={10} size={44} color={C.accent} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>4 of 10 cases fully activated</div>
                <div style={{ fontSize: 12, color: C.textMuted }}>7 case updates received from outside counsel</div>
              </div>
            </div>
          </FadeIn>
          {PROVING_CASES.map((c, i) => {
            const activated = i < 4;
            const updatePending = i >= 4 && i < 7;
            return (
              <FadeIn key={c.id} delay={100 + i * 40}>
                <Card onClick={() => setSelectedCase(i)} style={{ marginBottom: 8, cursor: "pointer", borderLeft: `3px solid ${c.difficulty === "Critical" ? C.rose : c.difficulty === "High" ? C.amber : C.accent}` }}>
                  <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ flex: "1 1 200px" }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: C.textMuted }}>{c.type} · {c.stage} · {c.days} days · {c.attorney}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, color: C.amber, fontWeight: 500 }}>{c.reserve}</span>
                      {activated ? <Badge color={C.emerald}>Strategy Ready</Badge> : updatePending ? <Badge color={C.amber}>Update Pending</Badge> : <Badge color={C.textMuted}>Awaiting</Badge>}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      ) : (
        <div>
          <button onClick={() => { setSelectedCase(null); setShowAfter(true); }} style={{ padding: "6px 0", background: "none", border: "none", color: C.textMuted, fontSize: 12, cursor: "pointer", marginBottom: 12 }}>← Back to all cases</button>

          {/* Prev / Next navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <button onClick={() => { setSelectedCase(Math.max(0, selectedCase - 1)); setShowAfter(true); }} disabled={selectedCase === 0} style={{ padding: "6px 14px", background: "none", border: `1px solid ${selectedCase === 0 ? C.border : C.borderLight}`, borderRadius: 8, color: selectedCase === 0 ? C.textMuted : C.textSecondary, fontSize: 12, cursor: selectedCase === 0 ? "default" : "pointer", opacity: selectedCase === 0 ? 0.4 : 1 }}>← Previous</button>
            <span style={{ fontSize: 12, color: C.textMuted, alignSelf: "center" }}>Case {selectedCase + 1} of 10</span>
            <button onClick={() => { setSelectedCase(Math.min(9, selectedCase + 1)); setShowAfter(true); }} disabled={selectedCase === 9} style={{ padding: "6px 14px", background: "none", border: `1px solid ${selectedCase === 9 ? C.border : C.borderLight}`, borderRadius: 8, color: selectedCase === 9 ? C.textMuted : C.textSecondary, fontSize: 12, cursor: selectedCase === 9 ? "default" : "pointer", opacity: selectedCase === 9 ? 0.4 : 1 }}>Next →</button>
          </div>

          <Card style={{ marginBottom: 16 }}>
            <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 500, color: C.textPrimary, margin: "0 0 4px", fontFamily: "'Instrument Serif', Georgia, serif" }}>{sc.name}</h2>
                <div style={{ fontSize: 12, color: C.textMuted }}>{sc.type} · {sc.stage} · {sc.days} days · {sc.attorney} · Reserve: {sc.reserve}</div>
              </div>
              <Badge color={sc.difficulty === "Critical" ? C.rose : sc.difficulty === "High" ? C.amber : C.accent}>{sc.difficulty}</Badge>
            </div>

            {/* Case Update Status */}
            <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Case Update Pipeline</div>
              <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 4 }}>
                {CASE_UPDATES.map((cu) => {
                  const isCurrent = cu.id === sc.currentUpdate;
                  const isPast = CASE_UPDATES.findIndex(u => u.id === sc.currentUpdate) > CASE_UPDATES.findIndex(u => u.id === cu.id);
                  return (
                    <div key={cu.id} style={{
                      padding: "6px 10px", borderRadius: 8, fontSize: 10, whiteSpace: "nowrap",
                      background: isCurrent ? C.accentSoft : isPast ? `${C.emerald}15` : C.midnight,
                      border: `1px solid ${isCurrent ? C.accent : isPast ? `${C.emerald}30` : C.border}`,
                      color: isCurrent ? C.accent : isPast ? C.emerald : C.textMuted,
                      fontWeight: isCurrent ? 600 : 400,
                    }}>
                      {cu.icon} {cu.name.split(" ").slice(0, 2).join(" ")}
                      {isPast && " ✓"}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Before / After Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 3, padding: 3, background: C.surface, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <button onClick={() => setShowAfter(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", background: !showAfter ? C.rose : "transparent", color: !showAfter ? "#fff" : C.textMuted }}>Before CaseGlide</button>
              <button onClick={() => setShowAfter(true)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", background: showAfter ? C.emerald : "transparent", color: showAfter ? "#fff" : C.textMuted }}>After CaseGlide ✦</button>
            </div>
          </div>

          <FadeIn key={`${selectedCase}-${showAfter}`}>
            {/* Chronicle Timeline — only in After view */}
            {showAfter && (
              <Card style={{ marginBottom: 12, borderLeft: `3px solid ${C.accent}` }}>
                <div style={{ padding: "12px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                    <span style={{ fontSize: 13 }}>📜</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: "0.05em" }}>Chronicle — AI Case Timeline</span>
                  </div>
                  <div style={{ position: "relative", paddingLeft: 16 }}>
                    <div style={{ position: "absolute", left: 4, top: 0, bottom: 0, width: 2, background: C.border }} />
                    {[
                      { date: `Day 1`, event: "Case filed — initial reserve set at ${sc.reserve}", color: C.textMuted },
                      { date: `Day ${Math.round(sc.days * 0.15)}`, event: "ICA completed — liability and damages assessed", color: C.emerald },
                      { date: `Day ${Math.round(sc.days * 0.4)}`, event: `Key milestone: ${sc.stage} phase entered`, color: C.accent },
                      { date: `Day ${sc.days}`, event: "CaseGlide activated — strategy recommendation generated", color: C.gold },
                    ].map((evt, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < 3 ? 10 : 0, position: "relative" }}>
                        <div style={{ position: "absolute", left: -13, top: 3, width: 8, height: 8, borderRadius: "50%", background: evt.color, border: `2px solid ${C.surface}` }} />
                        <div style={{ marginLeft: 8 }}>
                          <span style={{ fontSize: 10, color: C.textMuted, fontWeight: 600 }}>{evt.date}</span>
                          <div style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.5 }}>{evt.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
            {["strategy", "data", "insight"].map((key) => (
              <Card key={key} style={{ marginBottom: 10, borderLeft: `3px solid ${showAfter ? C.emerald : C.rose}` }}>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: showAfter ? C.emerald : C.rose, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                    {key === "strategy" ? "Strategy" : key === "data" ? "Available Data" : "Intelligence"}
                  </div>
                  <div style={{ fontSize: 13, color: C.textPrimary, lineHeight: 1.7 }}>
                    {showAfter ? sc.after[key] : sc.before[key]}
                  </div>
                </div>
              </Card>
            ))}
          </FadeIn>
        </div>
      )}
    </div>
  );
};

const SessionPage = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [queryResult, setQueryResult] = useState(null);
  const readyCases = PROVING_CASES.slice(0, 4);
  const sc = readyCases[activeCase];

  const chamberQueries = [
    { q: "What's the likely settlement range?", a: `Based on 23 Precedent comps for ${sc.type} cases in this venue with similar liability profile, settlement range is $${Math.round(parseInt(sc.reserve.replace(/[^0-9]/g, '')) * 0.55)}K - $${Math.round(parseInt(sc.reserve.replace(/[^0-9]/g, '')) * 0.85)}K. Median resolution: $${Math.round(parseInt(sc.reserve.replace(/[^0-9]/g, '')) * 0.68)}K.` },
    { q: "Is this a nuclear verdict jurisdiction?", a: `This venue has a 6.2% nuclear verdict rate (verdicts exceeding 3x reserve) based on historical data. That's slightly below the national average of 7.8%. However, ${sc.type} cases in this venue have trended upward 12% in median award over the past 3 years.` },
    { q: "How does our attorney compare on similar cases?", a: `${sc.attorney} has handled ${sc.attorney.includes("Baker") ? 34 : sc.attorney.includes("Morrison") ? 28 : 19} comparable cases. Their average spend is ${sc.attorney.includes("Baker") ? "12% below" : sc.attorney.includes("Morrison") ? "8% above" : "22% above"} panel average. Outcome quality score: ${sc.attorney.includes("Baker") ? "8.2/10" : sc.attorney.includes("Morrison") ? "6.1/10" : "5.4/10"}.` },
  ];

  return (
    <div>
      <FadeIn>
        <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>Strategy Session</h1>
        <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 20px" }}>Walk through each case with your team. Use Chronicle for timelines. Ask Chambers anything. Make decisions together.</p>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{ display: "flex", gap: 6, marginBottom: 12, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
          {readyCases.map((c, i) => (
            <button key={c.id} onClick={() => { setActiveCase(i); setQueryResult(null); }} style={{
              padding: "8px 14px", borderRadius: 8, border: `1px solid ${activeCase === i ? C.accent : C.border}`,
              background: activeCase === i ? C.accentSoft : "transparent", color: activeCase === i ? C.textPrimary : C.textSecondary,
              fontSize: 12, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
            }}>{c.name.split(" v. ")[0]} v. ...</button>
          ))}
          <div style={{ padding: "8px 14px", borderRadius: 8, border: `1px dashed ${C.border}`, color: C.textMuted, fontSize: 11, whiteSpace: "nowrap", display: "flex", alignItems: "center", flexShrink: 0 }}>
            +6 cases pending activation
          </div>
        </div>
      </FadeIn>

      {/* Case Scorecard */}
      <FadeIn key={activeCase}>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Badge color={C.gold}>Case Scorecard</Badge>
              <Badge color={sc.difficulty === "Critical" ? C.rose : C.amber}>{sc.difficulty}</Badge>
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 500, color: C.textPrimary, margin: "4px 0", fontFamily: "'Instrument Serif', Georgia, serif" }}>{sc.name}</h3>
            <div style={{ fontSize: 12, color: C.textMuted }}>{sc.type} · {sc.stage} · {sc.days} days · {sc.attorney} · Reserve: {sc.reserve}</div>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ fontSize: 11, color: C.emerald, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>CaseGlide Strategy Recommendation</div>
            <p style={{ fontSize: 14, color: C.textPrimary, lineHeight: 1.7, margin: "0 0 12px" }}>{sc.after.strategy}</p>
            <div style={{ padding: 12, background: C.midnight, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 10, color: C.accent, fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Key Insight</div>
              <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>{sc.after.insight}</p>
            </div>
          </div>
        </Card>

        {/* Chambers AI */}
        <Card>
          <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: "0.04em" }}>💬 Ask Chambers About This Case</span>
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {chamberQueries.map((cq, i) => (
                <button key={i} onClick={() => setQueryResult(cq)} style={{
                  padding: "8px 14px", borderRadius: 8, border: `1px solid ${queryResult === cq ? C.accent : C.border}`,
                  background: queryResult === cq ? C.accentSoft : C.midnight, color: queryResult === cq ? C.textPrimary : C.textSecondary,
                  fontSize: 12, cursor: "pointer",
                }}>{cq.q}</button>
              ))}
            </div>
            {queryResult && (
              <FadeIn key={queryResult.q}>
                <div style={{ padding: 14, background: C.midnight, borderRadius: 10, border: `1px solid ${C.accent}20` }}>
                  <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>You asked: <em>{queryResult.q}</em></div>
                  <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 6 }}>Chambers:</div>
                  <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.7, margin: 0 }}>{queryResult.a}</p>
                </div>
              </FadeIn>
            )}
          </div>
        </Card>
      </FadeIn>
    </div>
  );
};

const ImpactPage = () => (
  <div>
    <FadeIn>
      <h1 style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 300, color: C.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>Portfolio Impact Projection</h1>
      <p style={{ fontSize: 14, color: C.textSecondary, margin: "0 0 24px" }}>If the patterns from your 10 proving ground cases hold across your full portfolio of 208 matters, here's the projected annual impact.</p>
    </FadeIn>

    <FadeIn delay={100}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 24 }}>
        {IMPACT_SCENARIOS.map((s, i) => (
          <Card key={i} style={{ border: i === 1 ? `1px solid ${C.accent}40` : `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
            {i === 1 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: C.accent }} />}
            <div style={{ padding: 20 }}>
              <Badge color={s.color}>{s.label} — {s.pct}% reduction</Badge>
              <div style={{ fontSize: 32, fontWeight: 700, color: s.color, margin: "12px 0 4px" }}>{s.spend}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 12 }}>Annual legal spend savings</div>
              <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6, marginBottom: 12 }}>{s.description}</div>
              <div style={{ padding: "8px 12px", background: C.midnight, borderRadius: 8, border: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 11, color: C.textMuted }}>Cases impacted: </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: s.color }}>{s.outcomes}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </FadeIn>

    <FadeIn delay={200}>
      <Card style={{ border: `1px solid ${C.gold}30` }}>
        <div style={{ padding: "20px 24px", background: `linear-gradient(135deg, ${C.surface}, ${C.goldGlow})` }}>
          <Badge color={C.gold}>The Path Forward</Badge>
          <h3 style={{ fontSize: 18, fontWeight: 500, color: C.textPrimary, margin: "10px 0 12px", fontFamily: "'Instrument Serif', Georgia, serif" }}>From 10 Cases to Full Portfolio Intelligence</h3>
          <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7, margin: "0 0 16px" }}>
            Your Trial proved the model works on your hardest cases. Full deployment means every case — from the day it's filed — gets the same level of intelligence, data capture, and strategic oversight. The dashboards you've seen become your operating system for litigation management.
          </p>
          <div className="trial-2col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
            {[
              { label: "Precedent", desc: "Every closed case calibrated for outcome quality and attorney performance", icon: "⚖️" },
              { label: "Docket", desc: "Every open case monitored with intervention triggers and exception alerts", icon: "📊" },
              { label: "Intelligence", desc: "Chambers, Chronicle, and Case Updates embedded in every workflow", icon: "🤖" },
            ].map((item, i) => (
              <div key={i} style={{ padding: 14, background: C.midnight, borderRadius: 10, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: C.textMuted, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ padding: "14px 28px", background: `linear-gradient(135deg, ${C.accent}, #2563EB)`, color: "#fff", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 20px ${C.accent}40` }}>Request Deployment Proposal →</button>
            <button style={{ padding: "14px 28px", background: "transparent", color: C.textPrimary, border: `1px solid ${C.borderLight}`, borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Schedule Executive Review</button>
          </div>
        </div>
      </Card>
    </FadeIn>
  </div>
);

// ─── Win95 Trial ────────────────────────────────────────────────────────────
const W95TrialApp = ({ page, setPage }) => {
  const [selCase, setSelCase] = useState(null);
  return (
    <div style={{ maxWidth: 620, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {NAV_ITEMS.map(item => (
          <W95Btn key={item.id} onClick={() => { setPage(item.id); setSelCase(null); }} style={{ fontWeight: page === item.id ? 700 : 400, background: page === item.id ? W.silver : W.dkSilver }}>
            {item.icon} {item.label}
          </W95Btn>
        ))}
      </div>

      {page === "overview" && (
        <W95Win title="CaseGlide Trial - 30-Day Proving Ground">
          <div style={{ padding: 8 }}>
            <W95Panel style={{ marginBottom: 8, padding: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, fontFamily: W.font, marginBottom: 4 }}>Mission: Prove CaseGlide on your 10 hardest cases.</div>
              <div style={{ fontSize: 11, fontFamily: W.font, lineHeight: 1.5 }}>Real data. Real strategy recommendations. Real results.</div>
            </W95Panel>
            <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
              {[
                { label: "Activated", value: "4/10", color: W.navy },
                { label: "Updates", value: "7", color: W.green },
                { label: "Strategies", value: "4", color: "#806600" },
                { label: "Days Left", value: "18", color: W.red },
              ].map((s, i) => (
                <div key={i} style={{ ...ws, flex: 1, background: W.fieldBg, padding: 4, textAlign: "center" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, fontFamily: W.font, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 9, fontFamily: W.font, color: W.textMuted }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </W95Win>
      )}

      {page === "cases" && (
        <W95Win title={selCase !== null ? `Case Detail - ${PROVING_CASES[selCase].name}` : "10-Case Proving Ground"}>
          <div style={{ padding: 8 }}>
            {selCase === null ? (
              <div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, fontFamily: W.font }}>
                  <thead>
                    <tr style={{ background: W.navy, color: W.navyText }}>
                      <td style={{ padding: "3px 4px" }}>#</td><td style={{ padding: "3px 4px" }}>Case</td><td style={{ padding: "3px 4px" }}>Type</td><td style={{ padding: "3px 4px" }}>Stage</td><td style={{ padding: "3px 4px" }}>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVING_CASES.map((c, i) => (
                      <tr key={c.id} onClick={() => setSelCase(i)} style={{ background: i % 2 ? W.silver : W.fieldBg, cursor: "pointer" }}>
                        <td style={{ padding: "3px 4px" }}>{c.id}</td>
                        <td style={{ padding: "3px 4px", fontWeight: 700 }}>{c.name}</td>
                        <td style={{ padding: "3px 4px" }}>{c.type}</td>
                        <td style={{ padding: "3px 4px" }}>{c.stage}</td>
                        <td style={{ padding: "3px 4px" }}>{i < 4 ? <W95Badge color={W.green}>Ready</W95Badge> : i < 7 ? <W95Badge color="#CC6600">Pending</W95Badge> : <W95Badge color={W.dkSilver}>Waiting</W95Badge>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <W95Btn onClick={() => setSelCase(null)} style={{ marginBottom: 6 }}>← Back</W95Btn>
                <W95Panel style={{ marginBottom: 6, padding: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, fontFamily: W.font, marginBottom: 2 }}>{PROVING_CASES[selCase].name}</div>
                  <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>{PROVING_CASES[selCase].type} · {PROVING_CASES[selCase].stage} · {PROVING_CASES[selCase].days} days · {PROVING_CASES[selCase].attorney}</div>
                </W95Panel>
                <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                  <div style={{ ...ws, flex: 1, background: "#FFEEEE", padding: 6 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: W.red, fontFamily: W.font, marginBottom: 2 }}>BEFORE:</div>
                    <div style={{ fontSize: 10, fontFamily: W.font, lineHeight: 1.4 }}>{PROVING_CASES[selCase].before.strategy}</div>
                  </div>
                  <div style={{ ...ws, flex: 1, background: "#EEFFEE", padding: 6 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: W.green, fontFamily: W.font, marginBottom: 2 }}>AFTER:</div>
                    <div style={{ fontSize: 10, fontFamily: W.font, lineHeight: 1.4 }}>{PROVING_CASES[selCase].after.strategy}</div>
                  </div>
                </div>
                <div style={{ ...ws, background: "#EEEEFF", padding: 6 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: W.navy, fontFamily: W.font, marginBottom: 2 }}>💡 INSIGHT:</div>
                  <div style={{ fontSize: 10, fontFamily: W.font, lineHeight: 1.4 }}>{PROVING_CASES[selCase].after.insight}</div>
                </div>
              </div>
            )}
          </div>
        </W95Win>
      )}

      {page === "impact" && (
        <W95Win title="Portfolio Impact Projection">
          <div style={{ padding: 8 }}>
            {IMPACT_SCENARIOS.map((s, i) => (
              <div key={i} style={{ ...ws, background: i === 1 ? "#FFFFCC" : W.fieldBg, padding: 8, marginBottom: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, fontFamily: W.font }}>{s.label} ({s.pct}% reduction)</span>
                    <div style={{ fontSize: 10, fontFamily: W.font, color: W.textMuted }}>{s.description}</div>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, fontFamily: W.font, color: s.pct >= 15 ? W.green : s.pct >= 10 ? W.navy : "#CC6600" }}>{s.spend}</div>
                </div>
              </div>
            ))}
          </div>
        </W95Win>
      )}

      {(page === "executive" || page === "session") && (
        <W95Win title={page === "executive" ? "Executive Intelligence" : "Strategy Session"}>
          <div style={{ padding: 8 }}>
            <W95Panel style={{ padding: 10 }}>
              <div style={{ fontSize: 11, fontFamily: W.font, lineHeight: 1.5 }}>
                {page === "executive"
                  ? "Executive Intelligence shows portfolio-level insights from your Precedent and Docket dashboards. View attorney performance rankings, key findings, and strategic recommendations."
                  : "The Strategy Session brings your executive and operations teams together to review each case with live Chambers AI queries and Chronicle timelines."}
              </div>
            </W95Panel>
          </div>
        </W95Win>
      )}
    </div>
  );
};

// ─── Main App ───────────────────────────────────────────────────────────────
export default function TrialApp() {
  const [page, setPage] = useState("overview");
  const [theme, setTheme] = useState("fortune500");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWin95 = theme === "insurance";

  if (isWin95) {
    return (
      <ThemeCtx.Provider value={theme}>
        <div style={{ minHeight: "100vh", background: W.bg, fontFamily: W.font, color: W.text, padding: "20px 16px 40px" }}>
          <style>{`* { image-rendering: pixelated; } ::selection { background: ${W.navy}; color: white; }`}</style>
          <W95TrialApp page={page} setPage={setPage} />
          <div style={{ position: "fixed", bottom: 32, right: 8, zIndex: 999 }}>
            <W95Btn onClick={() => setTheme("fortune500")}>💼 Fortune 500 Mode</W95Btn>
          </div>
          <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, background: W.silver, ...wr, padding: "2px 4px", display: "flex", alignItems: "center", gap: 4, height: 28 }}>
            <button style={{ ...wr, background: W.silver, padding: "2px 8px", display: "flex", alignItems: "center", gap: 4, cursor: "pointer", borderRadius: 0 }}>
              <span style={{ fontSize: 12 }}>🪟</span><span style={{ fontSize: 11, fontWeight: 700, fontFamily: W.font }}>Start</span>
            </button>
            <div style={{ flex: 1 }}><div style={{ ...ws, padding: "2px 8px", maxWidth: 240 }}><span style={{ fontSize: 10, fontFamily: W.font }}>CaseGlide Trial.exe</span></div></div>
            <div style={{ ...ws, padding: "2px 8px" }}><span style={{ fontSize: 10, fontFamily: W.font }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
          </div>
        </div>
      </ThemeCtx.Provider>
    );
  }

  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{ minHeight: "100vh", background: C.midnight, color: C.textPrimary, fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <style>{`
          @media (min-width: 700px) { .trial-layout { display: flex !important; } .trial-sidebar { display: flex !important; } .trial-topbar { display: none !important; } }
          @media (max-width: 699px) { .trial-layout { display: block !important; } .trial-sidebar { display: none !important; } .trial-topbar { display: flex !important; } .trial-2col { grid-template-columns: 1fr !important; } }
        `}</style>

        {/* Mobile Top Bar */}
        <div className="trial-topbar" style={{ display: "none", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: `1px solid ${C.border}`, background: C.deep, position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CaseGlideLogo size={28} />
            <div><div style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary }}>TRIAL</div><div style={{ fontSize: 9, color: C.textMuted }}>30-Day Proving Ground</div></div>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: "6px 12px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, color: C.textSecondary, fontSize: 13, cursor: "pointer" }}>{mobileMenuOpen ? "✕" : "☰"}</button>
        </div>
        {mobileMenuOpen && (
          <div style={{ position: "sticky", top: 56, zIndex: 49, background: C.deep, borderBottom: `1px solid ${C.border}`, padding: "8px 12px" }}>
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => { setPage(item.id); setMobileMenuOpen(false); }} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "11px 12px",
                background: page === item.id ? C.accentSoft : "transparent", border: "none", borderRadius: 8,
                color: page === item.id ? C.textPrimary : C.textSecondary, fontSize: 14, fontWeight: page === item.id ? 500 : 400, cursor: "pointer", marginBottom: 2,
              }}><span>{item.icon}</span> {item.label}</button>
            ))}
          </div>
        )}

        <div className="trial-layout" style={{ display: "flex" }}>
          {/* Desktop Sidebar */}
          <div className="trial-sidebar" style={{ width: 220, minHeight: "100vh", background: C.deep, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
              <CaseGlideLogo size={28} />
              <div><div style={{ fontSize: 12, fontWeight: 600, color: C.textPrimary }}>TRIAL</div><div style={{ fontSize: 10, color: C.textMuted }}>30-Day Proving Ground</div></div>
            </div>
            <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>Acme Insurance</div>
              <div style={{ fontSize: 11, color: C.textMuted }}>Day 12 of 30</div>
              <div style={{ marginTop: 6, height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: "40%", height: "100%", background: C.accent, borderRadius: 2 }} />
              </div>
            </div>
            <div style={{ padding: "12px 8px", flex: 1 }}>
              {NAV_ITEMS.map(item => (
                <button key={item.id} onClick={() => setPage(item.id)} style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px",
                  background: page === item.id ? C.accentSoft : "transparent", border: "none", borderRadius: 8,
                  color: page === item.id ? C.textPrimary : C.textSecondary, fontSize: 13, fontWeight: page === item.id ? 500 : 400,
                  cursor: "pointer", marginBottom: 2,
                }}><span style={{ fontSize: 14 }}>{item.icon}</span> {item.label}</button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, padding: "24px clamp(16px, 4vw, 48px)", maxWidth: 960, overflow: "auto" }}>
            {page === "overview" && <OverviewPage onNav={setPage} />}
            {page === "executive" && <ExecutivePage onNav={setPage} />}
            {page === "cases" && <CasesPage />}
            {page === "session" && <SessionPage />}
            {page === "impact" && <ImpactPage />}
          </div>
        </div>

        {/* Theme Toggle */}
        <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 999 }}>
          <button onClick={() => setTheme("insurance")} style={{
            padding: "8px 16px", background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`,
            borderRadius: 8, color: C.textMuted, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, backdropFilter: "blur(10px)",
          }}><span style={{ fontSize: 13 }}>🖥️</span> Insurance Company Mode</button>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}
