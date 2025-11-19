import Image from 'next/image';
import Section from '@/components/ui/Section';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Real stories from those who achieved more with us."
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, idx) => (
          <article key={idx} className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-shadow">
            <div className="relative w-full h-48 mb-6">
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                fill
                className="object-cover rounded-xl"
              />
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition-transform"
                aria-label={`Play video testimonial from ${testimonial.name}`}
              >
                ▶
              </button>
            </div>
            <div className="font-bold mb-2">{testimonial.name}</div>
            <p className="text-sm italic text-gray-600">{testimonial.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
