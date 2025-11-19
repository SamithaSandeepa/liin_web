import Section from '@/components/ui/Section';
import { contactInfo, offices } from '@/lib/data/contact';

export default function ContactInfoSection() {
  return (
    <Section id="contact-info" title="Get In Touch">
      {/* Quick Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((info, idx) => (
          <div key={idx} className="animate-on-scroll text-center p-8 bg-white rounded-2xl shadow-medium">
            <div className="text-5xl mb-4">{info.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
            {info.link ? (
              <a
                href={info.link}
                className="text-primary hover:underline font-medium"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-gray-700 font-medium">{info.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Office Locations */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-10">Our Offices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office, idx) => (
            <div key={idx} className="animate-on-scroll bg-gradient-primary text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">{office.city}</h4>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span>{office.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:underline">
                    {office.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a href={`mailto:${office.email}`} className="hover:underline">
                    {office.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
