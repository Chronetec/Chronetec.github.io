import { SparkleIcon, MenuIcon, GridIcon, PlusIcon, UserIcon, LogoutIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons/UiIcons';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const weekDays = ['S','T','Q','Q','S','S','D'];
const typeMeta = {
  evento: { label: 'Evento', color: '#35b88b', soft: '#e5f8f1' },
  tarefa: { label: 'Tarefa', color: '#5e7af0', soft: '#edf0ff' },
  prova: { label: 'Prova', color: '#f06972', soft: '#fff0f1' },
  prazo: { label: 'Prazo', color: '#ad65dd', soft: '#f7ecfd' },
};
const storageKey = 'chronetec-events';

const toIso = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const prettyDate = (iso) => new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }).format(new Date(`${iso}T12:00:00`));

export default function Home() {
  const navigate = useNavigate();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [events, setEvents] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || localStorage.getItem('oldion-events')) || []; }
    catch { return []; }
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [form, setForm] = useState({ title: '', type: 'evento', time: '', description: '' });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user] = useState(() => { try { return JSON.parse(localStorage.getItem('usuario')) || {}; } catch { return {}; } });

  const calendar = useMemo(() => Array.from({ length: 12 }, (_, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = Array((firstDay.getDay() + 6) % 7).fill(null);
    for (let day = 1; day <= lastDay.getDate(); day += 1) days.push(day);
    while (days.length % 7) days.push(null);
    return { month, days };
  }), [year]);

  // Em telas reduzidas os doze meses viram um carrossel, evitando uma rolagem
  // vertical muito longa. Em telas maiores a grade anual é mantida.
  const compactQuery = '(max-width: 860px)';
  const [isCompact, setIsCompact] = useState(() => window.matchMedia(compactQuery).matches);
  const [monthCursor, setMonthCursor] = useState(now.getMonth());
  const touchStartX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia(compactQuery);
    const handleChange = (event) => setIsCompact(event.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const stepMonth = (delta) => {
    const next = monthCursor + delta;
    if (next < 0) { setYear(year - 1); setMonthCursor(11); return; }
    if (next > 11) { setYear(year + 1); setMonthCursor(0); return; }
    setMonthCursor(next);
  };

  const handleTouchStart = (event) => { touchStartX.current = event.touches[0].clientX; };
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distancia = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distancia) > 50) stepMonth(distancia < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const saveEvents = (next) => { setEvents(next); localStorage.setItem(storageKey, JSON.stringify(next)); };
  const openDate = (month, day) => setSelectedDate(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
  const selectedEvents = events.filter((event) => event.date === selectedDate).sort((a, b) => (a.time || '').localeCompare(b.time || ''));
  const upcoming = [...events].filter((event) => event.date >= toIso(now)).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);

  const createEvent = (event) => {
    event.preventDefault();
    if (!form.title.trim() || !selectedDate) return;
    saveEvents([...events, { id: Date.now(), date: selectedDate, ...form, title: form.title.trim() }]);
    setForm({ title: '', type: 'evento', time: '', description: '' });
  };
  const removeEvent = (id) => saveEvents(events.filter((event) => event.id !== id));
  const closeModal = () => { setSelectedDate(''); setForm({ title: '', type: 'evento', time: '', description: '' }); };

  // Um único cartão de mês, reaproveitado pela grade anual e pelo carrossel.
  const renderMonthCard = ({ month, days }) => (
    <article className="month-card" key={month}>
      <h3>{months[month]}</h3>
      <div className="weekday-row">{weekDays.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
      <div className="days-grid">
        {days.map((day, index) => {
          if (!day) return <span className="day empty" key={`empty-${index}`} />;
          const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = events.filter((event) => event.date === iso);
          const isToday = iso === toIso(now);
          return <button className={`day ${isToday ? 'today' : ''}`} key={iso} onClick={() => openDate(month, day)} aria-label={`${day} de ${months[month]}, ${dayEvents.length} compromissos`}><span className="day-number">{day}</span><span className="event-dots">{dayEvents.slice(0, 3).map((item) => <i key={item.id} style={{ background: typeMeta[item.type]?.color }} />)}</span></button>;
        })}
      </div>
    </article>
  );

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${mobileMenu ? 'open' : ''}`}>
        <button className="dashboard-logo" onClick={() => navigate('/')}><img src={`${import.meta.env.BASE_URL}chronetec-logo.svg`} alt="Chronetec" /></button>
        <button className="close-menu" onClick={() => setMobileMenu(false)} aria-label="Fechar menu"><CloseIcon size={18} /></button>
        <nav aria-label="Menu do aplicativo">
          <button className="active"><span><GridIcon size={15} /></span> Calendário</button>
          <button onClick={() => setSelectedDate(toIso(now))}><span><PlusIcon size={15} /></span> Novo compromisso</button>
          <button onClick={() => navigate('/perfil')}><span><UserIcon size={15} /></span> Meu perfil</button>
        </nav>
        <div className="sidebar-legend">
          <p>LEGENDA</p>
          {Object.entries(typeMeta).map(([key, meta]) => <div key={key}><span style={{ background: meta.color }} />{meta.label}</div>)}
        </div>
        <div className="sidebar-tip"><span><SparkleIcon size={15} /></span><strong>Uma coisa de cada vez.</strong><p>Organize hoje para ficar tranquilo amanhã.</p></div>
        <button className="logout-link" onClick={() => navigate('/')}><span><LogoutIcon size={15} /></span> Sair da conta</button>
      </aside>
      {mobileMenu && <button className="menu-overlay" onClick={() => setMobileMenu(false)} aria-label="Fechar menu" />}

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="menu-button" onClick={() => setMobileMenu(true)} aria-label="Abrir menu"><MenuIcon size={22} /></button>
          <div><span className="topbar-kicker">MEU CALENDÁRIO</span><h1>Olá, {user.nome?.split(' ')[0] || 'estudante'}!</h1><p>Veja o que está acontecendo no seu ano letivo.</p></div>
          <div className="topbar-actions">
            <button className="quick-add" onClick={() => setSelectedDate(toIso(now))}><span><PlusIcon size={15} /></span> Novo compromisso</button>
            <button className="profile-chip" onClick={() => navigate('/perfil')} aria-label="Abrir perfil"><span>{(user.nome || 'A').charAt(0).toUpperCase()}</span><div><strong>{user.nome || 'Aluno Teste'}</strong><small>{user.tipo || 'Aluno'}</small></div></button>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="calendar-toolbar">
            <div><h2>Calendário anual</h2><p>Clique em um dia para ver ou adicionar compromissos.</p></div>
            <div className="year-picker"><button onClick={() => setYear(year - 1)} aria-label="Ano anterior"><ChevronLeftIcon size={16} /></button><strong>{year}</strong><button onClick={() => setYear(year + 1)} aria-label="Próximo ano"><ChevronRightIcon size={16} /></button></div>
          </div>

          {upcoming.length > 0 && (
            <div className="upcoming-row">
              <span className="upcoming-label">PRÓXIMOS</span>
              {upcoming.map((item) => <button key={item.id} onClick={() => setSelectedDate(item.date)}><i style={{ background: typeMeta[item.type]?.color }} /><span><strong>{item.title}</strong><small>{new Date(`${item.date}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</small></span></button>)}
            </div>
          )}

          {isCompact ? (
            <section
              className="month-carousel"
              aria-label={`Calendário de ${months[monthCursor]} de ${year}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="carousel-controls">
                <button onClick={() => stepMonth(-1)} aria-label="Mês anterior"><ChevronLeftIcon size={18} /></button>
                <strong>{months[monthCursor]}<small>{year}</small></strong>
                <button onClick={() => stepMonth(1)} aria-label="Próximo mês"><ChevronRightIcon size={18} /></button>
              </div>
              {renderMonthCard(calendar[monthCursor])}
              <div className="carousel-dots">
                {months.map((nome, index) => (
                  <button
                    key={nome}
                    className={index === monthCursor ? 'active' : ''}
                    onClick={() => setMonthCursor(index)}
                    aria-label={`Ir para ${nome}`}
                    aria-current={index === monthCursor}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="year-grid" aria-label={`Calendário de ${year}`}>
              {calendar.map(renderMonthCard)}
            </section>
          )}
        </section>
      </main>

      {selectedDate && (
        <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && closeModal()}>
          <section className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
            <div className="modal-header"><div><span>COMPROMISSOS</span><h2 id="event-modal-title">{prettyDate(selectedDate)}</h2></div><button onClick={closeModal} aria-label="Fechar"><CloseIcon size={18} /></button></div>
            {selectedEvents.length > 0 && <div className="selected-events">{selectedEvents.map((item) => <div key={item.id} style={{ borderColor: typeMeta[item.type]?.color }}><span className="event-type" style={{ color: typeMeta[item.type]?.color, background: typeMeta[item.type]?.soft }}>{typeMeta[item.type]?.label}</span><strong>{item.title}</strong>{item.time && <small>{item.time}</small>}<button onClick={() => removeEvent(item.id)} aria-label={`Excluir ${item.title}`}>Excluir</button></div>)}</div>}
            <form onSubmit={createEvent}>
              <p className="form-section-title">{selectedEvents.length ? 'Adicionar outro' : 'Novo compromisso'}</p>
              <label htmlFor="event-title">Título</label><input id="event-title" autoFocus required placeholder="Ex.: Prova de matemática" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <div className="modal-columns"><div><label htmlFor="event-type">Categoria</label><select id="event-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>{Object.entries(typeMeta).map(([key, meta]) => <option key={key} value={key}>{meta.label}</option>)}</select></div><div><label htmlFor="event-time">Horário</label><input id="event-time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} /></div></div>
              <label htmlFor="event-description">Observações <span>(opcional)</span></label><textarea id="event-description" placeholder="Adicione detalhes importantes..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <div className="modal-actions"><button type="button" className="secondary" onClick={closeModal}>Cancelar</button><button className="primary" type="submit">Salvar compromisso</button></div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
