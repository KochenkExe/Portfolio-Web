import React from 'react';
import { Database, Code2, LineChart, Layout, Terminal, BarChart, Server, Globe, Cpu, GitBranch, PenTool, ClipboardList } from 'lucide-react';
import tableauIcon from '../assets/tableau.svg';
import powerBiIcon from '../assets/powerbi.svg';
import excelIcon from '../assets/excel.svg';
import javaIcon from '../assets/java.svg';
import seabornIcon from '../assets/seaborn.svg';  
import matplotlibIcon from '../assets/matplotlib.svg';
import './Skills.css';

const Skills = () => {
  // Helper to get Simple Icons URL
  // Using a slightly off-white color (dddddd) for better visibility on dark backgrounds
  const getIconUrl = (slug) => `https://cdn.simpleicons.org/${slug}/dddddd`;

  const skills = [
    {
      role: 'Programming Languages',
      icon: <Terminal size={32} />,
      color: '#f472b6',
      items: [
        { name: 'Python', image: getIconUrl('python') },
        { name: 'Java', image: javaIcon },
        { name: 'JavaScript', image: getIconUrl('javascript') },
        { name: 'SQL', icon: <Database size={18} /> },
        { name: 'PHP', image: getIconUrl('php') },
        { name: 'Kotlin', image: getIconUrl('kotlin') },
      ]
    },
    {
      role: 'Analytics & Business Intelligence',
      icon: <LineChart size={32} />,
      color: 'var(--color-ba)',
      items: [
        { name: 'Data Analysis', icon: <LineChart size={18} /> },
        { name: 'Business Intelligence', icon: <BarChart size={18} /> },
        { name: 'Flowchart', icon: <GitBranch size={18} /> },
        { name: 'Requirement Gathering', icon: <ClipboardList size={18} /> },
        { name: 'Project Management', icon: <Globe size={18} /> },
        { name: 'User Story', icon: <PenTool size={18} /> },
        { name: 'Excel', image: excelIcon },
        { name: 'Tableau', image: tableauIcon },
        { name: 'Power BI', image: powerBiIcon },
        { name: 'Numpy', image: getIconUrl('numpy') },
        { name: 'Pandas', image: getIconUrl('pandas') },
        { name: 'Matplotlib', image: matplotlibIcon },
        { name: 'Seaborn', image: seabornIcon }, 
        { name: 'Scikit-learn', image: getIconUrl('scikitlearn') },
        { name: 'Jupyter', image: getIconUrl('jupyter') }
      ]
    },
    {
      role: 'Web Development',
      icon: <Layout size={32} />,
      color: 'var(--color-fe)',
      items: [
        { name: 'HTML', image: getIconUrl('html5') },
        { name: 'CSS', image: getIconUrl('css') },
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
    <section id="skills" className="section-skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category" style={{ '--accent-color': category.color }}>
              <div className="category-header">
                <div className="icon-wrapper" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.role}</h3>
              </div>
              <ul className="skill-list">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <span className="skill-icon">
                      {item.image ? (
                        <img src={item.image} alt={item.name} width="18" height="18" />
                      ) : (
                        item.icon
                      )}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


