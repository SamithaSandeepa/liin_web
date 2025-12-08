"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";
import {
  Sprout,
  Zap,
  Plane,
  Heart,
  Laptop,
  Shirt,
  Target,
  TrendingUp,
  Building2,
  Globe,
  Eye,
  Users,
} from "lucide-react";

const programStages = [
  {
    number: "1",
    title: "Identify",
    description:
      "Launching applications through captivating promotions, actively seeking MSMEs and SMPs looking for equity financing.",
  },
  {
    number: "2",
    title: "Empower",
    description:
      "Investor Readiness Training – equipping entrepreneurs to craft compelling pitches and strengthen their investment readiness.",
  },
  {
    number: "3",
    title: "Elevate",
    description:
      "Reality Show Pitch – a high-energy platform for showcasing entrepreneurs' innovative and impactful business visions to a nationwide audience.",
  },
  {
    number: "4",
    title: "Nurture",
    description:
      "Ongoing support for entrepreneurs who secure investments, ensuring sustainable growth, operational excellence, and long-term success.",
  },
];

const benefits = [
  {
    title: "Achieving Long-Term Success",
    description:
      "Strategic support helps MSMEs reach commercial viability, scalability, and sustainability while expanding market access.",
    icon: Target,
  },
  {
    title: "Equity-Driven Transformation",
    description:
      "Funding enables R&D, innovation, and enhanced market positioning, accelerating growth and competitiveness.",
    icon: TrendingUp,
  },
  {
    title: "Stronger Financial Position",
    description:
      "Improved equity standing allows access to better banking facilities and additional funding.",
    icon: Building2,
  },
  {
    title: "Global Market Entry",
    description:
      "Financial support helps SMEs explore international markets and diversify customer bases.",
    icon: Globe,
  },
  {
    title: "Enhanced Visibility",
    description:
      "National TV exposure provides a platform to showcase brands to a large and diverse audience.",
    icon: Eye,
  },
  {
    title: "Networking Opportunities",
    description:
      "Entrepreneurs gain access to judges, industry experts, and peers, opening doors for collaborations and partnerships.",
    icon: Users,
  },
];

const sectors = [
  { name: "Agriculture & Fisheries", icon: Sprout },
  { name: "Renewable Energy & Climate Solutions", icon: Zap },
  { name: "Tourism", icon: Plane },
  { name: "Healthcare & Education", icon: Heart },
  { name: "IT & Technology", icon: Laptop },
  { name: "Apparel & Textiles", icon: Shirt },
];

const journeyStages = [
  {
    id: 1,
    image: "/images/eagleswings/1.png",
    title: "Application & Selection",
    description:
      "Entrepreneurs submit applications showcasing their business ideas. A rigorous selection process identifies the most promising ventures based on innovation, impact potential, and scalability.",
  },
  {
    id: 2,
    image: "/images/eagleswings/2.png",
    title: "Investor Readiness Training",
    description:
      "Selected entrepreneurs undergo comprehensive training to refine their business models, develop compelling pitches, and understand investor expectations. This phase prepares them for the reality show and real-world investment opportunities.",
  },
  {
    id: 3,
    image: "/images/eagleswings/3.png",
    title: "Reality Show Pitch",
    description:
      "Entrepreneurs present their ventures on national television, pitching to a panel of experienced investors and judges. This high-visibility platform provides exposure and the opportunity to secure investment commitments.",
  },
  {
    id: 4,
    image: "/images/eagleswings/4.png",
    title: "Investment & Partnership",
    description:
      "Successful pitches lead to investment deals and strategic partnerships. Investors provide capital and expertise to help businesses scale, while entrepreneurs gain the resources needed for growth.",
  },
  {
    id: 5,
    image: "/images/eagleswings/5.png",
    title: "Post-Investment Support",
    description:
      "LIIN provides ongoing mentorship, monitoring, and strategic guidance to ensure sustainable growth. Regular check-ins and performance evaluations help businesses overcome challenges and maximize their impact.",
  },
];

