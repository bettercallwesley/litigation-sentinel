"use client";

import React from "react";
import { useState } from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";
import { FadeIn } from "@/components/design-system";
import { getAttribution } from "@/lib/attribution";

interface ScheduleModalProps {
  onClose: () => void;
  answers?: Record<string, number>;
  source?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ScheduleModal({ onClose, answers, source }: ScheduleModalProps) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/briefing-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || undefined,
          title: title || undefined,
          company: company || undefined,
          email,
          source: source || "schedule-modal",
          gate_type: "schedule-modal",
          answers: answers || undefined,
          attribution: getAttribution(),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const fields = [
    { label: "Full Name", value: name, setter: setName, required: false },
    { label: "Title", value: title, setter: setTitle, required: false },
    { label: "Company", value: company, setter: setCompany, required: false },
    { label: "Email", value: email, setter: setEmail, required: true },
  ];

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 10,
    color: COLORS.textPrimary,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: FONTS.sans,
  };

  const kicker = (
    <div
      style={{
        fontFamily: FONTS.mono,
        fontSize: 10,
        letterSpacing: "0.22em",
        color: COLORS.gold,
        marginBottom: 12,
      }}
    >
      {"SCHEDULE / EXECUTIVE BRIEFING"}
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        zIndex: 100,
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <FadeIn>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: COLORS.deep,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 20,
            padding: 36,
            maxWidth: 480,
            width: "100%",
          }}
        >
          {status === "success" ? (
            <div style={{ padding: "8px 0" }}>
              {kicker}
              {/* Emerald success strip, cloned from SectionCaseClerk */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                  padding: "12px 14px",
                  border: `1px solid ${COLORS.emerald}`,
                  background: COLORS.emeraldGlow,
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: COLORS.emerald,
                    border: `1px solid ${COLORS.emerald}`,
                    borderRadius: 4,
                    padding: "3px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {"REQUEST ON THE DESK"}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 13,
                    color: COLORS.textPrimary,
                    lineHeight: 1.5,
                  }}
                >
                  {"It reached Wes directly."}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                  margin: "0 0 12px",
                  fontFamily: FONTS.serif,
                }}
              >
                Request received
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                  fontFamily: FONTS.sans,
                }}
              >
                Your request is on Wes&apos;s desk. He replies personally to set the time.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: "12px 32px",
                  background: `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {kicker}
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                  margin: "0 0 8px",
                  fontFamily: FONTS.serif,
                }}
              >
                Schedule your briefing
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  marginBottom: 24,
                  lineHeight: 1.6,
                  fontFamily: FONTS.sans,
                }}
              >
                Fifteen minutes with Wes Todd, CaseGlide&apos;s founder. No deck. He drives your
                numbers live. We recommend completing the assessment first for a personalized
                session.
              </p>
              {fields.map((field) => (
                <div key={field.label} style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      color: COLORS.textMuted,
                      marginBottom: 6,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontFamily: FONTS.sans,
                    }}
                  >
                    {field.label}{field.required ? " *" : ""}
                  </label>
                  <input
                    placeholder={field.label}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              ))}
              {status === "error" && errorMsg && (
                <p
                  style={{
                    fontSize: 13,
                    color: COLORS.rose,
                    margin: "0 0 12px",
                    fontFamily: FONTS.sans,
                  }}
                >
                  {errorMsg}
                </p>
              )}
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  style={{
                    flex: 1,
                    padding: "14px",
                    background:
                      status === "loading"
                        ? COLORS.textMuted
                        : `linear-gradient(135deg, ${COLORS.accent}, #2563EB)`,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    fontFamily: FONTS.sans,
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Sending..." : "Request Briefing"}
                </button>
                <button
                  onClick={onClose}
                  style={{
                    padding: "14px 24px",
                    background: "transparent",
                    color: COLORS.textSecondary,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 10,
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: FONTS.sans,
                  }}
                >
                  Cancel
                </button>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  margin: "20px 0 0",
                  fontFamily: FONTS.sans,
                }}
              >
                Encrypted in transit. Your details reach only Wes, and we never sell them.
                Law-firm addresses are screened before any request reaches a CaseGlide inbox.
              </p>
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
