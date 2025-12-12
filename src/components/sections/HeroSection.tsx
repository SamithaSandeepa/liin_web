"use client";

import { useRef, useEffect, useState } from "react";
import AnimatedTextLoop from "@/components/ui/AnimatedTextLoop";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  animatedPhrases?: string[];
  phraseDurations?: number[]; // Custom duration for each phrase in milliseconds
  backgroundImage?: string;
  backgroundVideo?: string;
  height?: "default" | "fullscreen";
  buttonText?: string | null;
  buttonUrl?: string | null;
  backgroundSize?: "cover" | "contain"; // New prop to control background sizing
}

export default function HeroSection({
  title,
  subtitle,
  animatedPhrases,
  phraseDurations,
  backgroundImage,
  backgroundVideo,
  height = "default",
  buttonText,
  buttonUrl,
  backgroundSize = "cover", // Default to cover for backward compatibility
}: HeroSectionProps) {
  const heightClass =
    height === "fullscreen" ? "min-h-[100dvh]" : "w-full aspect-video";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Essential for mobile autoplay
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");

      // Multiple events to ensure video shows
      const handleVideoReady = () => {
        setVideoLoaded(true);
      };

      // Listen to multiple events for better compatibility
      video.addEventListener("loadeddata", handleVideoReady);
      video.addEventListener("canplay", handleVideoReady);
      video.addEventListener("playing", handleVideoReady);

      // Fallback: show video after short delay to ensure loader is gone
      const fallbackTimer = setTimeout(() => {
        setVideoLoaded(true);
      }, 1500);

      const playVideo = async () => {
        try {
          // Wait a bit for page loader to disappear first
          await new Promise(resolve => setTimeout(resolve, 100));
          await video.play();
          setVideoLoaded(true); // Also set on successful play
        } catch (err) {
          console.log("Video autoplay failed:", err);
          setVideoLoaded(true); // Show video anyway even if autoplay fails
        }
      };

      // Delay play attempt to ensure loader doesn't interfere
      const playTimer = setTimeout(() => {
        playVideo();
      }, 200);

      return () => {
        clearTimeout(playTimer);
        clearTimeout(fallbackTimer);
        video.removeEventListener("loadeddata", handleVideoReady);
        video.removeEventListener("canplay", handleVideoReady);
        video.removeEventListener("playing", handleVideoReady);
      };

    }

    // Retry on user interaction (for strict mobile policies)
    const handleInteraction = () => {
      const vid = videoRef.current;
      if (vid) {
        vid.play().catch(() => {
          setVideoLoaded(true); // Show anyway
        });
      }
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("touchstart", handleInteraction, {
      once: true,
    });
    document.addEventListener("click", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: "none" }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Background Image (fallback or primary) */}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: backgroundSize, // Use the prop value
          }}
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
            durations={phraseDurations}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-snug md:leading-tight text-shadow-lg min-h-[100px] md:min-h-[200px] flex items-center justify-center"
          />
        ) : (
          <>
            {title && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-shadow-lg mb-6 animate-fade-in-up">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                {subtitle}
              </p>
            )}

            {/* Call to Action Button */}
            {buttonText && buttonUrl && (
              <div className="mt-8 animate-fade-in-up animation-delay-500">
                <a
                  href={buttonUrl}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {buttonText}
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
