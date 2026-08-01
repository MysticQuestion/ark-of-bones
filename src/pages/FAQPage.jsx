import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';
import { faqCategories, faqs } from '../data/faqs';

export default function FAQPage() {
  const [category, setCategory] = useState('All');
  const visibleFaqs = useMemo(() => category === 'All' ? faqs : faqs.filter((faq) => faq.category === category), [category]);

  return (
    <>
      <SEO title="FAQ" description="Answers about Ark of Bones events, media, tables, venue partnerships, merchandise, brands, game guides, and contact options." path="/faq" />
      <PageHero eyebrow="Questions and answers" title="Ark of Bones FAQ" description="Straight answers about events, tables, merchandise, media, game guides, and getting in touch." image={ASSETS.hero} compact />
      <section className="content-band faq-page">
        <div className="filter-control filter-control--wrap" role="group" aria-label="Filter frequently asked questions">
          {['All', ...faqCategories].map((item) => <button key={item} type="button" className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="faq-list">
          {visibleFaqs.map((faq) => (
            <details key={faq.question}>
              <summary><span><small>{faq.category}</small>{faq.question}</span><ChevronDown aria-hidden="true" /></summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
                <Link className="text-link" to={faq.link.to}>{faq.link.label}<ArrowRight aria-hidden="true" /></Link>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
