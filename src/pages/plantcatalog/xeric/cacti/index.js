import React, { useState } from "react";
import styles from './cacti.module.css'; 
import PlantSlider from "@/components/PlantSlider/PlantSlider";
import cactusdata from "@/plantdata/Xeric/CactusData";
import Head from "next/head";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function Cacti() {
  const [visibleAttribution, setVisibleAttribution] = useState();

  const toggleVisible = () => {
    setVisibleAttribution(!visibleAttribution);
  };

  return (
    <div className={styles.Cacti}> 
    <Head>
  <title>Cacti, Yucca & Agave for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Explore a diverse selection of cacti, yucca, and agave plants perfect for New Mexico’s xeric landscape. These drought-tolerant, low-maintenance plants add texture and beauty to your garden."
  />
  <meta property="og:title" content="Cacti, Yucca & Agave for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Shop for cacti, yucca, and agave plants that thrive in New Mexico's dry, arid climate. These drought-tolerant species are perfect for xeric landscapes, adding striking forms and structure to any garden."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/cactus/prickly-pears-2663349875y6280934.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/xeric/cacti`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cacti, Yucca & Agave for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Discover a variety of cacti, yucca, and agave plants ideal for New Mexico’s dry conditions. Jericho Nursery offers a wide selection of drought-resistant, low-maintenance plants perfect for xeric landscaping."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/cactus/prickly-pears-2663349875y6280934.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/xeric/cacti`} />
</Head>

      <div className={styles.xeric_tree_container}>
        <div className={styles.xeric_top_text}> 
          <div className={styles.xeric_header_background_image}>
            <h2>Cactus, Yucca & Agave: The Icons of Xeriscaping</h2>
            </div>
              <p>Cacti, yucca, and agave are the ultimate low-water plants, perfectly adapted to thrive in Albuquerque’s arid climate. These striking desert plants not only survive on minimal rainfall but also add bold texture, dramatic structure, and year-round interest to any xeric landscape. With their water-storing capabilities, spiky silhouettes, and stunning seasonal blooms, they are a must-have for anyone looking to create a sustainable, water-wise garden. From the towering Soaptree Yucca to the sculptural Whale’s Tongue Agave and the ever-popular Prickly Pear Cactus, these plants provide unmatched beauty and resilience. Many also support local wildlife, offering nectar-rich flowers for pollinators and shelter for birds.</p>
 
      
              <p>At Jericho Nursery, we carry a diverse selection of cacti, yucca, and agave that are perfectly suited to New Mexico’s climate. Whether you’re searching for a Golden Barrel Cactus as a showpiece, a Blue Agave to bring an architectural element to your yard, or a fast-growing Yucca rostrata for a striking focal point, our knowledgeable team is here to help. These hardy plants require little maintenance beyond occasional pruning and proper placement, making them an excellent choice for a stunning, hassle-free xeric landscape. Explore our collection below and let us help you design a bold and water-wise outdoor space!</p>
          </div>

        <div className={styles.xeric_catalog_body}>
          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Cacti</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={cactusdata.cactus} />
            </div>
          </div>

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Yuccas</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={cactusdata.yuccas} />
            </div>
          </div>

          <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Agaves</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={cactusdata.agaves} />
            </div>
          </div>

          {/* <div className={styles.xeric_catalog_sub_section}>
            <h2 className={styles.xeric_catalog_title}>Aloe</h2>
            <div className={styles.catalog_cards}>
              <PlantSlider plants={cactusdata.aloes} />
            </div>
          </div> */}

         
        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Red Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Hesperaloe parviflora, Ponteilla.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Sylenius" target="_blank" rel="noopener noreferrer">
              Sylenius
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Hesperaloe_parviflora,_Ponteilla.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Yellow Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Hesperaloe (Agavaceae) Hesperaloe parviflora fh 427.35 TX Kulturpflanze selten gelbblühend.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://de.wikipedia.org/wiki/Benutzer:Rebou" target="_blank" rel="noopener noreferrer">
              Fritz Hochstätter
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Hesperaloe_(Agavaceae)_Hesperaloe_parviflora_fh_427.35_TX_Kulturpflanze_selten_gelbbl%C3%BChend.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/de/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0 DE
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

          <div className="single_attribution">
          <span><strong>Navajo Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Yucca baileyi in Christchurch Botanic Gardens 03.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Yucca_baileyi_in_Christchurch_Botanic_Gardens_03.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        <div className="single_attribution">
          <span><strong>Twin-flowered Agave Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Agave geminiflora - Twin-flowered agave 01-1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Zcebeci" target="_blank" rel="noopener noreferrer">
              Zeynel Cebeci
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Agave_geminiflora_-_Twin-flowered_agave_01-1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        </div>
      )}
      </div> 
        </div>
      </div>      
    </div>
  );
}

export default Cacti;
