import React, {useState} from "react";
import styles from './shadetrees.module.css'
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import shadedata from "@/plantdata/Trees/ShadeData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function Shade() {


  const [visibleAttribution, setVisibleAttribution] = useState();

  const toggleVisible = () => {
    setVisibleAttribution(!visibleAttribution)
  }


  return (
<div className={styles.Shade}> 
<Head>
  <title>Shade Trees for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover a variety of shade trees perfect for New Mexico’s climate. Jericho Nursery offers hardy shade trees that provide much-needed relief from the intense sun."
  />
  <meta property="og:title" content="Shade Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Explore our selection of shade trees ideal for New Mexico gardens. These trees provide natural shade and beauty, perfect for any landscape in Albuquerque."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ElmTree.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/trees/shadetrees`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shade Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Shop for shade trees perfect for the Albuquerque climate. Jericho Nursery offers trees that will keep your garden cool and provide year-round beauty."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ElmTree.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/trees/shadetrees`} />
</Head>




    <div className={styles.shade_tree_container}>
      <div className={styles.shade_top_text}> 
        <div className={styles.shade_header_background_image}>
              <h2>New Mexico Shade Trees</h2> 
        </div>
              <p>At Jericho Nursery, we offer a carefully curated selection of shade trees that thrive in Albuquerque’s arid climate, providing much-needed relief from the intense New Mexico sun. Planting shade trees not only enhances your landscape’s beauty but also lowers temperatures, reduces energy costs, and improves air quality. With the right placement, a well-chosen tree can cool your home naturally, protecting it from harsh summer heat while adding value to your property.</p>
              <p>Our team at Jericho Nursery has years of experience in helping New Mexico homeowners select and plant the best shade trees for their specific needs. We’ll guide you in choosing drought-tolerant, fast-growing trees that provide long-lasting benefits with minimal maintenance. Whether you’re looking for native species like the Arizona ash and velvet mesquite, or resilient non-natives such as the Chinese pistache and lacebark elm, our selection below offers some of the best options for creating shade and comfort in your outdoor space. Stop by our nursery or contact us for expert advice on planting and caring for your new shade tree!</p>

              
          </div>



<div className={styles.tree_catalog_body}>


    <div className={styles.tree_catalog_sub_section}>
      <h2 className={styles.tree_catalog_title}>Ash Trees</h2>
          <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.ash}/>

    


 
            </div>
          </div>



          <div className={styles.tree_catalog_sub_section}>
          <h2 className={styles.tree_catalog_title}>Cottonwood Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.cottonwood}/>
        

               
      
   
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Elm Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.elm}/>
            
         
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Willow Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.willow}/>
            
         
            
          </div>
        </div>
        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Maple Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.maple}/>
            
         
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Sycamore Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.sycamore}/>
            
         
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Oak Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.oak}/>
            
         
            
          </div>
        </div>

 
        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Honey Locust Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.honeylocust}/>
            
         
            
          </div>
        </div>




  
        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Drought Tolerant Shade Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.other}/>
            
         
            
          </div>
        </div>

        <div className={styles.tree_catalog_sub_section}>
        <h2 className={styles.tree_catalog_title}>Other Popular Shade Trees</h2>
            <div className={styles.catalog_cards}>
            <PlantSlider  plants={shadedata.unique}/>
            
         
            
          </div>
        </div>

  </div>
  </div>  

  <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Arizona Ash Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Fraxinus-velutina-20080402.JPG</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Miwasatoshi" target="_blank" rel="noopener noreferrer">
                Miwasatoshi
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Fraxinus-velutina-20080402.JPG" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
          <div className="single_attribution">
          <span><strong>Narrowleaf Cottonwood Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Populus angustifolia 1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Stan_Shebs" target="_blank" rel="noopener noreferrer">
                Stan Shebs
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Populus_angustifolia_1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
       

        <div className="single_attribution">
          <span><strong>Mexican Sycamore Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Platanus mexicana in Hackfalls Arboretum (1).jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">       
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Platanus_mexicana_in_Hackfalls_Arboretum_(1).jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Chinese Pistache Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Pistacia chinensis 02.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">       
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Pistacia_chinensis_02.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Western Hackberry Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Celtis reticulata 2.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Stan_Shebs" target="_blank" rel="noopener noreferrer">       
              Stan Shebs
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Celtis_reticulata_2.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
    
    
    



        </div>
      )}
      </div> 

</div>
  )
}

export default Shade;
