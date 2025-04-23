import React from "react";
import styles from './ornamentaltrees.module.css'
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import ornamentaldata from "@/plantdata/Trees/OrnamentalData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;


function Ornamental() {


  return (
<div className={styles.Ornamental}> 
<Head>
  <title>Ornamental Trees for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Browse our selection of ornamental trees perfect for New Mexico landscapes. Jericho Nursery offers trees that add color, texture, and beauty to your garden."
  />
  <meta property="og:title" content="Ornamental Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Explore ornamental trees that enhance your garden with stunning foliage, blossoms, and unique shapes. Perfect for Albuquerque’s climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/crabapple.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/trees/ornamentaltrees`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ornamental Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Jericho Nursery offers a variety of ornamental trees that thrive in New Mexico’s unique climate, perfect for adding year-round beauty and character to your garden."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/crabapple.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/trees/ornamentaltrees`} />
</Head>




    <div className={styles.ornamental_tree_container}>
      <div className={styles.ornamental_top_text}> 

        <div className={styles.ornamental_header_background_image}>
              <h2>New Mexico Ornamental Trees</h2>
        </div>
              <p>At Jericho Nursery, we offer a beautiful selection of ornamental and flowering trees that thrive in Albuquerque’s climate, bringing vibrant color, seasonal blooms, and unique textures to your landscape. These trees are perfect for adding curb appeal, attracting pollinators like bees and butterflies, and providing seasonal interest with stunning flowers, colorful foliage, and decorative bark. Whether you want a striking springtime display, a fragrant accent tree, or year-round beauty, the right ornamental tree can transform your outdoor space.</p>


      
              <p>Our experts at Jericho Nursery are here to help you choose the best flowering trees for your yard, ensuring they are well-suited to New Mexico’s dry climate, alkaline soil, and intense sun. From low-water favorites like the Vitex agnus-cactus and Chitalpa to stunning flowering fruit trees such as the bradford pear or Canada chokechery, we have an array of options to fit any landscape. Explore our selection below and visit us for expert advice on planting and caring for these eye-catching trees!</p>
          </div>



<div className={styles.tree_catalog_body}>


    <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Flowering Pear Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.pears}/>
            </div>
          </div>


          <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Flowering Cherry Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.cherries}/>


               
      
   
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Flowering Plum Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.plums}/>
  
         
            
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Crabapple Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.crabapples}/>
   
            
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Redbud Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.redbuds}/>
       
         
            
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Additional Flowering Tree Options</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={ornamentaldata.unique}/>
       
         
            
          </div>
        </div>
  </div>
  </div>      
</div>
  )
}

export default Ornamental;
