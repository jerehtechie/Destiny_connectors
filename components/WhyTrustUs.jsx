
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, DollarSign, Users } from 'lucide-react';

const features = [
  { icon: <Shield className="w-12 h-12 text-blue-600" />, title: '100% Secure Titles', desc: 'All plots come with verified freehold titles and legal due diligence.' },
  { icon: <Award className="w-12 h-12 text-blue-600" />, title: 'Prime Locations', desc: 'Strategically located in Kenya’s fastest-growing corridors.' },
  { icon: <DollarSign className="w-12 h-12 text-blue-600" />, title: 'Flexible Payments', desc: 'Installments from 6–36 months with zero hidden fees.' },
  { icon: <Users className="w-12 h-12 text-blue-600" />, title: 'Diaspora Friendly', desc: 'Dedicated support for overseas Kenyans including virtual site visits.' },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Thousands Trust Us</h2>
          <p className="mt-3 text-gray-600 text-lg">Four reasons we stand out</p>
        </div>

        <div className="grid sm:grid-cols-4 gap-6 md:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 p-10 rounded-3xl hover:border-red-200 hover:shadow-xl transition-all group flex-shrink-0 w-80 lg:w-auto snap-center"
            >
              <div className="mb-6 flex justify-center  lg:justify-start">{feature.icon}</div>
              <h3 className="font-semibold text-2xl mb-3 group-hover:text-red-700 transition-colors text-center lg:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center lg:text-left">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}