import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";
import SMEJourneySection from "@/components/sections/SMEJourneySection";
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
  return (
    <>
      <HeroSection
        title="On Eagle's Wings"
        subtitle="A Reality TV Journey for Impactful Entrepreneurship"
        backgroundImage="/images/eagleswings/cover.png"
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
        subtitle="Hover over each stage to explore the journey"
        background="gray"
      >
        <SMEJourneySection stages={journeyStages} />
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
                <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all text-center group h-full flex flex-col items-center justify-center">
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
