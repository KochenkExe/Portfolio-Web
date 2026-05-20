import React from 'react';
import { GraduationCap, Calendar, Award, Star, BookOpen, Milestone } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  return (
    <section id="timeline" className="section-timeline section">
      <div className="container">
        <h2 className="section-title">Experience &amp; Achievements</h2>
        
        <div className="timeline-bento-grid">
          {/* Education Bento Card */}
          <div className="bento-card timeline-card card-education">
            <div className="timeline-header">
              <GraduationCap size={24} className="timeline-header-icon" />
              <h3>Education</h3>
            </div>
            
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-item-meta">
                    <span className="timeline-date">
                      <Calendar size={14} />
                      <span>Aug 2023 - Present</span>
                    </span>
                    <span className="timeline-badge badge-gpa">
                      <Award size={14} />
                      <span>GPA 3.70</span>
                    </span>
                  </div>
                  
                  <h4 className="timeline-item-title">Brawijaya University</h4>
                  <p className="timeline-item-subtitle">Bachelor of Information Systems</p>
                  <p className="timeline-item-desc">
                    Focusing on bridging the gap between business processes and technical solutions. Developing strong foundations in data analysis, software engineering, and business strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Bento Card */}
          <div className="bento-card timeline-card card-achievements">
            <div className="timeline-header">
              <Milestone size={24} className="timeline-header-icon" />
              <h3>Achievements</h3>
            </div>
            
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-item-meta">
                    <span className="timeline-date">
                      <Calendar size={14} />
                      <span>2025</span>
                    </span>
                    <span className="timeline-badge badge-grade">
                      <Star size={14} fill="currentColor" />
                      <span>Grade A (83.3)</span>
                    </span>
                  </div>
                  
                  <h4 className="timeline-item-title">ISE! Academy: Data Science for Business</h4>
                  <p className="timeline-item-subtitle">Issued by Information Systems Expo</p>
                  <p className="timeline-item-desc">
                    Successfully completed the intensive Data Science for Business curriculum. Demonstrated proficiency by delivering the Melbourne Property Analysis as the final capstone project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
