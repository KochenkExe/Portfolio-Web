import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  )
}

export default App
