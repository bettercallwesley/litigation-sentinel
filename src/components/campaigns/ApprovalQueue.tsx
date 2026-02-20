"use client";

import React, { useState } from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { SAMPLE_APPROVALS, APPROVAL_TYPE_LABELS, ApprovalItem } from "@/data/campaigns";

const TYPE_COLORS: Record<string, { color: string; glow: string }> = {
  inmail: { color: COLORS.gold, glow: COLORS.goldGlow },
  post: { color: COLORS.accent, glow: COLORS.accentGlow },
  apollo_copy: { color: COLORS.emerald, glow: COLORS.emeraldGlow },
  promoter_pitch: { color: COLORS.rose, glow: COLORS.roseGlow },
};

function ApprovalCard({ item, onApprove, onReject }: {
  item: ApprovalItem;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const typeStyle = TYPE_COLORS[item.type] || { color: COLORS.accent, glow: COLORS.accentGlow };
  const isActioned = item.status !== "pending";

  return (
    <Card style={{
      padding: 0,
      opacity: isActioned ? 0.6 : 1,
      transition: "opacity 0.3s",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 20px",
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge color={typeStyle.color} glow={typeStyle.glow}>
            {APPROVAL_TYPE_LABELS[item.type]}
          </Badge>
          <Badge color={COLORS.textSecondary}>Campaign {item.campaign}</Badge>
        </div>
        {item.prospect && (
          <div style={{ fontSize: 13, color: COLORS.textPrimary }}>
            <span style={{ fontWeight: 600 }}>{item.prospect}</span>
            {item.company && (
              <span style={{ color: COLORS.textMuted }}> at {item.company}</span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{
          fontSize: 13,
          color: COLORS.textSecondary,
          lineHeight: 1.6,
          whiteSpace: "pre-wrap",
          fontFamily: item.type === "apollo_copy" ? FONTS.mono : FONTS.sans,
          background: COLORS.midnight,
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.input,
          padding: 16,
        }}>
          {item.content}
        </div>
      </div>

      {/* Actions */}
      <div style={{
        padding: "12px 20px",
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ fontSize: 11, color: COLORS.textMuted }}>
          {new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
        </div>
        {isActioned ? (
          <Badge
            color={item.status === "approved" ? COLORS.emerald : COLORS.rose}
            glow={item.status === "approved" ? COLORS.emeraldGlow : COLORS.roseGlow}
          >
            {item.status === "approved" ? "Approved" : "Rejected"}
          </Badge>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => onReject(item.id)}
              style={{
                padding: "6px 16px",
                background: "transparent",
                border: `1px solid ${COLORS.border}`,
                borderRadius: RADIUS.button,
                color: COLORS.textSecondary,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              Reject
            </button>
            <button
              onClick={() => onApprove(item.id)}
              style={{
                padding: "6px 16px",
                background: `linear-gradient(135deg, ${COLORS.accent}, #1D4ED8)`,
                border: "none",
                borderRadius: RADIUS.button,
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONTS.sans,
              }}
            >
              Approve & Send
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function ApprovalQueue() {
  const [approvals, setApprovals] = useState<ApprovalItem[]>(SAMPLE_APPROVALS);

  const handleApprove = (id: string) => {
    setApprovals(prev => prev.map(a => a.id === id ? { ...a, status: "approved" as const } : a));
  };

  const handleReject = (id: string) => {
    setApprovals(prev => prev.map(a => a.id === id ? { ...a, status: "rejected" as const } : a));
  };

  const pending = approvals.filter(a => a.status === "pending");
  const actioned = approvals.filter(a => a.status !== "pending");

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.rose} glow={COLORS.roseGlow}>Requires Approval</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Approval Queue
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Items requiring Wes review before sending. InMails, LinkedIn posts, Apollo copy changes, and promoter outreach.
          </p>
        </div>
      </FadeIn>

      {/* Rules reminder */}
      <FadeIn delay={50}>
        <Card style={{
          padding: "14px 20px",
          marginBottom: 20,
          borderColor: `${COLORS.amber}40`,
          background: COLORS.amberGlow,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.amber, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Approval Rules
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: 12, color: COLORS.textSecondary }}>
            <div>Never send an InMail without Wes approving the first line</div>
            <div>Never publish a LinkedIn post without Wes reviewing final copy</div>
            <div>Never change Apollo sequence copy without Wes approval</div>
            <div>Never send Promoter outreach without Wes reviewing the pitch</div>
          </div>
        </Card>
      </FadeIn>

      {/* Pending count */}
      <FadeIn delay={100}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}>
          <div style={{ fontSize: 14, color: COLORS.textPrimary, fontWeight: 500 }}>
            Pending Review ({pending.length})
          </div>
          {actioned.length > 0 && (
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>
              {actioned.filter(a => a.status === "approved").length} approved, {actioned.filter(a => a.status === "rejected").length} rejected
            </div>
          )}
        </div>
      </FadeIn>

      {/* Approval items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {approvals.map((item, i) => (
          <FadeIn key={item.id} delay={150 + i * 50}>
            <ApprovalCard
              item={item}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </FadeIn>
        ))}
      </div>

      {pending.length === 0 && (
        <FadeIn delay={200}>
          <Card style={{ padding: "40px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>&#x2713;</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: COLORS.textPrimary }}>All items reviewed</div>
            <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 4 }}>No pending approvals. All autonomous actions continue running.</div>
          </Card>
        </FadeIn>
      )}
    </div>
  );
}
