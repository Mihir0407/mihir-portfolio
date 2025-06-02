import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // your global styles

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for previous choice or default false
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  // Save preference on change
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
