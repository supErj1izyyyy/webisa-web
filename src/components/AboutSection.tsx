import React from 'react';
import { Sparkles, MapPin, Target, Eye, HeartHandshake, Code2, Users2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#FAFAFE] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Mengenal Webisa Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Studio Web Masa Kini dari <span className="font-quote italic text-[#2C29FF]">Kota Malang</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Didirikan oleh mahasiswa technopreneur yang resah melihat banyak bisnis keren tapi websitenya kaku, lambat, atau masih memakai tampilan era lama.
          </p>
        </div>

        {/* 2-Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Story: 6 cols */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#FF1E27]" />
              <span>Berbasis di Malang, Melayani Seluruh Indonesia</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Kenapa Nama Kami <span className="text-[#2C29FF]">Web</span><span className="text-[#00B349]">isa</span>?
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Nama <strong>Webisa</strong> berakar dari kata <em>"Web"</em> dan <em>"Bisa"</em>. Filosofi kami sederhana: kami percaya bahwa setiap pelaku bisnis, UMKM, maupun kreator di era sekarang <strong>bisa memiliki website berkelas dunia</strong> tanpa harus terbebani biaya puluhan juta rupiah.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Kami memadukan estetika desain modern (Neo-creative, tipografi tegas, micro-interactions) dengan performa koding mutakhir (React, Next.js, Three.js) agar websitemu bukan sekadar brosur online mati, melainkan mesin konversi yang memikat customer.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Users2 className="w-4 h-4 text-[#2C29FF]" />
                <span>Technopreneur Muda</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#00B349]" />
                <span>Teknologi Modern</span>
              </div>
            </div>
          </div>

          {/* Right Cards: 6 cols */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-xs hover:border-[#2C29FF] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2C29FF] flex items-center justify-center mb-4 border border-blue-200">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">
                Bukan Template Kaku
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap project kami rancang khusus sesuai persona brand dan target pasarmu. Tidak ada duplikasi template generik yang membosankan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-xs hover:border-[#00B349] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#00B349] flex items-center justify-center mb-4 border border-emerald-200">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">
                Visual Bikin Betah
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Layout proporsional, font berkharisma, dan micro-interaction halus yang membuat calon pembeli nyaman membaca sampai bawah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-xs hover:border-[#FF2E93] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#FF2E93] flex items-center justify-center mb-4 border border-pink-200">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">
                Partner Diskusi Asyik
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami siap mendengarkan kebutuhanmu dengan bahasa santai dan solutif tanpa istilah koding rumit yang membingungkan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-xs hover:border-[#2C29FF] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2C29FF] flex items-center justify-center mb-4 border border-blue-200">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">
                Stand Out & Next Level
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bisnismu layak tampil lebih percaya diri di hadapan calon klien, investor, dan kompetitor dengan web standar industri modern.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
