# infinityconsulting

Converta esse site capturado em um projeto React + Tailwind. Reproduza o layout, cores, fontes, imagens e componentes visuais o mais fiel possível. Use os arquivos HTML/CSS/JS da pasta raiz como referência. Mantenha as imagens e assets locais, e gere componentes reutilizáveis quando fizer sentido.

Se o ZIP tiver uma pasta `pages/` com outras páginas (`pages/<slug>/index.html`), trate cada uma como uma rota separada da aplicação: crie as rotas correspondentes (ex: `/` para o `index.html` da raiz e `/<slug>` para cada subpágina) usando o roteador do projeto (React Router ou TanStack Router). Preserve a navegação entre as páginas — todos os links internos (`<a href>`) que apontam para outras páginas capturadas devem virar links do roteador (`<Link to="...">`) apontando para as rotas equivalentes. Compartilhe os assets da pasta `assets/` entre todas as páginas e reaproveite componentes comuns (header, footer, navegação) em um layout único.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://infinityconsulting.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7b9a3d05-270b-4485-a17f-0b1c43ce5bc9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
