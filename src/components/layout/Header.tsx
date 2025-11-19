"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
  { label: "ON EAGLE'S WINGS", href: "#eagles-wings" },
  { label: "Projects", href: "#projects" },
  { label: "Investments", href: "#investments" },
  { label: "Impact Funds", href: "#impact" },
  { label: "Our Partners", href: "#partners" },
  { label: "News", href: "#news" },
];

// Split navigation items: first 5 visible on desktop, rest in desktop menu
const primaryNavItems = navItems.slice(0, 5);
const menuNavItems = navItems.slice(5);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              aria-label="LIIN Home"
            >
              <Image
                src="/images/logo.png"
                alt="LIIN Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </a>

            {/* Navigation */}
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-4"
            >
              {/* Primary Navigation Items */}
              <ul className="hidden lg:flex items-center gap-6">
                {primaryNavItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap uppercase tracking-wide"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Menu Button with Hamburger Icon */}
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-all"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <Menu size={28} className="transition-transform duration-300" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Animated Overlay/Backdrop */}
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

      {/* Sliding Menu Panel with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-primary to-secondary shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-6 border-b border-white/20"
              >
                <h2 className="text-white text-2xl font-bold">MENU</h2>
                <button
                  onClick={closeMenu}
                  className="text-white hover:opacity-80 transition-opacity p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </motion.div>

              {/* Menu Items - ALL items on mobile, only last 3 on desktop */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {/* Mobile: Show all items */}
                  <div className="lg:hidden">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-xl transition-all hover:translate-x-2 uppercase tracking-wide"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </div>

                  {/* Desktop: Show only menu items (last 3) */}
                  <div className="hidden lg:block">
                    {menuNavItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-xl transition-all hover:translate-x-2 uppercase tracking-wide"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </div>
                </ul>
              </nav>

              {/* Menu Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-6 border-t border-white/20"
              >
                <p className="text-white/70 text-sm text-center">
                  © 2025 LIIN - Impact Investing Network
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
