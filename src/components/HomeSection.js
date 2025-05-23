import React from 'react';
import './HomeSection.css';
import portrait1 from './images/portrait_01.jpg';
import portrait2 from './images/portrait_01_2.jpg';
function HomeSection() {
  return (
    <section id="home" className="section home-section">
      <div className='home-wrapper'>
        <div className="section-text">
        
          <p className="section-title-2">Willkommen bei <br></br><h1 className='section-title-2-2'><span className="initials">C</span>hristian <span className="initials2">T</span>reitz </h1></p>
          <div className='home-profile-section-mobile'>
            <img src={portrait2} alt="CEO Christian Treitz" className="profile-pic" />
            <div className="profile-name"><span className="initials">C</span>hristian <span className="initials2">T</span>reitz</div>
            <div className="profile-title">Geschäftsführer</div>
        </div>
          <h2 className="section-title-3">Ihrem Experten für professionelle Leckageortung und Wasserschadensanierung im Westerwald und Umgebung!</h2>
          <p className='home-section-description'>
Sind Sie auf der Suche nach einem Fachmann, der Ihnen dabei hilft, Rohrbrüche schnell und zuverlässig zu lokalisieren? Dann sind Sie bei mir genau richtig!</p>
          <p className="home-ection-description">
            Mit modernster Messtechnik und einem tiefen Verständnis für Wasserschäden biete ich Ihnen effektive Lösungen, Leckagen in Ihrem Zuhause oder Ihrer Geschäftsimmobilie schnellstmöglich zu Orten, um das Ausmaß des Schadens so gering wie möglich zu halten.
          </p>
        </div>
        <div className='home-profile-section-desktop'>
          <img src={portrait1} alt="CEO Christian Treitz" className="profile-pic" />
          <div className="profile-name"><span className="initials">C</span>hristian <span className="initials2">T</span>reitz</div>
          <div className="profile-title">Geschäftsführer</div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
