"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { RoleCategory, TeamMember, getAssetUrl } from "@/lib/api";

interface TeamSectionClientProps {
  categories: RoleCategory[];
  teamMembers: TeamMember[];
}

export default function TeamSectionClient({
  categories,
  teamMembers,
}: TeamSectionClientProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]?.id || ""
  );

  const getImageUrl = (assetId: string | null) => {
    if (!assetId) return "/images/default-team-member.svg";
    return getAssetUrl(assetId);
  };

  const currentTeam = teamMembers.filter(
    (member) => member.team_member_category === activeCategory
  );

  const TeamMemberCard = ({
    member,
    index,
  }: {
    member: TeamMember;
    index: number;
  }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={() => setSelectedMember(member)}
      className="group cursor-pointer"
    >
      <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 hover:-translate-y-2">
        <div className="relative w-32 h-32 mx-auto mb-5">
          <Image
            src={getImageUrl(member.profile_photo)}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all"
          />
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
        </div>
        <h4 className="font-bold text-lg text-center">{member.name}</h4>
        <p className="text-primary text-base font-medium text-center">
          {member.job_title}
        </p>
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
              <h3 className="text-2xl md:text-3xl font-bold">
                Driving Impact Together
              </h3>
              <p className="text-white/90">
                Our dedicated team working towards sustainable development
              </p>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        {categories.length > 0 && (
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-full p-1.5 shadow-medium inline-flex">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {category.team_member_category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Team Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {currentTeam.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No team members in this category.
                </p>
              </div>
            ) : (
              currentTeam.map((member, idx) => (
                <TeamMemberCard key={member.id} member={member} index={idx} />
              ))
            )}
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
                      src={getImageUrl(selectedMember.profile_photo)}
                      alt={selectedMember.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full ring-4 ring-white/30"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{selectedMember.name}</h3>
                    <p className="text-white/90">{selectedMember.job_title}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 flex-wrap">
                  {selectedMember.linkedin_url && (
                    <a
                      href={selectedMember.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006699] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {selectedMember.facebook_url && (
                    <a
                      href={selectedMember.facebook_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  {selectedMember.instagram_url && (
                    <a
                      href={selectedMember.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {selectedMember.twitter_url && (
                    <a
                      href={selectedMember.twitter_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a91da] transition-colors"
                    >
                      <Twitter size={18} />
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
