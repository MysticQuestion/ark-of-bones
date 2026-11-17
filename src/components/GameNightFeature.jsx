import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarPlus, MapPin, Maximize2, Share2, X, Pause, Play, Ticket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GAME_NIGHT } from '../data/gameNight';
import useGameNight from '../hooks/useGameNight';
import '../styles/game-night.css';

export function GameNightRibbon() {
  const { phase } = useGameNight();
  const { pathname } = useLocation();
  if (phase === 'ended' || pathname === '/' || pathname.replace(/\/$/, '') === '/events') return null;
  return <aside className="gn-ribbon" aria-label="Upcoming sponsored event">
    <span><span className="gn-status-dot" />Ark of Bones at Game Night <b>Nov 21 · Temecula</b></span>
    <Link to="/events#game-night">Explore the event <ArrowUpRight size={16} aria-hidden="true" /></Link>
  </aside>;
}

export default function GameNightFeature({ headingLevel = 1 }) {
  const { phase, countdown } = useGameNight();
  const [paused, setPaused] = useState(false);
  const [notice, setNotice] = useState('');
  const dialog = useRef(null);
  const posterButton = useRef(null);
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  useEffect(() => {
    if (phase === 'ended') dialog.current?.close();
  }, [phase]);

  async function shareEvent() {
    const url = 'https://www.arkofbones.com/events#game-night';
    try {
      if (navigator.share) await navigator.share({ title: 'Join Ark of Bones at Sneakers & Jersey Game Night', url });
      else { await navigator.clipboard.writeText(url); setNotice('Event link copied.'); }
    } catch (error) {
      if (error.name !== 'AbortError') setNotice(`Share this event: ${url}`);
    }
  }
  if (phase === 'ended') return null;
  return <section id="game-night" className={`gn-feature${paused ? ' gn-paused' : ''}`} aria-labelledby="gn-title">
    <div className="gn-ambient" aria-hidden="true" />
    <div className="gn-topline">
      <span className="gn-kicker"><span className="gn-status-dot" /> {phase === 'live' ? 'Happening now · Until 9 PM PST' : 'One Saturday. All together.'}</span>
      <button className="gn-motion" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Play event animation' : 'Pause event animation'}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />} <span>{paused ? 'Play motion' : 'Pause motion'}</span>
      </button>
    </div>
    <div className="gn-grid">
      <div className="gn-copy">
        <p className="gn-sponsor">ARK OF BONES <span>EVENT SPONSOR</span></p>
        <p className="gn-intro">We’ll see you at</p>
        <Heading id="gn-title" className="gn-title"><span>Sneakers</span><span className="gn-title-middle"><i>&</i> Jersey</span><span className="gn-title-last">Game Night<span className="gn-title-dot">.</span></span></Heading>
        <p className="gn-host">Presented by the men of <strong>Omega Mu Nu Chapter</strong><br />Omega Psi Phi Fraternity, Inc.</p>
        <p className="gn-description">Wear your team. Bring your people. Join Ark of Bones for an evening of games, music, and community in support of student scholarships.</p>
        <div className="gn-facts">
          <div><span>THE DATE</span><strong>Saturday, Nov 21</strong><small>2026 · 3–9 PM PST</small></div>
          <div><span>THE PLACE</span><strong>Temecula Sports Lounge</strong><small>27911 Jefferson Ave #104 · Temecula, CA</small></div>
        </div>
        <div className="gn-actions">
          <a className="gn-ticket" href={GAME_NIGHT.tickets} target="_blank" rel="noopener noreferrer"><Ticket size={20} aria-hidden="true" />{phase === 'live' ? 'Tickets & availability' : 'Get tickets'}<ArrowUpRight size={21} aria-hidden="true" /></a>
          <p className="gn-prices"><strong>$20 <span>presale</span></strong><span>$25 at the door</span></p>
        </div>
        <p className="gn-ticket-note">Tickets through Omega Mu Nu’s Ticket Tailor page. Food & drinks sold separately.</p>
        <div className="gn-utilities">
          <details className="gn-calendar"><summary><CalendarPlus size={16} aria-hidden="true" /> Add to calendar</summary><div><a href={GAME_NIGHT.calendar} target="_blank" rel="noopener noreferrer">Google Calendar <ArrowUpRight size={14} /></a><a href="/events/sneakers-jersey-2026.ics" download>Apple / Outlook (.ics)</a></div></details>
          <a href={GAME_NIGHT.directions} target="_blank" rel="noopener noreferrer"><MapPin size={16} aria-hidden="true" /> Directions</a>
          <button onClick={shareEvent}><Share2 size={16} aria-hidden="true" /> Share</button>
        </div>
        <p className="gn-notice" role="status">{notice}</p>
      </div>
      <div className="gn-visual">
        <div className="gn-poster-frame">
          <button ref={posterButton} className="gn-poster" onClick={() => dialog.current?.showModal()} aria-label="View full official event flyer">
            <img src={GAME_NIGHT.poster} width="1024" height="1536" fetchPriority="high" alt="Official Sneakers & Jersey Game Night flyer in purple and gold. November 21, 3–9 PM at Temecula Sports Lounge. $20 presale, $25 at the door." />
            <span><Maximize2 size={14} aria-hidden="true" /> View official flyer</span>
          </button>
          <div className="gn-stamp" aria-hidden="true"><span>NOV</span><strong>21</strong><span>TEMECULA</span></div>
        </div>
        <div className="gn-countdown" aria-label={phase === 'live' ? 'The event is happening now' : `${countdown[0]} days, ${countdown[1]} hours, ${countdown[2]} minutes until game night`}>
          <span className="gn-count-label">{phase === 'live' ? 'TONIGHT' : 'COUNTDOWN'}<small>{phase === 'live' ? 'Join us until 9 PM' : 'Until game night'}</small></span>
          {phase === 'upcoming' && countdown.map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['DAYS', 'HRS', 'MIN'][index]}</span></div>)}
        </div>
      </div>
    </div>
    <div className="gn-bottom"><span>SPORTS <i /> GAMES <i /> MUSIC <i /> COMMUNITY</span><p>Supporting the next generation.</p></div>
    <dialog className="gn-dialog" ref={dialog} aria-label="Official Sneakers and Jersey Game Night flyer" onClose={() => posterButton.current?.focus()} onClick={e => { if (e.target === dialog.current) dialog.current.close(); }}>
      <button className="gn-close" onClick={() => dialog.current.close()} aria-label="Close flyer" autoFocus><X aria-hidden="true" /></button>
      <img src={GAME_NIGHT.poster} width="1024" height="1536" alt="Official event flyer. Hosted by the men of Omega Mu Nu Chapter. Saturday November 21, 2026, 3–9 PM. Temecula Sports Lounge, 27911 Jefferson Avenue #104, Temecula CA 92590. $20 presale, $25 at the door." />
      <a className="gn-ticket" href={GAME_NIGHT.tickets} target="_blank" rel="noopener noreferrer">Open ticket page <ArrowUpRight size={20} aria-hidden="true" /></a>
    </dialog>
  </section>;
}
