import React from 'react';

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <div className="contact-card">
        <p>📧 <strong>Email:</strong> satamihir4@gmail.com</p>
        <p>📞 <strong>Phone:</strong> +91 8401447054</p>
        <p>📍 <strong>Location:</strong> Gandhinagar, Gujarat</p>

        {/* Resume Preview */}
        {/* <div className="resume-preview">
          <iframe
            title="Resume Preview"
            src="https://drive.google.com/file/d/1LiiaR0pRoVVLcFOKwcA9_56joXHnaQuV/view?usp=drive_link"
            width="100%"
            height="480"
            allow="autoplay"
          ></iframe>
        </div> */}

        <a
          href="https://drive.google.com/file/d/1LiiaR0pRoVVLcFOKwcA9_56joXHnaQuV/view?usp=drive_link"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
