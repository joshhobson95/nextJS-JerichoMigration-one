import React, { useState } from 'react';
import styles from './partners.module.css';
import logo1 from '../../../public/assets/bacastrees.jpg';
import logo2 from '../../../public/assets/justsprinklers.jpg';
import logo3 from '../../../public/assets/rehms.jpg';
import logo4 from '../../../public/assets/soilmender.jpg';
import logo5 from '../../../public/assets/505outside.jpg';
import soil from '../../../public/assets/soilutionslogo.png';
import suregreen from '../../../public/assets/suregreen.png';
import Head from 'next/head';

function Partners() {
  const [expandedBio, setExpandedBio] = useState(null);

  const toggleBio = (partner) => {
    setExpandedBio((prevBio) => (prevBio === partner ? null : partner));
  };

  return (
    <main className={styles.Partners}>
      <Head>
        <title>Our Partners - Jericho Nursery</title>
        <meta
          name="description"
          content="Discover our trusted partners who collaborate with Jericho Nursery to bring you the best gardening products and services."
        />
        <meta property="og:title" content="Partners of Jericho - Jericho Nursery" />
        <meta
          property="og:description"
          content="Discover our trusted partners who collaborate with Jericho Nursery to bring you the best gardening products and services."
        />
        <meta
          property="og:image"
          content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.partners_welcome}>
        <h1>Partners of Jericho</h1>
        <p>
          These are our proud sponsors. We can guarantee that these brands are some of the most reliable in Albuquerque, other than us.
        </p>
      </div>

      <div className={styles.partners_body}>
        <div className={styles.partners_body_top}>
          <h2>Garden Talk Sponsors</h2>
          <p>Support the proud sponsors of Jericho Nursery's Garden Talk Radio Show.</p>
          <div className={styles.gts_pics}>
            <a
              href="https://www.bacastrees.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo1.src} alt="Baca Trees" className={styles.partner_logos} />
            </a>
            <a
              href="https://www.justsprinklers.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo2.src} alt="Just Sprinklers" className={styles.partner_logos} />
            </a>
            <a
              href="http://www.soilmender.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo4.src} alt="Soil Mender" className={styles.partner_logos} />
            </a>
            <a
              href="https://soilutions.net/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={soil.src} alt="Soilutions" className={styles.partner_logos} />
            </a>
          </div>

          <div className={styles.gts_bios}>
            <div
              className={`${styles.gts_bio_one} ${expandedBio === 'Baca' ? styles.expanded : ''}`}
              onClick={() => toggleBio('Baca')}
            >
              <div className={styles.gts_bio_one_inner}>
                <button>{expandedBio === 'Baca' ? '-' : '+'}</button>
                <h2>Baca's Trees</h2>
              </div>
              {expandedBio === 'Baca' && (
                <p>
                  Since 1980, Baca’s Trees has been caring for trees and shrubs throughout the community, offering ISA Certified Arborist Services in Albuquerque and throughout New Mexico.
                </p>
              )}
            </div>

            <div
              className={`${styles.gts_bio_two} ${expandedBio === 'Sprinklers' ? styles.expanded : ''}`}
              onClick={() => toggleBio('Sprinklers')}
            >
              <div className={styles.gts_bio_two_inner}>
                <button>{expandedBio === 'Sprinklers' ? '-' : '+'}</button>
                <h2>Just Sprinklers</h2>
              </div>
              {expandedBio === 'Sprinklers' && (
                <p>
                  Whether you need help from a team of specialists to install your new sprinkler system, need repairs for your current system, or you want to do-it-yourself, Just Sprinklers™ is here for all your needs.
                </p>
              )}
            </div>

            <div
              className={`${styles.gts_bio_three} ${expandedBio === 'SoilMender' ? styles.expanded : ''}`}
              onClick={() => toggleBio('SoilMender')}
            >
              <div className={styles.gts_bio_three_inner}>
                <button>{expandedBio === 'SoilMender' ? '-' : '+'}</button>
                <h2>Soil Mender Products</h2>
              </div>
              {expandedBio === 'SoilMender' && (
                <p>
                  At Soil Mender, we have the tools and technologies to help growers address old and new challenges to yield and quality potential.
                </p>
              )}
            </div>

            <div
              className={`${styles.gts_bio_four} ${expandedBio === 'Soilutions' ? styles.expanded : ''}`}
              onClick={() => toggleBio('Soilutions')}
            >
              <div className={styles.gts_bio_four_inner}>
                <button>{expandedBio === 'Soilutions' ? '-' : '+'}</button>
                <h2>Soilutions</h2>
              </div>
              {expandedBio === 'Soilutions' && (
                <p>
                  Soilution's promise is to maintain the utmost focus on providing premium quality compost, soil and mulch, top notch customer service and on helping to create a sustainable future for our children and the next generation.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.partners_body_two}>
        <div className={styles.partners_body_bottom}>
          <h2>Local Companies We Do Business With</h2>
          <div className={styles.lp_img_container}>
            <img
              src="https://lirp.cdn-website.com/d0a1fad2/dms3rep/multi/opt/logo-468x143-255w.png"
              alt="Millers Feed and Supply LLC"
              className={styles.millers}
            />
            <img src={suregreen.src} alt="Sure Green" className={styles.suregreen} />
            <img src={logo5.src} alt="505 Outside" className={styles.five_oh_five} />
            <img
              src="https://images.squarespace-cdn.com/content/v1/619d2e8fd4dd083c86697cc9/223556e8-8c18-4fae-a4a2-7a60ca3d3ffb/ECM+logo+1.jpg?format=1500w"
              alt="East Central Ministries"
              className={styles.ecm}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/elpinto.webp"
              alt="El Pinto"
              className={styles.elpinto}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/vics.png"
              alt="Vics Daily Cafe"
              className={styles.vics}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/daves.png"
              alt="Daves Valley Grill"
              className={styles.daves}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Construction.jpg"
              alt="Construction Rental & Supply"
              className={styles.daves}
            />
          </div>
        </div>
      </div>

      <div className={styles.partners_conclusion}>
        <h4>A Special thanks to all our Supporters</h4>
      </div>
    </main>
  );
}

export default Partners;
