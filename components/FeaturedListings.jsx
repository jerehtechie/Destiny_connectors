import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

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
      'Gated residential community with ready titles and road access.',
  },
  {
    id: 2,
    title: 'Horizon Heights',
    location: 'Mombasa Road, Machakos',
    size: '1/2 Acre',
    price: 'KSh 4,999,000',
    image: 'https://picsum.photos/id/1040/600/400',
    description:
      'Prime commercial & residential plots near the new expressway.',
  },
  {
    id: 3,
    title: 'River Valley',
    location: 'Thika, Kiambu',
    size: '1 Acre',
    price: 'KSh 8,500,000',
    image: 'https://picsum.photos/id/1018/600/400',
    description:
      'Fertile riverside land ideal for farming and luxury homes.',
  },
  {
    id: 4,
    title: 'Coast Haven',
    location: 'Kilifi, Coast',
    size: '1/2 Acre',
    price: 'KSh 6,750,000',
    image:
      'https://images.unsplash.com/photo-1583699998579-5872a2117151?q=80&w=1470&auto=format&fit=crop',
    description: 'Beach-adjacent plots with stunning ocean views.',
  },
];

export default function FeaturedListings({
  onBookProject,
  setCurrentPage,
}) {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10 md:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Featured Land Listings
            </h2>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">
              Premium titled plots in Kenya's fastest-growing areas
            </p>
          </div>

          <button
            onClick={() => setCurrentPage?.('listings')}
            className="
              text-red-600 font-medium text-base sm:text-lg
              flex items-center gap-2 hover:gap-3 transition-all duration-300
              hover:text-red-700
            "
          >
            View all projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Projects container – different classes for mobile vs desktop */}
        <div className="relative">
          {/* Desktop + Tablet: vertical grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group bg-white rounded-2xl overflow-hidden
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-gray-200 flex flex-col h-full
                "
              >
                {/* ... card content remains exactly the same ... */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                    {project.size}
                  </div>
                </div>

                <div className="p-6 lg:p-7 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl lg:text-2xl text-blue-950 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-red-600" />
                    <span className="text-sm lg:text-base">{project.location}</span>
                  </div>

                  <div className="text-2xl lg:text-3xl font-extrabold text-blue-800 mb-4">
                    {project.price}
                  </div>

                  <p className="text-gray-600 text-sm lg:text-base mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <button
                    onClick={() => onBookProject(project)}
                    className="
                      mt-auto w-full py-3.5 lg:py-4
                      bg-red-600 hover:bg-red-700 active:bg-red-800
                      text-white font-semibold rounded-xl
                      transition-all duration-300 shadow-sm hover:shadow-md
                      flex items-center justify-center gap-2
                    "
                  >
                    Book Site Visit
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden flex overflow-x-auto pb-8 gap-5 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group bg-white rounded-2xl overflow-hidden
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-gray-200 flex flex-col flex-shrink-0
                  w-[85vw] max-w-[340px] snap-center
                "
              >
                {/* Same card content as above – copy-paste or extract to a <ProjectCard /> component */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                    {project.size}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-blue-950 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-red-600" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="text-2xl font-extrabold text-blue-800 mb-4">
                    {project.price}
                  </div>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <button
                    onClick={() => onBookProject(project)}
                    className="
                      mt-auto w-full py-3.5
                      bg-red-600 hover:bg-red-700 active:bg-red-800
                      text-white font-semibold rounded-xl
                      transition-all duration-300 shadow-sm hover:shadow-md
                      flex items-center justify-center gap-2
                    "
                  >
                    Book Site Visit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile scroll hint */}
        <div className="md:hidden text-center mt-6 text-sm text-gray-500">
          ← Scroll horizontally to explore →
        </div>
      </div>
    </section>
  );
}