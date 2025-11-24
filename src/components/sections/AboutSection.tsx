import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About the Lanka Impact Investing Network"
      background="gray"
    >
      <p className="text-xl leading-relaxed text-gray-700 max-w-5xl mx-auto mb-12 text-center">
        We are a group of experienced professionals with the shared vision of
        building a thriving social enterprise sector since 2015 in Sri Lanka. We
        have identified the need for a dedicated impact investment company which
        will support the emerging social enterprise sector in Sri Lanka.
        Together we aspire to provide knowledge and financial capital to social
        enterprises that are small to medium in size, which will address
        pressing social and environmental issues across Sri Lanka.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <Button variant="primary" size="lg">
          About Us
        </Button>
        <Button variant="outline" size="lg">
          Investment Philosophy
        </Button>
      </div>
    </Section>
  );
}
