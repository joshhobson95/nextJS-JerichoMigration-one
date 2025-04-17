
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
<div className={styles.promotions}>

<div className={styles.promotions_welcome}>
  <h1>New Product</h1>
  <br />
</div>

<div className={styles.promotions_body}>
  <div className={styles.promotions_body_header}>
    <h1>Promotions this Week</h1>
  </div>

  <div className={styles.promotions_card_container}> 
    {promotionsData.map((item) => (
      <div className={styles.promotions_card} key={item.name}> 
        <div className={styles.promotions_card_top}>
          <img src={item.img_url} className={styles.promotions_card_img} alt='' />
        </div>
        <div className={styles.promotions_card_bottom}>
          <h1>{item.name}</h1>   
          <h3>{item.description}</h3>   
          <h2>{item.price}</h2>
          <h2>{item.discount}</h2>

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
</div>

  )
}

export default Promotions;