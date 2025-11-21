import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import Link from 'next/link';
import { fetchNews, getAssetUrl } from '@/lib/api';
import { NewsItem } from '@/lib/types/news';
import { Calendar, ArrowRight } from 'lucide-react';

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function NewsPage() {
  let news: NewsItem[] = [];

  try {
    const response = await fetchNews();
    news = response.data?.filter((item: NewsItem) => item.status === 'published') || [];
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }

  return (
    <>
      <HeroSection
        title="News & Insights"
        subtitle="Stay updated with the latest from LIIN"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920"
      />

      <Section
        id="news-list"
        title="Latest News"
      >
        <div className="max-w-6xl mx-auto">
          {news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No news articles available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item: NewsItem) => (
                <article key={item.id} className="animate-on-scroll">
                  <div className="bg-white rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={getAssetUrl(item.image)}
                        alt={stripHtml(item.title)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar size={14} />
                        <time dateTime={item.publication_date}>
                          {formatDate(item.publication_date)}
                        </time>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {stripHtml(item.title)}
                      </h3>

                      {/* Summary */}
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {stripHtml(item.summary)}
                      </p>

                      {/* Read More Button */}
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
