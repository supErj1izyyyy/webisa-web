import React from 'react';
import { SITE_CONFIG, generateWhatsAppConsultationUrl } from '../config/site';
import { MessageSquare, Calculator, Sparkles, ArrowRight, CheckCircle2, Laptop, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#2C29FF]/10 via-[#00B349]/10 to-[#FF2E93]/10 blur-3xl -z-10 rounded-full pointer-events-none" />
      
      {/* Floating Decorative Starbursts */}
      <img
        src="./images/starburst-blue.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-20 left-4 md:left-16 w-12 h-12 md:w-16 md:h-16 animate-spin-slow opacity-80 pointer-events-none"
      />
      <img
        src="./images/starburst-red.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-36 right-6 md:right-24 w-10 h-10 md:w-14 md:h-14 animate-spin-slow opacity-75 pointer-events-none"
      />
      <img
        src="./images/starburst-pink.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-12 left-10 md:left-32 w-8 h-8 md:w-12 md:h-12 animate-spin-slow opacity-70 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2C29FF]/10 text-[#2C29FF] dark:bg-[#2C29FF]/20 dark:text-[#7674FF] border border-[#2C29FF]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#2C29FF] dark:text-[#7674FF]" />
                Jasa Pembuatan Website Malang
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Modern • Interactive • Custom
              </span>
            </div>

            {/* Poster Signature Headline */}
            <div>
              <p className="font-quote text-2xl sm:text-3xl md:text-4xl text-[#FF1E27] dark:text-[#FF4A52] font-black italic tracking-tight mb-2">
                “Bisnismu udah keren,
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                Masa Websitemu <span className="font-quote italic text-[#2C29FF] dark:text-[#5250FF] underline decoration-[#00B349] decoration-wavy decoration-2">jadul?</span>”
              </h1>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-medium">
              Bikin website dengan visual interaktif yang bikin betah customer. Ubah pengunjung biasa menjadi pelanggan setia lewat tampilan profesional, cepat, dan terpercaya.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700 dark:text-slate-300 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Desain Stand Out</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={generateWhatsAppConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Project Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm transition-all border border-slate-300 dark:border-slate-700 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#00B349]" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Instagram Social Proof Link */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span>Follow portofolio & update harian kami di:</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FF2E93] hover:underline flex items-center gap-1"
              >
                {SITE_CONFIG.instagramHandle}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Floating Interactive Mockup Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2C29FF] via-[#00B349] to-[#FF2E93] rounded-3xl blur-lg opacity-40 animate-pulse" />

              {/* Mockup Card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-all">
                
                {/* Browser Top Bar */}
                <div className="bg-slate-100 dark:bg-slate-800/90 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono bg-white dark:bg-slate-900 px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    <span>webisa.vercel.app/treedible</span>
                  </div>
                  <Laptop className="w-3.5 h-3.5 text-slate-400" />
                </div>

                {/* Card Content: Screenshot of Treedible 3D Printing Service */}
                <div className="p-4 bg-slate-50/50 dark:bg-slate-950/50 space-y-3">
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group">
                    <img
                      src="./images/treedible-calculator.png"
                      alt="Treedible 3D Printing Showcase"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-slate-900/85 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs border border-slate-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live WebGL Engine
                    </div>
                  </div>

                  {/* Client Badge */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C29FF] dark:text-[#7674FF] block">
                        ✦ Featured Client Prototyping
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Treedible 3D Printing Service
                      </h4>
                    </div>
                    <a
                      href="https://supErj1izyyyy.github.io/treedible-web/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#00B349] hover:underline inline-flex items-center gap-1"
                    >
                      Buka Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Feature Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] px-2 py-0.5 bg-blue-50 dark:bg-blue-950/50 text-[#2C29FF] dark:text-blue-300 rounded font-medium border border-blue-200 dark:border-blue-900">
                      3D Slicing Estimator
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-[#00B349] dark:text-emerald-300 rounded font-medium border border-emerald-200 dark:border-emerald-900">
                      Gramasi Otomatis
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded font-medium border border-purple-200 dark:border-purple-900">
                      React 19 + Three.js
                    </span>
                  </div>
                </div>

                {/* Bottom Trust bar */}
                <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Hasil karya tim pengembang Webisa Malang</span>
                  <span className="text-[#00B349] font-bold">100% Custom Made</span>
                </div>
              </div>

              {/* Floating Starburst Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#FF1E27] text-white p-3 rounded-2xl shadow-xl transform -rotate-6 hidden sm:flex items-center gap-2">
                <span className="font-quote text-lg font-bold">Next Level!</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
