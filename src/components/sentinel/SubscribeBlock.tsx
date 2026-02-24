"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { ENGAGEMENT_STATS } from "@/data/engagement-stats";

interface SubscribeBlockProps {
  delay?: number;
}

export default function SubscribeBlock({ delay = 700 }: SubscribeBlockProps) {
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

  if (status === "success") {
    return (
      <FadeIn delay={0}>
        <div
          style={{
            margin: "40px 0 32px",
            padding: "32px 24px",
            background: SENTINEL.bgWarm,
            borderRadius: 12,
            border: `1px solid ${SENTINEL.border}`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontFamily: FONTS.serif,
              fontWeight: 600,
              color: SENTINEL.sentinel,
              marginBottom: 8,
            }}
          >
            You&apos;re in.
          </div>
          <p
            style={{
              fontSize: 13,
              color: SENTINEL.inkLight,
              lineHeight: 1.6,
              margin: 0,
              fontFamily: FONTS.sans,
            }}
          >
            Check your inbox for a welcome from Litigation Sentinel.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={delay}>
      <div
        style={{
          margin: "40px 0 32px",
          padding: "32px 24px",
          background: SENTINEL.bgWarm,
          borderRadius: 12,
          border: `1px solid ${SENTINEL.border}`,
          textAlign: "center",
        }}
      >
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
          Stay Informed
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
            margin: "0 0 16px",
            fontFamily: FONTS.sans,
          }}
        >
          Join {ENGAGEMENT_STATS.subscriberCount.toLocaleString()} litigation leaders who get weekly intelligence on
          strategy, technology, and the data that matters.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: 8,
            maxWidth: 400,
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
              background: SENTINEL.sentinel,
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
            {status === "loading" ? "Subscribing..." : "Subscribe"}
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
      </div>
    </FadeIn>
  );
}
