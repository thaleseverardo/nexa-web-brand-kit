# 08. Catálogo de Eventos do Sistema

## 1. Eventos Síncronos e Assíncronos em Memória

| Código do Evento | Origem | Destino | Natureza | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| `EVT_LOGO_SELECTED_FOR_EXPORT` | `LogosSection` / `LogoCard` | `App` -> `ExporterSection` | Síncrono (React State) | Usuário clica no botão de sliders de um card; altera o logo ativo no exportador e executa scroll suave. |
| `EVT_EXPORT_CONFIG_CHANGED` | Controles de UI de Exportação | `ExporterSection` | Reativo (State Hook) | Modificação de formato, preset de tamanho, cor de fundo ou qualidade. |
| `EVT_SIZE_ESTIMATION_DEBOUNCED` | `useEffect` (200ms) | `CanvasRenderService` | Assíncrono | Dispara cálculo isolado em baixa prioridade para estimar peso em Bytes/KB/MB do ativo. |
| `EVT_QUEUE_ITEM_ADDED` | Botão "+ Add ao Pacote" | `ExporterSection.packageQueue` | Síncrono | Persiste o snapshot atual dos parâmetros de exportação na fila em lote. |
| `EVT_QUEUE_ITEM_REMOVED` | Ação de Exclusão no Card da Fila | `ExporterSection.packageQueue` | Síncrono | Remove item pontual identificado por UUID temporal. |
| `EVT_QUEUE_CLEARED` | Ação "Limpar Fila" | `ExporterSection.packageQueue` | Síncrono | Redefine array de fila para estado vazio `[]`. |
| `EVT_ZIP_GENERATION_STARTED` | Ação "Baixar Pacote Completo" | `PackageZipService` | Assíncrono | Bloqueia botão, exibe spinner e inicia renderização paralela de todos os itens da fila. |
| `EVT_ZIP_DOWNLOAD_COMPLETED` | `PackageZipService` | Navegador (Window) | Assíncrono | Cria elemento âncora invisível com `URL.createObjectURL` e revoga URL após o clique. |
| `EVT_CLIPBOARD_COPY` | Botões de Copiar (SVG/HEX/CSS) | API `navigator.clipboard` | Assíncrono | Transfere payload textual e ativa estado transitório visual de "Copiado!" por 2000ms. |\n