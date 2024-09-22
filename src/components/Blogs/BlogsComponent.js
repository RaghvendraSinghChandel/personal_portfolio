import React from "react";
import blogData from "../Blogs/blogsData.json";
import { useParams, useNavigate } from "react-router-dom";
import "../Blogs/BlogComponent.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { seleniumCode, cypressCode, playwrightCode, cypressLocatorsAndmethods } from "./CodeExample";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Mapping of code sections to code content
const codeExamples = {
  "Selenium Code": seleniumCode,
  "Cypress Code": cypressCode,
  "Playwright Code": playwrightCode,
  "Dealing With Real Scenario": cypressLocatorsAndmethods,
};

// Reusable Paragraph component
const Example = ({ examples }) => (
  <>
    {examples.map((example, index) => (
      <div key={index}>
        <h4>{example.description}</h4>
        <SyntaxHighlighter language="javascript" style={coy}>
          {example.code}
        </SyntaxHighlighter>
      </div>
    ))}
  </>
);

// Reusable Paragraph component
const Paragraphs = ({ paragraphs }) => (
  <>
    {paragraphs.map((para, index) => (
      <p key={index}>{para}</p>
    ))}
  </>
);


// Reusable Subsection component
const Subsections = ({ subsections }) => (
  <>
    {subsections.map((subsec, index) => (
      <div key={index}>
        <h3>{subsec.title}</h3>

        {/* Render content if it's an array of paragraphs */}
        {Array.isArray(subsec.content) && (
          <Paragraphs paragraphs={subsec.content} />
        )}

        {/* Render examples if present */}
        {subsec.Example && <Example examples={subsec.Example} />}

        {/* Render pros and cons if present */}
        {subsec.content?.pros?.length > 0 && (
          <div>
            <h4>Pros:</h4>
            <ul>
              {subsec.content.pros.map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
            </ul>
          </div>
        )}

        {subsec.content?.cons?.length > 0 && (
          <div>
            <h4>Cons:</h4>
            <ul>
              {subsec.content.cons.map((con, idx) => (
                <li key={idx}>{con}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </>
);

// Reusable Table component
const FeatureComparisonTable = ({ table }) => (
  <div>
    <h3>Feature Comparison</h3>
    <table>
      <thead>
        <tr>
          {table.headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, idx) => (
          <tr key={idx}>
            <td>{row.feature}</td>
            <td>{row.cypress}</td>
            <td>{row.playwright}</td>
            <td>{row.selenium}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Reusable CodeExample component
const CodeSection = ({ section }) => {
  const codeContent = codeExamples[section.section];
  if (!codeContent) return null;

  return (
    <div>
      <SyntaxHighlighter language="javascript" style={coy}>
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
};

export function BlogPost() {
  const { blogId } = useParams(); // Retrieve blog ID from the URL
  const navigate = useNavigate()

  const allBlogs = blogData.blogs.flat();
  const blog = allBlogs.find((b) => b.id === blogId);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const { title, author, publishedDate, content, conclusion } = blog;

  return (
    <div className="body">
      <div className="back-button-container">
  <div className="back-icon" onClick={() => navigate("/blogs")}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
</div>
      <h1>{title}</h1>
      <h3>By {author}</h3>
      <p>Published on: {publishedDate}</p>

      {/* Render each section dynamically */}
      {content.map((section, idx) => (
        <div key={idx}>
          <h2>{section.section}</h2>

          {/* Render paragraphs if present */}
          {section.paragraphs && <Paragraphs paragraphs={section.paragraphs} />}

          
          {/* Render subsections if present */}
          {section.subsections && <Subsections subsections={section.subsections} />}


          {/* Render table if present */}
          {section.table && <FeatureComparisonTable table={section.table} />}

          {/* Render code sections dynamically */}
          <CodeSection section={section} />
        </div>
      ))}

      {/* Conclusion section */}
      <h3>Conclusion</h3>
      <p>{conclusion}</p>
    </div>
  );
}
