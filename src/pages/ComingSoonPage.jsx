import { ArrowRight, Gamepad2, Radio, Trophy, Users, WandSparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const features = [
  {
    id: 'digital-game',
    icon: Gamepad2,
    eyebrow: 'Digital play',
    title: 'Domino game',
    status: 'Integration reserved',
    body: 'The site now has a dedicated place for the playable domino build once the external game implementation is ready. The intended destination is a first-party Ark of Bones play surface rather than a detached experiment.',
    note: 'Next step: connect the finished game build, test mobile and desktop play, then move it from this page into its own /play route.',
  },
  {
    id: 'events',
    icon: Users,
    eyebrow: 'Events',
    title: 'Confirmed event calendar',
    status: 'Waiting on real dates',
    body: 'Public event pages should return when there are verified dates, venues, participation details, and a reliable registration path.',
    note: 'No placeholder calendar will be promoted as an operating program.',
  },
  {
    id: 'circuit',
    icon: Trophy,
    eyebrow: 'Competition',
    title: 'Ark Circuit',
    status: 'Pilot concept',
    body: 'Rules, player records, Ark-specific ratings, organizer standards, and event reporting can be developed after enough recorded play exists to justify them.',
    note: 'Competition language will remain Ark-specific rather than implying universal authority over domino play.',
  },
  {
    id: 'media',
    icon: Radio,
    eyebrow: 'Media',
    title: 'Watch and recorded play',
    status: 'Cadence required',
    body: 'A media section is useful only when there is enough recurring material to reward a return visit. Until then, the website keeps the commercial emphasis on tables and goods.',
    note: 'Bring Watch forward when the release schedule becomes dependable.',
  },
  {
    id: 'venue-programs',
    icon: WandSparkles,
    eyebrow: 'Programs',
    title: 'Venue and organizer tools',
    status: 'Operational proof first',
    body: 'Host kits, organizer software, venue programming, scoring assistance, and other operating systems belong here until repeated live use establishes what the software actually needs to do.',
    note: 'Manual pilots should determine the stable requirements before software formalizes them.',
  },
];

export default function ComingSoonPage() {
  return (
    <>
      <SEO
        title="Coming Soon"
        description="Preview Ark of Bones features currently in development, including digital domino play, events, Ark Circuit tools, media, and organizer systems."
        path="/coming-soon"
      />

      <header className="coming-soon-hero">
        <p className="eyebrow">In development</p>
        <h1>Not live yet. Still worth building carefully.</h1>
        <p>
          This page holds the systems that are planned, being tested, or waiting on operating proof. They are intentionally separated from the parts of Ark of Bones that can be bought, configured, or requested today.
        </p>
        <div className="hero-actions">
          <Link className="button button--gold" to="/tables#build-studio">Build a table<ArrowRight aria-hidden="true" /></Link>
          <Link className="button button--outline" to="/shop">Shop the collection</Link>
        </div>
      </header>

      <section className="coming-soon-grid-wrap">
        <div className="coming-soon-grid">
          {features.map(({ id, icon: Icon, eyebrow, title, status, body, note }) => (
            <article className="coming-soon-card" id={id} key={id}>
              <div className="coming-soon-card-top">
                <Icon aria-hidden="true" />
                <span>{status}</span>
              </div>
              <p className="eyebrow">{eyebrow}</p>
              <h2>{title}</h2>
              <p>{body}</p>
              <div className="coming-soon-note">{note}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
