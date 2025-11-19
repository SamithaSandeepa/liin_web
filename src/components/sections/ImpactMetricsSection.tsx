import Section from '@/components/ui/Section';
import { impactMetrics } from '@/lib/data/metrics';

export default function ImpactMetricsSection() {
  return (
    <Section
      id="metrics"
      title="Our Measured Impact"
      background="secondary"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {impactMetrics.map((metric, idx) => (
          <div key={idx} className="animate-on-scroll p-8">
            <div className="text-6xl mb-6">{metric.icon}</div>
            <div className="text-4xl font-bold mb-3">{metric.value}</div>
            <div className="text-lg opacity-90 whitespace-pre-line">{metric.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
