import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaPhone} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/About.css';
import '../../styles/Contact.css'
import '../InnerComponent/Hooks.css'

export function Heading({ text }) {
  return (
      <h1 className='heading-text'>{text}</h1>
  );
}

export function ContactSocialLink() {
    return (
        <div className="social-links">
        <a href="https://www.linkedin.com/in/raghvendra-singh-chandel-0089631a1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> LinkedIn
        </a>
        <a href="https://github.com/RaghvendraSinghChandel" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> GitHub
        </a>
        <a href="mailto:sundaramsingh8924@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail size={30} /> Email
        </a> 
        <a href="tel:+917307608974" target="_blank" rel="noopener noreferrer">
          <FaPhone size={20} /> Phone
        </a>
      </div>
    )
  }

  export function useShowHeadingOnPath(targetPath) {
    const [showHeading, setShowHeading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === targetPath) {
        setShowHeading(true);
      } else {
        setShowHeading(false);
      }
    }, [location.pathname, targetPath]);
  
    return showHeading;
  }

  
