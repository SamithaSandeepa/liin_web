import { ctaData } from '@/lib/data/cta';

export default function CTASection() {
  return (
    <section id="cta" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Become an Investor - Left Side */}
        <div
          className="relative flex items-center justify-center p-8 md:p-12 lg:p-16"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560472355-536de3962603?w=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-primary/85" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-md animate-on-scroll">
            <div className="text-5xl mb-6">{ctaData[0].icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {ctaData[0].title}
            </h3>
            <p className="text-base leading-relaxed mb-8 text-white/90">
              {ctaData[0].desc}
            </p>
            <a
              href={ctaData[0].link}
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
            >
              {ctaData[0].btn}
            </a>
          </div>
        </div>

        {/* Apply for Funding - Right Side */}
        <div
          className="relative flex items-center justify-center p-8 md:p-12 lg:p-16"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Darker Blue Overlay */}
          <div className="absolute inset-0 bg-secondary/90" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-md animate-on-scroll">
            <div className="text-5xl mb-6">{ctaData[1].icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {ctaData[1].title}
            </h3>
            <p className="text-base leading-relaxed mb-8 text-white/90">
              {ctaData[1].desc}
            </p>
            <a
              href={ctaData[1].link}
              className="inline-block bg-white text-secondary px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
            >
              {ctaData[1].btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
