import React, { useState, useRef } from 'react';
import styles from './hoursbutton.module.css';

const HoursButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className={styles.hours_button}>Hours</button>

      {isOpen && (
        <dialog
          open
          ref={dialogRef}
          onClick={handleOutsideClick}
          className={styles.modal}
        >
          <button onClick={closeModal} className={styles.close_button}>Close</button>

          <table className={styles.schedule_table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              
              <tr><td>June 2–6</td><td>Mon–Fri</td><td>8:00 AM – 5:00 PM</td></tr>
              <tr><td>June 7</td><td>Saturday</td><td>8:00 AM – 5:00 PM</td></tr>
              <tr><td>June 8</td><td>Sunday</td><td>11:00 AM – 5:00 PM</td></tr>      
            </tbody>
          </table>
        </dialog>
      )}
    </div>
  );
};

export default HoursButton;
