// ─── CaseGlide Design System Tokens ─────────────────────────────────────────
// All colors, fonts, spacing, and radius values for the entire platform.

// ─── Sentinel / Newsletter (Light Theme) ────────────────────────────────────
export const SENTINEL = {
  bg: "#FAFAF8",
  bgWarm: "#F5F3EF",
  bgDark: "#0A0E1A",
  ink: "#1A1A1A",
  inkLight: "#4A4A4A",
  inkMuted: "#8A8A8A",
  inkFaint: "#B8B8B8",
  surface: "#FFFFFF",
  surfaceDark: "#1A1F2E",
  accent: "#1B4D8F",
  accentLight: "#3B82F6",
  accentSoft: "rgba(27,77,143,0.06)",
  gold: "#C19A3E",
  goldSoft: "rgba(193,154,62,0.08)",
  emerald: "#2D7A5F",
  rose: "#B85450",
  amber: "#C48C2C",
  border: "#E8E6E1",
  borderDark: "#2A3142",
  sentinel: "#1B2B4A",
  sentinelAccent: "#C19A3E",
} as const;

// ─── Apps / Dark Theme (Briefing, Council, Trial) ───────────────────────────
export const COLORS = {
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
} as const;

// ─── Win95 Theme ────────────────────────────────────────────────────────────
export const WIN95 = {
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
} as const;

// Win95 beveled border helpers
export const w95raised = {
  borderTop: `2px solid ${WIN95.btnHighlight}`,
  borderLeft: `2px solid ${WIN95.btnHighlight}`,
  borderBottom: `2px solid ${WIN95.btnDkShadow}`,
  borderRight: `2px solid ${WIN95.btnDkShadow}`,
} as const;

export const w95sunken = {
  borderTop: `2px solid ${WIN95.btnShadow}`,
  borderLeft: `2px solid ${WIN95.btnShadow}`,
  borderBottom: `2px solid ${WIN95.btnHighlight}`,
  borderRight: `2px solid ${WIN95.btnHighlight}`,
} as const;

export const w95button = {
  ...w95raised,
  background: WIN95.btnFace,
  padding: "4px 16px",
  fontSize: 11,
  fontFamily: WIN95.font,
  cursor: "pointer",
  color: WIN95.text,
  outline: "none",
  borderRadius: 0,
} as const;

// ─── Typography ─────────────────────────────────────────────────────────────
export const FONTS = {
  serif: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif",
  sans: "'DM Sans Variable', 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono Variable', 'JetBrains Mono', 'SF Mono', monospace",
} as const;

// ─── Spacing Scale ──────────────────────────────────────────────────────────
export const SPACING = [4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80] as const;

// ─── Border Radius ──────────────────────────────────────────────────────────
export const RADIUS = {
  card: 14,
  button: 10,
  badge: 100,
  input: 8,
  win95: 0,
} as const;

// ─── Maturity Levels (Assessment) ───────────────────────────────────────────
export const MATURITY_LEVELS: Record<number, { label: string; color: string; glow: string; desc: string }> = {
  1: { label: "Foundational", color: COLORS.rose, glow: COLORS.roseGlow, desc: "Manual processes, limited visibility" },
  2: { label: "Developing", color: COLORS.amber, glow: COLORS.amberGlow, desc: "Some systems in place, fragmented data" },
  3: { label: "Established", color: COLORS.accent, glow: COLORS.accentGlow, desc: "Structured approach, some automation" },
  4: { label: "Advanced", color: COLORS.emerald, glow: COLORS.emeraldGlow, desc: "Integrated systems, data-driven decisions" },
  5: { label: "Transformative", color: COLORS.gold, glow: COLORS.goldGlow, desc: "AI-powered, predictive intelligence" },
};
