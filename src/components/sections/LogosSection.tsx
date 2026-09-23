import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { LogoAsset } from '../../types/brand';
import { LOGO_ASSETS } from '../../constants/brandLogos';
import { LogoCard } from '../logos/LogoCard';

interface LogosSectionProps {
  onSelectForExport: (logo: LogoAsset) => void;
}

export const LogosSection: React.FC<LogosSectionProps> = ({ onSelectForExport }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [logoSearch, setLogoSearch] = useState<string>('');

  const filteredLogos = LOGO_ASSETS.filter(logo => {
    const matchesCategory = activeCategory === 'all' || logo.category === activeCategory;
    const matchesSearch = logoSearch.trim() === '' || 
      logo.name.toLowerCase().includes(logoSearch.toLowerCase()) || 
      logo.type.toLowerCase().includes(logoSearch.toLowerCase()) || 
      logo.desc.toLowerCase().includes(logoSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="logos_section" className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/5 pb-6 mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-bold mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] shadow-[0_0_6px_#0070F3]" />
            <span>01. REPOSITÓRIO</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            Logotipos Oficiais
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
            Nossos logos foram desenhados para ter máxima legibilidade. Filtre de acordo com o contexto ou utilize nosso exportador avançado para obter resoluções sob medida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto self-start lg:self-end">
          <div className="relative w-full sm:w-64 shrink-0">
            <input 
              id="logo_search_input"
              type="text"
              placeholder="Buscar logo..."
              value={logoSearch}
              onChange={(e) => setLogoSearch(e.target.value)}
              className="w-full bg-[#0F121D] border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
            {logoSearch && (
              <button 
                onClick={() => setLogoSearch('')}
                className="absolute right-2.5 top-2.5 text-gray-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1 p-1 bg-black/40 border border-white/5 rounded-xl">
            <button 
              id="filter_all"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === 'all' ? 'bg-[#1e2335] text-white border border-white/10 shadow-md' : 'text-gray-400 hover:text-white border border-transparent'}`}
            >
              Todos <span className="text-[10px] opacity-60 ml-0.5 font-mono font-normal">({LOGO_ASSETS.length})</span>
            </button>
            <button 
              id="filter_core"
              onClick={() => setActiveCategory('core')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === 'core' ? 'bg-[#1e2335] text-white border border-white/10 shadow-md' : 'text-gray-400 hover:text-white border border-transparent'}`}
            >
              Geral <span className="text-[10px] opacity-60 ml-0.5 font-mono font-normal">({LOGO_ASSETS.filter(l => l.category === 'core').length})</span>
            </button>
            <button 
              id="filter_cnc"
              onClick={() => setActiveCategory('cnc')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === 'cnc' ? 'bg-[#1e2335] text-white border border-white/10 shadow-md' : 'text-gray-400 hover:text-white border border-transparent'}`}
            >
              CNC <span className="text-[10px] opacity-60 ml-0.5 font-mono font-normal">({LOGO_ASSETS.filter(l => l.category === 'cnc').length})</span>
            </button>
            <button 
              id="filter_print"
              onClick={() => setActiveCategory('print')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === 'print' ? 'bg-[#1e2335] text-white border border-white/10 shadow-md' : 'text-gray-400 hover:text-white border border-transparent'}`}
            >
              Print <span className="text-[10px] opacity-60 ml-0.5 font-mono font-normal">({LOGO_ASSETS.filter(l => l.category === 'print').length})</span>
            </button>
            <button 
              id="filter_web"
              onClick={() => setActiveCategory('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === 'web' ? 'bg-[#1e2335] text-white border border-white/10 shadow-md' : 'text-gray-400 hover:text-white border border-transparent'}`}
            >
              Web <span className="text-[10px] opacity-60 ml-0.5 font-mono font-normal">({LOGO_ASSETS.filter(l => l.category === 'web').length})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLogos.map((logo, index) => (
          <LogoCard 
            key={logo.id} 
            logo={logo} 
            index={index} 
            onSelectForExport={onSelectForExport} 
          />
        ))}
      </div>
    </section>
  );
};
