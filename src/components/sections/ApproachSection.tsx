import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { approachData } from '@/lib/data/approach';

export default function ApproachSection() {
  return (
    <Section id="approach" title="Our Approach">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {approachData.map((card, idx) => (
          <Card
            key={idx}
            image={card.img}
            title={card.title}
            description={card.desc}
            variant="primary"
            buttonText="Learn More"
          />
        ))}
      </div>
    </Section>
  );
}
