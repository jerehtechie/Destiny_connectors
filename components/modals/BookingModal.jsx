import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose, selectedProject }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: selectedProject ? `Interested in ${selectedProject.title}` : '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request${selectedProject ? ` for ${selectedProject.title}` : ''} received!`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-start justify-center pt-20 md:pt-24 px-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="
              bg-white w-full max-w-lg sm:max-w-xl rounded-3xl
              overflow-hidden relative shadow-2xl
              max-h-[calc(100vh-8rem)] overflow-y-auto
            "
          >
            {/* Close button – make it sticky if content is long */}
            <button
              onClick={onClose}
              className="sticky top-4 right-4 z-10 float-right mr-4 mt-4 text-gray-500 hover:text-gray-800 bg-white/80 rounded-full p-1.5 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-6 sm:px-8 pt-10 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Book a Site Visit</h3>
              {selectedProject && (
                <p className="text-red-600 font-medium mt-2 text-lg">
                  for {selectedProject.title}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 space-y-5 sm:space-y-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone (+254...)"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requests or preferred dates?"
                rows={4}
                className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
              />
              <button
                type="submit"
                className="
                  w-full py-4 mt-2 bg-red-600 hover:bg-red-700 
                  text-white font-semibold rounded-2xl 
                  transition duration-300 shadow-md hover:shadow-lg
                "
              >
                Confirm Booking Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}