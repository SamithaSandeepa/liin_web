import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import { fetchPartners, getAssetUrl, Partner } from "@/lib/api";

export default async function PartnersPage() {
  let partners: Partner[] = [];

  try {
    const response = await fetchPartners();
    partners = response.data?.filter((partner) => partner.status === "published") || [];
  } catch (error) {
    console.error("Failed to fetch partners:", error);
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
        {partners.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No partners available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 flex items-center justify-center h-40 group-hover:scale-105">
                  <img
                    src={getAssetUrl(partner.logo)}
                    alt={partner.name}
                    className="max-h-24 max-w-full object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center mt-4 font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {partner.name}
                </p>
              </a>
            ))}
          </div>
        )}
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
