import React from 'react'
import styles from './plantcatalog.module.css'
import Link from 'next/link';


function PlantCatalog() {


  return (
    <div className={styles.TypesofPlants}>
    <div className={styles.top_welcome}>
    <h1>Plant Catalog</h1>
<p>Discover a wide selection of plants perfect for New Mexico gardens</p>
</div>

<div className={styles.top_body_main}>



<Link href='plantcatalog/annuals'>
  <div className={styles.plant_category}>
    <div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/annuals.jpg' alt='Annual plants available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className={styles.plant_text}>
     <h3>Annuals</h3>
     <p>Annuals are the showstoppers of the garden, bursting with vibrant color and energy for a single growing season. From sunflowers to marigolds, these fast-growing plants bloom brilliantly before completing their life cycle in just one year. Explore a wide variety of annuals to create stunning, ever-changing displays in your garden each year.</p>


    </div>
  </div>
</Link>

<Link href='plantcatalog/perennials'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/penstemon-4925491_1920.jpg' alt='Perrenial plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h3>Perennials</h3>
     <p>Perennials are long-lasting plants that return year after year, making them a low-maintenance and rewarding choice for any garden. Unlike annuals, they don’t need to be replanted each season, providing continuous beauty and structure. At Jericho Nursery, we carry a wide selection of perennials to add color and resilience to your landscape.</p>  

    </div>
  </div>
</Link>

{/* <a href='/roses'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/roses.jpg' alt='Roses available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_text'>
     <h3>Roses</h3>
      <p>Roses are cherished perennials, known for their beautiful blooms and fragrance. They thrive in Albuquerque’s dry climate, with varieties like the Knock Out rose. We receive over 50 varieties from Week's Roses around March to April, offering plenty of options for any garden.</p>
    </div>
  </div>
</a> */}

<Link href='plantcatalog/trees'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Tree.jpg' alt='Shade and Fruit Trees available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h3>Trees</h3>
     <p>Trees are a vital part of any landscape, providing much-needed shade, reducing heat, and offering protection from Albuquerque’s intense sun. They enhance curb appeal, improve air quality, and create a welcoming outdoor space. Jericho Nursery's diverse selection of shade trees, ornamental trees, conifers and even fruit trees are perfect foro adding beauty, privacy and even homegrown produce to your yard and garden.</p>

    </div>
  </div>
</Link>

<Link href='plantcatalog/shrubs'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/shrub.jpg'alt='Shrubs available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className={styles.plant_text}>
     <h3>Shrubs</h3>
     <p>Shrubs are a versatile and low-maintenance addition to any landscape, providing year-round structure, color, and texture. These hardy plants offer seasonal blooms, lush foliage, and even drought tolerance, making them a great choice for Albuquerque’s climate. At Jericho Nursery, we carry a wide selection of shrubs, from flowering varieties to broadleaf evergreen options, perfect for creating natural privacy screens, windbreaks, or decorative focal points in your garden.</p>

    </div>
  </div>
</Link>
{/* <a href='/vines'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Vines/trumpetVine.jpg' alt='Vines available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
   <div className={styles.plant_text}>
     <h3>Vines</h3>
     <p>Xeric plants are ideal for water-wise gardening, thriving in dry, low-water conditions. These hardy plants are well-suited for Albuquerque’s hot, arid climate and require minimal irrigation once established. At Jericho Nursery, we offer a variety of xeric plants, including succulents and drought-tolerant shrubs, that add beauty and sustainability to your garden.</p>
    </div>
  </div>
</a> */}

<Link href='plantcatalog/xeric'>
<div className={styles.plant_category}>
<div className={styles.plant_image_container}>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/xeric.jpg' alt='Xeric plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className={styles.plant_text}>
     <h3>Xeric Plants</h3>
      <p>Xeric plants are ideal for water-wise gardening, thriving in dry, low-water conditions. These hardy plants are well-suited for Albuquerque’s hot, arid climate and require minimal irrigation once established. At Jericho Nursery, we offer a variety of xeric plants, including succulents, water-wise trees and drought-tolerant shrubs, that add beauty and sustainability to your garden.</p>
    </div>
  </div>
</Link>
  </div>
</div>
  )
}

export default PlantCatalog;
