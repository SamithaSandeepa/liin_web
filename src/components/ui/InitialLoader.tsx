"use client";

import { useEffect, useState } from "react";
import LoadingPro from "./LoadingPro";

/**
 * Initial page loader that shows on first visit
 * Displays loading screen until page is fully loaded
 */
export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if page has already loaded
    if (document.readyState === "complete") {
      // Small delay to show loading briefly
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsLoading(false), 300);
      }, 800);
      return () => clearTimeout(timer);
    }

    // Wait for page to fully load
    const handleLoad = () => {
      // Add small delay for smooth transition
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsLoading(false), 300);
      }, 500);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <LoadingPro message="Welcome to LIIN" />
    </div>
  );
}
