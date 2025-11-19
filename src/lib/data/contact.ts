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
    value: '+94 11 234 5678',
    link: 'tel:+94112345678'
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Colombo, Sri Lanka'
  }
];

export const offices: Office[] = [
  {
    city: 'Colombo',
    address: '123 Main Street, Colombo 03, Sri Lanka',
    phone: '+94 11 234 5678',
    email: 'colombo@liin.lk'
  },
  {
    city: 'Kandy',
    address: '456 Hill Street, Kandy, Sri Lanka',
    phone: '+94 81 234 5678',
    email: 'kandy@liin.lk'
  }
];
