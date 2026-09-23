import { BrandColor } from '../types/brand';

export const BRAND_COLORS: BrandColor[] = [
  {
    name: 'Rosa Neon (Primário)',
    hex: '#FF00FF',
    rgb: '255, 0, 255',
    usage: 'Destaques principais do degradê primário oficial, botões ultra-futuristas e acentos.',
    text: 'text-[#FF00FF]',
    bg: 'bg-[#FF00FF]',
    glow: 'shadow-[0_0_15px_rgba(255,0,255,0.4)]'
  },
  {
    name: 'Roxo Nexa (Primário)',
    hex: '#8A2BE2',
    rgb: '138, 43, 226',
    usage: 'Cor de transição intermediária no degradê primário oficial e elementos principais.',
    text: 'text-[#8A2BE2]',
    bg: 'bg-[#8A2BE2]',
    glow: 'shadow-[0_0_15px_rgba(138,43,226,0.4)]'
  },
  {
    name: 'Ciano Elétrico (Primário)',
    hex: '#00FFFF',
    rgb: '0, 255, 255',
    usage: 'Cor de acento do degradê primário oficial, links rápidos e transições de hover.',
    text: 'text-[#00FFFF]',
    bg: 'bg-[#00FFFF]',
    glow: 'shadow-[0_0_15px_rgba(0,255,255,0.4)]'
  },
  {
    name: 'Azul Elétrico (Secundário)',
    hex: '#0070F3',
    rgb: '0, 112, 243',
    usage: 'Destaques modernos corporativos, início do degradê de suporte/secundário.',
    text: 'text-[#0070F3]',
    bg: 'bg-[#0070F3]',
    glow: 'shadow-[0_0_15px_rgba(0,112,243,0.4)]'
  },
  {
    name: 'Roxo Violeta (Secundário)',
    hex: '#8B5CF6',
    rgb: '139, 92, 246',
    usage: 'Acento secundário de alta tecnologia, finalização do degradê de suporte/secundário.',
    text: 'text-[#8B5CF6]',
    bg: 'bg-[#8B5CF6]',
    glow: 'shadow-[0_0_15px_rgba(139,92,246,0.4)]'
  },
  {
    name: 'Espaço Escuro (Fundo)',
    hex: '#0B0E14',
    rgb: '11, 14, 20',
    usage: 'Cor oficial para interfaces em modo escuro (Dark Mode).',
    text: 'text-[#0B0E14]',
    bg: 'bg-[#0B0E14]',
    border: 'border-gray-800',
    glow: ''
  },
  {
    name: 'Branco Puro (Fundo)',
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    usage: 'Cor oficial para interfaces em modo claro (Light Mode) e contraste.',
    text: 'text-white',
    bg: 'bg-white',
    border: 'border-gray-200',
    glow: 'shadow-sm'
  }
];
