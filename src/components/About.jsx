import React, { useState } from 'react';
import { MapPin, Briefcase, BarChart3 } from 'lucide-react';
import selfPhoto from '../assets/selfphoto.png';
import './About.css';

const rolesData = [
  {
    id: 'ba',
    title: 'Business Analyst',
    tagline: 'Bridging Business & Tech',
    icon: Briefcase,
    colorClass: 'role-ba',
    description: 'Specializing in requirements gathering, BPMN process modeling, and stakeholder management to translate complex needs into clean functional specifications.',
    skills: ['Requirements Elicitation', 'User Story Mapping', 'BPMN Processes', 'Gap Analysis', 'Agile/Scrum']
  },
  {
    id: 'da',
    title: 'Data Analyst',
    tagline: 'Turning Data into Decisions',
    icon: BarChart3,
    colorClass: 'role-da',
    description: 'Transforming raw datasets into actionable insights with SQL and Python, creating dashboards that drive strategic decisions.',
    skills: ['SQL', 'Python (Pandas)', 'Tableau / Power BI', 'EDA', 'ETL Processes']
  }
];

const About = () => {
  return (
    <section id="about" className="section-about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Profile Card */}
          <div className="bento-card profile-card">
            <div className="profile-img-wrapper">
              <img src={selfPhoto} alt="Harun Jeynaro" className="profile-img" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Harun Jeynaro Dewantoro Putra</h3>
              <p className="profile-location">
                <MapPin size={16} />
                <span>Malang, Indonesia</span>
              </p>
              <div className="profile-bio">
                <p>
                  I am an Information Systems student bridging the gap between <strong className="txt-ba">business strategy</strong> and <strong className="txt-da">data analysis</strong>.
                </p>
                <p>
                  My work is driven by a passion for solving complex business problems, using data insights to drive decision-making and optimize operational workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Roles Subgrid */}
          <div className="roles-bento-subgrid">
            {rolesData.map((role) => {
              const IconComponent = role.icon;
              return (
                <div key={role.id} className={`bento-card role-bento-card ${role.colorClass}`}>
                  <div className="role-card-header">
                    <div className="role-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="role-card-title">{role.title}</h4>
                      <p className="role-card-tagline">{role.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="role-card-desc">{role.description}</p>
                  
                  <div className="role-card-skills">
                    {role.skills.map((skill, index) => (
                      <span key={index} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
