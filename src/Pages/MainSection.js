import React from "react";
import "../App.css";

const MainSection = () => {
  return (
    <section className="main-section" id="home">
      <div className="intro">
        <img
          src="../../FotoMain.png"
          alt="Nicolas Jeremy"
          className="profile-pic"
        />
        <div className="intro-text">
          <h1>
            Hello, I'm <span className="highlight">Nicolas Jeremy</span>
          </h1>
          <p>I'm a Junior Developer and Project manager.</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
