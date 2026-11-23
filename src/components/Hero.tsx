import React, { useState } from 'react';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  // Interactive Business Matcher State
  const [selectedBiz, setSelectedBiz] = useState<'fashion' | 'fnb' | 'service' | 'tech'>('fashion');

  // Interactive Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const bizRecommendations = {
    fashion: {
      type: 'Toko Online & Katalog Interaktif',
      tagline: 'Katalog produk estetik dengan checkout langsung ke WhatsApp tanpa potongan fee.',
      estTime: '5-7 Hari Kerja',
      highlight: 'Konversi order chat meningkat 3x lipat'
    },
    fnb: {
      type: 'Landing Page Menu & Reservasi',
      tagline: 'Buku menu digital interaktif, integrasi Google Maps, dan tombol order WhatsApp instan.',
      estTime: '3-5 Hari Kerja',
      highlight: 'Pelanggan langsung pesan tanpa install aplikasi'
    },
    service: {
      type: 'Company Profile Elegan & Kredibel',
      tagline: 'Membangun kepercayaan calon klien dan investor dengan portfolio profesional berkelas.',
      estTime: '5-7 Hari Kerja',
      highlight: 'Tampilan resmi yang meyakinkan partner bisnis'
    },
    tech: {
      type: 'Custom Web & Interactive Engine',
      tagline: 'Fitur unik berbasis React & visual modern seperti kalkulator instan dan formulir dinamis.',
      estTime: '7-12 Hari Kerja',
      highlight: 'Solusi teknologi spesifik tanpa batas template'
    }
  };

  const currentRec = bizRecommendations[selectedBiz];

  return (
    <section id="pengenalan" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-[#2C29FF]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-[#00B349]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Floating Interactive Brand Starbursts from Webisa_Asset */}
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

          {/* Right Column: Featured Case Study from Poster (Treedible) & Quick Matcher (6 cols) */}
          <div className="lg:col-span-6 space-y-4">

            {/* Main Client Showcase Card (As on Poster: "Trusted By Treedible") */}
            <div className="relative bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden group">

              {/* Browser Window Bar */}
              <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md text-[11px] font-mono text-slate-500 border border-slate-200 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B349]" />
                  <span>treedible.com/calculator</span>
                </div>

                <span className="text-[11px] font-bold text-[#2C29FF] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Karya Asli Webisa
                </span>
              </div>

              {/* Showcase Image from Webisa_Asset Poster */}
              <div className="relative p-3 bg-slate-100/60 overflow-hidden">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
                  <img
                    src="./assets/treedible-client-showcase.png"
                    alt="Treedible 3D Printing Showcase"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Floating Metric Badge 1 (Speed) */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-900 animate-float">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#00B349] flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 fill-[#00B349]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Google Speed</span>
                      <span className="text-[#00B349]">⚡ 99/100 Skor HP</span>
                    </div>
                  </div>

                  {/* Floating Metric Badge 2 (Conversion) */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-900">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#2C29FF] flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Hasil Nyata</span>
                      <span className="text-[#2C29FF]">+300% Chat WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showcase Footer Bar (Trusted By: Treedible) */}
              <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">Trusted By:</span>
                  <span className="text-slate-900 font-black">Treedible 3D Printing Malang</span>
                </div>
                <a
                  href="https://supErj1izyyyy.github.io/treedible-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2C29FF] hover:underline flex items-center gap-1 text-[11px]"
                >
                  Buka Demo Live
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive "Pencari Solusi Cepat" (Quick Business Matcher) */}
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00B349]" />
                  Pilih Bidang Bisnismu:
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Rekomendasi Instan</span>
              </div>

              {/* Category Pills */}
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'fashion', label: 'Retail / Olshop' },
                  { id: 'fnb', label: 'Kuliner / Cafe' },
                  { id: 'service', label: 'Jasa & Agensi' },
                  { id: 'tech', label: 'Startup / Tech' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedBiz(item.id as 'fashion' | 'fnb' | 'service' | 'tech')}
                    className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
                      selectedBiz === item.id
                        ? 'bg-[#2C29FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Result Box */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900">{currentRec.type}</span>
                    <span className="text-[10px] bg-[#00B349] text-white px-2 py-0.2 rounded-full font-bold">
                      {currentRec.estTime}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {currentRec.tagline}
                  </p>
                </div>
                <a
                  href={generateWhatsAppConsultationUrl(`Paket ${currentRec.type}`, `Tertarik untuk bisnis bidang ${selectedBiz}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#00B349] hover:bg-[#00963e] text-white rounded-xl text-xs font-extrabold shrink-0 shadow-xs flex items-center gap-1 transition-transform active:scale-95"
                >
                  <span>Chat WA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
