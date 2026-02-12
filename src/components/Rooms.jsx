import { FaSnowflake, FaBolt, FaRupeeSign } from 'react-icons/fa';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    {
      type: 'Non A/C Room',
      rent: '₹7,000',
      advance: '₹2,000',
      electricity: 'Included',
      icon: <FaBolt />,
      features: [
        'Spacious rooms',
        'Comfortable beds',
        'Storage space',
        'Natural ventilation',
        'All amenities included'
      ]
    },
    {
      type: 'A/C Room',
      rent: '₹7,500',
      advance: '₹3,000',
      electricity: 'Charged Separately',
      icon: <FaSnowflake />,
      features: [
        'Air conditioned',
        'Premium comfort',
        'Storage space',
        'Modern interiors',
        'All amenities included'
      ],
      popular: true
    }
  ];

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header">
          <h2>Rooms & Rent</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Choose the perfect room for your comfort</p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div key={index} className={`room-card ${room.popular ? 'popular' : ''}`}>
              {room.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="room-icon">{room.icon}</div>
              <h3>{room.type}</h3>
              
              <div className="room-price">
                <span className="price-amount">{room.rent}</span>
                <span className="price-period">/ Month</span>
              </div>

              <div className="room-details">
                <div className="detail-item">
                  <strong>Advance:</strong> {room.advance}
                </div>
                <div className="detail-item">
                  <strong>Electricity:</strong> {room.electricity}
                </div>
              </div>

              <ul className="room-features">
                {room.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <a href="https://wa.me/917305005875" className="room-btn">
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="rent-note">
          <FaRupeeSign />
          <p><strong>Note:</strong> Everything else is included in the rent - Food, WiFi, Housekeeping, and all facilities!</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
