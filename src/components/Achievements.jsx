import React from 'react';
import './Achievements.css';

const Projects = () => {
  const badges = [
    '🌍 Open Source Contributor (Kiwix)',
    '🎯 Google Code-in 2018 (OpenWISP)',
    '🚀 Google Code-in 2019 (TensorFlow)',
    '🎓 Spring Certificate',
    '🛡️ Cybersecurity Enthusiast',
  ];

  return (
    <div className="projects-page">
      <h2 className="section-title">Achievements</h2>

      <div className="badges-container">
        {badges.map((badge, index) => (
          <span className="animated-badge" key={index}>
            {badge}
          </span>
        ))}
      </div>

      <div className="future-section">
        <h3>What's Next?</h3>
        <p>
          I'm constantly learning and growing. Here are a few things I'm working toward:
        </p>
        <ul>
          <li>🎓 Deepening my knowledge in AI & ML</li>
          <li>🧠 Contributing more to impactful open-source projects</li>
          <li>🛡️ Diving deeper into ethical hacking and cybersecurity</li>
          <li>💼 Preparing for internships and remote tech roles</li>
        </ul>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <p><strong>2018:</strong> Google Code-in (OpenWISP)</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <p><strong>2019:</strong> GCI (Tensorflow) & more open source contributions</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <p><strong>2020–2023:</strong> Spring & Cybersecurity exploration</p>
        </div>
      </div>

      <div className="cta-container">
        <a href="/resume.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default Projects;
