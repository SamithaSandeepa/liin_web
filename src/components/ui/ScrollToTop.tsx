"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop Component
 * Standard Next.js scroll restoration with hash anchor support
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Hash anchor navigation (e.g., /contact#contact-form)
    if (window.location.hash) {
      // Small delay for DOM rendering
      const timer = setTimeout(() => {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Normal navigation - scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
