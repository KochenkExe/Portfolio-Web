import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main id="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
