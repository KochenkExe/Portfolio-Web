import { useState, useEffect } from 'react';
import { ExternalLink, Folder, X } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

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

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);



  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Filter Controls */}
        <div className="filter-wrapper">
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
              Business &amp; Analytics
            </button>
            <button 
              className={`filter-btn ${filter === 'fe' ? 'active' : ''}`} 
              onClick={() => setFilter('fe')}
            >
              Web Development
            </button>
          </div>
        </div>

        {/* Projects Loading State */}
        {loading ? (
          <div className="projects-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bento-card project-card skeleton-card">
                <div className="skeleton-header">
                  <div className="skeleton-icon"></div>
                  <div className="skeleton-link"></div>
                </div>
                <div className="skeleton-title"></div>
                <div className="skeleton-desc"></div>
                <div className="skeleton-desc short"></div>
                <div className="skeleton-tags">
                  <div className="skeleton-tag"></div>
                  <div className="skeleton-tag"></div>
                  <div className="skeleton-tag"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid */
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`bento-card project-card category-${project.category}`}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-card-header">
                  <div className="project-icon-box">
                    <Folder size={20} />
                  </div>
                  <a 
                    href={project.project_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                    aria-label={`View external project: ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag-chip">{tag}</span>
                  ))}
                </div>

                {/* Overlay Accent Line */}
                <div className="project-accent-bar"></div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="no-projects bento-card">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="modal-backdrop" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bento-card project-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="modal-body">
              {selectedProject.image_url && (
                <div className="modal-image-wrapper">
                  <img 
                    src={selectedProject.image_url} 
                    alt={selectedProject.title} 
                    className="modal-image"
                  />
                </div>
              )}
              
              <div className="modal-info">
                <span className={`project-category-badge category-${selectedProject.category}`}>
                  {selectedProject.category === 'ba' ? 'Business & Analytics' : 'Web Development'}
                </span>
                
                <h3 id="modal-title" className="modal-title">{selectedProject.title}</h3>
                
                <div className="project-tags modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="project-tag-chip">{tag}</span>
                  ))}
                </div>
                
                <p className="modal-desc">{selectedProject.description}</p>
                
                <div className="modal-actions">
                  <a 
                    href={selectedProject.project_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-neo btn-modal-action"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn-neo btn-neo-secondary btn-modal-close"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

