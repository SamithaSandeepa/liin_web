"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ApproachCard } from "@/lib/types/home";

interface ApproachCardExpandedProps {
  cards: ApproachCard[];
}

export default function ApproachCardExpanded({
  cards,
}: ApproachCardExpandedProps) {
  const [mobileSlide, setMobileSlide] = useState(0);

  const goToNextSlide = () => {
    setMobileSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setMobileSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      {/* Mobile: Single Card Slider */}
      <div className="md:hidden relative">
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-[140px] -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
          aria-label="Previous card"
        >
          <ChevronLeft size={24} className="text-primary" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-[140px] -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-hard transition-shadow"
          aria-label="Next card"
        >
          <ChevronRight size={24} className="text-primary" />
        </button>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${mobileSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="min-w-full bg-white text-gray-900 shadow-lg rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {card.title}
                  </h3>
                  <p className="text-sm mb-6 leading-relaxed text-gray-600 flex-grow">
                    {card.desc}
                  </p>
                  <Link
                    href={card.link || "#"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all hover:gap-3 mt-auto"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === mobileSlide ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              delay: idx * 0.05,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="animate-on-scroll bg-white text-gray-900 shadow-lg hover:shadow-hard rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {card.title}
              </h3>
              <p className="text-sm mb-6 leading-relaxed text-gray-600 flex-grow text-justify">
                {card.desc}
              </p>
              <Link
                href={card.link || "#"}
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all hover:gap-3 mt-auto"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
