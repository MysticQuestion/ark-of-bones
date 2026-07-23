import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { CONTACT, INQUIRY_TYPES } from '../config/contact';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  city: '',
  inquiryType: INQUIRY_TYPES[0],
  message: '',
  consent: false,
};

export default function InquiryForm() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('inquiry');
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    inquiryType: INQUIRY_TYPES.includes(requestedType) ? requestedType : emptyForm.inquiryType,
  }));
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (INQUIRY_TYPES.includes(requestedType)) {
      setForm((current) => ({ ...current, inquiryType: requestedType }));
    }
  }, [requestedType]);

  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus('Please complete all required fields and acknowledge the contact consent statement.');
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
      '',
      form.message,
    ].join('\n');

    setStatus(`Your email application is opening with a prepared message to ${CONTACT.email}.`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <label>Name <span aria-hidden="true">*</span><input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
        <label>Email <span aria-hidden="true">*</span><input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required /></label>
        <label>Telephone <span className="optional">Optional</span><input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" /></label>
        <label>Organization <span className="optional">Optional</span><input name="organization" value={form.organization} onChange={update} autoComplete="organization" /></label>
        <label>City <span aria-hidden="true">*</span><input name="city" value={form.city} onChange={update} autoComplete="address-level2" required /></label>
        <label>Inquiry type <span aria-hidden="true">*</span>
          <select name="inquiryType" value={form.inquiryType} onChange={update}>
            {INQUIRY_TYPES.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
      </div>
      <label>Message <span aria-hidden="true">*</span><textarea name="message" value={form.message} onChange={update} rows="7" required /></label>
      <label className="consent-field">
        <input name="consent" type="checkbox" checked={form.consent} onChange={update} required />
        <span>I agree that Ark of Bones may use these details to respond to this inquiry.</span>
      </label>
      <p className="form-note">This form uses your email application. No message is stored or submitted by this website.</p>
      <button className="button button--gold" type="submit"><Mail aria-hidden="true" />Prepare email inquiry</button>
      <div className="form-status" aria-live="polite">{status}</div>
    </form>
  );
}
