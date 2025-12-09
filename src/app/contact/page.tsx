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
} from "lucide-react";

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
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
      />

      <ContactInfoSection />
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
