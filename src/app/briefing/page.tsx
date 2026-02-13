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

type Phase = "landing" | "assessment" | "results" | "briefing" | "post";

export default function BriefingRoute() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showSchedule, setShowSchedule] = useState(false);

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
          onStart={() => setPhase("assessment")}
          onSchedule={() => setShowSchedule(true)}
        />
      )}
      {phase === "assessment" && (
        <AssessmentPage
          onComplete={(ans) => {
            setAnswers(ans);
            setPhase("results");
          }}
        />
      )}
      {phase === "results" && (
        <ResultsPage
          answers={answers}
          onContinue={() => setPhase("briefing")}
        />
      )}
      {phase === "briefing" && (
        <BriefingDetailPage
          answers={answers}
          onContinue={() => setPhase("post")}
        />
      )}
      {phase === "post" && <PostBriefingPage answers={answers} />}

      {showSchedule && (
        <ScheduleModal onClose={() => setShowSchedule(false)} />
      )}

      <ThemeToggle />
    </div>
  );
}
