import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const sliderImages = [
  'https://images.unsplash.com/photo-1709842387194-85d8756d6c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFuZCUyMEJhbmtpbmclMjBpbiUyMEtlbnlhJTNBJTIwU21hcnQlMjBTdHJhdGVneSUyMG9yJTIwUmlza3klMjBHYW1ibGUlMjBpbiUyMDIwMjYlM0Z8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1720027068414-fff0abffeec0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1613457231357-a5db3bc5bd81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1663429975679-05daee9f31a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1709842387288-bcebd36ce629?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1564590844793-c278c638d0d0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function HeroSlider({ onBookVisit }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {sliderImages.map((img, idx) => (
          idx === currentSlide && (
            <motion.img
              key={idx}
              src={img}
              alt="Kenyan land"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          )
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter "
        >
          <p className='pt-6'>Your Dream Land<br />Awaits in Kenya</p>
        </motion.h1>
        <p className="mt-6 text-xl text-white/90 max-w-lg mx-auto">
          Leading land seller with titled plots, flexible payments, and trusted by thousands.
        </p>
        <div className="mt-10 mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-white text-red-700 font-semibold rounded-2xl hover:shadow-xl transition cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={onBookVisit}
            className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-red-700 transition cursor-pointer"
          >
            Book a Site Visit
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-0 sm:bottom-12 left-0   right-0 z-20 flex items-center justify-center gap-6 sm:gap-10 md:gap-12">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
          className="
            text-white p-3 sm:p-4 rounded-full 
            hover:bg-white/20 active:bg-white/30 
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40
          "
          aria-label="Previous slide"
        >
          <ArrowLeft size={28} className="drop-shadow-md" />
        </button>

        {/* Dots – centered between arrows */}
        <div className="flex items-center gap-3 sm:gap-4">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`
                w-1 h-1  rounded-full 
                transition-all duration-300 ease-in-out
                ${i === currentSlide 
                  ? 'bg-white scale-125 shadow-lg ring-1 ring-white/60' 
                  : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                }
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
          className="
            text-white p-3 sm:p-4 rounded-full 
            hover:bg-white/20 active:bg-white/30 
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40
          "
          aria-label="Next slide"
        >
          <ArrowRight size={28} className="drop-shadow-md" />
        </button>
      </div>
    </section>
  );
}