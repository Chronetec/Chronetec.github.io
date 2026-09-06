# Planejamento de conclusão da Chronetec

Documento de controle da atividade **"Identidade Visual e Landing Page do Projeto"** — Programação Web III (AMS).

Este planejamento é derivado **literalmente** do PDF do professor. Cada item obrigatório do enunciado aparece aqui com a sua origem indicada entre colchetes (ex.: `[PDF 4.3]`), para que a conferência seja feita ponto a ponto, sem interpretação.

**Legenda de status**

- `[x]` — implementado e verificado.
- `[ ]` — pendente.
- `[!]` — depende de uma ação humana fora do código (publicação, decisão da equipe, acesso ao GitHub).

---

## Parte I — Requisitos obrigatórios do PDF

Esta parte é o portão da entrega. Nenhuma melhoria adicional tem prioridade enquanto houver item obrigatório em aberto.

### 1. Identidade visual `[PDF 3]`

#### 1.1 Nome do projeto

- [x] Nome **Chronetec** definido.
- [x] Nome usado de forma consistente no `<title>`, cabeçalho, corpo, rodapé, README e URL de publicação.

#### 1.2 Logotipo

- [x] Logotipo criado pela própria equipe (não é ícone de terceiros).
- [x] Utilizado visivelmente na landing page (cabeçalho, seção "Sobre" e rodapé).
- [x] Armazenado e versionado no repositório: `public/chronetec-logo.svg`, `public/chronetec-mark.svg`, `public/favicon.svg`.

#### 1.3 Paleta de cores

O PDF recomenda cinco papéis de cor. Todos foram definidos e registrados no README (seção 6.2), com os códigos exatos:

- [x] **Cor principal** — Índigo Primário `#5B61E8`.
- [x] **Cor secundária** — Navy Profundo `#132238`.
- [x] **Cor de destaque** — Verde Menta `#63D7B0`, Âmbar `#F9C45C` e Coral `#FF847C`.
- [x] **Cor de fundo** — Off-White `#FBFBFE`.
- [x] **Cor de texto** — Navy `#132238` (principal) e Muted Slate `#65758B` (secundário).
- [x] Códigos registrados no README, conforme exigido pelo enunciado.
- [x] Cores aplicadas na prática como tokens CSS em `src/index.css`.

#### 1.4 Tipografia

- [x] **Fonte para títulos:** `Manrope` (600/700/800).
- [x] **Fonte para textos:** `DM Sans` (400/500/600/700).
- [x] Fontes efetivamente carregadas (Google Fonts em `src/index.css`) e aplicadas de forma consistente.
- [x] Ambas registradas no README (seção 6.3), com justificativa de legibilidade.

---

### 2. Estrutura da landing page `[PDF 4]`

As nove áreas obrigatórias existem, cada uma com **título próprio e identificável**, `id` de âncora e destino no menu.

| Item do PDF | Seção | Âncora | Conteúdo obrigatório atendido | Status |
| :--- | :--- | :--- | :--- | :---: |
| 4.1 Apresentação inicial | Hero | `#inicio` | Logotipo, nome, slogan ("Sua rotina escolar, mais leve") e breve descrição | `[x]` |
| 4.2 Sobre o projeto | Sobre | `#sobre` | Descrição, objetivo, contexto (ETEC Bento Quirino) e características | `[x]` |
| 4.3 Problema | O Problema | `#problema` | Qual é o problema, em que contexto ocorre e quem é afetado | `[x]` |
| 4.4 Solução | Nossa Solução | `#solucao` | Como funciona, relação com o problema e principais características | `[x]` |
| 4.5 Público-alvo | Público-Alvo | `#publico-alvo` | Estudantes, docentes/coordenação e gestão escolar | `[x]` |
| 4.6 Funcionalidades | Funcionalidades | `#funcionalidades` | Quatro cards com ícone, título e descrição | `[x]` |
| 4.7 Equipe | Equipe | `#equipe` | Dois integrantes com função e responsabilidades específicas | `[x]` |
| 4.8 Tecnologias | Tecnologias | `#tecnologias` | Seis tecnologias com categoria e finalidade | `[x]` |
| 4.9 Chamada para ação | Contato / CTA | `#contato` | Acessar o projeto, ver o código **e** entrar em contato | `[x]` |

- [x] Cada área é identificável pelo próprio título, sem depender de informação implícita em outra seção.
- [x] As três opções citadas no PDF para o item 4.9 estão presentes simultaneamente.

---

### 3. Requisitos de interface — responsividade e navegação `[PDF 5]`

#### 3.1 Menu de navegação funcional