export default function EaglesWingsPage() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const toggleStage = (id: number) => {
    setActiveStage(activeStage === id ? null : id);
  };
  return (
    <>
      <HeroSection
        title="On Eagle's Wings"
        subtitle="A Reality TV Journey for Impactful Entrepreneurship"
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920"
      />

      {/* Introduction */}
      <Section id="intro" title="Empowering Visionary Entrepreneurs">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Welcome to <strong>"On Eagle's Wings"</strong>, a groundbreaking
              initiative designed to nurture and empower visionary
              entrepreneurs. More than a reality TV program, it is a
              transformative nationwide journey to inspire and support
              entrepreneurship across Sri Lanka.
            </p>
            <p className="text-lg">
              The Lanka Impact Investing Network (LIIN) proudly launched "On
              Eagle's Wings" on <strong>15 August 2024</strong>, a
              groundbreaking 32-episode reality television program designed to
              nurture entrepreneurship and drive inclusive economic growth
              across Sri Lanka.
            </p>
            <p className="text-lg">
              The program offers a structured roadmap for impact investment,
              aiming to transform Small and Medium Enterprises (SMEs) into key
              drivers of the national economy. Through a phased approach, it
              ensures participating businesses receive the strategic guidance
              and investment needed to thrive, boosting economic development,
              stability, and sustainability.
            </p>
            <div className="mt-8 text-center">
              <a
                href="/news"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all"
              >
                More About the Program
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Structure */}
      <Section
        id="program-structure"
        title="Program Structure"
        subtitle="A Journey of Transformation"
        background="gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programStages.map((stage, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all h-full flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {stage.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" title="What 'On Eagle's Wings' Offers SMEs">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all h-full group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SME Journey */}
      <Section
        id="sme-journey"
        title="SME Journey through 'On Eagle's Wings'"
        subtitle="Click on each stage to explore the journey"
        background="gray"
      >
        <div 
          className="max-w-6xl mx-auto relative"
          onClick={(e) => {
            // Close description when clicking outside on mobile
            const target = e.target as HTMLElement;
            if (!target.closest('[data-stage-container]')) {
              setActiveStage(null);
            }
          }}
        >
          {/* Journey Path Container */}
          <div className="relative py-12 md:pb-16 pb-8">
            {/* Wavy Connection Line SVG - Desktop */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
              style={{ zIndex: 0 }}
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Smooth wave through circles - using cubic bezier for smoother curves */}
              <path
                d="M 120 120 C 180 120, 220 300, 360 300 C 500 300, 540 120, 600 120 C 660 120, 700 300, 840 300 C 980 300, 1020 120, 1080 120"
                stroke="url(#lineGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Wavy Connection Line SVG - Mobile - Replaced with connecting lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full pointer-events-none md:hidden z-0">
              <div className="w-full h-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 opacity-30"></div>
            </div>

            {/* Journey Stages */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
              {journeyStages.map((stage, idx) => (
                <div
                  key={stage.id}
                  data-stage-container
                  className={`flex flex-col items-center ${
                    idx % 2 === 0 ? "md:mt-0" : "md:mt-24"
                  }`}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStage(stage.id);
                  }}
                >
                  {/* Circular Image Container - Fixed height container */}
                  <div className="relative mb-4 h-40 md:h-44 flex items-center justify-center z-20">
                    <div
                      className="group relative focus:outline-none cursor-pointer"
                      aria-label={stage.title}
                    >
                      <div
                        className={`
                      relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden
                      shadow-lg hover:shadow-2xl transition-all duration-300
                      ${
                        activeStage === stage.id
                          ? "ring-4 ring-primary ring-offset-4 scale-110"
                          : "ring-2 ring-white ring-offset-2 hover:scale-105"
                      }
                    `}
                      >
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Stage Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                        {stage.id}
                      </div>

                      {/* Pulse Animation for Active */}
                      {activeStage === stage.id && (
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Title - Fixed height */}
                  <h3
                    className={`
                    text-center font-bold text-sm md:text-base px-2 mb-2 min-h-[3rem] flex items-center justify-center z-20 relative
                    transition-colors duration-300 cursor-pointer
                    ${
                      activeStage === stage.id
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }
                  `}
                  >
                    {stage.title}
                  </h3>

                  {/* Expandable Description - Absolute positioning to not affect layout */}
                  <div className="relative w-full z-30">
                    <div
                      className={`
                      absolute top-0 left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out
                      ${
                        activeStage === stage.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                    >
                      <div className="bg-white rounded-xl shadow-hard p-4 mt-2 mx-2 relative z-30">
                        <p className="text-gray-600 text-sm leading-relaxed text-center">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animation Styles */}
        <style jsx>{`
          @keyframes ping {
            75%,
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          .animate-ping {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </Section>

      {/* Sectors */}
      <Section
        id="sectors"
        title="Sectors Covered"
        subtitle="The program supports businesses in key sectors"
        background="white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <sector.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{sector.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <JoinNetworkSection
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Latest News"
        secondaryButtonLink="/news"
      />
    </>
  );
}
