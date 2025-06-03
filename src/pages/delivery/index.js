import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './delivery.module.css'; // You will need to migrate your styles to this file
import plantbox from '../../../public/assets/plantbox.jpg'
import CallButton from '../../components/Contact/CallButton';
import AnimatedDelivery from '@/components/AnimatedSVGs/AnimatedDelivery';






function Delivery() {
  const revealRef2 = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const revealElement = revealRef2.current;
    if (revealElement) {
      const revealTop = revealElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (revealTop < windowHeight) {
        setTimeout(() => {
          setIsAnimated(true);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.delivery}>
      <Head>
        <title>Delivery Service - Jericho Nursery</title>
        <meta name="description" content="Find fast and reliable delivery service for your plant parcels." />
        <meta name="keywords" content="delivery service, fast delivery, reliable delivery" />
      </Head>

      <div className={styles.delivery_welcome}>
        <h1>Delivery and Planting</h1>
        <p>
          Get your green fix without breaking a sweat. Let us deliver and plant, so you don't break a leg! (or a nail for that matter)
        </p>
      </div>

      <div className={styles.delivery_body}>
        <h2>Jericho's Delivery Options</h2>


       
          <div className={styles.delivery_van_svg}>
            <AnimatedDelivery />
          </div>
        

        <div className={styles.delivery_container}>
          <div ref={revealRef2}></div>
          <h2>Delivery Range</h2>
          <p>
            We deliver to Albuquerque and the Greater Albuquerque Area including Four Hills, the South Valley, West Mesa, Rio Rancho, Bernalillo, Placitas, East Mountains, Los Lunas, and Belen. Please ask about delivery options for areas like Santa Fe, Grants, or Socorro.
          </p>
        </div>

        <div className={styles.delivery_container}>
          <h2>Pricing</h2>
          <p>Pricing for delivery ranges from $75-$150 for most areas excluding large loads.</p>
        </div>

        <div className={styles.delivery_container}>
          <h2>Planting</h2>
          <p>Planting is not included in the delivery charge but we do offer it. Contact us for more information.</p>
        </div>

        <div className={styles.delivery_img_container}>
          <img src={plantbox.src} alt="Plant Delivery Albuquerque" className={styles.delivery_img} />
        </div>

        <div className={styles.delivery_button}>
          <h2>Need some specifics?</h2>
          <p>Call us and we can get the ball rolling</p>
          <CallButton />
        </div>
      </div>
    </main>
  );
}

export default Delivery;