- [x] Menu funcional entre as principais seções.
- [x] Contém os seis exemplos citados no PDF (Início, Sobre, Problema, Solução, Funcionalidades, Equipe).
- [x] Contém também Público-alvo, Tecnologias e Contato, cobrindo todas as nove áreas.
- [x] Todos os nove links apontam para âncoras existentes e levam à seção correta (verificado por medição).
- [x] O cabeçalho é `sticky` e **não cobre** o título de destino: `scroll-margin-top: 92px` contra um cabeçalho de 71–78 px, deixando 21 px de folga.
- [x] Adaptação a telas pequenas com menu móvel real (gaveta com os nove links + ações), não uma navegação simplesmente ocultada.
- [x] O menu móvel fecha automaticamente após a seleção de uma seção.
- [x] Botão do menu com `aria-label`, `aria-expanded` e `aria-controls`.

#### 3.2 Ausência dos defeitos listados no PDF

Verificado por medição programática em cada resolução (`scrollWidth` vs. `clientWidth` e retângulo de cada elemento):

- [x] **Sem conteúdo cortado ou sobreposto.**
- [x] **Sem imagens deformadas** — as quatro imagens preservam a proporção original.
- [x] **Sem textos fora da área visível.**
- [x] **Sem rolagem horizontal desnecessária** — 0 px de transbordo em todas as resoluções testadas.
- [x] **Botões e links utilizáveis** — alvos de toque com altura adequada; em 320 px o botão "Criar conta" sai do cabeçalho para evitar quebra de linha, permanecendo disponível no menu móvel.
- [x] **Menus funcionam em telas pequenas.**

#### 3.3 Reorganização de elementos conforme o espaço `[PDF 5]`

- [x] Funcionalidades: 4 colunas (desktop) → 2 (tablet) → 1 (celular).
- [x] Tecnologias: 3 colunas → 2 → 1.
- [x] Problema, Público-alvo e Equipe: grades que colapsam progressivamente.
- [x] Hero: duas colunas no desktop → coluna única centralizada no celular.
- [x] A reorganização é estrutural, não apenas redução de escala dos elementos.

#### 3.4 Matriz de testes executados

| Dispositivo | Resolução | Rolagem horizontal | Resultado |
| :--- | :--- | :---: | :--- |
| Celular pequeno | 320 × 568 | 0 px | `[x]` Aprovado |
| Celular comum | 390 × 844 | 0 px | `[x]` Aprovado |
| Tablet | 768 × 1024 | 0 px | `[x]` Aprovado |
| Notebook | 1366 × 768 | 0 px | `[x]` Aprovado |
| Desktop | 1920 × 1080 | 0 px | `[x]` Aprovado |
| Faixa crítica do menu | 851–1120 px | 0 px | `[x]` Aprovado, sem sobreposição entre logotipo, menu e ações |

---

### 4. Repositório no GitHub e README `[PDF 6]`

#### 4.1 Padrão do repositório `[PDF 6.1]`

- [x] Perfil próprio da equipe criado no GitHub: organização `Chronetec`.
- [x] **Nomenclatura no padrão do enunciado.** O PDF exige o nome exatamente igual a `USUARIO.github.io`; o projeto adota `Chronetec/Chronetec.github.io`, publicado em `https://chronetec.github.io/`.
- [x] Caminho base do Vite ajustado para `'/'`, correspondente a uma página de organização.
- [x] `public/404.html` ajustado para zero segmentos de base.
- [x] Repositório renomeado no GitHub para `Chronetec.github.io`.
- [x] `origin` local atualizado para o novo endereço.
- [x] Repositório público — confirmado em janela anônima.

#### 4.2 Estrutura de arquivos `[PDF 6.2]`

- [x] Estrutura organizada e adequada à tecnologia utilizada — o próprio PDF admite variação ("a estrutura poderá variar conforme a tecnologia utilizada").
- [x] Árvore de diretórios documentada no README, seção 8.
- [x] Separação clara entre recursos estáticos (`public/`), código-fonte (`src/`), componentes por tela e pipeline (`.github/workflows/`).

#### 4.3 Conteúdo obrigatório do README `[PDF 6.3]`

- [x] Nome do projeto e descrição resumida.
- [x] Problema e solução.
- [x] Público-alvo.
- [x] Tecnologias utilizadas.
- [x] Equipe e responsabilidades de cada integrante.
- [x] Identidade visual: logotipo, paleta de cores (com códigos) e tipografia.
- [x] Link da landing page publicada.

#### 4.4 Histórico de desenvolvimento — opcional `[PDF 6.4]`

