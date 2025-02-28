import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // If no choice has been made, show the banner
    if (!cookieConsent) {
      // Small delay to ensure the banner appears after page load
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    
    // Here you could initialize analytics or other cookie-dependent services
    // For example: initializeAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
    
    // Here you could ensure no tracking cookies are set
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-wrapper" role="alert" aria-live="polite">
      <h2 className="cookie-consent-title">Cookie-Hinweis</h2>
      <p className="cookie-consent-text">
        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
        Diese helfen uns, die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen. 
        Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
        <Link to="/datenschutz" className="cookie-consent-link">Datenschutzerklärung</Link> zu.
      </p>
      <div className="cookie-consent-buttons">
        <button 
          onClick={acceptCookies} 
          className="cookie-button accept-button"
          aria-label="Cookies akzeptieren"
        >
          Akzeptieren
        </button>
        <button 
          onClick={declineCookies} 
          className="cookie-button decline-button"
          aria-label="Cookies ablehnen"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;