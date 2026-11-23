import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../config/site';
import { ExternalLink, CheckCircle2, Box, Cpu, Sparkles, Layers, Eye } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const featured = PORTFOLIO_PROJECTS[0];
  const [activeImage, setActiveImage] = useState<'calc' | 'hero'>('calc');

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF2E93]/10 text-[#FF2E93] border border-[#FF2E93]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portofolio Unggulan (Trusted By)
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Karya Nyata yang <span className="font-quote italic text-[#00B349]">Membuktikan Kapabilitas</span> Kami
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Kami tidak hanya menjual janji tampilan bagus. Kami membangun solusi digital berkinerja tinggi yang memecahkan masalah nyata bagi pemilik bisnis di Malang dan seluruh Indonesia.
          </p>
        </div>

        {/* Featured Case Study Card: Treedible */}
        <div className="rounded-3xl bg-slate-50 border-2 border-slate-200 p-6 sm:p-10 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Project Details & Story (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2C29FF]">
                    ✦ Featured Client Case Study
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-semibold text-[#00B349]">
                    Technopreneur Malang
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {featured.title}
                </h3>
              </div>

              {/* The Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>Tantangan Klien:</strong> Di industri jasa 3D printing Malang, calon customer biasanya harus kirim file manual lewat chat, menunggu admin membuka software slicer PC selama berjam-jam hanya untuk tahu estimasi harga cetak.
                </p>
                <p>
                  <strong>Solusi dari Webisa:</strong> Tim Webisa mengembangkan platform web interaktif berbasis <strong>React 19 & Three.js WebGL</strong>. Customer cukup unggah file <code>.STL</code> atau <code>.OBJ</code> langsung di browser. Sistem otomatis membaca dimensi, membedah volume geometris, menghitung gramasi filament, dan menampilkan harga transparan seketika.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-slate-900 block">
                  Fitur Unggulan yang Diterapkan:
                </span>
                {featured.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
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
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 font-mono shadow-xs"
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2C29FF] hover:bg-[#1E1BEE] text-white text-xs font-extrabold transition-all shadow-md hover:scale-[1.02]"
                >
                  <Box className="w-4 h-4 text-[#00B349]" />
                  <span>Uji Coba Live Website Treedible</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase with Interactive Screen Switcher (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Interactive Screen Selector */}
              <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-700 pl-2">
                  Pratinjau Layar:
                </span>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveImage('calc')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeImage === 'calc'
                        ? 'bg-[#2C29FF] text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Kalkulator 3D Slicer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage('hero')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeImage === 'hero'
                        ? 'bg-[#00B349] text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Hero Showcase P1S</span>
                  </button>
                </div>
              </div>

              {/* Active Image Display */}
              <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-white group relative">
                <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-800">
                    <Eye className="w-3.5 h-3.5 text-[#2C29FF]" />
                    {activeImage === 'calc' ? 'Client-Side 3D Slicing Engine' : 'Hero & Hardware Spec Section'}
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    100% Real-time
                  </span>
                </div>
                <img
                  src={activeImage === 'calc' ? './images/treedible-calculator.png' : './images/treedible-hero.png'}
                  alt="Treedible 3D Printing Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-slate-600 flex items-center justify-between font-medium">
                <span>Teknologi: React 19 + Three.js + Tailwind CSS</span>
                <span className="text-[#2C29FF] font-bold">Dibuat oleh Webisa</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
