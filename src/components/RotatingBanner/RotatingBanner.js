import { useState, useEffect } from 'react';
import styles from './rotatingbanner.module.css'



const imageNames = [
  '/assets/2024banners/cactus.jpg',
  '/assets/more_balloons.jpg',
  '/assets/2024banners/cherry.jpg',
  '/assets/high_desert.jpg',
  '/assets/2024banners/smallflower.jpg',
  '/assets/succulent_banner.jpg',
  '/assets/2024banners/ghostranch.jpg',
  '/assets/desert_flower.jpg'
];


const RotatingBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const interval = 15000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rotating_banner_container">
    <img
        src={imageNames[currentImageIndex]}
        alt="Banner Image"
        className={styles.balloons}
      />
    </div>
  );
};

export default RotatingBanner;
