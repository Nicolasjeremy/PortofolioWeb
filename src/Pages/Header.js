import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">NJ</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;
