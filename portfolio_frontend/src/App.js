import React from 'react';
import './App.css';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Nav from './components/Nav';
import Header from './components/Header';
import LogoBar from './components/LogoBar';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// PUBLIC_INTERFACE
function App() {
  /** One page portfolio composed of modular sections */
  useSmoothScroll();

  return (
    <div className="screen">
      <Nav />
      <Header />
      <LogoBar />
      <Skills />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
