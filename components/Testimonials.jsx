import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Jane Mwangi', role: 'Nairobi Resident', text: 'I bought my first plot with Destiny Connector. The process was transparent, fast, and I received my title within 3 months!', image: 'https://picsum.photos/id/64/80/80' },
  { name: 'Ahmed Hassan', role: 'UK Diaspora', text: 'As a Kenyan living abroad, their virtual tours and diaspora support team made investing back home effortless.', image: 'https://picsum.photos/id/65/80/80' },
  { name: 'Sarah Kimani', role: 'Investor', text: 'Best land investment company in Kenya. Professional, honest, and the appreciation on my plot has been incredible.', image: 'https://picsum.photos/id/66/80/80' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Real Stories. Real Owners.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow"
            >
              <div className="flex gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-emerald-600">{t.role}</div>
                </div>
              </div>
              <p className="mt-8 italic text-gray-600 leading-relaxed">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}