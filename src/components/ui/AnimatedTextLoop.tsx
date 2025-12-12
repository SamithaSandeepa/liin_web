"use client";

import { useState, useEffect } from "react";

interface AnimatedTextLoopProps {
  phrases: string[];
  interval?: number;
  durations?: number[]; // Custom duration for each phrase in milliseconds
  className?: string;
}

export default function AnimatedTextLoop({
  phrases,
  interval = 4000,
  durations,
  className = "",
}: AnimatedTextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Different animation for each phrase
  const animations = [
    "typewriter", // Character by character
    "letterReveal", // Letters appear with stagger
    "splitCenter", // Split from center
    "wave", // Wave effect
    "rotateFlip", // 3D rotate and flip effect
  ];

  const currentAnimation = animations[currentIndex % animations.length];

  // Smooth fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Simple continuous loop
  useEffect(() => {
    const currentDuration = durations?.[currentIndex] || interval;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(true);
      }, 800);
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, durations, interval, phrases.length]);

  const currentPhrase = phrases[currentIndex];

  // Typewriter animation
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    if (currentAnimation !== "typewriter" || !isAnimating) {
      setDisplayText(currentPhrase);
      return;
    }

    let index = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (index < currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [currentPhrase, currentAnimation, isAnimating]);

  // Smooth wrapper for all animations
  const wrapperClasses = `${className} transition-opacity duration-700 ${
    isReady ? "opacity-100" : "opacity-0"
  }`;

  // Render based on current animation
  if (currentAnimation === "typewriter") {
    // Split into words and show complete words + partial current word
    const words = displayText.split(" ");

    return (
      <div
        className={`${wrapperClasses} transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        } text-center`}
      >
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

  if (currentAnimation === "letterReveal") {
    const words = currentPhrase.split(" ");
    let letterCount = 0;

    return (
      <div className={`${wrapperClasses} text-center`}>
        <div className="inline-block max-w-full">
          {words.map((word, wordIdx) => (
            <span
              key={`word-${wordIdx}`}
              className="inline-block whitespace-nowrap mr-4"
            >
              {word.split("").map((letter, letterIdx) => {
                const currentLetterCount = letterCount++;
                return (
                  <span
                    key={`${currentIndex}-${wordIdx}-${letterIdx}`}
                    className={`inline-block transition-all duration-500 opacity-0  ${
                      isAnimating ? "animate-letter-reveal" : ""
                    }`}
                    style={{
                      animationDelay: `${currentLetterCount * 30}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {letter}
                    <style jsx>{`
                      @keyframes letter-reveal {
                        to {
                          opacity: 1;
                          transform: translateY(0);
                        }
                      }
                      .animate-letter-reveal {
                        animation: letter-reveal 0.5s ease-out forwards;
                      }
                    `}</style>
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (currentAnimation === "splitCenter") {
    const words = currentPhrase.split(" ");
    const mid = Math.ceil(words.length / 2);
    const leftWords = words.slice(0, mid);
    const rightWords = words.slice(mid);

    return (
      <div
        className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center overflow-hidden leading-none`}
      >
        {leftWords.map((word, idx) => (
          <span
            key={`left-${idx}`}
            className={`opacity-0 whitespace-nowrap ${
              isAnimating ? "animate-slide-from-left" : ""
            }`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
              transform: "translateX(-2rem)",
            }}
          >
            {word}
          </span>
        ))}
        {rightWords.map((word, idx) => (
          <span
            key={`right-${idx}`}
            className={`opacity-0 whitespace-nowrap ${
              isAnimating ? "animate-slide-from-right" : ""
            }`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
              transform: "translateX(2rem)",
            }}
          >
            {word}
          </span>
        ))}
        <style jsx>{`
          @keyframes slide-from-left {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-from-right {
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

  if (currentAnimation === "wave") {
    const words = currentPhrase.split(" ");
    return (
      <div
        className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center leading-none`}
      >
        {words.map((word, idx) => (
          <span
            key={`wave-${idx}`}
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
            0%,
            100% {
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

  if (currentAnimation === "rotateFlip") {
    const words = currentPhrase.split(" ");
    return (
      <div
        className={`${wrapperClasses} flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center leading-none`}
      >
        {words.map((word, idx) => (
          <span
            key={`rotate-${idx}`}
            className={`inline-block whitespace-nowrap transition-all duration-700 ease-out ${
              isAnimating
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-180 scale-50"
            }`}
            style={{
              transitionDelay: `${idx * 120}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  }

  return null;
}
