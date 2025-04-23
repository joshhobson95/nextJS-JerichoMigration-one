import React, {useEffect} from 'react'
import styles from './banner7.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Link from 'next/link';




function Banner7() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className={styles.banner7}>
        <div className={styles.b_img7}>
        <div className={styles.b_7}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <h2 className={styles.b_h527}>Discover our New Plant Catalog</h2>
            <p className={styles.b_h47}>Explore a World of Greenery – Find Plants Perfect for New Mexico Gardens</p>
            <div className={styles.banner_7_lower}>
            <Link href='/plantcatalog'>
                        <button className={styles.banner_button7}>Go There</button>
            </Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner7;