import Section from '@/components/ui/Section';
import ApproachCardExpanded from './ApproachCardExpanded';
import { approachData } from '@/lib/data/approach';

export default function ApproachSection() {
  return (
    <Section id="approach" title="Our Approach">
      <ApproachCardExpanded cards={approachData} />
    </Section>
  );
}
