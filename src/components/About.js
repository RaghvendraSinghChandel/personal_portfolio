import { Heading,useShowHeadingOnPath } from './InnerComponent/Hooks';
import '../styles/About.css';

function About() {
  const showHeading = useShowHeadingOnPath('/about');
  return (
    <div className="about">
    {showHeading && <Heading text="Get to Know Me" />}
      <div className="about-section">
        <p>
          I am a dedicated <strong>QA Software Engineer</strong> with a strong foundation in <strong>manual</strong>, <strong>automation</strong>, and <strong>API testing</strong>. 
          Over the years, I have had the privilege of working across diverse domains, including <strong>healthcare, finance, e-commerce, and social media applications</strong>. 
          My passion for quality and precision drives me to create comprehensive <strong>test plans</strong>, design detailed <strong>test cases</strong>, execute tests meticulously, 
          and compile insightful <strong>summary reports</strong>.
        </p>
      </div>
      <div className="about-section">
        <p>
          In the realm of automation, I have honed my skills using <strong>Cypress</strong> and <strong>Playwright</strong>, delivering robust and reliable test scripts 
          that have streamlined the testing process. For mobile testing, I leverage <strong>Appium</strong> in conjunction with <strong>WebDriverIO</strong>, 
          ensuring that applications function seamlessly across various devices. My expertise also extends to performance testing, where I have used <strong>Locust</strong> 
          to simulate and analyze load, ensuring that applications can scale effectively.
        </p>
      </div>
      <div className="about-section">
        <p>
          Throughout my career, I have reported over <strong>1500+ bugs</strong>, automated more than <strong>2000 test scripts</strong>, and developed over <strong>3500 test cases</strong>. 
          These contributions have significantly enhanced the quality and reliability of the software products I've worked on.
        </p>
      </div>
      <div className="skills-section">
        <p><strong>Skills & Tools:</strong> Cypress, Playwright, Postman, Locust, GitHub Actions, Circle CI, and more.</p>
      </div>
    </div>
  );
}

export default About;
