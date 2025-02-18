import React, { useState } from 'react';
import './Navbar.css';
import Logo from './images/logo2.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleServicesClick = (event) => {
    const targetId = 'services';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname != '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleReviewsClick = (event) => {
    const targetId = 'reviews';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname != '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleContactClick = (event) => {
    const targetId = 'contact';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname != '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const scrollToHome = () => {
    if (window.location.pathname != '/') {
      window.location.pathname = '/'
    }
    window.scrollTo(0, 0)
  };

  return (
    <nav className="nav">
      <div className='navbar'>
        <div className="navbar-logo" onClick={scrollToHome}>
          <img src={Logo} href="#home" alt="Logo" className="navbar-logo-img"/>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        <div className='navbar-div'>
          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a alt='services' onClick={handleServicesClick} className="navbar-link">Leistungen</a></li>
            <li className="navbar-item"><a alt='contact' onClick={handleContactClick} className="navbar-link">Kontakt</a></li>
            <li className="navbar-item"><a alt='reviews' onClick={handleReviewsClick} className="navbar-link">Bewertungen</a></li>
            <li className="navbar-item"><Link to="/uebermich" className="navbar-link" ><a alt='reviews' className="navbar-link">Über mich</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
