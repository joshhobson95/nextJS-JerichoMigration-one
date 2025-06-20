import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './bullentin.module.css';

function Bulletin() {
  const [bulletins, setBulletins] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBulletins() {
      try {
        const response = await axios.get('https://jericho-server-eb9k.onrender.com/bulletin'); // use full URL if it's external
        const allBulletins = response.data;

        // Convert date strings to Date objects for reliable sorting
        const sorted = allBulletins
          .filter(b => b.date) // skip entries without a date
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setBulletins(sorted.slice(0, 3)); // take the 3 most recent
      } catch (error) {
        console.error('Failed to fetch bulletins:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBulletins();
  }, []);



  useEffect(() => {
    if (bulletins.length === 0) return;

    const interval = setInterval(() => {
      setSelectedIndex(prev => (prev + 1) % bulletins.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [bulletins]);

  if (loading) return <p className={styles.Bulletin}>Loading bulletin info...</p>;
  if (bulletins.length === 0) return null;

  const selectedBulletin = bulletins[selectedIndex];

   

  return (
    <section className={styles.Bulletin}>
      <div className={styles.bulletin_gray}>
        <h1>Announcements</h1>

        <div className={styles.bulletin_upper}>
          {bulletins.map((item, index) => (
            <div
              key={index}
              className={`${styles.bulletin_item} ${selectedIndex === index ? styles.active : ''}`}
              onClick={() => setSelectedIndex(index)}
              style={{ backgroundImage: `url(${item.img_url})` }}
            >
              <div className={styles.bulletin_overlay}>
                <h2>{item.title}</h2>
                <span>{item.date}</span>
              </div>

              {selectedIndex === index && (
                <svg
                  className={styles.bulletin_arrow}
                  viewBox="0 0 100 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
                      M 5 10
                      A 5 5 0 0 1 10 5
                      L 90 5
                      A 5 5 0 0 1 95 10
                      L 50 55
                      A 5 5 0 0 1 45 55
                      Z
                    "
                    fill="#4F7358"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className={styles.bulletin_lower}>
          <h3 className={styles.selected_bulletin_title}>{selectedBulletin.title}</h3>
          <p className={styles.selected_bulletin_paragraph}>{selectedBulletin.paragraph}</p>
       {selectedBulletin.link && (
      <a
        className={styles.selected_bulletin_link}
        href={selectedBulletin.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Here for more
      </a>
    )}
        </div>
      </div>
    </section>
  );
}

export default Bulletin;
