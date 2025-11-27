'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Partner, PartnerCategory, getAssetUrl } from '@/lib/api';

interface PartnersSectionClientProps {
  partners: Partner[];
  categories: PartnerCategory[];
}

export default function PartnersSectionClient({ partners, categories }: PartnersSectionClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');

  useEffect(() => {
    if (categories.length > 0 && !categories.some(c => c.id === activeCategory)) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const filteredPartners = activeCategory
    ? partners.filter((partner) => partner.partner_category === activeCategory)
    : partners;

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 shadow-medium inline-flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category.partner_category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Partners Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredPartners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No partners available in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredPartners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 flex items-center justify-center h-40 group-hover:scale-105">
                    <img
                      src={getAssetUrl(partner.logo)}
                      alt={partner.name}
                      className="max-h-24 max-w-full object-contain transition-all duration-300"
                    />
                  </div>
                  <p className="text-center mt-4 font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {partner.name}
                  </p>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
