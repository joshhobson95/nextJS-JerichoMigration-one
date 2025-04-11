'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import RotatingBanner from '../RotatingBanner/RotatingBanner';
import logo from '../../../public/assets/Logo.png';
import styles from './header.module.css';


function Header() {
  const [isMobile, setIsMobile] = useState(null); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 500);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  if (isMobile === null) {
    return <div>Loading...</div>; 
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
