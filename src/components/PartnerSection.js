import React from 'react';
import './PartnerSection.css';
import { Link } from 'react-router-dom';
import PartnerLogo from './images/emig-logo.png';
function PartnerSection() {
    return (
        <section id="partner" className="partner-section">
            <h1 className='partner-title-1'>Partner:</h1>
            <h2 className="partner-title-2">Sachverständigenbüro & Gutachten</h2>
            <div className="partner-content">
                <div className="partner-info">
                    <div className="partner-address">
                        <b>Ralf Emig</b><br />
                        Dipl. Bautechniker<br />
                        Lindenallee 27<br />
                        57614 Steimel
                    </div>
                </div>
                <div className="partner-link-container">
                    <p className="partner-link-text">Für mehr Infos klicken Sie hier:</p>
                    <Link to="/partners">
                        <img src={PartnerLogo} alt="Partner Logo" className="partner-logo" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;