import React from "react";
import blogData from "../Blogs/blogsData.json";
import { useParams } from "react-router-dom";
import "../Blogs/BlogComponent.css"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { seleniumCode, cypressCode, playwrightCode } from "./CodeExample";


export function BlogPost(){
  const { blogId } = useParams(); // Retrieve blog ID from the URL

  // Flatten the nested array to access all blog objects
  const allBlogs = blogData.blogs.flat();
  const blogIndex = allBlogs.findIndex((b) => b.id === blogId);
  let data = blogData.blogs[blogIndex][0]
  console.log(data)
  console.log(blogIndex)
  if (!data) {
    return <p>Blog not found</p>;
  }
  
  return (
    <div className="body">
      <h1>{data.title}</h1>
      <h3>By {data.author}</h3>
      <p>Published on: {data.publishedDate}</p>

      {data.content.map((section, idx) => (
        <div key={idx}>
          <h2>{section.section}</h2>
          {/* Render paragraphs if section has paragraphs */}
          {section.paragraphs && section.paragraphs.map((para, paraIdx) => (
            <p key={paraIdx}>{para}</p>
          ))}

          {/* Handle subsections if section has subsections */}
          {section.subsections && section.subsections.map((subsec, subsecIdx) => (
            <div key={subsecIdx}>
              <h3>{subsec.title}</h3>

              {/* Check if subsec.content is an array or an object */}
              {Array.isArray(subsec.content) ? (
                subsec.content.map((contentItem, contentIdx) => (
                  <p key={contentIdx}>{contentItem}</p>
                ))
              ) : (
                // If subsec.content is an object (e.g., Pros/Cons), handle it differently
                <div>
                  {/* Example for Pros/Cons */}
                  <h4>Pros:</h4>
                  <ul>
                    {subsec.content.pros && subsec.content.pros.map((pro, proIdx) => (
                      <li key={proIdx}>{pro}</li>
                    ))}
                  </ul>
                  <h4>Cons:</h4>
                  <ul>
                    {subsec.content.cons && subsec.content.cons.map((con, conIdx) => (
                      <li key={conIdx}>{con}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Render table if section has a table */}
          {section.table && (
            <div>
              <h3>Feature Comparison</h3>
              <table>
                <thead>
                  <tr>
                    {section.table.headers.map((header, headerIdx) => (
                      <th key={headerIdx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      <td>{row.feature}</td>
                      <td>{row.cypress}</td>
                      <td>{row.playwright}</td>
                      <td>{row.selenium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}


      {/* Code Sections */}
      {section.section === "Selenium Code" && (
            <div>
              <SyntaxHighlighter language= "javascript" style={coy}>
                {seleniumCode}
              </SyntaxHighlighter>
            </div>
          )}

          {section.section === "Cypress Code" && (
            <div>
              <SyntaxHighlighter language="javascript" style={coy}>
                {cypressCode}
              </SyntaxHighlighter>
            </div>
          )}

          {section.section === "Playwright Code" && (
            <div>
              <SyntaxHighlighter language="javascript" style={coy}>
                {playwrightCode}
              </SyntaxHighlighter>
            </div>
          )}
            </div>
      ))}

      {/* Conclusion section */}
      <h3>Conclusion</h3>
      <p>{data.conclusion}</p>
    </div>
  );
};