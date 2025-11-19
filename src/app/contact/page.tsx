import HeroSection from '@/components/sections/HeroSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import Section from '@/components/ui/Section';

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
          <details className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <summary className="font-bold text-lg text-white cursor-pointer">
              How do I become an investor?
            </summary>
            <p className="mt-4 text-white/90">
              Simply fill out the contact form above or email us directly. We'll schedule a call to discuss your investment goals and how LIIN can help you create impact.
            </p>
          </details>

          <details className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <summary className="font-bold text-lg text-white cursor-pointer">
              What type of social enterprises do you fund?
            </summary>
            <p className="mt-4 text-white/90">
              We focus on small to medium-sized social enterprises in Sri Lanka that address pressing social and environmental issues aligned with UN SDGs.
            </p>
          </details>

          <details className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <summary className="font-bold text-lg text-white cursor-pointer">
              How long does the funding process take?
            </summary>
            <p className="mt-4 text-white/90">
              The timeline varies depending on the complexity of the enterprise and investment. Typically, it takes 2-3 months from initial application to fund deployment.
            </p>
          </details>

          <details className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <summary className="font-bold text-lg text-white cursor-pointer">
              Do you provide non-financial support?
            </summary>
            <p className="mt-4 text-white/90">
              Yes! We offer comprehensive support including mentorship, strategic guidance, network access, and capacity building to help enterprises scale their impact.
            </p>
          </details>
        </div>
      </Section>
    </>
  );
}
