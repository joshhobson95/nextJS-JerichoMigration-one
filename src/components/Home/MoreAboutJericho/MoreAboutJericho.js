import React, {useState, useRef, useEffect} from 'react'
import maj from '../../../../public/assets/MajCollage.png'
import styles from './moreaboutjericho.module.css'



function MoreAboutJericho() {


    const revealRef = useRef(null); 
    const [isAnimated, setIsAnimated] = useState(false); 
  

    const handleScroll = () => {
      const revealElement = revealRef.current; 
      if (revealElement) {
        const revealTop = revealElement.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 
  
        if (revealTop < windowHeight) {
            setTimeout(() => {
            setIsAnimated(true);
            }, 1000)
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <section className={styles.more_about_jericho}>
    <div className={styles.maj_1}>
        <div className={styles.welcome_maj}>
            <div className={styles.maj_header}>
                <h2>More About Jericho</h2>
            </div>
            <p>
            Welcome to Jericho Nursery, our funky little garden center in Albuquerque’s North Valley. Jericho has its own vibe, we’re a little rustic and pretty old school, but we’re savvy. We’ve got the tried-and-true products that keep the garden happy and healthy, as well as some great trendy items to pique the interest of new gardeners, and above all, the knowledge to point you in the right direction. We feel strongly that taking care of our people allows them to take better care of you, our customer, and our community. We believe that gardening is an evolutionary process with lots of trail and error, and we’re here to pull you up by your bootstraps when things go wrong and cheer you on in times of bounty. Your success is our success.
            </p>
        </div>
    </div>

    <div className={styles.left_and_right}>
        <div className={styles.maj_left}>
            <div className={styles.maj_pic_container}>
                <img src={maj.src} alt='' className={styles.maj_pic} />
            </div>
        </div>

        <div className={styles.maj_right}>
            <div className={isAnimated ? styles.r_1 : styles.r_1_before}>
                <div className={isAnimated ? styles.visible_maj : styles.reveal_content}>
                    <div className={styles.a_s_1}></div>
                </div>
                <h3>Shine Your Brightest</h3>
                <p>
                At Jericho Nursery, we believe in shining our brightest to create an atmosphere that inspires and delights our customers. We understand that visiting a garden center is not just about buying plants, but also about finding inspiration, learning new skills, and discovering the joys of gardening. That's why we take pride in maintaining unique character and a welcoming environment, showcasing our plants in an aesthetically pleasing way, and providing knowledgeable staff who are passionate about gardening. With our commitment to shining our brightest, we aim to create an oasis where customers feel at home, and where they can find everything they need to create their own beautiful outdoor space.
                </p>
            </div>

            <div className={isAnimated ? styles.r_2 : styles.r_2_before}>
                <div ref={revealRef}></div>
                <div className={isAnimated ? styles.visible_maj : styles.reveal_content}>
                    <div className={styles.a_s_2}></div>
                </div>
                <h3>Grow into something Bigger</h3>
                <p>
                We believe that gardening is not just a hobby, it's a journey. That's why we encourage our customers to grow into something bigger by providing a wide selection of plants, tools, and resources to help them achieve their gardening goals. Whether you are a seasoned gardener or just starting out, we are here to support you every step of the way. From providing advice on which plants to choose for your space, to offering workshops and seminars on gardening techniques, we are committed to helping you grow and develop your skills. So, come visit us at Jericho Nursery and let us help you grow into something bigger!
                </p>
            </div>

            <div className={isAnimated ? styles.r_3 : styles.r_3_before}>
                <div className={isAnimated ? styles.visible_maj : styles.reveal_content}>
                    <div className={styles.a_s_3}></div>
                </div>
                <h3>Solid Roots</h3>
                <p>
                Jericho Nursery has always been proud of our solid roots. Our company was founded in Albuquerque, New Mexico in 2005 with a vision to provide high-quality plants and exceptional customer service to our community. As a company with a importance on our values, we are committed to treating our customers and employees with kindness, respect, and honesty, and to living out our faith through our work. We believe that gardening is a way to connect with nature and the inner self and we strive to create an environment that reflects this belief. So, whether you are looking for a specific plant, or just want to browse our selection, we welcome you to visit us at Jericho Nursery and experience our commitment to quality and our values.
                </p>
            </div>
        </div>
    </div>
</section>

  )
}

export default MoreAboutJericho