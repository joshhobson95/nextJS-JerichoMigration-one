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
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/jh-restoration-images/Jericho-logo.png"
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
            Welcome to Jericho Nursery’s Gardening Calendar—your month-by-month guide to growing and thriving in Albuquerque’s unique high desert climate. From planting tips to seasonal care, we help you stay in tune with what your garden needs, all year long.
                </p>
        </div>
   

        <FC />





    </main>
  )
}

export default GardeningCalendar