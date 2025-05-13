import { useState, useEffect } from 'react';
import styles from './rotatingbanner.module.css';

import cherry from '../../../public/assets/2025banners/cherry_v2.webp'
import smallflower from '../../../public/assets/2025banners/smallflower_v2.webp'
import moreBalloons from '../../../public/assets/2025banners/more_balloons_v2.webp'
import succulent from '../../../public/assets/2025banners/succulent_banner_v2.webp'
import desertflower from '../../../public/assets/2025banners/desert_flower_v2.webp'
import ghostranch from '../../../public/assets/2025banners/ghostranch_v2.webp'
import balloons from '../../../public/assets/2025banners/balloons.webp'
import cactus from '../../../public/assets/2025banners/cactus_v2.webp'
import whitesand from '../../../public/assets/2025banners/high_desert_v2.webp'

const images = [
  cactus,
  balloons,
  whitesand,
  cherry,
  smallflower,
  moreBalloons,
  succulent,
  desertflower,
  ghostranch
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
