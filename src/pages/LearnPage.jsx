import { useMemo, useState } from 'react';
import { ChevronDown, Printer, Search } from 'lucide-react';
import CampaignBand from '../components/CampaignBand';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';
import { games } from '../data/games';
import { campaigns } from '../data/promotions';

const sections = [
  ['Objective', 'objective'],
  ['Setup', 'setup'],
  ['Gameplay', 'gameplay'],
  ['Scoring', 'scoring'],
  ['Strategy', 'strategy'],
  ['Etiquette', 'etiquette'],
];

export default function LearnPage() {
  const [query, setQuery] = useState('');
  const visibleGames = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized ? games.filter((game) => `${game.name} ${game.summary}`.toLowerCase().includes(normalized)) : games;
  }, [query]);

  return (
    <>
      <SEO title="Learn" description="Learn Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker with clear setup, gameplay, scoring, strategy, and etiquette guides." path="/learn" />
      <PageHero eyebrow="Game education" title="Learn the table" description="Practical primers for seven games, with domino content first and clear reminders that house and tournament rules may vary." image={ASSETS.learn} compact />
      <section className="learn-tools">
        <label><Search aria-hidden="true" /><span className="sr-only">Search game guides</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search game guides" /></label>
        <button className="button button--outline" type="button" onClick={() => window.print()}><Printer aria-hidden="true" />Print guides</button>
      </section>
      <nav className="game-index" aria-label="Game guide index">
        {games.map((game) => <a key={game.slug} href={`#${game.slug}`}>{game.name}</a>)}
      </nav>
      <section className="guide-notice" role="note"><strong>Rules vary.</strong><span>Confirm house, event, and tournament rules before play starts.</span></section>
      <section className="game-guide-list">
        {visibleGames.map((game, index) => (
          <article className="game-guide" id={game.slug} key={game.slug}>
            <header><div><p className="eyebrow">Guide {String(index + 1).padStart(2, '0')} · {game.players}</p><h2>{game.name}</h2><p>{game.summary}</p></div></header>
            <div className="guide-sections">
              {sections.map(([label, key], sectionIndex) => (
                <details key={key} open={index === 0 && sectionIndex < 2}>
                  <summary>{label}<ChevronDown aria-hidden="true" /></summary>
                  {key === 'objective' ? <p>{game.objective}</p> : <ul>{game[key].map((item) => <li key={item}>{item}</li>)}</ul>}
                </details>
              ))}
            </div>
          </article>
        ))}
        {!visibleGames.length ? <p className="no-results" role="status">No game guide matches “{query}”.</p> : null}
      </section>
      <CampaignBand campaign={campaigns.learnBigSix} />
    </>
  );
}
