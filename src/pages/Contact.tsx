import { useSearchParams, Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import QuoteForm from '../components/QuoteForm.tsx';
import { business, isPhoneConfigured, isWhatsAppConfigured } from '../config/business.ts';

const validCategories = [
  'Plywood & Boards',
  'Doors & Designs',
  'Door Handles',
  'Locks & Security',
  'Hinges & Fittings',
  'Door Accessories',
  'Other',
];

export default function Contact() {
  const [params] = useSearchParams();
  const product = params.get('product');
  const requestedCategory = params.get('category');
  const category = validCategories.includes(requestedCategory ?? '') ? requestedCategory! : 'Other';

  return (
    <>
      <section className="page-banner contact-banner">
        <span className="eyebrow gold-eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
        <h1>Let's start a<br /><em>conversation.</em></h1>
        <p>Share what you're working on and enquire about materials, door designs and hardware options.</p>
        <span className="page-banner-index">A GOOD PROJECT STARTS WITH A CONVERSATION</span>
      </section>
      <section className="contact-layout section-pad">
        <div className="contact-details">
          <span className="eyebrow">CONNECT WITH THE SHOWROOM</span>
          <h2>Here to help with<br /><em>the details.</em></h2>
          <p className="contact-lead">Whether you have a specific product in mind or are still exploring options, share a little about your requirement and start a conversation.</p>
          <div className="contact-item"><MapPin /><div><b>Visit the showroom</b><p>{business.address || 'Showroom address to be confirmed'}</p></div></div>
          <div className="contact-item"><Phone /><div><b>Call the team</b><p>{business.phoneNumber || 'Phone number to be confirmed'}</p>{isPhoneConfigured && <a href={`tel:${business.phoneNumber}`}>Call now <ArrowUpRight size={13} /></a>}</div></div>
          <div className="contact-item"><Mail /><div><b>Email</b><p>{business.email || 'Email address to be confirmed'}</p>{business.email && <a href={`mailto:${business.email}`}>Send an email <ArrowUpRight size={13} /></a>}</div></div>
          <div className="contact-item"><MessageCircle /><div><b>WhatsApp enquiries</b><p>{isWhatsAppConfigured ? 'Message the showroom directly.' : 'WhatsApp number to be confirmed'}</p>{isWhatsAppConfigured && <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer">Start a chat <ArrowUpRight size={13} /></a>}</div></div>
          <div className="contact-honesty"><Sparkles size={15} /><p>Contact details will be activated once verified by the business. No placeholder number or address is presented as real.</p></div>
        </div>
        <div className="contact-form-wrap" id="quote">
          <span className="eyebrow gold-eyebrow">REQUEST A QUOTATION</span>
          <h2>Tell us what<br />you <em>have in mind.</em></h2>
          {product && <div className="prefilled-product"><span>ENQUIRY ABOUT</span><strong>{product}</strong></div>}
          <QuoteForm
            defaultRequirements={product ? `I am interested in ${product}. Please share product details and availability.` : ''}
            defaultCategory={category}
          />
        </div>
      </section>
      <section className="contact-bottom">
        <span>NOT SURE WHERE TO BEGIN?</span>
        <Link to="/collections/plywood">Explore the collections <ArrowUpRight size={15} /></Link>
      </section>
    </>
  );
}
