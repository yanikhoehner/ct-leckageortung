import React from 'react';
import './ContactSection.css';
import ProfileImage from './images/portrait_02.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import der Icons

function ContactSection() {
    return (
        <div id="contact" className="page">
            <div className='contact-section'>
              <div className="profile-section">
                  <div className='profile-section-container-desktop'>
                    <img src={ProfileImage} alt="Profilbild" className="profile-picture" />
                    <p className="profile-text">Kontaktieren Sie mich noch heute für eine individuelle Beratung oder einen Termin. Ich freue mich auf ihren Anruf<br></br>Gemeinsam finden wir die beste Lösung für Ihre Situation!</p>
                  </div>
                  <div className='profile-section-container-mobile'>
                    <p className="profile-text">Kontaktieren Sie mich noch heute für eine individuelle Beratung oder einen Termin. Ich freue mich auf ihren Anruf<br></br>Gemeinsam finden wir die beste Lösung für Ihre Situation!</p>
                    <img src={ProfileImage} alt="Profilbild" className="profile-picture" />
                  </div>
                  <p className="profile-text-2">Verlassen Sie sich auf meine Erfahrung und Expertise! </p>
              </div>
              <div className="contact-options">
                  <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <div className='contact-item-container'>
                        <div className='contact-text'>0151 57889069</div>
                      </div>
                  </div>
                  <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <div className='contact-item-container'>
                        <div className='contact-text'>info@ct-leckageortung.de</div>
                      </div>
                  </div>
                  <div className="contact-item">
                      <FaMapMarkerAlt className="contact-icon" />
                      <div className='contact-item-container'>
                        <div className='contact-text'>In der Steubach 14, 57614 Woldert</div>
                      </div>
                  </div>
                  <div className="social-media">
                      <a href='https://api.whatsapp.com/send?phone=+4915157889069'><FaWhatsapp className="social-icon"  /></a>
                      <a href='https://www.instagram.com/ct_leckageortung?igsh=dDhydDBwbTUxYnVj&utm_source=qr'><FaInstagram className="social-icon" /></a>
                      <div className='contact-item-container'>
                        <div className='contact-text'>Schreiben Sie mir auf Whatsapp oder besuchen Sie mich auf Instagram</div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default ContactSection;
