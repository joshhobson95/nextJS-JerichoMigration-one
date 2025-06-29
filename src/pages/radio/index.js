import React from 'react';
import styles from './radio.module.css';
import logo1 from '../../../public/assets/bacastrees.jpg';
import logo2 from '../../../public/assets/justsprinklers.jpg';
import logo4 from '../../../public/assets/soilmender.jpg';
import soil from '../../../public/assets/soilutionslogo.png';
import AnimatedRadioMic from '@/components/AnimatedSVGs/AnimatedRadioMic';
import Countdown from '@/components/Countdown/Countdown';
import Head from 'next/head';

function Radio() {




  return (
    <div className={styles.Radio}>
<Head>
  <title>Radio Show – Gardening Tips & Advice | Jericho Nursery</title>

  <meta
    name="description"
    content="Tune in to the Jericho Nursery Radio Show for expert gardening advice, seasonal plant tips, and engaging discussions to help your garden thrive."
  />

  <meta
    property="og:title"
    content="Jericho Nursery Radio Show – Gardening Tips & Advice"
  />
  <meta
    property="og:description"
    content="Join the Jericho Nursery Radio Show for weekly gardening insights, plant care tips, and expert Q&A with our seasoned nursery team."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/radio" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/radio" />
</Head>



      <div className={styles.radio_welcome}>
        <h1>Garden Talk on KKOB</h1>
        <p>
  Join Rick Hobson on the Garden Talk Radio Show as he answers your garden questions live. Get expert tips and local advice to help your New Mexico garden thrive.
        </p>
      </div>

      <div className={styles.radio_body_main}>
        <div className={styles.radio_body_top}>
          <h1>Garden Talk</h1>
          <h3>TUNE IN TO "GARDEN TALK" </h3>
          <h3>11:00 AM SELECT SATURDAYS</h3>
          <h2>KKOB | 96.3 FM | 770 AM</h2>
        </div>


<div className={styles.radio_svg}> 
    <AnimatedRadioMic />
</div>

  

        <div className={styles.radio_body_mid}>
          <div className={styles.rbm_section}>
            <h2>Meet the Host</h2>
            <p>
              Rick Hobson is the owner of his own thriving business, Jericho Nursery, and host of the successful call-in gardening show, New Mexico Garden Talk on KKOB. Rick Hobson worked at Rowland’s for over 25 years and is considered an expert in the Albuquerque gardening community and around the state. Rick is on numerous boards, including the Japanese beetle taskforce; was acting president of the New Mexico Association of Independent Nursery Industries and is currently assisting the New Mexico chapter of the Colorado Nursery and Greenhouse Association to create testing programs for nursery, landscape, and greenhouse employees.
            </p>
          </div>
        </div>

        <h2 className={styles.cdh2}>Countdown to the next show</h2>
        <div className={styles.countdown_container}>
          <Countdown />
        </div>

        <div className={styles.radio_body_bottom}>
          <div className={styles.rbb_left}>
            <div className={styles.rbb_pic}>
              <img className={styles.kkob_banner} src="https://cdn.socast.io/6616/sites/124/2020/12/14121100/GARDENTALK-768x180.jpg" alt="KKOB Garden Talk" />
            </div>
            <span>You can listen to Garden Talk over the internet by visiting KKOB.com. Click the "Listen LIVE " button below to tune in</span>
            <a target="_blank" rel="noreferrer" href="https://www.newsradiokkob.com/new-mexico-garden-talk/">
              <button>Listen LIVE</button>
            </a>
          </div>

          <div className={styles.rbb_right}>
            <div className={styles.rbb_pic}>
              <img className={styles.gardentalk} src="https://www.omnycontent.com/d/programs/a7b0bd27-d748-4fbe-ab3b-a6fa0049bcf6/fdd9f235-b300-4ebc-93c5-afe200dfddf2/image.jpg?t=1681320560&size=small" alt="Garden Talk Podcast" />
            </div>
            <span>You can also listen to past boardcasts on our podcast, Garden Talk. Click the 'Podcast Link' button below to listen</span>
            <a target="_blank" rel="noreferrer" href="https://omny.fm/shows/garden-talk-new-mexico">
              <button>Podcast Link</button>
            </a>
          </div>
        </div>



        <div className={styles.radio_sponsors}>
          <h1>Garden Talk Sponsors</h1>
          <p>Support the proud sponsors of Jericho Nursery's Garden Talk Radio Show.</p>

          <div className={styles.radio_sponsor_pics}>
            <a href="https://www.bacastrees.com/" target="_blank" rel="noreferrer" title="Take me to their Website!">
              <img src={logo1.src} alt="Baca Trees" className={styles.partner_logos_radio} />
            </a>
            <a href="https://www.justsprinklers.com/" target="_blank" rel="noreferrer" title="Take me to their Website!">
              <img src={logo2.src} alt="Just Sprinklers" className={styles.partner_logos_radio} />
            </a>
            <a href="http://www.soilmender.com/" target="_blank" rel="noreferrer" title="Take me to their Website!">
              <img src={logo4.src} alt="Soil Mender" className={styles.partner_logos_radio} />
            </a>
            <a href="https://soilutions.net/" target="_blank" rel="noreferrer" title="Take me to their Website!">
              <img src={soil.src} alt="Soilutions" className={styles.partner_logos_radio} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
