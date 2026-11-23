import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showIcon = true }) => {
  const heightClasses = {
    sm: 'h-6',
    md: 'h-8 md:h-9',
    lg: 'h-11 md:h-14'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6 md:w-7 md:h-7',
    lg: 'w-9 h-9 md:w-11 md:h-11'
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Decorative Starburst / Asterisk Icon from Brand Guidelines */}
      {showIcon && (
        <svg
          className={`${iconSizes[size]} text-[#2C29FF] shrink-0 animate-spin-slow`}
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M 100 0 L 121 62 L 181 31 L 148 85 L 200 100 L 148 115 L 181 169 L 121 138 L 100 200 L 79 138 L 19 169 L 52 115 L 0 100 L 52 85 L 19 31 L 79 62 Z" />
        </svg>
      )}

      {/* Official Webisa Wordmark from Webisa_Asset */}
      <img
        src="./assets/logo/webisa-logo.png"
        alt="webisa"
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};
