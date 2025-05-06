import { useState, useEffect } from 'react';
import styles from './rotatingbanner.module.css';

import cactus from '../../../public/assets/2024banners/cactus_v2.jpg'
import cherry from '../../../public/assets/2024banners/cherry_v2.jpg'
import ghostranch from '../../../public/assets/2024banners/ghostranch_v2.jpg'
import smallflower from '../../../public/assets/2024banners/smallflower_v2.jpg'
import moreBalloons from '../../../public/assets/more_balloons_v2.jpg'
import succulent from '../../../public/assets/succulent_banner_v2.jpg'
import desertflower from '../../../public/assets/desert_flower_v2.jpg'
import highdesert from '../../../public/assets/high_desert_v2.jpg'


const images = [
  cactus,
  cherry,
  ghostranch,
  smallflower,
  moreBalloons,
  succulent,
  desertflower,
  highdesert
];

const RotatingBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rotating_banner_container">
      <img
        src={images[index].src ?? images[index]}
        alt={`Banner ${index}`}
        className={styles.balloons}
      />
    </div>
  );
};

export default RotatingBanner;
