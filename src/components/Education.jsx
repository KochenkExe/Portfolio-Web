import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section-education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="edu-icon">
            <GraduationCap size={40} />
          </div>
          <div className="edu-content">
            <h3>Brawijaya University</h3>
            <p className="edu-degree">Study in <strong>Information Systems</strong></p>
            <div className="edu-details">
              <span className="edu-date">
                <Calendar size={16} /> August 2023 - Present
              </span>
              <span className="edu-gpa">
                <Award size={16} /> GPA: 3.70
              </span>
            </div>
            <p className="edu-description">
               Focusing on bridging the gap between business processes and technical solutions. 
               Developing strong foundations in data analysis, software engineering, and business strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
