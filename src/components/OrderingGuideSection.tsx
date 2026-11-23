import React, { useState } from 'react';
import { SERVICES, formatRupiah, generateWhatsAppConsultationUrl } from '../config/site';
import type { ServiceTypeKey } from '../types';
import { MessageSquare, ArrowRight, FileText, CreditCard, Rocket, Sparkles } from 'lucide-react';

export const OrderingGuideSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceTypeKey>('landing');

  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const steps = [
    {
      number: '1',
      title: 'Pilih Kebutuhan atau Paket',
      desc: 'Tentukan jenis website yang kamu butuhkan (Landing Page, Company Profile, Toko Online, dsb) atau ceritakan langsung ide bisnismu.',
      icon: FileText,
      color: '#2C29FF',
    },
    {
      number: '2',
      title: 'Konsultasi Gratis via WhatsApp',
      desc: 'Diskusikan referensi visual yang kamu suka dan fitur yang diinginkan. Tim Webisa akan memberikan saran terbaik tanpa biaya konsultasi.',
      icon: MessageSquare,
      color: '#00B349',
    },
    {
      number: '3',
      title: 'Kirimkan Materi / Konten Bisnis',
      desc: 'Kirimkan logo, foto produk, dan tulisan yang ingin dimasukkan. Belum punya tulisan? Tim Webisa siap membantu merapikan copywriting-nya.',
      icon: Sparkles,
      color: '#FF2E93',
    },
    {
      number: '4',
      title: 'Kesepakatan & Mulai Pengerjaan',
      desc: 'Setelah setuju dengan estimasi harga dan jadwal kerja, lakukan pembayaran DP 50% dan tim developer kami langsung mengeksekusi koding.',
      icon: CreditCard,
      color: '#FF1E27',
    },
    {
      number: '5',
      title: 'Review Revisi & Go Live',
      desc: 'Kamu bisa mencoba langsung website di link preview. Setelah revisi minor tuntas dan pelunasan, website resmi meluncur di domain pilihanmu!',
      icon: Rocket,
      color: '#00B349',
    },
  ];

  return (
    <section id="cara-pesan" className="py-20 md:py-28 bg-[#FAFAFE] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00B349]/10 text-[#00B349] border border-[#00B349]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Panduan Calon Klien
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bagaimana <span className="font-quote italic text-[#2C29FF]">Cara Pemesanan</span> di Webisa?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Prosesnya sangat simpel, cepat, dan transparan. Kamu tidak perlu mengerti bahasa koding untuk punya website berkelas dunia.
          </p>
        </div>

        {/* 5-Step Order Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#2C29FF] transition-all hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-8 h-8 rounded-full text-white text-xs font-black flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:scale-110 transition-transform" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold" style={{ color: item.color }}>
                  <span>Langkah {item.number}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Fast Order Box (Pilih Paket & Direct WA) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00B349] block">
                ✦ Langsung Pesan Sekarang
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Sudah Menentukan Pilihan Paket?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Pilih paket di bawah dan pesan langsung via WhatsApp dengan pesan otomatis terformat rapi.
              </p>
            </div>
            
            {/* Quick Consultation Badge */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#2C29FF] text-white flex items-center justify-center font-bold">
                WA
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold block">Respons Cepat:</span>
                <span className="text-xs font-extrabold text-slate-900">Online Tiap Hari</span>
              </div>
            </div>
          </div>

          {/* Interactive Service Buttons */}
          <div className="pt-6">
            <label className="text-xs font-bold text-slate-700 block mb-3">
              Pilih Paket Layanan yang Ingin Dipesan:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedService(s.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedService === s.id
                      ? 'border-[#2C29FF] bg-blue-50 text-[#2C29FF] ring-2 ring-[#2C29FF] shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-extrabold text-xs block truncate">{s.title}</span>
                  <span className="text-[11px] font-bold text-[#00B349] block mt-1">
                    {formatRupiah(s.startingPrice)}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Package Summary & CTA */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Paket Terpilih:</span>
                <h4 className="text-base font-black text-slate-900">{currentService.title}</h4>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-600">
                  <span>Mulai <strong>{formatRupiah(currentService.startingPrice)}</strong></span>
                  <span>•</span>
                  <span>Estimasi pengerjaan: <strong>{currentService.deliveryDays}</strong></span>
                </div>
              </div>

              <a
                href={generateWhatsAppConsultationUrl(currentService.title, `Saya ingin memesan paket ${currentService.title} seharga mulai ${formatRupiah(currentService.startingPrice)}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#2C29FF] hover:bg-[#1E1BEE] text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pesan Paket Ini via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