- [x] Commits registrando as etapas do desenvolvimento.
- [x] Mensagens padronizadas com os prefixos citados no enunciado (`feat`, `style`, `fix`, `docs`).
- [x] Mensagens em português, agrupadas por funcionalidade.

---

### 5. Publicação e entrega `[PDF 7]`

- [x] Publicação configurada via GitHub Pages (`.github/workflows/deploy-pages.yml`).
- [x] Build de produção validado localmente (`npm run build` sem erros).
- [x] Pacote de produção testado com `npm run preview`, e não apenas em servidor de desenvolvimento.
- [x] Rotas internas da SPA resolvidas no GitHub Pages por `public/404.html` — verificado: `/?/login` é reescrito para `/login` e renderiza a tela correta.
- [x] Versão final publicada; workflow do GitHub Actions concluído com sucesso.
- [x] URL publicada aberta em **janela anônima**, sem depender de autenticação.
- [x] Conferido na versão publicada em `https://chronetec.github.io/`: 9 de 9 seções presentes, 4 de 4 imagens carregadas com `alt`, fonte Manrope ativa nos títulos, logotipo no cabeçalho e 0 px de rolagem horizontal.
- [x] Fallback de rotas validado em produção: `https://chronetec.github.io/login` renderiza a tela de login sem passar por página de erro.
- [!] Reconferir os dois links de entrega imediatamente antes de enviar:
  - Repositório: `https://github.com/Chronetec/Chronetec.github.io`
  - Landing page: `https://chronetec.github.io/`

---

### 6. Checklist final do professor `[PDF 8]`

Transcrição literal dos nove itens do enunciado:

- [x] Nome, logotipo, paleta de cores e tipografia definidos e aplicados.
- [x] Todas as seções da landing page presentes (item 4).
- [x] Menu de navegação funcional.
- [x] Página funciona em celular, tablet e desktop, sem rolagem horizontal desnecessária, cortes ou sobreposições.
- [x] Imagens e links funcionando corretamente.
- [x] Repositório público, nomeado `USUARIO.github.io` — `Chronetec/Chronetec.github.io`, público e confirmado em janela anônima.
- [x] README.md completo.
- [x] GitHub Pages configurado e URL testada — `https://chronetec.github.io/` respondendo em janela anônima.
- [x] Dois links de entrega funcionando (repositório + página).

---

### 7. Acessibilidade — opcional, diferencial `[PDF 9]`

- [x] Textos alternativos (`alt`) em todas as imagens informativas; SVGs decorativos com `aria-hidden="true"`.
- [x] Contraste adequado entre texto e fundo (paleta verificada para AA).
- [x] HTML semântico e hierarquia adequada de títulos: um único `H1`, sequência `H1 → H2 → H3` sem saltos, com `header`, `nav`, `main`, `section`, `article` e `footer`.
- [x] Links e botões identificáveis, com estados de foco visíveis (`:focus-visible`).
- [x] Navegação adequada pelo teclado, incluindo link "Pular para o conteúdo principal".
- [x] Respeito a `prefers-reduced-motion`.

---

### 8. Critérios de avaliação `[PDF 10]` — autoavaliação

| Critério | Peso | Situação |
| :--- | :---: | :--- |
| Identidade visual | 20% | Nome, logotipo próprio, cinco papéis de cor documentados e duas famílias tipográficas aplicadas. |
| Estrutura e qualidade da landing page | 25% | As nove áreas do item 4 presentes, cada uma com título próprio e âncora no menu. |
| Responsividade | 25% | Cinco resoluções testadas com 0 px de rolagem horizontal e reorganização real de colunas. |
| Conteúdo e apresentação do projeto | 15% | Textos institucionais próprios sobre problema, solução, público e equipe. |
| Implementação técnica | 10% | React + Vite, lint sem erros, build reproduzível, CI/CD e fallback de rotas do Pages. |
| GitHub e documentação | 5% | README completo; ver a divergência de nomenclatura registrada em 4.1. |

---

### 9. Resultado esperado `[PDF 11]`

- [x] Identidade visual definida.
- [x] Landing page responsiva.
- [x] Repositório público no GitHub com README documentado.
- [x] Landing page publicada em `https://chronetec.github.io/`, apresentando o projeto com a identidade visual desenvolvida.

---

## Parte II — Regras internas da equipe

Regras que a equipe adotou por decisão própria e que vão além do enunciado.

- [x] Não utilizar emojis como elementos visuais da interface.
- [x] Substituir emojis e glifos tipográficos por ícones SVG com significado acessível — centralizados em `src/components/icons/UiIcons.jsx`.
- [x] Preservar a identidade visual em todas as telas: logotipo, cores e tipografia.
- [x] Manter navegação por teclado, foco visível, textos alternativos e contraste adequado.
- [x] Conferir cada etapa em desktop e celular antes de avançar.
- [x] Criar commits pequenos, em português, agrupados por funcionalidade.

