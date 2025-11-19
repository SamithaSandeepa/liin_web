interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: 'default' | 'fullscreen';
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = 'default'
}: HeroSectionProps) {
  const heightClass = height === 'fullscreen' ? 'min-h-screen' : 'min-h-[600px]';

  return (
    <section
      id="home"
      className={`relative ${heightClass} flex items-center justify-center text-center text-white`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        role="img"
        aria-label="Hero background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
