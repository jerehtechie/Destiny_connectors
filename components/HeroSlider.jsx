import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const sliderImages = [
  'https://picsum.photos/id/1015/1920/1080',
  'https://picsum.photos/id/1016/1920/1080',
  'https://picsum.photos/id/1033/1920/1080',
  'https://picsum.photos/id/1040/1920/1080',
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
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
              exit={{ opacity: 0, scale: 1.05, }}
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
          className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter"
        >
          Your Dream Land<br />Awaits in Kenya
        </motion.h1>
        <p className="mt-6 text-xl text-white/90 max-w-lg mx-auto">
          Leading land seller with titled plots, flexible payments, and trusted by thousands.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-white text-red-700 font-semibold rounded-2xl hover:shadow-xl transition cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={onBookVisit}
            className="px-10 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-red-700 transition cursor-pointer"
          >
            Book a Site Visit
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 flex gap-3 z-20">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
        className="absolute left-6 bottom-12 text-white p-3 hover:bg-white/10 rounded-full transition"
      >
        <ArrowLeft size={28} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
        className="absolute right-6 bottom-12 text-white p-3 hover:bg-white/10 rounded-full transition"
      >
        <ArrowRight size={28} />
      </button>
    </section>
  );
}