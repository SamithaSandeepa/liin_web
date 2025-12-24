import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";
import Image from "next/image";
import {
  Users,
  TrendingUp,
  GraduationCap,
  CheckCircle2,
  Presentation,
  MessageSquare,
  Target,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";

const programSteps = [
  {
    step: 1,
    title: "Applications from Regional Forums",
    description:
      "First stage of Regional Forums held in 05 main Regions/Areas, conducted by LIIN & WUSC.",
    icon: Globe,
  },
  {
    step: 2,
    title: "Shortlist and Select Entrepreneurs",
    description:
      "LIIN and WUSC Team study applications, stories, and business plans. Select only 10 Entrepreneurs per region. Altogether 50 Entrepreneurs/Startups will be selected for the PIE Platform.",
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "Incubation of Selected Entrepreneurs",
    description:
      "Capture their Stories and Register Entrepreneur Profiles through extensive one-on-one interviews. Training provided on Valuation, Legal, Finance and how to pitch to Investors.",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "PIE Session",
    description:
      "Entrepreneurs showcase their Business, Stories, and Plans to Investors/Organizations/Stakeholders. Connect to Banks, Financial Organizations, Marketplaces like Daraz, Koombiyo. Growth Tracking and Monitoring by LIIN.",
    icon: Presentation,
  },
  {
    step: 5,
    title: "Post-Investment Management",
    description:
      "Continuous monitoring with Marketing Support, Financial Management, Skills Development, and Mentoring through the digital hub.",
    icon: TrendingUp,
  },
];

const regions = [
  "Northern Province",
  "Eastern Province",
  "North Western Province",
  "Central Province",
  "Southern Province",
];

const pathHighlights = [
  {
    value: "50+",
    label: "Entrepreneurs",
    description: "Selected from 5 key provinces",
    icon: Users,
  },
  {
    value: "Jan 2023",
    label: "Launch Date",
    description: "Started empowering entrepreneurs",
    icon: Target,
  },
  {
    value: "Top 25",
    label: "Elite Training",
    description: "Curated development programs",
    icon: Award,
  },
];

export default function PIEPage() {
  return (
    <>
      <HeroSection
        title="Platform for Inclusive Entrepreneurship"
        subtitle="Transforming Underserved Entrepreneurs into Success Stories"
        backgroundImage="/images/projects/pie/cover.png"
      />

      {/* What is PIE */}
      <Section id="what-is-pie" title="What is PIE?">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top Section: Logo + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <div className="animate-on-scroll flex items-center justify-center">
              <Image
                src="/images/projects/pie/awakasha.png"
                alt="Awakasha Logo"
                width={400}
                height={400}
                className="w-full h-auto object-contain max-w-sm mx-auto"
                priority
              />
            </div>

            {/* Content Side */}
            <div className="animate-on-scroll">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
                <p>
                  PIE is a{" "}
                  <strong className="text-primary">one stop Digital Hub</strong>{" "}
                  for the Entrepreneurs/Startups to further develop their
                  Enterprises and become a success story, hosted by{" "}
                  <strong className="text-gray-900">
                    Lanka Impact Investing Network (LIIN)
                  </strong>{" "}
                  in collaboration with{" "}
                  <strong className="text-gray-900">
                    WUSC (World University Services of Canada)
                  </strong>
                  .
                </p>

                <p>
                  PIE is a one stop solution for{" "}
                  <strong>underserved Entrepreneurs of Sri Lanka</strong>. The
                  Platform aims to give a brand to every upcoming Entrepreneur
                  in Sri Lanka. PIE Platform will act as a{" "}
                  <strong className="text-primary">
                    link between the Entrepreneurs and Support Services
                  </strong>{" "}
                  that they need to become a scalable and an impactful venture.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Full-width PIE Image */}
          <div className="animate-on-scroll">
            <Image
              src="/images/projects/pie/PIE2.png"
              alt="PIE Platform"
              width={1200}
              height={500}
              className="w-full h-auto mx-auto object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section
        id="process"
        title="Our Process"
        subtitle="5-Step Journey to Transform Your Business"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {programSteps.map((item, idx) => (
              <div
                key={idx}
                className="animate-on-scroll flex flex-col md:flex-row gap-6"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Story Telling */}
      <Section
        id="storytelling"
        title="Story Telling"
        subtitle="Share Your Entrepreneurial Journey"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-on-scroll">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5-10 Minutes Story Telling
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your Business, Enterprise, Challenges and Business
                    Plans in a concise, impactful presentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Profile Creation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each Story captured and uploaded to PIE Platform with your
                    Entrepreneur Profile for maximum visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Path of PIE */}
      <Section
        id="path"
        title="Path of PIE"
        subtitle="Our Impact & Journey"
        background="gray"
      >
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pathHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="animate-on-scroll text-center"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Regions */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Entrepreneurs Selected From
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {regions.map((region, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4"
                >
                  <CheckCircle2 className="text-primary mb-2" size={24} />
                  <span className="text-gray-700 font-medium text-sm">
                    {region}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Join CTA */}
      <JoinNetworkSection
        title="JOIN THE NEXT COHORT"
        subtitle="We are excited to announce that a new cohort of entrepreneurs will soon begin their journey with PIE. If you are an entrepreneur or startup looking to grow your business, gain mentorship, and access market and investment opportunities, we invite you to apply."
        description="Interested entrepreneurs can fill out the online application form and submit your details to join the PIE Platform. Don't miss the opportunity to take your enterprise to the next level!"
        primaryButtonText="Apply Now"
        primaryButtonLink="/contact#contact-form"
      />
    </>
  );
}
