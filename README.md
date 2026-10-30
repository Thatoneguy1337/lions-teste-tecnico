# Lions Seminovos — protótipo frontend

Protótipo responsivo de uma experiência de compra de seminovos, inspirado nas seções de início, catálogo e agendamento da Lions Seminovos.

> Projeto demonstrativo independente, sem vínculo oficial com a Lions Seminovos. O catálogo contém dados fictícios e não representa o estoque ou os preços da loja.

## Tecnologias

- React e TypeScript
- Vite
- styled-components
- Lucide React
- Simple Icons React (ícones de marcas na tela FIPE)

## Como executar

### Pré-requisito

- Node.js 20 ou superior e npm.

Instale as dependências da aplicação frontend:

```bash
cd frontend
npm install
```

Inicie o servidor local a partir de `frontend`:

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

Não é necessário iniciar banco de dados, Docker, API ou configurar variáveis de ambiente. O protótipo funciona sem integração com serviços.

## O que é possível explorar

- Navegação local entre `/financiamento`, `/fipe`, `/lojas`, `/pos-venda`, `/estoque?pagina=1`, `/agende-sua-visita` e `/utilitarios`, além da página inicial.
- Vitrine da página inicial e catálogo usando registros fictícios de veículos existentes no código, identificados como exemplos e sem representar estoque ou ofertas disponíveis.
- Formulários demonstrativos que não enviam nem armazenam dados; agendamento local sem criar visitas reais e financiamento em modos FIPE/valores com veículos mock, sem consulta FIPE ou análise de crédito.
- Página de lojas com regiões do Rio de Janeiro, São Paulo e Flórida, seguindo o layout da referência; imagens genéricas ilustrativas, confirme endereços atualizados nos canais oficiais. Pós-venda com consulta demonstrativa por CPF/CNPJ, sem consultar ou armazenar documentos.
- Vídeo de destaque em loop e carrossel de campanhas com controles acessíveis.
- Navegação principal, menu mobile e rodapé com links para as páginas locais.
- Layout responsivo, estados de foco acessíveis e suporte à preferência por movimento reduzido.
- Logos disponíveis da página FIPE renderizados pelo pacote Simple Icons React; marcas sem ícone compatível permanecem em texto.

## Organização

```text
.
├── frontend/
│   ├── public/                 # Favicon do protótipo
│   └── src/
│       ├── data/vehicles.ts    # Estoque fictício local
│       ├── App.tsx             # Página inicial e navegação compartilhada
│       ├── pages.tsx           # Páginas locais demonstrativas
│       ├── pagesStyles.ts      # Estilos das páginas demonstrativas
│       ├── main.tsx            # Inicialização React
│       ├── styles.ts           # Tema e componentes styled-components
│       └── types.ts            # Tipos do frontend
└── README.md
```

## Referência visual e imagens

O HTML público e o manifesto de módulos JavaScript da página inicial foram consultados para mapear a estrutura geral. A aplicação real carrega a interface em uma SPA e organiza áreas de vídeos promocionais, estoque/destaques e agendamento. Este protótipo usa essas áreas como referência funcional, sem copiar o layout integral ou baixar/republicar os vídeos, fotografias ou outros arquivos de mídia da loja.

As imagens são exemplos do Unsplash e o vídeo da vitrine usa um fluxo HLS externo; esses recursos precisam de conexão à internet. Os ícones da página FIPE vêm da biblioteca Simple Icons React, distribuída sob licença MIT; as marcas representadas continuam pertencendo aos respectivos titulares.
