'use client';
import Link from 'next/link';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import RotatingBanner from '../RotatingBanner/RotatingBanner';
import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';
import styles from './HeaderStyles.module.css';

function Header() {
  return (
    <div className={styles.header_wrapper}>
      {/* Mobile Header */}
      <div className={styles.mobile_header}>
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

      {/* Desktop Header */}
      <div className={styles.desktop_header}>
        <NavBarDesktop />
      </div>
    </div>
  );
}

export default Header;
