import React from 'react'
import styles from './plantcardkey.module.css'
import Image from 'next/image';


function PlantCardKey() {
  return (
    <main className={styles.PlantCardKey}>

      <div className={styles.plantcard_welcome}>
        <h1>Plant Card Key</h1>
      </div>

        <div className={styles.plantcard_body}>
            <h2>Explanation of our Plant Card</h2>
            <p>From us to you: a simple explanation of how to read our plant card.
It’s very similar to a plant tag you might find on any plant purchased at Jericho Nursery or other retailers, but it differs in a few key ways that are worth explaining.</p>

<div className={styles.imageWrapper}>
  <Image
    src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/PlantCard-Key.png"
    alt="Plant Card Key"
    fill
    className={styles.image}
    style={{ objectFit: 'contain' }} // or 'cover'
  />
</div>

<div className={styles.plantcard_bottom}>
<h2>A. Water Information</h2>
<p>We have three categories for water requirements: low, moderate, and high. Important to note: these categories are relative to the section they belong in. A low-water tree and a low-water annual will not require the same amount of water. The tree will always need more due to its size. For more specific information, contact a Jericho Gardening Angel.</p>

<h2>B. Light Information</h2>
<p>Light requirements also fall into three categories: Full Sun, Partial Sun, and Shade. Similar to the water section, these categories are relative. A houseplant with high light requirements will never be able to withstand the summer sun that a xeric shrub can, even though we use the same symbol to represent high light for both. For more information, don’t hesitate to contact us.</p>

<h2>C. Zone Information</h2>
<p>These zones are defined by the USDA and refer to the range of temperatures a plant can tolerate. <a className={styles.zone_link} href="https://planthardiness.ars.usda.gov/">Click here</a> for a breakdown of zones as explained by the USDA.</p>

<h2>D. Average Mature Size</h2>
<p>In this section, we chose to present mature sizes in an approximate and average format—right in the middle of what you might expect. For example, if a plant is typically described as reaching 1 to 3 feet in height or width, we’ve listed it as 2 feet. As shown above, sizes are represented in a Height × Width format and are given in feet (') and inches (").</p>


</div>


            

        </div>
      
    </main>
    
  )
}

export default PlantCardKey;
