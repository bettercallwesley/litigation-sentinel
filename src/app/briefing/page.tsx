"use client";

import React, { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import {
  LandingPage,
  AssessmentPage,
  ResultsPage,
  ScheduleModal,
} from "@/components/briefing";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { trackEvent } from "@/lib/track";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

type Phase = "landing" | "assessment" | "results";

function maturityFromAnswers(answers: Record<string, number>): number {
  const scores = Object.values(answers);
  if (scores.length === 0) return 1;
  const avg = scores.reduce((a, b) => a + b, 0) / ASSESSMENT_QUESTIONS.length;
  return Math.min(5, Math.max(1, Math.round(avg)));
}

function BriefingFlow() {
  // E1 wiring: ?src= names the surface that sent the reader here
  // (article end-card, homepage hero, nuclear-verdicts panel, LinkedIn).
  const searchParams = useSearchParams();
  const src = searchParams.get("src") || "direct";

  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showSchedule, setShowSchedule] = useState(false);
  const startedRef = useRef(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.midnight,
        color: COLORS.textPrimary,
        fontFamily: FONTS.sans,
        position: "relative",
      }}
    >
      {phase === "landing" && (
        <LandingPage
          onStart={() => {
            // Fires once at assessment entry, with the surface prop
            // (2-prop cap honored: src only).
            if (!startedRef.current) {
              startedRef.current = true;
              trackEvent("briefing_start", { src });
            }
            setPhase("assessment");
          }}
          onSchedule={() => setShowSchedule(true)}
        />
      )}
      {phase === "assessment" && (
        <AssessmentPage
          onComplete={(ans) => {
            setAnswers(ans);
            trackEvent("briefing_complete", {
              maturity: maturityFromAnswers(ans),
              src,
            });
            setPhase("results");
          }}
        />
      )}
      {phase === "results" && (
        <ResultsPage
          answers={answers}
          src={src}
          onSchedule={() => setShowSchedule(true)}
        />
      )}

      {showSchedule && (
        <ScheduleModal
          onClose={() => setShowSchedule(false)}
          answers={answers}
          source={phase}
        />
      )}

      <ThemeToggle />
    </div>
  );
}

export default function BriefingRoute() {
  // useSearchParams requires a Suspense boundary in Next 14.
  return (
    <Suspense fallback={null}>
      <BriefingFlow />
    </Suspense>
  );
}
