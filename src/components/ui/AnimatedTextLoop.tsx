'use client';

import { useState, useEffect } from 'react';

interface AnimatedTextLoopProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedTextLoop({
  phrases,
  interval = 4000,
  className = ''
}: AnimatedTextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Different animation for each phrase
  const animations = [
    'typewriter',    // Character by character
    'letterReveal',  // Letters appear with stagger
    'splitCenter',   // Split from center
    'wave',          // Wave effect
    'rotateFlip'     // 3D rotate and flip effect
  ];

  const currentAnimation = animations[currentIndex % animations.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(true);
      }, 800);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  const currentPhrase = phrases[currentIndex];

  // Typewriter animation
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    if (currentAnimation !== 'typewriter' || !isAnimating) {
      setDisplayText(currentPhrase);
      return;
    }

    let index = 0;
    setDisplayText('');
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

  // Render based on current animation
  if (currentAnimation === 'typewriter') {
    return (
      <div className={`${className} transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        <span>{displayText}</span>
        <span className="animate-pulse text-primary">|</span>
      </div>
    );
  }

  if (currentAnimation === 'letterReveal') {
    const letters = currentPhrase.split('');
    return (
      <div className={className}>
        {letters.map((letter, idx) => (
          <span
            key={`${currentIndex}-${idx}`}
            className={`inline-block transition-all duration-500 opacity-0  ${
              isAnimating ? 'animate-letter-reveal' : ''
            }`}
            style={{
              animationDelay: `${idx * 30}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
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
        ))}
      </div>
    );
  }

  if (currentAnimation === 'splitCenter') {
    const words = currentPhrase.split(' ');
    const mid = Math.ceil(words.length / 2);
    const leftWords = words.slice(0, mid);
    const rightWords = words.slice(mid);

    return (
      <div className={`${className} flex flex-wrap items-center justify-center gap-2`}>
        {leftWords.map((word, idx) => (
          <span
            key={`left-${idx}`}
            className={`opacity-0 -translate-x-16 ${
              isAnimating ? 'animate-slide-from-left' : ''
            }`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {word}
          </span>
        ))}
        {rightWords.map((word, idx) => (
          <span
            key={`right-${idx}`}
            className={`opacity-0 translate-x-16 ${
              isAnimating ? 'animate-slide-from-right' : ''
            }`}
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: 'forwards'
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

  if (currentAnimation === 'wave') {
    const words = currentPhrase.split(' ');
    return (
      <div className={`${className} flex flex-wrap items-center justify-center gap-2`}>
        {words.map((word, idx) => (
          <span
            key={`wave-${idx}`}
            className={`inline-block transition-all duration-700 ${
              isAnimating
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-75'
            }`}
            style={{
              transitionDelay: `${idx * 150}ms`,
              animation: isAnimating ? `wave 2s ease-in-out ${idx * 0.1}s infinite` : 'none'
            }}
          >
            {word}
          </span>
        ))}
        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    );
  }

  if (currentAnimation === 'rotateFlip') {
    const words = currentPhrase.split(' ');
    return (
      <div className={`${className} flex flex-wrap items-center justify-center gap-3`}>
        {words.map((word, idx) => (
          <span
            key={`rotate-${idx}`}
            className={`inline-block transition-all duration-700 ease-out ${
              isAnimating
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-180 scale-50'
            }`}
            style={{
              transitionDelay: `${idx * 120}ms`
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
