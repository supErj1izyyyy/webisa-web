import React, { useState } from 'react';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Zap,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Monitor,
  ShoppingBag,
  Building2,
  Rocket,
  ArrowUpRight,
  MousePointerClick
} from 'lucide-react';

export const Hero: React.FC = () => {
  // Device view mode for live preview: 'desktop' | 'mobile'
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Active showcase type: 'ecommerce' | 'company' | 'landing'
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'company' | 'landing'>('ecommerce');

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

      {/* Floating Interactive Starbursts */}
      <button
        type="button"
        onClick={() => showToast('Desain visual interaktif bikin customer betah')}
        title="Klik untuk kejutan visual!"
        className="absolute top-20 left-4 md:left-14 w-12 h-12 md:w-16 md:h-16 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-blue.svg" alt="Starburst Biru" className="w-full h-full drop-shadow-md" />
      </button>

      <button
        type="button"
        onClick={() => showToast('Bikin bisnismu tampil stand out di mata customer')}
        title="Klik untuk kejutan visual!"
        className="absolute top-36 right-6 md:right-20 w-10 h-10 md:w-14 md:h-14 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-red.svg" alt="Starburst Merah" className="w-full h-full drop-shadow-md" />
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

          {/* Left Column: Headlines & Value Proposition (6 cols) */}
          <div className="lg:col-span-6 text-left space-y-6">

            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#2C29FF] border border-blue-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Jasa Pembuatan Website Malang
              </span>
            </div>

            {/* Poster Signature Punchline */}
            <div>
              <p className="font-quote text-2xl sm:text-3xl md:text-4xl text-[#FF1E27] font-black italic tracking-tight mb-2">
                “Bisnismu udah keren,
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Masa Websitemu <span className="font-quote italic text-[#2C29FF] underline decoration-[#00B349] decoration-wavy decoration-3">jadul?</span>”
              </h1>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              Bikin website dengan visual interaktif yang bikin betah customer. Ubah pengunjung biasa menjadi pelanggan setia lewat tampilan profesional, responsif di ponsel, dan berkecepatan tinggi.
            </p>

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
                <span>Direct WhatsApp Checkout</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={generateWhatsAppConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Project Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cara-pesan"
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border-2 border-slate-200 hover:border-[#00B349] flex items-center gap-2 shadow-xs"
              >
                <span>Lihat Cara Pemesanan</span>
                <ArrowRight className="w-4 h-4 text-[#00B349]" />
              </a>
            </div>

            {/* Micro Social Credit */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span>Portofolio & update harian di Instagram:</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#2C29FF] hover:underline inline-flex items-center gap-0.5"
              >
                {SITE_CONFIG.instagramHandle}
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Interactive Studio Live Preview (6 cols) */}
          <div className="lg:col-span-6 space-y-4">

            {/* Main Interactive Studio Preview Card */}
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
                  <span>webisa.website/demo-live</span>
                </div>

                {/* Device Viewport Toggle */}
                <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg border border-slate-300">
                  <button
                    type="button"
                    onClick={() => setDeviceView('desktop')}
                    className={`p-1 rounded-md text-xs transition-colors ${
                      deviceView === 'desktop' ? 'bg-white text-[#2C29FF] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Tampilan Desktop"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView('mobile')}
                    className={`p-1 rounded-md text-xs transition-colors ${
                      deviceView === 'mobile' ? 'bg-white text-[#00B349] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Tampilan Mobile HP"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Style / Category Selector Tabs */}
              <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('ecommerce')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeTab === 'ecommerce'
                      ? 'bg-[#2C29FF] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Toko Online WA</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('company')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeTab === 'company'
                      ? 'bg-[#00B349] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Company Profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('landing')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeTab === 'landing'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Landing Page Promosi</span>
                </button>
              </div>

              {/* Live Interactive Viewport Mockup */}
              <div className="p-4 bg-slate-100/70 min-h-[290px] flex items-center justify-center transition-all duration-300">
                <div
                  className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-4 transition-all duration-300 ${
                    deviceView === 'mobile' ? 'max-w-[280px] w-full' : 'w-full'
                  }`}
                >
                  {/* Dynamic Mockup Content Based on activeTab */}
                  {activeTab === 'ecommerce' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#00B349]" />
                          Katalog Brand Estetik
                        </span>
                        <span className="text-[10px] bg-emerald-50 text-[#00B349] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                          Checkout WhatsApp
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-left">
                          <div className="h-14 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-lg flex items-center justify-center text-xl mb-1.5">
                            👟
                          </div>
                          <div className="text-[11px] font-bold text-slate-800 truncate">Sepatu Casual Pro</div>
                          <div className="text-[10px] text-[#00B349] font-black">Rp 289.000</div>
                          <button
                            type="button"
                            onClick={() => showToast('Simulasi: Produk langsung masuk ke chat WhatsApp!')}
                            className="mt-1.5 w-full py-1 bg-[#00B349] text-white text-[9px] font-bold rounded-md hover:bg-[#00963e] flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <span>Beli ke WA</span>
                          </button>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-left">
                          <div className="h-14 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-lg flex items-center justify-center text-xl mb-1.5">
                            🧥
                          </div>
                          <div className="text-[11px] font-bold text-slate-800 truncate">Outerwear Streetwear</div>
                          <div className="text-[10px] text-[#00B349] font-black">Rp 349.000</div>
                          <button
                            type="button"
                            onClick={() => showToast('Simulasi: Pesanan siap dikirim tanpa potongan biaya!')}
                            className="mt-1.5 w-full py-1 bg-[#00B349] text-white text-[9px] font-bold rounded-md hover:bg-[#00963e] flex items-center justify-center gap-1 shadow-2xs"
                          >
                            <span>Beli ke WA</span>
                          </button>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 bg-blue-50/80 p-2 rounded-lg flex items-center justify-between">
                        <span>💡 Tanpa potongan komisi marketplace</span>
                        <span className="font-bold text-[#2C29FF]">100% Profit Masuk Kantong</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'company' && (
                    <div className="space-y-3 text-left">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-black text-xs text-slate-900 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#2C29FF]" />
                          Profil Korporasi Modern
                        </span>
                        <span className="text-[10px] bg-blue-50 text-[#2C29FF] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                          Resmi & Elegan
                        </span>
                      </div>

                      <div className="p-3 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl space-y-1.5">
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Kepercayaan Investor</span>
                        <p className="text-xs font-bold leading-snug">Membangun Kredibilitas Bisnis di Ranah Digital Global</p>
                        <div className="flex items-center gap-2 pt-1 text-[10px]">
                          <span className="bg-white/10 px-2 py-0.5 rounded text-white/90">99.9% Uptime</span>
                          <span className="bg-white/10 px-2 py-0.5 rounded text-white/90">SSL Enkripsi</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-base font-black text-[#2C29FF]">100+</div>
                          <div className="text-[10px] text-slate-500 font-semibold">Klien Terpercaya</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-base font-black text-[#00B349]">5.0 ⭐</div>
                          <div className="text-[10px] text-slate-500 font-semibold">Ulasan Bintang 5</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'landing' && (
                    <div className="space-y-3 text-left">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          Landing Page Penawaran Khusus
                        </span>
                        <span className="text-[10px] bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded-full border border-red-200">
                          Tinggi Konversi
                        </span>
                      </div>

                      <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl text-center space-y-2">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">Penawaran Eksklusif</div>
                        <div className="text-sm font-black">Tingkatkan Penjualan Hingga 300%</div>
                        <button
                          type="button"
                          onClick={() => showToast('Simulasi: CTA menarik langsung mengarahkan ke WhatsApp')}
                          className="px-4 py-1.5 bg-[#00B349] hover:bg-[#00963e] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1 shadow-md transition-transform active:scale-95"
                        >
                          <MousePointerClick className="w-3.5 h-3.5" />
                          <span>Klik Aksi Konversi</span>
                        </button>
                      </div>

                      <div className="text-[10px] text-slate-500 flex items-center justify-between px-1">
                        <span>⚡ Load time &lt; 0.8 detik</span>
                        <span>📱 Anti patah di browser HP</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Live Metric Badges Bar */}
              <div className="p-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#00B349] font-bold">
                    <Zap className="w-3.5 h-3.5 fill-[#00B349]" />
                    99/100 Google Speed
                  </span>
                  <span className="flex items-center gap-1 text-[#2C29FF] font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +300% Konversi Chat
                  </span>
                </div>

                <a
                  href={generateWhatsAppConsultationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2C29FF] hover:underline flex items-center gap-1 text-[11px]"
                >
                  Konsultasikan Website Ini
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
                    className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all text-center ${
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
