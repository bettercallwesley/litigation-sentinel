import { notFound } from "next/navigation";
import { verifyResultsToken } from "@/lib/resultsToken";
import { getLatestAssessment } from "@/lib/assessmentCapture";
import {
  firstNameFromEmail,
  levelDescriptor,
  pillarBars,
  weakestLabels,
} from "@/lib/assessmentView";

// Node runtime (node:crypto + Blob SDK) and always dynamic (results are read
// live per request so a retake shows immediately).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SITE_ORIGIN = "https://www.litigationsentinel.com";

export default async function ResultsPage({
  params,
  searchParams,
}: {
  params: { token: string };
  searchParams: { email?: string };
}) {
  const email = (searchParams.email || "").toLowerCase().trim();
  const token = params.token;

  // The token is the credential. No email query param, or a token that does not
  // match it, is a clean 404 (never leak whether an email exists).
  if (!email || !verifyResultsToken(email, token)) {
    notFound();
  }

  const result = await getLatestAssessment(email);
  if (!result) {
    notFound();
  }

  const firstName = firstNameFromEmail(email);
  const level = result.maturity_level;
  const descriptor = levelDescriptor(level);
  const bars = pillarBars(result);
  const weakest = weakestLabels(result);
  const pdfHref = `/results/${token}/pdf?email=${encodeURIComponent(email)}`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "#e6edf6",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: "48px 20px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p style={{ letterSpacing: 2, fontSize: 12, color: "#7f9cc0", margin: 0 }}>
          LITIGATION SENTINEL
        </p>
        <h1 style={{ fontSize: 30, fontWeight: 700, margin: "10px 0 6px" }}>
          Your litigation readiness results
        </h1>
        <p style={{ fontSize: 16, color: "#a9b8cc", margin: 0 }}>
          {firstName}, here is where your program stands today.
        </p>

        <section
          style={{
            marginTop: 32,
            padding: 28,
            borderRadius: 16,
            background: "linear-gradient(135deg,#132038,#0f1830)",
            border: "1px solid #22314f",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, color: "#7f9cc0", letterSpacing: 1 }}>
            MATURITY LEVEL
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#4da3ff" }}>
            {level}
            <span style={{ fontSize: 26, color: "#6f83a0" }}> / 5</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>
            {`Level ${level}: ${descriptor.title}`}
          </div>
          <p style={{ fontSize: 15, color: "#a9b8cc", maxWidth: 520, margin: "12px auto 0" }}>
            {descriptor.blurb}
          </p>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>By capability</h2>
          {bars.map((b) => (
            <div key={b.label} style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  marginBottom: 6,
                }}
              >
                <span>{b.label}</span>
                <span style={{ color: "#7f9cc0" }}>{b.score.toFixed(1)} / 5</span>
              </div>
              <div style={{ height: 10, background: "#1a2740", borderRadius: 6 }}>
                <div
                  style={{
                    width: `${b.pct}%`,
                    height: "100%",
                    borderRadius: 6,
                    background: "linear-gradient(90deg,#2f6fd0,#4da3ff)",
                  }}
                />
              </div>
            </div>
          ))}
        </section>

        {weakest.length > 0 && (
          <section
            style={{
              marginTop: 24,
              padding: 20,
              borderRadius: 12,
              background: "#121c30",
              border: "1px solid #22314f",
            }}
          >
            <div style={{ fontSize: 13, color: "#7f9cc0", letterSpacing: 1, marginBottom: 10 }}>
              WHERE THE FASTEST GAINS ARE
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, color: "#cdd9e8" }}>
              {weakest.map((w) => (
                <li key={w} style={{ marginBottom: 6 }}>
                  {w}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={pdfHref}
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: 10,
              background: "#4da3ff",
              color: "#08111f",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Download one-page PDF
          </a>
          <a
            href={`${SITE_ORIGIN}/briefing`}
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: 10,
              background: "transparent",
              color: "#e6edf6",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: 15,
              border: "1px solid #35507e",
            }}
          >
            Schedule a review of these results
          </a>
        </section>

        <p style={{ marginTop: 40, fontSize: 12, color: "#6f83a0" }}>
          Confidential to {email}. This page reflects your most recent assessment and updates if
          you retake it.
        </p>
      </div>
    </main>
  );
}
