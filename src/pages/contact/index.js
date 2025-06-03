import React from 'react'
import MapButton from '../../components/Contact/MapButton'
import EmailButton from '../../components/Contact/EmailButton'
import CallButton from '../../components/Contact/CallButton'
import Head from 'next/head'
import styles from './contactus.module.css'

function ContactUs() {
  return (
    <main className={styles.contact_us}>
<Head>
  <title>Contact Us | Jericho Nursery</title>

  <meta
    name="description"
    content="Reach out to Jericho Nursery for inquiries, questions, or feedback. We're here to help with expert gardening advice and excellent customer service in Albuquerque."
  />

  <meta property="og:title" content="Contact Us | Jericho Nursery" />
  <meta
    property="og:description"
    content="Reach out to Jericho Nursery for inquiries, questions, or feedback. We're here to help with expert gardening advice and excellent customer service in Albuquerque."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/contact" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/contact" />
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