### Varredura de emojis

Varredura automatizada sobre `src/`, `index.html`, `public/404.html` e `README.md`, cobrindo os intervalos Unicode de emoji, símbolos geométricos, setas e formas de largura total.

- [x] Landing page: nenhuma ocorrência.
- [x] Telas internas (Login, Cadastro, Home, Perfil): todas as ocorrências substituídas por SVG.
  - `👋` (dois casos), `☰`, `×`, `✓`, `✦`, `○`, `◇`, `▦`, `＋`, `↪`, `→`, `←`, `⌑`, `‹`, `›`, `@`, `#`.
- [x] Resultado da varredura final: nenhum emoji ou glifo decorativo restante.

---

## Parte III — Melhorias internas planejadas

Itens que **não** são exigidos pelo PDF (que avalia a landing page) e que podem ser executados após a entrega, sem risco para a nota.

### 3.1 Simplificar a autenticação

- [ ] Retirar o botão "Conta Google" da tela de login.
- [ ] Remover o divisor "ou continue com", que ficará sem função.
- [ ] Reequilibrar os espaçamentos verticais do formulário após a remoção.
- [ ] Confirmar que login, cadastro, exibição de senha e navegação continuam funcionando.

**Commit sugerido:** `refactor: simplifica as telas de autenticação`

### 3.2 Tornar a página principal estática

- [ ] Fazer a página principal ocupar a altura da janela sem rolagem no documento inteiro.
- [ ] Manter sidebar e cabeçalho visíveis e estáticos.
- [ ] Permitir rolagem vertical somente na área do calendário.
- [ ] Definir `height`, `min-height` e `overflow` de modo a evitar barras de rolagem duplicadas.
- [ ] Preservar um comportamento adequado no celular, onde o espaço é limitado.
- [ ] Subir os textos e controles da sidebar e reduzir espaços vazios.
- [ ] Aumentar os números dos dias do calendário e ajustar proporcionalmente dias da semana, títulos e indicadores.
- [ ] Confirmar que o aumento não provoca sobreposição nos cartões mensais.

**Commits sugeridos:** `style: fixa a estrutura da página principal`, `style: limita a rolagem à área do calendário`

### 3.3 Ampliar e estabilizar o perfil

- [ ] Aumentar o limite de largura do conteúdo e revisar a proporção entre resumo e informações.
- [ ] Tornar o layout estático quando o conteúdo couber na tela.
- [ ] Manter os dados apenas para leitura.
- [ ] Adicionar os campos: nome completo, perfil, e-mail institucional, RM, curso, módulo/série, turma, unidade e período.
- [ ] Definir valores de demonstração para quem acessar sem cadastro prévio.
- [ ] Organizar os campos em grade responsiva, tratando textos longos sem cortes.

**Commit sugerido:** `feat: amplia e completa a página de perfil`

---

## Pendências que exigem ação humana

Concluídas:

- [x] Repositório renomeado para `Chronetec.github.io`, no padrão do enunciado.
- [x] Versão final publicada, com o workflow concluído.
- [x] Visibilidade pública do repositório e da página confirmada em janela anônima.

Em aberto:

1. **Confirmar o endereço de contato.** A landing page e o README utilizam `chronetec@gmail.com`, endereço definido pela equipe. Garantir que a caixa esteja ativa e seja monitorada até a entrega.
2. **Reconferir os dois links de entrega** em outro navegador ou dispositivo, imediatamente antes de enviar.

---

## Validações automatizadas — estado atual

| Verificação | Comando | Resultado |
| :--- | :--- | :--- |
| Qualidade de código | `npm run lint` | Sem erros e sem avisos |
| Compilação de produção | `npm run build` | Concluída sem erros |
| Pacote de produção | `npm run preview` | Servido e testado em navegador |
| Rolagem horizontal | Medição em 5 resoluções | 0 px em todas |
| Imagens | Carregamento e proporção | 4 de 4 corretas |
| Âncoras do menu | 9 destinos | 9 de 9 corretos, sem cobertura pelo cabeçalho |
| Rotas da SPA no Pages | `/?/login` | Reescrita e renderização corretas |
| Emojis na interface | Varredura Unicode | Nenhuma ocorrência |

---

## Definição de pronto

O projeto estará pronto quando cumprir simultaneamente:

1. Todos os requisitos obrigatórios da Parte I marcados como concluídos.
2. As pendências de ação humana resolvidas.
3. Os dois links de entrega abertos e funcionando em janela anônima.
