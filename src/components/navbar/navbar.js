'use client';

import { useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Mobile: hamburger + logo + icons */}
        <div className={styles.topBar}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            hamburger btn
          </button>
          <a href="/" className={styles.logo}>LOGO icon</a>
          <a href="/" className={styles.logo}>LOGO</a>
          <div className={styles.icons}>
            <button aria-label="Search">search btn</button>
            <button aria-label="Wishlist">wishlist btn</button>
            <button aria-label="Cart">cart btn</button>
            <button aria-label="Account">account btn</button>
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">STORIES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>HOME</span>
        <span> / </span>
        <span>SHOP</span>
      </div>
    </header>
  );
}