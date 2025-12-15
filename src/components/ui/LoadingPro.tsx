"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingProProps {
  message?: string;
}

/**
 * Loading Component for LIIN with centered logo and circular spinner
 * Clean centered design with spinning rings around the logo
 */
export default function LoadingPro({
  message = "Loading...",
}: LoadingProProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90">
      <div
        className={`flex flex-col items-center justify-center gap-8 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Spinner Container - All elements centered */}
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          {/* Outer Rotating Ring with Gradient */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
            {/* Orbiting dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
            <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-secondary rounded-full shadow-lg"></div>
          </div>

          {/* Middle Spinning Border */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin">
            <div className="w-[120px] h-[120px] rounded-full border-4 border-transparent border-t-primary border-r-secondary"></div>
          </div>

          {/* Inner Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-glow"></div>
          </div>

          {/* Centered Logo */}
          <div className="relative z-10 animate-float mt-2">
            <Image
              src="/images/LIIN_logo/Logomark_Full_Color.png"
              alt="LIIN Logo"
              width={60}
              height={60}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        {/* <div className="text-center">
          <p className="text-primary text-xl font-semibold">
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
        </div> */}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-dot {
          animation: bounce-dot 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
