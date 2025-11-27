import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import AboutSection from "@/components/sections/AboutSection";
import SDGSection from "@/components/sections/SDGSection";
import ImpactMetricsSection from "@/components/sections/ImpactMetricsSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdvertisementModal from "@/components/ui/AdvertisementModal";
import InitiativesShowcaseSection from "@/components/sections/InitiativesShowcaseSection";
import { fetchAdvertisements } from "@/lib/api";

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
export default async function Home() {
  const heroAnimatedPhrases = [
    "Investing in Profit with Purpose",
    "Catalyzing Transformative Change",
    "Uplifting the Entrepreneurs Building a Better Future",
    "Commitment to a Living Planet",
    "Sri Lanka's Pioneer in Impact Investing",
  ];

  // Fetch advertisements from API (server-side)
  const advertisements = await fetchAdvertisements();

  return (
    <>
      <HeroSection
        animatedPhrases={heroAnimatedPhrases}
        backgroundVideo="/videos/hero/hero.mp4"
      />
      <InitiativesShowcaseSection />
      <ApproachSection />
      <AboutSection />
      <SDGSection />
      <ImpactMetricsSection />
      <CTASection />
      <TestimonialsSection />

      {/* Advertisement Modal - Shows after page load */}
      <AdvertisementModal advertisements={advertisements} />
    </>
  );
}
