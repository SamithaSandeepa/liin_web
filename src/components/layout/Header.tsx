"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, HandHeart, TrendingUp, Coins } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

// First 5 items in navbar, rest in sidebar
const navItems: NavItem[] = [
  {
    label: "Who We Are",
    href: "/about",
    subItems: [
      { label: "About", href: "/about#about-content" },
      { label: "Meet Our Team", href: "/about#team" },
    ],
  },
  {
    label: "LIIN Initiatives",
    href: "#initiatives",
    subItems: [
      { label: "On Eagle's Wings", href: "/initiatives/eagles-wings" },
      { label: "Ath Pavura", href: "/initiatives/ath-pavura" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    subItems: [
      {
        label: "Ongoing Projects",
        href: "/projects/ongoing",
        subItems: [{ label: "GRIT", href: "https://www.liin.lk/grit/" }],
      },
      {
        label: "Past Projects",
        href: "/projects/past",
        subItems: [
          { label: "Climate Challenge", href: "/projects/climate-challenge" },
          { label: "PIE", href: "/projects/pie" },
          { label: "Emerging Women", href: "/projects/emerging-women" },
          { label: "Linked Way", href: "/projects/linked-way" },
        ],
      },
    ],
  },
  {
    label: "Investments",
    href: "/investments",
    subItems: [
      { label: "Investment Philosophy", href: "/investments/philosophy" },
      { label: "Investees", href: "/investments/investees" },
    ],
  },
  {
    label: "Impact Funds",
    href: "/impact-funds",
    subItems: [
      { label: "Social Enterprise Fund (SEF)", href: "/impact-funds/sef" },
    ],
  },
];

// Sidebar items
const sidebarItems: NavItem[] = [
  { label: "Our Partners", href: "/partners" },
  {
    label: "News and Insights",
    href: "/news",
    subItems: [
      { label: "News & Insights", href: "/news" },
      { label: "Events", href: "/news?category=events" },
      // { label: "Testimonials", href: "/news?category=testimonials" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(
    null
  );
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState<string | null>(
    null
  );
  const [openSidebarNested, setOpenSidebarNested] = useState<string | null>(
    null
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSidebarDropdown(null);
    setOpenSidebarNested(null);
  };

  const handleDropdownEnter = (label: string) => setOpenDropdown(label);
  const handleDropdownLeave = () => {
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  const toggleSidebarDropdown = (label: string) => {
    setOpenSidebarDropdown(openSidebarDropdown === label ? null : label);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between lg:gap-12 py-4 lg:py-6">
            {/* Logo - Left Side */}
            <a
              href="/"
              className={`flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity ${
                isMenuOpen ? "hidden lg:flex" : "flex"
              }`}
              aria-label="LIIN Home"
            >
              <Image
                src="/images/logo.png"
                alt="LIIN Logo"
                width={160}
                height={160}
                className="object-contain h-12 lg:h-20 w-auto"
                priority
              />
            </a>

            {/* Right Side Column */}
            <div className="flex flex-col flex-1 items-end">
              <div className="flex flex-col">
                {/* Top Bar - Desktop Only */}
                <div className="hidden lg:flex justify-between items-center pb-3 border-b border-white/20 text-xs font-medium text-white/90 mb-2">
                  <span className="text-white/80 uppercase tracking-wider font-semibold">
                    Get Involved
                  </span>

                  <div className="flex items-center gap-8 pl-12">
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-white hover:underline transition-all decoration-white/50"
                    >
                      <TrendingUp size={14} />
                      <span>Become an Investor</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-white hover:underline transition-all decoration-white/50"
                    >
                      <Coins size={14} />
                      <span>Apply for Funding</span>
                    </a>
                  </div>
                </div>

                {/* Navigation Bar */}
                <nav
                  aria-label="Main navigation"
                  className="flex items-center gap-4"
                >
                  {/* Primary Navigation Items with Dropdowns */}
                  <ul className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                      <li
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <a
                          href={item.href}
                          className="flex items-center gap-1 text-white text-base font-medium hover:bg-white/10 px-3 py-2 rounded-lg transition-all whitespace-nowrap"
                        >
                          {item.label}
                          {item.subItems && <ChevronDown size={14} />}
                        </a>

                        {/* Dropdown Menu */}
                        {item.subItems && (
                          <AnimatePresence>
                            {openDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl min-w-[200px] py-2 z-50"
                              >
                                {item.subItems.map((subItem) => (
                                  <div
                                    key={subItem.href}
                                    className="relative"
                                    onMouseEnter={() =>
                                      subItem.subItems &&
                                      setOpenNestedDropdown(subItem.label)
                                    }
                                    onMouseLeave={() =>
                                      setOpenNestedDropdown(null)
                                    }
                                  >
                                    <a
                                      href={subItem.href}
                                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                                    >
                                      {subItem.label}
                                      {subItem.subItems && (
                                        <ChevronDown
                                          size={12}
                                          className="-rotate-90"
                                        />
                                      )}
                                    </a>
                                    {/* Nested Dropdown */}
                                    {subItem.subItems && (
                                      <AnimatePresence>
                                        {openNestedDropdown ===
                                          subItem.label && (
                                          <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl min-w-[180px] py-2 z-50"
                                          >
                                            {subItem.subItems.map(
                                              (nestedItem) => (
                                                <a
                                                  key={nestedItem.href}
                                                  href={nestedItem.href}
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                                                >
                                                  {nestedItem.label}
                                                </a>
                                              )
                                            )}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Menu Button */}
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                  >
                    <Menu size={28} />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-primary to-secondary shadow-2xl z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between py-4 lg:py-6 px-6 border-b border-white/20">
                {/* Logo - Mobile only */}
                <a
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity lg:hidden"
                  aria-label="LIIN Home"
                >
                  <Image
                    src="/images/logo.png"
                    alt="LIIN Logo"
                    width={120}
                    height={120}
                    className="object-contain h-12 w-auto"
                    priority
                  />
                </a>
                {/* Menu Text - Desktop only */}
                <h2 className="text-white text-3xl font-bold h-12 lg:h-20 items-center hidden lg:flex">
                  MENU
                </h2>
                <button
                  onClick={closeMenu}
                  className="text-white hover:opacity-80 transition-opacity p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <ul className="space-y-1">
                  {/* Mobile: Show all nav items */}
                  <div className="lg:hidden space-y-1">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() => toggleSidebarDropdown(item.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-white text-base font-medium hover:bg-white/10 rounded-xl transition-all"
                            >
                              {item.label}
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  openSidebarDropdown === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openSidebarDropdown === item.label && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden pl-4"
                                >
                                  {item.subItems.map((subItem) => (
                                    <li key={subItem.href}>
                                      {subItem.subItems ? (
                                        <>
                                          <button
                                            onClick={() =>
                                              setOpenSidebarNested(
                                                openSidebarNested ===
                                                  subItem.label
                                                  ? null
                                                  : subItem.label
                                              )
                                            }
                                            className="flex items-center justify-between w-full px-4 py-2 text-white/80 text-base hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                          >
                                            {subItem.label}
                                            <ChevronDown
                                              size={12}
                                              className={`transition-transform ${
                                                openSidebarNested ===
                                                subItem.label
                                                  ? "rotate-180"
                                                  : ""
                                              }`}
                                            />
                                          </button>
                                          <AnimatePresence>
                                            {openSidebarNested ===
                                              subItem.label && (
                                              <motion.ul
                                                initial={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                animate={{
                                                  height: "auto",
                                                  opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-4"
                                              >
                                                {subItem.subItems.map(
                                                  (nestedItem) => (
                                                    <li key={nestedItem.href}>
                                                      <a
                                                        href={nestedItem.href}
                                                        onClick={closeMenu}
                                                        className="block px-4 py-2 text-white/60 text-sm hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                                      >
                                                        {nestedItem.label}
                                                      </a>
                                                    </li>
                                                  )
                                                )}
                                              </motion.ul>
                                            )}
                                          </AnimatePresence>
                                        </>
                                      ) : (
                                        <a
                                          href={subItem.href}
                                          onClick={closeMenu}
                                          className="block px-4 py-2 text-white/80 text-base hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                        >
                                          {subItem.label}
                                        </a>
                                      )}
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <a
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-4 py-3 text-white text-base font-medium hover:bg-white/10 rounded-xl transition-all"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </div>

                  {/* Sidebar Items (always shown) */}
                  <div className="pt-4 border-t border-white/20 mt-4 lg:pt-0 lg:border-0 lg:mt-0 space-y-1">
                    {sidebarItems.map((item) => (
                      <li key={item.label}>
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() => toggleSidebarDropdown(item.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-white text-base font-medium hover:bg-white/10 rounded-xl transition-all"
                            >
                              {item.label}
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  openSidebarDropdown === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openSidebarDropdown === item.label && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden pl-4"
                                >
                                  {item.subItems.map((subItem) => (
                                    <li key={subItem.href}>
                                      <a
                                        href={subItem.href}
                                        onClick={closeMenu}
                                        className="block px-4 py-2 text-white/80 text-base hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                      >
                                        {subItem.label}
                                      </a>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <a
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-4 py-3 text-white text-base font-medium hover:bg-white/10 rounded-xl transition-all"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </div>
                </ul>
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-white/20">
                <p className="text-white/70 text-sm text-center">
                  © 2025 LIIN - Impact Investing Network
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
