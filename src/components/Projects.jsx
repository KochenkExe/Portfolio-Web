import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

import { supabase } from '../supabaseClient';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (loading) {
     return (
       <section id="projects" className="section-projects">
         <div className="container">
           <h2 className="section-title">Featured Projects</h2>
           <div className="loading-container" style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '2rem' }}>
             Loading projects...
           </div>
         </div>
       </section>
     );
  }

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${filter === 'ba' ? 'active' : ''}`} 
            onClick={() => setFilter('ba')}
          >
            Business / Data Analysis
          </button>
          <button 
            className={`filter-btn ${filter === 'fe' ? 'active' : ''}`} 
            onClick={() => setFilter('fe')}
          >
            Web Development
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.category}`}>
              <div className="card-header">
                <Folder size={24} className="folder-icon" />
                <div className="card-links">
                  <a href={project.project_url} target="_blank" rel="noopener noreferrer" aria-label="View Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
