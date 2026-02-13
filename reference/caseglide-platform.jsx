import { useState, useEffect } from "react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
const T = {
  bg: "#FAFAF8", bgWarm: "#F5F3EF", bgDark: "#0A0E1A",
  ink: "#1A1A1A", inkLight: "#4A4A4A", inkMuted: "#8A8A8A", inkFaint: "#B8B8B8",
  surface: "#FFFFFF", surfaceDark: "#1A1F2E",
  accent: "#1B4D8F", accentLight: "#3B82F6", accentSoft: "rgba(27,77,143,0.06)",
  gold: "#C19A3E", goldSoft: "rgba(193,154,62,0.08)",
  emerald: "#2D7A5F", rose: "#B85450", amber: "#C48C2C",
  border: "#E8E6E1", borderDark: "#2A3142",
  sentinel: "#1B2B4A", sentinelAccent: "#C19A3E",
  font: "'Source Serif 4', 'Georgia', serif",
  fontSans: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'JetBrains Mono', 'SF Mono', monospace",
};

// ─── Newsletter Content ─────────────────────────────────────────────────────
const ISSUE = {
  number: 12,
  date: "February 12, 2026",
  headline: "The Litigation Intelligence Era Is Here",
};

const FEATURED_ARTICLE = {
  tag: "Deep Dive",
  title: "Inside the 90-Day Activation: How One Legal Team Transformed Their Litigation Operations",
  subtitle: "A step-by-step look at how a Fortune 500 company went from quarterly attorney reports to real-time case intelligence — and what their first Trial proved about reducing spend by 15%.",
  readTime: "8 min read",
  linksTo: "council",
  trialLink: true,
};

const ARTICLES = [
  { section: "Litigation Strategy", tag: "Case Watch", title: "What the $42M Opioid MDL Bellwether Tells Us About Litigation Budgeting", subtitle: "The gap between initial reserves and actual outcomes widened to 340%. Here's what data-driven departments are doing differently.", readTime: "5 min" },
  { section: "Litigation Tech", tag: "Tools", title: "Top 10 Prompts for Getting Actionable Case Summaries from AI", subtitle: "The difference between a useless AI summary and one that changes your strategy comes down to how you ask. These prompts work across platforms.", readTime: "4 min" },
  { section: "Litigation Strategy", tag: "Analysis", title: "Nuclear Verdicts Are Up 28% — But the Real Risk Is in the Data You Don't Have", subtitle: "Verdict data alone doesn't predict exposure. The teams winning are combining Precedent analysis with real-time docket monitoring to identify risk before it escalates.", readTime: "6 min" },
  { section: "Litigation Tech", tag: "How-To", title: "How to Build a Litigation Intelligence Stack Without Replacing Your Claims System", subtitle: "The best implementations layer intelligence on top of existing systems. Here's the architecture that works — and the one mistake that derails it.", readTime: "7 min", linksTo: "council" },
  { section: "Litigation Strategy", tag: "Benchmark", title: "Outside Counsel Performance: What the Top 10% of Legal Departments Measure", subtitle: "Most companies track spend. The best track outcome quality, cycle time, and strategic compliance. Here's the scorecard they use.", readTime: "5 min" },
  { section: "Litigation Tech", tag: "How-To", title: "Top 5 Tools for Litigation Operations Teams in 2026", subtitle: "From case intake automation to AI-powered settlement analysis — the tools that are actually moving the needle for operations teams managing 100+ matters.", readTime: "4 min" },
];

const TRIAL_ARTICLE = {
  section: "Case Study",
  tag: "Results",
  title: "10 Cases, 30 Days: How a Litigation Trial Changed One CLO's Approach to Settlement Strategy",
  subtitle: "The before and after was stark — from 'waiting for the quarterly report' to 'we knew the optimal settlement range before mediation started.' Here's what happened.",
  readTime: "6 min",
  linksTo: "trial",
};

// ─── Components ─────────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, style = {} }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)", ...style }}>{children}</div>;
};

