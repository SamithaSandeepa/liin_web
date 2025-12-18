import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import AboutSection from "@/components/sections/AboutSection";
import SDGSection from "@/components/sections/SDGSection";
import ImpactMetricsSection from "@/components/sections/ImpactMetricsSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdvertisementModal from "@/components/ui/AdvertisementModal";
import InitiativesShowcaseSection from "@/components/sections/InitiativesShowcaseSection";
import SectionAnimator from "@/components/ui/SectionAnimator";
import { fetchAdvertisements, fetchMainBanner, getAssetUrl } from "@/lib/api";

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
    "Empowering People",
    "Commitment to a Living Planet",
    "Sri Lanka's Pioneer in Impact Investing",
  ];

  // Custom durations for each phrase to sync with video timeline
  // Converted from timecode to milliseconds
  // 00.00.00.06 - 00.00.02.23 = 2.57s
  // 00.00.03.09 - 00.00.06.06 = 2.97s
  // 00.00.06.27 - 00.00.10.01 = 3.14s
  // 00.00.10.19 - 00.00.13.24 = 3.05s
  // 00.00.14.07 - 00.00.25.04 = 10.97s
  const heroDurations = [
    2680, // "Investing in Profit with Purpose"
    3500, // "Catalyzing Transformative Change"
    3800, // "Empowering People"
    3800, // "Commitment to a Living Planet" - increased to appear later
    11000, // "Sri Lanka's Pioneer in Impact Investing"
  ];

  // Fetch advertisements and hero banner from API (server-side)
  const advertisements = await fetchAdvertisements();
  const mainBanner = await fetchMainBanner();

  return (
    <>
      <HeroSection
        animatedPhrases={heroAnimatedPhrases}
        phraseDurations={heroDurations}
        backgroundVideo={
          mainBanner?.background_video
            ? getAssetUrl(mainBanner.background_video)
            : undefined
        }
        buttonText={mainBanner?.button_text}
        buttonUrl={mainBanner?.button_url}
      />
      <SectionAnimator animation="fade-up">
        <InitiativesShowcaseSection />
      </SectionAnimator>
      <SectionAnimator animation="fade-up">
        <ImpactMetricsSection />
      </SectionAnimator>
      <SectionAnimator animation="fade-up">
        <ApproachSection />
      </SectionAnimator>
      <SectionAnimator animation="fade-up" delay={0.1}>
        <AboutSection />
      </SectionAnimator>
      <SectionAnimator animation="scale-up">
        <SDGSection />
      </SectionAnimator>
      <SectionAnimator animation="fade-up" delay={0.1}>
        <CTASection />
      </SectionAnimator>
      <SectionAnimator animation="fade-up">
        <TestimonialsSection />
      </SectionAnimator>

      {/* Advertisement Modal - Shows after page load */}
      <AdvertisementModal advertisements={advertisements} />
    </>
  );
}
