"use client";

import React, { useState, useRef, useEffect } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { SubscribeBlock } from "@/components/sentinel";
import { SentinelFooter } from "@/components/sentinel";
import NuclearVerdictsHeatMap from "@/components/sentinel/NuclearVerdictsHeatMap";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { ISSUE } from "@/data/newsletter-articles";
import { ENGAGEMENT_STATS } from "@/data/engagement-stats";

export default function NuclearVerdictsPage() {
  const [isSubscribed, setIsSubscribed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ls_subscribed") === "1";
    }
    return false;
  });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(() => {
    if (typeof window !== "undefined" && localStorage.getItem("ls_subscribed") === "1") {
      return "success";
    }
    return "idle";
  });
  const [errorMsg, setErrorMsg] = useState("");

  // ─── Scroll & CTA Visibility Tracking ───
  const sessionId = useRef(Math.random().toString(36).substring(2)).current;
  const firedEvents = useRef(new Set<string>());
  const subscribeBarRef = useRef<HTMLDivElement>(null);
  const gateCtaRef = useRef<HTMLDivElement>(null);
  const briefingCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fireEvent(event: string, data?: Record<string, unknown>) {
      const key = data ? `${event}:${JSON.stringify(data)}` : event;
      if (firedEvents.current.has(key)) return;
      firedEvents.current.add(key);
      fetch("/api/track-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, sessionId, data: { sessionId, ...data } }),
      }).catch(() => {});
    }

    // IntersectionObserver for CTA visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el === subscribeBarRef.current) fireEvent("above-fold-subscribe-visible");
          if (el === gateCtaRef.current) fireEvent("gate-cta-visible");
          if (el === briefingCtaRef.current) fireEvent("briefing-cta-visible");
        });
      },
      { threshold: 0.5 }
    );

    if (subscribeBarRef.current) observer.observe(subscribeBarRef.current);
    if (gateCtaRef.current) observer.observe(gateCtaRef.current);
    if (briefingCtaRef.current) observer.observe(briefingCtaRef.current);

    // Scroll depth tracking
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      for (const milestone of [25, 50, 75, 100]) {
        if (pct >= milestone) {
          fireEvent("scroll-depth", { depth: milestone });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sessionId]);

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
      localStorage.setItem("ls_subscribed", "1");

      // Fire-and-forget: notify via track-event
      fetch("/api/track-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "heatmap-subscribe", data: { email } }),
      }).catch(() => {});
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

        {/* ─── Above-Fold Subscribe Bar ─── */}
        {!isSubscribed && status !== "success" && (
          <FadeIn delay={100}>
            <div
              ref={subscribeBarRef}
              style={{
                background: SENTINEL.bgWarm,
                borderRadius: 14,
                padding: "20px 24px",
                marginBottom: 20,
                border: `1px solid ${SENTINEL.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 280px" }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontFamily: FONTS.serif,
                      fontWeight: 600,
                      color: SENTINEL.sentinel,
                      marginBottom: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    Unlock the full 50-state interactive heat map
                  </div>
                  <a
                    href="/briefing"
                    style={{
                      fontSize: 12,
                      fontFamily: FONTS.sans,
                      color: SENTINEL.accent,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    Or take the free Executive Briefing assessment &rarr;
                  </a>
                </div>
                <form
                  onSubmit={handleSubscribe}
                  style={{
                    display: "flex",
                    gap: 8,
                    flex: "0 1 auto",
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    style={{
                      padding: "9px 14px",
                      border: `1px solid ${SENTINEL.border}`,
                      borderRadius: 8,
                      fontSize: 13,
                      fontFamily: FONTS.sans,
                      background: SENTINEL.surface,
                      outline: "none",
                      width: 200,
                      opacity: status === "loading" ? 0.6 : 1,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      padding: "9px 18px",
                      background: "linear-gradient(135deg, #B85450, #922B28)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: status === "loading" ? "default" : "pointer",
                      fontFamily: FONTS.sans,
                      opacity: status === "loading" ? 0.6 : 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {status === "loading" ? "..." : "Unlock"}
                  </button>
                </form>
              </div>
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
            </div>
          </FadeIn>
        )}

        {/* ─── Heat Map ─── */}
        <NuclearVerdictsHeatMap
          isPreview={!isSubscribed}
          onSubscribe={async (subscriberEmail) => {
            setEmail(subscriberEmail);
            setStatus("loading");
            setErrorMsg("");
            try {
              const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: subscriberEmail }),
              });
              const data = await res.json();
              if (!res.ok) {
                setStatus("error");
                setErrorMsg(data.error || "Something went wrong. Please try again.");
                return;
              }
              setStatus("success");
              setIsSubscribed(true);
              localStorage.setItem("ls_subscribed", "1");
              fetch("/api/track-event", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event: "heatmap-subscribe", data: { email: subscriberEmail } }),
              }).catch(() => {});
            } catch {
              setStatus("error");
              setErrorMsg("Something went wrong. Please try again.");
            }
          }}
          subscribeStatus={status}
        />

        {/* ─── Subscribe Block (for non-subscribers) ─── */}
        {!isSubscribed && (
          <FadeIn delay={600}>
            <div
              ref={gateCtaRef}
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

        {/* ─── Executive Briefing CTA ─── */}
        <FadeIn delay={800}>
          <div
            ref={briefingCtaRef}
            style={{
              margin: "32px 0",
              padding: "32px 24px",
              background: SENTINEL.bgWarm,
              borderRadius: 14,
              border: `1px solid ${SENTINEL.border}`,
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontFamily: FONTS.serif,
                fontWeight: 600,
                color: SENTINEL.sentinel,
                margin: "0 0 8px",
              }}
            >
              See How Your Program Compares
            </h3>
            <p
              style={{
                fontSize: 13,
                color: SENTINEL.inkLight,
                fontFamily: FONTS.sans,
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Take the 5-minute Executive Briefing — free maturity assessment
              for litigation leaders
            </p>
            <a
              href="/briefing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 28px",
                background: "linear-gradient(135deg, #B85450, #922B28)",
                borderRadius: 10,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: FONTS.sans,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Start Assessment &rarr;
            </a>
          </div>
        </FadeIn>

        {/* ─── Footer ─── */}
        <SentinelFooter delay={850} />
      </div>

      <ThemeToggle />
    </div>
  );
}
