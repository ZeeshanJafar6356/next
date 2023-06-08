import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} href="/home">
            Home
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} href="/">
            NextJs
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} href="/contact">
            Contact
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} href="/products">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
