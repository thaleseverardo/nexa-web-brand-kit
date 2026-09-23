import React, { useState } from 'react';
import { Bot, FileText, Copy, Check, Sparkles, Info } from 'lucide-react';
import { AI_MARKDOWN_TEXT, AI_PROMPT_WRAPPER } from '../../constants/aiInstructions';

export const AiPortalSection: React.FC = () => {
  const [copiedMd, setCopiedMd] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section id="ai_section" className="relative rounded-3xl bg-[#0F121D]/90 border border-white/5 p-6 sm:p-8 space-y-8 overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-80 h-80 bg-linear-to-tr from-[#00FFFF]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative">
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-semibold text-[#00FFFF]">
            <Bot className="w-3.5 h-3.5 shrink-0" />
            <span>EXCLUSIVO PARA INTEGRAÇÃO COM IA</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Treine e instrua sua IA sobre nossa Identidade Visual
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
            As Inteligências Artificiais criadoras de conteúdo e desenvolvedoras geram resultados infinitamente melhores se souberem de antemão as regras exatas e os caminhos reais dos logotipos. Use o manual estruturado abaixo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            id="copy_md_btn"
            onClick={() => copyToClipboard(AI_MARKDOWN_TEXT, setCopiedMd)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-200 transition-all border border-white/10 cursor-pointer active:scale-95"
          >
            {copiedMd ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedMd ? 'Copiado!' : 'Copiar Manual (Markdown)'}</span>
          </button>

          <button
            id="copy_prompt_wrapped_btn"
            onClick={() => copyToClipboard(AI_PROMPT_WRAPPER, setCopiedPrompt)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-linear-to-r from-[#0070F3] to-[#8B5CF6] text-white text-xs font-bold transition-all shadow-lg hover:opacity-95 cursor-pointer active:scale-95 hover:shadow-[0_0_15px_rgba(0,112,243,0.2)]"
          >
            {copiedPrompt ? <Check className="w-4 h-4 text-green-400" /> : <Sparkles className="w-4 h-4" />}
            <span>{copiedPrompt ? 'Prompt Copiado!' : 'Copiar Prompt de Instrução'}</span>
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#07090E] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c0e14] border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/5">
            <FileText className="w-3.5 h-3.5 text-[#00FFFF]" />
            <span>identidade_visual_nexa.md</span>
          </div>
          <div className="w-12" />
        </div>
        
        <div className="p-6 font-mono text-xs max-h-112.5 overflow-y-auto">
          <pre className="text-gray-300 whitespace-pre-wrap font-mono leading-relaxed select-all">
            {AI_MARKDOWN_TEXT}
          </pre>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-400 leading-relaxed flex items-start gap-3">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-white font-semibold">Como usar isso?</p>
          <p className="mt-1">
            Sempre que for solicitar a criação de uma nova campanha, post de redes sociais, página de vendas ou design de código para a Nexa no ChatGPT, Claude ou Gemini, comece colando este prompt instrucional. A IA saberá usar as cores corretas e referenciará as imagens reais sem errar nenhum diretório.
          </p>
        </div>
      </div>
    </section>
  );
};
