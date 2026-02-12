import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaUser, FaHome } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'non-ac',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Create WhatsApp message
      const message = `Hello! I'm interested in OM Muruga Men's Hostel.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ARoom Type: ${formData.roomType === 'ac' ? 'A/C Room' : 'Non A/C Room'}%0AMessage: ${formData.message}`;
      
      // Open WhatsApp
      window.open(`https://wa.me/917305005875?text=${message}`, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        roomType: 'non-ac',
        message: ''
      });
      
      alert('Redirecting to WhatsApp...');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Get in touch with us for bookings and enquiries</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Have questions? We're here to help! Reach out to us through any of the following methods:</p>
            
            <div className="contact-methods">
              <a href="tel:+917305005875" className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 73050 05875</p>
                </div>
              </a>

              <a href="tel:+916381509650" className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 63815 09650</p>
                </div>
              </a>

              <a href="tel:+919962363200" className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 99623 63200</p>
                </div>
              </a>

              <a href="https://wa.me/917305005875" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaWhatsapp className="method-icon whatsapp" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 73050 05875</p>
                </div>
              </a>

              <div className="contact-method">
                <FaEnvelope className="method-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@ommurugehostel.com</p>
                </div>
              </div>
            </div>

            <div className="visit-info">
              <h4>Visit Us</h4>
              <p>No: 3, TSD Nagar, Koyambedu<br />Chennai – 600106</p>
              <p className="timing">Open for visits: 9 AM - 7 PM</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Enquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone /> Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="roomType">
                  <FaHome /> Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                >
                  <option value="non-ac">Non A/C Room (₹7,000)</option>
                  <option value="ac">A/C Room (₹7,500)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaEnvelope /> Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn">
                <FaWhatsapp /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
