import React from 'react';
import { WORKFLOW_STEPS } from '../config/site';
import { Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="alur-kerja" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2C29FF]/10 text-[#2C29FF] border border-[#2C29FF]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Alur Pengerjaan Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bagaimana Website Kerenmu <span className="font-quote italic text-[#00B349]">Diciptakan?</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Tanpa birokrasi berbelit. Kami mengadopsi alur agile yang cepat, terbuka, dan memastikan hasil akhir sesuai visi bisnismu.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, index) => {
            const colors = ['#2C29FF', '#00B349', '#FF1E27', '#FF2E93'];
            const accent = colors[index % colors.length];

            return (
              <div
                key={step.step}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group hover:border-slate-300"
              >
                {/* Accent Top Border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                  style={{ backgroundColor: accent }}
                />

                <div>
                  {/* Step Number & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-3xl font-black font-mono tracking-tight"
                      style={{ color: accent }}
                    >
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-xs">
                      <Clock className="w-3 h-3 text-[#00B349]" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-200 bg-white -mx-6 -mb-6 p-6 rounded-b-3xl">
                  <span className="text-[11px] font-bold text-slate-800 block mb-2">
                    Output Fase Ini:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B349] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
