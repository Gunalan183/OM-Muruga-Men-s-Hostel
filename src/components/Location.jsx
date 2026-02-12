import { FaMapMarkerAlt, FaBus, FaSubway, FaUtensils } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  const nearbyPlaces = [
    { icon: <FaBus />, name: 'CMBT Bus Stand', distance: '500m' },
    { icon: <FaSubway />, name: 'CMBT Metro', distance: '600m' },
    { icon: <FaUtensils />, name: 'KFC', distance: '300m' },
    { icon: <FaUtensils />, name: 'A2B', distance: '400m' },
    { icon: <FaUtensils />, name: 'Sangeetha Hotel', distance: '350m' }
  ];

  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header">
          <h2>Location</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Conveniently located in the heart of Koyambedu</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="address-card">
              <FaMapMarkerAlt className="address-icon" />
              <div>
                <h3>Our Address</h3>
                <p>No: 3, TSD Nagar,<br />Koyambedu,<br />Chennai – 600106</p>
              </div>
            </div>

            <div className="nearby-section">
              <h3>Nearby Places</h3>
              <div className="nearby-grid">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="nearby-item">
                    <div className="nearby-icon">{place.icon}</div>
                    <div className="nearby-details">
                      <h4>{place.name}</h4>
                      <span>{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="location-highlights">
              <div className="highlight">
                <span className="highlight-number">5 min</span>
                <span className="highlight-text">Walk to CMBT</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10 min</span>
                <span className="highlight-text">To City Center</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">24/7</span>
                <span className="highlight-text">Public Transport</span>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.412611545119!2d80.20216747507823!3d13.073016187251774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA0JzIyLjkiTiA4MMKwMTInMTcuMSJF!5e0!3m2!1sen!2sin!4v1770696538192!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy"
              title="OM Muruga Hostel Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
