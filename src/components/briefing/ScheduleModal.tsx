"use client";

import React from "react";
import { COLORS, FONTS } from "@/components/design-system/tokens";

interface ScheduleModalProps {
  onClose: () => void;
}

export default function ScheduleModal({ onClose }: ScheduleModalProps) {
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
        <h2
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: COLORS.textPrimary,
            margin: "0 0 8px",
            fontFamily: FONTS.serif,
          }}
        >
          Schedule Your Briefing
        </h2>
        <p
          style={{
            fontSize: 14,
            color: COLORS.textSecondary,
            marginBottom: 28,
            lineHeight: 1.6,
            fontFamily: FONTS.sans,
          }}
        >
          30 minutes with a CaseGlide litigation intelligence specialist. We recommend
          completing the assessment first for a personalized session.
        </p>
        {["Full Name", "Title", "Company", "Email"].map((field) => (
          <div key={field} style={{ marginBottom: 16 }}>
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
              {field}
            </label>
            <input
              placeholder={field}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                color: COLORS.textPrimary,
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                fontFamily: FONTS.sans,
              }}
            />
          </div>
        ))}
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button
            style={{
              flex: 1,
              padding: "14px",
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
            Request Briefing
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
      </div>
    </div>
  );
}
