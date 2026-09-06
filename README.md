# Chronetec

<p align="center">
  <img src="./public/chronetec-logo.svg" alt="Logotipo Chronetec" width="260" />
</p>

<p align="center">
  <strong>Sua rotina escolar, mais leve.</strong><br>
  Plataforma acadêmica de unificação e acompanhamento de cronogramas escolares, concebida para a <strong>ETEC Bento Quirino</strong>.
</p>

<p align="center">
  <a href="https://chronetec.github.io/"><strong>Acessar a Landing Page Publicada »</strong></a>
</p>

---

## 1. Descrição do Projeto

A **Chronetec** é uma plataforma acadêmica desenvolvida no âmbito da disciplina de **Programação Web III (AMS)**. O objetivo principal é consolidar em uma interface unificada, acessível e responsiva todos os compromissos do ano letivo escolar — incluindo avaliações bimestrais, prazos de entrega de projetos práticos, feiras tecnológicas, feriados e reuniões pedagógicas.

O projeto foi projetado com identidade visual própria, padrões modernos de engenharia web (React + Vite) e sem uso de emojis como componentes de interface, priorizando ícones vetoriais SVG e acessibilidade universal.

---

## 2. O Problema e a Solução

### 2.1 O Problema
No ambiente do ensino médio e técnico integrado, estudantes e docentes convivem com uma densa grade de disciplinas com prazos concorrentes. As informações sobre avaliações e entregas costumam estar fragmentadas em murais físicos, fotos de lousa e grupos informais de mensagens. Essa dispersão gera:
- Esquecimentos involuntários de prazos de entrega e relatórios;
- Sobrecarga de avaliações agendadas no mesmo dia por diferentes professores;
- Dificuldade para a coordenação pedagógica visualizar o panorama do calendário bimestral.

### 2.2 A Solução
A **Chronetec** resolve essa dor estrutural oferecendo um painel digital centralizado com:
- **Calendário Acadêmico Interativo:** visão clara em escala mensal e semanal dos eventos letivos;
- **Diferenciação Cromática Semântica:** identificação imediata do tipo de compromisso (provas, trabalhos, eventos institucionais);
- **Prévia Imediata de Prazos:** acompanhamento dos compromissos mais urgentes sem fricção;
- **Acessibilidade e Desempenho:** carregamento instantâneo em qualquer navegador desktop, tablet ou celular.

---

## 3. Público-Alvo

A plataforma atende diretamente a três perfis da comunidade escolar:

| Perfil | Necessidades Atendidas |
| :--- | :--- |
| **Estudantes do Ensino Médio e Técnico** | Organização pessoal dos prazos bimestrais, redução da ansiedade pré-provas e consulta rápida do calendário via smartphone. |
| **Professores e Coordenadores** | Visibilidade do volume de avaliações da turma antes de estipular novas entregas e comunicação oficial de datas. |
| **Gestão Escolar e Secretaria** | Planejamento dos marcos institucionais, feiras de ciência/tecnologia e conselhos de classe. |

---

## 4. Tecnologias Utilizadas

| Tecnologia | Versão / Padrão | Finalidade no Projeto |
| :--- | :--- | :--- |
| **React** | 19.x | Componentização declarativa da interface e gerenciamento de estado. |
| **Vite** | 8.x | Ambiente de desenvolvimento de alta velocidade e bundler de produção. |
| **JavaScript** | ES6+ | Lógica de negócio, manipulação de datas e renderização condicional. |
| **CSS3 Moderno** | Variáveis CSS, Flexbox, Grid | Design System proprietário com tokens visuais, sem bibliotecas pesadas de terceiros. |
| **React Router DOM** | 7.x | Roteamento cliente-side (SPA) adaptado ao subcaminho base do GitHub Pages. |
| **Git & GitHub** | Controle de versão | Versionamento colaborativo com commits convencionais em português. |
| **GitHub Actions & Pages** | CI/CD | Pipeline automatizado de compilação e publicação contínua. |

---

## 5. Equipe e Responsabilidades

| Integrante | Função Principal | Responsabilidades no Projeto |
| :--- | :--- | :--- |
| **Murilo Monteiro Zanetti** | Desenvolvimento Full-stack | Desenvolvimento completo da aplicação: front-end e design system, camada de back-end, modelagem e persistência dos dados, identidade visual, logotipo, tokens de cores e tipografia, além do pipeline de publicação CI/CD. |
| **Felipe Torres Gonzalez** | Desenvolvimento Front-end | Construção das telas em React, componentização da interface, comportamento responsivo e ajustes de usabilidade e acessibilidade das páginas. |

