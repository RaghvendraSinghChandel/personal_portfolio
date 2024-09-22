import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blogs  from './components/blogs'
import { BlogPost } from './components/Blogs/BlogsComponent';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = '/blogs' element = {<Blogs />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
