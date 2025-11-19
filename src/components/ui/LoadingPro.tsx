"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingProProps {
  message?: string;
}

/**
 * Clean Loading Component for LIIN
 * Simple, attractive, and matches the theme
 * Enhanced with fade-in animations matching the site's animation system
 */
export default function LoadingPro({
  message = "Loading...",
}: LoadingProProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white animate-fade-in">
        <div
          className={`flex flex-col items-center gap-6 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* Logo with spinning ring */}
          <div className="relative">
            {/* Spinning ring */}
            <div className="absolute inset-0 -m-4">
              <div className="w-[140px] h-[140px] border-4 border-gray-200 border-t-primary rounded-full animate-spin-slow" />
            </div>

            {/* Logo */}
            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="LIIN Logo"
                width={80}
                height={80}
                className="object-contain animate-pulse-subtle"
                priority
              />
            </div>
          </div>

          {/* Loading text with dots */}
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium">
              {message}
              <span className="inline-flex ml-1">
                <span
                  className="animate-bounce-dot"
                  style={{ animationDelay: "0ms" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce-dot"
                  style={{ animationDelay: "150ms" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce-dot"
                  style={{ animationDelay: "300ms" }}
                >
                  .
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-dot {
          0%,
          80%,
          100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 1s linear infinite;
        }

        .animate-bounce-dot {
          animation: bounce-dot 1.4s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
