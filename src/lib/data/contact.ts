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
];

export const offices: Office[] = [
  {
    city: "Colombo",
    address:
      "No: 209/3, 02nd Floor, Dr. Colvin R de Silva Mawatha, Colombo-02, 10350 Sri Lanka",
    phone: "+94 77 605 1256",
    email: "info@liin.lk",
    mapLink:
      "https://www.google.com/maps/dir//lanka+impact+investing+network/@6.921621,79.8536131,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae25968acacee83:0x42af46f654d274e7!2m2!1d79.8563538!2d6.9216365?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    city: "Jaffna",
    address: "No.42/3, Temple Road, Jaffna, 40000 Sri Lanka",
    phone: "+94 77 605 1256",
    email: "info@liin.lk",
    mapLink:
      "https://www.google.com/maps/place/42,+36%2F3+Temple+Rd,+Jaffna+40000/@9.6605586,80.0241316,17z/data=!3m1!4b1!4m5!3m4!1s0x3afe56a43d861699:0xc2dd843a99ec9d09!8m2!3d9.6605586!4d80.0241316?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];
