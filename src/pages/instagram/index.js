import React from 'react';
import styles from './instagram.module.css';
import InstagramWidget from '../../components/Instagram/InstagramWidget';
import Head from 'next/head';

function Instagram() {
  return (
    <main className={styles.instagram_outer_shell}>
<Head>
  <title>Instagram | Follow Us for Gardening Inspiration – Jericho Nursery</title>

  <meta
    name="description"
    content="Follow Jericho Nursery on Instagram for gardening inspiration, seasonal tips, behind-the-scenes updates, and the latest products from Albuquerque’s favorite garden center."
  />

  <meta property="og:title" content="Instagram | Follow Us for Gardening Inspiration – Jericho Nursery" />
  <meta
    property="og:description"
    content="Follow Jericho Nursery on Instagram for gardening inspiration, seasonal tips, behind-the-scenes updates, and the latest products from Albuquerque’s favorite garden center."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Jericho-logo.png"
  />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://www.jerichonursery.com/instagram" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/instagram" />
</Head>

      <div className={styles.instagram_welcome}>
        <h1>Instagram Gallery</h1>
        <br />
        <p>Check out our most recent Instagram posts</p>
      </div>

      <div className={styles.instagram_body}>
        <InstagramWidget beholdId="hJXqtcIy46tZjdJmvtEz" />

        <div className={styles.instagram_bottom_container}>
          <div className={styles.instagram_bottom}>
            <h2>Wanna see more?</h2>
            <h2>Follow us on Instagram</h2>
            <a href="https://www.instagram.com/jerichonursery/?hl=en" target="_blank" rel="noreferrer">
              <button>Instagram Page</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Instagram;