import type { Metadata } from "next";
import SubscribeClient from "./SubscribeClient";

const BASE_URL = "https://litigationsentinel.com";

export const metadata: Metadata = {
  title: "Subscribe to Litigation Sentinel",
  description:
    "The free weekly that names the firms, the lawyers, the judges, and the dollar figures. One trial-drama story plus the three things moving in litigation that week. Written for in-house legal and claims executives.",
  openGraph: {
    type: "website",
    title: "Subscribe to Litigation Sentinel",
    description:
      "The free weekly that names the firms, the lawyers, the judges, and the dollar figures. Written for in-house legal and claims executives.",
    url: `${BASE_URL}/subscribe`,
    siteName: "Litigation Sentinel",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe to Litigation Sentinel",
    description:
      "The free weekly that names the firms, the lawyers, the judges, and the dollar figures. Written for in-house legal and claims executives.",
  },
  alternates: {
    canonical: `${BASE_URL}/subscribe`,
  },
};

export default function SubscribePage() {
  return <SubscribeClient />;
}
