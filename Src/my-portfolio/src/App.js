import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <MainSection />
      <AboutSection />
    </div>
  );
}

export default App;
