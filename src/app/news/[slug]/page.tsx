import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchNewsBySlug, getAssetUrl, fixDirectusHtmlImages } from "@/lib/api";
import { Calendar, ArrowLeft } from "lucide-react";
import ShareButton from "./ShareButton";

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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const response = await fetchNewsBySlug(slug);

  if (!response.data || response.data.length === 0) {
    notFound();
  }

  const news = response.data[0];
  const processedContent = fixDirectusHtmlImages(news.content);

  return (
    <>
      {/* Hero with Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={getAssetUrl(news.image)}
          alt={stripHtml(news.title)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <Calendar size={16} />
              <time dateTime={news.publication_date}>
                {formatDate(news.publication_date)}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {stripHtml(news.title)}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Summary */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-primary">
            <p className="text-lg text-gray-700 italic">
              {stripHtml(news.summary)}
            </p>
          </div>

          {/* Main Content */}
          <div
            className="directus-content"
            dangerouslySetInnerHTML={{
              __html: processedContent,
            }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                Back to All News
              </Link>
              <ShareButton 
                title={stripHtml(news.title)}
                slug={slug}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const response = await fetchNewsBySlug(slug);

  if (!response.data || response.data.length === 0) {
    return {
      title: "News Not Found",
    };
  }

  const news = response.data[0];

  return {
    title: news.seo_title || stripHtml(news.title),
    description: news.seo_desc || stripHtml(news.summary),
  };
}
