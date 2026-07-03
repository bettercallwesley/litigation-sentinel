"use client";

import React, { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import {
  LandingPage,
  AssessmentPage,
  ResultsPage,
  PostBriefingPage,
  ScheduleModal,
  BriefingRail,
} from "@/components/briefing";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { trackEvent } from "@/lib/track";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

type Phase = "landing" | "assessment" | "results" | "next";

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
  // F1 email-state lift: ResultsPage captures the work email at the unseal gate;
  // PostBriefingPage needs it so a program pick auto-fires the notification
  // without a second email prompt.
  const [capturedEmail, setCapturedEmail] = useState<string | null>(null);
  const startedRef = useRef(false);

  // Phase rail index: CONTEXT(0) / ASSESSMENT(1) / RESULTS(2) / NEXT(3).
  // The program selector (PostBriefingPage) IS the NEXT phase; opening the
  // schedule modal also advances the rail to NEXT.
  const activeIndex =
    phase === "next" || showSchedule
      ? 3
      : phase === "landing"
        ? 0
        : phase === "assessment"
          ? 1
          : 2;

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
      <style>{`
        .brief-main { padding-left: 44px; }
        .brief-rail-desktop { display: flex; }
        .brief-rail-mobile { display: none !important; }
        @media (max-width: 760px) {
          .brief-main { padding-left: 0; padding-top: 36px; }
          .brief-rail-desktop { display: none !important; }
          .brief-rail-mobile { display: flex !important; }
        }
        @media (max-width: 430px) {
          .brief-rail-mobile { justify-content: flex-start !important; overflow-x: auto; gap: 5px !important; padding: 0 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .brief-main *, .brief-rail-desktop *, .brief-rail-mobile * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <BriefingRail activeIndex={activeIndex} />

      <main className="brief-main">
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
          onEmailCaptured={(email) => setCapturedEmail(email)}
          onAdvance={() => setPhase("next")}
        />
      )}
      {phase === "next" && (
        <PostBriefingPage
          answers={answers}
          capturedEmail={capturedEmail}
          onSchedule={() => setShowSchedule(true)}
        />
      )}
      </main>

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
