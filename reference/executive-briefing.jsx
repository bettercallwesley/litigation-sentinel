import { useState, useEffect, useRef, createContext, useContext } from "react";

// ─── Theme Context ──────────────────────────────────────────────────────────
const ThemeContext = createContext("fortune500");
const useTheme = () => useContext(ThemeContext);

// ─── Win95 Design System ────────────────────────────────────────────────────
const WIN95 = {
  bg: "#008080",
  silver: "#C0C0C0",
  darkSilver: "#808080",
  white: "#FFFFFF",
  black: "#000000",
  navy: "#000080",
  navyText: "#FFFFFF",
  windowBg: "#C0C0C0",
  fieldBg: "#FFFFFF",
  fieldSunken: "#808080",
  btnFace: "#C0C0C0",
  btnHighlight: "#FFFFFF",
  btnShadow: "#808080",
  btnDkShadow: "#000000",
  titleActive: "#000080",
  titleInactive: "#808080",
  selectedBg: "#000080",
  selectedText: "#FFFFFF",
  text: "#000000",
  textMuted: "#808080",
  linkBlue: "#0000FF",
  red: "#FF0000",
  green: "#008000",
  yellow: "#FFFF00",
  font: "'MS Sans Serif', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

// Win95 beveled border helpers
const w95raised = {
  borderTop: `2px solid ${WIN95.btnHighlight}`,
  borderLeft: `2px solid ${WIN95.btnHighlight}`,
  borderBottom: `2px solid ${WIN95.btnDkShadow}`,
  borderRight: `2px solid ${WIN95.btnDkShadow}`,
};
const w95sunken = {
  borderTop: `2px solid ${WIN95.btnShadow}`,
  borderLeft: `2px solid ${WIN95.btnShadow}`,
  borderBottom: `2px solid ${WIN95.btnHighlight}`,
  borderRight: `2px solid ${WIN95.btnHighlight}`,
};
const w95button = {
  ...w95raised,
  background: WIN95.btnFace,
  padding: "4px 16px",
  fontSize: 11,
  fontFamily: WIN95.font,
  cursor: "pointer",
  color: WIN95.text,
  outline: "none",
  borderRadius: 0,
};

// Win95 Window component
const Win95Window = ({ title, children, style = {}, onClose }) => (
  <div style={{ background: WIN95.silver, ...w95raised, padding: 3, ...style }}>
    {/* Title bar */}
    <div style={{
      background: `linear-gradient(90deg, ${WIN95.titleActive}, #1084D0)`,
      padding: "3px 4px", display: "flex", alignItems: "center", justifyContent: "space-between",
      marginBottom: 2, userSelect: "none",
    }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: WIN95.navyText, fontFamily: WIN95.font, letterSpacing: 0 }}>{title}</span>
      <div style={{ display: "flex", gap: 2 }}>
        {["_", "□", "×"].map((btn, i) => (
          <button key={i} onClick={i === 2 ? onClose : undefined} style={{
            ...w95raised, width: 16, height: 14, padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, fontFamily: WIN95.font, background: WIN95.silver, cursor: "pointer", lineHeight: 1, borderRadius: 0,
            color: WIN95.text,
          }}>{btn}</button>
        ))}
      </div>
    </div>
    {/* Content */}
    <div>{children}</div>
  </div>
);

// Win95 Panel (sunken area)
const Win95Panel = ({ children, style = {} }) => (
  <div style={{ ...w95sunken, background: WIN95.fieldBg, padding: 8, ...style }}>{children}</div>
);

// Win95 Button
const Win95Button = ({ children, onClick, primary, style = {} }) => (
  <button onClick={onClick} style={{
    ...w95button,
    ...(primary ? { fontWeight: 700 } : {}),
    ...style,
  }}>{children}</button>
);

