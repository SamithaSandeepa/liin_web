'use client';

export default function PrismaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="prism1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="prism2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.08)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Floating triangles */}
        <polygon
          points="100,50 200,200 0,200"
          fill="url(#prism1)"
          className="animate-prism-float-1"
        />
        <polygon
          points="800,100 900,250 700,250"
          fill="url(#prism2)"
          className="animate-prism-float-2"
        />
        <polygon
          points="300,400 450,500 150,500"
          fill="url(#prism1)"
          className="animate-prism-float-3"
        />
        <polygon
          points="1200,300 1350,450 1050,450"
          fill="url(#prism2)"
          className="animate-prism-float-4"
        />

        {/* Rotating diamonds */}
        <polygon
          points="400,150 450,200 400,250 350,200"
          fill="rgba(255,255,255,0.06)"
          className="animate-prism-rotate-1"
          style={{ transformOrigin: '400px 200px' }}
        />
        <polygon
          points="1000,350 1050,400 1000,450 950,400"
          fill="rgba(255,255,255,0.06)"
          className="animate-prism-rotate-2"
          style={{ transformOrigin: '1000px 400px' }}
        />
      </svg>

      {/* Hexagon grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <style jsx>{`
        @keyframes prism-float-1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(50px, -30px) rotate(10deg);
            opacity: 0.3;
          }
        }

        @keyframes prism-float-2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(-40px, 40px) rotate(-8deg);
            opacity: 0.2;
          }
        }

        @keyframes prism-float-3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translate(60px, 20px) rotate(12deg);
            opacity: 0.7;
          }
        }

        @keyframes prism-float-4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50px, -25px) rotate(-10deg);
            opacity: 0.25;
          }
        }

        @keyframes prism-rotate-1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes prism-rotate-2 {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-prism-float-1 {
          animation: prism-float-1 15s ease-in-out infinite;
        }

        .animate-prism-float-2 {
          animation: prism-float-2 18s ease-in-out infinite;
        }

        .animate-prism-float-3 {
          animation: prism-float-3 20s ease-in-out infinite;
        }

        .animate-prism-float-4 {
          animation: prism-float-4 16s ease-in-out infinite;
        }

        .animate-prism-rotate-1 {
          animation: prism-rotate-1 25s linear infinite;
        }

        .animate-prism-rotate-2 {
          animation: prism-rotate-2 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
