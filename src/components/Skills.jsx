import React, { useState, useEffect } from 'react';
import './Skills.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaTools,
} from 'react-icons/fa';
import { SiDjango, SiJavascript, SiMongodb, SiSpring, SiPostman } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const skillData = [
  { name: 'React', level: 90, icon: <FaReact />, type: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: <SiJavascript />, type: 'Frontend' },
  { name: 'HTML5', level: 90, icon: <FaHtml5 />, type: 'Frontend' },
  { name: 'CSS3', level: 90, icon: <FaCss3Alt />, type: 'Frontend' },
  { name: 'Java', level: 97, icon: <FaJava />, type: 'Backend' },
  { name: 'Spring', level: 94, icon: <SiSpring />, type: 'Backend' },
  { name: 'Django', level: 89, icon: <SiDjango />, type: 'Backend' },
  { name: 'Python', level: 87, icon: <FaPython />, type: 'Backend' },
  { name: 'Postman', level: 90, icon: <SiPostman />, type: 'Tools' },
  { name: 'Maven', level: 98, icon: <FaTools />, type: 'Tools' },
  { name: 'MongoDB', level: 85, icon: <SiMongodb />, type: 'Database' },
  { name: 'Git', level: 92, icon: <FaGitAlt />, type: 'Tools' },
  { name: 'SQL', level: 93, icon: <FaDatabase />, type: 'Database' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [offsets, setOffsets] = useState({}); // Store vertical offsets for parallax effect

  // Filter skills based on selected category
  const filteredSkills =
    activeCategory === 'All'
      ? skillData
      : skillData.filter(skill => skill.type === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      const newOffsets = {};
      filteredSkills.forEach((_, index) => {
        const el = document.getElementById(`skill-card-${index}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.15;
          newOffsets[index] = offset;
        }
      });
      setOffsets(newOffsets);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredSkills]);

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-container">
        {filteredSkills.map((skill, index) => (
          <div
            id={`skill-card-${index}`}
            key={`${skill.name}-${index}`}
            className="parallax-wrapper"
            style={{ transform: `translateY(${offsets[index] || 0}px)` }}
          >
            <Tilt
              className="skill-card"
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">Lv. {Math.floor(skill.level / 10)}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