const SentinelMasthead = () => (
  <div style={{ textAlign: "center", padding: "48px 0 20px", borderBottom: `3px double ${T.sentinel}` }}>
    <div style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: T.inkMuted, fontFamily: T.fontSans, fontWeight: 500, marginBottom: 8 }}>A CaseGlide Publication · Vol. 1 · Issue {ISSUE.number}</div>
    <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontFamily: T.font, fontWeight: 700, color: T.sentinel, margin: "0 0 6px", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
      Litigation Sentinel
    </h1>
    <div style={{ width: 48, height: 3, background: T.sentinelAccent, margin: "10px auto 12px" }} />
    <div style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.fontSans, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      Intelligence for Corporate Litigation Leaders
    </div>
    <div style={{ fontSize: 11, color: T.inkFaint, fontFamily: T.fontSans, marginTop: 8 }}>{ISSUE.date}</div>
  </div>
);

const SectionLabel = ({ children, color = T.sentinel }) => (
  <span style={{ display: "inline-block", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color, fontFamily: T.fontSans, marginBottom: 6 }}>{children}</span>
);

const ArticleTag = ({ children }) => (
  <span style={{ display: "inline-block", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: T.sentinelAccent, fontFamily: T.fontSans, background: T.goldSoft, padding: "2px 8px", borderRadius: 3 }}>{children}</span>
);

const ArticleCard = ({ article, featured = false, onClick, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div onClick={onClick} style={{
      padding: featured ? "28px 0" : "20px 0",
      borderBottom: `1px solid ${T.border}`,
      cursor: onClick ? "pointer" : "default",
      transition: "background 0.2s",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: featured ? 10 : 6 }}>
        {article.section && <SectionLabel>{article.section}</SectionLabel>}
        <ArticleTag>{article.tag}</ArticleTag>
      </div>
      <h3 style={{
        fontSize: featured ? "clamp(20px, 3vw, 26px)" : 16,
        fontFamily: T.font, fontWeight: featured ? 600 : 500,
        color: T.ink, margin: "0 0 6px", lineHeight: 1.35,
        letterSpacing: "-0.01em",
      }}>{article.title}</h3>
      <p style={{
        fontSize: featured ? 14 : 13, color: T.inkLight,
        lineHeight: 1.65, margin: 0, fontFamily: T.fontSans,
      }}>{article.subtitle}</p>
      <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 11, color: T.inkMuted, fontFamily: T.fontSans }}>{article.readTime}</span>
        {onClick && <span style={{ fontSize: 11, color: T.accent, fontFamily: T.fontSans, fontWeight: 600 }}>Read →</span>}
      </div>
    </div>
  </FadeIn>
);

// Executive Briefing CTA (advertisement-style)
const BriefingCTA = ({ onNavigate }) => (
  <FadeIn delay={400}>
    <div onClick={() => onNavigate("briefing")} style={{
      margin: "32px 0", padding: "28px 24px", background: T.bgDark, borderRadius: 14,
      cursor: "pointer", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.sentinelAccent, fontFamily: T.fontSans, fontWeight: 600, marginBottom: 10 }}>From the Editors</div>
        <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontFamily: T.font, fontWeight: 500, color: "#F1F3F7", margin: "0 0 8px", lineHeight: 1.35 }}>
          Where Does Your Litigation Department Stand?
        </h3>
        <p style={{ fontSize: 13, color: "#8B95A8", lineHeight: 1.65, margin: "0 0 16px", fontFamily: T.fontSans, maxWidth: 480 }}>
          Take the 4-minute Litigation Intelligence Readiness Assessment. Six questions. Personalized results. A confidential look at what's possible.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "linear-gradient(135deg, #3B82F6, #1D4ED8)", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: T.fontSans }}>
          Begin Assessment →
        </div>
      </div>
    </div>
  </FadeIn>
);

