import Section from '@/components/ui/Section';
import { values } from '@/lib/data/values';

export default function ValuesSection() {
  return (
    <Section
      id="values"
      title="Our Core Values"
      subtitle="Principles that guide everything we do"
      background="gradient-secondary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="animate-on-scroll bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="text-6xl mb-6">{value.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
            <p className="text-base text-white/90">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
