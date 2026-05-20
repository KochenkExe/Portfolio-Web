import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Get in Touch</h3>
            <p>
              I'm currently looking for internship opportunities. 
              Whether you need a <span className="highlight-ba">Business Analyst</span> to decode requirements or a <span className="highlight-fe">Front End Engineer</span> to build pixel-perfect UIs, I'm ready to contribute.
            </p>
            
            <div className="social-links">
              <div className="social-row">
                <a href="mailto:hjeynaro@gmail.com" className="social-item email-item">
                  <Mail size={24} /> <span>hjeynaro@gmail.com</span>
                </a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/harun-jeynaro" target="_blank" rel="noopener noreferrer" className="social-item icon-only" aria-label="LinkedIn">
                  <Linkedin size={32} />
                </a>
                <a href="https://github.com/KochenkExe" target="_blank" rel="noopener noreferrer" className="social-item icon-only" aria-label="GitHub">
                  <Github size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()}. Built with ♥️</p>
      </footer>
    </section>
  );
};

export default Contact;
