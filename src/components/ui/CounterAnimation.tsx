'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterAnimationProps {
  value: string;
  duration?: number;
}

export default function CounterAnimation({ value, duration = 2 }: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from string (handle $ and ,)
    const numericValue = parseFloat(value.replace(/[$,]/g, ''));
    const prefix = value.match(/^\$/)?.[0] || '';
    const hasComma = value.includes(',');

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(numericValue * easeOutExpo);

      // Format the number
      let formattedValue = hasComma
        ? currentValue.toLocaleString()
        : currentValue.toString();

      setDisplayValue(prefix + formattedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value matches exactly
      }
    };

    animate();
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-4xl font-bold mb-3"
    >
      {displayValue}
    </motion.div>
  );
}
