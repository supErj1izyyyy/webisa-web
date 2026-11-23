import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pengenalan', href: '#pengenalan' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Cara Pemesanan', href: '#cara-pesan' },
    { name: 'Alur Pemesanan', href: '#alur-pemesanan' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs py-5 border-b border-slate-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group" aria-label="Webisa Beranda">
              <Logo size="md" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#2C29FF] hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Official Instagram Profile */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Webisa"
              className="p-1.5 rounded-xl hover:bg-slate-100 border border-slate-200 transition-transform hover:scale-105 shadow-2xs flex items-center justify-center"
              title="Kunjungi Instagram @webisa_website"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href={generateWhatsAppConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-[#2C29FF] rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl">
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram @webisa_website</span>
            </a>
            <a
              href={generateWhatsAppConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#2C29FF] text-white rounded-xl text-xs font-bold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
