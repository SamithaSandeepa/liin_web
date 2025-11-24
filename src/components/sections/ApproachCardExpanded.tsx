'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { ApproachCard } from '@/lib/types/home';

interface ApproachCardExpandedProps {
  cards: ApproachCard[];
}

export default function ApproachCardExpanded({ cards }: ApproachCardExpandedProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [mobileSlide, setMobileSlide] = useState(0);

  const handleBack = () => {
    setSelectedCard(null);
  };

  const goToNextSlide = () => {
    setMobileSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setMobileSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {selectedCard === null ? (
          /* Cards Grid */
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.15 }
            }}
            transition={{
              duration: 0.2
            }}
          >
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
                      className="min-w-full bg-white text-gray-900 shadow-lg rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedCard(idx)}
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-primary">{card.title}</h3>
                        <p className="text-sm mb-6 leading-relaxed text-gray-600">{card.desc}</p>
                        <motion.button
                          className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                          whileHover={{ gap: 8 }}
                        >
                          Learn More
                          <Zap size={16} />
                        </motion.button>
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
                      idx === mobileSlide ? 'bg-primary w-6' : 'bg-gray-300'
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
                    damping: 15
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="animate-on-scroll bg-white text-gray-900 shadow-lg hover:shadow-hard rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCard(idx)}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{card.title}</h3>
                    <p className="text-sm mb-6 leading-relaxed text-gray-600">{card.desc}</p>
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                      whileHover={{ gap: 8 }}
                    >
                      Learn More
                      <Zap size={16} />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Expanded Card View */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.15 }
            }}
            transition={{
              duration: 0.2
            }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Back Button */}
              <div className="bg-primary p-4">
                <motion.button
                  onClick={handleBack}
                  type="button"
                  className="inline-flex items-center gap-2 text-white font-semibold"
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft size={20} />
                  Back to All Approaches
                </motion.button>
              </div>

              {/* Content - Image Left, Details Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Left Side - Image */}
                <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={cards[selectedCard].img}
                    alt={cards[selectedCard].title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col">
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {cards[selectedCard].title}
                  </h2>

                  {/* Overview */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {cards[selectedCard].fullDetails?.overview}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {cards[selectedCard].fullDetails?.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Our Impact</h3>
                    <p className="leading-relaxed opacity-95">
                      {cards[selectedCard].fullDetails?.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
