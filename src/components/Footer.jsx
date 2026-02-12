import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OM Muruga Men's Hostel</h3>
          <p>Your comfortable and affordable home away from home in Koyambedu, Chennai.</p>
          <div className="footer-social">
            <a href="tel:+917305005875" className="social-link">
              <FaPhone />
            </a>
            <a href="https://wa.me/917305005875" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
            <li><a onClick={() => scrollToSection('rooms')}>Rooms & Rent</a></li>
            <li><a onClick={() => scrollToSection('facilities')}>Facilities</a></li>
            <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>No: 3, TSD Nagar, Koyambedu, Chennai – 600106</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91 73050 05875</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>info@ommurugehostel.com</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Highlights</h4>
          <ul className="footer-highlights">
            <li>✓ AC & Non-AC Rooms</li>
            <li>✓ 3 Times Food Daily</li>
            <li>✓ Free WiFi</li>
            <li>✓ CCTV Security</li>
            <li>✓ Near CMBT</li>
            <li>✓ Affordable Rent</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 OM Muruga Men's Hostel. All rights reserved.</p>
        <p>Made with <FaHeart className="heart-icon" /> for comfortable living</p>
      </div>

      <a href="https://wa.me/917305005875" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
