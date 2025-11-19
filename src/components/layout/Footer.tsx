interface SocialLink {
  name: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: 'f', href: 'https://facebook.com/liin', ariaLabel: 'Visit LIIN on Facebook' },
  { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/liin', ariaLabel: 'Visit LIIN on LinkedIn' },
  { name: 'YouTube', icon: '▶', href: 'https://youtube.com/liin', ariaLabel: 'Visit LIIN on YouTube' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary-dark text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Address */}
          <div>
            <h3 className="font-bold mb-3 text-base">📍 Address</h3>
            <address className="text-sm opacity-90 not-italic">
              123 Galle Road<br />
              Colombo 03, Sri Lanka
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3 text-base">📞 Contact</h3>
            <div className="text-sm opacity-90">
              <a href="tel:+94771234567" className="hover:opacity-100 transition-opacity">
                +94 77 123 4567
              </a>
              <br />
              <a href="mailto:info@liin.lk" className="hover:opacity-100 transition-opacity">
                info@liin.lk
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-3 text-base">🌐 Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold hover:scale-110 transition-transform"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-xs opacity-70 mt-4">
              © {currentYear} Lanka Impact Investing Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
