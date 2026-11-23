import React, { useState } from 'react';
import { Sparkles, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateWhatsAppConsultationUrl } from '../config/site';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Realita Pasar Digital
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bedanya <span className="text-slate-400 line-through decoration-[#FF1E27] decoration-4">Web Jadul</span> dengan <span className="font-quote italic text-[#2C29FF]">Webisa Next-Level</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Coba klik tombol perbandingan di bawah untuk melihat mengapa website biasa sering gagal mendatangkan penjualan, sementara website interaktif Webisa justru bikin customer betah.
          </p>

          {/* Interactive Switcher Buttons */}
          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mt-6 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
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
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
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

        {/* Comparison Content Container */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'before' ? (
            <div className="bg-rose-50/70 border-2 border-rose-200 rounded-3xl p-6 sm:p-10 shadow-sm transition-all animate-fadeIn">
              <div className="flex items-center justify-between pb-6 border-b border-rose-200 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 block">
                    Kekurangan Website Biasa
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Bikin Pengunjung Ragu & Langsung Tutup Tab
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-200 text-rose-800">
                  Konversi Rendah
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Tampilan Kaku & Pasaran', desc: 'Berasal dari template gratisan yang sudah dipakai ribuan web lain tanpa kepribadian brand.' },
                  { title: 'Loading Lambat (5-8 Detik)', desc: 'Gambar berat dan plugin menumpuk. Lebih dari 50% calon pembeli pergi sebelum web selesai loading.' },
                  { title: 'Berantakan Saat Dibuka di Ponsel', desc: 'Huruf terlalu kecil, layout terpotong, dan menu sulit ditekan oleh jempol customer.' },
                  { title: 'Alur Pesan Membingungkan', desc: 'Tidak ada tombol direct WhatsApp, pengunjung bingung cara order hingga akhirnya pindah ke kompetitor.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-rose-200/80 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('after')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#2C29FF] transition-all shadow-md"
                >
                  <span>Lihat Solusi Standar Webisa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-emerald-50/70 border-2 border-[#00B349] rounded-3xl p-6 sm:p-10 shadow-lg transition-all animate-fadeIn">
              <div className="flex items-center justify-between pb-6 border-b border-emerald-200 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00B349] block">
                    Keunggulan Standar Webisa
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Visual Interaktif yang Bikin Betah & Menghasilkan Penjualan
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00B349] text-white shadow-xs">
                  Next Level ✨
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Desain Kustom Eksklusif', desc: 'Dirancang khusus mengikuti identitas visual brandmu. Membuat bisnismu tampak premium dan terpercaya.' },
                  { title: 'Super Cepat (< 1 Detik)', desc: 'Dibangun dengan React & arsitektur modern tanpa bloatware. Langsung terbuka seketika di ponsel customer.' },
                  { title: '100% Mobile-First Responsive', desc: 'Navigasi mulus di semua ukuran layar smartphone dengan tap-target nyaman dan tipografi presisi.' },
                  { title: 'Konversi Langsung ke WhatsApp', desc: 'Dilengkapi tombol WhatsApp cerdas dengan format pesan yang sudah otomatis terisi detail pesanan.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-emerald-200 flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#00B349] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
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
