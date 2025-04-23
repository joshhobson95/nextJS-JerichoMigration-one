import React, {useEffect} from 'react'
import styles from './banner.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Link from 'next/link';



function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className={styles.banner}>
        <div className={styles.b_img}>
        <div className={styles.b_1}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className={styles.b_2}>
            <h2 className={styles.b_h42}> Garden Talk with Rick Hobson</h2>
            <img src='https://www.omnycontent.com/d/programs/a7b0bd27-d748-4fbe-ab3b-a6fa0049bcf6/fdd9f235-b300-4ebc-93c5-afe200dfddf2/image.jpg?t=1681320560&size=small' alt='zebra_plant' className={styles.banner_img1}/>
            </div>
<Link href='/radio'>
            <button className={styles.banner_button}>Go to Radio & Podcast Page</button>
</Link>

<h4 className={styles.b_h4}>Listen Live every other Saturday on KKOB | 96.3 FM</h4>

<div className={styles.spotify_container}>
<p className={styles.spotify_p}>Podcast Episodes available on Spotify</p>
<img className={styles.spotify} src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' alt='spotify' />
</div>



           
        </div>
        </div>
    </section>
  )
}

export default Banner