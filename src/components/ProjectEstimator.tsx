import React, { useState } from 'react';
import { SERVICES, formatRupiah, SITE_CONFIG } from '../config/site';
import type { ServiceTypeKey } from '../types';
import { Calculator, MessageSquare, Clock, ShieldCheck, Zap } from 'lucide-react';

export const ProjectEstimator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceTypeKey>('landing');
  const [pageCount, setPageCount] = useState<number>(1);
  const [interactiveTier, setInteractiveTier] = useState<'clean' | 'interactive' | 'custom3d'>('interactive');
  
  // Add-ons
  const [addonCms, setAddonCms] = useState(false);
  const [addonSeo, setAddonSeo] = useState(true);
  const [addonPayment, setAddonPayment] = useState(false);
  const [addonFastDelivery, setAddonFastDelivery] = useState(false);

  // Compute Base
  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  let calculatedCost = currentService.startingPrice;

  // Additional pages calculation (beyond 1 for landing, or beyond 4 for company)
  const basePagesIncluded = selectedService === 'landing' ? 1 : 4;
  const extraPages = Math.max(0, pageCount - basePagesIncluded);
  const extraPagesCost = extraPages * 100000;
  calculatedCost += extraPagesCost;

  // Interactive tier
  let interactiveCost = 0;
  if (interactiveTier === 'interactive') interactiveCost = 200000;
  if (interactiveTier === 'custom3d') interactiveCost = 650000;
  calculatedCost += interactiveCost;

  // Add-ons cost
  let addonsCost = 0;
  if (addonCms) addonsCost += 300000;
  if (addonSeo) addonsCost += 150000;
  if (addonPayment) addonsCost += 350000;
  if (addonFastDelivery) addonsCost += 250000;
  calculatedCost += addonsCost;

  // Estimated Days
  let estimatedDays = 5;
  if (selectedService === 'company') estimatedDays = 7;
  if (selectedService === 'ecommerce') estimatedDays = 10;
  if (selectedService === 'portfolio') estimatedDays = 5;
  if (selectedService === 'custom') estimatedDays = 14;
  if (extraPages > 3) estimatedDays += 2;
  if (addonFastDelivery) estimatedDays = Math.max(3, estimatedDays - 3);

  // Handle WhatsApp Checkout
  const handleSendWhatsApp = () => {
    const phone = SITE_CONFIG.whatsappNumber;
    const addonsList: string[] = [];
    if (addonCms) addonsList.push('CMS Admin Panel (+Rp 300rb)');
    if (addonSeo) addonsList.push('Optimasi SEO Google (+Rp 150rb)');
    if (addonPayment) addonsList.push('Payment Gateway Otomatis (+Rp 350rb)');
    if (addonFastDelivery) addonsList.push('Express Fast Delivery (+Rp 250rb)');

    const message = `Halo Tim Webisa, saya telah menghitung estimasi project di website dan ingin konsultasi lebih lanjut:

Jenis Website: ${currentService.title}
Perkiraan Halaman: ${pageCount} Halaman
Tingkat Interaktivitas: ${
      interactiveTier === 'clean'
        ? 'Clean Standard'
        : interactiveTier === 'interactive'
        ? 'Micro-Interactions & Animasi'
        : 'Interactive 3D / WebGL Canvas'
    }
Fitur Tambahan: ${addonsList.length > 0 ? addonsList.join(', ') : 'Tidak ada'}
Estimasi Biaya: ${formatRupiah(calculatedCost)}
Estimasi Waktu: ±${estimatedDays} Hari Kerja

Apakah jadwal pengerjaan untuk minggu ini masih tersedia? Terima kasih!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#FAFAFE] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2C29FF]/10 text-[#2C29FF] border border-[#2C29FF]/20 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparansi Biaya Webisa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Kalkulator & <span className="font-quote italic text-[#2C29FF]">Estimator Biaya Project</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Dapatkan gambaran anggaran transparan sesuai kebutuhan bisnismu secara instan sebelum memulai konsultasi resmi bersama developer kami.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-7">
            
            {/* Step 1: Jenis Website */}
            <div>
              <label className="text-sm font-bold text-slate-900 flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2C29FF] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Pilih Kategori Website
                </span>
                <span className="text-xs text-[#00B349] font-bold">Tersedia 5 Tipe</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.map((s) => {
                  const isSelected = selectedService === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#2C29FF] bg-blue-50/80 text-slate-900 shadow-xs ring-2 ring-[#2C29FF]'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm">{s.title}</span>
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#2C29FF]" />}
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1 line-clamp-1">
                        {s.tagline}
                      </span>
                      <span className="text-xs font-bold text-[#2C29FF] block mt-2">
                        Mulai {formatRupiah(s.startingPrice)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Perkiraan Jumlah Halaman */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2C29FF] text-white text-xs flex items-center justify-center font-bold">2</span>
                  Perkiraan Jumlah Halaman: <span className="text-[#2C29FF] font-black">{pageCount} Halaman</span>
                </label>
                <span className="text-xs text-slate-500 font-semibold">
                  {pageCount === 1 ? 'Single Page' : pageCount <= 5 ? 'Multi-page Standar' : 'Portal Lengkap'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={pageCount}
                onChange={(e) => setPageCount(Number(e.target.value))}
                className="w-full accent-[#2C29FF] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-semibold">
                <span>1 Halaman (Landing)</span>
                <span>4-5 Halaman (Company Profile)</span>
                <span>10+ Halaman (Katalog Besar)</span>
              </div>
            </div>

            {/* Step 3: Tingkat Interaktivitas */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#2C29FF] text-white text-xs flex items-center justify-center font-bold">3</span>
                Tingkat Interaktivitas & Visual
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'clean', label: 'Clean Standard', desc: 'Layout bersih, cepat, tanpa animasi rumit', cost: 0 },
                  { id: 'interactive', label: 'Micro-Interactions', desc: 'Animasi hover halus & transisi modern (Rekomendasi)', cost: 200000 },
                  { id: 'custom3d', label: '3D / WebGL Engine', desc: 'Kanvas 3D interaktif Three.js seperti Treedible', cost: 650000 },
                ].map((tier) => {
                  const isSelected = interactiveTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setInteractiveTier(tier.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#00B349] bg-emerald-50 text-slate-900 ring-2 ring-[#00B349]'
                          : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-bold text-xs block">{tier.label}</span>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{tier.desc}</p>
                      <span className="text-[11px] font-bold text-[#00B349] block mt-2">
                        {tier.cost === 0 ? 'Sudah Termasuk' : `+${formatRupiah(tier.cost)}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Fitur Tambahan (Add-ons) */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#2C29FF] text-white text-xs flex items-center justify-center font-bold">4</span>
                Fitur Tambahan (Opsional)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { state: addonCms, setter: setAddonCms, label: 'Dashboard CMS Admin', desc: 'Bisa update materi tulisan sendiri', price: 300000 },
                  { state: addonSeo, setter: setAddonSeo, label: 'Optimasi SEO Google', desc: 'Setup meta-tags & sitemap terindeks', price: 150000 },
                  { state: addonPayment, setter: setAddonPayment, label: 'Payment Gateway Otomatis', desc: 'QRIS, VA Bank, kartu kredit', price: 350000 },
                  { state: addonFastDelivery, setter: setAddonFastDelivery, label: 'Paket Kilat (Fast Track)', desc: 'Prioritas pengerjaan 2x lebih cepat', price: 250000 },
                ].map((addon, i) => (
                  <label
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                      addon.state
                        ? 'border-[#2C29FF] bg-blue-50/60 ring-1 ring-[#2C29FF]'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={addon.state}
                      onChange={(e) => addon.setter(e.target.checked)}
                      className="mt-0.5 accent-[#2C29FF] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block">{addon.label}</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">{addon.desc}</span>
                      <span className="text-[11px] font-bold text-[#2C29FF] block mt-1">
                        +{formatRupiah(addon.price)}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Card: 5 cols (Bright Modern Card) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-slate-200 space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#00B349]">
                  ✦ Estimasi Rincian Biaya
                </span>
                <span className="text-xs font-bold bg-blue-50 text-[#2C29FF] px-2.5 py-1 rounded-full border border-blue-200">
                  Webisa Studio
                </span>
              </div>

              {/* Breakdown list */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Paket Dasar ({currentService.title}):</span>
                  <span className="font-bold text-slate-900">{formatRupiah(currentService.startingPrice)}</span>
                </div>

                {extraPages > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tambahan {extraPages} Halaman:</span>
                    <span className="font-bold text-slate-900">+{formatRupiah(extraPagesCost)}</span>
                  </div>
                )}

                {interactiveCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tingkat Interaktivitas:</span>
                    <span className="font-bold text-slate-900">+{formatRupiah(interactiveCost)}</span>
                  </div>
                )}

                {addonsCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Fitur Tambahan (Add-ons):</span>
                    <span className="font-bold text-slate-900">+{formatRupiah(addonsCost)}</span>
                  </div>
                )}
              </div>

              {/* Total Price Display */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-100">
                <span className="text-xs text-slate-500 block font-bold">Perkiraan Investasi Total</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-3xl font-black text-[#2C29FF] font-mono tracking-tight">
                    {formatRupiah(calculatedCost)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#00B349] mt-2 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimasi waktu pengerjaan: ±{estimatedDays} Hari Kerja</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-4 bg-[#2C29FF] hover:bg-[#1E1BEE] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Rincian Ini ke WhatsApp Tim</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-1 flex items-center justify-center gap-4 text-[11px] text-slate-500 border-t border-slate-100 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B349]" /> Garansi Revisi
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Free Hosting Setup
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center px-3">
              *Estimasi di atas bersifat fleksibel. Biaya final disepakati bersama dalam proposal resmi setelah brief materi dikonfirmasi.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
