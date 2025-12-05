import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './brands.module.css'
import logo1 from '../../../public/assets/bacastrees.jpg';
import logo2 from '../../../public/assets/justsprinklers.jpg';
import logo3 from '../../../public/assets/rehms.jpg';
import logo4 from '../../../public/assets/soilmender.jpg';
import logo5 from '../../../public/assets/505outside.jpg';
import soil from '../../../public/assets/soilutionslogo.png';
import suregreen from '../../../public/assets/suregreen.png';



function Brands() {

    const brandData = [
                   {
          id: 1,
          title: 'Gourment Grown',
          description: `"All of our crops are planted and harvested by hand in Fallbrook, CA. Each pot is hand spaced allwoing for optimum air and light circulation and fully acclimated in our mild, mediterranean like climate until ready for harvest, narutally"`,
          img: 'https://images.squarespace-cdn.com/content/v1/62b21fbd0748d162770ccbad/594a8445-ba58-4ee9-9f52-0f87751772ea/GourmetGrown_Logo.jpg?format=500w',
        },
  
        {
          id: 2,
          title: 'Monrovia',
          description: `"For nearly a century, we have poured our passion and expertise into each plant we grow, so that the next generation of plants will be stronger for the next generation of humans."`,
          img: 'https://i2.wp.com/odonals.com/wp-content/uploads/2022/06/Monrovia-Logo2-1.jpg?resize=500%2C500&ssl=1',
        },
        {
          id: 3,
          title: 'Bonide',
          description: `"We offer weed, Insect, disease and animal controls in a variety of formulations and applications to meet any gardener’s needs. Sold in national, regional and local home centers, hardware stores, mass merchants and garden centers across America BONIDE is a recognized and respected industry leader."`,
          img: 'https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Bonide.jpg',
        },
        {
          id: 4,
          title: 'Black Gold',
          description: `"Since 1985, Black Gold® brand potting soils and garden amendments have been available at fine garden centers and have gained a loyal customer following nationwide. All Black Gold® products are professionally formulated to ensure gardening success, and many have been certified by the Mulch & Soil Council, which assures they are made from the highest quality ingredients."`,
          img: 'https://blackgold.bz/wp-content/uploads/sites/3/2022/05/bgLogo2018-1.png',
        },
        {
          id: 5,
          title: 'Fox Farm',
          description: `"FoxFarm is passionate about producing the finest soil mixes, fertilizers, and micro-brewed liquid plant foods. Our formulas are greenhouse tested to ensure quality and consistency. FoxFarm takes great pride in delivering uncompromising quality and supreme customer service. We have supplied this consistency to our customers since 1984."`,
          img: 'https://foxfarm.com/wp-content/uploads/2019/08/logo-big.png',
        },
        {
          id: 6,
          title: 'Green Leaf Nursery Company',
          description: `"Our company is committed to your success. The partnership we share has been and always will be extremely important to us. From all of us at Greenleaf Nursery Company, thank you for your business."`,
          img: 'https://www.greenleafnursery.com/image/Logo.png',
        },
   
        {
          id: 7,
          title: 'Fertilome/Hi-Yield',
          description: `"The ferti•lome® line of products is highly merchandised with attractive, easy to understand labeling, point of purchase sales aids and a Co-op advertising fund to promote products and the brand in local neighborhoods. ferti•lome® products compensate dealers for the personal selling necessary to properly solve consumers’ lawn and garden problems."`,
          img: 'https://www.fertilome.com/wp-content/images/logo-fertilome-green.png',
        },
        {
          id: 8,
          title: 'Soil Mender',
          description: `"At Soil Mender, we have the tools and technologies to help growers address old and new challenges to yield and quality potential.  From our long-standing solutions in soil heath into our newer solutions in crop nutrition and protection, Soil Mender offers unique tools that help realize the genetic potential of a crop."`,
          img: 'https://static.wixstatic.com/media/636f36_7b275ada5963451783c4b426fa4727bb~mv2.png/v1/fill/w_224,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/636f36_7b275ada5963451783c4b426fa4727bb~mv2.png',
        },
        {
          id: 9,
          title: 'Sure Green',
          description: `"From very humble beginnings Spra-Green grew to become the choice of local and regional farmers in New Mexico, due to their top quality fertilizers, custom formulating capabilities, value pricing and customer service."`,
          img: suregreen.src,
        },
        {
          id: 10,
          title: 'Trees of Corrales',
          description: `"Trees of Corrales is a private, family owned wholesale nursery and growing operation that sells exclusively to the nursery and landscape industry. Trees of Corrales sells exclusively to Retail Nurseries and Landscape Distribution Centers."`,
          img: 'https://www.treesofcorrales.com/wp-content/uploads/2021/04/toc_logo_2.png',
        },
        {
          id: 11,
          title: 'Everde',
          description: `"Everde Growers is a leader within the horticulture industry with a true coast-to-coast footprint consisting of over 6,700 acres in production encompassing 15 farm locations throughout Texas, Florida, California, and Oregon. Our superior growing methods and pruning practices ensure consistent high quality and availability. Our inventory mix includes trees, shrubs, perennials, palms, grasses, succulents, tropicals, fruit, and more."`,
          img: 'https://everde.com/wp-content/uploads/2021/08/Registered-Everde-Logo-with-Tagline-01-150-1.png',
        },
        {
          id: 12,
          title: 'Montery',
          description: `"Monterey Lawn and Garden Products is  based in Fresno, in the heart of California’s agricultural region where we first emerged in 1963 as Monterey Ag Resources. Twenty-five years later, we established Monterey Lawn and Garden with the goal of offering home gardeners the same professional grade technology available to the ag industry."`,
          img: 'https://www.montereylawngarden.com/wp-content/uploads/2018/03/MontereyLawnGardenLogo_341-x-138.png',
        },
      ];


      const sponsorData = [
        {
          id: 1,
          title: "Baca's Trees",
          description: "Since 1980, Baca’s Trees has been caring for trees and shrubs throughout the community, offering ISA Certified Arborist Services in Albuquerque and throughout New Mexico. Our talented team is dedicated to exceptional tree care for all residential and commercial properties. Whether you are maintaining your shade and privacy, preparing for a wedding, or are just concerned about your trees, we have the experience and tools to get the job done right. We are licensed and insured to handle any job! Please give us a call to learn more about our services or to get started with a no-obligation estimate."
        },
        {
          id: 2,
          title: "Just Sprinklers",
          description: "Imagine a yard that's the talk of the town—lush lawns, vibrant blooms, and maybe even the soothing murmur of a waterfall. At Just Sprinklers, we can make those dream yards a reality. We believe a beautiful landscape is more than just plants and rocks; it's an extension of your home, a place where life unfolds. With nearly 30 years of local experience, we know what it takes to create landscapes that flourish. Whether you're starting from scratch, need a little help getting your green thumb going, or simply want to explore new ideas, we're here to assist. We handle everything from designing and installing efficient irrigation systems (say goodbye to hand-watering!) to building stunning water features that bring tranquility to your outdoor space. We manage the entire project so you can relax and enjoy the transformation."
        },
        {
          id: 3,
          title: "Soil Menders",
          description: "At Soil Mender, we have the tools and technologies to help growers address old and new challenges to yield and quality potential.  From our long-standing solutions in soil heath into our newer solutions in crop nutrition and protection, Soil Mender offers unique tools that help realize the genetic potential of a crop.  Our approach to growing provides a science-based, systems solution for managing nutrition and reaching a crop’s full potential, using a proper understanding of plant and soil biology, health, and quality"
        },
        {
          id: 4,
          title: "Soilutions",
          description: "Nature invented and perfected the composting process over billions of years. Her brilliantly simple process transforms organic waste into the perfect fertilizer, ready to begin again the elegant cycle from seed to soil to seed that has existed always. At Soilutions, we are called to restore this beautiful solution, following Nature’s simple wisdom to help our Planet, our children, our community and future generations."
        }


      ];

  const [selectedId, setSelectedId] = useState(sponsorData[0].id); 

    useEffect(() => {
    const interval = setInterval(() => {
      setSelectedId((prevId) => {
        const currentIndex = sponsorData.findIndex(s => s.id === prevId);
        const nextIndex = (currentIndex + 1) % sponsorData.length;
        return sponsorData[nextIndex].id;
      });
    }, 15000);

    return () => clearInterval(interval); 
  }, []);

  const selectedSponsor = sponsorData.find((sponsor) => sponsor.id === selectedId);



  return (
    <main className={styles.Brands}>
<Head>
  <title>Brands & Partners | Jericho Nursery</title>

  <meta
    name="description"
    content="Meet the trusted brands and valued partners of Jericho Nursery. We proudly carry top-quality products and collaborate with the best in gardening and landscaping."
  />

  <meta property="og:title" content="Brands & Partners | Jericho Nursery" />
  <meta
    property="og:description"
    content="Meet the trusted brands and valued partners of Jericho Nursery. We proudly carry top-quality products and collaborate with the best in gardening and landscaping."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Jericho-logo.png"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/brands" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/brands" />
</Head>



    <div className={styles.brands_welcome}>
      <h1>Brands and Partners</h1>
      <p>A list of some of the Brands we carry and shout-outs to our appreciated sponsors and companies we do business with</p>
    </div>

    <div className={styles.brands_body_main}>


      <div className={styles.partners_container}>


  <div className={styles.sponsors_container}>
        <h2 className={styles.partners_green}>Partners</h2>
        <h3>A special thank you to our Garden Talk Sponsors</h3>
    <div className={styles.sponsors_inner}>   
          <a
              href="https://www.bacastrees.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo1.src} alt="Baca Trees" className={styles.partner_logos} />
            </a>
            <a
              href="https://www.justsprinklers.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo2.src} alt="Just Sprinklers" className={styles.partner_logos} />
            </a>
            <a
              href="http://www.soilmender.com/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={logo4.src} alt="Soil Mender" className={styles.partner_logos} />
            </a>
            <a
              href="https://soilutions.net/"
              target="_blank"
              rel="noreferrer"
              title="Take me to their Website!"
            >
              <img src={soil.src} alt="Soilutions" className={styles.partner_logos} />
            </a>
       </div>

       <div className={styles.sponsors_text}>
      <div className={styles.sponsors_text_titles}>
        {sponsorData.map((sponsor) => (
          <h4
            key={sponsor.id}
            className={selectedId === sponsor.id ? styles.active : ''}
            onClick={() => setSelectedId(sponsor.id)}
            style={{ cursor: 'pointer' }}
          >
            {sponsor.title}
          </h4>
        ))}
      </div>

      <p>"{selectedSponsor?.description}"</p>
    </div>

       <div className={styles.local_business}>
        <h3>Local Companies we do business with</h3>

         <img
              src="https://lirp.cdn-website.com/d0a1fad2/dms3rep/multi/opt/logo-468x143-255w.png"
              alt="Millers Feed and Supply LLC"
              className={styles.millers}
            />
            <img src={suregreen.src} alt="Sure Green" className={styles.suregreen} />
            <img src={logo5.src} alt="505 Outside" className={styles.five_oh_five} />
            <img
              src="https://images.squarespace-cdn.com/content/v1/619d2e8fd4dd083c86697cc9/223556e8-8c18-4fae-a4a2-7a60ca3d3ffb/ECM+logo+1.jpg?format=1500w"
              alt="East Central Ministries"
              className={styles.ecm}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/el%20pinto.png"
              alt="El Pinto"
              className={styles.elpinto}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Vic;s.jpg"
              alt="Vics Daily Cafe"
              className={styles.vics}
            />
            <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Dave's%20valley%20Grill.jpg"
              alt="Daves Valley Grill"
              className={styles.daves}
            />
            {/* <img
              src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Construction.jpg"
              alt="Construction Rental & Supply"
              className={styles.daves}
            /> */}

       </div>


    </div>
    </div>


<div className={styles.brands_container}>

  <h2 className={styles.brands_yellow}>Brands</h2>

    <h3>Brands we carry</h3>

  <div className={styles.brands_inner}>


       {brandData.map((brand) => (
        <div key={brand.id} className={styles.brand_card}>
          <img src={brand.img} alt={brand.title} className={styles.brand_image} />
          
          
        </div>
      ))}
    
    

  </div>

</div>



    </div>

  </main>
  )
}

export default Brands