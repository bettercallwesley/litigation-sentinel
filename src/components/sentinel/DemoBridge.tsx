"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { trackEvent } from "@/lib/track";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

interface DemoBridgeProps {
  slug: string;
}

/**
 * Per-article bridge CTA (reconciled plan C2). Links to /demo?from=<slug>
 * and forwards any UTM params so the demo page can continue the story the
 * reader just finished. Placement on article pages is coordinated with
 * Workstream B (article CTA real estate is shared); this component carries
 * the canonical copy and wiring.
 */
export default function DemoBridge({ slug }: DemoBridgeProps) {
  const searchParams = useSearchParams();

  const params = new URLSearchParams({ from: slug });
  for (const key of UTM_KEYS) {
    const value = searchParams?.get(key);
    if (value) params.set(key, value);
  }
  const href = `/demo?${params.toString()}`;

  return (
    <div
      style={{
        margin: "32px 0",
        padding: "20px 24px",
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderLeft: `3px solid ${SENTINEL.sentinelAccent}`,
        borderRadius: 10,
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: SENTINEL.ink,
          lineHeight: 1.6,
          margin: "0 0 12px",
          fontFamily: FONTS.sans,
        }}
      >
        CaseGlide, the company behind Sentinel, builds the software that helps legal departments
        and carriers see these patterns forming in their own portfolio.
      </p>
      <a
        href={href}
        onClick={() => trackEvent("demo_click", { page: `/article/${slug}` })}
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: SENTINEL.sentinel,
          fontFamily: FONTS.sans,
          textDecoration: "underline",
        }}
      >
        Request an executive briefing
      </a>
    </div>
  );
}
