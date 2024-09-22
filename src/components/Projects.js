import React, { useState } from 'react';
import projectsData from '../Project/projects.json'; // Adjust the path as needed
import { Heading,useShowHeadingOnPath } from './InnerComponent/Hooks';
import '../styles/Projects.css';

function Projects() {
  const showHeading = useShowHeadingOnPath('/projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="projects">
      {showHeading && <Heading text="Project Highlights" />}
      {selectedProject === null ? (
        projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <h4 className="project-domain">Domain: {project.domain}</h4>
            <p className="project-role">Role: {project.role}</p>
            <button onClick={() => handleProjectClick(index)} className="view-details-link">
              View Details
            </button>
          </div>
        ))
      ) : (
        <div className="project-details">
          <div className="project-item">
            <h3 className="project-title">{projectsData[selectedProject].title}</h3>
            <h4 className="project-domain">Domain: {projectsData[selectedProject].domain}</h4>
            <p className="project-role">Role: {projectsData[selectedProject].role}</p>
            <div className="project-overview">
              <h4>Overview</h4>
              <p>{projectsData[selectedProject].overview}</p>
              
              <h4>Roles and Responsibilities</h4>
              
              <div className="testing-role">
                <strong>Manual Testing:</strong>
                <p>{projectsData[selectedProject].rolesResponsibilities.manualTesting}</p>
              </div>
              
              <div className="testing-role">
                <strong>Automation Testing:</strong>
                <p>{projectsData[selectedProject].rolesResponsibilities.automationTesting}</p>
              </div>
              
              <div className="testing-role">
                <strong>API Testing:</strong>
                <p>{projectsData[selectedProject].rolesResponsibilities.apiTesting}</p>
              </div>
              
              <h4>Achievements</h4>
              <ul>
                {projectsData[selectedProject].achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          <button onClick={handleBackClick} className="back-link">
            Back to Projects
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
