# LIIN - Lanka Impact Investing Network

A modern, SEO-optimized, and fully modularized website built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**.

## 🎯 Features

- ✅ **Fully Modularized** - Reusable components with clear separation of concerns
- ✅ **SEO Optimized** - Complete metadata, Schema.org markup, OpenGraph, Twitter Cards
- ✅ **Tailwind CSS v4** - Latest CSS-first configuration
- ✅ **TypeScript** - Full type safety
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Performance** - Lazy loading, optimized images, fast builds
- ✅ **Scroll Animations** - Smooth intersection observer animations

## 📁 Project Structure

```
liin_web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx             # Landing page
│   │   └── globals.css          # Tailwind config & custom styles
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Main navigation
│   │   │   └── Footer.tsx       # Footer with contact info
│   │   ├── sections/            # Page sections
│   │   │   └── HeroSection.tsx  # Hero banner component
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx       # Button component
│   │       ├── Card.tsx         # Card component
│   │       └── Section.tsx      # Section wrapper
│   └── lib/
│       └── seo.ts               # SEO configuration & schemas
├── public/                      # Static assets
├── TAILWIND_V4_GUIDE.md        # Tailwind v4 guide
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Changing Brand Colors

All theme configuration is in [src/app/globals.css](src/app/globals.css):

```css
@theme {
  /* Change your primary color */
  --color-primary: #27a6ec;           /* 👈 Edit this */
  --color-primary-light: #4bb8f0;
  --color-primary-dark: #1d8bc9;

  /* Change secondary color */
  --color-secondary: #1e3a5f;         /* 👈 Edit this */
}
```

### Updating Site Information

Edit [src/lib/seo.ts](src/lib/seo.ts):

```typescript
export const siteConfig = {
  name: 'LIIN - Lanka Impact Investing Network',
  description: 'Your description here',
  url: 'https://liin.lk',
  // ... more config
};
```

## 🧩 Component Usage

### Button Component

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>

// Variants: primary, secondary, outline, white
// Sizes: sm, md, lg
```

### Card Component

```tsx
import Card from '@/components/ui/Card';

<Card
  image="/image.jpg"
  title="Card Title"
  description="Card description"
  variant="primary"
  buttonText="Learn More"
  onButtonClick={() => console.log('Clicked')}
/>
```

### Section Component

```tsx
import Section from '@/components/ui/Section';

<Section
  id="about"
  title="Section Title"
  subtitle="Optional subtitle"
  background="gray"
  containerSize="xl"
>
  {/* Your content */}
</Section>

// Backgrounds: white, gray, primary, secondary, gradient-primary, gradient-secondary
// Container sizes: sm, md, lg, xl, full
```

### Hero Section

```tsx
import HeroSection from '@/components/sections/HeroSection';

<HeroSection
  title="Your Title"
  subtitle="Optional subtitle"
  backgroundImage="/hero.jpg"
  height="default"  // or "fullscreen"
/>
```

## 📊 SEO Features

### Built-in SEO

- ✅ **Meta Tags** - Title, description, keywords
- ✅ **OpenGraph** - Social media sharing
- ✅ **Twitter Cards** - Twitter sharing
- ✅ **Schema.org** - Structured data for search engines
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Robots.txt** - Search engine crawling
- ✅ **Sitemap** - Search engine indexing

### Schema Markup Included

- Organization schema
- Website schema
- Breadcrumb schema support

### Customizing SEO

Edit [src/lib/seo.ts](src/lib/seo.ts):

```typescript
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your description',
  url: 'https://yoursite.com',
  // Update social links
  links: {
    facebook: 'https://facebook.com/yourpage',
    linkedin: 'https://linkedin.com/company/yourcompany',
  }
};
```

## 🎯 Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` for the page component
3. Update SEO in the page metadata

Example:

```tsx
// src/app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about LIIN',
};

export default function AboutPage() {
  return <div>About content</div>;
}
```

## 🎨 Tailwind CSS v4

This project uses **Tailwind CSS v4** with CSS-based configuration.

### Key Differences from v3

- ❌ No `tailwind.config.js` file
- ✅ All configuration in `globals.css` using `@theme`
- ✅ Faster builds with Rust engine
- ✅ Simpler setup

### Using Custom Colors

```tsx
<div className="bg-primary text-white">
<div className="bg-primary-light">
<div className="bg-secondary">
```

### Responsive Design

```tsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
<div className="flex flex-col lg:flex-row">
<div className="hidden lg:block">  {/* Desktop only */}
```

See [TAILWIND_V4_GUIDE.md](TAILWIND_V4_GUIDE.md) for complete Tailwind documentation.

## ♿ Accessibility Features

- ✅ **Semantic HTML** - Proper use of `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Alt Text** - All images have descriptive alt text
- ✅ **Color Contrast** - WCAG AA compliant
- ✅ **Focus States** - Visible focus indicators

## 📱 Responsive Breakpoints

```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (extra large)
```

## 🚀 Performance Optimization

### Built-in Optimizations

- ✅ Lazy loading images
- ✅ Next.js Image optimization
- ✅ CSS purging (unused styles removed)
- ✅ Code splitting
- ✅ Font optimization

### Performance Tips

1. Use Next.js Image component for images
2. Implement lazy loading for below-the-fold content
3. Minimize custom CSS (use Tailwind utilities)
4. Optimize images before upload (WebP format recommended)

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Ensure Node.js 18+ is installed on your server

## 🎓 Best Practices

### Component Structure

1. **Keep components small** - Single responsibility principle
2. **Use TypeScript** - Type all props and data
3. **Semantic HTML** - Use proper HTML5 elements
4. **Accessibility** - Add ARIA labels where needed

### Styling

1. **Tailwind first** - Use utility classes before custom CSS
2. **Mobile first** - Design for mobile, then enhance for desktop
3. **Consistent spacing** - Use Tailwind's spacing scale
4. **Reusable patterns** - Create components for repeated UI

### SEO

1. **Unique titles** - Each page should have a unique title
2. **Meta descriptions** - Write compelling 150-160 character descriptions
3. **Alt text** - Descriptive alt text for all images
4. **Structured data** - Use Schema.org markup

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org Documentation](https://schema.org)

## 🐛 Troubleshooting

**Development server won't start?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Styles not applying?**
```bash
# Restart dev server
# Ctrl+C, then npm run dev
```

**Build errors?**
```bash
# Check for TypeScript errors
npm run lint
```

## 📄 License

This project is proprietary and confidential.

© 2024 Lanka Impact Investing Network. All rights reserved.

## 🤝 Contributing

For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For questions or issues:
- Email: dev@liin.lk
- Internal Slack: #liin-website

---

**Built with ❤️ by the LIIN Team**

**Investing in Profit with Purpose - Catalyzing Transformative Change**
