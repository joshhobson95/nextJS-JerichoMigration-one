import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import icon1 from '../../../../public/assets/Flower.png'
import axios from 'axios'
import styles from './newintheblog.module.css'
import Image from 'next/image'

function NewintheBlog() {

    const [blogData, setBlogData] = useState([])
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios
          .get(`https://jericho-server-eb9k.onrender.com/blog/${offset}`)
          .then((res) => {
            setBlogData([res.data]);
          })
       
          .catch((err) => {
            console.log(err);
          });
      }, [offset]);



  


    return (
      <section className={styles.home_container_outer}>
    <div className={styles.nb_container}>
        <div className={styles.home_container_header}>
            <div className={styles.hc_icon}>
<Image
  src={icon1}
  className={styles.c_icon}
  alt=""
  width={100} 
  height={100} 
/>
            </div>
            <div className={styles.home_container_header_text}>
                <h2>New In the Blog</h2>
            </div>

            <div className={styles.blog_card_container}>
                {blogData && blogData[0] && blogData[0].rows && (
                    <div className={styles.blog_card_container_img}>
                        <img
                            src={blogData[0].rows[0].img_1_url}
                            className={styles.home_blog_card}
                            alt={blogData[0].rows[0].img_1_alt_text}
                        />
                    </div>
                )}

                <div className={styles.home_blog_text}>
                    {blogData && blogData[0] && blogData[0].rows && (
                        <div className={styles.home_blog_text_title}>
                            <h3>Read this Week's Newest Blog Post:</h3>
                            <p className={styles.blog_name}>{blogData[0].rows[0].title}</p>
                        </div>
                    )}
                    {blogData && blogData[0] && blogData[0].rows && (
                        <div className={styles.blog_intro_container}>
                            <p className={styles.blog_intro}>{blogData[0].rows[0].intro}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.hpb_button}>
                <Link href='/blog'>
                    <button className={styles.nb_button}>Take me to Blog</button>
                </Link>
            </div>
        </div>
    </div>
</section>

)}

export default NewintheBlog;