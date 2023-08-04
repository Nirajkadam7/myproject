import React from 'react';
import './Navbar.css'
import Logo from "./Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="Logo.png" alt="Logo" />
        <span>DOC CARE</span>
      </div>
      <div className="navbar-buttons">
        <button>Home</button>
        <button>New Patient</button>
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default Navbar;
