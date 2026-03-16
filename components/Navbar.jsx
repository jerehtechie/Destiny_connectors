import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home',        page: 'home'     },
  { label: 'About Us',    page: 'about'    },
  { label: 'Diaspora',    page: 'diaspora' },
  { label: 'Our Listings',page: 'listings' },
  { label: 'Blogs',        page: 'blog'     },
];

export default function Navbar({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
  setShowContactModal,
  setShowBookingModal,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/company_logo.png"
            alt="Destiny Connector Logo"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
          />
          {/* Optional: text logo if image is small */}
          {/* <span className="hidden sm:block text-xl font-bold text-blue-900 tracking-tight">
            Destiny Connector
          </span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-base font-medium">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                setCurrentPage(link.page);
                setIsMenuOpen(false);
              }}
              className={`
                relative transition-all duration-300 cursor-pointer
                ${currentPage === link.page
                  ? 'text-blue-700 font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons + Mobile toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Contact Us - desktop only */}
          <button
            onClick={() => setShowContactModal(true)}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-medium border-2 border-blue-700 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <Phone size={16} />
            Contact Us
          </button>

          {/* Book Visit - primary CTA */}
          <button
            onClick={() => setShowBookingModal(true)}
            className="
              flex items-center gap-2 px-6 sm:px-7 py-3 text-sm sm:text-base
              font-semibold bg-red-600 text-white rounded-xl
              hover:bg-red-700 active:bg-red-800
              shadow-md hover:shadow-lg transition-all duration-200
              cursor-pointer

            "
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            Book Visit
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-700 transition-colors"
            aria-label="Toggle menu"
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t overflow-hidden shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    setCurrentPage(link.page);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    text-left transition-colors
                    ${currentPage === link.page
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-800 hover:text-blue-700'
                    }
                  `}
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile-only CTAs */}
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setShowContactModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                >
                  <Phone size={18} />
                  Contact Us
                </button>

                <button
                  onClick={() => {
                    setShowBookingModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
                >
                  <Calendar size={18} />
                  Book a Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}