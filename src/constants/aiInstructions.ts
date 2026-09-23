export const AI_MARKDOWN_TEXT = `# Guia de Identidade Visual e Instruções para IA: NEXA

Este documento foi criado para treinar e orientar modelos de Inteligência Artificial (e profissionais de marketing) na criação de materiais, códigos e peças publicitárias seguindo à risca a identidade visual da **Nexa**.

---

## 1. Visão Geral e Essência da Marca
A **Nexa** possui uma identidade visual moderna, futurista, tecnológica e vibrante. Sua essência baseia-se no contraste marcante entre fundos escuros e limpos (minimalistas) e um logotipo com um degradê de cores neon fluidas e dinâmicas.

Sempre que a IA gerar conteúdo para a Nexa, deve manter o tom de voz **profissional, moderno, inovador, acessível e direto**. O design deve ser limpo, com bastante espaço em branco (respiro) e focar em tipografia geométrica elegante.

---

## 2. Paleta de Cores Oficiais
O uso correto das cores é o pilar mais importante da identidade visual da Nexa. Utilize os códigos hexadecimais exatos abaixo para qualquer elemento de design (botões, detalhes, bordas ou textos secundários):

- **Azul Elétrico Nexa:** #0070F3
- **Roxo Violeta Nexa:** #8B5CF6
- **Fundo Oficial Escuro (Dark Mode):** #0B0E14
- **Fundo Oficial Claro (Light Mode):** #FFFFFF

### Regra de Degradê (Gradient Rule)
O degradê oficial deve seguir a ordem de transição linear de 135 graus ou horizontal:
linear-gradient(45deg, #0070F3 0%, #8B5CF6 100%)

---

## 3. Mapeamento de Logotipos por Contexto (Asset Map)
- **Uso Digital / Telas (/core)**
  - Fundo Escuro: \`/core/nexa_logo_horizontal_light_transp.svg\`
  - Fundo Claro: \`/core/nexa_logo_horizontal_dark_transp.svg\`
  - Apenas Símbolo: \`/core/nexa_isomark_light_transp.svg\`
- **Uso Web e SEO (/web)**
  - Favicon: \`/web/favicon.svg\`
  - Capa de Compartilhamento (OpenGraph): \`/web/og_image_thumbnail.svg\`
- **Monocromático / Silhuetas (/cnc)**
  - Fundo Escuro (Branco Plano): \`/cnc/nexa_logo_horizontal_flat_white.svg\`
  - Fundo Claro (Preto Plano): \`/cnc/nexa_logo_horizontal_flat_black.svg\`
- **Uso em Impressão (/print)**
  - Logo Horizontal CMYK: \`/print/nexa_logo_horizontal_cmyk.svg\`

---

## 4. Tipografia Oficial
- **Títulos de Exibição (Display):** Satoshi (Sempre com peso negrito ou extra-negrito, com tracking levemente condensado/tight).
- **Textos de Apoio / Subtítulos:** Inter (Peso médio ou regular).
- **Metadados, Códigos e Status:** JetBrains Mono.

---

## 5. Regras Proibitivas (Não faça isso)
1. Não rotacione, estique ou modifique as proporções das letras ou do símbolo.
2. Não remova ou inverta as cores do degradê neon do símbolo original.
3. Não use a versão de texto claro sobre fundos claros, nem a versão de texto escuro sobre fundos escuros. Mantenha sempre alto contraste.`;

export const AI_PROMPT_WRAPPER = `Abaixo está o manual de identidade visual da minha empresa NEXA. Por favor, utilize-o em todos os designs, textos, páginas HTML, códigos React ou sugestões de conteúdo que criar para mim. Respeite estritamente as regras de cores, fontes e os caminhos oficiais de imagens fornecidos:

${AI_MARKDOWN_TEXT}`;
