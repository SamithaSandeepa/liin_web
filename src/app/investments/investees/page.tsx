import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import { investees } from "@/data/investees";
import { User, MapPin, Briefcase } from "lucide-react";

export const metadata = {
  title: "Investees | LIIN",
  description: "Meet the inspiring entrepreneurs and businesses supported by Lanka Impact Investing Network.",
};

export default function InvesteesPage() {
  return (
    <>
      <HeroSection
        title="Meet Our Investees"
        subtitle="Supporting innovative entrepreneurs across Sri Lanka to create sustainable impact."
        backgroundImage="/images/hero-investees.jpg"
      />

      <Section 
        title="Our Investees" 
        subtitle="Discover the inspiring social enterprises we've partnered with to drive meaningful change"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investees.map((investee) => (
            <div
              key={investee.id}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full transition-all duration-300 group-hover:bg-primary/20" />
              
              <h3 className="relative text-2xl font-bold text-primary mb-6">
                {investee.businessName}
              </h3>
              
              <div className="relative space-y-4">
                <div className="flex items-start gap-3 text-gray-700">
                  <User size={20} className="mt-0.5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">Owner</p>
                    <p className="text-base font-medium">{investee.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={20} className="mt-0.5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">Location</p>
                    <p className="text-base">{investee.district}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-700">
                  <Briefcase size={20} className="mt-0.5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">Industry</p>
                    <p className="text-base">{investee.businessType}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
