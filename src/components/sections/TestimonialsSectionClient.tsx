'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/lib/api';

function getYouTubeEmbedUrl(url: string): string {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

interface TestimonialsSectionClientProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSectionClient({ testimonials }: TestimonialsSectionClientProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>
        </>
      )}

      {/* Testimonials Grid */}
      <div className={`grid grid-cols-1 ${currentTestimonials.length === 1 ? 'max-w-2xl mx-auto' : currentTestimonials.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : currentTestimonials.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
        {currentTestimonials.map((testimonial) => (
          <article key={testimonial.id} className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-shadow">
            <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(testimonial.youtube_url)}
                title="Testimonial video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              className="text-sm italic text-gray-600"
              dangerouslySetInnerHTML={{ __html: testimonial.testimonial_text }}
            />
          </article>
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentPage ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
