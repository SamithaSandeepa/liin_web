'use client';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated lines/particles */}
      <div className="absolute top-1/3 left-10 w-1 h-32 bg-white/40 animate-line-grow" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 right-20 w-1 h-40 bg-white/40 animate-line-grow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-36 bg-white/40 animate-line-grow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-20 left-1/2 w-1 h-28 bg-white/40 animate-line-grow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-44 bg-white/40 animate-line-grow" style={{ animationDelay: '2.5s' }} />

      {/* Small particles */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/50 rounded-full animate-particle-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 right-40 w-2 h-2 bg-white/50 rounded-full animate-particle-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-particle-float" style={{ animationDelay: '1.5s' }} />

      {/* Geometric patterns - subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <style jsx>{`
        @keyframes line-grow {
          0% {
            height: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            height: 150px;
            opacity: 0;
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
            transform: translateY(-40px) scale(1);
          }
          50% {
            transform: translateY(-80px) scale(1);
          }
          75% {
            opacity: 0.5;
            transform: translateY(-120px) scale(0.8);
          }
          100% {
            transform: translateY(-160px) scale(0);
            opacity: 0;
          }
        }

        .animate-line-grow {
          animation: line-grow 4s ease-in-out infinite;
        }

        .animate-particle-float {
          animation: particle-float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
