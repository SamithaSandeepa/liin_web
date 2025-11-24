import Section from '@/components/ui/Section';
import { fetchTestimonials, Testimonial } from '@/lib/api';

function getYouTubeEmbedUrl(url: string): string {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

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
      <div className={`grid grid-cols-1 ${testimonials.length === 1 ? 'max-w-2xl mx-auto' : testimonials.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : testimonials.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="animate-on-scroll bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-shadow">
            <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(testimonial.youtube_url)}
                title="Testimonial video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              className="text-sm italic text-gray-600"
              dangerouslySetInnerHTML={{ __html: testimonial.testimonial_text }}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
