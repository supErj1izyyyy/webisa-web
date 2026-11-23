import React from 'react';
import { PORTFOLIO_PROJECTS } from '../config/site';
import { ExternalLink, CheckCircle2, Box, Cpu, Sparkles, Layers } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const featured = PORTFOLIO_PROJECTS[0];

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF2E93]/10 text-[#FF2E93] dark:bg-[#FF2E93]/20 dark:text-[#FF5CA8] border border-[#FF2E93]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portofolio & Rekam Jejak
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Karya Nyata yang <span className="font-quote italic text-[#00B349] dark:text-[#10D65D]">Membuktikan Kapabilitas</span> Kami
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Kami tidak hanya menjual janji tampilan bagus. Kami membangun solusi digital berkinerja tinggi yang memecahkan masalah nyata bagi pemilik bisnis.
          </p>
        </div>

        {/* Featured Case Study Card: Treedible */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Project Details & Story (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2C29FF] dark:text-[#7674FF]">
                    ✦ Featured Client Case Study
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Technopreneur Malang
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {featured.title}
                </h3>
              </div>

              {/* The Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong>Tantangan Klien:</strong> Di industri jasa 3D printing Malang, calon customer biasanya harus kirim file manual lewat chat, menunggu admin menyalakan laptop dan software slicer selama berjam-jam hanya untuk tahu estimasi harga cetak.
                </p>
                <p>
                  <strong>Solusi dari Webisa:</strong> Tim Webisa mengembangkan platform web interaktif berbasis <strong>React 19 & Three.js WebGL</strong>. Customer cukup unggah file <code>.STL</code> atau <code>.OBJ</code> langsung di browser. Sistem otomatis membaca dimensi, membedah volume geometris, menghitung gramasi filament, dan menampilkan harga transparan seketika.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Fitur Unggulan yang Diterapkan:
                </span>
                {featured.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00B349] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Link Button */}
              <div className="pt-2">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-[#2C29FF] dark:hover:bg-[#5250FF] dark:hover:text-white transition-all shadow-md"
                >
                  <Box className="w-4 h-4 text-[#00B349]" />
                  <span>Uji Coba Live Website Treedible</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md bg-white dark:bg-slate-800 group">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#2C29FF]" />
                    Client-Side 3D Slicing Engine
                  </span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
                    100% Real-time
                  </span>
                </div>
                <img
                  src="./images/treedible-calculator.png"
                  alt="Treedible 3D Slicing Calculator Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Secondary Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800 group">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#FF2E93]" />
                    Hero & Hardware Showcase Section
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Bambu Lab P1S Spec
                  </span>
                </div>
                <img
                  src="./images/treedible-hero.png"
                  alt="Treedible Hero Showcase Section"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
