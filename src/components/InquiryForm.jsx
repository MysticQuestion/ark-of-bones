import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { CONTACT, INQUIRY_TYPES } from '../config/contact';

const emptyForm = { name: '', email: '', phone: '', inquiryType: INQUIRY_TYPES[0], message: '' };

export default function InquiryForm() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('inquiry');
  const requestedItem = searchParams.get('item');
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    inquiryType: INQUIRY_TYPES.includes(requestedType) ? requestedType : emptyForm.inquiryType,
    message: requestedItem ? `Item: ${requestedItem}\n\n` : '',
  }));
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (INQUIRY_TYPES.includes(requestedType)) setForm((current) => ({ ...current, inquiryType: requestedType }));
  }, [requestedType]);

  const update = ({ target }) => setForm((current) => ({ ...current, [target.name]: target.value }));

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus('Complete the required fields.');
      return;
    }
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Telephone: ${form.phone || 'Not provided'}`,
      `Inquiry type: ${form.inquiryType}`,
      `Source page: ${window.location.pathname}`,
      '',
      form.message,
    ].join('\n');
    setStatus(`Opening a prepared email to ${CONTACT.email}.`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Ark of Bones inquiry: ${form.inquiryType}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Name <span aria-hidden="true">*</span><input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
        <label>Email <span aria-hidden="true">*</span><input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required /></label>
        <label>Telephone <span className="optional">Optional</span><input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" /></label>
        <label>Inquiry type <span aria-hidden="true">*</span><select name="inquiryType" value={form.inquiryType} onChange={update} required>{INQUIRY_TYPES.map((type) => <option key={type}>{type}</option>)}</select></label>
      </div>
      <label>Message <span aria-hidden="true">*</span><textarea name="message" value={form.message} onChange={update} rows="8" required /></label>
      <button className="button button--gold" type="submit"><Mail aria-hidden="true" />Open prepared email</button>
      <div className="form-status" aria-live="polite">{status}</div>
    </form>
  );
}
