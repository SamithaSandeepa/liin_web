import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient-primary' | 'gradient-secondary';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
  containerSize = 'xl'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    'gradient-primary': 'bg-gradient-to-r from-primary to-primary-light text-white',
    'gradient-secondary': 'bg-gradient-to-br from-secondary to-secondary-light text-white'
  };

  const containerSizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <section id={id} className={`py-20 px-6 ${backgrounds[background]} ${className}`}>
      <div className={`container mx-auto ${containerSizes[containerSize]}`}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
