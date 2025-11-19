'use client';

import Image from 'next/image';

interface LoadingProProps {
  message?: string;
}

/**
 * Clean Loading Component for LIIN
 * Simple, attractive, and matches the theme
 */
export default function LoadingPro({ message = 'Loading...' }: LoadingProProps) {
  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-6">
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
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Loading text with dots */}
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium">
              {message}
              <span className="inline-flex ml-1">
                <span className="animate-bounce-dot" style={{ animationDelay: '0ms' }}>.</span>
                <span className="animate-bounce-dot" style={{ animationDelay: '150ms' }}>.</span>
                <span className="animate-bounce-dot" style={{ animationDelay: '300ms' }}>.</span>
              </span>
            </p>
          </div>
        </div>
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

        @keyframes bounce-dot {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 1s linear infinite;
        }

        .animate-bounce-dot {
          animation: bounce-dot 1.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
