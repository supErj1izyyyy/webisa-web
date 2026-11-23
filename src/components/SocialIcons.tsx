import React from 'react';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-official-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="10%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    {/* Real colorful gradient Instagram rounded square */}
    <rect width="24" height="24" rx="6" fill="url(#ig-official-grad)" />
    {/* White Camera Outline */}
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    {/* Lens */}
    <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    {/* Flash dot */}
    <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.942.88 2.791.88 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.766zm3.364 8.163c-.144.405-.837.774-1.17.825-.311.05-.712.063-2.106-.513-1.614-.668-2.66-2.302-2.74-2.408-.079-.107-.655-.87-.655-1.66 0-.791.411-1.18.558-1.341.144-.16.315-.2.42-.2.105 0 .21.002.302.007.098.005.229-.037.357.271.132.318.45 1.099.49 1.18.04.081.066.176.012.282-.053.107-.079.173-.157.264-.078.093-.165.207-.235.278-.079.08-.161.167-.069.325.093.158.411.678.882 1.097.607.541 1.119.708 1.278.788.158.079.252.069.346-.039.094-.108.405-.472.513-.633.107-.16.216-.134.364-.079.148.054.94.443 1.102.524.162.08.27.12.309.186.04.066.04.382-.104.787zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.178L2 22l4.981-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);
