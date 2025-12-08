"use client";

import { useState } from "react";
import type { JourneyStage } from "@/types/journey";

interface SMEJourneySectionProps {
  stages: JourneyStage[];
  title?: string;
  subtitle?: string;
}

export default function SMEJourneySection({
  stages,
  title = "SME Journey through 'On Eagle's Wings'",
  subtitle = "Hover over each stage to explore the journey",
}: SMEJourneySectionProps) {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div
      className="max-w-6xl mx-auto relative"
      onClick={(e) => {
        // Close description when clicking outside on mobile
        const target = e.target as HTMLElement;
        if (!target.closest("[data-stage-container]")) {
          setActiveStage(null);
        }
      }}
    >
      {/* Journey Path Container */}
      <div className="relative">
        {/* Wavy Connection Line SVG - Desktop */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
          style={{ zIndex: 0 }}
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8">
                <animate
                  attributeName="stop-color"
                  values="#1e40af; #3b82f6; #60a5fa; #3b82f6; #1e40af"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9">
                <animate
                  attributeName="stop-color"
                  values="#3b82f6; #60a5fa; #93c5fd; #60a5fa; #3b82f6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8">
                <animate
                  attributeName="stop-color"
                  values="#60a5fa; #93c5fd; #bfdbfe; #93c5fd; #60a5fa"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <animate
                attributeName="x1"
                values="0%; -50%; 0%"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%; 150%; 100%"
                dur="6s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* Radial gradient for the traveling light */}
            <radialGradient id="lightGradient">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Main wave path */}
          <path
            id="wavePath"
            d="M 120 120 C 180 120, 220 300, 360 300 C 500 300, 540 120, 600 120 C 660 120, 700 300, 840 300 C 980 300, 1020 120, 1080 120"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-width"
              values="5; 6; 5"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.8; 1; 0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Traveling light effect */}
          <circle r="15" fill="url(#lightGradient)" opacity="0.9">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M 120 120 C 180 120, 220 300, 360 300 C 500 300, 540 120, 600 120 C 660 120, 700 300, 840 300 C 980 300, 1020 120, 1080 120"
            />
            <animate
              attributeName="r"
              values="12; 18; 12"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Vertical Connection Line - Mobile Only */}
        <div
          className="md:hidden absolute left-1/2 -translate-x-1/2 w-1 pointer-events-none z-0"
          style={{ top: "calc(2rem + 64px)", bottom: "calc(2rem + 64px)" }}
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 opacity-30"></div>
        </div>

        {/* Journey Stages */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10 py-8">
          {stages.map((stage, idx) => (
            <article
              key={stage.id}
              data-stage-container
              className={`flex flex-col items-center ${
                idx % 2 === 0 ? "md:mt-0" : "md:mt-24"
              }`}
              onMouseEnter={() => setActiveStage(stage.id)}
              onMouseLeave={() => setActiveStage(null)}
              onClick={(e) => {
                e.stopPropagation();
                setActiveStage(stage.id);
              }}
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <meta itemProp="position" content={stage.id.toString()} />

              {/* Circular Image Container - Fixed height container */}
              <div className="relative mb-4 h-40 md:h-44 flex items-center justify-center z-20">
                <div
                  className="group relative focus:outline-none cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${stage.title}: ${stage.description}`}
                  aria-expanded={activeStage === stage.id}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStage(
                        activeStage === stage.id ? null : stage.id
                      );
                    }
                  }}
                >
                  <div
                    className={`
                      relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden
                      shadow-lg hover:shadow-2xl transition-all duration-300
                      ${
                        activeStage === stage.id
                          ? "ring-4 ring-primary ring-offset-4 scale-110"
                          : "ring-2 ring-white ring-offset-2 hover:scale-105"
                      }
                    `}
                  >
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Stage Number Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10"
                    aria-label={`Stage ${stage.id}`}
                  >
                    {stage.id}
                  </div>

                  {/* Pulse Animation for Active */}
                  {activeStage === stage.id && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  )}
                </div>
              </div>

              {/* Title - Fixed height */}
              <h3
                className={`
                  text-center font-bold text-sm md:text-base px-2 mb-2 min-h-[3rem] flex items-center justify-center z-20 relative
                  transition-colors duration-300 cursor-pointer
                  ${
                    activeStage === stage.id
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }
                `}
                itemProp="name"
              >
                {stage.title}
              </h3>

              {/* Expandable Description - Absolute positioning to not affect layout */}
              <div className="relative w-full z-30">
                <div
                  className={`
                    absolute top-0 left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      activeStage === stage.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                  aria-hidden={activeStage !== stage.id}
                >
                  <div className="bg-white rounded-xl shadow-hard p-4 mt-2 mx-2 relative z-30">
                    <p
                      className="text-gray-600 text-sm leading-relaxed text-center"
                      itemProp="text"
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
