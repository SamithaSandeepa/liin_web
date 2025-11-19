'use client'; // Needed for onClick handler

import Button from './Button';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'primary';
}

export default function Card({
  image,
  title,
  description,
  buttonText = 'Learn More',
  onButtonClick,
  variant = 'default'
}: CardProps) {
  const cardStyles = variant === 'primary'
    ? 'bg-primary text-white shadow-lg hover:shadow-primary'
    : 'bg-white text-gray-900 shadow-medium hover:shadow-hard';

  return (
    <article className={`animate-on-scroll ${cardStyles} rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-sm mb-6 leading-relaxed opacity-90">{description}</p>
        {onButtonClick && (
          <Button
            variant={variant === 'primary' ? 'white' : 'primary'}
            size="sm"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </article>
  );
}
