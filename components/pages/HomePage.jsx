import React from 'react';

import HeroSlider from '../HeroSlider';
import HeroInfo from '../HeroInfo';
import WhyTrustUs from '../WhyTrustUs';
import FeaturedListings from '../FeaturedListings';
import ProjectsMap from '../ProjectsMap';
import Testimonials from '../Testimonials';
import VideoSection from '../VideoSection';
import ReadyToOwn from '../ReadyToOwn';

export default function HomePage({ setShowBookingModal, setSelectedProject, setCurrentPage }) {
             
  const openBooking = (project) => {
    setSelectedProject(project);
    setShowBookingModal(true);
  };

  return (
    <>
      <HeroSlider onBookVisit={() => setShowBookingModal(true)} />
      <HeroInfo />
      <WhyTrustUs />
      
     <FeaturedListings
           onBookProject={openBooking}
           setCurrentPage={setCurrentPage}   // ← pass this
     />
      <ProjectsMap />
      <Testimonials />
      <VideoSection />
      <ReadyToOwn onContactClick={() => setShowBookingModal(true)} />
    </>
  );
}