import React from 'react';
import Header from './Pages/Header';
import MainSection from './Pages/MainSection';
import AboutSection from './Pages/AboutSection';
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
