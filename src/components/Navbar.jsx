import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-icon">ௐ</div>
          <div className="logo-text">
            <span className="logo-main">OM Muruga</span>
            <span className="logo-sub">Men's Hostel</span>
          </div>
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

        <div className="nav-actions">
          <a href="tel:+917305005875" className="nav-cta call-btn">
            <FaPhone /> <span>Call</span>
          </a>
          <a href="https://wa.me/917305005875" className="nav-cta whatsapp-btn">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
