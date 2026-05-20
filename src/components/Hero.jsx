import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Trophy, Search, BarChart3, Lightbulb } from 'lucide-react';
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

        {/* Right Column Stack */}
        <div className="hero-stack-column">
          {/* Card 2: Academic Profile */}
          <div className="bento-card hero-stat-card academic-card">
            <div className="stat-card-row">
              <div className="stat-icon-box">
                <GraduationCap size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-label">Education</span>
                <h3 className="stat-value">Brawijaya University</h3>
                <p className="stat-subtext">Information Systems Major</p>
              </div>
            </div>
            <div className="gpa-badge">
              <Trophy size={16} />
              <span>GPA 3.70</span>
            </div>
          </div>

          {/* Card 3: Philosophy / Pillars */}
          <div className="bento-card hero-stat-card pillars-card">
            <h4 className="pillars-title">Core Approach</h4>
            <div className="pillars-list">
              <div className="pillar-item">
                <span className="pillar-icon pi-ba"><Search size={14} /></span>
                <span className="pillar-text">Elicit Requirements</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon pi-da"><BarChart3 size={14} /></span>
                <span className="pillar-text">Transform &amp; Analyze Data</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon pi-lime"><Lightbulb size={14} /></span>
                <span className="pillar-text">Drive Strategic Decisions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
