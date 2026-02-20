"use client";

import React, { useState } from "react";
import { COLORS, FONTS, RADIUS } from "@/components/design-system/tokens";
import { Card, Badge, FadeIn } from "@/components/design-system";
import { SHORTCUTS, WorkflowShortcut } from "@/data/prospects";

function ShortcutCard({ shortcut, delay, onRun }: {
  shortcut: WorkflowShortcut;
  delay: number;
  onRun: (id: string) => void;
}) {
  return (
    <FadeIn delay={delay}>
      <Card style={{ padding: 0 }}>
        <div style={{
          padding: "16px 20px",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}>
          {/* Icon */}
          <div style={{
            width: 40,
            height: 40,
            borderRadius: RADIUS.button,
            background: shortcut.autonomous ? COLORS.emeraldGlow : COLORS.amberGlow,
            border: `1px solid ${shortcut.autonomous ? COLORS.emerald : COLORS.amber}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            color: shortcut.autonomous ? COLORS.emerald : COLORS.amber,
            fontFamily: FONTS.mono,
            flexShrink: 0,
          }}>
            {shortcut.icon}
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.textPrimary }}>{shortcut.label}</span>
              {shortcut.autonomous ? (
                <Badge color={COLORS.emerald} glow={COLORS.emeraldGlow}>Autonomous</Badge>
              ) : (
                <Badge color={COLORS.amber} glow={COLORS.amberGlow}>Requires Approval</Badge>
              )}
            </div>
            <div style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5, marginBottom: 8 }}>
              {shortcut.description}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              {shortcut.tools.map(tool => (
                <span key={tool} style={{
                  padding: "2px 8px",
                  borderRadius: RADIUS.badge,
                  border: `1px solid ${COLORS.border}`,
                  fontSize: 10,
                  color: COLORS.textMuted,
                  fontFamily: FONTS.mono,
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Run button */}
          <button
            onClick={() => onRun(shortcut.id)}
            style={{
              padding: "8px 16px",
              background: `linear-gradient(135deg, ${COLORS.accent}, #1D4ED8)`,
              border: "none",
              borderRadius: RADIUS.button,
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONTS.sans,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Run
          </button>
        </div>

        {/* Command */}
        <div style={{
          padding: "8px 20px",
          borderTop: `1px solid ${COLORS.border}`,
          background: COLORS.midnight,
        }}>
          <code style={{
            fontSize: 12,
            color: COLORS.gold,
            fontFamily: FONTS.mono,
          }}>
            {shortcut.command}
          </code>
        </div>
      </Card>
    </FadeIn>
  );
}

export default function WorkflowShortcuts() {
  const [running, setRunning] = useState<string | null>(null);
  const [log, setLog] = useState<string[]>([]);

  const handleRun = (id: string) => {
    const shortcut = SHORTCUTS.find(s => s.id === id);
    if (!shortcut) return;

    setRunning(id);
    setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] Running "${shortcut.command}"...`]);

    // Simulate execution
    setTimeout(() => {
      if (shortcut.autonomous) {
        setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] "${shortcut.label}" completed. Results ready.`]);
      } else {
        setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] "${shortcut.label}" draft ready. Awaiting Wes approval in queue.`]);
      }
      setRunning(null);
    }, 1500);
  };

  const autonomous = SHORTCUTS.filter(s => s.autonomous);
  const requiresApproval = SHORTCUTS.filter(s => !s.autonomous);

  return (
    <div>
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 24 }}>
          <Badge color={COLORS.gold} glow={COLORS.goldGlow}>Automation</Badge>
          <h1 style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textPrimary,
            marginTop: 8,
            marginBottom: 4,
          }}>
            Workflow Shortcuts
          </h1>
          <p style={{ fontSize: 14, color: COLORS.textSecondary }}>
            Quick actions for daily campaign operations.
            Green = fully autonomous. Amber = drafts for Wes review.
          </p>
        </div>
      </FadeIn>

      {/* Autonomous workflows */}
      <FadeIn delay={50}>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.emerald, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Autonomous Actions
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {autonomous.map((s, i) => (
          <ShortcutCard key={s.id} shortcut={s} delay={100 + i * 40} onRun={handleRun} />
        ))}
      </div>

      {/* Approval-required workflows */}
      <FadeIn delay={250}>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.amber, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Requires Wes Approval
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {requiresApproval.map((s, i) => (
          <ShortcutCard key={s.id} shortcut={s} delay={300 + i * 40} onRun={handleRun} />
        ))}
      </div>

      {/* Execution log */}
      {log.length > 0 && (
        <FadeIn delay={0}>
          <Card style={{ padding: 0, marginTop: 8 }}>
            <div style={{
              padding: "10px 16px",
              borderBottom: `1px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Execution Log
              </span>
              <button
                onClick={() => setLog([])}
                style={{
                  padding: "2px 10px",
                  background: "transparent",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: RADIUS.badge,
                  color: COLORS.textMuted,
                  fontSize: 11,
                  cursor: "pointer",
                  fontFamily: FONTS.sans,
                }}
              >
                Clear
              </button>
            </div>
            <div style={{
              padding: 16,
              maxHeight: 200,
              overflowY: "auto",
              fontFamily: FONTS.mono,
              fontSize: 12,
              lineHeight: 1.8,
              color: COLORS.textSecondary,
            }}>
              {log.map((entry, i) => (
                <div key={i}>{entry}</div>
              ))}
              {running && (
                <div style={{ color: COLORS.accent }}>
                  Running...
                </div>
              )}
            </div>
          </Card>
        </FadeIn>
      )}
    </div>
  );
}
