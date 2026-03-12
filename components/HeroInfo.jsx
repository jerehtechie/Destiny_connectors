import React from 'react';
import { motion } from 'framer-motion';

export default function HeroInfo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
          🇰🇪 Kenya's #1 Land Seller
        </div>
        <h2 className="text-5xl font-bold leading-tight text-gray-900">
          Secure. Affordable.<br />Yours Forever.
        </h2>
        <p className="mt-8 text-lg text-gray-600 max-w-md">
          With over 500+ satisfied clients and 200 acres sold, Destiny Connector delivers titled land you can trust.
        </p>
        <div className="mt-10 flex items-center gap-8 text-sm">
          <div>
            <div className="font-mono text-4xl font-bold text-red-600">500+</div>
            <div className="text-gray-500">Happy Owners</div>
          </div>
          <div>
            <div className="font-mono text-4xl font-bold text-red-600">15</div>
            <div className="text-gray-500">Projects Nationwide</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1583699998579-5872a2117151?q=80&w=1470&auto=format&fit=crop"
          alt="Happy family on their land"
          className="rounded-3xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}