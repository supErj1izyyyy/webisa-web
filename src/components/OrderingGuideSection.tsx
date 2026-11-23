import React from 'react';
import { generateWhatsAppConsultationUrl } from '../config/site';
import { ArrowRight, FileText, CreditCard, Rocket, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export const OrderingGuideSection: React.FC = () => {
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
      icon: WhatsAppIcon,
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
      title: 'Proses Pengerjaan & Review',
      desc: 'Kami mengerjakan website dengan arsitektur modern dan visual interaktif. Kamu mendapatkan link preview demo langsung untuk ditinjau.',
      icon: CreditCard,
      color: '#FF1E27',
    },
    {
      number: '5',
      title: 'Revisi & Website Siap Live!',
      desc: 'Setelah penyesuaian akhir selesai, website langsung kami online-kan ke domain kustommu dan siap mendatangkan pelanggan.',
      icon: Rocket,
      color: '#00B349',
    },
  ];

  return (
    <section id="cara-pesan" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#2C29FF] border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Panduan Pelanggan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bagaimana <span className="font-serif italic text-[#2C29FF]">Cara Pemesanan</span> di Webisa?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Proses pemesanan sangat mudah, transparan, dan tanpa ribet. Cukup 5 langkah santai dari konsultasi awal hingga websitemu live.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.number}
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-700 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-slate-900 tracking-tight mb-2">
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

        {/* Clean Consultation Call-to-Action Banner */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/50 border-2 border-slate-200 text-center space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Siap Bikin Websitemu Naik Level?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Diskusikan kebutuhan website bisnismu langsung dengan kami. Konsultasi 100% gratis, respons cepat, dan tanpa komitmen awal.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#00B349] hover:bg-[#00963e] text-white text-xs font-black shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Mulai Konsultasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
