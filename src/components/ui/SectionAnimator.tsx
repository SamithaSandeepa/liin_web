'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';

interface SectionAnimatorProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export default function SectionAnimator({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  viewportAmount = 0.2
}: SectionAnimatorProps) {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'scale-up': {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
