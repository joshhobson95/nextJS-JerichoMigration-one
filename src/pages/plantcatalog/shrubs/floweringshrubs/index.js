import React from "react";
import styles from './flowering.module.css';
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import floweringshrubdata from "@/plantdata/Shrubs/FloweringShrubData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;


function Flowering() {
  return (
    <div className={styles.Flowering}> 
    <Head>
  <title>Flowering Shrubs for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover a variety of flowering shrubs that thrive in New Mexico gardens. Jericho Nursery offers beautiful shrubs that bloom year after year."
  />
  <meta property="og:title" content="Flowering Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Shop flowering shrubs at Jericho Nursery. Our selection offers vibrant blooms and stunning flowers perfect for New Mexico’s climate, adding color and beauty to your garden."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flower/giant-crape-myrtle.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/shrubs/floweringshrubs`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Flowering Shrubs for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Explore our collection of flowering shrubs. These shrubs bring beauty and vibrant color to your New Mexico garden, offering blooms throughout the seasons."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flower/giant-crape-myrtle.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/shrubs/floweringshrubs`} />


</Head>

      <div className={styles.flowering_tree_container}>
        <div className={styles.flowering_top_text}> 
          <div className={styles.flowering_header_background_image}>
            <h2>New Mexico Flowering Shrubs</h2>
          </div>
          <p>Flowering shrubs bring vibrant color, fragrance, and pollinator activity to New Mexico landscapes, making them a favorite choice for homeowners looking to enhance their outdoor spaces. Many of these shrubs are drought-tolerant and well-adapted to Albuquerque’s arid climate, offering stunning seasonal blooms with minimal water needs. Popular choices like butterfly bush, Texas sage, and caryopteris not only add beauty but also attract essential pollinators like bees, butterflies, and hummingbirds, helping to support local ecosystems.</p>
          <p>At Jericho Nursery, we carefully select flowering shrubs that thrive in New Mexico’s unique soil and climate conditions, ensuring long-lasting performance in your yard. Whether you're looking for low-maintenance options, native selections, or continuous bloomers for color throughout the seasons, we have a variety of options to suit your needs. Explore our collection below, and visit us today for expert advice on planting, care, and creating a stunning flowering landscape!</p>
        </div>

        <div className={styles.shrub_catalog_body}>
          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Butterfly Bushes</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.butterflybushes} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Indian Hawthornes</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.indianhawthornes} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Potentillas</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.potentillas} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Salvias</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.salvias} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Texas Sages</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.texassage} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Lilacs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.lilacs} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Crape Myrtles</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.crapemyrtles} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Lavendars</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.lavendars} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Rose of Sharons</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.roseofsharons} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Forsythias</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.forsythias} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Caryopteris Varieties</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.spireas} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>Drought Tolerant Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.xerics} />
            </div>
          </div>

          <div className={styles.shrub_catalog_sub_section}>
            <h2 className={styles.shrub_catalog_title}>More Great Flowering Shrubs</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={floweringshrubdata.others} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flowering;
