"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const getImageUrl = (assetId: string | null) => {
    if (!assetId) return "/images/default-team-member.svg";
    return getAssetUrl(assetId);
  };

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      className="group cursor-pointer h-full"
    >
      <div className="bg-white p-4 md:p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center">
        <div className="relative w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-5">
          <Image
            src={getImageUrl(member.profile_photo)}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all"
          />
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
        </div>
        <h4 className="font-bold text-sm md:text-lg text-center mb-1">
          {member.name}
        </h4>
        <p className="text-primary text-xs md:text-base font-medium text-center">
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
        className="relative overflow-hidden scroll-mt-20"
      >
        {/* Team Group Photo */}
        <div className="animate-on-scroll mb-12">
          <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden shadow-hard bg-gray-100">
            <Image
              src={
                isMobile
                  ? "/images/aboutus/ourteam.jpg"
                  : "/images/aboutus/ourteam.webp"
              }
              alt="LIIN Team"
              fill
              className="object-cover md:object-cover"
            />
            {/* Gradient overlay - stronger on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent md:bg-gradient-to-t md:from-primary/50 md:to-transparent" />

            {/* Text container with better spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  Driving Impact Together
                </h3>
                <p className="text-sm md:text-base text-white/95 drop-shadow-md line-clamp-2 md:line-clamp-none">
                  Our dedicated team working towards sustainable development
                </p>
              </div>
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
