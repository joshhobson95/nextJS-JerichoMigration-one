import React, {useEffect} from 'react'
import styles from './banner2.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Link from 'next/link';
import newffc from '../../../../public/assets/newnewffc.png'





function Banner2() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className={styles.banner2}>
        <div className={styles.b_img2}>
        <div className={styles.b_2}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className={styles.b_22}>
                <h2>TJ’s Seed Sack Pumpkin Growing Contest is Back!</h2>
            <div className={styles.b_22_inner}>
                <img className={styles.TJs} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/2025April24/SEEDSACKv2.1-1024x878.jpg' />
                <ul>
                    <li>Join Jericho Nursery, KKOB, and El Pinto for this year’s ultimate pumpkin-growing showdown!</li>
                    <li>Pick up your seeds at Jericho Nursery and sign up in person or online through KKOB (link below).</li>
    
                </ul>
            </div>
        </div>
       



<div className={styles.banner_2_lower}>

<a href='/ffc'>
            <button className={styles.banner_button2}>Sign Up</button>
</a>

</div>





           
        </div>
        </div>
    </section>
  )
}

export default Banner2;