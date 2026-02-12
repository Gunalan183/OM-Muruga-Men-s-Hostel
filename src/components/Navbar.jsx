import { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>OM Muruga Men's Hostel</h2>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('rooms')} className="nav-link">Rooms</a>
          <a onClick={() => scrollToSection('facilities')} className="nav-link">Facilities</a>
          <a onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</a>
          <a onClick={() => scrollToSection('location')} className="nav-link">Location</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <a href="tel:+917305005875" className="nav-cta">
          <FaPhone /> Call Now
        </a>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
