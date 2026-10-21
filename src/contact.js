import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>اتصل بنا</h2>
      <p>البريد الإلكتروني: mohammad.khalaf.11.8.1997@gmail.com</p>
      <p>الهاتف: +961 78809493   instagram:south lions team khalaf</p>
      <div className="map-link-container" style={{ marginTop: '1.5rem' }}>
        <a 
          href="https://maps.app.goo.gl/PcAsR2PkfbTpisKM9?g_st=ic" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            backgroundColor: '#e0a96d',
            color: '#0d1b2a',
            fontWeight: 'bold',
            borderRadius: '6px',
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'
          }}
        >
          📍 موقعنا على Google Maps
        </a>
      </div>
    </section>
  );
}

export default Contact;