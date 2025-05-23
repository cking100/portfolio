import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Particles from '@tsparticles/react';
import ProjectShowcase from './ProjectShowcase';
import MouseMoveEffect from './Mouse';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [greeting, setGreeting] = useState('');
  const fullText = " I am a Fullstack Developer";

  useEffect(() => {
    let isMounted = true; // to track if component is mounted
    const typeText = async () => {
      setDisplayText('');
      for (let i = 0; i < fullText.length; i++) {
        if (!isMounted) break;
        setDisplayText((prev) => prev + fullText.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };
    typeText();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning ☀️');
    else if (hour < 18) setGreeting('Good Afternoon 🌤️');
    else setGreeting('Good Evening 🌙');
  }, []);

  return (
    <section className="hero-section" id="hero">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
          },
        }}
      />

      <svg className="wave" viewBox="0 0 1440 320">
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,224L30,208C60,192,120,160,180,154.7C240,149,300,171,360,170.7C420,171,480,149,540,144C600,139,660,149,720,165.3C780,181,840,203,900,192C960,181,1020,139,1080,117.3C1140,96,1200,96,1260,90.7C1320,85,1380,75,1410,69.3L1440,64L1440,0L0,0Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#a100ff" />
          </linearGradient>
        </defs>
      </svg>

      <article className="hero-content">
        <motion.div
          className="terminal"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="greeting">{greeting}</h3>
          <h1>
            <span className="terminal-caret"></span>
            Hi, I'm <span className="highlight glow">Chirag</span>
          </h1>
          <h2 className="typing-text">{displayText}</h2>
        </motion.div>

        <motion.button
          className="resume-button ripple"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          View Resume
        </motion.button>

        <motion.div
          className="scroll-prompt"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ScrollLink to="about" smooth={true} duration={500}>
            ⬇ Scroll Down
          </ScrollLink>
        </motion.div>

        <div className="tech-stack glass">
          <div className="tech-icon" title="React">
            <FaReact size={40} />
          </div>
          <div className="tech-icon" title="Node.js">
            <FaNodeJs size={40} />
          </div>
          <div className="tech-icon" title="Express.js">
            <SiExpress size={40} />
          </div>
          <div className="tech-icon" title="MongoDB">
            <SiMongodb size={40} />
          </div>
          <div className="tech-icon" title="Database">
            <FaDatabase size={40} />
          </div>
        </div>

        <div>
          <MouseMoveEffect />
        </div>
      </article>

      <ProjectShowcase />
    </section>
  );
};

export default Home;

