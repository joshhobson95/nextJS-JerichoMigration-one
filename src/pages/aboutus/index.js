import React from 'react';
import styles from './aboutus.module.css'; // Assuming you renamed your CSS file to AboutUs.module.css
import rickandjen from '../../../public/assets/Rick&Jen.png'
import bys from '../../../public/assets/BeforeYouSaySomething.jpg'
import StaffPictures from './StaffPictures';
import Bios from './Bios';
import Quality from '../../../public/svgs/Quality';
import Selection from '../../../public/svgs/Selection';
import Service from '../../../public/svgs/Service';
import Knowledge from '../../../public/svgs/Knowledge';

function Aboutus() {
  return (
    <div className={styles.AboutUs}> 

      <div className={styles.aboutus_welcome}>
        <h1> About Us here at Jericho</h1>
        <p>
          A God given family owned company that offers an exceptional experience that hopes and works to exceed expectations through Quality, Selection, Service, and Knowledge.
        </p>
      </div>

      <div className={styles.aboutus_body_main}>

        <div className={styles.aboutus_body_top}>
          <h1>Meet Our Team</h1>
          <StaffPictures />
          <Bios />

          <p className={styles.staff_p}>
            To our returning employees, we send warm greetings and a big thank you for joining us for another season. We truly appreciate your experience and loyalty. To our new employees, we hope to share with you the excitement of learning your job, meeting new people, and lots of fun working with plants, trees, and flowers.
          </p>

        </div>

        <div className={styles.aboutus_body_mid}>
          <h1>About the Owners</h1>
          <div className={styles.about_the_owners}>

            <img src={rickandjen.src} alt="Rick and Jen Hobson" className={styles.rickandjen} />

            <p className={styles.ato_p}>
              Gardening expert Richard Hobson and his wife Jennifer, Landscape Designer, have assembled an outstanding staff of experienced nursery professionals. They started Jericho Nursery in 2005.

              Along with a great staff, Jericho offers the city's most versatile selection of perennial and annual color, an outstanding variety of shade and ornamental trees, fruit trees, evergreens, flowering shrubs, grasses, soils, fertilizers, pesticides, garden art and all your seasonal garden needs.

              Jericho offers custom formulated selection of granular and soluble fertilizers, designed specifically for Albuquerque's alkaline soils. We also feature a tremendous plant pharmacy with a large selection of organic fertilizers, pesticides and herbicides as well as a wide range of non-organic safe products to combat just about anything one might find in their garden or lawn that doesn't belong there.

              We welcome hearing your ideas about improving our operations. Here's to a successful season and to you for doing your part to make Jericho the best nursery in Albuquerque, and making Albuquerque and the surrounding communities more beautiful!
            </p>

          </div>

        </div>

        <div className={styles.aboutus_body_bottom}>
          <h1>Where we Shine</h1>

          <div className={styles.values}>
            <div className={styles.values_column}>
              <h3>Quality</h3>
              <Quality />
            </div>
            <div className={styles.values_column}>
              <h3>Selection</h3>
              <Selection />
            </div>
            <div className={styles.values_column}>
              <h3>Service</h3>
              <Service />
            </div>
            <div className={styles.values_column}>
              <h3>Knowledge</h3>
              <Knowledge />
            </div>
          </div>

          <div className={styles.bys}>
            <h2 className={styles.bys_header}> This is a story about four people named Everybody, Somebody, Anybody and Nobody. </h2>
            <div className={styles.bys_pic_container}>
              <img src={bys.src} alt="Great Advice from Jericho Nursery" className={styles.bys_pic} />
            </div>
            <div>
              <p>
                There was an important job to be done and Everybody was sure that Somebody would do it. Anybody could have done it, but Nobody did it. Somebody got angry about that because it was Everybody’s job. Everybody thought Anybody could do it, but Nobody realized that Everybody wouldn’t do it. It ended up that Everybody blamed Somebody when Nobody did what Anybody could have.
              </p>
            </div>
          </div>

          <h2 className={styles.ct_h2}>Customer Testimonials</h2>

          <div>
            <p>
              Let me show you.
              Let me get it for you.  
              Where is your car?
            </p>
          </div>

          <div className={styles.ct_border}>
            <div className={styles.quote_svg}>

            </div>

            <p>
              "I shop at Jericho Nursery for my gardening needs. I have shopped there since I first arrived in the valley in 2005. More recently, I also have the occasional opportunity to help a bit with the weekly newsletter, as was the case this week. And, as usual, I shopped.

              Why Jericho?

              I like it here! The product selection is robust, the nursery is aesthetically pleasant AND artfully organized, which means that I can find what I need. On the rare occasion that I don’t find what I need, I ask someone. Anyone. The answer? “Let me get it for you.”

              Sometimes, I know what I want and don’t know the common name. “I bought it here last year. It’s a really pretty hanging basket thing with pink flowers and round leaves.” Not terribly specific, or scientific. Again, I ask someone. The answer? “Let me show you.”

              On at least one occasion, I have visited without any specific need beyond a stroll through the current selection. On one such visit, I found more than was likely to fit in my vehicle. As I scratched my head over this predicament, I heard a voice. “Where is your car?” (Seriously? Help to my CAR?!!) So rare, and so appreciated.

              I have also wondered, “How do I treat this bug/fungus/disease?” Easy fix. Snip a sample, put it in a plastic bag, and bring it in for inspection and diagnosis. This has NEVER failed! I get a great product recommendation, advice about its application, and I depart with hope in my heart and a keen sense of relief.

              So, ask me again: why Jericho? Answer: Why would I shop anywhere else?"
            </p>
            <div className={styles.ct_border_bottom}>
              <div className={styles.quote2_svg}>

              </div>
            </div>
            <span>
              Sandy Rea, Gardening Angel fan
            </span>
          </div>

          <div className={styles.ct_border}>
            <div className={styles.quote_svg}>

            </div>

            <p>
              "I recently had the most delightful experience at Jericho Nursery! From the moment I stepped foot into their enchanting garden center, I was greeted with warm smiles and an abundance of plant knowledge. The staff was incredibly friendly and eager to assist me in finding the perfect plants for my garden. Their extensive selection of healthy and vibrant plants left me spoilt for choice. With their expert guidance, I was able to create a stunning oasis right in my backyard. Jericho Nursery has definitely become my go-to destination for all things gardening. Their exceptional customer service and high-quality plants have won me over, and I can't wait to return for my next green adventure!"
            </p>
            <div className={styles.ct_border_bottom}>
              <div className={styles.quote2_svg}>

              </div>
            </div>
            <span>
              Gage Goeglein, Gardening Angel fan
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Aboutus;
