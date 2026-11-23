import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesSection } from './components/ServicesSection';
import { OrderingGuideSection } from './components/OrderingGuideSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#2C29FF] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections: Pengenalan -> Cara Pemesanan -> Alur Pemesanan -> FAQ */}
      <main className="flex-1">
        {/* 1. Pengenalan Webisa & Headline Poster */}
        <Hero />

        {/* Nilai Tambah: Web Jadul vs Standar Webisa */}
        <BeforeAfterSection />

        {/* 5 Layanan Utama Sesuai Poster */}
        <ServicesSection />

        {/* 2. Bagaimana Cara Pemesanan */}
        <OrderingGuideSection />

        {/* 3. Alur Pemesanan & Pengerjaan (Timeline) */}
        <WorkflowSection />

        {/* 4. FAQ (Tanya Jawab Seputar Pemesanan) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
