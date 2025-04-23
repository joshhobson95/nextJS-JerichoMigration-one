
import styles from './promotions.module.css'
import axios from 'axios';
import Head from 'next/head';





export async function getServerSideProps() {
    try {
  
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  

      const res = await axios.get(`${apiUrl}/api/promotions`);
      const promotionsData = res.data;
  
      return {
        props: { promotionsData },
 
      };
    } catch (error) {
      console.log(error);
      return { props: { promotionsData: [] } };
    }
  }








function Promotions({promotionsData}) {


  
    
    
  
  return (
<main className={styles.promotions}>

<Head>
        <title>Discover New Arrivals at Jericho Nursery</title>
        <meta name="description" content="Check out the latest products at Jericho Nursery. Discover new plants and gardening essentials to enhance your outdoor spaces." />
        <meta property="og:title" content="New Arrivals at Jericho Nursery" />
        <meta property="og:description" content="Explore the newest additions to our collection at Jericho Nursery. Find the perfect plants and gardening products to elevate your garden or home." />
</Head>

<div className={styles.promotions_welcome}>
  <h1>New Product</h1>
  <br />
</div>

<div className={styles.promotions_body}>
  <div className={styles.promotions_body_header}>
    <h2>Promotions this Week</h2>
  </div>

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
</main>

  )
}

export default Promotions;