"use client";

import React, { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import {
  LandingPage,
  AssessmentPage,
  ResultsPage,
  BriefingDetailPage,
  PostBriefingPage,
  ScheduleModal,
} from "@/components/briefing";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { trackEvent } from "@/lib/track";
import { ASSESSMENT_QUESTIONS } from "@/data/assessment-questions";

type Phase = "landing" | "assessment" | "results" | "briefing" | "post";

function maturityFromAnswers(answers: Record<string, number>): number {
  const scores = Object.values(answers);
  if (scores.length === 0) return 1;
  const avg = scores.reduce((a, b) => a + b, 0) / ASSESSMENT_QUESTIONS.length;
  return Math.min(5, Math.max(1, Math.round(avg)));
}

export default function BriefingRoute() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showSchedule, setShowSchedule] = useState(false);
  const [capturedEmail, setCapturedEmail] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.midnight,
        color: COLORS.textPrimary,
        fontFamily: FONTS.sans,
      }}
    >
      {phase === "landing" && (
        <LandingPage
          onStart={() => {
            trackEvent("briefing_start");
            setPhase("assessment");
          }}
          onSchedule={() => setShowSchedule(true)}
        />
      )}
      {phase === "assessment" && (
        <AssessmentPage
          onComplete={(ans) => {
            setAnswers(ans);
            trackEvent("briefing_complete", { maturity: maturityFromAnswers(ans) });
            setPhase("results");
          }}
        />
      )}
      {phase === "results" && (
        <ResultsPage
          answers={answers}
          onContinue={() => setPhase("briefing")}
          onEmailCaptured={(email) => setCapturedEmail(email)}
        />
      )}
      {phase === "briefing" && (
        <BriefingDetailPage
          answers={answers}
          onContinue={() => setPhase("post")}
        />
      )}
      {phase === "post" && (
        <PostBriefingPage
          answers={answers}
          capturedEmail={capturedEmail}
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
