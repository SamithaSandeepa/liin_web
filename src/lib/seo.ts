import { Metadata } from 'next';

export const siteConfig = {
  name: 'LIIN - Lanka Impact Investing Network',
  description: 'Investing in Profit with Purpose. We connect investors with social enterprises in Sri Lanka to drive sustainable development and transformative change.',
  url: 'https://liin-web.vercel.app',
  ogImage: 'https://liin-web.vercel.app/images/logo.png',
  links: {
    facebook: 'https://www.facebook.com/liin.sl',
    linkedin: 'https://www.linkedin.com/company/liin-lanka-impact-investing-network/',
    instagram: 'https://www.instagram.com/liin.sl/',
    youtube: 'https://www.youtube.com/@lankaimpactinvestingnetwork'
  }
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'impact investing',
    'social enterprise',
    'Sri Lanka',
    'sustainable development',
    'SDG',
    'social impact',
    'investment',
    'funding',
    'capital mobilization',
    'women entrepreneurs',
    'climate action',
    'responsible investment'
  ],
  authors: [{ name: 'LIIN' }],
  creator: 'LIIN',
  publisher: 'Lanka Impact Investing Network',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@liin'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};

// JSON-LD Structured Data for SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lanka Impact Investing Network',
  alternateName: 'LIIN',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Galle Road',
    addressLocality: 'Colombo',
    postalCode: '03',
    addressCountry: 'LK'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+94-77-123-4567',
    contactType: 'Customer Service',
    email: 'info@liin.lk',
    areaServed: 'LK',
    availableLanguage: ['en', 'si', 'ta']
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.linkedin,
    siteConfig.links.youtube
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: 'Lanka Impact Investing Network'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`
  }))
});
