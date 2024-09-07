import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <h1>Company</h1>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <a href="#" aria-label="Facebook" style={{ color: 'white', textDecoration: 'none' }}>FB</a>
          <a href="#" aria-label="Twitter" style={{ color: 'white', textDecoration: 'none' }}>TW</a>
          <a href="#" aria-label="Instagram" style={{ color: 'white', textDecoration: 'none' }}>IG</a>
        </div>
        <div style={{ fontSize: '14px' }}>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
