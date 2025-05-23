import React from 'react';
import { FaUser, FaTools, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import './About.css'; // Import the CSS file

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">
          {/* Personal Info */}
          <div className="about-card border-blue-500">
            <div className="about-card-header">
              <FaUser className="about-icon text-blue-500" />
              <h3 className="about-card-title">Personal Info</h3>
            </div>
            <p className="about-text">
              I'm <strong>Chirag Taneja</strong>, 20 years old, currently pursuing my education in 
              <em> B.Tech CSE from JIMS Engineering Management Technical Campus</em>. I started coding early and 
              built several projects that reflect my passion for technology.
            </p>
          </div>

          {/* Skills */}
          <div className="about-card border-green-500">
            <div className="about-card-header">
              <FaTools className="about-icon text-green-500" />
              <h3 className="about-card-title">Skills</h3>
            </div>
            <ul className="about-list">
              <li>Frontend: React, HTML, CSS, Tailwind, JavaScript</li>
              <li>Backend: Spring Boot, Django, Node.js</li>
              <li>Databases: MySQL, MongoDB, PostgreSQL</li>
              <li>Tools: Git, GitHub, Postman, Docker</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="about-card border-purple-500">
            <div className="about-card-header">
              <FaLaptopCode className="about-icon text-purple-500" />
              <h3 className="about-card-title">Interests</h3>
            </div>
            <p className="about-text">
              I’m fascinated by fields like <strong>Cybersecurity</strong>, <strong>DevOps</strong>, 
              and cloud technologies. I enjoy exploring system design, ethical hacking, and automation workflows.
            </p>
          </div>

          {/* Education */}
          <div className="about-card border-yellow-500">
            <div className="about-card-header">
              <FaGraduationCap className="about-icon text-yellow-500" />
              <h3 className="about-card-title">Education</h3>
            </div>
            <ul className="about-list">
              <li>B.Tech in Computer Science</li>
              <li>JIMS Engineering Management Technical Campus</li>
              <li>Expected Graduation: 2026</li>
            </ul>
          </div>
        </div>

        <div className="about-footer">
          <p>
            I’m always eager to take on new challenges, collaborate on innovative ideas, and grow as a developer and tech enthusiast.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
