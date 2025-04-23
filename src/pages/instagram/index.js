import React from 'react';
import styles from './instagram.module.css';
import InstagramWidget from './InstagramWidget';
import Head from 'next/head';

function Instagram() {
  return (
    <main className={styles.instagram_outer_shell}>
      <Head>
        <title>Jericho Nursery - Instagram</title>
        <meta name="description" content="Follow Jericho Nursery on Instagram for the latest gardening tips, products, and updates." />
        <meta property="og:title" content="Jericho Nursery on Instagram" />
        <meta property="og:description" content="Join us on Instagram for gardening inspiration, product highlights, and expert tips from Jericho Nursery." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.instagram.com/jerichonursery/" />
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