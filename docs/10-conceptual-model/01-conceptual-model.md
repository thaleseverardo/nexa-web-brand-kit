# 10. Modelo Conceitual de Dados

## 1. Diagrama de Entidades em Memória (TypeScript Types)

```mermaid
classDiagram
    class LogoAsset {
        +string id
        +string name
        +Category category
        +string path
        +string desc
        +string type
        +BgPreference bgPreference
    }

    class BrandColor {
        +string name
        +string hex
        +string rgb
        +string usage
        +string text
        +string bg
        +string glow
        +string border
    }

    class QueueItem {
        +string id
        +LogoAsset logo
        +ExportFormat format
        +ExportResolutionPreset sizeSelection
        +number customSizeValue
        +BackgroundMode bgType
        +string customColor
        +number quality
    }

    class RenderResult {
        +Blob blob
        +string filename
    }

    class CanvasRenderService {
        +getActiveSizeValue(selection, customValue) number
        +fetchSvgText(path) Promise~string~
        +resolveDimensions(logo, targetSize, originalSvgText) DimensionObject
        +renderToBlob(logo, targetSize, format, bgType, customColor, quality) Promise~RenderResult~
    }

    class PackageZipService {
        +generateAndDownloadZip(queue) Promise~void~
    }

    QueueItem "1" o-- "1" LogoAsset : referencia
    PackageZipService ..> QueueItem : processa lista
    PackageZipService ..> CanvasRenderService : invoca
    CanvasRenderService ..> RenderResult : retorna
```\n