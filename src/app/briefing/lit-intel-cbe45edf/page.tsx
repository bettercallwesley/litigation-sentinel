import type { Metadata } from "next";
import { ConversionPage } from "@/components/briefing-the-conversion";

// Private prospect briefing. Server component so it can carry metadata:
// noindex/nofollow, no canonical, linked from nowhere, no sitemap entry.

export const metadata: Metadata = {
  title: "Briefing",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: null },
};

export default function BriefingTheConversionRoute() {
  return <ConversionPage />;
}
