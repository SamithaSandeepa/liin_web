"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoadingProps {
  /**
   * Full screen overlay (default) or inline loading
   */
  fullScreen?: boolean;
  /**
   * Custom message to display below the logo
   */
  message?: string;
  /**
   * Size of the logo (default: 120)
   */
  logoSize?: number;
}

/**
 * Loading Component - Reusable loading screen with animated logo
 *
 * Usage:
 * ```tsx
 * // Full screen loading
 * <Loading />
 *
 * // With custom message
 * <Loading message="Loading your data..." />
 *
 * // Inline loading (not full screen)
 * <Loading fullScreen={false} />
 *
 * // Custom logo size
 * <Loading logoSize={80} />
 * ```
 *
 * Note: Replace logo animation with GIF when available
 */
export default function Loading({
  fullScreen = true,
  message = "Loading...",
  logoSize = 120,
}: LoadingProps) {
  // Debug: Log when loading component mounts
  useEffect(() => {
    console.log("🔄 Loading component mounted:", message);
    return () => console.log("✅ Loading component unmounted");
  }, [message]);
  console.log("Rendering Loading component with message:", message);
  const containerClasses = fullScreen
    ? "fixed inset-0 z-[9999] flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      {/* Animated Background Overlay */}
      {fullScreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      )}

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo Container with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 -m-4"
          >
            <div className="w-full h-full border-4 border-white/30 border-t-white rounded-full" />
          </motion.div>

          {/* Pulsing Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -m-6 bg-white/10 rounded-full blur-xl"
          />

          {/* Logo */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative bg-white rounded-full p-4 shadow-2xl"
          >
            <Image
              src="/images/logo.png"
              alt="LIIN Logo"
              width={logoSize}
              height={logoSize}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Loading Text with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-white text-2xl font-bold mb-2">{message}</h2>

          {/* Animated Dots */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          className="h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/2 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
