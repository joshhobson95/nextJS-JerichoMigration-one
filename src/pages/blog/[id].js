// pages/blog/[id].js
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from './blog.module.css'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;



export default function SingleBlog({ blog }) {
  const router = useRouter()
  // Fallback for fallback: true if you ever enable it
  if (router.isFallback) {
    return <p>Loading…</p>
  }

  return (
    <div className={styles.Single_Blog_Post}>
      <Head>
        <title>{blog.title} | Jericho Nursery</title>
        <meta
        name="description"
        content="Explore blog posts from Jericho Nursery, packed with gardening tips, local insights, and more."
      />
    <meta
    property="og:title"
    content={`${blog.title} | Jericho Nursery`}/>
      <meta
        property="og:description"
        content="Get the latest from Jericho Nursery on gardening in New Mexico."
      />
      <meta
        property="og:image"
        content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/EvergreenContent/cashHouse.jpg"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      <link rel="canonical" href={`${baseUrl}/blog/${blog.id}`} />
      </Head>

      <div className={styles.single_blog_welcome}>
        <h1>Currently Reading:</h1>
        <h2>{blog.title}</h2>
      </div>

      <div className={styles.card_container}>
        <div className={styles.blog_body_main}>
          <div className={styles.blog_body_top}>
            <h1 className={styles.blog_title}>{blog.title}</h1>
            <span className={styles.date}>{blog.date}</span>

            {blog.img_1_url && (
              <img
                src={blog.img_1_url}
                className={styles.blog_img_1}
                alt={blog.img_1_alt_text}
              />
            )}
            {blog.img_1_captions && <p>{blog.img_1_captions}</p>}

            <div className={styles.blog_icon_1}>
              {blog.icon && <img alt="" src={blog.icon} />}
            </div>

            {blog.intro && <p className={styles.blog_text_left}>{blog.intro}</p>}

            {blog.img_2_url && (
              <img
                src={blog.img_2_url}
                className={styles.blog_img}
                alt={blog.img_2_alt_text}
              />
            )}
            {blog.img_2_captions && (
              <p className={styles.blog_bold}>{blog.img_2_captions}</p>
            )}

            <div className={styles.blog_paragraph_top}>
              {blog.body_img_1 && (
                <img
                  alt=""
                  src={blog.body_img_1}
                  className={styles.body_img_1}
                />
              )}
              {blog.span_yellow && (
                <span className={styles.span_yellow}>{blog.span_yellow}</span>
              )}

              {/* RICH TEXT */}
              {blog.body_1 && (
                <div className={styles['rich-text']}>
                  <div
                    className={styles['view ql-editor']}
                    dangerouslySetInnerHTML={{ __html: blog.body_1 }}
                  />
                </div>
              )}

              {blog.link && (
                <a href={blog.link} target="_blank" rel="noreferrer">
                  <button>Link</button>
                </a>
              )}
            </div>
          </div>

         

        <div className={styles.blog_body_mid}>
        <h1>{blog.title2}</h1> 
        <a href={`http://${blog.img_3_href}`} target="_blank" rel="noopener noreferrer">
        {blog.img_3_url && <img src={blog.img_3_url} className={styles.blog_img} alt={blog.img_3_alt_text} />}
        </a>
        {blog.img_3_captions && <p>{blog.img_3_captions}</p>}
        <br></br>
        {blog.img_4_url && <img src={blog.img_4_url} className={styles.blog_img} alt={blog.img_4_alt_text}/>}
        {blog.img_4_captions && <p className={styles.blog_bold}>{blog.img_4_captions}</p>}

        <div className={styles.blog_icon_2}>
            {blog.icon2 && <img alt='' src={blog.icon2}/> }
        </div>   

        <div className={styles.blog_paragraph_mid}>
        
            {blog.body_2 && <p className={styles.blog_text_left}>{blog.body_2}</p>}
            {blog.span_green && <span className={styles.span_green}>{blog.span_green}</span>}

            {blog.img_5_url && <img src={blog.img_5_url} className={styles.blog_img} alt={blog.img_5_alt_text}/>}
            {blog.img_5_captions && <p>{blog.img_5_captions}</p>}

        
            {blog.body_3 && <p className={styles.blog_text_left}>{blog.body_3}</p>}

                {blog.link2 && <a href={blog.link2}  target="_blank" rel="noreferrer">
                    <button>Link</button> 
                    </a>}
        </div>   

        <div className={styles.extra_content}>
            {blog.img_6_url && <img src={blog.img_6_url} className={styles.blog_img} alt={blog.img_6_alt_text}/>}
            {blog.img_6_captions && <p className={styles.blog_bold}>{blog.img_6_captions}</p>}
            {blog.img_7_url && <img src={blog.img_7_url} className={styles.blog_img} alt={blog.img_7_alt_text}/>}
            {blog.img_7_captions && <p>{blog.img_7_captions}</p>}
        </div>
        </div>



        <div className={styles.blog_body_bottom}>
        {blog.img_8_url && (
            <div className={styles.left_8}>
            <img src={blog.img_8_url} className={styles.blog_img} alt={blog.img_8_alt_text}/>
            <p>{blog.img_8_captions}</p>
            </div>
        )}
        {blog.img_9_url && (
            <div className={styles.right_9}>
            <img src={blog.img_9_url} className={styles.blog_img} alt={blog.img_9_alt_text}/>
            <p>{blog.img_9_captions}</p>
            </div>
        )}
        <div className={styles.blog_paragraph_bottom}>
            {blog.span_brown && (
            <span className={styles.span_brown}>{blog.span_brown}</span>
            )}
            {blog.body_4 && (
            <p className={styles.blog_text_left}>{blog.body_4}</p>
            )}
            <div className={styles.blog_icon_3}>
            {blog.icon3 && (
            <img alt='' src={blog.icon3} className={styles.icon3}/> 
            )}
            </div>
        </div>   
        {blog.img_10_url && <img src={blog.img_10_url} className={styles.blog_img} alt={blog.img_10_alt_text}/>}
        {blog.img_10_captions && <p>{blog.img_10_captions}</p>}




        {blog.conclusion && (
            <p className={styles.blog_text_left}>{blog.conclusion}</p>
        )}




        </div>

        </div>
      </div>


    </div>
  )
}

// This fetches the JSON at request‑time and passes it in as `blog`
export async function getServerSideProps({ params }) {
    try {
      const res = await axios.get(
        `https://jericho-server-eb9k.onrender.com/singleblog/${params.id}`
      )
  
      return { props: { blog: res.data } }
    } catch (err) {

      return { notFound: true }
    }
  }
  
