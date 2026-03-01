import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="om-symbol">ௐ</div>
          <h1 className="loader-title">OM Muruga</h1>
          <p className="loader-subtitle">Men's Hostel</p>
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
