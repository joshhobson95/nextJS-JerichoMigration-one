// pages/sales.js

import React from 'react';
import axios from 'axios';
import styles from './sales.module.css'

// Fetch sales data on the server side with getStaticProps
export async function getStaticProps() {
  try {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Fetch sales data from the API route
    const res = await axios.get(`${apiUrl}/api/sales`);
    const salesData = res.data;

    return {
      props: { salesData },
      revalidate: 60 * 60 * 24, // Cache for 24 hours, adjust as necessary
    };
  } catch (error) {
    console.log(error);
    return { props: { salesData: [] } }; // Return empty array if error occurs
  }
}

function Sales({ salesData }) {
  // Calculate the current week range
  function getCurrentWeekRange() {
    const today = new Date();

    // Set the start of the week to the current Thursday
    const startOfCurrentWeek = new Date(today);
    startOfCurrentWeek.setDate(today.getDate() - (today.getDay() + 3 + 7) % 7);

    // Set the end of the week to the next Friday
    const endOfCurrentWeek = new Date(startOfCurrentWeek);
    endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 8);

    const startDate = startOfCurrentWeek.toLocaleDateString();
    const endDate = endOfCurrentWeek.toLocaleDateString();
    return `${startDate} - ${endDate}`;
  }

  const currentWeekRange = getCurrentWeekRange();

  return (
    <div className={styles.sales}>


      <div className={styles.sales_welcome}>
        <h1>This Week's Specials</h1>
        <p>For the Week</p>
        <p>({currentWeekRange})</p>
      </div>

      <div className={styles.sales_body}>
        <div className={styles.sales_body_header}>
          <h1>Sales this week</h1>
        </div>

        <div className={styles.sales_card_container}>
          {salesData.map((item) => (
            <div className={styles.sales_card} key={item.id}> 
              <div className={styles.sales_card_top}>
                <img src={item.img_url} className={styles.sales_card_img} alt={item.name} />
              </div>
              <div className={styles.sales_card_bottom}>
                <h1>{item.name}</h1>
                <h3>{item.description}</h3>
                <h2>{item.price}</h2>
                <h2>{item.discount}</h2>

                <div className={styles.sales_card_overflow}>
                  <div>
                    <span>{item.tagline}</span>
                  </div>
                  <span>{item.start_date}--</span>
                  <span>{item.expiration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sales;
