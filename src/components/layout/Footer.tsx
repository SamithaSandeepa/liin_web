interface SocialLink {
  name: string;
  icon: string;
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
  { label: "On Eagle's Wings", href: "#eagles-wings" },
  { label: "Projects", href: "#projects" },
  { label: "Investments", href: "#investments" },
  { label: "Impact Funds", href: "#impact" },
  { label: "Our Partners", href: "#partners" },
  { label: "News", href: "#news" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: "f",
    href: "https://www.facebook.com/liin.sl",
    ariaLabel: "Visit LIIN on Facebook",
  },
  {
    name: "LinkedIn",
    icon: "in",
    href: "https://www.linkedin.com/company/liin-lanka-impact-investing-network/",
    ariaLabel: "Visit LIIN on LinkedIn",
  },
  {
    name: "Instagram",
    icon: "📷",
    href: "https://www.instagram.com/liin.sl/",
    ariaLabel: "Visit LIIN on Instagram",
  },
  {
    name: "YouTube",
    icon: "▶",
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
            <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Quick Links */}
              <div>
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
                  123 Galle Road
                  <br />
                  Colombo 03, Sri Lanka
                </address>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold mb-3 text-base bg-white/10 inline-block px-4 py-2 rounded-lg uppercase">
                  Contact
                </h3>
                <div className="text-sm opacity-90">
                  <a
                    href="tel:+94771234567"
                    className="hover:opacity-100 transition-opacity"
                  >
                    +94 77 123 4567
                  </a>
                  <br />
                  <a
                    href="mailto:info@liin.lk"
                    className="hover:opacity-100 transition-opacity"
                  >
                    info@liin.lk
                  </a>
                </div>
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-primary text-xs font-bold hover:scale-110 transition-transform"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="lg:hidden py-6 flex flex-col items-center gap-3 border-t border-white/30">
          <h3 className="font-bold text-base bg-white/10 px-4 py-2 rounded-lg uppercase">
            Follow Us
          </h3>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-primary text-xs font-bold hover:scale-110 transition-transform"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
