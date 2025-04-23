import React from 'react'
import styles from './annuals.module.css'
import Link from 'next/link'
import Head from 'next/head'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function Annuals() {
  return (
    <div className={styles.Annuals}>
      <Head>
  <title>Annual Plants for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Discover a vibrant selection of annual plants perfect for New Mexico gardens. From sunflowers to marigolds, these fast-growing plants bring bold color and energy to your outdoor spaces."
  />
  <meta property="og:title" content="Annual Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Browse our curated collection of annual plants that thrive in New Mexico’s climate. These colorful and fast-growing plants are ideal for adding seasonal beauty and variety to your garden."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/annuals.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/annuals`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Annual Plants for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Explore a variety of annual plants perfect for New Mexico's climate. Brighten your garden with seasonal flowers and fast-growing plants that bring bold color and beauty to any space."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/annuals.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/annuals`} />

</Head>


        <div className={styles.annuals_welcome}>
            <h1>New Mexico Annuals</h1>
        </div>

        <div className={styles.annuals_body}>

        <div className={styles.annuals_body_top_text}>
        <h2>Facts about Annuals</h2>
        <p>Annual plants complete their entire life cycle—from germination to seed production—within a single growing season, which can last anywhere from a few months to a year. Once they produce seeds, they die, making room for the next generation. Interestingly, only about 6% of all plant species are true annuals, many of which are herbs and vegetables. For example, pea plants grow, flower, and produce seeds (pea pods) before dying in the fall. Likewise, wildflowers like Cosmos burst into vibrant blooms, scatter their seeds, and fade as the colder months arrive. These plants epitomize the essence of annuals—living fast, reproducing, and making way for the next cycle.</p>

        <h2>Somewhere in Between</h2>
        <p>Not all plants labeled as annuals are truly annual by nature. Some, while perennial in their native climate, are treated as annuals in colder regions because they can’t survive harsh winters. Take geraniums, for example. Here in New Mexico, they’re considered annuals because temperatures below 41°F cause them to stop growing and eventually die. However, with a little care, they can be overwintered indoors and continue to thrive year after year.</p>
        <br></br>
        <p>Some plants fall into a gray area between annuals and perennials—what we sometimes call "somewhere-in-betweens." Flowers like petunias, marigolds, and snapdragons may not survive a harsh winter outside, but with a little extra care, they can be overwintered in a greenhouse or warm garage and bloom again the following season. If you're unsure whether a plant can make it through the winter, it’s always worth researching or asking a Jericho employee for advice. On the other hand, true annuals like cosmos, sunflowers, and alyssum complete their life cycle in just one season—once they’re gone, they won’t return unless they reseed.</p>
        </div>

        <div className={styles.plant_examples}>
          <h3 className={styles.annual_h3}>Jericho's Top 10 Annuals</h3>

          <div className={styles.plant_examples_inner}>
            <div className={styles.plant_example_each}>
              <h6>Geranium</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/geranium.jpg' alt='Geranium at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Marigold</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/marigold.jpg' alt='Marigold at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Petuna</h6>
              <img className={styles.plant_example_circle_image} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Petunia_Violet.jpg/1024px-Petunia_Violet.jpg' alt='Petuna at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Cosmos</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/cosmos.jpg' alt='Cosmos at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Snapdragon</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/snapdragon.jpg' alt='Snapdragon at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Viola</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/viola.PNG' alt='Violas at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Impatiens</h6>
              <img className={styles.plant_example_circle_image} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Impatiens_walleriana_-_flower_view_02.jpg/1024px-Impatiens_walleriana_-_flower_view_02.jpg'alt='Impatients at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Calibrachoa</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/calibrachoa.jpg' alt='Calibrachoa at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Lobelia</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/lobelia.PNG' alt='Lobelia at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
            <div className={styles.plant_example_each}>
              <h6>Sunflower</h6>
              <img className={styles.plant_example_circle_image} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/sunflower-1497092_1920.jpg' alt='Sunflowers at Jericho Nursery in Albuquerque, New Mexico'/>
            </div>
          </div>

          <div className={styles.annual_mid_page}>
            <Link className={styles.plant_catalog_link} href='xeric'>
              <h4>Looking to be more water-wise?</h4>
              <p>Click Here to view our Xeric Section</p>
            </Link>
          </div>

          <div className={styles.annuals_body_bottom_text}>
            <h2>Dozens and Dozens</h2>
            <p>At Jericho Nursery, we offer an incredible selection of annuals—dozens upon dozens of vibrant, high-quality plants to bring color and life to your garden. But the only way to truly appreciate the variety is to see it for yourself! Our carefully curated collection is one of the largest in the state, and we take great pride in providing gardeners with the best selection available. Stop by today and explore the beauty we have in store.</p>  
            <br></br>
            <p>And while you're here, don’t forget to check out our extensive range of perennials, trees, and shrubs, each handpicked to thrive in our climate. Looking for low-maintenance, drought-tolerant plants? We also offer a fantastic selection of <strong>xeric options-</strong>perfect for water-wise landscaping without sacrificing beauty. Whether you’re planting for a single season or designing a garden that will flourish for years to come, we have everything you need to bring your vision to life.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Annuals
