import React from "react";
import styles from './xericbedding.module.css';
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import xericbedding from "@/plantdata/Xeric/XericBeddingData";
import Head from "next/head";

function XericBedding() {
  return (
    <div className={styles.XericBedding}> 
    <Head>
  <title>Xeric Bedding & Groundcover for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover xeric bedding plants and groundcovers perfect for New Mexico’s dry climate. Jericho Nursery offers a variety of drought-tolerant plants for low-maintenance landscaping."
  />
  <meta property="og:title" content="Xeric Bedding & Groundcover for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Shop for xeric bedding plants and groundcovers that thrive in New Mexico's dry conditions. These low-maintenance plants help reduce water usage and provide beauty year-round."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric_Groundcover.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/plant-catalog/xeric/bedding-groundcover" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Xeric Bedding & Groundcover for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Explore xeric bedding plants and groundcovers perfect for New Mexico landscapes. Jericho Nursery offers low-maintenance, drought-tolerant plants that thrive in dry conditions."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric_Groundcover.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/plant-catalog/xeric/bedding-groundcover" />
</Head>

      <div className={styles.xeric_tree_container}>
        <div className={styles.xeric_top_text}> 
          <div className={styles.xeric_bedding_header_background_image}>
            <h2>Xeric Bedding & Groundcovers: A Water-Wise Foundation</h2>
          </div>

          <p>
            Xeric bedding plants and groundcovers play a crucial role in a drought-tolerant landscape, helping to fill spaces with color, texture, and erosion control while requiring minimal water. These low-growing, spreading plants help retain soil moisture, reduce evaporation, and suppress weeds, making them an essential component of any xeriscaped yard. Options like Desert Zinnia, Damianita Daisy, and Mexican Primrose provide bursts of seasonal color, while Ice Plant and Silver Carpet create lush, mat-like coverage that thrives in the heat. Many xeric groundcovers are also pollinator-friendly, offering nectar and shelter to beneficial insects, making them both beautiful and functional additions to your garden.
          </p>

          <p>
            At Jericho Nursery, we specialize in xeric bedding and groundcovers that thrive in Albuquerque’s arid climate. Whether you’re looking to soften the edges of a walkway, create a vibrant flowering carpet, or stabilize a sloped area with deep-rooted coverage, we have the perfect options to fit your landscape needs. Our expert team can help you select the right plants to complement your xeric trees and shrubs while reducing maintenance and water use. Browse our selection below and discover how xeric bedding plants and groundcovers can transform your garden into a resilient, low-water oasis!
          </p>
        </div>

        <div className={styles.xeric_catalog_body}>
          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Xeric Annuals and Perennials</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericbedding.flowers} />
            </div>
          </div>

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Xeric Groundcovers</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericbedding.groundcovers} />
            </div>
          </div>

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Xeric Succulents</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericbedding.succelents} />
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default XericBedding;
