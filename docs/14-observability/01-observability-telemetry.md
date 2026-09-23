# 14. Observabilidade e Telemetria

## 1. Gestão de Performance Client-Side
Por ser uma aplicação de processamento local, a observabilidade é focada em métricas de tempo de resposta da interface e consumo de memória:

```mermaid
flowchart LR
    UserInput["Alteração de Parâmetros"] -->|Debounce 200ms| Timer["Debounce Gate"]
    Timer -->|Renderização de Estimativa| Profiler["Tamanho de Arquivo Calculado"]
    Profiler --> UIFeedback["Feedback Visual Imediato (Bytes/KB/MB)"]

    CanvasOperation["Renderização Canvas 2D"] --> MemoryCheck{"Resolução > 4K?"}
    MemoryCheck -->|Sim| WarnLog["Monitoramento de Heap de Memória"]
    MemoryCheck -->|Não| StandardFlow["Execução Padrão"]
```

## 2. Profiling de Desempenho e Gargalos
* **Debounce de 200ms na Pré-visualização:** Impede que a digitação contínua no slider de tamanho execute dezenas de operações síncronas de desenho no Canvas 2D, mantendo o Thread Principal a 60 FPS.
* **Monitoramento de Canvas Size Limit:** O motor respeita os limites de renderização dos motores gráficos (ex: Safari iOS limita canvas a 16.777.216 pixels de área total).\n