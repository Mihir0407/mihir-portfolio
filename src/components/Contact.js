import React from 'react';

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <p>📧 satamihir4@gmail.com</p>
      <p>📞 +91 8401447054</p>
      <p>📍 Gandhinagar, Gujarat</p>

      <a
        href="/Mihir_Resume.pdf"
        download
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 24px',
          backgroundColor: '#2563eb',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
      >
        📄 Download Resume
      </a>
    </section>
  );
}
