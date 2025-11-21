import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import {
  Globe,
  Users,
  TrendingUp,
  GraduationCap,
  Briefcase,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Building2,
  Presentation
} from 'lucide-react';

const regions = [
  'Northern Province',
  'Eastern Province',
  'North Western Province',
  'Central Province',
  'Southern Province',
];

const programSteps = [
  {
    step: 1,
    title: 'Regional Applications',
    description: 'Applications collected from five main geographic areas across Sri Lanka',
    icon: Globe,
  },
  {
    step: 2,
    title: 'Selection Process',
    description: 'Selection of 10 entrepreneurs per region (50 total across platforms)',
    icon: Users,
  },
  {
    step: 3,
    title: 'Incubation Phase',
    description: 'Business training on valuation, legal, finance, and investor pitching',
    icon: GraduationCap,
  },
  {
    step: 4,
    title: 'PIE Session',
    description: 'Showcase businesses to investors, organizations, and stakeholders',
    icon: Presentation,
  },
  {
    step: 5,
    title: 'Post-Investment Support',
    description: 'Monitoring and digital hub access for ongoing support',
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: 'Profile & Storytelling',
    description: 'Entrepreneur profile registration and storytelling documentation',
    icon: Users,
  },
  {
    title: 'Training & Mentoring',
    description: 'Programs and mentoring from experienced advisors',
    icon: GraduationCap,
  },
  {
    title: 'Financial Connections',
    description: 'Connections to financial institutions and global partnerships',
    icon: DollarSign,
  },
  {
    title: 'Marketplace Linkages',
    description: 'Access to platforms like Daraz and Koombiyo',
    icon: Building2,
  },
  {
    title: 'Growth Tracking',
    description: 'Continuous monitoring and progress assessment',
    icon: TrendingUp,
  },
  {
    title: 'Marketing Support',
    description: 'Skills development and marketing assistance',
    icon: Briefcase,
  },
];

const partnersTextOnly = [
  'WUSC (World University Services of Canada)',
  'Financial Organizations',
  'Marketplace Platforms',
];

export default function PIFPage() {
  return (
    <>
      <HeroSection
        title="Platform for Inclusive Entrepreneurship"
        subtitle="A One-Stop Digital Hub for Entrepreneurs"
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920"
      />

      {/* Introduction */}
      <Section
        id="introduction"
        title="About PIE"
        subtitle="Empowering underserved entrepreneurs across Sri Lanka"
      >
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                PIE operates as a one-stop Digital Hub for Entrepreneurs and Startups to further develop
                their enterprises. In collaboration with Lanka Impact Investing Network (LIIN) and
                WUSC (World University Services of Canada), PIE provides comprehensive support to
                emerging entrepreneurs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The program connects entrepreneurs with necessary support services to build scalable,
                impactful ventures, supporting underserved business founders through a comprehensive
                digital platform.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Regions */}
      <Section
        id="regions"
        title="Regional Coverage"
        subtitle="Supporting entrepreneurs from across Sri Lanka"
        background="gray"
      >
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Eligible Regions</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regions.map((region, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Steps */}
      <Section
        id="process"
        title="5-Step Program Process"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {programSteps.map((item, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="text-primary" size={20} />
                        <h3 className="font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    {idx < programSteps.length - 1 && (
                      <ArrowRight className="text-gray-300 hidden md:block" size={24} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section
        id="benefits"
        title="What We Offer"
        background="gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section
        id="partners"
        title="Partners"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnersTextOnly.map((partner, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white px-8 py-6 rounded-xl shadow-medium hover:shadow-hard transition-all">
                  <p className="font-semibold text-gray-700 text-center">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient-primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join PIE and access the resources, mentorship, and connections you need to grow your enterprise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </Section>
    </>
  );
}
