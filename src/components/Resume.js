import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume">
      <div className="resume-download">
        <a href="./raghvendra_resume.pdf" download className="download-link">Download My Resume</a>
      </div>
    </div>
  );
}

export default Resume;
