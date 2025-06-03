import React from 'react';
import styles from './newsletter.module.css';
import Head from 'next/head';

function Newsletter() {
  return (
    <main className={styles.newsletter}>

    <Head>
  <title>Newsletter Sign-Up – Stay Connected with Jericho Nursery</title>

  <meta
    name="description"
    content="Stay up to date with gardening tips, seasonal specials, and exclusive updates from Jericho Nursery. Sign up for our newsletter and never miss a bloom!"
  />

  <meta
    property="og:title"
    content="Newsletter Sign-Up – Stay Connected with Jericho Nursery"
  />
  <meta
    property="og:description"
    content="Join our mailing list for expert gardening advice, upcoming events, and special offers from Jericho Nursery. Stay connected with Albuquerque’s favorite garden center!"
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/newsletter" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/newsletter" />
</Head>

  
      <div className={styles.newsletter_welcome}>
        <div className={styles.welcome_text}>
          <h1>Newsletter</h1>
          <p>Signup for our Digital Newsletter and Text Alerts</p>
        </div>
      </div>

      <div className={styles.newsletter_body}>
        <div className={styles.newsletter_body_top}>
          <div className={styles.newsletter_introduction}>
            <h2>Want more Jericho?</h2>
            <img className={styles.garden_phone} src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/gardenphone.jpg" alt="Join Jericho Nursery's Newsletter for all your garden updates" />
            <p>
              Sign up for Jericho Nursery’s free Newsletter and Text Alerts to stay updated on everything happening at the nursery each week! Our weekly email brings you the latest news, gardening tips, special promotions, and event announcements, so you never miss out on what’s blooming. Plus, our text alerts provide quick reminders about sales, workshops, and seasonal updates straight to your phone. It’s the best way to stay connected with Jericho Nursery and get expert advice for your garden—all at no cost to you!
            </p>
          </div>

          <div className={styles.newsletter_sign_up}>
            <h3 className={styles.newsletter_join}>Join Today</h3>
            <a href='https://link.lightworkdigital.com/widget/form/AKN6KeaUJe5kCpr3DfAc'>
              <button>Newsletter</button>
            </a>
            <a href='https://link.lightworkdigital.com/widget/form/JfFCfhH8lBBfZP26DxXr'>
              <button>Text Alerts</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Newsletter;
