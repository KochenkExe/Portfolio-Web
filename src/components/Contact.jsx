import { Mail, Linkedin, Github, Send, FileText } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './Contact.css';

const Contact = () => {
  // Retrieve the public URL dynamically from Supabase storage
  const { data } = supabase.storage.from('for Stuffs').getPublicUrl('ats-resume.pdf');
  const resumeUrl = data?.publicUrl;

  return (
    <section id="contact" className="section-contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-bento-grid">
          {/* Info Card */}
          <div className="bento-card contact-info-card">
            <h3>Let's collaborate</h3>
            <p className="contact-desc">
              I am currently looking for <strong>internship opportunities</strong>. Whether you need a <span className="txt-ba">Business Analyst</span> to refine requirements or a <span className="txt-da">Data Analyst</span> to unlock insights and drive data-driven decisions, i'm ready to bring value to your team.
            </p>
            <div className="contact-status-pill">
              <span className="status-indicator"></span>
              <span>Available for internships</span>
            </div>
          </div>

          {/* Socials Column */}
          <div className="contact-social-grid">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card social-card resume-card"
              >
                <div className="social-icon-wrapper">
                  <FileText size={24} />
                </div>
                <div className="social-meta">
                  <span className="social-label">View</span>
                  <span className="social-value">My Resume</span>
                </div>
                <Send size={16} className="arrow-icon" />
              </a>
            )}

            <a href="mailto:hjeynaro@gmail.com" className="bento-card social-card email-card">
              <div className="social-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="social-meta">
                <span className="social-label">Email Me</span>
                <span className="social-value">hjeynaro@gmail.com</span>
              </div>
              <Send size={16} className="arrow-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/harun-jeynaro"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card social-card linkedin-card"
            >
              <div className="social-icon-wrapper">
                <Linkedin size={24} />
              </div>
              <div className="social-meta">
                <span className="social-label">Connect</span>
                <span className="social-value">linkedin.com/in/harun-jeynaro</span>
              </div>
              <Send size={16} className="arrow-icon" />
            </a>

            <a
              href="https://github.com/KochenkExe"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card social-card github-card"
            >
              <div className="social-icon-wrapper">
                <Github size={24} />
              </div>
              <div className="social-meta">
                <span className="social-label">Follow</span>
                <span className="social-value">github.com/KochenkExe</span>
              </div>
              <Send size={16} className="arrow-icon" />
            </a>
          </div>
        </div>

        <footer className="bento-footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Harun Jeynaro. All rights reserved.</p>
            <p className="built-with">Built with ❤️</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
