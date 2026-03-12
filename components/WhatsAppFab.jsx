import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/+254722324131?text=Hello%20Destiny%20Connector%21%20I'm%20interested%20in%20your%20land%20listings"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}