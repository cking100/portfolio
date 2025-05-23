import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Code Quest',
      techStack: ['React', 'typescript', 'MySql'],
      description: 'A full stack web app Like leetcode with Ai integration.',
      github: 'https://github.com/cking100/CodeQuest',
      details: 'This project is a problem solving webpage where users can solve different types of DSA problems with additional fun challenges'
    },
    {
      title: 'Real time Chat Application',
      techStack: ['Spring',  'My SQl', 'WebSocket'],
      description: 'A real time chat application using websocket',
      github: 'https://github.com/cking100/spring-projects',
      details: 'Users can chat at the same time it offers duplex communication'
    },
    {
      title: 'Expense Tracker',
      techStack: ['Spring',  'My Sql'],
      description: 'A Spring project for managing expense.',
      github: 'https://github.com/cking100/expense-tracker',
      details: 'A backend expense tracker used to manage budget monthly income and expenses'
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) =>
    project.techStack.includes(filter)
  );

  return (
    <section id="projects">
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

      <div className="projects-carousel">
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
