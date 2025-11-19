# LIIN Web - Architecture & Best Practices Guide

## Table of Contents
1. [Project Structure](#project-structure)
2. [Architecture Principles](#architecture-principles)
3. [Creating New Pages](#creating-new-pages)
4. [Creating New Sections](#creating-new-sections)
5. [Managing Data](#managing-data)
6. [Component Patterns](#component-patterns)
7. [Best Practices](#best-practices)

---

## Project Structure

```
liin_web/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Home page (/)
│   │   ├── about/
│   │   │   └── page.tsx              # About page (/about)
│   │   └── contact/
│   │       └── page.tsx              # Contact page (/contact)
│   │
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/                 # Page sections (main building blocks)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SDGSection.tsx
│   │   │   ├── ImpactMetricsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── ContactFormSection.tsx
│   │   │   └── ContactInfoSection.tsx
│   │   │
│   │   └── ui/                       # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   │
│   └── lib/
│       ├── data/                     # Data sources (separated by concern)
│       │   ├── approach.ts
│       │   ├── sdgs.ts
│       │   ├── metrics.ts
│       │   ├── cta.ts
│       │   ├── testimonials.ts
│       │   ├── team.ts
│       │   ├── values.ts
│       │   ├── milestones.ts
│       │   └── contact.ts
│       │
│       └── types/                    # TypeScript interfaces
│           ├── home.ts
│           ├── about.ts
│           └── contact.ts
```

---

## Architecture Principles

### 1. **Separation of Concerns**
Each layer has a specific responsibility:

```
Page → Orchestrates sections
  ↓
Section → Renders specific content using data
  ↓
Data → Provides content to sections
  ↓
Types → Defines data structure
```

### 2. **Server Components by Default**
- Pages and sections are server components unless they need interactivity
- Only use `'use client'` when you need:
  - State management (useState, useReducer)
  - Event handlers (onClick, onChange)
  - Browser APIs (localStorage, window)
  - Effects (useEffect)

### 3. **Modular and Reusable**
- Sections are self-contained and can be reused across pages
- Data is separated from presentation
- Components are composable

### 4. **Type Safety**
- All data structures have TypeScript interfaces
- Props are typed for better developer experience
- Reduces runtime errors

---

## Creating New Pages

### Step 1: Create the Page File

Create a new directory in `src/app/`:

```tsx
// src/app/your-page/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AnimationProvider from '@/components/AnimationProvider';

/**
 * Your Page - Brief description
 *
 * This is a SERVER COMPONENT that orchestrates page sections.
 */
export default function YourPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection
          title="Your Page Title"
          subtitle="Your subtitle"
          backgroundImage="https://example.com/image.jpg"
        />

        {/* Add your sections here */}
      </main>

      <Footer />
      <AnimationProvider />
    </>
  );
}
```

### Step 2: Add Sections

Import and use section components:

```tsx
import YourCustomSection from '@/components/sections/YourCustomSection';

<main>
  <HeroSection {...} />
  <YourCustomSection />
  <AnotherSection />
</main>
```

---

## Creating New Sections

### Step 1: Define Types (if needed)

```typescript
// src/lib/types/your-feature.ts
export interface YourDataType {
  id: string;
  title: string;
  description: string;
}
```

### Step 2: Create Data Source

```typescript
// src/lib/data/your-data.ts
import { YourDataType } from '@/lib/types/your-feature';

export const yourData: YourDataType[] = [
  {
    id: '1',
    title: 'Example',
    description: 'Description here'
  }
];
```

### Step 3: Create Section Component

```tsx
// src/components/sections/YourSection.tsx
import Section from '@/components/ui/Section';
import { yourData } from '@/lib/data/your-data';

export default function YourSection() {
  return (
    <Section
      id="your-section"
      title="Your Section Title"
      subtitle="Optional subtitle"
      background="white" // or "gray", "gradient-primary", etc.
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {yourData.map((item) => (
          <div key={item.id} className="animate-on-scroll">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

### When to Use 'use client'

Only add `'use client'` if your section needs interactivity:

```tsx
'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';

export default function InteractiveSection() {
  const [count, setCount] = useState(0);

  return (
    <Section title="Interactive Section">
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </Section>
  );
}
```

---

## Managing Data

### Data Organization

1. **Page-Specific Data**: Create dedicated files
   ```
   lib/data/home-*.ts
   lib/data/about-*.ts
   lib/data/contact-*.ts
   ```

2. **Shared Data**: Use generic names
   ```
   lib/data/team.ts
   lib/data/settings.ts
   ```

### Data Fetching Patterns

#### Static Data (Current Approach)
```typescript
// lib/data/example.ts
export const staticData = [
  { id: 1, name: 'Item 1' }
];
```

#### Future: API Data Fetching
```typescript
// lib/data/example.ts
export async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

// In component:
const data = await fetchData(); // Server component only
```

#### Future: Database Integration
```typescript
// lib/db/queries.ts
import { db } from './connection';

export async function getTeamMembers() {
  return db.query('SELECT * FROM team_members');
}
```

---

## Component Patterns

### 1. Section Wrapper Pattern

All sections use the `<Section>` component for consistency:

```tsx
<Section
  id="unique-id"
  title="Section Title"
  subtitle="Optional subtitle"
  background="white" // white | gray | gradient-primary | gradient-secondary | secondary
>
  {/* Your content */}
</Section>
```

### 2. Grid Layout Pattern

Consistent grid layouts across sections:

```tsx
// 4 columns on large screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

// 3 columns on large screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// 2 columns on large screens
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
```

### 3. Animation Pattern

Add scroll animations to elements:

```tsx
<div className="animate-on-scroll">
  {/* Content that animates on scroll */}
</div>
```

### 4. Responsive Text Pattern

```tsx
// Headings
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">

// Body text
<p className="text-base md:text-lg leading-relaxed">
```

---

## Best Practices

### ✅ DO

1. **Keep pages as orchestrators**
   ```tsx
   // Good: Clean and readable
   export default function Page() {
     return (
       <main>
         <HeroSection />
         <FeatureSection />
         <CTASection />
       </main>
     );
   }
   ```

2. **Separate data from components**
   ```tsx
   // Good: Data in separate file
   import { data } from '@/lib/data/features';

   export default function FeatureSection() {
     return <div>{data.map(...)}</div>;
   }
   ```

3. **Use TypeScript interfaces**
   ```tsx
   // Good: Type-safe
   interface Feature {
     id: string;
     title: string;
   }

   export const features: Feature[] = [...];
   ```

4. **Add comments for clarity**
   ```tsx
   /**
    * TeamSection - Displays team members
    * Used on: About page
    * Data source: lib/data/team.ts
    */
   export default function TeamSection() { }
   ```

### ❌ DON'T

1. **Don't mix data with components**
   ```tsx
   // Bad: Data hardcoded in component
   export default function Section() {
     const data = [{ title: 'Item' }]; // Don't do this
     return <div>...</div>;
   }
   ```

2. **Don't create massive page files**
   ```tsx
   // Bad: 500+ lines in page.tsx
   export default function Page() {
     return (
       <main>
         <section>{/* 100 lines of markup */}</section>
         <section>{/* 100 lines of markup */}</section>
         {/* ... */}
       </main>
     );
   }
   ```

3. **Don't use 'use client' unnecessarily**
   ```tsx
   // Bad: No interactivity needed
   'use client';

   export default function StaticSection() {
     return <div>Static content</div>;
   }
   ```

4. **Don't skip TypeScript types**
   ```tsx
   // Bad: No type safety
   export const data = [
     { title: 'Item', count: 5 }
   ];
   ```

---

## Example Workflow: Adding a "Services" Page

### 1. Create types
```typescript
// src/lib/types/services.ts
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}
```

### 2. Create data
```typescript
// src/lib/data/services.ts
import { Service } from '@/lib/types/services';

export const services: Service[] = [
  {
    id: 'consulting',
    icon: '💼',
    title: 'Consulting',
    description: 'Strategic guidance for impact enterprises',
    features: ['Business planning', 'Impact measurement', 'Funding strategy']
  }
];
```

### 3. Create section
```tsx
// src/components/sections/ServicesListSection.tsx
import Section from '@/components/ui/Section';
import { services } from '@/lib/data/services';

export default function ServicesListSection() {
  return (
    <Section id="services" title="Our Services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="animate-on-scroll bg-white p-8 rounded-2xl shadow-medium">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

### 4. Create page
```tsx
// src/app/services/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesListSection from '@/components/sections/ServicesListSection';
import AnimationProvider from '@/components/AnimationProvider';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Our Services"
          subtitle="Comprehensive support for social enterprises"
          backgroundImage="https://example.com/services.jpg"
        />
        <ServicesListSection />
      </main>
      <Footer />
      <AnimationProvider />
    </>
  );
}
```

---

## Summary

This architecture provides:

✅ **Scalability** - Easy to add new pages and sections
✅ **Maintainability** - Clear separation of concerns
✅ **Reusability** - Components and data can be shared
✅ **Type Safety** - TypeScript catches errors early
✅ **Performance** - Server components by default
✅ **Developer Experience** - Clear patterns and structure

Follow these patterns consistently, and your codebase will remain clean, organized, and easy to work with as it grows.
