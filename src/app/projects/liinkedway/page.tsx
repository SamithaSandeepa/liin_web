import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import {
  Users,
  GraduationCap,
  Presentation,
  TrendingUp,
  DollarSign,
  Briefcase,
  Target,
  Clock,
  CheckCircle2,
  FileText,
} from "lucide-react";

const programSteps = [
  {
    step: 1,
    title: "Online Application",
    description: "Submit your application with optional 2-3 page business plan",
    icon: FileText,
  },
  {
    step: 2,
    title: "Review & Interview",
    description: "Application review and entrepreneur interviews",
    icon: Users,
  },
  {
    step: 3,
    title: "Incubation",
    description: "Training on valuation, legal, finance, and pitching skills",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Pitching Session",
    description: "Present to expert panel with potential investors",
    icon: Presentation,
  },
  {
    step: 5,
    title: "Post-Investment",
    description: "Monitoring and learning hub access",
    icon: TrendingUp,
  },
];

const pitchFormat = {
  pitchTime: "10 minutes",
  discussionTime: "10 minutes",
  panelists: [
    "Corporate Leaders",
    "PE Fund Managers",
    "Entrepreneurs",
    "Business Advisors",
  ],
};

const benefits = [
  {
    title: "Direct Investor Access",
    description: "Closed-door pitching opportunities with potential investors",
    icon: DollarSign,
  },
  {
    title: "Expert Mentorship",
    description: "Guidance for business model development",
    icon: GraduationCap,
  },
  {
    title: "Marketing Support",
    description: "Help with visibility and market positioning",
    icon: Target,
  },
  {
    title: "Financial Management",
    description: "Guidance on financial planning and management",
    icon: Briefcase,
  },
  {
    title: "Skills Development",
    description: "Training to enhance entrepreneurial capabilities",
    icon: TrendingUp,
  },
  {
    title: "Ongoing Monitoring",
    description: "Continuous enterprise progress tracking",
    icon: Clock,
  },
];

const applicationLanguages = ["English", "Sinhala", "Tamil"];

export default function LinkedWayPage() {
  return (
    <>
      <HeroSection
        title="LIINKEDWay"
        subtitle="Your Pathway to Investment Success"
        backgroundImage="/images/projects/liinked_way/cover.png"
      />

      {/* Introduction */}
      <Section
        id="introduction"
        title="About LIINKEDWay"
        subtitle="A pitching platform and learning hub for entrepreneurs"
      >
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium text-justify">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                LIINKEDWay is an initiative pioneered and hosted by Lanka Impact
                Investing Network (LIIN) in collaboration with PwC&apos;s
                Startup Accelerator. It functions as a pitching platform and
                learning hub for entrepreneurs to present their businesses to
                investors and experts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The program provides entrepreneurs closed-door pitching
                opportunities with potential investors, offers access to expert
                guidance for business model development, and supplies
                post-investment mentoring and support through a comprehensive
                learning hub.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section
        id="process"
        title="5-Step Application Process"
        background="gray"
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
                    {/* {idx < programSteps.length - 1 && (
                      <ArrowRight
                        className="text-gray-300 hidden md:block"
                        size={24}
                      />
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pitch Format */}
      <Section id="pitch-format" title="Pitch Session Format">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-hard text-white h-full">
                <Presentation size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-6">Session Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="flex-shrink-0" size={20} />
                    <span>
                      <strong>{pitchFormat.pitchTime}</strong> for pitching
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="flex-shrink-0" size={20} />
                    <span>
                      <strong>{pitchFormat.discussionTime}</strong> for
                      discussion
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-medium h-full">
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-6">Expert Panel</h3>
                <div className="space-y-3">
                  {pitchFormat.panelists.map((panelist, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className="text-green-500 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{panelist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" title="What You Get" background="gray">
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

      {/* Eligibility */}
      <Section id="eligibility" title="How to Apply">
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Application Requirements</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Open to entrepreneurs and startups. Submit your application with
                an optional 2-3 page business plan.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Available Languages:</h4>
                <div className="flex flex-wrap gap-3">
                  {applicationLanguages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner */}
      <Section id="partner" title="In Partnership With" background="gray">
        <div className="max-w-md mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-xl shadow-medium text-center">
              <Image
                src="/images/projects/liinked_way/PWC.svg.png"
                alt="PwC Logo"
                width={200}
                height={100}
                className="mx-auto h-auto object-contain"
              />
              <p className="text-gray-500 mt-2">Strategic Partner</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient-primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Pitch Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join LIINKEDWay and get direct access to investors, expert
            mentorship, and the support you need to scale your venture.
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
