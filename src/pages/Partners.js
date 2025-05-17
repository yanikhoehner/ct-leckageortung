import React from 'react';
import './Partners.css';
import PartnerLogo from '../components/images/emig-logo.png';

function Partners() {
  return (
    <div className="partners-container">
      <div className="partners-wrapper">
        <div className="partners-header">
          <h1 className="partners-title">Sachverständigenbüro & Gutachten</h1>
          <img src={PartnerLogo} alt="EMIG Logo" className="partners-logo" />
        </div>
        <div className="partners-content">
          <p>
            <b>Ralf Emig</b><br />
            Dipl. Bautechniker<br />
            Lindenallee 27<br />
            57614 Steimel<br /><br />
            Dipl. Bautechniker im Hochbau<br />
            Projektleiter in der Bausanierung<br />
          </p>

          <h2 className="partners-subtitle">Zertifiziert auf folgende Bereiche:</h2>
          <ul className="partners-list">
            <li>Technische Bautrocknung</li>
            <li>Gebäude-Thermographie richtig bewerten</li>
            <li>Schimmelpilze fachgerecht Prüfen, Bewerten & Sanieren</li>
            <li>Fachgerechte Trockenlegung von Mauerwerken</li>
            <li>Abwasserschäden bewerten & fachgerecht sanieren</li>
            <li>Holzschäden in Wohngebäuden frühzeitig erkennen, fachgerecht bewerten & sanieren</li>
            <li>Früherkennung von Gebäudeschäden</li>
            <li>Gebäude Abdichtungstechnik nach DIN 18195 1-6, sowie deren aktuelle Novellierungen</li>
            <li>Innen & Außendämmung fachgerecht informieren & beraten</li>
          </ul>
          <p>
            Ich schreibe Gutachten nach Wasser & Brandschäden, begleite Versicherungsnehmer in der Sanierungsphase und gebe Kunden Unterstützung in der Schaden-Regulierung nach Versicherungsschäden bei Wasser & Brandursachen, damit betroffene Kunden von der Versicherung das erhalten, was Ihnen vertraglich zusteht.
          </p>
          <p>
            Ein weiterer Teil meiner Tätigkeiten besteht in der Begutachtung von Folgeschäden nach sanierten Wasser & Brandschäden durch Vertragspartner der Gebäudeversicherung, sowie der Verhandlung mit Schadenregulierern nach Schadensereignissen durch Wasser oder Feuerschäden an und in Wohngebäuden.
          </p>
          <p>
            Zudem berate ich Kunden beim Kauf einer Wohn-Immobilie, begutachte die Gebäudesubstanz, deren Erhaltungszustand und schätze deren Sanierungsaufwand ein.
          </p>
        </div>
        <div className='partners-visit'>  
          <h4>Besuchen sie mich auch gerne auf meiner Website:</h4>
          <a href="https://emig-bautechnik.de" target="_blank" rel="noopener noreferrer" className="emig-button">
                    emig-bautechnik.de
                </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
