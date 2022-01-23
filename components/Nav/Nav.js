import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../Nav/Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Space Jelly Shop</p>
      <p className={styles.navCart}>
        <Link href='cart'>
          <a>
            <FaShoppingCart /> ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
