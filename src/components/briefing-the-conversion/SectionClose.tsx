"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";

// S8. THE CONVERSION, STATED PLAINLY - light Sentinel close with soft CTA.

export default function SectionClose() {
  return (
    <section id="s8-close" style={{ background: SENTINEL.bg, padding: "104px 24px 72px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 13,
              letterSpacing: "0.2em",
              color: SENTINEL.sentinelAccent,
            }}
          >
            {"EMAIL > UPDATE > TIMELINE > ANSWER > DECISION"}
          </div>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 17,
              lineHeight: 1.65,
              color: SENTINEL.ink,
              maxWidth: 700,
              margin: "20px auto 0",
            }}
          >
            {"That is the whole product. Emails and memos go in. Litigation intelligence comes out. Decisions happen while they still change the outcome."}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            style={{
              borderTop: `1px solid ${SENTINEL.border}`,
              margin: "56px auto 0",
              paddingTop: 40,
              maxWidth: 720,
            }}
          >
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7, color: SENTINEL.inkLight, margin: 0 }}>
              {"Thousands of defense attorneys and hundreds of firms use CaseGlide daily. Attorneys prefer it because it replaces lengthy email reports with structured updates that take less time. We've never had a firm refuse to use it."}
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7, color: SENTINEL.inkLight, margin: "14px 0 0" }}>
              {"CaseGlide was founded by Wesley Todd, a practicing insurance defense attorney, because the tools connecting carriers and their outside counsel didn't exist."}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(26px, 3.4vw, 36px)",
              lineHeight: 1.3,
              color: SENTINEL.ink,
              margin: "72px auto 36px",
              maxWidth: 720,
            }}
          >
            {"If this is the problem you've been describing, the next step is small."}
          </h2>

          <div
            className="cvp-cta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <div
              style={{
                background: SENTINEL.surface,
                border: `1px solid ${SENTINEL.border}`,
                borderRadius: 14,
                padding: 28,
              }}
            >
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.18em", color: SENTINEL.inkMuted, marginBottom: 12 }}>
                {"OPTION ONE"}
              </div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.6, color: SENTINEL.ink, margin: 0 }}>
                {"Reply to Sarah's email. Tell her which screen you want to see with your own numbers on it."}
              </p>
            </div>
            <a
              href="mailto:wesley@caseglide.com?subject=15%20minutes"
              style={{
                background: SENTINEL.surface,
                border: `1px solid ${SENTINEL.border}`,
                borderRadius: 14,
                padding: 28,
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.18em", color: SENTINEL.inkMuted, marginBottom: 12 }}>
                {"OPTION TWO"}
              </div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.6, color: SENTINEL.ink, margin: 0 }}>
                {"Or take 15 minutes with Wes Todd, CaseGlide's founder. No deck. He'll drive the live system."}
              </p>
              <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.08em", color: SENTINEL.accent, marginTop: 14 }}>
                {"wesley@caseglide.com"}
              </div>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={350}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              lineHeight: 1.7,
              color: SENTINEL.inkMuted,
              marginTop: 88,
            }}
          >
            {"Prepared by Litigation Sentinel, a CaseGlide publication. Demonstration case data is illustrative. Nuclear Verdict is a registered trademark of Tyson & Mendes LLP."}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
