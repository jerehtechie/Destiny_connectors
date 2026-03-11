import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowLeft, ArrowRight, Phone, Mail, MapPin, 
  Calendar, Award, Shield, Users, DollarSign, MessageCircle 
} from 'lucide-react';

const DestinyConnector = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const sliderImages = [
    'https://picsum.photos/id/1015/1920/1080',
    'https://picsum.photos/id/1016/1920/1080',
    'https://picsum.photos/id/1033/1920/1080',
    'https://picsum.photos/id/1040/1920/1080',
  ];

  // Featured projects
  const projects = [
    {
      id: 1,
      title: 'Eden Gardens',
      location: 'Kitengela, Kajiado',
      size: '1/4 Acre',
      price: 'KSh 2,499,000',
      image: 'https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Gated residential community with ready titles and road access.',
    },
    {
      id: 2,
      title: 'Horizon Heights',
      location: 'Mombasa Road, Machakos',
      size: '1/2 Acre',
      price: 'KSh 4,999,000',
      image: 'https://picsum.photos/id/1040/600/400',
      description: 'Prime commercial & residential plots near the new expressway.',
    },
    {
      id: 3,
      title: 'River Valley',
      location: 'Thika, Kiambu',
      size: '1 Acre',
      price: 'KSh 8,500,000',
      image: 'https://picsum.photos/id/1018/600/400',
     
      description: 'Fertile riverside land ideal for farming and luxury homes.',
    },
    {
      id: 4,
      title: 'Coast Haven',
      location: 'Kilifi, Coast',
      size: '1/2 Acre',
      price: 'KSh 6,750,000',
      image: 'https://images.unsplash.com/photo-1583699998579-5872a2117151?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
      description: 'Beach-adjacent plots with stunning ocean views.',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Jane Mwangi',
      role: 'Nairobi Resident',
      text: 'I bought my first plot with Destiny Connector. The process was transparent, fast, and I received my title within 3 months!',
      image: 'https://picsum.photos/id/64/80/80',
    },
    {
      name: 'Ahmed Hassan',
      role: 'UK Diaspora',
      text: 'As a Kenyan living abroad, their virtual tours and diaspora support team made investing back home effortless.',
      image: 'https://picsum.photos/id/65/80/80',
    },
    {
      name: 'Sarah Kimani',
      role: 'Investor',
      text: 'Best land investment company in Kenya. Professional, honest, and the appreciation on my plot has been incredible.',
      image: 'https://picsum.photos/id/66/80/80',
    },
  ];

  // Features
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-emerald-600" />,
      title: '100% Secure Titles',
      desc: 'All plots come with verified freehold titles and legal due diligence.',
    },
    {
      icon: <Award className="w-12 h-12 text-emerald-600" />,
      title: 'Prime Locations',
      desc: 'Strategically located in Kenya’s fastest-growing corridors.',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-600" />,
      title: 'Flexible Payments',
      desc: 'Installments from 6–36 months with zero hidden fees.',
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: 'Diaspora Friendly',
      desc: 'Dedicated support for overseas Kenyans including virtual site visits.',
    },
  ];

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form handlers
  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleBookingChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const submitContact = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will contact you within 24 hours.');
    setShowContactModal(false);
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const submitBooking = (e) => {
    e.preventDefault();
    alert(`Booking request for ${selectedProject?.title} received! Our team will confirm the site visit date shortly.`);
    setShowBookingModal(false);
    setBookingForm({ name: '', email: '', phone: '', date: '', message: '' });
    setSelectedProject(null);
  };

  const openBooking = (project) => {
    setSelectedProject(project);
    setBookingForm({ ...bookingForm, message: `Interested in ${project.title}` });
    setShowBookingModal(true);
  };

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Diaspora', page: 'diaspora' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
           <img 
             src="/assets/company_logo.png" 
             alt="Destiny Connector Logo" 
             className="h-10 w-auto object-contain" 
          />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-10 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setCurrentPage(link.page);
                  setIsMenuOpen(false);
                }}
                className={`transition-colors hover:text-emerald-600 ${
                  currentPage === link.page ? 'text-emerald-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setShowContactModal(true)}
              className="hidden md:block px-7 py-3 text-sm font-medium border border-emerald-600 text-emerald-600 rounded-2xl hover:bg-emerald-50 transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-7 py-3 text-sm font-semibold bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition flex items-center gap-x-2"
            >
              <Calendar className="w-4 h-4" />
              Book Visit
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-y-6 text-lg">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => {
                      setCurrentPage(link.page);
                      setIsMenuOpen(false);
                    }}
                    className="text-left font-medium text-gray-700"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setShowContactModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-medium text-emerald-600"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* PAGE RENDERING */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* HERO IMAGE SLIDER */}
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
                      animate={{ opacity: 1, scale: 1 ,x:0}}
                      exit={{ opacity: 0, scale: 1.05,x:200}}
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
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-4 bg-white text-emerald-700 font-[0.5rem] rounded-2xl hover:shadow-xl transition"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="px-10 py-4 border-2 border-white text-white  rounded-2xl hover:bg-white hover:text-emerald-700 transition"
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

            {/* HERO INFO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
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
                    <div className="font-mono text-4xl font-bold text-emerald-600">500+</div>
                    <div className="text-gray-500">Happy Owners</div>
                  </div>
                  <div>
                    <div className="font-mono text-4xl font-bold text-emerald-600">15</div>
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
                  src="https://images.unsplash.com/photo-1583699998579-5872a2117151?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Happy family on their land"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
            </section>

            {/* our virtures */}
            <section className="bg-white py-20 md:py-24">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Thousands Trust Us</h2>
                  <p className="mt-3 text-gray-600 text-base sm:text-lg">
                    Four reasons we stand out
                  </p>
                </div>

    {/* Horizontal scroll on mobile → grid on desktop */}
    <div 
      className="
        flex overflow-x-auto pb-6 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0
        gap-5 sm:gap-6 lg:gap-8
        snap-x snap-mandatory
        scrollbar-hide
        lg:grid lg:grid-cols-4 lg:overflow-x-visible
      "
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="
            bg-white border border-gray-100 
            p-8 sm:p-10 
            rounded-3xl 
            hover:border-emerald-200 hover:shadow-xl
            transition-all duration-300 group 
            flex-shrink-0 
            w-[85vw] min-w-[280px] sm:w-80 lg:w-auto
            snap-center lg:snap-none
          "
        >
          <div className="mb-6 flex justify-center lg:justify-start">
            {feature.icon}
          </div>
          <h3 className="
            font-semibold text-xl sm:text-2xl mb-3 
            group-hover:text-emerald-700 transition-colors
            text-center lg:text-left
          ">
            {feature.title}
          </h3>
          <p className="
            text-gray-600 leading-relaxed text-sm sm:text-base 
            text-center lg:text-left
          ">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
              </div>
           </section>

            {/* FEATURED LAND LISTINGS - horizontal scroll */}
            <section id="projects" className="py-20 md:py-24 bg-gray-50">
             <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 mb-10 md:mb-12">
               <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                 Featured Land Listings
                </h2>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">
               Scroll horizontally to explore • All with freehold titles
               </p>
             </div>
            <button
             
             className="text-emerald-600 font-medium flex items-center gap-x-2 hover:gap-x-3 transition-all whitespace-nowrap"
            >
            View all projects <ArrowRight className="w-5 h-5" />
      </button>
    </div>

    {/* Always horizontal scroll – no grid on any screen size */}
    <div
      className="
        flex overflow-x-auto pb-10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8
        gap-5 sm:gap-6 lg:gap-8
        snap-x snap-mandatory
        scrollbar-hide
      "
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
          className="
            group bg-white rounded-3xl overflow-hidden 
            shadow-lg hover:shadow-2xl transition-all duration-300
            flex-shrink-0 
            w-[85vw] min-w-[300px] sm:w-96 lg:w-[380px] xl:w-[420px]
            snap-center
          "
        >
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-2xl text-xs font-semibold text-emerald-700">
              {project.size}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-xl sm:text-2xl line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-x-1.5 text-gray-500 mt-1 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {project.location}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-emerald-600 font-bold text-xl sm:text-2xl">
                  {project.price}
                </div>
              </div>
            </div>

            <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base line-clamp-3">
              {project.description}
            </p>

            <button
              onClick={() => openBooking(project)}
              className="
                mt-6 sm:mt-8 w-full py-3.5 sm:py-4 
                bg-emerald-600 hover:bg-emerald-700 
                text-white font-semibold rounded-2xl 
                transition duration-300 text-sm sm:text-base
              "
            >
              Book Site Visit
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Hint for users */}
    <div className="text-center mt-6 text-sm text-gray-500">
      ← Scroll horizontally to view all listings →
    </div>
  </div>
</section>

            {/* PROJECT MAP SECTION */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-4">Our Projects Across Kenya</h2>
                <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
                  Interactive map showing all active developments
                </p>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010000!2d36.5!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172b6f2c7a7%3A0x4c9c8b8e8b8e8b8e!2sKenya!5e0!3m2!1sen!2ske!4v1700000000000"
                    width="100%"
                    height="520"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Destiny Connector Projects Map"
                  />
                </div>
                <p className="text-xs text-center text-gray-400 mt-6">
                  Zoom & click markers for project details • Updated March 2026
                </p>
              </div>
            </section>

            {/* TESTIMONIALS - horizontal scroll on mobile */}
            <section className="py-24 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Real Stories. Real Owners.</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-8 rounded-3xl shadow"
                    >
                      <div className="flex gap-x-4">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl" />
                        <div>
                          <div className="font-semibold">{t.name}</div>
                          <div className="text-xs text-emerald-600">{t.role}</div>
                        </div>
                      </div>
                      <p className="mt-8 italic text-gray-600 leading-relaxed">“{t.text}”</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            {/* VIDEO SECTION */}
            <section className="py-24 bg-white">
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-6">Watch Our Story</h2>
                <p className="text-center text-gray-600 mb-12">3-minute journey of how we help Kenyans own land</p>
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                    title="Destiny Connector - Land Your Future"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>

            {/* CONTACT DETAILS + CTA - fixed spacing */}
            <section className="py-24 bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Ready to Own Your Piece of Kenya?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center space-y-3">
                    <Phone className="w-12 h-12 text-emerald-400" />
                    <div className="font-mono text-2xl">+254 700 123 456</div>
                    <div className="text-emerald-400 text-sm">Mon–Sat 8am–6pm</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <Mail className="w-12 h-12 text-emerald-400" />
                    <div className="font-mono text-2xl break-all">info@destinyconnector.co.ke</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <MapPin className="w-12 h-12 text-emerald-400" />
                    <div className="font-mono text-2xl">Nairobi, Kenya</div>
                    <div className="text-emerald-400 text-sm">Head Office • Thika Road</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="mt-16 px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-lg font-semibold rounded-3xl transition"
                >
                  Send Us a Message
                </button>
              </div>
            </section>
          </motion.div>
        )}

        {currentPage === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pt-20 pb-32 bg-white"
          >
            <div className="max-w-4xl mx-auto px-6 prose prose-lg">
              <h1 className="text-5xl font-bold text-emerald-700 mb-10">About Destiny Connector</h1>
              <p className="text-xl leading-relaxed">
                Founded in 2018, Destiny Connector is Kenya’s fastest-growing land investment company. 
                We specialize in sourcing, titling, and selling premium residential, commercial, and agricultural land across 8 counties.
              </p>
              <p>
                Our mission is simple: to make land ownership accessible, transparent, and secure for every Kenyan — 
                whether you live in Nairobi, Mombasa, or across the globe.
              </p>
              <div className="my-16 grid grid-cols-2 gap-8 not-prose">
                <div className="bg-emerald-50 p-10 rounded-3xl">
                  <div className="text-emerald-600 font-mono text-6xl font-bold">500+</div>
                  <div className="mt-2 text-xl">Plots Sold</div>
                </div>
                <div className="bg-emerald-50 p-10 rounded-3xl">
                  <div className="text-emerald-600 font-mono text-6xl font-bold">98%</div>
                  <div className="mt-2 text-xl">Client Satisfaction</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mt-20 mb-6">Our Values</h2>
              <ul className="list-none space-y-6 text-lg">
                <li className="flex gap-x-4"><span className="text-emerald-600">✓</span> Transparency in every transaction</li>
                <li className="flex gap-x-4"><span className="text-emerald-600">✓</span> Freehold titles delivered within 90 days</li>
                <li className="flex gap-x-4"><span className="text-emerald-600">✓</span> Dedicated after-sales support for life</li>
              </ul>
            </div>
          </motion.div>
        )}

        {currentPage === 'diaspora' && (
          <motion.div
            key="diaspora"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pt-20 pb-32 bg-emerald-50"
          >
            <div className="max-w-5xl mx-auto px-6 text-center">
              <div className="inline-block bg-white text-emerald-700 px-6 py-2 rounded-3xl font-medium mb-8">
                Specially for Kenyans Abroad
              </div>
              <h1 className="text-6xl font-bold leading-none">Land Back Home,<br />Made Simple</h1>
              <p className="mt-8 text-2xl text-gray-700 max-w-2xl mx-auto">
                We help the Kenyan Diaspora own titled land without ever stepping on a plane.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-20">
                {[
                  { title: 'Virtual Site Visits', desc: 'Live video tours from your phone' },
                  { title: 'Wire Transfer Friendly', desc: 'Bank-to-bank payments from 30+ countries' },
                  { title: 'Title Mailed to You', desc: 'Official documents delivered worldwide' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl text-left">
                    <h3 className="font-semibold text-2xl">{item.title}</h3>
                    <p className="mt-4 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowContactModal(true)}
                className="mt-16 px-16 py-6 bg-emerald-600 text-white text-lg font-semibold rounded-3xl hover:bg-emerald-700"
              >
                Speak to Our Diaspora Team →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-x-3 text-white">
             <img 
  src="/assets/company_logo.png" 
  alt="Destiny Connector Logo" 
  className="h-10 w-auto object-contain" 
/>
              <span className="text-3xl font-bold tracking-tighter">Destiny Connector</span>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Licensed Land Seller • PPRA Member<br />
              Connecting Kenyans to their future since 2018
            </p>
          </div>
          <div className="text-sm grid grid-cols-2 gap-y-6">
            <div>Quick Links</div>
            <div className="font-medium">Home</div>
            <div className="font-medium">About Us</div>
            <div className="font-medium">Diaspora</div>
            <div className="font-medium">Projects</div>
          </div>
          <div>
            <div className="text-sm">Nairobi • Thika Road, Opposite Garden City</div>
            <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Destiny Connector Ltd. All Rights Reserved.</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+254113496760?text=Hello%20Destiny%20Connector%21%20I'm%20interested%20in%20your%20land%20listings"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl overflow-hidden relative"
            >
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="absolute top-5 right-6 cursor:pointer text-gray-400 hover:text-gray-700 focus:outline-none focus:text-emerald-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-6 sm:px-8 pt-8 pb-2">
                <h3 className="text-2xl sm:text-3xl font-bold">Get in Touch</h3>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">We reply within 24 hours</p>
              </div>

              <form onSubmit={submitContact} className="p-6 sm:p-8 space-y-5 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="Phone Number (+254...)"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="How can we help you today?"
                  rows={4}
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 resize-none text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition text-base sm:text-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 h-90vh">
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl overflow-hidden relative"
            >
              <button
                type="button"
                onClick={() => {
                  setShowBookingModal(false);
                  setSelectedProject(null);
                }}
                className="absolute top-6 right-6 pointer text-gray-400 hover:text-gray-700 focus:outline-none focus:text-emerald-600 transition-colors"
                aria-label="Close booking modal"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-6 sm:px-8 pt-10 pb-2">
                <h3 className="text-2xl sm:text-3xl font-bold">Book a Site Visit</h3>
                {selectedProject && (
                  <p className="text-emerald-600 font-medium mt-1 text-sm sm:text-base">for {selectedProject.title}</p>
                )}
              </div>

              <form onSubmit={submitBooking} className="p-6 sm:p-8 space-y-5 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleBookingChange}
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                  placeholder="Phone (+254...)"
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={bookingForm.date}
                  onChange={handleBookingChange}
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 text-sm sm:text-base"
                  required
                />
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleBookingChange}
                  placeholder="Any special requests?"
                  rows={3}
                  className="w-full border border-gray-200 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:border-emerald-600 resize-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition text-base sm:text-lg"
                >
                  Confirm Booking Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DestinyConnector;