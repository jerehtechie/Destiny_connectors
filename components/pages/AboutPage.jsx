// src/components/DestinyConnector/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartHandshake, Users, MapPin, Building, Leaf } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Plots Sold', icon: <Users className="w-10 h-10 text-red-600" /> },
  { value: '98%', label: 'Client Satisfaction', icon: <HeartHandshake className="w-10 h-10 text-red-600" /> },
  { value: '8', label: 'Counties Covered', icon: <MapPin className="w-10 h-10 text-red-600" /> },
];

const values = [
  {
    title: 'Transparency',
    description: 'Every transaction is clear, documented, and communicated from day one.',
    icon: <ShieldCheck className="w-12 h-12 text-blue-700" />,
  },
  {
    title: 'Speed & Reliability',
    description: 'Freehold titles delivered within 90 days – guaranteed.',
    icon: <Award className="w-12 h-12 text-blue-700" />,
  },
  {
    title: 'Lifelong Support',
    description: 'We remain your trusted partner long after the purchase is complete.',
    icon: <HeartHandshake className="w-12 h-12 text-blue-700" />,
  },
];

export default function AboutPage({ setShowContactModal, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583699998579-5872a2117151?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <img
            src="/assets/company_logo.png"
            alt="Destiny Connector Logo"
            className="w-24 object-contain"
          />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Destiny Connector
              </h1>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-light mt-4 max-w-4xl mx-auto leading-relaxed">
              Connecting Kenyans to their forever land – securely, affordably, transparently.
            </p>

            <div className="mt-10 inline-flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-red-600/90 backdrop-blur-sm rounded-full text-lg font-medium">
                Since 2018
              </span>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium border border-white/30">
                Trusted by Thousands
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Kenya’s Most Trusted
                <span className="text-red-600"> Land Partner</span>
              </h2>

              <div className="mt-6 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2018, Destiny Connector has grown to become one of Kenya’s fastest-growing real estate and land investment companies.
                </p>
                <p>
                  We specialize in sourcing, legally vetting, titling, and selling premium residential, commercial, and agricultural land across 8 counties — making land ownership simple, secure, and achievable for every Kenyan.
                </p>
                <p className="font-medium text-blue-700">
                  Whether you’re in Nairobi, Mombasa, the diaspora, or anywhere in the world — your piece of Kenya starts here.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1772325482422-55bc8dd65662?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern Kenyan residential development"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-wider">Premium Titled Land</p>
                <p className="text-2xl font-bold">Your Future, Secured</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            By the Numbers
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            These principles guide every plot we sell and every client relationship we build.
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all group"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 group-hover:text-red-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Final CTA */}
<section className="py-20 bg-blue-900 text-white">
  <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Own Your Piece of Kenya?
    </h2>
    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
      Join thousands of happy landowners who trusted Destiny Connector with their future.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <button
        onClick={() => setShowContactModal(true)}   // ← this line assumes prop is passed
        className="inline-flex items-center justify-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full transition shadow-lg"
      >
        Get in Touch Today
      </button>

      <button
        onClick={() => setCurrentPage('listings')}   // ← we'll add this page next
        className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-full border border-white/40 transition"
      >
        Explore Our Projects
      </button>
    </div>
  </div>
</section>
    </div>
  );
}