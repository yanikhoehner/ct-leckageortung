import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import der Social Media Icons
import Impressum from '../pages/Impressum';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function Footer() {
  const [views, setViews] = useState(0);
  
  useEffect(() => {
    // Function to fetch the total page views from the server
    const fetchTotalPageViews = async () => {
      try {
        // Try to get the total views from localStorage first as a fallback
        const storedViews = localStorage.getItem("totalPageViews") || "0";
        setViews(parseInt(storedViews, 10));
        
        // Create a unique identifier for this session if it doesn't exist
        const sessionId = sessionStorage.getItem('sessionId') || 
                          Date.now().toString(36) + Math.random().toString(36).substring(2);
        
        if (!sessionStorage.getItem('sessionId')) {
          sessionStorage.setItem('sessionId', sessionId);
          
          // Increment the global counter
          const currentCount = parseInt(localStorage.getItem("totalPageViews") || "0", 10);
          const newCount = currentCount + 1;
          
          // Store the updated count in localStorage
          localStorage.setItem("totalPageViews", newCount);
          
          // Update the state with the new count
          setViews(newCount);
          
          // Here you would typically also send this information to a server
          // to store the global count for all users
          // For example:
          // await fetch('/api/increment-page-views', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ sessionId })
          // });
        }
      } catch (error) {
        console.error("Error updating page views:", error);
      }
    };
    
    fetchTotalPageViews();
    
    // Set up a periodic check to update the view count from the server
    // This would be used in a real implementation with a backend
    // const interval = setInterval(fetchTotalPageViews, 60000); // every minute
    
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h2 className="footer-title"><span className="footer-initials">C</span>hristian <span className="footer-initials">T</span>reitz</h2><br />
          <div className='footer-title-text1'>
            Beratung | Leckageortung | Reparatur<br />
            In der Steubach 14, 57614 Woldert<br />
         
         
            <a>0151 57889069</a><br />
            <a className="footer-link" href="mailto:info@ct-leckageortung.de">info@ct-leckageortung.de</a><br />
            <a className="footer-link" href="http://www.ct-leckageortung.de" target="_blank" rel="noopener noreferrer">www.ct-leckageortung.de</a>
          </div>
        </div>
        <div className="footer-section">
          <table>
            <tbody>
              <tr><td>Montag</td><td>8:00–17:00</td></tr>
              <tr><td>Dienstag</td><td>8:00–17:00</td></tr>
              <tr><td>Mittwoch</td><td>8:00–17:00</td></tr>
              <tr><td>Donnerstag</td><td>8:00–17:00</td></tr>
              <tr><td>Freitag</td><td>8:00–14:30</td></tr>
            </tbody>
          </table>
          <div>
            <h4 className='footer-counter'>Gesamte Seitenaufrufe:</h4>
            <h4>{views}</h4>
          </div>
        </div>
        <div className="footer-section">
          <div className='footer-social-text'>Empfehlen Sie mich weiter!</div>
          <div className="social-media-container">
            <a href="whatsapp://send?text=http://www.ct-leckageortung.de" className="social-media-icon"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.ct-leckageortung.de" className="social-media-icon"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-media-icon"><FaInstagram /></a>
          </div>
            <Link to="/impressum" className='footer-link'>Impressum</Link> <br />
            <Link to="/datenschutz" className='footer-link'>Datenschutz</Link> <br />         
        </div>
      </footer>
      <div className="footer-extra">
        <div className='footer-extra2'>
          2025 CT Leckageortung © 
        </div>
        
      </div>
      
    </>
  );
}

export default Footer;