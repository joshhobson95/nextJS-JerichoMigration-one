import React from "react";
import styles from './coniferoustrees.module.css'
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import coniferdata from "@/plantdata/Trees/ConiferData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;


function Conifer() {






  return (
<div className={styles.Conifer}> 
<Head>
  <title>Coniferous Trees for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Explore our selection of coniferous trees for New Mexico gardens. Jericho Nursery offers hardy, evergreen trees that provide year-round greenery and structure."
  />
  <meta property="og:title" content="Coniferous Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Shop for evergreen coniferous trees that thrive in Albuquerque’s climate, offering lush greenery and wind protection for your garden."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/austrainPine.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/trees/coniferoustrees`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coniferous Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Jericho Nursery offers a wide selection of coniferous trees, ideal for New Mexico’s climate. These evergreen trees bring year-round greenery to your garden."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/austrainPine.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/trees/coniferoustrees`} />
</Head>




    <div className={styles.conifer_tree_container}>
      <div className={styles.conifer_top_text}> 

        <div className={styles.conifer_header_background_image}>
              <h2>New Mexico Conifers</h2>
        </div>


              <p>At Jericho Nursery, we offer a variety of coniferous trees that thrive in Albuquerque’s arid climate, providing year-round greenery, wind protection, and excellent shade. Unlike deciduous trees that lose their leaves in winter, conifers—such as pines, junipers, and cypresses—retain their needles, making them an ideal choice for adding structure and beauty to your landscape throughout all seasons. Many conifers are also drought-tolerant, low-maintenance, and naturally adapted to New Mexico’s soils, making them a perfect long-term investment for your yard.</p>


      
              <p>Our team at Jericho Nursery specializes in helping New Mexico homeowners select and plant the right conifers for their space. Whether you’re looking for a fast-growing privacy screen, an elegant accent tree, or a hardy evergreen that can withstand drought and wind, we have the perfect options for you. From native selections like Pinyon pine and Rocky Mountain juniper to adaptable non-natives like Austrian pine and Arizona cypress, our selection below includes some of the best choices for New Mexico landscapes. Visit us today to explore our conifers and get expert advice on planting and care!</p>
          </div>



<div className={styles.tree_catalog_body}>


    <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Pine Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={coniferdata.pines}/>


            </div>
          </div>


          <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Juniper Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={coniferdata.junipers}/>
  

               
      
   
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Spruce Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={coniferdata.spruces}/>
         
            
          </div>
        </div>
 
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Cypress Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={coniferdata.cypress}/>
         
            
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Arborvitae Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={coniferdata.arborvitaes}/>
         
            
          </div>
        </div>

  </div>
  </div>
</div>
  )
}

export default Conifer;
