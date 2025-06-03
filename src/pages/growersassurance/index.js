import React from 'react'
import styles from'./growersassurance.module.css'
import warrantybush from '../../../public/assets/warrantybush.png'
import planting from '../../../public/assets/planting.png'
import Head from 'next/head'



function FAQ() {



  return (

<main className={styles.FAQ}>
<Head>
  <title>Grower’s Assurance | Planting Guide & Warranty | Jericho Nursery</title>

  <meta
    name="description"
    content="Get peace of mind with Jericho Nursery’s Grower’s Assurance. Explore our planting guide, warranty details, and expert tips to ensure your plants thrive."
  />

  <meta property="og:title" content="Grower’s Assurance | Planting Guide & Warranty | Jericho Nursery" />
  <meta
    property="og:description"
    content="Get peace of mind with Jericho Nursery’s Grower’s Assurance. Explore our planting guide, warranty details, and expert tips to ensure your plants thrive."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/growersassurance" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/growersassurance" />
</Head>


<div className={styles.faq_welcome}>
            <h1>Grower's Assurance</h1>
            <p>
                Check here on how to keep those plants alive and healthy, and what to do when you didn't
             </p>       
        </div>


        <div className={styles.faq_body}>
<div>

<img className={styles.warranty_bush} src={warrantybush.src} alt='Jericho Nursery Warranty'/>

          <p>As you will read below, we want to give our customers some very important advice on how to keep your Jericho Nursery product alive and healthy. We are so sure about our methods, our warranty hinges on if you planted using our strategy or not. Below read our planting guide and warranty so you can learn how to keep all your plants alive and happy</p>

 
</div>


<div className={styles.faq_body_top}>

<h1>General Planting Guide</h1>

<img className={styles.planting_guide} src={planting.src} alt='Jericho Nursery Planting'/>

<p>This guide is GENERAL; when it's hot and you're thirsty, so are you plants.</p>

<ol>
    <li>Dig a hole about twice as wide but only as deep as the soil level of the container. This can fluctuate on large containers and B&B trees. The plant should end up at ground level.</li>
    <li>Mix native soil about 50/50 with compost to backfill around the root ball. Then make a well about 3 inches deep around the plant for maintaining water. The well should be approximately 2 to 3 feet in diameter.</li>
    <li>Water heavily at the time of planting, if it's hot, water daily for 2-3 weeks. Then slowly reduce watering to 3-4 times weekly.</li>
    <li>Use root stimulator once weekly for AT LEAST a month. Longer is always better. PLEASE, please, please be sure to winter water, once every week over the winter.</li>
</ol>
</div>





<div className={styles.faq_body_bottom}>


<h1>Our Warranty</h1>



<p >Jericho offers a 30-day warrantee specifically for perennial trees, shrubs, roses, and perennials. We are confident that your success will increase substantially with the use of root stimulator and compost at the time of planting. Therefore, when you purchase these products with your plant, your guarantee will increase to 90 days.

We consider our policy honest and strive to serve our customers with the utmost integrity. Unfortunately, we do not control either nature or nurture once your guaranteed plant is outside of our care. Therefore, we will not warrantee any adverse conditions, including a lack of adequate watering, which we see most often.

Watering guidelines – in the heat of spring, summer, and early fall, water your new planting every day for 1 to 2 weeks depending on the weather. Then every other day for another 1 to 2 weeks depending on the weather. You can NOT overwater most new plantings.

To utilize our guarantee, you must provide proof of purchase (a Jericho cash register receipt) and the dead plant, not a photo but the actual plant.

Disclaimer: Our guarantee excludes clearance items, houseplants, and annuals. We offer a one-time replacement per plant. No cash or credit card refunds will be made under this policy. We will issue a Jericho credit for the purchase price of the plant.</p>
</div>



 </div>
</main>
  )
}

export default FAQ;