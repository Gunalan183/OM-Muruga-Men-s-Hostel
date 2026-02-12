import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // All hostel photos from the photos folder
  const images = [
    { src: '/photos/room 1.jpeg', alt: 'Comfortable Room View 1', category: 'rooms' },
    { src: '/photos/room 2.jpeg', alt: 'Comfortable Room View 2', category: 'rooms' },
    { src: '/photos/room 3.jpeg', alt: 'Comfortable Room View 3', category: 'rooms' },
    { src: '/photos/room 4.jpeg', alt: 'Comfortable Room View 4', category: 'rooms' },
    { src: '/photos/room 5.jpeg', alt: 'Comfortable Room View 5', category: 'rooms' },
    { src: '/photos/room 6.jpeg', alt: 'Comfortable Room View 6', category: 'rooms' },
    { src: '/photos/room 7.jpeg', alt: 'Comfortable Room View 7', category: 'rooms' },
    { src: '/photos/room 8.jpeg', alt: 'Comfortable Room View 8', category: 'rooms' },
    { src: '/photos/room 9.jpeg', alt: 'Comfortable Room View 9', category: 'rooms' },
    { src: '/photos/room 10.jpeg', alt: 'Comfortable Room View 10', category: 'rooms' },
    { src: '/photos/room11.jpeg', alt: 'Comfortable Room View 11', category: 'rooms' },
    { src: '/photos/room12.jpeg', alt: 'Comfortable Room View 12', category: 'rooms' },
    { src: '/photos/room13.jpeg', alt: 'Comfortable Room View 13', category: 'rooms' },
    { src: '/photos/room14.jpeg', alt: 'Comfortable Room View 14', category: 'rooms' },
    { src: '/photos/room15.jpeg', alt: 'Comfortable Room View 15', category: 'rooms' },
    { src: '/photos/restroom .jpeg', alt: 'Clean Restroom Facility', category: 'facilities' },
    { src: '/photos/restroom2.jpeg', alt: 'Modern Restroom', category: 'facilities' },
    { src: '/photos/Visiting card.jpeg', alt: 'Contact Information', category: 'info' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Take a virtual tour of our hostel</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <span className="close-modal">&times;</span>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
