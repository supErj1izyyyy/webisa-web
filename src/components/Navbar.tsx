import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import { Sun, Moon, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Estimator Biaya', href: '#estimator' },
    { name: 'Alur Kerja', href: '#alur-kerja' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Tentang', href: '#tentang' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Webisa Beranda">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2C29FF] dark:hover:text-white rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Instagram Profile */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Webisa"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#FF2E93] hover:bg-pink-50 dark:hover:bg-slate-800 transition-colors"
              title="Kunjungi Instagram @webisa_website"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Ganti mode tema"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={generateWhatsAppConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Ganti mode tema"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-md">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl"
            >
              <InstagramIcon className="w-4 h-4 text-[#FF2E93]" />
              <span>Instagram @webisa_website</span>
            </a>
            <a
              href={generateWhatsAppConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#2C29FF] text-white rounded-xl text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
