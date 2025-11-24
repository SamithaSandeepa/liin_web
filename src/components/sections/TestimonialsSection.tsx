import Section from '@/components/ui/Section';
import { fetchTestimonials, Testimonial } from '@/lib/api';
import TestimonialsSectionClient from './TestimonialsSectionClient';

export default async function TestimonialsSection() {
  let testimonials: Testimonial[] = [];

  try {
    const response = await fetchTestimonials();
    testimonials = response.data?.filter(t => t.status === 'published') || [];
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Real stories from those who achieved more with us."
      background="gray"
    >
      <TestimonialsSectionClient testimonials={testimonials} />
    </Section>
  );
}