---

## 6. Identidade Visual

### 6.1 Logotipo
O logotipo da Chronetec combina um relógio estilizado em forma de órbita com as cores da identidade institucional da equipe, armazenado e versionado diretamente no repositório:
- Logotipo completo: [`public/chronetec-logo.svg`](./public/chronetec-logo.svg)
- Símbolo / Marca: [`public/chronetec-mark.svg`](./public/chronetec-mark.svg)
- Favicon: [`public/favicon.svg`](./public/favicon.svg)

### 6.2 Paleta de Cores
A paleta foi desenvolvida considerando conformidade com contraste visual (WCAG AA), harmonia institucional e distinção de tipos de eventos acadêmicos:

| Cor | Nome / Finalidade | Código HEX | Amostra |
| :--- | :--- | :--- | :--- |
| **Principal** | Índigo Primário (Botões de ação, links, destaques principais) | `#5B61E8` | `rgb(91, 97, 232)` |
| **Secundária** | Navy Profundo (Títulos, botões de alto contraste, texto escuro) | `#132238` | `rgb(19, 34, 56)` |
| **Destaque 1** | Verde Menta (Projetos práticos, status de sucesso, badges positivos) | `#63D7B0` | `rgb(99, 215, 176)` |
| **Destaque 2** | Âmbar Dourado (Eventos culturais, palestras, avisos de atenção) | `#F9C45C` | `rgb(249, 196, 92)` |
| **Destaque 3** | Coral / Alerta (Avaliações bimestrais, datas críticas) | `#FF847C` | `rgb(255, 132, 124)` |
| **Fundo** | Off-White / Gelo (Fundo geral da página e superfícies neutras) | `#FBFBFE` | `rgb(251, 251, 254)` |
| **Texto Suave**| Muted Slate (Parágrafos explicativos e legendas secundárias) | `#65758B` | `rgb(101, 117, 139)` |

### 6.3 Tipografia
As fontes foram selecionadas pelo Google Fonts para assegurar máxima legibilidade e ar moderno:
- **Títulos (Headings):** `Manrope` (pesos 600, 700 e 800) — fonte geométrica sem serifa com excelente impacto e proporção de leitura.
- **Textos Corridos (Body):** `DM Sans` (pesos 400, 500, 600 e 700) — fonte neutra, legível em telas pequenas e com amplo suporte a acentuação em português.

---

## 7. Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- Gerenciador de pacotes `npm`

### Passos
1. Clone o repositório:
```bash
git clone https://github.com/Chronetec/Chronetec.github.io.git
cd Chronetec.github.io
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse a aplicação no navegador em `http://localhost:5173/`.

4. Valide a integridade do código e execute a compilação:
```bash
# Executar o linter ESLint
npm run lint

# Gerar o pacote otimizado para produção
npm run build

# Pré-visualizar o pacote de produção localmente
npm run preview
```

---

## 8. Estrutura de Arquivos

O projeto utiliza React com Vite, portanto a estrutura difere do modelo `index.html + css/ + js/` sugerido no enunciado, conforme a própria permissão do documento ("a estrutura poderá variar conforme a tecnologia utilizada").

```
Chronetec.github.io/
├── index.html                  # Documento raiz da SPA
├── vite.config.js              # Configuração de build e caminho base do Pages
├── eslint.config.js            # Regras de qualidade de código
├── public/                     # Recursos estáticos servidos sem processamento
│   ├── chronetec-logo.svg      # Logotipo completo (identidade visual)
│   ├── chronetec-mark.svg      # Símbolo / marca reduzida
│   ├── favicon.svg             # Ícone da aba do navegador
│   └── 404.html                # Fallback de rotas da SPA no GitHub Pages
├── src/
│   ├── main.jsx                # Ponto de entrada da aplicação
│   ├── App.jsx                 # Definição das rotas (React Router)
│   ├── index.css               # Tokens da identidade visual (cores e tipografia)
│   ├── assets/                 # Imagens utilizadas dentro dos componentes
│   └── components/
│       ├── Welcome/            # Landing page (todas as seções do item 4 do PDF)
│       ├── Login/              # Tela de autenticação
│       ├── Cadastro/           # Tela de criação de conta
│       ├── Home/               # Calendário acadêmico
│       ├── Perfil/             # Perfil do usuário
│       └── icons/UiIcons.jsx   # Ícones SVG compartilhados (nenhum emoji)
├── .github/workflows/          # Pipeline de publicação no GitHub Pages
└── README.md
```

