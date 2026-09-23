export type ExportFormat = 'png' | 'jpg' | 'webp' | 'gif' | 'svg' | 'html5' | 'tag';
export type ExportResolutionPreset = 'sd' | 'hd' | 'fhd' | '4k' | '8k' | 'custom';
export type BackgroundMode = 'transparent' | 'dark' | 'light' | 'custom';

export interface BrandColor {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  text: string;
  bg: string;
  glow: string;
  border?: string;
}

export interface LogoAsset {
  id: string;
  name: string;
  category: 'core' | 'cnc' | 'print' | 'web';
  path: string;
  desc: string;
  type: string;
  bgPreference: 'dark' | 'light' | 'grid';
}

export interface QueueItem {
  id: string;
  logo: LogoAsset;
  format: ExportFormat;
  sizeSelection: ExportResolutionPreset;
  customSizeValue: number;
  bgType: BackgroundMode;
  customColor: string;
  quality: number;
}

export type MockupTemplate = 'instagram' | 'linkedin' | 'badge' | 'website' | 'facebook' | 'youtube' | 'tiktok';
export type MockupBg = 'dark_ambient' | 'neon_glow' | 'minimal_white' | 'tech_grid';
