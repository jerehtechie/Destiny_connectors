import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    onClose();
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            className="bg-white w-full max-w-lg rounded-3xl overflow-hidden relative"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-6 text-gray-400 hover:text-gray-700"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-8 pt-10 pb-2">
              <h3 className="text-3xl font-bold">Get in Touch</h3>
              <p className="text-gray-500 mt-1">We reply within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="w-full border rounded-2xl px-6 py-4 focus:border-emerald-600" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="w-full border rounded-2xl px-6 py-4 focus:border-emerald-600" />
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number (+254...)" required className="w-full border rounded-2xl px-6 py-4 focus:border-emerald-600" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you today?" rows={4} required className="w-full border rounded-2xl px-6 py-4 focus:border-emerald-600 resize-none" />
              <button type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}