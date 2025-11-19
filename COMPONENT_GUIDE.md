# Component Architecture Guide

Complete guide to the modularized component structure of the LIIN website.

## 📐 Architecture Overview

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page (uses components)
│   └── globals.css        # Tailwind configuration
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page section components
│   ├── ui/                # Reusable UI components
│   └── SEO.tsx            # SEO schema scripts
└── lib/
    └── seo.ts             # SEO configuration
```

## 🧩 Component Categories

### 1. Layout Components (`components/layout/`)

Components that define the overall page structure.

#### Header.tsx
**Purpose**: Main navigation header with sticky positioning

**Props**: None (uses internal nav configuration)

**Usage**:
```tsx
import Header from '@/components/layout/Header';

<Header />
```

**Features**:
- Sticky positioning
- Responsive mobile menu
- Gradient background
- Smooth scroll navigation

---

#### Footer.tsx
**Purpose**: Site footer with contact information and social links

**Props**: None (uses internal configuration)

**Usage**:
```tsx
import Footer from '@/components/layout/Footer';

<Footer />
```

**Features**:
- Contact information
- Social media links
- Responsive grid layout
- Semantic `<address>` tags

---

### 2. Section Components (`components/sections/`)

Large page sections with specific purposes.

#### HeroSection.tsx
**Purpose**: Hero banner with background image and overlay

**Props**:
```typescript
interface HeroSectionProps {
  title: string;              // Main heading
  subtitle?: string;          // Optional subheading
  backgroundImage: string;    // Background image URL
  height?: 'default' | 'fullscreen';  // Section height
}
```

**Usage**:
```tsx
import HeroSection from '@/components/sections/HeroSection';

<HeroSection
  title="Your Title"
  subtitle="Optional subtitle"
  backgroundImage="/hero.jpg"
  height="fullscreen"
/>
```

**Features**:
- Responsive text sizes
- Dark overlay for readability
- Text shadows for contrast
- Configurable height

---

### 3. UI Components (`components/ui/`)

Reusable UI building blocks.

#### Button.tsx
**Purpose**: Flexible button component with multiple variants

**Props**:
```typescript
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  ...ButtonHTMLAttributes  // All native button props
}
```

**Usage**:
```tsx
import Button from '@/components/ui/Button';

// Primary button
<Button variant="primary" size="lg">
  Click Me
</Button>

// Secondary with custom styling
<Button variant="secondary" className="mt-4">
  Learn More
</Button>

// Full width button
<Button variant="outline" fullWidth>
  Submit
</Button>
```

**Variants**:
- `primary` - Blue gradient, white text
- `secondary` - Dark blue, white text
- `outline` - Transparent with border
- `white` - White background, primary text

**Sizes**:
- `sm` - Small padding (6x2)
- `md` - Medium padding (8x3) - default
- `lg` - Large padding (12x6)

---

#### Card.tsx
**Purpose**: Content card with image, title, description, and action button

**Props**:
```typescript
interface CardProps {
  image: string;              // Image URL
  title: string;              // Card title
  description: string;        // Card description
  buttonText?: string;        // Button label (default: "Learn More")
  onButtonClick?: () => void; // Click handler
  variant?: 'default' | 'primary';  // Color variant
}
```

**Usage**:
```tsx
import Card from '@/components/ui/Card';

<Card
  image="/approach.jpg"
  title="Capital Mobilization"
  description="We connect investors with social enterprises..."
  variant="primary"
  buttonText="Read More"
  onButtonClick={() => router.push('/approach')}
