# 09. Máquina de Estados de Exportação

## 1. Ciclo de Vida do Exportador e da Fila de Pacote

```mermaid
stateDiagram-v2
    [*] --> Idle: Inicialização do App

    state Idle {
        [*] --> LogoLoaded
        LogoLoaded --> ConfigUpdated: Usuário altera resolução/fundo/formato
        ConfigUpdated --> CalculatingEstimatedSize: Debounce 200ms
        CalculatingEstimatedSize --> LogoLoaded: Estimativa atualizada
    }

    Idle --> SingleExportProcessing: Disparo de Exportação Individual
    state SingleExportProcessing {
        [*] --> FetchingSvg
        FetchingSvg --> DrawingOnCanvas
        DrawingOnCanvas --> CreatingBlob
        CreatingBlob --> TriggeringDownload
        TriggeringDownload --> [*]
    }
    SingleExportProcessing --> Idle: Download concluído / Falha tratada

    Idle --> QueueManaging: Adicionar ao Pacote
    state QueueManaging {
        [*] --> ItemEnqueued
        ItemEnqueued --> QueueReady
        QueueReady --> ItemRemoved: Usuário remove item
        ItemRemoved --> QueueReady
        QueueReady --> QueueEmptied: Limpar fila
        QueueEmptied --> [*]
    }
    QueueManaging --> Idle: Fila pronta / alterada

    QueueManaging --> BatchZipProcessing: Disparo de Baixar Pacote ZIP
    state BatchZipProcessing {
        [*] --> IteratingQueue
        IteratingQueue --> BatchRenderingBlobs
        BatchRenderingBlobs --> CompressingZip
        CompressingZip --> TriggeringZipDownload
        TriggeringZipDownload --> [*]
    }
    BatchZipProcessing --> QueueManaging: Pacote entregue com sucesso
```\n