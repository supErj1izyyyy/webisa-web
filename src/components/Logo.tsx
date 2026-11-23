import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-4xl md:text-5xl tracking-tighter'
  };

  const starburstSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5 md:w-6 md:h-6',
    lg: 'w-8 h-8 md:w-9 md:h-9'
  };

  return (
    <div className={`inline-flex items-center gap-1.5 font-extrabold select-none ${className}`}>
      {/* Decorative Starburst Icon */}
      <svg
        className={`${starburstSizes[size]} text-[#2C29FF] shrink-0 animate-spin-slow`}
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M 100 0 L 121 62 L 181 31 L 148 85 L 200 100 L 148 115 L 181 169 L 121 138 L 100 200 L 79 138 L 19 169 L 52 115 L 0 100 L 52 85 L 19 31 L 79 62 Z" />
      </svg>

      {/* Brand Wordmark: "we" (Electric Blue) + "bisa" (Neon Green) */}
      <span className={`font-black ${sizeClasses[size]} font-sans flex items-baseline leading-none`}>
        <span className="text-[#2C29FF]">we</span>
        <span className="text-[#00B349]">bisa</span>
      </span>
    </div>
  );
};
