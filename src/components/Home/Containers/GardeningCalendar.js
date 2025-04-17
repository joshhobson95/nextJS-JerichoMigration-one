import React from 'react'
import Link from 'next/link'
import icon2 from '../../../../public/assets/transparent.png'
import garden from '../../../../public/assets/garden.jpg'
import styles from './gardeningcalendar.module.css'

function GardeningCalendar() {

    function formatDate(newDate) {
        const months = {
          0: 'January',
          1: 'February',
          2: 'March',
          3: 'April',
          4: 'May',
          5: 'June',
          6: 'July',
          7: 'August',
          8: 'September',
          9: 'October',
          10: 'November',
          11: 'December',
        }
       
        const d = newDate
 
        const monthName = months[d.getMonth()]
        const formatted = ` ${monthName} `
        return formatted.toString()
      }
     



    return (

        <div className={styles.home_container_outer}>
        <div className={styles.gc_container}>
            <div className={styles.home_container_header}>
                <div className={styles.hc_icon}>
                    <img src={icon2.src} className={styles.c_icon} alt='' />
                </div>
                <div className={styles.home_container_header_text}>
                    <h3>{formatDate(new Date())} Gardening Calendar</h3>
                </div>
            </div>
    
            <div className={styles.hc_body}>
                <div className={styles.hc_img}>
                    <img src={garden.src} className={styles.c_image} alt='' />
                </div>
                <div className={styles.hc_paragraph}>
                    <p>
                        Did you know Jericho offers a Gardening Calendar? Click below to get advice from the Gardening Angels on exactly what you should be doing this month to keep up with your garden's wants and needs.
                    </p>
                    <Link href='/gardeningcalendar'>
                        <button className={styles.gc_button}>Check It Out</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
    
    
        
      
      )
}

export default GardeningCalendar