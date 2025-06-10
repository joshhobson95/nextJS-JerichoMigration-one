import React from 'react'
import styles from './houseplants.module.css'
import Link from 'next/link'
import Head from 'next/head'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
import PlantSlider from '@/components/PlantSlider/PlantSlider';
import houseplantdata from '@/plantdata/Houseplants/HouseplantData';


function Houseplants() {
  return (
    <div className={styles.Houseplants}>

      <div className={styles.houseplants_welcome}>
        <h1>Houseplants in New Mexico</h1>
      </div>

      <div className={styles.houseplants_body}>

        <div className={styles.houseplants_body_top_text}>
          <h2>Outdoors indoors</h2>
          <p>Houseplants bring more than just greenery into your home—they add life, improve air quality, and create a calming atmosphere. Whether you're looking to brighten a corner, purify the air, or simply enjoy the joy of caring for living things, there’s a houseplant for every space and lifestyle. From low-maintenance favorites like snake plants and pothos to more exotic varieties like rubber plant and fiddle leaf figs, our catalog showcases a wide selection of indoor plants suited to both beginners and seasoned plant lovers.</p>
        <h2>Tropicals & Succulents</h2> 
        <p>From bold, leafy greens to sculptural, low-maintenance beauties, Jericho Nursery offers a diverse selection of tropicals and succulents to elevate your indoor space. Bring a lush, vibrant feel to your home with tropical favorites like philodendrons, ferns, and monsteras—perfect for adding a touch of the jungle indoors. For a more minimalist, sun-loving option, explore hardy succulents like jade plants, echeveria, and aloe vera that thrive with little water and lots of light. Whether you prefer the bold textures of tropical foliage or the sleek charm of succulents, you'll find the perfect plant to match your space and lifestyle.</p>

        </div>

        <div className={styles.plant_examples}>


        <div className={styles.houseplant_catalog_sub_section}>
            <h2 className={styles.houseplant_catalog_title}>Tropical Houseplants</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={houseplantdata.tropicals} />
            </div>
          </div>
        <div className={styles.houseplant_catalog_sub_section}>
            <h2 className={styles.houseplant_catalog_title}>Flowering Houseplants</h2>
            <div className={styles.catalog_cards}>
                 <PlantSlider plants={houseplantdata.flowering} />
            </div>
          </div>

        <div className={styles.houseplant_catalog_sub_section}>
            <h2 className={styles.houseplant_catalog_title}>Succulent Houseplants</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={houseplantdata.succulenets} />
            </div>
          </div>

       
        
    
        


          {/* <div className={styles.houseplants_body_bottom_text}>
            <h2>Air Purification</h2>
            <p></p>  
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default Houseplants;
