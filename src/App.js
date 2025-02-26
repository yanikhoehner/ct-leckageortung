import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection.js';
import ServiceSection from './components/ServiceSection';
import CertificationSection from './components/CertificationSection';
import ProjectSection from './components/ProjectSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import "@fontsource/montserrat";
import Impressum from './pages/Impressum.js';
import Datenschutz from './pages/Privacy.js';
import Home from './pages/Home.js';
import Uebermich from './pages/Uebermich.js';
import ScrollToTop from './components/ScrollToTop.js';
//test
function App() {
  return (
    <Router>
      <div className='bg-container'></div>
      <div className="app">
      
        <Navbar />
        <main className="main-content">
          
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uebermich" element={<Uebermich />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </div>
        
     </Router>
  );
}

export default App;
