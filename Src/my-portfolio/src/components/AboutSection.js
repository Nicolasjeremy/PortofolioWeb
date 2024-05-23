import React from 'react';
import '../App.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About</h2>
        <p><strong>Full Name</strong><br/>Nicolas Jeremy Marulitu Simanjuntak</p>
        <p><strong>University</strong><br/>Institut Teknologi Bandung</p>
        <p><strong>City</strong><br/>Jakarta Selatan</p>
        <p><strong>Birthdate</strong><br/>3 June 2004</p>
        <img src="../../FotoAbout.png" alt="Nicolas Jeremy" className="about-pic"/>
      </div>
    </section>
  );
};

export default AboutSection;
