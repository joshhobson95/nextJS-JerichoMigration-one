// pages/sales.js

import React from 'react';
import axios from 'axios';
import styles from './sales.module.css'
import Head from 'next/head';

export async function getServerSideProps() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [salesRes, promotionsRes] = await Promise.all([
      axios.get(`${apiUrl}/api/sales`),
      axios.get(`${apiUrl}/api/promotions`)
    ]);

    const salesData = salesRes.data;
    const promotionsData = promotionsRes.data;

    return {
      props: {
        salesData,
        promotionsData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        salesData: [],
        promotionsData: [],
      },
    };
  }
}



function Sales({ salesData, promotionsData }) {
  
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
    <main className={styles.sales}>
      <Head>
        <title>Shop This Week's Deals at Jericho Nursery</title>
        <meta name="description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
        <meta property="og:title" content="Shop High-Quality Plants at Jericho Nursery" />
        <meta property="og:description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
      </Head>


      <div className={styles.sales_welcome}>
        <h1>Sales & Promotions</h1>
        <p>For the Week</p>
        <p>({currentWeekRange})</p>
      </div>

      <div className={styles.sales_body}>

          <div className={styles.promotions_body_header}>
          <h2>New Product</h2>

            <div className={styles.promotions_card_container}> 
    {promotionsData.map((item) => (
      <div className={styles.promotions_card} key={item.name}> 
        <div className={styles.promotions_card_top}>
          <img src={item.img_url} className={styles.promotions_card_img} alt='' />
        </div>
        <div className={styles.promotions_card_bottom}>
          <h2>{item.name}</h2>   
          <h3>{item.description}</h3>   
          <h4>{item.price}</h4>
          <h4>{item.discount}</h4>

          <div className={styles.promotions_card_overflow}>
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



















        <div className={styles.sales_body_header}>
          <h2>Sales this week</h2>
        </div>

        <div className={styles.sales_card_container}>
          {salesData.map((item) => (
            <div className={styles.sales_card} key={item.salestableid}> 
              <div className={styles.sales_card_top}>
                <img src={item.img_url} className={styles.sales_card_img} alt={item.name} />
              </div>
              <div className={styles.sales_card_bottom}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                <h3>{item.discount}</h3>

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
    </main>
  );
}

export default Sales;
