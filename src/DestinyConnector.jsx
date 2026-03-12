import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from  '/components/Navbar';
import Footer from  '/components/Footer';
import WhatsAppFab from  '/components/WhatsAppFab';
import ContactModal from  '/components/modals/ContactModal';
import BookingModal from  '/components/modals/BookingModal';

import HomePage from '/components/pages/HomePage';
import AboutPage from '/components/pages/AboutPage';
import DiasporaPage from '/components/pages/DiasporaPage';
import ListingsPage from '/components/pages/ListingsPage';
import BlogsPage from '/components/pages/BlogsPage';


export default function DestinyConnector() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowContactModal={setShowContactModal}
        setShowBookingModal={setShowBookingModal}
      />

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
  <motion.div
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <HomePage
      setShowBookingModal={setShowBookingModal}
      setSelectedProject={setSelectedProject}
      setCurrentPage={setCurrentPage}          // ← ADD THIS LINE
    />
  </motion.div>
         )}
        {currentPage === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <AboutPage
             setShowContactModal={setShowContactModal}
             setCurrentPage={setCurrentPage}           // if you're also using this one
           />       
          </motion.div>
        )}

        {currentPage === 'diaspora' && (
          <motion.div
            key="diaspora"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <DiasporaPage setShowContactModal={setShowContactModal} />
          </motion.div>
        )}
        {currentPage === 'listings' && (
         <motion.div
           key="listings"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
         >
          <ListingsPage
           setShowBookingModal={setShowBookingModal}
           setSelectedProject={setSelectedProject}
          />
         </motion.div>
       )}   

       {currentPage === 'blog' && (
  <motion.div
    key="blog"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <BlogsPage />
  </motion.div>
)}    
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />

      <WhatsAppFab />

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => {
          setShowBookingModal(false);
          setSelectedProject(null);
        }}
        selectedProject={selectedProject}
      />
    </div>
  );
}