import { ArrowRight, BookOpen, MonitorPlay, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const pilotMetrics = [
  ['01', 'Cost per player acquired', 'Measure what it actually costs to bring a new player into an Ark of Bones program.'],
  ['02', 'Replay attach rate', 'Track how many participants or families buy a replay or edited media product after a session.'],
  ['03', 'Editing minutes per asset', 'Know whether replay economics work before scaling the media offer.'],
  ['04', 'Sponsor renewal rate', 'Treat repeat sponsor demand as stronger evidence than one-time enthusiasm.'],
];

const partnerTracks = [
  'Military MWR and inter-base competition',
  'HBCU and Divine Nine homecoming programming',
  'Senior living and community-center play',
  'Independent clubs, domino houses, and local organizers',
];

export default function OfficialPlayPage() {
  return (
    <>
      <SEO
        title="Official Play"
        description="Explore the Ark of Bones official-play roadmap: rankings, sanctioned events, rules, referee certification, automated scoring, and measured pilot programs."
        path="/official-play"
      />

      <PageHero
        eyebrow="Official play — in development"
        title="Build the system that makes every recorded game count."
        description="Ark of Bones is developing a competition layer for standardized rules, national rankings, sanctioned events, referee certification, and automated scoring. The pilot comes before national expansion."
        image={ASSETS.event}
      >
        <Link className="button button--gold" to="/contact?inquiry=Official%20Play%20%2F%20Sanctioning">
          Join the pilot conversation<ArrowRight aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="feature-ledger">
        <article><Trophy aria-hidden="true" /><span>Rankings</span><p>Turn recorded results into seeding, qualification, player stories, and a competition history that compounds over time.</p></article>
        <article><Users aria-hidden="true" /><span>Sanctioned events</span><p>Give independent organizers a clear standard for running an official Ark of Bones competition.</p></article>
        <article><BookOpen aria-hidden="true" /><span>Rules and referees</span><p>Publish transparent rules, document local variations, and build a trained official network.</p></article>
        <article><MonitorPlay aria-hidden="true" /><span>Automated scoring</span><p>Develop computer vision for pip recognition, scorekeeping, stat overlays, adjudication support, and faster replay production.</p></article>
      </section>

      <section className="content-band">
        <SectionHeader
          eyebrow="Pilot scorecard"
          title="Four numbers before scale"
          description="The first programs should produce evidence about economics, not just photographs and applause."
        />
        <div className="process-grid">
          {pilotMetrics.map(([number, title, body]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader
          eyebrow="Partner tracks"
          title="Start where the audience already exists"
          description="The near-term strategy favors existing communities, programs, and activity budgets over speculative venue buildout."
        />
        <div className="use-grid">
          {partnerTracks.map((track) => <div key={track}><span aria-hidden="true" />{track}</div>)}
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <span>Community knowledge</span>
          <h2>Standardization should document variation, not erase it.</h2>
          <p>House rules can be submitted, credited, compared, and preserved. Experienced players, elders, club organizers, and local hosts should be treated as sources of authority rather than background decoration.</p>
        </article>
        <article>
          <span>Partner participation</span>
          <h2>The people who supply the players should share in the value.</h2>
          <p>Ark of Bones is developing partner terms that can recognize host organizations, clubs, and community programs through transparent participation rather than treating local culture as a free content source.</p>
        </article>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">Commercial discipline</p>
          <h2>Two lines the pilot will not cross.</h2>
        </div>
        <div>
          <p><strong>No sweepstakes shortcut.</strong> The public roadmap excludes dual-currency or cash-redeemable sweepstakes mechanics. Promotional brackets can remain free-to-play unless a properly licensed partner structure is established.</p>
          <p><strong>No territory sales before unit economics.</strong> Ark of Bones should not sell operators a market, territory, or repeatable business system until the real per-event economics have been measured and documented.</p>
        </div>
      </section>

      <CTASection
        eyebrow="Pilot partners"
        title="Bring one measurable competition into the system."
        description="Organizers, military MWR programs, campuses, community centers, clubs, sponsors, and venues can help test the rules, ranking model, media economics, and partner structure."
        label="Discuss an official-play pilot"
        to="/contact?inquiry=Official%20Play%20%2F%20Sanctioning"
        secondaryLabel="Explore venue formats"
        secondaryTo="/tables"
      />
    </>
  );
}
