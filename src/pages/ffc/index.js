import React from 'react'
import Head from 'next/head'
import newffc from '../../../public/assets/newnewffc.png'
import plant from '../../../public/assets/newffc/plant.png'
import vip from '../../../public/assets/newffc/vip2.png'
import purchase from '../../../public/assets/newffc/purchase.png'
import account from '../../../public/assets/newffc/account.png'
import instagram from '../../../public/assets/newffc/insta.png'
import facebook from '../../../public/assets/newffc/facebook.png'
import profile from '../../../public/assets/newffc/profile.png'
import like from '../../../public/assets/newffc/like.png'
import refer from '../../../public/assets/newffc/refer.png'
import styles from './ffc.module.css'

function FFC() {


  return (
    <main className={styles.ffc}>
<Head>
        <title>Frequent Flower Club - Jericho Nursery</title>
        <meta name="description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:title" content="Frequent Flower Club - Exclusive Benefits and Discounts" />
        <meta property="og:description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Head>



    <div className={styles.ffc_welcome}>
        <div>
        <img className={styles.newffc_logo} src={newffc.src} alt=''/>
        </div>
        <div className={styles.welcome_text}>
            <h1>Frequent Flower Club</h1>
                <p>
     A new and improved points system, with all the same connectedness you know and love
               </p>
        </div>
     </div>
     
            <div className={styles.ffc_body}>
                        <div className={styles.ffc_body_top}>
                            <div className={styles.header_container}>
                        <h2>Welcome to Jericho's Frequent Flower Club</h2>
                            </div>
                        <div className={styles.ffc_introduction}>
                            <img className={styles.jericho_ffc_flower} src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/main-Flower' alt='Jericho FFC homepage'/>

                            <div className={styles.ffc_intro_paragraph}>
                                <h2>Introducing Jericho's new FFC Rewards Program</h2>
                                <p>Every purchase you make, every interaction with us – it all counts towards unlocking amazing rewards. Plus, with our special bonuses, reaching new levels of loyalty means unlocking even more exclusive perks.</p>
                                <p>
                                Whether you're a longtime supporter or just joining our community, there's never been a better time to start earning rewards. Join now!</p>
                            </div>
               

                <div className={styles.ffc_rewards}>

                    <div className={styles.rewards}>
                        <h3>Rewards</h3>

                <div className={styles.rewards_inner_horizantal}>
                        <div className={styles.reward_1}>
                            <img className={styles.plant_ffc} src={plant.src} alt='Jericho Rewards Program'  />
                            <h6>$10 off</h6>
                            <span>200 points to redeem</span>
                        </div>
                        <div className={styles.reward_2}>
                        <img className={styles.plant_ffc} src={plant.src} alt='Jericho Rewards Program'  />
                            <h6>$20 off</h6>
                            <span>400 points to redeem</span>
                        </div>
                </div>
                    </div>

                    <div className={styles.rewards}>
                        <h3>VIP</h3>
        <div className={styles.rewards_inner_horizantal}>

                        <div className={styles.reward_1}>
                            <img className={styles.plant_ffc} src={vip.src} alt='Jericho Rewards Program'  />
                            <h6>$15 off</h6>
                            <span>200 points to redeem</span>
                        </div>
                        <div className={styles.reward_2}>
                        <img className={styles.plant_ffc} src={vip.src} alt='Jericho Rewards Program'  />
                            <h6>$25 off</h6>
                            <span>400 points to redeem</span>
                        </div>
                </div>
         </div>

                    <div className={styles.rewards}>
                        <h3>Ways to Earn</h3>

                        <div className={styles.earning_details}>

                            <div className={styles.earnings_main}>
                                <img className={styles.ffc_purchase} src={purchase.src} alt='Jericho_FFC'/>
                                <h4>Make a purchase</h4>
                                <span>Earn 1 point for every $1 spent in-store</span>
                            </div>
            <div className={styles.earning_horizantal}>
                    <div className={styles.earning_details_inner}>
                            <div className={styles.earnings}>
                                <img className={styles.ffc_account} src={account.src} alt='Jericho_FFC'/>
                                <h4>Create and Account</h4>
                                <span>50 points</span>
                            </div>
                            <div className={styles.earnings}>
                                <img className={styles.ffc_insta} src={instagram.src} alt='Jericho_FFC' />
                                <h4>Follow on Instagram</h4>
                                <span>20 points</span>
                            </div>
                            <div className={styles.earnings}>
                            <img className={styles.ffc_facebook} src={facebook.src} alt='Jericho_FFC' />
                                <h4>Share on Facebook</h4>
                                <span>20 points</span>
                            </div>
                    </div>


                    <div className={styles.earning_details_inner}>
                            <div className={styles.earnings}>
                            <img className={styles.ffc_profile} src={profile.src} alt='Jericho_FFC' />
                                <h4>Complete Profile</h4>
                                <span>30 points</span>
                            </div>
                            <div className={styles.earnings}>
                            <img className={styles.ffc_like} src={like.src} alt='Jericho_FFC' />
                                <h4>Like on Facebook</h4>
                                <span>20 points</span>
                            </div>
                            <div className={styles.earnings}>
                            <img className={styles.ffc_refer} src={refer.src} alt='Jericho_FFC' />
                                <h4>Refer a Friend</h4>
                                <div className={styles.refer_earning}>
                                <span>Give 10% off, Get 100 points</span>
                                <a href='https://a.marsello.com/r/f3d1d359e082c0ffc79ff1e49366'>
                                <button className={styles.ffc_referal}>
                                    Referal Link
                                </button>
                                </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                        <div className={styles.ffc_sign_up}>
                            <h3 className={styles.ffc_join}>Join Today</h3>
                            <span>Click the button below to begin setting up your account and start earning points now!</span>
                            <a href='https://app.marsello.com/Manage/Forms/SubmitForm/66557a94d7360cc839168515'>
                                <button>Sign Up</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
</main>
  )
}

export default FFC;