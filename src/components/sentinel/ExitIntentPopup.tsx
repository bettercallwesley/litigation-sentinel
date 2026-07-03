"use client";

import React, { useEffect, useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";
import SubscribeSuccessCTAs from "./SubscribeSuccessCTAs";

// B-EXIT (reconciled council B, CONTRARIAN-2): exactly ONE interruption surface.
// Exit-intent popup on article + nuclear routes only. Dismiss suppresses for
// 30 days via localStorage. Never rendered for a known subscriber.
//
// Second layer (scroll-50 percent slide-in) is staged behind this flag.
// Named decision point: Tuesday 2026-06-24, on two weeks of exit_view /
// exit_submit data (WES-PROXY-6). Do not flip without that evaluation row.
export const SCROLL_SLIDEIN_ENABLED = false;

const DISMISS_KEY = "ls_exit_dismissed_at";
const SUBSCRIBED_KEY = "ls_subscribed";
const SUPPRESS_DAYS = 30;

function suppressed(): boolean {
  try {
    if (localStorage.getItem(SUBSCRIBED_KEY) === "1") return true;
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < SUPPRESS_DAYS * 86400000) return true;
  } catch {
    // Storage unavailable: fail quiet, never interrupt twice knowingly.
  }
  return false;
}

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (suppressed()) return;
    let fired = false;

    function onMouseOut(e: MouseEvent) {
      if (fired) return;
      // Cursor leaving through the top of the viewport = exit intent.
      if (e.clientY > 10 || e.relatedTarget) return;
      if (suppressed()) return;
      fired = true;
      setVisible(true);
      const page = window.location.pathname;
      trackEvent("exit_view", { page });
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setErrorMsg("");
    const page = typeof window !== "undefined" ? window.location.pathname : "/";

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "exit-intent",
          slug: page,
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
      // Unlock only on the confirmed 2xx (CONTRARIAN-4, WES-PROXY-8).
      try {
        localStorage.setItem(SUBSCRIBED_KEY, "1");
      } catch {}
      trackEvent("exit_submit", { page }, { email });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe to Litigation Sentinel"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 14, 26, 0.55)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 460,
          width: "100%",
          background: SENTINEL.surface,
          border: `1px solid ${SENTINEL.border}`,
          borderTop: `3px solid ${SENTINEL.sentinel}`,
          borderRadius: 14,
          padding: "36px 32px 32px",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(10, 14, 26, 0.35)",
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 14,
            background: "none",
            border: "none",
            fontSize: 20,
            lineHeight: 1,
            color: SENTINEL.inkMuted,
            cursor: "pointer",
            padding: 4,
            fontFamily: FONTS.sans,
          }}
        >
          &times;
        </button>

        {status === "success" ? (
          <>
            <div
              style={{
                fontSize: 22,
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
              Check your inbox for a welcome from Litigation Sentinel. While you are here:
            </p>
            <SubscribeSuccessCTAs surface="exit-intent" />
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
                marginBottom: 10,
              }}
            >
              Before You Go
            </div>
            <h3
              style={{
                fontSize: 22,
                fontFamily: FONTS.serif,
                fontWeight: 600,
                color: SENTINEL.sentinel,
                margin: "0 0 10px",
                lineHeight: 1.3,
              }}
            >
              The next nuclear verdict will not wait for you.
            </h3>
            <p
              style={{
                fontSize: 13,
                color: SENTINEL.inkLight,
                lineHeight: 1.65,
                margin: "0 0 18px",
                fontFamily: FONTS.sans,
              }}
            >
              Trial drama, carrier RICO filings, and the plaintiff-firm tactics
              behind them. Read by litigation leaders at F500 legal departments
              and national carriers. Free.
            </p>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: 8,
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
                  flex: "1 1 180px",
                  padding: "11px 14px",
                  border: `1px solid ${SENTINEL.border}`,
                  borderRadius: 8,
                  fontSize: 13,
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
                  padding: "11px 20px",
                  background: SENTINEL.sentinel,
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
                {status === "loading" ? "Subscribing..." : "Subscribe Free"}
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
            <p
              style={{
                fontSize: 11,
                color: SENTINEL.inkMuted,
                margin: "14px 0 0",
                fontFamily: FONTS.sans,
              }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
