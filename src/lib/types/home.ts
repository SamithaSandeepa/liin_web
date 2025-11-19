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

export interface ImpactMetric {
  icon: string;
  value: string;
  label: string;
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
