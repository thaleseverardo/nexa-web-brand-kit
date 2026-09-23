# 16. Roadmap e Evolução Arquitetural

## 1. Linha do Tempo e Marcos Arquiteturais

```mermaid
timeline
    title Ciclo de Vida e Evolução Arquitetural
    section Milestone 1 (Atual)
        v1.0.0 : Arquitetura SPA React 19
               : Pipeline Canvas 2D Client-Side
               : Integração com JSZip e Tailwind v4
               : Especificação de Diretrizes para IA
    section Milestone 2 (Curto Prazo)
        v1.1.0 : Web Workers para Renderização Offscreen
               : Cache Offline via PWA Service Worker
               : Exportação para Formato EPS e PDF Vetorial
    section Milestone 3 (Médio Prazo)
        v1.2.0 : Testes Visuais de Regressão Automatizados
               : API Headless via Edge Functions
               : Suporte a Tokens de Design (Style Dictionary)
```

## 2. Próximas Refatorações Estruturais
* **OffscreenCanvas + Web Workers:** Migrar a execução do `CanvasRenderService` para segundo plano (Background Worker), garantindo thread principal totalmente desimpedida mesmo durante a geração de arquivos 8K em lote.
* **Geração de Tokens JSON / CSS Variables:** Disponibilizar endpoint e exportação de tokens de cor e tipografia em formato padrão W3C Design Tokens Community Group (DTCG).\n