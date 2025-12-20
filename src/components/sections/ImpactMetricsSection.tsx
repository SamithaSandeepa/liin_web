import Section from '@/components/ui/Section';
import CounterAnimation from '@/components/ui/CounterAnimation';
import PrismaBackground from '@/components/ui/PrismaBackground';
import { impactMetrics } from '@/lib/data/metrics';

export default function ImpactMetricsSection() {
  return (
    <Section
      id="metrics"
      title="Our Measured Impact"
      background="secondary"
      className="relative"
    >
      <PrismaBackground />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center relative z-10">
        {impactMetrics.map((metric, idx) => {
          const IconComponent = metric.icon;
          return (
            <div key={idx} className="animate-on-scroll p-6">
              <div className="flex justify-center mb-4">
                <IconComponent size={48} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <CounterAnimation value={metric.value} duration={2} className="text-3xl font-bold mb-0" />
                {metric.suffix && (
                  <span className="text-2xl font-bold text-white">{metric.suffix}</span>
                )}
              </div>
              <div className="text-sm opacity-90 whitespace-pre-line mt-2">{metric.label}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
