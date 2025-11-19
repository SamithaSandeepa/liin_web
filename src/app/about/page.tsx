import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import TeamSection from '@/components/sections/TeamSection';
import ValuesSection from '@/components/sections/ValuesSection';
import TimelineSection from '@/components/sections/TimelineSection';

/**
 * About Page - Information about LIIN and our team
 *
 * This demonstrates the modular page structure:
 * - Clean page orchestration
 * - Reusable section components
 * - Separate data sources
 * - Easy to maintain and extend
 *
 * Header, Footer, and AnimationProvider are in layout.tsx (shared across all pages).
 */
export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About LIIN"
        subtitle="Building a thriving social enterprise sector in Sri Lanka"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
      />

      {/* Mission Statement */}
      <Section id="mission" title="Our Mission">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl leading-relaxed text-gray-700 mb-8">
            We connect impact-focused investors with social enterprises that are addressing pressing social and environmental challenges across Sri Lanka.
          </p>
          <p className="text-xl leading-relaxed text-gray-600">
            Through strategic capital deployment, comprehensive support, and innovative financing models, we're building sustainable pathways for social enterprises to scale their impact while generating financial returns.
          </p>
        </div>
      </Section>

      <ValuesSection />
      <TimelineSection />
      <TeamSection />

      {/* Join Us Section */}
      <Section
        id="join"
        title="Join Our Network"
        subtitle="Be part of the impact investing movement in Sri Lanka"
        background="gradient-primary"
      >
        <div className="text-center">
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Whether you're an investor looking to create meaningful impact or a social enterprise seeking funding, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
            <a
              href="/"
              className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
