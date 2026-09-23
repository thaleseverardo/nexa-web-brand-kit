# 07. Fluxo de Exportação e Renderização de Ativos

## 1. Diagrama de Sequência: Pipeline de Renderização

```mermaid
sequenceDiagram
    autonumber
    actor User as Usuário / Designer
    participant UI as ExporterSection
    participant CanvasSvc as CanvasRenderService
    participant DOM as DOMParser & XMLSerializer
    participant NativeCanvas as HTML5 2D Canvas
    participant ZipSvc as PackageZipService

    User->>UI: Altera Resolução (ex: 4K), Formato (WEBP) e Fundo (Escuro)
    UI->>CanvasSvc: getActiveSizeValue(preset, customValue)
    UI->>CanvasSvc: renderToBlob(logo, size, format, bgType, customColor, quality)
    
    CanvasSvc->>CanvasSvc: fetchSvgText(logo.path)
    CanvasSvc->>DOM: Parseia SVG e extrai viewBox / dimensões originais
    DOM-->>CanvasSvc: Dimensões de origem (vbWidth, vbHeight)
    CanvasSvc->>CanvasSvc: resolveDimensions() com clamp mínimo de 16px
    
    alt Formato é Vetorial (SVG / HTML5 / TAG)
        CanvasSvc->>DOM: Injeta cor de fundo ou converte para Base64 Data-URI
        CanvasSvc-->>UI: Retorna Blob de texto vetorial e nome de arquivo formatado
    else Formato é Matricial (PNG / JPG / WEBP / GIF)
        CanvasSvc->>NativeCanvas: Cria elemento canvas offscreen com largura/altura calculadas
        CanvasSvc->>NativeCanvas: Aplica fundo (transparente ou preenchimento de cor)
        CanvasSvc->>NativeCanvas: drawImage(imgSvg)
        NativeCanvas->>CanvasSvc: toBlob(mimeType, quality)
        CanvasSvc-->>UI: Retorna Blob binário da imagem renderizada
    end

    UI->>UI: Atualiza tamanho estimado em tempo real com debounce
    
    opt Adicionar à Fila de Pacote
        User->>UI: Clica em "+ Add ao Pacote"
        UI->>UI: Adiciona QueueItem ao estado packageQueue
    end

    opt Baixar Pacote Completo (.ZIP)
        User->>UI: Clica em "Baixar Pacote Completo"
        UI->>ZipSvc: generateAndDownloadZip(queue)
        loop Para cada item na fila
            ZipSvc->>CanvasSvc: renderToBlob()
            CanvasSvc-->>ZipSvc: Blob e filename
            ZipSvc->>ZipSvc: zip.file(filename, blob)
        end
        ZipSvc->>ZipSvc: zip.generateAsync({ type: 'blob' })
        ZipSvc-->>User: Dispara download automático do arquivo ZIP
    end
```\n