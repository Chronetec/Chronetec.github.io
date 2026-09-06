import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import heroLayers from '../../assets/hero.png';

// Ícones SVG acessíveis sem emojis
const Icons = {
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Tag: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Sparkle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  External: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
};

const Logo = () => (
  <a href="#inicio" className="landing-logo" aria-label="Chronetec - Voltar ao início">
    <img src={`${import.meta.env.BASE_URL}chronetec-logo.svg`} alt="Chronetec Logotipo" />
  </a>
);

const Welcome = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="landing-page">
      {/* Acessibilidade (item 9 do PDF): atalho de teclado para o conteúdo principal */}
      <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>

      {/* 5. Requisitos de Interface: Menu e Navegação Funcional */}
      <header className={`landing-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="landing-nav">
          <Logo />

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#publico-alvo">Público-alvo</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#equipe">Equipe</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="nav-actions">
            <button className="text-button" onClick={() => navigate('/login')}>Entrar</button>
            <button className="nav-cta" onClick={() => navigate('/cadastro')}>Criar conta</button>
            <button
              className="menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Menu Móvel adaptado para celulares e tablets */}
        <div
          id="mobile-navigation-drawer"
          className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="mobile-nav-links" aria-label="Navegação móvel">
            <a href="#inicio" onClick={closeMobileMenu}>Início</a>
            <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
            <a href="#problema" onClick={closeMobileMenu}>Problema</a>
            <a href="#solucao" onClick={closeMobileMenu}>Solução</a>
            <a href="#publico-alvo" onClick={closeMobileMenu}>Público-alvo</a>
            <a href="#funcionalidades" onClick={closeMobileMenu}>Funcionalidades</a>
            <a href="#tecnologias" onClick={closeMobileMenu}>Tecnologias</a>
            <a href="#equipe" onClick={closeMobileMenu}>Equipe</a>
            <a href="#contato" onClick={closeMobileMenu}>Contato</a>
          </nav>
          <div className="mobile-drawer-actions">
            <button className="mobile-login-button" onClick={() => { closeMobileMenu(); navigate('/login'); }}>Entrar</button>
            <button className="mobile-signup-button" onClick={() => { closeMobileMenu(); navigate('/cadastro'); }}>Criar conta</button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* 4.1 Apresentação inicial: Logotipo, nome, slogan, breve descrição, CTAs */}
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Sparkle /></span>
              <span>Identidade e Organização Escolar</span>
            </div>
            <h1>Sua rotina escolar, <em>mais leve.</em></h1>
            <p>
              A <strong>Chronetec</strong> é uma plataforma acadêmica desenvolvida para unificar datas de provas, trabalhos, entregas e eventos do ano letivo em um calendário limpo, inteligente e acolhedor.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navigate('/cadastro')}>
                Começar agora <Icons.Arrow />
              </button>
              <a className="secondary-button" href="#sobre">
                Conhecer o projeto
              </a>
              <a
                className="ghost-button"
                href="https://github.com/Chronetec/Chronetec.github.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Acessar o repositório Chronetec no GitHub"
              >
                <Icons.Github /> Código no GitHub
              </a>
            </div>
            <div className="hero-note">
              <span className="note-badge"><Icons.Check /></span>
              <span>Gratuito e acessível para a comunidade escolar</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Prévia da interface do calendário Chronetec">
            <div className="visual-blob visual-blob-one" />
            <div className="visual-blob visual-blob-two" />
            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <small>SEMANA ATUAL</small>
                  <strong>12 – 18 de Agosto</strong>
                </div>
                <span className="preview-avatar">AL</span>
              </div>
              <div className="preview-days">
                {['SEG 12', 'TER 13', 'QUA 14', 'QUI 15', 'SEX 16'].map((day, index) => (
                  <span className={index === 2 ? 'active' : ''} key={day}>
                    {day.split(' ')[0]}<b>{day.split(' ')[1]}</b>
                  </span>
                ))}
              </div>
              <div className="preview-events">
                <div className="preview-event purple">
                  <span>09:30</span>
                  <div>
                    <strong>Prova de Matemática</strong>
                    <small>Sala 12 • 2º Bimestre</small>
                  </div>
                </div>
                <div className="preview-event mint">
                  <span>14:00</span>
                  <div>
                    <strong>Entrega do Projeto Web</strong>
                    <small>Laboratório de Informática 3</small>
                  </div>
                </div>
                <div className="preview-event amber">
                  <span>18:30</span>
                  <div>
                    <strong>Feira de Tecnologia & Ciência</strong>
                    <small>Auditório Principal</small>
                  </div>
                </div>
              </div>
            </div>
            <img className="hero-layers" src={heroLayers} alt="Camadas decorativas do projeto Chronetec" />
            <div className="floating-badge">
              <span className="badge-icon"><Icons.Check /></span>
              <div>
                <strong>Cronograma Atualizado</strong>
                <small>Nenhum prazo esquecido</small>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa com pilares de valor */}
        <section className="trust-strip" aria-label="Destaques do projeto">
          <div>
            <strong>01</strong>
            <span>Visão anual<br />e bimestral clara</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Centralização<br />sem ruídos de grupo</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Interface limpa,<br />acessível e responsiva</span>
          </div>
        </section>

        {/* 4.2 Sobre o projeto: Descrição, objetivo, contexto, principais características */}
        <section className="about-section" id="sobre">
          <div className="about-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img className="about-logo" src={`${import.meta.env.BASE_URL}chronetec-mark.svg`} alt="Símbolo oficial da marca Chronetec" />
          </div>
          <div className="about-copy">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Sparkle /></span>
              <span>4.2 Sobre o Projeto</span>
            </div>
            <h2>Menos preocupação.<br /><em>Mais aprendizado.</em></h2>
            <p>
              A <strong>Chronetec</strong> é uma iniciativa acadêmica criada no curso técnico com foco inicial na <strong>ETEC Bento Quirino</strong>, em Campinas/SP. O projeto nasceu da percepção diária das dificuldades enfrentadas por alunos e docentes no gerenciamento de cronogramas.
            </p>
            <p>
              <strong>Nosso objetivo:</strong> Proporcionar um ambiente digital moderno, confiável e intuitivo onde toda a rotina de avaliações, entregas e reuniões pedagógicas esteja sincronizada, eliminando a dependência de fotos de lousa ou avisos informais perdidos em aplicativos de mensagens.
            </p>
            <div className="characteristics-tags">
              <span className="pill-tag">Interface acolhedora</span>
              <span className="pill-tag">Multiplataforma</span>
              <span className="pill-tag">Design acessível</span>
              <span className="pill-tag">Foco na ETEC</span>
            </div>
          </div>
        </section>

        {/* 4.3 Problema: Qual é o problema, em que contexto ocorre, quem é afetado */}
        <section className="problem-section" id="problema">
          <div className="section-heading">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.AlertTriangle /></span>
              <span>4.3 O Problema</span>
            </div>
            <h2>A desorganização de datas<br /><em>prejudica o rendimento escolar.</em></h2>
            <p>Em instituições de ensino com alta densidade de disciplinas e projetos práticos, a falta de sincronia gera perdas reais para todos os envolvidos.</p>
          </div>

          <div className="problem-grid">
            <article className="problem-card">
              <div className="problem-icon-wrapper red">
                <Icons.AlertTriangle />
              </div>
              <h3>Prazos fragmentados</h3>
              <p>
                Informações dispersas entre murais físicos, bilhetes no Classroom e grupos de conversa levam a esquecimentos involuntários de datas cruciais.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper amber">
                <Icons.Clock />
              </div>
              <h3>Sobrecarga e sobreposição</h3>
              <p>
                Professores de diferentes matérias frequentemente agendam provas no mesmo dia sem ter visibilidade da carga total da turma naquele período.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper purple">
                <Icons.Users />
              </div>
              <h3>Quem é afetado</h3>
              <p>
                <strong>Estudantes:</strong> estresse e notas baixas por prazos perdidos.<br />
                <strong>Docentes:</strong> retrabalho com segunda chamada.<br />
                <strong>Gestão escolar:</strong> desarticulação no cumprimento do calendário.
              </p>
            </article>
          </div>
        </section>

        {/* 4.4 Solução: Como funciona, relação com o problema, principais características */}
        <section className="solution-section" id="solucao">
          <div className="solution-container">
            <div className="solution-copy">
              <div className="eyebrow">
                <span className="eyebrow-icon"><Icons.ShieldCheck /></span>
                <span>4.4 Nossa Solução</span>
              </div>
              <h2>Como a Chronetec transforma<br /><em>a organização do seu ano.</em></h2>
              <p>
                Desenvolvemos uma solução direta que substitui o caos das anotações dispersas por um <strong>painel centralizado de cronogramas</strong>, acessível a qualquer momento e com leitura imediata de compromissos.
              </p>
              <ul className="solution-list">
                <li>
                  <span className="list-icon"><Icons.Check /></span>
                  <div>
                    <strong>Visão Unificada em Tempo Real:</strong>
                    <span>Todos os eventos da classe reunidos em grade semanal e mensal.</span>
                  </div>
                </li>
                <li>
                  <span className="list-icon"><Icons.Check /></span>
                  <div>
                    <strong>Classificação por Cores e Prioridades:</strong>
                    <span>Diferenciação imediata entre provas, projetos, seminários e eventos institucionais.</span>
                  </div>
                </li>
                <li>
                  <span className="list-icon"><Icons.Check /></span>
                  <div>
                    <strong>Arquitetura Aberta e Leve:</strong>
                    <span>Carregamento ultrarrápido sem necessidade de instalações complexas.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="solution-highlight-card">
              <div className="highlight-tag">Impacto Prático</div>
              <h3>Do aviso avulso ao calendário confiável</h3>
              <p>
                Ao sincronizar prazos com antecedência, a Chronetec reduz a ansiedade dos alunos e permite que os educadores distribuam suas avaliações de forma pedagógica e justa.
              </p>
              <div className="highlight-stats">
                <div className="stat-item">
                  <strong>100%</strong>
                  <small>Foco acadêmico</small>
                </div>
                <div className="stat-item">
                  <strong>0</strong>
                  <small>Ruídos e distrações</small>
                </div>
                <div className="stat-item">
                  <strong>4</strong>
                  <small>Categorias de compromisso</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 Público-alvo: Identificação de quem é o público-alvo */}
        <section className="target-section" id="publico-alvo">
          <div className="section-heading">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Users /></span>
              <span>4.5 Público-Alvo</span>
            </div>
            <h2>Construído para toda<br /><em>a comunidade escolar.</em></h2>
            <p>Identificamos os atores centrais da vida escolar e adaptamos a experiência para atender às necessidades de cada um.</p>
          </div>

          <div className="target-grid">
            <article className="target-card">
              <div className="target-avatar-pill student">Estudantes</div>
              <h3>Alunos de Ensino Médio e Técnico</h3>
              <p>
                Jovens que lidam simultaneamente com a base nacional comum e componentes técnicos especializados, precisando de clareza máxima para equilibrar relatórios e semanas de provas.
              </p>
            </article>

            <article className="target-card">
              <div className="target-avatar-pill teacher">Docentes</div>
              <h3>Professores e Coordenadores</h3>
              <p>
                Educadores que necessitam comunicar prazos oficiais de maneira consistente e consultar a disponibilidade da turma antes de estipular novas entregas.
              </p>
            </article>

            <article className="target-card">
              <div className="target-avatar-pill staff">Gestão Escolar</div>
              <h3>Secretaria e Direção</h3>
              <p>
                Equipes diretivas que acompanham os marcos bimestrais, períodos de conselho de classe, feiras tecnológicas e feriados institucionais.
              </p>
            </article>
          </div>
        </section>

        {/* 4.6 Funcionalidades: Principais funcionalidades, via cards/ícones/listas */}
        <section className="features-section" id="funcionalidades">
          <div className="section-heading">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Calendar /></span>
              <span>4.6 Funcionalidades</span>
            </div>
            <h2>Tudo que você precisa.<br /><em>Nada que complique.</em></h2>
            <p>Recursos pensados para entregar o máximo de clareza com o menor esforço de navegação.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card purple-card">
              <span className="feature-icon purple-icon"><Icons.Calendar /></span>
              <h3>Calendário Completo</h3>
              <p>Visualização interativa por mês e dia com destaque claro para o dia atual e filtros por período letivo.</p>
            </article>

            <article className="feature-card mint-card">
              <span className="feature-icon mint-icon"><Icons.Tag /></span>
              <h3>Categorização por Cor</h3>
              <p>Identificação instantânea de provas (roxo), trabalhos (verde menta) e eventos escolares (âmbar).</p>
            </article>

            <article className="feature-card amber-card">
              <span className="feature-icon amber-icon"><Icons.Clock /></span>
              <h3>Linha do Tempo e Prazos</h3>
              <p>Painel lateral de compromissos imediatos para você saber o que entregar hoje, amanhã e na próxima semana.</p>
            </article>

            <article className="feature-card navy-card">
              <span className="feature-icon navy-icon"><Icons.ShieldCheck /></span>
              <h3>Perfil e Identidade Acadêmica</h3>
              <p>Espaço individual para consulta de dados cadastrais, curso técnico, turma, RM e unidade de ensino.</p>
            </article>
          </div>
        </section>

        {/* 4.8 Tecnologias: Principais tecnologias utilizadas no desenvolvimento */}
        <section className="tech-section" id="tecnologias">
          <div className="section-heading">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Code /></span>
              <span>4.8 Tecnologias Utilizadas</span>
            </div>
            <h2>Engenharia moderna,<br /><em>leve e escalável.</em></h2>
            <p>O desenvolvimento da Chronetec adota padrões modernos de engenharia web com foco em desempenho e manutenibilidade.</p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-badge">Framework</span>
              <h3>React 19</h3>
              <p>Biblioteca para criação de interfaces declarativas com componentização desacoplada e estado reativo previsível.</p>
            </div>

            <div className="tech-card">
              <span className="tech-badge">Build Tool</span>
              <h3>Vite 8</h3>
              <p>Empacotador ultrarrápido com Hot Module Replacement instantâneo e geração de bundles de produção altamente otimizados.</p>
            </div>

            <div className="tech-card">
              <span className="tech-badge">Linguagem</span>
              <h3>JavaScript (ES6+)</h3>
              <p>Padrão moderno com módulos nativos, funções assíncronas, manipulação eficiente do DOM e controle tipificado de rotas.</p>
            </div>

            <div className="tech-card">
              <span className="tech-badge">Estilização</span>
              <h3>CSS3 Moderno</h3>
              <p>Design System baseado em variáveis CSS (tokens), Flexbox, CSS Grid, tipografia fluida e responsividade sem dependência de frameworks externos.</p>
            </div>

            <div className="tech-card">
              <span className="tech-badge">Navegação</span>
              <h3>React Router DOM 7</h3>
              <p>Roteamento de página única (SPA) cliente-side com suporte a histórico e compatibilidade com base path do GitHub Pages.</p>
            </div>

            <div className="tech-card">
              <span className="tech-badge">CI/CD & Host</span>
              <h3>Git & GitHub Pages</h3>
              <p>Controle de versão rigoroso e pipeline de integração contínua (GitHub Actions) para deploy automatizado na organização do projeto.</p>
            </div>
          </div>
        </section>

        {/* 4.7 Equipe: Integrantes e suas funções/responsabilidades */}
        <section className="team-section" id="equipe">
          <div className="section-heading centered">
            <div className="eyebrow">
              <span className="eyebrow-icon"><Icons.Users /></span>
              <span>4.7 Equipe do Projeto</span>
            </div>
            <h2>Desenvolvido por quem<br /><em>acredita na educação pública.</em></h2>
            <p>Conheça os integrantes responsáveis pelo planejamento, concepção visual e implementação técnica da Chronetec.</p>
          </div>

          <div className="team-grid">
            <article className="team-card">
              <span className="team-avatar murilo">MZ</span>
              <div className="team-info">
                <h3>Murilo Monteiro Zanetti</h3>
                <span className="team-role">Desenvolvimento Full-stack — Front-end, Back-end e Dados</span>
                <p>Responsável pelo desenvolvimento completo da aplicação: interface e design system, camada de back-end, modelagem e persistência dos dados, além da identidade visual e do pipeline de publicação.</p>
              </div>
            </article>

            <article className="team-card">
              <span className="team-avatar felipe">FG</span>
              <div className="team-info">
                <h3>Felipe Torres Gonzalez</h3>
                <span className="team-role">Desenvolvimento Front-end</span>
                <p>Responsável pela construção das telas em React, componentização da interface, comportamento responsivo e ajustes de usabilidade e acessibilidade das páginas.</p>
              </div>
            </article>
          </div>
        </section>

        {/* 4.9 Chamada para ação: Acessar projeto, ver código, entrar em contato */}
        <section className="final-cta" id="contato">
          <span className="cta-dot-left" />
          <span className="cta-dot-right" />
          <h2>Pronto para deixar sua<br />rotina escolar <em>mais leve?</em></h2>
          <p>Experimente a plataforma agora mesmo, consulte a documentação ou explore o código-fonte aberto no GitHub.</p>
          <div className="cta-button-group">
            <button className="primary-button light" onClick={() => navigate('/cadastro')}>
              Criar minha conta gratuita <Icons.Arrow />
            </button>
            <button className="secondary-button cta-secondary" onClick={() => navigate('/login')}>
              Já tenho acesso (Entrar)
            </button>
            <a
              className="ghost-button light"
              href="https://github.com/Chronetec/Chronetec.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Github /> Ver repositório
              <Icons.External />
            </a>
            <a
              className="ghost-button light"
              href="mailto:contato.chronetec@gmail.com?subject=Contato%20-%20Projeto%20Chronetec"
            >
              <Icons.Mail /> Entrar em contato
            </a>
          </div>
          <p className="cta-contact-note">
            Fale com a equipe pelo e-mail{' '}
            <a href="mailto:contato.chronetec@gmail.com">contato.chronetec@gmail.com</a>.
          </p>
        </section>
      </main>

      {/* Rodapé institucional com identidade consistente */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo />
            <p>Organizando hoje. Transformando o amanhã na ETEC Bento Quirino.</p>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre o Projeto</a>
            <a href="#problema">O Problema</a>
            <a href="#solucao">Nossa Solução</a>
            <a href="#publico-alvo">Público-alvo</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#equipe">Equipe</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footer-links">
            <h4>Acessos Rápidos</h4>
            <button onClick={() => navigate('/login')}>Fazer Login</button>
            <button onClick={() => navigate('/cadastro')}>Cadastrar Conta</button>
            <a href="https://github.com/Chronetec/Chronetec.github.io" target="_blank" rel="noreferrer">Repositório GitHub</a>
            <a href="https://chronetec.github.io/" target="_blank" rel="noreferrer">GitHub Pages Oficial</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Chronetec • Projeto acadêmico de Programação Web III (AMS).</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
