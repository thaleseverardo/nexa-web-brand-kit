import React from 'react';

export const TypographySection: React.FC = () => {
  return (
    <section id="typography_section" className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] shadow-[0_0_6px_#00FFFF]" />
          <span>04. COMUNICAÇÃO</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Tipografia Oficial</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
          Nossa voz escrita é expressada com força, modernidade e legibilidade técnica usando duas famílias tipográficas integradas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="typo_card_display" className="rounded-2xl bg-[#0F121D]/90 border border-white/5 p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-white font-display">Satoshi</h4>
              <p className="text-xs text-gray-400">Fonte Oficial de Exibição & Títulos</p>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-[#00FFFF]/10 text-[9px] font-mono text-[#00FFFF] border border-[#00FFFF]/20 font-bold tracking-wider">TÍTULOS E ACCENTS</span>
          </div>

          <div className="p-5 bg-black/45 rounded-xl border border-white/5 font-display space-y-4">
            <p className="text-4xl font-black tracking-tight text-white uppercase">A B C D E F G H I</p>
            <p className="text-3xl font-bold tracking-tight text-gray-300">Nexa Inteligência IA</p>
            <p className="text-lg text-medium text-gray-400">Futuro em constante evolução integrada.</p>
          </div>

          <div className="space-y-2.5 text-xs">
            <p className="text-white font-semibold">Regras de uso em títulos:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Utilizada em cabeçalhos de seções, banners, grandes painéis e logotipos.</li>
              <li>Prefira usar sempre com pesos em negrito (<span className="text-white font-semibold">Bold / Black</span>).</li>
              <li>Ideal para aplicação do degradê neon em títulos curtos.</li>
            </ul>
          </div>
        </div>

        <div id="typo_card_sans" className="rounded-2xl bg-[#0F121D]/90 border border-white/5 p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-white">Inter</h4>
              <p className="text-xs text-gray-400">Fonte Oficial para Conteúdo Geral</p>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-[#8B5CF6]/10 text-[9px] font-mono text-[#8B5CF6] border border-[#8B5CF6]/20 font-bold tracking-wider">TEXTO CORRIDO</span>
          </div>

          <div className="p-5 bg-black/45 rounded-xl border border-white/5 font-sans space-y-4">
            <p className="text-3xl font-bold text-white">Interface Nexa Portal</p>
            <p className="text-base font-medium text-gray-300">O equilíbrio perfeito entre legibilidade e geometria.</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Para textos corridos, e-mails, relatórios, posts de blogs e descritivos em geral, usamos a fonte Inter. Ela garante excelente legibilidade tanto em tamanhos grandes quanto muito pequenos nas telas de celulares e computadores.
            </p>
          </div>

          <div className="space-y-2.5 text-xs">
            <p className="text-white font-semibold">Regras de uso em textos:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Utilizar para blocos longos de parágrafos, tabelas e botões padrão.</li>
              <li>Pesos recomendados: <span className="text-white font-semibold">Regular (400)</span> e <span className="text-white font-semibold">Medium (500)</span>.</li>
              <li>Combine com uma altura de linha confortável (ex: <span className="text-white">leading-relaxed</span>).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
