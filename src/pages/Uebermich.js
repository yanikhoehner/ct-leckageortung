import React from 'react';
import './Uebermich.css'; 
import ProfileImage from '../components/images/portrait_02.jpg';

function Uebermich() {
  return (
    <div className='impressum-container'>
      <div className="uebermich-wrapper">
          
          <div className='uebermich-picture-wrapper-desktop'>
            <div>
              <h1 className='uebermich-title'>Über mich</h1>
              <p>
              Herzlich Willkommen! Mein Name ist Christian Treitz und ich habe mich auf den professionellen Umgang mit Wasserschäden spezialisiert. Bereits während meiner Ausbildung zum Anlagenmechaniker für Sanitär, Heizungs und Klimatechnik konnte ich wertvolle Erfahrungen in den Bereichen „Rohrbrüche und Reparatur“ aber auch zum Thema „Technische Trocknung“ sammeln.
              <br></br><br></br>
              Wasserschäden können schnell zu großen Problemen führen, und es ist mein Ziel, Ihnen in dieser schwierigen Situation kompetent zur Seite zu stehen.
              </p>
            </div>
            <img src={ProfileImage} alt="Profilbild" className="uebermich-profile-picture" />
          </div>
          <div className='uebermich-picture-wrapper-mobile'>
            <h1 className='uebermich-title'>Über mich</h1>
            <p>
            Herzlich Willkommen! Mein Name ist Christian Treitz und ich habe mich auf den professionellen Umgang mit Wasserschäden spezialisiert. Bereits während meiner Ausbildung zum Anlagenmechaniker für Sanitär, Heizungs und Klimatechnik konnte ich wertvolle Erfahrungen in den Bereichen „Rohrbrüche und Reparatur“ aber auch zum Thema „Technische Trocknung“ sammeln.
            <div className='profile-picture-wrapper'>
              <img src={ProfileImage} alt="Profilbild" className="uebermich-profile-picture" />
            </div>
            Wasserschäden können schnell zu großen Problemen führen, und es ist mein Ziel, Ihnen in dieser schwierigen Situation kompetent zur Seite zu stehen.
            </p>
          </div>
          <p>
          Meine Leistungen umfassen die sorgfältige Ortung von Rohrbrüchen, die Durchführung von Bauteilöffnungen sowie Reparaturen. Ich biete umfassende Sanierungs- und Trocknungsmaßnahmen an, um Ihr Zuhause schnellstmöglich wieder in einen einwandfreien Zustand zu versetzen. Dabei lege ich großen Wert auf eine fachkundige Beratung, die auf Ihre individuellen Bedürfnisse zugeschnitten ist.
            <br></br><br></br>
          Ein besonderer Fokus meiner Arbeit liegt auf der Leckageortung. Hierbei setze ich modernste Techniken wie Thermografie, Schwarzlichtverfahren, Endoskopie/Kamerainspektion, Feuchtigkeitsmessung und elektroakustische Ortung ein. Diese innovativen Methoden ermöglichen es mir, versteckte Wasserschäden präzise zu lokalisieren und gezielt zu beheben.
          <br></br><br></br>
          Zusätzlich biete ich Ihnen die Möglichkeit, Bautrockner zu mieten, um den Trocknungsprozess Ihres Objekts zu optimieren. Egal, ob es sich um eine kleine Leckage oder einen größeren Rohrbruch handelt – ich stehe Ihnen mit meinem Fachwissen zur Verfügung, um die Ursachen des Wasserschadens zu beseitigen und eine nachhaltige Lösung zu finden.
          <br></br><br></br>
          Wenn Sie Unterstützung bei der Rohrbruchsuche oder der Leckortung benötigen, zögern Sie nicht, mich zu kontaktieren. Lassen Sie uns gemeinsam dafür sorgen, dass Ihre Räume trocken und sicher bleiben.
          </p>
      </div>
      

    </div>
  );
}

export default Uebermich;
