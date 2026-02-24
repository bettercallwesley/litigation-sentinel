"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { SubscribeBlock } from "@/components/sentinel";
import { SentinelFooter } from "@/components/sentinel";
import NuclearVerdictsHeatMap from "@/components/sentinel/NuclearVerdictsHeatMap";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { ISSUE } from "@/data/newsletter-articles";
import { ENGAGEMENT_STATS } from "@/data/engagement-stats";

export default function NuclearVerdictsPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setIsSubscribed(true);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* ─── Mini Masthead ─── */}
        <FadeIn delay={0}>
          <div
            style={{
              textAlign: "center",
              padding: "32px 0 16px",
              borderBottom: `3px double ${SENTINEL.sentinel}`,
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: SENTINEL.inkMuted,
                  fontFamily: FONTS.sans,
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                A CaseGlide Publication
              </div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontFamily: FONTS.serif,
                  fontWeight: 700,
                  color: SENTINEL.sentinel,
                  margin: "0 0 4px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Litigation Sentinel
              </h1>
            </a>
            <div
              style={{
                width: 36,
                height: 2,
                background: SENTINEL.sentinelAccent,
                margin: "8px auto",
              }}
            />
            <div
              style={{
                fontSize: 11,
                color: SENTINEL.inkFaint,
                fontFamily: FONTS.sans,
              }}
            >
              {ISSUE.date}
            </div>
          </div>
        </FadeIn>

        {/* ─── Breadcrumb ─── */}
        <FadeIn delay={50}>
          <div style={{ padding: "14px 0", display: "flex", alignItems: "center", gap: 6 }}>
            <a
              href="/"
              style={{
                fontSize: 11,
                color: SENTINEL.accent,
                fontFamily: FONTS.sans,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Sentinel Home
            </a>
            <span style={{ fontSize: 11, color: SENTINEL.inkFaint }}>/</span>
            <span style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              Nuclear Verdicts® Heat Map
            </span>
          </div>
        </FadeIn>

        {/* ─── Heat Map ─── */}
        <NuclearVerdictsHeatMap isPreview={!isSubscribed} />

        {/* ─── Subscribe Block (for non-subscribers) ─── */}
        {!isSubscribed && (
          <FadeIn delay={600}>
            <div
              id="subscribe"
              style={{
                margin: "32px 0",
                padding: "32px 24px",
                background: SENTINEL.bgWarm,
                borderRadius: 14,
                border: `1px solid ${SENTINEL.border}`,
                textAlign: "center",
              }}
            >
              {status === "success" ? (
                <>
                  <div
                    style={{
                      fontSize: 20,
                      fontFamily: FONTS.serif,
                      fontWeight: 600,
                      color: SENTINEL.sentinel,
                      marginBottom: 8,
                    }}
                  >
                    Welcome to Litigation Sentinel.
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: SENTINEL.inkLight,
                      fontFamily: FONTS.sans,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    The full Nuclear Verdicts® Intelligence Map is now unlocked.
                    Check your inbox for a welcome email.
                  </p>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: SENTINEL.sentinelAccent,
                      fontFamily: FONTS.sans,
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    Unlock Full Access
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontFamily: FONTS.serif,
                      fontWeight: 600,
                      color: SENTINEL.sentinel,
                      margin: "0 0 8px",
                    }}
                  >
                    Subscribe to Litigation Sentinel
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: SENTINEL.inkLight,
                      lineHeight: 1.6,
                      margin: "0 0 6px",
                      fontFamily: FONTS.sans,
                    }}
                  >
                    Get the full interactive Nuclear Verdicts® Heat Map with detailed state analytics,
                    trend data, and Judicial Hellhole® overlays — plus weekly litigation intelligence.
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: SENTINEL.inkMuted,
                      fontFamily: FONTS.sans,
                      margin: "0 0 16px",
                    }}
                  >
                    Join {ENGAGEMENT_STATS.subscriberCount.toLocaleString()} litigation leaders.
                  </p>
                  <form
                    onSubmit={handleSubscribe}
                    style={{
                      display: "flex",
                      gap: 8,
                      maxWidth: 420,
                      margin: "0 auto",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      style={{
                        flex: "1 1 200px",
                        padding: "10px 14px",
                        border: `1px solid ${SENTINEL.border}`,
                        borderRadius: 8,
                        fontSize: 13,
                        fontFamily: FONTS.sans,
                        background: SENTINEL.surface,
                        outline: "none",
                        opacity: status === "loading" ? 0.6 : 1,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      style={{
                        padding: "10px 20px",
                        background: "linear-gradient(135deg, #B85450, #922B28)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: status === "loading" ? "default" : "pointer",
                        fontFamily: FONTS.sans,
                        opacity: status === "loading" ? 0.6 : 1,
                      }}
                    >
                      {status === "loading" ? "Subscribing..." : "Unlock Heat Map"}
                    </button>
                  </form>
                  {status === "error" && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "#c0392b",
                        margin: "10px 0 0",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}
                </>
              )}
            </div>
          </FadeIn>
        )}

        {/* ─── General Subscribe Block ─── */}
        {isSubscribed && <SubscribeBlock delay={700} />}

        {/* ─── Footer ─── */}
        <SentinelFooter delay={750} />
      </div>

      <ThemeToggle />
    </div>
  );
}
