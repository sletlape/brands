import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
