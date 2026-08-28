import { ArrowRight, Camera, Gift, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const occasions = [
  'Family reunions and milestone birthdays',
  'Holiday gatherings and homecomings',
  'Grandparents, elders, and multigenerational families',
  'Memorial and legacy projects planned while loved ones can still tell the stories themselves',
];

export default function AroundTheTablePage() {
  return (
    <>
      <SEO
        title="Around the Table"
        description="Around the Table is an Ark of Bones family legacy session: a filmed game designed to preserve voices, stories, humor, and play across generations."
        path="/around-the-table"
      />

      <PageHero
        eyebrow="Family legacy sessions"
        title="Record the people you will want to hear again."
        description="Around the Table turns a real domino or card game into a family film: the jokes, the strategy, the arguments, the stories, and the voices that rarely make it into a formal interview."
        image={ASSETS.players}
      >
        <Link className="button button--gold" to="/contact?inquiry=Around%20the%20Table%20Legacy%20Session">
          Plan a legacy session<ArrowRight aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="feature-ledger">
        <article><Camera aria-hidden="true" /><span>Recorded session</span><p>Capture the game, the table talk, and the family dynamics in the same room.</p></article>
        <article><Users aria-hidden="true" /><span>Guided storytelling</span><p>Use light prompts when needed without turning the gathering into a formal interview.</p></article>
        <article><Heart aria-hidden="true" /><span>Family edit</span><p>Shape the strongest stories and moments into a film designed to be watched again.</p></article>
        <article><Gift aria-hidden="true" /><span>Heirloom delivery</span><p>Create a finished digital keepsake suitable for families, reunions, holidays, and future generations.</p></article>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.owner}
            alt="A player at an Ark of Bones domino gathering"
            fallbackAlt="Ark of Bones domino gathering"
            width="1500"
            height="1092"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Family record</p>
          <h2>Voices, play, and table talk.</h2>
          <p>Session scope and public availability are confirmed directly.</p>
        </div>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Good occasions" title="Plan it while everyone can still be in the room" />
        <div className="use-grid">
          {occasions.map((occasion) => <div key={occasion}><span aria-hidden="true" />{occasion}</div>)}
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">What families receive</p>
          <h2>Written scope before recording.</h2>
        </div>
        <div>
          <p>Recording time, location, participants, edit length, delivery, rights, and any public use require written agreement.</p>
        </div>
      </section>

      <CTASection
        eyebrow="Around the Table"
        title="Choose the people. Choose the date. Preserve the room."
        description="Start with the family, location, occasion, and the people whose voices matter most."
        label="Request a legacy-session quote"
        to="/contact?inquiry=Around%20the%20Table%20Legacy%20Session"
        secondaryLabel="Watch Ark of Bones"
        secondaryTo="/watch"
      />
    </>
  );
}
