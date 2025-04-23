import React from 'react';
import Link from 'next/link';
import styles from './xeric.module.css';
import Head from 'next/head';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function Xeric() {
  return (
    <div className={styles.Xeric}>
      <Head>
  <title>Xeric Plants for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Explore a wide variety of xeric plants perfect for New Mexico’s arid climate. Jericho Nursery offers drought-tolerant plants for landscaping, including cacti, yucca, agave, and more."
  />
  <meta property="og:title" content="Xeric Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Discover drought-tolerant xeric plants that thrive in New Mexico’s dry climate. Jericho Nursery offers a range of low-water plants for every landscape need."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/xeric.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/xeric`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Xeric Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Shop xeric plants that thrive in New Mexico’s arid climate. Jericho Nursery offers a variety of drought-resistant plants, including cacti, yucca, agave, and more."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/xeric.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/xeric`} />
</Head>

      <div className={styles.xeric_welcome}>
        <h1>New Mexico Xeric Plants</h1>
      </div>

      <div className={styles.xeric_body}>

         <div className={styles.xeric_body_top_text}>
        <h1>Xeriscaping Basics</h1>
        <p>Xeriscaping is a water-efficient landscaping method that uses drought-tolerant plants to create beautiful, sustainable outdoor spaces with minimal irrigation. In Albuquerque’s arid climate, xeric plants thrive by adapting to low rainfall, intense sun, and sandy or rocky soils, making them a smart choice for both residential and commercial landscapes. By incorporating xeric trees, shrubs, cacti, yucca, and ground covers, homeowners can reduce water usage, lower maintenance needs, and create a resilient, eco-friendly yard that stays vibrant year-round.</p>
        <br></br>
      <p>But xeriscaping is more than just choosing drought-tolerant plants—it’s a strategic approach to designing a landscape that works in harmony with New Mexico’s unique environment.</p>


        <h2 className={styles.xeric_core_concepts}>Core Concepts</h2>
        <p>At its core, xeriscaping is about balancing beauty, sustainability, and water efficiency. It starts with selecting the right plants—those that can thrive in dry conditions while adding visual appeal to your yard. Native and xeric plants require less water and support the local ecosystem by attracting pollinators and wildlife. Beyond plant selection, soil health plays a key role, helping retain moisture and provide essential nutrients. Efficient irrigation methods, such as drip systems, ensure water is used effectively, while mulch helps keep the soil cool and minimizes evaporation. Limiting high-water turf areas and opting for low-maintenance plants allows for a landscape that is both stunning and sustainable.</p>
        <br></br>
        <p>Xeriscaping isn’t just about reducing water use—it’s about creating a thriving, resilient outdoor space that works with the natural climate.</p>
    

    
   
    </div>

        <div className={styles.xeric_categories}>
          <div className={styles.xeric_catergories_inner}>
            <Link href='xeric/cacti'>
              <h2>Cactus, Yucca, & Agave</h2>
              <img
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/cacti.jpg'
                alt='Cactus, Yucca and Agave in Albuquerque, New Mexico and surrounding areas'
              />
            </Link>
          </div>

          <div className={styles.xeric_catergories_inner}>
            <Link href='xeric/xerictrees'>
              <h2>Best Xeric Trees</h2>
              <img
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/vitex.jpg'
                alt='Xeric Trees in Albuquerque, New Mexico and surrounding areas'
              />
            </Link>
          </div>

          <div className={styles.xeric_catergories_inner}>
            <Link href='xeric/xericshrubs'>
              <h2>Best Xeric Shrubs</h2>
              <img
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/shrubs/occotillio.jpg'
                alt='Xeric Shrubs in Albuquerque, New Mexico and surrounding areas'
              />
            </Link>
          </div>

          <div className={styles.xeric_catergories_inner}>
            <Link href='xeric/xericbedding'>
              <h2>Xeric Bedding and Groundcovers</h2>
              <img
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/succulent.jpg'
                alt='Xeric Bedding and Groundcovers in Albuquerque, New Mexico and surrounding areas'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xeric;
