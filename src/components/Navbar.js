import React from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav>
      <div>Sata Mihir Hiren</div>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* Dark mode toggle */}
        <button
  onClick={() => setDarkMode(!darkMode)}
  className="dark-toggle-btn"
  aria-label="Toggle Dark Mode"
>
  {darkMode ? '🌞 Light' : '🌙 Dark'}
</button>

      </div>
    </nav>
  );
}
