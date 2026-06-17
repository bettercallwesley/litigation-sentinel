"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import NuclearVerdictsHeatMap from "@/components/sentinel/NuclearVerdictsHeatMap";

// S2. THE MAP - light Sentinel band carrying the live heatmap, full ungated.
// isPreview is hard-set false and no onSubscribe/subscribeStatus are passed,
// so no subscribe affordance can render.

export default function SectionMap() {
  return (
    <section
      id="s2-map"
      style={{ background: SENTINEL.bg, padding: "88px 24px" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: SENTINEL.ink,
              textAlign: "center",
              margin: 0,
            }}
          >
            {"Where the verdicts landed."}
          </h2>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 17,
              color: SENTINEL.inkLight,
              textAlign: "center",
              margin: "14px auto 40px",
            }}
          >
            {"Live data. Hover any state. Click for the county detail."}
          </p>
        </FadeIn>

        <NuclearVerdictsHeatMap isPreview={false} />

        <FadeIn>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: 24,
              lineHeight: 1.5,
              color: SENTINEL.ink,
              textAlign: "center",
              maxWidth: 760,
              margin: "56px auto 0",
            }}
          >
            {"Every dot on that map has a paper trail. Before the verdict, there was a memo. Before the memo, there was an email. This is what the email looked like."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
