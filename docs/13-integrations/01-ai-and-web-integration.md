# 13. Integrações: Inteligência Artificial e Plataformas Web

## 1. Integração com Modelos de Linguagem (AI Instruction Pipeline)
O Nexa Brand Kit disponibiliza dois pontos de consumo para IAs:
1. **Manual Markdown Estruturado (`identidade_visual_nexa.md`):** Fornece um documento semântico estruturado para injeção em janelas de contexto (ChatGPT Custom GPTs, Claude Projects, Gemini Context Caching).
2. **Prompt Injection Wrapper (`AI_PROMPT_WRAPPER`):** Encapsula as regras de paleta hexadecimal, proporções de respiro e caminhos de assets em um comando pronto para orientar agentes criativos em tarefas de código HTML/Tailwind.

## 2. Integração Web e Embeds Dinâmicos
Para desenvolvedores terceiros, o sistema gera dinamicamente três tipos de saída através do exportador de formato:
* **Inline SVG:** Código SVG limpo para injeção direta no Virtual DOM.
* **Base64 Data-URI:** Tag `<img src="data:image/svg+xml;base64,...">` que permite uso imediato sem necessidade de upload em CDN.
* **HTML5 Standalone Package:** Arquivo HTML completo com viewport responsiva e centralização flexbox, pronto para homologação rápida de peças gráficas.\n