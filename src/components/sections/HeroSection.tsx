import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  return (
    <motion.section 
      id="hero_section" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl bg-linear-to-br from-[#121625]/85 via-[#0B0E14]/95 to-[#121625]/85 border border-white/5 p-8 sm:p-12 overflow-hidden backdrop-blur-sm shadow-[0_15px_50px_-15px_rgba(0,112,243,0.12)]"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-bl from-[#0070F3]/8 via-[#8B5CF6]/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="relative max-w-3xl space-y-6">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.12]">
          <span className="bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-md">
            A energia e precisão da marca NEXA em suas mãos.
          </span>
        </h2>
        
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
          Bem-vindo ao centro oficial de diretrizes de marca. Se você é um designer parceiro, criador de conteúdo, assessor ou desenvolvedor, este portal fornece todos os logotipos oficiais organizados por finalidade, além de paletas exatas de cores, tipografia recomendada e um documento instrucional otimizado para Inteligências Artificiais.
        </p>

        <div className="pt-2 flex flex-wrap gap-y-3 gap-x-8 text-xs">
          <div className="flex items-center gap-2.5 text-gray-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#0070F3] shadow-[0_0_10px_#0070F3]" />
            <span>Cores Oficiais RGB / HEX</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
            <span>Vetores Puros (SVG)</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span>Instruções Prontas para IAs</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
