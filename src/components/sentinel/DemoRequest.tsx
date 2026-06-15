"use client";

import React, { useState } from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";

/**
 * C12: demo-copy degradation path (reconciled plan CONTRARIAN-5).
 *
 * At 0-10 briefing requests/month the current copy stands (version 1).
 * Above 10/month for two consecutive months, version 2 ships, with COS
 * triaging first-pass fit (suppression plus ICP class) before anything
 * reaches Wes. CEO-only forever: the working session itself, pricing, and
 * anything contractual. The flip is this one constant; it is pre-authorized
 * and COS executes it without asking.
 *
 * WES-PROXY-3 hard condition, applied at build time 2026-06-11: the Resend
 * env var (RESEND_API_KEY) is NOT present in the Vercel project (verified
 * via the Vercel API env listing; only Beehiiv vars exist), so the timing
 * promise "usually within a day" is CUT from version 1. Copy may not
 * promise what the plumbing cannot deliver. Restore the fuller line
 * ("Wes replies personally, usually within a day.") only when the notify
 * wire demonstrably fires.
 */
export const REPLY_LINE_V1 = "Wes replies personally.";
export const REPLY_LINE_V2 = "Our team replies within a day; working sessions are with our CEO.";
const REPLY_LINE = REPLY_LINE_V1; // version 2 is NOT active; see C12 note above.

interface DemoRequestProps {
  fromSlug?: string;
  fromTitle?: string;
}

export default function DemoRequest({ fromSlug, fromTitle }: DemoRequestProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(fromTitle ? `Just read: ${fromTitle}` : "");
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !company || !email || !email.includes("@")) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          from: fromSlug || "",
          newsletter_opt_in: optIn,
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
      // Client-side corroboration event (Vercel Analytics + sink). The
      // canonical demo-request row with full payload is written server-side
      // by /api/demo-request; D's sink is the source of record.
      trackEvent("demo_request", { page: "/demo", from: fromSlug || "direct" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: `1px solid ${SENTINEL.border}`,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: FONTS.sans,
    background: SENTINEL.bg,
    color: SENTINEL.ink,
    outline: "none",
    boxSizing: "border-box",
    opacity: status === "loading" ? 0.6 : 1,
  };

  return (
    <div
      style={{
        background: SENTINEL.surface,
        border: `1px solid ${SENTINEL.border}`,
        borderRadius: 16,
        padding: "40px 40px 36px",
      }}
    >
      {status === "success" ? (
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
            Request received.
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
            Thank you. We will be in touch at the address you gave us.
          </p>
        </div>
      ) : (
        <>
          <p
            style={{
              fontSize: 15,
              color: SENTINEL.inkLight,
              lineHeight: 1.65,
              margin: "0 0 8px",
              fontFamily: FONTS.sans,
            }}
          >
            {fromTitle ? (
              <>
                You just read about {fromTitle}. CaseGlide is how legal departments and carriers
                see that pattern forming in their own portfolio, before it becomes the verdict we
                write about next.
              </>
            ) : (
              <>
                Sentinel covers the verdicts. CaseGlide, the company behind Sentinel, builds the
                software that helps legal departments and carriers see them coming.
              </>
            )}
          </p>
          <p
            style={{
              fontSize: 15,
              color: SENTINEL.ink,
              lineHeight: 1.65,
              margin: "0 0 28px",
              fontFamily: FONTS.sans,
              fontWeight: 500,
            }}
          >
            A 30-minute working session with our CEO. Your portfolio&apos;s shape, not a canned
            deck.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={status === "loading"}
                required
                style={inputStyle}
              />
              <textarea
                placeholder="What prompted this? (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: SENTINEL.inkLight,
                  fontFamily: FONTS.sans,
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  disabled={status === "loading"}
                  style={{ margin: 0 }}
                />
                Also send me Sentinel weekly.
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
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
                {status === "loading" ? "Sending..." : "Request the session"}
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

          <p
            style={{
              fontSize: 11,
              color: SENTINEL.inkMuted,
              lineHeight: 1.6,
              margin: "16px 0 0",
              fontFamily: FONTS.sans,
            }}
          >
            {REPLY_LINE}
          </p>
        </>
      )}
    </div>
  );
}
