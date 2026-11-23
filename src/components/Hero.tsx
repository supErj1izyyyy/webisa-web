import React, { useState } from 'react';
import { SITE_CONFIG, generateWhatsAppConsultationUrl, formatRupiah } from '../config/site';
import { MessageSquare, Calculator, Sparkles, ArrowRight, CheckCircle2, Laptop, Smartphone, Box, ShoppingBag, ExternalLink, RotateCw } from 'lucide-react';

export const Hero: React.FC = () => {
  // Interactive Sandbox States
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'3d' | 'ecommerce' | 'profile'>('3d');
  
  // Interactive Mini-App States
  // 1. 3D Model interactive state
  const [rotationDeg, setRotationDeg] = useState(25);
  const [infillVal, setInfillVal] = useState(20);
  
  // 2. E-Commerce interactive state
  const [selectedColor, setSelectedColor] = useState('Biru Webisa');
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const simulatedWeight = Math.round(12 * (0.3 + 0.7 * (infillVal / 100)));
  const simulatedPrice = simulatedWeight * 750;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern">
      {/* Subtle Radial Ambient Colors */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-[#2C29FF]/8 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-[#00B349]/8 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Floating Interactive Starbursts (Clickable with micro-toasts!) */}
      <button
        type="button"
        onClick={() => showToast('✦ Desain Visual Interaktif Bikin Customer Betah!')}
        title="Klik untuk kejutan!"
        className="absolute top-20 left-4 md:left-16 w-12 h-12 md:w-16 md:h-16 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-blue.svg" alt="Starburst Biru" className="w-full h-full drop-shadow-md" />
      </button>

      <button
        type="button"
        onClick={() => showToast('✨ 100% Koding Kustom Modern (React & Vite)')}
        title="Klik untuk kejutan!"
        className="absolute top-36 right-6 md:right-24 w-10 h-10 md:w-14 md:h-14 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-red.svg" alt="Starburst Merah" className="w-full h-full drop-shadow-md" />
      </button>

      <button
        type="button"
        onClick={() => showToast('🚀 Siap Tingkatkan Kredibilitas & Omzet Bisnis!')}
        title="Klik untuk kejutan!"
        className="absolute bottom-12 left-10 md:left-24 w-8 h-8 md:w-12 md:h-12 animate-spin-slow hover:scale-125 transition-transform cursor-pointer focus:outline-hidden"
      >
        <img src="./images/starburst-green.svg" alt="Starburst Hijau" className="w-full h-full drop-shadow-md" />
      </button>

      {/* Toast Notification for click interactions */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700 text-xs font-bold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#00B349]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Signature Poster Headlines & CTAs (6 cols) */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#2C29FF] border border-blue-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Jasa Pembuatan Website Malang
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#00B349] border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B349]" />
                Modern • Interactive • Custom
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

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700 font-bold">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Desain Stand Out</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#2C29FF] shrink-0" />
                <span>100% Mobile Ready</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Integrasi WhatsApp</span>
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
                href="#estimator"
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border-2 border-slate-200 hover:border-[#00B349] flex items-center gap-2 shadow-xs"
              >
                <Calculator className="w-4 h-4 text-[#00B349]" />
                <span>Hitung Estimasi Biaya</span>
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

          {/* Right Column: Interactive Live Sandbox Simulator (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden">
              
              {/* Simulator Header & Device Switcher */}
              <div className="p-3 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                
                {/* Browser Traffic Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono text-slate-500 ml-2 font-bold hidden sm:inline">
                    Simulasi Web Interaktif
                  </span>
                </div>

                {/* Device Switcher (Desktop vs Mobile) */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
                  <button
                    type="button"
                    onClick={() => setDeviceMode('desktop')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      deviceMode === 'desktop'
                        ? 'bg-[#2C29FF] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceMode('mobile')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      deviceMode === 'mobile'
                        ? 'bg-[#00B349] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Interactive App Tabs */}
              <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('3d')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeTab === '3d'
                      ? 'bg-white text-[#2C29FF] border border-blue-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Box className="w-3.5 h-3.5 text-[#2C29FF]" />
                  <span>3D Slicer Engine (Treedible)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ecommerce')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeTab === 'ecommerce'
                      ? 'bg-white text-[#00B349] border border-emerald-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#00B349]" />
                  <span>Toko Online & Checkout WA</span>
                </button>
              </div>

              {/* Simulator Screen Container */}
              <div className={`p-4 transition-all duration-300 flex justify-center ${
                deviceMode === 'mobile' ? 'bg-slate-100 py-6' : 'bg-white'
              }`}>
                <div className={`w-full transition-all duration-300 ${
                  deviceMode === 'mobile'
                    ? 'max-w-[280px] bg-white rounded-3xl border-4 border-slate-800 p-3 shadow-2xl'
                    : 'max-w-none'
                }`}>
                  
                  {/* Phone Speaker Notch in Mobile Mode */}
                  {deviceMode === 'mobile' && (
                    <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-3" />
                  )}

                  {/* TAB 1: 3D SLICER INTERACTIVE DEMO */}
                  {activeTab === '3d' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                        <span className="flex items-center gap-1 text-[#2C29FF]">
                          <Box className="w-4 h-4" />
                          3D Interactive Geometry
                        </span>
                        <span className="text-[11px] bg-emerald-50 text-[#00B349] px-2 py-0.5 rounded border border-emerald-200">
                          Bambu Lab P1S Bed
                        </span>
                      </div>

                      {/* Interactive 3D Canvas Box */}
                      <div className="relative h-44 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden group">
                        
                        {/* 3D Cube that rotates based on slider */}
                        <div
                          className="w-20 h-20 transition-transform duration-200 cursor-grab active:cursor-grabbing"
                          style={{
                            transform: `perspective(400px) rotateX(20deg) rotateY(${rotationDeg}deg)`,
                            transformStyle: 'preserve-3d'
                          }}
                          onClick={() => setRotationDeg((prev) => (prev + 45) % 360)}
                          title="Klik objek untuk memutar sudut!"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-[#2C29FF] to-[#00B349] rounded-xl shadow-xl flex items-center justify-center text-white font-mono text-xs font-bold border-2 border-white">
                            3D Model
                          </div>
                        </div>

                        {/* Interactive Rotation Controller */}
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-xl border border-slate-200 text-[10px] text-slate-600">
                          <span className="flex items-center gap-1 font-semibold">
                            <RotateCw className="w-3 h-3 text-[#2C29FF]" /> Putar: {rotationDeg}°
                          </span>
                          <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotationDeg}
                            onChange={(e) => setRotationDeg(Number(e.target.value))}
                            className="w-24 accent-[#2C29FF] cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Infill Slider & Live Price calculation */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>Kerapatan Infill: {infillVal}%</span>
                          <span className="text-[#00B349]">±{simulatedWeight} gram</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          step="5"
                          value={infillVal}
                          onChange={(e) => setInfillVal(Number(e.target.value))}
                          className="w-full accent-[#00B349] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                        />
                        <div className="flex justify-between items-center pt-1 border-t border-slate-200 text-xs">
                          <span className="text-slate-500 font-medium">Estimasi Biaya:</span>
                          <span className="font-extrabold text-[#2C29FF] text-sm font-mono">
                            {formatRupiah(simulatedPrice)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: E-COMMERCE & DIRECT WA DEMO */}
                  {activeTab === 'ecommerce' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                        <span className="flex items-center gap-1 text-[#00B349]">
                          <ShoppingBag className="w-4 h-4" />
                          Katalog Toko Online
                        </span>
                        <span className="text-[11px] bg-blue-50 text-[#2C29FF] px-2 py-0.5 rounded border border-blue-200 font-bold">
                          Keranjang: {cartCount}
                        </span>
                      </div>

                      {/* Product Card */}
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#2C29FF] to-[#00B349] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            PRODUK
                          </div>
                          <div>
                            <h5 className="font-bold text-xs text-slate-900">Custom Mechanical Part #04</h5>
                            <span className="text-[11px] text-slate-500 block">Koleksi Desain Fungsional</span>
                            <span className="font-extrabold text-sm text-[#00B349]">Rp 85.000</span>
                          </div>
                        </div>

                        {/* Interactive Color Choice */}
                        <div className="flex items-center justify-between pt-1 text-xs">
                          <span className="text-slate-500 text-[11px]">Varian: {selectedColor}</span>
                          <div className="flex gap-1.5">
                            {['Biru Webisa', 'Hijau Neon', 'Hitam Doff'].map((col) => (
                              <button
                                key={col}
                                type="button"
                                onClick={() => setSelectedColor(col)}
                                className={`w-5 h-5 rounded-full border-2 ${
                                  col === 'Biru Webisa' ? 'bg-[#2C29FF]' : col === 'Hijau Neon' ? 'bg-[#00B349]' : 'bg-slate-900'
                                } ${selectedColor === col ? 'ring-2 ring-offset-1 ring-slate-800' : 'opacity-70'}`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Add to Cart Interactive Button */}
                        <button
                          type="button"
                          onClick={() => {
                            setCartCount((prev) => prev + 1);
                            showToast(`🛒 Ditambahkan: Custom Part (${selectedColor})`);
                          }}
                          className="w-full py-2 bg-[#00B349] hover:bg-[#00963e] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Tambah ke Keranjang ({cartCount})</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Simulator Footer Caption */}
                  <div className="mt-2 text-[10px] text-center text-slate-400 font-medium">
                    ⚡ Komponen interaktif di atas dapat dicoba langsung secara nyata.
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
