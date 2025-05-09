import React from 'react'
import FC from '@/components/Calendar/FC'
import styles from './gardeningcalendar.module.css'
import Head from 'next/head'

function GardeningCalendar() {
  return (
    <main className={styles.gardening_calendar}>
        <Head>
        <title>Gardening Calendar - Jericho Nursery</title>
        <meta name="description" content="Stay on top of gardening events and important dates with the Jericho Nursery Gardening Calendar." />
        <meta property="og:title" content="Gardening Calendar - Jericho Nursery" />
        <meta property="og:description" content="Stay on top of gardening events and important dates with the Jericho Nursery Gardening Calendar." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />

      </Head>
                <div className={styles.gc_welcome}>
            <h1>Gardening Calendar</h1>
                <p> 
                Have you ever wondered when the right time to plant seeds is? Or perhaps aren't sure when the best time to plant a large shade tree is. What should I do in the winter months to prep my garden? With the Jericho Gardening Calendar, you can get all of these answers. Catered specifically to New Mexico, this gardening calendar will serve as your gardening guide year-round.
                </p>
        </div>
   

        <FC />





    </main>
  )
}

export default GardeningCalendar