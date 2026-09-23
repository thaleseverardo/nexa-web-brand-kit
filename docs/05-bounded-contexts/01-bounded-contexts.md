# 05. Contextos Delimitados (Bounded Contexts)

## 1. Delimitação de Fronteiras

```mermaid
flowchart TD
    subgraph BrandGovernanceContext ["Contexto: Governança de Marca"]
        BC1["Catálogo de Ativos (BrandLogos)"]
        BC2["Tokens de Cores e Gradientes (BrandColors)"]
        BC3["Diretrizes de Tipografia e Regras de Uso"]
    end

    subgraph TransformationContext ["Contexto: Processamento e Exportação"]
        TC1["CanvasRenderService"]
        TC2["PackageZipService"]
        TC3["Queue State Management"]
    end

    subgraph SandboxContext ["Contexto: Simulação de Superfícies"]
        SC1["Mockup Render Engine"]
        SC2["Template Compositor"]
    end

    subgraph AICognitionContext ["Contexto: Instruções Cognitivas"]
        AC1["Prompt Factory"]
        AC2["Markdown Specification Provider"]
    end

    BrandGovernanceContext -->|Fornece Schemas de Logos e Cores| TransformationContext
    BrandGovernanceContext -->|Fornece Ativos e Estilos| SandboxContext
    BrandGovernanceContext -->|Fornece Regras e Caminhos| AICognitionContext
```

## 2. Contratos de Fronteira
* **Ativo Vetorial (`LogoAsset`):** Entidade fundamental imutável compartilhada entre Governança, Renderização e Sandbox.
* **Item de Fila (`QueueItem`):** Modelo de transporte de comando para o contexto de exportação em lote.\n