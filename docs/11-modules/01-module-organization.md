# 11. Organização de Módulos e Código-Fonte

## 1. Estrutura Modular
O projeto adota uma segregação estrita por responsabilidade técnica:

```text
src/
├── components/
│   ├── layout/            # Estrutura base da casca visual (Header, Footer)
│   ├── logos/             # Componentes atômicos de exibição de marcas (LogoCard)
│   └── sections/          # Seções autônomas da página (Hero, Exporter, Mockups, etc.)
├── constants/             # Constantes imutáveis da marca e manuais de IA
├── services/              # Camada de serviços puros e manipulação de Canvas/ZIP
└── types/                 # Interfaces e Union Types de domínio
```

## 2. Padrões de Design de Código
* **Serviços Estáticos Puros (`CanvasRenderService` e `PackageZipService`):** Métodos sem dependência de lifecycle do React, facilitando testes unitários e migração futura para Web Workers.
* **Separation of Concerns (SoC):** As seções em `components/sections/` contêm apenas lógica de orquestração de UI; nenhuma chamada nativa a Canvas 2D ou API de compressão de arquivos é acoplada diretamente aos componentes visuais.
* **Zero Run-Time CSS Overhead:** Uso nativo do Tailwind CSS v4 com engine Rust/Vite, eliminando cálculos de estilo em tempo de execução via CSS-in-JS.\n