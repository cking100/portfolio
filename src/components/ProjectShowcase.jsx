import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const projects = [
    {
      title: 'Code Quest',
      techStack: ['React', 'TypeScript', 'MySQL'],
      description: 'A full stack web app like LeetCode with AI integration.',
      github: 'https://github.com/cking100/CodeQuest',
      details: 'Users can solve various DSA problems with AI-powered hints.'
    },
    {
      title: 'Real-time Chat Application',
      techStack: ['Spring', 'MySQL', 'WebSocket'],
      description: 'A real-time chat app using WebSocket.',
      github: 'https://github.com/cking100/spring-projects',
      details: 'Enables duplex communication between users in real-time.'
    },
    {
      title: 'Expense Tracker',
      techStack: ['Spring', 'MySQL'],
      description: 'Spring backend app for expense tracking.',
      github: 'https://github.com/cking100/expense-tracker',
      details: 'Manage your income and expenses with this backend tracker.'
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) =>
        project.techStack.includes(filter)
      );

  // Scroll control for slider
  const scrollCarousel = (direction) => {
    const scrollAmount = 320;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects">
      {/* Tech Filters */}
      <nav className="tech-filters sticky-nav" aria-label="Filter projects by tech stack">
        {['All', 'React', 'Spring', 'Django'].map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={filter === tech ? 'active' : ''}
            aria-pressed={filter === tech}
          >
            {tech}
          </button>
        ))}
      </nav>

      {/* Mobile Slider Arrows */}
      <div className="slider-controls-mobile">
        <button onClick={() => scrollCarousel('prev')} aria-label="Scroll left">&#8592;</button>
        <button onClick={() => scrollCarousel('next')} aria-label="Scroll right">&#8594;</button>
      </div>

      {/* Projects Carousel */}
      <div className="projects-carousel" ref={carouselRef}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            tabIndex={0}
            role="button"
            aria-label={`Open modal for ${project.title}`}
          >
            <div className="project-card-content glass">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="modal-content"
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '-100vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.details}</p>
              <div className="modal-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <button onClick={() => setSelectedProject(null)} aria-label="Close modal">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
