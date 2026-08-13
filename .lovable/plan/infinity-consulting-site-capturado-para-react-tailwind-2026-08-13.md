# Infinity Consulting — site capturado para React + Tailwind

Reconstruir o site institucional da Infinity Consulting (WordPress/Elementor capturado) como app React com TanStack Router e Tailwind, fiel em layout, cores, tipografia e imagens.

## Rotas

- `/` — home (`index.html`): hero, sobre/contadores, serviços, fundador, como funciona, o que fazemos, como atuamos, pilares, clientes atendidos, bloco final "Fale Conosco" com formulário.
- `/contato` — página de contato (`pages/contato/index.html`): breadcrumb, formulário completo (Nome, Telefone, E-mail, Assunto, Mensagem), bloco de contato e redes sociais.

Layout compartilhado com topbar (telefone, e-mail, redes, botão "Fale conosco"), navegação principal (Home, Serviços, Quem Somos, Como funciona, Contato) e rodapé (sobre, especialidades, contato, créditos). Botão flutuante de WhatsApp preservado.

## Navegação

- Links internos viram `<Link>` do TanStack Router: `index.html` → `/`, `pages/contato/index.html` → `/contato`.
- Âncoras da home (`#home`, `#servicos`, `#quemsomos`, `#comofunciona`) apontam para `/` com hash e rolagem suave; quando fora da home, navegam para `/` + âncora.
- Links externos (Instagram, LinkedIn, Facebook, YouTube, WhatsApp, `tel:`, `mailto:`) permanecem `<a>` com `target="_blank"`.

## Estilo e assets

- Extrair a paleta, fontes (Poppins, Roboto, Roboto Slab, Heebo) e raios/espaçamentos do `styles.css` capturado e registrá-los como tokens semânticos em `src/styles.css` (`@theme`). Sem cores hardcoded nos componentes.
- Fontes e ícones (`assets/fonts/`) e imagens (`assets/images/`) publicados via Lovable Assets (CDN) e referenciados pelos ponteiros `.asset.json` — nada de reimplementar Elementor CSS; o markup é reescrito em Tailwind.
- Ícones do Elementor/FontAwesome usados no layout são substituídos por equivalentes visuais (mesmo glifo e cor) via ícones locais, mantendo aparência.

## Componentes reutilizáveis

`Topbar`, `Header/Nav` (com menu mobile), `Footer`, `WhatsappFab`, `SectionTitle`, `ServiceCard`, `CounterStat`, `PillarCard`, `ClientLogoGrid`, `ContactForm`.

## Formulário

Os formulários são reconstruídos visualmente e validados no cliente; no envio abrem o WhatsApp/e-mail com a mensagem preenchida (sem backend). Se preferir armazenar os contatos em banco e receber e-mails, isso pode ser adicionado depois com o Lovable Cloud.

## Detalhes técnicos

- Estrutura: `src/routes/index.tsx`, `src/routes/contato.tsx`, chrome compartilhado em `src/routes/__root.tsx`; seções em `src/components/`.
- `head()` por rota com título/descrição próprios: home "Consultoria Empresarial – Infinity Consulting"; contato "Contato – Infinity Consulting" (+ og/twitter).
- Nenhum script do WordPress/Elementor/jQuery é portado; interações (menu mobile, contadores animados, carrossel de clientes, scroll suave) são reimplementadas em React.
- `favicon.ico` substituído pela favicon capturada.
