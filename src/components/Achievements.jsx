import React from 'react';
import { Award, Star } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="section-achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-list">
          <div className="achievement-card">
            <div className="achievement-icon">
              <Award size={48} className="icon-award" />
            </div>
            <div className="achievement-content">
              <h3>ISE! Academy: Data Science for Business 2025</h3>
              <div className="score-badge">
                 <Star size={16} fill="currentColor" /> Grade A (83.3)
              </div>
              <p>
                Successfully completed the intensive Data Science for Business curriculum. 
                Demonstrated proficiency by delivering the Melbourne Property Analysis as the final capstone project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
