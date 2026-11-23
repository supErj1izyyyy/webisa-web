import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTicker } from './components/InteractiveTicker';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WorkflowSection } from './components/WorkflowSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#2C29FF] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with live interactive sandbox simulator */}
        <Hero />

        {/* 2. Interactive Infinite Marquee Ticker */}
        <InteractiveTicker />

        {/* 3. Interactive Before vs After Comparison */}
        <BeforeAfterSection />

        {/* 4. Official 5 Services from Poster */}
        <ServicesSection />

        {/* 5. Trusted By / Portfolio Showcase (Treedible Case Study with screen switcher) */}
        <PortfolioSection />

        {/* 6. Interactive Project Budget Estimator */}
        <ProjectEstimator />

        {/* 7. 4-Step Agile Workflow */}
        <WorkflowSection />

        {/* 8. About Webisa (Story & Technopreneur values) */}
        <AboutSection />

        {/* 9. FAQ Accordions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
