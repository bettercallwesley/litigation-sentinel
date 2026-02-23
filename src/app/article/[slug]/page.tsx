import type { Metadata } from "next";
import { getArticleBySlug, getAllArticleSlugs } from "@/data/newsletter-articles";
import ArticlePageClient from "./ArticlePageClient";

const BASE_URL = "https://litigationsentinel.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found — Litigation Sentinel",
      description: "This article does not exist or has not been published yet.",
    };
  }

  const title = `${article.title} — Litigation Sentinel`;
  const description = article.subtitle;
  const url = `${BASE_URL}/article/${params.slug}`;

  return {
    title,
    description,
    authors: article.author ? [{ name: article.author }] : undefined,
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url,
      siteName: "Litigation Sentinel",
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default function ArticlePage() {
  return <ArticlePageClient />;
}
