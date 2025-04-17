import React, {useEffect} from 'react'
import styles from './banner6.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Link from 'next/link';
import newffc from '../../../../public/assets/newnewffc.png'





function Banner6() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className={styles.banner6}>
        <div className={styles.b_img6}>
        <div className={styles.b_6}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className={styles.b_2}>
            <div className={styles.inner_banner_ffc}>
            <img className={styles.banner_ffc_logo} src={newffc.src}/>
                </div>
                <h4 className={styles.b_h52}>Introducing the New 
            <span id={styles.word1}>Frequent</span>
            <span id={styles.word2}>Flower</span>
            <span id={styles.word3}>Club</span>
            </h4>
            </div>
            <div>
            <img className={styles.banner_ffc} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/main-Flower'/>

            </div>


<h4 className={styles.b_h46}>with a new points program, rewards and more. Click below for more info!</h4>
<div className={styles.banner_6_lower}>

<Link href='/ffc'>
            <button className={styles.banner_button6}>Learn More</button>
</Link>

</div>





           
        </div>
        </div>
    </div>
  )
}

export default Banner6;