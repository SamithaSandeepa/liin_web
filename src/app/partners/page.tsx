import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import {
  fetchPartners,
  fetchPartnerCategories,
  getAssetUrl,
  Partner,
  PartnerCategory,
} from "@/lib/api";
import PartnersSectionClient from "@/components/sections/PartnersSectionClient";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";

export default async function PartnersPage() {
  let partners: Partner[] = [];
  let categories: PartnerCategory[] = [];

  try {
    const [partnersRes, categoriesRes] = await Promise.all([
      fetchPartners(),
      fetchPartnerCategories(),
    ]);
    partners =
      partnersRes.data?.filter((partner) => partner.status === "published") ||
      [];
    categories =
      categoriesRes.data?.filter((cat) => cat.status === "published") || [];
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

      <JoinNetworkSection
        title="Join Our Network"
        subtitle="Be part of the impact investing movement in Sri Lanka"
        description="Whether you're an investor looking to create meaningful impact or a social enterprise seeking funding, we'd love to connect with you."
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Back to Home"
        secondaryButtonLink="/"
      />
    </>
  );
}