/>
```

**Variants**:
- `default` - White background, dark text
- `primary` - Blue background, white text

**Features**:
- Hover animations
- Lazy-loaded images
- Responsive layout
- Accessible button

---

#### Section.tsx
**Purpose**: Standardized section wrapper with title, subtitle, and background options

**Props**:
```typescript
interface SectionProps {
  id?: string;                     // Anchor ID for navigation
  title?: string;                  // Section title
  subtitle?: string;               // Section subtitle
  children: ReactNode;             // Section content
  className?: string;              // Additional classes
  background?: 'white' | 'gray' | 'primary' | 'secondary' |
               'gradient-primary' | 'gradient-secondary';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
```

**Usage**:
```tsx
import Section from '@/components/ui/Section';

<Section
  id="about"
  title="About Us"
  subtitle="Learn more about our mission"
  background="gray"
  containerSize="xl"
>
  <p>Your content here...</p>
</Section>
```

**Backgrounds**:
- `white` - White background
- `gray` - Light gray background
- `primary` - Primary color with white text
- `secondary` - Secondary color with white text
- `gradient-primary` - Primary gradient
- `gradient-secondary` - Secondary gradient

**Container Sizes**:
- `sm` - 1024px max width
- `md` - 1280px max width
- `lg` - 1536px max width
- `xl` - 1792px max width (default)
- `full` - Full width

---

## 📊 SEO Components

### SEO.tsx
**Purpose**: Inject JSON-LD structured data

**Props**:
```typescript
interface SEOScriptsProps {
  schemas: Array<Record<string, any>>;
}
```

**Usage**:
```tsx
import SEOScripts from '@/components/SEO';
import { organizationSchema } from '@/lib/seo';

<SEOScripts schemas={[organizationSchema]} />
```

---

### lib/seo.ts
**Purpose**: Centralized SEO configuration

**Exports**:
- `siteConfig` - Site metadata
- `defaultMetadata` - Next.js metadata object
- `organizationSchema` - Organization structured data
- `websiteSchema` - Website structured data
- `breadcrumbSchema()` - Function for breadcrumbs

**Usage**:
```tsx
// In layout.tsx
import { defaultMetadata } from '@/lib/seo';

export const metadata = defaultMetadata;

// In a page
import { siteConfig } from '@/lib/seo';

console.log(siteConfig.name);  // "LIIN - Lanka Impact Investing Network"
```

---

## 🎨 Styling Patterns

### Using Tailwind with Components

```tsx
// ✅ Good - Pass className for customization
<Button className="mt-4 w-full" variant="primary">
  Submit
</Button>

// ✅ Good - Use Tailwind responsive classes
<Section className="py-32 lg:py-40" background="gray">
  Content
</Section>

// ❌ Avoid - Inline styles
<Button style={{marginTop: '16px'}}>
  Submit
</Button>
```

### Responsive Design Pattern

```tsx
// Mobile first approach
<div className="
  text-sm           {/* Mobile: 14px */}
  md:text-base      {/* Tablet: 16px */}
  lg:text-lg        {/* Desktop: 18px */}
  xl:text-xl        {/* Large: 20px */}
">
```

---

## ♿ Accessibility Guidelines

### Semantic HTML

```tsx
// ✅ Good - Semantic elements
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

// ❌ Avoid - Generic divs
<div class="header">
  <div class="nav">
    <div class="link">About</div>
  </div>
</div>
```

### ARIA Labels

```tsx
// ✅ Good - Descriptive labels
<button aria-label="Play video testimonial from Jessica Hart">
  ▶
</button>

// ✅ Good - Alt text
<img src="/logo.png" alt="LIIN Logo - Lanka Impact Investing Network" />

// ❌ Avoid - Missing labels
<button>▶</button>
<img src="/logo.png" />
```

### Keyboard Navigation

All interactive elements should be:
- Keyboard accessible (Tab navigation)
- Have visible focus states
- Use semantic HTML (`<button>`, `<a>`, etc.)

---

## 📝 Data Management

### Component Data Pattern

```tsx
// Define data outside component
const approachData = [
  {
    img: '/image1.jpg',
    title: 'Title 1',
    desc: 'Description 1'
  },
  // ...
];

// Map over data in component
export default function Home() {
  return (
    <Section>
      {approachData.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </Section>
  );
}
```

### Benefits:
- Easy to update content
- Type-safe with TypeScript
- Reusable data structures
- Cleaner component code

---

## 🔄 Animation Patterns

### Scroll Animations

```tsx
// Add class to any element
<div className="animate-on-scroll">
  {/* Fades in when scrolled into view */}
</div>
```

### How it works:
1. CSS defines initial state (opacity: 0, translateY: 2rem)
2. JavaScript observes element visibility
3. Adds `visible` class when in viewport
4. CSS transitions to final state

**Implementation**:
```tsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
```

---

## 🏗️ Creating New Components

### Step-by-Step Guide

1. **Choose the right location**:
   - Layout components → `components/layout/`
   - Page sections → `components/sections/`
   - Reusable UI → `components/ui/`

2. **Create the component file**:
```tsx
// src/components/ui/NewComponent.tsx
interface NewComponentProps {
  title: string;
  // ... other props
}

export default function NewComponent({ title }: NewComponentProps) {
  return (
    <div className="...">
      <h2>{title}</h2>
    </div>
  );
}
```

3. **Use TypeScript for props**:
```tsx
interface Props {
  required: string;
  optional?: number;
  children?: ReactNode;
}
```

4. **Add JSDoc comments**:
```tsx
/**
 * NewComponent displays...
 *
 * @param title - The component title
 * @param optional - Optional parameter
 */
```

5. **Export and use**:
```tsx
import NewComponent from '@/components/ui/NewComponent';

<NewComponent title="Hello" />
```

---

## 🎯 Best Practices

### Component Design

1. **Single Responsibility** - Each component does one thing well
2. **Reusability** - Design for multiple use cases
3. **Composition** - Build complex UIs from simple components
4. **Type Safety** - Always use TypeScript interfaces
5. **Accessibility** - Semantic HTML, ARIA labels

### File Organization

```
components/
├── layout/           # Site-wide layout (1-2 components)
├── sections/         # Page-specific sections (3-5 components)
└── ui/               # Reusable UI elements (5-10 components)
```

### Naming Conventions

- **PascalCase** for component files: `Button.tsx`
- **camelCase** for props: `onClick`, `isVisible`
- **Descriptive names**: `HeroSection` not `Banner`

---

## 📚 Component Library

### Current Components

| Component | Type | Purpose | Complexity |
|-----------|------|---------|------------|
| Header | Layout | Navigation | Medium |
| Footer | Layout | Site footer | Low |
| HeroSection | Section | Hero banner | Low |
| Button | UI | Action button | Low |
| Card | UI | Content card | Medium |
| Section | UI | Section wrapper | Low |
| SEOScripts | Utility | Schema markup | Low |

### Future Components (Suggestions)

- `Modal` - Popup dialogs
- `Form` - Reusable forms
- `Tabs` - Tabbed content
- `Accordion` - Expandable sections
- `Image` - Optimized image wrapper
- `Video` - Video player
- `ContactForm` - Contact form
- `Newsletter` - Newsletter signup

---

## 🔍 Debugging Components

### Component Props

```tsx
// Log props in development
if (process.env.NODE_ENV === 'development') {
  console.log('Component props:', props);
}
```

### React DevTools

Use React DevTools browser extension to:
- Inspect component tree
- View props and state
- Monitor re-renders
- Profile performance

---

**Built for LIIN - Modular, Maintainable, Scalable**
