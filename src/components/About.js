import React from 'react';
import profile from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <img src={profile} alt="Mihir" style={{ width: '180px', borderRadius: '100%', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} />
        <p style={{ flex: 1 }}>
          I'm an enthusiastic Web Developer Intern with strong front-end and back-end foundations, currently pursuing a BE in Computer Engineering at LDRP-ITR.
        </p>
      </div>
    </section>
  );
}
