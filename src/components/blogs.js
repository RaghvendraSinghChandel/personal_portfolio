import React from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css"; // Import the CSS file for styling

function Blogs() {
  return (
    <div className="blog-links">
      <h2>Blogs</h2>
      <ul>
        <li>
          <Link to="/blog/cypress-vs-playwright-vs-selenium" className="blog-link">
            Cypress vs Playwright vs Selenium
          </Link>
        </li>
        <li>
          <Link to="/blog/cypress-locators-and-custom-method" className="blog-link">
            Cypress Locators & Cypress Methods
          </Link>
        </li>
        {/* Add more blog links as needed */}
      </ul>
    </div>
  );
}

export default Blogs;
