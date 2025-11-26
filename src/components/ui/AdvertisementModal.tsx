'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Advertisement, getAssetUrl, shouldDisplayAd, markAdAsDisplayed } from '@/lib/api';

interface AdvertisementModalProps {
  advertisements: Advertisement[];
}

/**
 * Professional Advertisement Modal with Auto-Slider
 * 
 * Features:
 * - Auto-slides through multiple ads (10 seconds each)
 * - Manual navigation controls
 * - Respects display frequency (always, once per day, once per session)
 * - Shows after page load completes
 * - Professional animations and styling
 * - Fully responsive
 */
export default function AdvertisementModal({ advertisements }: AdvertisementModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredAds, setFilteredAds] = useState<Advertisement[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter ads based on display frequency
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const adsToDisplay = advertisements.filter(ad => 
      shouldDisplayAd(ad.id, ad.display_frequency)
    );

    setFilteredAds(adsToDisplay);

    // Show modal after a short delay (page load complete)
    if (adsToDisplay.length > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark first ad as displayed
        markAdAsDisplayed(adsToDisplay[0].id);
      }, 1500); // 1.5 seconds after page load

      return () => clearTimeout(timer);
    }
  }, [advertisements]);

  // Auto-slide through ads (10 seconds each)
  useEffect(() => {
    if (!isOpen || filteredAds.length <= 1 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % filteredAds.length;
        // Mark next ad as displayed
        markAdAsDisplayed(filteredAds[nextIndex].id);
        return nextIndex;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isOpen, filteredAds.length, isAutoPlaying, filteredAds]);

  // Close modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // Navigate to previous ad
  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + filteredAds.length) % filteredAds.length;
      markAdAsDisplayed(filteredAds[prevIndex].id);
      return prevIndex;
    });
  };

  // Navigate to next ad
  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % filteredAds.length;
      markAdAsDisplayed(filteredAds[nextIndex].id);
      return nextIndex;
    });
  };

  if (filteredAds.length === 0) return null;

  const currentAd = filteredAds[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Close advertisement"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Navigation Buttons (if multiple ads) */}
              {filteredAds.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                    aria-label="Previous advertisement"
                  >
                    <ChevronLeft size={24} className="text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                    aria-label="Next advertisement"
                  >
                    <ChevronRight size={24} className="text-gray-700" />
                  </button>
                </>
              )}

              {/* Content Container */}
              <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 hover:scrollbar-thumb-primary-dark">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAd.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image Section */}
                    {currentAd.image && (
                      <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-primary to-primary-light">
                        <Image
                          src={getAssetUrl(currentAd.image)}
                          alt={currentAd.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6 md:p-8 lg:p-10">
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {currentAd.title}
                      </h2>

                      {/* Content (HTML) */}
                      <div
                        className="prose prose-lg max-w-none text-gray-700 mb-6"
                        dangerouslySetInnerHTML={{ __html: currentAd.content }}
                      />

                      {/* CTA Button */}
                      {currentAd.button_text && currentAd.button_url && (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href={currentAd.button_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all hover:scale-105 shadow-primary"
                          >
                            {currentAd.button_text}
                          </a>
                          <button
                            onClick={handleClose}
                            className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full transition-all"
                          >
                            Close
                          </button>
                        </div>
                      )}

                      {/* Progress Indicators (if multiple ads) */}
                      {filteredAds.length > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-6">
                          {filteredAds.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                                markAdAsDisplayed(filteredAds[index].id);
                              }}
                              className={`h-2 rounded-full transition-all ${
                                index === currentIndex
                                  ? 'w-8 bg-primary'
                                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                              }`}
                              aria-label={`Go to advertisement ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Ad Counter */}
                      {filteredAds.length > 1 && (
                        <p className="text-center text-sm text-gray-500 mt-4">
                          {currentIndex + 1} of {filteredAds.length}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
