import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { useCart } from '../hooks/use-cart.js';
import products from '../products.json';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Space Jelly Shop</h1>

        <p className={styles.description}>
          The best space jellyfish swag in the universe!
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, description, image, price } = product;

            return (
              <li className={styles.card} key={id}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>{description}</p>
                  </a>
                </Link>
                <p>
                  <button
                    className={styles.button}
                    onClick={() => addToCart({ id })}
                  >
                    Add to cart
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
