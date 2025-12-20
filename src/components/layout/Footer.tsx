import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  ariaLabel: string;
}

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "On Eagle's Wings", href: "/initiatives/eagles-wings" },
  { label: "News and Insights", href: "/news" },
  { label: "Investments", href: "/investments" },
  { label: "Impact Funds", href: "/impact" },
  { label: "Our Partners", href: "/partners" },
  { label: "News", href: "/news" },
];

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/liin-lanka-impact-investing-network/",
    ariaLabel: "Visit LIIN on LinkedIn",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/liin.sl/",
    ariaLabel: "Visit LIIN on Instagram",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/liin.sl",
    ariaLabel: "Visit LIIN on Facebook",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@lankaimpactinvestingnetwork",
    ariaLabel: "Visit LIIN on YouTube",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Main Content */}
          <div className="flex-1">
            {/* Top Row - Navigation, Address & Contact */}
            <div className="py-12">
              {/* Quick Links - Full Width on Mobile, Part of Grid on Desktop */}
              <div className="mb-8 md:mb-0 text-center md:text-left md:hidden">
                <h3 className="font-bold mb-3 text-base bg-white/10 inline-block px-4 py-2 rounded-lg uppercase">
                  Quick Links
                </h3>
                <nav className="flex flex-col gap-2">
                  {navItems.slice(0, 4).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Desktop: 3 Column Grid | Mobile: Quick Links hidden (shown above), Address & Contact in 2 columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                {/* Quick Links - Desktop Only */}
                <div className="hidden md:block">
                  <h3 className="font-bold mb-3 text-base bg-white/10 inline-block px-4 py-2 rounded-lg uppercase">
                    Quick Links
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {navItems.slice(0, 4).map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-bold mb-3 text-base bg-white/10 inline-block px-4 py-2 rounded-lg uppercase">
                    Address
                  </h3>
                  <address className="text-sm opacity-90 not-italic">
                    <a
                      href="https://www.google.com/maps/dir//lanka+impact+investing+network/@6.921621,79.8536131,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae25968acacee83:0x42af46f654d274e7!2m2!1d79.8563538!2d6.9216365?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-100 transition-opacity block hover:text-white"
                    >
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="flex-shrink-0 mt-1" />
                        <span>
                          No: 209/3, 02nd Floor,
                          <br />
                          Dr. Colvin R de Silva Mawatha,
                          <br />
                          Colombo-02
                          <br />
                          10350 Sri Lanka
                        </span>
                      </div>
                    </a>
                  </address>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-bold mb-3 text-base bg-white/10 inline-block px-4 py-2 rounded-lg uppercase">
                    Contact
                  </h3>
                  <div className="text-sm opacity-90 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="flex-shrink-0" />
                      <a
                        href="tel:+94776051256"
                        className="hover:opacity-100 transition-opacity"
                      >
                        +94 77 605 1256
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="flex-shrink-0" />
                      <a
                        href="mailto:info@liin.lk"
                        className="hover:opacity-100 transition-opacity"
                      >
                        info@liin.lk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="lg:hidden py-6 flex flex-col items-center gap-3 border-t border-white/30">
              <h3 className="font-bold text-base bg-white/10 px-4 py-2 rounded-lg uppercase">
                Follow Us
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-primary hover:scale-110 transition-transform"
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t border-white/30" />

            {/* Bottom Row - Copyright & Policies */}
            <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
              <p>
                © {currentYear} Lanka Impact Investing Network. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="/privacy"
                  className="hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:opacity-100 transition-opacity"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Social Media (Spans Both Rows) */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-3 pl-12">
            <h3 className="font-bold text-base mb-3 bg-white/10 px-4 py-2 rounded-lg uppercase">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-primary hover:scale-110 transition-transform"
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
