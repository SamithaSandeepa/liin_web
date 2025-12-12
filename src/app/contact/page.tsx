import HeroSection from "@/components/sections/HeroSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Section from "@/components/ui/Section";
import {
  HelpCircle,
  Users,
  Building2,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { offices } from "@/lib/data/contact";

/**
 * Contact Page - Get in touch with LIIN
 *
 * This page demonstrates mixing server and client components:
 * - The page itself is a server component
 * - ContactInfoSection is a server component (static content)
 * - ContactFormSection is a client component (needs interactivity)
 *
 * This pattern optimizes performance while maintaining interactivity.
 * Header, Footer, and AnimationProvider are in layout.tsx (shared across all pages).
 */

const faqs = [
  {
    question: "How do I become an investor?",
    answer:
      "Simply fill out the contact form above or email us directly. We'll schedule a call to discuss your investment goals and how LIIN can help you create impact.",
    icon: Users,
  },
  {
    question: "What type of social enterprises do you fund?",
    answer:
      "We focus on small to medium-sized social enterprises in Sri Lanka that address pressing social and environmental issues aligned with UN SDGs.",
    icon: Building2,
  },
  {
    question: "How long does the funding process take?",
    answer:
      "The timeline varies depending on the complexity of the enterprise and investment. Typically, it takes 2-3 months from initial application to fund deployment.",
    icon: Clock,
  },
  {
    question: "Do you provide non-financial support?",
    answer:
      "Yes! We offer comprehensive support including mentorship, strategic guidance, network access, and capacity building to help enterprises scale their impact.",
    icon: HeartHandshake,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Let's work together to create meaningful impact"
        backgroundImage="/images/contact/cover.jpg"
      />

      <ContactInfoSection />

      {/* Our Offices Section */}
      <Section
        id="offices"
        title="Our Offices"
        subtitle="Visit us at our locations across Sri Lanka"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="animate-on-scroll bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-medium hover:shadow-hard transition-all p-8 border border-primary/10"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Office Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Building2 size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {office.city}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {office.address}
                    </p>
                    {office.mapLink && (
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-semibold mt-2 text-sm transition-colors"
                      >
                        View on Map
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactFormSection />

      {/* FAQ Section */}
      <Section
        id="faq"
        title="Frequently Asked Questions"
        background="gradient-secondary"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => {
            const IconComponent = faq.icon;
            return (
              <details
                key={idx}
                className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-xl group hover:bg-white/15 transition-all"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <summary className="font-bold text-lg text-white cursor-pointer flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent size={18} className="text-white" />
                  </div>
                  <span>{faq.question}</span>
                </summary>
                <p className="mt-4 text-white/90 pl-11 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            );
          })}
        </div>
      </Section>
    </>
  );
}
