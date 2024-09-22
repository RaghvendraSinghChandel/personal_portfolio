import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index) => {
    setClickedLink(index);
    setIsOpen(false); // Optionally close the menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/" onClick={() => handleLinkClick(null)}>Raghvendra QA Portfolio</Link>
        </h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              onClick={() => handleLinkClick(0)} 
              className={clickedLink === 0 ? 'clicked' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={() => handleLinkClick(1)} 
              className={clickedLink === 1 ? 'clicked' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              onClick={() => handleLinkClick(2)} 
              className={clickedLink === 2 ? 'clicked' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              onClick={() => handleLinkClick(3)} 
              className={clickedLink === 3 ? 'clicked' : ''}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              onClick={() => handleLinkClick(4)} 
              className={clickedLink === 4 ? 'clicked' : ''}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={() => handleLinkClick(5)} 
              className={clickedLink === 5 ? 'clicked' : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/blogs" 
              onClick={() => handleLinkClick(6)} 
              className={clickedLink === 6 ? 'clicked' : ''}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
