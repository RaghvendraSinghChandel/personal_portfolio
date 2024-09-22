import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile.png';
import emoji from '../assets/bitemoji.png'
import { ContactSocialLink } from './InnerComponent/Hooks';
import '../styles/Home.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import { useState } from 'react';

function Home() {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  return (
    <div className="home">
      <div className="profile-section">
      <div className="flip-container profile-photo" onClick={handleFlip}>
          <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div className="front">
              <img src={profilePhoto} alt="Profile" className="profile-photo" />
            </div>
            {/* Back Side */}
            <div className="back">
              <img src={emoji} alt="Profile" className="profile-photo" />
            </div>
          </div>
          </div>
        <h3>👋 Hy There, <br /> This is Raghvendra <br /> (QA Engineer) </h3>
        <p>A passionate QA Engineer with <strong>2+ Years of experience </strong>in Manual, API, and Automation Testing.</p>
        <a href="/raghvendra_resume.pdf" download className="cta-button">Download Resume</a>
        <Link to="/contact" className="cta-button">Contact Me</Link>
        <ContactSocialLink />
      </div>

      <div className="section">
      <h2><Link to="/About" className="section-link">Read About Me</Link></h2>
        <About />
      </div>
      <div className="section">
      <h2><Link to="/Projects" className="section-link">Projects</Link></h2>
        <Projects />
      </div>
      <div className="section">
      <h2><Link to="/Skills" className="section-link">Skills</Link></h2>
        <Skills />
      </div>
      <div className="section">
      <h2><Link to="/Resume" className="section-link">Resume</Link></h2>
        <Resume />
      </div>
      <div className="section">
      <h2><Link to="/Contact" className="section-link">Reach Out to Me</Link></h2>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
