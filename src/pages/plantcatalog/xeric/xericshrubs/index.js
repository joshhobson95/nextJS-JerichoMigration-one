import React from "react";
import styles from './xericshrubs.module.css';
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import xericshrubs from "@/plantdata/Xeric/XericShrubData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function XericShrubs() {
  return (
    <div className={styles.XericShrubs}> 
    <Head>
  <title>Xeric Shrubs for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Browse our selection of xeric shrubs ideal for New Mexico's dry landscape. Jericho Nursery offers drought-tolerant shrubs that provide beauty and structure year-round."
  />
  <meta property="og:title" content="Xeric Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Discover xeric shrubs for your New Mexico garden. These drought-resistant shrubs provide year-round beauty and low-maintenance landscaping solutions."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/shrubs/bees-5032464_1920(1).jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/xeric/xericshrubs`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Xeric Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Find a variety of xeric shrubs that are perfect for New Mexico’s xeric gardens. Jericho Nursery offers a variety of drought-tolerant shrubs for easy, low-maintenance landscapes."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/shrubs/bees-5032464_1920(1).jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/xeric/xericshrubs`} />
</Head>

      <div className={styles.xeric_tree_container}>
        <div className={styles.xeric_top_text}> 
          <div className={styles.xeric_shrub_header_background_image}>
            <h2>Xeric Shrubs in New Mexico</h2>
          </div>

          <p>
            Xeric shrubs are the backbone of a well-balanced, drought-tolerant landscape, offering structure, color, and habitat without the need for excessive watering. These resilient plants thrive in Albuquerque’s arid climate, with deep root systems and water-efficient foliage that help them withstand the heat while maintaining their beauty. Whether you’re looking for floral bursts from Texas Sage, the silvery elegance of Big Sagebrush, or the fragrant charm of Rosemary, xeric shrubs provide a diverse range of options to add texture and seasonal interest to your garden. Many also attract pollinators, providing vital resources for bees, butterflies, and hummingbirds, further enhancing the ecological benefits of your landscape.
          </p>

          <p>
            With an extensive selection of drought-tolerant shrubs, Jericho Nursery is your go-to destination for creating a beautiful, water-wise yard. We carry a variety of xeric shrubs, from flowering options that add pops of seasonal color to evergreens that provide lasting structure and greenery. Whether you need a fast-growing hedge for privacy, a compact shrub for a rock garden, or a tough, sun-loving plant that thrives with minimal care, we’re here to help you find the perfect fit. Explore our collection below and discover how xeric shrubs can enhance your outdoor space with effortless beauty and sustainability.
          </p>
        </div>

        <div className={styles.xeric_catalog_body}>
          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Xeric Broadleaf Evergreens</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericshrubs.broadleafs} />
            </div>
          </div>

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Xeric Flowering Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericshrubs.flowering} />
            </div>
          </div>

          {/* <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Grasses</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericshrubs.grasses} />
            </div>
          </div> */}

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Hard Xeric Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={xericshrubs.hardxeric} />
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default XericShrubs;
