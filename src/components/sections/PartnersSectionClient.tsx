'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Partner, PartnerCategory, getAssetUrl } from '@/lib/api';

interface PartnersSectionClientProps {
  partners: Partner[];
  categories: PartnerCategory[];
}

export default function PartnersSectionClient({ partners, categories }: PartnersSectionClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasTouched = useRef(false);

  useEffect(() => {
    if (categories.length > 0 && !categories.some(c => c.id === activeCategory)) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          window.innerWidth < 768
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredPartners = activeCategory
    ? partners.filter((partner) => partner.partner_category === activeCategory)
    : partners;

  // Auto-scroll animation (desktop only)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile || filteredPartners.length === 0) return;

    const animate = (currentTime: number) => {
      if (!isPaused && !isDragging && container) {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = currentTime;
        }
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        const speed = 0.03 * deltaTime; // 30 pixels per second
        container.scrollLeft += speed;

        // Stop at the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset to start
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isPaused, isDragging, isMobile, filteredPartners]);

  // Desktop drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    if (!hasTouched.current && !isMobile) {
      setIsPaused(true);
    }
  };

  // Mobile touch handlers
  const handleTouchStart = () => {
    hasTouched.current = true;
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  // Manual scroll for arrows
  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 440; // Scroll by 2 cards
    const targetScroll =
      containerRef.current.scrollLeft +
      (direction === 'right' ? scrollAmount : -scrollAmount);
    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg md:rounded-full p-1.5 shadow-medium inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-lg md:rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category.partner_category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Partners Horizontal Scroller */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredPartners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No partners available in this category.</p>
            </div>
          ) : (
            <div className="relative w-full group">
              {/* Gradient Masks */}
              <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

              {/* Navigation Arrows - Desktop only, visible on hover */}
              {!isMobile && (
                <>
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Scroll left"
                    type="button"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Scroll right"
                    type="button"
                  >
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>
                </>
              )}

              {/* Scrollable Container */}
              <div
                ref={containerRef}
                className={`
                  flex overflow-x-auto gap-8 px-8 py-4 no-scrollbar
                  ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
                `}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'auto',
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {filteredPartners.map((partner, index) => (
                  <a
                    key={`${partner.id}-${index}`}
                    href={partner.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/card flex-shrink-0 w-[180px] md:w-[200px] select-none"
                    draggable={false}
                    onClick={(e) => {
                      if (isDragging) e.preventDefault();
                    }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 flex items-center justify-center h-32 group-hover/card:scale-105">
                      <img
                        src={getAssetUrl(partner.logo)}
                        alt={partner.name}
                        className="max-h-20 max-w-full object-contain transition-all duration-300"
                        draggable={false}
                      />
                    </div>
                    <p className="text-center mt-3 font-semibold text-sm text-gray-700 group-hover/card:text-primary transition-colors">
                      {partner.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
