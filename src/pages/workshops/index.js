import React from "react";
import styles from './workshops.module.css';
import SeminarIcon from "../../../public/svgs/SeminarIcon";
import seminar_pic from '../../../public/assets/seminar_pic_new.png'
import Head from "next/head";
import AnimatedWorkshop from "@/components/AnimatedSVGs/AnimatedWorkshop";

function Workshops() {




  return (
    <main className={styles.Seminars}>
<Head>
  <title>Gardening Workshops – Jericho Nursery</title>

  <meta
    name="description"
    content="Join hands-on gardening workshops at Jericho Nursery. Learn expert techniques, ask questions, and grow your skills alongside fellow gardening enthusiasts."
  />

  <meta
    property="og:title"
    content="Gardening Workshops – Learn & Grow at Jericho Nursery"
  />
  <meta
    property="og:description"
    content="Attend gardening workshops at Jericho Nursery to boost your knowledge, connect with our experts, and cultivate confidence in your garden."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/workshops" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/workshops" />
</Head>

      <div className={styles.seminars_welcome}>
        <h1>Workshops</h1>
        <p>
          Ignite your passion for gardening at Jericho Nursery's engaging workshops! Join us as we delve into the world of practical plant knowledge and hands-on experience.
        </p>
      </div>

      <div className={styles.seminars_body_main}>
        <div className={styles.seminars_body_top}>
          <h2>This Year's Workshops</h2>
          <img alt="Workshops at Jericho Nursery" src={seminar_pic.src} className={styles.seminar_pic} />
          <p>
            For a limited time, Jericho Nursery is offering their enriching workshops at an affordable price of just $10. As an added bonus, participants will receive a complimentary $10 gift card to the nursery...
          </p>
        </div>
    
  <div className={styles.workshop_svg}>
         <AnimatedWorkshop />
  </div>
       

        
          <div className={styles.seminars_list}>
    
            <ul>
              <li>Workshops will start back at a later date</li>
              <span>Thank you to all who attended</span>
            </ul>
          </div>
        </div>

        <div className={styles.seminar_pic_section}></div>


{/* Workshop Signup */}
        {/* <div className={styles.seminars_body_bottom}>
          <h1>Click the Button Below to Sign up for Workshops</h1> 
          <div className={styles.seminar_form}>
            <h2>This week's Workshop</h2>
            <a href="https://link.lightworkdigital.com/widget/form/vLlzQeIgoQN6azYxdwJB">
              <button className={styles.seminar_button}>Landscape Design</button>
            </a> 
          </div>
        </div> */}
     
    </main>
  );
}

export default Workshops;
