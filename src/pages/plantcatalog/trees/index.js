import React from 'react';
import styles from './trees.module.css'
import Link from 'next/link';
import Head from 'next/head';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;


function Trees() {


return (


<div className={styles.Trees}>
<Head>
  <title>Trees for New Mexico Gardens | Jericho Nursery</title>
  <meta
    name="description"
    content="Explore a variety of trees perfect for New Mexico gardens. From shade trees to fruit trees, Jericho Nursery offers trees that thrive in the local climate."
  />
  <meta property="og:title" content="Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    property="og:description"
    content="Find the ideal trees for your garden at Jericho Nursery. Whether you're looking for shade trees or fruit-bearing trees, we have the perfect selection for New Mexico’s climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Tree.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${baseUrl}/plantcatalog/trees`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trees for New Mexico Gardens | Jericho Nursery" />
  <meta
    name="twitter:description"
    content="Browse our selection of trees ideal for New Mexico gardens. Jericho Nursery offers trees for every need, from shade to fruit-bearing options, perfect for the local environment."
  />
  <meta
    name="twitter:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Tree.jpg"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href={`${baseUrl}/plantcatalog/trees`} />
</Head>


  <div className={styles.trees_welcome}>
    <h1>New Mexico Trees</h1>
  </div>


  <div className={styles.trees_body}>

  <div className={styles.trees_body_top_text}>

    <h1>Picking the right tree for your New Mexico home</h1>
    <p>
    Choosing the perfect tree for your New Mexico landscape requires careful consideration of the region’s unique climate, soil conditions, and water availability. In Albuquerque and throughout the state, trees must withstand intense sunlight, low humidity, and occasional drought. Native and drought-tolerant species, such as desert willows, velvet mesquites, and Pinyon pines, thrive in these conditions with minimal maintenance. Additionally, non-native trees like Chinese pistache and desert museum palo verde can provide excellent shade, helping to cool your yard and reduce temperatures during hot summers. Whether you're looking for fast-growing shade trees to cool your yard, ornamental trees to enhance curb appeal, fruit trees for homegrown produce, or hardy conifers for year-round greenery, selecting the right tree ensures long-term health and beauty in your landscape. Explore our catalog of trees ideal for Albuquerque and beyond to find the best fit for your space.
    </p>
    </div>

    <div className={styles.tree_categories}>

  <Link href="/plantcatalog/trees/shadetrees">
  <div>
    <h2>Shade Trees</h2>
    <img 
      src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/shade.jpg" 
      alt="Shade Trees in Albuquerque, New Mexico and surrounding areas" 
    />
  </div>
</Link>

<Link href="/plantcatalog/trees/ornamentaltrees">
      <div className={styles.tree_categories_inner}>
      <h2>Ornamental Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringcherry.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </div>
</Link>
<Link href="/plantcatalog/trees/fruittrees"k>
      <div className={styles.tree_categories_inner}>
      <h2>Fruit Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/fruit.jpg' alt='Fruit and Nut Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </div>
</Link>
<Link href="/plantcatalog/trees/coniferoustrees">
      <div className={styles.tree_categories_inner}>
      <h2>Coniferous Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Pines.jpg' alt='Conifers and Pine Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </div>
</Link>

    </div>

 
  </div>
</div>

        
      

  )
}



export default Trees;
