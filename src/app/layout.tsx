import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/globals.css";
import "@/styles/win95.css";

export const metadata: Metadata = {
  title: "Litigation Sentinel — Intelligence for Corporate Litigation Leaders",
  description: "A CaseGlide publication. Litigation strategy, technology, case analysis, and intelligence for Fortune 500 legal departments.",
  keywords: ["litigation", "legal technology", "CaseGlide", "corporate litigation", "legal intelligence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
