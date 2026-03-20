"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";

export default function SubscribePage() {
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
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 520, width: "100%" }}>

        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              fontSize: "clamp(32px, 6vw, 48px)",
              fontFamily: FONTS.serif,
              fontWeight: 700,
              color: SENTINEL.sentinel,
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Litigation Sentinel
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

        {/* Main card */}
        <div
          style={{
            background: SENTINEL.surface,
            border: `1px solid ${SENTINEL.border}`,
            borderRadius: 16,
            padding: "40px 40px 36px",
          }}
        >
          {status === "success" ? (
            /* Thank you state */
            <div style={{ textAlign: "center", padding: "8px 0" }}>
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
                First issue coming soon. Check your inbox for a welcome from Litigation Sentinel.
              </p>
            </div>
          ) : (
            <>
              {/* Headline */}
              <h2
                style={{
                  fontSize: "clamp(22px, 4vw, 28px)",
                  fontFamily: FONTS.serif,
                  fontWeight: 600,
                  color: SENTINEL.sentinel,
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Weekly litigation intelligence. Free.
              </h2>

              {/* Subhead */}
              <p
                style={{
                  fontSize: 15,
                  color: SENTINEL.inkLight,
                  lineHeight: 1.65,
                  margin: "0 0 28px",
                  fontFamily: FONTS.sans,
                }}
              >
                Nuclear verdicts, AI legal developments, and portfolio risk data — for in-house legal and claims executives.
              </p>

              {/* Value props */}
              <ul
                style={{
                  listStyle: "none",
                  margin: "0 0 32px",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "Nuclear verdict trends across 28 states",
                  "AI legal developments affecting your exposure",
                  "Portfolio risk intelligence for in-house legal + claims",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: SENTINEL.ink,
                      fontFamily: FONTS.sans,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: SENTINEL.sentinelAccent,
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

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
                }}
              >
                No spam. Unsubscribe anytime. Read by GC, CLO, and VP Claims at leading insurers.
              </p>
            </>
          )}
        </div>

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
