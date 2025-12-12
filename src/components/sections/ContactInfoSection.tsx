import Section from "@/components/ui/Section";
import { contactInfo } from "@/lib/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";

const iconMap = {
  "📧": Mail,
  "📞": Phone,
  "📍": MapPin,
};

export default function ContactInfoSection() {
  return (
    <Section id="contact-info" title="Get In Touch" subtitle="Reach out to us via email or phone">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {contactInfo.map((info, idx) => {
          const IconComponent = iconMap[info.icon as keyof typeof iconMap];
          return (
            <div
              key={idx}
              className="animate-on-scroll text-center p-8 bg-white rounded-2xl shadow-medium hover:shadow-hard transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                {IconComponent && (
                  <IconComponent className="text-white" size={32} />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-primary hover:underline font-medium break-words"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-700 font-medium break-words px-2">
                  {info.value}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
