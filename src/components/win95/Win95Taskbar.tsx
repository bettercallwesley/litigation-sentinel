"use client";

import React, { useState, useEffect } from "react";
import { WIN95, w95raised, w95sunken } from "../design-system/tokens";

interface Win95TaskbarProps {
  activeWindow?: string;
}

export default function Win95Taskbar({ activeWindow = "CaseGlide" }: Win95TaskbarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 28,
        background: WIN95.silver,
        ...w95raised,
        display: "flex",
        alignItems: "center",
        padding: "2px 4px",
        gap: 4,
        zIndex: 9999,
      }}
    >
      {/* Start button */}
      <button
        style={{
          ...w95raised,
          background: WIN95.silver,
          padding: "1px 6px",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontSize: 11,
          fontWeight: 700,
          fontFamily: WIN95.font,
          cursor: "pointer",
          borderRadius: 0,
          color: WIN95.text,
          height: 22,
        }}
      >
        <span style={{ fontSize: 13 }}>🪟</span> Start
      </button>

      {/* Active window */}
      <div
        style={{
          ...w95sunken,
          flex: 1,
          height: 20,
          padding: "0 6px",
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          fontFamily: WIN95.font,
          color: WIN95.text,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {activeWindow}
      </div>

      {/* Clock */}
      <div
        style={{
          ...w95sunken,
          height: 20,
          padding: "0 8px",
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          fontFamily: WIN95.font,
          color: WIN95.text,
          whiteSpace: "nowrap",
        }}
      >
        {time}
      </div>
    </div>
  );
}
