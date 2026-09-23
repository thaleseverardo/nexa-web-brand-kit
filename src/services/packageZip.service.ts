import JSZip from 'jszip';
import { QueueItem } from '../types/brand';
import { CanvasRenderService } from './canvasRender.service';

export class PackageZipService {
  public static async generateAndDownloadZip(queue: QueueItem[]): Promise<void> {
    if (queue.length === 0) return;

    const zip = new JSZip();

    for (const item of queue) {
      const sizeValue = CanvasRenderService.getActiveSizeValue(item.sizeSelection, item.customSizeValue);
      const { blob, filename } = await CanvasRenderService.renderToBlob(
        item.logo,
        sizeValue,
        item.format,
        item.bgType,
        item.customColor,
        item.quality
      );
      zip.file(filename, blob);
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const downloadLink = document.createElement('a');
    downloadLink.download = `nexa_brand_kit_pacote_${Date.now()}.zip`;
    downloadLink.href = URL.createObjectURL(content);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  }
}
