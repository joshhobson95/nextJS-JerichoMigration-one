import React, { useState, useEffect } from 'react';
import styles from './popup.module.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); 
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closePopup}>
              ×
            </button>
            <h2>Welcome!</h2>
            <p>This Plant Catalog is intended for educational purposes. While we typically carry many of the plants featured here, availability may vary, and some items may not be in stock at all times.</p>
           
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
