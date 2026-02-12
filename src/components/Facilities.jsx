import { FaUtensils, FaWifi, FaTv, FaCoffee, FaTint, FaBroom, FaMotorcycle, FaTshirt } from 'react-icons/fa';
import { MdLunchDining, MdFastfood } from 'react-icons/md';
import './Facilities.css';

const Facilities = () => {
  const foodItems = [
    { icon: <FaUtensils />, title: '3 Times Food Daily', desc: 'Breakfast, Lunch & Dinner' },
    { icon: <MdLunchDining />, title: 'Lunch Box Provided', desc: 'For working professionals' },
    { icon: <MdFastfood />, title: 'Weekly 2 Times Non-Veg', desc: 'Chicken & Egg varieties' },
    { icon: <FaCoffee />, title: '2 Times Tea', desc: 'Morning & Evening' }
  ];

  const facilities = [
    { icon: <FaTshirt />, title: 'Washing Machine', desc: 'Free laundry facility' },
    { icon: <FaWifi />, title: 'Free WiFi', desc: 'Jio + Hathway connection' },
    { icon: <FaTv />, title: 'TV', desc: 'Common area entertainment' },
    { icon: <FaTint />, title: 'Drinking Water', desc: 'RO purified water' },
    { icon: <FaBroom />, title: 'House Keeping', desc: 'Daily cleaning service' },
    { icon: <FaMotorcycle />, title: 'Bike Parking', desc: 'CCTV monitored parking' }
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <h2>Food & Facilities</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Everything you need for comfortable living</p>
        </div>

        <div className="facilities-section">
          <h3 className="subsection-title">🍽️ Food Services</h3>
          <div className="facilities-grid">
            {foodItems.map((item, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon food-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="facilities-section">
          <h3 className="subsection-title">⚡ Amenities</h3>
          <div className="facilities-grid">
            {facilities.map((item, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon amenity-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="facilities-note">
          <p>✨ <strong>Iron Box Available</strong> - Free to use for all residents</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
