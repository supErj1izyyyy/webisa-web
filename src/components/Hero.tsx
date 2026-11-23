import React, { useState } from 'react';
import { SITE_CONFIG, generateWhatsAppConsultationUrl, formatRupiah } from '../config/site';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Check,
  ShieldCheck,
  Laptop,
  ShoppingBag,
  Building2,
  Palette,
  Zap,
  Smartphone,
  MessageCircle
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  // Selected Website Type
  const [selectedType, setSelectedType] = useState<'landing' | 'company' | 'ecommerce' | 'portfolio'>('ecommerce');

  // Selected Focus / Feature Priority
  const [selectedFocus, setSelectedFocus] = useState<'whatsapp' | 'speed' | 'mobile' | 'interactive'>('whatsapp');

  // Interactive Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const typeConfigs = {
    ecommerce: {
      id: 'ecommerce',
      title: 'Toko Online & Katalog WhatsApp',
      category: 'E-Commerce Retail',
      price: 1750000,
      days: '5-7 Hari Kerja',
      icon: ShoppingBag,
      tagline: 'Katalog belanja estetik dengan checkout langsung ke WhatsApp tanpa potongan fee marketplace.',
      features: ['Katalog produk visual interaktif', 'Tombol pesan instan ke WhatsApp', '100% profit penjualan milikmu']
    },
    landing: {
      id: 'landing',
      title: 'Landing Page Interaktif',
      category: 'Promosi Produk & Event',
      price: 650000,
      days: '3-5 Hari Kerja',
      icon: Laptop,
      tagline: 'Halaman promosi berkonversi tinggi yang dirancang khusus untuk memikat calon pembeli seketika.',
      features: ['Copywriting persuasif terstruktur', 'Animasi interaktif halus & modern', 'Loading kilat tanpa lemot di ponsel']
    },
    company: {
      id: 'company',
      title: 'Company Profile Elegan',
      category: 'Profil Bisnis & Korporasi',
      price: 1200000,
      days: '5-7 Hari Kerja',
      icon: Building2,
      tagline: 'Membangun citra kredibel dan profesional untuk meyakinkan klien, partner bisnis, dan investor.',
      features: ['Tampilan resmi berkelas & elegan', 'Integrasi Google Maps & kontak resmi', 'Optimasi SEO dasar untuk Google']
    },
    portfolio: {
      id: 'portfolio',
      title: 'Website Portfolio Kreatif',
      category: 'Personal Branding & Studio',
      price: 850000,
      days: '4-6 Hari Kerja',
      icon: Palette,
      tagline: 'Galeri pameran karya visual estetik untuk desainer, fotografer, arsitek, dan kreator profesional.',
      features: ['Galeri visual resolusi tinggi', 'Tautan CV digital & portofolio terkurasi', 'Desain stand out yang berkarakter']
    }
  };

  const currentConfig = typeConfigs[selectedType];

  const focusOptions = [
    { id: 'whatsapp', label: 'Order WhatsApp', icon: MessageCircle, desc: 'Pesan langsung ke WA' },
    { id: 'speed', label: 'Super Cepat', icon: Zap, desc: '< 1 detik terbuka' },
    { id: 'mobile', label: 'Mobile-First', icon: Smartphone, desc: 'Nyaman di smartphone' },
    { id: 'interactive', label: 'Visual Unik', icon: Sparkles, desc: 'Desain stand out' }
  ];

  return (
    <section id="pengenalan" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-[#2C29FF]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-[#00B349]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Floating Interactive Brand Starbursts */}
      <button
        type="button"
        onClick={() => showToast('Desain visual interaktif bikin customer betah')}
        title="Klik untuk efek visual!"
        className="absolute top-20 left-4 md:left-14 w-12 h-12 md:w-16 md:h-16 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-blue.svg" alt="Starburst Biru Webisa" className="w-full h-full drop-shadow-md" />
      </button>

      <button
        type="button"
        onClick={() => showToast('Bikin bisnismu tampil stand out di mata customer')}
        title="Klik untuk efek visual!"
        className="absolute top-36 right-6 md:right-20 w-10 h-10 md:w-14 md:h-14 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-red.svg" alt="Starburst Merah Webisa" className="w-full h-full drop-shadow-md" />
      </button>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700 text-xs font-bold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#00B349]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Poster Typography (6 cols) */}
          <div className="lg:col-span-6 text-left space-y-6">

            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#2C29FF] border border-blue-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Jasa Pembuatan Website Malang
              </span>
            </div>

            {/* Poster Signature Punchline (Typography: FreeSerif Italic + Helvetica Regular) */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.12]">
                <span className="font-serif italic font-normal text-slate-900">“Bisnismu</span>{' '}
                <span className="font-sans font-black text-slate-900">udah keren,</span>
                <br />
                <span className="font-sans font-black text-slate-900">Masa</span>{' '}
                <span className="font-serif italic font-normal text-[#2C29FF] underline decoration-[#00B349] decoration-wavy decoration-3">
                  Websitemu
                </span>{' '}
                <span className="font-sans font-black text-slate-900">jadul?”</span>
              </h1>
            </div>

            {/* Subtitle from Official Poster */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              Bikin Website dengan visual yang bikin betah customer. Ubah pengunjung biasa menjadi pelanggan setia lewat tampilan profesional, responsif di ponsel, dan berkecepatan tinggi.
            </p>

            {/* Social & Live Platform Pills from Poster */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-pink-50 border border-slate-200 text-xs font-bold text-slate-800 transition-colors shadow-2xs"
              >
                <span className="w-4 h-4 rounded-full bg-[#FF1E27] flex items-center justify-center text-white text-[9px] font-black">
                  IG
                </span>
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>

              <a
                href={SITE_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 transition-colors shadow-2xs"
              >
                <span className="w-4 h-4 rounded-full bg-[#2C29FF] flex items-center justify-center text-white text-[9px] font-black">
                  W
                </span>
                <span>webisa.vercel.app</span>
              </a>
            </div>

            {/* Core Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-slate-800 font-bold">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Desain Stand Out</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#2C29FF] shrink-0" />
                <span>100% Mobile Ready</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Direct WhatsApp Order</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={generateWhatsAppConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Konsultasi Project Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cara-pesan"
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border-2 border-slate-200 hover:border-[#00B349] flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Lihat Cara Pemesanan</span>
                <ArrowRight className="w-4 h-4 text-[#00B349]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Project Planner & Studio Configurator (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 sm:p-7 space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2C29FF] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Rencanakan Sekarang
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      Simulasi Kebutuhan Websitemu
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#00B349] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Konsultasi Gratis
                </span>
              </div>

              {/* 1. Pilih Tipe Website */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  1. Pilih Jenis Website yang Dibutuhkan:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'ecommerce', label: 'Toko Online WA', icon: ShoppingBag },
                    { id: 'landing', label: 'Landing Page', icon: Laptop },
                    { id: 'company', label: 'Company Profile', icon: Building2 },
                    { id: 'portfolio', label: 'Portfolio Kreatif', icon: Palette },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedType(item.id as any)}
                        className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                          isSelected
                            ? 'border-[#2C29FF] bg-blue-50/80 text-[#2C29FF] font-bold ring-2 ring-[#2C29FF]/20 shadow-xs'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#2C29FF]' : 'text-slate-400'}`} />
                        <span className="text-xs truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Prioritas Fitur Utama */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  2. Prioritas Fitur Utama:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {focusOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedFocus === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedFocus(opt.id as any)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#00B349] bg-emerald-50 text-[#00B349] font-bold ring-2 ring-[#00B349]/20'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 mx-auto mb-1 ${isSelected ? 'text-[#00B349]' : 'text-slate-400'}`} />
                        <span className="text-[11px] block font-semibold leading-tight">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Dynamic Summary & Estimation Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Paket Rekomendasi
                    </span>
                    <h4 className="text-sm font-black text-slate-900 mt-0.5">
                      {currentConfig.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-semibold block">Mulai Dari</span>
                    <span className="text-base font-black text-[#2C29FF]">
                      {formatRupiah(currentConfig.price)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-snug">
                  {currentConfig.tagline}
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px] text-slate-700">
                  {currentConfig.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#00B349] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#2C29FF] shrink-0" />
                    <span>Waktu: <strong>{currentConfig.days}</strong></span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button with pre-filled configuration message */}
              <a
                href={generateWhatsAppConsultationUrl(
                  currentConfig.title,
                  `Halo Webisa, saya ingin konsultasi pembuatan ${currentConfig.title} (mulai ${formatRupiah(currentConfig.price)}) dengan prioritas ${focusOptions.find(f => f.id === selectedFocus)?.label}. Apakah slot pengerjaan minggu ini masih tersedia?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#00B349] hover:bg-[#00963e] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Konsultasikan Paket Ini via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Guarantee Footer Note */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B349]" />
                <span>Diskusi santai • Tanpa komitmen awal • Solusi tepat sasaran</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
