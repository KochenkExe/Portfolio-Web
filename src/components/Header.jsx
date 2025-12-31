import React, { useState, useEffect } from 'react';
import { Menu, X, Code, BarChart } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Trigger when scroll passes 1/3 of the section or reaches near top
        // The -150 offset accounts for the fixed header
        if (window.scrollY >= (sectionTop - 150)) {
          currentSection = section.id;
        }
      });

      // Special case: if at bottom of page, activate Contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
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
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Harun <span className="highlight-ba"> Jeynaro</span></span>
        </div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
