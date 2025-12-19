import { ctaData } from "@/lib/data/cta";
import { TrendingUp, Lightbulb } from "lucide-react";

// Icon mapping
const iconMap = {
  TrendingUp: TrendingUp,
  Lightbulb: Lightbulb,
};

export default function CTASection() {
  return (
    <section id="cta" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Become an Investor - Left Side */}
        <div
          className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 h-full"
          style={{
            backgroundImage: "url(/images/cta/investor.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-primary/85" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-md animate-on-scroll flex flex-col items-center">
            <div className="mb-6 md:h-16 flex items-center justify-center">
              {(() => {
                const IconComponent =
                  iconMap[ctaData[0].icon as keyof typeof iconMap];
                return IconComponent ? (
                  <IconComponent
                    size={64}
                    className="mx-auto text-white"
                    strokeWidth={1.5}
                  />
                ) : null;
              })()}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white md:h-20 flex items-center justify-center">
              {ctaData[0].title}
            </h3>
            <p className="text-base leading-relaxed mb-6 text-white/90 md:h-24 text-justify md:flex md:items-start md:justify-center">
              {ctaData[0].desc}
            </p>
            <a
              href={ctaData[0].link}
              className="inline-block bg-white text-primary px-10 py-4 md:mt-12 lg:mt-16 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
            >
              {ctaData[0].btn}
            </a>
          </div>
        </div>

        {/* Apply for Funding - Right Side */}
        <div
          className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 h-full"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Darker Blue Overlay */}
          <div className="absolute inset-0 bg-secondary/90" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-md animate-on-scroll flex flex-col items-center">
            <div className="mb-6 md:h-16 flex items-center justify-center">
              {(() => {
                const IconComponent =
                  iconMap[ctaData[1].icon as keyof typeof iconMap];
                return IconComponent ? (
                  <IconComponent
                    size={64}
                    className="mx-auto text-white"
                    strokeWidth={1.5}
                  />
                ) : null;
              })()}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white md:h-20 flex items-center justify-center">
              {ctaData[1].title}
            </h3>
            <p className="text-base leading-relaxed mb-6 text-white/90 md:h-24 text-justify md:flex md:items-start md:justify-center">
              {ctaData[1].desc}
            </p>
            <a
              href={ctaData[1].link}
              className="inline-block bg-white text-secondary px-10 py-4 md:mt-12 lg:mt-16 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
            >
              {ctaData[1].btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
