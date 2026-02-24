"use client";

import React from "react";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { Masthead } from "@/components/sentinel";
import ArticleCard from "@/components/sentinel/ArticleCard";
import { BriefingCTA } from "@/components/sentinel";
import { SubscribeBlock } from "@/components/sentinel";
import { SentinelFooter } from "@/components/sentinel";
import {
  FEATURED_ARTICLE,
  ARTICLES,
  TRIAL_ARTICLE,
  NAV_CATEGORIES,
} from "@/data/newsletter-articles";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Masthead */}
        <Masthead />

        {/* Category Nav Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            padding: "14px 0",
            borderBottom: `1px solid ${SENTINEL.border}`,
            flexWrap: "wrap",
          }}
        >
          {NAV_CATEGORIES.map((cat, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                color: SENTINEL.inkMuted,
                fontFamily: FONTS.sans,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Article */}
        <FadeIn delay={100}>
          <a
            href={`/article/${FEATURED_ARTICLE.slug}`}
            style={{
              display: "block",
              padding: "32px 0 24px",
              borderBottom: `1px solid ${SENTINEL.border}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
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
              {FEATURED_ARTICLE.tag}
            </span>
            {FEATURED_ARTICLE.trending && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: SENTINEL.emerald,
                  fontFamily: FONTS.sans,
                  background: "rgba(45, 122, 95, 0.08)",
                  padding: "2px 8px",
                  borderRadius: 3,
                }}
              >
                Trending
              </span>
            )}
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontFamily: FONTS.serif,
                fontWeight: 600,
                color: SENTINEL.sentinel,
                margin: "10px 0 10px",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
              }}
            >
              {FEATURED_ARTICLE.title}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: SENTINEL.inkLight,
                lineHeight: 1.7,
                margin: "0 0 12px",
                fontFamily: FONTS.sans,
              }}
            >
              {FEATURED_ARTICLE.subtitle}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 11, color: SENTINEL.inkMuted }}>
                {FEATURED_ARTICLE.readTime}
                {FEATURED_ARTICLE.readers != null && ` · ${FEATURED_ARTICLE.readers.toLocaleString()} readers this week`}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: SENTINEL.accent,
                  fontWeight: 600,
                }}
              >
                Read the full story →
              </span>
            </div>
          </a>
        </FadeIn>

        {/* First batch of articles (3) */}
        {ARTICLES.slice(0, 3).map((a, i) => (
          <a key={i} href={a.linksTo ? `/${a.linksTo}` : a.slug ? `/article/${a.slug}` : undefined} style={{ textDecoration: "none", display: "block" }}>
            <ArticleCard
              article={a}
              delay={180 + i * 60}
            />
          </a>
        ))}

        {/* Executive Briefing CTA — dark ad card between articles */}
        <BriefingCTA delay={400} />

        {/* Nuclear Verdicts Heat Map CTA */}
        <FadeIn delay={430}>
          <a
            href="/nuclear-verdicts"
            style={{
              display: "block",
              margin: "16px 0",
              padding: "20px 24px",
              background: SENTINEL.surface,
              borderRadius: 14,
              border: `1px solid ${SENTINEL.border}`,
              cursor: "pointer",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: SENTINEL.sentinel,
                  fontFamily: FONTS.sans,
                }}
              >
                Interactive Tool
              </span>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: SENTINEL.rose,
                  fontFamily: FONTS.sans,
                  background: "rgba(184, 84, 80, 0.06)",
                  padding: "2px 8px",
                  borderRadius: 3,
                }}
              >
                New
              </span>
            </div>
            <h3
              style={{
                fontSize: 16,
                fontFamily: FONTS.serif,
                fontWeight: 600,
                color: SENTINEL.ink,
                margin: "0 0 4px",
                lineHeight: 1.35,
              }}
            >
              Nuclear Verdicts® Heat Map: Explore Verdict Risk by State
            </h3>
            <p
              style={{
                fontSize: 13,
                color: SENTINEL.inkLight,
                lineHeight: 1.6,
                margin: "0 0 6px",
                fontFamily: FONTS.sans,
              }}
            >
              Interactive state-by-state analysis of nuclear verdict frequency, total damages,
              Judicial Hellhole® overlays, and year-over-year trends. 135 verdicts totaling $31.3B in 2024.
            </p>
            <span
              style={{
                fontSize: 11,
                color: SENTINEL.accent,
                fontFamily: FONTS.sans,
                fontWeight: 600,
              }}
            >
              Explore the map →
            </span>
          </a>
        </FadeIn>

        {/* How-To article */}
        <a href={ARTICLES[3].slug ? `/article/${ARTICLES[3].slug}` : "/council"} style={{ textDecoration: "none", display: "block" }}>
          <ArticleCard
            article={ARTICLES[3]}
            delay={460}
          />
        </a>

        {/* Trial article */}
        <a href={TRIAL_ARTICLE.slug ? `/article/${TRIAL_ARTICLE.slug}` : "/trial"} style={{ textDecoration: "none", display: "block" }}>
          <ArticleCard
            article={TRIAL_ARTICLE}
            delay={500}
          />
        </a>

        {/* Remaining articles */}
        {ARTICLES.slice(4).map((a, i) => (
          <a key={i + 4} href={a.slug ? `/article/${a.slug}` : undefined} style={{ textDecoration: "none", display: "block" }}>
            <ArticleCard
              article={a}
              delay={560 + i * 60}
            />
          </a>
        ))}

        {/* Subscribe block */}
        <SubscribeBlock delay={700} />

        {/* Software Suite footer + copyright */}
        <SentinelFooter delay={750} />
      </div>

      <ThemeToggle />
    </div>
  );
}
