import React, { useState } from 'react';
import { SERVICES, formatRupiah, generateWhatsAppConsultationUrl } from '../config/site';
import type { ServiceTypeKey } from '../types';
import { Check, ArrowUpRight, Sparkles, Clock, ShieldCheck, Flame } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ServiceTypeKey>('all');

  const filteredServices = selectedFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === selectedFilter);

  return (
    <section id="layanan" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00B349]/10 text-[#00B349] dark:bg-[#00B349]/20 dark:text-[#2CE075] border border-[#00B349]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Layanan Resmi Webisa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Pilihan Solusi Website untuk <span className="font-quote italic text-[#2C29FF] dark:text-[#5250FF]">Bisnis Masa Kini</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Mulai dari landing page penjualan instan hingga aplikasi web custom berkemampuan interaktif tinggi. Semua dikerjakan dengan standar visual modern dan mobile-first.
          </p>

          {/* Service Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              Semua Layanan (5)
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedFilter(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === s.id
                    ? 'bg-[#2C29FF] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
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
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white dark:bg-slate-900 border-2 border-[#2C29FF] shadow-xl hover:-translate-y-1'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1'
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
                  {/* Category & Title */}
                  <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 mb-5">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">Mulai Dari</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {formatRupiah(service.startingPrice)}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">/ project</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#00B349]" />
                      <span>Estimasi pengerjaan: <strong>{service.deliveryDays}</strong></span>
                    </div>
                  </div>

                  {/* Benefit Items */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Yang Kamu Dapatkan:
                    </span>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-[#00B349] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended For */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 mb-6">
                    <strong className="text-slate-700 dark:text-slate-300">Cocok untuk:</strong> {service.recommendedFor}
                  </div>
                </div>

                {/* Direct Action Button */}
                <a
                  href={generateWhatsAppConsultationUrl(service.title, `Saya ingin konsultasi paket ${service.title} (mulai ${formatRupiah(service.startingPrice)})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                    isPopular
                      ? 'bg-[#2C29FF] hover:bg-[#1E1BEE] text-white shadow-md'
                      : 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>Pesan Layanan Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Requirement */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#2C29FF]/10 via-[#00B349]/10 to-[#FF2E93]/10 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#2C29FF] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Punya Kebutuhan Website dengan Fitur Khusus?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Konsultasikan ide liarmu langsung dengan developer kami. Kami buatkan proposal dan estimasi gratis.
              </p>
            </div>
          </div>
          <a
            href={generateWhatsAppConsultationUrl('Custom Website Spesifik')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shrink-0 hover:opacity-90 transition-opacity"
          >
            Diskusi Kebutuhan Custom
          </a>
        </div>

      </div>
    </section>
  );
};
