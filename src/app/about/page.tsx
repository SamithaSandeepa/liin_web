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
        backgroundImage="/images/aboutus/cover.jpeg"
      />

      {/* What Makes Us Different */}
      <Section id="about-content" title="What Makes Us Different">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
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

      {/* Core Values, Vision & Mission */}
      <Section id="values-mission" background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Core Values Image */}
          <div className="animate-on-scroll flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-hard bg-white p-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Our Core Values
              </h2>
              <img
                src="/images/aboutus/corevalues.png"
                alt="LIIN Core Values"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Vision & Mission */}
          <div className="flex flex-col space-y-8">
            {/* Vision */}
            <div className="animate-on-scroll flex-1 flex flex-col">
              <div className="bg-gradient-to-br from-white to-primary/5 border-l-4 border-primary p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all flex-1 flex flex-col relative overflow-hidden group">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary relative z-10">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify relative z-10">
                  A thriving social enterprise sector driving inclusive and
                  sustainable development in Sri Lanka.
                </p>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-xl transform -translate-x-1/4 -translate-y-1/4 group-hover:scale-125 transition-transform duration-700"></div>
                {/* Geometric Pattern */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="text-primary"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="animate-on-scroll flex-1 flex flex-col">
              <div className="bg-gradient-to-br from-white to-secondary/5 border-l-4 border-secondary p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all flex-1 flex flex-col relative overflow-hidden group">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary relative z-10">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify relative z-10">
                  To mobilize and deploy capital that supports social
                  enterprises in creating scalable, sustainable solutions for
                  social and environmental challenges.
                </p>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-xl transform -translate-x-1/4 -translate-y-1/4 group-hover:scale-125 transition-transform duration-700"></div>
                {/* Geometric Pattern */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="text-secondary"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="100"
                      height="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="10"
                    />
                    <rect
                      x="25"
                      y="25"
                      width="70"
                      height="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="8"
                    />
                    <rect
                      x="40"
                      y="40"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="6"
                    />
                  </svg>
                </div>
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
