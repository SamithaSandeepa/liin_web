"use client";

import { useState, useEffect, useCallback, RefObject } from "react";

interface VideoSyncedTextProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  phrases: string[];
  durations: number[];
  className?: string;
}

/**
 * VideoSyncedText - Syncs text animation to video playback time
 * 
 * TIMER ADJUSTMENTS:
 * - Line 108: Fade out duration (300ms) - time for text to fade out before changing
 * - Line 84: Fallback fade duration (400ms) - used when no video
 * - Line 148: Typewriter speed (60ms per character)
 */
export default function VideoSyncedText({
  videoRef,
  phrases,
  durations,
  className = "",
}: VideoSyncedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [displayText, setDisplayText] = useState(phrases[0] || "");

  // Different animation for each phrase (same as original AnimatedTextLoop)
  const animations = [
    "typewriter",    // Character by character typing
    "letterReveal",  // Letters appear with stagger
    "splitCenter",   // Words split from center
    "wave",          // Wave effect on words
    "rotateFlip",    // 3D rotate and flip effect
  ];

  const currentAnimation = animations[currentIndex % animations.length];

  const getStartTimes = useCallback(() => {
    const times: number[] = [0];
    for (let i = 0; i < durations.length - 1; i++) {
      times.push(times[i] + durations[i]);
    }
    return times;
  }, [durations]);

  const totalDuration = durations.reduce((a, b) => a + b, 0);
  const startTimes = getStartTimes();

  const getPhraseIndexForTime = useCallback(
    (timeMs: number): number => {
      const cycleTime = timeMs % totalDuration;
      for (let i = startTimes.length - 1; i >= 0; i--) {
        if (cycleTime >= startTimes[i]) {
          return i;
        }
      }
      return 0;
    },
    [startTimes, totalDuration]
  );

  // Smooth fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sync with video timeupdate
  useEffect(() => {
    const video = videoRef.current;
    
    // Fallback timer-based animation if no video
    if (!video) {
      let idx = 0;
      const runTimer = () => {
        setIsAnimating(false);
        setTimeout(() => {
          idx = (idx + 1) % phrases.length;
          setCurrentIndex(idx);
          setDisplayText(phrases[idx]);
          setIsAnimating(true);
        }, 400); // ← ADJUST: Fade transition duration (fallback)
      };

      setDisplayText(phrases[0]);
      setIsAnimating(true);

      const timers: NodeJS.Timeout[] = [];
      let elapsed = durations[0];
      
      for (let i = 0; i < 100; i++) {
        const timer = setTimeout(runTimer, elapsed);
        timers.push(timer);
        elapsed += durations[(i + 1) % durations.length];
      }

      return () => timers.forEach(clearTimeout);
    }

    let lastIndex = -1;

    const handleTimeUpdate = () => {
      const currentTimeMs = video.currentTime * 1000;
      const newIndex = getPhraseIndexForTime(currentTimeMs);

      if (newIndex !== lastIndex) {
        setIsAnimating(false);
        setTimeout(() => {
          setCurrentIndex(newIndex);
          setDisplayText(phrases[newIndex]);
          setIsAnimating(true);
        }, 300); // ← ADJUST: Fade out/in transition duration
        lastIndex = newIndex;
      }
    };

    const initialSync = () => {
      const currentTimeMs = video.currentTime * 1000;
      const newIndex = getPhraseIndexForTime(currentTimeMs);
      setCurrentIndex(newIndex);
      setDisplayText(phrases[newIndex]);
      setIsAnimating(true);
      lastIndex = newIndex;
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("playing", initialSync);
    video.addEventListener("loadeddata", initialSync);

    if (video.readyState >= 1) {
      initialSync();
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("playing", initialSync);
      video.removeEventListener("loadeddata", initialSync);
    };
  }, [videoRef, getPhraseIndexForTime, phrases, durations]);

  // Typewriter effect
  const [typewriterText, setTypewriterText] = useState("");
  useEffect(() => {
    if (currentAnimation !== "typewriter" || !isAnimating) {
      setTypewriterText(displayText);
      return;
    }

    let index = 0;
    setTypewriterText("");
    const timer = setInterval(() => {
      if (index < displayText.length) {
        setTypewriterText(displayText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60); // ← ADJUST: Typewriter speed (ms per character)

    return () => clearInterval(timer);
  }, [displayText, currentAnimation, isAnimating]);

  // Wrapper classes
  const wrapperClasses = `${className} transition-opacity duration-700 ${
    isReady ? "opacity-100" : "opacity-0"
  }`;

  // ========== TYPEWRITER ANIMATION ==========
  if (currentAnimation === "typewriter") {
    const words = typewriterText.split(" ");
    return (
      <div className={`${wrapperClasses} transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"} text-center`}>
        <div className="inline-block max-w-full">
          {words.map((word, idx) => (
            <span key={idx} className="inline-block whitespace-nowrap mr-4">
              {word}
            </span>
          ))}
          <span className="animate-pulse text-primary">|</span>
        </div>
      </div>
    );
  }

  // ========== LETTER REVEAL ANIMATION ==========
  if (currentAnimation === "letterReveal") {
    const words = displayText.split(" ");
    let letterCount = 0;

    return (
      <div className={`${wrapperClasses} text-center`}>
        <div className="inline-block max-w-full">
          {words.map((word, wordIdx) => (
            <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap mr-4">
              {word.split("").map((letter, letterIdx) => {
                const currentLetterCount = letterCount++;
                return (
                  <span
                    key={`${currentIndex}-${wordIdx}-${letterIdx}`}
                    className={`inline-block transition-all duration-500 opacity-0 ${
                      isAnimating ? "animate-letter-reveal" : ""
                    }`}
                    style={{
                      animationDelay: `${currentLetterCount * 30}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes letter-reveal {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-letter-reveal {
            animation: letter-reveal 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  // ========== SPLIT CENTER ANIMATION ==========
  if (currentAnimation === "splitCenter") {
    const words = displayText.split(" ");
    const mid = Math.ceil(words.length / 2);
    const leftWords = words.slice(0, mid);
    const rightWords = words.slice(mid);

    return (
      <div className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center overflow-hidden leading-none`}>
        {leftWords.map((word, idx) => (
          <span
            key={`left-${currentIndex}-${idx}`}
            className={`whitespace-nowrap ${isAnimating ? "animate-slide-from-left" : ""}`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        ))}
        {rightWords.map((word, idx) => (
          <span
            key={`right-${currentIndex}-${idx}`}
            className={`whitespace-nowrap ${isAnimating ? "animate-slide-from-right" : ""}`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        ))}
        <style jsx>{`
          @keyframes slide-from-left {
            from {
              opacity: 0;
              transform: translateX(-2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-from-right {
            from {
              opacity: 0;
              transform: translateX(2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-from-left {
            animation: slide-from-left 0.7s ease-out forwards;
          }
          .animate-slide-from-right {
            animation: slide-from-right 0.7s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  // ========== WAVE ANIMATION ==========
  if (currentAnimation === "wave") {
    const words = displayText.split(" ");
    return (
      <div className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center leading-none`}>
        {words.map((word, idx) => (
          <span
            key={`wave-${currentIndex}-${idx}`}
            className={`inline-block whitespace-nowrap transition-all duration-700 ${
              isAnimating
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-75"
            }`}
            style={{
              transitionDelay: `${idx * 150}ms`,
              animation: isAnimating
                ? `wave 2s ease-in-out ${idx * 0.1}s infinite`
                : "none",
            }}
          >
            {word}
          </span>
        ))}
        <style jsx>{`
          @keyframes wave {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    );
  }

  // ========== ROTATE FLIP ANIMATION ==========
  if (currentAnimation === "rotateFlip") {
    const words = displayText.split(" ");
    return (
      <div className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center leading-none`}>
        {words.map((word, idx) => (
          <span
            key={`rotate-${currentIndex}-${idx}`}
            className={`inline-block whitespace-nowrap ${isAnimating ? "animate-rotate-flip" : ""}`}
            style={{
              animationDelay: `${idx * 120}ms`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        ))}
        <style jsx>{`
          @keyframes rotate-flip {
            from {
              opacity: 0;
              transform: rotateY(-180deg) scale(0.5);
            }
            to {
              opacity: 1;
              transform: rotateY(0deg) scale(1);
            }
          }
          .animate-rotate-flip {
            animation: rotate-flip 0.8s ease-out forwards;
            perspective: 1000px;
          }
        `}</style>
      </div>
    );
  }

  return null;
}
