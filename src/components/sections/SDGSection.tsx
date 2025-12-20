"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { sdgImages } from "@/lib/data/sdgs";

export default function SDGSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(sdgImages.length / itemsPerPage);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <Section
      id="sdg"
      title="Driving Impact Aligned with the SDGs"
      background="white"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed text-justify">
          At Lanka Impact Investing Network (LIIN), our initiatives are closely
          aligned with the United Nations Sustainable Development Goals (SDGs)
          Agenda 2030. Through our investments and programs, we strive to foster
          inclusive economic growth, promote sustainable business practices,
          empower women, and build partnerships that generate lasting social and
          environmental impact across Sri Lanka.
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative px-12">
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
          aria-label="Previous SDGs"
        >
          <ChevronLeft size={24} className="text-primary" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
          aria-label="Next SDGs"
        >
          <ChevronRight size={24} className="text-primary" />
        </button>

        <div className="overflow-hidden">
          <motion.div
            className="grid grid-cols-2 gap-6"
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {sdgImages
              .slice(
                currentSlide * itemsPerPage,
                (currentSlide + 1) * itemsPerPage
              )
              .map((sdg, idx) => (
                <div
                  key={`${currentSlide}-${idx}`}
                  className="w-full aspect-square"
                >
                  <Image
                    src={sdg.src}
                    alt={sdg.alt}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Flex Wrap */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-8">
        {sdgImages.map((sdg, idx) => (
          <div
            key={idx}
            className="w-28 h-28 hover:scale-110 transition-transform"
          >
            <Image
              src={sdg.src}
              alt={sdg.alt}
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
