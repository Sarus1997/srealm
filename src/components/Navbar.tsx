import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/" className="navbar-link">Homffe</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
