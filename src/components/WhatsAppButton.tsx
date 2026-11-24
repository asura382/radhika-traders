import { MessageCircle, Phone } from 'lucide-react';
import { business, isPhoneConfigured, isWhatsAppConfigured } from '../config/business.ts';

export default function WhatsAppButton() {
  if (!isWhatsAppConfigured && !isPhoneConfigured) return null;

  return (
    <>
      <div className="mobile-contact-bar">
        {isPhoneConfigured && (
          <a href={`tel:${business.phoneNumber}`}><Phone size={16} /> Call showroom</a>
        )}
        {isWhatsAppConfigured && (
          <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
        )}
      </div>
      {isWhatsAppConfigured && (
        <a
          className="whatsapp-float"
          href={`https://wa.me/${business.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Radhika Traders on WhatsApp"
        >
          <MessageCircle size={21} />
        </a>
      )}
    </>
  );
}
