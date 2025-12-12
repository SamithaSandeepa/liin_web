import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import {
  DollarSign,
  Target,
  Clock,
  TrendingUp,
  Users,
  Award,
  Building2,
  Leaf,
  Laptop,
  Heart,
  Shirt,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Impact Enterprise Fund | LIIN",
  description:
    "The Impact Enterprise Fund (IEF) promotes social entrepreneurship in Sri Lanka through impact investments.",
};

export default function ImpactEnterpriseFundPage() {
  const keyDetails = [
    { icon: DollarSign, label: "Fund Size", value: "USD 5 Million" },
    {
      icon: TrendingUp,
      label: "Investment Ticket Size",
      value: "LKR 15M - 100M",
    },
    {
      icon: Clock,
      label: "Investment Duration",
      value: "Up to 5 years (+3 years extension)",
    },
    {
      icon: Target,
      label: "Stage Focus",
      value: "Acceleration and Growth Stage",
    },
  ];

  const sectors = [
    { icon: Leaf, name: "Agriculture & Fisheries" },
    { icon: Users, name: "Tourism" },
    { icon: Leaf, name: "Climate & Renewable Energy" },
    { icon: Laptop, name: "IT & Education" },
    { icon: Heart, name: "Healthcare" },
    { icon: Shirt, name: "Apparel & Textile" },
    { icon: Home, name: "Sustainable Construction & Affordable Housing" },
  ];

  const benefits = [
    {
      title: "Bespoke Technical Assistance Facility",
      description:
        "Prospective portfolio companies will receive pre-investment and post-investment Technical Assistance facility to enhance their investment readiness. This will significantly reduce the perceived risk of the companies and help unlock further investment opportunities.",
    },
    {
      title: "Curated Impact Measurement and Management (IMM) support",
      description:
        "IEF is a partnership between LIIN and UNDP. This enables the portfolio companies to receive curated Impact Measurement and Management support to fine tune their impact practices, metrics and reporting to meet international standards.",
    },
  ];

  const selectionCriteria = [
    {
      title: "Revenue Range",
      description:
        "Enterprises must have minimum annual revenues of LKR 15 million (established in the market) and demonstrate potential to grow towards the upper limit of LKR 80 million.",
    },
    {
      title: "Export Revenue",
      description:
        "At least 25% or 30% of revenue should be generated from export markets. This showcases the company's ability to thrive in competitive international markets, adding resilience and scalability potential.",
    },
    {
      title: "Net Asset Value",
      description:
        "Enterprises should have a minimum net asset value of LKR 3 million to ensure financial stability.",
    },
    {
      title: "Cashflow & Profitability",
      description:
        "Enterprises should maintain positive cash flow to sustain operations, ensuring they generate enough revenue to cover expenses and manage the business for 3 to 6 months without heavy reliance on external funding.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Impact Enterprise Fund"
        subtitle="Promoting social entrepreneurship in Sri Lanka through strategic impact investments"
        backgroundImage="/images/ief/cover.jpg"
      />

      {/* What is IEF */}
      <Section title="What is Impact Enterprise Fund?" background="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The Impact Enterprise Fund (IEF) is a groundbreaking initiative that
            promotes social entrepreneurship in Sri Lanka through impact
            investments. A partnership between the Lanka Impact Investing
            Network (LIIN) and the UNDP, IEF invests in businesses with strong
            growth potential and a clear commitment to making positive social
            and environmental impacts.
          </p>
        </div>
      </Section>

      {/* Key Details */}
      <Section title="Key Details of IEF" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyDetails.map((detail, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <detail.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-gray-500 font-medium mb-2">
                  {detail.label}
                </p>
                <p className="text-base font-bold text-gray-800">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="bg-white rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Currency of Investment
                </p>
                <p className="text-gray-700">Sri Lankan Rupees (LKR)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Investment Philosophy
                </p>
                <p className="text-gray-700">
                  Focus on growth capital for companies at the acceleration or
                  growth stage. These companies must exhibit substantial growth
                  potential and a quantifiable degree of positive social and
                  environmental impact.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Investment Instrument
                </p>
                <p className="text-gray-700">Debt or Convertible Notes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Sectors */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold text-center text-primary mb-8">
            Focus Sectors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <sector.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {sector.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section
        title="Benefits Offered to Portfolio Companies"
        background="white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-primary/5 border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Selection Criteria */}
      <Section
        title="Portfolio Selection Criteria"
        subtitle="IEF intends to invest in companies that fulfill the following selection criteria"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {selectionCriteria.map((criteria, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-medium hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
            >
              <h3 className="text-lg font-bold text-primary mb-3">
                {criteria.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {criteria.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
