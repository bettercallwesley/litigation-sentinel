import { Metadata } from "next";
import { getArticleBySlug } from "@/data/newsletter-articles";
import DemoRequest from "@/components/sentinel/DemoRequest";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";

export const metadata: Metadata = {
  title: "See the software behind the reporting | Litigation Sentinel",
  description:
    "Sentinel covers the verdicts. CaseGlide, the company behind Sentinel, builds the software that helps legal departments and carriers see them coming.",
};

// Briefing-register demo flow (reconciled plan C2). The route stays /demo
// for plumbing stability; every user-facing string is briefing register and
// the string "Request a Demo" appears nowhere user-facing.
export default function DemoPage({
  searchParams,
}: {
  searchParams: { from?: string };
}) {
  const fromSlug = typeof searchParams.from === "string" ? searchParams.from : "";
  const fromTitle = fromSlug ? getArticleBySlug(fromSlug)?.title : undefined;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: SENTINEL.bg,
        fontFamily: FONTS.sans,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 560, width: "100%" }}>
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
              fontWeight: 500,
              marginBottom: 10,
            }}
          >
            A CaseGlide Publication
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              fontFamily: FONTS.serif,
              fontWeight: 700,
              color: SENTINEL.sentinel,
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            See the software behind the reporting
          </h1>
          <div
            style={{
              width: 40,
              height: 3,
              background: SENTINEL.sentinelAccent,
              margin: "0 auto",
            }}
          />
        </div>

        <DemoRequest fromSlug={fromSlug || undefined} fromTitle={fromTitle} />

        {/* Footer link back */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <a
            href="/"
            style={{
              fontSize: 12,
              color: SENTINEL.inkMuted,
              fontFamily: FONTS.sans,
              textDecoration: "none",
            }}
          >
            ← Back to Litigation Sentinel
          </a>
        </div>
      </div>
    </div>
  );
}
