import React from 'react'
import styles from './perennials.module.css'
import Link from 'next/link'
import Head from 'next/head'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
import PlantSlider from '@/components/PlantSlider/PlantSlider';
import perennialdata from '@/plantdata/Perennials/PerennailData';


function Perennials() {
  return (
    <div className={styles.Perennials}>
      <Head>
  <title>Perennial Plants for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Browse our selection of perennials that will return year after year in New Mexico gardens. From hardy flowers to ornamental plants, perennials offer long-lasting beauty and low-maintenance care."
  />
  <meta property="og:title" content="Perennial Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Discover a wide variety of perennials perfect for New Mexico's climate. These long-lasting plants add beauty to your garden year after year, from blooming flowers to ornamental shrubs."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/penstemon-4925491_1920.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/perennials`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Perennial Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Shop for perennials that thrive in New Mexico’s climate. These low-maintenance plants return year after year, adding lasting beauty and structure to your garden."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/penstemon-4925491_1920.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/perennials`} />

</Head>

      <div className={styles.perennials_welcome}>
        <h1>New Mexico Perennials</h1>
      </div>

      <div className={styles.perennials_body}>

        <div className={styles.perennials_body_top_text}>
          <h2>Identifying Perennials</h2>
          <p>Perennial plants are those that live for more than two years, often blooming and producing seeds multiple times throughout their lifespan. Unlike annuals, perennials do not die after a single growing season. Instead, they go dormant during colder months and regrow when conditions are favorable again. Common examples of perennials include coreopsis, peonies, and salvia. These plants may take a few years to reach full maturity but can provide beautiful blooms and foliage year after year with proper care. Some perennials, like certain types of roses, require minimal maintenance and can thrive in various climates, making them a popular choice for gardeners. </p>
          <h2>Somewhere in Between</h2>  
          <p>Not all plants fit neatly into the category of annual or perennial—some exist in a middle ground, behaving differently depending on the climate. Plants like geraniums, petunias, and snapdragons are technically perennials in warmer regions but are often treated as annuals in colder areas where they can't survive harsh winters. Others, like certain salvias and lavender varieties, may persist through mild winters but struggle in extreme conditions. The good news? Many of these "somewhere-in-between" plants can be overwintered indoors, in greenhouses, or with protective mulch, allowing them to return year after year. By understanding your local climate and plant hardiness, you can extend the life of many species that might otherwise be considered one-season wonders.</p>  
        </div>

        <div className={styles.plant_examples}>


        <div className={styles.perennial_catalog_sub_section}>
            <h2 className={styles.perennial_catalog_title}>Bedding Perennials</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={perennialdata.bedding} />
            </div>
          </div>

        <div className={styles.perennial_catalog_sub_section}>
            <h2 className={styles.perennial_catalog_title}>Drought Tolerant Perennials</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={perennialdata.droughttolerant} />
            </div>
          </div>

        <div className={styles.perennial_catalog_sub_section}>
            <h2 className={styles.perennial_catalog_title}>Shade Loving Perennails</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={perennialdata.shadeloving} />
            </div>
          </div>
        
    
        

          <div className={styles.perennial_mid_page}>
            <Link className={styles.plant_catalog_link} href='xeric'>
              <h4>Searching for Xeric?</h4>
              <p>Click Here to view our Xeric Section</p>
            </Link>
          </div>

          <div className={styles.perennials_body_bottom_text}>
            <h2>Year after Year</h2>
            <p>Not all perennials are created equal—while some can thrive for decades, others have much shorter lifespans. Take columbine, for example; this delicate perennial often lasts just a few years before fading, relying on self-seeding to persist in a garden. On the other end of the spectrum, plants like peonies can live for generations, returning stronger each year. This contrast is what makes perennials so unique—some are fleeting, offering only a handful of seasons, while others become permanent fixtures in the landscape. By choosing a mix of long-lived and short-lived perennials, you can create a garden that evolves beautifully over time.</p>  
          </div>

        </div>

      </div>
    </div>
  )
}

export default Perennials
