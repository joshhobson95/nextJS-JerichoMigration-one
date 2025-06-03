import React from 'react'
import FC from '@/components/Calendar/FC'
import styles from './gardeningcalendar.module.css'
import Head from 'next/head'

function GardeningCalendar() {
  return (
    <main className={styles.gardening_calendar}>
<Head>
  <title>Gardening Calendar – Jericho Nursery</title>

  <meta
    name="description"
    content="Stay in sync with the seasons using Jericho Nursery’s Gardening Calendar. Find monthly planting tips, care reminders, and key dates for garden success in Albuquerque."
  />

  <meta
    property="og:title"
    content="Gardening Calendar – Plan Your Garden Year-Round"
  />
  <meta
    property="og:description"
    content="Access Jericho Nursery’s Gardening Calendar for seasonal tips, planting schedules, and expert guidance tailored to Albuquerque’s unique climate."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/gardeningcalendar" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/gardeningcalendar" />
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