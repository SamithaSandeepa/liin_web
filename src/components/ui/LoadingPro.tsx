"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HashLoader } from "react-spinners";

interface LoadingProProps {
  message?: string;
}

/**
 * Loading Component for LIIN using react-spinners HashLoader
 * Attractive hash spinner animation matching the brand colors
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
          className={`flex flex-col items-center gap-8 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* HashLoader Spinner */}
          <HashLoader 
            color="#438ac9" 
            size={80}
            speedMultiplier={1}
          />

          {/* Logo */}
          <div className="relative w-[100px] h-[100px] animate-pulse-subtle">
            <Image
              src="/images/LIIN_logo/Logomark_Full_Color.png"
              alt="LIIN Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Loading text with dots */}
          <div className="text-center">
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
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(0.98);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
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
