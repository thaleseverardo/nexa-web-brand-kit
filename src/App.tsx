import React, { useState } from 'react';
import { LogoAsset } from './types/brand';
import { LOGO_ASSETS } from './constants/brandLogos';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { LogosSection } from './components/sections/LogosSection';
import { ExporterSection } from './components/sections/ExporterSection';
import { MockupSandboxSection } from './components/sections/MockupSandboxSection';
import { ColorPaletteSection } from './components/sections/ColorPaletteSection';
import { TypographySection } from './components/sections/TypographySection';
import { RulesSection } from './components/sections/RulesSection';
import { AiPortalSection } from './components/sections/AiPortalSection';

export default function App() {
  const [selectedExportLogo, setSelectedExportLogo] = useState<LogoAsset>(LOGO_ASSETS[0]);

  const handleSelectForExport = (logo: LogoAsset) => {
    setSelectedExportLogo(logo);
    const exporterSection = document.getElementById('exporter_section');
    if (exporterSection) {
      exporterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="brand_kit_app" className="min-h-screen bg-[#0B0E14] text-gray-200 font-sans selection:bg-[#00FFFF]/30 selection:text-[#00FFFF] relative overflow-x-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute top-40 right-1/4 w-150 h-150 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-7000" />
      <div className="absolute top-[30%] left-10 w-100 h-100 bg-pink-600/3 rounded-full blur-[110px] pointer-events-none" />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        <HeroSection />
        <LogosSection onSelectForExport={handleSelectForExport} />
        <ExporterSection 
          selectedLogo={selectedExportLogo} 
          onSelectLogo={setSelectedExportLogo} 
        />
        <MockupSandboxSection />
        <ColorPaletteSection />
        <TypographySection />
        <RulesSection />
        <AiPortalSection />
      </main>

      <Footer />
    </div>
  );
}
