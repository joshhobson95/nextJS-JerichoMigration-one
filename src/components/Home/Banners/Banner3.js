import React, {useEffect} from 'react'
import styles from './banner3.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Link from 'next/link';




function Banner3() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className={styles.banner3}>
        <div className={styles.b_img3}>
        <div className={styles.b_3}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
    <div className={styles.b3_main}>
        <div className={styles.banner_3_upper}>
            <h2 className={styles.b_h3}>Vote For US!</h2>
            <p className={styles.b_j3}>in ABQ Magazine Best of City 2025</p>
            <p className={styles.b_j31}>Best Garden Center</p>
        </div>

            <div className={styles.banner_3_lower}>
                <img className={styles.boc_medal} src='https://www.abqthemag.com/wp-content/uploads/2025/05/BOC-2025-medallion-scaled.png' />
            </div>
        </div>
       <div className={styles.b3_button_container}>
        <a href='https://www.abqthemag.com/best-of-the-city/' target='_blank' rel="noreferrer">
     <button className={styles.banner_button3}>Vote Now</button>
        </a>
       </div>
        </div>
        
        
        </div>
    </section>
  )
}

export default Banner3;