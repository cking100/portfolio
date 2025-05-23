import React from "react";
import "./Contact.css";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Let's Connect</h1>
      <p className="intro">
        I'm a passionate developer who loves building beautiful and functional web experiences. Whether it's for collaboration, freelancing, or just to say hello — feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:c.taneja09@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="icon" />
          c.taneja09@gmail.com
        </a>

        <a href="https://github.com/cking100" target="_blank" rel="noopener noreferrer">
          <Github className="icon" />
          github.com/cking100
        </a>

        <a href="https://www.linkedin.com/in/chiragtaneja13/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="icon" />
          linkedin.com/in/chiragtaneja13
        </a>
      </div>
    </div>
  );
};

export default Contact;
