import React from "react";
import styles from './fruit.module.css'
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import fruitdata from "@/plantdata/Trees/FruitData";
import Head from "next/head";

function Fruit() {





  return (
<div className={styles.Fruit}> 
<Head>
  <title>Fruit Trees for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover the best fruit trees for New Mexico gardens. Jericho Nursery offers a variety of fruit-bearing trees that thrive in the local climate."
  />
  <meta property="og:title" content="Fruit Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Find the perfect fruit trees for your garden at Jericho Nursery. We offer a variety of fruit-bearing trees that grow well in Albuquerque’s climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Fruit_Tree.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/plant-catalog/trees/fruit" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fruit Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Shop Jericho Nursery's fruit trees, ideal for New Mexico’s climate. From apples to peaches, our fruit trees will thrive in your Albuquerque garden."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Fruit_Tree.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/plant-catalog/trees/fruit" />
</Head>




    <div className={styles.fruit_tree_container}>
      <div className={styles.fruit_top_text}> 

        <div className={styles.fruit_header_background_image}>
              <h2>New Mexico Fruit Trees</h2>
        </div>
              <p>Growing fruit and nut trees in New Mexico is a rewarding way to enjoy fresh, homegrown produce while adding beauty and value to your landscape. Albuquerque, located in USDA Hardiness Zone 7, is one of the best places in the country to grow a wide variety of fruit and nut trees. Our warm summers provide the heat needed for excellent fruit development, while our cold winters supply the necessary chill hours—the number of cold hours between 32–45°F that many fruit trees require to produce a successful crop. This balance makes Albuquerque an ideal environment for growing everything from peaches and apples to pecans and almonds.</p>

              <p>Pollination is another key factor when selecting fruit trees. Some varieties, like peaches, apricots, and almonds, are self-pollinating, meaning they can produce fruit on their own. Others, such as apples, pears, and many plums, need a second compatible tree nearby for cross-pollination to ensure a bountiful harvest. Nut trees, including pecans and walnuts, often require ample space and deep, well-draining soil to thrive.</p>

      
              <p>At Jericho Nursery, we carry a wide selection of fruit and nut trees suited for New Mexico’s unique climate, including low-chill apples, cold-hardy peaches, and resilient pecan trees. Whether you're a seasoned grower or just starting out, our experts are here to help you choose the right trees, understand their care requirements, and maximize your harvest. Visit us today to explore our selection and get personalized advice on planting, pollination, and long-term tree care!</p>
          </div>



<div className={styles.tree_catalog_body}>


    <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Apple Trees</h2>
          <div className={styles.catalog_cards}>

        <PlantSlider plants={fruitdata.apples}/>
    


 
            </div>
          </div>


        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Cherry Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.cherries}/>
  

               
      
   
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Peach Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.peaches}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Nectarine Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.nectarines}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Apricot Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.apricots}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Plum Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.plums}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Pear Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.pears}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Fig Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.figs}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Pomegranate Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.pomegranates}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Unique Fruit Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.others}/>
      
            
          </div>
        </div>



        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Almond Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.almonds}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Pecan Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.pecans}/>
      
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
            <h2 className={styles.tree_catalog_title}>Pistachio Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider plants={fruitdata.pistachios}/>
      
            
          </div>
        </div>


  </div>
  </div>      
</div>
  )
}

export default Fruit
