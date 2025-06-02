import React, { useState, useEffect } from 'react';
import pythonCert from '../assets/certificates/python.jpg';
import commCert from '../assets/certificates/communication.jpg';
import vizCert from '../assets/certificates/visualization.jpg';

const certificates = [
  {
    title: 'Python for Data Science – NPTEL',
    image: pythonCert,
  },
  {
    title: 'Business & Communication – NPTEL',
    image: commCert,
  },
  {
    title: 'Data Visualization – Forage',
    image: vizCert,
  }
];

export default function Certifications() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const showNext = () => {
    setLightboxIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'Escape') closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section id="certifications" data-aos="fade-up">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img
              src={cert.image}
              alt={cert.title}
              onClick={() => openLightbox(index)}
              className="cert-thumbnail"
            />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>

    {lightboxIndex !== null && (
  <div className="lightbox" onClick={closeLightbox}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={certificates[lightboxIndex].image}
        alt={certificates[lightboxIndex].title}
      />
      <p className="lightbox-title">{certificates[lightboxIndex].title}</p>
    </div>
    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>‹</button>
    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNext(); }}>›</button>
  </div>
)}

    </section>
  );
}
