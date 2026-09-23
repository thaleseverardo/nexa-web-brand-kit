# 06. Componentes da Aplicação (C4 L3)

## 1. Arquitetura de Componentes

```mermaid
flowchart TB
    subgraph UI ["Camada de Apresentação (React 19 + Tailwind v4)"]
        App["App.tsx (Root State Orchestrator)"]
        Header["Header.tsx"]
        Hero["HeroSection.tsx"]
        Logos["LogosSection.tsx"]
        LogoCard["LogoCard.tsx"]
        Exporter["ExporterSection.tsx"]
        Mockup["MockupSandboxSection.tsx"]
        Colors["ColorPaletteSection.tsx"]
        Typo["TypographySection.tsx"]
        Rules["RulesSection.tsx"]
        AiPortal["AiPortalSection.tsx"]
        Footer["Footer.tsx"]
    end

    subgraph Services ["Camada de Serviços em Memória"]
        CanvasService["CanvasRenderService"]
        ZipService["PackageZipService"]
    end

    subgraph Repositories ["Repositório de Constantes e Metadados"]
        BrandLogos["brandLogos.ts"]
        BrandColors["brandColors.ts"]
        AiInstructions["aiInstructions.ts"]
    end

    App --> Header
    App --> Hero
    App --> Logos
    App --> Exporter
    App --> Mockup
    App --> Colors
    App --> Typo
    App --> Rules
    App --> AiPortal
    App --> Footer

    Logos --> LogoCard
    Logos --> BrandLogos
    Exporter --> CanvasService
    Exporter --> ZipService
    Mockup --> BrandLogos
    Colors --> BrandColors
    AiPortal --> AiInstructions

    ZipService --> CanvasService
```\n