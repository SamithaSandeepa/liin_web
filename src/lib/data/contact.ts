import { ContactInfo, Office } from "@/lib/types/contact";

export const contactInfo: ContactInfo[] = [
  {
    icon: "📧",
    label: "Email",
    value: "info@liin.lk",
    link: "mailto:info@liin.lk",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+94 77 605 1256",
    link: "tel:+94776051256",
  },
  {
    icon: "📍",
    label: "Address",
    value: "No: 209/3, 02nd Floor, Dr. Colvin R de Silva Mawatha, Colombo-02, 10350, Sri Lanka",
    link: "https://www.google.com/maps/dir//lanka+impact+investing+network/@6.921621,79.8536131,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae25968acacee83:0x42af46f654d274e7!2m2!1d79.8563538!2d6.9216365?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const offices: Office[] = [
  {
    city: "Head Office",
    address:
      "No: 209/3, 02nd Floor, Dr. Colvin R de Silva Mawatha, Colombo-02, 10350, Sri Lanka",
    phone: "+94 77 605 1256",
    email: "info@liin.lk",
  },
];
