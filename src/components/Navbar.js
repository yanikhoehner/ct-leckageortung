import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from './images/logo2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current && 
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleServicesClick = (event) => {
    const targetId = 'services';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname !== '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  }

  const handleReviewsClick = (event) => {
    const targetId = 'reviews';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname !== '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  }

  const handleContactClick = (event) => {
    const targetId = 'contact';
    const targetElement = document.getElementById(targetId);
    if (window.location.pathname !== '/') {
      window.location.pathname = '/'
    } else {
      event.preventDefault();
    }
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  }

  const scrollToHome = () => {
    if (window.location.pathname !== '/') {
      window.location.pathname = '/'
    }
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <nav className="nav">
      <div className='navbar'>
        <div className="navbar-logo" onClick={scrollToHome}>
          <img src={Logo} href="#home" alt="Logo" className="navbar-logo-img"/>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} ref={hamburgerRef}>
          <div className="hamburger-icon">☰</div>
        </div>
        <div className='navbar-div'>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
            <li className="navbar-item"><a alt='services' onClick={handleServicesClick} className="navbar-link">Leistungen</a></li>
            <li className="navbar-item"><a alt='contact' onClick={handleContactClick} className="navbar-link">Kontakt</a></li>
            <li className="navbar-item"><a alt='reviews' onClick={handleReviewsClick} className="navbar-link">Bewertungen</a></li>
            <li className="navbar-item">
              <Link to="/uebermich" className="navbar-link" onClick={closeMenu}>
                <a className='navbar-link'>Über mich</a>
              </Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/partners" className="navbar-link" onClick={closeMenu}>
                <a className='navbar-link'>Partner</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;