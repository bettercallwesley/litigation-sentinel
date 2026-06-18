"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import ThemeToggle from "@/components/shared/ThemeToggle";
import SentinelFooter from "@/components/sentinel/SentinelFooter";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";
import { ENGAGEMENT_STATS } from "@/data/engagement-stats";

const VALUE_PROPS = [
  "Every issue names the firms, the lawyers, the judges, and the dollar figures behind the verdict.",
  "Subscribe and the Nuclear Verdicts heat map unlocks, with all-50-state drill-downs.",
  "Court-reporter prose, no consultant filler. One trial story plus the three things moving in litigation that week.",
  "A five-minute weekly read built for GCs, heads of litigation, and claims leaders.",
];

export default function SubscribeClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "subscribe-page",
          slug: "/subscribe",
          attribution: getAttribution(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      // Unlock only on the confirmed 2xx (CONTRARIAN-4); a subscriber from
      // /subscribe is never re-gated on the heat map (WES-PROXY-8).
      try {
        localStorage.setItem("ls_subscribed", "1");
      } catch {}
      trackEvent("subscribe_submit", { page: "/subscribe", gate_type: "subscribe-page" }, { email });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: SENTINEL.bg,
        fontFamily: FONTS.sans,
        position: "relative",
        overflow: "hidden",
        padding: "56px 24px 64px",
      }}
    >
      {/* Background glow effects, recolored for the light theme */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "18%",
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(27,77,143,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          right: "14%",
          width: 360,
          height: 360,
          background: "radial-gradient(circle, rgba(193,154,62,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 580, width: "100%", margin: "0 auto", position: "relative" }}>
        {/* Brand line + hero headline */}
        <FadeIn delay={0}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
                fontWeight: 500,
                marginBottom: 18,
              }}
            >
              A CaseGlide Publication
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 48px)",
                fontFamily: FONTS.serif,
                fontWeight: 700,
                color: SENTINEL.sentinel,
                margin: "0 0 18px",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              Litigation intelligence
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${SENTINEL.accent}, ${SENTINEL.sentinelAccent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                with names in it.
              </span>
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
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={150}>
          <p
            style={{
              fontSize: 16,
              color: SENTINEL.inkLight,
              lineHeight: 1.7,
              margin: "0 0 32px",
              fontFamily: FONTS.sans,
              textAlign: "center",
            }}
          >
            Litigation Sentinel is the free weekly read by in-house legal and claims executives.
            Each issue is one trial-drama story plus the three things moving in litigation that week.
            Nuclear verdicts, bad-faith expansions, litigation-funding disclosure, AI court rulings.
            Named firms, named judges, real dollar figures. No paywall.
          </p>
        </FadeIn>

        {/* Card with value props + form */}
        <FadeIn delay={300}>
          <div
            style={{
              background: SENTINEL.surface,
              border: `1px solid ${SENTINEL.border}`,
              borderRadius: 16,
              padding: "36px 36px 32px",
            }}
          >
            {status === "success" ? (
              /* Success panel */
              <div style={{ textAlign: "center", padding: "12px 0" }}>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: SENTINEL.sentinelAccent,
                    fontFamily: FONTS.sans,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  Welcome aboard
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontFamily: FONTS.serif,
                    fontWeight: 600,
                    color: SENTINEL.sentinel,
                    marginBottom: 12,
                  }}
                >
                  You&apos;re subscribed.
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: SENTINEL.inkLight,
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: FONTS.sans,
                  }}
                >
                  Check your inbox for a welcome from Litigation Sentinel. The Nuclear Verdicts heat
                  map is unlocked the next time you open one of our articles.
                </p>
              </div>
            ) : (
              <>
                {/* Value props */}
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 28px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {VALUE_PROPS.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: 14.5,
                        color: SENTINEL.ink,
                        fontFamily: FONTS.sans,
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: SENTINEL.sentinelAccent,
                          marginTop: 7,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Social proof */}
                <div
                  style={{
                    fontSize: 13,
                    color: SENTINEL.sentinelAccent,
                    fontFamily: FONTS.sans,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    textAlign: "center",
                    margin: "0 0 20px",
                  }}
                >
                  Join {ENGAGEMENT_STATS.subscriberCount.toLocaleString()} litigation leaders who read it weekly.
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      required
                      style={{
                        flex: "1 1 200px",
                        padding: "12px 16px",
                        border: `1px solid ${SENTINEL.border}`,
                        borderRadius: 8,
                        fontSize: 14,
                        fontFamily: FONTS.sans,
                        background: SENTINEL.bg,
                        color: SENTINEL.ink,
                        outline: "none",
                        opacity: status === "loading" ? 0.6 : 1,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      style={{
                        flex: "0 0 auto",
                        padding: "12px 24px",
                        background: SENTINEL.sentinel,
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: status === "loading" ? "default" : "pointer",
                        fontFamily: FONTS.sans,
                        opacity: status === "loading" ? 0.6 : 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {status === "loading" ? "Subscribing..." : "Subscribe Free"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p
                      style={{
                        fontSize: 12,
                        color: SENTINEL.rose,
                        margin: "8px 0 0",
                        fontFamily: FONTS.sans,
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}
                </form>

                {/* Trust line */}
                <p
                  style={{
                    fontSize: 11,
                    color: SENTINEL.inkMuted,
                    lineHeight: 1.6,
                    margin: "16px 0 0",
                    fontFamily: FONTS.sans,
                    textAlign: "center",
                  }}
                >
                  No spam. Unsubscribe anytime. Read by litigation leaders at F500 legal departments
                  and national insurers.
                </p>
              </>
            )}
          </div>
        </FadeIn>

        {/* House chrome */}
        <FadeIn delay={450}>
          <div style={{ marginTop: 48 }}>
            <SentinelFooter delay={0} />
          </div>
        </FadeIn>
      </div>

      <ThemeToggle />
    </div>
  );
}
