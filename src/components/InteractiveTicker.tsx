import React from 'react';

export const InteractiveTicker: React.FC = () => {
  const items = [
    '✦ Jasa Pembuatan Website Malang',
    '⚡ 60FPS Micro-Interactions',
    '📱 100% Mobile Responsive',
    '🚀 High Conversion Architecture',
    '💬 Direct WhatsApp Checkout',
    '✨ Three.js WebGL Interactive',
    '💎 Tanpa Template Pasaran',
    '🛡️ Garansi Revisi & Handover',
  ];

  return (
    <div className="w-full bg-[#2C29FF] text-white py-3 overflow-hidden select-none shadow-sm">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-black tracking-wider uppercase">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span className="text-white hover:text-[#00B349] transition-colors cursor-pointer">{text}</span>
            <span className="text-[#00B349] text-base">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};