// Navigation header for app pages
const AppHeader = ({ onBack, title }) => (
  <div style={{
    position: "sticky", top: 0, zIndex: 100, background: "rgba(250,250,248,0.92)",
    backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.border}`,
    padding: "12px 24px", display: "flex", alignItems: "center", gap: 12,
  }}>
    <button onClick={onBack} style={{
      padding: "6px 14px", background: "none", border: `1px solid ${T.border}`,
      borderRadius: 8, color: T.inkLight, fontSize: 12, cursor: "pointer", fontFamily: T.fontSans,
    }}>← Sentinel Home</button>
    <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.fontSans }}>{title}</span>
  </div>
);

// ─── Home / Newsletter Page ─────────────────────────────────────────────────
const HomePage = ({ onNavigate }) => (
  <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.fontSans }}>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
      <SentinelMasthead />

      {/* Top nav strip */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, padding: "14px 0", borderBottom: `1px solid ${T.border}`, flexWrap: "wrap" }}>
        {["Litigation Strategy", "Litigation Tech", "Case Watch", "How-To Guides"].map((cat, i) => (
          <span key={i} style={{ fontSize: 11, color: T.inkMuted, fontFamily: T.fontSans, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", fontWeight: 500 }}>{cat}</span>
        ))}
      </div>

      {/* Featured Article — links to Council */}
      <FadeIn delay={100}>
        <div onClick={() => onNavigate("council")} style={{ padding: "32px 0 24px", borderBottom: `1px solid ${T.border}`, cursor: "pointer" }}>
          <ArticleTag>{FEATURED_ARTICLE.tag}</ArticleTag>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontFamily: T.font, fontWeight: 600, color: T.sentinel, margin: "10px 0 10px", lineHeight: 1.25, letterSpacing: "-0.015em" }}>
            {FEATURED_ARTICLE.title}
          </h2>
          <p style={{ fontSize: 15, color: T.inkLight, lineHeight: 1.7, margin: "0 0 12px", fontFamily: T.fontSans }}>{FEATURED_ARTICLE.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, color: T.inkMuted }}>{FEATURED_ARTICLE.readTime}</span>
            <span style={{ fontSize: 11, color: T.accent, fontWeight: 600 }}>Read the full story →</span>
          </div>
        </div>
      </FadeIn>

      {/* First batch of articles */}
      {ARTICLES.slice(0, 3).map((a, i) => (
        <ArticleCard key={i} article={a} delay={180 + i * 60} onClick={a.linksTo ? () => onNavigate(a.linksTo) : undefined} />
      ))}

      {/* Executive Briefing CTA */}
      <BriefingCTA onNavigate={onNavigate} />

      {/* Trial article — naturally placed */}
      <ArticleCard article={TRIAL_ARTICLE} delay={500} onClick={() => onNavigate("trial")} />

      {/* Remaining articles */}
      {ARTICLES.slice(3).map((a, i) => (
        <ArticleCard key={i + 3} article={a} delay={560 + i * 60} onClick={a.linksTo ? () => onNavigate(a.linksTo) : undefined} />
      ))}

      {/* Subscribe section */}
      <FadeIn delay={700}>
        <div style={{ margin: "40px 0 32px", padding: "32px 24px", background: T.bgWarm, borderRadius: 12, border: `1px solid ${T.border}`, textAlign: "center" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.sentinelAccent, fontFamily: T.fontSans, fontWeight: 600, marginBottom: 8 }}>Stay Informed</div>
          <h3 style={{ fontSize: 20, fontFamily: T.font, fontWeight: 600, color: T.sentinel, margin: "0 0 8px" }}>Subscribe to Litigation Sentinel</h3>
          <p style={{ fontSize: 13, color: T.inkLight, lineHeight: 1.6, margin: "0 0 16px", fontFamily: T.fontSans }}>Weekly intelligence for litigation leaders. Strategy, technology, and the data that matters.</p>
          <div style={{ display: "flex", gap: 8, maxWidth: 400, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" style={{
              flex: "1 1 200px", padding: "10px 14px", border: `1px solid ${T.border}`, borderRadius: 8,
              fontSize: 13, fontFamily: T.fontSans, background: T.surface, outline: "none",
            }} />
            <button style={{
              padding: "10px 20px", background: T.sentinel, color: "#fff", border: "none",
              borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: T.fontSans,
            }}>Subscribe</button>
          </div>
        </div>
      </FadeIn>

      {/* CaseGlide Software Suite — subtle footer */}
      <FadeIn delay={750}>
        <div style={{ borderTop: `1px solid ${T.border}`, padding: "24px 0 0" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.inkFaint, fontFamily: T.fontSans, fontWeight: 500, marginBottom: 12, textAlign: "center" }}>CaseGlide Software Suite</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
            {[
              { id: "briefing", label: "Executive Briefing", desc: "Litigation readiness assessment", icon: "📋" },
              { id: "council", label: "Council Program", desc: "90-day activation platform", icon: "🏛️" },
              { id: "trial", label: "Trial", desc: "30-day proving ground", icon: "⚡" },
            ].map((app) => (
              <div key={app.id} onClick={() => onNavigate(app.id)} style={{
                padding: "14px 16px", background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10,
                cursor: "pointer", transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: 16, marginBottom: 4 }}>{app.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.ink, fontFamily: T.fontSans }}>{app.label}</div>
                <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: T.fontSans }}>{app.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <div style={{ marginTop: 48, padding: "20px 0", borderTop: `2px solid ${T.sentinel}`, textAlign: "center" }}>
        <div style={{ fontSize: 14, fontFamily: T.font, fontWeight: 600, color: T.sentinel, marginBottom: 4 }}>Litigation Sentinel</div>
        <div style={{ fontSize: 10, color: T.inkFaint, fontFamily: T.fontSans }}>Published by CaseGlide · www.LitigationSentinel.com</div>
        <div style={{ fontSize: 10, color: T.inkFaint, fontFamily: T.fontSans, marginTop: 2 }}>© 2026 CaseGlide, Inc. All rights reserved.</div>
      </div>
    </div>
  </div>
);

// ─── Embedded App Wrapper ───────────────────────────────────────────────────
// These simulate loading the actual apps inline
const EmbeddedBriefing = () => {
  // Placeholder for the actual Executive Briefing app
  return <div style={{ padding: 40, textAlign: "center", color: T.inkMuted, fontFamily: T.fontSans }}>
    <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
    <h2 style={{ fontFamily: T.font, color: T.ink, margin: "0 0 8px" }}>Executive Briefing</h2>
    <p style={{ fontSize: 14 }}>Litigation Intelligence Readiness Assessment</p>
    <p style={{ fontSize: 12, color: T.inkFaint, marginTop: 16 }}>In production, this loads the full Executive Briefing application.</p>
  </div>;
};

const EmbeddedCouncil = () => (
  <div style={{ padding: 40, textAlign: "center", color: T.inkMuted, fontFamily: T.fontSans }}>
    <div style={{ fontSize: 48, marginBottom: 16 }}>🏛️</div>
    <h2 style={{ fontFamily: T.font, color: T.ink, margin: "0 0 8px" }}>Council Program</h2>
    <p style={{ fontSize: 14 }}>90-Day Activation Platform</p>
    <p style={{ fontSize: 12, color: T.inkFaint, marginTop: 16 }}>In production, this loads the full Council Platform application.</p>
  </div>
);

const EmbeddedTrial = () => (
  <div style={{ padding: 40, textAlign: "center", color: T.inkMuted, fontFamily: T.fontSans }}>
    <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
    <h2 style={{ fontFamily: T.font, color: T.ink, margin: "0 0 8px" }}>Trial</h2>
    <p style={{ fontSize: 14 }}>30-Day Proving Ground</p>
    <p style={{ fontSize: 12, color: T.inkFaint, marginTop: 16 }}>In production, this loads the full Trial Platform application.</p>
  </div>
);

// ─── Main App ───────────────────────────────────────────────────────────────
export default function CaseGlidePlatform() {
  const [view, setView] = useState("home");

  const titles = {
    briefing: "Executive Briefing — Litigation Intelligence Readiness Assessment",
    council: "Council Program — 90-Day Activation Platform",
    trial: "Trial — 30-Day Proving Ground",
  };

  if (view === "home") {
    return <HomePage onNavigate={setView} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: T.bg }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      <AppHeader onBack={() => setView("home")} title={titles[view]} />
      {view === "briefing" && <EmbeddedBriefing />}
      {view === "council" && <EmbeddedCouncil />}
      {view === "trial" && <EmbeddedTrial />}
    </div>
  );
}
