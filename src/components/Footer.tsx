import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import { MessageSquare } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Vibe: 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="font-quote italic text-sm text-[#FF1E27] font-bold">
              {SITE_CONFIG.punchline}
            </p>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Studio pembuatan website interaktif, modern, dan custom berbasis di Malang. Kami membantu bisnismu tampil profesional, kredibel, dan memikat lebih banyak customer.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#FF2E93] transition-colors shadow-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#FF2E93]" />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>

              <a
                href={generateWhatsAppConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-xs font-bold text-white transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admin</span>
              </a>
            </div>
          </div>

          {/* Quick Nav: 3 cols */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
              Menu Cepat
            </span>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#layanan" className="hover:text-[#2C29FF] transition-colors">
                  Layanan & Harga
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-[#00B349] transition-colors">
                  Portofolio Klien (Treedible)
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#2C29FF] transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-[#2C29FF] transition-colors">
                  Alur Pengerjaan
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#2C29FF] transition-colors">
                  Tentang Webisa
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist: 4 cols */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
              Kategori Layanan
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2C29FF]" />
                <span>Landing Page Interaktif (Konversi Penjualan)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00B349]" />
                <span>Company Profile Elegan (Branding Kredibel)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
                <span>E-Commerce & Toko Online Direct WA</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF2E93]" />
                <span>Website Portfolio Personal Kreatif</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2C29FF]" />
                <span>Custom Web Solutions (React, 3D WebGL)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} <strong>Webisa</strong>. Seluruh hak cipta dilindungi. Dibuat di Kota Malang.
          </p>
          <div className="flex items-center gap-2 font-semibold">
            <span>Tugas Akhir Mata Kuliah Kewirausahaan</span>
            <span>•</span>
            <span className="text-[#00B349] font-bold">Technopreneur Group</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
