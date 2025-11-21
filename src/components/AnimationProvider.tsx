'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Client component that handles scroll animations
 * Separated from page content to minimize client bundle
 */
export default function AnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component only runs effects, renders nothing
}
