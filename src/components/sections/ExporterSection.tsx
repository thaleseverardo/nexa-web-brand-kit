import React, { useState, useEffect } from 'react';
import { Sliders, Download, Copy, Eye, X } from 'lucide-react';
import { LogoAsset, ExportFormat, ExportResolutionPreset, BackgroundMode, QueueItem } from '../../types/brand';
import { LOGO_ASSETS } from '../../constants/brandLogos';
import { CanvasRenderService } from '../../services/canvasRender.service';
import { PackageZipService } from '../../services/packageZip.service';

interface ExporterSectionProps {
  selectedLogo: LogoAsset;
  onSelectLogo: (logo: LogoAsset) => void;
}

export const ExporterSection: React.FC<ExporterSectionProps> = ({ selectedLogo, onSelectLogo }) => {
  const [exportFormat, setExportFormat] = useState<ExportFormat>('png');
  const [exportSizeSelection, setExportSizeSelection] = useState<ExportResolutionPreset>('fhd');
  const [exportCustomSizeValue, setExportCustomSizeValue] = useState<number>(1920);
  const [exportBgType, setExportBgType] = useState<BackgroundMode>('transparent');
  const [exportCustomColor, setExportCustomColor] = useState<string>('#8B5CF6');
  const [exportQuality, setExportQuality] = useState<number>(1.0);
  const [liveFileSize, setLiveFileSize] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const [packageQueue, setPackageQueue] = useState<QueueItem[]>([]);
  const [isDownloadingPackage, setIsDownloadingPackage] = useState<boolean>(false);

  // Debounced estimation of file size to avoid locking CPU thread
  useEffect(() => {
    let active = true;
    const timer = setTimeout(async () => {
      try {
        const sizeValue = CanvasRenderService.getActiveSizeValue(exportSizeSelection, exportCustomSizeValue);
        const { blob } = await CanvasRenderService.renderToBlob(
          selectedLogo,
          sizeValue,
          exportFormat,
          exportBgType,
          exportCustomColor,
          exportQuality
        );
        if (active) {
          setLiveFileSize(blob.size);
        }
      } catch (err) {
        console.warn('Real-time size calculation skipped:', err);
      }
    }, 200);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [selectedLogo, exportFormat, exportSizeSelection, exportCustomSizeValue, exportBgType, exportCustomColor, exportQuality]);

  const handleSingleExport = async () => {
    try {
      setIsExporting(true);
      const sizeValue = CanvasRenderService.getActiveSizeValue(exportSizeSelection, exportCustomSizeValue);
      const { blob, filename } = await CanvasRenderService.renderToBlob(
        selectedLogo,
        sizeValue,
        exportFormat,
        exportBgType,
        exportCustomColor,
        exportQuality
      );

      const downloadLink = document.createElement('a');
      downloadLink.download = filename;
      downloadLink.href = URL.createObjectURL(blob);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(downloadLink.href);
      setIsExporting(false);
    } catch (error) {
      console.error('Failed to export:', error);
      setIsExporting(false);
    }
  };

  const addToPackageQueue = () => {
    const newItem: QueueItem = {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      logo: selectedLogo,
      format: exportFormat,
      sizeSelection: exportSizeSelection,
      customSizeValue: exportCustomSizeValue,
      bgType: exportBgType,
      customColor: exportCustomColor,
      quality: exportQuality
    };
    setPackageQueue(prev => [...prev, newItem]);
  };

  const removeFromPackageQueue = (id: string) => {
    setPackageQueue(prev => prev.filter(item => item.id !== id));
  };

  const clearPackageQueue = () => {
    setPackageQueue([]);
  };

  const downloadCompletePackage = async () => {
    if (packageQueue.length === 0) return;
    try {
      setIsDownloadingPackage(true);
      await PackageZipService.generateAndDownloadZip(packageQueue);
      setIsDownloadingPackage(false);
    } catch (error) {
      console.error('Failed to generate zip package:', error);
      setIsDownloadingPackage(false);
    }
  };

  const activeSizeValue = CanvasRenderService.getActiveSizeValue(exportSizeSelection, exportCustomSizeValue);
  const isHoriz = selectedLogo.type === 'Horizontal';
  const isVert = selectedLogo.type === 'Vertical';
  const originalRatio = isHoriz ? 3.5 : isVert ? 1.0 : 1.2;

  let previewW = activeSizeValue;
  let previewH = activeSizeValue;
  if (originalRatio >= 1) {
    previewW = activeSizeValue;
    previewH = Math.round(activeSizeValue / originalRatio);
    if (previewH < 16) {
      previewH = 16;
      previewW = Math.round(16 * originalRatio);
    }
  } else {
    previewH = activeSizeValue;
    previewW = Math.round(activeSizeValue * originalRatio);
    if (previewW < 16) {
      previewW = 16;
      previewH = Math.round(16 / originalRatio);
    }
  }
  const isClamped = (isHoriz && (activeSizeValue / originalRatio < 16)) || (!isHoriz && (activeSizeValue * originalRatio < 16));

  return (
    <section id="exporter_section" className="rounded-3xl bg-[#0F121D]/90 border border-white/5 p-6 sm:p-8 space-y-8 backdrop-blur-sm shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
          <Sliders className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>02. EXPORTADOR AVANÇADO DE ALTA RESOLUÇÃO</span>
        </div>
        {packageQueue.length > 0 && (
          <span className="self-start sm:self-auto text-xs font-mono bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            {packageQueue.length} {packageQueue.length === 1 ? 'Item no Pacote' : 'Itens no Pacote'}
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
              Exportador Dinâmico e Personalizado
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed">
              Gere logos em alta resolução para apresentações, web ou impressão. Altere o formato, defina o tamanho pelo lado maior mantendo a proporção exata, e exporte arquivos individuais ou agrupe múltiplos formatos em um pacote ZIP completo.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">1. Selecione o Logotipo:</label>
            <select 
              id="exporter_logo_select"
              value={selectedLogo.id}
              onChange={(e) => {
                const found = LOGO_ASSETS.find(l => l.id === e.target.value);
                if (found) onSelectLogo(found);
              }}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all cursor-pointer"
            >
              {LOGO_ASSETS.map((logo) => (
                <option key={logo.id} value={logo.id} className="bg-[#0B0E14] text-white text-xs">
                  {logo.name} ({logo.type})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">2. Formato do Arquivo:</label>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5">
              {(['png', 'jpg', 'webp', 'gif', 'svg', 'html5', 'tag'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setExportFormat(fmt)}
                  className={`px-2 py-2 rounded-xl border text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
                    exportFormat === fmt 
                      ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/5' 
                      : 'bg-black/35 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {fmt.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">3. Resolução (Lado Maior):</label>
            <div className="grid grid-cols-6 gap-1">
              {(['sd', 'hd', 'fhd', '4k', '8k', 'custom'] as const).map((sz) => {
                const labels = { sd: 'SD', hd: 'HD', fhd: 'FHD', '4k': '4K', '8k': '8K', custom: 'Pers.' };
                const dims = { sd: '640px', hd: '1280px', fhd: '1920px', '4k': '3840px', '8k': '7680px', custom: 'Seu' };
                return (
                  <button
                    key={sz}
                    onClick={() => setExportSizeSelection(sz)}
                    className={`px-1 py-1.5 rounded-xl border text-[10px] font-bold flex flex-col items-center justify-center transition-all cursor-pointer ${
                      exportSizeSelection === sz 
                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300' 
                        : 'bg-black/35 border-white/5 text-gray-400 hover:text-white'
                    }`}
                    title={dims[sz]}
                  >
                    <span>{labels[sz]}</span>
                    <span className="text-[8px] opacity-75 font-mono">{dims[sz]}</span>
                  </button>
                );
              })}
            </div>

            {exportSizeSelection === 'custom' && (
              <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Definir Lado Maior (px):</span>
                  <span className="text-xs font-mono font-semibold text-cyan-400">{exportCustomSizeValue} px</span>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="range" 
                    min="16" 
                    max="8192" 
                    step="1"
                    value={exportCustomSizeValue}
                    onChange={(e) => setExportCustomSizeValue(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-cyan-400" 
                  />
                  <input
                    type="number"
                    min="16"
                    max="10000"
                    value={exportCustomSizeValue}
                    onChange={(e) => {
                      const val = Math.max(16, Math.min(10000, Number(e.target.value)));
                      setExportCustomSizeValue(val);
                    }}
                    className="w-20 bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-center font-mono text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-gray-500">
                  <span>Mín: 16px</span>
                  <span>Máx: 10000px</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">4. Cor de Fundo:</label>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setExportBgType('transparent')}
                className={`px-2 py-2 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${exportBgType === 'transparent' ? 'bg-cyan-500/10 border-cyan-400 text-cyan-200' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white'}`}
              >
                Transp.
              </button>
              <button
                onClick={() => setExportBgType('dark')}
                className={`px-2 py-2 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${exportBgType === 'dark' ? 'bg-cyan-500/10 border-cyan-400 text-cyan-200' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white'}`}
              >
                Escuro
              </button>
              <button
                onClick={() => setExportBgType('light')}
                className={`px-2 py-2 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${exportBgType === 'light' ? 'bg-cyan-500/10 border-cyan-400 text-cyan-200' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white'}`}
              >
                Claro
              </button>
              <button
                onClick={() => setExportBgType('custom')}
                className={`px-2 py-2 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${exportBgType === 'custom' ? 'bg-cyan-500/10 border-cyan-400 text-cyan-200' : 'bg-black/35 border-white/5 text-gray-400 hover:text-white'}`}
              >
                Personaliz.
              </button>
            </div>

            {exportBgType === 'custom' && (
              <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-3 animate-fade-in">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Seletor Livre:</span>
                  <div className="flex items-center gap-2">
                    <input 
                      type="color" 
                      value={exportCustomColor}
                      onChange={(e) => setExportCustomColor(e.target.value)}
                      className="w-8 h-8 rounded-lg border-0 cursor-pointer bg-transparent"
                    />
                    <span className="text-xs font-mono text-white font-semibold uppercase">{exportCustomColor}</span>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <span className="block text-[9px] font-mono text-gray-500 uppercase">Paleta Rápida (Nexa Presets):</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[
                      { hex: '#0070F3', label: 'Azul' },
                      { hex: '#8B5CF6', label: 'Roxo' },
                      { hex: '#1E2335', label: 'Grafite' },
                      { hex: '#EF4444', label: 'Vermelho' },
                      { hex: '#10B981', label: 'Verde' },
                      { hex: '#F59E0B', label: 'Laranja' }
                    ].map((preset) => (
                      <button
                        key={preset.hex}
                        onClick={() => setExportCustomColor(preset.hex)}
                        className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[9px] text-gray-300 font-semibold border border-white/5 transition-all flex items-center gap-1 cursor-pointer"
                        style={{ borderLeftColor: preset.hex, borderLeftWidth: '3px' }}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {['jpg', 'webp'].includes(exportFormat) ? (
              <div className="space-y-2 p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Ajuste de Qualidade:</span>
                  <span className="font-mono text-cyan-400 font-bold">{Math.round(exportQuality * 100)}%</span>
                </div>
                <input 
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={exportQuality}
                  onChange={(e) => setExportQuality(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <p className="text-[9px] text-gray-400 leading-normal">
                  Arraste para comprimir o peso final do arquivo e cumprir limites de KB exigidos (ex. 50KB).
                </p>
              </div>
            ) : (
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-[10px] text-gray-400">
                {exportFormat === 'png' && 'Qualidade Máxima: PNG preserva nitidez extrema por padrão (lossless).'}
                {exportFormat === 'gif' && 'Qualidade Máxima: GIF exporta com cores otimizadas sem artefatos.'}
                {exportFormat === 'svg' && 'Vetorização Infinita: SVG não utiliza pixelização ou compressão de qualidade.'}
                {exportFormat === 'html5' && 'Alta Fidelidade Web: HTML5 incorporado de forma vetorial e responsiva.'}
                {exportFormat === 'tag' && 'Pronto para Uso: TAG gera código-fonte inline e imagens em Base64 nativo.'}
              </div>
            )}

            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-gray-400">TAMANHO ESTIMADO:</span>
              <span className="text-cyan-400 font-bold tracking-wider">
                {(() => {
                  if (liveFileSize === null) return 'Calculando...';
                  if (liveFileSize === 0) return '0 Bytes';
                  const k = 1024;
                  const dm = 1;
                  const sizes = ['Bytes', 'KB', 'MB'];
                  const i = Math.floor(Math.log(liveFileSize) / Math.log(k));
                  return parseFloat((liveFileSize / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                })()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              id="exporter_download_btn"
              onClick={handleSingleExport}
              disabled={isExporting}
              className="py-3.5 rounded-xl bg-linear-to-r from-[#0070F3] to-[#00DFD8] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 disabled:opacity-50 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{isExporting ? 'Processando...' : 'Baixar Imagem'}</span>
            </button>

            <button
              onClick={addToPackageQueue}
              className="py-3.5 rounded-xl bg-linear-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/25 cursor-pointer active:scale-98"
            >
              <Copy className="w-4 h-4 shrink-0" />
              <span>+ Add ao Pacote</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-black/40 border border-white/5 rounded-2xl h-full min-h-90 relative overflow-hidden">
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Preview de Renderização</span>
          </div>

          <div className="absolute top-3 right-3 text-[10px] font-mono bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-2.5 py-0.5 rounded-md">
            {exportFormat.toUpperCase()}
          </div>
          
          <div 
            className={`w-full max-w-md h-64 rounded-xl flex items-center justify-center p-8 border transition-all duration-300 relative overflow-hidden ${
              exportBgType === 'dark' 
                ? 'bg-[#0B0E14] border-white/5' 
                : exportBgType === 'light' 
                ? 'bg-white border-gray-200' 
                : exportBgType === 'transparent'
                ? 'checkered-bg border-white/5'
                : 'border-white/5'
            }`}
            style={exportBgType === 'custom' ? { backgroundColor: exportCustomColor } : undefined}
          >
            <img 
              src={selectedLogo.path} 
              alt="Preview" 
              className="max-h-full max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-4 text-center space-y-1">
            <p className="text-xs text-white font-semibold">{selectedLogo.name}</p>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-gray-400">
                <span>Dimensões: <strong className="text-cyan-400">{previewW} x {previewH} px</strong></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>Lado Maior: <strong className="text-cyan-400">{activeSizeValue}px</strong></span>
              </div>
              {isClamped && (
                <p className="text-[9px] text-amber-400 font-mono italic">
                  ⚠️ Lado menor limitado a 16px para preservar legibilidade mínima.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/5 pt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-mono font-bold text-white tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Seu Pacote de Download (.ZIP)
          </h4>
          {packageQueue.length > 0 && (
            <button
              onClick={clearPackageQueue}
              className="text-xs font-mono text-gray-500 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Limpar Fila</span>
            </button>
          )}
        </div>

        {packageQueue.length === 0 ? (
          <div className="p-6 rounded-2xl bg-black/20 border border-white/5 text-center space-y-2">
            <p className="text-xs text-gray-400">
              Nenhum item adicionado ao pacote ainda.
            </p>
            <p className="text-[10px] text-gray-500 max-w-md mx-auto">
              Ajuste o formato, tamanho e fundo desejados para o logo atual, e clique em <strong className="text-pink-400">+ Add ao Pacote</strong> para agrupar múltiplos arquivos em um download unificado.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {packageQueue.map((item) => {
                const itemSize = CanvasRenderService.getActiveSizeValue(item.sizeSelection, item.customSizeValue);
                const bgDesc = item.bgType === 'transparent' 
                  ? 'Transparente' 
                  : item.bgType === 'dark' 
                  ? 'Escuro' 
                  : item.bgType === 'light' 
                  ? 'Claro' 
                  : `Cor ${item.customColor}`;

                return (
                  <div 
                    key={item.id} 
                    className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between gap-3 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        className={`w-10 h-10 rounded-lg p-1.5 flex items-center justify-center border border-white/5 ${
                          item.bgType === 'dark' ? 'bg-[#0B0E14]' : item.bgType === 'light' ? 'bg-white' : 'checkered-bg'
                        }`}
                        style={item.bgType === 'custom' ? { backgroundColor: item.customColor } : undefined}
                      >
                        <img 
                          src={item.logo.path} 
                          alt="" 
                          className="max-w-full max-h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[11px] font-semibold text-white truncate leading-tight">{item.logo.name}</p>
                        <div className="flex items-center gap-1 text-[9px] font-mono text-gray-400 mt-0.5">
                          <span className="text-cyan-400 font-bold uppercase">{item.format}</span>
                          <span>•</span>
                          <span>{itemSize}px</span>
                          <span>•</span>
                          <span className="truncate max-w-20">{bgDesc}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromPackageQueue(item.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                      title="Remover do pacote"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end">
              <button
                onClick={downloadCompletePackage}
                disabled={isDownloadingPackage}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20 disabled:opacity-50 cursor-pointer"
              >
                <Download className={`w-4 h-4 shrink-0 ${isDownloadingPackage ? 'animate-spin' : ''}`} />
                <span>{isDownloadingPackage ? 'Gerando Pacote ZIP...' : `Baixar Pacote Completo (${packageQueue.length} itens)`}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
