import { ContactInfo, Office } from '@/lib/types/contact';

export const contactInfo: ContactInfo[] = [
  {
    icon: '📧',
    label: 'Email',
    value: 'info@liin.lk',
    link: 'mailto:info@liin.lk'
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 77 605 1256',
    link: 'tel:+94776051256'
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Colombo-02, Sri Lanka'
  }
];

export const offices: Office[] = [
  {
    city: 'Head Office',
    address: 'No: 209/3, 02nd Floor, Dr. Colvin R de Silva Mawatha, Colombo-02, 10350, Sri Lanka',
    phone: '+94 77 605 1256',
    email: 'info@liin.lk'
  }
];
