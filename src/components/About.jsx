import React from 'react';
import { FaUser, FaTools, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">
          {/* Personal Info */}
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
            <motion.div
              className="about-card border-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="about-card-header">
                <FaUser className="about-icon text-blue-500" />
                <h3 className="about-card-title">Personal Info</h3>
              </div>
              <p className="about-text">
                I'm <strong>Chirag Taneja</strong>, 20 years old, currently pursuing my education in
                <em> B.Tech CSE from JIMS Engineering Management Technical Campus</em>. I started coding early and
                built several projects that reflect my passion for technology.
              </p>
            </motion.div>
          </Tilt>

          {/* Skills */}
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
            <motion.div
              className="about-card border-green-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
            </motion.div>
          </Tilt>

          {/* Interests */}
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
            <motion.div
              className="about-card border-purple-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="about-card-header">
                <FaLaptopCode className="about-icon text-purple-500" />
                <h3 className="about-card-title">Interests</h3>
              </div>
              <p className="about-text">
                I’m fascinated by fields like <strong>Cybersecurity</strong>, <strong>DevOps</strong>,
                and cloud technologies. I enjoy exploring system design, ethical hacking, and automation workflows.
              </p>
            </motion.div>
          </Tilt>

          {/* Education */}
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
            <motion.div
              className="about-card border-yellow-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="about-card-header">
                <FaGraduationCap className="about-icon text-yellow-500" />
                <h3 className="about-card-title">Education</h3>
              </div>
              <ul className="about-list">
                <li>B.Tech in Computer Science</li>
                <li>JIMS Engineering Management Technical Campus</li>
                <li>Expected Graduation: 2026</li>
              </ul>
            </motion.div>
          </Tilt>
        </div>

        {/* Flip Card */}
        <div className="flip-card" tabIndex={0} aria-label="Fun fact flip card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>🎯 Fun Fact</h3>
              <p>Tap or hover to flip</p>
            </div>
            <div className="flip-card-back">
              <p>I love customizing Linux and working with open-source tools!</p>
            </div>
          </div>
        </div>

        {/* Footer */}
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
