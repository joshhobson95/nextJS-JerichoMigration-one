import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import treelogo from '../../../../public/assets/treelogo.png'
import axios from 'axios'
import styles from './promotionscontainer.module.css'

function PromotionsContainer() {

    const [promotionsData, setPromotionsData] = useState([])

    useEffect(() => {
        axios
          .get("https://jericho-server-eb9k.onrender.com/promotions")
          .then((res) => {
            setPromotionsData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);



const firstImage = promotionsData.filter((item, index) => index === 0)[0]?.img_url;
const secondImage = promotionsData.filter((item, index) => index === 1)[0]?.img_url;
const firstItem= promotionsData.filter((item, index) => index === 0)[0]?.name;
const secondItem= promotionsData.filter((item, index) => index === 1)[0]?.name;

return (
  
    <section className={styles.home_container_outer}>
    <div className={styles.home_container}>
        <div className={styles.home_container_header}>
            <div className={styles.hc_icon}>
                <img src={treelogo.src} className={styles.tree_c_icon} alt='' />
            </div>
            <div className={styles.home_container_header_text}>
                <h2>New Product</h2>
            </div>
        </div>

        <div className={styles.hc_body}>
            <div className={styles.hc_img}>
                <img src={firstImage} className={styles.home_sale_card} alt='' />
                <img src={secondImage} className={styles.home_sale_card} alt='' />
            </div>
            <div className={styles.hc_paragraph}>
                <h3>{firstItem} and {secondItem} just arrived</h3>
                <p>
                    Check out our Sales & Promotions page, showcasing our newest shipments. Come get them before they are gone!
                </p>
                <Link href='/sales'>
                    <button className={styles.hc_button}>See New Plants</button>
                </Link>
            </div>
        </div>
    </div>
</section>

  
  )
}

export default PromotionsContainer;