'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import RotatingBanner from './RotatingBanner';
import logo from '../../../public/assets/Logo.png';
import styles from './header.module.css';

function Header() {
  const [isMobile, setIsMobile] = useState(null);  // Start with null to indicate "hydrating"

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 500);
      };

      handleResize(); // Run immediately to set initial state

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // If the state is still null (during hydration), we don't render anything yet
  if (isMobile === null) {
    return <div>Loading...</div>;  // Or any loading UI you prefer
  }

  return (
    <div className={styles.header_wrapper}>
      {isMobile ? (
        <div>
          <NavBarMobile />
          <div className={styles.mobile_photo_banner}>
            <RotatingBanner />
            <Link href='/'>
              <div className={styles.logo_div}>
                <img
                  className={styles.mobile_banner_logo} 
                  src={logo.src} 
                  alt='logo' 
                />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <NavBarDesktop />
      )}
    </div>
  );
}

export default Header;
