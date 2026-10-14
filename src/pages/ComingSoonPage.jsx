import { Gamepad2, Radio, Trophy, Users } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
  { id: 'digital-game', icon: Gamepad2, title: 'Digital Play', body: 'Online domino play.' },
  { id: 'events', icon: Users, title: 'Events', body: 'Future Ark of Bones gatherings and competition.' },
  { id: 'media', icon: Radio, title: 'Media', body: 'Recorded games and original video.' },
  { id: 'circuit', icon: Trophy, title: 'Competition Tools', body: 'Rules, records, and organizer resources.' },
];

export default function ComingSoonPage() {
  return (
    <>
      <SEO
        title="Projects in Development"
        description="Ark of Bones projects in development, including digital play, events, media, and competition tools."
        path="/coming-soon"
      />
      <header className="coming-soon-hero">
        <h1>Projects in Development</h1>
        <p>Ark of Bones is developing additional work in digital play, recorded competition, events, and organizer tools. Public releases will be added as they become available.</p>
      </header>
      <section className="coming-soon-grid-wrap">
        <div className="coming-soon-grid">
          {projects.map(({ id, icon: Icon, title, body }) => (
            <article className="coming-soon-card" id={id} key={id}>
              <div className="coming-soon-card-top"><Icon aria-hidden="true" /></div>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
