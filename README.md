# Villa Rosa Butiá

Site institucional dos chalés da Villa Rosa Butiá (Praia do Rosa / SC).

Stack: [Vite](https://vite.dev) + [React 19](https://react.dev) + [React Router](https://reactrouter.com),
galerias com [react-photo-album](https://react-photo-album.com) e
[yet-another-react-lightbox](https://yet-another-react-lightbox.com).

## Requisitos

- Node.js 22 LTS (ver `.nvmrc`) — `nvm use`

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros scripts:

| Script            | O que faz                                             |
| ----------------- | ----------------------------------------------------- |
| `npm run build`   | Build de produção em `dist/`                          |
| `npm run preview` | Serve o `dist/` para conferência                      |
| `npm run lint`    | ESLint                                                |
| `npm run photos`  | Regenera as galerias a partir das fotos originais     |

## Galerias de fotos

As galerias são geradas por `scripts/generate-photos.mjs`, que lê as pastas de
**originais** em `src/images/` (não versionadas):

| Galeria        | Pasta de origem          |
| -------------- | ------------------------ |
| Chalé 1        | `src/images/2026 chalé 1` |
| Chalé 2        | `src/images/2026 chalé 2` |
| Chalé 3        | `src/images/2026 chalé 3` |
| Fotos gerais   | `src/images/2026 externas` |

Regras: só os arquivos soltos na raiz de cada pasta, no máximo **16 imagens** por
galeria (escolhidas de forma uniformemente distribuída quando há mais). O script
gera versões otimizadas em 400/800/1600 px dentro de `src/images/galeria/` — essa
pasta **é versionada** e é o que entra no build.

Para trocar as fotos: atualize os arquivos nas pastas `2026 *` e rode
`npm run photos` (precisa de macOS, usa o utilitário `sips`).

## Deploy

Build: `npm run build` → `dist/`. Todas as rotas devem cair em `index.html`
(SPA / React Router).

- **Vercel**: `vercel.json` já define framework `vite`, output `dist` e os
  rewrites. Se o projeto foi criado antes com o preset Create React App, confira
  em *Project Settings → Build & Development* que não há "Output Directory"
  fixado em `build` (o `vercel.json` sobrepõe, mas é bom limpar).
- **Netlify**: `netlify.toml` (build, publish `dist/`, Node 22, fallback de SPA).
- **Outros hosts estáticos**: publique `dist/` e redirecione tudo para
  `index.html`.
