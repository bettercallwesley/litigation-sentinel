"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { useCountUp, useInViewOnce, useReducedMotion } from "@/lib/interactive";
import { NOTABLE_VERDICTS, NotableVerdict } from "@/data/nuclear-verdicts";

/**
 * E3 Nuclear Verdicts Atlas — slim. Five self-attributing 16:9 case-file
 * vignette panels rendered below the heatmap, plus the ?state=<XX> deep-link
 * arrival (auto-scroll to the panel, one gold pulse on its border, count-up
 * on entry). The heatmap, tier legend, and real subscriber gate are untouched.
 *
 * Theme note: the spec asks for a dark Tricura product frame; the Atlas page
 * itself is the light editorial surface. To honor BOTH the spec and the
 * no-theme-mixing doctrine, each vignette is a self-contained dark frame (the
 * same contained-card pattern as the E2 share frame and BriefingBridge), not a
 * page-theme switch.
 *
 * Honest numbers: every figure, county, year, and source is read from the
 * NOTABLE_VERDICTS array (sourced). The drama headline is the only authored
 * copy and traces to the same row's detail. Placeholder largestVerdictCase
 * fields are never touched (Veto 3).
 */

interface Vignette {
  caseName: string; // key into NOTABLE_VERDICTS (single source of truth)
  drama: string; // serif one-line trial-drama headline, traces to row.detail
}

// Five states, chosen for the strongest SOURCED 2025 verdicts (Veto 3 governs
// over strict ATRA rank); TX/Mendez is mandatory (Part 5); CA carries the ATRA
// top-5 hellhole slot. All five are distinct states, 2025, named county/dollar.
const SELECTED: Vignette[] = [
  {
    caseName: "Mendez v. Koozies Icehouse",
    drama: "A bar over-served one customer. The jury answered with $831 million.",
  },
  {
    caseName: "Barnes v. Bayer AG / Roundup",
    drama: "A weed killer, a cancer diagnosis, and the largest verdict of 2025.",
  },
  {
    caseName: "Craft v. Johnson & Johnson (Talc)",
    drama: "Talc, mesothelioma, and a billion and a half dollars out of Baltimore.",
  },
  {
    caseName: "Zancanella v. Jordan Valley Medical Center",
    drama: "A delivery-room error, a brain-injured newborn, a $951 million reckoning.",
  },
  {
    caseName: "Slagel v. Liberty Mutual (Age Discrimination)",
    drama: "The largest age-discrimination verdict in U.S. history, out of Los Angeles.",
  },
];

const DATA_THROUGH = "December 2025";

function resolve(v: Vignette): (NotableVerdict & { drama: string }) | null {
  const row = NOTABLE_VERDICTS.find((n) => n.caseName === v.caseName);
  if (!row) return null;
  return { ...row, drama: v.drama };
}

function formatCounting(value: number): string {
  // value is in millions
  if (value >= 1000) return `$${(value / 1000).toFixed(2)}B`;
  return `$${Math.round(value)}M`;
}

function VignettePanel({
  v,
  pulsing,
}: {
  v: NotableVerdict & { drama: string };
  pulsing: boolean;
}) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.4);
  const counted = useCountUp(v.amount, inView, 1600, reduced);
  const display = inView ? formatCounting(counted) : formatCounting(0);

  return (
    <div
      ref={ref}
      id={`state-${v.state}`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        background: SENTINEL.sentinel,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(20px, 3.6vw, 34px)",
        boxShadow: pulsing
          ? `0 0 0 3px ${SENTINEL.gold}, 0 0 32px 2px rgba(193,154,62,0.5)`
          : "0 0 0 0 rgba(193,154,62,0)",
        transition: reduced ? "none" : "box-shadow 0.6s ease",
      }}
    >
      {/* kicker: county, state, year */}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "clamp(9px, 1.4vw, 12px)",
          letterSpacing: "0.22em",
          color: SENTINEL.gold,
          textTransform: "uppercase",
        }}
      >
        {v.jurisdiction}, {v.state}. {v.year}.
      </div>

      {/* count-up dollar */}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "clamp(34px, 8vw, 76px)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
      >
        {display}
      </div>

      {/* drama headline */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: "clamp(15px, 2.6vw, 22px)",
          fontWeight: 600,
          color: "rgba(255,255,255,0.94)",
          lineHeight: 1.3,
          maxWidth: "94%",
        }}
      >
        {v.drama}
      </div>

      {/* footer: wordmark + URL microline (self-attribution) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          fontFamily: FONTS.mono,
          fontSize: "clamp(8.5px, 1.2vw, 11px)",
          letterSpacing: "0.1em",
        }}
      >
        <span style={{ color: SENTINEL.gold, textTransform: "uppercase", letterSpacing: "0.2em" }}>
          Litigation Sentinel
        </span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          litigationsentinel.com/nuclear-verdicts
        </span>
      </div>
    </div>
  );
}

export default function NuclearVerdictVignettes() {
  const searchParams = useSearchParams();
  const stateParam = (searchParams?.get("state") || "").toUpperCase();
  const [pulseState, setPulseState] = useState<string | null>(null);

  const resolved = SELECTED.map(resolve).filter(Boolean) as Array<
    NotableVerdict & { drama: string }
  >;

  // Deep-link arrival: scroll to the matching panel, fire one gold pulse.
  // Poll for the panel element — the FadeIn wrapper mounts it on a delay, so a
  // fixed-timeout scroll can fire before the node exists. Only mark handled
  // after a successful scroll so a too-early miss retries.
  const handled = useRef(false);
  useEffect(() => {
    if (handled.current || !stateParam) return;
    const match = resolved.find((r) => r.state === stateParam);
    if (!match) return;
    let tries = 0;
    let pulseTimer = 0;
    const tryScroll = () => {
      const el = document.getElementById(`state-${stateParam}`);
      if (!el) {
        if (tries++ < 30) window.setTimeout(tryScroll, 100);
        return;
      }
      handled.current = true;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setPulseState(stateParam);
      pulseTimer = window.setTimeout(() => setPulseState(null), 1800);
    };
    const t = window.setTimeout(tryScroll, 400);
    return () => {
      window.clearTimeout(t);
      if (pulseTimer) window.clearTimeout(pulseTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateParam]);

  if (resolved.length === 0) return null;

  return (
    <section style={{ margin: "20px 0 8px" }} aria-label="Notable 2025 nuclear verdicts">
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: "0.22em",
          color: SENTINEL.sentinelAccent,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        Notable Verdicts of 2025
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 12,
          color: SENTINEL.inkMuted,
          marginBottom: 18,
        }}
      >
        Data through {DATA_THROUGH}. Each figure traces to a named, sourced verdict.
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {resolved.map((v) => (
          <VignettePanel key={v.state} v={v} pulsing={pulseState === v.state} />
        ))}
      </div>
    </section>
  );
}
