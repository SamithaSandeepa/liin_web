import Image from 'next/image';
import Section from '@/components/ui/Section';
import { teamMembers } from '@/lib/data/team';

export default function TeamSection() {
  return (
    <Section
      id="team"
      title="Meet Our Team"
      subtitle="Experienced professionals driving impact across Sri Lanka"
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <article key={idx} className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-shadow">
            <div className="relative w-full h-64 mb-6">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-primary font-semibold mb-3">{member.role}</p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
