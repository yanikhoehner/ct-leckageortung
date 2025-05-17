import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection.js';
import ServiceSection from '../components/ServiceSection';
import CertificationSection from '../components/CertificationSection';
import ProjectSection from '../components/ProjectSection';
import ReviewSection from '../components/ReviewSection';
import ContactSection from '../components/ContactSection';
import PartnerSection from '../components/PartnerSection';
import "@fontsource/montserrat";

function Home() {
  return (
    <div>
      <HomeSection />
      <ServiceSection />
      <ContactSection />
      <ReviewSection />
      <PartnerSection />
    </div>
  );
}

export default Home;