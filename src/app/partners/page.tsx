import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import { fetchPartners, fetchPartnerCategories, getAssetUrl, Partner, PartnerCategory } from "@/lib/api";
import PartnersSectionClient from "@/components/sections/PartnersSectionClient";

export default async function PartnersPage() {
  let partners: Partner[] = [];
  let categories: PartnerCategory[] = [];

  try {
    const [partnersRes, categoriesRes] = await Promise.all([
      fetchPartners(),
      fetchPartnerCategories()
    ]);
    partners = partnersRes.data?.filter((partner) => partner.status === "published") || [];
    categories = categoriesRes.data?.filter((cat) => cat.status === "published") || [];
  } catch (error) {
    console.error("Failed to fetch partners data:", error);
  }

  return (
    <>
      <HeroSection
        title="Our Partners"
        subtitle="Working together to drive impact and create sustainable change"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
      />

      <Section
        id="partners-grid"
        title="Strategic Partners"
        subtitle="We collaborate with organizations that share our vision for a better Sri Lanka"
      >
        <PartnersSectionClient partners={partners} categories={categories} />
      </Section>

      <Section
        id="become-partner"
        title="Become a Partner"
        subtitle="Join us in creating lasting impact"
        background="gradient-primary"
      >
        <div className="text-center">
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            We're always looking for organizations that share our commitment to
            social impact and sustainable development. Let's work together to
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Partner With Us
            </a>
            <a
              href="/about"
              className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
