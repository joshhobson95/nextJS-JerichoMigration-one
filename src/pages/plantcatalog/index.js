import React from 'react'
import styles from './plantcatalog.module.css'
import Link from 'next/link';
import Head from 'next/head';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
import Popup from '@/components/Popup/Popup';



function PlantCatalog() {


  return (
    <main className={styles.TypesofPlants}>

<Head>
      <title>New Mexico Plant Catalog | Jericho Nursery</title>

      <meta
        name="description"
        content="Explore our curated catalog of plants suited for Albuquerque and New Mexico. From trees and shrubs to perennials and cacti—see what Jericho Nursery carries and recommends."
      />

      <meta property="og:title" content="New Mexico Plant Catalog | Jericho Nursery" />
      <meta
        property="og:description"
        content="Browse our extensive list of plants well-suited to the New Mexico climate. Discover what Jericho Nursery carries and recommends for local gardens."
      />
      <meta
        property="og:image"
        content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/EvergreenContent/cashHouse.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/plantcatalog`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="New Mexico Plant Catalog | Jericho Nursery" />
      <meta
        name="twitter:description"
        content="Get local gardening insight with our comprehensive list of plants for the Albuquerque area. Trees, flowers, succulents & more from Jericho Nursery."
      />
      <meta
        name="twitter:image"
        content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/EvergreenContent/cashHouse.jpg"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      <link rel="canonical" href={`${baseUrl}/plantcatalog`} />
</Head>



    <div className={styles.top_welcome}>
    <h1>Plant Catalog</h1>
    <p>Discover a wide selection of plants perfect for New Mexico gardens</p>
    </div>

<div className={styles.top_body_main}>

<Popup />

<Link href='plantcatalog/annuals'>
  <article className={styles.plant_category}>
    <div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/annuals.jpg' alt='Annual plants available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className={styles.plant_text}>
     <h2>Annuals</h2>
     <p>Brighten your garden with bold color and seasonal charm from the annuals at Jericho Nursery. Perfect for flower beds, borders, containers, and hanging baskets, these fast-growing plants deliver nonstop blooms and instant impact all season long. Whether you're filling in gaps or designing a fresh display, our wide selection of annuals offers endless possibilities to personalize your outdoor space.</p>
    </div>
  </article>
</Link>

<Link href='plantcatalog/perennials'>
<article className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/bedding/chrysanthemums-3780098_1920.jpg' alt='Perrenial plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h2>Perennials</h2>
     <p>Perennials are long-lasting plants that return year after year, making them a low-maintenance and rewarding choice for any garden. Unlike annuals, they don’t need to be replanted each season, providing continuous beauty and structure. At Jericho Nursery, we carry a wide selection of perennials to add color and resilience to your landscape.</p>  

    </div>
  </article>
</Link>

<Link href='plantcatalog/houseplants'>
<article className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Houseplants/monstera-6817675_1280.jpg' alt='Houseplants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h2>Houseplants</h2>
     <p>Bring the beauty of the outdoors inside with lush, vibrant houseplants from Jericho Nursery. Whether you're looking to add a touch of green to your home office, brighten a shady corner, or create a calming indoor retreat, our diverse selection of houseplants makes it easy to find the perfect fit. From low-maintenance favorites to statement-making foliage, there’s something for every space and every level of plant care experience.</p>  

    </div>
  </article>
</Link>



<Link href='plantcatalog/trees'>
<article className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Tree.jpg' alt='Shade and Fruit Trees available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h2>Trees</h2>
     <p>Trees are a vital part of any landscape, providing much-needed shade, reducing heat, and offering protection from Albuquerque’s intense sun. They enhance curb appeal, improve air quality, and create a welcoming outdoor space. Jericho Nursery's diverse selection of shade trees, ornamental trees, conifers and even fruit trees are perfect foro adding beauty, privacy and even homegrown produce to your yard and garden.</p>

    </div>
  </article>
</Link>

<Link href='plantcatalog/shrubs'>
<article className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/shrub.jpg'alt='Shrubs available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className={styles.plant_text}>
     <h2>Shrubs</h2>
     <p>Shrubs are a versatile and low-maintenance addition to any landscape, providing year-round structure, color, and texture. These hardy plants offer seasonal blooms, lush foliage, and even drought tolerance, making them a great choice for Albuquerque’s climate. At Jericho Nursery, we carry a wide selection of shrubs, from flowering varieties to broadleaf evergreen options, perfect for creating natural privacy screens, windbreaks, or decorative focal points in your garden.</p>

    </div>
  </article>
</Link>
{/* <a href='/vines'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Vines/trumpetVine.jpg' alt='Vines available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
   <div className={styles.plant_text}>
     <h2>Vines</h2>
     <p>Xeric plants are ideal for water-wise gardening, thriving in dry, low-water conditions. These hardy plants are well-suited for Albuquerque’s hot, arid climate and require minimal irrigation once established. At Jericho Nursery, we offer a variety of xeric plants, including succulents and drought-tolerant shrubs, that add beauty and sustainability to your garden.</p>
    </div>
  </div>
</a> */}

<Link href='plantcatalog/xeric'>
<article className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/xeric.jpg' alt='Xeric plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h2>Xeric Plants</h2>
      <p>Xeric plants are ideal for water-wise gardening, thriving in dry, low-water conditions. These hardy plants are well-suited for Albuquerque’s hot, arid climate and require minimal irrigation once established. At Jericho Nursery, we offer a variety of xeric plants, including succulents, water-wise trees and drought-tolerant shrubs, that add beauty and sustainability to your garden.</p>
    </div>
  </article>
</Link>
  </div>
</main>
  )
}

export default PlantCatalog;
