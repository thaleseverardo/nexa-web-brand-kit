import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer_section" className="border-t border-white/5 bg-[#0B0E14]/90 backdrop-blur-md py-12 mt-16 text-center text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex justify-center items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} 
              alt="NEXA" 
              className="w-full h-full object-contain pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-white text-sm tracking-wide">NEXA INDUSTRIAL</span>
        </div>
        <p>© 2026 Nexa. Todos os direitos reservados. Guia oficial de marca para uso interno e parceiros autorizados.</p>
        <div className="flex justify-center gap-4 text-gray-400">
          <a href="/identidade_visual_nexa.md" download className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-semibold">
            <span>Guia MD</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <a href="#brand_kit_app" className="hover:text-white transition-colors cursor-pointer font-semibold">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
};
