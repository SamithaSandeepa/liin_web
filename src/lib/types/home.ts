// TypeScript interfaces for Home page data structures

export interface ApproachCard {
  img: string;
  title: string;
  desc: string;
  fullDetails?: {
    overview: string;
    keyPoints: string[];
    impact: string;
  };
}

export interface SDGImage {
  src: string;
  alt: string;
}

import { LucideIcon } from 'lucide-react';

export interface ImpactMetric {
  icon: LucideIcon;
  value: string;
  label: string;
  suffix?: string;
}

export interface CTACard {
  icon: string;
  title: string;
  desc: string;
  btn: string;
  link: string;
}

export interface Testimonial {
  img: string;
  name: string;
  text: string;
}
