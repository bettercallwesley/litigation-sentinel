import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "@/styles/globals.css";
import "@/styles/win95.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const BASE_URL = "https://litigationsentinel.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Litigation Sentinel — Intelligence for Corporate Litigation Leaders",
  description: "A CaseGlide publication. Litigation strategy, technology, case analysis, and intelligence for Fortune 500 legal departments.",
  keywords: ["litigation", "legal technology", "CaseGlide", "corporate litigation", "legal intelligence"],
  openGraph: {
    type: "website",
    title: "Litigation Sentinel",
    description: "Intelligence for Corporate Litigation Leaders. Strategy, technology, and case analysis for Fortune 500 legal departments.",
    url: BASE_URL,
    siteName: "Litigation Sentinel",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Litigation Sentinel",
    description: "Intelligence for Corporate Litigation Leaders. A CaseGlide publication.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
