'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './product-card.module.css';

export default function ProductCard({ product, priority = false }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className={styles.image}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <button
          className={styles.wishlist}
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wishlisted ? '♥' : '♡'} {/* need to replace with icons later */}
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{product.title}</h2>
          <button
            className={styles.wishlistInline}
            onClick={() => setWishlisted(!wishlisted)}
            aria-label="Wishlist"
          >
            {wishlisted ? '♥' : '♡'}  {/* need to replace with icons later */}
          </button>
        </div>
        <p className={styles.pricing}>
          <a href="/login">Sign in</a> or{' '}
          <a href="/register">Create an account</a> to see pricing
        </p>
      </div>
    </article>
  );
}