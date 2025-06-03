
import React, { useEffect, useRef, useState } from 'react';
import DeliveryVan from '../../../public/svgs/DeliveryVan';

const AnimatedDelivery = () => {
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
        rootMargin: '-20% 0px -20% 0px',
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
      {isVisible && <DeliveryVan />}
    </div>
  );
};

export default AnimatedDelivery;
