import { LogoAsset, ExportFormat, ExportResolutionPreset, BackgroundMode } from '../types/brand';

export interface RenderResult {
  blob: Blob;
  filename: string;
}

export class CanvasRenderService {
  /**
   * Resolve numeric pixel sizes from presets.
   */
  public static getActiveSizeValue(
    selection: ExportResolutionPreset,
    customValue: number
  ): number {
    switch (selection) {
      case 'sd': return 640;
      case 'hd': return 1280;
      case 'fhd': return 1920;
      case '4k': return 3840;
      case '8k': return 7680;
      case 'custom': return Math.max(16, Math.min(10000, customValue || 1920));
      default: return 1920;
    }
  }

  public static async fetchSvgText(path: string): Promise<string> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG at ${path}`);
    }
    return response.text();
  }

  public static resolveDimensions(
    logo: LogoAsset,
    targetSize: number,
    originalSvgText?: string
  ): { width: number; height: number; vbWidth: number; vbHeight: number } {
    let vbWidth = 100;
    let vbHeight = 100;

    if (originalSvgText) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(originalSvgText, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      const viewBox = svgElement.getAttribute('viewBox');
      if (viewBox) {
        const parts = viewBox.split(/[\s,]+/).map(Number);
        if (parts.length === 4 && !parts.some(Number.isNaN)) {
          vbWidth = parts[2];
          vbHeight = parts[3];
        }
      } else {
        const wAttr = parseFloat(svgElement.getAttribute('width') || '100');
        const hAttr = parseFloat(svgElement.getAttribute('height') || '100');
        if (!Number.isNaN(wAttr) && !Number.isNaN(hAttr)) {
          vbWidth = wAttr;
          vbHeight = hAttr;
        }
      }
    } else {
      const type = logo.type;
      if (type === 'Horizontal') {
        vbWidth = 350;
        vbHeight = 100;
      } else if (type === 'Vertical') {
        vbWidth = 100;
        vbHeight = 100;
      } else {
        vbWidth = 120;
        vbHeight = 100;
      }
    }

    const aspectRatio = vbWidth / vbHeight;
    let targetWidth = targetSize;
    let targetHeight = targetSize;

    if (vbWidth >= vbHeight) {
      targetWidth = targetSize;
      targetHeight = Math.round(targetSize / aspectRatio);
      if (targetHeight < 16) {
        targetHeight = 16;
        targetWidth = Math.round(16 * aspectRatio);
      }
    } else {
      targetHeight = targetSize;
      targetWidth = Math.round(targetSize * aspectRatio);
      if (targetWidth < 16) {
        targetWidth = 16;
        targetHeight = Math.round(16 / aspectRatio);
      }
    }

    return { width: targetWidth, height: targetHeight, vbWidth, vbHeight };
  }

  public static async renderToBlob(
    logo: LogoAsset,
    targetSize: number,
    format: ExportFormat,
    bgType: BackgroundMode,
    customColor: string,
    quality: number = 1.0
  ): Promise<RenderResult> {
    const svgText = await this.fetchSvgText(logo.path);
    const { width, height } = this.resolveDimensions(logo, targetSize, svgText);

    const bgName = bgType === 'transparent' ? 'transp' : bgType === 'custom' ? `custom_${customColor.replace('#', '')}` : bgType;
    const extension = format === 'html5' ? 'html' : format === 'tag' ? 'txt' : format;
    const filename = `${logo.id}_${targetSize}px_${bgName}.${extension}`;

    if (format === 'svg') {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      
      svgElement.setAttribute('width', `${width}`);
      svgElement.setAttribute('height', `${height}`);

      if (bgType !== 'transparent') {
        let bgColor = '#FFFFFF';
        if (bgType === 'dark') bgColor = '#0B0E14';
        else if (bgType === 'custom') bgColor = customColor;

        const rect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', '100%');
        rect.setAttribute('height', '100%');
        rect.setAttribute('fill', bgColor);
        svgElement.insertBefore(rect, svgElement.firstChild);
      }

      const serializer = new XMLSerializer();
      const processedSvgText = serializer.serializeToString(svgDoc);
      const blob = new Blob([processedSvgText], { type: 'image/svg+xml;charset=utf-8' });
      return { blob, filename };
    }

    if (format === 'html5') {
      let bgColor = '#FFFFFF';
      if (bgType === 'dark') bgColor = '#0B0E14';
      else if (bgType === 'custom') bgColor = customColor;
      else if (bgType === 'transparent') bgColor = '#111827';

      const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexa Brand Asset - ${logo.name}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: ${bgColor};
      font-family: system-ui, -apple-system, sans-serif;
    }
    .asset-container {
      width: 100%;
      max-width: ${width}px;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
    }
    .tag-label {
      font-size: 11px;
      font-family: monospace;
      color: rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.05);
      padding: 4px 8px;
      border-radius: 4px;
      margin-top: 12px;
    }
  </style>
</head>
<body>
  <div class="asset-container">
    ${svgText}
    <div class="tag-label">NEXA BRAND KIT - ${width}x${height}px</div>
  </div>
</body>
</html>`;
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      return { blob, filename };
    }

    if (format === 'tag') {
      const base64Svg = btoa(unescape(encodeURIComponent(svgText)));
      const mimeType = 'image/svg+xml';
      const dataUri = `data:${mimeType};base64,${base64Svg}`;

      const tagContent = `================================================================================
NEXA BRAND KIT - EMBED CODES & HTML TAGS
Asset: ${logo.name} (${width}x${height}px)
================================================================================

1. DIRECT INLINE SVG TAG (Recomendado para máxima performance e nitidez):
--------------------------------------------------------------------------------
${svgText}


2. IMG EMBED WITH BASE64 DATA-URI (Fácil integração em qualquer HTML):
--------------------------------------------------------------------------------
<img src="${dataUri}" alt="${logo.name}" width="${width}" height="${height}" style="display: block; max-width: 100%; height: auto;" />


3. STANDARD IMG SOURCE LINK (Para carregar de um servidor ou pasta local):
--------------------------------------------------------------------------------
<img src="${logo.path.split('/').pop()}" alt="${logo.name}" width="${width}" height="${height}" style="display: block; max-width: 100%; height: auto;" />
`;
      const blob = new Blob([tagContent], { type: 'text/plain;charset=utf-8' });
      return { blob, filename };
    }

    return new Promise((resolve, reject) => {
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error('Could not get 2D context'));
          return;
        }

        ctx.clearRect(0, 0, width, height);

        if (format === 'jpg' && bgType === 'transparent') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
        } else if (bgType !== 'transparent') {
          let bgColor = '#FFFFFF';
          if (bgType === 'dark') bgColor = '#0B0E14';
          else if (bgType === 'custom') bgColor = customColor;
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, width, height);
        }

        ctx.drawImage(img, 0, 0, width, height);

        let mimeType = 'image/png';
        if (format === 'webp') mimeType = 'image/webp';
        else if (format === 'jpg') mimeType = 'image/jpeg';
        else if (format === 'gif') mimeType = 'image/gif';

        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);
          if (blob) {
            resolve({ blob, filename });
          } else {
            reject(new Error('Blob generation failed'));
          }
        }, mimeType, quality);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Image load failed'));
      };
    });
  }
}
