import React from 'react';
import '../styles/Skills.css';
import { Heading,useShowHeadingOnPath } from './InnerComponent/Hooks';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Skills() {
  const showHeading = useShowHeadingOnPath('/skills');
  const skills = [
    { name: 'Manual Testing', rating: 5 },
    { name: 'Automation Testing (Cypress, Playwright)', rating: 5 },
    { name: 'API Testing (Postman)', rating: 4},
    { name: 'Mobile Automation (Appium with WebDriverIO)', rating: 4 },
    { name: 'Performance Testing (Locust)', rating: 3.5 },
    { name: 'CI/CD (GitHub Actions)', rating: 4 },
    { name: 'Version Control (Git)', rating: 4.5 },
    { name: 'JavaScript', rating: 4.5 },
    { name: 'Python', rating: 3.5 }
  ];

  return (
    <div className="skills">
      {showHeading && <Heading text="My Expertise" />}
      <ul>
        {skills.map(skill => (
          <li key={skill.name}>
            {skill.name}
            <span className="stars">
              {[...Array(Math.floor(skill.rating))].map((_, i) => (
                <FaStar key={i} />
              ))}
              {skill.rating % 1 !== 0 && <FaStarHalfAlt />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
