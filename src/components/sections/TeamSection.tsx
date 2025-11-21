'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

// Board of Directors
const boardMembers: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'Chairman',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'John brings over 25 years of experience in investment banking and social enterprise development. He has been instrumental in establishing LIIN as Sri Lanka\'s premier impact investment firm.',
    linkedin: 'https://linkedin.com/in/johnsmith',
    email: 'john@liin.lk',
  },
  {
    name: 'Sarah Johnson',
    role: 'Director',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Sarah is a renowned expert in sustainable finance with experience across Asia. She oversees LIIN\'s investment strategy and portfolio management.',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    email: 'sarah@liin.lk',
  },
  {
    name: 'Michael Chen',
    role: 'Director',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Michael is a serial entrepreneur and angel investor who has founded multiple successful social enterprises. He brings valuable insights on scaling impact-driven businesses.',
    linkedin: 'https://linkedin.com/in/michaelchen',
    email: 'michael@liin.lk',
  },
  {
    name: 'Priya Sharma',
    role: 'Director',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Priya has extensive experience in development finance and has worked with leading multilateral organizations. She guides LIIN\'s partnerships and stakeholder relations.',
    linkedin: 'https://linkedin.com/in/priyasharma',
    email: 'priya@liin.lk',
  },
];

// Management Team
const managementTeam: TeamMember[] = [
  {
    name: 'David Williams',
    role: 'CEO',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'David leads LIIN\'s strategic direction and operations. With 15 years in impact investing, he has deployed over $50M in social enterprises across South Asia.',
    linkedin: 'https://linkedin.com/in/davidwilliams',
    email: 'david@liin.lk',
  },
  {
    name: 'Emma Thompson',
    role: 'COO',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'Emma oversees daily operations and portfolio company support. She has helped scale over 30 social enterprises through hands-on operational guidance.',
    linkedin: 'https://linkedin.com/in/emmathompson',
    email: 'emma@liin.lk',
  },
  {
    name: 'Ravi Patel',
    role: 'CFO',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    bio: 'Ravi manages LIIN\'s financial strategy and fund management. He brings deep expertise in structuring innovative financing instruments for social enterprises.',
    linkedin: 'https://linkedin.com/in/ravipatel',
    email: 'ravi@liin.lk',
  },
  {
    name: 'Lisa Anderson',
    role: 'Investment Manager',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: 'Lisa leads deal sourcing and due diligence. She has evaluated over 200 social enterprises and structured investments across diverse impact sectors.',
    linkedin: 'https://linkedin.com/in/lisaanderson',
    email: 'lisa@liin.lk',
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<'board' | 'management'>('board');

  const currentTeam = activeTab === 'board' ? boardMembers : managementTeam;

  const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={() => setSelectedMember(member)}
      className="group cursor-pointer"
    >
      <div className="bg-white p-6 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 hover:-translate-y-2">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={member.img}
            alt={member.name}
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all"
          />
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
        </div>
        <h4 className="font-bold text-base text-center">{member.name}</h4>
        <p className="text-primary text-sm font-medium text-center">{member.role}</p>
      </div>
    </motion.article>
  );

  return (
    <>
      <Section
        id="team"
        title="Meet Our Team"
        subtitle="Experienced professionals driving impact across Sri Lanka"
        background="gray"
      >
        {/* Team Group Photo */}
        <div className="animate-on-scroll mb-12">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-hard">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
              alt="LIIN Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Driving Impact Together</h3>
              <p className="text-white/90">Our dedicated team working towards sustainable development</p>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 shadow-medium inline-flex">
            <button
              onClick={() => setActiveTab('board')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'board'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Board of Directors
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'management'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Management Team
            </button>
          </div>
        </div>

        {/* Team Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'board' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'board' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {currentTeam.map((member, idx) => (
              <TeamMemberCard key={member.name} member={member} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full ring-4 ring-white/30"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{selectedMember.name}</h3>
                    <p className="text-white/90">{selectedMember.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                {/* Contact Links */}
                <div className="flex gap-3">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006699] transition-colors"
                    >
                      <Linkedin size={18} />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  )}
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Mail size={18} />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
