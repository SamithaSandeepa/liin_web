"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  Target,
  Award,
  BarChart3,
  Lightbulb,
  X,
} from "lucide-react";

export default function InvestmentPhilosophyPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeroSection
        title="Investment Philosophy"
        subtitle="Deploying growth capital to create meaningful social and environmental impact"
        backgroundImage="/images/investments/philosophy/cover.jpg"
      />

      {/* Main Philosophy */}
      <Section title="Our Approach to Impact Investing" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p className="text-lg">
                Our approach to impact investing is to deploy growth capital
                into acceleration-stage and growth stage SMEs that demonstrate
                strong potential to deliver meaningful social and environmental
                impact. We invest in businesses that create tangible benefits
                for communities, employees, and the broader economy, while
                targeting attractive, risk-adjusted returns for our investors.
              </p>
              <p className="text-lg">
                We back committed and capable management teams with the ambition
                and capacity to scale their enterprises. Our investment focus
                includes SMEs and early-stage companies where measurable impact
                outcomes can be achieved.
              </p>
              <p className="text-lg">
                We also target opportunities that offer strong core financial
                returns, including enterprises operating in structural growth
                sectors, as well as underperforming businesses with identifiable
                upside potential through improved capital structures,
                operational enhancements, and strategic guidance.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/investments/philosophy/image.jpg"
                alt="Investment Philosophy"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="What is the LIINKEDWayit Score"
        subtitle="Your LIINKEDWayit Score is a numeric representation of your investments towards Social Entrepreneurship and your online involvement with social causes. Check yours here!"
        background="gradient-primary"
        className="py-16"
      >
        <div className="text-center relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              Learn More
            </button>
            <a
              href="https://www.liin.lk/facebook-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              Check Your Credit Score
            </a>
          </div>
        </div>
      </Section>

      {/* LIINKEDWayit Score Content */}
      <Section title="LIINKEDWayit Score" background="white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-lg">
              In a perfect world, your worthiness would be measured not by your
              financial history alone, but by the impact your actions have on
              society and the environment that you cohabit. At LIIN, everything
              we do is aimed towards creating a better world; which is why the
              investments you make towards Social Entrepreneurship, as well as
              your online involvement with social causes is measured and
              represented as your LIINKEDWayit Score.
            </p>
            <p className="text-lg font-semibold text-primary">
              Feel Good, Create a Better World. Increase your LIINKEDWayit
              Score.
            </p>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/wu6guOcmmr0"
                title="LIINKEDWayit Score Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Modal for Learn More */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">
                LIINKEDWayit Score
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="p-6 lg:p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Your LIINKEDWayit Score is based on a multiple of
                  quantitative and qualitative measures. Points are allocated
                  for the project category chosen and the performance of your
                  Investee, which is determined by both sales figures and the
                  level of skill development of your investee.
                </p>
                <p className="text-lg">
                  Points will also be allocated for facilitating access to
                  markets for the produce or services of your investee with the
                  objective of growing his or her business. Other ways to
                  increase your credit score includes referring prospective
                  investors and investees to register with LIIN and continuing
                  to actively participate in the selected projects or investing
                  in new projects listed on our website.
                </p>
                <p className="text-lg font-semibold text-primary">
                  Remember, that sharing any LIIN content on Facebook too would
                  improve your credit score.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
