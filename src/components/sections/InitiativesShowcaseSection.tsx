'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import InvestmentBackground from '@/components/ui/InvestmentBackground';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import { useRef, useState } from 'react';

const platforms = [
  {
    name: 'Ath Pavura',
    logo: '/images/platformslogos/ath-pavura.png',
    description: 'Pioneering social entrepreneurship through reality TV, connecting innovators with impact investors.',
    link: '/initiatives/ath-pavura',
    icon: TrendingUp,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    name: "On Eagle's Wings",
    logo: '/images/platformslogos/oew-logo.gif',
    description: 'A transformative journey nurturing SMEs into key drivers of the national economy.',
    link: '/initiatives/eagles-wings',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    name: 'Awakasha',
    logo: '/images/platformslogos/awakasha.png',
    description: 'Empowering the next generation of digital innovators through technology and mentorship.',
    link: '/projects/pif',
    icon: Globe,
    color: 'text-primary-dark',
    bg: 'bg-primary-dark/10',
    border: 'border-primary-dark/20',
  },
];

// Duplicate items for infinite loop
const loopedPlatforms = [...platforms, ...platforms, ...platforms, ...platforms];

export default function InitiativesShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  // Auto-scroll Logic
  useAnimationFrame((time, delta) => {
    const container = containerRef.current;
    if (!container || isHovered || isTouching) return;

    // Scroll speed (pixels per frame)
    const speed = 0.5;
    container.scrollLeft += speed;

    // Infinite Loop Logic
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    }
  });

  return (
    <Section
      id="initiatives"
      className="relative overflow-hidden !pb-8"
      background="white"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <InvestmentBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
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
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Scrollable Area */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-8 px-8 pt-4 no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
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
                className="relative block flex-shrink-0 w-[300px] md:w-[380px]"
                draggable={false}
              >
                {/* 
                  Removed Card UI: 
                  - No bg-white/xx
                  - No border
                  - No shadow
                  - Kept structural padding and hover lift
                */}
                <div className={`
                  group/card h-full p-6 transition-all duration-300
                  hover:-translate-y-2
                `}>
                  
                  {/* Icon Badge - Kept as purely decorative floating element if desired, or remove. Keeping for now. */}
                  {/* <div className={`
                    absolute top-0 right-4 w-10 h-10 rounded-full flex items-center justify-center
                    opacity-0 group-hover/card:opacity-100 transition-all duration-300
                    ${platform.bg} ${platform.color}
                  `}>
                    <platform.icon size={18} />
                  </div> */}

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
        <div className="text-center md:hidden text-gray-400 text-sm mt-4 animate-pulse">
           Swipe to explore
        </div>
      </div>
    </Section>
  );
}
