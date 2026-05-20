import React from 'react';
import { Terminal, LineChart, Layout, Database, BarChart, GitBranch, Globe, ClipboardList, PenTool } from 'lucide-react';
import tableauIcon from '../assets/tableau.svg';
import powerBiIcon from '../assets/powerbi.svg';
import excelIcon from '../assets/excel.svg';
import javaIcon from '../assets/java.svg';
import seabornIcon from '../assets/seaborn.svg';  
import matplotlibIcon from '../assets/matplotlib.svg';
import './Skills.css';

const Skills = () => {
  const getIconUrl = (slug) => `https://cdn.simpleicons.org/${slug}/000000`;

  const skills = [
    {
      id: 'languages',
      role: 'Programming Languages',
      icon: <Terminal size={24} />,
      color: '#f472b6',
      items: [
        { name: 'Python', image: getIconUrl('python') },
        { name: 'Java', image: javaIcon },
        { name: 'JavaScript', image: getIconUrl('javascript') },
        { name: 'SQL', icon: <Database size={16} /> },
        { name: 'PHP', image: getIconUrl('php') },
        { name: 'Kotlin', image: getIconUrl('kotlin') },
      ]
    },
    {
      id: 'analytics',
      role: 'Analytics & Business Intelligence',
      icon: <LineChart size={24} />,
      color: 'var(--color-ba)',
      items: [
        { name: 'Data Analysis', icon: <LineChart size={16} /> },
        { name: 'Business Intelligence', icon: <BarChart size={16} /> },
        { name: 'Flowchart', icon: <GitBranch size={16} /> },
        { name: 'Requirement Gathering', icon: <ClipboardList size={16} /> },
        { name: 'Project Management', icon: <Globe size={16} /> },
        { name: 'User Story', icon: <PenTool size={16} /> },
        { name: 'Excel', image: excelIcon },
        { name: 'Tableau', image: tableauIcon },
        { name: 'Power BI', image: powerBiIcon },
        { name: 'Numpy', image: getIconUrl('numpy') },
        { name: 'Pandas', image: getIconUrl('pandas') },
        { name: 'Matplotlib', image: matplotlibIcon },
        { name: 'Seaborn', image: seabornIcon }, 
      ]
    },
    {
      id: 'webdev',
      role: 'Web Development',
      icon: <Layout size={24} />,
      color: 'var(--color-fe)',
      items: [
        { name: 'HTML', image: getIconUrl('html5') },
        { name: 'CSS', image: getIconUrl('css3') },
        { name: 'React.js', image: getIconUrl('react') },
        { name: 'Bootstrap', image: getIconUrl('bootstrap') },
        { name: 'Tailwind CSS', image: getIconUrl('tailwindcss') },
        { name: 'Git', image: getIconUrl('git') },
        { name: 'Vite', image: getIconUrl('vite') },
        { name: 'Supabase', image: getIconUrl('supabase') },
        { name: 'phpMyAdmin', image: getIconUrl('phpmyadmin') },
        { name: 'MySQL', image: getIconUrl('mysql') },
        { name: 'PostgreSQL', image: getIconUrl('postgresql') },
        { name: 'Figma', image: getIconUrl('figma') },
      ]
    }
  ];

  return (
    <section id="skills" className="section-skills section">
      <div className="container">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        
        <div className="skills-bento-grid">
          {skills.map((category) => (
            <div key={category.id} className="bento-card skill-bento-card" style={{ '--card-accent': category.color }}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {category.icon}
                </div>
                <h3 className="skill-cat-title">{category.role}</h3>
              </div>

              <div className="skill-items-container">
                {category.items.map((item, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-item-icon">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        item.icon
                      )}
                    </span>
                    <span className="skill-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
