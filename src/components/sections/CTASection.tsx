import Section from '@/components/ui/Section';
import { ctaData } from '@/lib/data/cta';

export default function CTASection() {
  return (
    <Section id="cta" background="gradient-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {ctaData.map((cta, idx) => (
          <div key={idx} className="animate-on-scroll bg-white/10 backdrop-blur-sm p-12 rounded-2xl hover:bg-white/20 transition-all">
            <div className="text-5xl mb-6">{cta.icon}</div>
            <h3 className="text-3xl font-bold mb-6 text-white">{cta.title}</h3>
            <p className="text-base leading-relaxed mb-8 text-white opacity-95">{cta.desc}</p>
            <a href={cta.link} className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              {cta.btn}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
