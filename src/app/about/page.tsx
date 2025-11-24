import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import TeamSection from "@/components/sections/TeamSection";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";

/**
 * About Page - Information about LIIN and our team
 */
export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About LIIN"
        subtitle="Building a thriving social enterprise sector in Sri Lanka"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
      />

      {/* What Makes Us Different */}
      <Section id="about-content" title="What Makes Us Different">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              LIIN is Sri Lanka's first impact investment firm, dedicated
              exclusively to social enterprises. We operate as a not-for-profit
              organization, ensuring our mission-driven focus remains at the
              heart of everything we do.
            </p>
            <p className="text-lg">
              Founded in 2015, LIIN was established to create a dedicated space
              for impact investments in Sri Lanka. Our founding team saw a
              distinct need for financing options that were specifically
              designed for social enterprises—businesses that prioritize social
              and environmental impact alongside financial sustainability.
            </p>
            <p className="text-lg">
              Our founding partners recognized that social enterprises require
              more than just capital—they need tailored financial products and
              strategic support to grow sustainably while staying true to their
              social missions. This understanding led to LIIN's unique model of
              combining investment capital with capacity-building programs,
              mentoring, and advisory services.
            </p>
            <p className="text-lg">
              LIIN distinguishes itself by offering patient, mission-aligned
              capital that provides social enterprises with the flexibility they
              need to scale their impact. We don't just invest; we actively
              support, guide, and connect enterprises to networks that can
              further their growth and amplify their mission.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section id="values" title="Our Core Values" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              Impact with Integrity
            </h3>
            <p className="text-sm text-gray-600">
              We uphold the highest standards of honesty and ethics in all our
              interactions.
            </p>
          </div>
          <div className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              Collaboration for Change
            </h3>
            <p className="text-sm text-gray-600">
              We believe in the power of partnerships to drive meaningful
              impact.
            </p>
          </div>
          <div className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              Inclusivity & Equity
            </h3>
            <p className="text-sm text-gray-600">
              We are committed to creating opportunities for all, especially
              underserved communities.
            </p>
          </div>
          <div className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              Innovation & Sustainability
            </h3>
            <p className="text-sm text-gray-600">
              We embrace creative solutions that are environmentally and
              financially sustainable.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="vision-mission" title="Vision & Mission">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="animate-on-scroll">
              <div className="bg-white border-l-4 border-primary p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A thriving social enterprise sector driving inclusive and
                  sustainable development in Sri Lanka.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div className="animate-on-scroll">
              <div className="bg-white border-l-4 border-secondary p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all h-full">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To mobilize and deploy capital that supports social
                  enterprises in creating scalable, sustainable solutions for
                  social and environmental challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TeamSection />

      {/* Join Us Section */}
      <JoinNetworkSection />
    </>
  );
}
