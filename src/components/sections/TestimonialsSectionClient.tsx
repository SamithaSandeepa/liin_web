"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Testimonial } from "@/lib/api";

function getYouTubeEmbedUrl(url: string): string {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

interface TestimonialsSectionClientProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSectionClient({
  testimonials,
}: TestimonialsSectionClientProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const itemsPerPage = 3;
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
    <div className="relative px-4 md:px-12">
      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
            aria-label="Previous testimonials"
            type="button"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
            aria-label="Next testimonials"
            type="button"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>
        </>
      )}

      {/* Testimonials Grid */}
      <div
        className={`grid grid-cols-1 ${
          currentTestimonials.length === 1
            ? "max-w-2xl mx-auto"
            : currentTestimonials.length === 2
            ? "md:grid-cols-2 max-w-4xl mx-auto"
            : currentTestimonials.length === 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-4"
        } gap-8`}
      >
        {currentTestimonials.map((testimonial, idx) => (
          <article
            key={`${testimonial.id}-${currentPage}`}
            className="transition-all duration-500 opacity-0 animate-fade-in cursor-pointer"
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
            }}
            onClick={() => setSelectedVideo(testimonial.youtube_url)}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-soft hover:shadow-medium transition-shadow">
              <iframe
                key={`iframe-${testimonial.id}-${currentPage}`}
                src={`${getYouTubeEmbedUrl(
                  testimonial.youtube_url
                )}?enablejsapi=1`}
                title="Testimonial video"
                className="w-full h-full border-0 pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <style jsx>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fade-in {
                animation: fade-in 0.6s ease-out forwards;
              }
            `}</style>
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
                idx === currentPage
                  ? "bg-primary w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="text-gray-800" />
            </button>
            <iframe
              src={`${getYouTubeEmbedUrl(selectedVideo)}?autoplay=1&enablejsapi=1`}
              title="Video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <style jsx>{`
            @keyframes fade-in-modal {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes scale-in {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-fade-in-modal {
              animation: fade-in-modal 0.3s ease-out;
            }
            .animate-scale-in {
              animation: scale-in 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
