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
    const video = videoRef.current;
    if (video) {
        // Essential for mobile autoplay
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        
        const playVideo = async () => {
            try {
                await video.play();
            } catch (err) {
                console.log("Video autoplay failed:", err);
            }
        };
        
        // Try to play immediately
        playVideo();
        
        // Retry on user interaction (for strict mobile policies)
        const handleInteraction = () => {
            playVideo();
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('click', handleInteraction);
        };
        
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('click', handleInteraction, { once: true });
        
        return () => {
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('click', handleInteraction);
        };
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
          controls={false}
          preload="auto"
          poster={backgroundImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Background Image (fallback or primary) */}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-cover"
          style={{ 
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: 'no-repeat'
          }}
          role="img"
          aria-label="Hero background"
        >
            {/* Mobile-optimized background: contain for small screens if needed, otherwise cover */}
            <style jsx>{`
                @media (max-width: 768px) {
                    div[role="img"] {
                        background-size: contain;
                        background-color: #000; /* Fallback color for letterboxing */
                        background-attachment: scroll;
                    }
                }
            `}</style>
        </div>
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
