'use client';
import React, { useState } from 'react';
import styles from './FlipCard.module.css';

function FlipCard({ id, name, tasks = [] }) {
  const [flipped, setFlipped] = useState(false);

  // Toggle flip on card click
  const handleClick = () => setFlipped(!flipped);

  return (
    <div className={`${styles.flip_card} ${flipped ? styles.flipped : ''}`} onClick={handleClick}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <h2>{name}</h2>
        </div>
        <div className={styles.flip_card_back}>
          <ul className={styles.flip_card_list}>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
