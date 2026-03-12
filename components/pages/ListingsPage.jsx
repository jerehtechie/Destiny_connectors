import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Ruler,
  DollarSign,
  ArrowRight,
  Filter,
  ShieldCheck,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Eden Gardens',
    location: 'Kitengela, Kajiado',
    size: '1/4 Acre',
    price: 'KSh 2,499,000',
    image:
      'https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?q=80&w=774&auto=format&fit=crop',
    description:
      'Gated residential community with ready titles, murram roads and excellent security infrastructure.',
    type: 'residential',
  },
  {
    id: 2,
    title: 'Horizon Heights',
    location: 'Mombasa Road, Machakos',
    size: '1/2 Acre',
    price: 'KSh 4,999,000',
    image: 'https://picsum.photos/id/1040/800/600',
    description:
      'Prime commercial & residential plots strategically located near the new expressway with high future appreciation.',
    type: 'commercial',
  },
  {
    id: 3,
    title: 'River Valley',
    location: 'Thika, Kiambu',
    size: '1 Acre',
    price: 'KSh 8,500,000',
    image: 'https://picsum.photos/id/1018/800/600',
    description:
      'Fertile riverside land ideal for farming, eco-tourism lodges or luxury countryside homes.',
    type: 'agricultural',
  },
  {
    id: 4,
    title: 'Coast Haven',
    location: 'Kilifi, Coast',
    size: '1/2 Acre',
    price: 'KSh 6,750,000',
    image:
      'https://images.unsplash.com/photo-1583699998579-5872a2117151?q=80&w=1470&auto=format&fit=crop',
    description:
      'Beach-adjacent plots offering stunning ocean views and strong holiday rental potential.',
    type: 'residential',
  },
  {
    id: 5,
    title: 'Savanna Rise',
    location: 'Ongata Rongai, Kajiado',
    size: '1/8 Acre',
    price: 'KSh 1,850,000',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    description:
      'Affordable starter plots in a fast-growing peri-urban area with ready infrastructure.',
    type: 'residential',
  },
  {
    id: 6,
    title: 'Gateway Industrial Park',
    location: 'Athi River, Machakos',
    size: '2 Acres',
    price: 'KSh 18,000,000',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description:
      'Large industrial/commercial parcels suitable for warehouses, factories or logistics hubs.',
    type: 'commercial',
  },
  {
    id: 7,
    title: 'Green Acres Farm',
    location: 'Limuru, Kiambu',
    size: '5 Acres',
    price: 'KSh 22,500,000',
    image:
      'https://images.unsplash.com/photo-1500384066616-8a8d547abfc9?auto=format&fit=crop&q=80',
    description:
      'Prime agricultural land with rich volcanic soil, water access and subdivision potential.',
    type: 'agricultural',
  },
  {
    id: 8,
    title: 'Diani Sunset Plots',
    location: 'Diani Beach, Kwale',
    size: '1/4 Acre',
    price: 'KSh 9,800,000',
    image:
      'https://images.unsplash.com/photo-1515238152791-8216beabdfcb?auto=format&fit=crop&q=80',
    description:
      'Exclusive beachfront-adjacent residential plots in one of Kenya’s most sought-after tourist destinations.',
    type: 'residential',
  },
];

export default function ListingsPage({
  setShowBookingModal,
  setSelectedProject,
}) {
  const openBooking = (project) => {
    setSelectedProject(project);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero / Page Title */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight">
            Our Land Projects
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover premium freehold titled land across Kenya's fastest-growing corridors — residential, commercial & agricultural
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter size={20} className="text-blue-700" />
              <span>Filter by:</span>
            </div>

            <button className="px-5 py-2.5 bg-blue-700 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition">
              All
            </button>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition">
              Residential
            </button>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition">
              Commercial
            </button>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition">
              Agricultural
            </button>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition">
              Under KSh 3M
            </button>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition">
              Coast Region
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {project.size}
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-600 mb-4 text-sm md:text-base">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-red-600" />
                    {project.location}
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <div className="text-2xl md:text-3xl font-extrabold text-blue-800">
                      {project.price}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <button
                    onClick={() => openBooking(project)}
                    className="
                      mt-auto w-full py-3.5 md:py-4
                      bg-red-600 hover:bg-red-700 active:bg-red-800
                      text-white font-semibold rounded-xl
                      transition-all duration-300
                      flex items-center justify-center gap-2 shadow-md hover:shadow-lg
                      text-sm md:text-base
                    "
                  >
                    Book Site Visit
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20">
            <p className="text-lg text-gray-700 mb-6">
              Looking for something specific? Let our team help you find the perfect plot.
            </p>
            <button
              onClick={() => setShowBookingModal(true)}
              className="
                inline-flex items-center gap-2 px-10 py-4
                bg-blue-700 hover:bg-blue-800 text-white
                font-semibold rounded-full shadow-lg
                transition-all duration-300
              "
            >
              <ShieldCheck size={20} />
              Speak to an Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}