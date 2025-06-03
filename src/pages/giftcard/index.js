import React from 'react';
import styles from './giftcard.module.css';
import GiftCardIcon from '../../../public/svgs/GiftCardIcon';
import Head from 'next/head';

function GiftCard() {
  return (
    <main className={styles.GiftCard_Main}>
   <Head>
  <title>Gift Cards | Thoughtful Gardening Gifts from Jericho Nursery</title>

  <meta
    name="description"
    content="Give the gift of gardening! Purchase Jericho Nursery gift cards for any occasion—perfect for plant lovers, special events, or just because."
  />

  <meta property="og:title" content="Gift Cards | Thoughtful Gardening Gifts from Jericho Nursery" />
  <meta
    property="og:description"
    content="Give the gift of gardening! Purchase Jericho Nursery gift cards for any occasion—perfect for plant lovers, special events, or just because."
  />
  <meta
    property="og:image"
    content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jerichonursery.com/giftcard" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://www.jerichonursery.com/giftcard" />
</Head>


      <div className={styles.gc_main_welcome}>
        <h1>Give the gift of Growing</h1>
        <div className={styles.giftcard_svg}>
          <GiftCardIcon />
        </div>
      </div>

      <div className={styles.gc_main_body}>
        <h2 className={styles.gc_h2}>Gift Card Checkout</h2>            
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={styles.paypal_form}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="XKK5TS48D6QA6" />
          <table className={styles.paypal_table}>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Pick your level of thoughtfulness:" />
                  Pick your level of thoughtfulness:
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Thoughtful:">Thoughtful: $25.00 USD</option>
                    <option value="Wonderful:">Wonderful: $50.00 USD</option>
                    <option value="Too Kind:">Too Kind: $75.00 USD</option>
                    <option value="PERFECT!">PERFECT! $100.00 USD</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <div className={styles.ppbanner_container}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' alt='' className={styles.paypal_banner}/>
          </div>
          <div className={styles.ppbutton_container}>
            <button className={styles.paypal_button}>Buy Now</button>
          </div>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" draggable="false" />
        </form> 
      </div>
    </main>
  );
}

export default GiftCard;
