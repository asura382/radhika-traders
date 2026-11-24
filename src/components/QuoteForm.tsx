import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Paperclip } from 'lucide-react';
import { business, isWhatsAppConfigured } from '../config/business.ts';

const categoryOptions = [
  'Plywood & Boards',
  'Doors & Designs',
  'Door Handles',
  'Locks & Security',
  'Hinges & Fittings',
  'Door Accessories',
  'Other',
];

type QuoteFormProps = {
  defaultRequirements?: string;
  defaultCategory?: string;
};

export default function QuoteForm({
  defaultRequirements = '',
  defaultCategory = 'Other',
}: QuoteFormProps) {
  const [sent, setSent] = useState(false);
  const [attachmentName, setAttachmentName] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    category: categoryOptions.includes(defaultCategory) ? defaultCategory : 'Other',
    requirements: defaultRequirements,
    quantity: '',
    message: '',
  });

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSent(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      'Hello Radhika Traders,',
      '',
      'I would like to enquire about a quotation.',
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Category: ${form.category}`,
      `Requirements: ${form.requirements}`,
      `Quantity / dimensions: ${form.quantity || 'Not specified'}`,
      `Additional message: ${form.message || '—'}`,
      `Reference file: ${attachmentName || 'None'} (file is not attached by this demo)`,
      '',
      'Please share the latest product details, availability and quotation.',
    ].join('\n');

    if (isWhatsAppConfigured) {
      window.open(
        `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer',
      );
    }
    setSent(true);
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      {sent && (
        <div className="form-success" role="status" aria-live="polite">
          <CheckCircle2 size={18} />
          {isWhatsAppConfigured
            ? 'Your enquiry has been prepared in WhatsApp. Review it before sending.'
            : 'Demo enquiry completed locally. No information has been sent or stored.'}
        </div>
      )}
      <div className="form-grid">
        <label>
          Full name
          <input autoComplete="name" required name="name" value={form.name} onChange={update} placeholder="Your name" />
        </label>
        <label>
          Mobile number
          <input
            autoComplete="tel"
            required
            name="phone"
            inputMode="tel"
            pattern="[0-9+() -]{7,}"
            value={form.phone}
            onChange={update}
            placeholder="Your contact number"
          />
        </label>
        <label>
          Product category
          <select name="category" value={form.category} onChange={update}>
            {categoryOptions.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label>
          Quantity / dimensions <span className="optional">OPTIONAL</span>
          <input name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 4 doors / size" />
        </label>
        <label className="full-field">
          What are you looking for?
          <textarea required name="requirements" value={form.requirements} onChange={update} rows={3} placeholder="Tell us about the material or product you need" />
        </label>
        <label className="full-field">
          Additional message <span className="optional">OPTIONAL</span>
          <textarea name="message" value={form.message} onChange={update} rows={2} placeholder="Any other details" />
        </label>
        <label className="full-field attachment-field">
          <span className="attachment-label"><Paperclip size={14} /> Attach a material list or photo <span className="optional">OPTIONAL · DEMO ONLY</span></span>
          <input
            type="file"
            accept="image/*,.pdf,.doc,.docx"
            onChange={(event) => setAttachmentName(event.target.files?.[0]?.name ?? '')}
          />
          {attachmentName && <small>Selected: {attachmentName} — the file is not uploaded or sent.</small>}
        </label>
      </div>
      <button className="button button-gold form-submit" type="submit">
        Prepare my enquiry <ArrowUpRight size={16} />
      </button>
      <p className="form-note">
        {isWhatsAppConfigured
          ? 'Your enquiry opens as a pre-filled WhatsApp message. You remain in control of sending it.'
          : 'Presentation demo only. Add the verified shop WhatsApp number before enabling live enquiries.'}
      </p>
    </form>
  );
}
