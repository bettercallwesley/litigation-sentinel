"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import CaseFileRail from "./CaseFileRail";
import SectionVerdict from "./SectionVerdict";
import SectionEnvironment from "./SectionEnvironment";
import SectionMap from "./SectionMap";
import SectionInbox from "./SectionInbox";
import SectionCaseClerk from "./SectionCaseClerk";
import SectionChronicle from "./SectionChronicle";
import SectionChambers from "./SectionChambers";
import SectionPortfolio from "./SectionPortfolio";
import SectionClose from "./SectionClose";

// "The Conversion" - interactive prospect briefing page.
// Dark app theme with two light Sentinel bands (the map and the close),
// spined by the Case File Rail: EMAIL > UPDATE > TIMELINE > ANSWER > DECISION.

export default function ConversionPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.midnight,
        color: COLORS.textPrimary,
        fontFamily: FONTS.sans,
      }}
    >
      <style>{`
        @keyframes cvpTileIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cvp-main { padding-left: 44px; }
        .cvp-rail-desktop { display: flex; }
        .cvp-rail-mobile { display: none !important; }
        @media (max-width: 760px) {
          .cvp-main { padding-left: 0; padding-top: 36px; }
          .cvp-rail-desktop { display: none !important; }
          .cvp-rail-mobile { display: flex !important; }
          .cvp-inbox-split { flex-direction: column; }
          .cvp-inbox-list { width: 100% !important; border-right: none !important; max-height: 280px !important; }
          .cvp-clerk-split { flex-direction: column; }
        }
        @media (max-width: 430px) {
          /* Five labels + separators exceed narrow viewports; scroll, never clip. */
          .cvp-rail-mobile { justify-content: flex-start !important; overflow-x: auto; gap: 5px !important; padding: 0 12px; }
          .cvp-rail-mobile button { font-size: 10px !important; white-space: nowrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cvp-main * { animation: none !important; transition: none !important; }
        }
      `}</style>
      <CaseFileRail />
      <main className="cvp-main">
        <SectionVerdict />
        <SectionEnvironment />
        <SectionMap />
        <SectionInbox />
        <SectionCaseClerk />
        <SectionChronicle />
        <SectionChambers />
        <SectionPortfolio />
        <SectionClose />
      </main>
    </div>
  );
}
