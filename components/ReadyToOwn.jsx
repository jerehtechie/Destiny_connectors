import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ReadyToOwn({ onContactClick }) {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Ready to Own Your Piece of Kenya?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-3">
            <Phone className="w-12 h-12 text-red-400" />
            <div className="font-mono text-2xl">+254 22 324 131</div>
            <div className="text-red-400 text-sm">Mon–Sat 8am–6pm</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Mail className="w-12 h-12 text-red-400" />
            <div className="font-mono text-2xl break-all">info@destinyconnector.co.ke</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <MapPin className="w-12 h-12 text-red-400" />
            <div className="font-mono text-2xl">Nairobi, Kenya</div>
            <div className="text-red-400 text-sm">Head Office • Thika Road</div>
          </div>
        </div>
        <button
          onClick={onContactClick}
          className="mt-16 px-12 py-5 bg-red-600 hover:bg-red-500 text-lg font-semibold rounded-3xl transition cursor-pointer"
        >
          Send Us a Message
        </button>
      </div>
    </section>
  );
}