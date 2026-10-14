import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { CONTACT, INQUIRY_TYPES } from '../config/contact';

const timelineOptions = [
  'As soon as possible',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just researching',
];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  city: '',
  inquiryType: INQUIRY_TYPES[0],
  timeline: '',
  message: '',
  consent: false,
};

export default function InquiryForm() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('inquiry');
  const requestedItem = searchParams.get('item');
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

  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus('Complete the required fields before submitting.');
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
      `Project timing: ${form.timeline || 'Not provided'}`,
      '',
      form.message,
    ].join('\n');

    setStatus(`Your inquiry email is opening, addressed to ${CONTACT.email}.`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Name <span aria-hidden="true">*</span><input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
        <label>Email <span aria-hidden="true">*</span><input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required /></label>
        <label>Phone <span className="optional">Optional</span><input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" /></label>
        <label>Organization <span className="optional">Optional</span><input name="organization" value={form.organization} onChange={update} autoComplete="organization" /></label>
        <label>City <span aria-hidden="true">*</span><input name="city" value={form.city} onChange={update} autoComplete="address-level2" required /></label>
        <label>Inquiry Type <span aria-hidden="true">*</span>
          <select name="inquiryType" value={form.inquiryType} onChange={update} required>
            {INQUIRY_TYPES.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Project timing <span className="optional">Optional</span>
          <select name="timeline" value={form.timeline} onChange={update}>
            <option value="">Select timing</option>
            {timelineOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <label>Message <span aria-hidden="true">*</span>
        <textarea name="message" value={form.message} onChange={update} rows="7" required />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" checked={form.consent} onChange={update} required />
        <span>I agree that Ark of Bones may use these details to respond to this inquiry.</span>
      </label>
      <button className="button button--gold" type="submit"><Mail aria-hidden="true" />Open Inquiry Email</button>
      <div className="form-status" aria-live="polite">{status}</div>
    </form>
  );
}
