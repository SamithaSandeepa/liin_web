'use client';

import { useRef, useEffect } from 'react';
import AnimatedTextLoop from '@/components/ui/AnimatedTextLoop';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  animatedPhrases?: string[];
  backgroundImage?: string;
  backgroundVideo?: string;
  height?: 'default' | 'fullscreen';
}

export default function HeroSection({
  title,
  subtitle,
  animatedPhrases,
  backgroundImage,
  backgroundVideo,
  height = 'default'
}: HeroSectionProps) {
  const heightClass = height === 'fullscreen' ? 'min-h-screen' : 'min-h-[600px]';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        // Ensure muted is true (React hydration mismatch fallback)
        videoRef.current.muted = true;
        // Force play programmatically
        videoRef.current.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
  }, [backgroundVideo]);

  return (
    <section
      id="home"
      className={`relative ${heightClass} flex items-center justify-center text-center text-white overflow-hidden`}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Image (fallback or primary) */}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          role="img"
          aria-label="Hero background"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {animatedPhrases ? (
          <AnimatedTextLoop
            phrases={animatedPhrases}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight text-shadow-lg min-h-[200px] flex items-center justify-center"
          />
        ) : (
          <>
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg mb-6 animate-fade-in-up">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                {subtitle}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
