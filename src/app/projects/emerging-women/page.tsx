import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import {
  Users,
  Award,
  TrendingUp,
  Heart,
  Handshake,
  Star,
  Target,
  Globe,
  GraduationCap,
  DollarSign,
  Network
} from 'lucide-react';

const programComponents = [
  {
    title: 'Emerging Women\'s Summit (EWS)',
    description: 'Advances visibility of women in business leadership, shares success stories, and discusses creating a female network of impact investors, mentors, and social entrepreneurs. The inaugural summit attracted over 100 stakeholders and is expanding island-wide.',
    icon: Users,
    locations: ['Colombo', 'Jaffna', 'Kandy'],
  },
  {
    title: 'Women Mentorship Circle',
    description: 'Pairs emerging entrepreneurs with established professionals to provide guidance during early business stages.',
    icon: Handshake,
  },
];

const focusAreas = [
  {
    title: 'Capacity Building',
    description: 'Building skills and confidence for business success',
    icon: GraduationCap,
  },
  {
    title: 'Inclusive Finance',
    description: 'Access to impact investment and financial resources',
    icon: DollarSign,
  },
  {
    title: 'Coaching & Mentorship',
    description: 'Guidance from experienced professionals',
    icon: Heart,
  },
  {
    title: 'Recognition',
    description: 'Celebrating achievements and role models',
    icon: Award,
  },
  {
    title: 'Market Opportunities',
    description: 'Creating pathways to new markets',
    icon: Target,
  },
  {
    title: 'Network Expansion',
    description: 'Building connections with peers and leaders',
    icon: Network,
  },
  {
    title: 'Impact Investing',
    description: 'Engaging women investors in impact investing',
    icon: TrendingUp,
  },
  {
    title: 'Global Reach',
    description: 'Connecting with international networks',
    icon: Globe,
  },
];

export default function EmergingWomenPage() {
  return (
    <>
      <HeroSection
        title="Emerging Women"
        subtitle="Empowering Women Entrepreneurs Across Sri Lanka"
        backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920"
      />

      {/* Quote & Introduction */}
      <Section
        id="introduction"
        title="Our Vision"
      >
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border-l-4 border-primary mb-8">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic text-center">
                &ldquo;Just like the lotus, we too have the ability to rise from the mud,
                bloom out of the darkness and radiate into the world&rdquo;
              </blockquote>
            </div>
          </div>
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <p className="text-lg text-gray-700 leading-relaxed">
                LIIN believes entrepreneurship can economically empower women and generate inclusive
                growth in Sri Lanka&apos;s labor force. The Emerging Women initiative aims to foster
                an ecosystem supporting women&apos;s participation in enterprise development, creating
                pathways for success and sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Components */}
      <Section
        id="programs"
        title="Program Components"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {programComponents.map((program, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <program.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{program.description}</p>
                      {program.locations && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {program.locations.map((location, locIdx) => (
                            <span
                              key={locIdx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                            >
                              {location}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section
        id="focus-areas"
        title="Key Focus Areas"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-all h-full text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <area.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section
        id="impact"
        title="Our Impact"
        background="gray"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-xl shadow-medium text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-gray-600">Summit Participants</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-xl shadow-medium text-center">
                <div className="text-4xl font-bold text-secondary mb-2">3</div>
                <p className="text-gray-600">Cities Reached</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-xl shadow-medium text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Women Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a community empowering women entrepreneurs to create lasting impact in Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Join as Entrepreneur
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Become a Mentor
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
