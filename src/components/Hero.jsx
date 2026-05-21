import React from 'react';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section-hero container">
      <div className="hero-bento-grid">
        {/* Main Introduction Card */}
        <div className="bento-card hero-intro-card">
          <div className="badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Information Systems Student</span>
          </div>
          
          <h1 className="hero-title">
            Bridging <span className="highlight-ba">Business Strategy</span> &amp; <br />
            <span className="highlight-fe">Data Analytics</span>
          </h1>
          
          <p className="hero-subtitle">
            I solve complex business challenges by merging business analysis, requirements engineering, and data-driven insights.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Code Terminal Card */}
        <div className="bento-card hero-visual-card">
          <div className="card-topbar">
            <div className="dots-group">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-title">
              <Terminal size={14} />
              <span>profile.py</span>
            </div>
          </div>
          
          <div className="code-content">
            <pre>
              <code>
                <span className="variable">analyst</span> = &#123;{'\n'}
                {'  '}<span className="string">"name"</span>: <span className="string">"Harun Jeynaro"</span>,{'\n'}
                {'  '}<span className="string">"education"</span>: <span className="string">"Brawijaya University"</span>,{'\n'}
                {'  '}<span className="string">"major"</span>: <span className="string">"Information Systems"</span>,{'\n'}
                {'  '}<span className="string">"focus"</span>: [{'\n'}
                {'    '}<span className="string">"Business Analysis"</span>,{'\n'}
                {'    '}<span className="string">"Data Analysis"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="string">"passion"</span>: <span className="string">"Digital Transformation"</span>,{'\n'}
                {'  '}<span className="string">"gpa"</span>: <span className="number">3.70</span>{'\n'}
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
