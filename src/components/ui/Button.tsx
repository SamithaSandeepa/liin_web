import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-lg transition-all hover:scale-105 inline-block text-center';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:shadow-lg'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm md:px-6',
    md: 'px-6 py-2.5 text-sm md:px-8 md:py-3 md:text-base lg:px-10 lg:py-3.5 lg:text-lg',
    lg: 'px-8 py-3 text-base md:px-10 md:py-4 md:text-lg lg:px-12 lg:py-5 lg:text-xl'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
