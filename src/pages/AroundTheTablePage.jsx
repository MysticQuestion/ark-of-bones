import { Camera, Gift, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';

const occasions = [
  'Family reunions and milestone birthdays',
  'Holiday gatherings and homecomings',
  'Grandparents, elders, and multigenerational families',
  'Memorial and family-history projects',
];

export default function AroundTheTablePage() {
  return (
    <>
      <SEO
        title="Around the Table"
        description="Around the Table records family game sessions, conversation, and stories in a finished family film."
        path="/around-the-table"
      />
      <PageHero
        title="Around the Table"
        description="Around the Table records family game sessions alongside the conversation, stories, and personalities around them. Each project is planned and quoted individually."
        image={ASSETS.table}
      >
        <Link className="button button--gold" to="/contact?inquiry=Around%20the%20Table%20Legacy%20Session">Request a Quote</Link>
      </PageHero>

      <section className="feature-ledger">
        <article><Camera aria-hidden="true" /><span>Game Session</span><p>Film the family playing together.</p></article>
        <article><Users aria-hidden="true" /><span>Conversation</span><p>Record stories and conversation naturally during the gathering.</p></article>
        <article><Heart aria-hidden="true" /><span>Editing</span><p>Produce a finished family film from the strongest material.</p></article>
        <article><Gift aria-hidden="true" /><span>Digital Delivery</span><p>Provide the completed film for the family archive.</p></article>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones domino table prepared for a family game"
            fallbackAlt="Ark of Bones domino table"
            width="1500"
            height="1092"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <h2>Family Sessions</h2>
          <p>Suitable occasions include family reunions, milestone birthdays, holidays, homecomings, and multigenerational gatherings.</p>
          <ul>
            {occasions.map((occasion) => <li key={occasion}>{occasion}</li>)}
          </ul>
          <p>Scope and pricing are confirmed before filming.</p>
          <p>Any public use of family footage requires separate permission.</p>
        </div>
      </section>
    </>
  );
}
