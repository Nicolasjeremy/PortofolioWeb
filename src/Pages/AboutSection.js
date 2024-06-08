import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="AboutBox">
        <div className="AboutText">
          <h1>
            <span className="highlight">About</span>
          </h1>
          <p><strong>Full Name</strong></p>
          <p>Nicolas Jeremy Marulitua Simanjuntak</p>
          <p><strong>University</strong></p>
          <p>Institut Teknologi Bandung</p>
          <p><strong>City</strong></p>
          <p>Jakarta Selatan</p>
          <p><strong>Birthdate</strong></p>
          <p>3 June 2004</p>
        </div>
        <div className="about-pic">
          <img src={`${process.env.PUBLIC_URL}/FotoAbout.png`} alt="Nicolas Jeremy" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
