'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import InvestmentBackground from '@/components/ui/InvestmentBackground';

const initiatives = [
  {
    title: 'Ath Pavura',
    description: 'Pioneering social entrepreneurship through reality TV, connecting innovators with impact investors.',
    link: '/initiatives/ath-pavura',
    icon: TrendingUp,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    title: "On Eagle's Wings",
    description: 'A transformative journey nurturing SMEs into key drivers of the national economy.',
    link: '/initiatives/eagles-wings',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    title: 'PIE',
    description: 'A digital hub providing comprehensive support for underserved entrepreneurs to build scalable ventures.',
    link: '/projects/pif',
    icon: Globe,
    color: 'text-primary-dark',
    bg: 'bg-primary-dark/10',
    border: 'border-primary-dark/20',
  },
];

export default function InitiativesShowcaseSection() {
  return (
    <Section
      id="initiatives"
      className="relative overflow-hidden"
      background="white"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <InvestmentBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
          >
            Our Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Driving transformative change through innovative programs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={initiative.link} className="block h-full">
                <div className={`
                  group relative h-full p-8 rounded-3xl transition-all duration-500
                  bg-white/60 backdrop-blur-md border border-white/50 shadow-lg
                  hover:shadow-xl hover:bg-white/80 hover:-translate-y-2
                `}>
                  {/* Icon Container */}
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                    ${initiative.bg} ${initiative.color} shadow-inner
                  `}>
                    <initiative.icon size={40} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 text-primary transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {initiative.description}
                    </p>
                    
                    <div className={`
                      inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider
                      ${initiative.color} opacity-80 group-hover:opacity-100 transition-all
                    `}>
                      Explore
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Gradient Border Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl border-2 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${initiative.border}
                  `} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
