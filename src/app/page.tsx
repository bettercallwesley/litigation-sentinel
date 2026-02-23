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
          <a key={i} href={a.slug ? `/article/${a.slug}` : undefined} style={{ textDecoration: "none", display: "block" }}>
            <ArticleCard
              article={a}
              delay={180 + i * 60}
            />
          </a>
        ))}

        {/* Executive Briefing CTA — dark ad card between articles */}
        <BriefingCTA delay={400} />

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
