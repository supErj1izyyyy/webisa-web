import React, { useState } from 'react';
import { generateWhatsAppConsultationUrl } from '../config/site';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sliders
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  // Active Interactive Demo Tab
  const [activeTab, setActiveTab] = useState<'speed' | 'mobile' | 'whatsapp' | 'design'>('speed');

  // Interactive Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const featureTabs = [
    { id: 'speed', label: 'Super Cepat', icon: Zap, color: '#00B349' },
    { id: 'mobile', label: 'Mobile-First', icon: Smartphone, color: '#2C29FF' },
    { id: 'whatsapp', label: 'Order WhatsApp', icon: MessageCircle, color: '#00B349' },
    { id: 'design', label: 'Visual Unik', icon: Palette, color: '#FF2E93' },
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

      {/* Floating Interactive Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#00B349]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Slogan & Intro (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* City & Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-[#2C29FF] border border-blue-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00B349] animate-pulse" />
              <span>Studio Pembuatan Website Malang</span>
            </div>

            {/* Brand Punchline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Bisnismu{' '}
                <span className="font-serif italic font-normal text-[#2C29FF] tracking-normal">
                  udah keren,
                </span>
                <br />
                Masa Websitemu{' '}
                <span className="font-serif italic font-normal text-[#00B349] tracking-normal">
                  jadul?
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Webisa hadir untuk mentransformasi identitas bisnismu menjadi website modern, interaktif, dan berkecepatan tinggi. Siap mengubah pengunjung biasa menjadi pelanggan setia lewat pengalaman digital yang berkesan.
            </p>

            {/* Core Trust Points */}
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
                href="#layanan"
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border-2 border-slate-200 hover:border-[#00B349] flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Lihat Pilihan Layanan</span>
                <ArrowRight className="w-4 h-4 text-[#00B349]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Standar Kualitas Webisa (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 sm:p-7 space-y-5">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2C29FF] flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Standar Kualitas
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      Eksplorasi Fitur Webisa
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#00B349] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Coba Interaktif
                </span>
              </div>

              {/* Interactive Feature Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {featureTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? 'border-[#2C29FF] bg-blue-50/80 text-[#2C29FF] font-black ring-2 ring-[#2C29FF]/20 shadow-xs'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2C29FF]' : 'text-slate-400'}`} />
                      <span className="text-[11px] leading-tight">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Interactive Canvas */}
              <div className="min-h-[220px] rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between">
                {activeTab === 'speed' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#00B349] flex items-center justify-center font-black text-xs">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block">Performa & Kecepatan</span>
                          <span className="text-[11px] text-slate-500">Skor Pengujian Browser</span>
                        </div>
                      </div>
                      <span className="text-xl font-black text-[#00B349] font-mono">99 / 100</span>
                    </div>

                    <div className="space-y-2">
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-[#00B349] h-2.5 rounded-full w-[99%] transition-all duration-700" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                        <span>Waktu Muat: <strong>0.38 detik</strong></span>
                        <span>Ukuran Asset: <strong>Teroptimasi Ringan</strong></span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      💡 <strong>Tanpa plugin berat:</strong> Dibangun dengan kode bersih modern tanpa script bloated, memastikan pelanggan langsung melihat tawaran bisnismu tanpa menunggu.
                    </div>
                  </div>
                )}

                {activeTab === 'mobile' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2C29FF] flex items-center justify-center font-black text-xs">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block">Mobile-First Architecture</span>
                          <span className="text-[11px] text-slate-500">Responsif di Semua Ukuran Layar</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        100% Fluid
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="block text-slate-400 text-[10px]">Ukuran Font</span>
                        <span className="font-bold text-slate-800">Presisi & Jelas</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="block text-slate-400 text-[10px]">Tap Target</span>
                        <span className="font-bold text-slate-800">Ramah Jempol</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="block text-slate-400 text-[10px]">Navigasi</span>
                        <span className="font-bold text-slate-800">Mulus & Cepat</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      📱 <strong>85%+ pengunjung membuka dari smartphone.</strong> Webisa memprioritaskan kenyamanan layar ponsel agar tidak ada tulisan kepotong atau tombol sulit dipencet.
                    </div>
                  </div>
                )}

                {activeTab === 'whatsapp' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#00B349] flex items-center justify-center font-black text-xs">
                          <WhatsAppIcon className="w-4 h-4 fill-[#00B349]" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block">Integrasi WhatsApp Instan</span>
                          <span className="text-[11px] text-slate-500">Otomasi Format Pesan Pelanggan</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-[#00B349] bg-emerald-50 px-2 py-0.5 rounded-md">
                        Direct Conversion
                      </span>
                    </div>

                    {/* Chat Bubble Mockup */}
                    <div className="bg-[#EFEAE2] p-3 rounded-2xl border border-slate-200/80 space-y-2">
                      <div className="bg-white rounded-2xl rounded-tl-xs p-2.5 max-w-[85%] shadow-2xs text-[11px] text-slate-800 space-y-1">
                        <span className="font-bold text-[#2C29FF] block">Format Otomatis dari Web:</span>
                        <p className="text-slate-600 leading-relaxed">
                          "Halo, saya tertarik memesan via website. Apakah produk/layanan ini ready?"
                        </p>
                        <span className="text-[9px] text-slate-400 block text-right">10:42 ✓✓</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      💬 Calon pembeli tidak perlu mengetik panjang atau bingung format pesan. Satu klik langsung terhubung ke nomor bisnismu!
                    </div>
                  </div>
                )}

                {activeTab === 'design' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-[#FF2E93] flex items-center justify-center font-black text-xs">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block">Identitas Desain Eksklusif</span>
                          <span className="text-[11px] text-slate-500">Sesuai Karakter Brand Bisnismu</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md">
                        Anti-Template
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
                        <img src="./assets/shape-star.png" alt="Star" className="w-7 h-7 mb-1.5" />
                        <span className="text-[10px] font-bold text-slate-700">Elemen Visual</span>
                      </div>
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
                        <span className="font-serif italic text-xl text-[#2C29FF] font-normal leading-none mb-1.5">Aa</span>
                        <span className="text-[10px] font-bold text-slate-700">Tipografi Berkelas</span>
                      </div>
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
                        <img src="./assets/shape-leaf.png" alt="Leaf" className="w-7 h-7 mb-1.5" />
                        <span className="text-[10px] font-bold text-slate-700">Palet Warna Unik</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      ✨ Tidak memakai template pasaran gratisan yang membosankan. Tampilan bisnismu akan berkesan premium dan stand out.
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button: Jump to Layanan */}
              <a
                href="#layanan"
                className="w-full py-3.5 px-4 bg-[#2C29FF] hover:bg-[#1E1BEE] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Lihat 5 Pilihan Layanan Webisa</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Guarantee Footer Note */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold text-center pt-1">
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
