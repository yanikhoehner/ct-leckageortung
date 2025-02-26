import React from 'react';
import './ServiceSection.css';  // Stelle sicher, dass der Pfad korrekt ist
import messung1 from "./images/Messung/messung1.jpg";
import bautrockner4 from "./images/Bautrockner/bautrockner4.jpg";
import endoskopie1 from "./images/Endoskopie/endoskopie1.jpg";
import reparatur1 from "./images/Reparatur/reparatur1.jpg";
import rohrbruch_allg from "./images/rohrbruch allgemein.jpg";
import rohrbruch from "./images/Rohrbruch/rohrbruch.jpg";
import schwarzlicht2 from "./images/Schwarzlicht/schwarzlicht2.jpg";
import stetoskop from "./images/Stetoskop/stetoskop01.jpg";
import thermografie2 from "./images/Thermografie/thermografie2.jpg";
import wasserschaden_allg from "./images/wasserschaden allgemein.jpg";
import beratung from './images/Beratung.jpg';

function ServiceSection() {
  const services = [
    { title: 'Feuchtigkeitsmessungen mit Oberflächen & Tiefensonden', description: 'Oberflächen sowie Tiefenmessungen in Wand und Boden, um potenzielle Schäden frühzeitig zu erkennen oder Kontrollmessungen durchzuführen sowie Rohrbrüche einzugrenzen.',picture: messung1},
    { title: 'Thermografische Darstellung', description: 'Mithilfe einer Wärmebildkamera erfasse ich Temperaturunterschiede und identifiziere Leckagen schnell und etfizient.',picture: thermografie2 },
    { title: 'Kamerainspektion/Endoskopie an Kanalleitungen', description: 'Eine gründliche Inspektion von Abwasserleitungen, um Verstopfungen oder Beschädigungen sichtbar zu machen.',picture: endoskopie1 },
    { title: 'Elektroakustische Ortung', description: 'Das Horchen auf Armaturen und Wänden ermöglicht selbst kleinste Undichtigkeiten akustisch wahrzunehmen und somit eine zielgenaue Intervention.',picture: stetoskop },
    { title: 'Schwarzlichtverfahren an Abwasserleitungen oder in Leitungsschächten', description: 'Leckage­prüfung mit Kontrast­pulver und einer speziellen Schwarz­licht­lampe. So werden Lecks „sichtbar“ gemacht.' ,picture: schwarzlicht2},
    { title: 'Druckprobe mit Formiergas in Wasser & Heizungsleitungen', description: 'Überprüfung des Drucks über einen bestimmten Zeitraum innerhalb von Leitungsabschnitten, um mögliche Rohrbrüche einzugrenzen. Ggf. Mithilfe von Suchgerät.',picture: rohrbruch  },
    { title: 'Freilegen von Rohrbrüchen & Ausführen von Notreparatur', description: 'Bauteilöffnung und freilegen von Leckagen, wenn möglich provisorisches Abdichten oder ausführen von Kleinreparaturen an Rohrleitungen' ,picture: reparatur1},
    { title: 'Vermietung von Bautrocknern', description: 'Vermietung von hochwertigen Bautrocknern, Lüftern, sowie Luftreinigern zum Schutz vor Viren und Schimmelpilzen. Gerne stehe ich Ihnen auch bei Rückbau und Sanierungsmaßnahmen zur Seite.',picture: bautrockner4 },
    { title: 'Umfassende Beratung', description: 'Profitieren Sie von meinem Fachwissen und erhalten Sie wertvolle Tipps im Umgang mit Wasserschäden. Gerne übernehme ich eine ausführliche Dokumentation Ihres Schadens für die Versicherung.', picture: beratung}
  
  ];

  return (
    <section id="services" className="section service-section">
      <div className='section-title-wrapper'>
        <h2 className="service-title">Meine Leistungen</h2>
      </div>
      <div className="service-blocks-container">
        {services.map(service => (
          <div className="service-block">
            <div className="service-front ">
            <img className='service-picture-front' src={service.picture}></img>
              <div className='service-title-block-front'>
                <h2 className='service-title-text'>{service.title}</h2>
              </div>
            </div>
            <div className="service-back">
              <img className='service-picture-back' src={service.picture}></img>
              <p className='service-description'>{service.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
