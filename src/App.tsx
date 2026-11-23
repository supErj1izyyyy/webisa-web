import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WorkflowSection } from './components/WorkflowSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with poster quotes and floating interactive preview */}
        <Hero />

        {/* 2. Official 5 Services from Poster */}
        <ServicesSection />

        {/* 3. Trusted By / Portfolio Showcase (Treedible Case Study) */}
        <PortfolioSection />

        {/* 4. Interactive Project Budget Estimator */}
        <ProjectEstimator />

        {/* 5. 4-Step Agile Workflow */}
        <WorkflowSection />

        {/* 6. About Webisa (Story & Technopreneur values) */}
        <AboutSection />

        {/* 7. FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
