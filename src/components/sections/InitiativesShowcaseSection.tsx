'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import PlatformsBackground from '@/components/ui/PlatformsBackground';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const platforms = [
  {
    name: 'Ath Pavura',
    logo: '/images/platformslogos/ath-pavura.png',
    description: 'Pioneering social entrepreneurship through reality TV, connecting innovators with impact investors.',
    link: '/initiatives/ath-pavura',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    name: "On Eagle's Wings",
    logo: '/images/platformslogos/oew-logo.gif',
    description: 'A transformative journey nurturing SMEs into key drivers of the national economy.',
    link: '/initiatives/eagles-wings',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    name: 'Awakasha',
    logo: '/images/platformslogos/awakasha.png',
    description: 'Empowering the next generation of digital innovators through technology and mentorship.',
    link: '/projects/pif',
    color: 'text-primary-dark',
    bg: 'bg-primary-dark/10',
    border: 'border-primary-dark/20',
  },
];

// Duplicate items for infinite loop
const loopedPlatforms = [...platforms, ...platforms, ...platforms, ...platforms];

export default function InitiativesShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for interaction handling
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isTouchInteraction = useRef(false);
  const hasTouched = useRef(false);

  // Auto-scroll Logic
  useAnimationFrame((time, delta) => {
    const container = containerRef.current;
    if (!container || isPaused || isDragging) return;

    // Scroll speed (pixels per frame)
    const speed = 0.5;
    container.scrollLeft += speed;

    // Infinite Loop Logic
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    }
  });

  // Desktop Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll-fast multiplier
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
    // If the user has ever touched the screen, ignore mouse hover events forever.
    // This prevents "sticky hover" on mobile from pausing the slider.
    if (!hasTouched.current) {
        setIsPaused(true);
    }
  };

  // Mobile Touch Handlers
  const handleTouchStart = () => {
    isTouchInteraction.current = true;
    hasTouched.current = true; // Mark as touch device
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume auto-scroll after a short delay to let momentum settle
    setTimeout(() => {
        setIsPaused(false);
        isTouchInteraction.current = false;
    }, 1000);
  };

  return (
    <Section
      id="initiatives"
      className="relative overflow-hidden !pb-8"
      background="gray"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <PlatformsBackground />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
          >
            Our Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Driving transformative change through innovative programs
          </motion.p>
        </div>

        {/* Interactive Slider Container */}
        <div className="w-full relative group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

          {/* Scrollable Area */}
          <div 
            ref={containerRef}
            className={`
                flex overflow-x-auto gap-8 px-8 pt-4 no-scrollbar 
                ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
            `}
            // Mouse Events (Desktop Drag & Hover)
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            
            // Touch Events (Mobile Swipe)
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}

            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Hide scrollbar for Webkit */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {loopedPlatforms.map((platform, index) => (
              <Link 
                href={platform.link} 
                key={`${platform.name}-${index}`}
                className="relative block flex-shrink-0 w-[300px] md:w-[380px] select-none" // select-none prevents text selection while dragging
                draggable={false}
                onClick={(e) => {
                    // Prevent navigation if it was a drag gesture
                    if (isDragging) e.preventDefault();
                }}
              >
                {/* Clean Floating Item */}
                <div className={`
                  group/card h-full p-6 transition-all duration-300
                  hover:-translate-y-2
                `}>

                  {/* Logo Container */}
                  <div className="relative w-full h-24 mb-6 flex items-start justify-start grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100 transition-all duration-500">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={200}
                      height={100}
                      className="object-contain object-left h-full w-auto"
                      draggable={false}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover/card:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base border-l-2 border-transparent group-hover/card:border-primary/30 pl-0 group-hover/card:pl-3 transition-all duration-300">
                    {platform.description}
                  </p>

                  {/* Learn More Link */}
                  <div className={`
                    inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs
                    ${platform.color} opacity-0 group-hover/card:opacity-100 transition-all
                  `}>
                    Explore Platform
                    <ArrowRight size={16} className="transform group-hover/card:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Swipe Hint */}
        {/* <div className="text-center md:hidden text-gray-400 text-sm mt-4 animate-pulse">
           Swipe to explore
        </div> */}
      </div>
    </Section>
  );
}
