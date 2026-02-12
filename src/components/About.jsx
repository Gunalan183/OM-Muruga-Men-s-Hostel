import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    'Safe & hygienic men\'s hostel',
    'Suitable for students & working professionals',
    'Peaceful environment',
    'Owner-managed PG',
    'Located in prime Koyambedu area',
    'Easy access to public transport'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Welcome to <strong>OM Muruga Men's Hostel</strong>, your home away from home in the heart of Koyambedu, Chennai.
            </p>
            <p>
              We provide comfortable and affordable accommodation for students and working professionals. 
              Our hostel is designed to offer a safe, clean, and peaceful living environment with all modern amenities.
            </p>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>₹7000+</h3>
              <p>Starting Rent</p>
            </div>
            <div className="stat-card">
              <h3>3x</h3>
              <p>Daily Meals</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
