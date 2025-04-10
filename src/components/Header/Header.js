import Link from 'next/link';
import styles from './Header.module.css'; // Assuming you want to use CSS modules for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sales">Sales</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plantcatalog">Plant Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
