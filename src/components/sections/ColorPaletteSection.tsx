import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { BRAND_COLORS } from '../../constants/brandColors';

export const ColorPaletteSection: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [copiedPrimaryGradient, setCopiedPrimaryGradient] = useState<boolean>(false);
  const [copiedGradient, setCopiedGradient] = useState<boolean>(false);
  const [copiedTitleTw, setCopiedTitleTw] = useState<boolean>(false);
  const [copiedTitleCss, setCopiedTitleCss] = useState<boolean>(false);
  const [copiedBtnSolid, setCopiedBtnSolid] = useState<boolean>(false);
  const [copiedBtnOutline, setCopiedBtnOutline] = useState<boolean>(false);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const getBadgeText = (name: string) => {
    if (name.includes('Rosa')) return 'Primário / Destaque';
    if (name.includes('Roxo Nexa')) return 'Primário / Transição';
    if (name.includes('Ciano')) return 'Primário / Hover';
    if (name.includes('Azul')) return 'Secundário / Início';
    if (name.includes('Violeta')) return 'Secundário / Fim';
    if (name.includes('Escuro')) return 'Fundo Escuro';
    return 'Fundo Claro';
  };

  return (
    <section id="colors_section" className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest font-bold mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_6px_#8B5CF6]" />
          <span>04. VITALIDADE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Paleta de Cores Oficiais</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
          Nossa identidade visual é composta por duas paletas oficiais: o vibrante degradê primário original (Rosa, Roxo e Ciano) e o elegante degradê secundário tecnológico (Azul e Roxo Violeta) sobre o vácuo espacial profundo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {BRAND_COLORS.map((color) => (
          <div 
            id={`color_card_${color.name.toLowerCase().replace(/\s/g, '_')}`}
            key={color.name} 
            className="rounded-2xl bg-[#0F121D]/90 border border-white/5 p-5 space-y-4 hover:border-white/10 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className={`h-24 w-full rounded-xl ${color.bg} ${color.border ? `border ${color.border}` : ''} ${color.glow} transition-transform duration-300 hover:scale-[1.02]`} />
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-sm font-bold text-white leading-none">{color.name}</h4>
                  <span className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-mono font-medium text-gray-400 border border-white/5 whitespace-nowrap">
                    {getBadgeText(color.name)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5 leading-normal h-12 overflow-hidden">{color.usage}</p>
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs">
              <div className="flex items-center justify-between p-2 bg-black/45 rounded-xl border border-white/5 group">
                <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wider">HEX:</span>
                <span className="text-white font-semibold text-xs">{color.hex}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(color.hex);
                    setCopiedColor(color.hex);
                    setTimeout(() => setCopiedColor(null), 2000);
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Copiar HEX"
                >
                  {copiedColor === color.hex ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2 bg-black/45 rounded-xl border border-white/5 group">
                <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wider">RGB:</span>
                <span className="text-gray-300 font-semibold text-[10px]">{color.rgb}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(color.rgb);
                    setCopiedColor(color.rgb);
                    setTimeout(() => setCopiedColor(null), 2000);
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Copiar RGB"
                >
                  {copiedColor === color.rgb ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/5 bg-[#0F121D]/90 p-6 flex flex-col justify-between gap-6 backdrop-blur-sm shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-xl shadow-lg shadow-pink-500/10 shrink-0 border border-white/10" 
                style={{ background: 'linear-gradient(45deg, #FF00FF, #8A2BE2, #00FFFF)' }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">Degradê Primário (Original Neon)</h4>
                  <span className="px-1.5 py-0.5 rounded bg-pink-500/10 text-[8px] font-mono font-bold text-pink-400 border border-pink-500/20 uppercase tracking-wider">PRINCIPAL</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Transição clássica fluida de Rosa Neon (#FF00FF) para Roxo Nexa (#8A2BE2) e Ciano Elétrico (#00FFFF). Representa a inovação e o futurismo vibrante da marca Nexa.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="bg-black/50 px-3 py-2.5 rounded-xl border border-white/5 text-[10px] font-mono text-gray-300 overflow-x-auto whitespace-nowrap flex-1">
                linear-gradient(45deg, #FF00FF, #8A2BE2, #00FFFF)
              </div>
              <button
                onClick={() => copyToClipboard('linear-gradient(45deg, #FF00FF, #8A2BE2, #00FFFF)', setCopiedPrimaryGradient)}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-all shrink-0 cursor-pointer active:scale-95"
              >
                {copiedPrimaryGradient ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPrimaryGradient ? 'Copiado!' : 'Copiar CSS'}</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0F121D]/90 p-6 flex flex-col justify-between gap-6 backdrop-blur-sm shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-xl shadow-lg shadow-blue-500/20 shrink-0 border border-white/10" 
                style={{ background: 'linear-gradient(45deg, #0070F3, #8B5CF6)' }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">Degradê Secundário (Tech Corporate)</h4>
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-[8px] font-mono font-bold text-blue-400 border border-blue-500/20 uppercase tracking-wider">SUPORTE</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Transição corporativa moderna de Azul Elétrico (#0070F3) para Roxo Violeta (#8B5CF6). Ideal para interfaces sóbrias, botões institucionais e legibilidade equilibrada.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="bg-black/50 px-3 py-2.5 rounded-xl border border-white/5 text-[10px] font-mono text-gray-300 overflow-x-auto whitespace-nowrap flex-1">
                linear-gradient(45deg, #0070F3, #8B5CF6)
              </div>
              <button
                onClick={() => copyToClipboard('linear-gradient(45deg, #0070F3, #8B5CF6)', setCopiedGradient)}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-all shrink-0 cursor-pointer active:scale-95"
              >
                {copiedGradient ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedGradient ? 'Copiado!' : 'Copiar CSS'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/5 bg-[#0F121D]/90 p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">1. Aplicação em Títulos</h4>
              <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] font-semibold text-blue-400 font-mono">DISPLAY ONLY</span>
            </div>

            <div className="p-6 bg-black/45 rounded-xl border border-white/5 flex items-center justify-center min-h-25 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,112,243,0.05)_1px,transparent_1px)] bg-size-[16px_16px] opacity-40" />
              <h1 className="text-2xl font-display font-black tracking-tight text-center uppercase bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-md select-none group-hover:scale-105 transition-all duration-300">
                NEXA INTELLIGENCE
              </h1>
            </div>

            <div className="space-y-3.5">
              <p className="text-xs text-gray-400 leading-relaxed">
                Para títulos grandes e marcantes, use o degradê oficial com máscara de texto para dar um toque de alta tecnologia e confiança. Evite em textos corridos.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between bg-black/60 px-3 py-2 rounded-xl border border-white/5">
                  <div className="truncate pr-4 text-left">
                    <p className="text-[9px] font-mono text-gray-500">CLASSES TAILWIND CSS</p>
                    <p className="text-xs font-mono bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent font-semibold truncate">bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent', setCopiedTitleTw)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all cursor-pointer shrink-0"
                  >
                    {copiedTitleTw ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between bg-black/60 px-3 py-2 rounded-xl border border-white/5">
                  <div className="truncate pr-4 text-left">
                    <p className="text-[9px] font-mono text-gray-500">CÓDIGO CSS NATIVO</p>
                    <p className="text-xs font-mono bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent font-semibold truncate">background: linear-gradient(45deg, #0070F3, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('background: linear-gradient(45deg, #0070F3, #8B5CF6);\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;', setCopiedTitleCss)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all cursor-pointer shrink-0"
                  >
                    {copiedTitleCss ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0F121D]/90 p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">2. Aplicação em Botões</h4>
              <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] font-semibold text-cyan-400 font-mono">TWO VARIANTS</span>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-black/45 rounded-xl border border-white/5 min-h-25 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <button className="w-full py-2.5 bg-linear-to-r from-[#0070F3] to-[#8B5CF6] hover:opacity-95 text-white shadow-[0_0_15px_rgba(0,112,243,0.3)] font-bold text-[11px] rounded-lg tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer">
                  Sólido
                </button>
                <span className="text-[9px] font-mono text-gray-500">Botão Sólido</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <button className="w-full p-px bg-linear-to-r from-[#0070F3] to-[#8B5CF6] rounded-lg transition-all duration-300 active:scale-95 cursor-pointer">
                  <div className="w-full py-2.5 bg-[#0B0E14] hover:bg-[#121625]/90 rounded-[7px] text-white font-bold text-[11px] tracking-wider uppercase transition-colors">
                    Outline
                  </div>
                </button>
                <span className="text-[9px] font-mono text-gray-500">Botão Borda</span>
              </div>
            </div>

            <div className="space-y-3.5">
              <p className="text-xs text-gray-400 leading-relaxed">
                Use o preenchimento sólido para chamadas de ação críticas (CTA Primário) ou o design com borda degradê vazada para ações secundárias refinadas.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between bg-black/60 px-3 py-2 rounded-xl border border-white/5">
                  <div className="truncate pr-4 text-left">
                    <p className="text-[9px] font-mono text-gray-500">CTA SÓLIDO (CLASSES)</p>
                    <p className="text-xs font-mono bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent font-semibold truncate">bg-linear-to-r from-[#0070F3] to-[#8B5CF6] text-white shadow-[0_0_15px_rgba(0,112,243,0.3)]</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('bg-linear-to-r from-[#0070F3] to-[#8B5CF6] hover:opacity-95 text-white shadow-[0_0_15px_rgba(0,112,243,0.3)] font-bold py-3 px-6 rounded-xl transition-all duration-300 active:scale-95', setCopiedBtnSolid)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all cursor-pointer shrink-0"
                  >
                    {copiedBtnSolid ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between bg-black/60 px-3 py-2 rounded-xl border border-white/5">
                  <div className="truncate pr-4 text-left">
                    <p className="text-[9px] font-mono text-gray-500">CTA BORDA (MARCADO)</p>
                    <p className="text-xs font-mono bg-linear-to-r from-[#0070F3] to-[#8B5CF6] bg-clip-text text-transparent font-semibold truncate">p-px bg-linear-to-r from-[#0070F3] to-[#8B5CF6] com div interna bg-[#0B0E14]</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('<button className="p-px bg-linear-to-r from-[#0070F3] to-[#8B5CF6] rounded-xl transition-all duration-300 active:scale-95">\n  <div className="px-6 py-3 bg-[#0B0E14] hover:bg-[#121625] rounded-[11px] text-white font-bold transition-colors">\n    CTA Secundário\n  </div>\n</button>', setCopiedBtnOutline)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all cursor-pointer shrink-0"
                  >
                    {copiedBtnOutline ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
