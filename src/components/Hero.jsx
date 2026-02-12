import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaRupeeSign, FaUtensils } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">OM Muruga Men's Hostel</h1>
          <p className="hero-subtitle">Affordable & Comfortable Men's PG in Koyambedu</p>
          
          <div className="hero-highlights">
            <div className="highlight-item">
              <FaRupeeSign />
              <span>Starting from ₹7000</span>
            </div>
            <div className="highlight-item">
              <FaMapMarkerAlt />
              <span>Near CMBT Bus Stand & Metro </span>
            </div>
            <div className="highlight-item">
              <FaUtensils />
              <span>Food Included</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="tel:+917305005875" className="btn btn-primary">
              <FaPhone /> Call Now
            </a>
            <a href="https://wa.me/917305005875" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaWhatsapp /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <div className="quick-info">
        <div className="info-card">
          <div className="info-icon">🏠</div>
          <h3>AC & Non-AC Rooms</h3>
          <p>Comfortable living spaces</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🍽️</div>
          <h3>Food Included</h3>
          <p>3 times daily meals</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📶</div>
          <h3>Free WiFi</h3>
          <p>High-speed internet</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📹</div>
          <h3>CCTV Security</h3>
          <p>24/7 surveillance</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
