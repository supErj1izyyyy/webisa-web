import React, { useState } from 'react';
import { Sparkles, XCircle, CheckCircle2, ArrowRight, MessageSquare, AlertTriangle, Zap, ShieldAlert, Check } from 'lucide-react';
import { generateWhatsAppConsultationUrl } from '../config/site';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [demoToast, setDemoToast] = useState<string | null>(null);

  const triggerDemoToast = (msg: string) => {
    setDemoToast(msg);
    setTimeout(() => setDemoToast(null), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Floating Demo Toast */}
        {demoToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#00B349] text-white px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>{demoToast}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Realita Pasar Digital
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bedanya <span className="text-slate-400 line-through decoration-[#FF1E27] decoration-4">Web Jadul</span> dengan <span className="font-quote italic text-[#2C29FF]">Webisa Next-Level</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Lihat langsung perbandingan nyata antara website biasa yang kaku dengan website interaktif berstandar Webisa.
          </p>

          {/* Interactive Switcher Buttons */}
          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mt-6 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>Kondisi Web Biasa / Jadul</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-[#00B349] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Standar Webisa (Next Level)</span>
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'before' ? (
            <div className="bg-rose-50/70 border-2 border-rose-200 rounded-3xl p-6 sm:p-8 shadow-sm transition-all animate-fadeIn">
              {/* Header inside Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-rose-200 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 block">
                    Kekurangan Website Biasa
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Bikin Pengunjung Ragu & Langsung Tutup Tab
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-200 text-rose-800">
                  Konversi Rendah (&lt;1%)
                </span>
              </div>

              {/* Grid: Left Column Points, Right Column Visual Example Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left (6 cols): 4 Core Problems */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {[
                    { title: 'Tampilan Kaku & Pasaran', desc: 'Berasal dari template gratisan tanpa ciri khas brand.' },
                    { title: 'Loading Lambat (5-8 Detik)', desc: 'Gambar berat dan plugin menumpuk. Customer kabur sebelum web selesai terbuka.' },
                    { title: 'Berantakan di Layar Ponsel', desc: 'Huruf terlalu kecil, layout terpotong, tombol sulit dipencet jempol.' },
                    { title: 'Alur Pesan Membingungkan', desc: 'Tidak ada tombol WhatsApp otomatis, pembeli bingung cara order.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/90 p-3.5 rounded-2xl border border-rose-200/80 flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right (6 cols): Visual Example Mockup of "Web Jadul" */}
                <div className="lg:col-span-6 bg-white rounded-2xl border-2 border-rose-300 shadow-sm overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-rose-100/90 px-3 py-2 border-b border-rose-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="ml-1 text-[10px] text-rose-700 font-mono">http://toko-biasa-template.xyz</span>
                    </div>
                    <span className="text-[10px] bg-rose-200 text-rose-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      Tidak Aman
                    </span>
                  </div>

                  {/* Simulated Messy Web Page */}
                  <div className="p-4 bg-slate-50 space-y-3 text-left">
                    {/* Slow Loading Alert Bar */}
                    <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-2 text-[10px] text-amber-800">
                      <div className="w-3 h-3 border-2 border-amber-600 border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>Loading script template... <strong>(6.2 detik)</strong></span>
                    </div>

                    {/* Broken Banner */}
                    <div className="p-3 border border-dashed border-rose-300 bg-rose-50/60 rounded-xl text-center space-y-0.5">
                      <div className="text-xs text-rose-500 font-bold flex items-center justify-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        [Gambar Banner Gagal Dimuat - Ukuran 5.4MB]
                      </div>
                      <div className="text-[10px] text-slate-400">Layout patah saat dibuka di browser ponsel</div>
                    </div>

                    {/* Clunky Product Box */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1.5 font-serif">
                      <div className="text-xs font-bold text-slate-800 underline">PRODUK TOKO CONTOH</div>
                      <p className="text-[10px] text-slate-500 font-sans leading-tight">
                        Harga: Hubungi admin manual via SMS atau kirim email ke admin@mail.com. Jam kerja 09.00 - 17.00.
                      </p>
                      <div className="pt-1 flex items-center gap-2">
                        <button type="button" className="px-2.5 py-1 bg-slate-200 border border-slate-400 text-slate-700 text-[10px] font-sans shadow-2xs">
                          Submit Formulir
                        </button>
                        <span className="text-[10px] text-rose-500 font-sans font-bold">✖ Tanpa Tombol WhatsApp</span>
                      </div>
                    </div>

                    {/* Impact Alert */}
                    <div className="p-2 bg-rose-100 rounded-lg flex items-center justify-between text-[11px] text-rose-900 font-bold">
                      <span>Dampak: 7 dari 10 pengunjung langsung kabur</span>
                      <span className="text-rose-600">Rugi Iklan</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom CTA to Switch */}
              <div className="mt-6 pt-4 border-t border-rose-200 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('after')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#2C29FF] transition-all shadow-md cursor-pointer"
                >
                  <span>Lihat Contoh Solusi Standar Webisa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-emerald-50/70 border-2 border-[#00B349] rounded-3xl p-6 sm:p-8 shadow-lg transition-all animate-fadeIn">
              {/* Header inside Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-emerald-200 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00B349] block">
                    Keunggulan Standar Webisa
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Visual Interaktif yang Bikin Betah & Menghasilkan Penjualan
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00B349] text-white shadow-xs">
                  Next Level ✨
                </span>
              </div>

              {/* Grid: Left Column Points, Right Column Visual Example Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left (6 cols): 4 Core Advantages */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {[
                    { title: 'Desain Kustom Eksklusif', desc: 'Dirancang khusus mengikuti identitas brandmu sehingga tampak premium dan berkelas.' },
                    { title: 'Super Cepat (< 1 Detik)', desc: 'Dibangun dengan React & arsitektur modern. Terbuka seketika di ponsel customer.' },
                    { title: '100% Mobile-First Responsive', desc: 'Tata letak presisi dan nyaman diakses dengan satu jempol di layar smartphone.' },
                    { title: 'Konversi Langsung ke WhatsApp', desc: 'Dilengkapi tombol WhatsApp cerdas yang langsung terisi detail pesanan otomatis.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-emerald-200 flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right (6 cols): Visual Example Mockup of "Standar Webisa" */}
                <div className="lg:col-span-6 bg-white rounded-2xl border-2 border-[#00B349] shadow-md overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-emerald-50 px-3 py-2 border-b border-emerald-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-1 text-[10px] text-emerald-800 font-mono font-bold">https://brand-kamu.com</span>
                    </div>
                    <span className="text-[10px] bg-[#00B349] text-white px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-white" />
                      ⚡ 0.4 Detik
                    </span>
                  </div>

                  {/* Simulated Modern & Interactive Web Page */}
                  <div className="p-4 bg-gradient-to-b from-white to-emerald-50/40 space-y-3 text-left">
                    {/* Micro Brand Bar */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2C29FF]" />
                        <span className="text-xs font-black text-slate-900">BRAND KAMU</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#00B349] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        ✓ Terverifikasi Resmi
                      </span>
                    </div>

                    {/* Interactive Showcase Card */}
                    <div className="p-3 bg-gradient-to-br from-blue-50/70 to-emerald-50/70 border border-slate-200 rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#2C29FF] uppercase tracking-wider">Katalog Produk Unggulan</span>
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/80 px-2 py-0.2 rounded-full">Stok Ready</span>
                      </div>
                      <div className="text-xs font-black text-slate-900">Tampilan Modern yang Mengundang Klik</div>
                      <p className="text-[10px] text-slate-600 leading-snug">
                        Visual interaktif estetik yang meyakinkan customer untuk langsung melakukan pembelian tanpa ragu.
                      </p>

                      {/* Interactive Button */}
                      <button
                        type="button"
                        onClick={() => triggerDemoToast('Contoh interaksi: Tombol WhatsApp otomatis membuka format pesanan')}
                        className="w-full py-2 bg-[#00B349] hover:bg-[#00963e] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Coba Klik: Order Langsung via WhatsApp</span>
                      </button>
                    </div>

                    {/* Positive Outcome Alert */}
                    <div className="p-2 bg-emerald-100/90 rounded-lg flex items-center justify-between text-[11px] text-emerald-950 font-bold">
                      <span>Dampak: Pengunjung langsung chat order</span>
                      <span className="text-[#00B349] font-black">+300% Penjualan</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-4 border-t border-emerald-200 text-center">
                <a
                  href={generateWhatsAppConsultationUrl('Upgrade Website ke Standar Webisa')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2C29FF] text-white text-xs font-bold hover:bg-[#1E1BEE] transition-all shadow-md hover:scale-[1.02]"
                >
                  <span>Upgrade Websitemu Bersama Webisa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
