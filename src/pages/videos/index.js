import React from 'react';
import styles from './videos.module.css';
import LatestYouTube from '../../components/LatestYoutube/LatestYoutube';
import Head from 'next/head';

function Videos() {
  const channelId = 'UCzQXGhQyfMHt_e8wH9drt7g';

  return (
    <main className={styles.Videos}>
 <Head>
  <title>Gardening Videos & Tips – Jericho Nursery</title>

  <meta
    name="description"
    content="Watch gardening videos from Jericho Nursery! Explore expert tips, plant care advice, product demos, and local gardening inspiration—all in one place."
  />

  <meta
    name="keywords"
    content="Jericho Nursery, gardening videos, plant care, gardening tips, Albuquerque, New Mexico, xeriscape, flower club, garden experts, horticulture, yard and garden needs"
  />

  <meta
    property="og:title"
    content="Gardening Videos & Expert Tips – Jericho Nursery"
  />
  <meta
    property="og:description"
    content="Explore Jericho Nursery's video library for expert gardening tips, how-to guides, and product insights tailored to New Mexico’s unique climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Jericho-logo.png"
  />
  <meta property="og:type" content="video.other" />
  <meta property="og:url" content="https://www.jerichonursery.com/videos" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/videos" />
</Head>


      <div className={styles.videos_welcome}>
        <h1>Jericho's Videos</h1>
        <p>
          Welcome to Jericho Nursery's video hub! Explore the beauty of plants, gardening tips, and nature's artistry. Whether you're a pro or just love greenery, our videos entertain and educate. Enjoy the show!
        </p>
      </div>

      <div className={styles.videos_body_main}>
        <div>
          <LatestYouTube channelId={channelId} />
        </div>

        <div className={styles.video_bottom_half}>
          <h2>
            Make sure you check out the Jericho Nursery Youtube Page to check out ALL of our videos from throughout the years. Click the button below to be redirected to our YouTube Page. Don't forget to like and subscribe!
          </h2>

          <a href="https://www.youtube.com/@JerichoNursery">
            <button className={styles.vid_button}>Go to YouTube</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Videos;
