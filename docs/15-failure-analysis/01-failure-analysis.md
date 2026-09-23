# 15. Análise de Falhas (Failure Maps)

## 1. Mapeamento de Modos de Falha e Mitigação

| Modo de Falha | Gatilho | Impacto | Mecanismo de Mitigação Implementado |
| :--- | :--- | :--- | :--- |
| **Canvas Allocation Crash** | Usuário solicita resolução customizada extrema (ex: 50.000px). | Crash da aba do navegador por esgotamento de VRAM/RAM. | Clamping de segurança estrito (`max: 10000px`) e slider com valor nominal de 8192px. |
| **SVG Invisibility / Clipping** | Redimensionamento para tamanhos minúsculos (ex: < 10px). | Letras do wordmark tornam-se ilegíveis ou colapsam. | Clamp proporcional na função `resolveDimensions` que impõe mínimo de 16px no menor lado. |
| **Bloqueio de UI por Pacote ZIP Massivo** | Fila com múltiplos ativos em 8K processados em lote. | Queda momentânea na taxa de quadros (UI Freeze). | Processamento assíncrono sequencial via `for...of` com atualização do estado `isDownloadingPackage`. |
| **Asset 404 por Base URL Drift** | Deploy em subdiretórios (ex: GitHub Pages `/nexa-web-brand-kit/`). | Quebra de links de imagens e favicon. | Uso estrito de `${import.meta.env.BASE_URL}` interpolado em todos os caminhos estáticos de ativos. |
| **Tainted Canvas Security Error** | Tentativa de exportar vetores externos não sanitizados. | Exceção `SecurityError: The operation is insecure`. | Configuração explícita de `crossOrigin = 'anonymous'` em elementos de imagem intermediários. |\n