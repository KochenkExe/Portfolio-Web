import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm an Information Systems Student</p>
          <h1 className="title">
            Bridging the gap between <br />
            <span className="role-ba">Business Strategy</span> &{' '}
            <span className="role-fe">Technical Execution</span>
          </h1>
          <p className="subtitle">
            I create seamless digital experiences by combining <strong>Business Analysis</strong> with <strong>Front End Engineering</strong> expertise.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Abstract visual representing duality */}
          <div className="duality-orb">
            <div className="orb orb-ba"></div>
            <div className="orb orb-fe"></div>
            <div className="glass-card">
              <div className="code-snippet">
                <code>
                  <span className="keyword">const</span> <span className="var">profile</span> = {'{'} <br/>
                  &nbsp;&nbsp;<span className="key">name</span>: <span className="string">"Harun Jeynaro Dewantoro Putra"</span>,<br/>
                  &nbsp;&nbsp;<span className="key">role</span>: <span className="string">"Data Analyst & FE Engineer"</span>,<br/>
                  &nbsp;&nbsp;<span className="key">skills</span>: [<span className="string">"Python"</span>, <span className="string">"Java"</span>, <span className="string">"React"</span>],<br/>
                  &nbsp;&nbsp;<span className="key">goal</span>: <span className="string">"Driving Digital Transformation"</span><br/>
                  {'}'};
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
