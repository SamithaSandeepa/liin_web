import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import { Youtube, Facebook, Users, TrendingUp, Award, Briefcase, DollarSign, Target } from 'lucide-react';

const legacyItems = [
  'Supporting enterprises across sectors including agriculture, education, healthcare, and climate mitigation.',
  'Providing pre-investment and post-investment support, including mentorship and hand-holding to ensure growth.',
  'Assisting 35 enterprises with enterprise registration and financial reporting to meet investor due diligence requirements.',
  'Allocating LKR 5,000,000 in follow-on funding to help selected SMEs navigate challenges during the pandemic.',
  'Facilitating market access opportunities for over 15 funded enterprises, both locally and internationally.',
];

const impactStats = [
  { label: 'Impact Entrepreneurs Evaluated', value: '1,200+', icon: Users },
  { label: 'Impact Entrepreneurs Groomed', value: '600+', icon: TrendingUp },
  { label: 'Female Participation', value: '48%', icon: Users },
  { label: 'Impact Investors Engaged', value: '14', icon: Briefcase },
  { label: 'Enterprises Funded', value: '37', icon: Target },
  { label: 'Average Investment Size', value: 'LKR 1.07M', icon: DollarSign },
  { label: 'Total Capital Committed', value: 'LKR 50M', icon: TrendingUp },
];

const awards = [
  {
    title: 'No. 1 Business Program, 2018',
    subtitle: '',
  },
  {
    title: 'No. 1 Business Program',
    subtitle: 'Sumathi Award 2018',
  },
  {
    title: 'SLT Zero One Award',
    subtitle: 'Digital Excellence - Best Digital Integrated Campaign (NGO)',
  },
];

const partnersWithLogos = [
  { name: 'HNB', logo: '/images/athpaura/hnb.jpg' },
  { name: 'Sampath Bank', logo: '/images/athpaura/sampath.png' },
  { name: 'Sri Lanka Insurance', logo: '/images/athpaura/Sri_Lanka_Insurance_new_logo.jpg' },
  { name: 'Dialog', logo: '/images/athpaura/Dialog_Axiata_logo.png' },
  { name: 'Horizon Campus', logo: '/images/athpaura/horizon_campus.png' },
];

const partnersTextOnly = [
  'Wijaya Publications',
  'BDO',
  'UNDP',
];

const videos = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
];

export default function AthPavuraPage() {
  return (
    <>
      <HeroSection
        title="Ath Pavura"
        subtitle="Pioneering Social Entrepreneurship in Sri Lanka"
        backgroundImage="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1920"
      />

      {/* Introduction */}
      <Section id="intro" title="Empowering Social Entrepreneurs">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Ath Pavura</strong> is a groundbreaking TV reality show that promotes social entrepreneurship by giving existing social entrepreneurs the opportunity of a lifetime. The show allows entrepreneurs to showcase their ventures on national television, gain visibility, and secure investments to advance to the next stage of their business journey.
            </p>
            <p className="text-lg">
              By connecting "hidden" entrepreneurs across Sri Lanka—those already addressing critical social and environmental challenges—with passionate impact investors, Ath Pavura creates a vibrant ecosystem for growth and innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Legacy */}
      <Section
        id="legacy"
        title="Our Legacy"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Ath Pavura has created a lasting impact on Sri Lanka's social enterprise landscape:
          </p>
          <div className="space-y-4">
            {legacyItems.map((item, idx) => (
              <div key={idx} className="animate-on-scroll flex items-start gap-4 bg-white p-4 rounded-xl shadow-medium">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact & Achievements */}
      <Section
        id="impact"
        title="Impact & Achievements"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center h-full group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recognition & Awards */}
      <Section
        id="awards"
        title="Recognition & Awards"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                  {award.subtitle && (
                    <p className="text-sm text-gray-600">{award.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Online Presence */}
      <Section
        id="online"
        title="Online Presence & Engagement"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Youtube size={24} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">YouTube</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    17,000 subscribers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    13.5+ million minutes viewed
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Facebook size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Facebook</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    14,000 followers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    213,000 minutes viewed
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Learn More About Our Investments
            </a>
          </div>
        </div>
      </Section>

      {/* Continuing Impact */}
      <Section background="gradient-primary">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-white leading-relaxed">
            Ath Pavura continues to drive impact by empowering social entrepreneurs, creating investor linkages, and inspiring the next generation of changemakers across Sri Lanka.
          </p>
        </div>
      </Section>

      {/* Partners */}
      <Section
        id="partners"
        title="Partners & Sponsors"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnersWithLogos.map((partner, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-all flex items-center justify-center h-24 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={128}
                    height={64}
                    className="max-h-16 max-w-32 object-contain"
                  />
                </div>
              </div>
            ))}
            {partnersTextOnly.map((partner, idx) => (
              <div key={`text-${idx}`} className="animate-on-scroll">
                <div className="bg-white px-8 py-6 rounded-xl shadow-medium hover:shadow-hard transition-all flex items-center justify-center h-24">
                  <p className="font-semibold text-gray-700">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Videos */}
      <Section
        id="videos"
        title="Watch Ath Pavura"
        subtitle="Experience the journey of our social entrepreneurs"
        background="gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
                  <iframe
                    src={video}
                    title={`Ath Pavura Video ${idx + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Join the Movement"
        background="gradient-primary"
      >
        <div className="text-center">
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Sri Lanka's social entrepreneurship revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
            <a
              href="/investments"
              className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              View Investments
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
