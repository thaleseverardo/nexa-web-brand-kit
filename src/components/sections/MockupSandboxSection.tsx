import React, { useState } from 'react';
import { 
  Layers, 
  Monitor, 
  Info, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  User, 
  Check, 
  Facebook, 
  Youtube, 
  Video, 
  Search, 
  Music 
} from 'lucide-react';
import { LogoAsset, MockupTemplate, MockupBg } from '../../types/brand';
import { LOGO_ASSETS } from '../../constants/brandLogos';

export const MockupSandboxSection: React.FC = () => {
  const [mockupTemplate, setMockupTemplate] = useState<MockupTemplate>('instagram');
  const [mockupText, setMockupText] = useState<string>('MOLDANDO O AMANHÃ INDUSTRIAL COM DESIGN E IA.');
  const [mockupBg, setMockupBg] = useState<MockupBg>('dark_ambient');
  const [mockupLogo, setMockupLogo] = useState<LogoAsset>(LOGO_ASSETS[0]);

  return (
    <section id="mockup_sandbox_section" className="rounded-3xl bg-[#0F121D]/95 border border-white/5 p-6 sm:p-8 space-y-6 backdrop-blur-sm shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#00FFFF] font-mono text-xs uppercase tracking-widest font-bold">
            <Layers className="w-4 h-4 text-[#00FFFF]" />
            <span>03. APRESENTAÇÃO</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
            Simulador de Peças de Marketing (Live Mockups)
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Visualize como a identidade visual da Nexa se aplica instantaneamente em mídias sociais, papelaria ou web design. Altere os textos e os planos de fundo abaixo para testar!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">1. Escolha a Peça / Formato:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMockupTemplate('instagram');
                    setMockupText('MOLDANDO O AMANHÃ INDUSTRIAL COM DESIGN E IA.');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'instagram' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                  <span className="truncate">Instagram Post</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('linkedin');
                    setMockupText('SISTEMAS INTEGRADOS DE ALTÍSSIMO DESEMPENHO.');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'linkedin' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="truncate">LinkedIn Banner</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('facebook');
                    setMockupText('LIDERANDO A REVOLUÇÃO COGNITIVA NA INDÚSTRIA COM IA.');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'facebook' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span className="truncate">Capa Facebook</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('youtube');
                    setMockupText('TECNOLOGIA, DESIGN E IA INDUSTRIAL • NOVOS VÍDEOS');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'youtube' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span className="truncate">YouTube Banner</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('tiktok');
                    setMockupText('#NEXA: INTELIGÊNCIA ARTIFICIAL NO CHÃO DE FÁBRICA ⚙️🤖');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'tiktok' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">TikTok Overlay</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('badge');
                    setMockupText('NEXA CREW - OPERAÇÃO INDUSTRIAL');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'badge' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span className="truncate">Crachá Digital</span>
                </button>
                <button
                  onClick={() => {
                    setMockupTemplate('website');
                    setMockupText('A Próxima Geração Industrial.');
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${mockupTemplate === 'website' ? 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-white shadow-[0_0_12px_rgba(139,92,246,0.1)]' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  <span className="truncate">Layout Web</span>
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">2. Escolha o Logotipo:</label>
              <select 
                id="mockup_logo_select"
                value={mockupLogo.id}
                onChange={(e) => {
                  const found = LOGO_ASSETS.find(l => l.id === e.target.value);
                  if (found) setMockupLogo(found);
                }}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer"
              >
                {LOGO_ASSETS.filter(l => !l.path.includes('favicon') && !l.id.includes('android')).map((logo) => (
                  <option key={logo.id} value={logo.id} className="bg-[#0B0E14] text-white text-xs">
                    {logo.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">3. Plano de Fundo (Background Style):</label>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => setMockupBg('dark_ambient')}
                  className={`py-1.5 rounded-lg text-center border text-[10px] font-bold transition-all cursor-pointer ${mockupBg === 'dark_ambient' ? 'bg-cyan-500/10 border-cyan-400/30 text-white' : 'bg-black/35 border-white/5 text-gray-400'}`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setMockupBg('neon_glow')}
                  className={`py-1.5 rounded-lg text-center border text-[10px] font-bold transition-all cursor-pointer ${mockupBg === 'neon_glow' ? 'bg-cyan-500/10 border-cyan-400/30 text-white' : 'bg-black/35 border-white/5 text-gray-400'}`}
                >
                  Neon Gradient
                </button>
                <button
                  onClick={() => setMockupBg('minimal_white')}
                  className={`py-1.5 rounded-lg text-center border text-[10px] font-bold transition-all cursor-pointer ${mockupBg === 'minimal_white' ? 'bg-cyan-500/10 border-cyan-400/30 text-white' : 'bg-black/35 border-white/5 text-gray-400'}`}
                >
                  White
                </button>
                <button
                  onClick={() => setMockupBg('tech_grid')}
                  className={`py-1.5 rounded-lg text-center border text-[10px] font-bold transition-all cursor-pointer ${mockupBg === 'tech_grid' ? 'bg-cyan-500/10 border-cyan-400/30 text-white' : 'bg-black/35 border-white/5 text-gray-400'}`}
                >
                  Technical Grid
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">4. Edite a Frase / Headline (Satoshi Font):</label>
              <textarea 
                id="mockup_text_input"
                value={mockupText}
                onChange={(e) => setMockupText(e.target.value)}
                rows={2}
                maxLength={100}
                placeholder="Escreva uma frase de efeito..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all font-display uppercase tracking-tight"
              />
              <div className="flex justify-between text-[9px] font-mono text-gray-500">
                <span>*Será convertida em maiúsculas por padrão</span>
                <span>{mockupText.length}/100</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/10 text-[11px] text-cyan-300 leading-relaxed space-y-1 mt-4">
            <p className="font-semibold text-white flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              Observação do Designer:
            </p>
            <p>
              A margem de segurança ao redor do logo está pré-calibrada de acordo com as regras de respiro mínimas recomendadas de 24px (ou 15% do tamanho da peça).
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 flex items-center justify-center p-6 bg-black/40 border border-white/5 rounded-2xl min-h-100 relative overflow-hidden">
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Simulação em Tempo Real</span>
          </div>

          <div className="w-full max-w-95 transition-all duration-500 hover:scale-[1.01]">
            {mockupTemplate === 'instagram' && (
              <div className="bg-[#0c0f16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-3.5 py-3 border-b border-white/5 bg-[#0f121d]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full p-0.5 bg-linear-to-tr from-[#0070F3] to-[#8B5CF6] flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#0b0e14] flex items-center justify-center overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} alt="Nexa Avatar" className="w-[75%] h-[75%] object-contain" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-tight">nexa_industrial</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  </div>
                </div>

                <div 
                  className={`aspect-square w-full relative flex flex-col justify-between p-6 overflow-hidden transition-all duration-500 ${
                    mockupBg === 'dark_ambient' ? 'bg-[#0B0E14] text-white' :
                    mockupBg === 'neon_glow' ? 'bg-linear-to-br from-[#0070F3]/15 to-[#8B5CF6]/15 border-white/5' :
                    mockupBg === 'minimal_white' ? 'bg-white text-gray-900' :
                    'checkered-bg'
                  }`}
                >
                  {mockupBg === 'tech_grid' && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />
                  )}

                  <div className="flex justify-between items-start z-10">
                    <span className="text-[9px] font-mono tracking-widest text-[#0070F3] bg-[#0070F3]/10 px-2 py-0.5 rounded-full border border-[#0070F3]/20">NEXA DIRECT</span>
                    <div className="h-7 w-24 flex items-center justify-end p-1 rounded-lg">
                      <img 
                        src={mockupLogo.path} 
                        alt="Mockup Logo" 
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 z-10">
                    <h4 className="text-xl font-display font-black tracking-tight leading-tight uppercase bg-linear-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                      {mockupText || 'MOLDANDO O AMANHÃ INDUSTRIAL COM DESIGN E IA.'}
                    </h4>
                    <div className="w-12 h-1 bg-linear-to-r from-[#0070F3] to-[#8B5CF6]" />
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none font-mono text-[8px] text-right">
                    <span>SYS_ID: 5E3FA287</span><br />
                    <span>LOC: CH_LAT_45</span>
                  </div>
                </div>

                <div className="px-4 py-3 bg-[#0f121d] border-t border-white/5 flex items-center justify-between text-gray-400">
                  <div className="flex items-center gap-4">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 cursor-pointer hover:scale-110 transition-transform" />
                    <MessageCircle className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                    <Send className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            )}

            {mockupTemplate === 'linkedin' && (
              <div className="bg-[#0A0D14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-3.5 py-2.5 border-b border-white/5 bg-[#0F121D] text-[10px] text-gray-400 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm" />
                  <span>Capa de Perfil Corporativo LinkedIn</span>
                </div>

                <div 
                  className={`h-44 w-full relative flex flex-col justify-between p-5 overflow-hidden transition-all duration-500 ${
                    mockupBg === 'dark_ambient' ? 'bg-[#0B0E14] text-white' :
                    mockupBg === 'neon_glow' ? 'bg-linear-to-r from-[#0070F3]/10 to-[#8B5CF6]/10 border-white/5' :
                    mockupBg === 'minimal_white' ? 'bg-white text-gray-900' :
                    'checkered-bg'
                  }`}
                >
                  {mockupBg === 'tech_grid' && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[15px_15px] pointer-events-none" />
                  )}

                  <div className="flex justify-between items-start z-10">
                    <div className="h-6 w-20">
                      <img 
                        src={mockupLogo.path} 
                        alt="Mockup Logo" 
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[7px] font-mono tracking-widest text-gray-500">OFFICIAL PARTNER</span>
                  </div>

                  <div className="space-y-1.5 z-10 max-w-60">
                    <h4 className="text-[13px] font-display font-bold tracking-tight leading-snug uppercase text-white">
                      {mockupText || 'SISTEMAS INTEGRADOS DE ALTÍSSIMO DESEMPENHO.'}
                    </h4>
                    <p className="text-[7px] font-mono text-blue-400 uppercase tracking-widest">NEXA INDUSTRIAL SYSTEMS & MARKETING KIT</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#0070F3] to-[#8B5CF6]" />
                </div>

                <div className="p-4 bg-[#0F121D] flex items-center gap-3 relative">
                  <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-[#0A0D14] -mt-8 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Nexa Corp</p>
                    <p className="text-[9px] text-gray-400">125,483 seguidores • Empresa de Tecnologia Industrial</p>
                  </div>
                </div>
              </div>
            )}

            {mockupTemplate === 'badge' && (
              <div className="bg-[#121625] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-5 text-center relative">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-[#0070F3] to-[#8B5CF6]" />
                
                <div className="w-10 h-2 bg-black/60 rounded-full mx-auto mb-4 border border-white/10" />

                <div className="h-8 w-24 mx-auto mb-4">
                  <img 
                    src={mockupLogo.path} 
                    alt="Badge Logo" 
                    className="max-h-full max-w-full mx-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="w-full h-full rounded-full p-0.5 bg-linear-to-b from-[#0070F3] to-[#8B5CF6] flex items-center justify-center overflow-hidden shadow-lg">
                    <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border border-[#121625] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white tracking-wide">MARIANA SILVA</h4>
                  <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{mockupText || 'NEXA CREW - OPERAÇÃO INDUSTRIAL'}</p>
                </div>

                <div className="mt-4 p-2 bg-black/30 rounded-lg border border-white/5 text-[9px] font-mono text-left text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>ID DEACESSO:</span>
                    <span className="text-cyan-400">993-NEXA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>EMISSÃO:</span>
                    <span>07/2026</span>
                  </div>
                </div>

                <div className="mt-4 h-6 bg-white/5 rounded-md flex items-center justify-center gap-0.5 px-4 opacity-70">
                  {[1,3,2,4,1,2,5,3,1,2,4,2,1,3,2,1,4,3,2,1,3].map((h, i) => (
                    <div key={i} className="bg-white flex-1" style={{ height: `${h * 4 + 6}px` }} />
                  ))}
                </div>
              </div>
            )}

            {mockupTemplate === 'website' && (
              <div className="bg-[#0b0d17] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-left">
                <div className="px-3.5 py-1.5 border-b border-white/5 bg-[#0F121D] text-[9px] text-gray-400 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-sm" />
                  <span>Simulação de Menu / Navegação Web</span>
                </div>

                <div className="px-4 py-3 bg-[#0B0E14] border-b border-white/5 flex items-center justify-between">
                  <div className="h-5 w-16">
                    <img 
                      src={mockupLogo.path} 
                      alt="Navbar Logo" 
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex gap-2.5 text-[8px] font-mono uppercase tracking-wider text-gray-400">
                    <span className="text-white font-bold">Início</span>
                    <span>Produtos</span>
                    <span>Sobre</span>
                  </div>
                </div>

                <div className="p-5 space-y-3 bg-[#090b11] h-32 relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-[7px] font-mono tracking-widest text-[#0070F3] uppercase font-bold">PRODUTO OFICIAL NEXA</span>
                  <h4 className="text-sm font-display font-bold text-white tracking-tight leading-snug">
                    {mockupText || 'A Próxima Geração Industrial.'}
                  </h4>
                  <button className="px-2.5 py-1 bg-[#8B5CF6] hover:opacity-90 rounded text-[8px] font-bold text-white w-max">
                    Saiba Mais
                  </button>
                </div>
              </div>
            )}

            {mockupTemplate === 'facebook' && (
              <div className="bg-[#0b0e14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-3.5 py-2 border-b border-white/5 bg-[#0F121D] text-[10px] text-gray-400 flex items-center gap-1.5">
                  <Facebook className="w-3.5 h-3.5 text-blue-500" />
                  <span>Capa de Página Comercial Facebook</span>
                </div>

                <div 
                  className={`h-40 w-full relative flex flex-col justify-between p-5 overflow-hidden transition-all duration-500 ${
                    mockupBg === 'dark_ambient' ? 'bg-[#0B0E14] text-white' :
                    mockupBg === 'neon_glow' ? 'bg-linear-to-r from-[#0070F3]/15 to-[#8B5CF6]/15 border-white/5' :
                    mockupBg === 'minimal_white' ? 'bg-white text-gray-900' :
                    'checkered-bg'
                  }`}
                >
                  {mockupBg === 'tech_grid' && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
                  )}

                  <div className="flex justify-between items-start z-10">
                    <div className="h-6 w-20">
                      <img 
                        src={mockupLogo.path} 
                        alt="Facebook Logo" 
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[7px] font-mono tracking-widest text-[#0070F3] bg-[#0070F3]/10 px-1.5 py-0.5 rounded uppercase border border-[#0070F3]/20">Corporativo</span>
                  </div>

                  <div className="space-y-1 z-10">
                    <h4 className="text-[12px] sm:text-[13px] font-display font-black tracking-tight leading-tight uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {mockupText || 'LIDERANDO A REVOLUÇÃO COGNITIVA NA INDÚSTRIA COM IA.'}
                    </h4>
                    <div className="w-8 h-0.5 bg-linear-to-r from-[#0070F3] to-[#8B5CF6]" />
                  </div>
                </div>

                <div className="p-3.5 bg-[#0F121D] flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-black/60 border-2 border-[#0A0D14] -mt-7 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                      <img src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} alt="Nexa Profile" className="w-[80%] h-[80%] object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">Nexa Industrial</p>
                      <p className="text-[9px] text-gray-400 truncate">52.4K curtidas • 89.2K seguidores</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] font-bold transition-all cursor-pointer">
                      Curtir
                    </button>
                    <button className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded text-[10px] font-bold transition-all cursor-pointer">
                      Mensagem
                    </button>
                  </div>
                </div>
              </div>
            )}

            {mockupTemplate === 'youtube' && (
              <div className="bg-[#0c0e14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-3.5 py-2 border-b border-white/5 bg-[#0F121D] text-[10px] text-gray-400 flex items-center gap-1.5">
                  <Youtube className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                  <span>Capa de Canal YouTube (Widescreen TV/Desktop)</span>
                </div>

                <div 
                  className={`h-32 w-full relative flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-all duration-500 ${
                    mockupBg === 'dark_ambient' ? 'bg-[#0B0E14] text-white' :
                    mockupBg === 'neon_glow' ? 'bg-linear-to-tr from-[#0070F3]/10 to-[#8B5CF6]/15 border-white/5' :
                    mockupBg === 'minimal_white' ? 'bg-white text-gray-900' :
                    'checkered-bg'
                  }`}
                >
                  {mockupBg === 'tech_grid' && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[12px_12px] pointer-events-none" />
                  )}

                  <div className="space-y-2 z-10 flex flex-col items-center">
                    <div className="h-7 w-24 flex items-center justify-center">
                      <img 
                        src={mockupLogo.path} 
                        alt="YouTube Banner Logo" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <h4 className="text-[10px] sm:text-[11px] font-display font-bold tracking-tight uppercase max-w-70 text-white drop-shadow-md">
                      {mockupText || 'TECNOLOGIA, DESIGN E IA INDUSTRIAL • NOVOS VÍDEOS TODA SEMANA'}
                    </h4>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[8px] font-mono text-blue-400 border border-white/5">
                    nexa.io/subscribe
                  </div>
                </div>

                <div className="p-3.5 bg-[#0F121D] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} alt="Nexa Youtube Avatar" className="w-[70%] h-[70%] object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Nexa Tech Corp</p>
                      <p className="text-[9px] text-gray-400">650K inscritos • 1.2K vídeos</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-[10px] font-bold transition-all cursor-pointer">
                    Inscrever-se
                  </button>
                </div>
              </div>
            )}

            {mockupTemplate === 'tiktok' && (
              <div className="bg-[#0b0c10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-3.5 py-2 border-b border-white/5 bg-[#0F121D] text-[10px] text-gray-400 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Simulador de Tela Cheia / Feed TikTok</span>
                </div>

                <div 
                  className={`h-87.5 w-full relative flex flex-col justify-between p-4 overflow-hidden transition-all duration-500 bg-cover bg-center ${
                    mockupBg === 'dark_ambient' ? 'bg-[#05070a]' :
                    mockupBg === 'neon_glow' ? 'bg-linear-to-b from-[#180a2b] via-[#05070a] to-[#041d24]' :
                    mockupBg === 'minimal_white' ? 'bg-[#F3F4F6] text-gray-900' :
                    'checkered-bg'
                  }`}
                >
                  {mockupBg === 'tech_grid' && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[14px_14px] pointer-events-none" />
                  )}

                  <div className="flex justify-between items-center z-10 w-full text-white/60 text-[9px] font-semibold">
                    <span className="text-white/40 font-mono">LIVE</span>
                    <div className="flex gap-3">
                      <span className="cursor-pointer">Seguindo</span>
                      <span className="text-white font-bold border-b-2 border-white pb-0.5">Para Você</span>
                    </div>
                    <Search className="w-3.5 h-3.5 text-white" />
                  </div>

                  <div className="absolute top-12 left-4 h-6 w-16 bg-black/45 rounded px-1.5 py-0.5 border border-white/10 flex items-center justify-center opacity-65 z-10">
                    <img 
                      src={mockupLogo.path} 
                      alt="TikTok Watermark" 
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex justify-between items-end w-full mt-auto z-10">
                    <div className="max-w-[70%] space-y-1.5 text-left text-white text-xs pb-1">
                      <p className="font-bold">@nexa_industrial</p>
                      <p className="text-[11px] leading-snug font-medium text-gray-200">
                        {mockupText || '#NEXA: INTELIGÊNCIA ARTIFICIAL NO CHÃO DE FÁBRICA ⚙️🤖'}
                      </p>
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 bg-black/40 px-2 py-0.5 rounded-full w-max border border-cyan-400/20">
                        <Music className="w-2.5 h-2.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>Som original - Nexa Industrial</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 pb-1 text-white shrink-0">
                      <div className="relative w-8 h-8 mb-1.5">
                        <div className="w-full h-full rounded-full border border-white bg-black p-0.5">
                          <img src={`${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`} alt="Nexa Avatar" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px] font-bold text-white border border-[#05070a]">
                          +
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </div>
                        <span className="text-[8px] font-semibold mt-0.5 text-gray-300">142.5K</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                          <MessageCircle className="w-4 h-4 fill-white text-black" />
                        </div>
                        <span className="text-[8px] font-semibold mt-0.5 text-gray-300">1.2K</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                          <Bookmark className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </div>
                        <span className="text-[8px] font-semibold mt-0.5 text-gray-300">8.9K</span>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-black/80 border border-white/20 p-1 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
                        <div className="w-full h-full rounded-full bg-linear-to-r from-[#0070F3] to-[#8B5CF6] flex items-center justify-center text-[5px]">
                          💿
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
