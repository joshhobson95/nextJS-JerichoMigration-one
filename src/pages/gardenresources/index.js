
import Link from "next/link";
import styles from "./gardenresources.module.css";
import Head from "next/head";


function GardenResources() {





  return (
    <div className={styles.GardenResources}>
      <Head>
        <title>Garden Resources - Jericho Nursery</title>
        <meta
          name="description"
          content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery."
        />
        <meta
          property="og:title"
          content="Garden Resources - Jericho Nursery"
        />
        <meta
          property="og:description"
          content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery."
        />
        <meta
          property="og:image"
          content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.gr_welcome}>
        <h1>Gardening Resources</h1>
        <p>
        Discover resources, clubs and events around Albuqueruque and the surrounding areas. Gather your knowledge and grow your garden!
        </p>
      </div>

     

      <div className={styles.gr_body_main}>

        <section className={styles.clubs}>
          <h2>Clubs and Communities</h2>

      <div className={styles.clubs_inner}>
          <div className={styles.single_container}>
            <h3>ABQ Garden Center</h3>
            <div className={styles.image_background}>
              <img className={styles.abq_garden_center} src="https://static.wixstatic.com/media/2f743c_2ffa8ee62cae4bb68b7150e5dad8f6db~mv2.png/v1/fill/w_114,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2f743c_2ffa8ee62cae4bb68b7150e5dad8f6db~mv2.png" />
            </div>
            <p>The Albuquerque Garden Center is a hub for local garden enthusiasts, offering a wide variety of resources and activities for all levels of interest. From seasonal events and educational classes to exciting contests and community involvement, the center has something for everyone. It also hosts numerous specialty garden clubs—including the African Violet Club, Rose Society, and Cactus and Succulent Society—making it a vibrant space to connect with others who share your passion for plants. Whether you're a seasoned gardener or just getting started, the Garden Center is a great place to grow your skills and community.</p>
            <a href="https://www.albuquerquegardencenter.org/" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
          <div className={styles.single_container}>
            <h3>ABQ Master Gardeners</h3>
            <div className={styles.image_background2}>
            <img className={styles.abq_master_gardeners} src="https://abqmastergardeners.org/images/logo/NMlogo-side_350x151.jpg"/>
            </div>
              <p>The Albuquerque Area Extension Master Gardener Program is a valuable community resource, made up of volunteers trained in horticulture through the New Mexico State University Cooperative Extension Service. These knowledgeable gardeners offer expert guidance on everything from soil health to plant selection and pest control, helping local residents grow with confidence. In addition to answering gardening questions through their seasonal hotline, they host a wide range of public classes, educational events, and hands-on volunteer projects throughout the year. Their outreach supports home gardeners, community organizations, and local food efforts—making them a vital part of Albuquerque’s gardening landscape.</p>
               <a href="https://abqmastergardeners.org/" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
              <div className={styles.single_container}>
            <h3>ABQ Bio Park</h3>
            <div className={styles.image_background4}>
            <img className={styles.abq_biopark} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQneoKbSYzACvJl-i-02jxYvWfqJuJPuspg&s"/>
            </div>
              <p>The ABQ BioPark is a cornerstone of Albuquerque’s connection to nature, offering a rich and immersive experience through its Botanic Garden, Zoo, Aquarium, and Tingley Beach. The Botanic Garden in particular showcases a diverse collection of native and global plant life, with themed gardens that highlight everything from desert landscapes to lush Mediterranean environments. It’s a place where visitors of all ages can explore, learn, and be inspired by the beauty and importance of plants. With educational programs, seasonal exhibits, and conservation efforts, the BioPark plays a key role in promoting environmental awareness and appreciation for the natural world.</p>
               <a href="https://www.cabq.gov/artsculture/biopark" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
        </div>
        </section>

        <section className={styles.local_resources}>
           <h2>Local Resources</h2>
        <div className={styles.local_resources_inner}>


          <div className={styles.single_container}>
           <h3>505 Outside & Water Rebates</h3>
            <div className={styles.image_background3}>
              <img className={styles.five_oh_five} src="https://www.505outside.com/wp-content/uploads/2020/06/505Outside-logo.png" />
            </div>
            <p>505 Outside, managed by the Albuquerque Bernalillo County Water Utility Authority, is an excellent resource for anyone looking to make the most of their outdoor water use in New Mexico’s arid climate. The site offers practical tips and expert guidance on xeriscaping, choosing climate-appropriate plants, efficient watering techniques, and smart irrigation practices. Whether you're planning a new landscape or improving an existing one, 505 Outside provides valuable tools to help you save water while maintaining a beautiful yard. They also offer residential and commercial water rebate programs, making sustainable landscaping more accessible and rewarding for the entire community.</p>
            <a href="https://www.505outside.com/" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
          <div className={styles.single_container}>
            <h3>Department of Agriculture</h3>
            <div className={styles.image_background6}>
            <img className={styles.abq_master_gardeners} src="https://nmdeptag.nmsu.edu/media/static-media/NMDA-Logo.png"/>
            </div>
              <p>The New Mexico Department of Agriculture (NMDA) supports the state’s agricultural community through education, regulation, and promotion of sustainable practices. Their website offers a wealth of resources for gardeners, farmers, and landowners, including information on soil health, pest management, native plants, and pollinator support. With programs aimed at both large-scale agriculture and home gardening, the NMDA plays a vital role in preserving New Mexico’s unique environment and agricultural heritage. Whether you're looking to learn more about growing practices, agricultural events, or conservation efforts, the NMDA is a trusted source for guidance and support.</p>
             <a href="https://nmdeptag.nmsu.edu/#gsc.tab=0" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
          <div className={styles.single_container}>
            <h3>ABQ Public Libraries</h3>
            <div className={styles.image_background5}>
            <img className={styles.abq_library} src="https://abq.ent.sirsi.net/custom/web/content/ABQlogotxt2.png"/>
            </div>
              <p>The Albuquerque Public Library system offers valuable resources for gardeners interested in high desert growing, including books, guides, and educational programs tailored to New Mexico’s unique climate. One of its standout offerings is the Seed Library, where community members can “check out” seeds for free, grow their own plants, and even return seeds to help sustain the collection. Whether you're a beginner learning the basics or an experienced gardener looking to explore new varieties, the library provides accessible, community-focused support for sustainable gardening in the high desert.</p>
               <a href="https://abqlibrary.org/seeds/Overview" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
          <div className={styles.single_container}>
            <h3>New Mexico Zone Map</h3>
            <div className={styles.image_background7}>
            <img className={styles.usda} src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/usda.png"/>
            </div>
              <p>The USDA Plant Hardiness Zone Map is an essential tool for gardeners in New Mexico and beyond, helping determine which plants are most likely to thrive in a specific region based on average annual minimum winter temperatures. By identifying your zone—most of Albuquerque, for example, falls within Zones 7a to 7b—you can make informed choices about which trees, shrubs, perennials, and vegetables are best suited to your local climate. This map serves as a helpful starting point for both new and experienced gardeners planning resilient, climate-appropriate landscapes.</p>
               <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer">
            <button>LINK</button>
            </a>
          </div>
      
      </div>
        </section>



        
      </div>
    </div>
  );
}

export default GardenResources;
