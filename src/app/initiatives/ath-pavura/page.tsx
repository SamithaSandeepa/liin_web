import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import CounterAnimation from "@/components/ui/CounterAnimation";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";
import PrismaBackground from "@/components/ui/PrismaBackground";
import Image from "next/image";
import {
  Youtube,
  Facebook,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  DollarSign,
  Target,
} from "lucide-react";

const legacyItems = [
  "Supporting enterprises across sectors including agriculture, education, healthcare, and climate mitigation.",
  "Providing pre-investment and post-investment support, including mentorship and hand-holding to ensure growth.",
  "Assisting 35 enterprises with enterprise registration and financial reporting to meet investor due diligence requirements.",
  "Allocating LKR 5,000,000 in follow-on funding to help selected SMEs navigate challenges during the pandemic.",
  "Facilitating market access opportunities for over 15 funded enterprises, both locally and internationally.",
];

const impactStats = [
  {
    label: "Impact Entrepreneurs Evaluated",
    value: "1,200",
    suffix: "+",
    icon: Users,
  },
  {
    label: "Impact Entrepreneurs Groomed",
    value: "600",
    suffix: "+",
    icon: TrendingUp,
  },
  { label: "Female Participation", value: "48", suffix: "%", icon: Users },
  {
    label: "Impact Investors Engaged",
    value: "14",
    suffix: "",
    icon: Briefcase,
  },
  { label: "Enterprises Funded", value: "37", suffix: "", icon: Target },
  {
    label: "Average Investment Size",
    value: "1,070,000",
    prefix: "LKR ",
    icon: DollarSign,
  },
  {
    label: "Total Capital Committed",
    value: "50,000,000",
    prefix: "LKR ",
    icon: TrendingUp,
  },
];

const awards = [
  {
    title: "No. 1 Business Program, 2018",
    subtitle: "",
  },
  {
    title: "No. 1 Business Program",
    subtitle: "Sumathi Award 2018",
  },
  {
    title: "SLT Zero One Award",
    subtitle: "Digital Excellence - Best Digital Integrated Campaign (NGO)",
  },
];

const partnersWithLogos = [
  { name: "HNB", logo: "/images/athpavura/hnb.jpg" },
  { name: "Sampath Bank", logo: "/images/athpavura/sampath.png" },
  {
    name: "Sri Lanka Insurance",
    logo: "/images/athpavura/Sri_Lanka_Insurance_new_logo.jpg",
  },
  { name: "Dialog", logo: "/images/athpavura/Dialog_Axiata_logo.png" },
  { name: "Horizon Campus", logo: "/images/athpavura/horizon_campus.png" },
  {
    name: "Wijaya Publications",
    logo: "/images/athpavura/wijaya_publications.png",
  },
  { name: "BDO", logo: "/images/athpavura/bdo.png" },
  { name: "UNDP", logo: "/images/athpavura/undp.png" },
];

// const partnersTextOnly = [""];

const videos = [
  "https://www.youtube.com/embed/oqeVkTRp6N4",
  "https://www.youtube.com/embed/hXrnB1h79nc",
  "https://www.youtube.com/embed/vfGBfoHfn8s",
  "https://www.youtube.com/embed/83CGZlqqAtY",
  "https://www.youtube.com/embed/cBW3IfdO3zQ",
];

export default function AthPavuraPage() {
  return (
    <>
      <HeroSection
        title="Ath Pavura"
        subtitle="Pioneering Social Entrepreneurship in Sri Lanka"
        backgroundImage="/images/athpavura/cover.jpg"
        // backgroundSize="cover"
        // height="16-9"
      />

      {/* Introduction */}
      <Section id="intro" title="Empowering Social Entrepreneurs">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p className="text-lg">
              <strong>Ath Pavura</strong> is a groundbreaking TV reality show
              that promotes social entrepreneurship by giving existing social
              entrepreneurs the opportunity of a lifetime. The show allows
              entrepreneurs to showcase their ventures on national television,
              gain visibility, and secure investments to advance to the next
              stage of their business journey.
            </p>
            <p className="text-lg">
              By connecting "hidden" entrepreneurs across Sri Lanka—those
              already addressing critical social and environmental
              challenges—with passionate impact investors, Ath Pavura creates a
              vibrant ecosystem for growth and innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Legacy */}
      <Section id="legacy" title="Our Legacy" background="gray">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Ath Pavura has created a lasting impact on Sri Lanka's social
            enterprise landscape:
          </p>
          <div className="space-y-4">
            {legacyItems.map((item, idx) => (
              <div
                key={idx}
                className="animate-on-scroll flex items-start gap-4 bg-white p-4 rounded-xl shadow-medium"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">
                    {idx + 1}
                  </span>
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
        background="secondary"
        className="relative"
      >
        <PrismaBackground />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center h-full group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {stat.prefix && (
                      <span className="text-sm font-bold text-white">
                        {stat.prefix}
                      </span>
                    )}
                    <CounterAnimation
                      value={stat.value}
                      duration={2}
                      className="text-2xl font-bold text-white mb-0"
                    />
                    {stat.suffix && (
                      <span className="text-xl font-bold text-white">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/90 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recognition & Awards */}
      <Section id="awards" title="Recognition & Awards" background="gray">
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
      <Section id="online" title="Online Presence & Engagement">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Youtube size={24} className="text-red-600" />
                </div>
                <CounterAnimation
                  value="17,000 +"
                  duration={2}
                  className="text-2xl font-bold text-primary mb-1"
                />
                <p className="text-xs text-gray-600">YouTube Subscribers</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Youtube size={24} className="text-red-600" />
                </div>
                <CounterAnimation
                  value="13,500,000 +"
                  duration={2.5}
                  className="text-2xl font-bold text-primary mb-1"
                />
                <p className="text-xs text-gray-600">Minutes Viewed</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Facebook size={24} className="text-blue-600" />
                </div>
                <CounterAnimation
                  value="14,000 +"
                  duration={2}
                  className="text-2xl font-bold text-primary mb-1"
                />
                <p className="text-xs text-gray-600">Facebook Followers</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Facebook size={24} className="text-blue-600" />
                </div>
                <CounterAnimation
                  value="213,000 +"
                  duration={2}
                  className="text-2xl font-bold text-primary mb-1"
                />
                <p className="text-xs text-gray-600">Minutes Viewed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/investments/investees"
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
            Ath Pavura continues to drive impact by empowering social
            entrepreneurs, creating investor linkages, and inspiring the next
            generation of changemakers across Sri Lanka.
          </p>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" title="Partners & Sponsors">
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
            {/* {partnersTextOnly.map((partner, idx) => (
              <div key={`text-${idx}`} className="animate-on-scroll">
                <div className="bg-white px-8 py-6 rounded-xl shadow-medium hover:shadow-hard transition-all flex items-center justify-center h-24">
                  <p className="font-semibold text-gray-700">{partner}</p>
                </div>
              </div>
            ))} */}
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@ATHPAVURA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 hover:scale-105 transition-all"
            >
              View More on YouTube
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <JoinNetworkSection
        title="Join the Movement"
        subtitle="Be part of Sri Lanka's social entrepreneurship revolution"
        description=""
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Investments"
        secondaryButtonLink="/investments/investees"
      />
    </>
  );
}
