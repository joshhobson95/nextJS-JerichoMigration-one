import React from 'react'
import video from '../../../../public/assets/Video.png'
import videocactus from '../../../../public/assets/videocactus.jpg'
import Link from 'next/link'
import styles from './videoscontainer.module.css'


function VideosContainer() {
    return (
<div className={styles.home_container_outer}>
    <div className={styles.jm_container}>
        <div className={styles.home_container_header}>
            <div className={styles.map_icon}>
                <img src={video.src} className={styles.c_icon} alt='' />
            </div>
            <div className={styles.home_container_header_text}>
                <h3>Jericho's Videos</h3>
            </div>
        </div>

        <div className={styles.hc_body}>
            <div className={styles.hc_img}>
                <img src={videocactus.src} className={styles.c_image} alt='Jericho_Videos' />
            </div>
            <div className={styles.jm_paragraph}>
                <p>
                    We have been creating more and more Youtube Videos for Gardeners who want to learn more and more about everything Albuquerque Gardening. Check out our Youtube page by clicking the button below!
                </p>
                <Link href='/videos'>
                    <button className={styles.jm_button}>Go to our Videos Page</button>
                </Link>
            </div>
        </div>
    </div>
</div>

      
      )
}

export default VideosContainer;