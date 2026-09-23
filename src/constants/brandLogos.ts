import { LogoAsset } from '../types/brand';

export const LOGO_ASSETS: LogoAsset[] = [
  // Core Logos (Transparent)
  {
    id: 'logo_horiz_light_transp',
    name: 'Logo Horizontal - Light (Transparente)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_horizontal_dark_transp.svg`,
    desc: 'Versão principal para telas claras (Fundo Claro). O símbolo possui degradê neon e o texto é escuro.',
    type: 'Horizontal',
    bgPreference: 'dark'
  },
  {
    id: 'logo_horiz_dark_transp',
    name: 'Logo Horizontal - Dark (Transparente)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_horizontal_light_transp.svg`,
    desc: 'Versão principal para telas escuras (Fundo Escuro). O símbolo possui degradê neon e o texto é branco.',
    type: 'Horizontal',
    bgPreference: 'light'
  },
  {
    id: 'logo_vert_light_transp',
    name: 'Logo Vertical - Light (Transparente)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_vertical_dark_transp.svg`,
    desc: 'Versão empilhada para fundos claros. Ideal para documentos impressos simplificados ou menus claros.',
    type: 'Vertical',
    bgPreference: 'dark'
  },
  {
    id: 'logo_vert_dark_transp',
    name: 'Logo Vertical - Dark (Transparente)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_vertical_light_transp.svg`,
    desc: 'Versão empilhada para fundos escuros. Ideal para espaços verticais ou cabeçalhos centralizados.',
    type: 'Vertical',
    bgPreference: 'light'
  },
  {
    id: 'isomark_light_transp',
    name: 'Isomark (Ícone N) - Light',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_isomark_dark_transp.svg`,
    desc: 'Símbolo isolado com degradê neon. Usado para avatares e marcas d\'água em fundos claros.',
    type: 'Símbolo',
    bgPreference: 'dark'
  },
  {
    id: 'isomark_dark_transp',
    name: 'Isomark (Ícone N) - Dark',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_transp.svg`,
    desc: 'O símbolo isolado da marca com degradê neon. Usado para avatares, favicons e elementos de apoio em fundos escuros.',
    type: 'Símbolo',
    bgPreference: 'light'
  },
  {
    id: 'wordmark_light_transp',
    name: 'Wordmark - Light',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_wordmark_dark_transp.svg`,
    desc: 'Apenas a escrita geométrica "NEXA" na cor escura. Usada para rodapés claros ou correspondências.',
    type: 'Apenas Texto',
    bgPreference: 'dark'
  },
  {
    id: 'wordmark_dark_transp',
    name: 'Wordmark - Dark',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_wordmark_light_transp.svg`,
    desc: 'Apenas a escrita geométrica "NEXA" na cor branca. Utilizada quando o símbolo já está presente em outra parte.',
    type: 'Apenas Texto',
    bgPreference: 'light'
  },

  // Core Logos (Solid)
  {
    id: 'logo_horiz_light_solid',
    name: 'Logo Horizontal - Light (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_horizontal_dark_solid.svg`,
    desc: 'Versão horizontal com fundo claro sólido oficial (#FFFFFF) incorporado para garantir as proporções de contraste.',
    type: 'Horizontal',
    bgPreference: 'dark'
  },
  {
    id: 'logo_horiz_dark_solid',
    name: 'Logo Horizontal - Dark (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_horizontal_light_solid.svg`,
    desc: 'Versão horizontal com fundo escuro sólido oficial (#0B0D17) incorporado para garantir as proporções de contraste.',
    type: 'Horizontal',
    bgPreference: 'light'
  },
  {
    id: 'logo_vert_light_solid',
    name: 'Logo Vertical - Light (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_vertical_dark_solid.svg`,
    desc: 'Versão vertical empilhada com fundo claro sólido oficial (#FFFFFF) incorporado.',
    type: 'Vertical',
    bgPreference: 'dark'
  },
  {
    id: 'logo_vert_dark_solid',
    name: 'Logo Vertical - Dark (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_logo_vertical_light_solid.svg`,
    desc: 'Versão vertical empilhada com fundo escuro sólido oficial (#0B0D17) incorporado.',
    type: 'Vertical',
    bgPreference: 'light'
  },
  {
    id: 'isomark_light_solid',
    name: 'Isomark - Light (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_isomark_dark_solid.svg`,
    desc: 'Símbolo isolado com fundo claro sólido oficial (#FFFFFF).',
    type: 'Símbolo',
    bgPreference: 'dark'
  },
  {
    id: 'isomark_dark_solid',
    name: 'Isomark - Dark (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_isomark_light_solid.svg`,
    desc: 'Símbolo isolado com fundo escuro sólido oficial (#0B0D17).',
    type: 'Símbolo',
    bgPreference: 'light'
  },
  {
    id: 'wordmark_light_solid',
    name: 'Wordmark - Light (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_wordmark_dark_solid.svg`,
    desc: 'Escrita "NEXA" com fundo claro sólido oficial (#FFFFFF).',
    type: 'Apenas Texto',
    bgPreference: 'dark'
  },
  {
    id: 'wordmark_dark_solid',
    name: 'Wordmark - Dark (Sólido)',
    category: 'core',
    path: `${import.meta.env.BASE_URL}assets/core/nexa_wordmark_light_solid.svg`,
    desc: 'Escrita "NEXA" com fundo escuro sólido oficial (#0B0D17).',
    type: 'Apenas Texto',
    bgPreference: 'light'
  },

  // CNC/Flat Logos
  {
    id: 'cnc_horiz_flat_black',
    name: 'Logo Horizontal Monocromático - Black',
    category: 'cnc',
    path: `${import.meta.env.BASE_URL}assets/cnc/nexa_logo_horizontal_flat_black.svg`,
    desc: 'Logo horizontal plano totalmente preto. Indicado para corte a laser (CNC), carimbos ou impressões xerox.',
    type: 'Monocromático',
    bgPreference: 'light'
  },
  {
    id: 'cnc_horiz_flat_white',
    name: 'Logo Horizontal Monocromático - White',
    category: 'cnc',
    path: `${import.meta.env.BASE_URL}assets/cnc/nexa_logo_horizontal_flat_white.svg`,
    desc: 'Logo horizontal plano totalmente branco. Indicado para gravação a laser sobre materiais escuros, bordados ou carimbos.',
    type: 'Monocromático',
    bgPreference: 'dark'
  },
  {
    id: 'cnc_isomark_flat_black',
    name: 'Isomark Monocromático - Black',
    category: 'cnc',
    path: `${import.meta.env.BASE_URL}assets/cnc/nexa_isomark_flat_black.svg`,
    desc: 'O símbolo "N" plano em preto puro. Para aplicações físicas em baixo contraste.',
    type: 'Monocromático',
    bgPreference: 'light'
  },
  {
    id: 'cnc_isomark_flat_white',
    name: 'Isomark Monocromático - White',
    category: 'cnc',
    path: `${import.meta.env.BASE_URL}assets/cnc/nexa_isomark_flat_white.svg`,
    desc: 'O símbolo "N" plano em branco puro. Para gravações físicas em superfícies escuras.',
    type: 'Monocromático',
    bgPreference: 'dark'
  },

  // Print Logos
  {
    id: 'print_logo_horiz',
    name: 'Logo Horizontal - CMYK',
    category: 'print',
    path: `${import.meta.env.BASE_URL}assets/print/nexa_logo_horizontal_cmyk.svg`,
    desc: 'Logo horizontal ajustado com as especificações de cores ideais para impressoras industriais (Gráficas).',
    type: 'CMYK',
    bgPreference: 'light'
  },
  {
    id: 'print_logo_vert',
    name: 'Logo Vertical - CMYK',
    category: 'print',
    path: `${import.meta.env.BASE_URL}assets/print/nexa_logo_vertical_cmyk.svg`,
    desc: 'Logo vertical empilhado com cores CMYK calibradas para fidelidade em papel e mídias físicas.',
    type: 'CMYK',
    bgPreference: 'light'
  },
  {
    id: 'print_wordmark',
    name: 'Wordmark - CMYK',
    category: 'print',
    path: `${import.meta.env.BASE_URL}assets/print/nexa_wordmark_cmyk.svg`,
    desc: 'Apenas a escrita "NEXA" com cores CMYK ideais para materiais impressos.',
    type: 'CMYK',
    bgPreference: 'light'
  },
  {
    id: 'print_isomark',
    name: 'Isomark - CMYK',
    category: 'print',
    path: `${import.meta.env.BASE_URL}assets/print/nexa_isomark_cmyk.svg`,
    desc: 'O símbolo isolado com cores otimizadas para garantir a fidelidade do degradê no papel e tecidos.',
    type: 'CMYK',
    bgPreference: 'light'
  },

  // Web Logos
  {
    id: 'web_favicon_svg',
    name: 'Favicon do Site (Vetor)',
    category: 'web',
    path: `${import.meta.env.BASE_URL}assets/web/favicon.svg`,
    desc: 'Ícone vetorial de alta performance que aparece na aba do navegador. Altamente leve.',
    type: 'Favicon',
    bgPreference: 'dark'
  },
  {
    id: 'web_apple_touch_svg',
    name: 'Apple Touch Icon (Vetor)',
    category: 'web',
    path: `${import.meta.env.BASE_URL}assets/web/apple_touch_icon.svg`,
    desc: 'Ícone de alta qualidade para atalhos em dispositivos iOS (iPhones/iPads).',
    type: 'Apple Touch',
    bgPreference: 'dark'
  },
  {
    id: 'web_og_image_svg',
    name: 'OpenGraph Capa (Vetor)',
    category: 'web',
    path: `${import.meta.env.BASE_URL}assets/web/og_image_thumbnail.svg`,
    desc: 'Versão vetorial para geração dinâmica de capas e compartilhamento em redes sociais.',
    type: 'OpenGraph',
    bgPreference: 'dark'
  },
  {
    id: 'splash_logo',
    name: 'Splash Screen Logo (Vetor)',
    category: 'web',
    path: `${import.meta.env.BASE_URL}assets/splash/splash-logo.svg`,
    desc: 'Logo central de inicialização para aplicativos mobile, PWAs ou sistemas de desktop.',
    type: 'Splash Screen',
    bgPreference: 'dark'
  }
];
