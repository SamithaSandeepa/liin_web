import Section from '@/components/ui/Section';
import { milestones } from '@/lib/data/milestones';

export default function TimelineSection() {
  return (
    <Section
      id="timeline"
      title="Our Journey"
      subtitle="Key milestones in building Sri Lanka's impact investing ecosystem"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`relative mb-12 animate-on-scroll ${
                idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 border-4 border-white shadow-lg"></div>

              <div className={`ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <div className="bg-white p-6 rounded-xl shadow-medium hover:shadow-hard transition-shadow">
                  <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
