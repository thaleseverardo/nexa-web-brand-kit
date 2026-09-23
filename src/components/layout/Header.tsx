import React from 'react';
import { Download } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header id="header_section" className="border-b border-white/5 bg-[#0B0E14]/85 backdrop-blur-xl sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#121625] border border-white/10 flex items-center justify-center shadow-lg shadow-purple-500/5 shrink-0 p-1.5 bg-linear-to-br from-[#121625] to-[#0B0E14] hover:border-purple-500/40 transition-all duration-300">
            <img 
              src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} 
              alt="NEXA Isomark" 
              className="w-full h-full object-contain pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-white tracking-tight leading-tight flex items-center gap-2">
              NEXA <span className="text-[10px] tracking-widest px-2 py-0.5 bg-linear-to-r from-[#0070F3] to-[#8B5CF6] rounded-full text-white font-extrabold font-mono">BRAND KIT</span>
            </h1>
            <p className="text-[9px] text-gray-400 uppercase tracking-[0.25em] font-semibold">Guia Oficial</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-wider font-semibold">
          <a href="#logos_section" className="text-gray-400 hover:text-[#0070F3] transition-all duration-300 hover:-translate-y-px">Logotipos</a>
          <a href="#mockup_sandbox_section" className="text-gray-400 hover:text-[#0070F3] transition-all duration-300 hover:-translate-y-px">Mockups</a>
          <a href="#colors_section" className="text-gray-400 hover:text-[#8B5CF6] transition-all duration-300 hover:-translate-y-px">Cores</a>
          <a href="#typography_section" className="text-gray-400 hover:text-[#8B5CF6] transition-all duration-300 hover:-translate-y-px">Tipografia</a>
          <a href="#rules_section" className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-px">Boas Práticas</a>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <a 
            id="download_md_top_btn"
            href={`${import.meta.env.BASE_URL}identidade_visual_nexa.md`} 
            download="identidade_visual_nexa.md"
            className="px-3.5 py-1.5 bg-linear-to-r from-[#0070F3] to-[#8B5CF6] hover:opacity-95 rounded-lg text-xs font-bold text-white transition-all shadow-md shadow-blue-500/10 border border-white/10 flex items-center gap-1.5 cursor-pointer active:scale-95 hover:shadow-[0_0_15px_rgba(0,112,243,0.2)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Guia (.md)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
