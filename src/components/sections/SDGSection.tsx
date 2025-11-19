import Section from '@/components/ui/Section';
import { sdgImages } from '@/lib/data/sdgs';

export default function SDGSection() {
  return (
    <Section
      id="sdg"
      title="SDGs as LIIN Impact Indicators"
      background="gradient-secondary"
    >
      <div className="flex flex-wrap items-center justify-center gap-8">
        {sdgImages.map((sdg, idx) => (
          <img
            key={idx}
            src={sdg.src}
            alt={sdg.alt}
            className="w-28 h-28 bg-white rounded-lg p-2 hover:scale-110 transition-transform"
            loading="lazy"
          />
        ))}
      </div>
    </Section>
  );
}
