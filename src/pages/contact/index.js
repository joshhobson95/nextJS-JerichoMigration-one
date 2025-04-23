import React from 'react'
import MapButton from './MapButton'
import EmailButton from './EmailButton'
import CallButton from './CallButton'
import Head from 'next/head'
import styles from './contactus.module.css'

function ContactUs() {
  return (
    <main className={styles.contact_us}>
<Head>
        <title>Contact Us - Jericho Nursery</title>
        <meta name="description" content="Contact Jericho Nursery for any inquiries, questions, or feedback. We are here to assist you with your gardening needs and provide excellent customer service." />
        <meta property="og:title" content="Contact Us - Jericho Nursery" />
        <meta property="og:description" content="Contact Jericho Nursery for any inquiries, questions, or feedback. We are here to assist you with your gardening needs and provide excellent customer service." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Head>



        <div className={styles.contact_us_welcome}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you</p>
        </div>

        <div className={styles.contact_us_body}>

        <div className={styles.contact_pic_container}>
        <img alt='Jericho Nursery' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/EvergreenContent/cashHouse.jpg' className={styles.contact_pic} />
        </div>



            <h2>Phone</h2>
            <p>+1 (505) 899-7555</p>
            <div className={styles.call_button}>
            <CallButton />
            </div>


            <h2>Address</h2>
            <p>101 Alameda Blvd NW
            Albuquerque, NM 87114</p>
            <div className={styles.map_button}>
            <MapButton />
            </div>


            <h2>Email</h2>
            <p>Please Complete Captcha</p>
            <div className={styles.email_button}>
            <EmailButton />
            </div>
        </div>




    </main>
  )
}

export default ContactUs