import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import { MessageSquare, ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200 overflow-hidden">
      {/* Brand Pattern Border across Top of Footer (from Webisa_Asset) */}
      <div className="w-full overflow-hidden border-b border-slate-200 bg-white">
        <img
          src="./assets/brand-pattern-banner.png"
          alt="Webisa Signature Brand Pattern"
          className="w-full h-8 md:h-12 object-cover object-center select-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">

          {/* Brand & Vibe: 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />

            {/* Poster Tagline */}
            <p className="font-serif italic text-sm text-[#FF1E27] font-bold">
              {SITE_CONFIG.punchline}
            </p>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Studio pembuatan website interaktif, modern, dan custom berbasis di Malang. Kami membantu bisnismu tampil profesional, kredibel, dan memikat lebih banyak customer.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-pink-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#FF2E93] transition-colors shadow-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#FF2E93]" />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>

              <a
                href={SITE_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#2C29FF] transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#2C29FF]" />
                <span>webisa.vercel.app</span>
              </a>

              <a
                href={generateWhatsAppConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-xs font-bold text-white transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admin</span>
              </a>
            </div>

            {/* QR Code from Webisa Poster */}
            <div className="pt-2 flex items-center gap-3.5 bg-white p-3 rounded-2xl border border-slate-200 max-w-xs shadow-2xs">
              <img
                src="./assets/qr-code.png"
                alt="Scan Instagram Webisa"
                className="w-16 h-16 rounded-xl object-contain border border-slate-100 shadow-2xs"
              />
              <div className="text-[11px] text-slate-600 space-y-0.5">
                <span className="font-extrabold text-slate-900 block">Scan Me!</span>
                <span>Portofolio & update harian di Instagram:</span>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2C29FF] hover:underline block"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav: 3 cols */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
              Menu Utama
            </span>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#pengenalan" className="hover:text-[#2C29FF] transition-colors">
                  Pengenalan Webisa
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#2C29FF] transition-colors">
                  Pilihan Layanan
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="hover:text-[#2C29FF] transition-colors">
                  Bagaimana Cara Pemesanan
                </a>
              </li>
              <li>
                <a href="#alur-pemesanan" className="hover:text-[#00B349] transition-colors">
                  Alur Pemesanan & Pengerjaan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF2E93] transition-colors">
                  FAQ / Tanya Jawab
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist with Custom Brand Shapes: 4 cols */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
              Kategori Layanan Resmi
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E27]" />
                <span className="font-bold">Landing Page Interaktif</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2C29FF]" />
                <span className="font-bold">Company Profile Elegan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00B349]" />
                <span className="font-bold">E-Commerce & Toko Online</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2C29FF]" />
                <span className="font-bold">Website Portfolio</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E27]" />
                <span className="font-bold">And More (Custom Solutions)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} <strong>Webisa</strong>. Seluruh hak cipta dilindungi. Berbasis di Malang, Jawa Timur.
          </p>
          <div className="flex items-center gap-2 font-semibold">
            <span>Tugas Akhir Mata Kuliah Kewirausahaan</span>
            <span>•</span>
            <span className="text-[#00B349] font-bold">Proposal Bisnis Webisa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
