import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to add background blur/border effect
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 120)) {
          currentSection = section.id;
        }
      });

      // Special case: bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="logo" aria-label="Harun Jeynaro logo">
          <span className="logo-first">Harun</span>
          <span className="logo-second">Jeynaro</span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              {activeSection === link.id && <span className="active-dot"></span>}
            </a>
          ))}
        </nav>

        <button 
          className="menu-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
