import React from 'react';
import './Skills.css';

const skillData = {
  Frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 86 },
    { name: 'React', level: 75 },
  ],
  Backend: [
    { name: 'Spring ', level: 92 },
    { name: 'Python', level: 90 },
    { name: 'Java', level: 97 },
    { name: 'Django', level: 87 },
  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 85 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 70 },
    { name: 'Maven', level: 90 },
  ],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">🧰 My Toolbox</h2>
      <div className="skills-grid">
        {Object.entries(skillData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skill-list">
              {skills.map(({ name, level }) => (
                <div key={name} className="skill-item">
                  <div className="skill-name">{name}</div>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-fill"
                      style={{ width: `${level}%` }}
                    >
                      <span className="progress-label">{level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
