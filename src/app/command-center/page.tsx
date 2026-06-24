import type { Metadata } from "next";
import { ConversionPage } from "@/components/briefing-the-conversion";

// Litigation Intelligence Command Center: the private, gated prospect demo.
// Server component so it can carry metadata: noindex/nofollow, no canonical,
// linked from nowhere, no sitemap entry. Kept unlisted on purpose.

export const metadata: Metadata = {
  title: "Litigation Intelligence Command Center",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: null },
};

export default function CommandCenterRoute() {
  return <ConversionPage />;
}
