import React, { useState } from 'react';
import { Copy, Download, Sliders } from 'lucide-react';
import { motion } from 'motion/react';
import { LogoAsset } from '../../types/brand';

interface LogoCardProps {
  logo: LogoAsset;
  index: number;
  onSelectForExport: (logo: LogoAsset) => void;
}

export const LogoCard: React.FC<LogoCardProps> = ({ logo, index, onSelectForExport }) => {
  const [bgPref, setBgPref] = useState<'dark' | 'light' | 'grid'>(logo.bgPreference);
  const [copied, setCopied] = useState<boolean>(false);

  const hoverGlowClass = logo.id.includes('light') 
    ? 'neon-glow-pink' 
    : logo.id.includes('dark') 
    ? 'neon-glow-cyan' 
    : 'neon-glow-purple';

  const handleCopy = async () => {
    try {
      if (logo.path.endsWith('.png')) {
        await navigator.clipboard.writeText(window.location.origin + logo.path);
      } else {
        const response = await fetch(logo.path);
        const svgText = await response.text();
        await navigator.clipboard.writeText(svgText);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy asset:', err);
    }
  };

  return (
    <motion.div 
      id={`card_${logo.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={`relative bg-[#0F121D]/90 rounded-2xl border border-white/5 p-5 flex flex-col justify-between transition-all duration-300 group shadow-lg shadow-black/30 ${hoverGlowClass}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300 font-bold uppercase tracking-wider">
            {logo.type}
          </span>
          
          <div className="flex items-center gap-1 p-0.5 bg-black/50 border border-white/5 rounded-lg">
            <button
              onClick={() => setBgPref('dark')}
              className={`p-1 rounded-md text-xs transition-all ${bgPref === 'dark' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              title="Fundo Escuro"
            >
              <div className="w-2.5 h-2.5 bg-[#0B0E14] rounded-sm border border-white/5" />
            </button>
            <button
              onClick={() => setBgPref('light')}
              className={`p-1 rounded-md text-xs transition-all ${bgPref === 'light' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              title="Fundo Claro"
            >
              <div className="w-2.5 h-2.5 bg-white rounded-sm border border-gray-200" />
            </button>
            <button
              onClick={() => setBgPref('grid')}
              className={`p-1 rounded-md text-xs transition-all ${bgPref === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              title="Fundo Transparente (Grade)"
            >
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-sm border border-gray-400 relative overflow-hidden flex flex-wrap" style={{ width: '10px', height: '10px' }}>
                <div className="w-1/2 h-1/2 bg-gray-500" />
                <div className="w-1/2 h-1/2 bg-white" />
                <div className="w-1/2 h-1/2 bg-white" />
                <div className="w-1/2 h-1/2 bg-gray-500" />
              </div>
            </button>
          </div>
        </div>

        <div 
          className={`h-40 rounded-xl flex items-center justify-center p-6 border transition-all duration-300 relative overflow-hidden ${
            bgPref === 'dark' 
              ? 'bg-[#0B0E14] border-white/5' 
              : bgPref === 'light' 
              ? 'bg-white border-gray-200' 
              : 'checkered-bg border-white/5'
          }`}
        >
          <img 
            src={logo.path} 
            alt={logo.name} 
            className="max-h-full max-w-full object-contain pointer-events-none transition-transform group-hover:scale-105 duration-500"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight line-clamp-1">
            {logo.name}
          </h4>
          <p className="text-xs text-gray-400 line-clamp-2 h-8 leading-normal">
            {logo.desc}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
        <button
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
          title={logo.path.endsWith('.png') ? "Copiar caminho do arquivo" : "Copiar código SVG"}
        >
          <Copy className="w-3.5 h-3.5" />
          <span>{copied ? 'Copiado!' : (logo.path.endsWith('.png') ? 'Copiar Caminho' : '')}</span>
        </button>

        <a
          href={logo.path}
          download={logo.path.split('/').pop()}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-linear-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 text-xs font-semibold text-white hover:text-cyan-300 transition-all cursor-pointer"
          title={logo.path.endsWith('.png') ? "Baixar imagem original" : "Baixar arquivo SVG original"}
        >
          <Download className="w-3.5 h-3.5" />
          <span>{logo.path.endsWith('.png') ? 'Baixar PNG' : 'SVG'}</span>
        </a>

        <button
          onClick={() => onSelectForExport(logo)}
          className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/5 text-gray-400 hover:text-cyan-400 transition-all cursor-pointer"
          title={logo.path.endsWith('.png') ? "Baixar imagem original diretamente" : "Exportar para PNG personalizado"}
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
