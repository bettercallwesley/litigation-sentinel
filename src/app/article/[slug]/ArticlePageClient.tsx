"use client";

import React from "react";
import { useParams } from "next/navigation";
import { SENTINEL, FONTS } from "@/components/design-system/tokens";
import FadeIn from "@/components/design-system/FadeIn";
import { SentinelFooter, SubscribeBlock } from "@/components/sentinel";
import { getArticleBySlug, ALL_ARTICLES, ArticleContentBlock } from "@/data/newsletter-articles";
import ThemeToggle from "@/components/shared/ThemeToggle";

function ArticleHeader({ title, subtitle, tag, section, readTime, author, date, readers }: {
  title: string;
  subtitle: string;
  tag: string;
  section?: string;
  readTime: string;
  author?: string;
  date?: string;
  readers?: number;
}) {
  return (
    <FadeIn delay={100}>
      <div style={{ padding: "40px 0 32px", borderBottom: `1px solid ${SENTINEL.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          {section && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: SENTINEL.sentinel,
                fontFamily: FONTS.sans,
              }}
            >
              {section}
            </span>
          )}
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: SENTINEL.sentinelAccent,
              fontFamily: FONTS.sans,
              background: SENTINEL.goldSoft,
              padding: "3px 10px",
              borderRadius: 3,
            }}
          >
            {tag}
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontFamily: FONTS.serif,
            fontWeight: 600,
            color: SENTINEL.sentinel,
            margin: "0 0 16px",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 17,
            color: SENTINEL.inkLight,
            lineHeight: 1.7,
            margin: "0 0 20px",
            fontFamily: FONTS.sans,
          }}
        >
          {subtitle}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {author && (
            <span style={{ fontSize: 13, color: SENTINEL.ink, fontFamily: FONTS.sans, fontWeight: 500 }}>
              {author}
            </span>
          )}
          {date && (
            <span style={{ fontSize: 12, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              {date}
            </span>
          )}
          <span style={{ fontSize: 12, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
            {readTime}
            {readers != null && ` · ${readers.toLocaleString()} readers this week`}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

function ContentBlock({ block, index }: { block: ArticleContentBlock; index: number }) {
  if (block.type === "heading") {
    return (
      <FadeIn delay={200 + index * 40}>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontFamily: FONTS.serif,
            fontWeight: 600,
            color: SENTINEL.sentinel,
            margin: "40px 0 16px",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {block.text}
        </h2>
      </FadeIn>
    );
  }

  if (block.type === "pullquote") {
    return (
      <FadeIn delay={200 + index * 40}>
        <blockquote
          style={{
            margin: "32px 0",
            padding: "20px 24px",
            borderLeft: `3px solid ${SENTINEL.sentinelAccent}`,
            background: SENTINEL.goldSoft,
            borderRadius: 4,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: SENTINEL.sentinel,
              lineHeight: 1.6,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {block.text}
          </p>
        </blockquote>
      </FadeIn>
    );
  }

  if (block.type === "callout") {
    return (
      <FadeIn delay={200 + index * 40}>
        <div
          style={{
            margin: "28px 0",
            padding: "20px 24px",
            background: SENTINEL.accentSoft,
            border: `1px solid ${SENTINEL.border}`,
            borderRadius: 8,
          }}
        >
          <p
            style={{
              fontSize: 15,
              fontFamily: FONTS.sans,
              color: SENTINEL.ink,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {block.text}
          </p>
        </div>
      </FadeIn>
    );
  }

  // paragraph
  return (
    <FadeIn delay={200 + index * 40}>
      <p
        style={{
          fontSize: 17,
          fontFamily: FONTS.sans,
          color: SENTINEL.ink,
          lineHeight: 1.8,
          margin: "0 0 20px",
        }}
      >
        {block.text}
      </p>
    </FadeIn>
  );
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = ALL_ARTICLES.filter((a) => a.slug && a.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <FadeIn delay={400}>
      <div style={{ margin: "48px 0 0", padding: "32px 0", borderTop: `1px solid ${SENTINEL.border}` }}>
        <h3
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: SENTINEL.inkMuted,
            fontFamily: FONTS.sans,
            marginBottom: 20,
          }}
        >
          Continue Reading
        </h3>
        {related.map((article) => (
          <a
            key={article.slug}
            href={article.content ? `/article/${article.slug}` : undefined}
            style={{
              display: "block",
              padding: "16px 0",
              borderBottom: `1px solid ${SENTINEL.border}`,
              textDecoration: "none",
              cursor: article.content ? "pointer" : "default",
              opacity: article.content ? 1 : 0.5,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              {article.section && (
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: SENTINEL.sentinel, fontFamily: FONTS.sans }}>
                  {article.section}
                </span>
              )}
              <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: SENTINEL.sentinelAccent, fontFamily: FONTS.sans, background: SENTINEL.goldSoft, padding: "2px 8px", borderRadius: 3 }}>
                {article.tag}
              </span>
            </div>
            <h4 style={{ fontSize: 15, fontFamily: FONTS.serif, fontWeight: 500, color: SENTINEL.ink, margin: "0 0 4px", lineHeight: 1.35 }}>
              {article.title}
            </h4>
            <span style={{ fontSize: 11, color: SENTINEL.inkMuted, fontFamily: FONTS.sans }}>
              {article.readTime}
              {!article.content && " · Coming soon"}
            </span>
          </a>
        ))}
      </div>
    </FadeIn>
  );
}

function ArticleNotFound() {
  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h1 style={{ fontSize: 32, fontFamily: FONTS.serif, color: SENTINEL.sentinel, marginBottom: 16 }}>
            Article Not Found
          </h1>
          <p style={{ fontSize: 15, color: SENTINEL.inkLight, marginBottom: 24 }}>
            This article doesn&apos;t exist or hasn&apos;t been published yet.
          </p>
          <a
            href="/"
            style={{
              fontSize: 13,
              color: SENTINEL.accent,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ← Back to Litigation Sentinel
          </a>
        </div>
      </div>
    </div>
  );
}

function ComingSoon({ article }: { article: ReturnType<typeof getArticleBySlug> }) {
  if (!article) return <ArticleNotFound />;
  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Minimal header */}
        <div style={{ padding: "32px 0 16px", borderBottom: `2px solid ${SENTINEL.sentinel}` }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "clamp(24px, 4vw, 32px)", fontFamily: FONTS.serif, fontWeight: 700, color: SENTINEL.sentinel, letterSpacing: "-0.02em" }}>
              Litigation Sentinel
            </span>
          </a>
        </div>

        <ArticleHeader
          title={article.title}
          subtitle={article.subtitle}
          tag={article.tag}
          section={article.section}
          readTime={article.readTime}
          author={article.author}
          date={article.date}
          readers={article.readers}
        />

        <FadeIn delay={300}>
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontSize: 15, color: SENTINEL.inkLight, fontFamily: FONTS.sans }}>
              Full article coming soon.
            </p>
            <a
              href="/"
              style={{ fontSize: 13, color: SENTINEL.accent, fontWeight: 600, textDecoration: "none" }}
            >
              ← Back to Litigation Sentinel
            </a>
          </div>
        </FadeIn>

        <RelatedArticles currentSlug={article.slug || ""} />
        <SubscribeBlock delay={500} />
        <SentinelFooter delay={550} />
      </div>
      <ThemeToggle />
    </div>
  );
}

export default function ArticlePageClient() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) return <ArticleNotFound />;
  if (!article.content || article.content.length === 0) return <ComingSoon article={article} />;

  return (
    <div style={{ minHeight: "100vh", background: SENTINEL.bg, fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Minimal header — just the name, clickable back to home */}
        <div style={{ padding: "32px 0 16px", borderBottom: `2px solid ${SENTINEL.sentinel}` }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontFamily: FONTS.serif,
                fontWeight: 700,
                color: SENTINEL.sentinel,
                letterSpacing: "-0.02em",
              }}
            >
              Litigation Sentinel
            </span>
          </a>
        </div>

        <ArticleHeader
          title={article.title}
          subtitle={article.subtitle}
          tag={article.tag}
          section={article.section}
          readTime={article.readTime}
          author={article.author}
          date={article.date}
          readers={article.readers}
        />

        {/* Article body */}
        <div style={{ padding: "32px 0" }}>
          {article.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} />
          ))}
        </div>

        {/* Briefing CTA */}
        <FadeIn delay={350}>
          <div
            style={{
              margin: "32px 0",
              padding: "28px 32px",
              background: SENTINEL.sentinel,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 18, fontFamily: FONTS.serif, color: "#FFFFFF", margin: "0 0 8px", fontWeight: 600 }}>
              Want to see where your team stands?
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "0 0 16px", fontFamily: FONTS.sans }}>
              The Executive Briefing takes 2 minutes and shows you exactly where the gaps are.
            </p>
            <a
              href="/briefing"
              style={{
                display: "inline-block",
                padding: "10px 28px",
                background: SENTINEL.sentinelAccent,
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: FONTS.sans,
                borderRadius: 6,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Take the Executive Briefing →
            </a>
          </div>
        </FadeIn>

        <RelatedArticles currentSlug={slug} />
        <SubscribeBlock delay={500} />
        <SentinelFooter delay={550} />
      </div>
      <ThemeToggle />
    </div>
  );
}
