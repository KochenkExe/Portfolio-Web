import React from 'react';
import selfPhoto from '../assets/selfphoto.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image-container">
              <img src={selfPhoto} alt="Harun Jeynaro" className="profile-image" />
            </div>
          </div>
          
          <div className="about-text">
            <p>
              I am an Information Systems student with a unique perspective that bridges the gap between 
              <span className="highlight-ba"> business requirements</span> and <span className="highlight-fe">technical implementation</span>.
            </p>
            <p>
              My journey started with a curiosity for how businesses operate, which led me to value data-driven decision making. 
              Simultaneously, I fell in love with the creativity of front-end development, realizing that a great idea needs an equally great interface to succeed.
            </p>
            <p>
              Whether it's optimizing a user flow or animating a landing page, I thrive in the intersection of function and form.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card ba-stat">
            <h3>Business & Data Analyst</h3>
            <p>Focus on Value & Strategy</p>
          </div>
          <div className="stat-card fe-stat">
            <h3>Front End Developer</h3>
            <p>Focus on UX & Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
