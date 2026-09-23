import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const RulesSection: React.FC = () => {
  return (
    <section id="rules_section" className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-[#8B5CF6] font-mono text-xs uppercase tracking-widest font-bold mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_6px_#8B5CF6]" />
          <span>06. INTEGRIDADE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Boas Práticas & Restrições (Do's & Don'ts)</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
          Nossa imagem é construída em cada detalhe. Veja as boas práticas e o que é expressamente proibido com o logotipo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="dos_container" className="rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-6 space-y-4 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-display">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <span>Boas Práticas Recomendadas (Do's)</span>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-gray-300">
            <div className="flex gap-3 p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300">
              <div className="text-emerald-400 shrink-0 font-bold font-mono">✓ 01.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Sempre Garanta Alto Contraste</strong>
                Use logotipos com texto branco (light) sobre fundos escuros e logotipos escuros (dark) sobre fundos predominantemente claros.
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300">
              <div className="text-emerald-400 shrink-0 font-bold font-mono">✓ 02.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Mantenha a Margem de Respiro Mínima</strong>
                Dê ao menos 24px de espaço vazio ao redor do logo para que ele mantenha impacto visual e se destaque adequadamente na peça.
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300">
              <div className="text-emerald-400 shrink-0 font-bold font-mono">✓ 03.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Use Monocromáticos Apenas em Físicos</strong>
                Utilize os arquivos da pasta <code className="text-emerald-300 font-mono text-xs bg-emerald-950/40 px-1 py-0.5 rounded border border-emerald-500/10">/cnc</code> para carimbos, relevos de papel, corte de metais ou gravação física sem suporte a cores.
              </div>
            </div>
          </div>
        </div>

        <div id="donts_container" className="rounded-3xl border border-rose-500/10 bg-rose-500/5 p-6 space-y-4 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-display">
            <XCircle className="w-5 h-5 shrink-0 text-rose-400" />
            <span>O que Nunca Deve Ser Feito (Don'ts)</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-gray-300">
            <div className="flex gap-3 p-4 bg-rose-950/20 rounded-xl border border-rose-500/10 hover:border-rose-500/20 transition-all duration-300">
              <div className="text-rose-400 shrink-0 font-bold font-mono">✗ 01.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Nunca Distorça ou Estique o Logo</strong>
                Não achate o logotipo ou altere a proporção. Ele deve ser sempre dimensionado mantendo a proporção de aspecto intacta.
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-rose-950/20 rounded-xl border border-rose-500/10 hover:border-rose-500/20 transition-all duration-300">
              <div className="text-rose-400 shrink-0 font-bold font-mono">✗ 02.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Não Inverta ou Modifique as Cores do Degradê</strong>
                Não substitua as cores do degradê neon por outras. A ordem correta é Rosa Neon para Roxo para Ciano.
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-rose-950/20 rounded-xl border border-rose-500/10 hover:border-rose-500/20 transition-all duration-300">
              <div className="text-rose-400 shrink-0 font-bold font-mono">✗ 03.</div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Evite Efeitos de Sombra Pesada 3D</strong>
                Nossa identidade é minimalista e moderna. Evite aplicar sombras pesadas tridimensionais, contornos brilhantes adicionais ou bizarras texturas no logo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
