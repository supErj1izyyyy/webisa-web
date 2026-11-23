import React, { useState } from 'react';
import { FAQS, generateWhatsAppConsultationUrl } from '../config/site';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00B349]/10 text-[#00B349] dark:bg-[#00B349]/20 dark:text-[#2CE075] border border-[#00B349]/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab Seputar Webisa
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Pertanyaan yang <span className="font-quote italic text-[#FF2E93]">Sering Diajukan</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Hal-hal mendasar yang biasanya ingin diketahui calon klien sebelum memulai pembuatan website bersama kami.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-[#2C29FF] dark:hover:text-[#7674FF] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#2C29FF]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 text-center space-y-3 border border-slate-200 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Punya pertanyaan lain yang belum terjawab di atas?
          </p>
          <a
            href={generateWhatsAppConsultationUrl('Tanya Jawab Khusus')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C29FF] text-white text-xs font-bold hover:bg-[#1E1BEE] transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tanya Langsung Tim Webisa</span>
          </a>
        </div>

      </div>
    </section>
  );
};
