import React from 'react';
import { TRIO_WHATSAPP_URL } from '../data/contactDetails';

export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-corner">
      <a 
        href={TRIO_WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        title="Direct Chat on WhatsApp"
        aria-label="Direct Chat on WhatsApp"
      >
        <img 
          src="/assets/icon/icons8-whatsapp.gif" 
          alt="WhatsApp Chat" 
        />
      </a>
    </div>
  );
}
