import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function CampaignBand({ campaign, reverse = false }) {
  const action = campaign.external ? (
    <a
      className="button button--gold"
      href={campaign.to}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${campaign.label} - opens the Ark of Bones shop`}
    >
      {campaign.label}<ExternalLink aria-hidden="true" />
    </a>
  ) : (
    <Link className="button button--gold" to={campaign.to}>
      {campaign.label}<ArrowRight aria-hidden="true" />
    </Link>
  );

  return (
    <section className={`campaign-band${reverse ? ' campaign-band--reverse' : ''}`} data-campaign={campaign.id}>
      <div className="campaign-band-media">
        <SafeImage
          src={campaign.image}
          alt={campaign.alt}
          fallbackAlt={`${campaign.title}; Ark of Bones mark shown`}
          width="1400"
          height="1000"
          loading="lazy"
        />
      </div>
      <div className="campaign-band-copy">
        <p className="eyebrow">{campaign.eyebrow}</p>
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>
        {campaign.price ? <p className="campaign-price">{campaign.price}</p> : null}
        {action}
      </div>
    </section>
  );
}
