"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Advertisement,
  getAssetUrl,
  shouldDisplayAd,
  markAdAsDisplayed,
} from "@/lib/api";

interface AdvertisementModalProps {
  advertisements: Advertisement[];
}


export default function AdvertisementModal({
  advertisements,
}: AdvertisementModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredAds, setFilteredAds] = useState<Advertisement[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Filter ads based on display frequency
  useEffect(() => {
    if (typeof window === "undefined") return;

    const adsToDisplay = advertisements.filter((ad) =>
      shouldDisplayAd(ad.id, ad.display_frequency)
    );

    setFilteredAds(adsToDisplay);

    // Show modal after page is fully loaded and stable (3 seconds)
    if (adsToDisplay.length > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        markAdAsDisplayed(adsToDisplay[0].id);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [advertisements]);

  // Reset image loaded state when ad changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // Auto-slide through ads (10 seconds each)
  useEffect(() => {
    if (!isOpen || filteredAds.length <= 1 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setImageLoaded(false);
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % filteredAds.length;
        markAdAsDisplayed(filteredAds[nextIndex].id);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isOpen, filteredAds.length, isAutoPlaying, filteredAds]);

  const handleClose = () => {
    setIsOpen(false);
  };



  // Navigate to next ad
  const handleNext = () => {
    setIsAutoPlaying(false);
    setImageLoaded(false);
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % filteredAds.length;
      markAdAsDisplayed(filteredAds[nextIndex].id);
      return nextIndex;
    });
  };

  const handlePreviousNav = () => {
    setIsAutoPlaying(false);
    setImageLoaded(false);
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + filteredAds.length) % filteredAds.length;
      markAdAsDisplayed(filteredAds[prevIndex].id);
      return prevIndex;
    });
  };

  if (filteredAds.length === 0) {
    return null;
  }

  const currentAd = filteredAds[currentIndex];

  // Check if ad has only image (no title or content)
  const isImageOnly = !currentAd.title && !currentAd.content;

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            {/* Main Wrapper: w-fit ensures it hugs the content (the image) */}
            <div className="relative w-fit max-w-[90vw] bg-white/0 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-2xl">
              
              {/* Top Bar Area - Only show when image is loaded */}
              <div className={`w-full bg-white h-12 md:h-14 flex items-center justify-center relative z-20 px-4 border-b border-gray-100 transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}>
                {/* Title/Action Button - Centered */}
                {currentAd.button_url ? (
                  <a
                    href={currentAd.button_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#007bff] hover:bg-[#0056b3] text-white text-xs md:text-sm font-bold py-1.5 px-6 rounded shadow transition-transform hover:scale-105 uppercase tracking-wide"
                  >
                    {currentAd.button_text || "REGISTER NOW"}
                  </a>
                ) : (
                   <span className="text-gray-800 font-bold text-base">
                      {currentAd.title || "ANNOUNCEMENT"}
                   </span>
                )}

                {/* Close Button - Right Aligned */}
                <button
                  onClick={handleClose}
                  className="absolute right-3 p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Close"
                >
                  <X size={20} className="text-black stroke-[3]" />
                </button>
              </div>

              {/* Image Area */}
              <div className="relative bg-black/5">
                 {currentAd.image && (
                   /* Image dictates width => w-auto. Height constrained => max-h */
                   <Image
                     src={getAssetUrl(currentAd.image)}
                     alt={currentAd.title || "Advertisement"}
                     width={800}
                     height={600}
                     className={`w-auto h-auto max-h-[95vh] md:max-h-[85vh] object-contain block transition-opacity duration-300 ${
                       imageLoaded ? "opacity-100" : "opacity-0"
                     }`}
                     onLoad={() => setImageLoaded(true)}
                     priority
                   />
                  )}

                  {/* Navigation Arrows (if multiple ads) - Only show when image is loaded */}
                  {filteredAds.length > 1 && imageLoaded && (
                    <>
                      <button
                        onClick={handlePreviousNav}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                        aria-label="Previous"
                      >
                        <ChevronLeft size={28} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                        aria-label="Next"
                      >
                        <ChevronRight size={28} />
                      </button>
                    </>
                  )}
                  
                   {/* Progress Dots (if multiple ads) - Only show when image is loaded */}
                   {filteredAds.length > 1 && imageLoaded && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                      {filteredAds.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsAutoPlaying(false);
                            setImageLoaded(false);
                            setCurrentIndex(index);
                            markAdAsDisplayed(filteredAds[index].id);
                          }}
                          className={`h-1.5 rounded-full transition-all shadow-sm ${
                            index === currentIndex
                              ? "w-6 bg-white"
                              : "w-1.5 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
