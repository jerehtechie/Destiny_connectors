import React from 'react';
import { motion } from 'framer-motion';

export default function DiasporaPage({ setShowContactModal }) {
  const benefits = [
    {
      title: 'Virtual Site Visits',
      desc: 'Live HD video tours straight to your phone or laptop — see the land in real time with our agents.',
      icon: '📱',
    },
    {
      title: 'Global Payment Options',
      desc: 'Secure bank-to-bank wire transfers accepted from over 30 countries — no complicated middlemen.',
      icon: '💳',
    },
    {
      title: 'Title Delivered Worldwide',
      desc: 'Your official freehold title deed safely couriered to your doorstep — anywhere in the world.',
      icon: '✈️',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24 md:pb-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80')",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-red-400 text-xl">🌍</span>
              <span className="font-medium text-lg">Specially for Kenyans Abroad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Own Land Back Home
              <br />
              <span className="text-red-500">Without Leaving Your City</span>
            </h1>

            <p className="mt-8 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We make investing in titled Kenyan land safe, simple, and 100% remote — from anywhere in the world.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="
                  px-10 py-5 bg-red-600 hover:bg-red-700 active:bg-red-800
                  text-white text-lg font-semibold rounded-full
                  shadow-lg hover:shadow-xl transition-all duration-300
                "
              >
                Speak to Our Diaspora Team →
              </button>

              <button
                className="
                  px-10 py-5 bg-white/10 backdrop-blur-md
                  border border-white/40 hover:bg-white/20
                  text-white text-lg font-semibold rounded-full
                  transition-all duration-300
                "
              >
                Watch How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
            Diaspora Made Easy
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            Three powerful ways we remove every barrier between you and your Kenyan land investment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="
                  bg-white rounded-2xl p-8 md:p-10
                  border border-gray-200 hover:border-blue-200
                  shadow-md hover:shadow-xl transition-all duration-300
                  group
                "
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="bg-blue-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Thousands of Diaspora Kenyans Already Trust Us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Secure titles, zero hidden fees, lifetime support — all handled remotely with full transparency.
          </p>

          <button
            onClick={() => setShowContactModal(true)}
            className="
              px-12 py-6 bg-red-600 hover:bg-red-700 active:bg-red-800
              text-white text-xl font-semibold rounded-full
              shadow-xl hover:shadow-2xl transition-all duration-300
              flex items-center gap-3 mx-auto
            "
          >
            Start Your Journey Today →
          </button>

          <p className="mt-8 text-sm text-gray-600">
            Response within 24 hours • Free consultation • No obligation
          </p>
        </div>
      </section>
    </div>
  );
}