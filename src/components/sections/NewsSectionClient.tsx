'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem, NewsCategory } from '@/lib/types/news';
import { getAssetUrl } from '@/lib/api';

interface NewsSectionClientProps {
  news: NewsItem[];
  categories: NewsCategory[];
  initialCategory?: string;
}

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

export default function NewsSectionClient({ news, categories, initialCategory }: NewsSectionClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');

  // Set initial category based on URL parameter or category name
  useEffect(() => {
    if (initialCategory && categories.length > 0) {
      // Try to find category by name (case-insensitive)
      const matchedCategory = categories.find(
        cat => cat.news_category.toLowerCase() === initialCategory.toLowerCase()
      );
      if (matchedCategory) {
        setActiveCategory(matchedCategory.id);
      }
    }
  }, [initialCategory, categories]);

  const filteredNews = activeCategory
    ? news.filter((item) => item.news_category === activeCategory)
    : news;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 shadow-medium inline-flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category.news_category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* News Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredNews.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No news articles available in this category.</p>
            </div>
          ) : (
            filteredNews.map((item) => (
              <article key={item.id} className="h-full">
                <div className="bg-white rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={getAssetUrl(item.image)}
                      alt={stripHtml(item.title)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
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
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                      {stripHtml(item.summary)}
                    </p>

                    {/* Read More Button */}
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
