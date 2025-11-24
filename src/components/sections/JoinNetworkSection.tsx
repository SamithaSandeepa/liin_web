import Section from "@/components/ui/Section";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

interface JoinNetworkSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function JoinNetworkSection({
  title = "Join Our Network",
  subtitle = "Be part of the impact investing movement in Sri Lanka",
  description = "Whether you're an investor looking to create meaningful impact or a social enterprise seeking funding, we'd love to connect with you.",
  primaryButtonText = "Get In Touch",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Back to Home",
  secondaryButtonLink = "/"
}: JoinNetworkSectionProps) {
  return (
    <Section
      id="join"
      title={title}
      subtitle={subtitle}
      background="gradient-primary"
      className="relative"
    >
      <AnimatedBackground />
      <div className="text-center relative z-10">
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={primaryButtonLink}
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </Section>
  );
}
