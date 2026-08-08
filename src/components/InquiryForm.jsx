import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { CONTACT, INQUIRY_TYPES } from '../config/contact';

const timelineOptions = [
  'As soon as possible',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just researching',
];

const budgetOptions = [
  'Budget established',
  'Need guidance on scope and pricing',
  'Exploring options',
  'Prefer to discuss',
];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  city: '',
  inquiryType: INQUIRY_TYPES[0],
  timeline: '',
  budgetReadiness: '',
  groupSize: '',
  mustHaves: '',
  message: '',
  consent: false,
};

export default function InquiryForm() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('inquiry');
  const requestedItem = searchParams.get('item');
  const [stage, setStage] = useState(1);
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    inquiryType: INQUIRY_TYPES.includes(requestedType) ? requestedType : emptyForm.inquiryType,
    message: requestedItem ? `I'm interested in the ${requestedItem}.` : emptyForm.message,
  }));
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (INQUIRY_TYPES.includes(requestedType)) {
      setForm((current) => ({ ...current, inquiryType: requestedType }));
    }
  }, [requestedType]);

  useEffect(() => {
    if (requestedItem) {
      setForm((current) => ({
        ...current,
        message: current.message || `I'm interested in the ${requestedItem}.`,
      }));
    }
  }, [requestedItem]);

  const isVenueLead = useMemo(
    () => /Venue|Host an Event|Institutional|Campus|Community Program/.test(form.inquiryType),
    [form.inquiryType],
  );

  const isPrivateTableLead = form.inquiryType === 'Private / Home Table';

  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const advance = (event) => {
    const formElement = event.currentTarget.form;
    const stageOneFields = formElement?.querySelectorAll('[data-stage-one="true"]') ?? [];
    const invalidField = Array.from(stageOneFields).find((field) => !field.checkValidity());

    if (invalidField) {
      invalidField.reportValidity();
      setStatus('Complete the required contact details to continue.');
      return;
    }

    setStatus('');
    setStage(2);
  };

  const submit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.city.trim()) {
      setStage(1);
      setStatus('Complete the required contact details to continue.');
      return;
    }

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus('Complete the required qualification details and contact consent statement.');
      return;
    }

    const subject = `Ark of Bones inquiry: ${form.inquiryType}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Telephone: ${form.phone || 'Not provided'}`,
      `Organization: ${form.organization || 'Not provided'}`,
      `City: ${form.city}`,
      `Inquiry type: ${form.inquiryType}`,
      `Timeline: ${form.timeline}`,
      `Budget readiness: ${form.budgetReadiness}`,
      `Typical group / audience size: ${form.groupSize || 'Not provided'}`,
      `Must-have features or customizations: ${form.mustHaves || 'Not provided'}`,
      '',
      form.message,
    ].join('\n');

    setStatus(`Your email application is opening with a prepared request to ${CONTACT.email}.`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <div className="form-note" aria-live="polite">
        Step {stage} of 2 · {stage === 1 ? 'Contact and interest' : 'Scope and timing'}
      </div>

      {stage === 1 ? (
        <>
          <div className="field-grid">
            <label>Name <span aria-hidden="true">*</span><input data-stage-one="true" name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
            <label>Email <span aria-hidden="true">*</span><input data-stage-one="true" name="email" type="email" value={form.email} onChange={update} autoComplete="email" required /></label>
            <label>Telephone <span className="optional">Optional</span><input data-stage-one="true" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" /></label>
            <label>Organization <span className="optional">Optional</span><input data-stage-one="true" name="organization" value={form.organization} onChange={update} autoComplete="organization" /></label>
            <label>City <span aria-hidden="true">*</span><input data-stage-one="true" name="city" value={form.city} onChange={update} autoComplete="address-level2" required /></label>
            <label>Primary interest <span aria-hidden="true">*</span>
              <select data-stage-one="true" name="inquiryType" value={form.inquiryType} onChange={update} required>
                {INQUIRY_TYPES.map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>
          </div>
          <p className="form-note">Start with the basics. The next step asks only for timing, budget readiness, and what matters most to the project.</p>
          <button className="button button--gold" type="button" onClick={advance}>Continue<ArrowRight aria-hidden="true" /></button>
        </>
      ) : (
        <>
          <div className="field-grid">
            <label>Approximate timeline <span aria-hidden="true">*</span>
              <select name="timeline" value={form.timeline} onChange={update} required>
                <option value="">Select a timeline</option>
                {timelineOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>Budget readiness <span aria-hidden="true">*</span>
              <select name="budgetReadiness" value={form.budgetReadiness} onChange={update} required>
                <option value="">Select one</option>
                {budgetOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>{isVenueLead ? 'Expected audience / player count' : isPrivateTableLead ? 'Typical group size' : 'Typical group / audience size'} <span className="optional">Optional</span>
              <input name="groupSize" value={form.groupSize} onChange={update} inputMode="numeric" placeholder={isVenueLead ? 'Example: 60 guests / 16 players' : 'Example: 4–12 players'} />
            </label>
            <label>Must-have features or customizations <span className="optional">Optional</span>
              <input name="mustHaves" value={form.mustHaves} onChange={update} placeholder="Branding, lighting, engraving, media, accessibility, other needs" />
            </label>
          </div>
          <label>Tell us about the space, use case, or opportunity <span aria-hidden="true">*</span>
            <textarea name="message" value={form.message} onChange={update} rows="7" required />
          </label>
          <label className="consent-field">
            <input name="consent" type="checkbox" checked={form.consent} onChange={update} required />
            <span>I agree that Ark of Bones may use these details to respond to this inquiry.</span>
          </label>
          <p className="form-note">No pressure and no payment at this stage. Ark of Bones can use these details to determine the right next conversation, scope, and build information.</p>
          <div className="hero-actions">
            <button className="button button--outline" type="button" onClick={() => { setStatus(''); setStage(1); }}><ArrowLeft aria-hidden="true" />Back</button>
            <button className="button button--gold" type="submit"><Mail aria-hidden="true" />Open prepared inquiry</button>
          </div>
        </>
      )}

      <div className="form-status" aria-live="polite">{status}</div>
    </form>
  );
}
