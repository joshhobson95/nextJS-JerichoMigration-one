// pages/blog/index.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Loading from '../../../public/svgs/Loading';
import styles from './blog.module.css'

export default function BlogList() {
  const [blogs,    setBlogs]    = useState([])
  const [loading,  setLoading]  = useState(true)
  const [offset,   setOffset]   = useState(0)
  const [count,    setCount]    = useState(0)
  const [pages,    setPages]    = useState(0)
  const [active,   setActive]   = useState(0)

  const perPage = 5



  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/blog?offset=${offset}`)
      .then((res) => {
        setBlogs(res.data.rows)
        setCount(res.data.count)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [offset])

  useEffect(() => {
    setPages(Math.ceil(count / perPage))
    setActive(Math.floor(offset / perPage))
  }, [count, offset])

  const mapButtons = () => {
    const btns = []
    const maxVis = 3
    let start = Math.max(0, active - Math.floor(maxVis / 2))
    let end = Math.min(start + maxVis, pages)
    if (end - start < maxVis) start = Math.max(0, end - maxVis)
  
    // Skip rendering the first page if it's already rendered manually
    if (start === 0) start = 1
  
    for (let i = start; i < end; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => setOffset(i * perPage)}
          className={active === i ? styles.active_button : ''}
        >
          {i + 1}
        </button>
      )
    }
  
    return btns
  }
  

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })




  return (
    <div className={styles.Blog}>
    <Head>
      <title>Jericho Nursery Blog - Gardening Tips, Plant Care, and More</title>
      <meta name='description' content='Discover helpful gardening tips, plant care advice, and more on the Jericho Nursery blog.' />
      <meta property='og:title' content='Jericho Nursery Blog - Gardening Tips, Plant Care, and More' />
      <meta property='og:description' content='Discover helpful gardening tips, plant care advice, and more on the Jericho Nursery blog.' />
      <meta property='og:image' content='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg' />
      <meta property='og:type' content='website' />

    </Head>

    <div className={styles.blog_welcome}>
      <h1>Blog and Gallery</h1>
      <p>
        Level up your gardening skills with Jericho Nursey's blog. Get expert tips and techniques for a thriving garden that will impress all.
        Don't miss out on this valuable resource to unlock your green thumb's true potential.
      </p>
    </div>

 

    {loading ? (
      <div className={styles.loading_anim}>
        <Loading />
      </div>
    ) : (
      <div className={styles.card_container}>
        {blogs.length > 0 ? (
          blogs.map((blogPost) => (
            <div className={styles.small_blog_card} key={blogPost.id}>
              <div className={styles.small_blog_card_top}>
                <img src={blogPost.img_1_url} className={styles.small_blog_photo} alt={blogPost.img_1_alt_text} />
              </div>
              <div className={styles.small_blog_card_bottom}>
                <h3>{blogPost.title}</h3>
                <div className={styles.text_overflow}>
                  <p>{blogPost.intro}</p>
                </div>
                <div className={styles.small_blog_card_button}>
                  <Link href={`/blog/${blogPost.blogtableid}`}>
                    <button>Read More</button>
                  </Link>
                  <p>{blogPost.id}</p>
                </div>
                <div className={styles.small_blog_card_span}>
                  <span>{blogPost.date}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          blogData[0]?.rows?.map((blogPost) => (
            <div className={styles.small_blog_card} key={blogPost.id}>
              <div className={styles.small_blog_card_top}>
                <img src={blogPost.img_1_url} className={styles.small_blog_photo} alt={blogPost.img_1_alt_text} />
              </div>
              <div className={styles.small_blog_card_bottom}>
                <h3>{blogPost.title}</h3>
                <div className={styles.text_overflow}>
                  <p>{blogPost.intro}</p>
                </div>
                <div className={styles.small_blog_card_button}>
                  <Link href={`/blog/${blogPost.blogtableid}`}>
                    <button>Read More</button>
                  </Link>
                  <p>{blogPost.id}</p>
                </div>
                <div className={styles.small_blog_card_span}>
                  <span>{blogPost.date}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    )}
          <div className={styles.blog_snav_buttons}>
        <button onClick={scrollTop}>Back to Top</button>
      </div>
      <div className={styles.page_numbers}>
        <button
          onClick={() => {
            setOffset(0);
            setActive(0);
          }}
          className={active === 0 ? styles.active_button : ''}
        >
          1
        </button>
        {mapButtons(pages)}
      </div>

 
  </div>
  );
}
