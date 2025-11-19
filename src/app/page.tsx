import HeroSection from '@/components/sections/HeroSection';
import ApproachSection from '@/components/sections/ApproachSection';
import AboutSection from '@/components/sections/AboutSection';
import SDGSection from '@/components/sections/SDGSection';
import ImpactMetricsSection from '@/components/sections/ImpactMetricsSection';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

/**
 * Home Page - Landing page for LIIN
 *
 * This is a SERVER COMPONENT that orchestrates all home page sections.
 * Benefits:
 * - Faster initial page load (server-side rendering)
 * - Better SEO (content rendered on server)
 * - Smaller JavaScript bundle
 * - Data can be fetched on server if needed
 *
 * Each section is a separate, reusable component with its own data source.
 * Header, Footer, and AnimationProvider are in layout.tsx (shared across all pages).
 */
export default function Home() {
  return (
    <>
      <HeroSection
        title="Investing in Profit with Purpose"
        subtitle="Catalyzing Transformative Change"
        backgroundImage="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920"
      />

      <ApproachSection />
      <AboutSection />
      <SDGSection />
      <ImpactMetricsSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
}
