import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import Image from "next/image";
import {
  Leaf,
  Fish,
  Award,
  Users,
  TrendingUp,
  Database,
  Brain,
  Target,
  Lightbulb,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const targetSectors = [
  {
    title: "Agriculture",
    description:
      "Innovative solutions to address climate impacts on farming and food production",
    icon: Leaf,
  },
  {
    title: "Fisheries",
    description:
      "Data-driven approaches to support sustainable fishing practices",
    icon: Fish,
  },
];

const eligibleParticipants = [
  "Data Scientists",
  "Students & Recent Graduates",
  "Entrepreneurs & Startups",
  "Working Professionals",
  "Climate Innovators",
];

const programFeatures = [
  {
    title: "Data-Driven Solutions",
    description:
      "Utilize big data, AI, machine learning, and advanced analytics",
    icon: Database,
  },
  {
    title: "Impact Investment Focus",
    description:
      "Learn investor criteria and align with economic, social, and environmental goals",
    icon: TrendingUp,
  },
  {
    title: "Innovation Platform",
    description:
      "Launch platform for innovators and startups in climate solutions",
    icon: Lightbulb,
  },
  {
    title: "Mentorship Access",
    description:
      "Top teams receive mentorship and guidance from industry experts",
    icon: Brain,
  },
];

const prizes = [
  {
    title: "Grand Prize",
    amount: "Rs. 1 Million",
    description: "Awarded to the winning team",
    highlight: true,
  },
  {
    title: "Top 10 Teams",
    amount: "Investor Pitch",
    description:
      "Opportunity to pitch to impact investors for funding and scaling support",
    highlight: false,
  },
];

const partners = [
  { name: "USAID", logo: "/images/projects/climate_challenge/USAID.webp" },
  {
    name: "Climate Collective Foundation",
    logo: "/images/projects/climate_challenge/CCF.webp",
  },
];

const partnersTextOnly = ["USAID", "Climate Collective Foundation (CCF)"];

export default function ClimateChallengePage() {
  return (
    <>
      <HeroSection
        title="Climate Challenge SL"
        subtitle="Creative Data Solutions for Resilience"
        backgroundImage="/images/projects/climate_challenge/cover.png"
        backgroundSize="cover"
      />

      {/* Introduction */}
      <Section
        id="introduction"
        title="Sri Lanka's First Climate Hackathon"
        subtitle="Empowering innovators through impact investments"
      >
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium text-justify">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Climate Challenge SL is Sri Lanka&apos;s inaugural climate
                hackathon focused on empowering data-driven innovations. The
                initiative brings together data professionals nationwide to
                develop solutions addressing climate challenges in agriculture
                and fisheries sectors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With the support of USAID and in partnership with the Climate
                Collective Foundation (CCF), Lanka Impact Investment Network
                (LIIN) launched this groundbreaking program to revolutionize how
                we address climate change impacts through innovative data-driven
                solutions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Objectives */}
      <Section id="objectives" title="Program Objectives" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-medium h-full flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Mitigate Climate Impacts
                  </h3>
                  <p className="text-gray-600">
                    Address climate change impacts on agriculture and fisheries
                    which support over 30% of Sri Lanka&apos;s population
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-medium h-full flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Foster Scalable Businesses
                  </h3>
                  <p className="text-gray-600">
                    Create viable, scalable businesses attractive to impact
                    investors
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-medium h-full flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Launch Platform</h3>
                  <p className="text-gray-600">
                    Create a launch platform for innovators and startups in
                    climate solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-medium h-full flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Handshake className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Impact Investment Integration
                  </h3>
                  <p className="text-gray-600">
                    Integrate impact investment principles with innovation
                    development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Target Sectors */}
      <Section
        id="sectors"
        title="Target Sectors"
        subtitle="Industries critical for national food security and economic growth"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetSectors.map((sector, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-hard text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <sector.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{sector.title}</h3>
                  <p className="text-white/90">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Program Features */}
      <Section id="features" title="Program Features" background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programFeatures.map((feature, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Prizes */}
      <Section id="prizes" title="Prizes & Opportunities">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prizes.map((prize, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div
                  className={`p-8 rounded-2xl text-center h-full ${
                    prize.highlight
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-hard"
                      : "bg-white shadow-medium border-2 border-primary/20"
                  }`}
                >
                  <Award
                    size={48}
                    className={`mx-auto mb-4 ${
                      prize.highlight ? "text-white" : "text-primary"
                    }`}
                  />
                  <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                  <p
                    className={`text-3xl font-bold mb-3 ${
                      prize.highlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {prize.amount}
                  </p>
                  <p
                    className={
                      prize.highlight ? "text-white/90" : "text-gray-600"
                    }
                  >
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section id="eligibility" title="Who Can Participate?" background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Eligible Participants</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eligibleParticipants.map((participant, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">{participant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" title="Partners">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="animate-on-scroll">
                <div className="bg-white px-8 py-6 rounded-xl shadow-medium hover:shadow-hard transition-all">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                  {/* <p className="font-semibold text-gray-700 text-center">
                    {partner.name}
                  </p> */}
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
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Climate Challenge SL and be part of the solution to climate
            change through innovative data-driven approaches.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us for More Information
          </a>
        </div>
      </Section>
    </>
  );
}
