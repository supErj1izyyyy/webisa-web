import React, { useState } from 'react';
import { SERVICES, formatRupiah, generateWhatsAppConsultationUrl } from '../config/site';
import type { ServiceTypeKey } from '../types';
import { Check, ArrowUpRight, Sparkles, Clock, ShieldCheck, Flame, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ServiceTypeKey>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = selectedFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === selectedFilter);

  // Map each service to its brand shape glyph from Webisa_Asset Poster
  const serviceGlyphs: Record<string, string> = {
    landing: './assets/shape-star.png',
    company: './assets/shape-asterisk.png',
    ecommerce: './assets/shape-leaf.png',
    portfolio: './assets/shape-asterisk.png',
    custom: './assets/shape-star.png'
  };

  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#FAFAFE] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00B349]/10 text-[#00B349] border border-[#00B349]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Layanan Resmi Webisa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Pilihan Solusi Website untuk <span className="font-serif italic text-[#2C29FF]">Bisnis Masa Kini</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Dari landing page penjualan instan hingga aplikasi web custom berkemampuan interaktif tinggi. Semua dikerjakan dengan standar visual modern dan mobile-first.
          </p>

          {/* Interactive Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#2C29FF] text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Semua Layanan (5)
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedFilter(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                  selectedFilter === s.id
                    ? 'bg-[#2C29FF] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredServices.map((service) => {
            const isPopular = service.badge === 'Paling Populer';
            const isExpanded = expandedService === service.id;
            const glyph = serviceGlyphs[service.id] || './assets/shape-star.png';

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white ${
                  isPopular
                    ? 'border-2 border-[#2C29FF] shadow-xl hover:-translate-y-1'
                    : 'border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-1'
                }`}
              >
                {/* Popular / Special Badge */}
                {service.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-sm flex items-center gap-1 ${
                      isPopular ? 'bg-[#2C29FF]' : 'bg-[#FF1E27]'
                    }`}>
                      <Flame className="w-3 h-3" />
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Title with Official Shape Glyph */}
                  <div className="flex items-center gap-2 mb-2">
                    <img src={glyph} alt="" className="w-5 h-5 object-contain shrink-0 select-none" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 mb-5">
                    <span className="text-[10px] text-slate-500 block font-semibold">Investasi Mulai Dari</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-[#2C29FF] tracking-tight">
                        {formatRupiah(service.startingPrice)}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">/ project</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#00B349] mt-2 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Estimasi pengerjaan: {service.deliveryDays}</span>
                    </div>
                  </div>

                  {/* Benefit Items */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-800 block">
                      Keunggulan Paket:
                    </span>
                    {service.benefits.slice(0, isExpanded ? service.benefits.length : 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#00B349] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                    {service.benefits.length > 3 && (
                      <button
                        type="button"
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className="text-[11px] font-bold text-[#2C29FF] hover:underline pt-1 block cursor-pointer"
                      >
                        {isExpanded ? 'Sembunyikan Rincian' : `+ Lihat ${service.benefits.length - 3} Rincian Lainnya`}
                      </button>
                    )}
                  </div>

                  {/* Recommended For */}
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 mb-6">
                    <strong className="text-slate-800">Ideal untuk:</strong> {service.recommendedFor}
                  </div>
                </div>

                {/* Direct Action Button */}
                <a
                  href={generateWhatsAppConsultationUrl(service.title, `Saya ingin konsultasi paket ${service.title} (mulai ${formatRupiah(service.startingPrice)})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer ${
                    isPopular
                      ? 'bg-[#2C29FF] hover:bg-[#1E1BEE] text-white shadow-md'
                      : 'bg-slate-900 hover:bg-[#2C29FF] text-white'
                  }`}
                >
                  <span>Pesan Layanan Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2C29FF] flex items-center justify-center shrink-0 border border-blue-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Punya Ide Desain Unik atau Fitur Kustom?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Konsultasikan ide liarmu langsung dengan developer kami. Kami buatkan arsitektur dan estimasi gratis.
              </p>
            </div>
          </div>
          <a
            href={generateWhatsAppConsultationUrl('Custom Website Spesifik')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-[#00B349] hover:bg-[#00963e] text-white text-xs font-extrabold flex items-center gap-2 shrink-0 shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <span>Konsultasi Ide Khusus</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
