import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: 'red',
    marginTop: 'auto',
    width: '100%', 
    position: 'relative', 
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2022 Blog Management System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
