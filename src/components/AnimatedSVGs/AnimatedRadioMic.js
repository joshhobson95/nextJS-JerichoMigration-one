// components/AnimatedRadioMic.js
import React, { useEffect, useRef, useState } from 'react';
import RadioMic from '../../../public/svgs/RadioMic';

const AnimatedRadioMic = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      {
        rootMargin: '0px',
        threshold: 1, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible && <RadioMic />}
    </div>
  );
};

export default AnimatedRadioMic;