// Win95 Radio
const Win95Radio = ({ checked, label, onClick }) => (
  <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", marginBottom: 4, fontFamily: WIN95.font, fontSize: 11, color: WIN95.text }}>
    <div style={{ width: 12, height: 12, borderRadius: "50%", ...w95sunken, background: WIN95.fieldBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {checked && <div style={{ width: 6, height: 6, borderRadius: "50%", background: WIN95.text }} />}
    </div>
    {label}
  </div>
);

// Win95 ProgressBar
const Win95ProgressBar = ({ value, max, color = WIN95.navy }) => (
  <div style={{ ...w95sunken, height: 18, background: WIN95.fieldBg, position: "relative" }}>
    <div style={{ position: "absolute", top: 2, left: 2, bottom: 2, width: `${(value / max) * 100}%`, background: color, transition: "width 0.3s" }} />
  </div>
);

// Win95 Badge
const Win95Badge = ({ children, color = WIN95.navy }) => (
  <span style={{
    display: "inline-block", padding: "1px 6px", background: color, color: WIN95.navyText,
    fontSize: 10, fontWeight: 700, fontFamily: WIN95.font,
  }}>{children}</span>
);

// ─── Fortune 500 Design System ──────────────────────────────────────────────
const COLORS = {
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

const MATURITY_LEVELS = {
  1: { label: "Foundational", color: COLORS.rose, glow: COLORS.roseGlow, desc: "Manual processes, limited visibility" },
  2: { label: "Developing", color: COLORS.amber, glow: COLORS.amberGlow, desc: "Some systems in place, fragmented data" },
  3: { label: "Established", color: COLORS.accent, glow: COLORS.accentGlow, desc: "Structured approach, some automation" },
  4: { label: "Advanced", color: COLORS.emerald, glow: COLORS.emeraldGlow, desc: "Integrated systems, data-driven decisions" },
  5: { label: "Transformative", color: COLORS.gold, glow: COLORS.goldGlow, desc: "AI-powered, predictive intelligence" },
};

// ─── CaseGlide Logo Component ────────────────────────────────────────────────
const CaseGlideLogo = ({ size = 32 }) => {
  const s = size;
  const pad = s * 0.15;
  const r = s * 0.16;
  // Case file with folded corner and subtle "glide" accent
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor={COLORS.accent} />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="cg-fold" x1="28" y1="0" x2="40" y2="12">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor={COLORS.accent} />
        </linearGradient>
        <linearGradient id="cg-accent" x1="10" y1="28" x2="34" y2="28">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor="#E5C066" />
        </linearGradient>
      </defs>
      {/* Main case file body */}
      <path d="M8 6C8 3.79 9.79 2 12 2H30L40 12V42C40 44.21 38.21 46 36 46H12C9.79 46 8 44.21 8 42V6Z" fill="url(#cg-grad)" />
      {/* Folded corner */}
      <path d="M30 2L40 12H34C31.79 12 30 10.21 30 8V2Z" fill="url(#cg-fold)" opacity="0.7" />
      {/* Content lines — representing structured data */}
      <rect x="14" y="18" width="16" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="14" y="23" width="12" height="2" rx="1" fill="white" opacity="0.35" />
      {/* Gold accent bar — the "glide" / intelligence layer */}
      <rect x="14" y="29" width="20" height="3" rx="1.5" fill="url(#cg-accent)" opacity="0.9" />
      {/* Lower data line */}
      <rect x="14" y="35" width="14" height="2" rx="1" fill="white" opacity="0.25" />
    </svg>
  );
};

const CaseGlideWordmark = ({ size = 32 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
    <CaseGlideLogo size={size} />
    <span style={{
      fontSize: size * 0.4,
      fontWeight: 600,
      letterSpacing: "0.06em",
      color: COLORS.textSecondary,
      textTransform: "uppercase",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      Case<span style={{ color: COLORS.textPrimary }}>Glide</span>
    </span>
  </div>
);

// ─── Assessment Questions (Executive Visibility Focus) ───────────────────────
// Weighted: Docket Dashboard (~40%), Precedent Dashboard (~35%), AI & Intelligence (~25%)
const ASSESSMENT_QUESTIONS = [
  {
    id: "open_visibility",
    painPoint: "Open Case Visibility",
    feature: "Docket Dashboard",
    pillar: "docket",
    question: "Right now, can you see which open cases need your attention — over budget, aging past 12 or 18 months, stalled negotiations, or approaching a key event like mediation or trial?",
    options: [
      { score: 1, label: "No — we rely on outside counsel to flag issues, or we discover them reactively" },
      { score: 2, label: "Partially — we track some metrics in spreadsheets, but it's manual and incomplete" },
      { score: 3, label: "We have dashboards, but they require manual updates and don't surface exceptions automatically" },
      { score: 4, label: "We have real-time dashboards with alerts for budget, aging, and key milestones" },
      { score: 5, label: "We have intelligent dashboards that proactively flag intervention opportunities based on case patterns" },
    ],
  },
  {
    id: "open_intervention",
    painPoint: "Intervention & Settlement Readiness",
    feature: "Docket Dashboard",
    pillar: "docket",
    question: "Can you identify which cases are ready to settle, which have stalled post-mediation, or where a particular plaintiff firm is creating outsized exposure?",
    options: [
      { score: 1, label: "No — we don't have that data consolidated in a way that surfaces those patterns" },
      { score: 2, label: "We can answer some of these, but it takes days of manual review to compile" },
      { score: 3, label: "We have reporting that covers some of this, but it's not real-time or comprehensive" },
      { score: 4, label: "We can see settlement readiness, negotiation gaps, and firm-level patterns in a single view" },
      { score: 5, label: "Our system proactively recommends intervention points and flags negotiation anomalies" },
    ],
  },
  {
    id: "closed_outcomes",
    painPoint: "Outcome Measurement",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question: "For your resolved cases, can you determine whether an outcome was good — not just what was spent, but whether you got value relative to liability, damages, venue, and strategy used?",
    options: [
      { score: 1, label: "We track legal spend, but we can't connect it to outcome quality or case characteristics" },
      { score: 2, label: "We have basic outcome data, but it's not structured enough to draw conclusions" },
      { score: 3, label: "We measure outcomes and spend, but can't calibrate value by venue, judge, or strategy" },
      { score: 4, label: "We have structured outcome data with liability, damages, negotiations, and venue — and can benchmark" },
      { score: 5, label: "We can fully calibrate outcome value against all case variables and use it to predict future performance" },
    ],
  },
  {
    id: "attorney_value",
    painPoint: "Attorney Performance & Selection",
    feature: "Precedent Dashboard",
    pillar: "precedent",
    question: "Can you measure the value your defense attorneys deliver — not just their rates, but their outcomes relative to case difficulty, and use that to assign the right attorney to the right case?",
    options: [
      { score: 1, label: "We know what they bill, but we can't objectively measure outcome quality by attorney" },
      { score: 2, label: "We have some outcome data, but it's not structured to compare attorneys fairly" },
      { score: 3, label: "We benchmark attorneys on spend and cycle time, but lack outcome-calibrated performance data" },
      { score: 4, label: "We measure attorney performance across spend, outcomes, and case characteristics — and use it for assignments" },
      { score: 5, label: "AI-driven performance scoring that accounts for case complexity, venue, and liability — fully integrated into counsel selection" },
    ],
  },
  {
    id: "ai_insight",
    painPoint: "On-Demand Intelligence",
    feature: "Chambers & Chronicle",
    pillar: "ai",
    question: "When you need an instant answer about your portfolio — or a case timeline for a board meeting — how quickly can you get it?",
    options: [
      { score: 1, label: "Someone has to compile it manually — hours or days" },
      { score: 2, label: "We have reports, but they require manual updates and can't handle ad hoc questions" },
      { score: 3, label: "We have dashboards, but narrative summaries and timelines are still manual" },
      { score: 4, label: "We can query the portfolio flexibly and auto-generate case timelines with human review" },
      { score: 5, label: "AI generates instant answers to any portfolio question and produces board-ready narratives on demand" },
    ],
  },
  {
    id: "data_capture",
    painPoint: "Data Foundation",
    feature: "Case Updates & CG Intelligence",
    pillar: "ai",
    question: "How does the structured case data that powers all of this — liability assessments, strategy, milestone details — actually get into your system?",
    options: [
      { score: 1, label: "It doesn't — most of that information lives in emails and attorney notes, unstructured" },
      { score: 2, label: "We ask for it manually, but compliance is inconsistent and the data is incomplete" },
      { score: 3, label: "We have structured intake forms, but they're static and disconnected from case stage" },
      { score: 4, label: "Dynamic, milestone-aware requests capture the right data at the right time" },
      { score: 5, label: "Intelligent requests adapt to case context, and AI extracts data from any document or communication automatically" },
    ],
  },
];

// ─── Utility Components ──────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
};

const Badge = ({ children, color = COLORS.accent, glow }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "100px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: color,
      background: glow || `${color}15`,
      border: `1px solid ${color}30`,
    }}
  >
    {children}
  </span>
);

const ProgressBar = ({ value, max, color = COLORS.accent }) => (
  <div style={{ width: "100%", height: 4, background: COLORS.border, borderRadius: 2, overflow: "hidden" }}>
    <div
      style={{
        width: `${(value / max) * 100}%`,
        height: "100%",
        background: color,
        borderRadius: 2,
        transition: "width 0.5s ease",
        boxShadow: `0 0 12px ${color}40`,
      }}
    />
  </div>
);

// ─── Phase 1: Landing ────────────────────────────────────────────────────────
const LandingPage = ({ onStart, onSchedule }) => {
  const theme = useTheme();
  const isWin95 = theme === "insurance";

  if (isWin95) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <Win95Window title="CaseGlide - Litigation Intelligence Assessment" style={{ maxWidth: 480, width: "100%" }}>
          <div style={{ padding: 12 }}>
            {/* Wizard banner */}
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, background: WIN95.navy, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>⚖️</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, fontFamily: WIN95.font, color: WIN95.text, marginBottom: 2 }}>Welcome to CaseGlide</div>
                <div style={{ fontSize: 11, fontFamily: WIN95.font, color: WIN95.text }}>Litigation Intelligence Readiness Assessment</div>
              </div>
            </div>

            <Win95Panel style={{ marginBottom: 12, padding: 12 }}>
              <p style={{ fontSize: 11, fontFamily: WIN95.font, color: WIN95.text, margin: "0 0 8px", lineHeight: 1.5 }}>
                This wizard will help you assess your legal department's litigation intelligence maturity in 6 easy steps.
              </p>
              <p style={{ fontSize: 11, fontFamily: WIN95.font, color: WIN95.text, margin: 0, lineHeight: 1.5 }}>
                Upon completion, you will receive a personalized briefing showing how CaseGlide can improve your visibility into open and closed cases.
              </p>
            </Win95Panel>

            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              {["📋 6 questions", "⏱️ ~4 minutes", "🔒 Confidential"].map((t, i) => (
                <div key={i} style={{ fontSize: 10, fontFamily: WIN95.font, color: WIN95.text, display: "flex", alignItems: "center", gap: 3 }}>{t}</div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${WIN95.btnShadow}`, paddingTop: 8, display: "flex", justifyContent: "flex-end", gap: 6 }}>
              <Win95Button onClick={onSchedule}>Schedule Later</Win95Button>
              <Win95Button primary onClick={onStart}>Next &gt;</Win95Button>
            </div>
          </div>
        </Win95Window>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", position: "relative" }}>
      <div style={{ position: "absolute", top: "10%", left: "20%", width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 300, height: 300, background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none" }} />
      <FadeIn>
        <div style={{ textAlign: "center", maxWidth: 680 }}>
          <div style={{ marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CaseGlideWordmark size={44} />
          </div>
          <Badge color={COLORS.gold} glow={COLORS.goldGlow}>Executive Briefing</Badge>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, lineHeight: 1.15, color: COLORS.textPrimary, margin: "24px 0 0", fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Litigation Intelligence<br />
            <span style={{ fontWeight: 500, background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Readiness Assessment</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: COLORS.textSecondary, margin: "24px auto 0", maxWidth: 520 }}>
            A confidential, 6-question assessment of how your legal department gathers, views, and acts on litigation data — followed by a personalized briefing on what's possible.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
            <button onClick={onStart} style={{ padding: "14px 32px", background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`, color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 24px ${COLORS.accent}40` }}>Begin Assessment →</button>
            <button onClick={onSchedule} style={{ padding: "14px 32px", background: "transparent", color: COLORS.textPrimary, border: `1px solid ${COLORS.borderLight}`, borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Schedule Briefing</button>
          </div>
          <div style={{ marginTop: 56, display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {["6 questions · 4 min", "Personalized insights", "Confidential"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.textMuted, fontSize: 13 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.accent, opacity: 0.5 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

// ─── Phase 2: Assessment ─────────────────────────────────────────────────────
const AssessmentPage = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [hoveredOption, setHoveredOption] = useState(null);
  const q = ASSESSMENT_QUESTIONS[current];
  const progress = Object.keys(answers).length;
  const theme = useTheme();
  const isWin95 = theme === "insurance";

  const selectAnswer = (score) => {
    const newAnswers = { ...answers, [q.id]: score };
    setAnswers(newAnswers);
    if (current < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(current + 1), isWin95 ? 100 : 300);
    } else {
      setTimeout(() => onComplete(newAnswers), isWin95 ? 200 : 500);
    }
  };

  if (isWin95) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <Win95Window title={`CaseGlide Assessment - Question ${current + 1} of ${ASSESSMENT_QUESTIONS.length}`} style={{ maxWidth: 540, width: "100%" }}>
          <div style={{ padding: 12 }}>
            {/* Wizard step indicator */}
            <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
              {ASSESSMENT_QUESTIONS.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 8, background: i < progress ? WIN95.navy : i === current ? "#4169E1" : WIN95.silver, ...w95sunken }} />
              ))}
            </div>

            <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
              <Win95Badge color={WIN95.red}>{q.painPoint}</Win95Badge>
              <Win95Badge>CaseGlide: {q.feature}</Win95Badge>
            </div>

            <Win95Panel style={{ marginBottom: 10, padding: 10 }}>
              <p style={{ fontSize: 12, fontWeight: 700, fontFamily: WIN95.font, color: WIN95.text, margin: 0, lineHeight: 1.5 }}>
                {q.question}
              </p>
            </Win95Panel>

            {/* Radio group */}
            <div style={{ ...w95sunken, background: WIN95.fieldBg, padding: 10, marginBottom: 10 }}>
              {q.options.map((opt, i) => (
                <Win95Radio
                  key={i}
                  checked={answers[q.id] === opt.score}
                  label={`${opt.score}. ${opt.label}`}
                  onClick={() => selectAnswer(opt.score)}
                />
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${WIN95.btnShadow}`, paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
              <Win95Button onClick={() => current > 0 && setCurrent(current - 1)} style={{ opacity: current > 0 ? 1 : 0.4 }}>
                &lt; Back
              </Win95Button>
              <div style={{ fontSize: 10, fontFamily: WIN95.font, color: WIN95.textMuted, alignSelf: "center" }}>
                Step {current + 1} of {ASSESSMENT_QUESTIONS.length}
              </div>
              <Win95Button primary onClick={() => answers[q.id] && (current < ASSESSMENT_QUESTIONS.length - 1 ? setCurrent(current + 1) : onComplete(answers))}>
                {current === ASSESSMENT_QUESTIONS.length - 1 ? "Finish" : "Next >"}
              </Win95Button>
            </div>
          </div>
        </Win95Window>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: "0 24px" }}>
      {/* Header */}
      <div style={{ padding: "24px 0", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 800, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>Litigation Intelligence Assessment</span>
        </div>
        <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{progress + 1} of {ASSESSMENT_QUESTIONS.length}</span>
      </div>

      {/* Progress */}
      <div style={{ maxWidth: 800, margin: "0 auto", width: "100%", paddingTop: 16 }}>
        <ProgressBar value={progress} max={ASSESSMENT_QUESTIONS.length} />
      </div>

      {/* Question */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 800, margin: "0 auto", width: "100%", padding: "40px 0" }}>
        <FadeIn key={current} delay={0}>
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
              <Badge color={COLORS.rose}>{q.painPoint}</Badge>
              <Badge color={COLORS.accent}>CaseGlide: {q.feature}</Badge>
            </div>

            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 28px)", fontWeight: 400, lineHeight: 1.4, color: COLORS.textPrimary, margin: "0 0 32px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
              {q.question}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {q.options.map((opt, i) => {
                const isSelected = answers[q.id] === opt.score;
                const isHovered = hoveredOption === `${q.id}-${i}`;
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(opt.score)}
                    onMouseEnter={() => setHoveredOption(`${q.id}-${i}`)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "16px 20px",
                      background: isSelected ? COLORS.accentSoft : isHovered ? COLORS.surfaceHover : COLORS.surface,
                      border: `1px solid ${isSelected ? COLORS.accent : isHovered ? COLORS.borderLight : COLORS.border}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                      width: "100%",
                    }}
                  >
                    <div style={{
                      width: 28, height: 28, minWidth: 28, borderRadius: "50%",
                      background: isSelected ? COLORS.accent : "transparent",
                      border: `2px solid ${isSelected ? COLORS.accent : COLORS.borderLight}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 600, color: isSelected ? "#fff" : COLORS.textMuted,
                      marginTop: 1, transition: "all 0.2s",
                    }}>
                      {opt.score}
                    </div>
                    <span style={{ fontSize: 14, lineHeight: 1.6, color: isSelected ? COLORS.textPrimary : COLORS.textSecondary, transition: "color 0.2s" }}>
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Nav */}
            {current > 0 && (
              <button
                onClick={() => setCurrent(current - 1)}
                style={{ marginTop: 20, padding: "8px 0", background: "none", border: "none", color: COLORS.textMuted, fontSize: 13, cursor: "pointer" }}
              >
                ← Previous question
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// ─── Phase 3: Results / Pre-Briefing Preview ─────────────────────────────────
const ResultsPage = ({ answers, onContinue }) => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 300); }, []);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / ASSESSMENT_QUESTIONS.length;
  const maturityLevel = Math.min(5, Math.max(1, Math.round(avgScore)));
  const maturity = MATURITY_LEVELS[maturityLevel];

  const questionResults = ASSESSMENT_QUESTIONS.map((q) => ({
    ...q,
    score: answers[q.id] || 1,
    maturity: MATURITY_LEVELS[answers[q.id] || 1],
  }));

  // Identify top gaps (lowest scores)
  const sorted = [...questionResults].sort((a, b) => a.score - b.score);
  const topGaps = sorted.slice(0, 3);

  return (
    <div style={{ minHeight: "100vh", padding: "0 24px" }}>
      {/* Header */}
      <div style={{ padding: "24px 0", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>Your Assessment Results</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 0 80px" }}>
        {/* Overall Score */}
        <FadeIn delay={100}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Badge color={maturity.color} glow={maturity.glow}>{maturity.label}</Badge>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 300, color: COLORS.textPrimary, margin: "20px 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Your Litigation Intelligence Maturity
            </h1>
            <p style={{ fontSize: 16, color: COLORS.textSecondary, maxWidth: 500, margin: "0 auto" }}>{maturity.desc}</p>

            {/* Score visualization */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} style={{
                  width: 64, height: 64, borderRadius: 12,
                  background: level <= maturityLevel ? `${MATURITY_LEVELS[level].color}20` : COLORS.surface,
                  border: `1px solid ${level <= maturityLevel ? MATURITY_LEVELS[level].color : COLORS.border}`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  transition: "all 0.5s ease",
                  transitionDelay: `${level * 100}ms`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "scale(1)" : "scale(0.8)",
                }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: level <= maturityLevel ? MATURITY_LEVELS[level].color : COLORS.textMuted }}>{level}</span>
                  <span style={{ fontSize: 8, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {MATURITY_LEVELS[level].label.slice(0, 5)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Dimension Breakdown */}
        <FadeIn delay={400}>
          <h3 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: COLORS.textMuted, marginBottom: 20 }}>
            Dimension Breakdown
          </h3>
          <div style={{ display: "grid", gap: 12 }}>
            {questionResults.map((q, i) => (
              <div
                key={q.id}
                style={{
                  display: "flex", alignItems: "center", gap: 16, padding: "18px 20px",
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12,
                  opacity: revealed ? 1 : 0, transform: revealed ? "translateX(0)" : "translateX(-12px)",
                  transition: "all 0.5s ease", transitionDelay: `${500 + i * 80}ms`,
                }}
              >
                <div style={{ width: 40, textAlign: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 600, color: q.maturity.color }}>{q.score}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.textPrimary }}>{q.painPoint}</span>
                    <span style={{ fontSize: 11, color: COLORS.textMuted }}>→ {q.feature}</span>
                  </div>
                  <ProgressBar value={q.score} max={5} color={q.maturity.color} />
                </div>
                <Badge color={q.maturity.color} glow={q.maturity.glow}>{q.maturity.label}</Badge>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Top Opportunities */}
        <FadeIn delay={900}>
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: COLORS.textMuted, marginBottom: 20 }}>
              Highest-Impact Opportunities
            </h3>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {topGaps.map((gap, i) => (
                <div key={gap.id} style={{
                  padding: 24, background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14,
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${gap.maturity.color}, transparent)` }} />
                  <div style={{ fontSize: 11, fontWeight: 600, color: gap.maturity.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                    Opportunity #{i + 1}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, marginBottom: 8 }}>{gap.painPoint}</div>
                  <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.6 }}>
                    CaseGlide's <strong style={{ color: COLORS.accent }}>{gap.feature}</strong> module addresses this gap directly.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={1200}>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button
              onClick={onContinue}
              style={{
                padding: "16px 40px", background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 600,
                cursor: "pointer", boxShadow: `0 4px 24px ${COLORS.accent}40`,
              }}
            >
              View Your Personalized Briefing →
            </button>
            <p style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 12 }}>See how CaseGlide maps to your specific gaps</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// ─── Phase 4: Live Briefing Panels ───────────────────────────────────────────
const FEATURE_DETAILS = {
  "Docket Dashboard": {
    icon: "📊",
    pillar: "docket",
    weight: "40%",
    tagline: "See every open case that needs your attention — before it's too late",
    description: "The Docket Dashboard gives you a real-time command center for your entire active litigation portfolio. Not just status — intervention intelligence. Which cases are over budget? Aging past 365 days? Stalled after mediation? Approaching trial without adequate reserves? Which plaintiff firms are driving outsized exposure? Every question you'd ask is answered before you ask it.",
    capabilities: [
      "Cases by stage: initial assessment, discovery, depositions, mediation, trial",
      "Budget exceptions: over $25K, over $50K, over budget",
      "Aging alerts: 365+ days, 18+ months, progress vs. expected timeline",
      "Settlement readiness: negotiation gaps, post-mediation stalls",
      "Key events: upcoming mediations, trials, depositions",
      "Plaintiff firm patterns: which firms drive cost and exposure",
    ],
  },
  "Precedent Dashboard": {
    icon: "⚖️",
    pillar: "precedent",
    weight: "35%",
    tagline: "Know whether you got value — and hire the right attorney next time",
    description: "The Precedent Dashboard turns your closed case history into a strategic weapon. Legal spend alone doesn't tell you if an outcome was good. You need the full picture: liability assessment, damages, venue, judge, strategy, negotiations, parties, and the attorneys involved. Precedent gives you that — so you can calibrate outcome quality, benchmark attorney performance, and make data-driven counsel selection decisions.",
    capabilities: [
      "Outcome quality calibration: spend vs. liability, damages, venue, strategy",
      "Attorney performance scoring across case characteristics",
      "Counsel selection intelligence: right attorney for the right case",
      "Negotiation pattern analysis: what strategies produced the best results",
      "Venue and judge analytics: how location impacts outcomes",
      "Legal spend ROI: true value measurement, not just cost tracking",
    ],
  },
  "Chambers": {
    icon: "💬",
    pillar: "ai",
    weight: "~12%",
    tagline: "Ask your portfolio anything. Get answers instantly.",
    description: "Chambers is your AI-powered litigation analyst. When a board member asks about total exposure, or you need to know which cases in California are over budget with trial in 90 days — Chambers gives you an accurate, sourced answer in seconds. No waiting for someone to pull a report.",
    capabilities: [
      "Natural language portfolio queries",
      "Instant exposure and reserve summaries",
      "Cross-portfolio pattern identification",
      "Board-ready answers on demand",
    ],
  },
  "Chronicle": {
    icon: "📖",
    pillar: "ai",
    weight: "~8%",
    tagline: "Complete case timelines and narratives, generated from your data",
    description: "Chronicle produces comprehensive, accurate case timelines and narrative summaries from all structured case data — filings, milestones, communications, outcomes. Ready for board presentations, regulatory reports, or strategy sessions. No manual assembly required.",
    capabilities: [
      "AI-generated case timelines from structured data",
      "Board report narrative automation",
      "Milestone progression visualization",
      "Multi-case summary generation",
    ],
  },
  "Case Updates": {
    icon: "🔄",
    pillar: "foundation",
    weight: "foundation",
    tagline: "The data engine — how all of this intelligence gets built",
    description: "Everything in the Docket and Precedent dashboards depends on having structured, complete case data. Case Updates is how it gets there. Intelligent, milestone-aware requests go to outside counsel at exactly the right moment — initial case analysis, discovery, depositions, mediation, trial. Attorneys respond in a dynamic form or drag in a document and CaseGlide extracts the information automatically. This is the context layer that makes everything else possible.",
    capabilities: [
      "Milestone-triggered requests: right data at the right time",
      "Dynamic forms that adapt to case stage and type",
      "Document drag-and-drop with AI extraction",
      "Automated data capture from any format",
    ],
  },
};

const BriefingPage = ({ answers, onContinue }) => {
  const [activeFeature, setActiveFeature] = useState("Docket Dashboard");
  const [showDemo, setShowDemo] = useState(false);
  const features = Object.keys(FEATURE_DETAILS);
  const detail = FEATURE_DETAILS[activeFeature];

  // Map answers to features for personalization
  const pillarScores = { docket: [], precedent: [], ai: [] };
  ASSESSMENT_QUESTIONS.forEach((q) => {
    if (pillarScores[q.pillar]) pillarScores[q.pillar].push(answers[q.id] || 1);
  });
  const avgPillar = (p) => {
    const arr = pillarScores[p];
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 1;
  };
  const featurePillarMap = {};
  Object.keys(FEATURE_DETAILS).forEach((f) => {
    const p = FEATURE_DETAILS[f].pillar;
    featurePillarMap[f] = Math.round(avgPillar(p === "foundation" ? "ai" : p));
  });

  return (
    <div style={{ minHeight: "100vh", padding: "0 24px" }}>
      {/* Header */}
      <div style={{ padding: "24px 0", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 960, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>Personalized Briefing</span>
        </div>
        <Badge color={COLORS.gold}>Live Session</Badge>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 0 80px" }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300, color: COLORS.textPrimary, marginBottom: 8, fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Litigation Intelligence: What <span style={{ color: COLORS.accent }}>You</span> Could See
          </h1>
          <p style={{ fontSize: 15, color: COLORS.textSecondary, marginBottom: 32 }}>
            75% of litigation intelligence is the ability to see what's happening in your open cases and measure the value of your closed cases. The rest is the AI that makes it instant and the data engine that makes it complete.
          </p>
        </FadeIn>

        {/* Feature Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, overflowX: "auto", paddingBottom: 4 }}>
          {features.map((f) => {
            const score = featurePillarMap[f] || 3;
            const isActive = f === activeFeature;
            const gap = 5 - score;
            const det = FEATURE_DETAILS[f];
            return (
              <button
                key={f}
                onClick={() => { setActiveFeature(f); setShowDemo(false); }}
                style={{
                  padding: "10px 18px", borderRadius: 10, border: `1px solid ${isActive ? COLORS.accent : COLORS.border}`,
                  background: isActive ? COLORS.accentSoft : "transparent", color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
                  fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 8, position: "relative",
                }}
              >
                <span>{det.icon}</span> {f}
                {gap >= 3 && (
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.rose, boxShadow: `0 0 8px ${COLORS.rose}60` }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Detail Panel */}
        <FadeIn key={activeFeature}>
          <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 16, overflow: "hidden" }}>
            {/* Feature header */}
            <div style={{ padding: "32px 32px 24px", borderBottom: `1px solid ${COLORS.border}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 28 }}>{detail.icon}</span>
                    {detail.weight !== "foundation" && <Badge color={COLORS.gold}>{detail.weight} of Litigation Intelligence</Badge>}
                    {detail.weight === "foundation" && <Badge color={COLORS.accent}>Foundation Layer</Badge>}
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 500, color: COLORS.textPrimary, margin: "0 0 4px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
                    {activeFeature}
                  </h2>
                  <p style={{ fontSize: 15, color: COLORS.accent, margin: 0, fontStyle: "italic" }}>{detail.tagline}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Your current level</div>
                  <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                    {[1, 2, 3, 4, 5].map((n) => {
                      const score = featurePillarMap[activeFeature] || 1;
                      return (
                        <div key={n} style={{
                          width: 24, height: 24, borderRadius: 6,
                          background: n <= score ? MATURITY_LEVELS[n].color + "30" : COLORS.border,
                          border: `1px solid ${n <= score ? MATURITY_LEVELS[n].color : "transparent"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, fontWeight: 600, color: n <= score ? MATURITY_LEVELS[n].color : COLORS.textMuted,
                        }}>{n}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature body */}
            <div style={{ padding: 32 }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textSecondary, margin: "0 0 24px" }}>{detail.description}</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
                {detail.capabilities.map((cap, i) => (
                  <div key={i} style={{
                    padding: "12px 16px", background: COLORS.midnight, borderRadius: 10,
                    border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "flex-start", gap: 10,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.accent, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Demo */}
              <div style={{ marginTop: 28 }}>
                <button
                  onClick={() => setShowDemo(!showDemo)}
                  style={{
                    padding: "12px 24px", background: showDemo ? COLORS.accentSoft : "transparent",
                    border: `1px solid ${COLORS.accent}40`, borderRadius: 10,
                    color: COLORS.accent, fontSize: 13, fontWeight: 600, cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {showDemo ? "Hide Preview" : "✦ See It In Action"}
                </button>

                {showDemo && (
                  <FadeIn delay={100}>
                    <div style={{
                      marginTop: 16, padding: 24, background: COLORS.midnight,
                      border: `1px solid ${COLORS.accent}20`, borderRadius: 14,
                    }}>
                      {activeFeature === "Docket Dashboard" ? (
                        <div>
                          <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Simulated Docket Dashboard — Portfolio Exception View
                          </div>
                          {/* Mini dashboard simulation */}
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 16 }}>
                            {[
                              { label: "Over Budget", value: "12", color: COLORS.rose },
                              { label: "Over $50K Reserve", value: "8", color: COLORS.amber },
                              { label: "Aging 365+ Days", value: "23", color: COLORS.amber },
                              { label: "Settlement Ready", value: "6", color: COLORS.emerald },
                              { label: "Trial in 90 Days", value: "3", color: COLORS.rose },
                              { label: "Post-Mediation Stalled", value: "9", color: COLORS.amber },
                            ].map((stat, i) => (
                              <div key={i} style={{
                                padding: "16px 14px", background: COLORS.surface, borderRadius: 10,
                                border: `1px solid ${COLORS.border}`, textAlign: "center",
                              }}>
                                <div style={{ fontSize: 28, fontWeight: 600, color: stat.color, fontFamily: "'DM Sans', sans-serif" }}>{stat.value}</div>
                                <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 4, lineHeight: 1.3 }}>{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          {/* Sample case row */}
                          <div style={{ background: COLORS.surface, borderRadius: 10, border: `1px solid ${COLORS.border}`, overflow: "hidden" }}>
                            <div style={{ padding: "10px 16px", background: `${COLORS.rose}10`, borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.rose }}>⚠ NEEDS ATTENTION</span>
                              <span style={{ fontSize: 11, color: COLORS.textMuted }}>3 of 12 over-budget cases</span>
                            </div>
                            {[
                              { name: "Martinez v. Acme Corp", stage: "Discovery", days: "412 days", budget: "$67K / $50K", flag: "Over budget, aging" },
                              { name: "Thompson Class Action", stage: "Mediation", days: "289 days", budget: "$142K / $100K", flag: "Post-mediation stall" },
                              { name: "Lee v. National Ins.", stage: "Depositions", days: "198 days", budget: "$38K / $25K", flag: "Key depo next week" },
                            ].map((c, i) => (
                              <div key={i} style={{ padding: "12px 16px", borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                                <div style={{ flex: "1 1 140px" }}>
                                  <div style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>{c.name}</div>
                                  <div style={{ fontSize: 11, color: COLORS.textMuted }}>{c.stage} · {c.days}</div>
                                </div>
                                <div style={{ fontSize: 12, color: COLORS.amber, fontWeight: 500 }}>{c.budget}</div>
                                <Badge color={COLORS.rose} glow={COLORS.roseGlow}>{c.flag}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : activeFeature === "Precedent Dashboard" ? (
                        <div>
                          <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Simulated Precedent Dashboard — Attorney Performance & Outcome Value
                          </div>
                          {/* Attorney performance table */}
                          <div style={{ background: COLORS.surface, borderRadius: 10, border: `1px solid ${COLORS.border}`, overflow: "hidden" }}>
                            <div style={{ padding: "12px 16px", borderBottom: `1px solid ${COLORS.border}`, display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 8, fontSize: 11, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                              <span>Firm</span><span>Cases</span><span>Avg Spend</span><span>Outcome Score</span><span>Value Rating</span>
                            </div>
                            {[
                              { firm: "Baker & Associates", cases: "34", spend: "$42K", score: "8.2", rating: "High", rColor: COLORS.emerald },
                              { firm: "Morrison Drake LLP", cases: "28", spend: "$61K", score: "6.1", rating: "Medium", rColor: COLORS.amber },
                              { firm: "Sterling Whitmore", cases: "19", spend: "$78K", score: "5.4", rating: "Low", rColor: COLORS.rose },
                            ].map((f, i) => (
                              <div key={i} style={{ padding: "12px 16px", borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 8, alignItems: "center" }}>
                                <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textPrimary }}>{f.firm}</span>
                                <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{f.cases}</span>
                                <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{f.spend}</span>
                                <span style={{ fontSize: 13, fontWeight: 600, color: f.rColor }}>{f.score}/10</span>
                                <Badge color={f.rColor}>{f.rating}</Badge>
                              </div>
                            ))}
                          </div>
                          <p style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 12, lineHeight: 1.6, fontStyle: "italic" }}>
                            Outcome Score calibrates results against liability assessment, damages, venue difficulty, and strategy — not just spend. Sterling Whitmore costs 86% more than Baker with 34% worse outcomes on comparable cases.
                          </p>
                        </div>
                      ) : activeFeature === "Chambers" ? (
                        <div>
                          <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Simulated AI Query — Chambers
                          </div>
                          <div style={{ background: COLORS.surface, padding: 16, borderRadius: 10, marginBottom: 12, border: `1px solid ${COLORS.border}` }}>
                            <span style={{ fontSize: 13, color: COLORS.textMuted }}>You ask:</span>
                            <p style={{ fontSize: 15, color: COLORS.textPrimary, margin: "8px 0 0", fontStyle: "italic" }}>
                              "Which cases over $50K have had no negotiation activity in the last 60 days, and what's the total exposure?"
                            </p>
                          </div>
                          <div style={{ background: COLORS.surface, padding: 16, borderRadius: 10, border: `1px solid ${COLORS.accent}20` }}>
                            <span style={{ fontSize: 13, color: COLORS.accent }}>Chambers responds:</span>
                            <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "8px 0 0", lineHeight: 1.7 }}>
                              There are 7 cases with reserves exceeding $50K and no negotiation activity in the past 60 days, representing $1.2M in combined exposure. Four of these are post-mediation with no counter-offers. Two are with Morrison Drake LLP in venues with historically plaintiff-favorable outcomes. The oldest has been inactive for 127 days. Would you like to see the individual case details or the firm breakdown?
                            </p>
                          </div>
                        </div>
                      ) : activeFeature === "Case Updates" ? (
                        <div>
                          <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Simulated Milestone Request — Mediation
                          </div>
                          <div style={{ background: COLORS.surface, padding: 20, borderRadius: 10, border: `1px solid ${COLORS.border}` }}>
                            <div style={{ fontSize: 14, fontWeight: 500, color: COLORS.textPrimary, marginBottom: 16 }}>📋 Mediation Update Request</div>
                            {["Mediator selected and date confirmed?", "Settlement authority range", "Key documents prepared for exchange", "Demand/offer status", "Recommended strategy and rationale"].map((field, i) => (
                              <div key={i} style={{
                                padding: "10px 14px", background: COLORS.midnight, borderRadius: 8,
                                border: `1px solid ${COLORS.border}`, marginBottom: 8,
                                display: "flex", alignItems: "center", gap: 10,
                              }}>
                                <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${COLORS.borderLight}` }} />
                                <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{field}</span>
                              </div>
                            ))}
                            <div style={{ marginTop: 12, padding: "12px 16px", border: `2px dashed ${COLORS.borderLight}`, borderRadius: 10, textAlign: "center" }}>
                              <span style={{ fontSize: 13, color: COLORS.textMuted }}>📎 Or drag a document — CaseGlide extracts the information automatically</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div style={{ textAlign: "center", padding: "20px 0" }}>
                          <div style={{ fontSize: 40, marginBottom: 12 }}>{detail.icon}</div>
                          <p style={{ fontSize: 14, color: COLORS.textSecondary, maxWidth: 400, margin: "0 auto", lineHeight: 1.7 }}>
                            In your live briefing, we'll walk through a real demonstration of {activeFeature} using sample data that mirrors your litigation portfolio structure.
                          </p>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Continue to Programs */}
        <FadeIn delay={300}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={onContinue}
              style={{
                padding: "16px 40px", background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 600,
                cursor: "pointer", boxShadow: `0 4px 24px ${COLORS.accent}40`,
              }}
            >
              Explore Next Steps →
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// ─── Phase 5: Post-Briefing / Programs ───────────────────────────────────────
const PostBriefingPage = ({ answers }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / ASSESSMENT_QUESTIONS.length;

  const programs = [
    {
      id: "council",
      name: "Council",
      tagline: "Strategic advisory engagement — 90 days",
      duration: "90 days",
      color: COLORS.accent,
      glow: COLORS.accentGlow,
      description: "A structured advisory engagement where CaseGlide experts work alongside your team to evaluate fit, design an implementation roadmap, and quantify the ROI of litigation intelligence for your organization.",
      includes: ["Dedicated CaseGlide advisor", "Portfolio analysis & gap assessment", "Custom ROI model", "Implementation roadmap", "Executive readout presentation"],
    },
    {
      id: "trial",
      name: "Trial",
      tagline: "Hands-on pilot with your data — 30 days",
      duration: "30 days",
      color: COLORS.emerald,
      glow: COLORS.emeraldGlow,
      description: "A full hands-on pilot using a subset of your actual litigation portfolio. Your team uses CaseGlide daily, with dedicated onboarding, training, and success management throughout.",
      includes: ["Full platform access", "Data migration for pilot portfolio", "Team onboarding & training", "Weekly success check-ins", "Executive impact report"],
    },
  ];

  const recommended = avgScore <= 2.5 ? "council" : "trial";

  return (
    <div style={{ minHeight: "100vh", padding: "0 24px" }}>
      {/* Header */}
      <div style={{ padding: "24px 0", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CaseGlideLogo size={32} />
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>Your Next Steps</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 0 80px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: COLORS.textPrimary, margin: "0 0 12px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Two Paths to <span style={{ color: COLORS.gold }}>Litigation Intelligence</span>
            </h1>
            <p style={{ fontSize: 15, color: COLORS.textSecondary, maxWidth: 520, margin: "0 auto" }}>
              Based on your assessment, we recommend starting with the <strong style={{ color: programs.find(p => p.id === recommended).color }}>{programs.find(p => p.id === recommended).name}</strong>.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {programs.map((prog, i) => {
            const isRecommended = prog.id === recommended;
            const isSelected = selectedProgram === prog.id;
            return (
              <FadeIn key={prog.id} delay={200 + i * 150}>
                <div
                  onClick={() => setSelectedProgram(isSelected ? null : prog.id)}
                  style={{
                    padding: 0, background: COLORS.surface,
                    border: `1px solid ${isSelected ? prog.color : isRecommended ? `${prog.color}40` : COLORS.border}`,
                    borderRadius: 16, cursor: "pointer", overflow: "hidden",
                    transition: "all 0.3s ease", position: "relative",
                    boxShadow: isSelected ? `0 0 40px ${prog.color}15` : "none",
                  }}
                >
                  {isRecommended && (
                    <div style={{ background: `linear-gradient(90deg, ${prog.color}, ${prog.color}80)`, padding: "6px 0", textAlign: "center" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Recommended for You
                      </span>
                    </div>
                  )}
                  <div style={{ padding: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                      <Badge color={prog.color} glow={prog.glow}>{prog.duration}</Badge>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 500, color: COLORS.textPrimary, margin: "0 0 4px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
                      {prog.name}
                    </h3>
                    <p style={{ fontSize: 14, color: prog.color, margin: "0 0 16px", fontStyle: "italic" }}>{prog.tagline}</p>
                    <p style={{ fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.7, margin: "0 0 20px" }}>{prog.description}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {prog.includes.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: prog.color, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      style={{
                        marginTop: 24, width: "100%", padding: "14px",
                        background: isSelected ? prog.color : "transparent",
                        border: `1px solid ${prog.color}`,
                        borderRadius: 10, color: isSelected ? "#fff" : prog.color,
                        fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                      }}
                    >
                    {isSelected ? "✓ Selected — We'll Be In Touch" : `Select ${prog.name}`}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Summary download / share */}
        <FadeIn delay={600}>
          <div style={{
            marginTop: 40, padding: 24, background: COLORS.surface,
            border: `1px solid ${COLORS.border}`, borderRadius: 14, textAlign: "center",
          }}>
            <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: "0 0 16px" }}>
              Your complete assessment results and briefing materials are saved at this unique URL. Share with your team to align on next steps.
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px",
              background: COLORS.midnight, borderRadius: 8, border: `1px solid ${COLORS.border}`,
            }}>
              <span style={{ fontSize: 13, color: COLORS.textMuted, fontFamily: "monospace" }}>briefing.caseglide.com/your-unique-id</span>
              <button style={{
                padding: "4px 12px", background: COLORS.accent, border: "none", borderRadius: 6,
                color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}>Copy</button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// ─── Schedule Modal ──────────────────────────────────────────────────────────
const ScheduleModal = ({ onClose }) => (
  <div style={{
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex",
    alignItems: "center", justifyContent: "center", padding: 24, zIndex: 100,
    backdropFilter: "blur(8px)",
  }} onClick={onClose}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: COLORS.deep, border: `1px solid ${COLORS.border}`, borderRadius: 20,
      padding: 36, maxWidth: 480, width: "100%",
    }}>
      <h2 style={{ fontSize: 24, fontWeight: 400, color: COLORS.textPrimary, margin: "0 0 8px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
        Schedule Your Briefing
      </h2>
      <p style={{ fontSize: 14, color: COLORS.textSecondary, marginBottom: 28, lineHeight: 1.6 }}>
        30 minutes with a CaseGlide litigation intelligence specialist. We recommend completing the assessment first for a personalized session.
      </p>
      {["Full Name", "Title", "Company", "Email"].map((field) => (
        <div key={field} style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, color: COLORS.textMuted, marginBottom: 6, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{field}</label>
          <input
            placeholder={field}
            style={{
              width: "100%", padding: "12px 16px", background: COLORS.surface,
              border: `1px solid ${COLORS.border}`, borderRadius: 10,
              color: COLORS.textPrimary, fontSize: 14, outline: "none", boxSizing: "border-box",
            }}
            onFocus={(e) => e.target.style.borderColor = COLORS.accent}
            onBlur={(e) => e.target.style.borderColor = COLORS.border}
          />
        </div>
      ))}
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button style={{
          flex: 1, padding: "14px", background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
          color: "#fff", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
        }}>
          Request Briefing
        </button>
        <button onClick={onClose} style={{
          padding: "14px 24px", background: "transparent", color: COLORS.textSecondary,
          border: `1px solid ${COLORS.border}`, borderRadius: 10, fontSize: 14, cursor: "pointer",
        }}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

// ─── Theme Toggle Component ─────────────────────────────────────────────────
const ThemeToggle = ({ theme, setTheme }) => {
  if (theme === "insurance") {
    return (
      <div style={{ position: "fixed", bottom: 8, right: 8, zIndex: 999 }}>
        <button onClick={() => setTheme("fortune500")} style={{
          ...w95button, padding: "3px 10px", fontSize: 10, display: "flex", alignItems: "center", gap: 4,
        }}>
          <span style={{ fontSize: 12 }}>💼</span> Switch to Fortune 500 Mode
        </button>
      </div>
    );
  }
  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 999, display: "flex", alignItems: "center", gap: 8 }}>
      <button onClick={() => setTheme("insurance")} style={{
        padding: "8px 16px", background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.border}`,
        borderRadius: 8, color: COLORS.textMuted, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        backdropFilter: "blur(10px)",
      }}>
        <span style={{ fontSize: 13 }}>🖥️</span> Insurance Company Mode
      </button>
    </div>
  );
};

// ─── Win95 Taskbar ──────────────────────────────────────────────────────────
const Win95Taskbar = ({ title }) => (
  <div style={{
    position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998,
    background: WIN95.silver, ...w95raised, padding: "2px 4px",
    display: "flex", alignItems: "center", gap: 4, height: 28,
  }}>
    <button style={{ ...w95raised, background: WIN95.silver, padding: "2px 8px", display: "flex", alignItems: "center", gap: 4, cursor: "pointer", borderRadius: 0 }}>
      <span style={{ fontSize: 12 }}>🪟</span>
      <span style={{ fontSize: 11, fontWeight: 700, fontFamily: WIN95.font }}>Start</span>
    </button>
    <div style={{ flex: 1 }}>
      <div style={{ ...w95sunken, padding: "2px 8px", maxWidth: 200 }}>
        <span style={{ fontSize: 10, fontFamily: WIN95.font }}>{title}</span>
      </div>
    </div>
    <div style={{ ...w95sunken, padding: "2px 8px" }}>
      <span style={{ fontSize: 10, fontFamily: WIN95.font }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  </div>
);

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState("landing");
  const [answers, setAnswers] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);
  const [theme, setTheme] = useState("fortune500");
  const isWin95 = theme === "insurance";

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{
        minHeight: "100vh",
        background: isWin95 ? WIN95.bg : COLORS.midnight,
        color: isWin95 ? WIN95.text : COLORS.textPrimary,
        fontFamily: isWin95 ? WIN95.font : "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        paddingBottom: isWin95 ? 36 : 0,
      }}>
        {!isWin95 && (
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        )}

        {isWin95 && (
          <style>{`
            * { image-rendering: pixelated; }
            ::-webkit-scrollbar { width: 16px; }
            ::-webkit-scrollbar-track { background: ${WIN95.silver}; border-left: 1px solid ${WIN95.btnShadow}; }
            ::-webkit-scrollbar-thumb { background: ${WIN95.silver}; ${Object.entries(w95raised).map(([k,v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`).join('; ')}; }
            ::selection { background: ${WIN95.navy}; color: white; }
          `}</style>
        )}

        {phase === "landing" && (
          <LandingPage
            onStart={() => setPhase("assessment")}
            onSchedule={() => setShowSchedule(true)}
          />
        )}
        {phase === "assessment" && (
          <AssessmentPage
            onComplete={(ans) => { setAnswers(ans); setPhase("results"); }}
          />
        )}
        {phase === "results" && (
          <ResultsPage
            answers={answers}
            onContinue={() => setPhase("briefing")}
          />
        )}
        {phase === "briefing" && (
          <BriefingPage
            answers={answers}
            onContinue={() => setPhase("post")}
          />
        )}
        {phase === "post" && (
          <PostBriefingPage answers={answers} />
        )}

        {showSchedule && <ScheduleModal onClose={() => setShowSchedule(false)} />}
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {isWin95 && <Win95Taskbar title="CaseGlide Executive Briefing.exe" />}
      </div>
    </ThemeContext.Provider>
  );
}
