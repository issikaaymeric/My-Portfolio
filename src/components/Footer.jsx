import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1f1f1f',
      color: '#f8f8f8',
      padding: '2rem 1rem',
      textAlign: 'center',
      marginTop: '4rem'
    }}>
      <p>© {new Date().getFullYear()} Aymeric Issika. All rights reserved.</p>
      <div style={{ margin: '1rem 0' }}>
        <a href="https://linkedin.com/in/issikaaymeric" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a> |{" "}
        <a href="https://x.com/issikaaymeric" target="_blank" rel="noopener noreferrer" style={linkStyle}>X / Twitter</a> |{" "}
        <a href="mailto:issikathereal@gmail.com" style={linkStyle}>Email</a>
      </div>
      <a href="#top" style={{ ...linkStyle, display: 'inline-block', marginTop: '1rem' }}>Back to Top ↑</a>
    </footer>
  );
}

const linkStyle = {
  color: '#f8f8f8',
  textDecoration: 'none',
  margin: '0 0.5rem',
  transition: 'color 0.3s'
};

export default Footer;