---

## 9. Acessibilidade

O projeto implementa os itens listados como diferencial no enunciado:

| Item | Como foi atendido |
| :--- | :--- |
| **Textos alternativos** | Todas as imagens informativas possuem `alt` descritivo; os SVGs decorativos usam `aria-hidden="true"`. |
| **Contraste** | Paleta verificada para contraste AA entre texto (`#132238` / `#65758B`) e fundos (`#FBFBFE` / `#FFFFFF`). |
| **HTML semântico** | Uso de `header`, `nav`, `main`, `section`, `article` e `footer`, com um único `H1` e hierarquia `H1 → H2 → H3` sem saltos. |
| **Links e botões identificáveis** | Estados de foco visíveis (`:focus-visible`), rótulos textuais e `aria-label` nos controles somente com ícone. |
| **Navegação por teclado** | Link "Pular para o conteúdo principal", ordem de foco natural e menu móvel com `aria-expanded` / `aria-controls`. |
| **Sem emojis na interface** | Todos os símbolos da interface são SVG vetoriais (`src/components/icons/UiIcons.jsx` e ícones internos da landing page). |
| **Movimento reduzido** | Respeito a `prefers-reduced-motion` para usuários sensíveis a animações. |

---

## 10. Responsividade — Evidência de Teste

A landing page foi verificada nas resoluções mínimas exigidas, medindo programaticamente a diferença entre `scrollWidth` e `clientWidth` do documento (rolagem horizontal) e a posição de cada elemento em relação à área visível:

| Dispositivo | Resolução | Rolagem horizontal | Elementos fora da área visível |
| :--- | :--- | :--- | :--- |
| Celular pequeno | 320 × 568 | 0 px | Nenhum |
| Celular comum | 390 × 844 | 0 px | Nenhum |
| Tablet | 768 × 1024 | 0 px | Nenhum |
| Notebook | 1366 × 768 | 0 px | Nenhum |
| Desktop | 1920 × 1080 | 0 px | Nenhum |

Verificações adicionais:

- As quatro imagens da página carregam corretamente e nenhuma apresenta deformação de proporção.
- Os nove destinos do menu (`#inicio` a `#contato`) posicionam-se 21 px abaixo do cabeçalho fixo, sem que nenhum título seja coberto.
- O menu móvel abre, expõe todos os nove links e fecha automaticamente após a seleção de uma seção.
- Reorganização de colunas: cards de funcionalidades e tecnologias passam de 3–4 colunas no desktop para 2 no tablet e 1 no celular.

---

## 11. Publicação e Links Oficiais de Entrega

O projeto é compilado e publicado automaticamente no GitHub Pages pelo workflow em `.github/workflows/deploy-pages.yml` a cada atualização na branch `main`. O arquivo `public/404.html` garante que links diretos para rotas internas da SPA (por exemplo `/login`) sejam resolvidos corretamente pelo GitHub Pages.

A entrega é composta pelos dois links oficiais:

1. **Repositório do Projeto:**  
   [https://github.com/Chronetec/Chronetec.github.io](https://github.com/Chronetec/Chronetec.github.io)

2. **Landing Page Publicada:**  
   [https://chronetec.github.io/](https://chronetec.github.io/)

### 11.1 Aderência ao padrão de nomenclatura do enunciado

O enunciado (seção 6.1) define o padrão `USUARIO.github.io`, com a página publicada em `https://USUARIO.github.io/`.

O projeto segue esse padrão utilizando a **organização do GitHub** `Chronetec`, criada especificamente para a equipe:

| Enunciado | Chronetec |
| :--- | :--- |
| Usuário / organização | `Chronetec` |
| Repositório | `Chronetec.github.io` |
| URL da página | `https://chronetec.github.io/` |

O caminho base do Vite é `'/'` (`vite.config.js`), correspondente à raiz de uma página de organização.

---

## 12. Contato

Dúvidas sobre o projeto podem ser encaminhadas para **chronetec@gmail.com** ou registradas como *issue* no repositório.
