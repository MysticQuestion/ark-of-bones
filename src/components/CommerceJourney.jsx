import { ArrowRight, ExternalLink, MailCheck, PackageCheck, ShoppingCart, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { CART_URL, STORE_URL } from '../data/products';

const stageIcons = [ShoppingCart, ShoppingCart, MailCheck, MailCheck, PackageCheck, Truck];

export default function CommerceJourney({ stages }) {
  return (
    <section className="commerce-journey content-band content-band--wood" aria-labelledby="commerce-journey-title">
      <div className="commerce-journey-heading">
        <SectionHeader
          id="commerce-journey-title"
          eyebrow="Purchase and fulfillment"
          title="One order. Visible handoffs from cart to doorstep."
          description="The official Squarespace store carries the transaction, receipt, order status, and fulfillment communication for every published product."
        />
        <div className="commerce-journey-actions">
          <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
            Shop all six products<ExternalLink aria-hidden="true" />
          </a>
          <a className="button button--outline" href={CART_URL} target="_blank" rel="noopener noreferrer">
            Review your cart<ShoppingCart aria-hidden="true" />
          </a>
        </div>
      </div>
      <ol className="order-journey">
        {stages.map((stage, index) => {
          const Icon = stageIcons[index];
          return (
            <li key={stage.number}>
              <div className="order-stage-marker"><span>{stage.number}</span><Icon aria-hidden="true" /></div>
              <p className="eyebrow">{stage.owner}</p>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          );
        })}
      </ol>
      <div className="order-support">
        <div><p className="eyebrow">Order support</p><h3>Keep the confirmation email and order number.</h3></div>
        <p>Use the order-status link in the confirmation email for the latest available status. For merchandise support, include the order number so the shop team can locate the purchase.</p>
        <Link className="text-link" to="/contact?inquiry=Merchandise">Contact merchandise support<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
