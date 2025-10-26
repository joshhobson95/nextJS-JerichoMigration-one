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
          <button onClick={closeModal} className={styles.close_button}>x</button>
          <h1>Store Hours</h1>

          Mon-Fri: 9:00 am - 5:00 pm 
          <br></br> Sat: 9:00 am - 5:00 pm | Sun: 11:00 am - 5:00 pm
        
       
        </dialog>
      )}
    </div>
  );
};

export default HoursButton;
