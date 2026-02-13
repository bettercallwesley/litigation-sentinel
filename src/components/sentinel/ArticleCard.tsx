"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { NewsletterArticle } from "@/data/newsletter-articles";

function SectionLabel({ children, color = SENTINEL.sentinel }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color,
        fontFamily: FONTS.sans,
        marginBottom: 6,
      }}
    >
      {children}
    </span>
  );
}

function ArticleTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: SENTINEL.sentinelAccent,
        fontFamily: FONTS.sans,
        background: SENTINEL.goldSoft,
        padding: "2px 8px",
        borderRadius: 3,
      }}
    >
      {children}
    </span>
  );
}

interface ArticleCardProps {
  article: NewsletterArticle;
  featured?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function ArticleCard({ article, featured = false, onClick, delay = 0 }: ArticleCardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        onClick={onClick}
        style={{
          padding: featured ? "28px 0" : "20px 0",
          borderBottom: `1px solid ${SENTINEL.border}`,
          cursor: onClick ? "pointer" : "default",
          transition: "background 0.2s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: featured ? 10 : 6,
          }}
        >
          {article.section && <SectionLabel>{article.section}</SectionLabel>}
          <ArticleTag>{article.tag}</ArticleTag>
        </div>
        <h3
          style={{
            fontSize: featured ? "clamp(20px, 3vw, 26px)" : 16,
            fontFamily: FONTS.serif,
            fontWeight: featured ? 600 : 500,
            color: SENTINEL.ink,
            margin: "0 0 6px",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: featured ? 14 : 13,
            color: SENTINEL.inkLight,
            lineHeight: 1.65,
            margin: 0,
            fontFamily: FONTS.sans,
          }}
        >
          {article.subtitle}
        </p>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
            {article.readTime}
          </span>
          {onClick && (
            <span style={{ fontSize: 11, color: SENTINEL.accent, fontFamily: FONTS.sans, fontWeight: 600 }}>
              Read →
            </span>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export { ArticleTag, SectionLabel };
