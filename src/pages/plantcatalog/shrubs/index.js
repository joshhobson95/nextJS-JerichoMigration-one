import React from 'react'
import styles from './shrubs.module.css'
import Link from 'next/link'

function Shrubs() {
  return (
    <div className={styles.Shrubs}>

      <div className={styles.shrubs_welcome}>
        <h1>New Mexico Shrubs</h1>
      </div>

      <div className={styles.shrubs_body}>

        <div className={styles.shrubs_top_text}>
          <h2>Versatile Shrubs for Beauty, Privacy & Year-Round Interest</h2>
          <p>Shrubs are an essential part of any New Mexico landscape, offering color, structure, and resilience in our arid climate. Whether you're looking for flowering shrubs to attract pollinators, broadleaf evergreens for lush greenery, or coniferous shrubs for year-round texture and durability, there’s a perfect shrub for your yard. Many shrubs provide natural privacy screens, wind protection, and erosion control, all while requiring minimal maintenance once established.</p>
          <p>
            At Jericho Nursery, we specialize in drought-tolerant and climate-adapted shrubs that thrive in Albuquerque’s soil and weather conditions. From vibrant butterfly bushes and fragrant sage to tough hollies and low-growing junipers, our selection includes the best options for both beauty and function. Explore our categories below and visit us to find the perfect shrubs for your landscape!
          </p>
        </div>

        <div className={styles.shrub_categories}>

          <div className={styles.shrub_catergories_inner}>
            <Link href='shrubs/floweringshrubs'>
              <h2>Flowering Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flower/potentilla.jpg' alt='Flowering Shrubs in Albuqueruque, New Mexico and surrounding areas' />
            </Link>
          </div>
          <div className={styles.shrub_catergories_inner}>
            <Link href='shrubs/broadleafevergreens'>
              <h2>Broadleaf Evergreens</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/hedge.jpg' alt='Broadleaf Evergreens in Albuqueruque, New Mexico and surrounding areas' />
            </Link>
          </div>
          <div className={styles.shrub_catergories_inner}>
            <Link href='shrubs/coniferousshrubs'>
              <h2>Coniferous Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/conifershrubs.jpg' alt='Coniferous Shrubs in Albuqueruque, New Mexico and surrounding areas' />
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Shrubs
