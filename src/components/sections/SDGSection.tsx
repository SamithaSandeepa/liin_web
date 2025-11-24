import Image from 'next/image';
import Section from '@/components/ui/Section';
import { sdgImages } from '@/lib/data/sdgs';

export default function SDGSection() {
  return (
    <Section
      id="sdg"
      title="SDGs as LIIN Impact Indicators"
      background="white"
    >
      <div className="flex flex-wrap items-center justify-center gap-8">
        {sdgImages.map((sdg, idx) => (
          <div
            key={idx}
            className="w-28 h-28 hover:scale-110 transition-transform"
          >
            <Image
              src={sdg.src}
              alt={sdg.alt}
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
