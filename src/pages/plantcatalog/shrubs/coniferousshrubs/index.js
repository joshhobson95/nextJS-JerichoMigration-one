import React from "react";
import styles from './coniferousshrubs.module.css';
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import coniferousshrubs from "@/plantdata/Shrubs/ConiferousShrubData";
import Head from "next/head";


function ConiferousShrubs() {
  return (
    <div className={styles.ConiferousShrubs}>
<Head>
  <title>Coniferous Shrubs for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover coniferous shrubs that thrive in New Mexico’s climate. Jericho Nursery offers evergreen shrubs that add year-round greenery to your garden."
  />
  <meta property="og:title" content="Coniferous Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Explore evergreen coniferous shrubs that provide year-round greenery and structure. Perfect for Albuquerque’s unique climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Coniferous_Shrub.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/plant-catalog/shrubs/coniferous" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coniferous Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Jericho Nursery offers coniferous shrubs perfect for New Mexico gardens. These evergreen shrubs provide beauty, privacy, and shelter throughout the year."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Coniferous_Shrub.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/plant-catalog/shrubs/coniferous" />
</Head>

      <div className={styles.coniferous_shrub_tree_container}>
        <div className={styles.coniferous_shrub_top_text}>
          <div className={styles.coniferous_shrub_header_background_image}>
            <h2>New Mexico Coniferous Shrubs</h2>
          </div>
          <p>
            Coniferous shrubs are an excellent choice for year-round greenery, erosion control, and drought resistance in New Mexico landscapes. These hardy evergreens, including junipers, pinyon pines, and dwarf cypress varieties, thrive in Albuquerque’s arid climate while requiring little maintenance once established. Many coniferous shrubs are ideal for low-water xeriscaping, offering dense foliage for windbreaks, privacy screening, and natural landscaping solutions. Their needle-like leaves and woody structure also help conserve soil moisture, making them a smart choice for sustainable gardening.
          </p>
          <p>
            Whether you're looking to add structure to your garden, prevent soil erosion on slopes, or create a natural, low-maintenance border, coniferous shrubs are a versatile solution. Our selection includes both native and non-native coniferous shrubs that are well-suited to New Mexico’s unique climate and soil conditions. Browse our top choices below, and stop by Jericho Nursery to find the perfect evergreen shrubs for your yard, along with expert planting and care advice!
          </p>
        </div>

        <div className={styles.shrub_catalog_body}>
          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Pine Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={coniferousshrubs.pines} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Juniper Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={coniferousshrubs.junipers} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Spruce Shrubs</h2>
            <PlantSlider plants={coniferousshrubs.spruces} />
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Abrorvitae Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={coniferousshrubs.arborvitaes} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Hollies</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={coniferousshrubs.hollies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConiferousShrubs;
