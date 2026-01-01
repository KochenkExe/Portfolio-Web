import React, { useState } from 'react';
import { MapPin, ChevronDown, Briefcase, BarChart3, Code, Brain } from 'lucide-react';
import selfPhoto from '../assets/selfphoto.png';
import './About.css';

const rolesData = [
  {
    id: 'ba',
    title: 'Business Analyst',
    tagline: 'Bridging Business & Technology',
    icon: Briefcase,
    colorClass: 'role-ba',
    description: `As a Business Analyst, I act as the crucial link between stakeholders and development teams. I specialize in gathering and documenting complex business requirements, translating them into clear user stories and functional specifications. My approach involves deep-dive sessions with clients to understand their pain points, mapping existing processes, and identifying opportunities for optimization. I believe that a successful project starts with understanding the "why" before the "how", ensuring that every feature delivers tangible business value.`,
    skills: ['Requirements Elicitation', 'User Story Mapping', 'Process Modeling (BPMN)', 'Stakeholder Management', 'Gap Analysis', 'Agile/Scrum']
  },
  {
    id: 'da',
    title: 'Data Analyst',
    tagline: 'Turning Data into Decisions',
    icon: BarChart3,
    colorClass: 'role-da',
    description: `I am passionate about uncovering the stories hidden within data. My work as a Data Analyst involves collecting, cleaning, and transforming raw datasets into meaningful insights that drive strategic decisions. I build interactive dashboards and visualizations that make complex information accessible to everyone. From identifying key performance indicators to performing exploratory data analysis and A/B testing, I help organizations move from gut-feeling decisions to a culture of data-driven strategy.`,
    skills: ['SQL', 'Python (Pandas, NumPy)', 'Data Visualization (Tableau, Power BI)', 'Statistical Analysis', 'ETL Processes', 'Excel/Sheets']
  },
  {
    id: 'fe',
    title: 'Front-End Engineer',
    tagline: 'Crafting Seamless User Experiences',
    icon: Code,
    colorClass: 'role-fe',
    description: `The front-end is where ideas come to life. I specialize in building responsive, performant, and visually stunning web interfaces using modern JavaScript frameworks like React. I care deeply about the user experience, ensuring that every interaction feels intuitive and every animation enhances rather than distracts. My focus extends beyond just making things look good; I prioritize accessibility, semantic HTML, and performance optimization to ensure that applications are fast, inclusive, and maintainable.`,
    skills: ['React / Next.js', 'JavaScript / TypeScript', 'CSS / SASS / Tailwind', 'Responsive Design', 'Web Accessibility (a11y)', 'Performance Optimization']
  },
  {
    id: 'ml',
    title: 'ML Engineer',
    tagline: 'Building Intelligent Systems',
    icon: Brain,
    colorClass: 'role-ml',
    description: `I am fascinated by the potential of machine learning to solve real-world problems. As an ML Engineer, I work on the full lifecycle of a model—from data preprocessing and feature engineering to training, evaluation, and deployment. I have experience building models for classification, regression, and natural language processing tasks. My goal is to bridge the gap between research and production, creating ML solutions that are not just accurate on paper but robust and scalable in real-world applications.`,
    skills: ['Python (Scikit-learn, TensorFlow, PyTorch)', 'Feature Engineering', 'Model Training & Evaluation', 'NLP Fundamentals', 'Data Pipelines', 'MLOps Basics']
  }
];

const About = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const handleToggle = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section id="about" className="section-about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image-container">
              <img src={selfPhoto} alt="Harun Jeynaro" className="profile-image" />
            </div>
            <div className="profile-details">
              <h3 className="profile-name">Harun Jeynaro Dewantoro Putra</h3>
              <p className="profile-location">
                <MapPin size={16} /> Malang, Indonesia
              </p>
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

        <h3 className="roles-heading">What I Can Do</h3>
        <div className="roles-grid">
          {rolesData.map((role) => {
            const IconComponent = role.icon;
            const isExpanded = expandedRole === role.id;
            return (
              <div 
                key={role.id} 
                className={`role-card ${role.colorClass} ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handleToggle(role.id)}
              >
                <div className="role-header">
                  <div className="role-icon-title">
                    <IconComponent size={24} className="role-icon" />
                    <div>
                      <h4 className="role-title">{role.title}</h4>
                      <p className="role-tagline">{role.tagline}</p>
                    </div>
                  </div>
                  <ChevronDown size={20} className={`role-chevron ${isExpanded ? 'rotated' : ''}`} />
                </div>
                <div className="role-body">
                  <div className="role-body-inner">
                    <p className="role-description">{role.description}</p>
                    <div className="role-skills">
                      {role.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
