import React from 'react';
import styles from './videos.module.css';
import LatestYouTube from '../../components/LatestYoutube/LatestYoutube';
import Head from 'next/head';

function Videos() {
  const channelId = 'UCzQXGhQyfMHt_e8wH9drt7g';

  return (
    <main className={styles.Videos}>
      <Head>
        <title>Jericho Nursery's Video Page</title>
        <meta
          name="description"
          content="Explore Jericho Nursery's collection of informative and engaging YouTube videos. Discover expert gardening tips, product reviews, and much more to enhance your gardening experience."
        />
        <meta
          name="keywords"
          content="Jericho Nursery, YouTube videos, gardening tips, plant care, gardening supplies, Albuqueruque, New Mexico, Southwest, xeric, xeriscape, flower, frequent, club, alameda, north valley, abq, horticulture, garden experts, hobson, jericho, nursery, all, your, yard, and, garden, needs"
        />
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
