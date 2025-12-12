import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { fetchNews, fetchNewsCategories, getAssetUrl } from "@/lib/api";
import { NewsItem, NewsCategory } from "@/lib/types/news";
import { Calendar, ArrowRight } from "lucide-react";
import NewsSectionClient from "@/components/sections/NewsSectionClient";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  let news: NewsItem[] = [];
  let categories: NewsCategory[] = [];

  // Await searchParams
  const params = await searchParams;

  try {
    const [newsRes, categoriesRes] = await Promise.all([
      fetchNews(),
      fetchNewsCategories(),
    ]);
    news =
      newsRes.data?.filter((item: NewsItem) => item.status === "published") ||
      [];
    categories =
      categoriesRes.data?.filter(
        (cat: NewsCategory) => cat.status === "published"
      ) || [];
  } catch (error) {
    console.error("Failed to fetch news data:", error);
  }

  return (
    <>
      <HeroSection
        title="News & Insights"
        subtitle="Stay updated with the latest from LIIN"
        backgroundImage="/images/news/cover.jpg"
      />

      <Section id="news-list" title="Latest News">
        <NewsSectionClient
          news={news}
          categories={categories}
          initialCategory={params.category}
        />
      </Section>
    </>
  );
}
